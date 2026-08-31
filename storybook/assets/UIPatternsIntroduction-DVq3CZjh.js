import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-Bl2r1tuC.js";import{p as i,u as a}from"./blocks-Cwkb5-Ni.js";function o(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(a,{title:`UI patterns/Introduction`}),`
`,(0,c.jsx)(t.h1,{id:`ui-patterns`,children:`UI Patterns`}),`
`,(0,c.jsxs)(t.p,{children:[`This section documents `,(0,c.jsx)(t.strong,{children:`UI patterns`}),` — reusable interaction and layout
patterns composed from Fluent UI v9 and the Axis Fluent component packages.`]}),`
`,(0,c.jsxs)(t.p,{children:[`They are deliberately called `,(0,c.jsx)(t.strong,{children:`patterns`}),`, not `,(0,c.jsx)(t.strong,{children:`components`}),`. A `,(0,c.jsx)(t.em,{children:`pattern`}),` is a
worked example that lives in this Storybook (in the examples app) and can change
freely. A `,(0,c.jsx)(t.em,{children:`component`}),` is a published, versioned package under
`,(0,c.jsx)(t.code,{children:`@axiscommunications/fluent-*`}),` that other teams install and depend on. Patterns
are where an idea is explored and proven; components are what a pattern becomes
once it is stable enough for others to build on.`]}),`
`,(0,c.jsx)(t.h2,{id:`who-this-is-for`,children:`Who this is for`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Designers`}),` — explore the patterns as the default building blocks for new
experiences. Each one shows the real, themed components in action, so what you
see here is what ships.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Developers`}),` — find the code behind each pattern, reuse it, and understand
what it takes to turn a pattern into an installable package.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`where-things-live-in-the-repo`,children:`Where things live in the repo`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Patterns`}),` — the staging area:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Location:`}),` `,(0,c.jsx)(t.code,{children:`examples/src/storybook/ui-patterns/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Published:`}),` no — part of the private `,(0,c.jsx)(t.code,{children:`examples`}),` app`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Stability:`}),` free to change, no versioning`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Use it:`}),` copy or reference the pattern`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Components`}),` — the stable library other apps depend on:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Location:`}),` `,(0,c.jsx)(t.code,{children:`components/<name>/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Published:`}),` yes — `,(0,c.jsx)(t.code,{children:`@axiscommunications/fluent-*`}),` on the registry`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Stability:`}),` versioned; the public API is a contract`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Use it:`}),` `,(0,c.jsx)(t.code,{children:`npm install @axiscommunications/fluent-<name>`})]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`using-the-patterns`,children:`Using the patterns`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Browse the patterns in the sidebar and use the `,(0,c.jsx)(t.strong,{children:`Controls`}),` to explore props
and variants.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Switch the `,(0,c.jsx)(t.strong,{children:`theme`}),` toolbar to preview a pattern across the Axis light/dark
themes — patterns are built with design tokens, never hard-coded colors.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Apply them as the `,(0,c.jsx)(t.strong,{children:`default approach`}),` for new experiences: you get
consistency, predictable behavior, accessibility, and a faster start.`]}),`
`,(0,c.jsx)(t.li,{children:`Need something that doesn't exist yet? Check the published packages and this
section first. If it's missing, this is where it begins.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`from-pattern-to-component`,children:`From pattern to component`}),`
`,(0,c.jsxs)(t.p,{children:[`When a pattern is reused enough to be worth sharing as a package, it gets
promoted into `,(0,c.jsx)(t.code,{children:`components/`}),`. The bar for that move is two things being true:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Design-ready`}),` — the experience is settled: behavior, layout, tokens,
accessibility, and the set of variants.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dev-ready`}),` — the `,(0,c.jsx)(t.strong,{children:`public API is a contract`}),`: a clean prop shape, the
expected peer dependencies, unit tests, a docs README, and a barrel export.
This is a separate step from "looks done", because once it's published other
apps depend on the API and breaking it is costly.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`want-to-promote-a-pattern-heres-how`,children:`Want to promote a pattern? Here's how`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Check it's a good fit.`}),` The pattern should be reusable and self-contained,
depend only on `,(0,c.jsx)(t.code,{children:`@fluentui/react-components`}),` / `,(0,c.jsx)(t.code,{children:`@fluentui/react-icons`}),` as
peers, and fill a gap that isn't already covered by an existing package —
check for overlap with what's already published before starting.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Talk to the `,(0,c.jsx)(t.a,{href:`#working-with-the-design-system-group`,children:`Design System Group`}),`
early`]}),`, before you write the package. They confirm design-readiness and can
flag naming/API concerns before they're baked into a public contract.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Scaffold the package`}),` under `,(0,c.jsx)(t.code,{children:`components/<name>/`}),`, mirroring an existing
small package (`,(0,c.jsx)(t.code,{children:`side-navigation`}),` is a good template):
`,(0,c.jsx)(t.code,{children:`src/index.ts`}),` (barrel export), `,(0,c.jsx)(t.code,{children:`<name>.tsx`}),`, `,(0,c.jsx)(t.code,{children:`<name>.types.ts`}),`,
`,(0,c.jsx)(t.code,{children:`<name>.styles.ts`}),`, `,(0,c.jsx)(t.code,{children:`<name>.spec.tsx`}),`, plus `,(0,c.jsx)(t.code,{children:`package.json`}),`, `,(0,c.jsx)(t.code,{children:`tsconfig.json`}),`,
`,(0,c.jsx)(t.code,{children:`tsconfig.build.json`}),`, `,(0,c.jsx)(t.code,{children:`vitest.config.ts`}),`, and `,(0,c.jsx)(t.code,{children:`depcheck.yml`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Move the implementation over`}),`, refining the API as you go: trim any
oversized prop surface, and replace things like brittle string
interpolation with formatter callbacks so the component works for
internationalized consumers.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Meet the dev-ready checklist`}),` before opening a PR:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`package.json`}),` has `,(0,c.jsx)(t.strong,{children:`no`}),` `,(0,c.jsx)(t.code,{children:`"private": true`}),`, is named
`,(0,c.jsx)(t.code,{children:`@axiscommunications/fluent-<name>`}),`, and matches the shared monorepo
version.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`exports`}),` maps `,(0,c.jsx)(t.code,{children:`.`}),` to `,(0,c.jsx)(t.code,{children:`./lib/index.d.ts`}),` and `,(0,c.jsx)(t.code,{children:`./lib/index.js`}),`; `,(0,c.jsx)(t.code,{children:`files`}),` is
`,(0,c.jsx)(t.code,{children:`["lib"]`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`peerDependencies`}),` (not direct dependencies) declare the Fluent and React
packages the component needs.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`publishConfig.registry`}),` points at GitHub Packages, matching every other
published package.`]}),`
`,(0,c.jsxs)(t.li,{children:[`A `,(0,c.jsx)(t.code,{children:`docs/README.md`}),` covers install, usage, a props table, and
accessibility notes.`]}),`
`,(0,c.jsxs)(t.li,{children:[`At least one `,(0,c.jsx)(t.code,{children:`*.spec.tsx`}),` unit test using vitest + Testing Library.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pnpm build`}),`, `,(0,c.jsx)(t.code,{children:`pnpm --filter @axiscommunications/fluent-<name> lint`}),`, and
`,(0,c.jsx)(t.code,{children:`test`}),` all pass.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Open a PR against `,(0,c.jsx)(t.code,{children:`main`})]}),` using a
`,(0,c.jsx)(t.a,{href:`https://www.conventionalcommits.org/`,rel:`nofollow`,children:`conventional commit`}),` message (e.g.
`,(0,c.jsx)(t.code,{children:`feat(my-component): add MyComponent package`}),`). `,(0,c.jsx)(t.code,{children:`CODEOWNERS`}),` routes the
review to the maintainers team automatically.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Update the story`}),` that used the pattern to import from the new published
package instead of the local composite, so the docs and the real package
stay in sync.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`A promoted component keeps the same conventions as the rest of the library:
Fluent peer dependencies, `,(0,c.jsx)(t.code,{children:`makeStyles`}),` + design tokens, `,(0,c.jsx)(t.code,{children:`axis-<Name>`}),` class
names, types and styles split into their own files, and a `,(0,c.jsx)(t.code,{children:`*.spec.tsx`}),` test
suite. For the complete step-by-step recipe (including the `,(0,c.jsx)(t.code,{children:`advanced-data-grid`}),`
private-package precedent for patterns that are structurally ready but not yet
publishable), see
`,(0,c.jsx)(t.a,{href:`https://github.com/AxisCommunications/fluent-components/blob/main/.github/skills/promoting-composites-to-components/SKILL.md`,rel:`nofollow`,children:(0,c.jsx)(t.code,{children:`.github/skills/promoting-composites-to-components/SKILL.md`})}),`
in the repo.`]}),`
`,(0,c.jsx)(t.h2,{id:`working-with-the-design-system-group`,children:`Working with the Design System Group`}),`
`,(0,c.jsxs)(t.p,{children:[`The Design System Group (DSG) stewards the global patterns and components in this
library and keeps them aligned with the Axis Design Guidelines. Think of DSG as
an `,(0,c.jsx)(t.strong,{children:`extension of your team`}),` rather than a gatekeeper — we are available
throughout the work, not only at a final review.`]}),`
`,(0,c.jsx)(t.p,{children:`We're glad to help with:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Compliance`}),` — checking that a pattern or component follows the Axis Design
Guidelines across UX, UI, accessibility, and tokens.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Design`}),` — shaping a new pattern or component, or refining an existing one.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Evaluating updates`}),` — reviewing proposed changes to existing components and
assessing new ones, whether they ship today or are still on the horizon.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Reach out early — even before you start building. We can point you to something
that already exists, share the conventions, and help you avoid rework later.`}),`
`,(0,c.jsx)(t.h2,{id:`two-layers-figma-and-code`,children:`Two layers: Figma and code`}),`
`,(0,c.jsxs)(t.p,{children:[`A pattern usually exists in two places, and the link between them is kept by
`,(0,c.jsx)(t.strong,{children:`naming and documentation`}),`, not by tooling:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Figma`}),` (for designers) — the design representation: shapes, tokens, behavior.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Code`}),` (for developers) — the Fluent UI React implementation: the real thing.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Code is the source of truth, and this Storybook documents the code.`}),` Every
story renders the actual component, so the docs and the implementation can't
drift apart. Keep the names matching between Figma and code — if they diverge,
the link between design and implementation breaks.`]}),`
`,(0,c.jsx)(t.h2,{id:`ownership`,children:`Ownership`}),`
`,(0,c.jsxs)(t.p,{children:[`Each component is owned by the team that maintains it, enforced in the repo
through path-based `,(0,c.jsx)(t.code,{children:`CODEOWNERS`}),` — so changes to a component require a review from
its owners, and different components can have different reviewers. Ownership can
move to another team if they become the main maintainer over time.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),i()})))()}l();export{s as default};