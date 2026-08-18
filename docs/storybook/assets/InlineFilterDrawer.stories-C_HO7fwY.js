import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./createFluentIcon-HvgI6rMr.js";import{i as a,n as o,r as s,t as c}from"./InlineFilterDrawer-DAuLcIpp.js";import{a as l,i as u,r as d}from"./Field-D_PoFV6t.js";import{i as f,n as p,r as m}from"./chunk-18-CWEAjqd8.js";import{a as h,i as g}from"./chunk-28-r3MtMZ5N.js";var _;function v(){return(v=e((()=>{r(),_=i(`Building20Regular`,`20`,[`M6.75 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.75-6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 9.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 18a.5.5 0 0 1-.5-.5v-14C4 2.67 4.67 2 5.5 2h6c.83 0 1.5.67 1.5 1.5V8h1.5c.83 0 1.5.67 1.5 1.5v8a.5.5 0 0 1-.5.5h-11ZM5 3.5V17h2v-2.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V17h2V9.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5ZM12 15h-1.5v2H12v-2Zm-2.5 0H8v2h1.5v-2Z`])})))()}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{v(),l(),h(),f(),y=t(),a(),b=n(),x={title:`UI patterns/Inline Filter Drawer`,component:c,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`Inline Filter Drawer

A persistent, in-page filtering surface that pairs a navigable organisation
hierarchy (tree) with free-text search, tag-based filtering, and optional
cross-filtering by hierarchy level. Unlike a modal or overlay drawer, it is
always rendered inline next to the content it filters, so users keep their
filters in view while they browse results.

**What it is for**
- Narrowing a large data set (devices, sites, cameras, recordings, etc.) by
  navigating an organisation tree and applying tags at the same time.
- Keeping the active filter context visible and editable alongside results,
  rather than hidden behind a button or dialog.
- Acting as the left rail of a list/table/detail layout in suite-style apps.

**When to use it**
- The content can be scoped by a hierarchy (Global → Region → Site → Floor →
  Room) and/or by cross-cutting tags (status, priority, type).
