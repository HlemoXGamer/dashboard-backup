import{aV as h,l as d,aP as x,R as k,o as A,b as N,w as s,q as a,a2 as c,n as S,y,s as l,a$ as $,b0 as B,a1 as i,b1 as V,az as F,z as R,H as U,aZ as b,a_ as j}from"./index-1dd32ede.js";import{s as I,u as T}from"./areas-6524282f.js";const q={class:"text-h4 pt-3 pb-2"},z={__name:"[id]",setup(C){var _;const p=h(),u=d(!1),m=x().params.id,o=d({name_en:"",name_ar:"",city_id:0}),f=d(),g=(_=JSON.parse(localStorage.getItem("userData")))==null?void 0:_.type,v=async()=>{await I(m).then(e=>{let{name_en:t,name_ar:r,city_id:n}=e.data.data;o.value={name_en:t,name_ar:r,city_id:n}})},w=async()=>{var e;(e=f.value)==null||e.validate().then(async({valid:t})=>{if(t){u.value=!0;try{await T(m,o.value),u.value=!1,p.success("Area updated successfully")}catch(r){p.error(r.response.data.message),u.value=!1}}})};return k(()=>{g=="admin"&&v()}),(e,t)=>{const r=j;return A(),N(i,{class:"mt-4 px-4",justify:"space-around"},{default:s(()=>[a(c,{class:"pt-0"},{default:s(()=>[a(c,{class:"px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:s(()=>[S("p",q,y(e.$t("Update Area")),1),a(l($),{ref_key:"refVForm",ref:f,onSubmit:B(w,["prevent"])},{default:s(()=>[a(c,null,{default:s(()=>[a(i,{justify:"space-between",align:"start"},{default:s(()=>[a(r,{rules:[l(V)],style:{width:"100%"},class:"pe-3 w-50",modelValue:l(o).name_en,"onUpdate:modelValue":t[0]||(t[0]=n=>l(o).name_en=n),label:"Name"},null,8,["rules","modelValue"]),a(r,{rules:[l(V)],style:{width:"100%"},class:"ps-3 w-50 text-right",dir:"rtl",modelValue:l(o).name_ar,"onUpdate:modelValue":t[1]||(t[1]=n=>l(o).name_ar=n),label:"الاسم"},null,8,["rules","modelValue"])]),_:1})]),_:1}),a(i,{class:"pb-6 mt-8 px-3",align:"center",justify:"center"},{default:s(()=>[a(F,{block:e.$vuetify.display.xs,color:"primary",class:"px-12",loading:l(u),type:"submit"},{default:s(()=>[a(R,{start:"",icon:"tabler-check"}),U(y(e.$t("Update")),1)]),_:1},8,["block","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}}};typeof b=="function"&&b(z);export{z as default};
