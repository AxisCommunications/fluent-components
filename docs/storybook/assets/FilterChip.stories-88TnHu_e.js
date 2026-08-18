import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,r as i,t as a}from"./FilterChip-39qu3Cny.js";function o({initial:e,ariaLabel:t}){let[n,i]=(0,s.useState)(e),o=e=>i(t=>t.map(t=>t.value===e?{...t,selected:!t.selected}:t));return n.length===0?(0,c.jsx)(`span`,{children:`All filters cleared.`}):(0,c.jsx)(r,{"aria-label":t,onDismiss:e=>i(t=>t.filter(t=>t.value!==e)),children:n.map(e=>(0,c.jsx)(a,{value:e.value,selected:e.selected,size:e.size,appearance:e.appearance,onToggle:o,dismissLabel:`Remove ${e.label}`,children:e.label},e.value))})}var s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{s=t(),i(),c=n(),l={title:`UI patterns/Filter Chip`,component:a,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"FilterChip Component\n\nA toggleable, dismissible filter chip built on Fluent `InteractionTag`. It\nadds the two-state filter semantics used by faceted-search UIs:\n\n- **Toggle** — clicking the chip body flips whether the filter is applied\n  (`onToggle`) without removing the chip, reflected by the `selected` visual\n  state.\n- **Dismiss** — clicking the trailing X removes the chip, surfaced through the\n  parent `FilterChipGroup`'s `onDismiss(value)` callback.\n\n`FilterChip` must be rendered inside a `FilterChipGroup`.\n\n**Fluent Guidelines Applied:**\n- Composed only from `@fluentui/react-components` primitives\n- Token-driven layout and spacing\n- Accessible dismiss button via explicit `aria-label`"}}},argTypes:{value:{control:`text`,description:`Stable value identifying the chip within its group.`,table:{type:{summary:`string`}}},children:{control:`text`,description:`Visible chip label.`,table:{type:{summary:`ReactNode`}}},selected:{control:`boolean`,description:`Whether the underlying filter is currently applied. Controls the highlighted visual state without removing the chip.`,table:{type:{summary:`boolean | undefined`}}},disabled:{control:`boolean`,description:`Disable both the toggle and dismiss interactions.`,table:{type:{summary:`boolean | undefined`}}},size:{control:`radio`,options:[`extra-small`,`small`,`medium`],description:"Chip size. Inherited from the parent `FilterChipGroup` when omitted.",table:{type:{summary:`"extra-small" | "small" | "medium"`}}},appearance:{control:`radio`,options:[`outline`,`brand`,`filled`],description:`Chip appearance.`,table:{type:{summary:`"outline" | "brand" | "filled"`}}},dismissLabel:{control:`text`,description:`Accessible label for the dismiss (X) button.`,table:{type:{summary:`string | undefined`}}},onToggle:{action:`onToggle`,description:`Fired when the chip body is activated to toggle whether the filter is applied.`,table:{type:{summary:`(value: string) => void`}}}},args:{value:`status:active`,children:`Status: Active`,selected:!0,appearance:`outline`},decorators:[e=>(0,c.jsx)(r,{"aria-label":`Filter chips`,children:(0,c.jsx)(e,{})})]},u={},d={args:{selected:!1}},f={args:{disabled:!0}},p=[{value:`status:active`,label:`Status: Active`,selected:!0},{value:`priority:high`,label:`Priority: High`,selected:!0},{value:`region:emea`,label:`Region: EMEA`,selected:!1}],m={decorators:[],render:()=>(0,c.jsx)(o,{initial:p,ariaLabel:`Active filters`})},h={decorators:[],render:()=>(0,c.jsx)(o,{ariaLabel:`Sizes`,initial:[{value:`xs`,label:`Extra small`,size:`extra-small`,selected:!0},{value:`sm`,label:`Small`,size:`small`,selected:!0},{value:`md`,label:`Medium`,size:`medium`,selected:!0}]})},g={decorators:[],render:()=>(0,c.jsx)(o,{ariaLabel:`Appearances`,initial:[{value:`outline`,label:`Outline`,appearance:`outline`,selected:!1},{value:`brand`,label:`Brand`,appearance:`brand`,selected:!1},{value:`filled`,label:`Filled`,appearance:`filled`,selected:!1}]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source},description:{story:`A single chip in the applied (selected) state.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false
  }
}`,...d.parameters?.docs?.source},description:{story:`The chip toggled off — present but not currently applied.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...f.parameters?.docs?.source},description:{story:`A non-interactive chip.`,...f.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: [],
  render: () => <InteractiveChips initial={INITIAL_CHIPS} ariaLabel="Active filters" />
}`,...m.parameters?.docs?.source},description:{story:`A full group wired with state. Click a chip body to toggle whether the filter
is applied; click the X to remove it.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: [],
  render: () => <InteractiveChips ariaLabel="Sizes" initial={[{
    value: "xs",
    label: "Extra small",
    size: "extra-small",
    selected: true
  }, {
    value: "sm",
    label: "Small",
    size: "small",
    selected: true
  }, {
    value: "md",
    label: "Medium",
    size: "medium",
    selected: true
  }]} />
}`,...h.parameters?.docs?.source},description:{story:`Available chip sizes. Click to toggle, X to remove.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  decorators: [],
  render: () => <InteractiveChips ariaLabel="Appearances" initial={[{
    value: "outline",
    label: "Outline",
    appearance: "outline",
    selected: false
  }, {
    value: "brand",
    label: "Brand",
    appearance: "brand",
    selected: false
  }, {
    value: "filled",
    label: "Filled",
    appearance: "filled",
    selected: false
  }]} />
}`,...g.parameters?.docs?.source},description:{story:`Available chip appearances. Click to toggle, X to remove.`,...g.parameters?.docs?.description}}},_=[`Default`,`Unselected`,`Disabled`,`Interactive`,`Sizes`,`Appearances`]})))()}v();export{g as Appearances,u as Default,f as Disabled,m as Interactive,h as Sizes,d as Unselected,_ as __namedExportsOrder,l as default};