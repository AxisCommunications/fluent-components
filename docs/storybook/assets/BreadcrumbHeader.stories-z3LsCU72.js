import{a as e,n as t}from"./chunk-BneVvdWh.js";import{xi as n}from"./iframe-B4E31XMG.js";import{n as r,t as i}from"./BreadcrumbHeader-pcdbDMZk.js";var a,o,s,c,l,u,d;t((()=>{r(),a=e(n(),1),o={title:`UI patterns/Breadcrumb Header`,component:i,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Breadcrumb Header Component

A header component essential for navigation, showcasing a clear title that indicates the current
selection or a breadcrumb trail to illustrate the user's path. This aids users in understanding
their location within the application.

## Properties

The compact variant has a low visual emphasis and only displays the breadcrumb trail and title.
This variant is recommended to use when:

- Navigation paths are short, simple, or self-explanatory
- Space or layout constraints prevent using the full page header

## Behaviour

In responsive designs, when space is limited, the breadcrumb component smartly collapses its
central content into a "More" menu, as detailed in the
[breadcrumb documentation](https://react.fluentui.dev/?path=/docs/components-breadcrumb--docs).

<p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=53-157"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>`}}},argTypes:{breadcrumbs:{control:`object`,description:"Breadcrumb items shown before the title. Each item supports a `label` and an optional `onClick`. The trail collapses into a 'More' menu when space is limited.",table:{type:{summary:`Array<{ label: string; onClick?: () => void }>`}}},title:{control:`text`,description:`Main title shown after the breadcrumb trail.`,table:{type:{summary:`string`}}},icon:{control:!1,description:`Optional leading icon shown in the title area.`,table:{type:{summary:`ReactNode`}}},maxDisplayedItems:{control:`number`,description:`Maximum number of breadcrumb items to display before collapsing the middle items into an overflow menu.`,table:{type:{summary:`number | undefined`}}},ariaLabel:{control:`text`,description:`Accessible label for the breadcrumb navigation landmark.`,table:{type:{summary:`string | undefined`}}},className:{control:`text`,description:`Optional CSS class applied to the root element.`,table:{type:{summary:`string | undefined`}}}}},s={args:{breadcrumbs:[{label:`Europe`,onClick:()=>console.log(`Europe`)},{label:`Norway`,onClick:()=>console.log(`Norway`)},{label:`Bergen`,onClick:()=>console.log(`Bergen`)}],title:`City`}},c={args:{breadcrumbs:[{label:`Global Regions`},{label:`Northern Europe`},{label:`Western Norway`},{label:`Bergen Municipality`}],title:`District Overview`}},l={decorators:[e=>(0,a.jsx)(`div`,{style:{maxWidth:380,border:`1px dashed #ccc`,padding:8,resize:`horizontal`,overflow:`auto`},children:(0,a.jsx)(e,{})})],args:{breadcrumbs:[{label:`Europe`,onClick:()=>console.log(`Europe`)},{label:`Norway`,onClick:()=>console.log(`Norway`)},{label:`Bergen`,onClick:()=>console.log(`Bergen`)},{label:`District`,onClick:()=>console.log(`District`)}],title:`City`}},u={render:e=>(0,a.jsx)(i,{...e}),args:{breadcrumbs:[{label:`Europe`,onClick:()=>console.log(`Europe`)},{label:`Norway`,onClick:()=>console.log(`Norway`)},{label:`Bergen`,onClick:()=>console.log(`Bergen`)}],title:`City`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: "Europe",
      onClick: () => console.log("Europe")
    }, {
      label: "Norway",
      onClick: () => console.log("Norway")
    }, {
      label: "Bergen",
      onClick: () => console.log("Bergen")
    }],
    title: "City"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: "Global Regions"
    }, {
      label: "Northern Europe"
    }, {
      label: "Western Norway"
    }, {
      label: "Bergen Municipality"
    }],
    title: "District Overview"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    maxWidth: 380,
    border: "1px dashed #ccc",
    padding: 8,
    resize: "horizontal",
    overflow: "auto"
  }}>
        <Story />
      </div>],
  args: {
    breadcrumbs: [{
      label: "Europe",
      onClick: () => console.log("Europe")
    }, {
      label: "Norway",
      onClick: () => console.log("Norway")
    }, {
      label: "Bergen",
      onClick: () => console.log("Bergen")
    }, {
      label: "District",
      onClick: () => console.log("District")
    }],
    title: "City"
  }
}`,...l.parameters?.docs?.source},description:{story:`Resize the container to see breadcrumbs progressively collapse into an
overflow menu as space becomes limited.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <BreadcrumbHeader {...args} />,
  args: {
    breadcrumbs: [{
      label: "Europe",
      onClick: () => console.log("Europe")
    }, {
      label: "Norway",
      onClick: () => console.log("Norway")
    }, {
      label: "Bergen",
      onClick: () => console.log("Bergen")
    }],
    title: "City"
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`LongTrail`,`Overflow`,`Interactive`]}))();export{s as Default,u as Interactive,c as LongTrail,l as Overflow,d as __namedExportsOrder,o as default};