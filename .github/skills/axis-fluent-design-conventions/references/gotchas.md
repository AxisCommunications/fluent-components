# Axis-specific Fluent UI gotchas

Committed, shareable log of places where this repo's use of Fluent UI v9
deviates from — or was tripped up by — Fluent's own defaults. Append a new
section here (symptom → fix → rationale, 2-5 bullets) whenever a new one is
found; don't let it live only in a private note.

## Griffel: combining two `makeStyles` classes

- NEVER combine two `makeStyles` classes with a template string:
  `className={`${styles.a} ${styles.b}`}`. When the element is a Fluent
  component (e.g. `Card`) that runs Griffel `mergeClasses` internally, the
  SECOND class's atomic rules get dropped silently (computed style falls back,
  e.g. `grid-column: auto`).
- ALWAYS use `mergeClasses(styles.a, styles.b)` from
  `@fluentui/react-components`.
- Symptom seen: dashboard cards in `ResponsiveSuiteLayout.stories.tsx` collapsed
  to 1-track slivers because `cardColumn` span classes never applied. Fix was
  `mergeClasses(styles.contentCard, styles.cardColumn)`.
- Plain `<div>` concatenation often "works" by luck (both class sets stay in
  the DOM), but it's still unsafe for last-wins ordering. Prefer `mergeClasses`
  always.

## Badge appearance on Axis brand themes

- Filled `Badge` appearance is a **Don't** in Axis yellow brand themes.
- Rationale: on-brand foreground colors are black and collide with filled
  badge token usage, reducing clarity.
- Prefer `outline` by default and `tint` for additional emphasis in table
  contexts.

## Button appearance: `primary` is not "the important-looking one"

- Toolbar "Add" actions should NOT use `appearance="primary"` when the
  list/table already contains items — primary emphasis implies the single most
  important action on the page, and Add competes with existing content, not an
  empty state.
- Reserve `primary` appearance for: empty-state CTAs (no items yet), or a
  genuine single page-level action like Save/Apply.
- `FilterToolbar` action `appearance` already defaults to `"secondary"` when
  omitted — omit the prop rather than setting it explicitly for non-primary
  actions.
- Example fixed: `ResponsiveSuiteLayout.stories.tsx` DevicesListView toolbar —
  removed `appearance: "primary"` from the "Add" action since the device table
  already has rows.

## Fluent components can render more landmarks than they appear to

- `Breadcrumb`'s root element is already a `<nav>` (default
  `aria-label="breadcrumb"`, forwarded from an `aria-label` prop) — confirmed
  in `useBreadcrumbBase_unstable` (`@fluentui/react-breadcrumb`).
- Don't wrap a Fluent component in your own extra semantic landmark element
  without first checking what its root element already renders as.
- Symptom seen: `PageHeader.tsx` and `BreadcrumbHeader.tsx` both wrapped
  `<Breadcrumb>` in an additional `<nav aria-label="Breadcrumb">`, producing
  two nested navigation landmarks and an axe `landmark-unique` violation.
- Fix: drop the extra `<nav>` wrapper and pass `aria-label` directly to
  `<Breadcrumb>`.
- Separately, Fluent's `TabList` uses `@fluentui/react-tabster` "Mover" focus
  sentinels (`<i tabindex="0" aria-hidden="true" data-tabster-dummy="...">`)
  that trip axe's `aria-hidden-focus` rule. This is a known upstream
  Fluent/tabster pattern, not something to fix inside a composite — don't
  "fix" it locally, note it as a known limitation instead.

## Side navigation selected-marker animation

- In the compact rail, use one shared selected-marker element for all
  selectable items (hub + workspace + overflow) to preserve smooth
  transitions.
- Static per-section markers break animation continuity for bottom items.
- Robust positioning strategy: measure the selected item container's offset
  relative to the rail root and animate the marker with
  `transform: translateY(px)`.

## Storybook `layout: "centered"` resize container width

- For resizable story components in Storybook `layout: "centered"`, avoid a
  wrapper `width: 100%` because it can shrink-wrap to the component and block
  resize growth.
- Use an explicit responsive width container (e.g.
  `width: "min(600px, 100vw)"`, `maxWidth: "100%"`) so the parent width stays
  larger than the component's initial width.

## Storybook "Open in Figma" cover link

