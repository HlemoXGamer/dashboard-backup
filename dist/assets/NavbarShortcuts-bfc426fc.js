import{k as f,r as h,o,b as r,w as e,q as t,z as n,I as g,J as y,K as V,H as x,s as p,P as v,U as C,c as S,F as A,a as I,W as k,t as w,L as B,n as d,y as _}from"./index-36d8cfe3.js";import{V as z}from"./VMenu-f17f0b8f.js";import{V as D}from"./VDivider-baaf873e.js";import"./VOverlay-ea98bdf6.js";import"./lazy-7047357e.js";import"./dialog-transition-67149c45.js";const N={class:"text-base font-weight-medium mt-2 mb-0"},q={class:"text-sm"},F={__name:"Shortcuts",props:{togglerIcon:{type:String,required:!1,default:"tabler-layout-grid-add"},shortcuts:{type:Array,required:!0}},setup(l){const s=l,c=f();return(m,i)=>{const u=h("IconBtn");return o(),r(u,null,{default:e(()=>[t(n,{size:"26",icon:s.togglerIcon},null,8,["icon"]),t(z,{activator:"parent",offset:"14px",location:"bottom end"},{default:e(()=>[t(g,{width:"340","max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(y,{class:"py-4"},{append:e(()=>[t(u,null,{default:e(()=>[t(n,{icon:"tabler-layout-grid-add"})]),_:1})]),default:e(()=>[t(V,null,{default:e(()=>[x("Shortcuts")]),_:1})]),_:1}),t(D),t(p(v),{options:{wheelPropagation:!1}},{default:e(()=>[t(C,{class:"ma-0 mt-n1"},{default:e(()=>[(o(!0),S(A,null,I(s.shortcuts,(a,b)=>(o(),r(k,{key:a.title,cols:"6",class:w(["text-center border-t cursor-pointer pa-4 shortcut-icon",(b+1)%2?"border-e":""]),onClick:M=>p(c).push(a.to)},{default:e(()=>[t(B,{variant:"tonal",size:"48"},{default:e(()=>[t(n,{icon:a.icon},null,8,["icon"])]),_:2},1024),d("h6",N,_(a.title),1),d("span",q,_(a.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},T={__name:"NavbarShortcuts",setup(l){const s=[{icon:"tabler-calendar",title:"Calendar",subtitle:"Appointments",to:{name:"apps-calendar"}},{icon:"tabler-file",title:"Invoice App",subtitle:"Manage Accounts",to:{name:"apps-invoice-list"}},{icon:"tabler-user",title:"Users",subtitle:"Manage Users",to:{name:"apps-user-list"}},{icon:"tabler-layout",title:"Dashboard",subtitle:"Dashboard Analytics",to:{name:"dashboards-analytics"}},{icon:"tabler-settings",title:"Settings",subtitle:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{icon:"tabler-help",title:"Help Center",subtitle:"FAQs & Articles",to:{name:"pages-help-center"}}];return(c,m)=>{const i=F;return o(),r(i,{shortcuts:s})}}};export{T as default};
