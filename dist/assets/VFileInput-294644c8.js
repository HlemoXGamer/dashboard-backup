import{X as H,cb as J,c6 as K,cc as Q,aw as W,Z as Y,cj as ee,O as d,cv as B,l as C,E as le,a1 as te,ca as ne,cd as A,ce as ae,q as o,cg as oe,a0 as g,F as h,cl as ue,a2 as se,aL as ie,cm as re}from"./index-8aabc48c.js";import{V as ce}from"./VChip-8eb34e65.js";const me=H()({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...J({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>K(e).every(f=>f!=null&&typeof f=="object")},...Q({clearable:!0})},emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:$,emit:V,slots:n}=f;const{t:k}=W(),a=Y(e,"modelValue"),{isFocused:v,focus:M,blur:N}=ee(e),I=d(()=>typeof e.showSize!="boolean"?e.showSize:void 0),S=d(()=>(a.value??[]).reduce((l,t)=>{let{size:i=0}=t;return l+i},0)),b=d(()=>B(S.value,I.value)),p=d(()=>(a.value??[]).map(l=>{const{name:t="",size:i=0}=l;return e.showSize?`${t} (${B(i,I.value)})`:t})),j=d(()=>{var t;const l=((t=a.value)==null?void 0:t.length)??0;return e.showSize?k(e.counterSizeString,l,b.value):k(e.counterString,l)}),F=C(),w=C(),u=C();function y(){var l;u.value!==document.activeElement&&((l=u.value)==null||l.focus()),v.value||M()}function D(l){z(l)}function E(l){V("mousedown:control",l)}function z(l){var t;(t=u.value)==null||t.click(),V("click:control",l)}function x(l){l.stopPropagation(),y(),ie(()=>{a.value=[],re(e["onClick:clear"],l)})}return le(a,l=>{(!Array.isArray(l)||!l.length)&&u.value&&(u.value.value="")}),te(()=>{const l=!!(n.counter||e.counter),t=!!(l||n.details),[i,L]=ne($),[{modelValue:de,...q}]=A.filterProps(e),[O]=ae(e);return o(A,g({ref:F,modelValue:a.value,"onUpdate:modelValue":r=>a.value=r,class:["v-file-input",e.class],style:e.style,"onClick:prepend":D},i,q,{focused:v.value}),{...n,default:r=>{let{id:m,isDisabled:c,isDirty:P,isReadonly:T,isValid:U}=r;return o(oe,g({ref:w,"prepend-icon":e.prependIcon,onMousedown:E,onClick:z,"onClick:clear":x,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},O,{id:m.value,active:P.value||v.value,dirty:P.value,disabled:c.value,focused:v.value,error:U.value===!1}),{...n,default:X=>{var R;let{props:{class:Z,..._}}=X;return o(h,null,[o("input",g({ref:u,type:"file",readonly:T.value,disabled:c.value,multiple:e.multiple,name:e.name,onClick:s=>{s.stopPropagation(),y()},onChange:s=>{if(!s.target)return;const G=s.target;a.value=[...G.files??[]]},onFocus:y,onBlur:N},_,L),null),o("div",{class:Z},[!!((R=a.value)!=null&&R.length)&&(n.selection?n.selection({fileNames:p.value,totalBytes:S.value,totalBytesReadable:b.value}):e.chips?p.value.map(s=>o(ce,{key:s,size:"small",color:e.color},{default:()=>[s]})):p.value.join(", "))])])}})},details:t?r=>{var m,c;return o(h,null,[(m=n.details)==null?void 0:m.call(n,r),l&&o(h,null,[o("span",null,null),o(ue,{active:!!((c=a.value)!=null&&c.length),value:j.value},n.counter)])])}:void 0})}),se({},F,w,u)}});export{me as V};