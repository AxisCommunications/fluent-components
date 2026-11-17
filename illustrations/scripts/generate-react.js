import path from "path";
import { FILE_PREFIX } from "./constants.js";
import {
  checkDirectory,
  clearDirectory,
  readAllFiles,
  writeToFile,
} from "./file-processor.js";
import { parseParamsGenerateREACT } from "./params.js";

const config = parseParamsGenerateREACT();
main(config);

function main({ from, to }) {
  console.trace("running generate-react");
  console.info(`from: ${from}, to: ${to}`);
  if (!checkDirectory(from)) {
    console.warn("folder to process doesn't exist", from);
    process.exit(1);
  }
  if (checkDirectory(to, true)) {
    clearDirectory(to);
  }

  const illustrationsDestFolder = path.join(to, "illustrations");
  checkDirectory(illustrationsDestFolder, true);

  console.info("processing illustration svg:s...");
  const illustrations = processFolder(from);
  console.info("illustrations to be react-ified:", illustrations.length);

  console.info("grouping light/dark variants into modules...");
  const modules = toModules(illustrations);
  console.info("modules to be written :", modules.length);

  console.info("writing modules into files...");
  const indexContents = writeModulesToFile(modules, illustrationsDestFolder);

  console.info("writing index file...");
  createIndexFile(to, indexContents);

  console.trace("...generate-react done!");
}

function createIndexFile(dest, illustrationContents) {
  const indexPath = path.join(dest, "index.ts");
  const indexContent = [...illustrationContents];

  indexContent.push(
    "export type { AxisIllustrationProps } from './utils/types.js'"
  );

  indexContent.push(
    "export { bundleIllustration, bundleIllustrationSmart } from './utils/bundleIllustration.js'"
  );

  indexContent.push(
    "export type { TBundleIllustration, TBundleIllustrationVariant, TBundleIllustrationSmart} from './utils/bundleIllustration.js'"
  );

  writeToFile(indexPath, indexContent.join("\n"));
}

/**
 * One module per illustration (light + dark variant), so that consumers can
 * import or lazy load a single illustration through the `./<kebab-name>`
 * subpath export instead of pulling in the whole set.
 */
function writeModulesToFile(modules, dest) {
  const indexContents = [];
  for (const { fileName, variants, hasPair, baseName } of modules) {
    const exportNames = variants.map((v) => v.name);
    const lines = [
      `import { createFluentIllustration } from "../utils/createFluentIllustration.js";`,
    ];
    if (hasPair) {
      lines.unshift(
        `import { bundleIllustrationSmart } from "../utils/bundleIllustration.js";`
      );
    }
    for (const { name, svg } of variants) {
      lines.push(
        `export const ${name} = (/*#__PURE__*/createFluentIllustration('${name}', \`${svg}\`));`
      );
    }
    if (hasPair) {
      lines.push(
        `export default /*#__PURE__*/bundleIllustrationSmart(${baseName}Dark, ${baseName}Light);`
      );
    }
    writeToFile(path.resolve(dest, `${fileName}.tsx`), lines.join("\n"));
    indexContents.push(
      `export { ${exportNames.join(", ")} } from './illustrations/${fileName}.js'`
    );
  }

  return indexContents;
}

function toModules(illustrations) {
  const byBaseName = new Map();
  for (const illustration of illustrations) {
    const baseName = illustration.name.replace(/(Dark|Light)$/, "");
    const variants = byBaseName.get(baseName) ?? [];
    variants.push(illustration);
    byBaseName.set(baseName, variants);
  }

  return [...byBaseName.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([baseName, variants]) => {
      variants.sort((a, b) => a.name.localeCompare(b.name));
      const names = variants.map((v) => v.name);
      return {
        baseName,
        fileName: toKebabCase(baseName),
        variants,
        hasPair:
          names.includes(`${baseName}Dark`) &&
          names.includes(`${baseName}Light`),
      };
    });
}

function toKebabCase(pascalCase) {
  return pascalCase.replace(/(?<!^)([A-Z])/g, "-$1").toLowerCase();
}

function processFolder(from) {
  const illustrations = [];
  for (const file of readAllFiles(from)) {
    illustrations.push({
      name: toIllustrationName(file.fileName),
      svg: file.content,
    });
  }
  return illustrations;
}

function toIllustrationName(fileName) {
  // remove extension .svg
  const filenameWithoutExtension = fileName.split(".")[0];
  const filenameWithoutPrefix = filenameWithoutExtension.replace(
    FILE_PREFIX,
    ""
  );

  return filenameWithoutPrefix
    .split("_")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}
