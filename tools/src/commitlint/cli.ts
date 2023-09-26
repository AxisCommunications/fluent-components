#!/usr/bin/env node

import {
  binary,
  command,
  option,
  optional,
  positional,
  run,
  string,
} from "cmd-ts";

import { messageLint, rangeLint } from "./commitlint.js";

const cli = command({
  name: "changelog",
  description: `Generate a changelog for a range of commits.`,
  args: {
    message: option({
      description: "conventional commit message to verify",
      long: "message",
      short: "m",
      type: optional(string),
    }),
    range: positional({
      type: optional(string),
      description:
        "git revision range of commits to verify messages for (default if no message is provided)",
      displayName: "range",
    }),
  },

  handler(args) {
    if (args.message !== undefined) {
      messageLint(args.message);
    } else {
      rangeLint(args.range);
    }
  },
});

await run(binary(cli), process.argv);
