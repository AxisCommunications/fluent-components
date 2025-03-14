import { ILLUSTRATION_DARK, ILLUSTRATION_LIGHT } from "./constants.js";
import { checkDirectory, clearDirectory, copyFiles } from "./file-processor.js";
import { parseParamsGenerateSVG } from "./params.js";

const config = parseParamsGenerateSVG();
main(config);

function main({ from, to }) {
  console.trace("running generate-svg");
  console.info(`from: ${from}, to: ${to}`);
  if (!checkDirectory(from)) {
    console.warn("folder to process doesn't exist", from);
    process.exit(1);
  }
  if (checkDirectory(to, true)) {
    clearDirectory(to);
  }

  const filesCopied = copyFiles(from, to, filter);
  console.info(`svg copied ${filesCopied}`);
  console.trace("... generate-svg done!");
}

function filter(file) {
  if (
    file.endsWith(`${ILLUSTRATION_LIGHT}.svg`) ||
    file.endsWith(`${ILLUSTRATION_DARK}.svg`)
  ) {
    return true;
  }
  return false;
}
