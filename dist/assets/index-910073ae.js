import{_ as S}from"./DialogCloseBtn-c824f2d7.js";import{r as j,g as F}from"./markters-322d5445.js";import{l as c,aV as L,D as O,O as R,r as U,o as M,c as z,q as e,w as a,s as l,I as w,aX as x,H as v,az as V,G as B,n as T,z as $,F as J,R as q,b as E,W as G,y as b,U as C,aZ as D,a_ as H}from"./index-ae436fe7.js";import{V as P}from"./VDialog-3d6519df.js";import{V as W}from"./VDataTable-ea7817f5.js";import"./VOverlay-b7c1cab0.js";import"./lazy-98a42def.js";import"./dialog-transition-568cfe1a.js";import"./VCheckboxBtn-b63b227c.js";import"./VSelectionControl-36f39ce1.js";import"./VSelect-37a65f33.js";import"./VList-5353bc34.js";import"./ssrBoot-23d40ca5.js";import"./VDivider-b42cad0f.js";import"./VMenu-2753b03a.js";import"./VChip-4bd7dba5.js";import"./filter-c9d71b19.js";import"./VTable-367a6ea3.js";const X={class:"d-flex gap-1"},Z={__name:"MarketersTable",props:{marketers:{type:Array,default:[]},search:{type:String,default:""},loading:{type:Boolean,default:!1}},setup(m){const p=m,r=c([]),o=c(!1),f=L(),t=c(!1),d=O().t,_=R(()=>[{title:d("Name"),key:"name"},{title:d("Phone Number"),key:"phone"},{title:d("Created Date"),key:"created_at"},{title:d("Actions"),key:"actions"}]),k=(n,s,g,y)=>g.raw.name.toLowerCase().includes(s.toLowerCase())?g.raw.name.toLowerCase().includes(s.toLowerCase()):!1;let h={};const I=n=>{h=n,r.value=JSON.stringify(n),r.value=JSON.parse(r.value),t.value=!0},N=async()=>{o.value=!0;try{await j(r.value),p.marketers.splice(p.marketers.indexOf(h),1),f.success("Marketer deleted successfully"),o.value=!1,t.value=!1}catch(n){f.error(n.response.data.message)}};return(n,s)=>{const g=S,y=U("IconBtn");return M(),z(J,null,[e(P,{modelValue:l(t),"onUpdate:modelValue":s[3]||(s[3]=i=>B(t)?t.value=i:null),persistent:"",class:"v-dialog-sm"},{default:a(()=>[e(g,{onClick:s[0]||(s[0]=i=>t.value=!l(t))}),e(w,{title:"Delete Marketer"},{default:a(()=>[e(x,null,{default:a(()=>[v(" Are you sure that you want to delete this Marketer? ")]),_:1}),e(x,{class:"d-flex justify-end gap-3 flex-wrap"},{default:a(()=>[e(V,{color:"secondary",variant:"tonal",onClick:s[1]||(s[1]=i=>t.value=!1),disabled:l(o)},{default:a(()=>[v(" Cancel ")]),_:1},8,["disabled"]),e(V,{onClick:s[2]||(s[2]=i=>N()),loading:l(o)},{default:a(()=>[v(" Delete ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{elevation:"0",rounded:"0",class:"px-0 mb-0 pb-5 mt-10 pt-2",loading:m.loading},{default:a(()=>[e(l(W),{items:m.marketers,headers:l(_),search:m.search,"items-per-page":15,"custom-filter":k},{"item.actions":a(({item:i})=>[T("div",X,[e(y,{onClick:A=>n.$router.push(`marketers/edit/${i.raw.id}`)},{default:a(()=>[e($,{icon:"mdi-pencil-outline"})]),_:2},1032,["onClick"]),e(y,null,{default:a(()=>[e($,{icon:"mdi-delete-outline",onClick:A=>I(i.value)},null,8,["onClick"])]),_:2},1024)])]),_:1},8,["items","headers","search"])]),_:1},8,["loading"])],64)}}},K={class:"text-h4 pt-3 pb-2 px-3"},Q={__name:"index",setup(m){const p=c([]),r=c(""),o=c(!1),f=()=>{o.value=!0,F().then(({data:t,meta:u})=>{p.value=t.data}).finally(()=>{o.value=!1})};return q(()=>{f()}),(t,u)=>{const d=H,_=Z;return M(),E(C,{class:"mt-4 px-4"},{default:a(()=>[e(G,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:a(()=>[T("p",K,b(t.$t("Marketers")),1),e(C,{class:"px-7",align:"center",justify:"space-between"},{default:a(()=>[e(C,{align:"center",justify:"center","justify-lg":"start"},{default:a(()=>[e(d,{modelValue:l(r),"onUpdate:modelValue":u[0]||(u[0]=k=>B(r)?r.value=k:null),placeholder:t.$t("Search for a Marketer"),class:"mx-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","placeholder"])]),_:1}),e(V,{onClick:u[1]||(u[1]=k=>t.$router.push("marketers/add/"))},{default:a(()=>[e($,{start:"",icon:"tabler-plus"}),v(b(t.$t("Add Marketer")),1)]),_:1})]),_:1}),e(_,{loading:l(o),marketers:l(p),search:l(r)},null,8,["loading","marketers","search"])]),_:1})]),_:1})}}};typeof D=="function"&&D(Q);export{Q as default};
