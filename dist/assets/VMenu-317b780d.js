import{a3 as h,a4 as M,a5 as O,a6 as w,O as m,l as v,bf as D,E as x,X as f,a7 as A,q as V,ay as I,a8 as R,bg as T}from"./index-358c466b.js";import{m as U,u as $,a as g,V as p}from"./VOverlay-2dca64b1.js";import{V as j}from"./dialog-transition-d456e6da.js";const N=h()({name:"VMenu",props:{id:String,...M(U({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:j}}),["absolute"])},emits:{"update:modelValue":a=>!0},setup(a,P){let{slots:t}=P;const o=O(a,"modelValue"),{scopeId:y}=$(),C=w(),u=m(()=>a.id||`v-menu-${C}`),i=v(),e=D(g,null),s=v(0);T(g,{register(){++s.value},unregister(){--s.value},closeParents(){setTimeout(()=>{s.value||(o.value=!1,e==null||e.closeParents())},40)}}),x(o,l=>{l?e==null||e.register():e==null||e.unregister()});function S(){e==null||e.closeParents()}const b=m(()=>f({"aria-haspopup":"menu","aria-expanded":String(o.value),"aria-owns":u.value},a.activatorProps));return A(()=>{const[l]=p.filterProps(a);return V(p,f({ref:i,class:["v-menu",a.class],style:a.style},l,{modelValue:o.value,"onUpdate:modelValue":r=>o.value=r,absolute:!0,activatorProps:b.value,"onClick:outside":S},y),{activator:t.activator,default:function(){for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return V(I,{root:!0},{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t,...c)]}})}})}),R({id:u,ΨopenChildren:s},i)}});export{N as V};
