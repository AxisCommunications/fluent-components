import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-Bl2r1tuC.js";import{a as i,d as a,f as o,n as s,p as c,u as l}from"./blocks-CIUuBWgq.js";import{i as u,n as d,r as f,t as p}from"./theme.stories-DwwHuHGY.js";function m(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{of:u}),`
`,(0,g.jsx)(o,{}),`
`,(0,g.jsx)(a,{children:`Axis-branded Fluent UI themes, brand tokens, and theme detection helpers.`}),`
`,(0,g.jsx)(i,{children:(0,g.jsx)(t.p,{children:`The theme package contains the branded Axis theme variants used throughout the
monorepo. It also exports brand token sets and a helper hook for identifying the
active Axis theme.`})}),`
`,(0,g.jsx)(t.h2,{id:`installation`,children:`Installation`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-bash`,children:`pnpm add @axiscommunications/fluent-theme
`})}),`
`,(0,g.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,g.jsxs)(t.p,{children:[`Wrap your application root in a `,(0,g.jsx)(t.code,{children:`FluentProvider`}),` with one of the exported Axis
themes.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`import { FluentProvider } from "@fluentui/react-components";
import { axisLightTheme } from "@axiscommunications/fluent-theme";

<FluentProvider theme={axisLightTheme}>
  <App />
</FluentProvider>;
`})}),`
`,(0,g.jsx)(t.h2,{id:`color-tokens`,children:`Color tokens`}),`
`,(0,g.jsx)(t.p,{children:`The Axis main theme extends the Fluent palette with branded color and utility
tokens. Each token below shows its light and dark value.`}),`
`,(0,g.jsx)(s,{of:p,sourceState:`none`}),`
`,(0,g.jsx)(t.h2,{id:`semantic-colors`,children:`Semantic colors`}),`
`,(0,g.jsxs)(t.p,{children:[`Colors in the Axis theme are `,(0,g.jsx)(t.strong,{children:`semantic`}),` — each family has a meaning and a job.
The reference below evaluates every family (`,(0,g.jsx)(t.strong,{children:`Neutral`}),`, `,(0,g.jsx)(t.strong,{children:`Brand`}),`, the status
trio `,(0,g.jsx)(t.strong,{children:`Success / Warning / Danger`}),`, and the Axis `,(0,g.jsx)(t.strong,{children:`contextual category`}),` colors),
documents what each should and should not be used for, previews the full ramp in
light and dark, and computes the WCAG contrast ratio for the intended
foreground/background pairings.`]}),`
`,(0,g.jsx)(t.p,{children:`A healthy interface leans on Neutral for the bulk of text and surfaces (~60%),
uses Brand sparingly for the primary action and interactive emphasis (~10%), and
reserves the status colors strictly for feedback. Reusing a status or brand color
for generic decoration dilutes its meaning and misleads users.`}),`
`,(0,g.jsx)(t.p,{children:`Status families share the same Fluent slot roles:`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Background1`}),` — subtle tinted surface for inline messages and banners.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Background2 / Background3`}),` — stronger fills for badges, dots, and icons.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Foreground1`}),` — accessible text/icon color for the subtle surface.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`ForegroundInverted`}),` — text/icon color for the strong filled surface.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Border1 → BorderActive`}),` — subtle to emphasized borders and focus states.`]}),`
`]}),`
`,(0,g.jsx)(s,{of:d,sourceState:`none`}),`
`,(0,g.jsx)(t.h3,{id:`do--dont`,children:`Do / Don't`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Do`}),` pair every status with an icon `,(0,g.jsx)(t.strong,{children:`and`}),` text — never rely on color alone
(WCAG 1.4.1). Around 8% of men have red–green color-vision deficiency.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Do`}),` use the intended foreground/background pairings so text meets contrast
(WCAG 1.4.3: 4.5:1 body text, 3:1 large text and UI elements per 1.4.11).`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Do`}),` keep meaning consistent — one color maps to one concept app-wide.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Don't`}),` use Danger red or Success green as a brand or emphasis accent.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Don't`}),` place body text on a saturated `,(0,g.jsx)(t.code,{children:`Background3`}),` fill; use it for badges,
dots, and icons where the inverted foreground provides contrast.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Don't`}),` use Warning for hard failures — escalate to Danger — or for anything
positive or purely informational.`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`exports`,children:`Exports`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:`axisLightTheme`}),`, `,(0,g.jsx)(t.code,{children:`axisDarkTheme`}),` — Axis main theme`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:`axisBlueLightTheme`}),`, `,(0,g.jsx)(t.code,{children:`axisBlueDarkTheme`}),` — Axis blue theme`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:`brand`}),`, `,(0,g.jsx)(t.code,{children:`blueBrand`}),` — brand token ramps`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:`useIdentifyCurrentAxisTheme`}),` — hook to detect the active Axis theme`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`guidance`,children:`Guidance`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`Prefer token usage over hardcoded colors in downstream components.`}),`
`,(0,g.jsx)(t.li,{children:`Use theme-aware illustration and styling helpers to keep light/dark behavior aligned.`}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),c(),f()})))()}_();export{h as default};