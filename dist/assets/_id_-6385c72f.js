import{aV as N,l as n,aP as $,aM as k,o as d,b as g,w as e,q as t,W as s,n as u,y as l,c as w,F as B,a as C,H as D,U as S,A as F,a6 as _}from"./index-ac936590.js";import{V as R}from"./VChip-cbd976a1.js";import{V as T}from"./VSwitch-e92d5cbe.js";import"./VSelectionControl-11f51824.js";const U={__name:"[id]",setup(W){var h;const b=(h=JSON.parse(localStorage.getItem("userData")))==null?void 0:h.type,m=N(),o=n(),v=$(),r=n(!1),f=n(!1),c=n(!0),V=()=>{_.get(`/restaurant-apis/deliverymen/${v.params.id}`).then(a=>{console.log(a.data.data),o.value=a.data.data,f.value=!0,c.value=a.data.data.is_active===1}).catch(a=>{console.error("An error occurred",a)})},y=()=>{o.value.is_active=!o.value.is_active,_.put(`restaurant-apis/toggleActivation/deliverymen/${v.params.id}`,{is_active:o.value.is_active?1:0}).then(a=>{m.success("Activation status updated successfully")}).catch(a=>{m.error("An error occurred while updating activation status")})},A=()=>{r.value=!0,y(),r.value=!1};return k(()=>{b=="restaurant"&&V()}),(a,p)=>f.value?(d(),g(S,{key:0},{default:e(()=>[t(s,{cols:"6",class:"mb-5"},{default:e(()=>[u("h3",null,l(a.$t("Delivery Name")),1)]),_:1}),t(s,{cols:"6",class:"mb-5"},{default:e(()=>[u("h3",null,l(o.value.name),1)]),_:1}),t(s,{cols:"6",class:"mb-5"},{default:e(()=>[u("h3",null,l(a.$t("Phone Number")),1)]),_:1}),t(s,{cols:"6",class:"mb-5"},{default:e(()=>[u("h3",null,l(o.value.phone),1)]),_:1}),t(s,{cols:"6",class:"mb-5"},{default:e(()=>[u("h3",null,l(a.$t("Working Days")),1)]),_:1}),t(s,{cols:"6",class:"mb-5"},{default:e(()=>[u("h3",null,[(d(!0),w(B,null,C(o.value.days,i=>(d(),g(R,{style:{"margin-right":"5px"}},{default:e(()=>[D(l(i.name),1)]),_:2},1024))),256))])]),_:1}),t(s,{cols:"6",class:"mb-5"},{default:e(()=>[u("h3",null,l(a.$t("Working Hours")),1)]),_:1}),t(s,{cols:"6",class:"mb-5"},{default:e(()=>[u("h3",null,l(o.value.start)+" To "+l(o.value.end),1)]),_:1}),t(s,{cols:"6",class:"mb-5"},{default:e(()=>[u("h3",null,l(a.$t("Status")),1)]),_:1}),t(s,{cols:"6",class:"mb-5"},{default:e(()=>[t(T,{loading:r.value,disabled:r.value,onChange:A,modelValue:c.value,"onUpdate:modelValue":p[0]||(p[0]=i=>c.value=i),inset:!1},null,8,["loading","disabled","modelValue"])]),_:1})]),_:1})):F("",!0)}};export{U as default};
