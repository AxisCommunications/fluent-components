import{a as e,n as t}from"./chunk-BneVvdWh.js";import{It as n,Vt as r,Wt as i,ci as a,ii as o,qi as s,s as c,xi as l}from"./iframe-DN9Zhnka.js";var u,d,f,p,m=t((()=>{c(),u=e(s(),1),d=e(l(),1),f=a({root:{display:`flex`,flexDirection:`column`,gap:o.spacingVerticalS},disabled:{opacity:.5,pointerEvents:`none`}}),p=(0,u.forwardRef)(({label:e,error:t,hint:n,required:i=!1,disabled:a=!1,children:o,className:s,...c},l)=>{let u=f();return(0,d.jsx)(`div`,{ref:l,className:[u.root,a&&u.disabled,s].filter(Boolean).join(` `),...c,children:(0,d.jsx)(r,{label:e,required:i,hint:n,validationMessage:t,validationState:t?`error`:`none`,children:o})})}),p.displayName=`FormField`;try{p.displayName=`FormField`,p.__docgenInfo={description:'FormField - Composite form control combining label, input, and validation.\n\n**Fluent Guidelines Applied:**\n- Uses Fluent `makeStyles` + `tokens` exclusively\n- Semantic HTML: `<label>` with `htmlFor` binding\n- Accessibility: Error announced via `role="alert"`, input has `aria-invalid`\n- Composition: Accepts any form input component as children',displayName:`FormField`,filePath:`/home/runner/work/fluent-components/fluent-components/examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`}],description:`Label text displayed above the input`,name:`label`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`},required:!0,tags:{},type:{name:`string`}},error:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`}],description:`Error message; presence triggers error styling and aria-invalid`,name:`error`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`},required:!1,tags:{},type:{name:`string`}},hint:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`}],description:`Helper text displayed below input`,name:`hint`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`},required:!1,tags:{},type:{name:`string`}},required:{defaultValue:{value:`false`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`}],description:`Mark field as required (shows asterisk)`,name:`required`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`},required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`}],description:`Disabled state`,name:`disabled`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`},required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`}],description:`Input element or custom form control`,name:`children`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`},required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`}],description:`Optional CSS class`,name:`className`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`},required:!1,tags:{},type:{name:`string`}}},tags:{example:`<FormField label="Email" required>
  <input type="email" placeholder="Enter email" />
</FormField>
<FormField label="Password" error="Too short" hint="At least 8 chars">
  <input type="password" />
