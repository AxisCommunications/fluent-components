import{a as e,n as t}from"./chunk-BneVvdWh.js";import{En as n,Hn as r,Kr as i,Rr as a,Yn as o,Zr as s,ci as c,ii as l,qr as u,s as d,xi as f}from"./iframe-DN9Zhnka.js";import{n as p,r as m,t as h}from"./SuiteHeader-3dhOzzNs.js";var g,_=t((()=>{g=``+new URL(`logo-black-wIEAdYRZ.svg`,import.meta.url).href})),v,y,b,x,S,C,w,T,E,D,O,k;t((()=>{d(),n(),_(),m(),v=e(f(),1),y={title:`UI patterns/Suite Header`,component:h,tags:[`autodocs`],parameters:{layout:`fullscreen`,fitContent:!0,docs:{description:{component:`A suite header pattern with app launcher, product name, global search, quick actions, and user avatar. The quick-action buttons collapse one by one into a "more" menu when the header runs out of horizontal space.

<p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=92-523"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>`}}}},b={args:{productName:`Product name`,showSearch:!1,showOrganizationPicker:!1}},x={args:{productName:`Product name`,showSearch:!0,showOrganizationPicker:!1}},S={args:{productName:`Product name`,showSearch:!1,showOrganizationPicker:!0}},C={args:{productName:`Product name`,showSearch:!1,showOrganizationPicker:!1,launcherOrganizationItems:p}},w={args:{productName:`Product name`,showSearch:!1,showOrganizationPicker:!1,showTimeDate:!0}},T={args:{companyLogo:g,productName:`Axis Management`,showSearch:!1,showOrganizationPicker:!1}},E=[{id:`notifications`,icon:(0,v.jsx)(a,{}),ariaLabel:`Notifications`},{id:`messages`,icon:(0,v.jsx)(o,{}),ariaLabel:`Messages`},{id:`calendar`,icon:(0,v.jsx)(s,{}),ariaLabel:`Calendar`},{id:`share`,icon:(0,v.jsx)(u,{}),ariaLabel:`Share`},{id:`settings`,icon:(0,v.jsx)(i,{}),ariaLabel:`Settings`},{id:`help`,icon:(0,v.jsx)(r,{}),ariaLabel:`Help`}],D=c({frame:{width:`520px`,maxWidth:`100%`,resize:`horizontal`,overflow:`hidden`,borderRight:`1px solid ${l.colorNeutralStroke2}`}}),O={render:e=>(0,v.jsx)(`div`,{className:D().frame,children:(0,v.jsx)(h,{...e})}),args:{productName:`Product name`,showSearch:!1,showOrganizationPicker:!1,utilityActions:E}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: false
  }
}`,...b.parameters?.docs?.source},description:{story:`The minimal header: app launcher, product name, quick actions, and avatar.
Search and the organization picker are turned off.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    productName: "Product name",
    showSearch: true,
    showOrganizationPicker: false
  }
}`,...x.parameters?.docs?.source},description:{story:`Enables the global search field in the center of the header.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: true
  }
}`,...S.parameters?.docs?.source},description:{story:`Adds the organization picker to the quick-action cluster on the right.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: false,
    launcherOrganizationItems: defaultLauncherOrganizationItems
  }
}`,...C.parameters?.docs?.source},description:{story:`Adds the optional sub-menu to the app launcher. Open the app launcher to see
the apps grid followed by the "Sub menu" section. The sub-menu is only
rendered when \`launcherOrganizationItems\` is provided.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: false,
    showTimeDate: true
  }
}`,...w.parameters?.docs?.source},description:{story:`Shows the time and date block to the left of the quick actions.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    companyLogo: logoBlack,
    productName: "Axis Management",
    showSearch: false,
    showOrganizationPicker: false
  }
}`,...T.parameters?.docs?.source},description:{story:`Displays a company logo before the product name.`,...T.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`In a constrained container the quick-action buttons collapse one by one into
a "more" menu as space runs out. Drag the right edge of the frame to move the
actions in and out of the overflow menu.`,...O.parameters?.docs?.description}}},k=[`Default`,`WithSearch`,`WithOrganizationPicker`,`WithSubMenuLauncher`,`WithTimeDate`,`WithLogo`,`CollapsingActions`]}))();export{O as CollapsingActions,b as Default,T as WithLogo,S as WithOrganizationPicker,x as WithSearch,C as WithSubMenuLauncher,w as WithTimeDate,k as __namedExportsOrder,y as default};