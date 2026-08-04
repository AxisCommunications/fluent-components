import{a as e,n as t}from"./chunk-BneVvdWh.js";import{ci as n,ii as r,mt as i,qi as a,s as o,xi as s}from"./iframe-CWmA6VAC.js";var c,l,u,d,f=t((()=>{o(),c=e(a(),1),l=e(s(),1),u=n({root:{display:`flex`,flexDirection:`column`,gap:r.spacingVerticalS,padding:r.spacingVerticalL,backgroundColor:r.colorNeutralBackground1,border:`${r.strokeWidthThin} solid ${r.colorNeutralStroke1}`,borderRadius:r.borderRadiusMedium,minWidth:r.spacingHorizontalXXXL},header:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`},title:{fontSize:r.fontSizeBase300,fontWeight:r.fontWeightSemibold,color:r.colorNeutralForeground2},icon:{fontSize:r.fontSizeBase500,color:r.colorBrandForeground1},content:{display:`flex`,flexDirection:`column`,gap:r.spacingVerticalXS},value:{fontSize:r.fontSizeBase600,fontWeight:r.fontWeightBold,color:r.colorNeutralForeground1},changeBar:{display:`flex`,alignItems:`center`,gap:r.spacingHorizontalXS},change:{fontSize:r.fontSizeBase200,fontWeight:r.fontWeightSemibold},changeUp:{color:r.colorStatusSuccessForeground1},changeDown:{color:r.colorStatusDangerForeground1},changeNeutral:{color:r.colorNeutralForeground3},description:{fontSize:r.fontSizeBase200,color:r.colorNeutralForeground3}}),d=(0,c.forwardRef)(({title:e,value:t,change:n,trend:r=`neutral`,icon:a,description:o,className:s,...c},d)=>{let f=u(),p={up:f.changeUp,down:f.changeDown,neutral:f.changeNeutral}[r],m={up:`↑`,down:`↓`,neutral:`→`}[r];return(0,l.jsxs)(`div`,{ref:d,className:[f.root,s].filter(Boolean).join(` `),...c,children:[(0,l.jsxs)(`div`,{className:f.header,children:[(0,l.jsx)(i,{as:`h3`,className:f.title,children:e}),a&&(0,l.jsx)(`div`,{className:f.icon,children:a})]}),(0,l.jsxs)(`div`,{className:f.content,children:[(0,l.jsx)(`div`,{className:f.value,children:t}),n&&(0,l.jsxs)(`div`,{className:f.changeBar,children:[(0,l.jsxs)(i,{className:`${f.change} ${p}`,children:[m,` `,n]}),o&&(0,l.jsx)(i,{className:f.description,children:o})]}),!n&&o&&(0,l.jsx)(`div`,{className:f.description,children:o})]})]})}),d.displayName=`StatCard`;try{d.displayName=`StatCard`,d.__docgenInfo={description:`StatCard - Data display card showing a metric with trend indicator.

**Fluent Guidelines Applied:**
- Grid layout with Fluent token spacing
- Color coding for trend direction (green=up, red=down, neutral=same)
- Semantic structure with heading and content sections
- Optional icon support for visual reinforcement`,displayName:`StatCard`,filePath:`/home/runner/work/fluent-components/fluent-components/examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`}],description:`Card title/label`,name:`title`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`},required:!0,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`}],description:`Main metric value (e.g., "1,234")`,name:`value`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`},required:!0,tags:{},type:{name:`string | number`}},change:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`}],description:`Optional change indicator (e.g., "+12%" or "-5%")`,name:`change`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`},required:!1,tags:{},type:{name:`string`}},trend:{defaultValue:{value:`neutral`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`}],description:`Positive, negative, or neutral trend`,name:`trend`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`},required:!1,tags:{},type:{name:`enum`,raw:`"up" | "down" | "neutral"`,value:[{value:`"up"`},{value:`"down"`},{value:`"neutral"`}]}},icon:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`}],description:`Optional icon or decorator`,name:`icon`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`},required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`}],description:`Optional description text`,name:`description`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`}],description:`Optional CSS class`,name:`className`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StatCard.tsx`,name:`StatCardProps`},required:!1,tags:{},type:{name:`string`}}},tags:{example:`<StatCard
  title="Revenue"
  value="$45,230"
  change="+12%"
  trend="up"
/>`}}}catch{}})),p,m,h,g,_,v,y,b,x;t((()=>{f(),p=e(s(),1),m={title:`UI patterns/Data Display`,component:d,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`Stat Card Component

Display key metrics with optional trend indicators.

**Fluent Guidelines Applied:**
- Grid layout with proper content hierarchy
- Color-coded trends (green=up, red=down, neutral=same)
- Token-driven spacing and text sizes

<p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=59-160"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>`}}},argTypes:{title:{control:`text`,description:`Card title / label.`,table:{type:{summary:`string`}}},value:{control:`text`,description:`Main metric value (e.g., "1,234").`,table:{type:{summary:`string | number`}}},change:{control:`text`,description:`Optional change indicator (e.g., "+12%" or "-5%").`,table:{type:{summary:`string | undefined`}}},trend:{control:`radio`,options:[`up`,`down`,`neutral`],description:`Trend direction used for color coding (up = positive, down = negative, neutral = no change).`,table:{type:{summary:`'up' | 'down' | 'neutral' | undefined`}}},icon:{control:!1,description:`Optional icon or decorator shown in the card header.`,table:{type:{summary:`ReactNode`}}},description:{control:`text`,description:`Optional supporting description text.`,table:{type:{summary:`string | undefined`}}},className:{control:`text`,description:`Optional CSS class applied to the root element.`,table:{type:{summary:`string | undefined`}}}}},h={args:{title:`Revenue`,value:`$45,230`,change:`+12%`,trend:`up`,description:`vs. last month`}},g={args:{title:`Active Users`,value:`2,341`,change:`+8%`,trend:`up`,description:`Last 30 days`}},_={args:{title:`Bounce Rate`,value:`42%`,change:`-3%`,trend:`down`,description:`Lower is better`}},v={args:{title:`Total Items`,value:`1,234`,description:`Current inventory`}},y={render:()=>(0,p.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`24px`,padding:`24px`},children:[(0,p.jsx)(d,{title:`Revenue`,value:`$45,230`,change:`+12%`,trend:`up`,description:`vs. last month`}),(0,p.jsx)(d,{title:`Active Users`,value:`2,341`,change:`+8%`,trend:`up`}),(0,p.jsx)(d,{title:`Bounce Rate`,value:`42%`,change:`-3%`,trend:`down`}),(0,p.jsx)(d,{title:`Total Items`,value:`1,234`})]})},b={render:e=>(0,p.jsx)(d,{...e})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Revenue",
    value: "$45,230",
    change: "+12%",
    trend: "up",
    description: "vs. last month"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Active Users",
    value: "2,341",
    change: "+8%",
    trend: "up",
    description: "Last 30 days"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Bounce Rate",
    value: "42%",
    change: "-3%",
    trend: "down",
    description: "Lower is better"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Total Items",
    value: "1,234",
    description: "Current inventory"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <StatCard {...args} />
}`,...b.parameters?.docs?.source}}},x=[`Default`,`TrendUp`,`TrendDown`,`NoTrend`,`AllVariants`,`Interactive`]}))();export{y as AllVariants,h as Default,b as Interactive,v as NoTrend,_ as TrendDown,g as TrendUp,x as __namedExportsOrder,m as default};