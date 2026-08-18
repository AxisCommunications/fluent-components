import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{H as t,U as n,n as r,t as i}from"./tokens-ChQznooH.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{i as o,t as s}from"./chunk-0-BLX09C76.js";import{i as c,n as l,r as u}from"./chunk-4-DAX5JFnL.js";import{i as d,n as f}from"./chunk-9-8yYcN3yM.js";import{d as p,t as m}from"./chunk-24-j5KtzyBs.js";import{n as h,r as g}from"./chunk-29-BgEPX_-V.js";import{n as _,r as v,t as y}from"./SuiteHeader-nz2w4oMc.js";var b;function x(){return(x=e((()=>{b=``+new URL(`logo-black-wIEAdYRZ.svg`,import.meta.url).href})))()}var S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{t(),i(),d(),o(),p(),g(),c(),x(),v(),S=a(),C={title:`UI patterns/Suite Header`,component:y,tags:[`autodocs`],parameters:{layout:`fullscreen`,fitContent:!0,docs:{description:{component:`A suite header pattern with app launcher, product name, global search, quick actions, and user avatar. The quick-action buttons collapse one by one into a "more" menu when the header runs out of horizontal space.

<p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=92-523"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>`}}}},w={args:{productName:`Product name`,showSearch:!1,showOrganizationPicker:!1}},T={args:{productName:`Product name`,showSearch:!0,showOrganizationPicker:!1}},E={args:{productName:`Product name`,showSearch:!1,showOrganizationPicker:!0}},D={args:{productName:`Product name`,showSearch:!1,showOrganizationPicker:!1,launcherOrganizationItems:_}},O={args:{productName:`Product name`,showSearch:!1,showOrganizationPicker:!1,showTimeDate:!0}},k={args:{companyLogo:b,productName:`Axis Management`,showSearch:!1,showOrganizationPicker:!1}},A=[{id:`notifications`,icon:(0,S.jsx)(f,{}),ariaLabel:`Notifications`},{id:`messages`,icon:(0,S.jsx)(m,{}),ariaLabel:`Messages`},{id:`calendar`,icon:(0,S.jsx)(s,{}),ariaLabel:`Calendar`},{id:`share`,icon:(0,S.jsx)(u,{}),ariaLabel:`Share`},{id:`settings`,icon:(0,S.jsx)(l,{}),ariaLabel:`Settings`},{id:`help`,icon:(0,S.jsx)(h,{}),ariaLabel:`Help`}],j=n({frame:{width:`520px`,maxWidth:`100%`,resize:`horizontal`,overflow:`hidden`,borderRight:`1px solid ${r.colorNeutralStroke2}`}}),M={render:e=>{let t=j();return(0,S.jsx)(`div`,{className:t.frame,children:(0,S.jsx)(y,{...e})})},args:{productName:`Product name`,showSearch:!1,showOrganizationPicker:!1,utilityActions:A}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: false
  }
}`,...w.parameters?.docs?.source},description:{story:`The minimal header: app launcher, product name, quick actions, and avatar.
Search and the organization picker are turned off.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    productName: "Product name",
    showSearch: true,
    showOrganizationPicker: false
  }
}`,...T.parameters?.docs?.source},description:{story:`Enables the global search field in the center of the header.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: true
  }
}`,...E.parameters?.docs?.source},description:{story:`Adds the organization picker to the quick-action cluster on the right.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: false,
    launcherOrganizationItems: defaultLauncherOrganizationItems
  }
}`,...D.parameters?.docs?.source},description:{story:`Adds the optional sub-menu to the app launcher. Open the app launcher to see
the apps grid followed by the "Sub menu" section. The sub-menu is only
rendered when \`launcherOrganizationItems\` is provided.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: false,
    showTimeDate: true
  }
}`,...O.parameters?.docs?.source},description:{story:`Shows the time and date block to the left of the quick actions.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    companyLogo: logoBlack,
    productName: "Axis Management",
    showSearch: false,
    showOrganizationPicker: false
  }
}`,...k.parameters?.docs?.source},description:{story:`Displays a company logo before the product name.`,...k.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const styles = useCollapsingStyles();
    return <div className={styles.frame}>
        <SuiteHeader {...args} />
      </div>;
  },
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: false,
    utilityActions: manyActions
  }
}`,...M.parameters?.docs?.source},description:{story:`In a constrained container the quick-action buttons collapse one by one into
a "more" menu as space runs out. Drag the right edge of the frame to move the
actions in and out of the overflow menu.`,...M.parameters?.docs?.description}}},N=[`Default`,`WithSearch`,`WithOrganizationPicker`,`WithSubMenuLauncher`,`WithTimeDate`,`WithLogo`,`CollapsingActions`]})))()}P();export{M as CollapsingActions,w as Default,k as WithLogo,E as WithOrganizationPicker,T as WithSearch,D as WithSubMenuLauncher,O as WithTimeDate,N as __namedExportsOrder,C as default};