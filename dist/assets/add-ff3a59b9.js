import{C as g,aV as w,l as p,O as k,o as F,b as S,w as t,q as e,a2 as r,n as h,y as _,s as a,a$ as N,b0 as $,a1 as c,b1 as i,b2 as A,az as B,z as C,H as E,aZ as y,aW as T,a_ as U}from"./index-7157bb72.js";import{c as j}from"./extra-flavors-bcf7f64f.js";import{V as I}from"./VSelect-7166ca9d.js";import"./VList-f81baed7.js";import"./ssrBoot-5e92ae1e.js";import"./VDivider-df998627.js";import"./dialog-transition-84874201.js";import"./VMenu-addb736f.js";import"./VOverlay-f4087ea4.js";import"./lazy-80a79e47.js";import"./VCheckboxBtn-563d04df.js";import"./VSelectionControl-13510e28.js";import"./VChip-cc27a3e6.js";const q={class:"text-h4 pt-3 pb-2"},V={__name:"add",setup(z){var v;const m=w(),n=p(!1),l=p({name:"",type:"",price:0,code:""}),f=p();(v=JSON.parse(localStorage.getItem("userData")))==null||v.type;const b=k(()=>(l.value.type==="flavor"&&(l.value.price=0),l.value.type==="flavor")),x=async()=>{var d;(d=f.value)==null||d.validate().then(async({valid:s})=>{if(s){n.value=!0;try{l.value.type==="flavor"&&(l.value.price=0),await j(l.value),n.value=!1,m.success("Extra-Flavor Added successfully"),T.back()}catch(u){m.error(u.response.data.message),n.value=!1}}})};return(d,s)=>{const u=U;return F(),S(c,{class:"mt-4 px-4",justify:"space-around"},{default:t(()=>[e(r,{class:"pt-0"},{default:t(()=>[e(r,{class:"px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:t(()=>[h("p",q,_(d.$t("Add Extra-Flavor")),1),e(a(N),{ref_key:"refVForm",ref:f,onSubmit:$(x,["prevent"])},{default:t(()=>[e(r,null,{default:t(()=>[e(c,{justify:"space-between",align:"end"},{default:t(()=>[e(r,null,{default:t(()=>[e(u,{rules:[a(i)],style:{width:"100%"},class:"pe-3",modelValue:a(l).code,"onUpdate:modelValue":s[0]||(s[0]=o=>a(l).code=o),label:"Code"},null,8,["rules","modelValue"])]),_:1}),e(r,null,{default:t(()=>[e(u,{rules:[a(i)],style:{width:"100%"},class:"pe-3",modelValue:a(l).name,"onUpdate:modelValue":s[1]||(s[1]=o=>a(l).name=o),label:"Name"},null,8,["rules","modelValue"])]),_:1}),e(r,null,{default:t(()=>[e(I,{modelValue:a(l).type,"onUpdate:modelValue":s[2]||(s[2]=o=>a(l).type=o),items:[{name:"Extra",value:"extra"},{name:"Flavor",value:"flavor"}],rules:[a(i)],"item-title":"name","item-value":"value",style:{width:"100%","align-self":"flex-end"},label:"Type"},null,8,["modelValue","rules"])]),_:1}),e(r,null,{default:t(()=>[e(u,{rules:[a(i),a(A)],style:{width:"100%"},class:"pe-3",modelValue:a(l).price,"onUpdate:modelValue":s[3]||(s[3]=o=>a(l).price=o),label:"Price",disabled:a(b)},null,8,["rules","modelValue","disabled"])]),_:1})]),_:1})]),_:1}),e(c,{class:"pb-6 mt-8 px-3",align:"center",justify:"center"},{default:t(()=>[e(B,{block:d.$vuetify.display.xs,color:"primary",class:"px-12",loading:a(n),type:"submit"},{default:t(()=>[e(C,{start:"",icon:"tabler-check"}),E(_(d.$t("Add")),1)]),_:1},8,["block","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}}};typeof y=="function"&&y(V);const X=g(V,[["__scopeId","data-v-d6c376e4"]]);export{X as default};