import { ILLUSTRATION_DARK, ILLUSTRATION_LIGHT } from "../utils/constants";
import { parseParamsGenerateSVG, TGenerateSVGConfig } from "../utils/params";
import { checkDirectory, clearDirectory, copyFiles } from "./file-processor";
import { LOG_LEVEL, Logger } from "./logger";

const logger = new Logger("generate-svg", () => LOG_LEVEL.INFO);

const config = parseParamsGenerateSVG();
main(config);

function main({ from, to }: TGenerateSVGConfig) {
  logger.info("running generate-svg");
  if (!checkDirectory(from)) {
    logger.warn("folder to process doesn't exist", from);
    process.exit(1);
  }
  if (checkDirectory(to, true)) {
    clearDirectory(to);
  }

  copyFiles(from, to, filter);
}

function filter(file: string) {
  if (
    file.endsWith(`${ILLUSTRATION_LIGHT}.svg`)
    || file.endsWith(`${ILLUSTRATION_DARK}.svg`)
  ) {
    return true;
  }
  return false;
}
