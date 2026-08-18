import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{H as n,U as r,n as i,t as a}from"./tokens-ChQznooH.js";import{n as o,t as s}from"./mergeClasses.esm-DWoEKj6B.js";import{a as c,i as l,l as u,n as d,o as f,r as p,t as m,u as h}from"./MenuTrigger-Bdfh0IyW.js";import{t as g}from"./jsx-runtime-DeHZSEgm.js";import{n as ee,t as _}from"./Tooltip-DcnigtS1.js";import{n as te,t as v}from"./createFluentIcon-CEiHlms4.js";import{i as ne,n as y}from"./chunk-0-BLX09C76.js";import{i as re,n as b}from"./chunk-4-DAX5JFnL.js";import{a as ie,i as x}from"./chunk-11-DdjhFvvt.js";import{a as S,i as C,o as ae,r as w}from"./chunk-13-DdQynYSi.js";import{a as T,i as E,o as oe}from"./chunk-18-DLqW5fvA.js";import{f as D,p as se}from"./chunk-21-q0jPuiDw.js";import{a as ce,r as le}from"./chunk-22-Dpl9TT-8.js";import{d as ue,o as de}from"./chunk-24-j5KtzyBs.js";import{n as fe,t as pe}from"./MenuItem-B9xDEgMS.js";import{n as me,t as he}from"./Button-cE2PW7YU.js";var O,k;function A(){return(A=e((()=>{te(),O=v(`OptionsRegular`,`1em`,[`M14.95 5a2.5 2.5 0 0 0-4.9 0H2.5a.5.5 0 0 0 0 1h7.55a2.5 2.5 0 0 0 4.9 0h2.55a.5.5 0 0 0 0-1h-2.55ZM12.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-2.55 7a2.5 2.5 0 0 0-4.9 0H2.5a.5.5 0 0 0 0 1h2.55a2.5 2.5 0 0 0 4.9 0h7.55a.5.5 0 0 0 0-1H9.95ZM7.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z`]),k=v(`StorageRegular`,`1em`,[`M13 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2 8.5A2.5 2.5 0 0 1 4.5 6h11A2.5 2.5 0 0 1 18 8.5v3a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 11.5v-3ZM4.5 7C3.67 7 3 7.67 3 8.5v3c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-11Z`])})))()}function j({item:e,appearance:t}){let n=F(),r=t===`media`,i=e.hasMenu||(e.menuItems?.length??0)>0,a=o(r?n.mediaButton:n.subtleButton,e.active&&(r?n.mediaButtonActive:n.subtleButtonActive),e.tone===`danger`&&n.danger),s=(0,P.jsxs)(he,{appearance:`transparent`,className:a,icon:e.text?void 0:e.icon??void 0,disabled:e.disabled,"aria-label":e.label,"aria-pressed":e.active?!0:void 0,"aria-haspopup":i?`menu`:void 0,onClick:e.menuItems?.length?void 0:e.onClick,children:[e.text?(0,P.jsx)(`span`,{className:n.buttonText,children:e.text}):null,i?(0,P.jsx)(de,{fontSize:16}):null]});return e.menuItems?.length?(0,P.jsxs)(u,{children:[(0,P.jsx)(m,{disableButtonEnhancement:!0,children:(0,P.jsx)(_,{content:e.label,relationship:`label`,withArrow:!0,children:s})}),(0,P.jsx)(p,{children:(0,P.jsx)(c,{children:e.menuItems.map(e=>(0,P.jsx)(pe,{icon:e.icon??void 0,disabled:e.disabled,onClick:e.onClick,children:e.label},e.key))})})]}):(0,P.jsx)(_,{content:e.label,relationship:`label`,withArrow:!0,children:s})}function M({group:e,appearance:t}){let n=F(),r=t===`media`;return e.segmented?(0,P.jsx)(`div`,{className:o(n.segment,r?n.segmentMedia:n.segmentSubtle),children:e.items.map((e,i)=>(0,P.jsxs)(`div`,{className:n.group,children:[i>0?(0,P.jsx)(`span`,{"aria-hidden":!0,className:o(n.divider,r?n.dividerMedia:n.dividerSubtle)}):null,(0,P.jsx)(j,{item:e,appearance:t})]},e.key))}):(0,P.jsx)(`div`,{className:n.group,children:e.items.map(e=>(0,P.jsx)(j,{item:e,appearance:t},e.key))})}var N,P,F,I;function L(){return(L=e((()=>{me(),h(),fe(),f(),l(),d(),ee(),n(),s(),a(),ue(),N=t(),P=g(),F=r({root:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:i.spacingHorizontalM,width:`100%`,minWidth:0,boxSizing:`border-box`,paddingLeft:i.spacingHorizontalL,paddingRight:i.spacingHorizontalL,paddingTop:i.spacingVerticalS,paddingBottom:i.spacingVerticalS},rootMedia:{backgroundColor:`#292929`,color:`#ffffff`,borderRadius:i.borderRadiusMedium},rootSubtle:{backgroundColor:i.colorNeutralBackground1,color:i.colorNeutralForeground1,border:`1px solid ${i.colorNeutralStroke2}`,borderRadius:i.borderRadiusMedium},side:{display:`flex`,alignItems:`center`,gap:i.spacingHorizontalS,minWidth:0},sideEnd:{justifyContent:`flex-end`},group:{display:`flex`,alignItems:`center`,gap:i.spacingHorizontalXXS},segment:{display:`flex`,alignItems:`center`,gap:0,borderRadius:i.borderRadiusMedium,overflow:`hidden`},segmentMedia:{backgroundColor:`rgba(255, 255, 255, 0.08)`},segmentSubtle:{backgroundColor:i.colorNeutralBackground3},divider:{width:`1px`,height:`20px`,flexShrink:0},dividerMedia:{backgroundColor:`rgba(255, 255, 255, 0.2)`},dividerSubtle:{backgroundColor:i.colorNeutralStroke2},mediaButton:{color:`#ffffff`,minWidth:`32px`,"&:hover":{color:`#ffffff`,backgroundColor:`rgba(255, 255, 255, 0.1)`},"&:hover:active":{color:`#ffffff`,backgroundColor:`rgba(255, 255, 255, 0.16)`}},mediaButtonActive:{backgroundColor:`rgba(255, 255, 255, 0.16)`},subtleButton:{minWidth:`32px`},subtleButtonActive:{backgroundColor:i.colorNeutralBackground1Selected},danger:{color:i.colorPaletteRedForeground1,"&:hover":{color:i.colorPaletteRedForeground1}},buttonText:{fontSize:i.fontSizeBase300,fontWeight:i.fontWeightSemibold,lineHeight:i.lineHeightBase300}}),I=(0,N.forwardRef)(({start:e=[],end:t=[],appearance:n=`media`,ariaLabel:r=`Video controls`,className:i,...a},s)=>{let c=F(),l=n===`media`;return(0,P.jsxs)(`div`,{ref:s,role:`toolbar`,"aria-label":r,className:o(c.root,l?c.rootMedia:c.rootSubtle,i),...a,children:[(0,P.jsx)(`div`,{className:c.side,children:e.map(e=>(0,P.jsx)(M,{group:e,appearance:n},e.key))}),(0,P.jsx)(`div`,{className:o(c.side,c.sideEnd),children:t.map(e=>(0,P.jsx)(M,{group:e,appearance:n},e.key))})]})}),I.displayName=`VideoControlBar`;try{I.displayName=`VideoControlBar`,I.__docgenInfo={description:"VideoControlBar — a toolbar of grouped icon controls for a live video feed.\n\nControls are arranged into leading (`start`) and trailing (`end`) groups.\nGroups may be `segmented` to cluster related controls behind a shared\nbackground with vertical dividers (e.g. record + storage, or the live-view\nresolution / framing cluster). Every control exposes a tooltip and an\n`aria-label`, and the root renders as a `toolbar` landmark.",displayName:`VideoControlBar`,filePath:`/home/runner/work/fluent-components/fluent-components/examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,methods:[],props:{start:{defaultValue:{value:`[]`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`}],description:`Groups aligned to the leading (left) edge.`,name:`start`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`},required:!1,tags:{},type:{name:`VideoControlBarGroup[]`}},end:{defaultValue:{value:`[]`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`}],description:`Groups aligned to the trailing (right) edge.`,name:`end`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`},required:!1,tags:{},type:{name:`VideoControlBarGroup[]`}},appearance:{defaultValue:{value:`media`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`}],description:"Visual context.\n- `media` (default): dark scrim intended to sit over a live video feed.\n- `subtle`: theme-aware bar for placement on a page surface.",name:`appearance`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`},required:!1,tags:{},type:{name:`enum`,raw:`VideoControlBarAppearance`,value:[{value:`"media"`},{value:`"subtle"`}]}},ariaLabel:{defaultValue:{value:`Video controls`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`}],description:`Accessible name for the toolbar landmark.`,name:`ariaLabel`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`}],description:`Optional CSS class applied to the root element.`,name:`className`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function ge(){return[{key:`playback`,items:[{key:`play`,label:`Start stream / pause stream`,icon:(0,B.jsx)(S,{})}]},{key:`snapshot`,items:[{key:`snapshot`,label:`Take a snapshot`,icon:(0,B.jsx)(y,{})}]},{key:`record-cluster`,segmented:!0,items:[{key:`record`,label:`Start recording`,icon:(0,B.jsx)(E,{}),tone:`danger`},{key:`storage`,label:`Select storage`,icon:(0,B.jsx)(k,{})}]},{key:`ir`,items:[{key:`ir`,label:`IR light`,icon:(0,B.jsx)(x,{})}]},{key:`osd`,items:[{key:`osd`,label:`Onscreen controls`,icon:(0,B.jsx)(O,{})}]}]}function R(){return[{key:`settings`,items:[{key:`settings`,label:`Live view settings`,icon:(0,B.jsx)(b,{}),hasMenu:!0,menuItems:[{key:`quality`,label:`Stream quality`},{key:`overlay`,label:`Overlay settings`},{key:`rotation`,label:`Image rotation`}]}]},{key:`view-cluster`,segmented:!0,items:[{key:`resolution`,label:`Full resolution`,text:`1:1`},{key:`expand`,label:`Expanded live view`,icon:(0,B.jsx)(T,{})},{key:`fullscreen`,label:`Full screen`,icon:(0,B.jsx)(w,{})}]}]}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;function _e(){return(_e=e((()=>{n(),ne(),ae(),A(),se(),ce(),oe(),re(),ie(),z=t(),L(),B=g(),V=r({bar:{borderRadius:0}}),H=[`https://media.w3.org/2010/05/sintel/trailer.mp4`,`https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`],U=`https://www.youtube-nocookie.com/embed/v7wWIO7brSM?autoplay=1&mute=1&controls=0&playsinline=1&rel=0&enablejsapi=1`,W={title:`UI patterns/Video Control Bar`,component:I,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"A toolbar of grouped icon controls for a live video feed. Controls are split into leading (`start`) and trailing (`end`) groups; related controls can be `segmented` to sit behind a shared background separated by vertical dividers. Every control exposes a tooltip and an `aria-label`, and the root renders as a `toolbar` landmark.\n\nThe `media` appearance is a dark scrim intended to overlay a video stream, while `subtle` is a theme-aware bar for placement on a page surface.\n\n<p align='right'><a href='https://www.figma.com/design/3dbVV6ioOwvMMnhqTZVHJZ/ADA-UI-kit?node-id=4934-752531'><img width='240' src='./figma-global-components-cover.svg' alt='Open in Figma — AXIS ADA UI kit' /></a></p>"}}},argTypes:{appearance:{control:`inline-radio`,options:[`media`,`subtle`],description:"`media` renders a dark scrim for overlaying a video feed; `subtle` renders a theme-aware bar for page surfaces.",table:{type:{summary:`"media" | "subtle"`}}},ariaLabel:{control:`text`,description:`Accessible name for the toolbar landmark.`,table:{type:{summary:`string`}}},start:{control:!1,description:`Groups aligned to the leading (left) edge.`,table:{type:{summary:`VideoControlBarGroup[]`}}},end:{control:!1,description:`Groups aligned to the trailing (right) edge.`,table:{type:{summary:`VideoControlBarGroup[]`}}},className:{control:!1,table:{type:{summary:`string | undefined`}}}},args:{appearance:`media`,ariaLabel:`Video controls`,start:ge(),end:R()}},G={},K={parameters:{layout:`fullscreen`,fitContent:!0,docs:{description:{story:"Positioned along the bottom edge of a real video stream, the `media` appearance floats above the feed. The controls are wired to the video element: play/pause, IR (night) mode, recording state, and full screen all work."}}},render:e=>(0,B.jsx)(()=>{let t=(0,z.useRef)(null),n=(0,z.useRef)(null),[r,i]=(0,z.useState)(!1),[a,o]=(0,z.useState)(!1),[s,c]=(0,z.useState)(!1),[l,u]=(0,z.useState)(!1),d=(0,z.useCallback)(()=>{let e=n.current;e&&(e.paused?(e.play(),i(!0)):(e.pause(),i(!1)))},[]),f=(0,z.useCallback)(()=>{let e=t.current;e&&(document.fullscreenElement?(document.exitFullscreen(),u(!1)):(e.requestFullscreen(),u(!0)))},[]),p=[{key:`playback`,items:[{key:`play`,label:r?`Pause stream`:`Start stream`,icon:r?(0,B.jsx)(D,{}):(0,B.jsx)(S,{}),active:r,onClick:d}]},{key:`snapshot`,items:[{key:`snapshot`,label:`Take a snapshot`,icon:(0,B.jsx)(y,{})}]},{key:`record-cluster`,segmented:!0,items:[{key:`record`,label:a?`Stop recording`:`Start recording`,icon:(0,B.jsx)(E,{}),tone:`danger`,active:a,onClick:()=>o(e=>!e)},{key:`storage`,label:`Select storage`,icon:(0,B.jsx)(k,{})}]},{key:`ir`,items:[{key:`ir`,label:`IR light`,icon:(0,B.jsx)(x,{}),active:s,onClick:()=>c(e=>!e)}]},{key:`osd`,items:[{key:`osd`,label:`Onscreen controls`,icon:(0,B.jsx)(O,{})}]}],m=[{key:`settings`,items:[{key:`settings`,label:`Live view settings`,icon:(0,B.jsx)(b,{}),hasMenu:!0,menuItems:[{key:`quality`,label:`Stream quality`},{key:`overlay`,label:`Overlay settings`},{key:`rotation`,label:`Image rotation`}]}]},{key:`view-cluster`,segmented:!0,items:[{key:`resolution`,label:`Full resolution`,text:`1:1`},{key:`expand`,label:`Expanded live view`,icon:(0,B.jsx)(T,{})},{key:`fullscreen`,label:l?`Exit full screen`:`Full screen`,icon:l?(0,B.jsx)(C,{}):(0,B.jsx)(w,{}),active:l,onClick:f}]}];return(0,B.jsxs)(`div`,{ref:t,style:{position:`relative`,width:`100%`,height:480,overflow:`hidden`,backgroundColor:`#000`,display:`block`,lineHeight:0},children:[(0,B.jsxs)(`video`,{ref:n,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:`auto`,onPlay:()=>i(!0),onPause:()=>i(!1),style:{width:`100%`,height:`100%`,objectFit:`cover`,display:`block`,filter:s?`grayscale(1) brightness(1.3)`:void 0,transition:`filter 200ms ease`},children:[H.map(e=>(0,B.jsx)(`source`,{src:e,type:`video/mp4`},e)),(0,B.jsx)(`track`,{kind:`captions`})]}),a?(0,B.jsxs)(`div`,{style:{position:`absolute`,top:16,left:16,display:`flex`,alignItems:`center`,gap:6,padding:`4px 10px`,borderRadius:4,backgroundColor:`rgba(0, 0, 0, 0.6)`,color:`#fff`,fontSize:12,fontWeight:600},children:[(0,B.jsx)(`span`,{style:{width:8,height:8,borderRadius:`50%`,backgroundColor:`#e00`}}),`REC`]}):null,(0,B.jsx)(`div`,{style:{position:`absolute`,left:12,right:12,bottom:12},children:(0,B.jsx)(I,{...e,start:p,end:m})})]})},{})},q={parameters:{layout:`fullscreen`,fitContent:!0,docs:{description:{story:`Overlaid on a real, officially-published public webcam — Kristianstad Stora Torg (Skåne, Sweden), a curated 24/7 YouTube live stream. Playback (play/pause), IR (night) mode, recording state, and full screen are wired to the feed via the YouTube IFrame Player API, so the controls drive the embed even though it is cross-origin.`}}},render:e=>(0,B.jsx)(()=>{let t=(0,z.useRef)(null),n=(0,z.useRef)(null),[r,i]=(0,z.useState)(!0),[a,o]=(0,z.useState)(!1),[s,c]=(0,z.useState)(!1),[l,u]=(0,z.useState)(!1),d=(0,z.useCallback)(e=>{n.current?.contentWindow?.postMessage(JSON.stringify({event:`command`,func:e,args:[]}),`*`)},[]),f=(0,z.useCallback)(()=>{i(e=>{let t=!e;return d(t?`playVideo`:`pauseVideo`),t})},[d]),p=(0,z.useCallback)(()=>{let e=t.current;e&&(document.fullscreenElement?(document.exitFullscreen(),u(!1)):(e.requestFullscreen(),u(!0)))},[]),m=[{key:`playback`,items:[{key:`play`,label:r?`Pause stream`:`Start stream`,icon:r?(0,B.jsx)(D,{}):(0,B.jsx)(S,{}),active:r,onClick:f}]},{key:`snapshot`,items:[{key:`snapshot`,label:`Take a snapshot`,icon:(0,B.jsx)(y,{})}]},{key:`record-cluster`,segmented:!0,items:[{key:`record`,label:a?`Stop recording`:`Start recording`,icon:(0,B.jsx)(E,{}),tone:`danger`,active:a,onClick:()=>o(e=>!e)},{key:`storage`,label:`Select storage`,icon:(0,B.jsx)(k,{})}]},{key:`ir`,items:[{key:`ir`,label:`IR light`,icon:(0,B.jsx)(x,{}),active:s,onClick:()=>c(e=>!e)}]},{key:`osd`,items:[{key:`osd`,label:`Onscreen controls`,icon:(0,B.jsx)(O,{})}]}],h=[{key:`settings`,items:[{key:`settings`,label:`Live view settings`,icon:(0,B.jsx)(b,{}),hasMenu:!0,menuItems:[{key:`quality`,label:`Stream quality`},{key:`overlay`,label:`Overlay settings`},{key:`rotation`,label:`Image rotation`}]}]},{key:`view-cluster`,segmented:!0,items:[{key:`resolution`,label:`Full resolution`,text:`1:1`},{key:`expand`,label:`Expanded live view`,icon:(0,B.jsx)(T,{})},{key:`fullscreen`,label:l?`Exit full screen`:`Full screen`,icon:l?(0,B.jsx)(C,{}):(0,B.jsx)(w,{}),active:l,onClick:p}]}];return(0,B.jsxs)(`div`,{ref:t,style:{position:`relative`,width:`100%`,height:480,overflow:`hidden`,backgroundColor:`#000`,display:`block`,lineHeight:0},children:[(0,B.jsx)(`iframe`,{ref:n,title:`Kristianstad Stora Torg live webcam`,src:U,allow:`autoplay; encrypted-media; picture-in-picture`,allowFullScreen:!0,style:{position:`absolute`,inset:0,width:`100%`,height:`100%`,border:0,transform:`scale(1.35)`,transformOrigin:`center`,filter:s?`grayscale(1) brightness(1.3)`:void 0,transition:`filter 200ms ease`}}),(0,B.jsxs)(`div`,{style:{position:`absolute`,top:16,left:16,display:`flex`,alignItems:`center`,gap:6,padding:`4px 10px`,borderRadius:4,backgroundColor:`rgba(0, 0, 0, 0.6)`,color:`#fff`,fontSize:12,fontWeight:600,letterSpacing:`0.04em`},children:[(0,B.jsx)(`span`,{style:{width:8,height:8,borderRadius:`50%`,backgroundColor:`#e00`}}),a?`REC · KRISTIANSTAD`:`LIVE · KRISTIANSTAD`]}),(0,B.jsx)(`div`,{style:{position:`absolute`,left:12,right:12,bottom:12},children:(0,B.jsx)(I,{...e,start:m,end:h})})]})},{})},J={parameters:{docs:{description:{story:"Docked flush under the video as a single player unit — the feed and the `media` bar share one rounded frame with no gap between them. The bar's top corners are squared via the `className` prop (the component merges consumer classes last, so no component change is needed). Play/pause is wired to the video element."}}},render:e=>(0,B.jsx)(()=>{let t=V(),n=(0,z.useRef)(null),[r,i]=(0,z.useState)(!1),a=(0,z.useCallback)(()=>{let e=n.current;e&&(e.paused?e.play():e.pause())},[]),o=[{key:`playback`,items:[{key:`play`,label:r?`Pause stream`:`Start stream`,icon:r?(0,B.jsx)(D,{}):(0,B.jsx)(S,{}),active:r,onClick:a}]},{key:`snapshot`,items:[{key:`snapshot`,label:`Take a snapshot`,icon:(0,B.jsx)(y,{})}]},{key:`record-cluster`,segmented:!0,items:[{key:`record`,label:`Start recording`,icon:(0,B.jsx)(E,{}),tone:`danger`},{key:`storage`,label:`Select storage`,icon:(0,B.jsx)(k,{})}]}];return(0,B.jsxs)(`div`,{style:{width:`100%`,maxWidth:960,margin:`0 auto`,borderRadius:8,overflow:`hidden`,backgroundColor:`#000`,lineHeight:0},children:[(0,B.jsxs)(`video`,{ref:n,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:`auto`,onPlay:()=>i(!0),onPause:()=>i(!1),style:{width:`100%`,height:380,objectFit:`cover`,display:`block`},children:[H.map(e=>(0,B.jsx)(`source`,{src:e,type:`video/mp4`},e)),(0,B.jsx)(`track`,{kind:`captions`})]}),(0,B.jsx)(I,{...e,start:o,end:R(),className:t.bar})]})},{})},Y={args:{appearance:`subtle`},parameters:{docs:{description:{story:"Use `subtle` when the bar sits on a page surface rather than over a video feed. Colors follow the active theme."}}}},X={args:{start:[{key:`playback`,items:[{key:`play`,label:`Start stream / pause stream`,icon:(0,B.jsx)(S,{})},{key:`snapshot`,label:`Take a snapshot`,icon:(0,B.jsx)(y,{})}]}],end:[{key:`view`,items:[{key:`fullscreen`,label:`Full screen`,icon:(0,B.jsx)(w,{})}]}]},parameters:{docs:{description:{story:`Only play, snapshot, and full-screen — groups and items are entirely data-driven, so the bar scales down to just what a view needs.`}}}},Z={parameters:{docs:{description:{story:"The `active` flag drives a persistent highlight and `aria-pressed`. Here it toggles the play/pause icon and the recording state."}}},render:e=>(0,B.jsx)(()=>{let[t,n]=(0,z.useState)(!1),[r,i]=(0,z.useState)(!1),a=[{key:`playback`,items:[{key:`play`,label:t?`Pause stream`:`Start stream`,icon:t?(0,B.jsx)(D,{}):(0,B.jsx)(S,{}),active:t,onClick:()=>n(e=>!e)}]},{key:`record-cluster`,segmented:!0,items:[{key:`record`,label:r?`Stop recording`:`Start recording`,icon:(0,B.jsx)(E,{}),tone:`danger`,active:r,onClick:()=>i(e=>!e)},{key:`storage`,label:`Select storage`,icon:(0,B.jsx)(k,{})}]}];return(0,B.jsx)(I,{...e,start:a})},{})},Q={args:{start:[{key:`view-cluster`,segmented:!0,items:[{key:`resolution`,label:`Full resolution`,text:`1:1`},{key:`expand`,label:`Expanded live view`,icon:(0,B.jsx)(T,{}),active:!0},{key:`fullscreen`,label:`Full screen`,icon:(0,B.jsx)(w,{})}]}],end:[{key:`resolution-menu`,items:[{key:`resolution-menu`,label:`Resolution`,icon:(0,B.jsx)(le,{}),hasMenu:!0,menuItems:[{key:`full`,label:`Full resolution (1:1)`},{key:`fit`,label:`Fit to window`}]}]}]},parameters:{docs:{description:{story:"A `segmented` group clusters related controls behind one background with vertical dividers. The right-hand control shows the chevron menu variant."}}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{}`,...G.parameters?.docs?.source},description:{story:`The full control bar as a dark scrim, matching the Figma anatomy.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen",
    fitContent: true,
    docs: {
      description: {
        story: "Positioned along the bottom edge of a real video stream, the \`media\` appearance floats above the feed. The controls are wired to the video element: play/pause, IR (night) mode, recording state, and full screen all work."
      }
    }
  },
  render: args => {
    const OverVideoDemo = () => {
      const containerRef = useRef<HTMLDivElement>(null);
      const videoRef = useRef<HTMLVideoElement>(null);
      const [playing, setPlaying] = useState(false);
      const [recording, setRecording] = useState(false);
      const [nightMode, setNightMode] = useState(false);
      const [fullscreen, setFullscreen] = useState(false);
      const togglePlay = useCallback(() => {
        const video = videoRef.current;
        if (!video) {
          return;
        }
        if (video.paused) {
          void video.play();
          setPlaying(true);
        } else {
          video.pause();
          setPlaying(false);
        }
      }, []);
      const toggleFullscreen = useCallback(() => {
        const container = containerRef.current;
        if (!container) {
          return;
        }
        if (document.fullscreenElement) {
          void document.exitFullscreen();
          setFullscreen(false);
        } else {
          void container.requestFullscreen();
          setFullscreen(true);
        }
      }, []);
      const start: VideoControlBarGroup[] = [{
        key: "playback",
        items: [{
          key: "play",
          label: playing ? "Pause stream" : "Start stream",
          icon: playing ? <PauseFilled /> : <PlayFilled />,
          active: playing,
          onClick: togglePlay
        }]
      }, {
        key: "snapshot",
        items: [{
          key: "snapshot",
          label: "Take a snapshot",
          icon: <CameraRegular />
        }]
      }, {
        key: "record-cluster",
        segmented: true,
        items: [{
          key: "record",
          label: recording ? "Stop recording" : "Start recording",
          icon: <RecordRegular />,
          tone: "danger",
          active: recording,
          onClick: () => setRecording(value => !value)
        }, {
          key: "storage",
          label: "Select storage",
          icon: <StorageRegular />
        }]
      }, {
        key: "ir",
        items: [{
          key: "ir",
          label: "IR light",
          icon: <WeatherMoonRegular />,
          active: nightMode,
          onClick: () => setNightMode(value => !value)
        }]
      }, {
        key: "osd",
        items: [{
          key: "osd",
          label: "Onscreen controls",
          icon: <OptionsRegular />
        }]
      }];
      const end: VideoControlBarGroup[] = [{
        key: "settings",
        items: [{
          key: "settings",
          label: "Live view settings",
          icon: <SettingsRegular />,
          hasMenu: true,
          menuItems: [{
            key: "quality",
            label: "Stream quality"
          }, {
            key: "overlay",
            label: "Overlay settings"
          }, {
            key: "rotation",
            label: "Image rotation"
          }]
        }]
      }, {
        key: "view-cluster",
        segmented: true,
        items: [{
          key: "resolution",
          label: "Full resolution",
          text: "1:1"
        }, {
          key: "expand",
          label: "Expanded live view",
          icon: <RectangleLandscapeRegular />
        }, {
          key: "fullscreen",
          label: fullscreen ? "Exit full screen" : "Full screen",
          icon: fullscreen ? <FullScreenMinimizeRegular /> : <FullScreenMaximizeRegular />,
          active: fullscreen,
          onClick: toggleFullscreen
        }]
      }];
      return <div ref={containerRef} style={{
        position: "relative",
        width: "100%",
        height: 480,
        overflow: "hidden",
        backgroundColor: "#000",
        display: "block",
        lineHeight: 0
      }}>
          <video ref={videoRef} autoPlay loop muted playsInline preload="auto" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          filter: nightMode ? "grayscale(1) brightness(1.3)" : undefined,
          transition: "filter 200ms ease"
        }}>
            {SAMPLE_VIDEO_SOURCES.map(source => <source key={source} src={source} type="video/mp4" />)}
            <track kind="captions" />
          </video>

          {recording ? <div style={{
          position: "absolute",
          top: 16,
          left: 16,
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 10px",
          borderRadius: 4,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "#fff",
          fontSize: 12,
          fontWeight: 600
        }}>
              <span style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#e00"
          }} />
              REC
            </div> : null}

          <div style={{
          position: "absolute",
          left: 12,
          right: 12,
          bottom: 12
        }}>
            <VideoControlBar {...args} start={start} end={end} />
          </div>
        </div>;
    };
    return <OverVideoDemo />;
  }
}`,...K.parameters?.docs?.source},description:{story:`The bar overlaid on the bottom of a live-view frame — its intended
production context.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen",
    fitContent: true,
    docs: {
      description: {
        story: "Overlaid on a real, officially-published public webcam — Kristianstad Stora Torg (Skåne, Sweden), a curated 24/7 YouTube live stream. Playback (play/pause), IR (night) mode, recording state, and full screen are wired to the feed via the YouTube IFrame Player API, so the controls drive the embed even though it is cross-origin."
      }
    }
  },
  render: args => {
    const OverLiveFeedDemo = () => {
      const containerRef = useRef<HTMLDivElement>(null);
      const iframeRef = useRef<HTMLIFrameElement>(null);
      const [playing, setPlaying] = useState(true);
      const [recording, setRecording] = useState(false);
      const [nightMode, setNightMode] = useState(false);
      const [fullscreen, setFullscreen] = useState(false);

      // Cross-origin YouTube embeds can't be driven through the DOM, but the
      // IFrame Player API accepts JSON commands over postMessage when the embed
      // is loaded with \`enablejsapi=1\`.
      const postCommand = useCallback((func: string) => {
        iframeRef.current?.contentWindow?.postMessage(JSON.stringify({
          event: "command",
          func,
          args: []
        }), "*");
      }, []);
      const togglePlay = useCallback(() => {
        setPlaying(value => {
          const next = !value;
          postCommand(next ? "playVideo" : "pauseVideo");
          return next;
        });
      }, [postCommand]);
      const toggleFullscreen = useCallback(() => {
        const container = containerRef.current;
        if (!container) {
          return;
        }
        if (document.fullscreenElement) {
          void document.exitFullscreen();
          setFullscreen(false);
        } else {
          void container.requestFullscreen();
          setFullscreen(true);
        }
      }, []);
      const start: VideoControlBarGroup[] = [{
        key: "playback",
        items: [{
          key: "play",
          label: playing ? "Pause stream" : "Start stream",
          icon: playing ? <PauseFilled /> : <PlayFilled />,
          active: playing,
          onClick: togglePlay
        }]
      }, {
        key: "snapshot",
        items: [{
          key: "snapshot",
          label: "Take a snapshot",
          icon: <CameraRegular />
        }]
      }, {
        key: "record-cluster",
        segmented: true,
        items: [{
          key: "record",
          label: recording ? "Stop recording" : "Start recording",
          icon: <RecordRegular />,
          tone: "danger",
          active: recording,
          onClick: () => setRecording(value => !value)
        }, {
          key: "storage",
          label: "Select storage",
          icon: <StorageRegular />
        }]
      }, {
        key: "ir",
        items: [{
          key: "ir",
          label: "IR light",
          icon: <WeatherMoonRegular />,
          active: nightMode,
          onClick: () => setNightMode(value => !value)
        }]
      }, {
        key: "osd",
        items: [{
          key: "osd",
          label: "Onscreen controls",
          icon: <OptionsRegular />
        }]
      }];
      const end: VideoControlBarGroup[] = [{
        key: "settings",
        items: [{
          key: "settings",
          label: "Live view settings",
          icon: <SettingsRegular />,
          hasMenu: true,
          menuItems: [{
            key: "quality",
            label: "Stream quality"
          }, {
            key: "overlay",
            label: "Overlay settings"
          }, {
            key: "rotation",
            label: "Image rotation"
          }]
        }]
      }, {
        key: "view-cluster",
        segmented: true,
        items: [{
          key: "resolution",
          label: "Full resolution",
          text: "1:1"
        }, {
          key: "expand",
          label: "Expanded live view",
          icon: <RectangleLandscapeRegular />
        }, {
          key: "fullscreen",
          label: fullscreen ? "Exit full screen" : "Full screen",
          icon: fullscreen ? <FullScreenMinimizeRegular /> : <FullScreenMaximizeRegular />,
          active: fullscreen,
          onClick: toggleFullscreen
        }]
      }];
      return <div ref={containerRef} style={{
        position: "relative",
        width: "100%",
        height: 480,
        overflow: "hidden",
        backgroundColor: "#000",
        display: "block",
        lineHeight: 0
      }}>
          <iframe ref={iframeRef} title="Kristianstad Stora Torg live webcam" src={LIVE_FEED_EMBED} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0,
          // Scale the 16:9 embed up so the letterboxing is cropped by the
          // container's overflow, mimicking an object-fit: cover feed.
          transform: "scale(1.35)",
          transformOrigin: "center",
          filter: nightMode ? "grayscale(1) brightness(1.3)" : undefined,
          transition: "filter 200ms ease"
        }} />

          <div style={{
          position: "absolute",
          top: 16,
          left: 16,
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 10px",
          borderRadius: 4,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "#fff",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.04em"
        }}>
            <span style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#e00"
          }} />
            {recording ? "REC · KRISTIANSTAD" : "LIVE · KRISTIANSTAD"}
          </div>

          <div style={{
          position: "absolute",
          left: 12,
          right: 12,
          bottom: 12
        }}>
            <VideoControlBar {...args} start={start} end={end} />
          </div>
        </div>;
    };
    return <OverLiveFeedDemo />;
  }
}`,...q.parameters?.docs?.source},description:{story:`The bar overlaid on a real, officially-published public webcam feed.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Docked flush under the video as a single player unit — the feed and the \`media\` bar share one rounded frame with no gap between them. The bar's top corners are squared via the \`className\` prop (the component merges consumer classes last, so no component change is needed). Play/pause is wired to the video element."
      }
    }
  },
  render: args => {
    const BelowFeedDemo = () => {
      const dockedStyles = useDockedStyles();
      const videoRef = useRef<HTMLVideoElement>(null);
      const [playing, setPlaying] = useState(false);
      const togglePlay = useCallback(() => {
        const video = videoRef.current;
        if (!video) {
          return;
        }
        if (video.paused) {
          void video.play();
        } else {
          video.pause();
        }
      }, []);
      const start: VideoControlBarGroup[] = [{
        key: "playback",
        items: [{
          key: "play",
          label: playing ? "Pause stream" : "Start stream",
          icon: playing ? <PauseFilled /> : <PlayFilled />,
          active: playing,
          onClick: togglePlay
        }]
      }, {
        key: "snapshot",
        items: [{
          key: "snapshot",
          label: "Take a snapshot",
          icon: <CameraRegular />
        }]
      }, {
        key: "record-cluster",
        segmented: true,
        items: [{
          key: "record",
          label: "Start recording",
          icon: <RecordRegular />,
          tone: "danger"
        }, {
          key: "storage",
          label: "Select storage",
          icon: <StorageRegular />
        }]
      }];
      return <div style={{
        width: "100%",
        maxWidth: 960,
        margin: "0 auto",
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "#000",
        lineHeight: 0
      }}>
          <video ref={videoRef} autoPlay loop muted playsInline preload="auto" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} style={{
          width: "100%",
          height: 380,
          objectFit: "cover",
          display: "block"
        }}>
            {SAMPLE_VIDEO_SOURCES.map(source => <source key={source} src={source} type="video/mp4" />)}
            <track kind="captions" />
          </video>

          <VideoControlBar {...args} start={start} end={buildEndGroups()} className={dockedStyles.bar} />
        </div>;
    };
    return <BelowFeedDemo />;
  }
}`,...J.parameters?.docs?.source},description:{story:`The bar docked directly beneath the feed as an attached control strip,
rather than floating over the video.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: "subtle"
  },
  parameters: {
    docs: {
      description: {
        story: "Use \`subtle\` when the bar sits on a page surface rather than over a video feed. Colors follow the active theme."
      }
    }
  }
}`,...Y.parameters?.docs?.source},description:{story:"The theme-aware `subtle` appearance for placement on a page surface.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    start: [{
      key: "playback",
      items: [{
        key: "play",
        label: "Start stream / pause stream",
        icon: <PlayFilled />
      }, {
        key: "snapshot",
        label: "Take a snapshot",
        icon: <CameraRegular />
      }]
    }],
    end: [{
      key: "view",
      items: [{
        key: "fullscreen",
        label: "Full screen",
        icon: <FullScreenMaximizeRegular />
      }]
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Only play, snapshot, and full-screen — groups and items are entirely data-driven, so the bar scales down to just what a view needs."
      }
    }
  }
}`,...X.parameters?.docs?.source},description:{story:`A trimmed configuration with only the essential playback controls.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "The \`active\` flag drives a persistent highlight and \`aria-pressed\`. Here it toggles the play/pause icon and the recording state."
      }
    }
  },
  render: args => {
    const InteractiveBar = () => {
      const [playing, setPlaying] = useState(false);
      const [recording, setRecording] = useState(false);
      const start: VideoControlBarGroup[] = [{
        key: "playback",
        items: [{
          key: "play",
          label: playing ? "Pause stream" : "Start stream",
          icon: playing ? <PauseFilled /> : <PlayFilled />,
          active: playing,
          onClick: () => setPlaying(value => !value)
        }]
      }, {
        key: "record-cluster",
        segmented: true,
        items: [{
          key: "record",
          label: recording ? "Stop recording" : "Start recording",
          icon: <RecordRegular />,
          tone: "danger",
          active: recording,
          onClick: () => setRecording(value => !value)
        }, {
          key: "storage",
          label: "Select storage",
          icon: <StorageRegular />
        }]
      }];
      return <VideoControlBar {...args} start={start} />;
    };
    return <InteractiveBar />;
  }
}`,...Z.parameters?.docs?.source},description:{story:`Interactive example wiring up toggle state for play/pause and recording.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    start: [{
      key: "view-cluster",
      segmented: true,
      items: [{
        key: "resolution",
        label: "Full resolution",
        text: "1:1"
      }, {
        key: "expand",
        label: "Expanded live view",
        icon: <RectangleLandscapeRegular />,
        active: true
      }, {
        key: "fullscreen",
        label: "Full screen",
        icon: <FullScreenMaximizeRegular />
      }]
    }],
    end: [{
      key: "resolution-menu",
      items: [{
        key: "resolution-menu",
        label: "Resolution",
        icon: <RatioOneToOneRegular />,
        hasMenu: true,
        menuItems: [{
          key: "full",
          label: "Full resolution (1:1)"
        }, {
          key: "fit",
          label: "Fit to window"
        }]
      }]
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "A \`segmented\` group clusters related controls behind one background with vertical dividers. The right-hand control shows the chevron menu variant."
      }
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Resolution and framing controls, isolated to show a segmented cluster.`,...Q.parameters?.docs?.description}}},$=[`Default`,`OverVideo`,`OverLiveFeed`,`BelowFeed`,`Subtle`,`Minimal`,`Interactive`,`SegmentedCluster`]})))()}_e();export{J as BelowFeed,G as Default,Z as Interactive,X as Minimal,q as OverLiveFeed,K as OverVideo,Q as SegmentedCluster,Y as Subtle,$ as __namedExportsOrder,W as default};