import{r as u,j as s,a as D,q as W}from"./app-B80Z8Zbz.js";import{A as X}from"./ApplicationLogo-CMGZnKAJ.js";import{X as q}from"./transition-D9hbUxuw.js";const S=u.createContext(),L=({children:e})=>{const[t,r]=u.useState(!1),o=()=>{r(i=>!i)};return s.jsx(S.Provider,{value:{open:t,setOpen:r,toggleOpen:o},children:s.jsx("div",{className:"relative",children:e})})},G=({children:e})=>{const{open:t,setOpen:r,toggleOpen:o}=u.useContext(S);return s.jsxs(s.Fragment,{children:[s.jsx("div",{onClick:o,children:e}),t&&s.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},Y=({align:e="right",width:t="48",contentClasses:r="py-1 bg-white dark:bg-gray-700",children:o})=>{const{open:i,setOpen:a}=u.useContext(S);let d="origin-top";e==="left"?d="ltr:origin-top-left rtl:origin-top-right start-0":e==="right"&&(d="ltr:origin-top-right rtl:origin-top-left end-0");let n="";return t==="48"&&(n="w-48"),s.jsx(s.Fragment,{children:s.jsx(q,{show:i,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:s.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${d} ${n}`,onClick:()=>a(!1),children:s.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:o})})})})},Z=({className:e="",children:t,...r})=>s.jsx(D,{...r,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out "+e,children:t});L.Trigger=G;L.Content=Y;L.Link=Z;const k=L;function T({active:e=!1,className:t="",children:r,...o}){return s.jsx(D,{...o,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(e?"border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:border-indigo-700 ":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 ")+t,children:r})}function z({active:e=!1,className:t="",children:r,...o}){return s.jsx(D,{...o,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${e?"border-indigo-400 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300":"border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${t}`,children:r})}let J={data:""},Q=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||J,V=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,K=/\/\*[^]*?\*\/|  +/g,R=/\n+/g,b=(e,t)=>{let r="",o="",i="";for(let a in e){let d=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+d+";":o+=a[1]=="f"?b(d,a):a+"{"+b(d,a[1]=="k"?"":t)+"}":typeof d=="object"?o+=b(d,t?t.replace(/([^,])+/g,n=>a.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):a):d!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=b.p?b.p(a,d):a+":"+d+";")}return r+(t&&i?t+"{"+i+"}":i)+o},h={},_=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+_(e[r]);return t}return e},ee=(e,t,r,o,i)=>{let a=_(e),d=h[a]||(h[a]=(l=>{let c=0,p=11;for(;c<l.length;)p=101*p+l.charCodeAt(c++)>>>0;return"go"+p})(a));if(!h[d]){let l=a!==e?e:(c=>{let p,f,m=[{}];for(;p=V.exec(c.replace(K,""));)p[4]?m.shift():p[3]?(f=p[3].replace(R," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][p[1]]=p[2].replace(R," ").trim();return m[0]})(e);h[d]=b(i?{["@keyframes "+d]:l}:l,r?"":"."+d)}let n=r&&h.g?h.g:null;return r&&(h.g=h[d]),((l,c,p,f)=>{f?c.data=c.data.replace(f,l):c.data.indexOf(l)===-1&&(c.data=p?l+c.data:c.data+l)})(h[d],t,o,n),d},te=(e,t,r)=>e.reduce((o,i,a)=>{let d=t[a];if(d&&d.call){let n=d(r),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;d=l?"."+l:n&&typeof n=="object"?n.props?"":b(n,""):n===!1?"":n}return o+i+(d??"")},"");function A(e){let t=this||{},r=e.call?e(t.p):e;return ee(r.unshift?r.raw?te(r,[].slice.call(arguments,1),t.p):r.reduce((o,i)=>Object.assign(o,i&&i.call?i(t.p):i),{}):r,Q(t.target),t.g,t.o,t.k)}let B,P,F;A.bind({g:1});let y=A.bind({k:1});function re(e,t,r,o){b.p=t,B=e,P=r,F=o}function v(e,t){let r=this||{};return function(){let o=arguments;function i(a,d){let n=Object.assign({},a),l=n.className||i.className;r.p=Object.assign({theme:P&&P()},n),r.o=/ *go\d+/.test(l),n.className=A.apply(r,o)+(l?" "+l:"");let c=e;return e[0]&&(c=n.as||e,delete n.as),F&&c[0]&&F(n),B(c,n)}return i}}var ae=e=>typeof e=="function",O=(e,t)=>ae(e)?e(t):e,se=(()=>{let e=0;return()=>(++e).toString()})(),U=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),oe=20,E=new Map,ie=1e3,H=e=>{if(E.has(e))return;let t=setTimeout(()=>{E.delete(e),j({type:4,toastId:e})},ie);E.set(e,t)},ne=e=>{let t=E.get(e);t&&clearTimeout(t)},I=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,oe)};case 1:return t.toast.id&&ne(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return e.toasts.find(a=>a.id===r.id)?I(e,{type:1,toast:r}):I(e,{type:0,toast:r});case 3:let{toastId:o}=t;return o?H(o):e.toasts.forEach(a=>{H(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===o||o===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+i}))}}},$=[],C={toasts:[],pausedAt:void 0},j=e=>{C=I(C,e),$.forEach(t=>{t(C)})},de={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},le=(e={})=>{let[t,r]=u.useState(C);u.useEffect(()=>($.push(r),()=>{let i=$.indexOf(r);i>-1&&$.splice(i,1)}),[t]);let o=t.toasts.map(i=>{var a,d;return{...e,...e[i.type],...i,duration:i.duration||((a=e[i.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||de[i.type],style:{...e.style,...(d=e[i.type])==null?void 0:d.style,...i.style}}});return{...t,toasts:o}},ce=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||se()}),w=e=>(t,r)=>{let o=ce(t,e,r);return j({type:2,toast:o}),o.id},g=(e,t)=>w("blank")(e,t);g.error=w("error");g.success=w("success");g.loading=w("loading");g.custom=w("custom");g.dismiss=e=>{j({type:3,toastId:e})};g.remove=e=>j({type:4,toastId:e});g.promise=(e,t,r)=>{let o=g.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(i=>(g.success(O(t.success,i),{id:o,...r,...r==null?void 0:r.success}),i)).catch(i=>{g.error(O(t.error,i),{id:o,...r,...r==null?void 0:r.error})}),e};var ue=(e,t)=>{j({type:1,toast:{id:e,height:t}})},pe=()=>{j({type:5,time:Date.now()})},ge=e=>{let{toasts:t,pausedAt:r}=le(e);u.useEffect(()=>{if(r)return;let a=Date.now(),d=t.map(n=>{if(n.duration===1/0)return;let l=(n.duration||0)+n.pauseDuration-(a-n.createdAt);if(l<0){n.visible&&g.dismiss(n.id);return}return setTimeout(()=>g.dismiss(n.id),l)});return()=>{d.forEach(n=>n&&clearTimeout(n))}},[t,r]);let o=u.useCallback(()=>{r&&j({type:6,time:Date.now()})},[r]),i=u.useCallback((a,d)=>{let{reverseOrder:n=!1,gutter:l=8,defaultPosition:c}=d||{},p=t.filter(x=>(x.position||c)===(a.position||c)&&x.height),f=p.findIndex(x=>x.id===a.id),m=p.filter((x,M)=>M<f&&x.visible).length;return p.filter(x=>x.visible).slice(...n?[m+1]:[0,m]).reduce((x,M)=>x+(M.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:ue,startPause:pe,endPause:o,calculateOffset:i}}},me=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,fe=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,xe=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,he=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${me} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${fe} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${xe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ye=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,be=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ye} 1s linear infinite;
`,ve=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,je=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ke=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ve} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${je} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,we=v("div")`
  position: absolute;
`,Ne=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ee=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$e=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ce=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return t!==void 0?typeof t=="string"?u.createElement($e,null,t):t:r==="blank"?null:u.createElement(Ne,null,u.createElement(be,{...o}),r!=="loading"&&u.createElement(we,null,r==="error"?u.createElement(he,{...o}):u.createElement(ke,{...o})))},Oe=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,De=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Le="0%{opacity:0;} 100%{opacity:1;}",Ae="0%{opacity:1;} 100%{opacity:0;}",Me=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Te=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ze=(e,t)=>{let r=e.includes("top")?1:-1,[o,i]=U()?[Le,Ae]:[Oe(r),De(r)];return{animation:t?`${y(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Pe=u.memo(({toast:e,position:t,style:r,children:o})=>{let i=e.height?ze(e.position||t||"top-center",e.visible):{opacity:0},a=u.createElement(Ce,{toast:e}),d=u.createElement(Te,{...e.ariaProps},O(e.message,e));return u.createElement(Me,{className:e.className,style:{...i,...r,...e.style}},typeof o=="function"?o({icon:a,message:d}):u.createElement(u.Fragment,null,a,d))});re(u.createElement);var Fe=({id:e,className:t,style:r,onHeightUpdate:o,children:i})=>{let a=u.useCallback(d=>{if(d){let n=()=>{let l=d.getBoundingClientRect().height;o(e,l)};n(),new MutationObserver(n).observe(d,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return u.createElement("div",{ref:a,className:t,style:r},i)},Ie=(e,t)=>{let r=e.includes("top"),o=r?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:U()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...o,...i}},Se=A`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,N=16,Re=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:i,containerStyle:a,containerClassName:d})=>{let{toasts:n,handlers:l}=ge(r);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:N,left:N,right:N,bottom:N,pointerEvents:"none",...a},className:d,onMouseEnter:l.startPause,onMouseLeave:l.endPause},n.map(c=>{let p=c.position||t,f=l.calculateOffset(c,{reverseOrder:e,gutter:o,defaultPosition:t}),m=Ie(p,f);return u.createElement(Fe,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?Se:"",style:m},c.type==="custom"?O(c.message,c):i?i(c):u.createElement(Pe,{toast:c,position:p}))}))},He=g;function _e(){const e=W();return u.useEffect(()=>{var t;(t=e.props)!=null&&t.message&&e.props.message.length!==0&&He(e.props.message.body,{position:"top-right",type:e.props.message.type,duration:2e3})},[e.props.message]),s.jsx(s.Fragment,{children:s.jsx(Re,{})})}function Xe({user:e,header:t,children:r}){const[o,i]=u.useState(!1);return s.jsxs("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900",children:[s.jsxs("nav",{className:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700",children:[s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"flex justify-between h-16",children:[s.jsxs("div",{className:"flex",children:[s.jsx("div",{className:"shrink-0 flex items-center",children:s.jsx(D,{href:"/",children:s.jsx(X,{className:"block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"})})}),s.jsx("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:s.jsx(T,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),s.jsx("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:s.jsx(T,{href:route("galleries.index"),active:route().current("galleries.index"),children:"Gallery"})}),s.jsx("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:s.jsx(T,{href:route("manage-products.index"),active:route().current("manage-products.index"),children:"Products"})})]}),s.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:s.jsx("div",{className:"ms-3 relative",children:s.jsxs(k,{children:[s.jsx(k.Trigger,{children:s.jsx("span",{className:"inline-flex rounded-md",children:s.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150",children:[e.name,s.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),s.jsxs(k.Content,{children:[s.jsx(k.Link,{href:route("profile.edit"),children:"Profile"}),s.jsx(k.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),s.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:s.jsx("button",{onClick:()=>i(a=>!a),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",children:s.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[s.jsx("path",{className:o?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),s.jsx("path",{className:o?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),s.jsxs("div",{className:(o?"block":"hidden")+" sm:hidden",children:[s.jsx("div",{className:"pt-2 pb-3 space-y-1",children:s.jsx(z,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),s.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600",children:[s.jsxs("div",{className:"px-4",children:[s.jsx("div",{className:"font-medium text-base text-gray-800 dark:text-gray-200",children:e.name}),s.jsx("div",{className:"font-medium text-sm text-gray-500",children:e.email})]}),s.jsxs("div",{className:"mt-3 space-y-1",children:[s.jsx(z,{href:route("profile.edit"),children:"Profile"}),s.jsx(z,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),t&&s.jsx("header",{className:"bg-white dark:bg-gray-800 shadow",children:s.jsx("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:t})}),s.jsx(_e,{}),s.jsx("main",{children:r})]})}export{Xe as A};
