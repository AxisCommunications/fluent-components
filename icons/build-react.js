import fs from "node:fs";
import path from "node:path";

import yargs from "yargs";

const argv = yargs.boolean("selector").default("selector", false).argv;

const SRC_PATH = argv.source;
const DEST_PATH = argv.dest;

if (!SRC_PATH) {
  throw new Error("Icon source folder not specified by --source");
}
if (!DEST_PATH) {
  throw new Error("Output destination folder not specified by --dest");
}

if (!fs.existsSync(DEST_PATH)) {
  fs.mkdirSync(DEST_PATH);
}

const pattern = /export const (\w+) =/g;
const iconNameRegexp = new RegExp(pattern, "g");
// const iconNameRegexp = new RegExp("const .*Icon =", "g");

const toExports = (chunk) =>
  (chunk.match(iconNameRegexp) ?? []).map((m) => m.split(" ")[2]).join(", ");

processFiles(SRC_PATH, DEST_PATH);

function processFiles(src, dest) {
  /** @type string[] */
  const indexContents = [];

  // make file for resizeable icons
  const iconPath = path.join(dest, "icons");
  const iconContents = processFolder(src, dest, true);

  if (fs.existsSync(iconPath)) {
    fs.rmSync(iconPath, { recursive: true, force: true });
  }
  fs.mkdirSync(iconPath);

  iconContents.forEach((chunk, i) => {
    const chunkFileName = `chunk-${i}`;
    const chunkPath = path.resolve(iconPath, `${chunkFileName}.tsx`);
    indexContents.push(
      `export { ${toExports(chunk)} } from './icons/${chunkFileName}'`
    );
    fs.writeFileSync(chunkPath, chunk);

    try {
      fs.writeFileSync(chunkPath, chunk);
      console.log("resizeable icon file written successfully.");
    } catch (err) {
      console.error("Error writing file:", err);
    }
  });

  // make file for sized icons
  const sizedIconPath = path.join(dest, "sizedIcons");
  const sizedIconContents = processFolder(src, dest, false);
  if (fs.existsSync(sizedIconPath)) {
    fs.rmSync(sizedIconPath, { recursive: true, force: true });
  }
  fs.mkdirSync(sizedIconPath);

  sizedIconContents.forEach((chunk, i) => {
    const chunkFileName = `chunk-${i}`;
    const chunkPath = path.resolve(sizedIconPath, `${chunkFileName}.tsx`);
    indexContents.push(
      `export { ${toExports(chunk)} } from './sizedIcons/${chunkFileName}';`
    );
    fs.writeFileSync(chunkPath, chunk);

    try {
      fs.writeFileSync(chunkPath, chunk);
      console.log("sized icon file written successfully.");
    } catch (err) {
      console.error("Error writing file:", err);
    }
  });

  const indexPath = path.join(dest, "index.ts");
  // Finally add the interface definition and then write out the index.
  indexContents.push(
    "export type { AxisIconProps } from './utils/FluentIconsProps.types'"
  );
  indexContents.push("export { default as wrapIcon } from './utils/wrapIcon'");
  indexContents.push(
    "export { default as bundleIcon } from './utils/bundleIcon'"
  );
  indexContents.push("export { useIconState } from './utils/useIconState'");
  indexContents.push(
    "export { iconFilledClassName, iconRegularClassName } from './utils/constants'"
  );
  indexContents.push(
    "export { createFluentIcon } from './utils/createFluentIcon'"
  );

  try {
    fs.writeFileSync(indexPath, indexContents.join("\n"));
    console.log("index file written successfully.");
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

/**
 * Process a folder of svg files and convert them to React components, following naming patterns for the FluentUI System Icons
 * @param {string} srcPath
 * @param {boolean} resizable
 * @returns { string [] } - chunked icon files to insert
 */
function processFolder(srcPath, _destPath, resizable) {
  var files = fs.readdirSync(srcPath);
  /** @type string[] */
  const iconExports = [];

  files.forEach(function (file, _index) {
    var srcFile = path.join(srcPath, file);
    if (fs.lstatSync(srcFile).isDirectory()) {
      // for now, ignore subdirectories/localization, until we have a plan for handling it
      // Will likely involve appending the lang/locale to the end of the friendly name for the unique component name
      // var joinedDestPath = path.join(destPath, file)
      // if (!fs.existsSync(joinedDestPath)) {
      //   fs.mkdirSync(joinedDestPath);
      // }
      // indexContents += processFolder(srcFile, joinedDestPath)
    } else {
      if (resizable && !file.includes("20")) {
        return;
      }
      let iconName = file.substring(0, file.length - 4); // strip '.svg'

      iconName = iconName.replace("ic_axis_", ""); // strip ic_axis_
      iconName = resizable ? iconName.replace("20", "") : iconName;
      // We want them to be PascalCase, so access_time would become AccessTime here
      let destFilename = iconName
        .split("_")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join("");

      let iconContent = fs.readFileSync(srcFile, { encoding: "utf8" });
      const getAttr = (key) =>
        [...iconContent.matchAll(new RegExp(`(?<= ${key}=)".+?"`, "g"))].map(
          (v) => v[0]
        );
      const width = resizable ? '"1em"' : getAttr("width")[0];
      const paths = getAttr("d").join(",");
      let jsCode = `export const ${destFilename} = (/*#__PURE__*/createFluentIcon('${destFilename}', ${width}, [${paths}]));`;
      iconExports.push(jsCode);
    }
  });

  // chunk all icons into separate files to keep build reasonably fast
  /** @type string[][] */
  const iconChunks = [];
  while (iconExports.length > 0) {
    iconChunks.push(iconExports.splice(0, 500));
  }

  for (const chunk of iconChunks) {
    chunk.unshift(
      `import { createFluentIcon } from "../utils/createFluentIcon";`
    );
  }

  /** @type string[] */
  const chunkContent = iconChunks.map((chunk) => chunk.join("\n"));

  return chunkContent;
}
