# Copilot Instructions — fluent-components

## Project Overview

- **pnpm monorepo** with all packages scoped `@axiscommunications/fluent-*`, released together at the same version
- React 18+ with **Fluent UI v9** (`@fluentui/react-components`) and TypeScript strict mode
- **Biome** for linting and formatting (NOT ESLint or Prettier) — config at root `biome.json`
- **esbuild** for ESM bundles + **tsc** for type declarations
- **vitest** + `@testing-library/react` for tests

## Repo Structure & Where Things Live

### `components/` — UI component packages

Each subdirectory is a separate pnpm workspace package:

- `components/slider/` — `Slider`, `RangeSlider`
- `components/stepper/` — `Stepper`, `StepperDialog`
- `components/topbar/` — `ApplicationDrawer`, `ApplicationMenu`, `ProfileMenu`, `OrganizationMenu`
- `components/password-input/` — `PasswordInput`
- `components/empty-view/` — `DialogEmptyView`, `MainEmptyView`, `PanelEmptyView`

Every component package follows this layout:

```
<component>/
├── src/          # Source code
│   ├── index.ts  # Barrel exports (components + types)
│   ├── *.tsx     # Component implementation
│   ├── *.types.ts
│   └── *.styles.ts
├── lib/          # Build output (esbuild ESM + .d.ts)
├── docs/
├── package.json
├── tsconfig.json
└── tsconfig.build.json
```

Some components have sub-folders inside `src/` for sub-components, context, and hooks.

### `hooks/` — Shared React hooks

- `useMediaQuery` — responsive breakpoint hook
- `usePageController` — pagination hook

### `styles/` — Shared style modules

Reusable style exports: `main-menu`, `navigation`, `static`, `tab-list`, `table` — each in its own subfolder with `.styles.ts` files.

### `icons/` — Icon library

- `assets/` — Source SVG files
- `src/components/` — Generated React icon components
- `build-svg.js` — Node.js script to generate SVG fonts (yargs CLI)
- `build-react.js` — Node.js script to generate React components from SVGs (yargs CLI)
- Uses `@griffel/react` for icon styling (not `makeStyles` from Fluent)

### `illustrations/` — Illustration library

- `assets/` — Source SVG files (light/dark variants)
- `scripts/` — Build pipeline scripts:
  - `generate-svg.js` (filter/copy SVGs) → `svgo` (optimize) → `generate-react.js` (chunked React components)
- `src/illustrations/` — Generated React illustration components
- Depends on `@axiscommunications/fluent-theme` (workspace) for theme-aware rendering

### `theme/` — Theme definitions & token generation

- Exports: `axisDarkTheme`, `axisLightTheme`, `axisBlueDarkTheme`, `axisBlueLightTheme`
- Token generation via **style-dictionary** — outputs ESM, CJS, CSS custom properties, JSON
- Source: `src/themes/`, `src/tokens/`, `src/hooks/`
- Regenerate tokens: `pnpm --filter @axiscommunications/fluent-theme tokens:runall`

### `examples/` — Vite demo app & stories

- `src/stories/<component-name>/` — Story pages (one folder per component)
- `src/components/story/` — Shared story infrastructure (`StoryPage`, `StorySection`, code accordion, scroll-spy navigation)
- `src/routing/` — Route definitions, route metadata, scroll-to-anchor hook
- `src/components/navigation-menu/` — Sidebar navigation
- `system-test/` — Playwright system tests

### `tools/` — Internal CLI tools

- `changelog` — generate changelogs from git commit ranges
- `commitlint` — validate conventional commit format
- `release` — semver version bumping + release commit creation
- Source in `src/`, compiled output in `generated/`

### `.github/` — CI & automation

- `workflows/verify.yml` — main CI: commit lint, format, lint, build, test, unused deps
- `workflows/publish.yml` — auto-publish to npm on release commit merge
- `workflows/verify-icons.yml`, `verify-illustrations.yml`, `verify-tokens.yml` — asset pipelines
- `dependabot.yml`, `CODEOWNERS`

### Root config files

- `biome.json` — linting & formatting rules
- `tsconfig.base.json` — shared TypeScript config (strict, ESNext, react-jsx)
- `pnpm-workspace.yaml` — workspace package globs
- `package.json` — root scripts and shared dev dependencies

## Component Patterns

- React functional components; some use `React.forwardRef`
- Styling: `makeStyles` + `mergeClasses` from `@fluentui/react-components`, using Fluent design `tokens`
- Separate files per concern: `.types.ts` for types, `.styles.ts` for styles, component `.tsx` for logic
- Class names prefixed `axis-ComponentName` (e.g., `axis-Slider`, `axis-Stepper`)
- Barrel `index.ts` per package exporting components and types
- Some components (e.g., slider) use a Fluent-style decomposition with `useComponent_unstable()` hooks, render functions, and slot/context patterns — but this is not a universal convention

## Commands & Scripts

### Root-level

| Command | Purpose |
|---------|---------|
| `pnpm build` | Build all packages |
| `pnpm dev` | Start examples app (Vite) |
| `pnpm check` | Format check + lint all packages |
| `pnpm test` | Run all test suites |
| `pnpm format` | Auto-format with Biome |

### Per-package (standard across all packages)

| Script | Runs |
|--------|------|
| `build` | `build:types && build:esm` |
| `build:esm` | `esbuild --format=esm --bundle --sourcemap --packages=external` |
| `build:types` | `tsc -p tsconfig.build.json` |
| `lint` | `tsc --noEmit && biome check` |
| `test` | `vitest run` |

## How to Add a Story / Example Page

1. Create the story folder and example files:
   ```
   examples/src/stories/<component-name>/
   ├── <component-name>-page.tsx
   └── examples/
       └── my-example.tsx
   ```

2. Each example file exports the component AND a string version of the code:
   ```tsx
   export function MyExample() {
     return <MyComponent ... />;
   }
   export const MyExampleAsString = `...`;
   ```

3. The page file uses `StoryPage` + `useExampleWithNavigation` with a `pageData[]` array:
   ```tsx
   import { StoryPage } from "../../components/story/story-page";
   import { pageData, useExampleWithNavigation } from "../../components/story/story.utils";
   ```

4. Wire up the route — touch these 4 files:
   - `examples/src/routing/routes.ts` — add route constant
   - `examples/src/routing/route-map.tsx` — add metadata (label, group, category, ghInfo)
   - `examples/src/App.tsx` — import page component, add to `routeElements` record
   - `examples/src/components/navigation-menu/navigation-menu.tsx` — add `<NavSubItem>` entry

## Release & CI

- **Conventional commits** enforced via commitlint: `type(scope)?: message`
  - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, etc.
- Release: `pnpm exec release major|minor|patch`
- CI runs on every PR: commit lint → format check → lint → build → test → unused deps check
- Merging a release commit auto-publishes all packages to npm

## Coding Conventions

- 2-space indentation, 80-character line width (Biome)
- No unused imports or variables — enforced as errors by both Biome and TypeScript (`noUnusedLocals`, `noUnusedParameters`)
- React JSX transform — no `import React` needed for JSX, but required when using `React.forwardRef` or other React namespace APIs
- `@fluentui/*` and `react` are **peer dependencies** in component packages, not direct dependencies
- Internal workspace packages referenced via pnpm `workspace:` protocol
