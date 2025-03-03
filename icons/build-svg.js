import fs from "node:fs";
import path from "node:path";
import process from "node:process";

import yargs from "yargs";

const ICON_OUTLINE_STYLE = "_regular";
const ICON_FILLED_STYLE = "_filled";

const processFolder = (srcPath, destPath, folderDepth, extension) => {
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath);
  }
  fs.readdir(srcPath, (err, files) => {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }

    for (const file of files) {
      const srcFile = path.join(srcPath, file);

      fs.stat(srcFile, (error, stat) => {
        if (error) {
          console.error("Error stating file.", error);
          return;
        }

        if (stat.isDirectory()) {
          const folderName = srcFile.substring(
            srcFile.lastIndexOf(path.sep) + 1
          );
          let locPath = destPath;
          if (
            folderDepth === 1 &&
            folderName.toUpperCase() !== extension.toUpperCase()
          ) {
            locPath = path.join(locPath, folderName);
          }
          processFolder(srcFile, locPath, folderDepth + 1, extension);
          return;
        } else if (file.startsWith(".")) {
          // Skip invisible files
          return;
        } else if (file.startsWith("_")) {
          // Skip invalid file names
          return;
        } else if (
          !file.endsWith(`${ICON_OUTLINE_STYLE}.${extension}`) &&
          !file.endsWith(`${ICON_FILLED_STYLE}.${extension}`)
        ) {
          // Only include icons in the desired configs
          return;
        }

        const destFile = path.join(destPath, file);
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath);
        }
        fs.copyFileSync(srcFile, destFile);
      });
    }
  });
};

const argv = yargs.argv;

if (!argv.source) {
  throw new Error("Icon source folder not specified by --source");
}
if (!argv.dest) {
  throw new Error("Output destination folder not specified by --dest");
}
if (!argv.extension) {
  throw new Error("Desired icon extension not specified by --extension");
}

processFolder(argv.source, argv.dest, 0, argv.extension);
