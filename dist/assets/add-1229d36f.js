import{C as g,aV as x,l as u,o as w,b as k,w as a,q as e,W as c,n as h,y as m,s,a$ as A,b0 as N,U as i,b1 as y,az as S,z as $,H as B,aZ as b,aW as F,a_ as j}from"./index-36d8cfe3.js";import{c as C}from"./areas-357dff86.js";const I={class:"text-h4 pt-3 pb-2"},V={__name:"add",setup(T){var f;const p=x(),o=u(!1),r=u({name_en:"",name_ar:"",city_id:1}),_=u();(f=JSON.parse(localStorage.getItem("userData")))==null||f.type;const v=async()=>{var t;(t=_.value)==null||t.validate().then(async({valid:l})=>{if(l){o.value=!0;try{await C(r.value),o.value=!1,p.success("Area Added successfully"),F.back()}catch(d){p.error(d.response.data.message),o.value=!1}}})};return(t,l)=>{const d=j;return w(),k(i,{class:"mt-4 px-4",justify:"space-around"},{default:a(()=>[e(c,{class:"pt-0"},{default:a(()=>[e(c,{class:"px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:a(()=>[h("p",I,m(t.$t("Add Area")),1),e(s(A),{ref_key:"refVForm",ref:_,onSubmit:N(v,["prevent"])},{default:a(()=>[e(c,null,{default:a(()=>[e(i,{justify:"space-between",align:"start"},{default:a(()=>[e(d,{rules:[s(y)],style:{width:"100%"},class:"pe-3 w-50",modelValue:s(r).name_en,"onUpdate:modelValue":l[0]||(l[0]=n=>s(r).name_en=n),label:"Name"},null,8,["rules","modelValue"]),e(d,{rules:[s(y)],style:{width:"100%"},class:"ps-3 w-50 text-right",dir:"rtl",modelValue:s(r).name_ar,"onUpdate:modelValue":l[1]||(l[1]=n=>s(r).name_ar=n),label:"الاسم"},null,8,["rules","modelValue"])]),_:1})]),_:1}),e(i,{class:"pb-6 mt-8 px-3",align:"center",justify:"center"},{default:a(()=>[e(S,{block:t.$vuetify.display.xs,color:"primary",class:"px-12",loading:s(o),type:"submit"},{default:a(()=>[e($,{start:"",icon:"tabler-check"}),B(m(t.$t("Add")),1)]),_:1},8,["block","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}}};typeof b=="function"&&b(V);const z=g(V,[["__scopeId","data-v-0f01d308"]]);export{z as default};
