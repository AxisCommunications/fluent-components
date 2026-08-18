import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{H as n,U as r,n as i,t as a}from"./tokens-ChQznooH.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Text-lVpU-f4i.js";var l,u,d,f;function p(){return(p=e((()=>{s(),n(),a(),l=t(),u=o(),d=r({root:{display:`flex`,flexDirection:`column`,gap:i.spacingVerticalS,padding:i.spacingVerticalL,backgroundColor:i.colorNeutralBackground1,border:`${i.strokeWidthThin} solid ${i.colorNeutralStroke1}`,borderRadius:i.borderRadiusMedium,minWidth:i.spacingHorizontalXXXL},header:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`},title:{fontSize:i.fontSizeBase300,fontWeight:i.fontWeightSemibold,color:i.colorNeutralForeground2},icon:{fontSize:i.fontSizeBase500,color:i.colorBrandForeground1},content:{display:`flex`,flexDirection:`column`,gap:i.spacingVerticalXS},value:{fontSize:i.fontSizeBase600,fontWeight:i.fontWeightBold,color:i.colorNeutralForeground1},changeBar:{display:`flex`,alignItems:`center`,gap:i.spacingHorizontalXS},change:{fontSize:i.fontSizeBase200,fontWeight:i.fontWeightSemibold},changeUp:{color:i.colorStatusSuccessForeground1},changeDown:{color:i.colorStatusDangerForeground1},changeNeutral:{color:i.colorNeutralForeground3},description:{fontSize:i.fontSizeBase200,color:i.colorNeutralForeground3}}),f=(0,l.forwardRef)(({title:e,value:t,change:n,trend:r=`neutral`,icon:i,description:a,className:o,...s},l)=>{let f=d(),p={up:f.changeUp,down:f.changeDown,neutral:f.changeNeutral}[r],m={up:`↑`,down:`↓`,neutral:`→`}[r];return(0,u.jsxs)(`div`,{ref:l,className:[f.root,o].filter(Boolean).join(` `),...s,children:[(0,u.jsxs)(`div`,{className:f.header,children:[(0,u.jsx)(c,{as:`h3`,className:f.title,children:e}),i&&(0,u.jsx)(`div`,{className:f.icon,children:i})]}),(0,u.jsxs)(`div`,{className:f.content,children:[(0,u.jsx)(`div`,{className:f.value,children:t}),n&&(0,u.jsxs)(`div`,{className:f.changeBar,children:[(0,u.jsxs)(c,{className:`${f.change} ${p}`,children:[m,` `,n]}),a&&(0,u.jsx)(c,{className:f.description,children:a})]}),!n&&a&&(0,u.jsx)(`div`,{className:f.description,children:a})]})]})}),f.displayName=`StatCard`;try{f.displayName=`StatCard`,f.__docgenInfo={description:`StatCard - Data display card showing a metric with trend indicator.

**Fluent Guidelines Applied:**
- Grid layout with Fluent token spacing
- Color coding for trend direction (green=up, red=down, neutral=same)
- Semantic structure with heading and content sections
- Optional icon support for visual reinforcement`,displayName:`StatCard`,filePath:`/home/runner/work/fluent-components/fluent-components/examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`}],description:`Card title/label`,name:`title`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`},required:!0,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`}],description:`Main metric value (e.g., "1,234")`,name:`value`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`},required:!0,tags:{},type:{name:`string | number`}},change:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`}],description:`Optional change indicator (e.g., "+12%" or "-5%")`,name:`change`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`},required:!1,tags:{},type:{name:`string`}},trend:{defaultValue:{value:`neutral`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`}],description:`Positive, negative, or neutral trend`,name:`trend`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`},required:!1,tags:{},type:{name:`enum`,raw:`"up" | "down" | "neutral"`,value:[{value:`"up"`},{value:`"down"`},{value:`"neutral"`}]}},icon:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`}],description:`Optional icon or decorator`,name:`icon`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`},required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`}],description:`Optional description text`,name:`description`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`}],description:`Optional CSS class`,name:`className`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`},required:!1,tags:{},type:{name:`string`}}},tags:{example:`<StatCard
  title="Revenue"
  value="$45,230"
  change="+12%"
  trend="up"
