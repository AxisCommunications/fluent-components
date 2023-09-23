# Tools

Private package providing tools for the monorepo.

Scripts are written in TypeScript, but the generated JS is committed
to the repo to avoid the need for transpilation when running them.
When adding new tools, run `pnpm run generate` and then commit everyting.
There is a `lint` step that also checks that generated code was committed.

## Release

Provides a `release` script that bumps all package versions, adds a changelog,
and creates a release commit. There is also a `changelog` script to produce a
changelog separately via the command line..
