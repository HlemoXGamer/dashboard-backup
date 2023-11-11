import{_ as k}from"./BranchesTable-790ff215.js";import{l as s,D as A,O as I,R as N,o as S,b as T,w as i,q as l,W as U,U as d,n as j,y as V,az as D,z as R,H as z,s as t,G as c,aZ as v,a_ as O}from"./index-ae436fe7.js";import{g as q}from"./areas-6a15abaa.js";import{a as F}from"./branches-1e9a9e3f.js";import{g as G}from"./cities-58ccc807.js";import{V as _}from"./VCombobox-00c6c73c.js";import"./VDialog-3d6519df.js";import"./VOverlay-b7c1cab0.js";import"./lazy-98a42def.js";import"./dialog-transition-568cfe1a.js";import"./DialogCloseBtn-c824f2d7.js";import"./VDataTable-ea7817f5.js";import"./VCheckboxBtn-b63b227c.js";import"./VSelectionControl-36f39ce1.js";import"./VSelect-37a65f33.js";import"./VList-5353bc34.js";import"./ssrBoot-23d40ca5.js";import"./VDivider-b42cad0f.js";import"./VMenu-2753b03a.js";import"./VChip-4bd7dba5.js";import"./filter-c9d71b19.js";import"./VTable-367a6ea3.js";const H={class:"text-h4"},J={__name:"index",setup(M){var x;const f=s([]),b=s([]),h=s([]),m=s(""),p=s([]),n=s([]),u=s(!1);(x=JSON.parse(localStorage.getItem("userData")))==null||x.type;const g=A(),y=I(()=>{if(g.locale.value==="en")return"name_en";if(g.locale.value==="ar")return"name_ar"}),w=()=>{u.value=!0,F().then(({data:e,meta:a})=>{f.value=e.data}).finally(()=>{u.value=!1})},$=()=>{q().then(({data:e,meta:a})=>{h.value=e.data.map(r=>r[y.value])})},B=()=>{G().then(({data:e,meta:a})=>{b.value=e.data.map(r=>r.name)})};return N(()=>{w(),B(),$()}),(e,a)=>{const r=O,C=k;return S(),T(d,{class:"mt-4 px-4"},{default:i(()=>[l(U,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:i(()=>[l(d,{class:"pt-5 pb-2 px-5",align:"center",justify:"space-between"},{default:i(()=>[j("p",H,V(e.$t("Branches")),1),l(D,{onClick:a[0]||(a[0]=o=>e.$router.push("branches/add/"))},{default:i(()=>[l(R,{start:"",icon:"tabler-plus"}),z(V(e.$t("Add Branch")),1)]),_:1})]),_:1}),l(d,{class:"px-7",align:"center",justify:"space-between"},{default:i(()=>[l(r,{modelValue:t(m),"onUpdate:modelValue":a[1]||(a[1]=o=>c(m)?m.value=o:null),placeholder:e.$t("Search for a Branch"),class:"mx-2 my-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","placeholder"]),l(_,{modelValue:t(n),"onUpdate:modelValue":a[2]||(a[2]=o=>c(n)?n.value=o:null),multiple:"",items:t(b),variant:"outlined",label:e.$t("Cities"),clearable:"",class:"flex-grow-0 mx-2 my-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","items","label"]),l(_,{modelValue:t(p),"onUpdate:modelValue":a[3]||(a[3]=o=>c(p)?p.value=o:null),multiple:"",disabled:!t(n).length,items:t(h),variant:"outlined",label:e.$t("Areas"),class:"flex-grow-0 mx-2 my-2",clearable:"",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","disabled","items","label"])]),_:1}),l(C,{loading:t(u),branches:t(f),search:t(m)+","+t(p).join("-")+","+t(n)},null,8,["loading","branches","search"])]),_:1})]),_:1})}}};typeof v=="function"&&v(J);export{J as default};
