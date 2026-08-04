import{a as e,n as t}from"./chunk-BneVvdWh.js";import{En as n,Gr as r,Hr as i,Jn as a,Kr as o,Mr as s,Ur as c,ci as l,jr as u,qi as d,qn as f,s as p,vr as m,xi as h,yr as g}from"./iframe-CWmA6VAC.js";import{n as _,t as v}from"./src-4TmbVNOq.js";function y(){let e=S(),[t,n]=(0,b.useState)(`home`);return(0,x.jsx)(`div`,{className:e.shell,children:(0,x.jsx)(_,{style:{height:`100%`},items:C,footerItems:w,selectedItemId:t,onSelect:n,defaultExpanded:!0,defaultOpenItemIds:[`workspaces`],"aria-label":`Side navigation`})})}var b,x,S,C,w,T=t((()=>{v(),p(),n(),b=e(d(),1),x=e(h(),1),S=l({shell:{height:`520px`,display:`flex`}}),C=[{id:`home`,label:`Home`,icon:(0,x.jsx)(a,{}),selectedIcon:(0,x.jsx)(f,{})},{id:`workspaces`,label:`Workspaces`,icon:(0,x.jsx)(s,{}),selectedIcon:(0,x.jsx)(u,{}),children:[{id:`workspaces-personal`,label:`Personal`},{id:`workspaces-shared`,label:`Shared with me`},{id:`workspaces-archived`,label:`Archived`}]},{id:`onelake`,label:`OneLake`,icon:(0,x.jsx)(g,{}),selectedIcon:(0,x.jsx)(m,{}),children:[{id:`onelake-catalog`,label:`Data catalog`},{id:`onelake-shortcuts`,label:`Shortcuts`}]}],w=[{id:`profile`,label:`My profile`,icon:(0,x.jsx)(c,{}),selectedIcon:(0,x.jsx)(i,{})},{id:`settings`,label:`Settings`,icon:(0,x.jsx)(o,{}),selectedIcon:(0,x.jsx)(r,{})}]}));function E(){let[e,t]=(0,D.useState)(`home`);return(0,O.jsx)(`div`,{className:k().shell,children:(0,O.jsx)(_,{style:{height:`100%`},items:A,footerItems:j,selectedItemId:e,onSelect:t,"aria-label":`Side navigation`})})}var D,O,k,A,j,M=t((()=>{v(),p(),n(),D=e(d(),1),O=e(h(),1),k=l({shell:{height:`520px`,display:`flex`}}),A=[{id:`home`,label:`Home`,icon:(0,O.jsx)(a,{}),selectedIcon:(0,O.jsx)(f,{})},{id:`workspaces`,label:`Workspaces`,icon:(0,O.jsx)(s,{}),selectedIcon:(0,O.jsx)(u,{})},{id:`onelake`,label:`OneLake`,icon:(0,O.jsx)(g,{}),selectedIcon:(0,O.jsx)(m,{})}],j=[{id:`settings`,label:`Settings`,icon:(0,O.jsx)(o,{}),selectedIcon:(0,O.jsx)(r,{})}]}));function N(){let[e,t]=(0,P.useState)(`home`);return(0,F.jsx)(`div`,{className:I().shell,children:(0,F.jsx)(_,{style:{height:`100%`},items:L,collapsible:!1,selectedItemId:e,onSelect:t,"aria-label":`Side navigation`})})}var P,F,I,L,R=t((()=>{v(),p(),n(),P=e(d(),1),F=e(h(),1),I=l({shell:{height:`520px`,display:`flex`}}),L=[{id:`home`,label:`Home`,icon:(0,F.jsx)(a,{}),selectedIcon:(0,F.jsx)(f,{})},{id:`workspaces`,label:`Workspaces`,icon:(0,F.jsx)(s,{}),selectedIcon:(0,F.jsx)(u,{})},{id:`onelake`,label:`OneLake`,icon:(0,F.jsx)(g,{}),selectedIcon:(0,F.jsx)(m,{})}]})),z,B,V,H,U,W,G;t((()=>{v(),p(),T(),M(),R(),z=e(h(),1),B=l({frame:{display:`flex`,height:`520px`}}),V={title:`UI patterns/Side Navigation`,component:_,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Side Navigation

A vertical navigation rail for Fluent UI v9 applications. It renders a compact
icon rail (68px) that can expand to reveal labels and nested sub-items, with
an animated indicator that tracks the selected item. Optional \`footerItems\`
are pinned to the bottom and separated by a divider.

## Variants

- **Collapsible rail** — a toggle button expands the icon rail to reveal
  labels, group chevrons, and any open sub-items, then collapses it back.
  Use this as the default.
- **Permanent icon rail** — set \`collapsible={false}\` to remove the toggle and
  keep an icons-only rail. Use when horizontal space is at a premium and the
  destinations are well known.
- **Expanded with sub-menus** — start expanded with \`defaultExpanded\` and seed
  open groups with \`defaultOpenItemIds\`. Items with \`children\` render an
  expandable group of sub-items.

## Guidelines

- Provide a meaningful \`aria-label\` on the rail (e.g. "Side navigation").
- Keep labels short (one or two words) so they fit the expanded rail.
- Always supply a recognizable \`icon\` for every item; while collapsed the icon
  is the only visual cue and the \`label\` is exposed via \`aria-label\`/tooltip.
- Use \`selectedIcon\` to provide a filled counterpart for the active item; the
  rail automatically swaps to it for the selected destination.
- Reserve \`footerItems\` for persistent, context-level actions (e.g. settings
  or a profile/site switcher).

## Accessibility

- The rail renders as a \`<nav>\` landmark; the selected item is marked with
  \`aria-current="page"\`.
- Group items expose \`aria-expanded\`, and the toggle exposes both
  \`aria-expanded\` and an accessible label (\`expandLabel\` / \`collapseLabel\`).
- While collapsed, each item's \`label\` stays available to assistive technology
  via \`aria-label\` and on hover via a tooltip.
- Animations are disabled when the user prefers reduced motion.

<p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=44-157"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>`}}}},H={render:()=>(0,z.jsx)(`div`,{className:B().frame,children:(0,z.jsx)(E,{})})},U={render:()=>(0,z.jsx)(`div`,{className:B().frame,children:(0,z.jsx)(N,{})})},W={render:()=>(0,z.jsx)(`div`,{className:B().frame,children:(0,z.jsx)(y,{})})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const styles = useStyles();
    return <div className={styles.frame}>
        <CompactSideNavigationExample />
      </div>;
  }
}`,...H.parameters?.docs?.source},description:{story:`A collapsible rail that starts collapsed. The toggle button at the top expands
the rail to reveal labels and collapses it back to icons. \`footerItems\` are
pinned to the bottom.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const styles = useStyles();
    return <div className={styles.frame}>
        <IconOnlySideNavigationExample />
      </div>;
  }
}`,...U.parameters?.docs?.source},description:{story:"Setting `collapsible={false}` removes the toggle and keeps an icons-only rail.\nLabels stay accessible via `aria-label` and the hover tooltip.",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const styles = useStyles();
    return <div className={styles.frame}>
        <CollapsibleSideNavigationExample />
      </div>;
  }
}`,...W.parameters?.docs?.source},description:{story:"Starting expanded with `defaultExpanded`, this rail reveals labels, group\nchevrons, and nested sub-items. Groups seeded with `defaultOpenItemIds` are\nopen initially.",...W.parameters?.docs?.description}}},G=[`CollapsibleRail`,`IconOnlyRail`,`ExpandedWithSubMenus`]}))();export{H as CollapsibleRail,W as ExpandedWithSubMenus,U as IconOnlyRail,G as __namedExportsOrder,V as default};