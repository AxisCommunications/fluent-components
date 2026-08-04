import{a as e,n as t}from"./chunk-BneVvdWh.js";import{En as n,Kn as r,qi as i,xi as a}from"./iframe-CWmA6VAC.js";import{n as o,t as s}from"./FilterToolbar-Bgtyp57u.js";var c,l,u,d,f,p,m;t((()=>{n(),c=e(i(),1),o(),l=e(a(),1),u={title:`UI patterns/Filter Toolbar`,component:s,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`FilterToolbar Component

A toolbar row combining a filter menu, dismissible selected-filter chips,
a search input, and leading/trailing action buttons. Use it above lists and
tables to filter, search, and act on the current data set.

**Fluent Guidelines Applied:**
- Uses Fluent \`Menu\`, \`Button\`, and \`Input\` primitives
- Supports controlled and uncontrolled selected filters
- Accessible toolbar landmark via \`ariaLabel\`
- Token-based spacing, colors, and background variants

<p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=77-361"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>`}}},argTypes:{filters:{control:`object`,description:"Filter options shown in the filter menu button. Each filter supports `id`, `label`, and an optional `disabled` flag.",table:{type:{summary:`Array<{ id: string; label: string; disabled?: boolean }> | undefined`}}},selectedFilterIds:{control:`object`,description:`Controlled list of selected filter IDs.`,table:{type:{summary:`string[] | undefined`}}},defaultSelectedFilterIds:{control:`object`,description:`Uncontrolled default list of selected filter IDs.`,table:{type:{summary:`string[] | undefined`}}},onSelectedFilterIdsChange:{action:`onSelectedFilterIdsChange`,description:`Callback fired whenever the selected filter IDs change.`,table:{type:{summary:`(selectedIds: string[]) => void`}}},filterButtonLabel:{control:`text`,description:`Custom label for the filter menu button.`,table:{type:{summary:`string | undefined`}}},filterButtonIcon:{control:!1,description:`Optional icon for the filter menu button.`,table:{type:{summary:`ReactElement | null | undefined`}}},primaryActions:{control:`object`,description:"Left-side toolbar actions. Each action supports `id`, `label`, optional `icon`, `onClick`, `disabled`, and `appearance`.",table:{type:{summary:`Array<{ id: string; label: string; icon?: ReactElement | null; onClick?: () => void; disabled?: boolean; appearance?: 'primary' | 'secondary' | 'subtle' | 'transparent' }> | undefined`}}},secondaryActions:{control:`object`,description:"Right-side toolbar actions (same shape as `primaryActions`).",table:{type:{summary:`Array<{ id: string; label: string; icon?: ReactElement | null; onClick?: () => void; disabled?: boolean; appearance?: 'primary' | 'secondary' | 'subtle' | 'transparent' }> | undefined`}}},searchPlaceholder:{control:`text`,description:`Placeholder text for the search input.`,table:{type:{summary:`string | undefined`}}},searchValue:{control:`text`,description:`Controlled value for the search input.`,table:{type:{summary:`string | undefined`}}},onSearchChange:{action:`onSearchChange`,description:`Callback fired on search input changes.`,table:{type:{summary:`(value: string) => void`}}},toolbarBackground:{control:`radio`,options:[`default`,`transparent`],description:`Toolbar row background style variant.`,table:{type:{summary:`'default' | 'transparent'`},defaultValue:{summary:`'default'`}}},ariaLabel:{control:`text`,description:`Accessible label for the toolbar.`,table:{type:{summary:`string | undefined`}}},className:{control:`text`,description:`Optional CSS class applied to the root element.`,table:{type:{summary:`string | undefined`}}}}},d={args:{filters:[{id:`status-in-progress`,label:`Status: In Progress`},{id:`owner-design`,label:`Owner: Design Team`},{id:`region-emea`,label:`Region: EMEA`},{id:`priority-high`,label:`Priority: High`}],defaultSelectedFilterIds:[`status-in-progress`,`owner-design`],searchPlaceholder:`Search projects`,primaryActions:[{id:`refresh`,label:`Refresh`,appearance:`primary`},{id:`export`,label:`Export`,appearance:`secondary`}],filterButtonLabel:`Filters`,filterButtonIcon:(0,l.jsx)(r,{})}},f={render:()=>{let[e,t]=(0,c.useState)([`status-blocked`,`priority-high`,`team-platform`]);return(0,l.jsx)(s,{filters:[{id:`status-blocked`,label:`Status: Blocked`},{id:`priority-high`,label:`Priority: High`},{id:`team-platform`,label:`Team: Platform`},{id:`owner-me`,label:`Owner: Me`}],selectedFilterIds:e,onSelectedFilterIdsChange:t,searchPlaceholder:`Search items`,onSearchChange:e=>console.log(`search`,e),primaryActions:[{id:`refresh`,label:`Refresh`,appearance:`primary`},{id:`export`,label:`Export`,appearance:`secondary`}],filterButtonLabel:`Filters`,filterButtonIcon:(0,l.jsx)(r,{})})}},p={args:{filters:[{id:`status-open`,label:`Status: Open`},{id:`priority-low`,label:`Priority: Low`}],searchPlaceholder:`Search`,primaryActions:[{id:`refresh`,label:`Refresh`,appearance:`primary`},{id:`export`,label:`Export`,appearance:`secondary`}],selectedFilterIds:[],filterButtonLabel:`Filters`,filterButtonIcon:(0,l.jsx)(r,{})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    filters: [{
      id: "status-in-progress",
      label: "Status: In Progress"
    }, {
      id: "owner-design",
      label: "Owner: Design Team"
    }, {
      id: "region-emea",
      label: "Region: EMEA"
    }, {
      id: "priority-high",
      label: "Priority: High"
    }],
    defaultSelectedFilterIds: ["status-in-progress", "owner-design"],
    searchPlaceholder: "Search projects",
    primaryActions: [{
      id: "refresh",
      label: "Refresh",
      appearance: "primary"
    }, {
      id: "export",
      label: "Export",
      appearance: "secondary"
    }],
    filterButtonLabel: "Filters",
    filterButtonIcon: <FilterRegular />
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedIds, setSelectedIds] = useState<string[]>(["status-blocked", "priority-high", "team-platform"]);
    return <FilterToolbar filters={[{
      id: "status-blocked",
      label: "Status: Blocked"
    }, {
      id: "priority-high",
      label: "Priority: High"
    }, {
      id: "team-platform",
      label: "Team: Platform"
    }, {
      id: "owner-me",
      label: "Owner: Me"
    }]} selectedFilterIds={selectedIds} onSelectedFilterIdsChange={setSelectedIds} searchPlaceholder="Search items" onSearchChange={value => console.log("search", value)} primaryActions={[{
      id: "refresh",
      label: "Refresh",
      appearance: "primary"
    }, {
      id: "export",
      label: "Export",
      appearance: "secondary"
    }]} filterButtonLabel="Filters" filterButtonIcon={<FilterRegular />} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    filters: [{
      id: "status-open",
      label: "Status: Open"
    }, {
      id: "priority-low",
      label: "Priority: Low"
    }],
    searchPlaceholder: "Search",
    primaryActions: [{
      id: "refresh",
      label: "Refresh",
      appearance: "primary"
    }, {
      id: "export",
      label: "Export",
      appearance: "secondary"
    }],
    selectedFilterIds: [],
    filterButtonLabel: "Filters",
    filterButtonIcon: <FilterRegular />
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`WithRemovableLabels`,`ToolbarOnly`]}))();export{d as Default,p as ToolbarOnly,f as WithRemovableLabels,m as __namedExportsOrder,u as default};