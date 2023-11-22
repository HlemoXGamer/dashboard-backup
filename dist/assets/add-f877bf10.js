import{aV as v,l as m,o as $,b as h,w as o,q as a,W as f,n as k,y as w,s as e,a$ as A,b0 as N,U as u,b1 as i,bd as U,be as j,bf as y,az as S,z as B,H as F,aZ as g,a_ as C}from"./index-ac936590.js";import{c as P}from"./agents-2a38848d.js";const T={class:"text-h4 pt-3 pb-2"},q={__name:"add",setup(x){var V;const c=v(),p=m(!1),l=m({name:"",phone:"",email:"",password:"",password_confirmation:""}),b=m();(V=JSON.parse(localStorage.getItem("userData")))==null||V.type;const _=async()=>{var s;(s=b.value)==null||s.validate().then(async({valid:t})=>{if(t){p.value=!0;try{await P(l.value),p.value=!1,c.success("Agent created successfully")}catch(n){c.error(n.response.data.message),p.value=!1}}})};return(s,t)=>{const n=C;return $(),h(u,{class:"mt-4 px-4",justify:"space-around"},{default:o(()=>[a(f,{class:"pt-0"},{default:o(()=>[a(f,{class:"px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:o(()=>[k("p",T,w(s.$t("Add Agent")),1),a(e(A),{ref_key:"refVForm",ref:b,onSubmit:N(_,["prevent"])},{default:o(()=>[a(f,null,{default:o(()=>[a(u,{justify:"space-between",align:"start"},{default:o(()=>[a(n,{rules:[e(i)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).name,"onUpdate:modelValue":t[0]||(t[0]=r=>e(l).name=r),label:s.$t("Name")},null,8,["rules","modelValue","label"]),a(n,{rules:[e(i),s.integerValidator,e(U)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(l).phone,"onUpdate:modelValue":t[1]||(t[1]=r=>e(l).phone=r),label:s.$t("Phone Number")},null,8,["rules","modelValue","label"])]),_:1}),a(u,{class:"mt-10",justify:"space-between",align:"start"},{default:o(()=>{var r;return[a(n,{rules:[e(i),e(j)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).email,"onUpdate:modelValue":t[2]||(t[2]=d=>e(l).email=d),label:s.$t("Email")},null,8,["rules","modelValue","label"]),a(n,{rules:[e(i),e(y)((r=e(l).password)==null?void 0:r.length,4,8)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(l).password,"onUpdate:modelValue":t[3]||(t[3]=d=>e(l).password=d),label:s.$t("Password")},null,8,["rules","modelValue","label"])]}),_:1}),a(u,{class:"mt-10",justify:"space-between",align:"start"},{default:o(()=>{var r;return[a(n,{rules:[e(i),e(y)((r=e(l).password_confirmation)==null?void 0:r.length,4,8)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).password_confirmation,"onUpdate:modelValue":t[4]||(t[4]=d=>e(l).password_confirmation=d),label:s.$t("Confirm Password")},null,8,["rules","modelValue","label"])]}),_:1})]),_:1}),a(u,{class:"pb-6 mt-8 px-3",align:"center",justify:"center"},{default:o(()=>[a(S,{block:s.$vuetify.display.xs,color:"primary",class:"px-12",loading:e(p),type:"submit"},{default:o(()=>[a(B,{start:"",icon:"tabler-plus"}),F(w(s.$t("Add")),1)]),_:1},8,["block","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}}};typeof g=="function"&&g(q);export{q as default};
