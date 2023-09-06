#!/usr/bin/env python3

import argparse
import json

import utils

parser = argparse.ArgumentParser()
parser.add_argument(
    "level",
    metavar="LEVEL",
    nargs="?",
    default="prerelease",
    choices=[
        "major",
        "minor",
        "patch",
        "premajor",
        "preminor",
        "prepatch",
        "prerelease",
    ],
)
args = parser.parse_args()

with open("package.json", "r") as f:
    data = json.load(f)
    current_version = data["version"]
    next_version = utils.cmd(
        [
            "pnpm",
            "semver",
            current_version,
            "--increment",
            args.level,
            "--preid",
            "alpha",
        ]
    )
    next_tag = f"v{next_version}"

    # Generate new commit
    print(f" - Update versions to {next_version}")
    utils.cmd(["pnpm", "version", next_version, "--no-git-tag-version"])
    utils.cmd(["pnpm", "-r", "exec" , "pnpm" , "version", next_version, "--no-git-tag-version"])

    print(" - Update changelog")
    changeset = utils.cmd(["pnpm", "changelog", "--write", "CHANGELOG.md"])
    with open("changeset.md", "w") as f:
        f.write(changeset)

    print(" - Create release commit")
    utils.cmd(["git", "add", "-u"])
    utils.cmd(["git", "commit", "-m", f"release: {next_tag}"])
