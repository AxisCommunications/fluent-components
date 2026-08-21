import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{G as n,K as r,n as i,t as a}from"./tokens-vLGBt8wU.js";import{n as o,t as s}from"./mergeClasses.esm-CfqCpu6e.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./typographyStyles-DpaqEI9G.js";import{i as d,n as f}from"./chunk-16-DOy-sepF.js";import{d as p,i as m}from"./chunk-24-CYifds9-.js";import{i as h,n as g,r as _}from"./chunk-28-bBlY_ksU.js";import{n as v,t as y}from"./Button-CuNALHmt.js";import{n as b,t as x}from"./Text-DbeiQpwd.js";import{n as S,t as C}from"./SectionHeader-CQphuNrz.js";var w,T,E,D;function O(){return(O=e((()=>{v(),b(),n(),s(),a(),u(),p(),d(),h(),w=t(),S(),T=c(),E=r({root:{display:`flex`,flexDirection:`column`,width:`100%`,maxWidth:`1440px`,height:`100%`,minHeight:`480px`,backgroundColor:i.colorNeutralBackground1,overflow:`hidden`},rootOverlay:{borderRadius:i.borderRadiusLarge,boxShadow:i.shadow64},rootInline:{borderLeft:`1px solid ${i.colorNeutralStroke1}`},compactStepper:{display:`flex`,alignItems:`center`,flexShrink:0,padding:`10px 24px 12px 20px`,backgroundColor:i.colorNeutralBackground3,boxShadow:`inset 0 -2px 4px rgba(0,0,0,0.14)`,overflowX:`auto`},compactStep:{display:`flex`,alignItems:`center`,flexGrow:1,flexShrink:1,minWidth:0,margin:0,padding:0,border:`none`,backgroundColor:`transparent`,color:`inherit`,font:`inherit`},compactIndicator:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:`24px`,height:`24px`,flexShrink:0,borderRadius:i.borderRadiusCircular,boxSizing:`border-box`,...l.caption1Strong},compactIcon:{width:`24px`,height:`24px`,fontSize:`24px`,flexShrink:0},compactGlyph:{fontSize:`14px`},compactIndicatorPending:{border:`1px solid ${i.colorNeutralStrokeAccessible}`,color:i.colorNeutralForeground3},compactIndicatorDisabled:{border:`1px solid ${i.colorNeutralForegroundDisabled}`,color:i.colorNeutralForegroundDisabled},compactStepLast:{flexGrow:0},compactConnector:{flexGrow:1,flexShrink:1,flexBasis:`18px`,minWidth:`8px`,height:`2px`,backgroundColor:i.colorNeutralForegroundDisabled},body:{display:`flex`,flex:1,minHeight:0},sidebar:{display:`flex`,flexDirection:`column`,gap:0,flexShrink:0,width:`268px`,padding:`${i.spacingVerticalXXL} ${i.spacingHorizontalXXL} ${i.spacingVerticalXXL} ${i.spacingHorizontalL}`,backgroundColor:i.colorNeutralBackground3,boxShadow:`inset -2px 0 4px rgba(0,0,0,0.14)`,overflowY:`auto`},step:{display:`flex`,flexDirection:`column`,alignItems:`stretch`,margin:0,padding:0,border:`none`,backgroundColor:`transparent`,textAlign:`left`,font:`inherit`,color:`inherit`,width:`100%`},stepRow:{display:`flex`,alignItems:`stretch`,gap:i.spacingHorizontalM},indicatorColumn:{display:`flex`,flexDirection:`column`,alignItems:`center`,flexShrink:0,width:`20px`},stepText:{display:`flex`,flexDirection:`column`,gap:`2px`,minWidth:0,textAlign:`left`},stepTextSpaced:{paddingBottom:i.spacingVerticalL},stepClickable:{cursor:`pointer`,":hover .axis-WizardStepRow":{backgroundColor:i.colorSubtleBackgroundHover},":focus-visible":{outline:`none`},":focus-visible .axis-WizardStepRow":{outline:`2px solid ${i.colorStrokeFocus2}`,outlineOffset:`2px`}},stepLocked:{cursor:`not-allowed`},indicator:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:`20px`,height:`20px`,fontSize:`20px`,flexShrink:0,borderRadius:i.borderRadiusCircular,boxSizing:`border-box`},indicatorBrand:{backgroundColor:i.colorBrandBackground,color:i.colorNeutralForegroundOnBrand},indicatorDisabledFill:{backgroundColor:i.colorNeutralForegroundDisabled,color:i.colorNeutralBackground1},indicatorGlyph:{fontSize:`12px`},indicatorPending:{color:i.colorNeutralStrokeAccessible},indicatorError:{color:i.colorStatusDangerForeground1},indicatorDisabled:{color:i.colorNeutralForegroundDisabled},connector:{flexGrow:1,width:`2px`,minHeight:i.spacingVerticalM,backgroundColor:i.colorNeutralForegroundDisabled},connectorComplete:{backgroundColor:i.colorBrandBackground},stepLabel:{...l.body1,color:i.colorNeutralForeground1},stepLabelActive:{color:i.colorNeutralForeground1,fontWeight:i.fontWeightSemibold},stepLabelDisabled:{color:i.colorNeutralForegroundDisabled},stepDetails:{...l.caption1,color:i.colorNeutralForeground4},main:{display:`flex`,flexDirection:`column`,flex:1,minWidth:0,backgroundColor:i.colorNeutralBackground2},header:{display:`flex`,alignItems:`flex-start`,gap:i.spacingHorizontalS,padding:`${i.spacingVerticalS} ${i.spacingHorizontalL} 0`,overflow:`hidden`},closeButton:{marginTop:i.spacingVerticalL,flexShrink:0},contentArea:{flex:1,minHeight:0,overflow:`auto`,padding:`0 ${i.spacingHorizontalL}`},swayForward:{animationName:{from:{opacity:0,transform:`translateX(24px)`},to:{opacity:1,transform:`translateX(0)`}},animationDuration:i.durationNormal,animationTimingFunction:i.curveDecelerateMid,animationFillMode:`both`},swayBackward:{animationName:{from:{opacity:0,transform:`translateX(-24px)`},to:{opacity:1,transform:`translateX(0)`}},animationDuration:i.durationNormal,animationTimingFunction:i.curveDecelerateMid,animationFillMode:`both`},footer:{display:`flex`,justifyContent:`flex-end`,gap:i.spacingHorizontalS,padding:`${i.spacingVerticalM} ${i.spacingHorizontalL} ${i.spacingVerticalXXL}`,borderTop:`1px solid ${i.colorNeutralStroke1}`}}),D=(0,w.forwardRef)(({title:e,steps:t,currentStep:n,defaultStep:r=0,navigationMode:i=`none`,onStepChange:a,onFinish:s,onClose:c,backLabel:l=`Back`,nextLabel:u=`Next`,finishLabel:d=`Finish`,disableProgression:p=!1,animateContent:h=!1,layout:v=`default`,surface:b=`overlay`,headerActions:S,className:D},O)=>{let k=E(),[A,j]=(0,w.useState)(r),M=n!==void 0,N=M?n:A,P=t.length-1,F=N<=0,I=N>=P,L=(0,w.useRef)(N),R=N<L.current;(0,w.useEffect)(()=>{L.current=N},[N]);let[z,B]=(0,w.useState)(N);(0,w.useEffect)(()=>{B(e=>Math.max(e,N))},[N]);let[V,H]=(0,w.useState)(()=>new Set([N]));(0,w.useEffect)(()=>{H(e=>{if(e.has(N))return e;let t=new Set(e);return t.add(N),t})},[N]);let[U,W]=(0,w.useState)(!1);(0,w.useEffect)(()=>{N!==P&&W(!1)},[N,P]);let G=(0,w.useCallback)(e=>{let t=Math.min(Math.max(e,0),P);M||j(t),a?.(t)},[M,P,a]),K=(0,w.useCallback)(e=>i===`free`||i===`linear`&&e<=z,[i,z]),q=(0,w.useCallback)(e=>{e===N||!K(e)||G(e)},[N,K,G]),J=(0,w.useCallback)(()=>{if(I){W(!0),s?.();return}G(N+1)},[N,G,I,s]),Y=(0,w.useCallback)(()=>{G(N-1)},[N,G]),X=t[N],Z=v===`compact`,Q=e=>{let n=e===t.length-1,r=e<N,a=r&&!V.has(e)&&!!t[e]?.required,o=i!==`none`,s=K(e);return{isActive:e===N,isLast:n,isSkippedRequired:a,isCompleteStep:r&&!a,isDone:U&&n,isInteractive:o,isNavigable:s,isLocked:o&&!s}};return(0,T.jsxs)(`div`,{ref:O,className:o(k.root,b===`inline`?k.rootInline:k.rootOverlay,D),children:[Z&&(0,T.jsx)(`nav`,{className:k.compactStepper,"aria-label":`Wizard steps`,children:t.map((e,t)=>{let{isActive:n,isLast:r,isSkippedRequired:i,isCompleteStep:a,isDone:s,isInteractive:c,isNavigable:l,isLocked:u}=Q(t);return(0,T.jsxs)(`button`,{type:`button`,className:o(k.compactStep,r&&k.compactStepLast,c&&(l?k.stepClickable:k.stepLocked)),onClick:c?()=>q(t):void 0,disabled:c&&!l,"aria-current":n?`step`:void 0,"aria-label":`${e.label}${a||s?` (completed)`:``}`,children:[i?(0,T.jsx)(g,{className:o(k.compactIcon,k.indicatorError)}):s||a?(0,T.jsx)(`span`,{className:o(k.compactIndicator,u?k.indicatorDisabledFill:k.indicatorBrand),children:(0,T.jsx)(m,{className:k.compactGlyph})}):(0,T.jsx)(`span`,{className:o(k.compactIndicator,n?k.indicatorBrand:u?k.compactIndicatorDisabled:k.compactIndicatorPending),children:t+1}),!r&&(0,T.jsx)(`span`,{className:o(k.compactConnector,a&&k.connectorComplete)})]},t)})}),(0,T.jsxs)(`div`,{className:k.body,children:[!Z&&(0,T.jsx)(`nav`,{className:k.sidebar,"aria-label":`Wizard steps`,children:t.map((e,t)=>{let{isActive:n,isLast:r,isSkippedRequired:i,isCompleteStep:a,isDone:s,isInteractive:c,isNavigable:l,isLocked:u}=Q(t);return(0,T.jsx)(`button`,{type:`button`,className:o(k.step,c&&(l?k.stepClickable:k.stepLocked)),onClick:c?()=>q(t):void 0,disabled:c&&!l,"aria-current":n?`step`:void 0,children:(0,T.jsxs)(`div`,{className:o(`axis-WizardStepRow`,k.stepRow),children:[(0,T.jsxs)(`div`,{className:k.indicatorColumn,children:[i?(0,T.jsx)(g,{className:o(k.indicator,k.indicatorError)}):s||a?(0,T.jsx)(`span`,{className:o(k.indicator,u?k.indicatorDisabledFill:k.indicatorBrand),children:(0,T.jsx)(m,{className:k.indicatorGlyph})}):n?(0,T.jsx)(`span`,{className:o(k.indicator,k.indicatorBrand)}):(0,T.jsx)(f,{className:o(k.indicator,u?k.indicatorDisabled:k.indicatorPending)}),!r&&(0,T.jsx)(`div`,{className:o(k.connector,a&&k.connectorComplete)})]}),(0,T.jsxs)(`div`,{className:o(k.stepText,!r&&k.stepTextSpaced),children:[(0,T.jsx)(x,{className:o(k.stepLabel,(n||s)&&k.stepLabelActive,u&&k.stepLabelDisabled),children:e.label}),e.details&&(0,T.jsx)(x,{className:o(k.stepDetails,u&&k.stepLabelDisabled),children:e.details})]})]})},t)})}),(0,T.jsxs)(`div`,{className:k.main,children:[(0,T.jsxs)(`div`,{className:k.header,children:[(0,T.jsx)(C,{meta:e,title:X?.stepTitle??X?.label,description:X?.description,actions:S}),(0,T.jsx)(y,{className:k.closeButton,appearance:`subtle`,icon:(0,T.jsx)(_,{}),"aria-label":`Close`,onClick:c})]}),(0,T.jsx)(`div`,{className:o(k.contentArea,h&&(R?k.swayBackward:k.swayForward)),children:X?.content},h?N:void 0),(0,T.jsxs)(`div`,{className:k.footer,children:[(0,T.jsx)(y,{appearance:`secondary`,onClick:Y,disabled:F,children:l}),(0,T.jsx)(y,{appearance:`primary`,onClick:J,disabled:p,children:I?d:u})]})]})]})]})}),D.displayName=`Wizard`;try{D.displayName=`Wizard`,D.__docgenInfo={description:`Wizard

A full-page guided flow that pairs a vertical step indicator with a content
area and Back / Next navigation. The current step shows a filled brand
circle, completed steps show a brand checkmark circle with a brand connector,
and upcoming steps show an outlined circle. Required steps that were skipped
(jumped past without visiting) show a danger dismiss circle.

Steps can optionally be clicked to navigate via \`navigationMode\` (\`linear\`
requires completing steps in order, \`free\` allows jumping anywhere).

Supports both controlled (\`currentStep\` + \`onStepChange\`) and uncontrolled
(\`defaultStep\`) usage.`,displayName:`Wizard`,filePath:`/home/runner/work/fluent-components/fluent-components/examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Small muted title shown above the step title.`,name:`title`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!0,tags:{},type:{name:`string`}},steps:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Ordered list of steps shown in the sidebar.`,name:`steps`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!0,tags:{},type:{name:`WizardStep[]`}},currentStep:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Controlled active step index (zero-based).`,name:`currentStep`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`number`}},defaultStep:{defaultValue:{value:`0`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Default active step index for uncontrolled usage.`,name:`defaultStep`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`number`}},onStepChange:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Called whenever the active step changes.`,name:`onStepChange`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`((step: number) => void)`}},navigationMode:{defaultValue:{value:`none`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:"How sidebar steps respond to clicks.\n\n- `none` (default): steps are not clickable.\n- `linear`: steps must be completed in order; only visited/completed steps\n  and the current step can be clicked.\n- `free`: any step can be clicked to jump to it.",name:`navigationMode`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`enum`,raw:`WizardNavigationMode`,value:[{value:`"none"`},{value:`"linear"`},{value:`"free"`}]}},onFinish:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Called when the final step's primary action is pressed.`,name:`onFinish`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`(() => void)`}},onClose:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Called when the close icon is pressed.`,name:`onClose`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`(() => void)`}},backLabel:{defaultValue:{value:`Back`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Label for the back button.`,name:`backLabel`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`string`}},nextLabel:{defaultValue:{value:`Next`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Label for the next button.`,name:`nextLabel`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`string`}},finishLabel:{defaultValue:{value:`Finish`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Label for the primary action on the final step.`,name:`finishLabel`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`string`}},disableProgression:{defaultValue:{value:`false`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Disable navigating to the next step.`,name:`disableProgression`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`boolean`}},animateContent:{defaultValue:{value:`false`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Animate the content area with a directional sway when the active step
changes. Moving forward slides the content in from the right; moving
backward slides it in from the left. Defaults to \`false\`.`,name:`animateContent`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`boolean`}},layout:{defaultValue:{value:`default`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:"Step indicator placement.\n\n- `default`: vertical labelled rail beside the content (modal / large drawer).\n- `compact`: horizontal numbered stepper above the content (small drawer / mobile).",name:`layout`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`enum`,raw:`"default" | "compact"`,value:[{value:`"default"`},{value:`"compact"`}]}},surface:{defaultValue:{value:`overlay`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:"Surface chrome.\n\n- `overlay` (default): rounded corners and an elevation shadow.\n- `inline`: square corners with a leading divider, for docked drawers.",name:`surface`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`enum`,raw:`"inline" | "overlay"`,value:[{value:`"inline"`},{value:`"overlay"`}]}},headerActions:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Optional header actions rendered next to the close button. Defaults to
none, matching the design where the header carries only the close action.`,name:`headerActions`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`SectionHeaderAction[]`}},className:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`}],description:`Optional CSS class.`,name:`className`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/Wizard.tsx`,name:`WizardProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function k(){return(0,j.jsx)(`div`,{style:{height:`100%`,minHeight:0,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:i.borderRadiusMedium,backgroundColor:i.colorBrandBackground2,color:i.colorBrandForeground2,textTransform:`uppercase`,letterSpacing:`0.08em`,fontSize:i.fontSizeBase200},children:`Swap with content`})}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{a(),A=t(),O(),j=c(),M={title:`UI patterns/Wizard`,component:D,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`Wizard

A full-page guided flow that pairs a vertical step indicator with a content
area and Back / Next navigation. It is ideal for multi-step setup or
onboarding tasks where users need awareness of completed, current, and
upcoming steps.

**Fluent Guidelines Applied:**
- Composed only from \`@fluentui/react-components\`
- Token-driven styling via \`makeStyles\` + Fluent \`tokens\` (Axis theme aware)
- Step status uses Fluent status icons tinted with foreground tokens, so the
  Axis yellow brand never carries an on-brand glyph
- Accessible: \`nav\` landmark, \`aria-current="step"\`, labelled icon buttons

## Behaviour

- The current step shows a filled brand circle.
- Completed steps show a brand checkmark circle and a brand connector.
- Upcoming steps show an outlined circle; locked steps are muted.
- The primary button switches from **Next** to **Finish** on the last step.

Supports both controlled (\`currentStep\` + \`onStepChange\`) and uncontrolled
(\`defaultStep\`) usage.

<p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=104-459"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>`}}},decorators:[e=>(0,j.jsx)(`div`,{style:{height:`100vh`,padding:24,boxSizing:`border-box`},children:(0,j.jsx)(e,{})})],argTypes:{title:{control:`text`,description:`Small muted title shown above the step title`},navigationMode:{control:`radio`,options:[`none`,`linear`,`free`],description:`Whether sidebar steps are clickable: 'none' (Back/Next only), 'linear' (only completed/visited steps), or 'free' (jump anywhere)`},backLabel:{control:`text`,description:`Label for the back button`},nextLabel:{control:`text`,description:`Label for the next button`},layout:{control:`radio`,options:[`default`,`compact`],description:`Step indicator placement: 'default' (vertical labelled rail) or 'compact' (horizontal numbered stepper for small drawers / mobile)`},surface:{control:`radio`,options:[`overlay`,`inline`],description:`Surface chrome: 'overlay' (rounded with elevation) or 'inline' (square with a leading divider)`},finishLabel:{control:`text`,description:`Label for the primary action on the final step`},disableProgression:{control:`boolean`,description:`Disable navigating to the next step`},animateContent:{control:`boolean`,description:`Animate the content area with a directional sway when the active step changes`}}},N=Array.from({length:8},(e,t)=>({label:`Step ${t+1}`,stepTitle:`Wizard step title`,content:(0,j.jsx)(k,{})})),P={args:{title:`Wizard title`,steps:N,defaultStep:1}},F={args:{title:`Wizard title`,steps:N,navigationMode:`linear`,defaultStep:0}},I={args:{title:`Wizard title`,steps:N,navigationMode:`free`,defaultStep:2}},L={args:{title:`Wizard title`,navigationMode:`free`,defaultStep:0,steps:Array.from({length:6},(e,t)=>({label:`Step ${t+1}`,stepTitle:`Wizard step title`,content:(0,j.jsx)(k,{}),required:t===1||t===2}))}},R={args:{title:`Wizard title`,steps:N,navigationMode:`linear`,defaultStep:7}},z={render:e=>(0,j.jsx)(()=>{let[t,n]=(0,A.useState)(0);return(0,j.jsx)(D,{...e,currentStep:t,onStepChange:n,onFinish:()=>alert(`Wizard finished!`)})},{}),args:{title:`Device setup`,steps:[{label:`Connect`,stepTitle:`Connect your device`,content:(0,j.jsx)(k,{})},{label:`Configure`,stepTitle:`Configure settings`,content:(0,j.jsx)(k,{})},{label:`Review`,stepTitle:`Review and confirm`,content:(0,j.jsx)(k,{})}]}},B={args:{title:`Wizard title`,steps:N,defaultStep:0,navigationMode:`free`,animateContent:!0}},V={args:{title:`Onboarding`,defaultStep:2,steps:[{label:`Welcome`,stepTitle:`Welcome`,content:(0,j.jsx)(k,{})},{label:`Profile`,stepTitle:`Set up your profile`,content:(0,j.jsx)(k,{})},{label:`Done`,stepTitle:`All set`,content:(0,j.jsx)(k,{})}]}},H={args:{title:`Wizard title`,navigationMode:`linear`,defaultStep:0,steps:[{label:`Choose data source`,details:`Choose from sample data, existing sources, or create a new one.`,stepTitle:`Choose data source`,description:`Introduce the active step, clarify the task, and provide local actions without repeating the wizard-level title.`,content:(0,j.jsx)(k,{})},{label:`Choose data`,stepTitle:`Choose data`,description:`Pick the records that should be included in this deployment.`,content:(0,j.jsx)(k,{})},{label:`Choose data destination`,stepTitle:`Choose data destination`,description:`Select where the data should land. Step actions stay in the header, navigation stays in the footer.`,content:(0,j.jsx)(k,{})},{label:`Map to destination`,stepTitle:`Map to destination`,description:`Match each source field to a destination field.`,content:(0,j.jsx)(k,{})},{label:`Review and Create`,stepTitle:`Review and confirm`,description:`Confirm the source and targets before finishing the wizard.`,content:(0,j.jsx)(k,{})}]}},U={render:e=>(0,j.jsx)(`div`,{style:{width:340,height:`100%`},children:(0,j.jsx)(D,{...e})}),args:{title:`Wizard title`,steps:N,defaultStep:4,layout:`compact`,surface:`overlay`}},W={render:e=>(0,j.jsx)(`div`,{style:{width:340,height:`100%`},children:(0,j.jsx)(D,{...e})}),args:{title:`Wizard title`,steps:N,defaultStep:4,layout:`compact`,surface:`inline`}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Wizard title",
    steps,
    defaultStep: 1
  }
}`,...P.parameters?.docs?.source},description:{story:`Default wizard matching the design: an eight-step vertical indicator with the
second step active and a content placeholder. Steps are not clickable
(\`navigationMode="none"\`); navigate with Back / Next.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Wizard title",
    steps,
    navigationMode: "linear",
    defaultStep: 0
  }
}`,...F.parameters?.docs?.source},description:{story:`**Linear navigation** (\`navigationMode="linear"\`). Each step must be completed
in order. You can click any step you have already reached to jump back to it,
but upcoming steps stay locked until you advance with **Next**. Walk forward
with Next, then click an earlier step to revisit it.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Wizard title",
    steps,
    navigationMode: "free",
    defaultStep: 2
  }
}`,...I.parameters?.docs?.source},description:{story:`**Free navigation** (\`navigationMode="free"\`). Every step is clickable, so the
user can jump to any step at any time — useful for non-sequential flows or
editing a previously completed step.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`**Required steps** (\`step.required\`). With \`free\` navigation you can jump past
steps. Any *required* step you skip without ever visiting it shows a danger
dismiss circle (instead of a completion checkmark) so it is clear it still
needs to be filled in. Jump from the first step to a later one to see the
marker appear on the required steps in between.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Wizard title",
    steps,
    navigationMode: "linear",
    defaultStep: 7
  }
}`,...R.parameters?.docs?.source},description:{story:`**Completion** — pressing **Finish** on the last step marks the wizard done
and turns the final step indicator into a brand checkmark circle. Walk through
with **Next** and press **Finish** to see it.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:"Controlled usage. The parent owns the active step via `currentStep` and\n`onStepChange`, allowing custom validation before progressing.",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Wizard title",
    steps,
    defaultStep: 0,
    navigationMode: "free",
    animateContent: true
  }
}`,...B.parameters?.docs?.source},description:{story:`**Animated content** (\`animateContent\`). The content area sways in the
direction of travel when the active step changes — sliding in from the right
when moving forward and from the left when moving back. Use Back / Next to
see the transition.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:`A short three-step flow demonstrating the **Finish** action on the final step.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Wizard title",
    navigationMode: "linear",
    defaultStep: 0,
    steps: [{
      label: "Choose data source",
      details: "Choose from sample data, existing sources, or create a new one.",
      stepTitle: "Choose data source",
      description: "Introduce the active step, clarify the task, and provide local actions without repeating the wizard-level title.",
      content: <PlaceholderContent />
    }, {
      label: "Choose data",
      stepTitle: "Choose data",
      description: "Pick the records that should be included in this deployment.",
      content: <PlaceholderContent />
    }, {
      label: "Choose data destination",
      stepTitle: "Choose data destination",
      description: "Select where the data should land. Step actions stay in the header, navigation stays in the footer.",
      content: <PlaceholderContent />
    }, {
      label: "Map to destination",
      stepTitle: "Map to destination",
      description: "Match each source field to a destination field.",
      content: <PlaceholderContent />
    }, {
      label: "Review and Create",
      stepTitle: "Review and confirm",
      description: "Confirm the source and targets before finishing the wizard.",
      content: <PlaceholderContent />
    }]
  }
}`,...H.parameters?.docs?.source},description:{story:"**Section Header integration.** The wizard header *is* the\n[Section Header](?path=/docs/ui-patterns-section-header--docs) pattern: the\nwizard `title` becomes the meta label, the step's `stepTitle` becomes the\n`h2`, and the optional step `description` becomes the supporting copy. The\nheader carries only the close action; pass `headerActions` if a flow needs\nlocal section actions.",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 340,
    height: "100%"
  }}>
      <Wizard {...args} />
    </div>,
  args: {
    title: "Wizard title",
    steps,
    defaultStep: 4,
    layout: "compact",
    surface: "overlay"
  }
}`,...U.parameters?.docs?.source},description:{story:`**Compact overlay drawer / mobile** (\`layout="compact"\`, \`surface="overlay"\`).
At small widths the labelled rail is replaced by a horizontal numbered
stepper above the content: completed steps collapse to a brand checkmark,
the current step is a filled brand circle with its number, and upcoming
steps are outlined. Rounded corners and elevation mark it as an overlay.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 340,
    height: "100%"
  }}>
      <Wizard {...args} />
    </div>,
  args: {
    title: "Wizard title",
    steps,
    defaultStep: 4,
    layout: "compact",
    surface: "inline"
  }
}`,...W.parameters?.docs?.source},description:{story:'**Compact inline drawer** (`layout="compact"`, `surface="inline"`). Same\ncompact stepper, but docked into the page: square corners and a leading\ndivider instead of rounded corners and a shadow.',...W.parameters?.docs?.description}}},G=[`Default`,`LinearNavigation`,`FreeNavigation`,`RequiredSteps`,`Completion`,`Controlled`,`AnimatedContent`,`ThreeSteps`,`SectionHeaderIntegration`,`CompactOverlayDrawer`,`CompactInlineDrawer`]})))()}K();export{B as AnimatedContent,W as CompactInlineDrawer,U as CompactOverlayDrawer,R as Completion,z as Controlled,P as Default,I as FreeNavigation,F as LinearNavigation,L as RequiredSteps,H as SectionHeaderIntegration,V as ThreeSteps,G as __namedExportsOrder,M as default};