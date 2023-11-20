import{bj as U,ab as A,bt as $,ak as j,ad as q,a3 as D,ac as T,a5 as _,a6 as w,O as u,bh as z,by as H,aO as N,av as o,a7 as G,q as f,bn as X,l as g,cb as J,M as K,br as Q,z as W,X as B,b7 as Y,bg as Z,ao as p,c7 as F,au as ee,bz as P,aL as le}from"./index-1dd32ede.js";const O=Symbol.for("vuetify:selection-control-group"),R=U({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:A,trueIcon:A,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:$},...j(),...q()},"v-selection-control-group");D()({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...T(),...R()},emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:s}=i;const l=_(e,"modelValue"),t=w(),m=u(()=>e.id||`v-selection-control-group-${t}`),d=u(()=>e.name||m.value),a=new Set;return z(O,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),H(()=>{a.delete(n)})}}),N({[e.defaultsTarget]:{color:o(e,"color"),disabled:o(e,"disabled"),density:o(e,"density"),error:o(e,"error"),inline:o(e,"inline"),modelValue:l,multiple:u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:d,falseIcon:o(e,"falseIcon"),trueIcon:o(e,"trueIcon"),readonly:o(e,"readonly"),ripple:o(e,"ripple"),type:o(e,"type"),valueComparator:o(e,"valueComparator")}}),G(()=>{var n;return f("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=s.default)==null?void 0:n.call(s)])}),{}}});const ae=U({label:String,trueValue:null,falseValue:null,value:null,...T(),...R()},"v-selection-control");function te(e){const i=Z(O,void 0),{densityClasses:s}=p(e),l=_(e,"modelValue"),t=u(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),m=u(()=>e.falseValue!==void 0?e.falseValue:!1),d=u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=u({get(){const v=i?i.modelValue.value:l.value;return d.value?v.some(r=>e.valueComparator(r,t.value)):e.valueComparator(v,t.value)},set(v){if(e.readonly)return;const r=v?t.value:m.value;let c=r;d.value&&(c=v?[...F(l.value),r]:F(l.value).filter(b=>!e.valueComparator(b,t.value))),i?i.modelValue.value=c:l.value=c}}),{textColorClasses:n,textColorStyles:V}=ee(u(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),S=u(()=>a.value?e.trueIcon:e.falseIcon);return{group:i,densityClasses:s,trueValue:t,falseValue:m,model:a,textColorClasses:n,textColorStyles:V,icon:S}}const oe=D()({name:"VSelectionControl",directives:{Ripple:X},inheritAttrs:!1,props:ae(),emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:s,slots:l}=i;const{group:t,densityClasses:m,icon:d,model:a,textColorClasses:n,textColorStyles:V,trueValue:S}=te(e),v=w(),r=u(()=>e.id||`input-${v}`),c=g(!1),b=g(!1),C=g();t==null||t.onForceUpdate(()=>{C.value&&(C.value.checked=a.value)});function I(y){c.value=!0,(!P||P&&y.target.matches(":focus-visible"))&&(b.value=!0)}function k(){c.value=!1,b.value=!1}function E(y){e.readonly&&t&&le(()=>t.forceUpdate()),a.value=y.target.checked}return G(()=>{var h,x;const y=l.label?l.label({label:e.label,props:{for:r.value}}):e.label,[L,M]=J(s);return f("div",B({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":c.value,"v-selection-control--focus-visible":b.value,"v-selection-control--inline":e.inline},m.value,e.class]},L,{style:e.style}),[f("div",{class:["v-selection-control__wrapper",n.value],style:V.value},[(h=l.default)==null?void 0:h.call(l),K(f("div",{class:["v-selection-control__input"]},[d.value&&f(W,{key:"icon",icon:d.value},null),f("input",B({ref:C,checked:a.value,disabled:e.disabled,id:r.value,onBlur:k,onFocus:I,onInput:E,"aria-disabled":e.readonly,type:e.type,value:S.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},M),null),(x=l.input)==null?void 0:x.call(l,{model:a,textColorClasses:n,textColorStyles:V,props:{onFocus:I,onBlur:k,id:r.value}})]),[[Q("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),y&&f(Y,{for:r.value,clickable:!0},{default:()=>[y]})])}),{isFocused:c,input:C}}});export{oe as V,ae as m};
