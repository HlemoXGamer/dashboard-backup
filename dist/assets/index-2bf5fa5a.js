import{_ as z}from"./DialogCloseBtn-9cfe71b9.js";import{r as F,g as L}from"./agents-df5940bb.js";import{l as m,aV as O,D as R,O as U,r as J,o as D,c as q,q as e,w as t,s as n,I as w,aX as A,H as g,az as x,G as B,t as E,y as h,n as I,z as $,F as G,R as H,b as M,W as P,U as C,aZ as b,a_ as W}from"./index-d2581156.js";import{V as X}from"./VDialog-eee115d7.js";import{V as Z}from"./VDataTable-94bcafd9.js";import{V as K}from"./VChip-2c42ae55.js";import"./VOverlay-a01ea84e.js";import"./lazy-5e287f74.js";import"./dialog-transition-ed0dbcb2.js";import"./VCheckboxBtn-68cb53d5.js";import"./VSelectionControl-2699808d.js";import"./VSelect-801d8977.js";import"./VList-3c9a1f65.js";import"./ssrBoot-91f799f7.js";import"./VDivider-72799677.js";import"./VMenu-5e1a829e.js";import"./filter-06ec5503.js";import"./VTable-25121804.js";const Q={class:"d-flex gap-1"},Y={__name:"AgentsTable",props:{agents:{type:Array,default:[]},search:{type:String,default:""},loading:{type:Boolean,default:!1}},setup(p){const f=p,r=m([]),i=m(!1),v=O(),a=m(!1),d=R().t,y=U(()=>[{title:d("Name"),key:"name"},{title:d("Phone Number"),key:"phone"},{title:d("Created Date"),key:"created_at"},{title:d("Actions"),key:"actions"}]),c=o=>{if(parseInt(o)!==0)return{color:"success",text:"Active"};if(parseInt(o)===0)return{color:"secondary",text:"Disabled"}},T=(o,s,_,V)=>_.raw.name.toLowerCase().includes(s.toLowerCase())?_.raw.name.toLowerCase().includes(s.toLowerCase()):!1;let k={};const N=o=>{k=o,r.value=JSON.stringify(o),r.value=JSON.parse(r.value),a.value=!0},S=async()=>{i.value=!0;try{await F(r.value),f.agents.splice(f.agents.indexOf(k),1),v.success("Agent deleted successfully"),i.value=!1,a.value=!1}catch(o){v.error(o.response.data.message)}};return(o,s)=>{const _=z,V=J("IconBtn");return D(),q(G,null,[e(X,{modelValue:n(a),"onUpdate:modelValue":s[3]||(s[3]=l=>B(a)?a.value=l:null),persistent:"",class:"v-dialog-sm"},{default:t(()=>[e(_,{onClick:s[0]||(s[0]=l=>a.value=!n(a))}),e(w,{title:"Delete Agent"},{default:t(()=>[e(A,null,{default:t(()=>[g(" Are you sure that you want to delete this Agent? ")]),_:1}),e(A,{class:"d-flex justify-end gap-3 flex-wrap"},{default:t(()=>[e(x,{color:"secondary",variant:"tonal",onClick:s[1]||(s[1]=l=>a.value=!1),disabled:n(i)},{default:t(()=>[g(" Cancel ")]),_:1},8,["disabled"]),e(x,{onClick:s[2]||(s[2]=l=>S()),loading:n(i)},{default:t(()=>[g(" Delete ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{elevation:"0",rounded:"0",class:"px-0 mb-0 pb-5 mt-10 pt-2",loading:p.loading},{default:t(()=>[e(n(Z),{items:p.agents,headers:n(y),search:p.search,"items-per-page":15,"custom-filter":T},{"item.status":t(({item:l})=>[e(K,{color:c(l.status).color,class:E([`text-${c(l.status).color}`,"font-weight-medium"]),size:"small"},{default:t(()=>[g(h(c(l.status).text),1)]),_:2},1032,["color","class"])]),"item.actions":t(({item:l})=>[I("div",Q,[e(V,{onClick:j=>o.$router.push(`agents/edit/${l.raw.id}`)},{default:t(()=>[e($,{icon:"mdi-pencil-outline"})]),_:2},1032,["onClick"]),e(V,null,{default:t(()=>[e($,{icon:"mdi-delete-outline",onClick:j=>N(l.value)},null,8,["onClick"])]),_:2},1024)])]),_:1},8,["items","headers","search"])]),_:1},8,["loading"])],64)}}},ee={class:"text-h4 pt-3 pb-2 px-3"},te={__name:"index",setup(p){const f=m([]),r=m(""),i=m(!1),v=()=>{i.value=!0,L().then(({data:a,meta:u})=>{f.value=a.data}).finally(()=>{i.value=!1})};return H(()=>{v()}),(a,u)=>{const d=W,y=Y;return D(),M(C,{class:"mt-4 px-4"},{default:t(()=>[e(P,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:t(()=>[I("p",ee,h(a.$t("Agents")),1),e(C,{class:"px-7",align:"center",justify:"space-between"},{default:t(()=>[e(C,{align:"center",justify:"center","justify-lg":"start"},{default:t(()=>[e(d,{modelValue:n(r),"onUpdate:modelValue":u[0]||(u[0]=c=>B(r)?r.value=c:null),placeholder:a.$t("Search for an Agent"),class:"mx-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","placeholder"])]),_:1}),e(x,{onClick:u[1]||(u[1]=c=>a.$router.push("agents/add/"))},{default:t(()=>[e($,{start:"",icon:"tabler-plus"}),g(h(a.$t("Add Agent")),1)]),_:1})]),_:1}),e(y,{loading:n(i),agents:n(f),search:n(r)},null,8,["loading","agents","search"])]),_:1})]),_:1})}}};typeof b=="function"&&b(te);export{te as default};
