import { execSync } from "child_process";
import fs from "fs";
import path from "path";

import {
  binary,
  boolean,
  command,
  flag,
  option,
  optional,
  run,
  string,
} from "cmd-ts";

const changelog = command({
  name: "changelog",
  description: `Generate a full or partial changelog. Outputs to stdout,
with an option to additionally write to a changelog file.`,
  args: {
    workspace: option({
      defaultValue: () => ".",
      description: "workspace to determine and filter versions",
      long: "workspace",
      type: string,
    }),
    full: flag({
      defaultValue: () => false,
      description: "generate the entire changelog",
      long: "full",
      short: "f",
      type: boolean,
    }),
    write: option({
      description: "write (update) a changelog file",
      long: "write",
      short: "w",
      type: optional(string),
    }),
  },
  async handler(args) {
    const packageJsonPath = path.join(args.workspace, "package.json");
    const contents = args.full
      ? generateChangelog(packageJsonPath)
      : generateChangeset(packageJsonPath);
    process.stdout.write(contents);
    if (args.write !== undefined) {
      if (args.full) {
        fs.writeFileSync(args.write, contents);
      } else {
        updateChangelog(args.write, contents);
      }
    }
  },
});

run(binary(changelog), process.argv);

// Subcommands

function generateChangeset(pkgPath: string) {
  const toVersion = worktreeVersion(pkgPath);
  const fromVersion = committedVersion(pkgPath);
  return changeSetFromRange(fromVersion, toVersion, "HEAD");
}

function generateChangelog(pkgPath: string) {
  const outputChunks = [
    `# Changelog

All notable changes to this project will be documented in this file.
`,
  ];

  let toRev = "HEAD";
  while (existingCommit(toRev)) {
    const version = committedVersion(pkgPath, toRev);
    const parentRev = `v${version}~1`;
    if (!existingCommit(parentRev)) {
      break;
    }
    const previousVersion = committedVersion(pkgPath, parentRev);

    outputChunks.push(changeSetFromRange(previousVersion, version));

    toRev = tagFromVersion(previousVersion);
  }

  return outputChunks.join("\n");
}

function updateChangelog(changelogPath: string, changeset: string) {
  const oldChangelogChunks = fs
    .readFileSync(changelogPath)
    .toString()
    .split("\n");
  const startOfVersions = oldChangelogChunks.findIndex((chunk) =>
    chunk.startsWith("##")
  );

  const newChangelogChunks = [
    ...oldChangelogChunks.slice(0, startOfVersions),
    changeset,
    ...oldChangelogChunks.slice(startOfVersions),
  ];

  const newChangelog = newChangelogChunks.join("\n");
  fs.writeFileSync(changelogPath, newChangelog);
}

// Core

const GitHubCompareUrl =
  "https://github.com/AxisCommunications/fluent-components/compare";
const GitHubCommitUrl =
  "https://github.com/AxisCommunications/fluent-components/commit";
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
} as const;
const GroupKeys = new Set(Object.keys(GroupTitles)) as Set<
  keyof typeof GroupTitles
>;

function changeSetFromRange(
  previousVersion: string,
  version: string,
  rev?: string
) {
  const outputChunks = [];

  const prevTag = tagFromVersion(previousVersion);
  const tag = tagFromVersion(version);
  const date = rev !== undefined ? new Date().toISOString() : commitDate(tag);
  outputChunks.push(
    `## [${version}](${GitHubCompareUrl}/${prevTag}...${tag}) (${date}))\n`
  );

  const groups: Record<string, Array<[string, ConventionalCommit]>> = {};
  for (const [sha, msg] of gitLogFromRange(prevTag, rev ?? `${tag}~1`)) {
    const cc = parseConventionalCommitMessage(msg);
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
      const scope = cc.scope !== undefined ? ` **${cc.scope}**:` : "";
      const breaking = cc.breaking ? ` **BREAKING**` : "";
      const link = `([${shortSha(sha)}](${GitHubCommitUrl}/${sha}))`;
      outputChunks.push(`  -${scope}${breaking} ${cc.title} ${link}\n`);
    }
  }

  return outputChunks.join("");
}

// Conventional commits

type ConventionalCommit = {
  readonly group: string;
  readonly scope?: string;
  readonly breaking: boolean;
  readonly title: string;
};

function parseConventionalCommitMessage(msg: string): ConventionalCommit {
  try {
    const match = msg.match(/^([^:!\(]+)(?:\(([^\)]+)\))?(!)?: (.*)$/);
    if (match === null) {
      throw new Error("no matches found");
    }
    const [_, group, scope, breaking, title] = match;
    return {
      group,
      scope,
      breaking: breaking !== undefined,
      title,
    };
  } catch {
    process.stderr.write(`invalid conventional commit message: ${msg}\n`);
  }
  return {
    group: "chore",
    breaking: false,
    title: msg,
  };
}

// Git

function existingCommit(commit: string) {
  try {
    execSync(`git rev-parse -q --verify ${commit}`);
  } catch {
    return false;
  }
  return true;
}

function worktreeVersion(pkgPath: string) {
  const { version } = JSON.parse(fs.readFileSync(pkgPath).toString());
  return version;
}

function committedVersion(pkgPath: string, commit = "HEAD") {
  const { version } = JSON.parse(
    execSync(`git show ${commit}:${pkgPath}`).toString()
  );
  return version;
}

function tagFromVersion(version: string) {
  return `v${version}`;
}

function gitLogFromRange(prev: string, curr = "HEAD") {
  const logOut = execSync(
    `git log --no-merges --date-order --format="%H%x09%s" ${prev}..${curr}`
  );
  const lines = logOut.toString().trim().split("\n");
  const shaMessagePairs = lines.map((line) => line.split("\t"));
  return shaMessagePairs;
}

function shortSha(sha: string) {
  return execSync(`git log -1 --format=%h ${sha}`).toString().trim();
}

function commitDate(commit: string) {
  return execSync(`git log -1 --format=%ci ${commit}`).toString().trim();
}
