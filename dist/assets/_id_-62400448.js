import{aV as v,l as i,aP as k,R as $,o as N,b as x,w as l,q as a,a2 as p,n as O,y,s as e,a$ as S,b0 as U,a1 as d,b1 as m,b2 as j,bd as B,be as F,az as R,z as I,H as T,aZ as w,a_ as q}from"./index-1dd32ede.js";import{s as z,u as C}from"./operations-7f11f115.js";const D={class:"text-h4 pt-3 pb-2"},M={__name:"[id]",setup(P){var V;const _=(V=JSON.parse(localStorage.getItem("userData")))==null?void 0:V.type,c=v(),u=i(!1),f=k().params.id,o=i({name:"",phone:"",email:""}),b=i(),g=async()=>{await z(f).then(t=>{let{name:s,phone:r,email:n}=t.data.data;o.value={name:s,phone:r,email:n}})},h=async()=>{var t;(t=b.value)==null||t.validate().then(async({valid:s})=>{if(s){u.value=!0;try{await C(f,o.value),u.value=!1,c.success("Operation updated successfully")}catch(r){c.error(r.response.data.message),u.value=!1}}})};return $(()=>{_=="admin"&&g()}),(t,s)=>{const r=q;return N(),x(d,{class:"mt-4 px-4",justify:"space-around"},{default:l(()=>[a(p,{class:"pt-0"},{default:l(()=>[a(p,{class:"px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:l(()=>[O("p",D,y(t.$t("Update Operation")),1),a(e(S),{ref_key:"refVForm",ref:b,onSubmit:U(h,["prevent"])},{default:l(()=>[a(p,null,{default:l(()=>[a(d,{justify:"space-between",align:"start"},{default:l(()=>[a(r,{rules:[e(m)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(o).name,"onUpdate:modelValue":s[0]||(s[0]=n=>e(o).name=n),label:t.$t("Name")},null,8,["rules","modelValue","label"]),a(r,{rules:[e(m),e(j),e(B)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(o).phone,"onUpdate:modelValue":s[1]||(s[1]=n=>e(o).phone=n),label:t.$t("Phone Number")},null,8,["rules","modelValue","label"])]),_:1}),a(d,{class:"mt-10",justify:"space-between",align:"start"},{default:l(()=>[a(r,{rules:[e(m),e(F)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(o).email,"onUpdate:modelValue":s[2]||(s[2]=n=>e(o).email=n),label:t.$t("Email")},null,8,["rules","modelValue","label"])]),_:1})]),_:1}),a(d,{class:"pb-6 mt-8 px-3",align:"center",justify:"center"},{default:l(()=>[a(R,{block:t.$vuetify.display.xs,color:"primary",class:"px-12",loading:e(u),type:"submit"},{default:l(()=>[a(I,{start:"",icon:"tabler-check"}),T(y(t.$t("Update")),1)]),_:1},8,["block","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}}};typeof w=="function"&&w(M);export{M as default};
