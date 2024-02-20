import { parseParamsGenerateSVG, TGenerateSVGConfig } from "../utils/params";
import { checkDirectory, clearDirectory, copyFiles } from "./file-processor";

const ILLUSTRATION_LIGHT = "_dark";
const ILLUSTRATION_DARK = "_light";

const config = parseParamsGenerateSVG();
main(config);

function main({ from, to }: TGenerateSVGConfig) {
  clearDirectory(to);
  checkDirectory(to, true);
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
