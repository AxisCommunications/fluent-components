# React components for use React & Fluent v9

[![ci](https://github.com/AxisCommunications/fluent-components/actions/workflows/verify.yml/badge.svg)](https://github.com/AxisCommunications/fluent-components/actions/workflows/verify.yml)

**Warning**: _The code and packages developed here should be considered experimental. Some Fluent UI v9 components are release candidates, and some are still in beta/alpha, and others are not in a usable state or not developed yet._

**React**: The components work with a range of React versions as specified in the peer dependencies. However, we've experienced type errors in slots when using a `@types/react` version other than 17 (which is the version used by Fluent v9).

The React packages are based on the `@fluentui/react-*` **v9** packages.

- [`@axiscommunications/fluent-theme`](theme/docs/README.md) - an Axis branded theme
- [`@axiscommunications/fluent-icons`](icons/docs/README.md) - custom Axis icons
- [`@axiscommunications/fluent-hooks`](hooks/docs/README.md) - react hooks to use with fluent components
- [`@axiscommunications/fluent-styles`](styles/docs/README.md) - styles to use with fluent components
- [`@axiscommunications/fluent-stepper`](components/stepper/docs/README.md) - a stepper component for building e.g. wizards
- [`@axiscommunications/fluent-slider`](components/slider/docs/README.md) - various slider components
- [`@axiscommunications/fluent-topbar`](components/topbar/docs/README.md) - top level bar that hosts app and organization selection and menus
- [`@axiscommunications/fluent-password-input`](components/password-input/docs/README.md) - a password input that lets you reveal the password
- [`@axiscommunications/fluent-illustrations`](illustrations/docs/README.md) - axis branded illustrations

## Usage

1. Add registry to `.npmrc`, `.yarnrc` or similar, as well as your GitHub token:

   ```
   @axiscommunications:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=TOKEN
   ```

   If using `.yarnrc.yml` this would instead be:

   ```
   npmScopes:
     axiscommunications:
       npmRegistryServer: "https://npm.pkg.github.com"
       npmAuthToken: TOKEN
   ```

2. Add the `@fluentui/react-components`, `@fluentui/react-icons`, `@axiscommunications/fluent-theme` and `@axiscommunications/fluent-icons` packages.

   ```sh
   npm add @fluentui/react-components @fluentui/react-icons @axiscommunications/fluent-theme @axiscommunications/fluent-icons
   ```

3. Start using Fluent UI v9 in and the Axis theme in in your application

   ```tsx
   import React from "react";
   import { FluentProvider } from "@fluentui/react-components";
   import { axisDarkTheme } from "@axiscommunications/fluent-theme";
   import { createRoot } from "react-dom/client";

   const container = document.getElementById("root");
   const root = createRoot(container!);

   root.render(
     <React.StrictMode>
       <FluentProvider theme={axisDarkTheme}>
         <App />
       </FluentProvider>
     </React.StrictMode>
   );
   ```

## Contributing

Make sure you have node and pnpm installed.

1. Clone this repository

   ```sh
   git clone git@github.com:AxisCommunications/fluent-components.git
   ```

2. Install all dependencies

   ```sh
   pnpm install
   ```

3. Build all packages

   ```sh
   pnpm build
   ```

4. Run examples

   ```sh
   pnpm dev
   ```

### Development

The following is one example of how to use a local version while developing.

1. Application project's package.json:
   `"@axiscommunications/fluent-topbar": "portal:path/to/repo/top-bar"`
2. Application project's esbuild config: `{ preserveSymlinks: true }`
3. `path/to/repo/top-bar/node_modules`: `rm react -rf`

This setup avoids bundling multiple copies of React. The application project's dev server
will pick up changes only after running `pnpm build`, not when source files change.

## Release a new version

1. Checkout a new temporary branch for the release PR (e.g. `rel`)

   ```sh
   git fetch
   git switch -c rel origin/main
   ```

2. Create release commit on the branch

   ```sh
   pnpm exec release major|minor|patch
   ```

   or to release an alpha version

   ```sh
   pnpm exec release premajor|preminor|prepatch|prerelease
   ```

3. Push release branch

   ```sh
   git push origin rel
   ```

4. Create a PR on GitHub, and when it's merged, it will automatically
   deploy NPM packages and create a GitHub release.
   Make sure the `rel` branch is removed after the PR is merged,
   that makes it easier to re-use it later on.

### Notes

When bumping @fluentui/react-components it is preferred to regenerate theme-tokens due to potential updates to tokens.
These generated files are used for applications not able to run @fluentui, but still be able to use the themes.

```sh
pnpm --filter @axiscommunications/fluent-theme tokens:runall
```
