import{a as e,n as t}from"./chunk-BneVvdWh.js";import{xi as n}from"./iframe-DN9Zhnka.js";import{r}from"./react-DmTeU9ob.js";import{t as i}from"./mdx-react-shim-DnFJcgFB.js";import{p as a,u as o}from"./blocks-o7SWEvNV.js";function s(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...r(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[`
`,`
`,(0,l.jsx)(o,{title:`UI patterns/Introduction`}),`
`,(0,l.jsx)(t.h1,{id:`ui-patterns`,children:`UI Patterns`}),`
`,(0,l.jsxs)(t.p,{children:[`This section documents `,(0,l.jsx)(t.strong,{children:`UI patterns`}),` — reusable interaction and layout
patterns composed from Fluent UI v9 and the Axis Fluent component packages.`]}),`
`,(0,l.jsxs)(t.p,{children:[`They are deliberately called `,(0,l.jsx)(t.strong,{children:`patterns`}),`, not `,(0,l.jsx)(t.strong,{children:`components`}),`. A `,(0,l.jsx)(t.em,{children:`pattern`}),` is a
worked example that lives in this Storybook (in the examples app) and can change
freely. A `,(0,l.jsx)(t.em,{children:`component`}),` is a published, versioned package under
`,(0,l.jsx)(t.code,{children:`@axiscommunications/fluent-*`}),` that other teams install and depend on. Patterns
are where an idea is explored and proven; components are what a pattern becomes
once it is stable enough for others to build on.`]}),`
`,(0,l.jsx)(t.h2,{id:`who-this-is-for`,children:`Who this is for`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Designers`}),` — explore the patterns as the default building blocks for new
experiences. Each one shows the real, themed components in action, so what you
see here is what ships.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Developers`}),` — find the code behind each pattern, reuse it, and understand
what it takes to turn a pattern into an installable package.`]}),`
`]}),`
`,(0,l.jsx)(t.h2,{id:`where-things-live-in-the-repo`,children:`Where things live in the repo`}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Patterns`}),` — the staging area:`]}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Location:`}),` `,(0,l.jsx)(t.code,{children:`examples/src/storybook/ui-patterns/`})]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Published:`}),` no — part of the private `,(0,l.jsx)(t.code,{children:`examples`}),` app`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Stability:`}),` free to change, no versioning`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Use it:`}),` copy or reference the pattern`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Components`}),` — the stable library other apps depend on:`]}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Location:`}),` `,(0,l.jsx)(t.code,{children:`components/<name>/`})]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Published:`}),` yes — `,(0,l.jsx)(t.code,{children:`@axiscommunications/fluent-*`}),` on the registry`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Stability:`}),` versioned; the public API is a contract`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Use it:`}),` `,(0,l.jsx)(t.code,{children:`npm install @axiscommunications/fluent-<name>`})]}),`
`]}),`
`,(0,l.jsx)(t.h2,{id:`using-the-patterns`,children:`Using the patterns`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[`Browse the patterns in the sidebar and use the `,(0,l.jsx)(t.strong,{children:`Controls`}),` to explore props
and variants.`]}),`
`,(0,l.jsxs)(t.li,{children:[`Switch the `,(0,l.jsx)(t.strong,{children:`theme`}),` toolbar to preview a pattern across the Axis light/dark
themes — patterns are built with design tokens, never hard-coded colors.`]}),`
`,(0,l.jsxs)(t.li,{children:[`Apply them as the `,(0,l.jsx)(t.strong,{children:`default approach`}),` for new experiences: you get
consistency, predictable behavior, accessibility, and a faster start.`]}),`
`,(0,l.jsx)(t.li,{children:`Need something that doesn't exist yet? Check the published packages and this
section first. If it's missing, this is where it begins.`}),`
`]}),`
`,(0,l.jsx)(t.h2,{id:`from-pattern-to-component`,children:`From pattern to component`}),`
`,(0,l.jsxs)(t.p,{children:[`When a pattern is reused enough to be worth sharing as a package, it gets
promoted into `,(0,l.jsx)(t.code,{children:`components/`}),`. The bar for that move is two things being true:`]}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Design-ready`}),` — the experience is settled: behavior, layout, tokens,
accessibility, and the set of variants.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Dev-ready`}),` — the `,(0,l.jsx)(t.strong,{children:`public API is a contract`}),`: a clean prop shape, the
expected peer dependencies, unit tests, a docs README, and a barrel export.
This is a separate step from "looks done", because once it's published other
apps depend on the API and breaking it is costly.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[`A promoted component keeps the same conventions as the rest of the library:
Fluent peer dependencies, `,(0,l.jsx)(t.code,{children:`makeStyles`}),` + design tokens, `,(0,l.jsx)(t.code,{children:`axis-<Name>`}),` class
names, types and styles split into their own files, and a `,(0,l.jsx)(t.code,{children:`*.spec.tsx`}),` test
suite. (See the `,(0,l.jsx)(t.em,{children:`Promoting composites to components`}),` notes in the repo for the
full recipe.)`]}),`
`,(0,l.jsx)(t.h2,{id:`working-with-the-design-system-group`,children:`Working with the Design System Group`}),`
`,(0,l.jsxs)(t.p,{children:[`The Design System Group (DSG) stewards the global patterns and components in this
library and keeps them aligned with the Axis Design Guidelines. Think of DSG as
an `,(0,l.jsx)(t.strong,{children:`extension of your team`}),` rather than a gatekeeper — we are available
throughout the work, not only at a final review.`]}),`
`,(0,l.jsx)(t.p,{children:`We're glad to help with:`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Compliance`}),` — checking that a pattern or component follows the Axis Design
Guidelines across UX, UI, accessibility, and tokens.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Design`}),` — shaping a new pattern or component, or refining an existing one.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Evaluating updates`}),` — reviewing proposed changes to existing components and
assessing new ones, whether they ship today or are still on the horizon.`]}),`
`]}),`
`,(0,l.jsx)(t.p,{children:`Reach out early — even before you start building. We can point you to something
that already exists, share the conventions, and help you avoid rework later.`}),`
`,(0,l.jsx)(t.h2,{id:`two-layers-figma-and-code`,children:`Two layers: Figma and code`}),`
`,(0,l.jsxs)(t.p,{children:[`A pattern usually exists in two places, and the link between them is kept by
`,(0,l.jsx)(t.strong,{children:`naming and documentation`}),`, not by tooling:`]}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Figma`}),` (for designers) — the design representation: shapes, tokens, behavior.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Code`}),` (for developers) — the Fluent UI React implementation: the real thing.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Code is the source of truth, and this Storybook documents the code.`}),` Every
story renders the actual component, so the docs and the implementation can't
drift apart. Keep the names matching between Figma and code — if they diverge,
the link between design and implementation breaks.`]}),`
`,(0,l.jsx)(t.h2,{id:`ownership`,children:`Ownership`}),`
`,(0,l.jsxs)(t.p,{children:[`Each component is owned by the team that maintains it, enforced in the repo
through path-based `,(0,l.jsx)(t.code,{children:`CODEOWNERS`}),` — so changes to a component require a review from
its owners, and different components can have different reviewers. Ownership can
move to another team if they become the main maintainer over time.`]})]})}function c(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;t((()=>{l=e(n()),i(),a()}))();export{c as default};