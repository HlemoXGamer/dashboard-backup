import{X as C,cc as y,Y as g,ck as A,$ as I,O as B,a1 as F,cb as $,ce as t,q as o,a0 as a}from"./index-ac936590.js";import{m as R,V as c}from"./VCheckboxBtn-7562a87f.js";const O=C()({name:"VCheckbox",inheritAttrs:!1,props:{...y(),...g(R(),["inline"])},emits:{"update:focused":e=>!0},setup(e,r){let{attrs:n,slots:s}=r;const{isFocused:u,focus:i,blur:l}=A(e),d=I(),b=B(()=>e.id||`checkbox-${d}`);return F(()=>{const[m,f]=$(n),[k,_]=t.filterProps(e),[p,q]=c.filterProps(e);return o(t,a({class:["v-checkbox",e.class]},m,k,{id:b.value,focused:u.value,style:e.style}),{...s,default:V=>{let{id:h,messagesId:x,isDisabled:v,isReadonly:P}=V;return o(c,a(p,{id:h.value,"aria-describedby":x.value,disabled:v.value,readonly:P.value},f,{onFocus:i,onBlur:l}),s)}})}),{}}});export{O as V};
