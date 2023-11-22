import{_ as j}from"./DialogCloseBtn-35cd036e.js";import{r as z,g as F}from"./operations-b99d373a.js";import{D as L,l as p,aV as R,O as U,r as J,o as D,c as q,q as e,w as t,s as r,I as w,aX as b,H as v,az as x,G as B,t as E,y as h,n as I,z as $,F as G,R as H,b as M,W as P,U as C,aZ as O,a_ as W}from"./index-5f1e036d.js";import{V as X}from"./VDialog-c2a8b0a4.js";import{V as Z}from"./VDataTable-abff0085.js";import{V as K}from"./VChip-c99b15f1.js";import"./VOverlay-315386a7.js";import"./lazy-9d6f5b63.js";import"./dialog-transition-c18f9302.js";import"./VCheckboxBtn-0b3e4e8e.js";import"./VSelectionControl-82ad58b5.js";import"./VSelect-38820d74.js";import"./VList-99b9fa4c.js";import"./ssrBoot-dcc7d968.js";import"./VDivider-ca899a5a.js";import"./VMenu-9df5e73f.js";import"./filter-4e25312c.js";import"./VTable-0f962fff.js";const Q={class:"d-flex gap-1"},Y={__name:"OperationsTable",props:{operations:{type:Array,default:[]},search:{type:String,default:""},loading:{type:Boolean,default:!1}},setup(m){const f=m,i=L().t,d=p([]),a=p(!1),u=R(),l=p(!1),y=U(()=>[{title:i("Name"),key:"name"},{title:i("Phone Number"),key:"phone"},{title:i("Created Date"),key:"created_at"},{title:i("Actions"),key:"actions"}]),c=n=>{if(parseInt(n)!==0)return{color:"success",text:"Active"};if(parseInt(n)===0)return{color:"secondary",text:"Disabled"}},T=(n,o,_,V)=>_.raw.name.toLowerCase().includes(o.toLowerCase())?_.raw.name.toLowerCase().includes(o.toLowerCase()):!1;let k={};const N=n=>{k=n,d.value=JSON.stringify(n),d.value=JSON.parse(d.value),l.value=!0},A=async()=>{a.value=!0;try{await z(d.value),f.operations.splice(f.operations.indexOf(k),1),u.success("Operation deleted successfully"),a.value=!1,l.value=!1}catch(n){u.error(n.response.data.message)}};return(n,o)=>{const _=j,V=J("IconBtn");return D(),q(G,null,[e(X,{modelValue:r(l),"onUpdate:modelValue":o[3]||(o[3]=s=>B(l)?l.value=s:null),persistent:"",class:"v-dialog-sm"},{default:t(()=>[e(_,{onClick:o[0]||(o[0]=s=>l.value=!r(l))}),e(w,{title:"Delete Operation"},{default:t(()=>[e(b,null,{default:t(()=>[v(" Are you sure that you want to delete this Operation? ")]),_:1}),e(b,{class:"d-flex justify-end gap-3 flex-wrap"},{default:t(()=>[e(x,{color:"secondary",variant:"tonal",onClick:o[1]||(o[1]=s=>l.value=!1),disabled:r(a)},{default:t(()=>[v(" Cancel ")]),_:1},8,["disabled"]),e(x,{onClick:o[2]||(o[2]=s=>A()),loading:r(a)},{default:t(()=>[v(" Delete ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{elevation:"0",rounded:"0",class:"px-0 mb-0 pb-5 mt-10 pt-2",loading:m.loading},{default:t(()=>[e(r(Z),{items:m.operations,headers:r(y),search:m.search,"items-per-page":15,"custom-filter":T},{"item.status":t(({item:s})=>[e(K,{color:c(s.status).color,class:E([`text-${c(s.status).color}`,"font-weight-medium"]),size:"small"},{default:t(()=>[v(h(c(s.status).text),1)]),_:2},1032,["color","class"])]),"item.actions":t(({item:s})=>[I("div",Q,[e(V,{onClick:S=>n.$router.push(`operations/edit/${s.raw.id}`)},{default:t(()=>[e($,{icon:"mdi-pencil-outline"})]),_:2},1032,["onClick"]),e(V,null,{default:t(()=>[e($,{icon:"mdi-delete-outline",onClick:S=>N(s.value)},null,8,["onClick"])]),_:2},1024)])]),_:1},8,["items","headers","search"])]),_:1},8,["loading"])],64)}}},ee={class:"text-h4 pt-3 pb-2 px-3"},te={__name:"index",setup(m){const f=p([]),g=p(""),i=p(!1),d=()=>{i.value=!0,F().then(({data:a,meta:u})=>{f.value=a.data}).finally(()=>{i.value=!1})};return H(()=>{d()}),(a,u)=>{const l=W,y=Y;return D(),M(C,{class:"mt-4 px-4"},{default:t(()=>[e(P,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:t(()=>[I("p",ee,h(a.$t("Operations")),1),e(C,{class:"px-7",align:"center",justify:"space-between"},{default:t(()=>[e(C,{align:"center",justify:"center","justify-lg":"start"},{default:t(()=>[e(l,{modelValue:r(g),"onUpdate:modelValue":u[0]||(u[0]=c=>B(g)?g.value=c:null),placeholder:a.$t("Search for an Operation"),class:"mx-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","placeholder"])]),_:1}),e(x,{onClick:u[1]||(u[1]=c=>a.$router.push("operations/add/"))},{default:t(()=>[e($,{start:"",icon:"tabler-plus"}),v(h(a.$t("Add Operation")),1)]),_:1})]),_:1}),e(y,{loading:r(i),operations:r(f),search:r(g)},null,8,["loading","operations","search"])]),_:1})]),_:1})}}};typeof O=="function"&&O(te);export{te as default};