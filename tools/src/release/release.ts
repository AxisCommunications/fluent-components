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

function resolvePreviousTag(version: string) {
  const tag = `v${version}`;
  try {
    return sha(tag);
  } catch {
    // The tag may exist on the remote but not locally (release tags are created
    // by the publish CI on merge). Fetch tags and retry once.
    execSync(`git fetch --tags`);
  }
  try {
    return sha(tag);
  } catch {
    throw new Error(
      `release tag ${tag} not found locally or on the remote. Ensure the ` +
        `previous release was published and tagged, then run \`git fetch --tags\`.`
    );
  }
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
  const nextVersion = isPre
    ? semver.inc(version, releaseType, "alpha")
    : semver.inc(version, releaseType);
  if (nextVersion === null) {
    throw new Error(`could not increment ${version} with ${releaseType}`);
  }
  console.log(`${version} => ${nextVersion}`);

  // Resolve the previous release tag before mutating any package.json so that a
  // missing tag aborts cleanly without leaving the working tree partially bumped.
  const from = resolvePreviousTag(version);

  bumpPackages(nextVersion);

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
