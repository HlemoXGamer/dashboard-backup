import{D as L,l as c,O as _,aV as N,aP as R,R as T,o as d,c as w,q as t,s as r,G as D,b as x,w as s,H as I,y as v,az as b,A as q,F as A,a as j,a2 as J,I as K,n as i,J as O,K as z,aX as E,a1 as G,Y as H,a_ as M}from"./index-581c2083.js";import{u as Q}from"./products-bad6d662.js";import{V as X}from"./VSwitch-084d9c96.js";import"./VSelectionControl-6e42f01a.js";const Y={class:"d-flex flex-md-row justify-space-between"},W={class:"d-flex justify-end align-center pr-6"},le={__name:"[id]",setup(Z){var h;const o=L();o.t;const p=c(!1),P=_(()=>{if(o.locale.value==="en")return"name_en";if(o.locale.value==="ar")return"name_ar"}),S=_(()=>{if(o.locale.value==="en")return"description_en";if(o.locale.value==="ar")return"description_ar"}),V=N(),f=c([]),U=R(),n=c(""),u=c([]),$=(h=JSON.parse(localStorage.getItem("userData")))==null?void 0:h.type,k=e=>{u.value.push(e)},B=()=>{const e=n.value.toLowerCase().trim(),l=f.value.filter(m=>m.name_en.toLowerCase().includes(e));y.value=l},y=_(()=>{const e=n.value.toLowerCase().trim();return f.value.filter(l=>l.name_en.toLowerCase().includes(e))}),g=async()=>H.get(`/restaurant-apis/products?category=${U.params.id}`).then(e=>{f.value=e.data.data}).catch(e=>{console.error("An error occurred:",e)}),F=async()=>{p.value=!0;try{await Q({product_ids:u.value}),V.success("Updated Successfully"),u.value=[]}catch(e){await g(),u.value=[],V.error(e.response.data.message)}finally{p.value=!1}};return T(()=>{$=="restaurant"&&g()}),(e,l)=>{const m=M;return d(),w("div",null,[t(m,{modelValue:r(n),"onUpdate:modelValue":l[0]||(l[0]=a=>D(n)?n.value=a:null),onKeyup:B,placeholder:e.$t("Search Product")},null,8,["modelValue","placeholder"]),r(u).length>0?(d(),x(b,{key:0,loading:r(p),class:"mt-5",style:{width:"100%"},onClick:F},{default:s(()=>[I(v(e.$t("Update")),1)]),_:1},8,["loading"])):q("",!0),t(G,{class:"mt-10"},{default:s(()=>[(d(!0),w(A,null,j(r(y),a=>(d(),x(J,{sm:"6",cols:"12"},{default:s(()=>[t(K,null,{default:s(()=>[i("div",Y,[i("div",null,[t(O,null,{default:s(()=>[t(z,null,{default:s(()=>[I(v(a[r(P)]),1)]),_:2},1024)]),_:2},1024),t(E,{class:"d-flex align-center flex-wrap text-body-1"},{default:s(()=>[i("span",null,v(a[r(S)]),1)]),_:2},1024)]),i("div",W,[t(X,{modelValue:a.status,"onUpdate:modelValue":C=>a.status=C,"false-value":0,"true-value":1,onChange:C=>k(a.id)},null,8,["modelValue","onUpdate:modelValue","onChange"])])])]),_:2},1024)]),_:2},1024))),256))]),_:1})])}}};export{le as default};
