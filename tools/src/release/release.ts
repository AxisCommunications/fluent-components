import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import semver from "semver";
import { changeset } from "../changelog/changeset.js";

function commit(version: string) {
  execSync(`git add -u`);
  execSync(`git commit -m "release: v${version}"`);
}

function sha(commitish: string) {
  return execSync(`git rev-parse ${commitish}`).toString().trim();
}

function bumpPackages(version: string) {
  execSync(`pnpm version --no-git-tag-version ${version}`);
  execSync(`pnpm -r exec pnpm version --no-git-tag-version ${version}`);
  execSync("pnpm format");
}

export function release(increment: string) {
  const releaseType = semver.RELEASE_TYPES.find((r) => r === increment);
  if (releaseType === undefined) {
    throw new Error(
      `unknown increment: ${increment}, expected one of ${semver.RELEASE_TYPES}`
    );
  }
  const { version, repository } = JSON.parse(
    readFileSync("package.json").toString()
  );
  const isPre = releaseType.startsWith("pre");
  const nextVersion = semver.inc(
    version,
    releaseType,
    isPre ? "alpha" : undefined
  );
  if (nextVersion === null) {
    throw new Error(`could not increment ${version} with ${releaseType}`);
  }
  console.log(`${version} => ${nextVersion}`);
  bumpPackages(nextVersion);

  const from = sha(`v${version}`);
  const to = sha("HEAD");

  const changelog = changeset({
    date: new Date().toISOString(),
    name: nextVersion,
    range: `${from}..${to}`,
    url: repository.url,
  });
  writeFileSync("CHANGELOG.md", changelog);

  commit(nextVersion);
}
