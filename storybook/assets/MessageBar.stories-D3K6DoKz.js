import{a as e,n as t}from"./chunk-BneVvdWh.js";import{En as n,Fr as r,Ft as i,Gr as a,Ir as o,Jn as s,Kr as c,Lr as l,M as u,Rr as d,Un as f,Wt as p,Zt as m,_ as h,b as g,ci as _,g as v,ii as y,mt as b,qi as x,qn as S,s as C,v as w,xi as ee,y as T}from"./iframe-CzIYuUoR.js";import{n as E,t as D}from"./src-BIuL0L29.js";import{n as O,t as k}from"./FullPageHeader-Ddg6J0H1.js";import{n as A,r as j,t as M}from"./SuiteHeader-BARzfsk8.js";function N(e){return e===`error`?`assertive`:`polite`}function P({intent:e,shape:t}){let n=z[e];return(0,L.jsx)(g,{intent:e,shape:t,politeness:N(e),children:(0,L.jsxs)(h,{children:[(0,L.jsx)(T,{children:n.title}),` `,n.body]})})}function F({className:e,style:t}){let[n,r]=(0,I.useState)(`home`);return(0,L.jsx)(E,{className:e,style:t,items:V,footerItems:H,collapsible:!0,expandedWidth:U,defaultOpenItemIds:[`home`,`alerts`,`settings`],selectedItemId:n,onSelect:r})}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{D(),C(),n(),I=e(x(),1),O(),j(),L=e(ee(),1),R=_({stack:{display:`flex`,flexDirection:`column`,gap:y.spacingVerticalM,width:`100%`,maxWidth:`960px`},sectionLabel:{display:`block`,marginBottom:y.spacingVerticalS,fontWeight:y.fontWeightSemibold,color:y.colorNeutralForeground2},section:{display:`flex`,flexDirection:`column`,gap:y.spacingVerticalXL,width:`100%`,maxWidth:`960px`},appShell:{display:`flex`,flexDirection:`column`,width:`100%`,maxWidth:`960px`,borderRadius:y.borderRadiusLarge,border:`1px solid ${y.colorNeutralStroke2}`,overflow:`hidden`,backgroundColor:y.colorNeutralBackground1},appBody:{display:`flex`,flexDirection:`column`,gap:y.spacingVerticalS,padding:y.spacingHorizontalXL,minHeight:`160px`},appBodyTitle:{fontSize:y.fontSizeBase500,fontWeight:y.fontWeightSemibold,color:y.colorNeutralForeground1},appBodyText:{color:y.colorNeutralForeground2},card:{display:`flex`,flexDirection:`column`,gap:y.spacingVerticalL,width:`100%`,maxWidth:`640px`,padding:y.spacingHorizontalXL,borderRadius:y.borderRadiusXLarge,backgroundColor:y.colorNeutralBackground1,boxShadow:y.shadow16},cardTitle:{fontSize:y.fontSizeBase500,fontWeight:y.fontWeightSemibold,color:y.colorNeutralForeground1},cardText:{color:y.colorNeutralForeground2},fullShell:{height:`100vh`,display:`grid`,gridTemplateRows:`48px auto 1fr`,backgroundColor:y.colorNeutralBackground4,overflow:`hidden`},fullSuiteHeader:{position:`sticky`,top:0,zIndex:10,backgroundColor:y.colorNeutralBackground4},fullBody:{minHeight:0,display:`flex`,flexDirection:`row`,overflow:`hidden`},fullRail:{flexShrink:0,height:`100%`},fullWorkspace:{flexGrow:1,minWidth:0,height:`100%`,display:`flex`,flexDirection:`column`,overflow:`hidden`,backgroundColor:y.colorNeutralBackground2},fullPageHeaderStack:{flexShrink:0,paddingTop:y.spacingVerticalS,paddingRight:y.spacingHorizontalXXL,paddingLeft:y.spacingHorizontalXXL,backgroundColor:y.colorNeutralBackground2},fullPageScroll:{minHeight:0,flex:1,overflow:`auto`,display:`flex`,flexDirection:`column`,gap:y.spacingVerticalL,paddingTop:y.spacingVerticalL,paddingRight:y.spacingHorizontalXXL,paddingBottom:y.spacingVerticalXXL,paddingLeft:y.spacingHorizontalXXL,backgroundColor:y.colorNeutralBackground2},scopeLabel:{fontSize:y.fontSizeBase200,fontWeight:y.fontWeightSemibold,color:y.colorNeutralForeground3,textTransform:`uppercase`,letterSpacing:`0.06em`},fullSection:{display:`flex`,flexDirection:`column`,gap:y.spacingVerticalM,padding:y.spacingHorizontalL,borderRadius:y.borderRadiusLarge,backgroundColor:y.colorNeutralBackground1,border:`1px solid ${y.colorNeutralStroke2}`},fullSectionTitle:{fontSize:y.fontSizeBase400,fontWeight:y.fontWeightSemibold,color:y.colorNeutralForeground1},fullCardGrid:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(240px, 1fr))`,gap:y.spacingHorizontalL},fullCard:{display:`flex`,flexDirection:`column`,gap:y.spacingVerticalS,padding:y.spacingHorizontalL},fullCardTitle:{fontSize:y.fontSizeBase300,fontWeight:y.fontWeightSemibold,color:y.colorNeutralForeground1},fullCardText:{color:y.colorNeutralForeground2,fontSize:y.fontSizeBase200}}),z={info:{title:`Scheduled maintenance`,body:`Background indexing runs tonight at 02:00. No action is required.`},success:{title:`Changes saved`,body:`Your configuration was updated and applied to all devices.`},warning:{title:`Certificate expiring`,body:`The TLS certificate for this device expires in 7 days. Renew it to avoid downtime.`},error:{title:`Connection failed`,body:`The device could not be reached. Check the network and try again.`}},B=[{id:`alerts`,icon:(0,L.jsx)(d,{}),ariaLabel:`Alerts`},{id:`settings`,icon:(0,L.jsx)(c,{}),ariaLabel:`Settings`}],V=[{id:`home`,label:`Home`,icon:(0,L.jsx)(s,{}),selectedIcon:(0,L.jsx)(S,{}),children:[{id:`home-overview`,label:`Overview`},{id:`home-activity`,label:`Activity`}]},{id:`alerts`,label:`Alerts`,icon:(0,L.jsx)(d,{}),selectedIcon:(0,L.jsx)(l,{}),children:[{id:`alerts-active`,label:`Active`},{id:`alerts-resolved`,label:`Resolved`}]},{id:`settings`,label:`Settings`,icon:(0,L.jsx)(c,{}),selectedIcon:(0,L.jsx)(a,{}),children:[{id:`settings-storage`,label:`Storage`},{id:`settings-security`,label:`Security`}]}],H=[{id:`site`,label:`Site`,icon:(0,L.jsx)(o,{}),selectedIcon:(0,L.jsx)(r,{})}],U=260,W={title:`UI patterns/Message Bar`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:'\nA message bar is an inline, persistent surface for status, notification, and system\nmessages. Built from native Fluent v9 `MessageBar` primitives.\n\nUse a **global** (full-width, `shape="square"`) bar for messages that affect the whole\npage, and a **container** (rounded) bar for messages scoped to a card, panel, or form\nsection. The `intent` prop drives semantic color and icon — never use raw colors.\n\nSet `politeness="assertive"` for errors and keep `polite` for everything else.\n        '}}}},G={name:`Intents (info / success / warning / error)`,render:()=>(0,L.jsx)(`div`,{className:R().stack,children:[`info`,`success`,`warning`,`error`].map(e=>(0,L.jsx)(P,{intent:e},e))})},K={name:`Global (full-width, app top)`,render:()=>{let e=R();return(0,L.jsxs)(`div`,{className:e.appShell,children:[(0,L.jsxs)(g,{intent:`warning`,shape:`square`,politeness:`polite`,children:[(0,L.jsxs)(h,{children:[(0,L.jsx)(T,{children:`Recurring warning`}),` Two devices report intermittent connectivity. Review their network settings.`]}),(0,L.jsx)(w,{containerAction:(0,L.jsx)(p,{appearance:`transparent`,icon:(0,L.jsx)(f,{}),"aria-label":`Dismiss message`}),children:(0,L.jsx)(p,{children:`Review devices`})})]}),(0,L.jsxs)(`div`,{className:e.appBody,children:[(0,L.jsx)(b,{as:`h2`,className:e.appBodyTitle,children:`Dashboard`}),(0,L.jsx)(b,{className:e.appBodyText,children:`Page content sits below the global message bar.`})]})]})}},q={name:`Container level (inside a card)`,render:()=>{let e=R();return(0,L.jsxs)(`div`,{className:e.card,children:[(0,L.jsx)(b,{as:`h2`,className:e.cardTitle,children:`Network settings`}),(0,L.jsxs)(g,{intent:`error`,politeness:`assertive`,children:[(0,L.jsxs)(h,{children:[(0,L.jsx)(T,{children:`Couldn't apply settings`}),` The gateway rejected the new DNS configuration. Verify the address and try again.`]}),(0,L.jsx)(w,{children:(0,L.jsx)(p,{children:`Try again`})})]}),(0,L.jsx)(b,{className:e.cardText,children:`The rest of the form fields would appear here.`})]})}},J={name:`Placement hierarchy (app / page / section / card)`,parameters:{layout:`fullscreen`,docs:{description:{story:`A full suite shell — app header, navigation rail, and page header — hosting a message bar at each scope: app → page → section → card. Each bar sits at the boundary of the scope it applies to, so its width and placement signal what it affects.`}}},render:()=>{let e=R();return(0,L.jsxs)(`div`,{className:e.fullShell,children:[(0,L.jsx)(M,{className:e.fullSuiteHeader,productName:`Axis Management`,showSearch:!0,searchPlaceholder:`Search systems and devices`,launcherOrganizationItems:A,utilityActions:B}),(0,L.jsxs)(g,{intent:`error`,shape:`square`,politeness:`assertive`,children:[(0,L.jsxs)(h,{children:[(0,L.jsx)(T,{children:`App-wide service advisory`}),` The Americas region is experiencing degraded connectivity. Some devices may be unreachable.`]}),(0,L.jsx)(w,{containerAction:(0,L.jsx)(p,{appearance:`transparent`,icon:(0,L.jsx)(f,{}),"aria-label":`Dismiss message`}),children:(0,L.jsx)(p,{children:`Status page`})})]}),(0,L.jsxs)(`div`,{className:e.fullBody,children:[(0,L.jsx)(F,{className:e.fullRail,style:{height:`100%`}}),(0,L.jsxs)(`div`,{className:e.fullWorkspace,children:[(0,L.jsx)(`div`,{className:e.fullPageHeaderStack,children:(0,L.jsx)(k,{breadcrumbs:[{label:`Management`,onClick:()=>{}},{label:`Systems`}],title:`System Overview`,status:{label:`Operational`,meta:`All systems healthy`,color:`success`},tabs:[{value:`overview`,label:`Overview`},{value:`activity`,label:`Activity`}],defaultSelectedTab:`overview`})}),(0,L.jsxs)(`div`,{className:e.fullPageScroll,children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(b,{className:e.scopeLabel,children:`Page`}),(0,L.jsxs)(g,{intent:`warning`,politeness:`polite`,style:{marginTop:y.spacingVerticalXS},children:[(0,L.jsxs)(h,{children:[(0,L.jsx)(T,{children:`Scheduled maintenance`}),` A maintenance window is planned tonight at 02:00. Recording may be briefly unavailable.`]}),(0,L.jsx)(w,{containerAction:(0,L.jsx)(p,{appearance:`transparent`,icon:(0,L.jsx)(f,{}),"aria-label":`Dismiss message`}),children:(0,L.jsx)(p,{children:`View details`})})]})]}),(0,L.jsxs)(`section`,{className:e.fullSection,"aria-label":`Storage`,children:[(0,L.jsx)(b,{as:`h2`,className:e.fullSectionTitle,children:`Storage`}),(0,L.jsx)(b,{className:e.scopeLabel,children:`Section — Storage`}),(0,L.jsx)(g,{intent:`info`,politeness:`polite`,children:(0,L.jsxs)(h,{children:[(0,L.jsx)(T,{children:`Retention policy updated`}),` `,`Capacity planning for this section was recalculated for the new retention policy.`]})}),(0,L.jsxs)(`div`,{className:e.fullCardGrid,children:[(0,L.jsxs)(u,{className:e.fullCard,children:[(0,L.jsx)(b,{className:e.scopeLabel,children:`Card — Capacity`}),(0,L.jsx)(b,{className:e.fullCardTitle,children:`Node A1`}),(0,L.jsx)(g,{intent:`warning`,politeness:`polite`,children:(0,L.jsxs)(h,{children:[(0,L.jsx)(T,{children:`Approaching capacity`}),` `,`This node is at 89% utilization.`]})}),(0,L.jsx)(`div`,{children:(0,L.jsx)(m,{appearance:`tint`,color:`warning`,children:`Monitor`})})]}),(0,L.jsxs)(u,{className:e.fullCard,children:[(0,L.jsx)(b,{className:e.fullCardTitle,children:`Node B2`}),(0,L.jsx)(b,{className:e.fullCardText,children:`Operating normally at 42% utilization with full redundancy.`}),(0,L.jsx)(`div`,{children:(0,L.jsx)(m,{appearance:`tint`,color:`success`,children:`Healthy`})})]})]})]})]})]})]})]})}},Y={name:`With actions and dismiss`,render:()=>(0,L.jsx)(`div`,{className:R().stack,children:(0,L.jsxs)(g,{intent:`info`,politeness:`polite`,children:[(0,L.jsxs)(h,{children:[(0,L.jsx)(T,{children:`New firmware available`}),` Version 11.2 improves stability. `,(0,L.jsx)(i,{href:`#`,children:`Read the changelog`}),`.`]}),(0,L.jsxs)(w,{containerAction:(0,L.jsx)(p,{appearance:`transparent`,icon:(0,L.jsx)(f,{}),"aria-label":`Dismiss message`}),children:[(0,L.jsx)(p,{children:`Update now`}),(0,L.jsx)(p,{children:`Later`})]})]})})},X={name:`Single-line vs multiline`,render:()=>{let e=R(),t=`A scheduled maintenance window will temporarily take recording offline between 02:00 and 04:00. Connected cameras will reconnect automatically once the window completes, but live view may be unavailable during this period.`;return(0,L.jsxs)(`div`,{className:e.section,children:[(0,L.jsxs)(`div`,{className:e.stack,children:[(0,L.jsx)(b,{className:e.sectionLabel,children:`Single-line (default) — truncates`}),(0,L.jsxs)(g,{intent:`info`,politeness:`polite`,children:[(0,L.jsxs)(h,{children:[(0,L.jsx)(T,{children:`Maintenance`}),` `,t]}),(0,L.jsx)(w,{children:(0,L.jsx)(p,{children:`Details`})})]})]}),(0,L.jsxs)(`div`,{className:e.stack,children:[(0,L.jsx)(b,{className:e.sectionLabel,children:`Multiline — wraps`}),(0,L.jsxs)(g,{intent:`info`,politeness:`polite`,layout:`multiline`,children:[(0,L.jsxs)(h,{children:[(0,L.jsx)(T,{children:`Maintenance`}),` `,t]}),(0,L.jsxs)(w,{children:[(0,L.jsx)(p,{children:`Details`}),(0,L.jsx)(p,{children:`Dismiss`})]})]})]})]})}},Z={name:`Stacked group (dismissible)`,render:()=>{let e=R(),t=[{id:1,intent:`error`},{id:2,intent:`warning`},{id:3,intent:`success`},{id:4,intent:`info`}],[n,r]=(0,I.useState)(t),i=e=>r(t=>t.filter(t=>t.id!==e));return(0,L.jsxs)(`div`,{className:e.stack,children:[(0,L.jsx)(v,{animate:`both`,className:e.stack,children:n.map(e=>{let t=z[e.intent];return(0,L.jsxs)(g,{intent:e.intent,politeness:N(e.intent),children:[(0,L.jsxs)(h,{children:[(0,L.jsx)(T,{children:t.title}),` `,t.body]}),(0,L.jsx)(w,{containerAction:(0,L.jsx)(p,{appearance:`transparent`,icon:(0,L.jsx)(f,{}),"aria-label":`Dismiss message`,onClick:()=>i(e.id)})})]},e.id)})}),n.length===0&&(0,L.jsx)(p,{onClick:()=>r(t),children:`Reset messages`})]})}},Q={argTypes:{intent:{control:`select`,options:[`info`,`success`,`warning`,`error`],description:`Semantic intent driving color and icon.`},shape:{control:`inline-radio`,options:[`rounded`,`square`],description:`Rounded for container level, square for global/full-width.`},layout:{control:`inline-radio`,options:[`singleline`,`multiline`,`auto`],description:`Single-line truncates; multiline wraps.`},title:{control:`text`},body:{control:`text`}},args:{intent:`info`,shape:`rounded`,layout:`singleline`,title:`Heads up`,body:`This is a configurable message bar. Adjust the controls to explore states.`},render:e=>{let t=R(),n=e.intent;return(0,L.jsx)(`div`,{className:t.stack,children:(0,L.jsxs)(g,{intent:n,shape:e.shape,layout:e.layout,politeness:N(n),children:[(0,L.jsxs)(h,{children:[(0,L.jsx)(T,{children:e.title}),` `,e.body]}),(0,L.jsx)(w,{containerAction:(0,L.jsx)(p,{appearance:`transparent`,icon:(0,L.jsx)(f,{}),"aria-label":`Dismiss message`}),children:(0,L.jsx)(p,{children:`Action`})})]})})}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Intents (info / success / warning / error)",
  render: () => {
    const styles = useStyles();
    const intents: MessageBarIntent[] = ["info", "success", "warning", "error"];
    return <div className={styles.stack}>
        {intents.map(intent => <BasicBar key={intent} intent={intent} />)}
      </div>;
  }
}`,...G.parameters?.docs?.source},description:{story:"The four intents. `intent` controls the semantic color and leading icon, so the\nmeaning is conveyed without relying on color alone (the icon and title carry it too).",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Global (full-width, app top)",
  render: () => {
    const styles = useStyles();
    return <div className={styles.appShell}>
        <MessageBar intent="warning" shape="square" politeness="polite">
          <MessageBarBody>
            <MessageBarTitle>Recurring warning</MessageBarTitle> Two devices
            report intermittent connectivity. Review their network settings.
          </MessageBarBody>
          <MessageBarActions containerAction={<Button appearance="transparent" icon={<DismissRegular />} aria-label="Dismiss message" />}>
            <Button>Review devices</Button>
          </MessageBarActions>
        </MessageBar>
        <div className={styles.appBody}>
          <Text as="h2" className={styles.appBodyTitle}>
            Dashboard
          </Text>
          <Text className={styles.appBodyText}>
            Page content sits below the global message bar.
          </Text>
        </div>
      </div>;
  }
}`,...K.parameters?.docs?.source},description:{story:`**Global placement.** A full-width bar pinned to the top of an app shell. Use
\`shape="square"\` so the bar spans edge-to-edge with no rounded corners.

Reserve global bars for messages that affect the entire view — e.g. a service-wide
outage or a recurring system warning.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Container level (inside a card)",
  render: () => {
    const styles = useStyles();
    return <div className={styles.card}>
        <Text as="h2" className={styles.cardTitle}>
          Network settings
        </Text>
        <MessageBar intent="error" politeness="assertive">
          <MessageBarBody>
            <MessageBarTitle>Couldn't apply settings</MessageBarTitle> The
            gateway rejected the new DNS configuration. Verify the address and
            try again.
          </MessageBarBody>
          <MessageBarActions>
            <Button>Try again</Button>
          </MessageBarActions>
        </MessageBar>
        <Text className={styles.cardText}>
          The rest of the form fields would appear here.
        </Text>
      </div>;
  }
}`,...q.parameters?.docs?.source},description:{story:"**Container placement.** A rounded bar (the default `shape`) scoped to a card or\nform section. Use it for messages that relate only to the content of that container.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Placement hierarchy (app / page / section / card)",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "A full suite shell — app header, navigation rail, and page header — hosting a message bar at each scope: app → page → section → card. Each bar sits at the boundary of the scope it applies to, so its width and placement signal what it affects."
      }
    }
  },
  render: () => {
    const styles = useStyles();
    return <div className={styles.fullShell}>
        {/* Suite header — the top app bar. */}
        <SuiteHeader className={styles.fullSuiteHeader} productName="Axis Management" showSearch searchPlaceholder="Search systems and devices" launcherOrganizationItems={defaultLauncherOrganizationItems} utilityActions={headerUtilityActions} />

        {/* App scope — full width, edge-to-edge, directly below the app bar and
            spanning the rail. Reserve for the most severe, system-wide messages. */}
        <MessageBar intent="error" shape="square" politeness="assertive">
          <MessageBarBody>
            <MessageBarTitle>App-wide service advisory</MessageBarTitle> The
            Americas region is experiencing degraded connectivity. Some devices
            may be unreachable.
          </MessageBarBody>
          <MessageBarActions containerAction={<Button appearance="transparent" icon={<DismissRegular />} aria-label="Dismiss message" />}>
            <Button>Status page</Button>
          </MessageBarActions>
        </MessageBar>

        <div className={styles.fullBody}>
          <ShellRailNavigation className={styles.fullRail} style={{
          height: "100%"
        }} />

          <div className={styles.fullWorkspace}>
            {/* Page header. */}
            <div className={styles.fullPageHeaderStack}>
              <FullPageHeader breadcrumbs={[{
              label: "Management",
              onClick: () => {}
            }, {
              label: "Systems"
            }]} title="System Overview" status={{
              label: "Operational",
              meta: "All systems healthy",
              color: "success"
            }} tabs={[{
              value: "overview",
              label: "Overview"
            }, {
              value: "activity",
              label: "Activity"
            }]} defaultSelectedTab="overview" />
            </div>

            <div className={styles.fullPageScroll}>
              {/* Page scope — top of the page content, above all sections. */}
              <div>
                <Text className={styles.scopeLabel}>Page</Text>
                <MessageBar intent="warning" politeness="polite" style={{
                marginTop: tokens.spacingVerticalXS
              }}>
                  <MessageBarBody>
                    <MessageBarTitle>Scheduled maintenance</MessageBarTitle> A
                    maintenance window is planned tonight at 02:00. Recording
                    may be briefly unavailable.
                  </MessageBarBody>
                  <MessageBarActions containerAction={<Button appearance="transparent" icon={<DismissRegular />} aria-label="Dismiss message" />}>
                    <Button>View details</Button>
                  </MessageBarActions>
                </MessageBar>
              </div>

              {/* Section scope — top of one group of related content. */}
              <section className={styles.fullSection} aria-label="Storage">
                <Text as="h2" className={styles.fullSectionTitle}>
                  Storage
                </Text>
                <Text className={styles.scopeLabel}>Section — Storage</Text>
                <MessageBar intent="info" politeness="polite">
                  <MessageBarBody>
                    <MessageBarTitle>Retention policy updated</MessageBarTitle>{" "}
                    Capacity planning for this section was recalculated for the
                    new retention policy.
                  </MessageBarBody>
                </MessageBar>

                <div className={styles.fullCardGrid}>
                  {/* Card scope — inside a single card. */}
                  <Card className={styles.fullCard}>
                    <Text className={styles.scopeLabel}>Card — Capacity</Text>
                    <Text className={styles.fullCardTitle}>Node A1</Text>
                    <MessageBar intent="warning" politeness="polite">
                      <MessageBarBody>
                        <MessageBarTitle>Approaching capacity</MessageBarTitle>{" "}
                        This node is at 89% utilization.
                      </MessageBarBody>
                    </MessageBar>
                    <div>
                      <Badge appearance="tint" color="warning">
                        Monitor
                      </Badge>
                    </div>
                  </Card>

                  <Card className={styles.fullCard}>
                    <Text className={styles.fullCardTitle}>Node B2</Text>
                    <Text className={styles.fullCardText}>
                      Operating normally at 42% utilization with full
                      redundancy.
                    </Text>
                    <div>
                      <Badge appearance="tint" color="success">
                        Healthy
                      </Badge>
                    </div>
                  </Card>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...J.parameters?.docs?.source},description:{story:`**Placement hierarchy.** A message bar lives at the boundary of the scope it
applies to. From broadest to narrowest:

1. **App** — affects the whole application. Pin a full-width \`shape="square"\`
   bar directly below the top app bar. Reserve for the most severe, system-wide
   messages (use \`error\` + \`politeness="assertive"\`).
2. **Page** — affects the current page. Place a bar at the top of the page
   content, above all sections.
3. **Section** — affects one group of related content. Place a bar at the top
   of that section.
4. **Card** — affects a single card/control. Place a bar inside the card.

Match the bar's width and position to its scope so users can tell *what* a
message applies to. Avoid stacking many high-severity bars across levels at
once — escalate, don't overwhelm.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "With actions and dismiss",
  render: () => {
    const styles = useStyles();
    return <div className={styles.stack}>
        <MessageBar intent="info" politeness="polite">
          <MessageBarBody>
            <MessageBarTitle>New firmware available</MessageBarTitle> Version
            11.2 improves stability. <Link href="#">Read the changelog</Link>.
          </MessageBarBody>
          <MessageBarActions containerAction={<Button appearance="transparent" icon={<DismissRegular />} aria-label="Dismiss message" />}>
            <Button>Update now</Button>
            <Button>Later</Button>
          </MessageBarActions>
        </MessageBar>
      </div>;
  }
}`,...Y.parameters?.docs?.source},description:{story:"Bars can carry both **primary actions** and an icon-only **dismiss** button.\n\n- Action buttons go in `MessageBarActions` children.\n- The dismiss button goes in the `containerAction` slot and **must** have an\n  `aria-label`.\n- Inline `Link`s in the body are fine for navigational follow-ups.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Single-line vs multiline",
  render: () => {
    const styles = useStyles();
    const longBody = "A scheduled maintenance window will temporarily take recording offline between 02:00 and 04:00. Connected cameras will reconnect automatically once the window completes, but live view may be unavailable during this period.";
    return <div className={styles.section}>
        <div className={styles.stack}>
          <Text className={styles.sectionLabel}>
            Single-line (default) — truncates
          </Text>
          <MessageBar intent="info" politeness="polite">
            <MessageBarBody>
              <MessageBarTitle>Maintenance</MessageBarTitle> {longBody}
            </MessageBarBody>
            <MessageBarActions>
              <Button>Details</Button>
            </MessageBarActions>
          </MessageBar>
        </div>
        <div className={styles.stack}>
          <Text className={styles.sectionLabel}>Multiline — wraps</Text>
          <MessageBar intent="info" politeness="polite" layout="multiline">
            <MessageBarBody>
              <MessageBarTitle>Maintenance</MessageBarTitle> {longBody}
            </MessageBarBody>
            <MessageBarActions>
              <Button>Details</Button>
              <Button>Dismiss</Button>
            </MessageBarActions>
          </MessageBar>
        </div>
      </div>;
  }
}`,...X.parameters?.docs?.source},description:{story:`Long messages should use \`layout="multiline"\` so the body wraps and the actions
move to their own row instead of truncating. Compare with the default single-line
bar, which truncates overflowing text.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Stacked group (dismissible)",
  render: () => {
    const styles = useStyles();
    type Item = {
      id: number;
      intent: MessageBarIntent;
    };
    const initial: Item[] = [{
      id: 1,
      intent: "error"
    }, {
      id: 2,
      intent: "warning"
    }, {
      id: 3,
      intent: "success"
    }, {
      id: 4,
      intent: "info"
    }];
    const [items, setItems] = useState<Item[]>(initial);
    const dismiss = (id: number) => setItems(current => current.filter(item => item.id !== id));
    return <div className={styles.stack}>
        <MessageBarGroup animate="both" className={styles.stack}>
          {items.map(item => {
          const copy = intentCopy[item.intent];
          return <MessageBar key={item.id} intent={item.intent} politeness={politenessFor(item.intent)}>
                <MessageBarBody>
                  <MessageBarTitle>{copy.title}</MessageBarTitle> {copy.body}
                </MessageBarBody>
                <MessageBarActions containerAction={<Button appearance="transparent" icon={<DismissRegular />} aria-label="Dismiss message" onClick={() => dismiss(item.id)} />} />
              </MessageBar>;
        })}
        </MessageBarGroup>
        {items.length === 0 && <Button onClick={() => setItems(initial)}>Reset messages</Button>}
      </div>;
  }
}`,...Z.parameters?.docs?.source},description:{story:'Stack multiple related bars in a `MessageBarGroup`. The group keeps spacing\nconsistent and animates bars in and out (`animate="both"`). Dismissing a bar\nremoves it from state while preserving the surrounding layout and focus order.',...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  argTypes: {
    intent: {
      control: "select",
      options: ["info", "success", "warning", "error"],
      description: "Semantic intent driving color and icon."
    },
    shape: {
      control: "inline-radio",
      options: ["rounded", "square"],
      description: "Rounded for container level, square for global/full-width."
    },
    layout: {
      control: "inline-radio",
      options: ["singleline", "multiline", "auto"],
      description: "Single-line truncates; multiline wraps."
    },
    title: {
      control: "text"
    },
    body: {
      control: "text"
    }
  },
  args: {
    intent: "info",
    shape: "rounded",
    layout: "singleline",
    title: "Heads up",
    body: "This is a configurable message bar. Adjust the controls to explore states."
  },
  render: args => {
    const styles = useStyles();
    const intent = args.intent as MessageBarIntent;
    return <div className={styles.stack}>
        <MessageBar intent={intent} shape={args.shape as "rounded" | "square"} layout={args.layout as "singleline" | "multiline" | "auto"} politeness={politenessFor(intent)}>
          <MessageBarBody>
            <MessageBarTitle>{args.title as string}</MessageBarTitle>{" "}
            {args.body as string}
          </MessageBarBody>
          <MessageBarActions containerAction={<Button appearance="transparent" icon={<DismissRegular />} aria-label="Dismiss message" />}>
            <Button>Action</Button>
          </MessageBarActions>
        </MessageBar>
      </div>;
  }
}`,...Q.parameters?.docs?.source},description:{story:`Interactive playground. Use the controls to change the intent, title, body, shape,
and layout. Politeness follows the intent automatically (assertive for errors).`,...Q.parameters?.docs?.description}}},$=[`Intents`,`GlobalMessageBar`,`ContainerLevelMessageBar`,`PlacementHierarchy`,`WithActions`,`Layout`,`StackedGroup`,`Playground`]}))();export{q as ContainerLevelMessageBar,K as GlobalMessageBar,G as Intents,X as Layout,J as PlacementHierarchy,Q as Playground,Z as StackedGroup,Y as WithActions,$ as __namedExportsOrder,W as default};