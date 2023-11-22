import{aV as U,l as p,aP as h,R as $,o as k,b as N,w as r,q as a,a2 as m,n as j,y as V,s as e,a$ as S,b0 as B,a1 as u,b1 as n,bd as F,be as P,az as R,z as x,H as C,aZ as y,a_ as I}from"./index-c869d194.js";import{s as T,u as q}from"./users-8842fd84.js";const z={class:"text-h4 pt-3 pb-2"},D={__name:"[id]",setup(M){var w;const _=(w=JSON.parse(localStorage.getItem("userData")))==null?void 0:w.type,f=U(),i=p(!1),c=h().params.id,t=p({user_id:0,name:"",phone:"",email:"",new_password:"",password_confirmation:""}),b=p(),g=async()=>{await T(c).then(l=>{let{name:s,phone:d,email:o}=l.data.data;t.value={user_id:c,name:s,phone:d,email:o}})},v=async()=>{var l;(l=b.value)==null||l.validate().then(async({valid:s})=>{if(s){i.value=!0;try{await q(t.value),i.value=!1,f.success("User updated successfully")}catch(d){f.error(d.response.data.message),i.value=!1}}})};return $(()=>{_=="admin"&&g()}),(l,s)=>{const d=I;return k(),N(u,{class:"mt-4 px-4",justify:"space-around"},{default:r(()=>[a(m,{class:"pt-0"},{default:r(()=>[a(m,{class:"px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:r(()=>[j("p",z,V(l.$t("Update User")),1),a(e(S),{ref_key:"refVForm",ref:b,onSubmit:B(v,["prevent"])},{default:r(()=>[a(m,null,{default:r(()=>[a(u,{justify:"space-between",align:"start"},{default:r(()=>[a(d,{rules:[e(n)],disabled:"",style:{width:"100%"},class:"pe-3 w-50",modelValue:e(t).name,"onUpdate:modelValue":s[0]||(s[0]=o=>e(t).name=o),label:l.$t("Name")},null,8,["rules","modelValue","label"]),a(d,{rules:[e(n),e(F)],disabled:"",style:{width:"100%"},class:"ps-3 w-50",modelValue:e(t).phone,"onUpdate:modelValue":s[1]||(s[1]=o=>e(t).phone=o),label:l.$t("Phone Number")},null,8,["rules","modelValue","label"])]),_:1}),a(u,{class:"mt-10",justify:"space-between",align:"start"},{default:r(()=>[a(d,{rules:[e(n),e(P)],disabled:"",style:{width:"100%"},class:"pe-3 w-50",modelValue:e(t).email,"onUpdate:modelValue":s[2]||(s[2]=o=>e(t).email=o),label:l.$t("Email")},null,8,["rules","modelValue","label"]),a(d,{rules:[e(n)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(t).new_password,"onUpdate:modelValue":s[3]||(s[3]=o=>e(t).new_password=o),label:l.$t("Password")},null,8,["rules","modelValue","label"])]),_:1}),a(u,{class:"mt-10",justify:"space-between",align:"start"},{default:r(()=>[a(d,{rules:[e(n)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(t).password_confirmation,"onUpdate:modelValue":s[4]||(s[4]=o=>e(t).password_confirmation=o),label:l.$t("Confirm Password")},null,8,["rules","modelValue","label"])]),_:1})]),_:1}),a(u,{class:"pb-6 mt-8 px-3",align:"center",justify:"center"},{default:r(()=>[a(R,{block:l.$vuetify.display.xs,color:"primary",class:"px-12",loading:e(i),type:"submit"},{default:r(()=>[a(x,{start:"",icon:"tabler-check"}),C(V(l.$t("Update")),1)]),_:1},8,["block","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}}};typeof y=="function"&&y(D);export{D as default};