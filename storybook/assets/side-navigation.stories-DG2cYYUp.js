import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{H as n,U as r}from"./tokens-ChQznooH.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{i as a,n as o,t as s}from"./chunk-4-DAX5JFnL.js";import{n as c,r as l,t as u}from"./chunk-6-DR5SBlLe.js";import{a as d,n as f,t as p}from"./chunk-11-DdjhFvvt.js";import{n as m,o as h,t as g}from"./chunk-18-DLqW5fvA.js";import{n as _,r as v,t as y}from"./chunk-25-CTClllbi.js";import{n as b,t as x}from"./src-B9VFS6gt.js";function S(){let e=T(),[t,n]=(0,C.useState)(`home`);return(0,w.jsx)(`div`,{className:e.shell,children:(0,w.jsx)(b,{style:{height:`100%`},items:E,footerItems:D,selectedItemId:t,onSelect:n,defaultExpanded:!0,defaultOpenItemIds:[`workspaces`],"aria-label":`Side navigation`})})}var C,w,T,E,D;function O(){return(O=e((()=>{x(),n(),d(),v(),h(),l(),a(),C=t(),w=i(),T=r({shell:{height:`520px`,display:`flex`}}),E=[{id:`home`,label:`Home`,icon:(0,w.jsx)(_,{}),selectedIcon:(0,w.jsx)(y,{})},{id:`workspaces`,label:`Workspaces`,icon:(0,w.jsx)(f,{}),selectedIcon:(0,w.jsx)(p,{}),children:[{id:`workspaces-personal`,label:`Personal`},{id:`workspaces-shared`,label:`Shared with me`},{id:`workspaces-archived`,label:`Archived`}]},{id:`onelake`,label:`OneLake`,icon:(0,w.jsx)(m,{}),selectedIcon:(0,w.jsx)(g,{}),children:[{id:`onelake-catalog`,label:`Data catalog`},{id:`onelake-shortcuts`,label:`Shortcuts`}]}],D=[{id:`profile`,label:`My profile`,icon:(0,w.jsx)(c,{}),selectedIcon:(0,w.jsx)(u,{})},{id:`settings`,label:`Settings`,icon:(0,w.jsx)(o,{}),selectedIcon:(0,w.jsx)(s,{})}]})))()}function k(){let[e,t]=(0,A.useState)(`home`),n=M();return(0,j.jsx)(`div`,{className:n.shell,children:(0,j.jsx)(b,{style:{height:`100%`},items:N,footerItems:P,selectedItemId:e,onSelect:t,"aria-label":`Side navigation`})})}var A,j,M,N,P;function F(){return(F=e((()=>{x(),n(),d(),v(),h(),a(),A=t(),j=i(),M=r({shell:{height:`520px`,display:`flex`}}),N=[{id:`home`,label:`Home`,icon:(0,j.jsx)(_,{}),selectedIcon:(0,j.jsx)(y,{})},{id:`workspaces`,label:`Workspaces`,icon:(0,j.jsx)(f,{}),selectedIcon:(0,j.jsx)(p,{})},{id:`onelake`,label:`OneLake`,icon:(0,j.jsx)(m,{}),selectedIcon:(0,j.jsx)(g,{})}],P=[{id:`settings`,label:`Settings`,icon:(0,j.jsx)(o,{}),selectedIcon:(0,j.jsx)(s,{})}]})))()}function I(){let[e,t]=(0,L.useState)(`home`),n=z();return(0,R.jsx)(`div`,{className:n.shell,children:(0,R.jsx)(b,{style:{height:`100%`},items:B,collapsible:!1,selectedItemId:e,onSelect:t,"aria-label":`Side navigation`})})}var L,R,z,B;function V(){return(V=e((()=>{x(),n(),d(),v(),h(),L=t(),R=i(),z=r({shell:{height:`520px`,display:`flex`}}),B=[{id:`home`,label:`Home`,icon:(0,R.jsx)(_,{}),selectedIcon:(0,R.jsx)(y,{})},{id:`workspaces`,label:`Workspaces`,icon:(0,R.jsx)(f,{}),selectedIcon:(0,R.jsx)(p,{})},{id:`onelake`,label:`OneLake`,icon:(0,R.jsx)(m,{}),selectedIcon:(0,R.jsx)(g,{})}]})))()}var H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{x(),n(),O(),F(),V(),H=i(),U=r({frame:{display:`flex`,height:`520px`}}),W={title:`UI patterns/Side Navigation`,component:b,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Side Navigation

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

<p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=44-157"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>`}}}},G={render:()=>{let e=U();return(0,H.jsx)(`div`,{className:e.frame,children:(0,H.jsx)(k,{})})}},K={render:()=>{let e=U();return(0,H.jsx)(`div`,{className:e.frame,children:(0,H.jsx)(I,{})})}},q={render:()=>{let e=U();return(0,H.jsx)(`div`,{className:e.frame,children:(0,H.jsx)(S,{})})}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const styles = useStyles();
    return <div className={styles.frame}>
        <CompactSideNavigationExample />
      </div>;
  }
}`,...G.parameters?.docs?.source},description:{story:`A collapsible rail that starts collapsed. The toggle button at the top expands
the rail to reveal labels and collapses it back to icons. \`footerItems\` are
pinned to the bottom.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const styles = useStyles();
    return <div className={styles.frame}>
        <IconOnlySideNavigationExample />
      </div>;
  }
}`,...K.parameters?.docs?.source},description:{story:"Setting `collapsible={false}` removes the toggle and keeps an icons-only rail.\nLabels stay accessible via `aria-label` and the hover tooltip.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const styles = useStyles();
    return <div className={styles.frame}>
        <CollapsibleSideNavigationExample />
      </div>;
  }
}`,...q.parameters?.docs?.source},description:{story:"Starting expanded with `defaultExpanded`, this rail reveals labels, group\nchevrons, and nested sub-items. Groups seeded with `defaultOpenItemIds` are\nopen initially.",...q.parameters?.docs?.description}}},J=[`CollapsibleRail`,`IconOnlyRail`,`ExpandedWithSubMenus`]})))()}Y();export{G as CollapsibleRail,q as ExpandedWithSubMenus,K as IconOnlyRail,J as __namedExportsOrder,W as default};