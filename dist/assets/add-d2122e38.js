import{aV as _,l as p,o as v,b as $,w as o,q as a,a2 as m,n as h,y as V,s as e,a$ as k,b0 as N,a1 as n,b1 as u,bc as j,bd as S,be as w,az as U,z as B,H as F,aZ as y,a_ as A}from"./index-7157bb72.js";import{c as C}from"./logistics-92571256.js";const L={class:"text-h4 pt-3 pb-2"},P={__name:"add",setup(T){var b;const f=_(),i=p(!1),l=p({name:"",phone:"",email:"",password:"",password_confirmation:""}),c=p();(b=JSON.parse(localStorage.getItem("userData")))==null||b.type;const g=async()=>{var s;(s=c.value)==null||s.validate().then(async({valid:t})=>{if(t){i.value=!0;try{await C(l.value),i.value=!1,f.success("Logistic created successfully")}catch(d){f.error(d.response.data.message),i.value=!1}}})};return(s,t)=>{const d=A;return v(),$(n,{class:"mt-4 px-4",justify:"space-around"},{default:o(()=>[a(m,{class:"pt-0"},{default:o(()=>[a(m,{class:"px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:o(()=>[h("p",L,V(s.$t("Add Logistic")),1),a(e(k),{ref_key:"refVForm",ref:c,onSubmit:N(g,["prevent"])},{default:o(()=>[a(m,null,{default:o(()=>[a(n,{justify:"space-between",align:"start"},{default:o(()=>[a(d,{rules:[e(u)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).name,"onUpdate:modelValue":t[0]||(t[0]=r=>e(l).name=r),label:s.$t("Name")},null,8,["rules","modelValue","label"]),a(d,{rules:[e(u),s.integerValidator,e(j)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(l).phone,"onUpdate:modelValue":t[1]||(t[1]=r=>e(l).phone=r),label:s.$t("Phone Number")},null,8,["rules","modelValue","label"])]),_:1}),a(n,{class:"mt-10",justify:"space-between",align:"start"},{default:o(()=>[a(d,{rules:[e(u),e(S)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).email,"onUpdate:modelValue":t[2]||(t[2]=r=>e(l).email=r),label:s.$t("Email")},null,8,["rules","modelValue","label"]),a(d,{rules:[e(u),e(w)(e(l).password.length,4,8)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(l).password,"onUpdate:modelValue":t[3]||(t[3]=r=>e(l).password=r),label:s.$t("Password")},null,8,["rules","modelValue","label"])]),_:1}),a(n,{class:"mt-10",justify:"space-between",align:"start"},{default:o(()=>[a(d,{rules:[e(u),e(w)(e(l).password_confirmation.length,4,8)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).password_confirmation,"onUpdate:modelValue":t[4]||(t[4]=r=>e(l).password_confirmation=r),label:s.$t("Confirm Password")},null,8,["rules","modelValue","label"])]),_:1})]),_:1}),a(n,{class:"pb-6 mt-8 px-3",align:"center",justify:"center"},{default:o(()=>[a(U,{block:s.$vuetify.display.xs,color:"primary",class:"px-12",loading:e(i),type:"submit"},{default:o(()=>[a(B,{start:"",icon:"tabler-plus"}),F(V(s.$t("Add")),1)]),_:1},8,["block","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}}};typeof y=="function"&&y(P);export{P as default};
