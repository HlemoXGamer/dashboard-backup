import{D as L,l as c,O as _,aV as N,aP as R,R as T,o as d,c as w,q as t,s as r,G as D,b as x,w as s,H as I,y as v,az as b,A as q,F as A,a as j,W as J,I as K,n as i,J as O,K as z,aX as E,U as G,a6 as H,a_ as M}from"./index-f1c459eb.js";import{u as Q}from"./products-a46a8109.js";import{V as W}from"./VSwitch-4a3cd25f.js";import"./VSelectionControl-9d7d0faa.js";const X={class:"d-flex flex-md-row justify-space-between"},Y={class:"d-flex justify-end align-center pr-6"},le={__name:"[id]",setup(Z){var h;const o=L();o.t;const p=c(!1),U=_(()=>{if(o.locale.value==="en")return"name_en";if(o.locale.value==="ar")return"name_ar"}),P=_(()=>{if(o.locale.value==="en")return"description_en";if(o.locale.value==="ar")return"description_ar"}),V=N(),f=c([]),S=R(),n=c(""),u=c([]),$=(h=JSON.parse(localStorage.getItem("userData")))==null?void 0:h.type,k=e=>{u.value.push(e)},B=()=>{const e=n.value.toLowerCase().trim(),l=f.value.filter(m=>m.name_en.toLowerCase().includes(e));y.value=l},y=_(()=>{const e=n.value.toLowerCase().trim();return f.value.filter(l=>l.name_en.toLowerCase().includes(e))}),g=async()=>H.get(`/restaurant-apis/products?category=${S.params.id}`).then(e=>{f.value=e.data.data}).catch(e=>{console.error("An error occurred:",e)}),F=async()=>{p.value=!0;try{await Q({product_ids:u.value}),V.success("Updated Successfully"),u.value=[]}catch(e){await g(),u.value=[],V.error(e.response.data.message)}finally{p.value=!1}};return T(()=>{$=="restaurant"&&g()}),(e,l)=>{const m=M;return d(),w("div",null,[t(m,{modelValue:r(n),"onUpdate:modelValue":l[0]||(l[0]=a=>D(n)?n.value=a:null),onKeyup:B,placeholder:e.$t("Search Product")},null,8,["modelValue","placeholder"]),r(u).length>0?(d(),x(b,{key:0,loading:r(p),class:"mt-5",style:{width:"100%"},onClick:F},{default:s(()=>[I(v(e.$t("Update")),1)]),_:1},8,["loading"])):q("",!0),t(G,{class:"mt-10"},{default:s(()=>[(d(!0),w(A,null,j(r(y),a=>(d(),x(J,{sm:"6",cols:"12"},{default:s(()=>[t(K,null,{default:s(()=>[i("div",X,[i("div",null,[t(O,null,{default:s(()=>[t(z,null,{default:s(()=>[I(v(a[r(U)]),1)]),_:2},1024)]),_:2},1024),t(E,{class:"d-flex align-center flex-wrap text-body-1"},{default:s(()=>[i("span",null,v(a[r(P)]),1)]),_:2},1024)]),i("div",Y,[t(W,{modelValue:a.status,"onUpdate:modelValue":C=>a.status=C,"false-value":0,"true-value":1,onChange:C=>k(a.id)},null,8,["modelValue","onUpdate:modelValue","onChange"])])])]),_:2},1024)]),_:2},1024))),256))]),_:1})])}}};export{le as default};