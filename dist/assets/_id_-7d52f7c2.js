import{_ as B}from"./OrdersTable-744ca239.js";import{l as s,aP as R,R as $,o as k,b as S,w as m,q as o,W as C,U as c,n as N,y as O,s as r,G as T,aZ as _,a_ as j}from"./index-36d8cfe3.js";import{g as A}from"./areas-357dff86.js";import{a as D}from"./branches-554dffa9.js";import{g as I}from"./cities-d878e1ce.js";import{g as P}from"./orders-ec09c951.js";import"./deliveries-a18d62c5.js";import"./deliveries-312e644f.js";import"./VDataTable-e542c293.js";import"./VCheckboxBtn-a58c2dae.js";import"./VSelectionControl-0b7649e7.js";import"./VSelect-67ad1458.js";import"./VList-1544eb7b.js";import"./ssrBoot-9eeea15f.js";import"./VDivider-baaf873e.js";import"./dialog-transition-67149c45.js";import"./VMenu-f17f0b8f.js";import"./VOverlay-ea98bdf6.js";import"./lazy-7047357e.js";import"./VChip-8213b9b6.js";import"./filter-cb535b89.js";import"./VTable-531ed029.js";import"./VPagination-7f23a1fe.js";const U={class:"text-h4 pb-0 mb-2"},q={__name:"[id]",setup(F){var d;const i=s([]),f=s([]),h=s([]),n=s(null),l=s(null),p=R().params.id,u=s([]),g=(d=JSON.parse(localStorage.getItem("userData")))==null?void 0:d.type,b=()=>{D().then(({data:t,meta:a})=>{i.value=t.data,l.value=i.value.filter(e=>e.id==p)[0]})},x=()=>{A().then(({data:t,meta:a})=>{h.value=t.data.map(e=>e.name)})},y=()=>{I().then(({data:t,meta:a})=>{f.value=t.data.map(e=>e.name)})},v=()=>{P({branch:p}).then(({data:t,meta:a})=>{u.value=t.data})};return $(()=>{g=="admin"&&(b(),y(),x(),v())}),(t,a)=>{const e=j,V=B;return k(),S(c,{class:"mt-4 px-4"},{default:m(()=>[o(C,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:m(()=>[o(c,{class:"pt-5 pb-0 px-5",align:"center",justify:"space-between"},{default:m(()=>[N("p",U,O(r(l)!==null?r(l).name_en:""),1)]),_:1}),o(c,{class:"px-4",align:"center",justify:"start"},{default:m(()=>[o(e,{modelValue:r(n),"onUpdate:modelValue":a[0]||(a[0]=w=>T(n)?n.value=w:null),placeholder:"Search by Product name",class:"mx-2 my-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue"])]),_:1}),o(V,{items:r(u),search:r(n)},null,8,["items","search"])]),_:1})]),_:1})}}};typeof _=="function"&&_(q);export{q as default};