- There is enough horizontal space to keep the filters permanently visible
  (desktop / wide layouts). On narrow viewports, enable \`responsiveWidth\`
  or move filtering into a \`FilterToolbar\` instead.
- Filters change frequently and benefit from staying on screen.

**When NOT to use it**
- For a single flat set of filters with no hierarchy — use \`Filter Toolbar\`.
- For occasional, space-constrained filtering — use an overlay \`Drawer\`.

**Fluent guidelines applied**
- Built from Fluent primitives: \`Accordion\`, \`Input\`, \`Menu\`, \`Checkbox\`,
  \`TagGroup\`, and \`Dialog\` (for inline rename/create).
- Token-based spacing, colors, borders, and motion (\`motionTokens\`).
- Controlled and uncontrolled APIs for tag filters, node selection, and
  width, so it can be driven by app state or manage its own.
- Responsive width via \`@axiscommunications/fluent-hooks\` \`useMediaQuery\`.

<p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=99-300"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>`}}},decorators:[e=>(0,b.jsx)(`div`,{style:{width:`min(600px, 100vw)`,maxWidth:`100%`,minHeight:`500px`},children:(0,b.jsx)(e,{})})],argTypes:{title:{control:`text`,description:`Drawer heading text`},searchPlaceholder:{control:`text`,description:`Placeholder text for the free text filter input`},showTagFilter:{control:`boolean`,description:`Shows the tag filter menu and active filter chips`},enableSubfolderCreation:{control:`boolean`,description:`Enables a per-node menu to rename, add folders and remove nodes`},fullHeight:{control:`boolean`,description:`Renders the drawer as a full-height panel surface (square corners, no card gap) instead of a rounded card. Use when the drawer is the left rail of a page layout.`},resizable:{control:`boolean`,description:"Adds a drag handle on the right edge so users can resize the drawer width between `minWidth` and `maxWidth`."},responsiveWidth:{control:`boolean`,description:"Switches to a compact width on small viewports using the `smallViewport*` width props."}}},S={nodes:s,filterGroups:o,title:`Organisation Filter`,searchPlaceholder:`Search organisation`,showTagFilter:!0},C=[{id:`icon-global`,label:`Global`,type:`global`,icon:(0,b.jsx)(u,{}),children:[{id:`icon-region-emea`,label:`EMEA`,type:`region`,icon:(0,b.jsx)(m,{}),children:[{id:`icon-site-lund`,label:`Lund HQ`,type:`site`,icon:(0,b.jsx)(_,{}),children:[{id:`icon-floor-2`,label:`Floor 2`,type:`floor`,icon:(0,b.jsx)(p,{}),children:[{id:`icon-room-201`,label:`Meeting Room 201`,type:`room`,icon:(0,b.jsx)(d,{}),children:[{id:`icon-item-201`,label:`Desk booking`,type:`item`,icon:(0,b.jsx)(g,{})}]}]}]}]}]}],w=[{id:`status`,label:`Status`,options:[{value:`active`,label:`Active`},{value:`paused`,label:`Paused`},{value:`archived`,label:`Archived`}]}],T={args:S},E={args:{nodes:s,filterGroups:o,searchPlaceholder:`Search organisation`,showTagFilter:!0}},D={args:{nodes:C,title:`Navigation with Icons`,searchPlaceholder:`Search organisation`,showTagFilter:!1}},O={render:function(){let[e,t]=(0,y.useState)({status:[`active`]});return(0,b.jsx)(c,{nodes:s,filterGroups:w,title:`Filter by Status`,searchPlaceholder:`Search organisation`,tagFilter:e,onTagFilterChange:t})}},k={render:function(){let[e,t]=(0,y.useState)({status:[`active`],priority:[`high`]});return(0,b.jsx)(c,{nodes:s,filterGroups:o,title:`Filter by Status and Priority`,searchPlaceholder:`Search organisation`,tagFilter:e,onTagFilterChange:t})}},A={render:function(){let[e,t]=(0,y.useState)([`region-emea`,`site-lund`]);return(0,b.jsx)(c,{nodes:s,filterGroups:o,title:`Cross-filter Navigation`,searchPlaceholder:`Search organisation`,selectionByLevel:{region:!0,site:!0,folder:!0,item:!0},selectedNodeIds:e,onSelectedNodeIdsChange:t})}},j={render:function(){let[e,t]=(0,y.useState)([`site-lund`]);return(0,b.jsx)(c,{nodes:s,title:`Editable Navigation`,searchPlaceholder:`Search organisation`,showTagFilter:!1,enableSubfolderCreation:!0,selectionByLevel:{region:!0,site:!0,folder:!0,item:!0},selectedNodeIds:e,onSelectedNodeIdsChange:t})}},M={args:{...S,fullHeight:!0},decorators:[e=>(0,b.jsx)(`div`,{style:{display:`flex`,height:`600px`,width:`320px`},children:(0,b.jsx)(e,{})})]},N={args:{...S,resizable:!0,defaultWidth:320,minWidth:240,maxWidth:480},decorators:[e=>(0,b.jsx)(`div`,{style:{display:`flex`,minHeight:`500px`,width:`600px`},children:(0,b.jsx)(e,{})})]},P={args:{...S,responsiveWidth:!0,defaultWidth:320,smallViewportWidth:220,smallViewportMinWidth:200,smallViewportMaxWidth:280}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...T.parameters?.docs?.source},description:{story:`Default

The baseline drawer: a titled header, free-text search, the full tag filter
menu with active-filter chips, and a navigable organisation tree. Use this as
the starting point for most screens and switch features on or off via props.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: ORGANISATION_NAVIGATION_TREE,
    filterGroups: ORGANISATION_FILTER_GROUPS,
    searchPlaceholder: "Search organisation",
    showTagFilter: true
  }
}`,...E.parameters?.docs?.source},description:{story:`Without Header

Hides the title row to save vertical space. Use when the drawer sits directly
beneath a page or section header that already provides context, so a second
heading would be redundant.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: ICON_NAVIGATION_TREE,
    title: "Navigation with Icons",
    searchPlaceholder: "Search organisation",
    showTagFilter: false
  }
}`,...D.parameters?.docs?.source},description:{story:`Per-Level Icons

Renders an icon before each node label, with a distinct icon per hierarchy
level (global, region, site, floor, room, item). Use to make deep trees
easier to scan and to reinforce what kind of entity each level represents.
Tag filtering is disabled here to keep the focus on navigation.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function TagFilteringStory() {
    const [activeFilter, setActiveFilter] = useState<TagFilter>({
      status: ["active"]
    });
    return <InlineFilterDrawer nodes={ORGANISATION_NAVIGATION_TREE} filterGroups={SINGLE_GROUP_FILTER} title="Filter by Status" searchPlaceholder="Search organisation" tagFilter={activeFilter} onTagFilterChange={setActiveFilter} />;
  }
}`,...O.parameters?.docs?.source},description:{story:`Tag Filtering (single group)

Demonstrates a single tag group (Status) driving the filter, with the
selected values controlled by app state and surfaced as dismissible chips.
Use when items carry one cross-cutting attribute you want users to filter by
independently of the hierarchy.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function MultiGroupFilteringStory() {
    const [activeFilter, setActiveFilter] = useState<TagFilter>({
      status: ["active"],
      priority: ["high"]
    });
    return <InlineFilterDrawer nodes={ORGANISATION_NAVIGATION_TREE} filterGroups={ORGANISATION_FILTER_GROUPS} title="Filter by Status and Priority" searchPlaceholder="Search organisation" tagFilter={activeFilter} onTagFilterChange={setActiveFilter} />;
  }
}`,...k.parameters?.docs?.source},description:{story:`Multi-Group Filtering

Combines several tag groups (e.g. Status and Priority) in one menu. Selections
across groups are ANDed together, and every active value appears as its own
chip. Use when items have multiple independent attributes that users should
be able to combine.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function CrossFilteringLevelsStory() {
    const [selectedNodeIds, setSelectedNodeIds] = useState<string[]>(["region-emea", "site-lund"]);
    return <InlineFilterDrawer nodes={ORGANISATION_NAVIGATION_TREE} filterGroups={ORGANISATION_FILTER_GROUPS} title="Cross-filter Navigation" searchPlaceholder="Search organisation" selectionByLevel={{
      region: true,
      site: true,
      folder: true,
      item: true
    }} selectedNodeIds={selectedNodeIds} onSelectedNodeIdsChange={setSelectedNodeIds} />;
  }
}`,...A.parameters?.docs?.source},description:{story:`Cross-Filtering Levels

Turns on checkboxes for chosen hierarchy levels (via \`selectionByLevel\`) so
users can select one or more nodes and cross-filter the content by those
nodes. Use when results should be scoped to specific branches of the tree
rather than only by tags or search.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function SubfolderCreationStory() {
    const [selectedNodeIds, setSelectedNodeIds] = useState<string[]>(["site-lund"]);
    return <InlineFilterDrawer nodes={ORGANISATION_NAVIGATION_TREE} title="Editable Navigation" searchPlaceholder="Search organisation" showTagFilter={false} enableSubfolderCreation selectionByLevel={{
      region: true,
      site: true,
      folder: true,
      item: true
    }} selectedNodeIds={selectedNodeIds} onSelectedNodeIdsChange={setSelectedNodeIds} />;
  }
}`,...j.parameters?.docs?.source},description:{story:`Subfolder Creation

Enables a per-node menu (\`enableSubfolderCreation\`) for inline renaming,
adding child folders, and removing nodes, with changes reported via
\`onNodesChange\`. Use for editable navigation where users curate their own
structure (e.g. custom folders or saved groupings).`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    fullHeight: true
  },
  decorators: [Story => <div style={{
    display: "flex",
    height: "600px",
    width: "320px"
  }}>
        <Story />
      </div>]
}`,...M.parameters?.docs?.source},description:{story:`Full Height

