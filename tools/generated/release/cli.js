#!/usr/bin/env node
import { binary, command, positional, run, string } from "cmd-ts";
import { release } from "./release.js";
const changesetCli = command({
  name: "changelog",
  description: `Generate a changelog for a range of commits.`,
  args: {
    increment: positional({
      type: string,
      description: "semver version increment",
      displayName: "increment",
    }),
  },
  handler(args) {
    release(args.increment);
  },
});
await run(binary(changesetCli), process.argv);
