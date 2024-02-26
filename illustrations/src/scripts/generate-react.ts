import { FILE_PREFIX } from "../utils/constants";
import {
  parseParamsGenerateREACT,
  TGenerateREACTConfig,
} from "../utils/params";
import {
  checkDirectory,
  clearDirectory,
  getFileName,
  readAllFiles,
} from "./file-processor";
import { LOG_LEVEL, Logger } from "./logger";
import { camelCase, upperFirst } from "lodash";

const logger = new Logger("generate-react", () => LOG_LEVEL.INFO);

const config = parseParamsGenerateREACT();
main(config);

function main({ from, to }: TGenerateREACTConfig) {
  logger.info("running generate-react");
  if (!checkDirectory(from)) {
    logger.warn("folder to process doesn't exist", from);
    process.exit(1);
  }
  if (checkDirectory(to, true)) {
    clearDirectory(to);
  }

  processFolder(from);
}

function processFolder(from: TGenerateREACTConfig["from"]) {
  for (const file of readAllFiles(from)) {
    const fileName = getFileName(file);

    console.log("file: ", toIconName(fileName));
  }
}

function toIconName(fileName: string) {
  // remove extension .svg
  const filenameWithoutExtension = fileName.split(".")[0];
  const filenameWithoutPrefix = filenameWithoutExtension.replace(
    FILE_PREFIX,
    ""
  );

  const filenameAsCamelCase = camelCase(filenameWithoutPrefix);
  return upperFirst(filenameAsCamelCase);
}
