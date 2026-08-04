import{a as e,n as t}from"./chunk-BneVvdWh.js";import{En as n,Ht as r,It as i,Lt as a,Nr as o,Rt as s,Si as c,Vt as l,Wt as u,ci as d,ii as f,mt as p,qi as m,ri as h,s as g,st as _,ui as v,vt as y,xi as b,yt as x,zt as S}from"./iframe-CzIYuUoR.js";var C,w,T,E,D=t((()=>{g(),n(),C=e(m(),1),w=e(b(),1),T=d({root:{position:`sticky`,bottom:0,zIndex:1,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:f.spacingHorizontalM,boxSizing:`border-box`,width:`100%`,minHeight:`56px`,paddingBlock:f.spacingVerticalS,paddingInline:f.spacingHorizontalL,backgroundColor:f.colorNeutralBackground1,borderTop:`${f.strokeWidthThin} solid ${f.colorNeutralStroke1}`,boxShadow:f.shadow16,transitionProperty:`transform, opacity`,transitionDuration:f.durationNormal,transitionTimingFunction:f.curveDecelerateMax,"@media (prefers-reduced-motion: reduce)":{transitionDuration:`1ms`}},hidden:{transform:`translateY(100%)`,opacity:0,pointerEvents:`none`,transitionTimingFunction:f.curveAccelerateMax},visible:{transform:`translateY(0)`,opacity:1},message:{minWidth:0,color:f.colorNeutralForeground2,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},actions:{display:`flex`,alignItems:`center`,gap:f.spacingHorizontalS,flexShrink:0}}),E=(0,C.forwardRef)(({visible:e,onSave:t,onCancel:n,saveLabel:r=`Save`,cancelLabel:i=`Cancel`,message:a=`You have unsaved changes`,saving:s=!1,saveDisabled:c=!1,ariaLabel:l=`Unsaved changes`,className:d},f)=>{let m=T();return(0,w.jsxs)(`div`,{ref:f,role:`region`,"aria-label":l,"aria-hidden":!e,inert:e?void 0:!0,className:v(m.root,e?m.visible:m.hidden,d),children:[a?(0,w.jsx)(p,{className:m.message,truncate:!0,wrap:!1,children:a}):(0,w.jsx)(`span`,{}),(0,w.jsxs)(`div`,{className:m.actions,children:[(0,w.jsx)(u,{appearance:`secondary`,onClick:n,disabled:s,tabIndex:e?0:-1,children:i}),(0,w.jsx)(u,{appearance:`primary`,icon:s?(0,w.jsx)(x,{size:`tiny`}):(0,w.jsx)(o,{}),onClick:t,disabled:s||c,tabIndex:e?0:-1,children:r})]})]})}),E.displayName=`StickySave`;try{E.displayName=`StickySave`,E.__docgenInfo={description:'StickySave — a persistent save/cancel bar for long forms.\n\nPins to the bottom of its scroll container (`position: sticky`) so the save\nand cancel actions stay reachable without scrolling to the end of a form\nthat is taller than the viewport. Slides into view when `visible` becomes\n`true` (drive this from the form\'s dirty state) and slides out when the\nchanges are saved or discarded.\n\n**Fluent Guidelines Applied:**\n- Token-driven styling via `makeStyles` + Fluent `tokens` exclusively\n- Accessibility: bar is a labelled `role="region"`; hidden from AT and\n  keyboard focus (`aria-hidden`, `pointer-events: none`) while not visible\n- Respects `prefers-reduced-motion`',displayName:`StickySave`,filePath:`/home/runner/work/fluent-components/fluent-components/examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,methods:[],props:{visible:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:`Controls whether the bar is shown. Drive this from the form's "dirty"
state so the bar slides into view as soon as the user makes a change.`,name:`visible`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!0,tags:{},type:{name:`boolean`}},onSave:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:`Called when the primary save action is triggered.`,name:`onSave`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!0,tags:{},type:{name:`() => void`}},onCancel:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:`Called when the cancel / discard action is triggered.`,name:`onCancel`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!0,tags:{},type:{name:`() => void`}},saveLabel:{defaultValue:{value:`Save`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:`Label for the primary save button.`,name:`saveLabel`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!1,tags:{},type:{name:`string`}},cancelLabel:{defaultValue:{value:`Cancel`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:`Label for the cancel button.`,name:`cancelLabel`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!1,tags:{},type:{name:`string`}},message:{defaultValue:{value:`You have unsaved changes`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:`Message shown on the leading edge of the bar, e.g. an unsaved-changes
notice. Pass a string or custom node; omit to hide.`,name:`message`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!1,tags:{},type:{name:`ReactNode`}},saving:{defaultValue:{value:`false`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:"When `true`, the save button shows a spinner and both actions are\ndisabled while the save request is in flight.",name:`saving`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!1,tags:{},type:{name:`boolean`}},saveDisabled:{defaultValue:{value:`false`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:`Disables the save button, e.g. while the form is invalid. The cancel
action stays available so the user can always discard changes.`,name:`saveDisabled`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!1,tags:{},type:{name:`boolean`}},ariaLabel:{defaultValue:{value:`Unsaved changes`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:`Accessible label for the bar region.`,name:`ariaLabel`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`}],description:`Optional CSS class applied to the bar.`,name:`className`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/StickySave.tsx`,name:`StickySaveProps`},required:!1,tags:{},type:{name:`string`}}},tags:{example:`const [dirty, setDirty] = useState(false);
<StickySave
  visible={dirty}
  message="You have unsaved changes"
  onSave={() => saveForm().then(() => setDirty(false))}
  onCancel={() => resetForm()}
/>`}}}catch{}})),O,k,A,j,M,N,P,F,I;t((()=>{g(),O=e(m(),1),D(),k=e(b(),1),A={title:`UI patterns/Sticky Save`,component:E,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:'Sticky Save\n\nA persistent save/cancel bar for **long forms** — pages where the form is\ntaller than the viewport, so the save and cancel actions would otherwise sit\noff-screen until the user scrolls all the way down.\n\nThe bar pins to the bottom of its scroll container (`position: sticky`) and\nslides into view as soon as the form becomes *dirty* (the user changes a\nvalue). Saving or cancelling clears the dirty state and the bar slides away.\n\n**Fluent Guidelines Applied:**\n- Token-driven styling via `makeStyles` + Fluent `tokens` exclusively\n- Accessibility: labelled `role="region"`; hidden from assistive tech and\n  keyboard focus while not visible (`aria-hidden` + `inert`)\n- Respects `prefers-reduced-motion`\n- Composition: drive `visible` from your form\'s dirty state; wire `onSave` /\n  `onCancel` to your own persistence and reset logic'}}},argTypes:{visible:{control:`boolean`,description:`Whether the bar is shown; drive from the form dirty state`},message:{control:`text`,description:`Leading message, e.g. an unsaved-changes notice`},saveLabel:{control:`text`,description:`Label for the primary save button`},cancelLabel:{control:`text`,description:`Label for the cancel button`},saving:{control:`boolean`,description:`Show a spinner and disable actions while saving`},saveDisabled:{control:`boolean`,description:`Disable the save button, e.g. while the form is invalid`},ariaLabel:{control:`text`,description:`Accessible label for the bar region`},onSave:{action:`save`},onCancel:{action:`cancel`}}},j=d({page:{position:`relative`,display:`flex`,flexDirection:`column`,height:`100vh`,overflowY:`auto`,backgroundColor:f.colorNeutralBackground2},content:{display:`flex`,flexDirection:`column`,gap:f.spacingVerticalXL,padding:f.spacingVerticalXXL,maxWidth:`640px`,width:`100%`,marginInline:`auto`,boxSizing:`border-box`},title:{...h.title3,margin:0},sectionTitle:{...h.subtitle2,margin:0},section:{display:`flex`,flexDirection:`column`,gap:f.spacingVerticalM},row:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:f.spacingHorizontalM},switchRow:{display:`flex`,alignItems:`center`,justifyContent:`space-between`}}),M={name:`Front entrance camera`,location:`Building A — Lobby`,hostname:`axis-b8a44f1c2d3e`,timezone:`Europe/Stockholm`,description:`Fixed dome monitoring the main entrance and reception desk.`,ntpEnabled:!0,telemetry:!1,autoUpdate:!0,administrator:``,email:``,notes:``},N=[`Europe/Stockholm`,`Europe/London`,`America/New_York`,`America/Los_Angeles`,`Asia/Tokyo`],P={render:e=>{let t=j(),[n,o]=(0,O.useState)(M),[u,d]=(0,O.useState)(M),[f,p]=(0,O.useState)(!1),m=c(`ntp-`),h=c(`telemetry-`),g=c(`auto-update-`),v=(0,O.useMemo)(()=>JSON.stringify(n)!==JSON.stringify(u),[n,u]),b=(0,O.useCallback)((e,t)=>o(n=>({...n,[e]:t})),[]),x=(0,O.useCallback)(()=>{p(!0),window.setTimeout(()=>{d(n),p(!1),e.onSave?.()},900)},[n,e]),C=(0,O.useCallback)(()=>{o(u),e.onCancel?.()},[u,e]);return(0,k.jsxs)(`div`,{className:t.page,children:[(0,k.jsxs)(`div`,{className:t.content,children:[(0,k.jsx)(`h1`,{className:t.title,children:`Device settings`}),(0,k.jsxs)(`section`,{className:t.section,children:[(0,k.jsx)(`h2`,{className:t.sectionTitle,children:`General`}),(0,k.jsx)(l,{label:`Display name`,required:!0,children:(0,k.jsx)(i,{value:n.name,onChange:(e,t)=>b(`name`,t.value)})}),(0,k.jsx)(l,{label:`Location`,children:(0,k.jsx)(i,{value:n.location,onChange:(e,t)=>b(`location`,t.value)})}),(0,k.jsxs)(`div`,{className:t.row,children:[(0,k.jsx)(l,{label:`Hostname`,children:(0,k.jsx)(i,{value:n.hostname,onChange:(e,t)=>b(`hostname`,t.value)})}),(0,k.jsx)(l,{label:`Time zone`,children:(0,k.jsx)(s,{value:n.timezone,selectedOptions:[n.timezone],onOptionSelect:(e,t)=>b(`timezone`,t.optionValue??n.timezone),children:N.map(e=>(0,k.jsx)(S,{children:e},e))})})]}),(0,k.jsx)(l,{label:`Description`,hint:`Shown in the device inventory`,children:(0,k.jsx)(_,{resize:`vertical`,value:n.description,onChange:(e,t)=>b(`description`,t.value)})})]}),(0,k.jsx)(a,{}),(0,k.jsxs)(`section`,{className:t.section,children:[(0,k.jsx)(`h2`,{className:t.sectionTitle,children:`System`}),(0,k.jsxs)(`div`,{className:t.switchRow,children:[(0,k.jsx)(r,{htmlFor:m,children:`Synchronize time with NTP server`}),(0,k.jsx)(y,{id:m,checked:n.ntpEnabled,onChange:(e,t)=>b(`ntpEnabled`,t.checked)})]}),(0,k.jsxs)(`div`,{className:t.switchRow,children:[(0,k.jsx)(r,{htmlFor:h,children:`Share anonymous usage telemetry`}),(0,k.jsx)(y,{id:h,checked:n.telemetry,onChange:(e,t)=>b(`telemetry`,t.checked)})]}),(0,k.jsxs)(`div`,{className:t.switchRow,children:[(0,k.jsx)(r,{htmlFor:g,children:`Install firmware updates automatically`}),(0,k.jsx)(y,{id:g,checked:n.autoUpdate,onChange:(e,t)=>b(`autoUpdate`,t.checked)})]})]}),(0,k.jsx)(a,{}),(0,k.jsxs)(`section`,{className:t.section,children:[(0,k.jsx)(`h2`,{className:t.sectionTitle,children:`Contact`}),(0,k.jsxs)(`div`,{className:t.row,children:[(0,k.jsx)(l,{label:`Administrator`,children:(0,k.jsx)(i,{placeholder:`Name`,value:n.administrator,onChange:(e,t)=>b(`administrator`,t.value)})}),(0,k.jsx)(l,{label:`Email`,children:(0,k.jsx)(i,{type:`email`,placeholder:`name@example.com`,value:n.email,onChange:(e,t)=>b(`email`,t.value)})})]}),(0,k.jsx)(l,{label:`Notes`,hint:`Scroll down — the save bar stays pinned`,children:(0,k.jsx)(_,{resize:`vertical`,placeholder:`Internal notes`,value:n.notes,onChange:(e,t)=>b(`notes`,t.value)})})]})]}),(0,k.jsx)(E,{...e,visible:v||e.visible===!0,saving:f,onSave:x,onCancel:C})]})}},F={args:{visible:!0,message:`You have unsaved changes`,saveLabel:`Save`,cancelLabel:`Cancel`,saving:!1,saveDisabled:!1},render:e=>{let t=j();return(0,k.jsxs)(`div`,{className:t.page,children:[(0,k.jsx)(`div`,{className:t.content,children:(0,k.jsx)(p,{children:`Toggle the controls to preview the bar's states.`})}),(0,k.jsx)(E,{...e})]})}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`A long device-settings form that overflows its container. The Sticky Save
bar appears the moment any field changes and clears on save/cancel. This is
the primary reference for real usage.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:"The bar in isolation, forced visible via the `visible` control. Use the\ncontrols to explore labels, the saving spinner, and the disabled state.",...F.parameters?.docs?.description}}},I=[`Default`,`Interactive`]}))();export{P as Default,F as Interactive,I as __namedExportsOrder,A as default};