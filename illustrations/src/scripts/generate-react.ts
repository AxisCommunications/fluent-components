import { DEFAULT_CHUNK_SIZE, FILE_PREFIX } from "../utils/constants";
import {
  parseParamsGenerateREACT,
  TGenerateREACTConfig,
} from "../utils/params";
import {
  checkDirectory,
  clearDirectory,
  readAllFiles,
  writeToFile,
} from "./file-processor";
import { LOG_LEVEL, Logger } from "./logger";
import { camelCase, upperFirst } from "lodash";
import path from "path";

const logger = new Logger("generate-react", () => LOG_LEVEL.INFO);

const config = parseParamsGenerateREACT();
main(config);

function main({ from, to }: TGenerateREACTConfig) {
  logger.trace("running generate-react");
  logger.info(`from: ${from}, to: ${to}`);
  if (!checkDirectory(from)) {
    logger.warn("folder to process doesn't exist", from);
    process.exit(1);
  }
  if (checkDirectory(to, true)) {
    clearDirectory(to);
  }

  const illustrationsDestFolder = path.join(to, "illustrations");
  checkDirectory(illustrationsDestFolder, true);

  logger.info("processing illustration svg:s...");
  const illustrations = processFolder(from);
  logger.info("illustrations to be react-ified:", illustrations.length);

  logger.info("dividing into chunks...");
  const illustrationsChunks = toChunks(illustrations);
  logger.info("chunks to be written :", illustrationsChunks.length);

  logger.info("writing chunks into files...");
  const indexContents = writeChunksToFile(
    illustrationsChunks,
    illustrationsDestFolder
  );

  logger.info("writing index file...");
  createIndexFile(to, indexContents);

  logger.trace("...generate-react done!");
}

function createIndexFile(dest: string, illustrationContents: string[]) {
  const indexPath = path.join(dest, "index.ts");
  const indexContent: string[] = [...illustrationContents];

  indexContent.push(
    "export type { AxisIllustrationProps } from './utils/types'"
  );

  indexContent.push(
    "export { bundleIllustration } from './utils/bundleIllustration'"
  );

  indexContent.push(
    "export type { TBundleIllustration, TBundleIllustrationVariant} from './utils/bundleIllustration'"
  );

  writeToFile(indexPath, indexContent.join("\n"));
}

function writeChunksToFile(chunks: string[], dest: string): string[] {
  const indexContents: string[] = [];
  chunks.forEach((chunk, i) => {
    const chunkFileName = `chunk-${i}`;
    const chunkPath = path.resolve(dest, `${chunkFileName}.tsx`);
    indexContents.push(
      `export { ${toExports(chunk)} } from './illustrations/${chunkFileName}'`
    );
    writeToFile(chunkPath, chunk);
  });

  return indexContents;
}

function toExports(chunk: string) {
  const pattern = /export const (\w+) =/g;
  const iconNameRegexp = new RegExp(pattern, "g");
  return (chunk.match(iconNameRegexp) ?? [])
    .map((m: string) => m.split(" ")[2])
    .join(", ");
}

function toChunks(content: string[], chunkSize = DEFAULT_CHUNK_SIZE): string[] {
  const chunks: string[][] = [];

  while (content.length > 0) {
    chunks.push(content.splice(0, chunkSize));
  }

  for (const chunk of chunks) {
    chunk.unshift(
      `import { createFluentIllustration } from "../utils/createFluentIllustration";`
    );
  }

  const chunkContent = chunks.map((chunk) => chunk.join("\n"));
  return chunkContent;
}

function processFolder(from: TGenerateREACTConfig["from"]): string[] {
  const illustrations: string[] = [];
  for (const file of readAllFiles(from)) {
    const illustrationName = toIllustrationName(file.fileName);
    const fileContentAsString = `\`${file.content}\``;
    const jsCode = `export const ${illustrationName} = (/*#__PURE__*/createFluentIllustration('${illustrationName}', ${fileContentAsString}));`;
    illustrations.push(jsCode);
  }
  return illustrations;
}

function toIllustrationName(fileName: string) {
  // remove extension .svg
  const filenameWithoutExtension = fileName.split(".")[0];
  const filenameWithoutPrefix = filenameWithoutExtension.replace(
    FILE_PREFIX,
    ""
  );

  return upperFirst(camelCase(filenameWithoutPrefix));
}
