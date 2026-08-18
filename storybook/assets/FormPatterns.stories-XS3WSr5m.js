import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{H as n,U as r,n as i,t as a}from"./tokens-BFFPz-AV.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Field-BIUVht2p.js";import{n as l,t as u}from"./Button-iGI8Q_IW.js";import{n as d,t as f}from"./Input-DI9Ri_ON.js";var p,m,h,g;function _(){return(_=e((()=>{s(),n(),a(),p=t(),m=o(),h=r({root:{display:`flex`,flexDirection:`column`,gap:i.spacingVerticalS},disabled:{opacity:.5,pointerEvents:`none`}}),g=(0,p.forwardRef)(({label:e,error:t,hint:n,required:r=!1,disabled:i=!1,children:a,className:o,...s},l)=>{let u=h();return(0,m.jsx)(`div`,{ref:l,className:[u.root,i&&u.disabled,o].filter(Boolean).join(` `),...s,children:(0,m.jsx)(c,{label:e,required:r,hint:n,validationMessage:t,validationState:t?`error`:`none`,children:a})})}),g.displayName=`FormField`;try{g.displayName=`FormField`,g.__docgenInfo={description:'FormField - Composite form control combining label, input, and validation.\n\n**Fluent Guidelines Applied:**\n- Uses Fluent `makeStyles` + `tokens` exclusively\n- Semantic HTML: `<label>` with `htmlFor` binding\n- Accessibility: Error announced via `role="alert"`, input has `aria-invalid`\n- Composition: Accepts any form input component as children',displayName:`FormField`,filePath:`/home/runner/work/fluent-components/fluent-components/examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`}],description:`Label text displayed above the input`,name:`label`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`},required:!0,tags:{},type:{name:`string`}},error:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`}],description:`Error message; presence triggers error styling and aria-invalid`,name:`error`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`},required:!1,tags:{},type:{name:`string`}},hint:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`}],description:`Helper text displayed below input`,name:`hint`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`},required:!1,tags:{},type:{name:`string`}},required:{defaultValue:{value:`false`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`}],description:`Mark field as required (shows asterisk)`,name:`required`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`},required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`}],description:`Disabled state`,name:`disabled`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`},required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`}],description:`Input element or custom form control`,name:`children`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`},required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`}],description:`Optional CSS class`,name:`className`,parent:{fileName:`examples/src/storybook/ui-patterns/components/composites/FormField.tsx`,name:`FormFieldProps`},required:!1,tags:{},type:{name:`string`}}},tags:{example:`<FormField label="Email" required>
  <input type="email" placeholder="Enter email" />
</FormField>
<FormField label="Password" error="Too short" hint="At least 8 chars">
  <input type="password" />
</FormField>`}}}catch{}})))()}function v(){let e=O(),[t,n]=(0,y.useState)({firstName:``,lastName:``,email:``,password:``,confirmPassword:``}),[r,i]=(0,y.useState)({}),[a,o]=(0,y.useState)(!1),s=t.password.length>=8,c=e=>t=>{n(n=>({...n,[e]:t.target.value})),r[e]&&i(t=>({...t,[e]:void 0}))},l=()=>{let e={};return t.firstName.trim()||(e.firstName=`First name is required`),t.lastName.trim()||(e.lastName=`Last name is required`),t.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)||(e.email=`Enter a valid email address`):e.email=`Email is required`,t.password?t.password.length<8&&(e.password=`Password must be at least 8 characters`):e.password=`Password is required`,t.confirmPassword?t.confirmPassword!==t.password&&(e.confirmPassword=`Passwords do not match`):e.confirmPassword=`Please confirm your password`,e},d=e=>{e.preventDefault();let t=l();if(Object.keys(t).length>0){i(t);return}o(!0)},p=()=>{n({firstName:``,lastName:``,email:``,password:``,confirmPassword:``}),i({}),o(!1)};return a?(0,b.jsxs)(`div`,{className:e.form,children:[(0,b.jsxs)(`p`,{className:e.success,children:[`✓ Registration successful! Welcome, `,t.firstName,`.`]}),(0,b.jsx)(`div`,{className:e.actions,children:(0,b.jsx)(u,{appearance:`secondary`,onClick:p,children:`Reset`})})]}):(0,b.jsxs)(`form`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`400px`},onSubmit:d,noValidate:!0,children:[(0,b.jsxs)(`div`,{className:e.nameRow,children:[(0,b.jsx)(g,{className:e.nameField,label:`First name`,required:!0,error:r.firstName,children:(0,b.jsx)(f,{style:{width:`100%`},value:t.firstName,onChange:c(`firstName`),placeholder:`Jane`})}),(0,b.jsx)(g,{className:e.nameField,label:`Last name`,required:!0,error:r.lastName,children:(0,b.jsx)(f,{style:{width:`100%`},value:t.lastName,onChange:c(`lastName`),placeholder:`Smith`})})]}),(0,b.jsx)(g,{label:`Email address`,required:!0,hint:`Used for login and notifications`,error:r.email,children:(0,b.jsx)(f,{style:{width:`100%`},type:`email`,value:t.email,onChange:c(`email`),placeholder:`jane@example.com`})}),(0,b.jsx)(g,{label:`Password`,required:!0,hint:`At least 8 characters`,error:r.password,children:(0,b.jsx)(f,{style:{width:`100%`},className:s?e.passwordValid:void 0,type:`password`,value:t.password,onChange:c(`password`),placeholder:`••••••••`})}),(0,b.jsx)(g,{label:`Confirm password`,required:!0,error:r.confirmPassword,children:(0,b.jsx)(f,{style:{width:`100%`},type:`password`,value:t.confirmPassword,onChange:c(`confirmPassword`),placeholder:`••••••••`})}),(0,b.jsxs)(`div`,{className:e.actions,children:[(0,b.jsx)(u,{appearance:`secondary`,type:`button`,onClick:p,children:`Clear`}),(0,b.jsx)(u,{appearance:`primary`,type:`submit`,children:`Create account`})]})]})}var y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{l(),d(),n(),a(),y=t(),_(),b=o(),x={title:`UI patterns/Form Field`,component:g,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:'Form Field Component\n\nA composite form control combining label, input, validation messaging, and hints.\n\n**Fluent Guidelines Applied:**\n- Semantic HTML: `<label>` with `htmlFor` binding\n- Accessibility: Error messages with `role="alert"`, `aria-invalid` on error\n- Token-driven styling via `makeStyles` + Fluent tokens exclusively\n- Composition: Accepts any form input as children'}}},argTypes:{label:{control:`text`,description:`Label text displayed above input`},error:{control:`text`,description:`Error message; presence indicates error state and triggers aria-invalid`},hint:{control:`text`,description:`Helper text displayed below input (only when no error)`},required:{control:`boolean`,description:`Show required asterisk indicator`},disabled:{control:`boolean`,description:`Disable input and prevent interaction`}}},S={args:{label:`Email Address`,hint:`We'll never share your email`},render:e=>(0,b.jsx)(`div`,{style:{minWidth:`300px`},children:(0,b.jsx)(g,{...e,children:(0,b.jsx)(f,{type:`email`,placeholder:`Enter your email`})})})},C={args:{label:`Full Name`,required:!0,hint:`Legal name as shown on ID`},render:e=>(0,b.jsx)(`div`,{style:{minWidth:`300px`},children:(0,b.jsx)(g,{...e,children:(0,b.jsx)(f,{type:`text`,placeholder:`Enter your name`,required:!0})})})},w={args:{label:`Password`,error:`Password must be at least 8 characters`},render:e=>(0,b.jsx)(`div`,{style:{minWidth:`300px`},children:(0,b.jsx)(g,{...e,children:(0,b.jsx)(f,{type:`password`,placeholder:`Enter password`})})}),play:async({canvasElement:e})=>{e.querySelector(`[role="alert"]`)||console.warn(`FormField: Error message should have role="alert" for screen reader announcement`)}},T={args:{label:`Email Address`,disabled:!0,hint:`This field cannot be modified`},render:e=>(0,b.jsx)(`div`,{style:{minWidth:`300px`},children:(0,b.jsx)(g,{...e,children:(0,b.jsx)(f,{type:`email`,placeholder:`Enter email`,disabled:!0,defaultValue:`user@example.com`})})})},E={render:()=>(0,b.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`32px`,padding:`24px`},children:[(0,b.jsx)(g,{label:`Default`,hint:`This is a hint`,children:(0,b.jsx)(f,{type:`text`,placeholder:`Text input`})}),(0,b.jsx)(g,{label:`Required`,required:!0,hint:`Marked as required`,children:(0,b.jsx)(f,{type:`email`,placeholder:`Email input`,required:!0})}),(0,b.jsx)(g,{label:`Error`,error:`This field has an error`,children:(0,b.jsx)(f,{type:`text`,placeholder:`With error`})}),(0,b.jsx)(g,{label:`Disabled`,disabled:!0,hint:`Cannot be edited`,children:(0,b.jsx)(f,{type:`text`,placeholder:`Disabled`,disabled:!0,defaultValue:`Read-only`})})]})},D={render:e=>(0,b.jsx)(`div`,{style:{minWidth:`300px`},children:(0,b.jsx)(g,{...e,children:(0,b.jsx)(f,{type:`text`,placeholder:`Interactive input`})})})},O=r({form:{display:`flex`,flexDirection:`column`,gap:i.spacingVerticalM},nameRow:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:i.spacingHorizontalS,alignItems:`start`},nameField:{width:`100%`,minWidth:0},actions:{display:`flex`,justifyContent:`flex-end`,gap:i.spacingHorizontalS,paddingTop:i.spacingVerticalS},passwordValid:{"--colorCompoundBrandStroke":i.colorStatusSuccessForeground1,"--colorCompoundBrandStrokePressed":i.colorStatusSuccessForeground1,selectors:{"&::after":{borderBottomColor:`${i.colorStatusSuccessForeground1} !important`},"&:focus-within::after":{borderBottomColor:`${i.colorStatusSuccessForeground1} !important`},"&:focus-within:active::after":{borderBottomColor:`${i.colorStatusSuccessForeground1} !important`}}},success:{color:i.colorStatusSuccessForeground1,fontSize:i.fontSizeBase200,textAlign:`center`,paddingTop:i.spacingVerticalS}}),k={name:`Registration form`,parameters:{layout:`centered`},render:()=>(0,b.jsx)(v,{})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`Default form field with label and hint text.
Primary reference for basic usage.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`Required field showing asterisk indicator.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:'Error state with validation message.\nDemonstrates accessibility: error has `role="alert"`,\ninput will have `aria-invalid="true"`.',...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:`Disabled state.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`All variants side-by-side for comparison.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    minWidth: "300px"
  }}>
      <FormField {...args}>
        <Input type="text" placeholder="Interactive input" />
      </FormField>
    </div>
}`,...D.parameters?.docs?.source},description:{story:`Interactive story with all controls exposed.`,...D.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Registration form",
  parameters: {
    layout: "centered"
  },
  render: () => <RegistrationForm />
}`,...k.parameters?.docs?.source},description:{story:`A complete registration form with client-side validation.
Required fields show errors on submit; each error clears as the user types.`,...k.parameters?.docs?.description}}},A=[`Default`,`Required`,`WithError`,`Disabled`,`AllVariants`,`Interactive`,`RegistrationFormStory`]})))()}j();export{E as AllVariants,S as Default,T as Disabled,D as Interactive,k as RegistrationFormStory,C as Required,w as WithError,A as __namedExportsOrder,x as default};