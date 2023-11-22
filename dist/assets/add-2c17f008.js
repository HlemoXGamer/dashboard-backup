import{aV as _,l as p,o as k,b as v,w as o,q as a,W as f,n as $,y as V,s as e,a$ as h,b0 as U,U as u,b1 as i,b2 as j,bc as N,bd as B,be as w,az as F,z as M,H as x,aZ as y,a_ as A}from"./index-5f1e036d.js";import{c as C}from"./markters-55ec4a07.js";const P={class:"text-h4 pt-3 pb-2"},S={__name:"add",setup(T){const c=_(),m=p(!1),l=p({name:"",phone:"",email:"",password:"",password_confirmation:""}),b=p(),g=async()=>{var t;(t=b.value)==null||t.validate().then(async({valid:s})=>{if(s){m.value=!0;try{await C(l.value),m.value=!1,c.success("Marketer created successfully")}catch(d){c.error(d.response.data.message),m.value=!1}}})};return(t,s)=>{const d=A;return k(),v(u,{class:"mt-4 px-4",justify:"space-around"},{default:o(()=>[a(f,{class:"pt-0"},{default:o(()=>[a(f,{class:"px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:o(()=>[$("p",P,V(t.$t("Add Marketer")),1),a(e(h),{ref_key:"refVForm",ref:b,onSubmit:U(g,["prevent"])},{default:o(()=>[a(f,null,{default:o(()=>[a(u,{justify:"space-between",align:"start"},{default:o(()=>[a(d,{rules:[e(i)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).name,"onUpdate:modelValue":s[0]||(s[0]=r=>e(l).name=r),label:t.$t("Name")},null,8,["rules","modelValue","label"]),a(d,{rules:[e(i),e(j),e(N)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(l).phone,"onUpdate:modelValue":s[1]||(s[1]=r=>e(l).phone=r),label:t.$t("Phone Number")},null,8,["rules","modelValue","label"])]),_:1}),a(u,{class:"mt-10",justify:"space-between",align:"start"},{default:o(()=>{var r;return[a(d,{rules:[e(i),e(B)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).email,"onUpdate:modelValue":s[2]||(s[2]=n=>e(l).email=n),label:t.$t("Email")},null,8,["rules","modelValue","label"]),a(d,{rules:[e(i),e(w)((r=e(l).password)==null?void 0:r.length,4,8)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(l).password,"onUpdate:modelValue":s[3]||(s[3]=n=>e(l).password=n),label:t.$t("Password")},null,8,["rules","modelValue","label"])]}),_:1}),a(u,{class:"mt-10",justify:"space-between",align:"start"},{default:o(()=>{var r;return[a(d,{rules:[e(i),e(w)((r=e(l).password_confirmation)==null?void 0:r.length,4,8)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).password_confirmation,"onUpdate:modelValue":s[4]||(s[4]=n=>e(l).password_confirmation=n),label:t.$t("Confirm Password")},null,8,["rules","modelValue","label"])]}),_:1})]),_:1}),a(u,{class:"pb-6 mt-8 px-3",align:"center",justify:"center"},{default:o(()=>[a(F,{block:t.$vuetify.display.xs,color:"primary",class:"px-12",loading:e(m),type:"submit"},{default:o(()=>[a(M,{start:"",icon:"tabler-plus"}),x(V(t.$t("Add")),1)]),_:1},8,["block","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}}};typeof y=="function"&&y(S);export{S as default};