Renders the drawer as a full-height panel surface (\`fullHeight\`) with square
corners and a stronger divider, instead of a rounded floating card. Use when
the drawer is the permanent left rail of a page layout and should stretch to
fill the available height next to the content area.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    resizable: true,
    defaultWidth: 320,
    minWidth: 240,
    maxWidth: 480
  },
  decorators: [Story => <div style={{
    display: "flex",
    minHeight: "500px",
    width: "600px"
  }}>
        <Story />
      </div>]
}`,...N.parameters?.docs?.source},description:{story:"Resizable\n\nAdds a drag handle on the right edge (`resizable`) so users can adjust the\ndrawer width between `minWidth` and `maxWidth`, with the final width reported\nvia `onWidthChange`. Use when label lengths or deep trees vary and users\nbenefit from controlling how much horizontal space the drawer takes.",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    responsiveWidth: true,
    defaultWidth: 320,
    smallViewportWidth: 220,
    smallViewportMinWidth: 200,
    smallViewportMaxWidth: 280
  }
}`,...P.parameters?.docs?.source},description:{story:`Responsive Width

Enables \`responsiveWidth\` so the drawer collapses to a compact width on small
viewports using the \`smallViewport*\` props. Use when the same layout must work
across desktop and narrow screens without hiding the filters entirely. Resize
the preview to see the width adapt.`,...P.parameters?.docs?.description}}},F=[`Default`,`WithoutHeader`,`PerLevelIcons`,`TagFiltering`,`MultiGroupFiltering`,`CrossFilteringLevels`,`SubfolderCreation`,`FullHeight`,`Resizable`,`ResponsiveWidth`]})))()}I();export{A as CrossFilteringLevels,T as Default,M as FullHeight,k as MultiGroupFiltering,D as PerLevelIcons,N as Resizable,P as ResponsiveWidth,j as SubfolderCreation,O as TagFiltering,E as WithoutHeader,F as __namedExportsOrder,x as default};