import{a3 as C,cc as y,a4 as g,ck as A,a6 as I,O as B,a7 as F,cb as R,ce as t,q as o,X as a}from"./index-1dd32ede.js";import{m as _,V as c}from"./VCheckboxBtn-34ce8752.js";const O=C()({name:"VCheckbox",inheritAttrs:!1,props:{...y(),...g(_(),["inline"])},emits:{"update:focused":e=>!0},setup(e,r){let{attrs:n,slots:s}=r;const{isFocused:u,focus:i,blur:l}=A(e),d=I(),b=B(()=>e.id||`checkbox-${d}`);return F(()=>{const[m,f]=R(n),[k,$]=t.filterProps(e),[p,q]=c.filterProps(e);return o(t,a({class:["v-checkbox",e.class]},m,k,{id:b.value,focused:u.value,style:e.style}),{...s,default:V=>{let{id:h,messagesId:x,isDisabled:v,isReadonly:P}=V;return o(c,a(p,{id:h.value,"aria-describedby":x.value,disabled:v.value,readonly:P.value},f,{onFocus:i,onBlur:l}),s)}})}),{}}});export{O as V};
