import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{H as n,U as r,n as i,t as a}from"./tokens-CCfXmbaE.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{o as s,t as c}from"./chunk-13-DCzUZVFM.js";import{l,p as u}from"./chunk-21-By1xjZax.js";import{n as d,t as f}from"./Button-B06n4cwG.js";import{n as p,t as m}from"./Text-se-pQd1K.js";var h,g,_,v;function y(){return(y=e((()=>{d(),p(),n(),a(),h=t(),g=o(),_=r({root:{display:`flex`,flexDirection:`column`,gap:i.spacingVerticalXS,width:`100%`,minWidth:0,paddingTop:i.spacingVerticalL,paddingBottom:i.spacingVerticalM,borderBottom:`1px solid ${i.colorNeutralStroke2}`},headerRow:{display:`flex`,alignItems:`flex-start`,justifyContent:`space-between`,gap:i.spacingHorizontalL,width:`100%`,minWidth:0},copy:{display:`flex`,flexDirection:`column`,gap:i.spacingVerticalXXS,minWidth:0,flex:1},meta:{fontSize:i.fontSizeBase100,lineHeight:i.lineHeightBase200,fontWeight:i.fontWeightSemibold,color:i.colorNeutralForeground2,textTransform:`uppercase`,letterSpacing:`0.08em`},title:{fontSize:i.fontSizeBase500,lineHeight:i.lineHeightBase500,fontWeight:i.fontWeightSemibold,color:i.colorNeutralForeground1,margin:0},description:{fontSize:i.fontSizeBase200,lineHeight:i.lineHeightBase300,color:i.colorNeutralForeground2,maxWidth:`72ch`},actions:{display:`flex`,alignItems:`center`,justifyContent:`flex-end`,gap:i.spacingHorizontalS,flexWrap:`wrap`,flexShrink:0}}),v=(0,h.forwardRef)(({title:e,description:t,meta:n,actions:r,className:i,...a},o)=>{let s=_(),c=r?.filter(e=>!!e.label)??[],l=!!(n||e||t);return!l&&c.length===0?null:(0,g.jsx)(`div`,{ref:o,className:[s.root,i].filter(Boolean).join(` `),...a,children:(0,g.jsxs)(`div`,{className:s.headerRow,children:[l?(0,g.jsxs)(`div`,{className:s.copy,children:[n?(0,g.jsx)(m,{className:s.meta,children:n}):null,e?(0,g.jsx)(m,{as:`h2`,className:s.title,children:e}):null,t?(0,g.jsx)(m,{className:s.description,children:t}):null]}):null,c.length>0?(0,g.jsx)(`div`,{className:s.actions,children:c.map((e,t)=>(0,g.jsx)(f,{appearance:e.appearance??`secondary`,icon:e.icon,disabled:e.disabled,onClick:e.onClick,children:e.label},`${e.label}-${t}`))}):null]})})}),v.displayName=`SectionHeader`;try{v.displayName=`SectionHeader`,v.__docgenInfo={description:`SectionHeader - Advanced h2 pattern for section context within a page.

