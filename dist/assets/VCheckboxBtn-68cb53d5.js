import{m as d,V as s}from"./VSelectionControl-2699808d.js";import{bi as b,ab as f,X as I,Z as o,O as c,a1 as k,q as x,a0 as V}from"./index-d2581156.js";const h=b({indeterminate:Boolean,indeterminateIcon:{type:f,default:"$checkboxIndeterminate"},...d({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),y=I()({name:"VCheckboxBtn",props:h(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,l){let{slots:i}=l;const n=o(e,"indeterminate"),t=o(e,"modelValue");function r(a){n.value&&(n.value=!1)}const u=c(()=>e.indeterminate?e.indeterminateIcon:e.falseIcon),m=c(()=>e.indeterminate?e.indeterminateIcon:e.trueIcon);return k(()=>x(s,V(e,{modelValue:t.value,"onUpdate:modelValue":[a=>t.value=a,r],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",inline:!0,falseIcon:u.value,trueIcon:m.value,"aria-checked":e.indeterminate?"mixed":void 0}),i)),{}}});export{y as V,h as m};
