import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{o as n,t as r}from"./chunk-13-BG-JR2-O.js";import{m as i,u as a}from"./chunk-21-BRLQXooq.js";import{n as o,t as s}from"./SectionHeader-0loaWbuu.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),i(),o(),c=t(),l={title:`UI patterns/Section Header`,component:s,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"An advanced h2 pattern for section-level page content. All props are optional: use `title`, `description`, `meta`, and `actions` only when the section needs them, and omit everything for a no-op render.\n\n<p align='right'><a href='https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=25-18'><img width='240' src='./figma-global-components-cover.svg' alt='Open in Figma — AXIS Fluent Global components' /></a></p>"}}},argTypes:{title:{control:`text`,description:`Optional h2 heading for the current section.`,table:{type:{summary:`string | undefined`}}},description:{control:`text`,description:`Optional supporting copy shown below the h2 heading.`,table:{type:{summary:`string | undefined`}}},meta:{control:`text`,description:`Optional compact label shown above the heading.`,table:{type:{summary:`string | undefined`}}},actions:{control:`object`,description:"Optional local action buttons. Each action object supports optional `label`, `onClick`, `icon`, `appearance`, and `disabled` fields. Actions without a label are ignored.",table:{type:{summary:`Array<{ label?: string; onClick?: () => void; icon?: ReactElement | null; appearance?: 'primary' | 'secondary' | 'subtle' | 'transparent'; disabled?: boolean }> | undefined`}}},className:{control:`text`,description:`Optional CSS class applied to the root element.`,table:{type:{summary:`string | undefined`}}}},args:{meta:`Current section`,title:`Deployments`,description:`Use this advanced h2 to introduce the active section, clarify the task, and provide local section actions without repeating page-level identity.`,actions:[{label:`Refresh`,icon:(0,c.jsx)(a,{}),appearance:`secondary`,onClick:()=>console.log(`Refresh`)},{label:`Add target`,icon:(0,c.jsx)(r,{}),appearance:`secondary`,onClick:()=>console.log(`Add target`)}]}},u={parameters:{docs:{description:{story:`Full-featured with all props: meta label, title, description, and actions.`}}},args:{meta:`Current section`,title:`Deployments`,description:`Use this advanced h2 to introduce the active section, clarify the task, and provide local section actions without repeating page-level identity.`,actions:[{label:`Refresh`,icon:(0,c.jsx)(a,{}),appearance:`secondary`,onClick:()=>console.log(`Refresh`)},{label:`Add target`,icon:(0,c.jsx)(r,{}),appearance:`secondary`,onClick:()=>console.log(`Add target`)}]}},d={parameters:{docs:{description:{story:`Only a title, no meta, description, or actions.`}}},args:{title:`Deployments`,description:void 0,meta:void 0,actions:void 0}},f={parameters:{docs:{description:{story:`Title with actions, no meta or description.`}}},args:{title:`Deployments`,description:void 0,meta:void 0,actions:[{label:`Refresh`,icon:(0,c.jsx)(a,{}),appearance:`secondary`,onClick:()=>console.log(`Refresh`)},{label:`Add target`,icon:(0,c.jsx)(r,{}),appearance:`secondary`,onClick:()=>console.log(`Add target`)}]}},p={parameters:{docs:{description:{story:`Meta, title, and description, but no actions.`}}},args:{meta:`Current section`,title:`Deployments`,description:`Section with meta, title, and description but no action buttons.`,actions:void 0}},m={parameters:{docs:{description:{story:`Meta, title, and actions, but no description.`}}},args:{meta:`Current section`,title:`Deployments`,description:void 0,actions:[{label:`Refresh`,icon:(0,c.jsx)(a,{}),appearance:`secondary`,onClick:()=>console.log(`Refresh`)},{label:`Add target`,icon:(0,c.jsx)(r,{}),appearance:`secondary`,onClick:()=>console.log(`Add target`)}]}},h={parameters:{docs:{description:{story:`Only a title, no meta, description, or actions.`}}},args:{title:`Deployments`,description:void 0,meta:void 0,actions:void 0}},g={parameters:{docs:{description:{story:`Title with meta label, no description or actions.`}}},args:{meta:`Current section`,title:`Deployments`,description:void 0,actions:void 0}},_={parameters:{docs:{description:{story:`Meta label with title and description, but no actions.`}}},args:{meta:`Current section`,title:`Deployments`,description:`Section with meta text and description but no actions.`,actions:void 0}},v={parameters:{docs:{description:{story:`Meta label with actions, but no title or description.`}}},args:{meta:`Quick actions`,title:void 0,description:void 0,actions:[{label:`Refresh`,icon:(0,c.jsx)(a,{}),appearance:`secondary`,onClick:()=>console.log(`Refresh`)},{label:`Add target`,icon:(0,c.jsx)(r,{}),appearance:`secondary`,onClick:()=>console.log(`Add target`)}]}},y={parameters:{docs:{description:{story:`All props undefined, component renders null with no visual presence.`}}},args:{title:void 0,description:void 0,meta:void 0,actions:void 0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Full-featured with all props: meta label, title, description, and actions."
      }
    }
  },
  args: {
    meta: "Current section",
    title: "Deployments",
    description: "Use this advanced h2 to introduce the active section, clarify the task, and provide local section actions without repeating page-level identity.",
    actions: [{
      label: "Refresh",
      icon: <ArrowSyncRegular />,
      appearance: "secondary",
      onClick: () => console.log("Refresh")
    }, {
      label: "Add target",
      icon: <AddRegular />,
      appearance: "secondary",
      onClick: () => console.log("Add target")
    }]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Only a title, no meta, description, or actions."
      }
    }
  },
  args: {
    title: "Deployments",
    description: undefined,
    meta: undefined,
    actions: undefined
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Title with actions, no meta or description."
      }
    }
  },
  args: {
    title: "Deployments",
    description: undefined,
    meta: undefined,
    actions: [{
      label: "Refresh",
      icon: <ArrowSyncRegular />,
      appearance: "secondary",
      onClick: () => console.log("Refresh")
    }, {
      label: "Add target",
      icon: <AddRegular />,
      appearance: "secondary",
      onClick: () => console.log("Add target")
    }]
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Meta, title, and description, but no actions."
      }
    }
  },
  args: {
    meta: "Current section",
    title: "Deployments",
    description: "Section with meta, title, and description but no action buttons.",
    actions: undefined
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Meta, title, and actions, but no description."
      }
    }
  },
  args: {
    meta: "Current section",
    title: "Deployments",
    description: undefined,
    actions: [{
      label: "Refresh",
      icon: <ArrowSyncRegular />,
      appearance: "secondary",
      onClick: () => console.log("Refresh")
    }, {
      label: "Add target",
      icon: <AddRegular />,
      appearance: "secondary",
      onClick: () => console.log("Add target")
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Only a title, no meta, description, or actions."
      }
    }
  },
  args: {
    title: "Deployments",
    description: undefined,
    meta: undefined,
    actions: undefined
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Title with meta label, no description or actions."
      }
    }
  },
  args: {
    meta: "Current section",
    title: "Deployments",
    description: undefined,
    actions: undefined
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Meta label with title and description, but no actions."
      }
    }
  },
  args: {
    meta: "Current section",
    title: "Deployments",
    description: "Section with meta text and description but no actions.",
    actions: undefined
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Meta label with actions, but no title or description."
      }
    }
  },
  args: {
    meta: "Quick actions",
    title: undefined,
    description: undefined,
    actions: [{
      label: "Refresh",
      icon: <ArrowSyncRegular />,
      appearance: "secondary",
      onClick: () => console.log("Refresh")
    }, {
      label: "Add target",
      icon: <AddRegular />,
      appearance: "secondary",
      onClick: () => console.log("Add target")
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "All props undefined, component renders null with no visual presence."
      }
    }
  },
  args: {
    title: undefined,
    description: undefined,
    meta: undefined,
    actions: undefined
  }
}`,...y.parameters?.docs?.source}}},b=[`CurrentSectionHeader`,`Minimal`,`WithActionsOnly`,`WithoutActions`,`WithoutDescription`,`TitleOnly`,`TitleAndMeta`,`WithMetaAndDescription`,`ActionsWithoutTitle`,`Empty`]})))()}x();export{v as ActionsWithoutTitle,u as CurrentSectionHeader,y as Empty,d as Minimal,g as TitleAndMeta,h as TitleOnly,f as WithActionsOnly,_ as WithMetaAndDescription,p as WithoutActions,m as WithoutDescription,b as __namedExportsOrder,l as default};