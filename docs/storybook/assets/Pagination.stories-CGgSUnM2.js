import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Pagination-DZDi7v0S.js";var a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{a=t(),r(),o=n(),s={title:`UI patterns/Pagination`,component:i,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Pagination Component

Table footer pagination compatible with AXIS design system.
Recommended when table has 100+ rows with ~50 rows per page.

**Fluent Guidelines Applied:**
- Flex layout with info and control sections
- Previous/Next icon buttons with semantic accessibility
- Page selector dropdown for quick navigation
- Loading skeleton state
- Token-driven spacing and colors

<p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=32-701"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>`}}},argTypes:{isLoading:{control:`boolean`,description:"When `true`, renders a loading skeleton in place of the pagination controls.",table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},currentPage:{control:`number`,description:`Current page number (1-indexed).`,table:{type:{summary:`number`}}},totalPages:{control:`number`,description:`Total number of pages available.`,table:{type:{summary:`number`}}},nextPage:{action:`nextPage`,description:`Callback invoked to advance to the next page.`,table:{type:{summary:`() => void`}}},prevPage:{action:`prevPage`,description:`Callback invoked to go back to the previous page.`,table:{type:{summary:`() => void`}}},goToPage:{action:`goToPage`,description:`Callback invoked with the page number to jump to.`,table:{type:{summary:`(newPage: number) => void`}}},canGoBackward:{control:`boolean`,description:"Whether backward navigation is enabled (disables the previous button when `false`).",table:{type:{summary:`boolean`}}},canGoForward:{control:`boolean`,description:"Whether forward navigation is enabled (disables the next button when `false`).",table:{type:{summary:`boolean`}}},total:{control:`number`,description:`Total number of items across all pages.`,table:{type:{summary:`number`}}},firstPageRow:{control:`number`,description:`Row number of the first item shown on the current page.`,table:{type:{summary:`number`}}},lastPageRow:{control:`number`,description:`Row number of the last item shown on the current page.`,table:{type:{summary:`number`}}},rowCounterMsg:{control:`text`,description:`Text shown at the bottom describing the visible rows, e.g. "Showing rows X-Y of Z".`,table:{type:{summary:`string | undefined`}}},pageCounterMsg:{control:`text`,description:`Text shown on the page selector, e.g. "Page X of Y".`,table:{type:{summary:`string | undefined`}}},className:{control:`text`,description:`Optional CSS class applied to the root element.`,table:{type:{summary:`string | undefined`}}}}},c=(e,t)=>(e-1)*t+1,l=(e,t,n)=>Math.min(e*t,n),u={args:{currentPage:1,totalPages:25,total:245,canGoBackward:!1,canGoForward:!0,firstPageRow:1,lastPageRow:10},render:e=>{let[t,n]=(0,a.useState)(e.currentPage),r=Math.ceil(e.total/e.totalPages),s=()=>{n(t=>Math.min(t+1,e.totalPages))},u=()=>{n(e=>Math.max(e-1,1))},d=t=>{t>=1&&t<=e.totalPages&&n(t)},f=c(t,r),p=l(t,r,e.total);return(0,o.jsx)(i,{...e,currentPage:t,canGoBackward:t>1,canGoForward:t<e.totalPages,firstPageRow:f,lastPageRow:p,nextPage:s,prevPage:u,goToPage:d})}},d={args:{currentPage:2,totalPages:20,total:500,canGoBackward:!0,canGoForward:!0,firstPageRow:26,lastPageRow:50},render:e=>{let[t,n]=(0,a.useState)(e.currentPage),r=Math.ceil(e.total/e.totalPages),s=c(t,r),u=l(t,r,e.total);return(0,o.jsx)(i,{...e,currentPage:t,canGoBackward:t>1,canGoForward:t<e.totalPages,firstPageRow:s,lastPageRow:u,nextPage:()=>n(t=>Math.min(t+1,e.totalPages)),prevPage:()=>n(e=>Math.max(e-1,1)),goToPage:t=>{t>=1&&t<=e.totalPages&&n(t)}})}},f={args:{currentPage:5,totalPages:5,total:150,canGoBackward:!0,canGoForward:!1,firstPageRow:136,lastPageRow:150},render:e=>(0,o.jsx)(i,{...e,nextPage:()=>console.log(`Next page`),prevPage:()=>console.log(`Previous page`),goToPage:e=>console.log(`Go to page:`,e)})},p={args:{isLoading:!0,currentPage:1,totalPages:10,total:100,canGoBackward:!1,canGoForward:!0,firstPageRow:1,lastPageRow:10},render:e=>(0,o.jsx)(i,{...e,nextPage:()=>console.log(`Next page`),prevPage:()=>console.log(`Previous page`),goToPage:e=>console.log(`Go to page:`,e)})},m={render:()=>{let[e,t]=(0,a.useState)(1),n=()=>{e<2&&t(e+1)},r=()=>{e>1&&t(e-1)},s=e=>{e>=1&&e<=2&&t(e)},u=c(e,50),d=l(e,50,100);return(0,o.jsx)(i,{currentPage:e,totalPages:2,total:100,canGoBackward:e>1,canGoForward:e<2,firstPageRow:u,lastPageRow:d,nextPage:n,prevPage:r,goToPage:s})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 25,
    total: 245,
    canGoBackward: false,
    canGoForward: true,
    firstPageRow: 1,
    lastPageRow: 10
  },
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    const pageSize = Math.ceil(args.total / args.totalPages);
    const handleNextPage = () => {
      setCurrentPage(prev => Math.min(prev + 1, args.totalPages));
    };
    const handlePrevPage = () => {
      setCurrentPage(prev => Math.max(prev - 1, 1));
    };
    const handleGoToPage = (page: number) => {
      if (page >= 1 && page <= args.totalPages) {
        setCurrentPage(page);
      }
    };
    const firstPageRow = getFirstRowOnPage(currentPage, pageSize);
    const lastPageRow = getLastRowOnPage(currentPage, pageSize, args.total);
    return <Pagination {...args} currentPage={currentPage} canGoBackward={currentPage > 1} canGoForward={currentPage < args.totalPages} firstPageRow={firstPageRow} lastPageRow={lastPageRow} nextPage={handleNextPage} prevPage={handlePrevPage} goToPage={handleGoToPage} />;
  }
}`,...u.parameters?.docs?.source},description:{story:`Default pagination on first page with navigation disabled backward.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    totalPages: 20,
    total: 500,
    canGoBackward: true,
    canGoForward: true,
    firstPageRow: 26,
    lastPageRow: 50
  },
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    const pageSize = Math.ceil(args.total / args.totalPages);
    const firstPageRow = getFirstRowOnPage(currentPage, pageSize);
    const lastPageRow = getLastRowOnPage(currentPage, pageSize, args.total);
    return <Pagination {...args} currentPage={currentPage} canGoBackward={currentPage > 1} canGoForward={currentPage < args.totalPages} firstPageRow={firstPageRow} lastPageRow={lastPageRow} nextPage={() => setCurrentPage(prev => Math.min(prev + 1, args.totalPages))} prevPage={() => setCurrentPage(prev => Math.max(prev - 1, 1))} goToPage={page => {
      if (page >= 1 && page <= args.totalPages) {
        setCurrentPage(page);
      }
    }} />;
  }
}`,...d.parameters?.docs?.source},description:{story:`Pagination on middle page with both navigation buttons enabled.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 5,
    total: 150,
    canGoBackward: true,
    canGoForward: false,
    firstPageRow: 136,
    lastPageRow: 150
  },
  render: args => <Pagination {...args} nextPage={() => console.log("Next page")} prevPage={() => console.log("Previous page")} goToPage={page => console.log("Go to page:", page)} />
}`,...f.parameters?.docs?.source},description:{story:`Pagination on last page with forward navigation disabled.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    currentPage: 1,
    totalPages: 10,
    total: 100,
    canGoBackward: false,
    canGoForward: true,
    firstPageRow: 1,
    lastPageRow: 10
  },
  render: args => <Pagination {...args} nextPage={() => console.log("Next page")} prevPage={() => console.log("Previous page")} goToPage={page => console.log("Go to page:", page)} />
}`,...p.parameters?.docs?.source},description:{story:`Loading state with skeleton placeholder.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 50;
    const total = 100;
    const totalPages = Math.ceil(total / pageSize);
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
    const handleGoToPage = (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    };
    const firstPageRow = getFirstRowOnPage(currentPage, pageSize);
    const lastPageRow = getLastRowOnPage(currentPage, pageSize, total);
    return <Pagination currentPage={currentPage} totalPages={totalPages} total={total} canGoBackward={currentPage > 1} canGoForward={currentPage < totalPages} firstPageRow={firstPageRow} lastPageRow={lastPageRow} nextPage={handleNextPage} prevPage={handlePrevPage} goToPage={handleGoToPage} />;
  }
}`,...m.parameters?.docs?.source},description:{story:`Interactive pagination with full state management.
Try using the dropdown selector or navigation buttons to switch pages.`,...m.parameters?.docs?.description}}},h=[`Default`,`MiddlePage`,`LastPage`,`Loading`,`Interactive`]})))()}g();export{u as Default,m as Interactive,f as LastPage,p as Loading,d as MiddlePage,h as __namedExportsOrder,s as default};