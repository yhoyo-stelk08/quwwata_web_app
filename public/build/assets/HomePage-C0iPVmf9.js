import{r as x,j as i,a as A}from"./app-B80Z8Zbz.js";import{a as C,b as p,M as Y,i as V,c as M,d as R,f as w,e as S,r as G,p as X,v as q,g as J,h as K,w as U,j as F,m as B,u as $,A as Z}from"./AppLayout-DBP16D4E.js";import"./index-dYLDRLN0.js";function Q(e){const t=C(()=>p(e)),{isStatic:n}=x.useContext(Y);if(n){const[,s]=x.useState(e);x.useEffect(()=>t.on("change",s),[])}return t}const ee=e=>e&&typeof e=="object"&&e.mix,te=e=>ee(e)?e.mix:void 0;function se(...e){const t=!Array.isArray(e[0]),n=t?0:-1,s=e[0+n],l=e[1+n],r=e[2+n],a=e[3+n],o=V(l,r,{mixer:te(r[0]),...a});return t?o(s):o}function _(e,t){const n=Q(t()),s=()=>n.set(t());return s(),M(()=>{const l=()=>w.preRender(s,!1,!0),r=e.map(a=>a.on("change",l));return()=>{r.forEach(a=>a()),R(s)}}),n}function le(e){S.current=[],e();const t=_(S.current,e);return S.current=void 0,t}function ne(e,t,n,s){if(typeof e=="function")return le(e);const l=typeof t=="function"?t:se(t,n,s);return Array.isArray(e)?k(e,l):k([e],([r])=>l(r))}function k(e,t){const n=C(()=>[]);return _(e,()=>{n.length=0;const s=e.length;for(let l=0;l<s;l++)n[l]=e[l].get();return t(n)})}const j=new WeakMap;let m;function ie(e,t){if(t){const{inlineSize:n,blockSize:s}=t[0];return{width:n,height:s}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function re({target:e,contentRect:t,borderBoxSize:n}){var s;(s=j.get(e))===null||s===void 0||s.forEach(l=>{l({target:e,contentSize:t,get size(){return ie(e,n)}})})}function ae(e){e.forEach(re)}function oe(){typeof ResizeObserver>"u"||(m=new ResizeObserver(ae))}function ce(e,t){m||oe();const n=G(e);return n.forEach(s=>{let l=j.get(s);l||(l=new Set,j.set(s,l)),l.add(t),m==null||m.observe(s)}),()=>{n.forEach(s=>{const l=j.get(s);l==null||l.delete(t),l!=null&&l.size||m==null||m.unobserve(s)})}}const v=new Set;let y;function de(){y=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};v.forEach(n=>n(t))},window.addEventListener("resize",y)}function fe(e){return v.add(e),y||de(),()=>{v.delete(e),!v.size&&y&&(y=void 0)}}function ue(e,t){return typeof e=="function"?fe(e):ce(e,t)}const me=50,T=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),xe=()=>({time:0,x:T(),y:T()}),he={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function W(e,t,n,s){const l=n[t],{length:r,position:a}=he[t],o=l.current,c=n.time;l.current=e[`scroll${a}`],l.scrollLength=e[`scroll${r}`]-e[`client${r}`],l.offset.length=0,l.offset[0]=0,l.offset[1]=l.scrollLength,l.progress=X(0,l.scrollLength,l.current);const f=s-c;l.velocity=f>me?0:q(l.current-o,f)}function ge(e,t,n){W(e,"x",t,n),W(e,"y",t,n),t.time=n}function pe(e,t){const n={x:0,y:0};let s=e;for(;s&&s!==t;)if(s instanceof HTMLElement)n.x+=s.offsetLeft,n.y+=s.offsetTop,s=s.offsetParent;else if(s.tagName==="svg"){const l=s.getBoundingClientRect();s=s.parentElement;const r=s.getBoundingClientRect();n.x+=l.left-r.left,n.y+=l.top-r.top}else if(s instanceof SVGGraphicsElement){const{x:l,y:r}=s.getBBox();n.x+=l,n.y+=r;let a=null,o=s.parentNode;for(;!a;)o.tagName==="svg"&&(a=o),o=s.parentNode;s=a}else break;return n}const we={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},L={start:0,center:.5,end:1};function H(e,t,n=0){let s=0;if(e in L&&(e=L[e]),typeof e=="string"){const l=parseFloat(e);e.endsWith("px")?s=l:e.endsWith("%")?e=l/100:e.endsWith("vw")?s=l/100*document.documentElement.clientWidth:e.endsWith("vh")?s=l/100*document.documentElement.clientHeight:e=l}return typeof e=="number"&&(s=t*e),n+s}const ye=[0,0];function je(e,t,n,s){let l=Array.isArray(e)?e:ye,r=0,a=0;return typeof e=="number"?l=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?l=e.split(" "):l=[e,L[e]?e:"0"]),r=H(l[0],n,s),a=H(l[1],t),r-a}const ve={x:0,y:0};function be(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function Se(e,t,n){const{offset:s=we.All}=n,{target:l=e,axis:r="y"}=n,a=r==="y"?"height":"width",o=l!==e?pe(l,e):ve,c=l===e?{width:e.scrollWidth,height:e.scrollHeight}:be(l),f={width:e.clientWidth,height:e.clientHeight};t[r].offset.length=0;let u=!t[r].interpolate;const b=s.length;for(let d=0;d<b;d++){const z=je(s[d],f[a],c[a],o[r]);!u&&z!==t[r].interpolatorOffsets[d]&&(u=!0),t[r].offset[d]=z}u&&(t[r].interpolate=V(t[r].offset,J(s)),t[r].interpolatorOffsets=[...t[r].offset]),t[r].progress=t[r].interpolate(t[r].current)}function Ne(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let s=t;for(;s&&s!==e;)n.x.targetOffset+=s.offsetLeft,n.y.targetOffset+=s.offsetTop,s=s.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function Ee(e,t,n,s={}){return{measure:()=>Ne(e,s.target,n),update:l=>{ge(e,n,l),(s.offset||s.target)&&Se(e,n,s)},notify:()=>t(n)}}const h=new WeakMap,I=new WeakMap,N=new WeakMap,O=e=>e===document.documentElement?window:e;function Le(e,{container:t=document.documentElement,...n}={}){let s=N.get(t);s||(s=new Set,N.set(t,s));const l=xe(),r=Ee(t,e,l,n);if(s.add(r),!h.has(t)){const o=()=>{for(const d of s)d.measure()},c=()=>{for(const d of s)d.update(K.timestamp)},f=()=>{for(const d of s)d.notify()},u=()=>{w.read(o,!1,!0),w.read(c,!1,!0),w.update(f,!1,!0)};h.set(t,u);const b=O(t);window.addEventListener("resize",u,{passive:!0}),t!==document.documentElement&&I.set(t,ue(t,u)),b.addEventListener("scroll",u,{passive:!0})}const a=h.get(t);return w.read(a,!1,!0),()=>{var o;R(a);const c=N.get(t);if(!c||(c.delete(r),c.size))return;const f=h.get(t);h.delete(t),f&&(O(t).removeEventListener("scroll",f),(o=I.get(t))===null||o===void 0||o(),window.removeEventListener("resize",f))}}function D(e,t){U(!!(!t||t.current))}const Ce=()=>({scrollX:p(0),scrollY:p(0),scrollXProgress:p(0),scrollYProgress:p(0)});function Be({container:e,target:t,layoutEffect:n=!0,...s}={}){const l=C(Ce);return(n?M:x.useEffect)(()=>(D("target",t),D("container",e),Le(({x:a,y:o})=>{l.scrollX.set(a.current),l.scrollXProgress.set(a.progress),l.scrollY.set(o.current),l.scrollYProgress.set(o.progress)},{...s,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(s.offset)]),l}const ze="/build/assets/images-2-C9-YlFLw.jpeg",Ae="/build/assets/images-3-Cpz-B2Co.jpeg",ke="/build/assets/images-4-CZW8UwpK.jpeg",Te="/build/assets/images-5-BORKxo1G.jpeg",P=[{image:ze,alt:"image 2"},{image:Ae,alt:"image 3"},{image:ke,alt:"image 4"},{image:Te,alt:"image 5"}],We=()=>{const[e,t]=x.useState(0);return x.useEffect(()=>{const n=setInterval(()=>{t(s=>s<P.length-1?s+1:0)},5e3);return()=>clearInterval(n)},[]),i.jsx("div",{className:"relative w-full h-full overflow-hidden",children:P.map((n,s)=>i.jsx("img",{src:n.image,alt:n.alt,className:`absolute w-full h-full object-cover top-0 left-0 transition-opacity duration-1000 ease-in-out  ${s===e?"opacity-100":"opacity-0"}`},s))})},He=()=>{const e=F(),{scrollY:t}=Be();let n=[0,100,300,700],s=[1,.7,.5,0];e<769&&(n=[0,200,500,1200,1800],s=[1,.9,.8,.5,0]);const l=ne(t,n,s);return i.jsxs(B.header,{className:"flex flex-col md:flex-row my-12 mx-auto w-[90%] max-w-7xl shadow-xl shadow-slate-700",style:{opacity:l},children:[i.jsx("div",{className:"w-full h-[500px] md:w-[32rem] md:h-[32rem]",children:i.jsx(We,{})}),i.jsxs("div",{className:"px-6 bg-gradient-to-r from-slate-800 to-slate-300 rounded-tr-lg rounded-br-lg w-full",children:[i.jsxs("div",{className:"my-6 mt-16 xl:mt-12 lg:mt-16 md:mt-24 pl-10 text-center md:text-start text-[#ddd6cb]",children:[i.jsxs("h1",{className:"my-8 text-4xl font-bold font-raleway md:tracking-[1.5rem] tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-950",children:[i.jsx("span",{className:"text-slate-400 font-roboto_condensed text-6xl xl:text-8xl lg:text-6xl md:text-4xl",children:"Next"}),i.jsx("span",{className:"xl:text-3xl lg:text-3xl md:text-2xl font-raleway xl:tracking-[1rem] lg:tracking-[0.8rem]",children:"Level Bow"}),i.jsx("br",{}),i.jsx("span",{className:"text-slate-400 font-roboto_condensed text-6xl xl:text-8xl lg:text-6xl md:text-4xl",children:"for"}),i.jsx("br",{}),i.jsx("span",{className:"text-slate-400 font-roboto_condensed text-6xl xl:text-8xl lg:text-6xl md:text-4xl",children:"Next"}),i.jsx("span",{className:"xl:text-3xl lg:text-3xl md:text-2xl font-raleway xl:tracking-[1rem] lg:tracking-[0.8rem]",children:"Level Archer"})]}),i.jsx("p",{className:"md:text-xl",children:"Taste and Feel Our Next Level Bow."})]}),i.jsxs("div",{className:"flex flex-col md:flex-row gap-4 mb-6 justify-center items-center md:justify-normal pl-10",children:[i.jsx(A,{className:"inline-block mt-4 pl-0 py-1 text-slate-200 hover:text-slate-300 active:text-slate-200 md:text-base",href:"#",children:"Join the Community"}),i.jsx(A,{className:"inline-block mt-4 md:mt-2 rounded-xl text-slate-200 py-1 px-4 font-bold bg-gradient-to-br from-slate-600 to-slate-200 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-300 md:text-base",href:"#",children:"Explore Our Collections"})]})]})]})},Ie=He,Oe="_swiperContainer_6etct_1",De="_swiperSlide_6etct_5",E={swiperContainer:Oe,swiperSlide:De},g=({pagination:e,title:t,timeDelay:n,imgData:s,isDataArray:l,isAutoPlay:r,className:a})=>i.jsxs("div",{className:`relative xs:mt-10 flex justify-center ${a}`,children:["",i.jsxs("swiper-container",{class:E.swiperContainer,pagination:e,effect:"cube","grab-cursor":"true",loop:"true","autoplay-delay":r?n:void 0,"autoplay-disable-on-interaction":r?"false":void 0,"cube-effect-shadow":"true","cube-effect-slide-shadows":"true","cube-effect-shadow-offset":"20","cube-effect-shadow-scale":"0.94",children:[l&&s.map((o,c)=>i.jsx("swiper-slide",{class:E.swiperSlide,children:i.jsxs("div",{className:"relative w-full h-full",children:[i.jsx("img",{src:`../../../images/category-images-desktop/${o}`,alt:"Slide 2",className:"w-full h-full object-cover"}),i.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50",children:t?i.jsx("h2",{className:"text-xl font-bold",children:t}):null})]})},c)),!l&&s.map((o,c)=>i.jsx("swiper-slide",{class:E.swiperSlide,children:i.jsxs("div",{className:"relative w-full h-full",children:[i.jsx("img",{src:`../../../images/category-images-mobile/${o.imgSrc}`,alt:`Slide ${c+1}`,className:"w-full h-full object-cover"}),i.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50",children:i.jsx("h2",{className:"text-xl font-bold",children:o.imgTitle})})]})},c))]})]}),Pe=[{imgSrc:"laminated-bow.jpeg",imgTitle:"Laminated Bow"},{imgSrc:"flat-bow.jpeg",imgTitle:"Fiber Flat Bow"},{imgSrc:"arrows.jpeg",imgTitle:"Arrows"},{imgSrc:"accessories.jpeg",imgTitle:"Accessories"}],Ve=["flat-bow-1.jpeg","flat-bow-2.jpeg","flat-bow-3.jpeg","flat-bow-4.jpeg"],Me=["arrows-1.jpeg","arrows-2.jpeg","arrows-3.jpeg","arrows-4.jpeg"],Re=["accessories-1.jpeg","accessories-2.jpeg","accessories-3.jpeg","accessories-4.jpeg"],Fe=["laminated-bow-1.jpeg","laminated-bow-2.jpeg","laminated-bow-3.jpeg","laminated-bow-4.jpeg"],$e=()=>{const e=F();return i.jsx(i.Fragment,{children:e>640?i.jsxs("section",{className:"container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mx-auto mt-8  max-w-[90%]",children:[i.jsx(g,{pagination:!1,timeDelay:6e3,title:"Laminated Bow",imgData:Fe,isDataArray:!0,isAutoPlay:!1}),i.jsx(g,{pagination:!1,timeDelay:6e3,title:"Fiber Flat Bow",imgData:Ve,isDataArray:!0,isAutoPlay:!1}),i.jsx(g,{pagination:!1,timeDelay:6e3,title:"Arrows",imgData:Me,isDataArray:!0,isAutoPlay:!1}),i.jsx(g,{pagination:!1,timeDelay:6e3,title:"Accessories",imgData:Re,isDataArray:!0,isAutoPlay:!1})]}):i.jsx(g,{className:"mx-10",pagination:!1,timeDelay:6e3,isDataArray:!1,imgData:Pe,isAutoPlay:!0})})},_e=()=>{const e=x.useRef(null),t=$(e,{once:!1});return i.jsxs(B.section,{className:"w-full mx-auto mt-20 mb-16 xl:mt-36 flex flex-col justify-center items-center",ref:e,initial:{opacity:0,y:200},animate:{opacity:t?1:0,y:t?0:200},transition:{duration:1},children:[i.jsxs("div",{className:"flex flex-col justify-center items-center w-full max-w-7xl",children:[i.jsx("h1",{className:"text-center text-slate-200 font-raleway text-6xl",children:"Why choose our bow?"}),i.jsx("p",{className:"text-center text-slate-200 font-raleway italic my-8 px-8",children:"Our bows are more than just a piece of equipment; they are a testament to the skill and artistry of ancient bowyers. Each bow is carefully handcrafted using high-quality materials, ensuring durability and exceptional shooting experience. Whether you are a seasoned archer or a beginner, our bows provide a unique and rewarding way to connect with the history and spirit of archery."})]}),i.jsx($e,{})]})},Ye=_e,Ge=()=>{const e=x.useRef(null),t=$(e,{once:!1});return i.jsx(B.div,{className:"flex w-full items-center justify-center mt-20",ref:e,initial:{opacity:0,y:200},animate:{opacity:t?1:0,y:t?0:200},transition:{duration:1},children:i.jsx("div",{className:"h-full w-full p-12 text-center max-w-5xl",children:i.jsxs("swiper-container",{class:"mySwiper",pagination:"true","pagination-clickable":"true",loop:"true","space-between":"30","centered-slides":"true","autoplay-delay":"5000","autoplay-disable-on-interaction":"false",style:{"--swiper-pagination-color":"#cdd4cf","--swiper-pagination-bullet-inactive-color":"#999999","--swiper-pagination-bullet-inactive-opacity":"1","--swiper-pagination-bullet-size":"8px","--swiper-pagination-bullet-horizontal-gap":"6px"},children:[i.jsx("swiper-slide",{children:i.jsxs("div",{className:"flex flex-col text-lg items-center text-slate-200 justify-center h-32 my-8 italic",children:[i.jsx("p",{children:`"The Turkish Laminated Bow improved my accuracy and helped me secure first place at the national championships. It's a must-have for serious archers"`}),i.jsx("h3",{className:"my-4 py-8 text-slate-800",children:"Sarah Thompson"})]})}),i.jsx("swiper-slide",{children:i.jsxs("div",{className:"flex flex-col text-lg items-center text-slate-200 justify-center h-32 my-8 italic",children:[i.jsx("p",{children:'"The Tartar Laminated Bow is both authentic and high-performing. It drew admiration at our reenactment event and feels like a piece of history in my hands"'}),i.jsx("h3",{className:"my-4 py-8 text-slate-800",children:"Michael Johnson"})]})}),i.jsx("swiper-slide",{children:i.jsxs("div",{className:"flex flex-col text-lg items-center text-slate-200 justify-center h-32 my-8 italic",children:[i.jsx("p",{children:'"The Turkish Flat Fiber Bow made learning archery enjoyable. Its ease of handling and accuracy have significantly improved my aim and control."'}),i.jsx("h3",{className:"my-4 py-8 text-slate-800",children:"Emily Davis"})]})}),i.jsx("swiper-slide",{children:i.jsxs("div",{className:"flex flex-col text-lg items-center text-slate-200 justify-center h-32 my-8 italic",children:[i.jsx("p",{children:'"The Cremean Laminated Bow is powerful and precise. It helped me take down a deer with a single shot last season, making it essential for serious bowhunters."'}),i.jsx("h3",{className:"my-4 py-8 text-slate-800",children:"Robert Martinez"})]})})]})})})},Xe=Ge;function Ue(){return i.jsxs(Z,{children:[i.jsx(Ie,{}),i.jsx(Ye,{}),i.jsx(Xe,{})]})}export{Ue as default};
