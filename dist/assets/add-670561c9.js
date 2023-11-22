import{aV as _,l as p,o as v,b as $,w as o,q as a,W as m,n as h,y as V,s as e,a$ as k,b0 as N,U as d,b1 as u,bc as U,bd as j,be as w,az as S,z as B,H as F,aZ as y,a_ as O}from"./index-5f1e036d.js";import{c as A}from"./operations-b99d373a.js";const C={class:"text-h4 pt-3 pb-2"},P={__name:"add",setup(T){var b;const f=_(),i=p(!1),l=p({name:"",phone:"",email:"",password:"",password_confirmation:""}),c=p();(b=JSON.parse(localStorage.getItem("userData")))==null||b.type;const g=async()=>{var s;(s=c.value)==null||s.validate().then(async({valid:t})=>{if(t){i.value=!0;try{await A(l.value),i.value=!1,f.success("Operation created successfully")}catch(n){f.error(n.response.data.message),i.value=!1}}})};return(s,t)=>{const n=O;return v(),$(d,{class:"mt-4 px-4",justify:"space-around"},{default:o(()=>[a(m,{class:"pt-0"},{default:o(()=>[a(m,{class:"px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:o(()=>[h("p",C,V(s.$t("Add Operation")),1),a(e(k),{ref_key:"refVForm",ref:c,onSubmit:N(g,["prevent"])},{default:o(()=>[a(m,null,{default:o(()=>[a(d,{justify:"space-between",align:"start"},{default:o(()=>[a(n,{rules:[e(u)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).name,"onUpdate:modelValue":t[0]||(t[0]=r=>e(l).name=r),label:s.$t("Name")},null,8,["rules","modelValue","label"]),a(n,{rules:[e(u),s.integerValidator,e(U)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(l).phone,"onUpdate:modelValue":t[1]||(t[1]=r=>e(l).phone=r),label:s.$t("Phone Number")},null,8,["rules","modelValue","label"])]),_:1}),a(d,{class:"mt-10",justify:"space-between",align:"start"},{default:o(()=>[a(n,{rules:[e(u),e(j)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).email,"onUpdate:modelValue":t[2]||(t[2]=r=>e(l).email=r),label:s.$t("Email")},null,8,["rules","modelValue","label"]),a(n,{rules:[e(u),e(w)(e(l).password.length,4,8)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(l).password,"onUpdate:modelValue":t[3]||(t[3]=r=>e(l).password=r),label:s.$t("Password")},null,8,["rules","modelValue","label"])]),_:1}),a(d,{class:"mt-10",justify:"space-between",align:"start"},{default:o(()=>[a(n,{rules:[e(u),e(w)(e(l).password_confirmation.length,4,8)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).password_confirmation,"onUpdate:modelValue":t[4]||(t[4]=r=>e(l).password_confirmation=r),label:s.$t("Confirm Password")},null,8,["rules","modelValue","label"])]),_:1})]),_:1}),a(d,{class:"pb-6 mt-8 px-3",align:"center",justify:"center"},{default:o(()=>[a(S,{block:s.$vuetify.display.xs,color:"primary",class:"px-12",loading:e(i),type:"submit"},{default:o(()=>[a(B,{start:"",icon:"tabler-plus"}),F(V(s.$t("Add")),1)]),_:1},8,["block","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}}};typeof y=="function"&&y(P);export{P as default};
