---
name: axis-fluent-design-conventions
description: >-
  Apply Fluent UI v9 correctly "the Axis way" when building or reviewing UI patterns and components in
  this repo. USE WHEN the user asks to build/fix/review a Fluent UI composite or component, asks whether
  something follows Axis Design Guidelines, hits unexpected Fluent behavior (Griffel class merging,
  nested landmarks, badge/button appearance, animation/positioning quirks), or asks "is this the right
  way to use Fluent here". Cross-references official Fluent UI docs, this repo's accumulated
  Axis-specific conventions/gotchas, and the live Storybook (source of truth for how patterns actually
  render in the Axis themes).
---

# Building Fluent UI the Axis way

Fluent UI v9 documents the *generic* API and default behavior. This repo layers
Axis-specific decisions on top — brand token overrides, accessibility fixes for
Fluent's own defaults, and layout conventions discovered by trial and error. This
skill is the loop for reconciling the two before writing or reviewing UI code.

## When to use

- Building or fixing a UI pattern in `examples/src/storybook/ui-patterns/components/composites/*.tsx`.
- Reviewing whether a component's use of Fluent (`makeStyles`, tokens, appearance
  props, ARIA) matches this repo's conventions, not just generic Fluent defaults.
- Debugging Fluent behavior that looks wrong (styles not applying, unexpected
  landmarks, accessibility violations, animation jank).
- Deciding an appearance/variant choice (e.g. `Badge`/`Button` appearance) where
  the "correct" Fluent answer depends on the Axis brand theme.

## Procedure

1. **Identify the Fluent primitive(s) involved** (e.g. `Breadcrumb`, `Badge`,
   `TabList`, `makeStyles`/Griffel). Confirm which package's docs apply:
   `@fluentui/react-components` is the v9 (Griffel-based) library this repo uses
   — don't consult v8 (`@fluentui/react`) docs by mistake.
2. **Check the official Fluent UI docs** for the primitive's default markup,
   ARIA semantics, and appearance options before assuming a bug is Axis-specific:
   - Component reference + Storybook: https://react.fluentui.dev/
   - Source of truth for exact rendered markup when docs are ambiguous:
     `node_modules/.pnpm/@fluentui+react-<package>*/**/use<Component>.js` (see
     the `griffel-mergeclasses-gotcha` and nested-breadcrumb-landmark precedents
     below — both were only clear after reading the actual `use*` hook source).
3. **Check this repo's accumulated Axis-specific conventions** in
   [`references/gotchas.md`](./references/gotchas.md) before treating something
   as a fresh problem — it may already be documented there. Topics covered
   today: Griffel `mergeClasses` vs template-string concatenation, `Badge`
   appearance on Axis brand themes, `Button` `primary` appearance rules,
   Fluent components rendering more landmarks than expected (e.g.
   `Breadcrumb`'s root is already a `nav`), side-navigation marker animation,
   Storybook resize-container width, and the Storybook↔Figma cover-link
   convention.
4. **Verify against the live Storybook**, not just the docs — code + Storybook
   is this repo's actual source of truth (see the Storybook↔Figma entry in
   [`references/gotchas.md`](./references/gotchas.md)):
   - Start it: `pnpm --filter examples storybook` (default port 6006, picks
     next free port if busy).
   - Switch the **theme** toolbar between Axis light/dark/blue themes — a
     pattern that looks fine in one theme can break in another (this is how
     the badge and button-appearance issues were found).
   - Use the **Accessibility** addon panel (Violations/Passes tabs) to check
     real axe-core results per story before and after a fix — don't assume a
     fix worked without re-running it.
5. **When Axis constraints genuinely override Fluent defaults**, document the
   deviation in the story's JSDoc (see the badge-appearance entry in
   [`references/gotchas.md`](./references/gotchas.md) for the "Don't" pattern)
   rather than only fixing the one example silently.
6. **Record new findings** in [`references/gotchas.md`](./references/gotchas.md)
   as a new section (mirror the existing ones: symptom + fix + rationale, 2-5
   bullets) so the same Fluent-vs-Axis gotcha isn't rediscovered from scratch
   next time. It's committed alongside the code, so it's visible to any
   contributor or agent working in this repo — not just this session.

## Quick reference: official Fluent UI docs

- Components + live examples: https://react.fluentui.dev/
- Design tokens: https://react.fluentui.dev/?path=/docs/theme-colors--docs
  (this repo's Axis tokens extend these — see `theme/src/tokens/`)
- Accessibility guidance is embedded per-component in the docs above; this
  repo also runs `@storybook/addon-a11y` (axe-core) live in Storybook, which
  catches issues the written docs won't mention (e.g. Tabster focus-sentinel
  elements tripping `aria-hidden-focus` — a known upstream Fluent/tabster
  pattern, not something to "fix" in the composite itself).
