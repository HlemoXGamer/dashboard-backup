import{X as C,cb as y,Y as g,cj as A,$ as I,O as B,a1 as F,ca as $,cd as t,q as o,a0 as a}from"./index-74fdcc91.js";import{m as R,V as c}from"./VCheckboxBtn-35e59c47.js";const N=C()({name:"VCheckbox",inheritAttrs:!1,props:{...y(),...g(R(),["inline"])},emits:{"update:focused":e=>!0},setup(e,r){let{attrs:n,slots:s}=r;const{isFocused:u,focus:i,blur:l}=A(e),d=I(),b=B(()=>e.id||`checkbox-${d}`);return F(()=>{const[m,f]=$(n),[p,_]=t.filterProps(e),[k,j]=c.filterProps(e);return o(t,a({class:["v-checkbox",e.class]},m,p,{id:b.value,focused:u.value,style:e.style}),{...s,default:V=>{let{id:h,messagesId:x,isDisabled:v,isReadonly:P}=V;return o(c,a(k,{id:h.value,"aria-describedby":x.value,disabled:v.value,readonly:P.value},f,{onFocus:i,onBlur:l}),s)}})}),{}}});export{N as V};