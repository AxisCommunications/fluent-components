import{a as e,n as t}from"./chunk-BneVvdWh.js";import{En as n,Gt as r,Hn as i,Qn as a,Un as o,Wt as s,_r as c,ci as l,ii as u,mt as d,qi as f,ri as p,s as m,ui as h,xi as g}from"./iframe-CzIYuUoR.js";var _,v,y,b,x,S=t((()=>{m(),n(),_=e(f(),1),v=e(g(),1),y=`18px`,b=l({root:{display:`flex`,flexDirection:`column`,height:`100%`,minHeight:`520px`,backgroundColor:u.colorNeutralBackground1,borderRadius:u.borderRadiusXLarge,boxShadow:u.shadow16,overflow:`hidden`},body:{display:`flex`,flex:1,minHeight:0},sidebar:{display:`flex`,flexDirection:`column`,gap:0,flexShrink:0,width:`200px`,padding:`${u.spacingVerticalL} ${u.spacingHorizontalL}`,borderRight:`1px solid ${u.colorNeutralStroke2}`,overflowY:`auto`},step:{display:`flex`,flexDirection:`column`,alignItems:`stretch`,margin:0,padding:0,border:`none`,backgroundColor:`transparent`,textAlign:`left`,font:`inherit`,color:`inherit`,width:`100%`},stepRow:{display:`flex`,alignItems:`center`,gap:u.spacingHorizontalM,padding:`${u.spacingVerticalXS} ${u.spacingHorizontalS}`,borderRadius:u.borderRadiusMedium},stepClickable:{cursor:`pointer`,":hover .axis-WizardStepRow":{backgroundColor:u.colorSubtleBackgroundHover},":focus-visible":{outline:`none`},":focus-visible .axis-WizardStepRow":{outline:`2px solid ${u.colorStrokeFocus2}`,outlineOffset:`2px`}},stepLocked:{cursor:`not-allowed`},connectorWrap:{display:`flex`,justifyContent:`flex-start`,paddingLeft:`16px`,height:u.spacingVerticalM},indicator:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:y,height:y,flexShrink:0,borderRadius:u.borderRadiusCircular,boxSizing:`border-box`},indicatorPending:{border:`2px solid ${u.colorNeutralStroke1}`,backgroundColor:u.colorNeutralBackground1},indicatorActive:{backgroundColor:u.colorBrandBackground},indicatorActiveDot:{width:`7px`,height:`7px`,borderRadius:u.borderRadiusCircular,backgroundColor:u.colorNeutralForegroundOnBrand},indicatorComplete:{backgroundColor:u.colorBrandBackground,color:u.colorNeutralForegroundOnBrand},indicatorDone:{backgroundColor:u.colorStatusSuccessBackground1,color:u.colorStatusSuccessForeground1},indicatorSkipped:{border:`2px solid ${u.colorStatusDangerBorder2}`,backgroundColor:u.colorNeutralBackground1},indicatorSkippedDot:{width:`7px`,height:`7px`,borderRadius:u.borderRadiusCircular,backgroundColor:u.colorStatusDangerBackground3},connector:{width:`2px`,height:`100%`,backgroundColor:u.colorNeutralStroke2},connectorComplete:{backgroundColor:u.colorBrandBackground},stepLabel:{...p.body1,color:u.colorNeutralForeground2},stepLabelActive:{color:u.colorNeutralForeground1,fontWeight:u.fontWeightSemibold},stepLabelSkipped:{color:u.colorStatusDangerForeground1},content:{display:`flex`,flexDirection:`column`,flex:1,minWidth:0,padding:u.spacingHorizontalL,gap:u.spacingVerticalM},header:{display:`flex`,alignItems:`flex-start`,justifyContent:`space-between`,gap:u.spacingHorizontalM},headerTitles:{display:`flex`,flexDirection:`column`,gap:u.spacingVerticalXXS,minWidth:0},title:{...p.caption1,color:u.colorNeutralForeground3},stepTitle:{...p.subtitle1,color:u.colorNeutralForeground1},headerActions:{display:`flex`,alignItems:`center`,gap:u.spacingHorizontalXXS,flexShrink:0},contentArea:{flex:1,minHeight:0,overflow:`auto`},swayForward:{animationName:{from:{opacity:0,transform:`translateX(24px)`},to:{opacity:1,transform:`translateX(0)`}},animationDuration:u.durationNormal,animationTimingFunction:u.curveDecelerateMid,animationFillMode:`both`},swayBackward:{animationName:{from:{opacity:0,transform:`translateX(-24px)`},to:{opacity:1,transform:`translateX(0)`}},animationDuration:u.durationNormal,animationTimingFunction:u.curveDecelerateMid,animationFillMode:`both`},footer:{display:`flex`,justifyContent:`flex-end`,gap:u.spacingHorizontalS,padding:u.spacingHorizontalL,borderTop:`1px solid ${u.colorNeutralStroke2}`}}),x=(0,_.forwardRef)(({title:e,steps:t,currentStep:n,defaultStep:l=0,navigationMode:u=`none`,onStepChange:f,onFinish:p,onClose:m,backLabel:g=`Back`,nextLabel:y=`Next`,finishLabel:x=`Finish`,disableProgression:S=!1,animateContent:C=!1,headerActions:w,className:T},E)=>{let D=b(),[O,k]=(0,_.useState)(l),A=n!==void 0,j=A?n:O,M=t.length-1,N=j<=0,P=j>=M,F=(0,_.useRef)(j),I=j<F.current;(0,_.useEffect)(()=>{F.current=j},[j]);let[L,R]=(0,_.useState)(j);(0,_.useEffect)(()=>{R(e=>Math.max(e,j))},[j]);let[z,B]=(0,_.useState)(()=>new Set([j]));(0,_.useEffect)(()=>{B(e=>{if(e.has(j))return e;let t=new Set(e);return t.add(j),t})},[j]);let[V,H]=(0,_.useState)(!1);(0,_.useEffect)(()=>{j!==M&&H(!1)},[j,M]);let U=(0,_.useCallback)(e=>{let t=Math.min(Math.max(e,0),M);A||k(t),f?.(t)},[A,M,f]),W=(0,_.useCallback)(e=>u===`free`?!0:u===`linear`?e<=L:!1,[u,L]),G=(0,_.useCallback)(e=>{e===j||!W(e)||U(e)},[j,W,U]),K=(0,_.useCallback)(()=>{if(P){H(!0),p?.();return}U(j+1)},[j,U,P,p]),q=(0,_.useCallback)(()=>{U(j-1)},[j,U]),J=t[j],Y=(0,_.useMemo)(()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r,{content:`Tips`,relationship:`label`,children:(0,v.jsx)(s,{appearance:`subtle`,icon:(0,v.jsx)(c,{}),"aria-label":`Tips`})}),(0,v.jsx)(r,{content:`Help`,relationship:`label`,children:(0,v.jsx)(s,{appearance:`subtle`,icon:(0,v.jsx)(i,{}),"aria-label":`Help`})}),(0,v.jsx)(r,{content:`Close`,relationship:`label`,children:(0,v.jsx)(s,{appearance:`subtle`,icon:(0,v.jsx)(o,{}),"aria-label":`Close`,onClick:m})})]}),[m]);return(0,v.jsxs)(`div`,{ref:E,className:h(D.root,T),children:[(0,v.jsxs)(`div`,{className:D.body,children:[(0,v.jsx)(`nav`,{className:D.sidebar,"aria-label":`Wizard steps`,children:t.map((e,n)=>{let r=n===j,i=n===t.length-1,o=n<j,s=o&&!z.has(n)&&!!e.required,c=o&&!s,l=V&&i,f=u!==`none`,p=W(n);return(0,v.jsxs)(`button`,{type:`button`,className:h(D.step,f&&(p?D.stepClickable:D.stepLocked)),onClick:f?()=>G(n):void 0,disabled:f&&!p,"aria-current":r?`step`:void 0,children:[(0,v.jsxs)(`div`,{className:h(`axis-WizardStepRow`,D.stepRow),children:[(0,v.jsxs)(`div`,{className:h(D.indicator,l&&D.indicatorDone,!l&&c&&D.indicatorComplete,!l&&r&&D.indicatorActive,s&&D.indicatorSkipped,!l&&!c&&!r&&!s&&D.indicatorPending),children:[(l||c)&&(0,v.jsx)(a,{fontSize:10}),!l&&r&&(0,v.jsx)(`span`,{className:D.indicatorActiveDot}),s&&(0,v.jsx)(`span`,{className:D.indicatorSkippedDot})]}),(0,v.jsx)(d,{className:h(D.stepLabel,(r||l)&&D.stepLabelActive,s&&D.stepLabelSkipped),children:e.label})]}),!i&&(0,v.jsx)(`div`,{className:D.connectorWrap,children:(0,v.jsx)(`div`,{className:h(D.connector,c&&D.connectorComplete)})})]},n)})}),(0,v.jsxs)(`div`,{className:D.content,children:[(0,v.jsxs)(`div`,{className:D.header,children:[(0,v.jsxs)(`div`,{className:D.headerTitles,children:[(0,v.jsx)(d,{className:D.title,children:e}),(0,v.jsx)(d,{className:D.stepTitle,children:J?.stepTitle??J?.label})]}),(0,v.jsx)(`div`,{className:D.headerActions,children:w??Y})]}),(0,v.jsx)(`div`,{className:h(D.contentArea,C&&(I?D.swayBackward:D.swayForward)),children:J?.content},C?j:void 0)]})]}),(0,v.jsxs)(`div`,{className:D.footer,children:[(0,v.jsx)(s,{appearance:`secondary`,onClick:q,disabled:N,children:g}),(0,v.jsx)(s,{appearance:`primary`,onClick:K,disabled:S,children:P?x:y})]})]})}),x.displayName=`Wizard`;try{x.displayName=`Wizard`,x.__docgenInfo={description:`Wizard

A full-page guided flow that pairs a vertical step indicator with a content
area and Back / Next navigation. Completed steps show a checkmark, the active
step is filled with the Axis brand color, and upcoming steps are outlined.
Finishing the final step shows a green checkmark, and required steps that were
skipped (jumped past without visiting) show an attention dot marker.

Steps can optionally be clicked to navigate via \`navigationMode\` (\`linear\`
requires completing steps in order, \`free\` allows jumping anywhere).

Supports both controlled (\`currentStep\` + \`onStepChange\`) and uncontrolled
(\`defaultStep\`) usage.`,displayName:`Wizard`,filePath:`/home/runner/work/fluent-components/fluent-components/examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Small muted title shown above the step title.`,name:`title`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!0,tags:{},type:{name:`string`}},steps:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Ordered list of steps shown in the sidebar.`,name:`steps`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!0,tags:{},type:{name:`WizardStep[]`}},currentStep:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Controlled active step index (zero-based).`,name:`currentStep`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`number`}},defaultStep:{defaultValue:{value:`0`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Default active step index for uncontrolled usage.`,name:`defaultStep`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`number`}},onStepChange:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Called whenever the active step changes.`,name:`onStepChange`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`((step: number) => void)`}},navigationMode:{defaultValue:{value:`none`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:"How sidebar steps respond to clicks.\n\n- `none` (default): steps are not clickable.\n- `linear`: steps must be completed in order; only visited/completed steps\n  and the current step can be clicked.\n- `free`: any step can be clicked to jump to it.",name:`navigationMode`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`enum`,raw:`WizardNavigationMode`,value:[{value:`"none"`},{value:`"linear"`},{value:`"free"`}]}},onFinish:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Called when the final step's primary action is pressed.`,name:`onFinish`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`(() => void)`}},onClose:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Called when the close icon is pressed.`,name:`onClose`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`(() => void)`}},backLabel:{defaultValue:{value:`Back`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Label for the back button.`,name:`backLabel`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`string`}},nextLabel:{defaultValue:{value:`Next`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Label for the next button.`,name:`nextLabel`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`string`}},finishLabel:{defaultValue:{value:`Finish`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Label for the primary action on the final step.`,name:`finishLabel`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`string`}},disableProgression:{defaultValue:{value:`false`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Disable navigating to the next step.`,name:`disableProgression`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`boolean`}},animateContent:{defaultValue:{value:`false`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Animate the content area with a directional sway when the active step
changes. Moving forward slides the content in from the right; moving
backward slides it in from the left. Defaults to \`false\`.`,name:`animateContent`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`boolean`}},headerActions:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Override the top-right header actions.`,name:`headerActions`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Optional CSS class.`,name:`className`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}}));function C(){return(0,T.jsx)(`div`,{style:{height:`100%`,minHeight:360,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:u.borderRadiusMedium,backgroundColor:u.colorBrandBackground2,color:u.colorBrandForeground2,textTransform:`uppercase`,letterSpacing:`0.08em`,fontSize:u.fontSizeBase200},children:`Swap with content`})}var w,T,E,D,O,k,A,j,M,N,P,F,I;t((()=>{m(),w=e(f(),1),S(),T=e(g(),1),E={title:`UI patterns/Wizard`,component:x,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Wizard

A full-page guided flow that pairs a vertical step indicator with a content
area and Back / Next navigation. It is ideal for multi-step setup or
onboarding tasks where users need awareness of completed, current, and
upcoming steps.

**Fluent Guidelines Applied:**
- Composed only from \`@fluentui/react-components\`
- Token-driven styling via \`makeStyles\` + Fluent \`tokens\` (Axis theme aware)
- Active and completed steps use the Axis brand color
- Accessible: \`nav\` landmark, \`aria-current="step"\`, labelled icon buttons

## Behaviour

- Completed steps render a checkmark and a brand-colored connector.
- The active step is filled with the brand color.
- Upcoming steps are outlined.
- The primary button switches from **Next** to **Finish** on the last step.

Supports both controlled (\`currentStep\` + \`onStepChange\`) and uncontrolled
(\`defaultStep\`) usage.

<p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=104-459"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>`}}},argTypes:{title:{control:`text`,description:`Small muted title shown above the step title`},navigationMode:{control:`radio`,options:[`none`,`linear`,`free`],description:`Whether sidebar steps are clickable: 'none' (Back/Next only), 'linear' (only completed/visited steps), or 'free' (jump anywhere)`},backLabel:{control:`text`,description:`Label for the back button`},nextLabel:{control:`text`,description:`Label for the next button`},finishLabel:{control:`text`,description:`Label for the primary action on the final step`},disableProgression:{control:`boolean`,description:`Disable navigating to the next step`},animateContent:{control:`boolean`,description:`Animate the content area with a directional sway when the active step changes`}}},D=Array.from({length:8},(e,t)=>({label:`Step ${t+1}`,stepTitle:`Wizard step title`,content:(0,T.jsx)(C,{})})),O={args:{title:`Wizard title`,steps:D,defaultStep:1}},k={args:{title:`Wizard title`,steps:D,navigationMode:`linear`,defaultStep:0}},A={args:{title:`Wizard title`,steps:D,navigationMode:`free`,defaultStep:2}},j={args:{title:`Wizard title`,navigationMode:`free`,defaultStep:0,steps:Array.from({length:6},(e,t)=>({label:`Step ${t+1}`,stepTitle:`Wizard step title`,content:(0,T.jsx)(C,{}),required:t===1||t===2}))}},M={args:{title:`Wizard title`,steps:D,navigationMode:`linear`,defaultStep:7}},N={render:e=>(0,T.jsx)(()=>{let[t,n]=(0,w.useState)(0);return(0,T.jsx)(x,{...e,currentStep:t,onStepChange:n,onFinish:()=>alert(`Wizard finished!`)})},{}),args:{title:`Device setup`,steps:[{label:`Connect`,stepTitle:`Connect your device`,content:(0,T.jsx)(C,{})},{label:`Configure`,stepTitle:`Configure settings`,content:(0,T.jsx)(C,{})},{label:`Review`,stepTitle:`Review and confirm`,content:(0,T.jsx)(C,{})}]}},P={args:{title:`Wizard title`,steps:D,defaultStep:0,navigationMode:`free`,animateContent:!0}},F={args:{title:`Onboarding`,defaultStep:2,steps:[{label:`Welcome`,stepTitle:`Welcome`,content:(0,T.jsx)(C,{})},{label:`Profile`,stepTitle:`Set up your profile`,content:(0,T.jsx)(C,{})},{label:`Done`,stepTitle:`All set`,content:(0,T.jsx)(C,{})}]}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Wizard title",
    steps,
    defaultStep: 1
  }
}`,...O.parameters?.docs?.source},description:{story:`Default wizard matching the design: an eight-step vertical indicator with the
second step active and a content placeholder. Steps are not clickable
(\`navigationMode="none"\`); navigate with Back / Next.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Wizard title",
    steps,
    navigationMode: "linear",
    defaultStep: 0
  }
}`,...k.parameters?.docs?.source},description:{story:`**Linear navigation** (\`navigationMode="linear"\`). Each step must be completed
in order. You can click any step you have already reached to jump back to it,
but upcoming steps stay locked until you advance with **Next**. Walk forward
with Next, then click an earlier step to revisit it.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Wizard title",
    steps,
    navigationMode: "free",
    defaultStep: 2
  }
}`,...A.parameters?.docs?.source},description:{story:`**Free navigation** (\`navigationMode="free"\`). Every step is clickable, so the
user can jump to any step at any time — useful for non-sequential flows or
editing a previously completed step.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Wizard title",
    navigationMode: "free",
    defaultStep: 0,
    steps: Array.from({
      length: 6
    }, (_, index) => ({
      label: \`Step \${index + 1}\`,
      stepTitle: "Wizard step title",
      content: <PlaceholderContent />,
      required: index === 1 || index === 2
    }))
  }
}`,...j.parameters?.docs?.source},description:{story:`**Required steps** (\`step.required\`). With \`free\` navigation you can jump past
steps. Any *required* step you skip without ever visiting it shows an
attention dot marker (instead of a completion checkmark) so it is clear it
still needs to be filled in. Jump from the first step to a later one to see
the marker appear on the required steps in between.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Wizard title",
    steps,
    navigationMode: "linear",
    defaultStep: 7
  }
}`,...M.parameters?.docs?.source},description:{story:`**Completion** — pressing **Finish** on the last step marks the wizard done
and turns the final step indicator into a green checkmark. Walk through with
**Next** and press **Finish** to see it.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    const ControlledWizard = () => {
      const [step, setStep] = useState(0);
      return <Wizard {...args} currentStep={step} onStepChange={setStep} onFinish={() => alert("Wizard finished!")} />;
    };
    return <ControlledWizard />;
  },
  args: {
    title: "Device setup",
    steps: [{
      label: "Connect",
      stepTitle: "Connect your device",
      content: <PlaceholderContent />
    }, {
      label: "Configure",
      stepTitle: "Configure settings",
      content: <PlaceholderContent />
    }, {
      label: "Review",
      stepTitle: "Review and confirm",
      content: <PlaceholderContent />
    }]
  }
}`,...N.parameters?.docs?.source},description:{story:"Controlled usage. The parent owns the active step via `currentStep` and\n`onStepChange`, allowing custom validation before progressing.",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Wizard title",
    steps,
    defaultStep: 0,
    navigationMode: "free",
    animateContent: true
  }
}`,...P.parameters?.docs?.source},description:{story:`**Animated content** (\`animateContent\`). The content area sways in the
direction of travel when the active step changes — sliding in from the right
when moving forward and from the left when moving back. Use Back / Next to
see the transition.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Onboarding",
    defaultStep: 2,
    steps: [{
      label: "Welcome",
      stepTitle: "Welcome",
      content: <PlaceholderContent />
    }, {
      label: "Profile",
      stepTitle: "Set up your profile",
      content: <PlaceholderContent />
    }, {
      label: "Done",
      stepTitle: "All set",
      content: <PlaceholderContent />
    }]
  }
}`,...F.parameters?.docs?.source},description:{story:`A short three-step flow demonstrating the **Finish** action on the final step.`,...F.parameters?.docs?.description}}},I=[`Default`,`LinearNavigation`,`FreeNavigation`,`RequiredSteps`,`Completion`,`Controlled`,`AnimatedContent`,`ThreeSteps`]}))();export{P as AnimatedContent,M as Completion,N as Controlled,O as Default,A as FreeNavigation,k as LinearNavigation,j as RequiredSteps,F as ThreeSteps,I as __namedExportsOrder,E as default};