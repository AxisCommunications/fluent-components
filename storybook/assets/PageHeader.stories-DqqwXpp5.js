import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{H as n,U as r,n as i,t as a}from"./tokens-CCfXmbaE.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Button-B06n4cwG.js";import{n as l,t as u}from"./Text-se-pQd1K.js";import{a as d,c as f,i as p,n as m,o as h,r as g,s as _,t as v}from"./BreadcrumbButton-BbS3BBSa.js";var y,b,x,S;function C(){return(C=e((()=>{f(),m(),h(),p(),s(),l(),n(),a(),y=t(),b=o(),x=r({root:{display:`flex`,flexDirection:`column`,gap:i.spacingVerticalM,paddingBottom:i.spacingVerticalL,borderBottom:`1px solid ${i.colorNeutralStroke1}`},breadcrumbRow:{display:`flex`,alignItems:`center`},titleRow:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,gap:i.spacingHorizontalL},titleSection:{display:`flex`,flexDirection:`column`,gap:i.spacingVerticalS},title:{fontSize:i.fontSizeBase600,fontWeight:i.fontWeightBold,color:i.colorNeutralForeground1,margin:0},description:{fontSize:i.fontSizeBase300,color:i.colorNeutralForeground2,margin:0},actionsRow:{display:`flex`,gap:i.spacingHorizontalM,alignItems:`center`},breadcrumbItem:{display:`flex`,alignItems:`center`}}),S=(0,y.forwardRef)(({breadcrumbs:e,title:t,description:n,actions:r,className:i,...a},o)=>{let s=x();return(0,b.jsxs)(`div`,{ref:o,className:[s.root,i].filter(Boolean).join(` `),...a,children:[e&&e.length>0&&(0,b.jsx)(_,{className:s.breadcrumbRow,"aria-label":`Breadcrumb`,children:e.map((t,n)=>(0,b.jsxs)(y.Fragment,{children:[(0,b.jsx)(g,{className:s.breadcrumbItem,children:(0,b.jsx)(v,{onClick:t.onClick,children:t.label})}),n<e.length-1&&(0,b.jsx)(d,{})]},n))}),(0,b.jsxs)(`div`,{className:s.titleRow,children:[(0,b.jsxs)(`div`,{className:s.titleSection,children:[(0,b.jsx)(u,{as:`h1`,className:s.title,children:t}),n&&(0,b.jsx)(u,{className:s.description,children:n})]}),r&&r.length>0&&(0,b.jsx)(`div`,{className:s.actionsRow,children:r.map((e,t)=>(0,b.jsx)(c,{appearance:e.appearance||`secondary`,onClick:e.onClick,children:e.label},t))})]})]})}),S.displayName=`PageHeader`;try{S.displayName=`PageHeader`,S.__docgenInfo={description:`PageHeader - Top section with breadcrumb, title, and action buttons.

**Fluent Guidelines Applied:**
- Semantic \`<nav>\` and heading elements
- Clear typography hierarchy (title > description)
- Action buttons grouped on the right
- Token-based spacing and borders`,displayName:`PageHeader`,filePath:`/home/runner/work/fluent-components/fluent-components/examples/src/storybook/ui-patterns/components/composites/PageHeader.tsx`,methods:[],props:{breadcrumbs:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/PageHeader.tsx`,name:`PageHeaderProps`}],description:`Breadcrumb items: array of { label, onClick? }`,name:`breadcrumbs`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/PageHeader.tsx`,name:`PageHeaderProps`},required:!1,tags:{},type:{name:`{ label: string; onClick?: (() => void); }[]`}},title:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/PageHeader.tsx`,name:`PageHeaderProps`}],description:`Main page title`,name:`title`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/PageHeader.tsx`,name:`PageHeaderProps`},required:!0,tags:{},type:{name:`string`}},description:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/PageHeader.tsx`,name:`PageHeaderProps`}],description:`Optional subtitle/description`,name:`description`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/PageHeader.tsx`,name:`PageHeaderProps`},required:!1,tags:{},type:{name:`string`}},actions:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/PageHeader.tsx`,name:`PageHeaderProps`}],description:`Optional action buttons`,name:`actions`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/PageHeader.tsx`,name:`PageHeaderProps`},required:!1,tags:{},type:{name:`{ label: string; onClick: () => void; appearance?: "primary" | "secondary"; }[]`}},className:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/PageHeader.tsx`,name:`PageHeaderProps`}],description:`Optional CSS class`,name:`className`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/PageHeader.tsx`,name:`PageHeaderProps`},required:!1,tags:{},type:{name:`string`}}},tags:{example:`<PageHeader
  breadcrumbs={[
    { label: 'Home', onClick: () => navigate('/') },
    { label: 'Workspaces' }
  ]}
  title="My Workspace"
  description="Production data workspace"
  actions={[
    { label: 'Apply', onClick: handleApply, appearance: 'primary' },
    { label: 'Reset', onClick: handleReset }
  ]}
/>`}}}catch{}})))()}var w,T,E,D,O,k;function A(){return(A=e((()=>{C(),w={title:`UI patterns/Page Header`,component:S,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`A page-level header with optional breadcrumbs, a title, an optional description, and right-aligned action buttons. Only \`title\` is required; provide the other props as the page needs them.

<p align='right'><a href='https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=86-367'><img width='240' src='/figma-global-components-cover.svg' alt='Open in Figma — AXIS Fluent Global components' /></a></p>`}}},argTypes:{title:{control:`text`,description:`Main page title rendered as a heading.`,table:{type:{summary:`string`}}},description:{control:`text`,description:`Optional supporting copy shown below the title.`,table:{type:{summary:`string | undefined`}}},breadcrumbs:{control:`object`,description:"Optional breadcrumb trail. Each item supports a `label` and an optional `onClick`; the final item is rendered as the current page.",table:{type:{summary:`Array<{ label: string; onClick?: () => void }> | undefined`}}},actions:{control:`object`,description:"Optional right-aligned action buttons. Each action supports `label`, `onClick`, and an optional `appearance` ('primary' | 'secondary').",table:{type:{summary:`Array<{ label: string; onClick: () => void; appearance?: 'primary' | 'secondary' }> | undefined`}}},className:{control:`text`,description:`Optional CSS class applied to the root element.`,table:{type:{summary:`string | undefined`}}}},args:{breadcrumbs:[{label:`Home`,onClick:()=>console.log(`Home`)},{label:`Workspaces`,onClick:()=>console.log(`Workspaces`)},{label:`My workspace`}],title:`My workspace`,description:`Production data workspace`,actions:[{label:`Reset`,onClick:()=>console.log(`Reset`)},{label:`Apply`,onClick:()=>console.log(`Apply`),appearance:`primary`}]}},T={},E={parameters:{docs:{description:{story:`Title, description, and actions without a breadcrumb trail.`}}},args:{breadcrumbs:void 0}},D={parameters:{docs:{description:{story:`Only the required title, with all optional props omitted.`}}},args:{breadcrumbs:void 0,description:void 0,actions:void 0}},O={parameters:{docs:{description:{story:`Breadcrumbs, title, and actions without a description.`}}},args:{description:void 0}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{}`,...T.parameters?.docs?.source},description:{story:`Full header with breadcrumbs, description, and actions.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Title, description, and actions without a breadcrumb trail."
      }
    }
  },
  args: {
    breadcrumbs: undefined
  }
}`,...E.parameters?.docs?.source},description:{story:`Header without breadcrumb navigation.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Only the required title, with all optional props omitted."
      }
    }
  },
  args: {
    breadcrumbs: undefined,
    description: undefined,
    actions: undefined
  }
}`,...D.parameters?.docs?.source},description:{story:`Minimal header — title only.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Breadcrumbs, title, and actions without a description."
      }
    }
  },
  args: {
    description: undefined
  }
}`,...O.parameters?.docs?.source},description:{story:`Header with actions but no description.`,...O.parameters?.docs?.description}}},k=[`Default`,`WithoutBreadcrumbs`,`Minimal`,`WithActionsOnly`]})))()}A();export{T as Default,D as Minimal,O as WithActionsOnly,E as WithoutBreadcrumbs,k as __namedExportsOrder,w as default};