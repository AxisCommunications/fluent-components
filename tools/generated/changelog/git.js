import { execSync } from "node:child_process";
function sanitizeGitHubUrl(url) {
  if (new URL(url).hostname !== "github.com") {
    throw new Error("not implemented: only GitHub repositories are supported");
  }
  return url.replace(/\.git$/, "");
}
export const compareUrl = (url, range) =>
  `${sanitizeGitHubUrl(url)}/compare/${range}`;
export const commitUrl = (url, commit) =>
  `${sanitizeGitHubUrl(url)}/commit/${commit}`;
export function gitLogFromRange(range) {
  try {
    const logOut = execSync(
      `git log --no-merges --date-order --format="%H%x09%s" ${range}`
    );
    const lines = logOut.toString().trim().split("\n");
    const shaMessagePairs = lines.map((line) => line.split("\t"));
    return shaMessagePairs;
  } catch {
    console.warn(
      `git log failed on range ${range}, one of those tags probably does not exist`
    );
    return [];
  }
}
export function shortSha(sha) {
  return execSync(`git log -1 --format=%h ${sha}`).toString().trim();
}
