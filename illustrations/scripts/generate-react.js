import path from "path";
import { DEFAULT_CHUNK_SIZE, FILE_PREFIX } from "./constants.js";
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

  console.info("dividing into chunks...");
  const illustrationsChunks = toChunks(illustrations);
  console.info("chunks to be written :", illustrationsChunks.length);

  console.info("writing chunks into files...");
  const indexContents = writeChunksToFile(
    illustrationsChunks,
    illustrationsDestFolder
  );

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

function writeChunksToFile(chunks, dest) {
  const indexContents = [];
  chunks.forEach((chunk, i) => {
    const chunkFileName = `chunk-${i}`;
    const chunkPath = path.resolve(dest, `${chunkFileName}.tsx`);
    indexContents.push(
      `export { ${toExports(chunk)} } from './illustrations/${chunkFileName}.js'`
    );
    writeToFile(chunkPath, chunk);
  });

  return indexContents;
}

function toExports(chunk) {
  const pattern = /export const (\w+) =/g;
  const iconNameRegexp = new RegExp(pattern, "g");
  return (chunk.match(iconNameRegexp) ?? [])
    .map((m) => m.split(" ")[2])
    .join(", ");
}

function toChunks(content, chunkSize = DEFAULT_CHUNK_SIZE) {
  const chunks = [];

  while (content.length > 0) {
    chunks.push(content.splice(0, chunkSize));
  }

  for (const chunk of chunks) {
    chunk.unshift(
      `import { createFluentIllustration } from "../utils/createFluentIllustration.js";`
    );
  }

  const chunkContent = chunks.map((chunk) => chunk.join("\n"));
  return chunkContent;
}

function processFolder(from) {
  const illustrations = [];
  for (const file of readAllFiles(from)) {
    const illustrationName = toIllustrationName(file.fileName);
    const fileContentAsString = `\`${file.content}\``;
    const jsCode = `export const ${illustrationName} = (/*#__PURE__*/createFluentIllustration('${illustrationName}', ${fileContentAsString}));`;
    illustrations.push(jsCode);
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
