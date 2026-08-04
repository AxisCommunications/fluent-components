import{a as e,n as t}from"./chunk-BneVvdWh.js";import{xi as n}from"./iframe-CzIYuUoR.js";import{r}from"./react-DQziHxo2.js";import{t as i}from"./mdx-react-shim-Dwoqmf4Z.js";import{a,d as o,f as s,n as c,p as l,u}from"./blocks-DM3cqPY8.js";import{ColorTokenReference as d,SemanticColorReference as f,n as p,t as m}from"./theme.stories-dPlB89fd.js";function h(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...r(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(u,{of:p}),`
`,(0,_.jsx)(s,{}),`
`,(0,_.jsx)(o,{children:`Axis-branded Fluent UI themes, brand tokens, and theme detection helpers.`}),`
`,(0,_.jsx)(a,{children:(0,_.jsx)(t.p,{children:`The theme package contains the branded Axis theme variants used throughout the
monorepo. It also exports brand token sets and a helper hook for identifying the
active Axis theme.`})}),`
`,(0,_.jsx)(t.h2,{id:`installation`,children:`Installation`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-bash`,children:`pnpm add @axiscommunications/fluent-theme
`})}),`
`,(0,_.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsxs)(t.p,{children:[`Wrap your application root in a `,(0,_.jsx)(t.code,{children:`FluentProvider`}),` with one of the exported Axis
themes.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import { FluentProvider } from "@fluentui/react-components";
import { axisLightTheme } from "@axiscommunications/fluent-theme";

<FluentProvider theme={axisLightTheme}>
  <App />
</FluentProvider>;
`})}),`
`,(0,_.jsx)(t.h2,{id:`color-tokens`,children:`Color tokens`}),`
`,(0,_.jsx)(t.p,{children:`The Axis main theme extends the Fluent palette with branded color and utility
tokens. Each token below shows its light and dark value.`}),`
`,(0,_.jsx)(c,{of:d,sourceState:`none`}),`
`,(0,_.jsx)(t.h2,{id:`semantic-colors`,children:`Semantic colors`}),`
`,(0,_.jsxs)(t.p,{children:[`Colors in the Axis theme are `,(0,_.jsx)(t.strong,{children:`semantic`}),` — each family has a meaning and a job.
The reference below evaluates every family (`,(0,_.jsx)(t.strong,{children:`Neutral`}),`, `,(0,_.jsx)(t.strong,{children:`Brand`}),`, the status
trio `,(0,_.jsx)(t.strong,{children:`Success / Warning / Danger`}),`, and the Axis `,(0,_.jsx)(t.strong,{children:`contextual category`}),` colors),
documents what each should and should not be used for, previews the full ramp in
light and dark, and computes the WCAG contrast ratio for the intended
foreground/background pairings.`]}),`
`,(0,_.jsx)(t.p,{children:`A healthy interface leans on Neutral for the bulk of text and surfaces (~60%),
uses Brand sparingly for the primary action and interactive emphasis (~10%), and
reserves the status colors strictly for feedback. Reusing a status or brand color
for generic decoration dilutes its meaning and misleads users.`}),`
`,(0,_.jsx)(t.p,{children:`Status families share the same Fluent slot roles:`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Background1`}),` — subtle tinted surface for inline messages and banners.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Background2 / Background3`}),` — stronger fills for badges, dots, and icons.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Foreground1`}),` — accessible text/icon color for the subtle surface.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`ForegroundInverted`}),` — text/icon color for the strong filled surface.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Border1 → BorderActive`}),` — subtle to emphasized borders and focus states.`]}),`
`]}),`
`,(0,_.jsx)(c,{of:f,sourceState:`none`}),`
`,(0,_.jsx)(t.h3,{id:`do--dont`,children:`Do / Don't`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Do`}),` pair every status with an icon `,(0,_.jsx)(t.strong,{children:`and`}),` text — never rely on color alone
(WCAG 1.4.1). Around 8% of men have red–green color-vision deficiency.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Do`}),` use the intended foreground/background pairings so text meets contrast
(WCAG 1.4.3: 4.5:1 body text, 3:1 large text and UI elements per 1.4.11).`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Do`}),` keep meaning consistent — one color maps to one concept app-wide.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Don't`}),` use Danger red or Success green as a brand or emphasis accent.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Don't`}),` place body text on a saturated `,(0,_.jsx)(t.code,{children:`Background3`}),` fill; use it for badges,
dots, and icons where the inverted foreground provides contrast.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Don't`}),` use Warning for hard failures — escalate to Danger — or for anything
positive or purely informational.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`exports`,children:`Exports`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`axisLightTheme`}),`, `,(0,_.jsx)(t.code,{children:`axisDarkTheme`}),` — Axis main theme`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`axisBlueLightTheme`}),`, `,(0,_.jsx)(t.code,{children:`axisBlueDarkTheme`}),` — Axis blue theme`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`brand`}),`, `,(0,_.jsx)(t.code,{children:`blueBrand`}),` — brand token ramps`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`useIdentifyCurrentAxisTheme`}),` — hook to detect the active Axis theme`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`guidance`,children:`Guidance`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Prefer token usage over hardcoded colors in downstream components.`}),`
`,(0,_.jsx)(t.li,{children:`Use theme-aware illustration and styling helpers to keep light/dark behavior aligned.`}),`
`]})]})}function g(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;t((()=>{_=e(n()),i(),l(),m()}))();export{g as default};