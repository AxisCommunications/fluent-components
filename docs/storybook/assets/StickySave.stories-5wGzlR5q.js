import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{H as n,U as r,n as i,t as a}from"./tokens-BFFPz-AV.js";import{n as o,t as s}from"./mergeClasses.esm-Q6SK4nh2.js";import{n as c,t as l}from"./useId-Ce4DBZ0T.js";import{t as u}from"./jsx-runtime-DeHZSEgm.js";import{i as d,n as f,r as p,t as m}from"./Dropdown-CIAZ_DOl.js";import{n as h,t as g}from"./typographyStyles-D0dOkAlD.js";import{a as _,r as v}from"./chunk-11-BkaKBFqR.js";import{n as y,t as b}from"./Field-BIUVht2p.js";import{n as x,t as S}from"./Button-iGI8Q_IW.js";import{n as C,t as w}from"./Label-BBLfk-Li.js";import{n as T,t as E}from"./Divider-BmM6DRqL.js";import{n as D,t as O}from"./Input-DI9Ri_ON.js";import{n as k,t as A}from"./Spinner-CD0L7wNI.js";import{n as j,t as M}from"./Switch-qmSd_8Q6.js";import{n as N,t as P}from"./Text-DLpDtzOL.js";import{n as F,t as I}from"./Textarea-JWYv3NkU.js";var L,R,z,B;function V(){return(V=e((()=>{x(),k(),N(),n(),s(),a(),_(),L=t(),R=u(),z=r({root:{position:`sticky`,bottom:0,zIndex:1,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:i.spacingHorizontalM,boxSizing:`border-box`,width:`100%`,minHeight:`56px`,paddingBlock:i.spacingVerticalS,paddingInline:i.spacingHorizontalL,backgroundColor:i.colorNeutralBackground1,borderTop:`${i.strokeWidthThin} solid ${i.colorNeutralStroke1}`,boxShadow:i.shadow16,transitionProperty:`transform, opacity`,transitionDuration:i.durationNormal,transitionTimingFunction:i.curveDecelerateMax,"@media (prefers-reduced-motion: reduce)":{transitionDuration:`1ms`}},hidden:{transform:`translateY(100%)`,opacity:0,pointerEvents:`none`,transitionTimingFunction:i.curveAccelerateMax},visible:{transform:`translateY(0)`,opacity:1},message:{minWidth:0,color:i.colorNeutralForeground2,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},actions:{display:`flex`,alignItems:`center`,gap:i.spacingHorizontalS,flexShrink:0}}),B=(0,L.forwardRef)(({visible:e,onSave:t,onCancel:n,saveLabel:r=`Save`,cancelLabel:i=`Cancel`,message:a=`You have unsaved changes`,saving:s=!1,saveDisabled:c=!1,ariaLabel:l=`Unsaved changes`,className:u},d)=>{let f=z();return(0,R.jsxs)(`div`,{ref:d,role:`region`,"aria-label":l,"aria-hidden":!e,inert:!e||void 0,className:o(f.root,e?f.visible:f.hidden,u),children:[a?(0,R.jsx)(P,{className:f.message,truncate:!0,wrap:!1,children:a}):(0,R.jsx)(`span`,{}),(0,R.jsxs)(`div`,{className:f.actions,children:[(0,R.jsx)(S,{appearance:`secondary`,onClick:n,disabled:s,tabIndex:e?0:-1,children:i}),(0,R.jsx)(S,{appearance:`primary`,icon:s?(0,R.jsx)(A,{size:`tiny`}):(0,R.jsx)(v,{}),onClick:t,disabled:s||c,tabIndex:e?0:-1,children:r})]})]})}),B.displayName=`StickySave`;try{B.displayName=`StickySave`,B.__docgenInfo={description:'StickySave — a persistent save/cancel bar for long forms.\n\nPins to the bottom of its scroll container (`position: sticky`) so the save\nand cancel actions stay reachable without scrolling to the end of a form\nthat is taller than the viewport. Slides into view when `visible` becomes\n`true` (drive this from the form\'s dirty state) and slides out when the\nchanges are saved or discarded.\n\n**Fluent Guidelines Applied:**\n- Token-driven styling via `makeStyles` + Fluent `tokens` exclusively\n- Accessibility: bar is a labelled `role="region"`; hidden from AT and\n  keyboard focus (`aria-hidden`, `pointer-events: none`) while not visible\n- Respects `prefers-reduced-motion`',displayName:`StickySave`,filePath:`/home/runner/work/fluent-components/fluent-components/examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,methods:[],props:{visible:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:`Controls whether the bar is shown. Drive this from the form's "dirty"
state so the bar slides into view as soon as the user makes a change.`,name:`visible`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!0,tags:{},type:{name:`boolean`}},onSave:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:`Called when the primary save action is triggered.`,name:`onSave`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!0,tags:{},type:{name:`() => void`}},onCancel:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:`Called when the cancel / discard action is triggered.`,name:`onCancel`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!0,tags:{},type:{name:`() => void`}},saveLabel:{defaultValue:{value:`Save`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:`Label for the primary save button.`,name:`saveLabel`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!1,tags:{},type:{name:`string`}},cancelLabel:{defaultValue:{value:`Cancel`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:`Label for the cancel button.`,name:`cancelLabel`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!1,tags:{},type:{name:`string`}},message:{defaultValue:{value:`You have unsaved changes`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:`Message shown on the leading edge of the bar, e.g. an unsaved-changes
notice. Pass a string or custom node; omit to hide.`,name:`message`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!1,tags:{},type:{name:`ReactNode`}},saving:{defaultValue:{value:`false`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:"When `true`, the save button shows a spinner and both actions are\ndisabled while the save request is in flight.",name:`saving`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!1,tags:{},type:{name:`boolean`}},saveDisabled:{defaultValue:{value:`false`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:`Disables the save button, e.g. while the form is invalid. The cancel
action stays available so the user can always discard changes.`,name:`saveDisabled`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!1,tags:{},type:{name:`boolean`}},ariaLabel:{defaultValue:{value:`Unsaved changes`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:`Accessible label for the bar region.`,name:`ariaLabel`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:`Optional CSS class applied to the bar.`,name:`className`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!1,tags:{},type:{name:`string`}}},tags:{example:`const [dirty, setDirty] = useState(false);
<StickySave
  visible={dirty}
  message="You have unsaved changes"
  onSave={() => saveForm().then(() => setDirty(false))}
  onCancel={() => resetForm()}
/>`}}}catch{}})))()}var H,U,W,G,K,q,J,Y,X;function Z(){return(Z=e((()=>{T(),f(),y(),D(),C(),d(),j(),N(),F(),n(),a(),g(),l(),H=t(),V(),U=u(),W={title:`UI patterns/Sticky Save`,component:B,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:'Sticky Save\n\nA persistent save/cancel bar for **long forms** — pages where the form is\ntaller than the viewport, so the save and cancel actions would otherwise sit\noff-screen until the user scrolls all the way down.\n\nThe bar pins to the bottom of its scroll container (`position: sticky`) and\nslides into view as soon as the form becomes *dirty* (the user changes a\nvalue). Saving or cancelling clears the dirty state and the bar slides away.\n\n**Fluent Guidelines Applied:**\n- Token-driven styling via `makeStyles` + Fluent `tokens` exclusively\n- Accessibility: labelled `role="region"`; hidden from assistive tech and\n  keyboard focus while not visible (`aria-hidden` + `inert`)\n- Respects `prefers-reduced-motion`\n- Composition: drive `visible` from your form\'s dirty state; wire `onSave` /\n  `onCancel` to your own persistence and reset logic'}}},argTypes:{visible:{control:`boolean`,description:`Whether the bar is shown; drive from the form dirty state`},message:{control:`text`,description:`Leading message, e.g. an unsaved-changes notice`},saveLabel:{control:`text`,description:`Label for the primary save button`},cancelLabel:{control:`text`,description:`Label for the cancel button`},saving:{control:`boolean`,description:`Show a spinner and disable actions while saving`},saveDisabled:{control:`boolean`,description:`Disable the save button, e.g. while the form is invalid`},ariaLabel:{control:`text`,description:`Accessible label for the bar region`},onSave:{action:`save`},onCancel:{action:`cancel`}}},G=r({page:{position:`relative`,display:`flex`,flexDirection:`column`,height:`100vh`,overflowY:`auto`,backgroundColor:i.colorNeutralBackground2},content:{display:`flex`,flexDirection:`column`,gap:i.spacingVerticalXL,padding:i.spacingVerticalXXL,maxWidth:`640px`,width:`100%`,marginInline:`auto`,boxSizing:`border-box`},title:{...h.title3,margin:0},sectionTitle:{...h.subtitle2,margin:0},section:{display:`flex`,flexDirection:`column`,gap:i.spacingVerticalM},row:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:i.spacingHorizontalM},switchRow:{display:`flex`,alignItems:`center`,justifyContent:`space-between`}}),K={name:`Front entrance camera`,location:`Building A — Lobby`,hostname:`axis-b8a44f1c2d3e`,timezone:`Europe/Stockholm`,description:`Fixed dome monitoring the main entrance and reception desk.`,ntpEnabled:!0,telemetry:!1,autoUpdate:!0,administrator:``,email:``,notes:``},q=[`Europe/Stockholm`,`Europe/London`,`America/New_York`,`America/Los_Angeles`,`Asia/Tokyo`],J={render:e=>{let t=G(),[n,r]=(0,H.useState)(K),[i,a]=(0,H.useState)(K),[o,s]=(0,H.useState)(!1),l=c(`ntp-`),u=c(`telemetry-`),d=c(`auto-update-`),f=(0,H.useMemo)(()=>JSON.stringify(n)!==JSON.stringify(i),[n,i]),h=(0,H.useCallback)((e,t)=>r(n=>({...n,[e]:t})),[]),g=(0,H.useCallback)(()=>{s(!0),window.setTimeout(()=>{a(n),s(!1),e.onSave?.()},900)},[n,e]),_=(0,H.useCallback)(()=>{r(i),e.onCancel?.()},[i,e]);return(0,U.jsxs)(`div`,{className:t.page,children:[(0,U.jsxs)(`div`,{className:t.content,children:[(0,U.jsx)(`h1`,{className:t.title,children:`Device settings`}),(0,U.jsxs)(`section`,{className:t.section,children:[(0,U.jsx)(`h2`,{className:t.sectionTitle,children:`General`}),(0,U.jsx)(b,{label:`Display name`,required:!0,children:(0,U.jsx)(O,{value:n.name,onChange:(e,t)=>h(`name`,t.value)})}),(0,U.jsx)(b,{label:`Location`,children:(0,U.jsx)(O,{value:n.location,onChange:(e,t)=>h(`location`,t.value)})}),(0,U.jsxs)(`div`,{className:t.row,children:[(0,U.jsx)(b,{label:`Hostname`,children:(0,U.jsx)(O,{value:n.hostname,onChange:(e,t)=>h(`hostname`,t.value)})}),(0,U.jsx)(b,{label:`Time zone`,children:(0,U.jsx)(m,{value:n.timezone,selectedOptions:[n.timezone],onOptionSelect:(e,t)=>h(`timezone`,t.optionValue??n.timezone),children:q.map(e=>(0,U.jsx)(p,{children:e},e))})})]}),(0,U.jsx)(b,{label:`Description`,hint:`Shown in the device inventory`,children:(0,U.jsx)(I,{resize:`vertical`,value:n.description,onChange:(e,t)=>h(`description`,t.value)})})]}),(0,U.jsx)(E,{}),(0,U.jsxs)(`section`,{className:t.section,children:[(0,U.jsx)(`h2`,{className:t.sectionTitle,children:`System`}),(0,U.jsxs)(`div`,{className:t.switchRow,children:[(0,U.jsx)(w,{htmlFor:l,children:`Synchronize time with NTP server`}),(0,U.jsx)(M,{id:l,checked:n.ntpEnabled,onChange:(e,t)=>h(`ntpEnabled`,t.checked)})]}),(0,U.jsxs)(`div`,{className:t.switchRow,children:[(0,U.jsx)(w,{htmlFor:u,children:`Share anonymous usage telemetry`}),(0,U.jsx)(M,{id:u,checked:n.telemetry,onChange:(e,t)=>h(`telemetry`,t.checked)})]}),(0,U.jsxs)(`div`,{className:t.switchRow,children:[(0,U.jsx)(w,{htmlFor:d,children:`Install firmware updates automatically`}),(0,U.jsx)(M,{id:d,checked:n.autoUpdate,onChange:(e,t)=>h(`autoUpdate`,t.checked)})]})]}),(0,U.jsx)(E,{}),(0,U.jsxs)(`section`,{className:t.section,children:[(0,U.jsx)(`h2`,{className:t.sectionTitle,children:`Contact`}),(0,U.jsxs)(`div`,{className:t.row,children:[(0,U.jsx)(b,{label:`Administrator`,children:(0,U.jsx)(O,{placeholder:`Name`,value:n.administrator,onChange:(e,t)=>h(`administrator`,t.value)})}),(0,U.jsx)(b,{label:`Email`,children:(0,U.jsx)(O,{type:`email`,placeholder:`name@example.com`,value:n.email,onChange:(e,t)=>h(`email`,t.value)})})]}),(0,U.jsx)(b,{label:`Notes`,hint:`Scroll down — the save bar stays pinned`,children:(0,U.jsx)(I,{resize:`vertical`,placeholder:`Internal notes`,value:n.notes,onChange:(e,t)=>h(`notes`,t.value)})})]})]}),(0,U.jsx)(B,{...e,visible:f||e.visible===!0,saving:o,onSave:g,onCancel:_})]})}},Y={args:{visible:!0,message:`You have unsaved changes`,saveLabel:`Save`,cancelLabel:`Cancel`,saving:!1,saveDisabled:!1},render:e=>{let t=G();return(0,U.jsxs)(`div`,{className:t.page,children:[(0,U.jsx)(`div`,{className:t.content,children:(0,U.jsx)(P,{children:`Toggle the controls to preview the bar's states.`})}),(0,U.jsx)(B,{...e})]})}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => {
    const styles = useDemoStyles();
    const [form, setForm] = useState<DeviceForm>(INITIAL_FORM);
    const [saved, setSaved] = useState<DeviceForm>(INITIAL_FORM);
    const [saving, setSaving] = useState(false);
    const ntpId = useId("ntp-");
    const telemetryId = useId("telemetry-");
    const autoUpdateId = useId("auto-update-");
    const dirty = useMemo(() => JSON.stringify(form) !== JSON.stringify(saved), [form, saved]);
    const update = useCallback(<K extends keyof DeviceForm,>(key: K, value: DeviceForm[K]) => setForm(prev => ({
      ...prev,
      [key]: value
    })), []);
    const handleSave = useCallback(() => {
      setSaving(true);
      // Simulate a persistence request.
      window.setTimeout(() => {
        setSaved(form);
        setSaving(false);
        args.onSave?.();
      }, 900);
    }, [form, args]);
    const handleCancel = useCallback(() => {
      setForm(saved);
      args.onCancel?.();
    }, [saved, args]);
    return <div className={styles.page}>
        <div className={styles.content}>
          <h1 className={styles.title}>Device settings</h1>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>General</h2>
            <Field label="Display name" required>
              <Input value={form.name} onChange={(_, d) => update("name", d.value)} />
            </Field>
            <Field label="Location">
              <Input value={form.location} onChange={(_, d) => update("location", d.value)} />
            </Field>
            <div className={styles.row}>
              <Field label="Hostname">
                <Input value={form.hostname} onChange={(_, d) => update("hostname", d.value)} />
              </Field>
              <Field label="Time zone">
                <Dropdown value={form.timezone} selectedOptions={[form.timezone]} onOptionSelect={(_, d) => update("timezone", d.optionValue ?? form.timezone)}>
                  {TIMEZONES.map(tz => <Option key={tz}>{tz}</Option>)}
                </Dropdown>
              </Field>
            </div>
            <Field label="Description" hint="Shown in the device inventory">
              <Textarea resize="vertical" value={form.description} onChange={(_, d) => update("description", d.value)} />
            </Field>
          </section>

          <Divider />

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>System</h2>
            <div className={styles.switchRow}>
              <Label htmlFor={ntpId}>Synchronize time with NTP server</Label>
              <Switch id={ntpId} checked={form.ntpEnabled} onChange={(_, d) => update("ntpEnabled", d.checked)} />
            </div>
            <div className={styles.switchRow}>
              <Label htmlFor={telemetryId}>
                Share anonymous usage telemetry
              </Label>
              <Switch id={telemetryId} checked={form.telemetry} onChange={(_, d) => update("telemetry", d.checked)} />
            </div>
            <div className={styles.switchRow}>
              <Label htmlFor={autoUpdateId}>
                Install firmware updates automatically
              </Label>
              <Switch id={autoUpdateId} checked={form.autoUpdate} onChange={(_, d) => update("autoUpdate", d.checked)} />
            </div>
          </section>

          <Divider />

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <div className={styles.row}>
              <Field label="Administrator">
                <Input placeholder="Name" value={form.administrator} onChange={(_, d) => update("administrator", d.value)} />
              </Field>
              <Field label="Email">
                <Input type="email" placeholder="name@example.com" value={form.email} onChange={(_, d) => update("email", d.value)} />
              </Field>
            </div>
            <Field label="Notes" hint="Scroll down — the save bar stays pinned">
              <Textarea resize="vertical" placeholder="Internal notes" value={form.notes} onChange={(_, d) => update("notes", d.value)} />
            </Field>
          </section>
        </div>

        <StickySave {...args} visible={dirty || args.visible === true} saving={saving} onSave={handleSave} onCancel={handleCancel} />
      </div>;
  }
}`,...J.parameters?.docs?.source},description:{story:`A long device-settings form that overflows its container. The Sticky Save
bar appears the moment any field changes and clears on save/cancel. This is
the primary reference for real usage.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    message: "You have unsaved changes",
    saveLabel: "Save",
    cancelLabel: "Cancel",
    saving: false,
    saveDisabled: false
  },
  render: args => {
    const styles = useDemoStyles();
    return <div className={styles.page}>
        <div className={styles.content}>
          <Text>Toggle the controls to preview the bar's states.</Text>
        </div>
        <StickySave {...args} />
      </div>;
  }
}`,...Y.parameters?.docs?.source},description:{story:"The bar in isolation, forced visible via the `visible` control. Use the\ncontrols to explore labels, the saving spinner, and the disabled state.",...Y.parameters?.docs?.description}}},X=[`Default`,`Interactive`]})))()}Z();export{J as Default,Y as Interactive,X as __namedExportsOrder,W as default};