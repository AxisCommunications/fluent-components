import {
  parseParamsGenerateREACT,
  TGenerateREACTConfig,
} from "../utils/params";
import { checkDirectory, clearDirectory } from "./file-processor";
import { LOG_LEVEL, Logger } from "./logger";

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
}
