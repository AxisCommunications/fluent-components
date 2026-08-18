import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{H as n,U as r,n as i,t as a}from"./tokens-CCfXmbaE.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{a as s,r as c}from"./chunk-11-C4q-Op0m.js";import{i as l,p as u}from"./chunk-21-By1xjZax.js";import{n as d,t as f}from"./Field-D_PoFV6t.js";import{n as p,t as m}from"./Input-BoG8Tal4.js";import{n as h,t as g}from"./Textarea-xgIINAk7.js";import{n as _,t as v}from"./Card-oTFXUAz3.js";import{n as y,t as b}from"./FullPageHeader-Mg5LwbB9.js";var x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{_(),d(),p(),h(),n(),a(),u(),s(),x=t(),y(),S=o(),C={title:`UI patterns/Full Page Header`,component:b,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Full Page Header (Main Content Page)

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

<p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=79-383"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>`}}},argTypes:{breadcrumbs:{control:`object`,description:"Breadcrumb trail shown above the title. Each item supports a `label` and an optional `onClick`; the trail collapses into a 'More' menu when space is limited.",table:{type:{summary:`Array<{ label: string; onClick?: () => void }>`}}},title:{control:`text`,description:`Main page title shown in the header row.`,table:{type:{summary:`string`}}},icon:{control:!1,description:`Optional icon rendered next to the title.`,table:{type:{summary:`ReactNode`}}},status:{control:`object`,description:"Optional status line under the title. Supports `label`, optional `meta` text, optional `icon`, and a `color` ('danger' | 'warning' | 'success' | 'info' | 'neutral').",table:{type:{summary:`{ label: string; meta?: string; icon?: ReactElement | null; color?: 'danger' | 'warning' | 'success' | 'info' | 'neutral' } | undefined`}}},actions:{control:`object`,description:"Optional right-aligned action buttons. Each action supports `label`, optional `onClick`, optional `icon`, an `appearance`, and a `disabled` flag. Use these for page-level commands such as Save/Reset on forms that do not auto-save: keep Save `disabled` while the form is pristine and promote it to `appearance: 'primary'` once there are unsaved changes.",table:{type:{summary:`Array<{ label: string; onClick?: () => void; icon?: ReactElement | null; appearance?: HeaderActionAppearance; disabled?: boolean }> | undefined`}}},tabs:{control:`object`,description:"Optional tab strip shown below the header row. Each tab supports `value`, `label`, and an optional `disabled` flag.",table:{type:{summary:`Array<{ value: string; label: string; disabled?: boolean }> | undefined`}}},selectedTab:{control:`text`,description:`Controlled selected tab value.`,table:{type:{summary:`string | undefined`}}},defaultSelectedTab:{control:`text`,description:`Default selected tab value for uncontrolled usage.`,table:{type:{summary:`string | undefined`}}},onTabSelect:{action:`onTabSelect`,description:"Callback invoked with the `value` of the selected tab.",table:{type:{summary:`(value: string) => void`}}},ariaLabel:{control:`text`,description:`Accessible label for the breadcrumb navigation landmark.`,table:{type:{summary:`string | undefined`}}},className:{control:`text`,description:`Optional CSS class applied to the root element.`,table:{type:{summary:`string | undefined`}}}}},w={args:{breadcrumbs:[{label:`Europe`,onClick:()=>console.log(`Europe`)},{label:`Norway`,onClick:()=>console.log(`Norway`)},{label:`Bergen`,onClick:()=>console.log(`Bergen`)}],title:`City`,status:{label:`Unreachable`,meta:`Checked every 45 seconds`,color:`danger`},tabs:[{value:`first`,label:`First Tab`},{value:`second`,label:`Second Tab`},{value:`third`,label:`Third Tab`},{value:`fourth`,label:`Fourth Tab`}],defaultSelectedTab:`first`}},T={args:{breadcrumbs:[{label:`Europe`},{label:`Norway`},{label:`Bergen`}],title:`City`,tabs:[{value:`first`,label:`First Tab`},{value:`second`,label:`Second Tab`},{value:`third`,label:`Third Tab`},{value:`fourth`,label:`Fourth Tab`}],defaultSelectedTab:`first`}},E={args:{breadcrumbs:[{label:`Europe`},{label:`Norway`}],title:`City`}},D={decorators:[e=>(0,S.jsx)(`div`,{style:{maxWidth:480,border:`1px dashed #ccc`,padding:16,resize:`horizontal`,overflow:`auto`},children:(0,S.jsx)(e,{})})],args:{breadcrumbs:[{label:`Europe`,onClick:()=>console.log(`Europe`)},{label:`Scandinavia`,onClick:()=>console.log(`Scandinavia`)},{label:`Norway`,onClick:()=>console.log(`Norway`)},{label:`Western Norway`,onClick:()=>console.log(`Western Norway`)},{label:`Bergen`,onClick:()=>console.log(`Bergen`)}],title:`City`,status:{label:`Unreachable`,meta:`Checked every 45 seconds`,color:`danger`},tabs:[{value:`first`,label:`First Tab`},{value:`second`,label:`Second Tab`},{value:`third`,label:`Third Tab`},{value:`fourth`,label:`Fourth Tab`}],defaultSelectedTab:`first`}},O={decorators:[e=>(0,S.jsx)(`div`,{style:{maxWidth:380,border:`1px dashed #ccc`,padding:16,resize:`horizontal`,overflow:`auto`},children:(0,S.jsx)(e,{})})],args:{breadcrumbs:[{label:`Europe`,onClick:()=>console.log(`Europe`)},{label:`Scandinavia`,onClick:()=>console.log(`Scandinavia`)},{label:`Norway`,onClick:()=>console.log(`Norway`)},{label:`Western Norway`,onClick:()=>console.log(`Western Norway`)},{label:`Bergen`,onClick:()=>console.log(`Bergen`)}],title:`City`,status:{label:`Unreachable`,meta:`Checked every 45 seconds`,color:`danger`},tabs:[{value:`first`,label:`First Tab`},{value:`second`,label:`Second Tab`},{value:`third`,label:`Third Tab`},{value:`fourth`,label:`Fourth Tab`}],defaultSelectedTab:`first`}},k={decorators:[e=>(0,S.jsx)(`div`,{style:{maxWidth:380,border:`1px dashed #ccc`,padding:16},children:(0,S.jsx)(e,{})})],args:{breadcrumbs:[{label:`Europe`,onClick:()=>console.log(`Europe`)},{label:`Norway`,onClick:()=>console.log(`Norway`)},{label:`Bergen`,onClick:()=>console.log(`Bergen`)}],title:`City`,status:{label:`Unreachable`,meta:`Checked every 45 seconds`,color:`danger`},tabs:[{value:`first`,label:`First Tab`},{value:`second`,label:`Second Tab`},{value:`third`,label:`Third Tab`},{value:`fourth`,label:`Fourth Tab`}],defaultSelectedTab:`first`}},A=r({page:{display:`flex`,flexDirection:`column`,gap:i.spacingVerticalL,maxWidth:`640px`},formCard:{display:`flex`,flexDirection:`column`,gap:i.spacingVerticalL,padding:i.spacingHorizontalXL},formStack:{display:`flex`,flexDirection:`column`,gap:i.spacingVerticalM}}),j={name:`Stockholm Office`,email:`ops@stockholm.example.com`,description:`Primary monitoring site for the Nordic region.`},M={render:()=>{let e=A(),[t,n]=(0,x.useState)(j),[r,i]=(0,x.useState)(j),a=(0,x.useMemo)(()=>r.name!==t.name||r.email!==t.email||r.description!==t.description,[r,t]),o=e=>t=>i(n=>({...n,[e]:t}));return(0,S.jsxs)(`div`,{className:e.page,children:[(0,S.jsx)(b,{breadcrumbs:[{label:`Administration`,onClick:()=>{}},{label:`Sites`}],title:`Site Profile`,status:a?{label:`Unsaved changes`,meta:`Save to apply your edits`,color:`warning`}:{label:`Saved`,meta:`All changes applied`,color:`success`},actions:[{label:`Reset`,icon:(0,S.jsx)(l,{}),appearance:`secondary`,disabled:!a,onClick:()=>i(t)},{label:`Save`,icon:(0,S.jsx)(c,{}),appearance:a?`primary`:`secondary`,disabled:!a,onClick:()=>n(r)}]}),(0,S.jsx)(v,{className:e.formCard,children:(0,S.jsxs)(`div`,{className:e.formStack,children:[(0,S.jsx)(f,{label:`Site name`,required:!0,children:(0,S.jsx)(m,{value:r.name,onChange:(e,t)=>o(`name`)(t.value)})}),(0,S.jsx)(f,{label:`Contact email`,children:(0,S.jsx)(m,{type:`email`,value:r.email,onChange:(e,t)=>o(`email`)(t.value)})}),(0,S.jsx)(f,{label:`Description`,children:(0,S.jsx)(g,{resize:`vertical`,value:r.description,onChange:(e,t)=>o(`description`)(t.value)})})]})})]})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: "Europe"
    }, {
      label: "Norway"
    }],
    title: "City"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`When space is limited, the breadcrumb collapses its central content into a
"More" menu and tabs stay visible in a horizontally scrollable strip.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`When even less space is available, the tabs break onto a new line and
position themselves below the breadcrumbs or title while staying scrollable.
This works both with and without action buttons.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`Tabs stack below the breadcrumb even when there are no action buttons,
ensuring the layout adapts to limited space regardless of header configuration.`,...k.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`Settings/configuration pages that do not auto-save expose their commit
controls in the header \`actions\` slot. This interactive example demonstrates
the full dirty-state lifecycle:

- Edit any field to mark the form dirty — **Save** promotes itself to the
  \`primary\` appearance and **Reset** becomes enabled.
- **Reset** discards edits and returns the form to its last saved state,
  which makes both actions inactive again.
- **Save** persists the values (here, into the "saved" baseline), after which
  the form is pristine and Save drops back to a disabled \`secondary\` button.`,...M.parameters?.docs?.description}}},N=[`Default`,`WithoutStatus`,`Minimal`,`ResponsiveBreadcrumbOverflow`,`ResponsiveStackedTabs`,`ResponsiveStackedTabsNoActions`,`FormPageWithSaveActions`]})))()}P();export{w as Default,M as FormPageWithSaveActions,E as Minimal,D as ResponsiveBreadcrumbOverflow,O as ResponsiveStackedTabs,k as ResponsiveStackedTabsNoActions,T as WithoutStatus,N as __namedExportsOrder,C as default};