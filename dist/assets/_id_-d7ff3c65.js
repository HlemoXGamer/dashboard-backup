import{_ as B}from"./OrdersTable-3ba803aa.js";import{l as s,aP as R,R as $,o as k,b as S,w as m,q as o,a2 as C,a1 as c,n as N,y as O,s as r,G as T,aZ as _,a_ as j}from"./index-c869d194.js";import{g as A}from"./areas-fcb49992.js";import{a as D}from"./branches-ecba557f.js";import{g as I}from"./cities-89d27fc1.js";import{g as P}from"./orders-52612d3a.js";import"./deliveries-4e877944.js";import"./deliveries-f611f6f3.js";import"./VDataTable-5f8f63bf.js";import"./VCheckboxBtn-afc87216.js";import"./VSelectionControl-43a717d4.js";import"./VSelect-a0dad563.js";import"./VList-cd8262bf.js";import"./ssrBoot-655fc28d.js";import"./VDivider-9f6a7662.js";import"./dialog-transition-cba1c577.js";import"./VMenu-a34876aa.js";import"./VOverlay-5749ee97.js";import"./lazy-1ec28e08.js";import"./VChip-27e400a7.js";import"./filter-1ae2559c.js";import"./VTable-ec73e090.js";import"./VPagination-dd1c86bd.js";const q={class:"text-h4 pb-0 mb-2"},F={__name:"[id]",setup(G){var d;const i=s([]),f=s([]),h=s([]),n=s(null),l=s(null),p=R().params.id,u=s([]),g=(d=JSON.parse(localStorage.getItem("userData")))==null?void 0:d.type,b=()=>{D().then(({data:t,meta:a})=>{i.value=t.data,l.value=i.value.filter(e=>e.id==p)[0]})},x=()=>{A().then(({data:t,meta:a})=>{h.value=t.data.map(e=>e.name)})},y=()=>{I().then(({data:t,meta:a})=>{f.value=t.data.map(e=>e.name)})},v=()=>{P({branch:p}).then(({data:t,meta:a})=>{u.value=t.data})};return $(()=>{g=="admin"&&(b(),y(),x(),v())}),(t,a)=>{const e=j,V=B;return k(),S(c,{class:"mt-4 px-4"},{default:m(()=>[o(C,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:m(()=>[o(c,{class:"pt-5 pb-0 px-5",align:"center",justify:"space-between"},{default:m(()=>[N("p",q,O(r(l)!==null?r(l).name_en:""),1)]),_:1}),o(c,{class:"px-4",align:"center",justify:"start"},{default:m(()=>[o(e,{modelValue:r(n),"onUpdate:modelValue":a[0]||(a[0]=w=>T(n)?n.value=w:null),placeholder:"Search by Product name",class:"mx-2 my-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue"])]),_:1}),o(V,{items:r(u),search:r(n)},null,8,["items","search"])]),_:1})]),_:1})}}};typeof _=="function"&&_(F);export{F as default};