Convention (`examples/src/storybook/.../*.stories.tsx`): each story links to
its Figma component doc frame with a right-aligned cover image at the END of
the component description:

```
 * <p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=<N-M>"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>
```

- Asset lives in `examples/public/figma-global-components-cover.svg`;
  Storybook serves it via `staticDirs: ["../public"]`, so the relative
  `./figma-...svg` resolves. `node-id` uses `-` not `:`.
- **GOTCHA (cost a deploy cycle):** the image ONLY renders when the component
  description comes from the JSDoc block comment above `const meta`, with NO
  `parameters.docs.description.component` set. If that parameter is set,
  Storybook uses it and ignores the JSDoc entirely — the Figma `<p>` never
  renders, even if it's also present in the JSDoc.
- Story-level `docs.description.story` on individual `StoryObj` exports is
  fine/unrelated.
- Deploy: pushing to `dev-design-storybook` triggers
  `.github/workflows/deploy-storybook.yml` (peaceiris/actions-gh-pages) to
  gh-pages `/storybook` + `/docs/storybook`. The pre-push husky hook (`tools`
  lint's `git:check-dirty`) fails on a dirty tree.

## Closable tabs: never nest a button inside `role="tab"`

ARIA marks `tab` as `childrenPresentational`, and axe-core encodes that
(`ariaRoles.tab.childrenPresentational === true` in
`node_modules/.pnpm/axe-core@*/…/axe.js`). Any focusable descendant — including
a `<button tabindex="-1">`, since axe treats native buttons as focusable
regardless of tabindex — trips the serious `nested-interactive` rule.

- Symptom: a document tab bar with a per-tab dismiss `<button>` reports
  `nested-interactive` in the Storybook Accessibility panel.
- Fix used by `DynamicTabList`
  (`examples/src/storybook/ui-patterns/components/composites/DynamicTabList.tsx`):
  render the dismiss affordance as an `aria-hidden` `<span>` with a click
  handler that calls `stopPropagation()`, and give keyboard users an equivalent
  path — `Delete`/`Backspace` on the focused tab (advertised via
  `aria-keyshortcuts`) plus the right-click menu. Verified 0 axe violations.
- The same reasoning applies to `button`, `checkbox`, `radio`, `switch`,
  `option`, `menuitem*` and `slider` — all `childrenPresentational`.
- Roving tab stop (`tabIndex={isSelected ? 0 : -1}`) plus manual
  Arrow/Home/End handling is fine here; Fluent's `TabList` has no closable-tab
  support to reuse.

## Fluent `Slider`: `step` draws tick marks on the rail

Passing `step` to `@fluentui/react-components`' `Slider` switches the rail from
a solid gradient to a stepped/dashed one (Fluent renders `--fui-Slider--steps-percent`
tick marks). A design that shows a plain rail will not match.

- Symptom: the zoom rail in `CanvasControls` rendered as a dashed line instead
  of the solid `colorNeutralStrokeAccessible` rail in Figma.
- Fix: omit `step` from the `Slider` (leaving it continuous) and keep the step
  size as a separate prop that only drives the +/- buttons; round the value in
  the change handler. Verified rail becomes
  `linear-gradient(0deg, brand 0%, brand N%, #616161 N%)`.
- `Slider` accepts `vertical` and honours an explicit `height` on the root
  (`className`/`style` land on root; other native props land on the `input`
  primary slot, so `aria-label`/`aria-valuetext` can be passed directly).

## `role="toolbar"` promises roving arrow-key navigation

APG expects a toolbar to be a single tab stop with arrow keys moving between
its controls. A plain `<div role="toolbar">` whose children are each their own
tab stop announces a contract it does not honour — axe will not flag it, but
screen-reader users get the wrong model.

- Use Fluent's `Toolbar` (it wires roving focus through Tabster) when the
  roving behaviour is what you want.
- Use `role="group"` when it is not. `CanvasControls` does this: it is vertical,
  so toolbar arrow-key navigation would fight the arrow keys its vertical zoom
  `Slider` needs. Note `aria-orientation` is **not** allowed on `group`
  (`aria-allowed-attr` will flag it) — drop it.
- `VideoControlBar` still has the raw `role="toolbar"` + per-control tab stops
  combination; fix it the same way if you touch that file.
