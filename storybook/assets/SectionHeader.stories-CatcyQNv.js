import{a as e,n as t}from"./chunk-BneVvdWh.js";import{En as n,Er as r,Wt as i,ci as a,ii as o,mt as s,pr as c,qi as l,s as u,xi as d}from"./iframe-DN9Zhnka.js";var f,p,m,h,g=t((()=>{u(),f=e(l(),1),p=e(d(),1),m=a({root:{display:`flex`,flexDirection:`column`,gap:o.spacingVerticalXS,width:`100%`,minWidth:0,paddingTop:o.spacingVerticalL,paddingBottom:o.spacingVerticalM,borderBottom:`1px solid ${o.colorNeutralStroke2}`},headerRow:{display:`flex`,alignItems:`flex-start`,justifyContent:`space-between`,gap:o.spacingHorizontalL,width:`100%`,minWidth:0},copy:{display:`flex`,flexDirection:`column`,gap:o.spacingVerticalXXS,minWidth:0,flex:1},meta:{fontSize:o.fontSizeBase100,lineHeight:o.lineHeightBase200,fontWeight:o.fontWeightSemibold,color:o.colorNeutralForeground2,textTransform:`uppercase`,letterSpacing:`0.08em`},title:{fontSize:o.fontSizeBase500,lineHeight:o.lineHeightBase500,fontWeight:o.fontWeightSemibold,color:o.colorNeutralForeground1,margin:0},description:{fontSize:o.fontSizeBase200,lineHeight:o.lineHeightBase300,color:o.colorNeutralForeground2,maxWidth:`72ch`},actions:{display:`flex`,alignItems:`center`,justifyContent:`flex-end`,gap:o.spacingHorizontalS,flexWrap:`wrap`,flexShrink:0}}),h=(0,f.forwardRef)(({title:e,description:t,meta:n,actions:r,className:a,...o},c)=>{let l=m(),u=r?.filter(e=>!!e.label)??[],d=!!(n||e||t);return!d&&u.length===0?null:(0,p.jsx)(`div`,{ref:c,className:[l.root,a].filter(Boolean).join(` `),...o,children:(0,p.jsxs)(`div`,{className:l.headerRow,children:[d?(0,p.jsxs)(`div`,{className:l.copy,children:[n?(0,p.jsx)(s,{className:l.meta,children:n}):null,e?(0,p.jsx)(s,{as:`h2`,className:l.title,children:e}):null,t?(0,p.jsx)(s,{className:l.description,children:t}):null]}):null,u.length>0?(0,p.jsx)(`div`,{className:l.actions,children:u.map((e,t)=>(0,p.jsx)(i,{appearance:e.appearance??`secondary`,icon:e.icon,disabled:e.disabled,onClick:e.onClick,children:e.label},`${e.label}-${t}`))}):null]})})}),h.displayName=`SectionHeader`;try{h.displayName=`SectionHeader`,h.__docgenInfo={description:`SectionHeader - Advanced h2 pattern for section context within a page.

Use this when a standard heading needs supporting text and local actions while the main
page identity remains in the primary page header above.`,displayName:`SectionHeader`,filePath:`/home/runner/work/fluent-components/fluent-components/examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`}],description:`Secondary heading shown beneath the page header.`,name:`title`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`},required:!1,tags:{},type:{name:`string`}},description:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`}],description:`Optional supporting text for the current section.`,name:`description`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`},required:!1,tags:{},type:{name:`string`}},meta:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`}],description:`Optional compact metadata shown above the title.`,name:`meta`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`},required:!1,tags:{},type:{name:`string`}},actions:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`}],description:`Optional actions aligned to the right.`,name:`actions`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`},required:!1,tags:{},type:{name:`SectionHeaderAction[]`}},className:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`}],description:`Optional CSS class.`,name:`className`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),_,v,y,b,x,S,C,w,T,E,D,O,k;t((()=>{n(),g(),_=e(d(),1),v={title:`UI patterns/Section Header`,component:h,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"An advanced h2 pattern for section-level page content. All props are optional: use `title`, `description`, `meta`, and `actions` only when the section needs them, and omit everything for a no-op render.\n\n<p align='right'><a href='https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=25-18'><img width='240' src='./figma-global-components-cover.svg' alt='Open in Figma — AXIS Fluent Global components' /></a></p>"}}},argTypes:{title:{control:`text`,description:`Optional h2 heading for the current section.`,table:{type:{summary:`string | undefined`}}},description:{control:`text`,description:`Optional supporting copy shown below the h2 heading.`,table:{type:{summary:`string | undefined`}}},meta:{control:`text`,description:`Optional compact label shown above the heading.`,table:{type:{summary:`string | undefined`}}},actions:{control:`object`,description:"Optional local action buttons. Each action object supports optional `label`, `onClick`, `icon`, `appearance`, and `disabled` fields. Actions without a label are ignored.",table:{type:{summary:`Array<{ label?: string; onClick?: () => void; icon?: ReactElement | null; appearance?: 'primary' | 'secondary' | 'subtle' | 'transparent'; disabled?: boolean }> | undefined`}}},className:{control:`text`,description:`Optional CSS class applied to the root element.`,table:{type:{summary:`string | undefined`}}}},args:{meta:`Current section`,title:`Deployments`,description:`Use this advanced h2 to introduce the active section, clarify the task, and provide local section actions without repeating page-level identity.`,actions:[{label:`Refresh`,icon:(0,_.jsx)(c,{}),appearance:`secondary`,onClick:()=>console.log(`Refresh`)},{label:`Add target`,icon:(0,_.jsx)(r,{}),appearance:`secondary`,onClick:()=>console.log(`Add target`)}]}},y={parameters:{docs:{description:{story:`Full-featured with all props: meta label, title, description, and actions.`}}},args:{meta:`Current section`,title:`Deployments`,description:`Use this advanced h2 to introduce the active section, clarify the task, and provide local section actions without repeating page-level identity.`,actions:[{label:`Refresh`,icon:(0,_.jsx)(c,{}),appearance:`secondary`,onClick:()=>console.log(`Refresh`)},{label:`Add target`,icon:(0,_.jsx)(r,{}),appearance:`secondary`,onClick:()=>console.log(`Add target`)}]}},b={parameters:{docs:{description:{story:`Only a title, no meta, description, or actions.`}}},args:{title:`Deployments`,description:void 0,meta:void 0,actions:void 0}},x={parameters:{docs:{description:{story:`Title with actions, no meta or description.`}}},args:{title:`Deployments`,description:void 0,meta:void 0,actions:[{label:`Refresh`,icon:(0,_.jsx)(c,{}),appearance:`secondary`,onClick:()=>console.log(`Refresh`)},{label:`Add target`,icon:(0,_.jsx)(r,{}),appearance:`secondary`,onClick:()=>console.log(`Add target`)}]}},S={parameters:{docs:{description:{story:`Meta, title, and description, but no actions.`}}},args:{meta:`Current section`,title:`Deployments`,description:`Section with meta, title, and description but no action buttons.`,actions:void 0}},C={parameters:{docs:{description:{story:`Meta, title, and actions, but no description.`}}},args:{meta:`Current section`,title:`Deployments`,description:void 0,actions:[{label:`Refresh`,icon:(0,_.jsx)(c,{}),appearance:`secondary`,onClick:()=>console.log(`Refresh`)},{label:`Add target`,icon:(0,_.jsx)(r,{}),appearance:`secondary`,onClick:()=>console.log(`Add target`)}]}},w={parameters:{docs:{description:{story:`Only a title, no meta, description, or actions.`}}},args:{title:`Deployments`,description:void 0,meta:void 0,actions:void 0}},T={parameters:{docs:{description:{story:`Title with meta label, no description or actions.`}}},args:{meta:`Current section`,title:`Deployments`,description:void 0,actions:void 0}},E={parameters:{docs:{description:{story:`Meta label with title and description, but no actions.`}}},args:{meta:`Current section`,title:`Deployments`,description:`Section with meta text and description but no actions.`,actions:void 0}},D={parameters:{docs:{description:{story:`Meta label with actions, but no title or description.`}}},args:{meta:`Quick actions`,title:void 0,description:void 0,actions:[{label:`Refresh`,icon:(0,_.jsx)(c,{}),appearance:`secondary`,onClick:()=>console.log(`Refresh`)},{label:`Add target`,icon:(0,_.jsx)(r,{}),appearance:`secondary`,onClick:()=>console.log(`Add target`)}]}},O={parameters:{docs:{description:{story:`All props undefined, component renders null with no visual presence.`}}},args:{title:void 0,description:void 0,meta:void 0,actions:void 0}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Full-featured with all props: meta label, title, description, and actions."
      }
    }
  },
  args: {
    meta: "Current section",
    title: "Deployments",
    description: "Use this advanced h2 to introduce the active section, clarify the task, and provide local section actions without repeating page-level identity.",
    actions: [{
      label: "Refresh",
      icon: <ArrowSyncRegular />,
      appearance: "secondary",
      onClick: () => console.log("Refresh")
    }, {
      label: "Add target",
      icon: <AddRegular />,
      appearance: "secondary",
      onClick: () => console.log("Add target")
    }]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Only a title, no meta, description, or actions."
      }
    }
  },
  args: {
    title: "Deployments",
    description: undefined,
    meta: undefined,
    actions: undefined
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Title with actions, no meta or description."
      }
    }
  },
  args: {
    title: "Deployments",
    description: undefined,
    meta: undefined,
    actions: [{
      label: "Refresh",
      icon: <ArrowSyncRegular />,
      appearance: "secondary",
      onClick: () => console.log("Refresh")
    }, {
      label: "Add target",
      icon: <AddRegular />,
      appearance: "secondary",
      onClick: () => console.log("Add target")
    }]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Meta, title, and description, but no actions."
      }
    }
  },
  args: {
    meta: "Current section",
    title: "Deployments",
    description: "Section with meta, title, and description but no action buttons.",
    actions: undefined
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Meta, title, and actions, but no description."
      }
    }
  },
  args: {
    meta: "Current section",
    title: "Deployments",
    description: undefined,
    actions: [{
      label: "Refresh",
      icon: <ArrowSyncRegular />,
      appearance: "secondary",
      onClick: () => console.log("Refresh")
    }, {
      label: "Add target",
      icon: <AddRegular />,
      appearance: "secondary",
      onClick: () => console.log("Add target")
    }]
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Only a title, no meta, description, or actions."
      }
    }
  },
  args: {
    title: "Deployments",
    description: undefined,
    meta: undefined,
    actions: undefined
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Title with meta label, no description or actions."
      }
    }
  },
  args: {
    meta: "Current section",
    title: "Deployments",
    description: undefined,
    actions: undefined
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Meta label with title and description, but no actions."
      }
    }
  },
  args: {
    meta: "Current section",
    title: "Deployments",
    description: "Section with meta text and description but no actions.",
    actions: undefined
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Meta label with actions, but no title or description."
      }
    }
  },
  args: {
    meta: "Quick actions",
    title: undefined,
    description: undefined,
    actions: [{
      label: "Refresh",
      icon: <ArrowSyncRegular />,
      appearance: "secondary",
      onClick: () => console.log("Refresh")
    }, {
      label: "Add target",
      icon: <AddRegular />,
      appearance: "secondary",
      onClick: () => console.log("Add target")
    }]
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "All props undefined, component renders null with no visual presence."
      }
    }
  },
  args: {
    title: undefined,
    description: undefined,
    meta: undefined,
    actions: undefined
  }
}`,...O.parameters?.docs?.source}}},k=[`CurrentSectionHeader`,`Minimal`,`WithActionsOnly`,`WithoutActions`,`WithoutDescription`,`TitleOnly`,`TitleAndMeta`,`WithMetaAndDescription`,`ActionsWithoutTitle`,`Empty`]}))();export{D as ActionsWithoutTitle,y as CurrentSectionHeader,O as Empty,b as Minimal,T as TitleAndMeta,w as TitleOnly,x as WithActionsOnly,E as WithMetaAndDescription,S as WithoutActions,C as WithoutDescription,k as __namedExportsOrder,v as default};