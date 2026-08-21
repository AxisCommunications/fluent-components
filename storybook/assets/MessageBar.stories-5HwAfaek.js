import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{A as r,B as i,E as a,G as o,K as s,R as c,T as l,_ as u,g as d,i as ee,k as f,n as p,r as m,t as h,w as g,z as _}from"./tokens-vLGBt8wU.js";import{n as v,t as y}from"./getIntrinsicElementProps-CeKvsV_a.js";import{n as te,r as ne}from"./ProviderContext-DYVPeWOc.js";import{n as re,t as ie}from"./useId-Ce4DBZ0T.js";import{a as ae,c as oe,i as se,l as ce,n as le,o as ue,s as de,t as fe}from"./fade-atom-B9EZeO-5.js";import{n as pe,t as b}from"./useMergedRefs-BGHgsMz_.js";import{D as me,O as he,S as ge,T as _e,x as ve}from"./MenuTrigger-BBH0mf82.js";import{i as ye}from"./useFocusVisible-BeDfaa0l.js";import{t as be}from"./jsx-runtime-DeHZSEgm.js";import{n as x,t as S}from"./__resetStyles-wfzE4FKG.js";import{i as xe,n as Se,t as Ce}from"./chunk-4-K2O6DM5W.js";import{i as we,n as Te,t as Ee}from"./chunk-9-DClPgS2H.js";import{a as De,n as Oe,o as ke,r as Ae}from"./chunk-10-DNGM_SLa.js";import{n as je,t as Me}from"./chunk-12-D5EWAd5m.js";import{d as Ne,n as Pe}from"./chunk-24-CYifds9-.js";import{n as Fe,r as Ie,t as Le}from"./chunk-25-Ddl8qenr.js";import{i as Re,r as C,t as ze}from"./chunk-28-bBlY_ksU.js";import{n as Be,r as Ve,t as He}from"./SuiteHeader-CoX6mbX0.js";import{n as Ue,t as We}from"./Badge-YCDNhZsB.js";import{c as Ge,s as Ke}from"./useButtonStyles.styles-Ci84LEPU.js";import{n as qe,t as w}from"./Button-CuNALHmt.js";import{i as Je,n as Ye,r as Xe,t as Ze}from"./Link-ugXQWd-r.js";import{n as Qe,t as T}from"./Text-DbeiQpwd.js";import{n as $e,t as et}from"./Card-3xQY3FtY.js";import{n as tt,t as nt}from"./src-BCJZWyfR.js";import{n as rt,t as it}from"./FullPageHeader-2aZBb_D7.js";function at(){return ot.useContext(st)??{announce:()=>void 0}}var ot,st;function ct(){return(ct=t((()=>{ot=e(n()),st=ot.createContext(void 0),st.Provider})))()}function lt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ut(e,t){function n(n){return n in t?t[n]:e[n]}let r={},i=[];for(let n in e){if(n in t){i.length&&(r[n]=i,i=[]);continue}i.push(n)}let a={};for(let e in t){if(r[e])for(let t of r[e])a[t]=n(t);a[e]=n(e)}for(let e of i)a[e]=n(e);return a}function dt(e,t){let n=ut(e,t);return Object.entries(n).forEach(([r,i])=>{let a=r in e;if(r in t){if(a){n[r]={...i};return}n[r]={...i,appear:!0,visible:!0};return}n[r]={...i,visible:!1}}),n}function ft(){return(ft=t((()=>{})))()}function pt(e){let t={};return e&&mt.Children.toArray(e).forEach(e=>{mt.isValidElement(e)&&(t[e.key??``]={appear:!1,element:e,visible:!0,unmountOnExit:!0})}),t}var mt;function ht(){return(ht=t((()=>{mt=e(n())})))()}var E,gt;function _t(){return(_t=t((()=>{E=e(n()),de(),gt=e=>{let{appear:t,childKey:n,onExit:r,visible:i,unmountOnExit:a}=e,o=E.useMemo(()=>({appear:t,visible:i,onExit:()=>r(n),unmountOnExit:a}),[t,n,r,i,a]);return E.createElement(ue.Provider,{value:o},e.children)}})))()}var D,vt;function yt(){return(yt=t((()=>{D=e(n()),ft(),ht(),_t(),vt=class extends D.Component{static getDerivedStateFromProps(e,{childMapping:t,firstRender:n}){let r=pt(e.children);return{childMapping:n?r:dt(t,r),firstRender:!1}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return D.createElement(D.Fragment,null,Object.entries(this.state.childMapping).map(([e,t])=>D.createElement(gt,{...t,childKey:e,key:e,onExit:this.handleExit},t.element)))}constructor(e,t){super(e,t),lt(this,`mounted`,!1),lt(this,`handleExit`,e=>{e in pt(this.props.children)||this.mounted&&this.setState(t=>{let n={...t.childMapping};return delete n[e],{childMapping:n}})}),this.state={childMapping:{},firstRender:!0}}}})))()}function bt(e){switch(e){case`info`:return O.createElement(Me,null);case`warning`:return O.createElement(De,null);case`error`:return O.createElement(ze,null);case`success`:return O.createElement(Pe,null);default:return null}}var O;function xt(){return(xt=t((()=>{O=e(n()),Ne(),je(),ke(),Re()})))()}function St(e=!1){let{targetDocument:t}=ne(),n=k.useReducer(()=>({}),{})[1],r=k.useRef(!1),i=k.useRef(null),a=k.useRef(-1),o=k.useCallback(e=>{var t;let i=e[0],o=(i==null||(t=i.borderBoxSize)==null?void 0:t[0]?.inlineSize)??i?.target.getBoundingClientRect().width;if(o===void 0||!i)return;let{target:s}=i;if(!ye(s))return;let c;r.current?a.current<o&&(c=!1):o<s.scrollWidth&&(c=!0),a.current=o,c!==void 0&&r.current!==c&&(r.current=c,n())},[n]),s=k.useCallback(n=>{var r;if(!e||!n||!t?.defaultView)return;(r=i.current)==null||r.disconnect();let a=new t.defaultView.ResizeObserver(o);i.current=a,a.observe(n,{box:`border-box`})},[t,o,e]);return k.useEffect(()=>()=>{var e;(e=i.current)==null||e.disconnect()},[]),{ref:s,reflowing:r.current}}var k;function Ct(){return(Ct=t((()=>{k=e(n()),te()})))()}var A,wt,Tt,Et;function Dt(){return(Dt=t((()=>{A=e(n()),wt=A.createContext(void 0),Tt={className:``,nodeRef:A.createRef()},wt.Provider,Et=()=>A.useContext(wt)??Tt})))()}var j,Ot,kt;function At(){return(At=t((()=>{j=e(n()),v(),_(),ie(),b(),ct(),xt(),Ct(),Dt(),me(),Ot=(e,t)=>{let{layout:n=`auto`,intent:r=`info`,politeness:a}=e,o=a??r===`info`?`polite`:`assertive`,s=n===`auto`,{ref:l,reflowing:u}=St(s),d=s?u?`multiline`:`singleline`:n,{className:ee,nodeRef:f}=Et(),p=he(),m=j.useRef(null),h=j.useRef(null),{announce:g}=at(),_=re();return j.useEffect(()=>{let e=[h.current?.textContent,m.current?.textContent].filter(Boolean).join(`,`);g(e,{polite:o===`polite`,alert:o===`assertive`})},[h,m,g,o]),{components:{root:`div`,icon:`div`,bottomReflowSpacer:`div`},root:c(y(`div`,{ref:pe(t,l,f,p),role:`group`,"aria-labelledby":_,...e}),{elementType:`div`}),icon:i(e.icon,{renderByDefault:!0,elementType:`div`}),bottomReflowSpacer:i(e.bottomReflowSpacer,{renderByDefault:d===`multiline`,elementType:`div`}),layout:d,intent:r,transitionClassName:ee,actionsRef:m,bodyRef:h,titleId:_}},kt=(e,t)=>{let{shape:n=`rounded`,...r}=e,a=Ot(r,t);return{...a,shape:n,icon:i(e.icon,{defaultProps:{children:bt(a.intent)},renderByDefault:!0,elementType:`div`})}}})))()}var M,jt,Mt,Nt,N;function P(){return(P=t((()=>{M=e(n()),jt=M.createContext(void 0),Mt={titleId:``,layout:`singleline`,actionsRef:M.createRef(),bodyRef:M.createRef()},Nt=jt.Provider,N=()=>M.useContext(jt)??Mt})))()}var Pt;function Ft(){return(Ft=t((()=>{g(),P(),Pt=(e,t)=>l(Nt,{value:t.messageBar,children:a(e.root,{children:[e.icon&&l(e.icon,{}),e.root.children,e.bottomReflowSpacer&&l(e.bottomReflowSpacer,{})]})})})))()}var F,It,Lt,Rt,zt,Bt,Vt,Ht;function Ut(){return(Ut=t((()=>{x(),ee(),d(),F={root:`fui-MessageBar`,icon:`fui-MessageBar__icon`,bottomReflowSpacer:`fui-MessageBar__bottomReflowSpacer`},It=S(`r2oyxsj`,`r1wuyrhw`,[`.r2oyxsj{white-space:nowrap;display:grid;grid-template-columns:auto 1fr auto auto;grid-template-rows:1fr;grid-template-areas:"icon body secondaryActions actions";padding-left:var(--spacingHorizontalM);border:var(--strokeWidthThin) solid var(--colorNeutralStroke1);border-radius:var(--borderRadiusMedium);align-items:center;min-height:36px;box-sizing:border-box;background-color:var(--colorNeutralBackground3);}`,`.r1wuyrhw{white-space:nowrap;display:grid;grid-template-columns:auto 1fr auto auto;grid-template-rows:1fr;grid-template-areas:"icon body secondaryActions actions";padding-right:var(--spacingHorizontalM);border:var(--strokeWidthThin) solid var(--colorNeutralStroke1);border-radius:var(--borderRadiusMedium);align-items:center;min-height:36px;box-sizing:border-box;background-color:var(--colorNeutralBackground3);}`]),Lt=S(`r1df1z33`,`rivnfjc`,[`.r1df1z33{grid-area:icon;font-size:var(--fontSizeBase500);margin-right:var(--spacingHorizontalS);color:var(--colorNeutralForeground3);display:flex;align-items:center;}`,`.rivnfjc{grid-area:icon;font-size:var(--fontSizeBase500);margin-left:var(--spacingHorizontalS);color:var(--colorNeutralForeground3);display:flex;align-items:center;}`]),Rt=S(`r1vx593n`,null,[`.r1vx593n{margin-bottom:var(--spacingVerticalS);grid-area:secondaryActions;}`]),zt=m({rootMultiline:{Huce71:`f6juhto`,Bt984gj:`f1s2louj`,z8tnut:`f1ngh7ph`,Budl1dq:`f17g0uqy`,zoa1oz:`f1w7oly7`},secondaryActionsMultiline:{Brf1p80:`f1e8xxv9`,B6of3ja:`f1gaxbfw`,jrapky:`fqcjy3b`,t21cq0:[`fibjyge`,`f9yszdx`]},square:{Beyfa6y:0,Bbmb7ep:0,Btl43ni:0,B7oj6ja:0,Dimara:`fokr779`}},{d:[`.f6juhto{white-space:normal;}`,`.f1s2louj{align-items:start;}`,`.f1ngh7ph{padding-top:var(--spacingVerticalMNudge);}`,`.f17g0uqy{grid-template-columns:auto 1fr auto;}`,`.f1w7oly7{grid-template-areas:"icon body actions" "secondaryActions secondaryActions secondaryActions";}`,`.f1e8xxv9{justify-content:end;}`,`.f1gaxbfw{margin-top:var(--spacingVerticalMNudge);}`,`.fqcjy3b{margin-bottom:var(--spacingVerticalS);}`,`.fibjyge{margin-right:0px;}`,`.f9yszdx{margin-left:0px;}`,[`.fokr779{border-radius:0;}`,{p:-1}]]}),Bt=m({info:{},error:{sj55zd:`f1ca9wz`},warning:{sj55zd:`f14a4cve`},success:{sj55zd:`f36rra6`}},{d:[`.f1ca9wz{color:var(--colorStatusDangerForeground1);}`,`.f14a4cve{color:var(--colorStatusWarningForeground3);}`,`.f36rra6{color:var(--colorStatusSuccessForeground1);}`]}),Vt=m({info:{},error:{De3pzq:`f1eon7jj`,g2u3we:`f1f8dvr7`,h3c5rm:[`f1g1ijmo`,`f1nxacbt`],B9xav0g:`fo25q1j`,zhjwy3:[`f1nxacbt`,`f1g1ijmo`]},warning:{De3pzq:`f13ftzij`,g2u3we:`frd1ypx`,h3c5rm:[`f1gyjrma`,`f18qd5xz`],B9xav0g:`fqyqtrt`,zhjwy3:[`f18qd5xz`,`f1gyjrma`]},success:{De3pzq:`f64thcm`,g2u3we:`f1b4u7v`,h3c5rm:[`f1nyd2b1`,`f70v3om`],B9xav0g:`fk173vo`,zhjwy3:[`f70v3om`,`f1nyd2b1`]}},{d:[`.f1eon7jj{background-color:var(--colorStatusDangerBackground1);}`,`.f1f8dvr7{border-top-color:var(--colorStatusDangerBorder1);}`,`.f1g1ijmo{border-right-color:var(--colorStatusDangerBorder1);}`,`.f1nxacbt{border-left-color:var(--colorStatusDangerBorder1);}`,`.fo25q1j{border-bottom-color:var(--colorStatusDangerBorder1);}`,`.f13ftzij{background-color:var(--colorStatusWarningBackground1);}`,`.frd1ypx{border-top-color:var(--colorStatusWarningBorder1);}`,`.f1gyjrma{border-right-color:var(--colorStatusWarningBorder1);}`,`.f18qd5xz{border-left-color:var(--colorStatusWarningBorder1);}`,`.fqyqtrt{border-bottom-color:var(--colorStatusWarningBorder1);}`,`.f64thcm{background-color:var(--colorStatusSuccessBackground1);}`,`.f1b4u7v{border-top-color:var(--colorStatusSuccessBorder1);}`,`.f1nyd2b1{border-right-color:var(--colorStatusSuccessBorder1);}`,`.f70v3om{border-left-color:var(--colorStatusSuccessBorder1);}`,`.fk173vo{border-bottom-color:var(--colorStatusSuccessBorder1);}`]}),Ht=e=>{let t=It(),n=Lt(),r=Bt(),i=Vt(),a=Rt(),o=zt();return e.root.className=u(F.root,t,e.layout===`multiline`&&o.rootMultiline,e.shape===`square`&&o.square,i[e.intent],e.root.className),e.icon&&(e.icon.className=u(F.icon,n,r[e.intent],e.icon.className)),e.bottomReflowSpacer&&(e.bottomReflowSpacer.className=u(F.bottomReflowSpacer,a)),e}})))()}function Wt(e){let{layout:t,actionsRef:n,bodyRef:r,titleId:i}=e;return{messageBar:Gt.useMemo(()=>({layout:t,actionsRef:n,bodyRef:r,titleId:i}),[t,n,r,i])}}var Gt;function Kt(){return(Kt=t((()=>{Gt=e(n())})))()}var qt,I;function Jt(){return(Jt=t((()=>{qt=e(n()),f(),At(),Ft(),Ut(),Kt(),I=qt.forwardRef((e,t)=>{let n=kt(e,t);return Ht(n),r(`useMessageBarStyles_unstable`)(n),Pt(n,Wt(n))}),I.displayName=`MessageBar`})))()}var Yt;function Xt(){return(Xt=t((()=>{v(),_(),P(),Yt=(e,t)=>{let{titleId:n}=N();return{components:{root:`span`},root:c(y(`span`,{ref:t,id:n,...e}),{elementType:`span`})}}})))()}var Zt;function Qt(){return(Qt=t((()=>{g(),Zt=e=>l(e.root,{})})))()}var $t,en,tn;function nn(){return(nn=t((()=>{x(),d(),$t={root:`fui-MessageBarTitle`},en=S(`r168xkm9`,null,[`.r168xkm9{font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase300);}`,`.r168xkm9::after{content:" ";}`]),tn=e=>{let t=en();return e.root.className=u($t.root,t,e.root.className),e}})))()}var rn,L;function an(){return(an=t((()=>{rn=e(n()),f(),Xt(),Qt(),nn(),L=rn.forwardRef((e,t)=>{let n=Yt(e,t);return tn(n),r(`useMessageBarTitleStyles_unstable`)(n),Zt(n)}),L.displayName=`MessageBarTitle`})))()}var on;function sn(){return(sn=t((()=>{v(),_(),b(),P(),on=(e,t)=>{let{layout:n=`singleline`,actionsRef:r}=N();return{components:{root:`div`,containerAction:`div`},containerAction:i(e.containerAction,{renderByDefault:!1,elementType:`div`}),root:c(y(`div`,{ref:pe(t,r),...e}),{elementType:`div`}),layout:n,hasActions:!!e.children}}})))()}var cn;function ln(){return(ln=t((()=>{g(),Ge(),cn=(e,t)=>a(Ke,{value:t.button,children:[e.layout===`multiline`&&e.containerAction&&l(e.containerAction,{},`containerAction`),l(e.root,{}),e.layout!==`multiline`&&e.containerAction&&l(e.containerAction,{},`containerAction`)]})})))()}var un,dn,fn,pn,mn;function hn(){return(hn=t((()=>{x(),ee(),d(),un={root:`fui-MessageBarActions`,containerAction:`fui-MessageBarActions__containerAction`},dn=S(`r1t4x98y`,`r15utzv5`,[`.r1t4x98y{grid-area:secondaryActions;display:flex;column-gap:var(--spacingHorizontalM);padding-right:var(--spacingHorizontalM);}`,`.r15utzv5{grid-area:secondaryActions;display:flex;column-gap:var(--spacingHorizontalM);padding-left:var(--spacingHorizontalM);}`]),fn=S(`rgzw8nq`,`r13ur29z`,[`.rgzw8nq{grid-area:actions;padding-right:var(--spacingHorizontalM);}`,`.r13ur29z{grid-area:actions;padding-left:var(--spacingHorizontalM);}`]),pn=m({root:{Brf1p80:`f1e8xxv9`,B6of3ja:`f1gaxbfw`,jrapky:`fqcjy3b`,t21cq0:[`fibjyge`,`f9yszdx`],z189sj:[`f1p3vkop`,`f8cewkv`]},noActions:{mc9l5x:`fjseox`}},{d:[`.f1e8xxv9{justify-content:end;}`,`.f1gaxbfw{margin-top:var(--spacingVerticalMNudge);}`,`.fqcjy3b{margin-bottom:var(--spacingVerticalS);}`,`.fibjyge{margin-right:0px;}`,`.f9yszdx{margin-left:0px;}`,`.f1p3vkop{padding-right:var(--spacingVerticalM);}`,`.f8cewkv{padding-left:var(--spacingVerticalM);}`,`.fjseox{display:none;}`]}),mn=e=>{let t=dn(),n=fn(),r=pn();return e.root.className=u(un.root,t,e.layout===`multiline`&&r.root,!e.hasActions&&r.noActions,e.root.className),e.containerAction&&(e.containerAction.className=u(un.containerAction,n,e.containerAction.className)),e}})))()}function gn(){return{button:_n.useMemo(()=>({size:`small`}),[])}}var _n;function vn(){return(vn=t((()=>{_n=e(n())})))()}var yn,R;function bn(){return(bn=t((()=>{yn=e(n()),f(),sn(),ln(),hn(),vn(),R=yn.forwardRef((e,t)=>{let n=on(e,t);return mn(n),r(`useMessageBarActionsStyles_unstable`)(n),cn(n,gn())}),R.displayName=`MessageBarActions`})))()}var xn;function Sn(){return(Sn=t((()=>{v(),_(),b(),P(),xn=(e,t)=>{let{bodyRef:n}=N();return{components:{root:`div`},root:c(y(`div`,{ref:pe(t,n),...e}),{elementType:`div`})}}})))()}var Cn;function wn(){return(wn=t((()=>{g(),Je(),Cn=(e,t)=>l(Xe,{value:t.link,children:l(e.root,{})})})))()}var Tn,En,Dn;function On(){return(On=t((()=>{x(),d(),Tn={root:`fui-MessageBarBody`},En=S(`rtatq2b`,`re2rary`,[`.rtatq2b{font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);grid-area:body;padding-right:var(--spacingHorizontalM);}`,`.re2rary{font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);grid-area:body;padding-left:var(--spacingHorizontalM);}`]),Dn=e=>{let t=En();return e.root.className=u(Tn.root,t,e.root.className),e}})))()}function kn(e){return{link:An.useMemo(()=>({inline:!0}),[])}}var An;function jn(){return(jn=t((()=>{An=e(n())})))()}var Mn,z;function Nn(){return(Nn=t((()=>{Mn=e(n()),f(),Sn(),wn(),On(),jn(),z=Mn.forwardRef((e,t)=>{let n=xn(e,t),i=kn(n);return Dn(n),r(`useMessageBarBodyStyles_unstable`)(n),Cn(n,i)}),z.displayName=`MessageBarBody`})))()}var B,Pn;function Fn(){return(Fn=t((()=>{B=e(n()),v(),_(),Pn=(e,t)=>{let n=B.Children.map(e.children??[],e=>B.isValidElement(e)&&e.type!==B.Fragment?e:null).filter(Boolean);return{components:{root:`div`},root:c(y(`div`,{ref:t,...e}),{elementType:`div`}),children:n,animate:e.animate??`exit-only`,enterStyles:``,exitStyles:``}}})))()}var In;function Ln(){return(Ln=t((()=>{oe(),ae(),le(),ve(),In=se(({animate:e})=>{let t=ce.durationGentle;return{enter:e===`both`?[fe({direction:`enter`,duration:t}),ge({direction:`enter`,outY:`-100%`,duration:t})]:[],exit:fe({direction:`exit`,duration:t})}})})))()}var Rn;function zn(){return(zn=t((()=>{g(),yt(),Ln(),me(),Rn=e=>l(e.root,{children:l(vt,{children:e.children.map(t=>l(In,{animate:e.animate,unmountOnExit:!0,children:l(_e,{children:t})},t.key))})})})))()}var Bn,Vn;function Hn(){return(Hn=t((()=>{d(),Bn={root:`fui-MessageBarGroup`},Vn=e=>(e.root.className=u(Bn.root,e.root.className),e)})))()}var Un,Wn;function Gn(){return(Gn=t((()=>{Un=e(n()),f(),Fn(),zn(),Hn(),Wn=Un.forwardRef((e,t)=>{let n=Pn(e,t);return Vn(n),r(`useMessageBarGroupStyles_unstable`)(n),Rn(n)}),Wn.displayName=`MessageBarGroup`})))()}function V(e){return e===`error`?`assertive`:`polite`}function Kn({intent:e,shape:t}){let n=G[e];return(0,U.jsx)(I,{intent:e,shape:t,politeness:V(e),children:(0,U.jsxs)(z,{children:[(0,U.jsx)(L,{children:n.title}),` `,n.body]})})}function qn({className:e,style:t}){let[n,r]=(0,H.useState)(`home`);return(0,U.jsx)(tt,{className:e,style:t,items:Yn,footerItems:Xn,collapsible:!0,expandedWidth:Zn,defaultOpenItemIds:[`home`,`alerts`,`settings`],selectedItemId:n,onSelect:r})}var H,U,W,G,Jn,Yn,Xn,Zn,Qn,K,q,J,Y,X,Z,Q,$,$n;function er(){return(er=t((()=>{nt(),Ue(),qe(),$e(),Ye(),Jt(),bn(),Nn(),Gn(),an(),Qe(),o(),h(),we(),Re(),ke(),Ie(),xe(),H=n(),rt(),Ve(),U=be(),W=s({stack:{display:`flex`,flexDirection:`column`,gap:p.spacingVerticalM,width:`100%`,maxWidth:`960px`},sectionLabel:{display:`block`,marginBottom:p.spacingVerticalS,fontWeight:p.fontWeightSemibold,color:p.colorNeutralForeground2},section:{display:`flex`,flexDirection:`column`,gap:p.spacingVerticalXL,width:`100%`,maxWidth:`960px`},appShell:{display:`flex`,flexDirection:`column`,width:`100%`,maxWidth:`960px`,borderRadius:p.borderRadiusLarge,border:`1px solid ${p.colorNeutralStroke2}`,overflow:`hidden`,backgroundColor:p.colorNeutralBackground1},appBody:{display:`flex`,flexDirection:`column`,gap:p.spacingVerticalS,padding:p.spacingHorizontalXL,minHeight:`160px`},appBodyTitle:{fontSize:p.fontSizeBase500,fontWeight:p.fontWeightSemibold,color:p.colorNeutralForeground1},appBodyText:{color:p.colorNeutralForeground2},card:{display:`flex`,flexDirection:`column`,gap:p.spacingVerticalL,width:`100%`,maxWidth:`640px`,padding:p.spacingHorizontalXL,borderRadius:p.borderRadiusXLarge,backgroundColor:p.colorNeutralBackground1,boxShadow:p.shadow16},cardTitle:{fontSize:p.fontSizeBase500,fontWeight:p.fontWeightSemibold,color:p.colorNeutralForeground1},cardText:{color:p.colorNeutralForeground2},fullShell:{height:`100vh`,display:`grid`,gridTemplateRows:`48px auto 1fr`,backgroundColor:p.colorNeutralBackground4,overflow:`hidden`},fullSuiteHeader:{position:`sticky`,top:0,zIndex:10,backgroundColor:p.colorNeutralBackground4},fullBody:{minHeight:0,display:`flex`,flexDirection:`row`,overflow:`hidden`},fullRail:{flexShrink:0,height:`100%`},fullWorkspace:{flexGrow:1,minWidth:0,height:`100%`,display:`flex`,flexDirection:`column`,overflow:`hidden`,backgroundColor:p.colorNeutralBackground2},fullPageHeaderStack:{flexShrink:0,paddingTop:p.spacingVerticalS,paddingRight:p.spacingHorizontalXXL,paddingLeft:p.spacingHorizontalXXL,backgroundColor:p.colorNeutralBackground2},fullPageScroll:{minHeight:0,flex:1,overflow:`auto`,display:`flex`,flexDirection:`column`,gap:p.spacingVerticalL,paddingTop:p.spacingVerticalL,paddingRight:p.spacingHorizontalXXL,paddingBottom:p.spacingVerticalXXL,paddingLeft:p.spacingHorizontalXXL,backgroundColor:p.colorNeutralBackground2},scopeLabel:{fontSize:p.fontSizeBase200,fontWeight:p.fontWeightSemibold,color:p.colorNeutralForeground3,textTransform:`uppercase`,letterSpacing:`0.06em`},fullSection:{display:`flex`,flexDirection:`column`,gap:p.spacingVerticalM,padding:p.spacingHorizontalL,borderRadius:p.borderRadiusLarge,backgroundColor:p.colorNeutralBackground1,border:`1px solid ${p.colorNeutralStroke2}`},fullSectionTitle:{fontSize:p.fontSizeBase400,fontWeight:p.fontWeightSemibold,color:p.colorNeutralForeground1},fullCardGrid:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(240px, 1fr))`,gap:p.spacingHorizontalL},fullCard:{display:`flex`,flexDirection:`column`,gap:p.spacingVerticalS,padding:p.spacingHorizontalL},fullCardTitle:{fontSize:p.fontSizeBase300,fontWeight:p.fontWeightSemibold,color:p.colorNeutralForeground1},fullCardText:{color:p.colorNeutralForeground2,fontSize:p.fontSizeBase200}}),G={info:{title:`Scheduled maintenance`,body:`Background indexing runs tonight at 02:00. No action is required.`},success:{title:`Changes saved`,body:`Your configuration was updated and applied to all devices.`},warning:{title:`Certificate expiring`,body:`The TLS certificate for this device expires in 7 days. Renew it to avoid downtime.`},error:{title:`Connection failed`,body:`The device could not be reached. Check the network and try again.`}},Jn=[{id:`alerts`,icon:(0,U.jsx)(Te,{}),ariaLabel:`Alerts`},{id:`settings`,icon:(0,U.jsx)(Se,{}),ariaLabel:`Settings`}],Yn=[{id:`home`,label:`Home`,icon:(0,U.jsx)(Fe,{}),selectedIcon:(0,U.jsx)(Le,{}),children:[{id:`home-overview`,label:`Overview`},{id:`home-activity`,label:`Activity`}]},{id:`alerts`,label:`Alerts`,icon:(0,U.jsx)(Te,{}),selectedIcon:(0,U.jsx)(Ee,{}),children:[{id:`alerts-active`,label:`Active`},{id:`alerts-resolved`,label:`Resolved`}]},{id:`settings`,label:`Settings`,icon:(0,U.jsx)(Se,{}),selectedIcon:(0,U.jsx)(Ce,{}),children:[{id:`settings-storage`,label:`Storage`},{id:`settings-security`,label:`Security`}]}],Xn=[{id:`site`,label:`Site`,icon:(0,U.jsx)(Ae,{}),selectedIcon:(0,U.jsx)(Oe,{})}],Zn=260,Qn={title:`UI patterns/Message Bar`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:'\nA message bar is an inline, persistent surface for status, notification, and system\nmessages. Built from native Fluent v9 `MessageBar` primitives.\n\nUse a **global** (full-width, `shape="square"`) bar for messages that affect the whole\npage, and a **container** (rounded) bar for messages scoped to a card, panel, or form\nsection. The `intent` prop drives semantic color and icon — never use raw colors.\n\nSet `politeness="assertive"` for errors and keep `polite` for everything else.\n        '}}}},K={name:`Intents (info / success / warning / error)`,render:()=>{let e=W();return(0,U.jsx)(`div`,{className:e.stack,children:[`info`,`success`,`warning`,`error`].map(e=>(0,U.jsx)(Kn,{intent:e},e))})}},q={name:`Global (full-width, app top)`,render:()=>{let e=W();return(0,U.jsxs)(`div`,{className:e.appShell,children:[(0,U.jsxs)(I,{intent:`warning`,shape:`square`,politeness:`polite`,children:[(0,U.jsxs)(z,{children:[(0,U.jsx)(L,{children:`Recurring warning`}),` Two devices report intermittent connectivity. Review their network settings.`]}),(0,U.jsx)(R,{containerAction:(0,U.jsx)(w,{appearance:`transparent`,icon:(0,U.jsx)(C,{}),"aria-label":`Dismiss message`}),children:(0,U.jsx)(w,{children:`Review devices`})})]}),(0,U.jsxs)(`div`,{className:e.appBody,children:[(0,U.jsx)(T,{as:`h2`,className:e.appBodyTitle,children:`Dashboard`}),(0,U.jsx)(T,{className:e.appBodyText,children:`Page content sits below the global message bar.`})]})]})}},J={name:`Container level (inside a card)`,render:()=>{let e=W();return(0,U.jsxs)(`div`,{className:e.card,children:[(0,U.jsx)(T,{as:`h2`,className:e.cardTitle,children:`Network settings`}),(0,U.jsxs)(I,{intent:`error`,politeness:`assertive`,children:[(0,U.jsxs)(z,{children:[(0,U.jsx)(L,{children:`Couldn't apply settings`}),` The gateway rejected the new DNS configuration. Verify the address and try again.`]}),(0,U.jsx)(R,{children:(0,U.jsx)(w,{children:`Try again`})})]}),(0,U.jsx)(T,{className:e.cardText,children:`The rest of the form fields would appear here.`})]})}},Y={name:`Placement hierarchy (app / page / section / card)`,parameters:{layout:`fullscreen`,docs:{description:{story:`A full suite shell — app header, navigation rail, and page header — hosting a message bar at each scope: app → page → section → card. Each bar sits at the boundary of the scope it applies to, so its width and placement signal what it affects.`}}},render:()=>{let e=W();return(0,U.jsxs)(`div`,{className:e.fullShell,children:[(0,U.jsx)(He,{className:e.fullSuiteHeader,productName:`Axis Management`,showSearch:!0,searchPlaceholder:`Search systems and devices`,launcherOrganizationItems:Be,utilityActions:Jn}),(0,U.jsxs)(I,{intent:`error`,shape:`square`,politeness:`assertive`,children:[(0,U.jsxs)(z,{children:[(0,U.jsx)(L,{children:`App-wide service advisory`}),` The Americas region is experiencing degraded connectivity. Some devices may be unreachable.`]}),(0,U.jsx)(R,{containerAction:(0,U.jsx)(w,{appearance:`transparent`,icon:(0,U.jsx)(C,{}),"aria-label":`Dismiss message`}),children:(0,U.jsx)(w,{children:`Status page`})})]}),(0,U.jsxs)(`div`,{className:e.fullBody,children:[(0,U.jsx)(qn,{className:e.fullRail,style:{height:`100%`}}),(0,U.jsxs)(`div`,{className:e.fullWorkspace,children:[(0,U.jsx)(`div`,{className:e.fullPageHeaderStack,children:(0,U.jsx)(it,{breadcrumbs:[{label:`Management`,onClick:()=>{}},{label:`Systems`}],title:`System Overview`,status:{label:`Operational`,meta:`All systems healthy`,color:`success`},tabs:[{value:`overview`,label:`Overview`},{value:`activity`,label:`Activity`}],defaultSelectedTab:`overview`})}),(0,U.jsxs)(`div`,{className:e.fullPageScroll,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(T,{className:e.scopeLabel,children:`Page`}),(0,U.jsxs)(I,{intent:`warning`,politeness:`polite`,style:{marginTop:p.spacingVerticalXS},children:[(0,U.jsxs)(z,{children:[(0,U.jsx)(L,{children:`Scheduled maintenance`}),` A maintenance window is planned tonight at 02:00. Recording may be briefly unavailable.`]}),(0,U.jsx)(R,{containerAction:(0,U.jsx)(w,{appearance:`transparent`,icon:(0,U.jsx)(C,{}),"aria-label":`Dismiss message`}),children:(0,U.jsx)(w,{children:`View details`})})]})]}),(0,U.jsxs)(`section`,{className:e.fullSection,"aria-label":`Storage`,children:[(0,U.jsx)(T,{as:`h2`,className:e.fullSectionTitle,children:`Storage`}),(0,U.jsx)(T,{className:e.scopeLabel,children:`Section — Storage`}),(0,U.jsx)(I,{intent:`info`,politeness:`polite`,children:(0,U.jsxs)(z,{children:[(0,U.jsx)(L,{children:`Retention policy updated`}),` `,`Capacity planning for this section was recalculated for the new retention policy.`]})}),(0,U.jsxs)(`div`,{className:e.fullCardGrid,children:[(0,U.jsxs)(et,{className:e.fullCard,children:[(0,U.jsx)(T,{className:e.scopeLabel,children:`Card — Capacity`}),(0,U.jsx)(T,{className:e.fullCardTitle,children:`Node A1`}),(0,U.jsx)(I,{intent:`warning`,politeness:`polite`,children:(0,U.jsxs)(z,{children:[(0,U.jsx)(L,{children:`Approaching capacity`}),` `,`This node is at 89% utilization.`]})}),(0,U.jsx)(`div`,{children:(0,U.jsx)(We,{appearance:`tint`,color:`warning`,children:`Monitor`})})]}),(0,U.jsxs)(et,{className:e.fullCard,children:[(0,U.jsx)(T,{className:e.fullCardTitle,children:`Node B2`}),(0,U.jsx)(T,{className:e.fullCardText,children:`Operating normally at 42% utilization with full redundancy.`}),(0,U.jsx)(`div`,{children:(0,U.jsx)(We,{appearance:`tint`,color:`success`,children:`Healthy`})})]})]})]})]})]})]})]})}},X={name:`With actions and dismiss`,render:()=>{let e=W();return(0,U.jsx)(`div`,{className:e.stack,children:(0,U.jsxs)(I,{intent:`info`,politeness:`polite`,children:[(0,U.jsxs)(z,{children:[(0,U.jsx)(L,{children:`New firmware available`}),` Version 11.2 improves stability. `,(0,U.jsx)(Ze,{href:`#`,children:`Read the changelog`}),`.`]}),(0,U.jsxs)(R,{containerAction:(0,U.jsx)(w,{appearance:`transparent`,icon:(0,U.jsx)(C,{}),"aria-label":`Dismiss message`}),children:[(0,U.jsx)(w,{children:`Update now`}),(0,U.jsx)(w,{children:`Later`})]})]})})}},Z={name:`Single-line vs multiline`,render:()=>{let e=W(),t=`A scheduled maintenance window will temporarily take recording offline between 02:00 and 04:00. Connected cameras will reconnect automatically once the window completes, but live view may be unavailable during this period.`;return(0,U.jsxs)(`div`,{className:e.section,children:[(0,U.jsxs)(`div`,{className:e.stack,children:[(0,U.jsx)(T,{className:e.sectionLabel,children:`Single-line (default) — truncates`}),(0,U.jsxs)(I,{intent:`info`,politeness:`polite`,children:[(0,U.jsxs)(z,{children:[(0,U.jsx)(L,{children:`Maintenance`}),` `,t]}),(0,U.jsx)(R,{children:(0,U.jsx)(w,{children:`Details`})})]})]}),(0,U.jsxs)(`div`,{className:e.stack,children:[(0,U.jsx)(T,{className:e.sectionLabel,children:`Multiline — wraps`}),(0,U.jsxs)(I,{intent:`info`,politeness:`polite`,layout:`multiline`,children:[(0,U.jsxs)(z,{children:[(0,U.jsx)(L,{children:`Maintenance`}),` `,t]}),(0,U.jsxs)(R,{children:[(0,U.jsx)(w,{children:`Details`}),(0,U.jsx)(w,{children:`Dismiss`})]})]})]})]})}},Q={name:`Stacked group (dismissible)`,render:()=>{let e=W(),t=[{id:1,intent:`error`},{id:2,intent:`warning`},{id:3,intent:`success`},{id:4,intent:`info`}],[n,r]=(0,H.useState)(t),i=e=>r(t=>t.filter(t=>t.id!==e));return(0,U.jsxs)(`div`,{className:e.stack,children:[(0,U.jsx)(Wn,{animate:`both`,className:e.stack,children:n.map(e=>{let t=G[e.intent];return(0,U.jsxs)(I,{intent:e.intent,politeness:V(e.intent),children:[(0,U.jsxs)(z,{children:[(0,U.jsx)(L,{children:t.title}),` `,t.body]}),(0,U.jsx)(R,{containerAction:(0,U.jsx)(w,{appearance:`transparent`,icon:(0,U.jsx)(C,{}),"aria-label":`Dismiss message`,onClick:()=>i(e.id)})})]},e.id)})}),n.length===0&&(0,U.jsx)(w,{onClick:()=>r(t),children:`Reset messages`})]})}},$={argTypes:{intent:{control:`select`,options:[`info`,`success`,`warning`,`error`],description:`Semantic intent driving color and icon.`},shape:{control:`inline-radio`,options:[`rounded`,`square`],description:`Rounded for container level, square for global/full-width.`},layout:{control:`inline-radio`,options:[`singleline`,`multiline`,`auto`],description:`Single-line truncates; multiline wraps.`},title:{control:`text`},body:{control:`text`}},args:{intent:`info`,shape:`rounded`,layout:`singleline`,title:`Heads up`,body:`This is a configurable message bar. Adjust the controls to explore states.`},render:e=>{let t=W(),n=e.intent;return(0,U.jsx)(`div`,{className:t.stack,children:(0,U.jsxs)(I,{intent:n,shape:e.shape,layout:e.layout,politeness:V(n),children:[(0,U.jsxs)(z,{children:[(0,U.jsx)(L,{children:e.title}),` `,e.body]}),(0,U.jsx)(R,{containerAction:(0,U.jsx)(w,{appearance:`transparent`,icon:(0,U.jsx)(C,{}),"aria-label":`Dismiss message`}),children:(0,U.jsx)(w,{children:`Action`})})]})})}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Intents (info / success / warning / error)",
  render: () => {
    const styles = useStyles();
    const intents: MessageBarIntent[] = ["info", "success", "warning", "error"];
    return <div className={styles.stack}>
        {intents.map(intent => <BasicBar key={intent} intent={intent} />)}
      </div>;
  }
}`,...K.parameters?.docs?.source},description:{story:"The four intents. `intent` controls the semantic color and leading icon, so the\nmeaning is conveyed without relying on color alone (the icon and title carry it too).",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`**Global placement.** A full-width bar pinned to the top of an app shell. Use
\`shape="square"\` so the bar spans edge-to-edge with no rounded corners.

Reserve global bars for messages that affect the entire view — e.g. a service-wide
outage or a recurring system warning.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:"**Container placement.** A rounded bar (the default `shape`) scoped to a card or\nform section. Use it for messages that relate only to the content of that container.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`**Placement hierarchy.** A message bar lives at the boundary of the scope it
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
once — escalate, don't overwhelm.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:"Bars can carry both **primary actions** and an icon-only **dismiss** button.\n\n- Action buttons go in `MessageBarActions` children.\n- The dismiss button goes in the `containerAction` slot and **must** have an\n  `aria-label`.\n- Inline `Link`s in the body are fine for navigational follow-ups.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Long messages should use \`layout="multiline"\` so the body wraps and the actions
move to their own row instead of truncating. Compare with the default single-line
bar, which truncates overflowing text.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:'Stack multiple related bars in a `MessageBarGroup`. The group keeps spacing\nconsistent and animates bars in and out (`animate="both"`). Dismissing a bar\nremoves it from state while preserving the surrounding layout and focus order.',...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Interactive playground. Use the controls to change the intent, title, body, shape,
and layout. Politeness follows the intent automatically (assertive for errors).`,...$.parameters?.docs?.description}}},$n=[`Intents`,`GlobalMessageBar`,`ContainerLevelMessageBar`,`PlacementHierarchy`,`WithActions`,`Layout`,`StackedGroup`,`Playground`]})))()}er();export{J as ContainerLevelMessageBar,q as GlobalMessageBar,K as Intents,Z as Layout,Y as PlacementHierarchy,$ as Playground,Q as StackedGroup,X as WithActions,$n as __namedExportsOrder,Qn as default};