import { commitUrl, compareUrl, gitLogFromRange, shortSha } from "./git.js";
const GroupTitles = {
    build: "👷 Build",
    chore: "🚧 Maintenance",
    ci: "🚦 Continous integration",
    docs: "📝 Documentation",
    feat: "✨ Features",
    fix: "🐛 Bug fixes",
    perf: "🏎️ Performance",
    refactor: "♻️ Refactoring",
    revert: "⏪️ Reverts",
    style: "💄 Styling",
    test: "🧪 Test",
};
const GroupKeys = new Set(Object.keys(GroupTitles));
export function changeset({ date, name, range, scope, url }) {
    return [
        changesetHeader({ date, name, range, url }),
        changesetBody({ range, scope, url }),
    ].join("");
}
function changesetHeader({ date, name, range, url }) {
    if (url !== undefined) {
        return `## [${name}](${compareUrl(url, range)}) (${date})\n`;
    }
    return `## ${name} (${date})\n`;
}
function changesetBody({ range, scope, url }) {
    const outputChunks = [];
    const groups = {};
    for (const [sha, msg] of gitLogFromRange(range)) {
        const cc = parseConventionalCommitMessage(msg);
        if (scope !== undefined && cc.scope !== scope) {
            continue;
        }
        if (groups[cc.group] === undefined) {
            groups[cc.group] = [];
        }
        groups[cc.group].push([sha, cc]);
    }
    for (const group of GroupKeys) {
        if (groups[group] === undefined) {
            continue;
        }
        outputChunks.push(`\n### ${GroupTitles[group]}\n\n`);
        for (const [sha, cc] of groups[group]) {
            const scopePrefix = scope === undefined && cc.scope !== undefined
                ? ` **${cc.scope}**:`
                : "";
            const breakingPrefix = cc.breaking ? ` **BREAKING**` : "";
            const link = url !== undefined
                ? `([${shortSha(sha)}](${commitUrl(url, sha)}))`
                : `(${shortSha(sha)})`;
            outputChunks.push(`  -${scopePrefix}${breakingPrefix} ${cc.title} ${link}\n`);
        }
    }
    return outputChunks.join("");
}
function parseConventionalCommitMessage(msg) {
    try {
        const match = msg.match(/^([^:!(]+)(?:\(([^)]+)\))?(!)?: (.*)$/);
        if (match === null) {
            throw new Error("no matches found");
        }
        const [, group, scope, breaking, title] = match;
        return {
            group,
            scope,
            breaking: breaking !== undefined,
            title,
        };
    }
    catch {
        process.stderr.write(`invalid conventional commit message: ${msg}\n`);
    }
    return {
        group: "chore",
        breaking: false,
        title: msg,
    };
}
