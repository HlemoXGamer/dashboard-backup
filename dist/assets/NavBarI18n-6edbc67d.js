import{D as g,E as d,l as f,r as _,o as l,b as c,w as a,q as r,z as L,s as b,G as h,c as v,F as I,a as V,H as C,y as k,v as x}from"./index-d2581156.js";import{V as y}from"./VMenu-5e1a829e.js";import{V as B,a as w,b as A}from"./VList-3c9a1f65.js";import"./VOverlay-a01ea84e.js";import"./lazy-5e287f74.js";import"./dialog-transition-ed0dbcb2.js";import"./ssrBoot-91f799f7.js";import"./VDivider-72799677.js";const E={__name:"I18n",props:{languages:{type:Array,required:!0},location:{type:null,required:!1,default:"bottom end"}},emits:["change"],setup(i,{emit:u}){const n=i,{locale:o}=g({useScope:"global"});d(o,s=>{document.documentElement.setAttribute("lang",s)});const e=f([localStorage.getItem("currentLanguage")]);return(s,m)=>{const p=_("IconBtn");return l(),c(p,null,{default:a(()=>[r(L,{size:"26",icon:"tabler-language"}),r(y,{activator:"parent",location:n.location,offset:"14px"},{default:a(()=>[r(B,{selected:b(e),"onUpdate:selected":m[0]||(m[0]=t=>h(e)?e.value=t:null),"min-width":"175px"},{default:a(()=>[(l(!0),v(I,null,V(n.languages,t=>(l(),c(w,{key:t.i18nLang,value:t.i18nLang,onClick:S=>{o.value=t.i18nLang,s.$emit("change",t.i18nLang)}},{default:a(()=>[r(A,null,{default:a(()=>[C(k(t.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["selected"])]),_:1},8,["location"])]),_:1})}}},G={__name:"NavBarI18n",setup(i){const{isAppRtl:u}=x(),n=[{label:"English",i18nLang:"en"},{label:"Arabic",i18nLang:"ar"}],o=e=>{u.value=e==="ar",localStorage.setItem("currentLanguage",e)};return(e,s)=>(l(),c(E,{languages:n,onChange:o}))}};export{G as default};