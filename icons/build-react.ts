import svgr from "@svgr/core";
import fs from "fs";
import path from "path";
import yargs from "yargs";

const iconNameRegexp = new RegExp("const .*Icon =", "g");

const toExports = (chunk: string) =>
  (chunk.match(iconNameRegexp) ?? [])
    .map((m: string) => m.split(" ")[1].replace("Icon", ""))
    .join(", ");

const processFiles = (src: string, dest: string) => {
  const indexContents: string[] = [];

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
  });

  const indexPath = path.join(dest, "index.ts");
  // Finally add the interface definition and then write out the index.
  indexContents.push(
    "export type { AxisIconProps } from './utils/axis-icon.types';"
  );
  indexContents.push("export { default as wrapIcon } from './utils/wrapIcon';");
  indexContents.push(
    "export { default as bundleIcon } from './utils/bundleIcon';"
  );
  indexContents.push("export { useIconState } from './utils/useIconState';");
  indexContents.push(
    "export { iconFilledClassName, iconRegularClassName} from './utils/constants';"
  );

  fs.writeFileSync(indexPath, indexContents.join("\n"));
};

/**
 * Process a folder of svg files and convert them to React components, following naming patterns for the FluentUI System Icons
 * @param {string} srcPath
 * @param {boolean} oneSize
 * @returns { string [] } - chunked icon files to insert
 */
const processFolder = (
  srcPath: string,
  destPath: string,
  oneSize: boolean
): string[] => {
  // These options will be passed to svgr/core
  // See https://react-svgr.com/docs/options/ for more info
  const svgrOpts = {
    template: fileTemplate,
    expandProps: "start", // HTML attributes/props for things like accessibility can be passed in, and will be expanded on the svg object at the start of the object
    svgProps: { className: "{className}" }, // In order to provide styling, className will be used
    replaceAttrValues: { "#212121": "{primaryFill}" }, // We are designating primaryFill as the primary color for filling. If not provided, it defaults to null.
    typescript: true,
    icon: true,
  };

  const svgrOptsSizedIcons = {
    template: fileTemplate,
    expandProps: "start", // HTML attributes/props for things like accessibility can be passed in, and will be expanded on the svg object at the start of the object
    svgProps: { className: "{className}" }, // In order to provide styling, className will be used
    replaceAttrValues: { "#212121": "{primaryFill}" }, // We are designating primaryFill as the primary color for filling. If not provided, it defaults to null.
    typescript: true,
  };

  const iconExports: string[] = [];
  const files = fs.readdirSync(srcPath);
  for (const file of files) {
    const srcFile = path.join(srcPath, file);
    if (fs.lstatSync(srcFile).isDirectory()) {
      // for now, ignore subdirectories/localization, until we have a plan for handling it
      // Will likely involve appending the lang/locale to the end of the friendly name for the unique component name
      // const joinedDestPath = path.join(destPath, file)
      // if (!fs.existsSync(joinedDestPath)) {
      //   fs.mkdirSync(joinedDestPath);
      // }
      // indexContents += processFolder(srcFile, joinedDestPath)
    } else {
      if (oneSize && !file.includes("20")) {
        continue;
      }
      let iconName = file
        // strip '.svg'
        .substring(0, file.length - 4)
        // strip ic_axis_
        .replace("ic_axis_", "");
      iconName = oneSize ? iconName.replace("20", "") : iconName;
      // We want them to be camelCase, so access_time would become accessTime here
      const destFilename = iconName
        .split("_")
        .map((p) =>
          p.replace(p.substring(0, 1), p.substring(0, 1).toUpperCase())
        )
        .join("");

      const iconContent = fs.readFileSync(srcFile, { encoding: "utf8" });

      const jsxCode = oneSize
        ? svgr.sync(iconContent, svgrOpts, { filePath: file })
        : svgr.sync(iconContent, svgrOptsSizedIcons, {
          filePath: file,
        });
      const jsCode = `
const ${destFilename}Icon = (props: AxisIconProps) => {
  const { fill: primaryFill = 'currentColor', className } = props;
  return ${jsxCode};
}

export const ${destFilename} = /*#__PURE__*/wrapIcon(/*#__PURE__*/${destFilename}Icon, '${destFilename}');
`;
      iconExports.push(jsCode);
    }
  }

  // chunk all icons into separate files to keep build reasonably fast
  const iconChunks: string[][] = [];
  while (iconExports.length > 0) {
    iconChunks.push(iconExports.splice(0, 500));
  }

  for (const chunk of iconChunks) {
    chunk.unshift(`import wrapIcon from "../utils/wrapIcon";`);
    chunk.unshift(`import { AxisIconProps } from "../utils/axis-icon.types";`);
    chunk.unshift(`import React from "react";`);
  }

  /** @type string[] */
  const chunkContent = iconChunks.map((chunk) => chunk.join("\n"));

  return chunkContent;
};

const fileTemplate = (
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx, exports }
) => {
  const plugins = ["jsx", "typescript"];
  const tpl = template.smart({ plugins });

  componentName.name = componentName.name.substring(3);
  componentName.name = componentName.name.replace("IcAxis", "");

  return jsx;
};

const argv = yargs.argv as { source?: string; dest?: string };

if (!argv.source) {
  throw new Error("Icon source folder not specified by --source");
}
if (!argv.dest) {
  throw new Error("Output destination folder not specified by --dest");
}

if (!fs.existsSync(argv.dest)) {
  fs.mkdirSync(argv.dest);
}

processFiles(argv.source, argv.dest);
