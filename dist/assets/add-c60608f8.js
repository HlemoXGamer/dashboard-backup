import{C as g,aV as k,l as n,O as w,o as F,b as h,w as l,q as e,W as r,n as S,y as _,s as a,a$ as N,b0 as $,U as p,b1 as c,b2 as A,az as B,z as E,H as T,aZ as y,aW as U,a_ as j}from"./index-ac936590.js";import{c as C}from"./extra-flavors-88c83cf2.js";import{V as I}from"./VSelect-c9139207.js";import"./VList-5152a632.js";import"./ssrBoot-79ca1775.js";import"./VDivider-3c3519ef.js";import"./dialog-transition-6705f530.js";import"./VMenu-e1413c8a.js";import"./VOverlay-1fae6a8e.js";import"./lazy-aa82fd8a.js";import"./VCheckboxBtn-7562a87f.js";import"./VSelectionControl-11f51824.js";import"./VChip-cbd976a1.js";const q={class:"text-h4 pt-3 pb-2"},V={__name:"add",setup(z){var v;const m=k(),d=n(!1),t=n({name:"",type:"",price:0,code:""}),f=n();(v=JSON.parse(localStorage.getItem("userData")))==null||v.type;const b=w(()=>(t.value.type==="flavor"&&(t.value.price=0),t.value.type==="flavor")),x=async()=>{var o;(o=f.value)==null||o.validate().then(async({valid:s})=>{if(s){d.value=!0;try{t.value.type==="flavor"&&(t.value.price=0),await C(t.value),d.value=!1,m.success("Extra-Flavor Added successfully"),U.back()}catch(i){m.error(i.response.data.message),d.value=!1}}})};return(o,s)=>{const i=j;return F(),h(p,{class:"mt-4 px-4",justify:"space-around"},{default:l(()=>[e(r,{class:"pt-0"},{default:l(()=>[e(r,{class:"px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:l(()=>[S("p",q,_(o.$t("Add Extra-Flavor")),1),e(a(N),{ref_key:"refVForm",ref:f,onSubmit:$(x,["prevent"])},{default:l(()=>[e(r,null,{default:l(()=>[e(p,{justify:"space-between",align:"end"},{default:l(()=>[e(r,null,{default:l(()=>[e(i,{rules:[a(c)],style:{width:"100%"},class:"pe-3",modelValue:a(t).name,"onUpdate:modelValue":s[0]||(s[0]=u=>a(t).name=u),label:"Name"},null,8,["rules","modelValue"])]),_:1}),e(r,null,{default:l(()=>[e(I,{modelValue:a(t).type,"onUpdate:modelValue":s[1]||(s[1]=u=>a(t).type=u),items:[{name:"Extra",value:"extra"},{name:"Flavor",value:"flavor"}],rules:[a(c)],"item-title":"name","item-value":"value",style:{width:"100%","align-self":"flex-end"},label:"Type"},null,8,["modelValue","rules"])]),_:1}),e(r,null,{default:l(()=>[e(i,{rules:[a(c),a(A)],style:{width:"100%"},class:"pe-3",modelValue:a(t).price,"onUpdate:modelValue":s[2]||(s[2]=u=>a(t).price=u),label:"Price",disabled:a(b)},null,8,["rules","modelValue","disabled"])]),_:1})]),_:1})]),_:1}),e(p,{class:"pb-6 mt-8 px-3",align:"center",justify:"center"},{default:l(()=>[e(B,{block:o.$vuetify.display.xs,color:"primary",class:"px-12",loading:a(d),type:"submit"},{default:l(()=>[e(E,{start:"",icon:"tabler-check"}),T(_(o.$t("Add")),1)]),_:1},8,["block","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}}};typeof y=="function"&&y(V);const X=g(V,[["__scopeId","data-v-5f9886f9"]]);export{X as default};
