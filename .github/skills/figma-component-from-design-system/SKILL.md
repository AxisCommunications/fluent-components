---
name: figma-component-from-design-system
description: >-
  Build Axis design-system-compliant Figma components from this codebase using the
  Figma MCP server. USE WHEN the user wants to create, mock up, or generate a UI
  component, screen, or pattern in the "Axis Global components" Figma file from an
  existing storybook composite, or asks to mirror a code component into Figma using
  real Axis Fluent 2 Web Components + bound design tokens (not raw hex/rectangles).
  Covers the code-first discovery loop, Plugin API gotchas, verified token/component
  keys, the boolean/text/instance-swap parameterization recipe, and the doc-template
  workflow for documenting a component from its storybook.
---

# Building Figma components from Axis Fluent 2 (code → Figma)

Target file: **"Axis Global components"**, fileKey `0kVLp2qecBWQiQXEQidCeJ`.

Goal: recreate a codebase composite
(`examples/src/storybook/ui-patterns/components/composites/*.tsx`) as a real Figma
**main component** built from the org design system — real components + bound tokens,
never raw hex or detached rectangles.

## Workflow

1. **Code-first.** Grep the component name under
   `examples/**/composites/*.tsx` and its `*.stories.tsx`. Mirror its tokens,
   spacing, layout, and variants from the source of truth.
2. **`get_libraries(fileKey)`** to confirm the two libraries that matter:
   - **Axis Fluent 2 Web Components** libKey
     `lk-79792b042bb8ea6d9f072a72d0703aa5e6de468d3df881224f7d466047a61c492a70887e7bfc05c8dba114cf560b4264ca8ef2148b83c9c24d87695b50030c5f`
   - **Microsoft Fluent System Icons** libKey
     `lk-d18bb83ecc482ff3c41ebaaa01ef819aa8f0df14460446f03b83ff61703aca33f74ddc59d704f9f8d65b176a4298feb6d29af3dc4c4c0232396b3557d482f952`
3. **`search_design_system`** scoped with `includeLibraryKeys` to fetch
   component / variable / style keys. Search is fuzzy — search exact names and
   ignore iOS / SF / Material look-alikes from other libraries.
4. **Build with `use_figma`** (Plugin API JS). Pass `skillNames: "resource:figma-use"`.
5. **Verify with `get_screenshot`** using `enableBase64Response: true` — local `*.png`
   download is blocked by Axis content-exclusion. `get_design_context` (with
   `disableCodeConnect: true`) also returns an inline screenshot and is the most
   reliable way to eyeball a node after each edit.

## ALWAYS document a new component with the Doc template

Whenever you create (or finish) a component, also produce a documentation page for it
by cloning the shared **Doc template** — never hand-roll a doc layout. This keeps every
component's docs visually consistent.

- The template is its own page **"Doc template"** (node `9:2957`); its single child
  frame is **"Tree"** (`9:4236`). This file is **dynamic-page**: a node on a page other
  than `figma.currentPage` is NOT reachable until you call `await page.loadAsync()` on
  its page first. `figma.getNodeById` returns `null` otherwise.
- Workflow: `const dp = figma.getNodeById("9:2957"); await dp.loadAsync();` →
  `const tpl = dp.children.find(n => n.name === "Tree");` → `const clone = tpl.clone();`
  → append to the target page (`figma.getNodeById("0:1").appendChild(clone)`), rename,
  set `clone.x/clone.y` to park it beside existing content.
- Template anatomy (names are stable; clone gets fresh ids — re-read with
  `get_metadata` on the clone):
  - `Header > Logo` — leave as-is.
  - `Component name > Title > Frame 13`: child `Title` (text = component name),
    sibling `Text` (the storybook component description), `Links` containing two
    `.link-tags` → `Primary` text nodes (set to e.g. "View documentation" /
    "Storybook").
  - `image 2` — a placeholder rounded-rectangle hero. Replace it: `remove()` it and
    `insertChild(1, showcase)` a centered auto-layout frame holding a real component
    instance. The `Title` frame is **auto-layout**, so appended children flow in order
    — use `insertChild`/`layoutAlign="STRETCH"`, do NOT rely on absolute `x/y`.
  - `Frame 6`: `Anatomy / Badge > Copy me` badge text (rename to "Anatomy"), and a
    `Group` of `Isolated` example cards each with a `Text` caption.
  - `HR` divider line, then `Variants` containing `Title` + subsections
    `Frame 9 / Frame 11 / Frame 12`, each a `Title` (+ optional subtitle) and an
    `Isolated` canvas. Repurpose each subsection to a storybook story group: clear the
    `Isolated` children, set it to `layoutMode="VERTICAL"` with padding/itemSpacing,
    and append labeled blocks (a Semibold caption text + a component instance).
- Populate copy straight from the storybook: the `meta`/`docs.description.component`
  becomes the hero description; each exported `Story` (its `args` + its
  `docs.description.story`) becomes one labeled variant block.
- Map storybook props → the **main component's** instance properties; build every
  example as an `createInstance()` + `setProperties()`. **Do not modify the documented
  component** — only instantiate it.

