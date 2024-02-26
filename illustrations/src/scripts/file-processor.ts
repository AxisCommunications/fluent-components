import fs, { rmSync } from "fs";
import path from "path";

export function copyFiles(
  srcPath: string,
  destPath: string,
  filter?: (file: string) => boolean
) {
  for (const file of readAllFiles(srcPath)) {
    const filename = getFileName(file);
    const destFile = path.join(destPath, filename);
    if (!filter) {
      fs.copyFileSync(file, destFile);
      continue;
    }
    if (filter(filename)) {
      fs.copyFileSync(file, destFile);
    }
  }
}

export function checkDirectory(path: string, createIfMissing = false) {
  const exist = fs.existsSync(path);
  if (!exist && createIfMissing) {
    console.log("creating directory: ", path);
    fs.mkdirSync(path, { recursive: true });
  }
  return exist;
}

export function clearDirectory(path: string) {
  const exist = checkDirectory(path);
  if (exist) {
    for (const file of readAllFiles(path)) {
      rmSync(file);
    }
  }
}

export function* readAllFiles(dir: string): Generator<string> {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    if (file.isDirectory()) {
      yield* readAllFiles(path.join(dir, file.name));
    } else {
      yield path.join(dir, file.name);
    }
  }
}

export function getFileName(str: string) {
  return str.substring(str.lastIndexOf("/") + 1);
}
