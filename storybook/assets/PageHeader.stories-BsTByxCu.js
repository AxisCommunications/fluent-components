import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Wt as n,ci as r,d as i,f as a,ii as o,l as s,mt as c,qi as l,s as u,u as d,xi as f}from"./iframe-CzIYuUoR.js";var p,m,h,g,_=t((()=>{u(),p=e(l(),1),m=e(f(),1),h=r({root:{display:`flex`,flexDirection:`column`,gap:o.spacingVerticalM,paddingBottom:o.spacingVerticalL,borderBottom:`1px solid ${o.colorNeutralStroke1}`},breadcrumbRow:{display:`flex`,alignItems:`center`},titleRow:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,gap:o.spacingHorizontalL},titleSection:{display:`flex`,flexDirection:`column`,gap:o.spacingVerticalS},title:{fontSize:o.fontSizeBase600,fontWeight:o.fontWeightBold,color:o.colorNeutralForeground1,margin:0},description:{fontSize:o.fontSizeBase300,color:o.colorNeutralForeground2,margin:0},actionsRow:{display:`flex`,gap:o.spacingHorizontalM,alignItems:`center`},breadcrumbItem:{display:`flex`,alignItems:`center`}}),g=(0,p.forwardRef)(({breadcrumbs:e,title:t,description:r,actions:o,className:l,...u},f)=>{let g=h();return(0,m.jsxs)(`div`,{ref:f,className:[g.root,l].filter(Boolean).join(` `),...u,children:[e&&e.length>0&&(0,m.jsx)(`nav`,{className:g.breadcrumbRow,"aria-label":`Breadcrumb`,children:(0,m.jsx)(a,{children:e.map((t,n)=>(0,m.jsxs)(p.Fragment,{children:[(0,m.jsx)(d,{className:g.breadcrumbItem,children:(0,m.jsx)(s,{onClick:t.onClick,children:t.label})}),n<e.length-1&&(0,m.jsx)(i,{})]},n))})}),(0,m.jsxs)(`div`,{className:g.titleRow,children:[(0,m.jsxs)(`div`,{className:g.titleSection,children:[(0,m.jsx)(c,{as:`h1`,className:g.title,children:t}),r&&(0,m.jsx)(c,{className:g.description,children:r})]}),o&&o.length>0&&(0,m.jsx)(`div`,{className:g.actionsRow,children:o.map((e,t)=>(0,m.jsx)(n,{appearance:e.appearance||`secondary`,onClick:e.onClick,children:e.label},t))})]})]})}),g.displayName=`PageHeader`;try{g.displayName=`PageHeader`,g.__docgenInfo={description:`PageHeader - Top section with breadcrumb, title, and action buttons.

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
/>`}}}catch{}})),v,y,b,x,S,C;t((()=>{_(),v={title:`UI patterns/Page Header`,component:g,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`A page-level header with optional breadcrumbs, a title, an optional description, and right-aligned action buttons. Only \`title\` is required; provide the other props as the page needs them.

<p align='right'><a href='https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=86-367'><img width='240' src='/figma-global-components-cover.svg' alt='Open in Figma — AXIS Fluent Global components' /></a></p>`}}},argTypes:{title:{control:`text`,description:`Main page title rendered as a heading.`,table:{type:{summary:`string`}}},description:{control:`text`,description:`Optional supporting copy shown below the title.`,table:{type:{summary:`string | undefined`}}},breadcrumbs:{control:`object`,description:"Optional breadcrumb trail. Each item supports a `label` and an optional `onClick`; the final item is rendered as the current page.",table:{type:{summary:`Array<{ label: string; onClick?: () => void }> | undefined`}}},actions:{control:`object`,description:"Optional right-aligned action buttons. Each action supports `label`, `onClick`, and an optional `appearance` ('primary' | 'secondary').",table:{type:{summary:`Array<{ label: string; onClick: () => void; appearance?: 'primary' | 'secondary' }> | undefined`}}},className:{control:`text`,description:`Optional CSS class applied to the root element.`,table:{type:{summary:`string | undefined`}}}},args:{breadcrumbs:[{label:`Home`,onClick:()=>console.log(`Home`)},{label:`Workspaces`,onClick:()=>console.log(`Workspaces`)},{label:`My workspace`}],title:`My workspace`,description:`Production data workspace`,actions:[{label:`Reset`,onClick:()=>console.log(`Reset`)},{label:`Apply`,onClick:()=>console.log(`Apply`),appearance:`primary`}]}},y={},b={parameters:{docs:{description:{story:`Title, description, and actions without a breadcrumb trail.`}}},args:{breadcrumbs:void 0}},x={parameters:{docs:{description:{story:`Only the required title, with all optional props omitted.`}}},args:{breadcrumbs:void 0,description:void 0,actions:void 0}},S={parameters:{docs:{description:{story:`Breadcrumbs, title, and actions without a description.`}}},args:{description:void 0}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source},description:{story:`Full header with breadcrumbs, description, and actions.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Header without breadcrumb navigation.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Minimal header — title only.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`Header with actions but no description.`,...S.parameters?.docs?.description}}},C=[`Default`,`WithoutBreadcrumbs`,`Minimal`,`WithActionsOnly`]}))();export{y as Default,x as Minimal,S as WithActionsOnly,b as WithoutBreadcrumbs,C as __namedExportsOrder,v as default};