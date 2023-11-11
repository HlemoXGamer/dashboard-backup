import{m as U,V as d}from"./VSelectionControl-36f39ce1.js";import{X as q,cc as z,Z as v,b_ as M,ck as N,O as f,$ as O,a1 as X,cb as Z,ce as m,l as j,q as t,a0 as h,b$ as E,co as G}from"./index-ae436fe7.js";const T=q()({name:"VSwitch",inheritAttrs:!1,props:{indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...z(),...U()},emits:{"update:focused":e=>!0,"update:modelValue":()=>!0,"update:indeterminate":e=>!0},setup(e,V){let{attrs:g,slots:a}=V;const l=v(e,"indeterminate"),c=v(e,"modelValue"),{loaderClasses:C}=M(e),{isFocused:w,focus:b,blur:y}=N(e),k=f(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),P=O(),S=f(()=>e.id||`switch-${P}`);function _(){l.value&&(l.value=!1)}return X(()=>{const[x,A]=Z(g),[B,H]=m.filterProps(e),[I,J]=d.filterProps(e),r=j();function $(o){var s,n;o.stopPropagation(),o.preventDefault(),(n=(s=r.value)==null?void 0:s.input)==null||n.click()}return t(m,h({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":l.value},C.value,e.class],style:e.style},x,B,{id:S.value,focused:w.value}),{...a,default:o=>{let{id:s,messagesId:n,isDisabled:F,isReadonly:p,isValid:D}=o;return t(d,h({ref:r},I,{modelValue:c.value,"onUpdate:modelValue":[i=>c.value=i,_],id:s.value,"aria-describedby":n.value,type:"checkbox","aria-checked":l.value?"mixed":void 0,disabled:F.value,readonly:p.value,onFocus:b,onBlur:y},A),{...a,default:()=>t("div",{class:"v-switch__track",onClick:$},null),input:i=>{let{textColorClasses:L,textColorStyles:R}=i;return t("div",{class:["v-switch__thumb",L.value],style:R.value},[e.loading&&t(E,{name:"v-switch",active:!0,color:D.value===!1?void 0:k.value},{default:u=>a.loader?a.loader(u):t(G,{active:u.isActive,color:u.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})}),{}}});export{T as V};
