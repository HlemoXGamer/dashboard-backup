import{_ as k}from"./BranchesTable-e3cd64cf.js";import{l as s,D as A,O as I,R as N,o as S,b as T,w as i,q as l,W as U,U as d,n as j,y as V,az as D,z as R,H as z,s as t,G as c,aZ as v,a_ as O}from"./index-36d8cfe3.js";import{g as q}from"./areas-357dff86.js";import{a as F}from"./branches-554dffa9.js";import{g as G}from"./cities-d878e1ce.js";import{V as _}from"./VCombobox-f543e0a9.js";import"./VDialog-a58735bf.js";import"./VOverlay-ea98bdf6.js";import"./lazy-7047357e.js";import"./dialog-transition-67149c45.js";import"./DialogCloseBtn-c677f423.js";import"./VDataTable-e542c293.js";import"./VCheckboxBtn-a58c2dae.js";import"./VSelectionControl-0b7649e7.js";import"./VSelect-67ad1458.js";import"./VList-1544eb7b.js";import"./ssrBoot-9eeea15f.js";import"./VDivider-baaf873e.js";import"./VMenu-f17f0b8f.js";import"./VChip-8213b9b6.js";import"./filter-cb535b89.js";import"./VTable-531ed029.js";const H={class:"text-h4"},J={__name:"index",setup(M){var x;const f=s([]),b=s([]),h=s([]),m=s(""),p=s([]),n=s([]),u=s(!1);(x=JSON.parse(localStorage.getItem("userData")))==null||x.type;const g=A(),y=I(()=>{if(g.locale.value==="en")return"name_en";if(g.locale.value==="ar")return"name_ar"}),w=()=>{u.value=!0,F().then(({data:e,meta:a})=>{f.value=e.data}).finally(()=>{u.value=!1})},$=()=>{q().then(({data:e,meta:a})=>{h.value=e.data.map(r=>r[y.value])})},B=()=>{G().then(({data:e,meta:a})=>{b.value=e.data.map(r=>r.name)})};return N(()=>{w(),B(),$()}),(e,a)=>{const r=O,C=k;return S(),T(d,{class:"mt-4 px-4"},{default:i(()=>[l(U,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:i(()=>[l(d,{class:"pt-5 pb-2 px-5",align:"center",justify:"space-between"},{default:i(()=>[j("p",H,V(e.$t("Branches")),1),l(D,{onClick:a[0]||(a[0]=o=>e.$router.push("branches/add/"))},{default:i(()=>[l(R,{start:"",icon:"tabler-plus"}),z(V(e.$t("Add Branch")),1)]),_:1})]),_:1}),l(d,{class:"px-7",align:"center",justify:"space-between"},{default:i(()=>[l(r,{modelValue:t(m),"onUpdate:modelValue":a[1]||(a[1]=o=>c(m)?m.value=o:null),placeholder:e.$t("Search for a Branch"),class:"mx-2 my-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","placeholder"]),l(_,{modelValue:t(n),"onUpdate:modelValue":a[2]||(a[2]=o=>c(n)?n.value=o:null),multiple:"",items:t(b),variant:"outlined",label:e.$t("Cities"),clearable:"",class:"flex-grow-0 mx-2 my-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","items","label"]),l(_,{modelValue:t(p),"onUpdate:modelValue":a[3]||(a[3]=o=>c(p)?p.value=o:null),multiple:"",disabled:!t(n).length,items:t(h),variant:"outlined",label:e.$t("Areas"),class:"flex-grow-0 mx-2 my-2",clearable:"",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","disabled","items","label"])]),_:1}),l(C,{loading:t(u),branches:t(f),search:t(m)+","+t(p).join("-")+","+t(n)},null,8,["loading","branches","search"])]),_:1})]),_:1})}}};typeof v=="function"&&v(J);export{J as default};