## Plugin API gotchas (each cost real iterations)

- Import variables via `figma.variables.importVariableByKeyAsync` (NOT
  `figma.importVariableByKeyAsync`).
- Bind a color token:
  `figma.variables.setBoundVariableForPaint({type:"SOLID",color:{r:0,g:0,b:0},opacity:1},"color",v)`
  then assign to `node.fills` / `node.strokes`.
- Text styles: `importStyleByKeyAsync` → `await loadFontAsync(style.fontName)` →
  `setTextStyleIdAsync`.
- Editing an existing TEXT node (`characters`, `textAutoResize`) requires loading
  ITS fonts first: `getRangeAllFontNames()` then `loadFontAsync` each.
- Set `layoutSizingHorizontal/Vertical` **only after** the node is appended to an
  auto-layout parent.
- For vertical hug: set the component `primaryAxisSizingMode="AUTO"` AND inner
  frames `counterAxisSizingMode="AUTO"` / `layoutSizingVertical="HUG"`, otherwise a
  wrapped multiline text overflows a fixed height (this once made a divider cut
  through the description text).
- Icon component **sets** ARE importable directly by the `componentKey` that
  `search_design_system` returns for an `assetType: "component_set"` (Fluent System
  Icons): `const set = await figma.importComponentSetByKeyAsync(key)`. Then pick the
  variant child by `variantProperties` — Fluent icons expose `Size` (`"12".."48"`) and
  `Theme` (`"Regular"`/`"Filled"`); chevrons add `Direction` (`"Up"/"Down"/"Left"/"Right"`).
  `set.children.find(c => Object.entries(props).every(([k,v]) => (c.variantProperties||{})[k] === v))`
  → `.createInstance()` → `.resize(size,size)`. Colorize by binding a token paint onto
  every descendant with a non-empty `fills` array
  (`inst.findAll(n => 'fills' in n && Array.isArray(n.fills) && n.fills.length > 0)`).
  `search_design_system` icon matching is fuzzy/noisy — query the exact icon name and
  read the first `component_set` result. (Older fallback, only if a key is unavailable:
  instantiate a host component, `findAll` instances, match `mainComponent.parent.name`.)
- `loadAllPagesAsync` is NOT available here; load individual pages with
  `page.loadAsync()` (see doc-template workflow).
- **`figma.combineAsVariants([comps], parent)`** derives the variant property from the
  component names (`"State=Expanded"` / `"State=Collapsed"` → property `State` with those
  values). DO NOT put the resulting variant set into auto-layout (`set.layoutMode="HORIZONTAL"`)
  — that **freezes each child component's height** at its current fixed value (a shorter
  variant got stuck tall and its footer overflowed the background). Instead set
  `set.layoutMode="NONE"`, per variant `v.primaryAxisSizingMode="AUTO"` (hug), position the
  variants manually side-by-side, then `set.resizeWithoutConstraints(w,h)` to bound the set.
- When cloning the Doc template, the **Isolated canvas frames have FIXED height** from the
  template. If your component instance is taller than the template's example, it overflows
  and overlaps the next section (clipsContent=false). FIX: make each Isolated hug vertically —
  for a VERTICAL Isolated set `primaryAxisSizingMode="AUTO"`, for a HORIZONTAL one set
  `counterAxisSizingMode="AUTO"`. Ancestor section frames are already AUTO and reflow.
- **Never `throw` to return diagnostics** — an uncaught error rolls back ALL mutations
  from that `use_figma` call. End with a plain final expression instead, or write data
  into a temp TEXT node and read it back with `get_design_context`, then `remove()` it.
- An instance's runtime property keys are suffixed and differ from codegen prop names
  (e.g. `"Show actions#16:2"`, not `showActions`). Read the real keys from
  `componentPropertyDefinitions` (build a `baseName → fullKey` map by splitting on
  `#`) before calling `setProperties`; guessing silently no-ops the booleans.
- In this **dynamic-page** file, sync `figma.getNodeById` is unreliable for deep
  descendants of a freshly-cloned subtree (returns `null` mid-script even when the
  node exists). Use `await figma.getNodeByIdAsync(id)` for every lookup of clone
  children.
- `figma.currentPage.selection = [node]` throws if `node` lives on a non-active page
  (cross-page selection is illegal) — and that throw rolls back the whole script.
  Call `await figma.setCurrentPageAsync(page)` at the start, and/or wrap the final
  selection in `try/catch`. Same applies to `set figma.currentPage` (not supported —
  use `setCurrentPageAsync`).

## Button (Axis Fluent 2) — key `a39515bf9246e33a7ca60093544b639a4ab31bfa`

Variants: `Style[Primary | Secondary (Default) | Outline | Subtle | Transparent]`,
`State`, `Size[Large | Medium (Default) | Small]`,
`Layout[Icon and label (Default) | Icon only]`.
Props include `Label#157663:151` and `Icon#157715:1057` (boolean).

