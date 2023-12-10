import{_ as k}from"./BranchesTable-2d7c513c.js";import{l as s,D as A,O as I,R as N,o as S,b as T,w as i,q as l,W as U,U as d,n as j,y as V,az as D,z as R,H as z,s as t,G as c,aZ as v,a_ as O}from"./index-d2581156.js";import{g as q}from"./areas-e649741f.js";import{a as F}from"./branches-c1092a6c.js";import{g as G}from"./cities-f37bb07b.js";import{V as _}from"./VCombobox-66ef1a06.js";import"./VDialog-eee115d7.js";import"./VOverlay-a01ea84e.js";import"./lazy-5e287f74.js";import"./dialog-transition-ed0dbcb2.js";import"./DialogCloseBtn-9cfe71b9.js";import"./VDataTable-94bcafd9.js";import"./VCheckboxBtn-68cb53d5.js";import"./VSelectionControl-2699808d.js";import"./VSelect-801d8977.js";import"./VList-3c9a1f65.js";import"./ssrBoot-91f799f7.js";import"./VDivider-72799677.js";import"./VMenu-5e1a829e.js";import"./VChip-2c42ae55.js";import"./filter-06ec5503.js";import"./VTable-25121804.js";const H={class:"text-h4"},J={__name:"index",setup(M){var x;const f=s([]),b=s([]),h=s([]),m=s(""),p=s([]),n=s([]),u=s(!1);(x=JSON.parse(localStorage.getItem("userData")))==null||x.type;const g=A(),y=I(()=>{if(g.locale.value==="en")return"name_en";if(g.locale.value==="ar")return"name_ar"}),w=()=>{u.value=!0,F().then(({data:e,meta:a})=>{f.value=e.data}).finally(()=>{u.value=!1})},$=()=>{q().then(({data:e,meta:a})=>{h.value=e.data.map(r=>r[y.value])})},B=()=>{G().then(({data:e,meta:a})=>{b.value=e.data.map(r=>r.name)})};return N(()=>{w(),B(),$()}),(e,a)=>{const r=O,C=k;return S(),T(d,{class:"mt-4 px-4"},{default:i(()=>[l(U,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:i(()=>[l(d,{class:"pt-5 pb-2 px-5",align:"center",justify:"space-between"},{default:i(()=>[j("p",H,V(e.$t("Branches")),1),l(D,{onClick:a[0]||(a[0]=o=>e.$router.push("branches/add/"))},{default:i(()=>[l(R,{start:"",icon:"tabler-plus"}),z(V(e.$t("Add Branch")),1)]),_:1})]),_:1}),l(d,{class:"px-7",align:"center",justify:"space-between"},{default:i(()=>[l(r,{modelValue:t(m),"onUpdate:modelValue":a[1]||(a[1]=o=>c(m)?m.value=o:null),placeholder:e.$t("Search for a Branch"),class:"mx-2 my-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","placeholder"]),l(_,{modelValue:t(n),"onUpdate:modelValue":a[2]||(a[2]=o=>c(n)?n.value=o:null),multiple:"",items:t(b),variant:"outlined",label:e.$t("Cities"),clearable:"",class:"flex-grow-0 mx-2 my-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","items","label"]),l(_,{modelValue:t(p),"onUpdate:modelValue":a[3]||(a[3]=o=>c(p)?p.value=o:null),multiple:"",disabled:!t(n).length,items:t(h),variant:"outlined",label:e.$t("Areas"),class:"flex-grow-0 mx-2 my-2",clearable:"",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","disabled","items","label"])]),_:1}),l(C,{loading:t(u),branches:t(f),search:t(m)+","+t(p).join("-")+","+t(n)},null,8,["loading","branches","search"])]),_:1})]),_:1})}}};typeof v=="function"&&v(J);export{J as default};
