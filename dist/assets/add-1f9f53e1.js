import{aV as _,l as p,o as v,b as $,w as o,q as a,a2 as m,n as h,y as V,s as e,a$ as k,b0 as F,a1 as d,b1 as u,b2 as N,bc as j,bd as S,be as w,az as U,z as B,H as x,aZ as y,a_ as A}from"./index-581c2083.js";import{c as C}from"./finances-75e26b14.js";const P={class:"text-h4 pt-3 pb-2"},T={__name:"add",setup(q){var b;const f=_(),i=p(!1),l=p({name:"",phone:"",email:"",password:"",password_confirmation:""}),c=p();(b=JSON.parse(localStorage.getItem("userData")))==null||b.type;const g=async()=>{var t;(t=c.value)==null||t.validate().then(async({valid:s})=>{if(s){i.value=!0;try{await C(l.value),i.value=!1,f.success("Finance created successfully")}catch(n){f.error(n.response.data.message),i.value=!1}}})};return(t,s)=>{const n=A;return v(),$(d,{class:"mt-4 px-4",justify:"space-around"},{default:o(()=>[a(m,{class:"pt-0"},{default:o(()=>[a(m,{class:"px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:o(()=>[h("p",P,V(t.$t("Add Finance")),1),a(e(k),{ref_key:"refVForm",ref:c,onSubmit:F(g,["prevent"])},{default:o(()=>[a(m,null,{default:o(()=>[a(d,{justify:"space-between",align:"start"},{default:o(()=>[a(n,{rules:[e(u)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).name,"onUpdate:modelValue":s[0]||(s[0]=r=>e(l).name=r),label:t.$t("Name")},null,8,["rules","modelValue","label"]),a(n,{rules:[e(u),e(N),e(j)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(l).phone,"onUpdate:modelValue":s[1]||(s[1]=r=>e(l).phone=r),label:t.$t("Phone Number")},null,8,["rules","modelValue","label"])]),_:1}),a(d,{class:"mt-10",justify:"space-between",align:"start"},{default:o(()=>[a(n,{rules:[e(u),e(S)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).email,"onUpdate:modelValue":s[2]||(s[2]=r=>e(l).email=r),label:t.$t("Email")},null,8,["rules","modelValue","label"]),a(n,{rules:[e(u),e(w)(e(l).password.length,4,8)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(l).password,"onUpdate:modelValue":s[3]||(s[3]=r=>e(l).password=r),label:t.$t("Password")},null,8,["rules","modelValue","label"])]),_:1}),a(d,{class:"mt-10",justify:"space-between",align:"start"},{default:o(()=>[a(n,{rules:[e(u),e(w)(e(l).password_confirmation.length,4,8)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).password_confirmation,"onUpdate:modelValue":s[4]||(s[4]=r=>e(l).password_confirmation=r),label:t.$t("Confirm Password")},null,8,["rules","modelValue","label"])]),_:1})]),_:1}),a(d,{class:"pb-6 mt-8 px-3",align:"center",justify:"center"},{default:o(()=>[a(U,{block:t.$vuetify.display.xs,color:"primary",class:"px-12",loading:e(i),type:"submit"},{default:o(()=>[a(B,{start:"",icon:"tabler-plus"}),x(V(t.$t("Add")),1)]),_:1},8,["block","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}}};typeof y=="function"&&y(T);export{T as default};
