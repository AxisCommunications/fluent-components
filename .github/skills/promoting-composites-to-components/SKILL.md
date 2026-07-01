---
name: promoting-composites-to-components
description: >-
  Promote a storybook UI-pattern composite (examples/src/storybook/ui-patterns/components/composites/*.tsx)
  into a published @axiscommunications/fluent-* component package in this repo. USE WHEN the user wants to
  turn a demo/composite (e.g. Pagination) into a real publishable component, asks whether a component is
  "dev ready" / publishable, asks how to scaffold a new component package, or asks how to add unit tests,
  Playwright system tests, or accessibility testing the way the original repo does it. Covers the
  dev-readiness checklist, the package scaffolding recipe, vitest + Testing Library a11y patterns, the
  examples/system-test Playwright setup, and the repo's publishing/best-practice conventions.
---

# Promoting a composite into a publishable Fluent component

Goal: take a reference composite that currently lives only in the examples app
(`examples/src/storybook/ui-patterns/components/composites/*.tsx`) and turn it into
a real, releasable package under `components/<name>/`, matching the conventions of
the existing published components (slider, stepper, topbar, side-navigation,
password-input, empty-view).

## Two tiers: UI patterns vs components

This repo is intentionally split into two tiers. They are named differently on
purpose — "patterns" are not yet "components".

| Tier | Location | Owner | Status |
|------|----------|-------|--------|
| **UI patterns** (design-controlled staging) | `examples/src/storybook/ui-patterns/components/composites/*.tsx` | Design | Unpublished; the `examples` package is `"private": true`, so patterns iterate freely with no release/semver pressure. This is where the heavy lift (UX, visuals, tokens, a11y intent, variants) happens. |
| **Components** (internal source lib) | `components/<name>/` | Dev contributors | Published `@axiscommunications/fluent-*`, versioned, contract-bound. Opened up for dev contribution once the pattern is settled. |

Promotion (pattern → component) is the handoff gate between the two tiers, and the
rest of this skill is that runbook. Two distinct sign-offs gate it:

- **Design-ready** (design owns): behavior, visuals, tokens, accessibility intent,
  and variants are settled. The pattern can now be promoted.
- **Dev-ready / publishable** (dev + maintainers own): the **public API is the
  contract** — prop shape, peer deps, tests, docs, and semver impact are reviewed.
  A pattern can look perfect yet still have an awkward API (see the Pagination
  prop-surface / string-interpolation notes below), so this is a separate decision,
  not just a visual sign-off. The repo is at major v12 — breaking a published API
  is costly, so lock the API here, not in the pattern tier.

`advanced-data-grid` (`0.1.0`, `"private": true`) is the in-between case: promoted
into `components/` structurally but still gated from publishing while it stabilizes.

## 1. Decide if it should be a component at all

Promote a composite only when it is reusable, self-contained, and design-system
aligned. Good signals (use Pagination as the worked example):

- It already uses `forwardRef`, typed props, token-driven `makeStyles`, and a11y
  labels — i.e. it is written like a component, not a one-off demo.
- It depends only on Fluent peers (`@fluentui/react-components`,
  `@fluentui/react-icons`) — the same peer model every component package uses.
- It fills a real gap (e.g. Pagination pairs with the published
  `usePageController` hook in `hooks/`, which ships the logic but no UI).

Refine the API before publishing: trim oversized prop surfaces, prefer accepting a
controller object over duplicating its outputs, and replace brittle string
interpolation (`"X - Y of Z".replace(...)`) with formatter callbacks for i18n.
Also resolve overlap with existing components (e.g. advanced-data-grid already has
its own pagination — decide whether it should consume the shared component).

## 2. Dev-readiness / publishable checklist

A package is "dev ready" (installable by another developer) when ALL of:

- [ ] `components/<name>/package.json` has **no** `"private": true` (the only
      private component today is `advanced-data-grid` at `0.1.0`).
- [ ] `name` is `@axiscommunications/fluent-<name>`, `version` matches the shared
      monorepo version (all packages release together — currently `12.6.1`).
- [ ] `exports` maps `.` → `./lib/index.d.ts` (types) + `./lib/index.js` (import),
      and `files` is `["lib"]`.
- [ ] `peerDependencies` declare `@fluentui/react-components`,
      `@fluentui/react-icons`, `react`, `react-dom` (NOT direct deps).
- [ ] `publishConfig.registry` is `https://npm.pkg.github.com/` (GitHub Packages,
      not public npm) — consumers need an `.npmrc` scope mapping + auth token.
- [ ] Barrel `src/index.ts` exports the component(s) + all public types.
- [ ] A `docs/README.md` exists (install + usage + props table + Accessibility).
- [ ] At least one `*.spec.tsx` unit test (vitest + Testing Library).
- [ ] `pnpm build`, `pnpm --filter @axiscommunications/fluent-<name> lint`, and
      `test` all pass.

## 3. Scaffold the package

Mirror an existing small package (side-navigation is a good template). Layout:

```
components/<name>/
├── src/
│   ├── index.ts            # barrel: components + types + style hooks
│   ├── <name>.tsx          # implementation (move from the composite)
│   ├── <name>.types.ts     # Props + item/sub-types
│   ├── <name>.styles.ts    # makeStyles + classNames map
│   ├── <name>.spec.tsx     # vitest unit + a11y tests
│   └── setupTest.ts         # imports "@testing-library/jest-dom"
├── docs/README.md
├── package.json            # copy from side-navigation, rename, no "private"
├── tsconfig.json           # extends ../../tsconfig.base.json
├── tsconfig.build.json     # emits .d.ts into lib/
├── vitest.config.ts        # jsdom, globals, setupFiles ./src/setupTest.ts
└── depcheck.yml
```

Per-package scripts (identical across packages):

| Script | Runs |
|--------|------|
| `build` | `pnpm build:types && pnpm build:esm` |
| `build:esm` | `esbuild --format=esm --bundle --sourcemap --packages=external --outdir=lib src/index.ts` |
| `build:types` | `tsc -p tsconfig.build.json` |
| `lint` | `tsc --noEmit && biome check` |
| `test` | `vitest run` |

Then add the package to the examples app as a `workspace:*` dependency and update
the relevant story to import from the new package instead of the local composite.

## 4. Unit tests + accessibility testing (vitest + Testing Library)

Component-level tests live next to the source as `*.spec.tsx` and run on
`vitest run` (jsdom, globals). Pattern — see
`components/side-navigation/src/side-navigation.spec.tsx`:

- Always render inside a Fluent provider:
  `render(<FluentProvider theme={webLightTheme}>{ui}</FluentProvider>)`.
- Assert by **role + accessible name**, not by class or test id:
  `getByRole("button", { name: "Home" })`.
- Verify a11y semantics directly: selected item exposes
  `aria-current="page"`, groups expose `aria-expanded`, toggles expose an
  accessible label. Use `toHaveAttribute(...)` from `@testing-library/jest-dom`.
- Cover controlled vs uncontrolled, disabled items, and keyboard/click
  interaction (`fireEvent.click`, `vi.fn()` for callbacks).

Storybook also runs the **a11y addon** (`@storybook/addon-a11y`, configured in
`examples/.storybook/main.ts`) — every story gets an automated axe audit in the
Accessibility panel. When you add stories for the new component, check that panel
is clean and document an `## Accessibility` section in the story and the README
(landmark role, `aria-*`, reduced-motion handling), as the existing components do.

## 5. Playwright system tests (examples/system-test)

End-to-end/system tests drive the real examples app in a browser. They live in
`examples/system-test/` and end in `.stest.ts`. Setup:

- **Config:** `examples/playwright.config.ts` extends
  `examples/playwright.confg.base.ts`; project name
  `fluent-components:stest:chromium`, `testMatch: ["system-test/**.stest.ts"]`,
  viewport 1280×720, chromium `channel: process.env.BROWSER ?? "chrome"`.
- **Run:** `cd examples && pnpm stest` (or `pnpm stest:ui`). Locally the suite
  targets the Vite dev server at `http://127.0.0.1:3000/fluent-components/`; CI
  (`CI=true`) targets the published GH Pages site. See
  `system-test/util/common.ts` (`getRootPath`).
- **Dev server gotcha:** start it as
  `pnpm --filter examples exec vite --host 127.0.0.1` — plain `pnpm dev` binds
  only to `localhost`/IPv6 `::1` and refuses `127.0.0.1`.
- **Browser gotcha:** branded Chrome needs sudo; instead
  `pnpm exec playwright install chromium` and run with `BROWSER=chromium`.
- **Routing:** the app uses HashRouter — navigate to `${getRootPath()}#/<route>`.

Authoring pattern (page-object model):

1. Add a model in `system-test/models/<name>-page.model.ts` exposing locators
   (prefer `getByRole` / `getByLabel`; fall back to `getByTestId` for toolbar
   controls) and actions, plus a `goto()` that navigates and waits for the root
   to be visible. Example: `models/advanced-data-grid-page.model.ts`.
2. Register it as a fixture in `system-test/util/test.ts`
   (`base.extend<TTestFixtures>({ ... })`).
3. Write the spec as `system-test/<name>.stest.ts` using
   `import { test } from "./util/test"` and `expect` from `@playwright/test`;
   structure with `test.describe` + `test.beforeEach(({ fixture }) => fixture.goto())`.
   Example: `advanced-data-grid.stest.ts`.

Scope locators to a stable root (e.g. `.axis-<Component>`) and use `.first()` when
a story renders multiple instances of the component.

## 6. Best practices from the repo

- **Tooling:** Biome (not ESLint/Prettier) for lint+format; 2-space indent,
  80-col width; no unused imports/vars (errors in Biome AND tsc strict).
- **Conventional commits** (commitlint): `type(scope): message` — `feat`, `fix`,
  `docs`, `refactor`, `test`, `chore`, etc. Required for the release pipeline.
- **Class names** are prefixed `axis-<ComponentName>` (e.g. `axis-Slider`),
  exposed via a `classNames` map in `*.styles.ts`.
- **Separate files per concern:** `.tsx` logic, `.types.ts` types, `.styles.ts`
  styles; barrel `index.ts` re-exports components + types + style hooks.
- **Styling:** `makeStyles` + `mergeClasses` + Fluent `tokens`; never raw hex.
- **Peer deps, not direct deps** for `@fluentui/*` and `react`; internal packages
  via the pnpm `workspace:` protocol.
- **CI** (`.github/workflows/verify.yml`) runs commit lint → format check → lint →
  build → test → unused-deps on every PR. Merging a release commit
  (`pnpm exec release major|minor|patch`) auto-publishes all packages.
- Don't add a second divergent implementation of an existing capability — wire the
  new component into existing consumers (stories, data grid) instead.
