import{bj as W,ab as X,bt as Y,a3 as G,a4 as J,c8 as Q,aR as Z,aw as ee,l as x,a5 as S,O as D,c9 as ae,a7 as le,ca as _,q as s,F as te,X as V,ay as ne,H as oe,a8 as ue,c7 as se}from"./index-c869d194.js";import{m as ie,u as ce,V as re,a as R}from"./VList-cd8262bf.js";import{V as de}from"./dialog-transition-cba1c577.js";import{V as fe}from"./VMenu-a34876aa.js";import{V as ve}from"./VCheckboxBtn-afc87216.js";import{V as me}from"./VChip-27e400a7.js";const pe=W({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:X,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:Y},...ie({itemChildren:!1})},"v-select"),we=G()({name:"VSelect",props:{...pe(),...J(Q({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...Z({transition:{component:de}})},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,E){let{slots:l}=E;const{t:A}=ee(),P=x(),B=x(),b=S(e,"menu"),i=D({get:()=>b.value,set:a=>{var n;b.value&&!a&&((n=B.value)!=null&&n.ΨopenChildren)||(b.value=a)}}),{items:h,transformIn:K,transformOut:M}=ce(e),o=S(e,"modelValue",[],a=>K(se(a)),a=>{const n=M(a);return e.multiple?n:n[0]??null}),m=ae(),C=D(()=>o.value.map(a=>h.value.find(n=>e.valueComparator(n.value,a.value))||a)),L=D(()=>C.value.map(a=>a.props.value)),y=x(!1);let F="",O;const I=D(()=>e.hideSelected?h.value.filter(a=>!C.value.some(n=>n===a)):h.value),p=x();function U(a){e.openOnClear&&(i.value=!0)}function H(){e.hideNoData&&!h.value.length||e.readonly||m!=null&&m.isReadonly.value||(i.value=!i.value)}function N(a){var t,f,v,c;if(e.readonly||m!=null&&m.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(a.key)&&a.preventDefault(),["Enter","ArrowDown"," "].includes(a.key)&&(i.value=!0),["Escape","Tab"].includes(a.key)&&(i.value=!1),a.key==="ArrowDown"?(t=p.value)==null||t.focus("next"):a.key==="ArrowUp"?(f=p.value)==null||f.focus("prev"):a.key==="Home"?(v=p.value)==null||v.focus("first"):a.key==="End"&&((c=p.value)==null||c.focus("last"));const n=1e3;function d(u){const r=u.key.length===1,T=!u.ctrlKey&&!u.metaKey&&!u.altKey;return r&&T}if(e.multiple||!d(a))return;const g=performance.now();g-O>n&&(F=""),F+=a.key.toLowerCase(),O=g;const w=h.value.find(u=>u.title.toLowerCase().startsWith(F));w!==void 0&&(o.value=[w])}function k(a){if(e.multiple){const n=L.value.findIndex(d=>e.valueComparator(d,a.value));if(n===-1)o.value=[...o.value,a];else{const d=[...o.value];d.splice(n,1),o.value=d}}else o.value=[a],i.value=!1}function $(a){var n;(n=p.value)!=null&&n.$el.contains(a.relatedTarget)||(i.value=!1)}function j(a){y.value=!0}function q(a){var n;a.relatedTarget==null&&((n=P.value)==null||n.focus())}return le(()=>{const a=!!(e.chips||l.chip),n=!!(!e.hideNoData||I.value.length||l.prepend||l.append||l["no-data"]),d=o.value.length>0,[g]=_.filterProps(e),w=d||!y.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return s(_,V({ref:P},g,{modelValue:o.value.map(t=>t.props.value).join(", "),"onUpdate:modelValue":t=>{t==null&&(o.value=[])},focused:y.value,"onUpdate:focused":t=>y.value=t,validationValue:o.externalValue,dirty:d,class:["v-select",{"v-select--active-menu":i.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":o.value.length},e.class],style:e.style,appendInnerIcon:e.menuIcon,readonly:!0,placeholder:w,"onClick:clear":U,"onMousedown:control":H,onBlur:$,onKeydown:N}),{...l,default:()=>s(te,null,[s(fe,V({ref:B,modelValue:i.value,"onUpdate:modelValue":t=>i.value=t,activator:"parent",contentClass:"v-select__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition},e.menuProps),{default:()=>[n&&s(re,{ref:p,selected:L.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:t=>t.preventDefault(),onFocusin:j,onFocusout:q},{default:()=>{var t,f,v;return[!I.value.length&&!e.hideNoData&&(((t=l["no-data"])==null?void 0:t.call(l))??s(R,{title:A(e.noDataText)},null)),(f=l["prepend-item"])==null?void 0:f.call(l),I.value.map((c,u)=>{var r;return l.item?(r=l.item)==null?void 0:r.call(l,{item:c,index:u,props:V(c.props,{onClick:()=>k(c)})}):s(R,V({key:u},c.props,{onClick:()=>k(c)}),{prepend:T=>{let{isSelected:z}=T;return e.multiple&&!e.hideSelected?s(ve,{modelValue:z,ripple:!1,tabindex:"-1"},null):void 0}})}),(v=l["append-item"])==null?void 0:v.call(l)]}})]}),C.value.map((t,f)=>{var u;function v(r){r.stopPropagation(),r.preventDefault(),k(t)}const c={"onClick:close":v,modelValue:!0,"onUpdate:modelValue":void 0};return s("div",{key:t.value,class:"v-select__selection"},[a?l.chip?s(ne,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:t.title}}},{default:()=>{var r;return[(r=l.chip)==null?void 0:r.call(l,{item:t,index:f,props:c})]}}):s(me,V({key:"chip",closable:e.closableChips,size:"small",text:t.title},c),null):((u=l.selection)==null?void 0:u.call(l,{item:t,index:f}))??s("span",{class:"v-select__selection-text"},[t.title,e.multiple&&f<C.value.length-1&&s("span",{class:"v-select__selection-comma"},[oe(",")])])])})])})}),ue({isFocused:y,menu:i,select:k},P)}});export{we as V,pe as m};
