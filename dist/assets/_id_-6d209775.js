import{aV as h,l as d,aP as v,R as k,o as x,b as N,w as t,q as a,W as c,n as U,y as S,s as e,a$ as j,b0 as B,U as i,b1 as p,b2 as F,bc as R,bd as $,az as I,z as L,H as T,aZ as y,a_ as q}from"./index-d2581156.js";import{s as z,u as C}from"./logistics-d0c146d7.js";const D={class:"text-h4 pt-3 pb-2"},M={__name:"[id]",setup(O){var b;const _=(b=JSON.parse(localStorage.getItem("userData")))==null?void 0:b.type,m=h(),u=d(!1),f=v().params.id,l=d({name:"",phone:"",email:""}),V=d(),g=async()=>{await z(f).then(o=>{let{name:s,phone:r,email:n}=o.data.data;l.value={name:s,phone:r,email:n}})},w=async()=>{var o;(o=V.value)==null||o.validate().then(async({valid:s})=>{if(s){u.value=!0;try{await C(f,l.value),u.value=!1,m.success("Logistic updated successfully")}catch(r){m.error(r.response.data.message),u.value=!1}}})};return k(()=>{_=="admin"&&g()}),(o,s)=>{const r=q;return x(),N(i,{class:"mt-4 px-4",justify:"space-around"},{default:t(()=>[a(c,{class:"pt-0"},{default:t(()=>[a(c,{class:"px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:t(()=>[U("p",D,S(o.$t("Update Logistic")),1),a(e(j),{ref_key:"refVForm",ref:V,onSubmit:B(w,["prevent"])},{default:t(()=>[a(c,null,{default:t(()=>[a(i,{justify:"space-between",align:"start"},{default:t(()=>[a(r,{rules:[e(p)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).name,"onUpdate:modelValue":s[0]||(s[0]=n=>e(l).name=n),label:"Name"},null,8,["rules","modelValue"]),a(r,{rules:[e(p),e(F),e(R)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(l).phone,"onUpdate:modelValue":s[1]||(s[1]=n=>e(l).phone=n),label:"Phone Number"},null,8,["rules","modelValue"])]),_:1}),a(i,{class:"mt-10",justify:"space-between",align:"start"},{default:t(()=>[a(r,{rules:[e(p),e($)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).email,"onUpdate:modelValue":s[2]||(s[2]=n=>e(l).email=n),label:"Email"},null,8,["rules","modelValue"])]),_:1})]),_:1}),a(i,{class:"pb-6 mt-8 px-3",align:"center",justify:"center"},{default:t(()=>[a(I,{block:o.$vuetify.display.xs,color:"primary",class:"px-12",loading:e(u),type:"submit"},{default:t(()=>[a(L,{start:"",icon:"tabler-check"}),T("Update ")]),_:1},8,["block","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}}};typeof y=="function"&&y(M);export{M as default};
