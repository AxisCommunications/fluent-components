import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{G as n,K as r}from"./tokens-Ds_F5PRk.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{i as a,n as o,t as s}from"./chunk-4-Cyq1iJ1R.js";import{n as c,r as ee,t as te}from"./chunk-6-5WwDUjlB.js";import{a as l,n as u,t as d}from"./chunk-11-CCIV6lGO.js";import{n as f,o as p,t as m}from"./chunk-18-BntLDXmc.js";import{n as h,r as g,t as _}from"./chunk-25-Dkzk3JH3.js";import{n as v,t as y}from"./src-CaBNopn9.js";function ne(){let[e,t]=(0,b.useState)(`home`),n=S();return(0,x.jsx)(`div`,{className:n.shell,children:(0,x.jsx)(v,{style:{height:`100%`},items:C,footerItems:w,selectedItemId:e,onSelect:t,togglePosition:`bottom`,"aria-label":`Side navigation`})})}var b,x,S,C,w;function T(){return(T=e((()=>{y(),n(),l(),g(),p(),a(),b=t(),x=i(),S=r({shell:{height:`520px`,display:`flex`}}),C=[{id:`home`,label:`Home`,icon:(0,x.jsx)(h,{}),selectedIcon:(0,x.jsx)(_,{})},{id:`workspaces`,label:`Workspaces`,icon:(0,x.jsx)(u,{}),selectedIcon:(0,x.jsx)(d,{})},{id:`onelake`,label:`OneLake`,icon:(0,x.jsx)(f,{}),selectedIcon:(0,x.jsx)(m,{})}],w=[{id:`settings`,label:`Settings`,icon:(0,x.jsx)(o,{}),selectedIcon:(0,x.jsx)(s,{})}]})))()}function re(){let e=O(),[t,n]=(0,E.useState)(`home`);return(0,D.jsx)(`div`,{className:e.shell,children:(0,D.jsx)(v,{style:{height:`100%`},items:k,footerItems:A,selectedItemId:t,onSelect:n,defaultExpanded:!0,defaultOpenItemIds:[`workspaces`],togglePosition:`bottom`,"aria-label":`Side navigation`})})}var E,D,O,k,A;function j(){return(j=e((()=>{y(),n(),l(),g(),p(),ee(),a(),E=t(),D=i(),O=r({shell:{height:`520px`,display:`flex`}}),k=[{id:`home`,label:`Home`,icon:(0,D.jsx)(h,{}),selectedIcon:(0,D.jsx)(_,{})},{id:`workspaces`,label:`Workspaces`,icon:(0,D.jsx)(u,{}),selectedIcon:(0,D.jsx)(d,{}),children:[{id:`workspaces-personal`,label:`Personal`},{id:`workspaces-shared`,label:`Shared with me`},{id:`workspaces-archived`,label:`Archived`}]},{id:`onelake`,label:`OneLake`,icon:(0,D.jsx)(f,{}),selectedIcon:(0,D.jsx)(m,{}),children:[{id:`onelake-catalog`,label:`Data catalog`},{id:`onelake-shortcuts`,label:`Shortcuts`}]}],A=[{id:`profile`,label:`My profile`,icon:(0,D.jsx)(c,{}),selectedIcon:(0,D.jsx)(te,{})},{id:`settings`,label:`Settings`,icon:(0,D.jsx)(o,{}),selectedIcon:(0,D.jsx)(s,{})}]})))()}function M(){let[e,t]=(0,N.useState)(`home`),n=F();return(0,P.jsx)(`div`,{className:n.shell,children:(0,P.jsx)(v,{style:{height:`100%`},items:I,footerItems:L,selectedItemId:e,onSelect:t,togglePosition:`bottom`,"aria-label":`Side navigation`})})}var N,P,F,I,L;function R(){return(R=e((()=>{y(),n(),l(),g(),p(),a(),N=t(),P=i(),F=r({shell:{height:`520px`,display:`flex`}}),I=[{id:`home`,label:`Home`,icon:(0,P.jsx)(h,{}),selectedIcon:(0,P.jsx)(_,{})},{id:`workspaces`,label:`Workspaces`,icon:(0,P.jsx)(u,{}),selectedIcon:(0,P.jsx)(d,{})},{id:`onelake`,label:`OneLake`,icon:(0,P.jsx)(f,{}),selectedIcon:(0,P.jsx)(m,{})}],L=[{id:`settings`,label:`Settings`,icon:(0,P.jsx)(o,{}),selectedIcon:(0,P.jsx)(s,{})}]})))()}function ie(){let[e,t]=(0,z.useState)(`home`),n=V();return(0,B.jsx)(`div`,{className:n.shell,children:(0,B.jsx)(v,{style:{height:`100%`},items:H,collapsible:!1,selectedItemId:e,onSelect:t,"aria-label":`Side navigation`})})}var z,B,V,H;function U(){return(U=e((()=>{y(),n(),l(),g(),p(),z=t(),B=i(),V=r({shell:{height:`520px`,display:`flex`}}),H=[{id:`home`,label:`Home`,icon:(0,B.jsx)(h,{}),selectedIcon:(0,B.jsx)(_,{})},{id:`workspaces`,label:`Workspaces`,icon:(0,B.jsx)(u,{}),selectedIcon:(0,B.jsx)(d,{})},{id:`onelake`,label:`OneLake`,icon:(0,B.jsx)(f,{}),selectedIcon:(0,B.jsx)(m,{})}]})))()}var W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{y(),n(),l(),g(),p(),a(),T(),j(),R(),U(),W=i(),G=r({frame:{display:`flex`,height:`520px`}}),K={title:`UI patterns/Side Navigation`,component:v,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Side Navigation

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
  expandable group of sub-items. Sub-items can use \`children\` to create a
  third-level group.
- **Collapsed with sub-menus** — while the rail is collapsed, an item with
  \`children\` opens a foldout menu on hover (or focus) instead of an inline
  group, so its sub-items stay reachable without expanding the rail.
- **Toggle at the bottom** — \`togglePosition="bottom"\` pins the
  expand/collapse toggle below the items (and any \`footerItems\`) instead of
  above them. Every example below uses it; it is the recommended placement so
  the chevron stays in a predictable spot as the item list grows. The prop
  still defaults to \`"top"\`.

## Guidelines

- Pin the toggle to the bottom with \`togglePosition="bottom"\` so the chevron
  never shifts position when items are added or removed.
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

<p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=44-157"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>`}}},args:{items:[{id:`home`,label:`Home`,icon:(0,W.jsx)(h,{}),selectedIcon:(0,W.jsx)(_,{})},{id:`workspaces`,label:`Workspaces`,icon:(0,W.jsx)(u,{}),selectedIcon:(0,W.jsx)(d,{}),children:[{id:`workspaces-personal`,label:`Personal`},{id:`workspaces-shared`,label:`Shared with me`},{id:`workspaces-team`,label:`Team`,children:[{id:`workspaces-team-members`,label:`Members`}]}]},{id:`onelake`,label:`OneLake`,icon:(0,W.jsx)(f,{}),selectedIcon:(0,W.jsx)(m,{})}],footerItems:[{id:`settings`,label:`Settings`,icon:(0,W.jsx)(o,{}),selectedIcon:(0,W.jsx)(s,{})}],defaultSelectedItemId:`home`,togglePosition:`bottom`,"aria-label":`Side navigation`},argTypes:{items:{control:!1,description:`Top-level items, rendered top to bottom. **Required.**`,table:{type:{summary:`SideNavigationItem[]`}}},footerItems:{control:!1,description:`Items pinned to the bottom of the rail, separated by a divider.`,table:{type:{summary:`SideNavigationItem[]`}}},selectedItemId:{control:!1,description:`The id of the selected item (controlled).`,table:{type:{summary:`string`}}},defaultSelectedItemId:{control:!1,description:`The id of the item selected initially (uncontrolled).`,table:{type:{summary:`string`}}},onSelect:{control:!1,description:`Called with the id of an item, sub-item, or nested sub-item when selected.`,table:{type:{summary:`(id: string) => void`}}},expanded:{control:!1,description:`Whether the rail is expanded to reveal labels (controlled).`,table:{type:{summary:`boolean`}}},defaultExpanded:{control:`boolean`,description:`Whether the rail is expanded initially (uncontrolled).`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onExpandedChange:{control:!1,description:`Called with the next expanded state when the toggle is used.`,table:{type:{summary:`(expanded: boolean) => void`}}},collapsible:{control:`boolean`,description:"Whether to render the expand/collapse toggle button. When `false` the rail stays fixed in its current expanded state.",table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},togglePosition:{control:`radio`,options:[`top`,`bottom`],description:"Where the toggle button is rendered: above the items, or pinned to the bottom alongside `footerItems`.",table:{type:{summary:`"top" | "bottom"`},defaultValue:{summary:`"top"`}}},defaultOpenItemIds:{control:!1,description:`The ids of group items whose nested items are open initially.`,table:{type:{summary:`string[]`},defaultValue:{summary:`[]`}}},expandedWidth:{control:`number`,description:`Width in pixels of the rail when expanded.`,table:{type:{summary:`number`},defaultValue:{summary:`260`}}},expandLabel:{control:`text`,description:`Accessible label and tooltip for the toggle button while collapsed.`,table:{type:{summary:`string`},defaultValue:{summary:`"Expand navigation"`}}},collapseLabel:{control:`text`,description:`Accessible label and tooltip for the toggle button while expanded.`,table:{type:{summary:`string`},defaultValue:{summary:`"Collapse navigation"`}}}}},q={render:e=>{let t=G();return(0,W.jsx)(`div`,{className:t.frame,children:(0,W.jsx)(v,{...e})})}},J={render:()=>{let e=G();return(0,W.jsx)(`div`,{className:e.frame,children:(0,W.jsx)(M,{})})}},Y={render:()=>{let e=G();return(0,W.jsx)(`div`,{className:e.frame,children:(0,W.jsx)(ie,{})})}},X={render:()=>{let e=G();return(0,W.jsx)(`div`,{className:e.frame,children:(0,W.jsx)(re,{})})}},Z={render:()=>{let e=G();return(0,W.jsx)(`div`,{className:e.frame,children:(0,W.jsx)(ne,{})})}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const styles = useStyles();
    return <div className={styles.frame}>
        <SideNavigation {...args} />
      </div>;
  }
}`,...q.parameters?.docs?.source},description:{story:"All args are wired up here — use the **Controls** panel below to toggle\n`togglePosition`, `collapsible`, `defaultExpanded`, `expandedWidth`, and the\ntoggle labels and see the rail update live.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const styles = useStyles();
    return <div className={styles.frame}>
        <CompactSideNavigationExample />
      </div>;
  }
}`,...J.parameters?.docs?.source},description:{story:`A collapsible rail that starts collapsed. The toggle button pinned to the
bottom expands the rail to reveal labels and collapses it back to icons.
\`footerItems\` sit above the toggle.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const styles = useStyles();
    return <div className={styles.frame}>
        <IconOnlySideNavigationExample />
      </div>;
  }
}`,...Y.parameters?.docs?.source},description:{story:"Setting `collapsible={false}` removes the toggle and keeps an icons-only rail.\nLabels stay accessible via `aria-label` and the hover tooltip.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const styles = useStyles();
    return <div className={styles.frame}>
        <CollapsibleSideNavigationExample />
      </div>;
  }
}`,...X.parameters?.docs?.source},description:{story:"Starting expanded with `defaultExpanded`, this rail reveals labels, group\nchevrons, and nested sub-items. Groups seeded with `defaultOpenItemIds` are\nopen initially. Use the toggle button to collapse the rail and hover an\nitem with sub-items to see them appear in a foldout menu instead.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const styles = useStyles();
    return <div className={styles.frame}>
        <BottomToggleSideNavigationExample />
      </div>;
  }
}`,...Z.parameters?.docs?.source},description:{story:'`togglePosition="bottom"` in isolation: the expand/collapse toggle sits below\nthe items, alongside any `footerItems`, instead of above them. The other\nexamples on this page use the same placement.',...Z.parameters?.docs?.description}}},Q=[`Interactive`,`CollapsibleRail`,`IconOnlyRail`,`ExpandedWithSubMenus`,`ToggleAtBottom`]})))()}$();export{J as CollapsibleRail,X as ExpandedWithSubMenus,Y as IconOnlyRail,q as Interactive,Z as ToggleAtBottom,Q as __namedExportsOrder,K as default};