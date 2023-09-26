import { execSync } from "node:child_process";
const re = /^(?<type>build|chore|ci|docs|feat|fix|perf|refactor|release|revert|style|test)(?<scope>\(\w+\)?((?=:\s)|(?=!:\s)))?(?<breaking>!)?(?<subject>:\s.*)?|^(?<merge>Merge \w+)$/gm;
function isConventionalCommitMessage(msg) {
    const match = msg.match(re);
    return match !== null && match[0] === msg;
}
function log(range) {
    return execSync(`git rev-list ${range}`).toString().trim().split("\n");
}
function message(sha) {
    return execSync(`git log -1 --format=%s ${sha}`).toString().trim();
}
export function rangeLint(range = "HEAD~..HEAD") {
    let rc = 0;
    const commits = log(range);
    console.log("verifying conventional commit message format:");
    for (const commit of commits) {
        const msg = message(commit);
        if (!isConventionalCommitMessage(msg)) {
            console.log("[FAIL]", msg);
            rc = 1;
        }
        else {
            console.log("[OK]", msg);
        }
    }
    process.exit(rc);
}
export function messageLint(msg) {
    let rc = 0;
    if (!isConventionalCommitMessage(msg)) {
        console.log("[FAIL]", msg);
        rc = 1;
    }
    else {
        console.log("[OK]", msg);
    }
    process.exit(rc);
}