Use this when a standard heading needs supporting text and local actions while the main
page identity remains in the primary page header above.`,displayName:`SectionHeader`,filePath:`/home/runner/work/fluent-components/fluent-components/examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`}],description:`Secondary heading shown beneath the page header.`,name:`title`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`},required:!1,tags:{},type:{name:`string`}},description:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`}],description:`Optional supporting text for the current section.`,name:`description`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`},required:!1,tags:{},type:{name:`string`}},meta:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`}],description:`Optional compact metadata shown above the title.`,name:`meta`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`},required:!1,tags:{},type:{name:`string`}},actions:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`}],description:`Optional actions aligned to the right.`,name:`actions`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`},required:!1,tags:{},type:{name:`SectionHeaderAction[]`}},className:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`}],description:`Optional CSS class.`,name:`className`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/SectionHeader.tsx`,name:`SectionHeaderProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{s(),u(),y(),b=o(),x={title:`UI patterns/Section Header`,component:v,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"An advanced h2 pattern for section-level page content. All props are optional: use `title`, `description`, `meta`, and `actions` only when the section needs them, and omit everything for a no-op render.\n\n<p align='right'><a href='https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=25-18'><img width='240' src='./figma-global-components-cover.svg' alt='Open in Figma — AXIS Fluent Global components' /></a></p>"}}},argTypes:{title:{control:`text`,description:`Optional h2 heading for the current section.`,table:{type:{summary:`string | undefined`}}},description:{control:`text`,description:`Optional supporting copy shown below the h2 heading.`,table:{type:{summary:`string | undefined`}}},meta:{control:`text`,description:`Optional compact label shown above the heading.`,table:{type:{summary:`string | undefined`}}},actions:{control:`object`,description:"Optional local action buttons. Each action object supports optional `label`, `onClick`, `icon`, `appearance`, and `disabled` fields. Actions without a label are ignored.",table:{type:{summary:`Array<{ label?: string; onClick?: () => void; icon?: ReactElement | null; appearance?: 'primary' | 'secondary' | 'subtle' | 'transparent'; disabled?: boolean }> | undefined`}}},className:{control:`text`,description:`Optional CSS class applied to the root element.`,table:{type:{summary:`string | undefined`}}}},args:{meta:`Current section`,title:`Deployments`,description:`Use this advanced h2 to introduce the active section, clarify the task, and provide local section actions without repeating page-level identity.`,actions:[{label:`Refresh`,icon:(0,b.jsx)(l,{}),appearance:`secondary`,onClick:()=>console.log(`Refresh`)},{label:`Add target`,icon:(0,b.jsx)(c,{}),appearance:`secondary`,onClick:()=>console.log(`Add target`)}]}},S={parameters:{docs:{description:{story:`Full-featured with all props: meta label, title, description, and actions.`}}},args:{meta:`Current section`,title:`Deployments`,description:`Use this advanced h2 to introduce the active section, clarify the task, and provide local section actions without repeating page-level identity.`,actions:[{label:`Refresh`,icon:(0,b.jsx)(l,{}),appearance:`secondary`,onClick:()=>console.log(`Refresh`)},{label:`Add target`,icon:(0,b.jsx)(c,{}),appearance:`secondary`,onClick:()=>console.log(`Add target`)}]}},C={parameters:{docs:{description:{story:`Only a title, no meta, description, or actions.`}}},args:{title:`Deployments`,description:void 0,meta:void 0,actions:void 0}},w={parameters:{docs:{description:{story:`Title with actions, no meta or description.`}}},args:{title:`Deployments`,description:void 0,meta:void 0,actions:[{label:`Refresh`,icon:(0,b.jsx)(l,{}),appearance:`secondary`,onClick:()=>console.log(`Refresh`)},{label:`Add target`,icon:(0,b.jsx)(c,{}),appearance:`secondary`,onClick:()=>console.log(`Add target`)}]}},T={parameters:{docs:{description:{story:`Meta, title, and description, but no actions.`}}},args:{meta:`Current section`,title:`Deployments`,description:`Section with meta, title, and description but no action buttons.`,actions:void 0}},E={parameters:{docs:{description:{story:`Meta, title, and actions, but no description.`}}},args:{meta:`Current section`,title:`Deployments`,description:void 0,actions:[{label:`Refresh`,icon:(0,b.jsx)(l,{}),appearance:`secondary`,onClick:()=>console.log(`Refresh`)},{label:`Add target`,icon:(0,b.jsx)(c,{}),appearance:`secondary`,onClick:()=>console.log(`Add target`)}]}},D={parameters:{docs:{description:{story:`Only a title, no meta, description, or actions.`}}},args:{title:`Deployments`,description:void 0,meta:void 0,actions:void 0}},O={parameters:{docs:{description:{story:`Title with meta label, no description or actions.`}}},args:{meta:`Current section`,title:`Deployments`,description:void 0,actions:void 0}},k={parameters:{docs:{description:{story:`Meta label with title and description, but no actions.`}}},args:{meta:`Current section`,title:`Deployments`,description:`Section with meta text and description but no actions.`,actions:void 0}},A={parameters:{docs:{description:{story:`Meta label with actions, but no title or description.`}}},args:{meta:`Quick actions`,title:void 0,description:void 0,actions:[{label:`Refresh`,icon:(0,b.jsx)(l,{}),appearance:`secondary`,onClick:()=>console.log(`Refresh`)},{label:`Add target`,icon:(0,b.jsx)(c,{}),appearance:`secondary`,onClick:()=>console.log(`Add target`)}]}},j={parameters:{docs:{description:{story:`All props undefined, component renders null with no visual presence.`}}},args:{title:void 0,description:void 0,meta:void 0,actions:void 0}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`CurrentSectionHeader`,`Minimal`,`WithActionsOnly`,`WithoutActions`,`WithoutDescription`,`TitleOnly`,`TitleAndMeta`,`WithMetaAndDescription`,`ActionsWithoutTitle`,`Empty`]})))()}N();export{A as ActionsWithoutTitle,S as CurrentSectionHeader,j as Empty,C as Minimal,O as TitleAndMeta,D as TitleOnly,w as WithActionsOnly,k as WithMetaAndDescription,T as WithoutActions,E as WithoutDescription,M as __namedExportsOrder,x as default};