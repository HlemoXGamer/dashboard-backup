import{a3 as b,a4 as M,a5 as O,a6 as w,O as m,l as v,bg as D,E as x,X as f,a7 as A,q as V,ay as I,a8 as R,bh as T}from"./index-c869d194.js";import{m as U,u as $,a as g,V as p}from"./VOverlay-5749ee97.js";import{V as j}from"./dialog-transition-cba1c577.js";const N=b()({name:"VMenu",props:{id:String,...M(U({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:j}}),["absolute"])},emits:{"update:modelValue":a=>!0},setup(a,P){let{slots:t}=P;const o=O(a,"modelValue"),{scopeId:y}=$(),C=w(),u=m(()=>a.id||`v-menu-${C}`),i=v(),e=D(g,null),s=v(0);T(g,{register(){++s.value},unregister(){--s.value},closeParents(){setTimeout(()=>{s.value||(o.value=!1,e==null||e.closeParents())},40)}}),x(o,l=>{l?e==null||e.register():e==null||e.unregister()});function h(){e==null||e.closeParents()}const S=m(()=>f({"aria-haspopup":"menu","aria-expanded":String(o.value),"aria-owns":u.value},a.activatorProps));return A(()=>{const[l]=p.filterProps(a);return V(p,f({ref:i,class:["v-menu",a.class],style:a.style},l,{modelValue:o.value,"onUpdate:modelValue":r=>o.value=r,absolute:!0,activatorProps:S.value,"onClick:outside":h},y),{activator:t.activator,default:function(){for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return V(I,{root:!0},{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t,...c)]}})}})}),R({id:u,ΨopenChildren:s},i)}});export{N as V};
