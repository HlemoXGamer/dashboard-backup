import{D as N,O as f,aV as P,l as m,aP as R,R as T,o as c,c as y,q as t,s as n,G as D,b as C,w as s,H as w,y as _,az as b,A as q,F as A,a as j,a2 as J,I as K,n as d,J as O,K as z,aX as E,a1 as G,Y as x,a_ as H}from"./index-c869d194.js";import{V as M}from"./VSwitch-cb5914d7.js";import"./VSelectionControl-43a717d4.js";const Q={class:"d-flex flex-md-row justify-space-between"},X={class:"d-flex justify-end align-center pr-6"},ae={__name:"[id]",setup(Y){var h;const o=N();o.t;const I=f(()=>{if(o.locale.value==="en")return"name_en";if(o.locale.value==="ar")return"name_ar"}),S=f(()=>{if(o.locale.value==="en")return"description_en";if(o.locale.value==="ar")return"description_ar"}),v=P(),i=m([]),U=R(),r=m(""),u=m([]),$=(h=JSON.parse(localStorage.getItem("userData")))==null?void 0:h.type,k=e=>{u.value.push(e)},B=()=>{const e=r.value.toLowerCase().trim(),l=i.value.filter(p=>p.name_en.toLowerCase().includes(e));V.value=l},V=f(()=>{const e=r.value.toLowerCase().trim();return i.value.filter(l=>l.name_en.toLowerCase().includes(e))}),F=()=>{x.get(`/restaurant-apis/products?category=${U.params.id}`).then(e=>{console.log(e.data.data),i.value=e.data.data}).catch(e=>{console.error("An error occurred:",e)})},L=()=>{x.post("restaurant-apis/update/products",{product_ids:u.value}).then(e=>{v.success("Updated Successfully"),u.value=[]}).catch(e=>{v.success(e.message)})};return T(()=>{$=="restaurant"&&F()}),(e,l)=>{const p=H;return c(),y("div",null,[t(p,{modelValue:n(r),"onUpdate:modelValue":l[0]||(l[0]=a=>D(r)?r.value=a:null),onKeyup:B,placeholder:e.$t("Search Product")},null,8,["modelValue","placeholder"]),n(u).length>0?(c(),C(b,{key:0,class:"mt-5",style:{width:"100%"},onClick:L},{default:s(()=>[w(_(e.$t("Update")),1)]),_:1})):q("",!0),t(G,{class:"mt-10"},{default:s(()=>[(c(!0),y(A,null,j(n(V),a=>(c(),C(J,{sm:"6",cols:"12"},{default:s(()=>[t(K,null,{default:s(()=>[d("div",Q,[d("div",null,[t(O,null,{default:s(()=>[t(z,null,{default:s(()=>[w(_(a[n(I)]),1)]),_:2},1024)]),_:2},1024),t(E,{class:"d-flex align-center flex-wrap text-body-1"},{default:s(()=>[d("span",null,_(a[n(S)]),1)]),_:2},1024)]),d("div",X,[t(M,{modelValue:a.status,"onUpdate:modelValue":g=>a.status=g,"false-value":0,"true-value":1,onChange:g=>k(a.id)},null,8,["modelValue","onUpdate:modelValue","onChange"])])])]),_:2},1024)]),_:2},1024))),256))]),_:1})])}}};export{ae as default};
