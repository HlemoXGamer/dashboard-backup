import{_ as j}from"./DialogCloseBtn-544004f3.js";import{r as z,g as F}from"./logistics-422e9f4f.js";import{l as m,aV as O,D as R,O as J,r as U,o as D,c as q,q as e,w as t,s as i,I as w,aX as b,H as g,az as x,G as B,t as E,y as h,n as I,z as $,F as G,R as H,b as M,a2 as P,a1 as C,aZ as L,a_ as X}from"./index-358c466b.js";import{V as Z}from"./VDialog-09c6c5a5.js";import{V as K}from"./VDataTable-bbf485fa.js";import{V as Q}from"./VChip-01fa3c4b.js";import"./VOverlay-2dca64b1.js";import"./lazy-0a540379.js";import"./dialog-transition-d456e6da.js";import"./VCheckboxBtn-9bbd9eb4.js";import"./VSelectionControl-32ddc2e6.js";import"./VSelect-5e4f7ae5.js";import"./VList-8b7c6abf.js";import"./ssrBoot-404c9b1f.js";import"./VDivider-a7998058.js";import"./VMenu-317b780d.js";import"./filter-4c18135b.js";import"./VTable-70707c6b.js";const W={class:"d-flex gap-1"},Y={__name:"LogisticsTable",props:{logistics:{type:Array,default:[]},search:{type:String,default:""},loading:{type:Boolean,default:!1}},setup(p){const f=p,n=m([]),r=m(!1),v=O(),s=m(!1),u=R().t,y=J(()=>[{title:u("Name"),key:"name"},{title:u("Phone Number"),key:"phone"},{title:u("Created Date"),key:"created_at"},{title:u("Actions"),key:"actions"}]),d=l=>{if(parseInt(l)!==0)return{color:"success",text:"Active"};if(parseInt(l)===0)return{color:"secondary",text:"Disabled"}},T=(l,a,_,V)=>_.raw.name.toLowerCase().includes(a.toLowerCase())?_.raw.name.toLowerCase().includes(a.toLowerCase()):!1;let k={};const N=l=>{k=l,n.value=JSON.stringify(l),n.value=JSON.parse(n.value),s.value=!0},A=async()=>{r.value=!0;try{await z(n.value),f.logistics.splice(f.logistics.indexOf(k),1),v.success("Logistic deleted successfully"),r.value=!1,s.value=!1}catch(l){v.error(l.response.data.message)}};return(l,a)=>{const _=j,V=U("IconBtn");return D(),q(G,null,[e(Z,{modelValue:i(s),"onUpdate:modelValue":a[3]||(a[3]=o=>B(s)?s.value=o:null),persistent:"",class:"v-dialog-sm"},{default:t(()=>[e(_,{onClick:a[0]||(a[0]=o=>s.value=!i(s))}),e(w,{title:"Delete Logistic"},{default:t(()=>[e(b,null,{default:t(()=>[g(" Are you sure that you want to delete this Logistic? ")]),_:1}),e(b,{class:"d-flex justify-end gap-3 flex-wrap"},{default:t(()=>[e(x,{color:"secondary",variant:"tonal",onClick:a[1]||(a[1]=o=>s.value=!1),disabled:i(r)},{default:t(()=>[g(" Cancel ")]),_:1},8,["disabled"]),e(x,{onClick:a[2]||(a[2]=o=>A()),loading:i(r)},{default:t(()=>[g(" Delete ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{elevation:"0",rounded:"0",class:"px-0 mb-0 pb-5 mt-10 pt-2",loading:p.loading},{default:t(()=>[e(i(K),{items:p.logistics,headers:i(y),search:p.search,"items-per-page":15,"custom-filter":T},{"item.status":t(({item:o})=>[e(Q,{color:d(o.status).color,class:E([`text-${d(o.status).color}`,"font-weight-medium"]),size:"small"},{default:t(()=>[g(h(d(o.status).text),1)]),_:2},1032,["color","class"])]),"item.actions":t(({item:o})=>[I("div",W,[e(V,{onClick:S=>l.$router.push(`logistics/edit/${o.raw.id}`)},{default:t(()=>[e($,{icon:"mdi-pencil-outline"})]),_:2},1032,["onClick"]),e(V,null,{default:t(()=>[e($,{icon:"mdi-delete-outline",onClick:S=>N(o.value)},null,8,["onClick"])]),_:2},1024)])]),_:1},8,["items","headers","search"])]),_:1},8,["loading"])],64)}}},ee={class:"text-h4 pt-3 pb-2 px-3"},te={__name:"index",setup(p){const f=m([]),n=m(""),r=m(!1),v=()=>{r.value=!0,F().then(({data:s,meta:c})=>{f.value=s.data}).finally(()=>{r.value=!1})};return H(()=>{v()}),(s,c)=>{const u=X,y=Y;return D(),M(C,{class:"mt-4 px-4"},{default:t(()=>[e(P,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:t(()=>[I("p",ee,h(s.$t("Logistics")),1),e(C,{class:"px-7",align:"center",justify:"space-between"},{default:t(()=>[e(C,{align:"center",justify:"center","justify-lg":"start"},{default:t(()=>[e(u,{modelValue:i(n),"onUpdate:modelValue":c[0]||(c[0]=d=>B(n)?n.value=d:null),placeholder:s.$t("Search for a Logistic"),class:"mx-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","placeholder"])]),_:1}),e(x,{onClick:c[1]||(c[1]=d=>s.$router.push("logistics/add/"))},{default:t(()=>[e($,{start:"",icon:"tabler-plus"}),g(h(s.$t("Add Logistic")),1)]),_:1})]),_:1}),e(y,{loading:i(r),logistics:i(f),search:i(n)},null,8,["loading","logistics","search"])]),_:1})]),_:1})}}};typeof L=="function"&&L(te);export{te as default};
