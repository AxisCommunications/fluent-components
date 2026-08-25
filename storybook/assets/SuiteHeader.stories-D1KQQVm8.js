import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{G as n,K as r,n as i,t as a}from"./tokens-DaV9uDtE.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{a as s,t as c}from"./chunk-0-B15AoeJD.js";import{i as l,n as u,r as d}from"./chunk-4-JV1Q0e_s.js";import{i as f,n as p}from"./chunk-9-BGRmWMl7.js";import{f as m,t as h}from"./chunk-24-DANxmirD.js";import{a as g,i as _,n as v,r as y,t as b}from"./SuiteHeader-DOZP0utW.js";import{n as x,t as S}from"./Divider-Hp9t2yR4.js";import{n as C,t as w}from"./Link-D6tG7JMp.js";var T;function E(){return(E=e((()=>{T=``+new URL(`logo-black-wIEAdYRZ.svg`,import.meta.url).href})))()}var D;function O(){return(O=e((()=>{D=``+new URL(`qr-code-btqMQrIz.svg`,import.meta.url).href})))()}function k(){let e=P();return(0,j.jsx)(`div`,{className:e.content,children:N.map((t,n)=>(0,j.jsxs)(A.Fragment,{children:[n>0&&(0,j.jsx)(S,{}),(0,j.jsxs)(`div`,{className:e.section,children:[(0,j.jsx)(w,{href:t.href,target:`_blank`,rel:`noopener noreferrer`,children:t.title}),(0,j.jsx)(`img`,{className:e.qr,src:D,alt:`Scan to open ${t.title}`})]})]},t.id))})}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{x(),C(),n(),a(),f(),s(),m(),g(),l(),A=t(),E(),O(),y(),j=o(),M={title:`UI patterns/Suite Header`,component:b,tags:[`autodocs`],parameters:{layout:`fullscreen`,fitContent:!0,docs:{description:{component:`A suite header pattern with app launcher, product name, global search, quick actions, and user avatar. The quick-action buttons collapse one by one into a "more" menu when the header runs out of horizontal space.

<p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=92-523"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>`}}}},N=[{id:`manual`,title:`User manual`,href:`https://help.axis.com`},{id:`whats-new`,title:`What's new`,href:`https://help.axis.com`},{id:`breaking`,title:`Breaking changes`,href:`https://help.axis.com`}],P=r({content:{display:`grid`,rowGap:i.spacingVerticalM},section:{display:`grid`,justifyItems:`start`,rowGap:i.spacingVerticalXS},qr:{display:`block`,width:`130px`,height:`130px`}}),F={args:{productName:`Product name`,showSearch:!1,showOrganizationPicker:!1}},I={args:{productName:`Product name`,showSearch:!0,showOrganizationPicker:!1}},L={args:{productName:`Product name`,showSearch:!1,showOrganizationPicker:!0}},R={args:{productName:`Product name`,showSearch:!1,showOrganizationPicker:!1,launcherOrganizationItems:v}},z={args:{productName:`Product name`,showSearch:!1,showOrganizationPicker:!1,showTimeDate:!0}},B={args:{companyLogo:T,productName:`Axis Management`,showSearch:!1,showOrganizationPicker:!1}},V=[{id:`notifications`,icon:(0,j.jsx)(p,{}),ariaLabel:`Notifications`},{id:`messages`,icon:(0,j.jsx)(h,{}),ariaLabel:`Messages`},{id:`calendar`,icon:(0,j.jsx)(c,{}),ariaLabel:`Calendar`},{id:`share`,icon:(0,j.jsx)(d,{}),ariaLabel:`Share`},{id:`settings`,icon:(0,j.jsx)(u,{}),ariaLabel:`Settings`},{id:`help`,icon:(0,j.jsx)(_,{}),ariaLabel:`Help`}],H=r({frame:{width:`520px`,maxWidth:`100%`,resize:`horizontal`,overflow:`hidden`,borderRight:`1px solid ${i.colorNeutralStroke2}`}}),U={render:e=>{let t=H();return(0,j.jsx)(`div`,{className:t.frame,children:(0,j.jsx)(b,{...e})})},args:{productName:`Product name`,showSearch:!1,showOrganizationPicker:!1,utilityActions:V}},W=[{id:`notifications`,icon:(0,j.jsx)(p,{}),ariaLabel:`Notifications`},{id:`settings`,icon:(0,j.jsx)(u,{}),ariaLabel:`Settings`},{id:`help`,icon:(0,j.jsx)(_,{}),ariaLabel:`Help`,flyout:(0,j.jsx)(k,{})}],G={args:{productName:`Product name`,showSearch:!1,showOrganizationPicker:!1,utilityActions:W}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: false
  }
}`,...F.parameters?.docs?.source},description:{story:`The minimal header: app launcher, product name, quick actions, and avatar.
Search and the organization picker are turned off.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    productName: "Product name",
    showSearch: true,
    showOrganizationPicker: false
  }
}`,...I.parameters?.docs?.source},description:{story:`Enables the global search field in the center of the header.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: true
  }
}`,...L.parameters?.docs?.source},description:{story:`Adds the organization picker to the quick-action cluster on the right.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: false,
    launcherOrganizationItems: defaultLauncherOrganizationItems
  }
}`,...R.parameters?.docs?.source},description:{story:`Adds the optional sub-menu to the app launcher. Open the app launcher to see
the apps grid followed by the "Sub menu" section. The sub-menu is only
rendered when \`launcherOrganizationItems\` is provided.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: false,
    showTimeDate: true
  }
}`,...z.parameters?.docs?.source},description:{story:`Shows the time and date block to the left of the quick actions.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    companyLogo: logoBlack,
    productName: "Axis Management",
    showSearch: false,
    showOrganizationPicker: false
  }
}`,...B.parameters?.docs?.source},description:{story:`Displays a company logo before the product name.`,...B.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:`In a constrained container the quick-action buttons collapse one by one into
a "more" menu as space runs out. Drag the right edge of the frame to move the
actions in and out of the overflow menu.`,...U.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: false,
    utilityActions: helpActions
  }
}`,...G.parameters?.docs?.source},description:{story:`Click the help button to open its flyout. Actions can carry a \`flyout\` of
their own, which opens in a popover anchored to the button just like the app
launcher.`,...G.parameters?.docs?.description}}},K=[`Default`,`WithSearch`,`WithOrganizationPicker`,`WithSubMenuLauncher`,`WithTimeDate`,`WithLogo`,`CollapsingActions`,`WithHelpFlyout`]})))()}q();export{U as CollapsingActions,F as Default,G as WithHelpFlyout,B as WithLogo,L as WithOrganizationPicker,I as WithSearch,R as WithSubMenuLauncher,z as WithTimeDate,K as __namedExportsOrder,M as default};