import{X as R,ab as A,ac as D,ag as H,ai as U,aj as $,ak as p,aR as q,aH as E,av as y,at as M,aw as X,au as j,aS as z,ar as J,a1 as O,aT as Q,q as a,aU as Y,M as W,N as F,a0 as V,z as B,aV as G,o as K,b as Z,w as t,n as C,y as i,s as n,L as h,H as m,aP as ee,aQ as ae,Q as te,aW as oe}from"./index-fffee4b5.js";import{V as se}from"./VMenu-4fd9f68b.js";import{V as le,a as k,b as N,c as ne}from"./VList-64d39d97.js";import{V as re}from"./VListItemAction-84b369e5.js";import{V as ie}from"./VDivider-d5fa4db8.js";import"./VOverlay-3e266e6d.js";import"./lazy-0a1fdcc1.js";import"./dialog-transition-929671c2.js";import"./ssrBoot-38b417bf.js";const x=e=>e?e.split(" ").map(r=>r.charAt(0).toUpperCase()).join(""):"";const T=R()({name:"VBadge",inheritAttrs:!1,props:{bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:A,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...D(),...H({location:"top end"}),...U(),...$(),...p(),...q({transition:"scale-rotate-transition"})},setup(e,o){const{backgroundColorClasses:r,backgroundColorStyles:l}=E(y(e,"color")),{roundedClasses:c}=M(e),{t:u}=X(),{textColorClasses:d,textColorStyles:f}=j(y(e,"textColor")),{themeClasses:w}=z(),{locationStyles:I}=J(e,!0,s=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(s)?+(e.offsetY??0):["left","right"].includes(s)?+(e.offsetX??0):0));return O(()=>{const s=Number(e.content),g=!e.max||isNaN(s)?e.content:s<=+e.max?s:`${e.max}+`,[L,P]=Q(o.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return a(e.tag,V({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},P,{style:e.style}),{default:()=>{var b,v;return[a("div",{class:"v-badge__wrapper"},[(v=(b=o.slots).default)==null?void 0:v.call(b),a(Y,{transition:e.transition},{default:()=>{var S,_;return[W(a("span",V({class:["v-badge__badge",w.value,r.value,c.value,d.value],style:[l.value,f.value,e.inline?{}:I.value],"aria-atomic":"true","aria-label":u(e.label,s),"aria-live":"polite",role:"status"},L),[e.dot?void 0:o.slots.badge?(_=(S=o.slots).badge)==null?void 0:_.call(S):e.icon?a(B,{icon:e.icon},null):g]),[[F,e.modelValue]])]}})])]}})}),{}}}),_e={__name:"UserProfile",setup(e){var u;(u=JSON.parse(localStorage.getItem("userDara")))==null||u.type;const o=ee(),r=G(),l=JSON.parse(localStorage.getItem("userData")),c=()=>{r.success("Logged out"),localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),ae.Howler.stop(),te().RESET_PUSHER(),oe.push(o.query.to?String(o.query.to):"/")};return(d,f)=>(K(),Z(T,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",bordered:"",color:"success"},{default:t(()=>[a(h,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:t(()=>[C("span",null,i(n(x)(n(l).name)),1),a(se,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:t(()=>[a(le,null,{default:t(()=>[a(k,null,{prepend:t(()=>[a(re,{start:""},{default:t(()=>[a(T,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:t(()=>[a(h,{color:"primary",variant:"tonal"},{default:t(()=>[C("span",null,i(n(x)(n(l).name)),1)]),_:1})]),_:1})]),_:1})]),default:t(()=>[a(N,{class:"font-weight-semibold"},{default:t(()=>[m(i(n(l).name),1)]),_:1}),a(ne,null,{default:t(()=>[m(i(n(l).type),1)]),_:1})]),_:1}),a(ie,{class:"my-2"}),a(k,{onClick:c},{prepend:t(()=>[a(B,{class:"me-2",icon:"tabler-logout",size:"22"})]),default:t(()=>[a(N,null,{default:t(()=>[m(i(d.$t("logout")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{_e as default};