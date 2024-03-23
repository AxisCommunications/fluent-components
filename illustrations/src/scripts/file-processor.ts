import fs, { rmSync } from "fs";
import path from "path";

export function copyFiles(
  srcPath: string,
  destPath: string,
  filter?: (file: string) => boolean
) {
  let filesCopied = 0;
  for (const file of readAllFiles(srcPath)) {
    const destFile = path.join(destPath, file.fileName);
    if (!filter) {
      fs.copyFileSync(file.path, destFile);
      filesCopied++;
      continue;
    }
    if (filter(file.fileName)) {
      filesCopied++;
      fs.copyFileSync(file.path, destFile);
    }
  }
  return filesCopied;
}

export function writeToFile(dest: string, content: string) {
  fs.writeFileSync(dest, content);
}

export function checkDirectory(path: string, createIfMissing = false) {
  const exist = fs.existsSync(path);
  if (!exist && createIfMissing) {
    fs.mkdirSync(path, { recursive: true });
  }
  return exist;
}

export function clearDirectory(path: string) {
  const exist = checkDirectory(path);
  if (exist) {
    for (const file of readAllFiles(path)) {
      rmSync(file.path);
    }
  }
}

export function* readAllFiles(
  dir: string
): Generator<{ path: string; content: string; fileName: string }> {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    if (file.isDirectory()) {
      yield* readAllFiles(path.join(dir, file.name));
    } else {
      const srcFile = path.join(dir, file.name);
      yield {
        fileName: getFileName(file.name),
        path: path.join(dir, file.name),
        content: fs.readFileSync(srcFile, { encoding: "utf8" }),
      };
    }
  }
}

export function getFileName(str: string) {
  return str.substring(str.lastIndexOf("/") + 1);
}