To set a leading icon: enable `Icon#157715:1057`, then find the nested INSTANCE named
**"Placeholder"** and `ph.swapComponent(await figma.importComponentByKeyAsync(iconKey))`.
Do NOT pass icon keys to the Button's INSTANCE_SWAP property — that fails.

Other components: Card set `792c5f710359daacb9045f96efac19da2a082dcd`,
Spin button set `dfb2afc7193d72dc5e4cd525e387104c1fac24e3` (resize wider, ~80px, or
it wraps tall).

## Verified token keys (color variables)

| Token | Key |
|---|---|
| Neutral/Background/1/Rest | `fac2264608cbaab9b3ef758326f113387441343b` |
| Neutral/Background/2/Rest | `927459e310c18205e5a4d8d4c0105d0bea0c966f` |
| Neutral/Foreground/1/Rest | `7b4fababf67f3aa7dcb51d93aa147b48b47a9b30` |
| Neutral/Foreground/2/Rest | `7bcc04c3456d2df7dba73ad15cab329ff9440e0a` |
| Brand/Foreground/1/Rest | `4bc56a6988040de75286b200d47c3203b991f3e4` |
| Brand/Background/1/Rest | `598ea29abf1410c6ca792571d01b4b14e664d29a` |
| Brand/Stroke/1/Rest | `800d441d12a5a3a5094aea1fee06b914cb1df882` |
| **Neutral/Stroke/1/Rest** (real divider / colorNeutralStroke1) | `62c3aea8fb72b2f4886958a3e15dc654133b1757` |
| Neutral/Stroke/2/Rest | `9faa2843efdf7cac8bace16d9a375b44501264b8` |

> ⚠️ `ae2f0c2a9ccbf2b736857b83e400cbde1cd00607` is Neutral/Stroke/**on Brand**/1/Rest
> (near-white) — NOT a normal divider. Picking it gives a wrong/invisible divider.

## Verified text style keys

| Style | Key |
|---|---|
| Subtitle 1 | `0f5baaeb806fe58b4bfac7c6c0747b2843715f05` |
| Body 1 | `020362c24075dd02e2fc8965234d194899620770` |
| Body 1 Strong | `29ef820c9a8d755de0b6999cd09cd75baee53cfe` |
| Caption 1 | `4870c2b71d882387b33810d647e0514a882d448a` |
| Caption 1 Strong | `87c3650fd4940e18abeae7576f6789fcb0acba05` |

## Parameterize instead of variant explosion

When the user asks for "proper variants / booleans / slots", add properties on the
main COMPONENT rather than duplicating frames:

- `addComponentProperty(name, "BOOLEAN", true)` → set
  `node.componentPropertyReferences = { visible: id }` to toggle a region.
- `addComponentProperty(name, "TEXT", def)` → `{ characters: id }` for editable copy.
- `addComponentProperty(name, "INSTANCE_SWAP", defaultComponentId, { preferredValues:[{type:"COMPONENT_SET", key: BUTTON_KEY}] })`
  → `{ mainComponent: id }` for swappable slots (e.g. action buttons).

Validate by `createInstance()` + `setProperties()`, read back, then remove the temp
instance.

## Components already built in this file

- **File Upload** (Page 1) — Card-like dropzone + Button + Cloud Arrow Up / Document
  PDF / Dismiss icons + progress bars.
- **Section Header** (Page 1, node `16:122`) — meta / title / description + 2 action
  button slots; booleans + text + instance-swap slots. Its **Doc template**-based
  documentation page lives on the same page (frame "Section Header — Documentation") —
  use it as the reference example for the doc-template workflow.
- **Pagination** (page "Pagination", node `21:1608`) — row counter + Spin button page
  selector + prev/next chevron icon-only buttons; top border Neutral/Stroke/1;
  booleans (`Show row counter` / `Show page selector` / `Show navigation`) + text
  (`Row counter text` / `Page label before` / `Page label after`) + button slots. Its
  **Doc template**-based docs live on the same page (frame "Pagination —
  Documentation").
- **Side Navigation** (page "Side Navigation") — now a **variant SET** (`42:193`) with a
  `State` property of `Expanded` / `Collapsed`. Expanded (260px rail):
  bg Neutral/Background/2 + right border Neutral/Stroke/2; toggle (Chevron Left) +
  item rows (44px, 60px icon column, Body 1 label, group chevron), selected item
  (bg Neutral/Background/2/Pressed, Foreground 1, Filled icon, 3×20 yellow indicator
  bound to Brand/Stroke/1/Rest, absolute-positioned at nav left edge), open sub-items
  (36px, paddingLeft 60), divider, footer items. Collapsed (68px icon-only rail):
  toggle (Chevron Right) + icon-only rows, selected item keeps the yellow indicator +
  grey bg + filled icon, divider, footer icons. Real Fluent System Icons (Home /
  Apps / Layer / Person / Settings / Chevron) imported via `importComponentSetByKeyAsync`
  then variant picked by `variantProperties` (`Size`/`Theme`/`Direction`). Its
  **Doc template**-based docs live on the same page (frame "Side Navigation —
  Documentation", `44:157`).