</FormField>`}}}catch{}}));function h(){let e=T(),[t,r]=(0,g.useState)({firstName:``,lastName:``,email:``,password:``,confirmPassword:``}),[a,o]=(0,g.useState)({}),[s,c]=(0,g.useState)(!1),l=t.password.length>=8,u=e=>t=>{r(n=>({...n,[e]:t.target.value})),a[e]&&o(t=>({...t,[e]:void 0}))},d=()=>{let e={};return t.firstName.trim()||(e.firstName=`First name is required`),t.lastName.trim()||(e.lastName=`Last name is required`),t.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)||(e.email=`Enter a valid email address`):e.email=`Email is required`,t.password?t.password.length<8&&(e.password=`Password must be at least 8 characters`):e.password=`Password is required`,t.confirmPassword?t.confirmPassword!==t.password&&(e.confirmPassword=`Passwords do not match`):e.confirmPassword=`Please confirm your password`,e},f=e=>{e.preventDefault();let t=d();if(Object.keys(t).length>0){o(t);return}c(!0)},m=()=>{r({firstName:``,lastName:``,email:``,password:``,confirmPassword:``}),o({}),c(!1)};return s?(0,_.jsxs)(`div`,{className:e.form,children:[(0,_.jsxs)(`p`,{className:e.success,children:[`✓ Registration successful! Welcome, `,t.firstName,`.`]}),(0,_.jsx)(`div`,{className:e.actions,children:(0,_.jsx)(i,{appearance:`secondary`,onClick:m,children:`Reset`})})]}):(0,_.jsxs)(`form`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`400px`},onSubmit:f,noValidate:!0,children:[(0,_.jsxs)(`div`,{className:e.nameRow,children:[(0,_.jsx)(p,{className:e.nameField,label:`First name`,required:!0,error:a.firstName,children:(0,_.jsx)(n,{style:{width:`100%`},value:t.firstName,onChange:u(`firstName`),placeholder:`Jane`})}),(0,_.jsx)(p,{className:e.nameField,label:`Last name`,required:!0,error:a.lastName,children:(0,_.jsx)(n,{style:{width:`100%`},value:t.lastName,onChange:u(`lastName`),placeholder:`Smith`})})]}),(0,_.jsx)(p,{label:`Email address`,required:!0,hint:`Used for login and notifications`,error:a.email,children:(0,_.jsx)(n,{style:{width:`100%`},type:`email`,value:t.email,onChange:u(`email`),placeholder:`jane@example.com`})}),(0,_.jsx)(p,{label:`Password`,required:!0,hint:`At least 8 characters`,error:a.password,children:(0,_.jsx)(n,{style:{width:`100%`},className:l?e.passwordValid:void 0,type:`password`,value:t.password,onChange:u(`password`),placeholder:`••••••••`})}),(0,_.jsx)(p,{label:`Confirm password`,required:!0,error:a.confirmPassword,children:(0,_.jsx)(n,{style:{width:`100%`},type:`password`,value:t.confirmPassword,onChange:u(`confirmPassword`),placeholder:`••••••••`})}),(0,_.jsxs)(`div`,{className:e.actions,children:[(0,_.jsx)(i,{appearance:`secondary`,type:`button`,onClick:m,children:`Clear`}),(0,_.jsx)(i,{appearance:`primary`,type:`submit`,children:`Create account`})]})]})}var g,_,v,y,b,x,S,C,w,T,E,D;t((()=>{c(),g=e(s(),1),m(),_=e(l(),1),v={title:`UI patterns/Form Field`,component:p,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:'Form Field Component\n\nA composite form control combining label, input, validation messaging, and hints.\n\n**Fluent Guidelines Applied:**\n- Semantic HTML: `<label>` with `htmlFor` binding\n- Accessibility: Error messages with `role="alert"`, `aria-invalid` on error\n- Token-driven styling via `makeStyles` + Fluent tokens exclusively\n- Composition: Accepts any form input as children'}}},argTypes:{label:{control:`text`,description:`Label text displayed above input`},error:{control:`text`,description:`Error message; presence indicates error state and triggers aria-invalid`},hint:{control:`text`,description:`Helper text displayed below input (only when no error)`},required:{control:`boolean`,description:`Show required asterisk indicator`},disabled:{control:`boolean`,description:`Disable input and prevent interaction`}}},y={args:{label:`Email Address`,hint:`We'll never share your email`},render:e=>(0,_.jsx)(`div`,{style:{minWidth:`300px`},children:(0,_.jsx)(p,{...e,children:(0,_.jsx)(n,{type:`email`,placeholder:`Enter your email`})})})},b={args:{label:`Full Name`,required:!0,hint:`Legal name as shown on ID`},render:e=>(0,_.jsx)(`div`,{style:{minWidth:`300px`},children:(0,_.jsx)(p,{...e,children:(0,_.jsx)(n,{type:`text`,placeholder:`Enter your name`,required:!0})})})},x={args:{label:`Password`,error:`Password must be at least 8 characters`},render:e=>(0,_.jsx)(`div`,{style:{minWidth:`300px`},children:(0,_.jsx)(p,{...e,children:(0,_.jsx)(n,{type:`password`,placeholder:`Enter password`})})}),play:async({canvasElement:e})=>{e.querySelector(`[role="alert"]`)||console.warn(`FormField: Error message should have role="alert" for screen reader announcement`)}},S={args:{label:`Email Address`,disabled:!0,hint:`This field cannot be modified`},render:e=>(0,_.jsx)(`div`,{style:{minWidth:`300px`},children:(0,_.jsx)(p,{...e,children:(0,_.jsx)(n,{type:`email`,placeholder:`Enter email`,disabled:!0,defaultValue:`user@example.com`})})})},C={render:()=>(0,_.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`32px`,padding:`24px`},children:[(0,_.jsx)(p,{label:`Default`,hint:`This is a hint`,children:(0,_.jsx)(n,{type:`text`,placeholder:`Text input`})}),(0,_.jsx)(p,{label:`Required`,required:!0,hint:`Marked as required`,children:(0,_.jsx)(n,{type:`email`,placeholder:`Email input`,required:!0})}),(0,_.jsx)(p,{label:`Error`,error:`This field has an error`,children:(0,_.jsx)(n,{type:`text`,placeholder:`With error`})}),(0,_.jsx)(p,{label:`Disabled`,disabled:!0,hint:`Cannot be edited`,children:(0,_.jsx)(n,{type:`text`,placeholder:`Disabled`,disabled:!0,defaultValue:`Read-only`})})]})},w={render:e=>(0,_.jsx)(`div`,{style:{minWidth:`300px`},children:(0,_.jsx)(p,{...e,children:(0,_.jsx)(n,{type:`text`,placeholder:`Interactive input`})})})},T=a({form:{display:`flex`,flexDirection:`column`,gap:o.spacingVerticalM},nameRow:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:o.spacingHorizontalS,alignItems:`start`},nameField:{width:`100%`,minWidth:0},actions:{display:`flex`,justifyContent:`flex-end`,gap:o.spacingHorizontalS,paddingTop:o.spacingVerticalS},passwordValid:{"--colorCompoundBrandStroke":o.colorStatusSuccessForeground1,"--colorCompoundBrandStrokePressed":o.colorStatusSuccessForeground1,selectors:{"&::after":{borderBottomColor:`${o.colorStatusSuccessForeground1} !important`},"&:focus-within::after":{borderBottomColor:`${o.colorStatusSuccessForeground1} !important`},"&:focus-within:active::after":{borderBottomColor:`${o.colorStatusSuccessForeground1} !important`}}},success:{color:o.colorStatusSuccessForeground1,fontSize:o.fontSizeBase200,textAlign:`center`,paddingTop:o.spacingVerticalS}}),E={name:`Registration form`,parameters:{layout:`centered`},render:()=>(0,_.jsx)(h,{})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    hint: "We'll never share your email"
  },
  render: args => <div style={{
    minWidth: "300px"
  }}>
      <FormField {...args}>
        <Input type="email" placeholder="Enter your email" />
      </FormField>
    </div>
}`,...y.parameters?.docs?.source},description:{story:`Default form field with label and hint text.
Primary reference for basic usage.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Full Name",
    required: true,
    hint: "Legal name as shown on ID"
  },
  render: args => <div style={{
    minWidth: "300px"
  }}>
      <FormField {...args}>
        <Input type="text" placeholder="Enter your name" required />
      </FormField>
    </div>
}`,...b.parameters?.docs?.source},description:{story:`Required field showing asterisk indicator.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    error: "Password must be at least 8 characters"
  },
  render: args => <div style={{
    minWidth: "300px"
  }}>
      <FormField {...args}>
        <Input type="password" placeholder="Enter password" />
      </FormField>
    </div>,
  play: async ({
    canvasElement
  }) => {
    // Verify error accessibility
    const errorAlert = canvasElement.querySelector('[role="alert"]');
    if (!errorAlert) {
      console.warn('FormField: Error message should have role="alert" for screen reader announcement');
    }
  }
}`,...x.parameters?.docs?.source},description:{story:'Error state with validation message.\nDemonstrates accessibility: error has `role="alert"`,\ninput will have `aria-invalid="true"`.',...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    disabled: true,
    hint: "This field cannot be modified"
  },
  render: args => <div style={{
    minWidth: "300px"
  }}>
      <FormField {...args}>
        <Input type="email" placeholder="Enter email" disabled defaultValue="user@example.com" />
      </FormField>
    </div>
}`,...S.parameters?.docs?.source},description:{story:`Disabled state.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "32px",
    padding: "24px"
  }}>
      <FormField label="Default" hint="This is a hint">
        <Input type="text" placeholder="Text input" />
      </FormField>

      <FormField label="Required" required hint="Marked as required">
        <Input type="email" placeholder="Email input" required />
      </FormField>

      <FormField label="Error" error="This field has an error">
        <Input type="text" placeholder="With error" />
      </FormField>

      <FormField label="Disabled" disabled hint="Cannot be edited">
        <Input type="text" placeholder="Disabled" disabled defaultValue="Read-only" />
      </FormField>
    </div>
}`,...C.parameters?.docs?.source},description:{story:`All variants side-by-side for comparison.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    minWidth: "300px"
  }}>
      <FormField {...args}>
        <Input type="text" placeholder="Interactive input" />
      </FormField>
    </div>
}`,...w.parameters?.docs?.source},description:{story:`Interactive story with all controls exposed.`,...w.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Registration form",
  parameters: {
    layout: "centered"
  },
  render: () => <RegistrationForm />
}`,...E.parameters?.docs?.source},description:{story:`A complete registration form with client-side validation.
Required fields show errors on submit; each error clears as the user types.`,...E.parameters?.docs?.description}}},D=[`Default`,`Required`,`WithError`,`Disabled`,`AllVariants`,`Interactive`,`RegistrationFormStory`]}))();export{C as AllVariants,y as Default,S as Disabled,w as Interactive,E as RegistrationFormStory,b as Required,x as WithError,D as __namedExportsOrder,v as default};