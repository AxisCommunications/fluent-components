import{a as e,n as t}from"./chunk-BneVvdWh.js";import{En as n,It as r,M as i,Nr as a,Vt as o,ci as s,cr as c,ii as l,qi as u,s as d,st as f,xi as p}from"./iframe-DN9Zhnka.js";import{n as m,t as h}from"./FullPageHeader-DdaHUGWQ.js";var g,_,v,y,b,x,S,C,w,T,E,D,O;t((()=>{d(),n(),g=e(u(),1),m(),_=e(p(),1),v={title:`UI patterns/Full Page Header`,component:h,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Full Page Header (Main Content Page)

A header component essential for navigation, showcasing a clear title that indicates the current
selection or a breadcrumb trail to illustrate the user's path. This aids users in understanding
their location within the application.

It also features a tab component for easy access to related sections, enhancing the overall user
experience with quick transitions between different views.

Additionally, it includes an info area for displaying important status updates when needed.

## Properties

The detailed variant contains more information and shows both the breadcrumb trail, title,
status messaging, actions, and tabs. It also displays contextual information. This variant
is recommended to use when:

- Users need clear awareness of the full process, including completed, current, and upcoming steps
- Step titles provide meaningful context for understanding the flow
- Users need confirmation of progress but do not need an overview of all steps

## Behaviour

In responsive designs, when space is limited, the breadcrumb component smartly collapses its
central content into a "More" menu, as detailed in the
[breadcrumb documentation](https://react.fluentui.dev/?path=/docs/components-breadcrumb--docs).
Tabs remain visible in a horizontal strip and can be scrolled when needed.

When space is tighter and header actions are present, tabs can move onto a new line below the
breadcrumb/title row while still remaining horizontally scrollable.

## Page-level actions (Save / Reset)

For pages that do **not** auto-save on input — settings and configuration forms, for example —
the commit controls live in the header \`actions\` slot rather than at the bottom of the form.
The recommended pattern mirrors common form behaviour:

- **Pristine (no edits):** Save is \`disabled\` and rendered as a \`secondary\` button; Reset is hidden
  or disabled because there is nothing to discard.
- **Dirty (unsaved changes):** Save becomes the \`primary\` action to signal the pending commit, and
  Reset is enabled so the user can discard their changes and return to the last saved state.
- **After save:** the form is pristine again, so Save returns to disabled/secondary and Reset is
  disabled.

See the \`FormPageWithSaveActions\` story for a working example of this dirty-state behaviour.

<p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=79-383"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>`}}},argTypes:{breadcrumbs:{control:`object`,description:"Breadcrumb trail shown above the title. Each item supports a `label` and an optional `onClick`; the trail collapses into a 'More' menu when space is limited.",table:{type:{summary:`Array<{ label: string; onClick?: () => void }>`}}},title:{control:`text`,description:`Main page title shown in the header row.`,table:{type:{summary:`string`}}},icon:{control:!1,description:`Optional icon rendered next to the title.`,table:{type:{summary:`ReactNode`}}},status:{control:`object`,description:"Optional status line under the title. Supports `label`, optional `meta` text, optional `icon`, and a `color` ('danger' | 'warning' | 'success' | 'info' | 'neutral').",table:{type:{summary:`{ label: string; meta?: string; icon?: ReactElement | null; color?: 'danger' | 'warning' | 'success' | 'info' | 'neutral' } | undefined`}}},actions:{control:`object`,description:"Optional right-aligned action buttons. Each action supports `label`, optional `onClick`, optional `icon`, an `appearance`, and a `disabled` flag. Use these for page-level commands such as Save/Reset on forms that do not auto-save: keep Save `disabled` while the form is pristine and promote it to `appearance: 'primary'` once there are unsaved changes.",table:{type:{summary:`Array<{ label: string; onClick?: () => void; icon?: ReactElement | null; appearance?: HeaderActionAppearance; disabled?: boolean }> | undefined`}}},tabs:{control:`object`,description:"Optional tab strip shown below the header row. Each tab supports `value`, `label`, and an optional `disabled` flag.",table:{type:{summary:`Array<{ value: string; label: string; disabled?: boolean }> | undefined`}}},selectedTab:{control:`text`,description:`Controlled selected tab value.`,table:{type:{summary:`string | undefined`}}},defaultSelectedTab:{control:`text`,description:`Default selected tab value for uncontrolled usage.`,table:{type:{summary:`string | undefined`}}},onTabSelect:{action:`onTabSelect`,description:"Callback invoked with the `value` of the selected tab.",table:{type:{summary:`(value: string) => void`}}},ariaLabel:{control:`text`,description:`Accessible label for the breadcrumb navigation landmark.`,table:{type:{summary:`string | undefined`}}},className:{control:`text`,description:`Optional CSS class applied to the root element.`,table:{type:{summary:`string | undefined`}}}}},y={args:{breadcrumbs:[{label:`Europe`,onClick:()=>console.log(`Europe`)},{label:`Norway`,onClick:()=>console.log(`Norway`)},{label:`Bergen`,onClick:()=>console.log(`Bergen`)}],title:`City`,status:{label:`Unreachable`,meta:`Checked every 45 seconds`,color:`danger`},tabs:[{value:`first`,label:`First Tab`},{value:`second`,label:`Second Tab`},{value:`third`,label:`Third Tab`},{value:`fourth`,label:`Fourth Tab`}],defaultSelectedTab:`first`}},b={args:{breadcrumbs:[{label:`Europe`},{label:`Norway`},{label:`Bergen`}],title:`City`,tabs:[{value:`first`,label:`First Tab`},{value:`second`,label:`Second Tab`},{value:`third`,label:`Third Tab`},{value:`fourth`,label:`Fourth Tab`}],defaultSelectedTab:`first`}},x={args:{breadcrumbs:[{label:`Europe`},{label:`Norway`}],title:`City`}},S={decorators:[e=>(0,_.jsx)(`div`,{style:{maxWidth:480,border:`1px dashed #ccc`,padding:16,resize:`horizontal`,overflow:`auto`},children:(0,_.jsx)(e,{})})],args:{breadcrumbs:[{label:`Europe`,onClick:()=>console.log(`Europe`)},{label:`Scandinavia`,onClick:()=>console.log(`Scandinavia`)},{label:`Norway`,onClick:()=>console.log(`Norway`)},{label:`Western Norway`,onClick:()=>console.log(`Western Norway`)},{label:`Bergen`,onClick:()=>console.log(`Bergen`)}],title:`City`,status:{label:`Unreachable`,meta:`Checked every 45 seconds`,color:`danger`},tabs:[{value:`first`,label:`First Tab`},{value:`second`,label:`Second Tab`},{value:`third`,label:`Third Tab`},{value:`fourth`,label:`Fourth Tab`}],defaultSelectedTab:`first`}},C={decorators:[e=>(0,_.jsx)(`div`,{style:{maxWidth:380,border:`1px dashed #ccc`,padding:16,resize:`horizontal`,overflow:`auto`},children:(0,_.jsx)(e,{})})],args:{breadcrumbs:[{label:`Europe`,onClick:()=>console.log(`Europe`)},{label:`Scandinavia`,onClick:()=>console.log(`Scandinavia`)},{label:`Norway`,onClick:()=>console.log(`Norway`)},{label:`Western Norway`,onClick:()=>console.log(`Western Norway`)},{label:`Bergen`,onClick:()=>console.log(`Bergen`)}],title:`City`,status:{label:`Unreachable`,meta:`Checked every 45 seconds`,color:`danger`},tabs:[{value:`first`,label:`First Tab`},{value:`second`,label:`Second Tab`},{value:`third`,label:`Third Tab`},{value:`fourth`,label:`Fourth Tab`}],defaultSelectedTab:`first`}},w={decorators:[e=>(0,_.jsx)(`div`,{style:{maxWidth:380,border:`1px dashed #ccc`,padding:16},children:(0,_.jsx)(e,{})})],args:{breadcrumbs:[{label:`Europe`,onClick:()=>console.log(`Europe`)},{label:`Norway`,onClick:()=>console.log(`Norway`)},{label:`Bergen`,onClick:()=>console.log(`Bergen`)}],title:`City`,status:{label:`Unreachable`,meta:`Checked every 45 seconds`,color:`danger`},tabs:[{value:`first`,label:`First Tab`},{value:`second`,label:`Second Tab`},{value:`third`,label:`Third Tab`},{value:`fourth`,label:`Fourth Tab`}],defaultSelectedTab:`first`}},T=s({page:{display:`flex`,flexDirection:`column`,gap:l.spacingVerticalL,maxWidth:`640px`},formCard:{display:`flex`,flexDirection:`column`,gap:l.spacingVerticalL,padding:l.spacingHorizontalXL},formStack:{display:`flex`,flexDirection:`column`,gap:l.spacingVerticalM}}),E={name:`Stockholm Office`,email:`ops@stockholm.example.com`,description:`Primary monitoring site for the Nordic region.`},D={render:()=>{let e=T(),[t,n]=(0,g.useState)(E),[s,l]=(0,g.useState)(E),u=(0,g.useMemo)(()=>s.name!==t.name||s.email!==t.email||s.description!==t.description,[s,t]),d=e=>t=>l(n=>({...n,[e]:t}));return(0,_.jsxs)(`div`,{className:e.page,children:[(0,_.jsx)(h,{breadcrumbs:[{label:`Administration`,onClick:()=>{}},{label:`Sites`}],title:`Site Profile`,status:u?{label:`Unsaved changes`,meta:`Save to apply your edits`,color:`warning`}:{label:`Saved`,meta:`All changes applied`,color:`success`},actions:[{label:`Reset`,icon:(0,_.jsx)(c,{}),appearance:`secondary`,disabled:!u,onClick:()=>l(t)},{label:`Save`,icon:(0,_.jsx)(a,{}),appearance:u?`primary`:`secondary`,disabled:!u,onClick:()=>n(s)}]}),(0,_.jsx)(i,{className:e.formCard,children:(0,_.jsxs)(`div`,{className:e.formStack,children:[(0,_.jsx)(o,{label:`Site name`,required:!0,children:(0,_.jsx)(r,{value:s.name,onChange:(e,t)=>d(`name`)(t.value)})}),(0,_.jsx)(o,{label:`Contact email`,children:(0,_.jsx)(r,{type:`email`,value:s.email,onChange:(e,t)=>d(`email`)(t.value)})}),(0,_.jsx)(o,{label:`Description`,children:(0,_.jsx)(f,{resize:`vertical`,value:s.description,onChange:(e,t)=>d(`description`)(t.value)})})]})})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: "Europe",
      onClick: () => console.log("Europe")
    }, {
      label: "Norway",
      onClick: () => console.log("Norway")
    }, {
      label: "Bergen",
      onClick: () => console.log("Bergen")
    }],
    title: "City",
    status: {
      label: "Unreachable",
      meta: "Checked every 45 seconds",
      color: "danger"
    },
    tabs: [{
      value: "first",
      label: "First Tab"
    }, {
      value: "second",
      label: "Second Tab"
    }, {
      value: "third",
      label: "Third Tab"
    }, {
      value: "fourth",
      label: "Fourth Tab"
    }],
    defaultSelectedTab: "first"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: "Europe"
    }, {
      label: "Norway"
    }, {
      label: "Bergen"
    }],
    title: "City",
    tabs: [{
      value: "first",
      label: "First Tab"
    }, {
      value: "second",
      label: "Second Tab"
    }, {
      value: "third",
      label: "Third Tab"
    }, {
      value: "fourth",
      label: "Fourth Tab"
    }],
    defaultSelectedTab: "first"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: "Europe"
    }, {
      label: "Norway"
    }],
    title: "City"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    maxWidth: 480,
    border: "1px dashed #ccc",
    padding: 16,
    resize: "horizontal",
    overflow: "auto"
  }}>
        <Story />
      </div>],
  args: {
    breadcrumbs: [{
      label: "Europe",
      onClick: () => console.log("Europe")
    }, {
      label: "Scandinavia",
      onClick: () => console.log("Scandinavia")
    }, {
      label: "Norway",
      onClick: () => console.log("Norway")
    }, {
      label: "Western Norway",
      onClick: () => console.log("Western Norway")
    }, {
      label: "Bergen",
      onClick: () => console.log("Bergen")
    }],
    title: "City",
    status: {
      label: "Unreachable",
      meta: "Checked every 45 seconds",
      color: "danger"
    },
    tabs: [{
      value: "first",
      label: "First Tab"
    }, {
      value: "second",
      label: "Second Tab"
    }, {
      value: "third",
      label: "Third Tab"
    }, {
      value: "fourth",
      label: "Fourth Tab"
    }],
    defaultSelectedTab: "first"
  }
}`,...S.parameters?.docs?.source},description:{story:`When space is limited, the breadcrumb collapses its central content into a
"More" menu and tabs stay visible in a horizontally scrollable strip.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    maxWidth: 380,
    border: "1px dashed #ccc",
    padding: 16,
    resize: "horizontal",
    overflow: "auto"
  }}>
        <Story />
      </div>],
  args: {
    breadcrumbs: [{
      label: "Europe",
      onClick: () => console.log("Europe")
    }, {
      label: "Scandinavia",
      onClick: () => console.log("Scandinavia")
    }, {
      label: "Norway",
      onClick: () => console.log("Norway")
    }, {
      label: "Western Norway",
      onClick: () => console.log("Western Norway")
    }, {
      label: "Bergen",
      onClick: () => console.log("Bergen")
    }],
    title: "City",
    status: {
      label: "Unreachable",
      meta: "Checked every 45 seconds",
      color: "danger"
    },
    tabs: [{
      value: "first",
      label: "First Tab"
    }, {
      value: "second",
      label: "Second Tab"
    }, {
      value: "third",
      label: "Third Tab"
    }, {
      value: "fourth",
      label: "Fourth Tab"
    }],
    defaultSelectedTab: "first"
  }
}`,...C.parameters?.docs?.source},description:{story:`When even less space is available, the tabs break onto a new line and
position themselves below the breadcrumbs or title while staying scrollable.
This works both with and without action buttons.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    maxWidth: 380,
    border: "1px dashed #ccc",
    padding: 16
  }}>
        <Story />
      </div>],
  args: {
    breadcrumbs: [{
      label: "Europe",
      onClick: () => console.log("Europe")
    }, {
      label: "Norway",
      onClick: () => console.log("Norway")
    }, {
      label: "Bergen",
      onClick: () => console.log("Bergen")
    }],
    title: "City",
    status: {
      label: "Unreachable",
      meta: "Checked every 45 seconds",
      color: "danger"
    },
    tabs: [{
      value: "first",
      label: "First Tab"
    }, {
      value: "second",
      label: "Second Tab"
    }, {
      value: "third",
      label: "Third Tab"
    }, {
      value: "fourth",
      label: "Fourth Tab"
    }],
    defaultSelectedTab: "first"
  }
}`,...w.parameters?.docs?.source},description:{story:`Tabs stack below the breadcrumb even when there are no action buttons,
ensuring the layout adapts to limited space regardless of header configuration.`,...w.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const styles = useFormStyles();
    const [saved, setSaved] = useState<ProfileFormValues>(INITIAL_PROFILE);
    const [draft, setDraft] = useState<ProfileFormValues>(INITIAL_PROFILE);
    const isDirty = useMemo(() => draft.name !== saved.name || draft.email !== saved.email || draft.description !== saved.description, [draft, saved]);
    const updateField = (field: keyof ProfileFormValues) => (value: string) => setDraft(prev => ({
      ...prev,
      [field]: value
    }));
    return <div className={styles.page}>
        <FullPageHeader breadcrumbs={[{
        label: "Administration",
        onClick: () => {}
      }, {
        label: "Sites"
      }]} title="Site Profile" status={isDirty ? {
        label: "Unsaved changes",
        meta: "Save to apply your edits",
        color: "warning"
      } : {
        label: "Saved",
        meta: "All changes applied",
        color: "success"
      }} actions={[{
        label: "Reset",
        icon: <ArrowResetRegular />,
        appearance: "secondary",
        disabled: !isDirty,
        onClick: () => setDraft(saved)
      }, {
        label: "Save",
        icon: <SaveRegular />,
        appearance: isDirty ? "primary" : "secondary",
        disabled: !isDirty,
        onClick: () => setSaved(draft)
      }]} />

        <Card className={styles.formCard}>
          <div className={styles.formStack}>
            <Field label="Site name" required>
              <Input value={draft.name} onChange={(_e, data) => updateField("name")(data.value)} />
            </Field>

            <Field label="Contact email">
              <Input type="email" value={draft.email} onChange={(_e, data) => updateField("email")(data.value)} />
            </Field>

            <Field label="Description">
              <Textarea resize="vertical" value={draft.description} onChange={(_e, data) => updateField("description")(data.value)} />
            </Field>
          </div>
        </Card>
      </div>;
  }
}`,...D.parameters?.docs?.source},description:{story:`Settings/configuration pages that do not auto-save expose their commit
controls in the header \`actions\` slot. This interactive example demonstrates
the full dirty-state lifecycle:

- Edit any field to mark the form dirty — **Save** promotes itself to the
  \`primary\` appearance and **Reset** becomes enabled.
- **Reset** discards edits and returns the form to its last saved state,
  which makes both actions inactive again.
- **Save** persists the values (here, into the "saved" baseline), after which
  the form is pristine and Save drops back to a disabled \`secondary\` button.`,...D.parameters?.docs?.description}}},O=[`Default`,`WithoutStatus`,`Minimal`,`ResponsiveBreadcrumbOverflow`,`ResponsiveStackedTabs`,`ResponsiveStackedTabsNoActions`,`FormPageWithSaveActions`]}))();export{y as Default,D as FormPageWithSaveActions,x as Minimal,S as ResponsiveBreadcrumbOverflow,C as ResponsiveStackedTabs,w as ResponsiveStackedTabsNoActions,b as WithoutStatus,O as __namedExportsOrder,v as default};