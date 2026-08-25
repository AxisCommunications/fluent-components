import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{G as n,K as r,n as i,t as a}from"./tokens-DaV9uDtE.js";import{n as o,t as s}from"./mergeClasses.esm-JwaKsbFG.js";import{a as c,i as l,l as u,n as d,o as f,r as p,t as m,u as h}from"./MenuTrigger-BD1_OBQG.js";import{t as g}from"./jsx-runtime-DeHZSEgm.js";import{n as ee,t as _}from"./Tooltip-MNNtosYf.js";import{a as te,n as v}from"./chunk-0-B15AoeJD.js";import{i as ne,n as y}from"./chunk-4-JV1Q0e_s.js";import{i as re,n as b,r as x}from"./chunk-8-KgQkhWOm.js";import{a as ie,i as S}from"./chunk-11-t96VUkPJ.js";import{a as C,i as w,o as ae,r as T}from"./chunk-13-D7WhraBH.js";import{a as E,i as D,o as oe}from"./chunk-18-CUFcw7yW.js";import{m as se,p as O}from"./chunk-21-mFwSE9or.js";import{a as ce,r as le}from"./chunk-22-CkrdJRvF.js";import{f as ue,o as de}from"./chunk-24-DANxmirD.js";import{n as k,t as fe}from"./MenuItem-tN9KKgGH.js";import{n as pe,t as me}from"./Button-DEJXgAAW.js";function A({item:e,appearance:t}){let n=P(),r=t===`media`,i=e.hasMenu||(e.menuItems?.length??0)>0,a=o(r?n.mediaButton:n.subtleButton,e.active&&(r?n.mediaButtonActive:n.subtleButtonActive),e.tone===`danger`&&n.danger),s=(0,N.jsxs)(me,{appearance:`transparent`,className:a,icon:e.text?void 0:e.icon??void 0,disabled:e.disabled,"aria-label":e.label,"aria-pressed":e.active?!0:void 0,"aria-haspopup":i?`menu`:void 0,onClick:e.menuItems?.length?void 0:e.onClick,children:[e.text?(0,N.jsx)(`span`,{className:n.buttonText,children:e.text}):null,i?(0,N.jsx)(de,{fontSize:16}):null]});return e.menuItems?.length?(0,N.jsxs)(u,{children:[(0,N.jsx)(m,{disableButtonEnhancement:!0,children:(0,N.jsx)(_,{content:e.label,relationship:`label`,withArrow:!0,children:s})}),(0,N.jsx)(p,{children:(0,N.jsx)(c,{children:e.menuItems.map(e=>(0,N.jsx)(fe,{icon:e.icon??void 0,disabled:e.disabled,onClick:e.onClick,children:e.label},e.key))})})]}):(0,N.jsx)(_,{content:e.label,relationship:`label`,withArrow:!0,children:s})}function j({group:e,appearance:t}){let n=P(),r=t===`media`;return e.segmented?(0,N.jsx)(`div`,{className:o(n.segment,r?n.segmentMedia:n.segmentSubtle),children:e.items.map((e,i)=>(0,N.jsxs)(`div`,{className:n.group,children:[i>0?(0,N.jsx)(`span`,{"aria-hidden":!0,className:o(n.divider,r?n.dividerMedia:n.dividerSubtle)}):null,(0,N.jsx)(A,{item:e,appearance:t})]},e.key))}):(0,N.jsx)(`div`,{className:n.group,children:e.items.map(e=>(0,N.jsx)(A,{item:e,appearance:t},e.key))})}var M,N,P,F;function I(){return(I=e((()=>{pe(),h(),k(),f(),l(),d(),ee(),n(),s(),a(),ue(),M=t(),N=g(),P=r({root:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:i.spacingHorizontalM,width:`100%`,minWidth:0,boxSizing:`border-box`,paddingLeft:i.spacingHorizontalL,paddingRight:i.spacingHorizontalL,paddingTop:i.spacingVerticalS,paddingBottom:i.spacingVerticalS},rootMedia:{backgroundColor:`#292929`,color:`#ffffff`,borderRadius:i.borderRadiusMedium},rootSubtle:{backgroundColor:i.colorNeutralBackground1,color:i.colorNeutralForeground1,border:`1px solid ${i.colorNeutralStroke2}`,borderRadius:i.borderRadiusMedium},side:{display:`flex`,alignItems:`center`,gap:i.spacingHorizontalS,minWidth:0},sideEnd:{justifyContent:`flex-end`},group:{display:`flex`,alignItems:`center`,gap:i.spacingHorizontalXXS},segment:{display:`flex`,alignItems:`center`,gap:0,borderRadius:i.borderRadiusMedium,overflow:`hidden`},segmentMedia:{backgroundColor:`rgba(255, 255, 255, 0.08)`},segmentSubtle:{backgroundColor:i.colorNeutralBackground3},divider:{width:`1px`,height:`20px`,flexShrink:0},dividerMedia:{backgroundColor:`rgba(255, 255, 255, 0.2)`},dividerSubtle:{backgroundColor:i.colorNeutralStroke2},mediaButton:{color:`#ffffff`,minWidth:`32px`,"&:hover":{color:`#ffffff`,backgroundColor:`rgba(255, 255, 255, 0.1)`},"&:hover:active":{color:`#ffffff`,backgroundColor:`rgba(255, 255, 255, 0.16)`}},mediaButtonActive:{backgroundColor:`rgba(255, 255, 255, 0.16)`},subtleButton:{minWidth:`32px`},subtleButtonActive:{backgroundColor:i.colorNeutralBackground1Selected},danger:{color:i.colorPaletteRedForeground1,"&:hover":{color:i.colorPaletteRedForeground1}},buttonText:{fontSize:i.fontSizeBase300,fontWeight:i.fontWeightSemibold,lineHeight:i.lineHeightBase300}}),F=(0,M.forwardRef)(({start:e=[],end:t=[],appearance:n=`media`,ariaLabel:r=`Video controls`,className:i,...a},s)=>{let c=P(),l=n===`media`;return(0,N.jsxs)(`div`,{ref:s,role:`toolbar`,"aria-label":r,className:o(c.root,l?c.rootMedia:c.rootSubtle,i),...a,children:[(0,N.jsx)(`div`,{className:c.side,children:e.map(e=>(0,N.jsx)(j,{group:e,appearance:n},e.key))}),(0,N.jsx)(`div`,{className:o(c.side,c.sideEnd),children:t.map(e=>(0,N.jsx)(j,{group:e,appearance:n},e.key))})]})}),F.displayName=`VideoControlBar`;try{F.displayName=`VideoControlBar`,F.__docgenInfo={description:"VideoControlBar — a toolbar of grouped icon controls for a live video feed.\n\nControls are arranged into leading (`start`) and trailing (`end`) groups.\nGroups may be `segmented` to cluster related controls behind a shared\nbackground with vertical dividers (e.g. record + storage, or the live-view\nresolution / framing cluster). Every control exposes a tooltip and an\n`aria-label`, and the root renders as a `toolbar` landmark.",displayName:`VideoControlBar`,filePath:`/home/runner/work/fluent-components/fluent-components/examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,methods:[],props:{start:{defaultValue:{value:`[]`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`}],description:`Groups aligned to the leading (left) edge.`,name:`start`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`},required:!1,tags:{},type:{name:`VideoControlBarGroup[]`}},end:{defaultValue:{value:`[]`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`}],description:`Groups aligned to the trailing (right) edge.`,name:`end`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`},required:!1,tags:{},type:{name:`VideoControlBarGroup[]`}},appearance:{defaultValue:{value:`media`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`}],description:"Visual context.\n- `media` (default): dark scrim intended to sit over a live video feed.\n- `subtle`: theme-aware bar for placement on a page surface.",name:`appearance`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`},required:!1,tags:{},type:{name:`enum`,raw:`VideoControlBarAppearance`,value:[{value:`"subtle"`},{value:`"media"`}]}},ariaLabel:{defaultValue:{value:`Video controls`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`}],description:`Accessible name for the toolbar landmark.`,name:`ariaLabel`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`}],description:`Optional CSS class applied to the root element.`,name:`className`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/VideoControlBar.tsx`,name:`VideoControlBarProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function he(){return[{key:`playback`,items:[{key:`play`,label:`Start stream / pause stream`,icon:(0,z.jsx)(C,{})}]},{key:`snapshot`,items:[{key:`snapshot`,label:`Take a snapshot`,icon:(0,z.jsx)(v,{})}]},{key:`record-cluster`,segmented:!0,items:[{key:`record`,label:`Start recording`,icon:(0,z.jsx)(D,{}),tone:`danger`},{key:`storage`,label:`Select storage`,icon:(0,z.jsx)(x,{})}]},{key:`ir`,items:[{key:`ir`,label:`IR light`,icon:(0,z.jsx)(S,{})}]},{key:`osd`,items:[{key:`osd`,label:`Onscreen controls`,icon:(0,z.jsx)(b,{})}]}]}function L(){return[{key:`settings`,items:[{key:`settings`,label:`Live view settings`,icon:(0,z.jsx)(y,{}),hasMenu:!0,menuItems:[{key:`quality`,label:`Stream quality`},{key:`overlay`,label:`Overlay settings`},{key:`rotation`,label:`Image rotation`}]}]},{key:`view-cluster`,segmented:!0,items:[{key:`resolution`,label:`Full resolution`,text:`1:1`},{key:`expand`,label:`Expanded live view`,icon:(0,z.jsx)(E,{})},{key:`fullscreen`,label:`Full screen`,icon:(0,z.jsx)(T,{})}]}]}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{n(),te(),ae(),re(),se(),ce(),oe(),ne(),ie(),R=t(),I(),z=g(),B=r({bar:{borderRadius:0}}),V=[`https://media.w3.org/2010/05/sintel/trailer.mp4`,`https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`],H=`https://www.youtube-nocookie.com/embed/v7wWIO7brSM?autoplay=1&mute=1&controls=0&playsinline=1&rel=0&enablejsapi=1`,U={title:`UI patterns/Video Control Bar`,component:F,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:'Video Control Bar\n\nA toolbar of grouped icon controls for a live video feed. Controls are split\ninto leading (`start`) and trailing (`end`) groups; related controls can be\n`segmented` to sit behind a shared background separated by vertical dividers.\nEvery control exposes a tooltip and an `aria-label`, and the root renders as\na `toolbar` landmark.\n\nThe `media` appearance is a dark scrim intended to overlay a video stream,\nwhile `subtle` is a theme-aware bar for placement on a page surface.\n\n<p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=355-420"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>'}}},argTypes:{appearance:{control:`inline-radio`,options:[`media`,`subtle`],description:"`media` renders a dark scrim for overlaying a video feed; `subtle` renders a theme-aware bar for page surfaces.",table:{type:{summary:`"media" | "subtle"`}}},ariaLabel:{control:`text`,description:`Accessible name for the toolbar landmark.`,table:{type:{summary:`string`}}},start:{control:!1,description:`Groups aligned to the leading (left) edge.`,table:{type:{summary:`VideoControlBarGroup[]`}}},end:{control:!1,description:`Groups aligned to the trailing (right) edge.`,table:{type:{summary:`VideoControlBarGroup[]`}}},className:{control:!1,table:{type:{summary:`string | undefined`}}}},args:{appearance:`media`,ariaLabel:`Video controls`,start:he(),end:L()}},W={},G={parameters:{layout:`fullscreen`,fitContent:!0,docs:{description:{story:"Positioned along the bottom edge of a real video stream, the `media` appearance floats above the feed. The controls are wired to the video element: play/pause, IR (night) mode, recording state, and full screen all work."}}},render:e=>(0,z.jsx)(()=>{let t=(0,R.useRef)(null),n=(0,R.useRef)(null),[r,i]=(0,R.useState)(!1),[a,o]=(0,R.useState)(!1),[s,c]=(0,R.useState)(!1),[l,u]=(0,R.useState)(!1),d=(0,R.useCallback)(()=>{let e=n.current;e&&(e.paused?(e.play(),i(!0)):(e.pause(),i(!1)))},[]),f=(0,R.useCallback)(()=>{let e=t.current;e&&(document.fullscreenElement?(document.exitFullscreen(),u(!1)):(e.requestFullscreen(),u(!0)))},[]),p=[{key:`playback`,items:[{key:`play`,label:r?`Pause stream`:`Start stream`,icon:r?(0,z.jsx)(O,{}):(0,z.jsx)(C,{}),active:r,onClick:d}]},{key:`snapshot`,items:[{key:`snapshot`,label:`Take a snapshot`,icon:(0,z.jsx)(v,{})}]},{key:`record-cluster`,segmented:!0,items:[{key:`record`,label:a?`Stop recording`:`Start recording`,icon:(0,z.jsx)(D,{}),tone:`danger`,active:a,onClick:()=>o(e=>!e)},{key:`storage`,label:`Select storage`,icon:(0,z.jsx)(x,{})}]},{key:`ir`,items:[{key:`ir`,label:`IR light`,icon:(0,z.jsx)(S,{}),active:s,onClick:()=>c(e=>!e)}]},{key:`osd`,items:[{key:`osd`,label:`Onscreen controls`,icon:(0,z.jsx)(b,{})}]}],m=[{key:`settings`,items:[{key:`settings`,label:`Live view settings`,icon:(0,z.jsx)(y,{}),hasMenu:!0,menuItems:[{key:`quality`,label:`Stream quality`},{key:`overlay`,label:`Overlay settings`},{key:`rotation`,label:`Image rotation`}]}]},{key:`view-cluster`,segmented:!0,items:[{key:`resolution`,label:`Full resolution`,text:`1:1`},{key:`expand`,label:`Expanded live view`,icon:(0,z.jsx)(E,{})},{key:`fullscreen`,label:l?`Exit full screen`:`Full screen`,icon:l?(0,z.jsx)(w,{}):(0,z.jsx)(T,{}),active:l,onClick:f}]}];return(0,z.jsxs)(`div`,{ref:t,style:{position:`relative`,width:`100%`,height:480,overflow:`hidden`,backgroundColor:`#000`,display:`block`,lineHeight:0},children:[(0,z.jsxs)(`video`,{ref:n,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:`auto`,onPlay:()=>i(!0),onPause:()=>i(!1),style:{width:`100%`,height:`100%`,objectFit:`cover`,display:`block`,filter:s?`grayscale(1) brightness(1.3)`:void 0,transition:`filter 200ms ease`},children:[V.map(e=>(0,z.jsx)(`source`,{src:e,type:`video/mp4`},e)),(0,z.jsx)(`track`,{kind:`captions`})]}),a?(0,z.jsxs)(`div`,{style:{position:`absolute`,top:16,left:16,display:`flex`,alignItems:`center`,gap:6,padding:`4px 10px`,borderRadius:4,backgroundColor:`rgba(0, 0, 0, 0.6)`,color:`#fff`,fontSize:12,fontWeight:600},children:[(0,z.jsx)(`span`,{style:{width:8,height:8,borderRadius:`50%`,backgroundColor:`#e00`}}),`REC`]}):null,(0,z.jsx)(`div`,{style:{position:`absolute`,left:12,right:12,bottom:12},children:(0,z.jsx)(F,{...e,start:p,end:m})})]})},{})},K={parameters:{layout:`fullscreen`,fitContent:!0,docs:{description:{story:`Overlaid on a real, officially-published public webcam — Kristianstad Stora Torg (Skåne, Sweden), a curated 24/7 YouTube live stream. Playback (play/pause), IR (night) mode, recording state, and full screen are wired to the feed via the YouTube IFrame Player API, so the controls drive the embed even though it is cross-origin.`}}},render:e=>(0,z.jsx)(()=>{let t=(0,R.useRef)(null),n=(0,R.useRef)(null),[r,i]=(0,R.useState)(!0),[a,o]=(0,R.useState)(!1),[s,c]=(0,R.useState)(!1),[l,u]=(0,R.useState)(!1),d=(0,R.useCallback)(e=>{n.current?.contentWindow?.postMessage(JSON.stringify({event:`command`,func:e,args:[]}),`*`)},[]),f=(0,R.useCallback)(()=>{i(e=>{let t=!e;return d(t?`playVideo`:`pauseVideo`),t})},[d]),p=(0,R.useCallback)(()=>{let e=t.current;e&&(document.fullscreenElement?(document.exitFullscreen(),u(!1)):(e.requestFullscreen(),u(!0)))},[]),m=[{key:`playback`,items:[{key:`play`,label:r?`Pause stream`:`Start stream`,icon:r?(0,z.jsx)(O,{}):(0,z.jsx)(C,{}),active:r,onClick:f}]},{key:`snapshot`,items:[{key:`snapshot`,label:`Take a snapshot`,icon:(0,z.jsx)(v,{})}]},{key:`record-cluster`,segmented:!0,items:[{key:`record`,label:a?`Stop recording`:`Start recording`,icon:(0,z.jsx)(D,{}),tone:`danger`,active:a,onClick:()=>o(e=>!e)},{key:`storage`,label:`Select storage`,icon:(0,z.jsx)(x,{})}]},{key:`ir`,items:[{key:`ir`,label:`IR light`,icon:(0,z.jsx)(S,{}),active:s,onClick:()=>c(e=>!e)}]},{key:`osd`,items:[{key:`osd`,label:`Onscreen controls`,icon:(0,z.jsx)(b,{})}]}],h=[{key:`settings`,items:[{key:`settings`,label:`Live view settings`,icon:(0,z.jsx)(y,{}),hasMenu:!0,menuItems:[{key:`quality`,label:`Stream quality`},{key:`overlay`,label:`Overlay settings`},{key:`rotation`,label:`Image rotation`}]}]},{key:`view-cluster`,segmented:!0,items:[{key:`resolution`,label:`Full resolution`,text:`1:1`},{key:`expand`,label:`Expanded live view`,icon:(0,z.jsx)(E,{})},{key:`fullscreen`,label:l?`Exit full screen`:`Full screen`,icon:l?(0,z.jsx)(w,{}):(0,z.jsx)(T,{}),active:l,onClick:p}]}];return(0,z.jsxs)(`div`,{ref:t,style:{position:`relative`,width:`100%`,height:480,overflow:`hidden`,backgroundColor:`#000`,display:`block`,lineHeight:0},children:[(0,z.jsx)(`iframe`,{ref:n,title:`Kristianstad Stora Torg live webcam`,src:H,allow:`autoplay; encrypted-media; picture-in-picture`,allowFullScreen:!0,style:{position:`absolute`,inset:0,width:`100%`,height:`100%`,border:0,transform:`scale(1.35)`,transformOrigin:`center`,filter:s?`grayscale(1) brightness(1.3)`:void 0,transition:`filter 200ms ease`}}),(0,z.jsxs)(`div`,{style:{position:`absolute`,top:16,left:16,display:`flex`,alignItems:`center`,gap:6,padding:`4px 10px`,borderRadius:4,backgroundColor:`rgba(0, 0, 0, 0.6)`,color:`#fff`,fontSize:12,fontWeight:600,letterSpacing:`0.04em`},children:[(0,z.jsx)(`span`,{style:{width:8,height:8,borderRadius:`50%`,backgroundColor:`#e00`}}),a?`REC · KRISTIANSTAD`:`LIVE · KRISTIANSTAD`]}),(0,z.jsx)(`div`,{style:{position:`absolute`,left:12,right:12,bottom:12},children:(0,z.jsx)(F,{...e,start:m,end:h})})]})},{})},q={parameters:{docs:{description:{story:"Docked flush under the video as a single player unit — the feed and the `media` bar share one rounded frame with no gap between them. The bar's top corners are squared via the `className` prop (the component merges consumer classes last, so no component change is needed). Play/pause is wired to the video element."}}},render:e=>(0,z.jsx)(()=>{let t=B(),n=(0,R.useRef)(null),[r,i]=(0,R.useState)(!1),a=(0,R.useCallback)(()=>{let e=n.current;e&&(e.paused?e.play():e.pause())},[]),o=[{key:`playback`,items:[{key:`play`,label:r?`Pause stream`:`Start stream`,icon:r?(0,z.jsx)(O,{}):(0,z.jsx)(C,{}),active:r,onClick:a}]},{key:`snapshot`,items:[{key:`snapshot`,label:`Take a snapshot`,icon:(0,z.jsx)(v,{})}]},{key:`record-cluster`,segmented:!0,items:[{key:`record`,label:`Start recording`,icon:(0,z.jsx)(D,{}),tone:`danger`},{key:`storage`,label:`Select storage`,icon:(0,z.jsx)(x,{})}]}];return(0,z.jsxs)(`div`,{style:{width:`100%`,maxWidth:960,margin:`0 auto`,borderRadius:8,overflow:`hidden`,backgroundColor:`#000`,lineHeight:0},children:[(0,z.jsxs)(`video`,{ref:n,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:`auto`,onPlay:()=>i(!0),onPause:()=>i(!1),style:{width:`100%`,height:380,objectFit:`cover`,display:`block`},children:[V.map(e=>(0,z.jsx)(`source`,{src:e,type:`video/mp4`},e)),(0,z.jsx)(`track`,{kind:`captions`})]}),(0,z.jsx)(F,{...e,start:o,end:L(),className:t.bar})]})},{})},J={args:{appearance:`subtle`},parameters:{docs:{description:{story:"Use `subtle` when the bar sits on a page surface rather than over a video feed. Colors follow the active theme."}}}},Y={args:{start:[{key:`playback`,items:[{key:`play`,label:`Start stream / pause stream`,icon:(0,z.jsx)(C,{})},{key:`snapshot`,label:`Take a snapshot`,icon:(0,z.jsx)(v,{})}]}],end:[{key:`view`,items:[{key:`fullscreen`,label:`Full screen`,icon:(0,z.jsx)(T,{})}]}]},parameters:{docs:{description:{story:`Only play, snapshot, and full-screen — groups and items are entirely data-driven, so the bar scales down to just what a view needs.`}}}},X={parameters:{docs:{description:{story:"The `active` flag drives a persistent highlight and `aria-pressed`. Here it toggles the play/pause icon and the recording state."}}},render:e=>(0,z.jsx)(()=>{let[t,n]=(0,R.useState)(!1),[r,i]=(0,R.useState)(!1),a=[{key:`playback`,items:[{key:`play`,label:t?`Pause stream`:`Start stream`,icon:t?(0,z.jsx)(O,{}):(0,z.jsx)(C,{}),active:t,onClick:()=>n(e=>!e)}]},{key:`record-cluster`,segmented:!0,items:[{key:`record`,label:r?`Stop recording`:`Start recording`,icon:(0,z.jsx)(D,{}),tone:`danger`,active:r,onClick:()=>i(e=>!e)},{key:`storage`,label:`Select storage`,icon:(0,z.jsx)(x,{})}]}];return(0,z.jsx)(F,{...e,start:a})},{})},Z={args:{start:[{key:`view-cluster`,segmented:!0,items:[{key:`resolution`,label:`Full resolution`,text:`1:1`},{key:`expand`,label:`Expanded live view`,icon:(0,z.jsx)(E,{}),active:!0},{key:`fullscreen`,label:`Full screen`,icon:(0,z.jsx)(T,{})}]}],end:[{key:`resolution-menu`,items:[{key:`resolution-menu`,label:`Resolution`,icon:(0,z.jsx)(le,{}),hasMenu:!0,menuItems:[{key:`full`,label:`Full resolution (1:1)`},{key:`fit`,label:`Fit to window`}]}]}]},parameters:{docs:{description:{story:"A `segmented` group clusters related controls behind one background with vertical dividers. The right-hand control shows the chevron menu variant."}}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{}`,...W.parameters?.docs?.source},description:{story:`The full control bar as a dark scrim, matching the Figma anatomy.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`The bar overlaid on the bottom of a live-view frame — its intended
production context.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`The bar overlaid on a real, officially-published public webcam feed.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`The bar docked directly beneath the feed as an attached control strip,
rather than floating over the video.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:"The theme-aware `subtle` appearance for placement on a page surface.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`A trimmed configuration with only the essential playback controls.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Interactive example wiring up toggle state for play/pause and recording.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolution and framing controls, isolated to show a segmented cluster.`,...Z.parameters?.docs?.description}}},Q=[`Default`,`OverVideo`,`OverLiveFeed`,`BelowFeed`,`Subtle`,`Minimal`,`Interactive`,`SegmentedCluster`]})))()}$();export{q as BelowFeed,W as Default,X as Interactive,Y as Minimal,K as OverLiveFeed,G as OverVideo,Z as SegmentedCluster,J as Subtle,Q as __namedExportsOrder,U as default};