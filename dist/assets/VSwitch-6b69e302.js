import{m as $,V as d}from"./VSelectionControl-13510e28.js";import{a3 as j,cb as q,a5 as v,bZ as z,cj as M,O as f,a6 as N,a7 as O,ca as X,cd as m,l as Z,q as t,X as h,b_ as E,cn as G}from"./index-7157bb72.js";const T=j()({name:"VSwitch",inheritAttrs:!1,props:{indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...q(),...$()},emits:{"update:focused":e=>!0,"update:modelValue":()=>!0,"update:indeterminate":e=>!0},setup(e,V){let{attrs:g,slots:a}=V;const l=v(e,"indeterminate"),c=v(e,"modelValue"),{loaderClasses:C}=z(e),{isFocused:w,focus:b,blur:y}=M(e),k=f(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),P=N(),S=f(()=>e.id||`switch-${P}`);function _(){l.value&&(l.value=!1)}return O(()=>{const[x,A]=X(g),[B,H]=m.filterProps(e),[I,J]=d.filterProps(e),r=Z();function F(o){var s,n;o.stopPropagation(),o.preventDefault(),(n=(s=r.value)==null?void 0:s.input)==null||n.click()}return t(m,h({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":l.value},C.value,e.class],style:e.style},x,B,{id:S.value,focused:w.value}),{...a,default:o=>{let{id:s,messagesId:n,isDisabled:p,isReadonly:D,isValid:L}=o;return t(d,h({ref:r},I,{modelValue:c.value,"onUpdate:modelValue":[i=>c.value=i,_],id:s.value,"aria-describedby":n.value,type:"checkbox","aria-checked":l.value?"mixed":void 0,disabled:p.value,readonly:D.value,onFocus:b,onBlur:y},A),{...a,default:()=>t("div",{class:"v-switch__track",onClick:F},null),input:i=>{let{textColorClasses:R,textColorStyles:U}=i;return t("div",{class:["v-switch__thumb",R.value],style:U.value},[e.loading&&t(E,{name:"v-switch",active:!0,color:L.value===!1?void 0:k.value},{default:u=>a.loader?a.loader(u):t(G,{active:u.isActive,color:u.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})}),{}}});export{T as V};