/>`}}}catch{}})))()}var m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{p(),m=o(),h={title:`UI patterns/Data Display`,component:f,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`Stat Card Component

Display key metrics with optional trend indicators.

**Fluent Guidelines Applied:**
- Grid layout with proper content hierarchy
- Color-coded trends (green=up, red=down, neutral=same)
- Token-driven spacing and text sizes

<p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=59-160"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>`}}},argTypes:{title:{control:`text`,description:`Card title / label.`,table:{type:{summary:`string`}}},value:{control:`text`,description:`Main metric value (e.g., "1,234").`,table:{type:{summary:`string | number`}}},change:{control:`text`,description:`Optional change indicator (e.g., "+12%" or "-5%").`,table:{type:{summary:`string | undefined`}}},trend:{control:`radio`,options:[`up`,`down`,`neutral`],description:`Trend direction used for color coding (up = positive, down = negative, neutral = no change).`,table:{type:{summary:`'up' | 'down' | 'neutral' | undefined`}}},icon:{control:!1,description:`Optional icon or decorator shown in the card header.`,table:{type:{summary:`ReactNode`}}},description:{control:`text`,description:`Optional supporting description text.`,table:{type:{summary:`string | undefined`}}},className:{control:`text`,description:`Optional CSS class applied to the root element.`,table:{type:{summary:`string | undefined`}}}}},g={args:{title:`Revenue`,value:`$45,230`,change:`+12%`,trend:`up`,description:`vs. last month`}},_={args:{title:`Active Users`,value:`2,341`,change:`+8%`,trend:`up`,description:`Last 30 days`}},v={args:{title:`Bounce Rate`,value:`42%`,change:`-3%`,trend:`down`,description:`Lower is better`}},y={args:{title:`Total Items`,value:`1,234`,description:`Current inventory`}},b={render:()=>(0,m.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`24px`,padding:`24px`},children:[(0,m.jsx)(f,{title:`Revenue`,value:`$45,230`,change:`+12%`,trend:`up`,description:`vs. last month`}),(0,m.jsx)(f,{title:`Active Users`,value:`2,341`,change:`+8%`,trend:`up`}),(0,m.jsx)(f,{title:`Bounce Rate`,value:`42%`,change:`-3%`,trend:`down`}),(0,m.jsx)(f,{title:`Total Items`,value:`1,234`})]})},x={render:e=>(0,m.jsx)(f,{...e})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Revenue",
    value: "$45,230",
    change: "+12%",
    trend: "up",
    description: "vs. last month"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Active Users",
    value: "2,341",
    change: "+8%",
    trend: "up",
    description: "Last 30 days"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Bounce Rate",
    value: "42%",
    change: "-3%",
    trend: "down",
    description: "Lower is better"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Total Items",
    value: "1,234",
    description: "Current inventory"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "24px",
    padding: "24px"
  }}>
      <StatCard title="Revenue" value="$45,230" change="+12%" trend="up" description="vs. last month" />
      <StatCard title="Active Users" value="2,341" change="+8%" trend="up" />
      <StatCard title="Bounce Rate" value="42%" change="-3%" trend="down" />
      <StatCard title="Total Items" value="1,234" />
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <StatCard {...args} />
}`,...x.parameters?.docs?.source}}},S=[`Default`,`TrendUp`,`TrendDown`,`NoTrend`,`AllVariants`,`Interactive`]})))()}C();export{b as AllVariants,g as Default,x as Interactive,y as NoTrend,v as TrendDown,_ as TrendUp,S as __namedExportsOrder,h as default};