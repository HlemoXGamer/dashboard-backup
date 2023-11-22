import{m as oe}from"./VSelect-fae3330c.js";import{a3 as ie,a4 as se,c7 as re,aR as ce,aw as ve,l as p,a5 as $,O as b,au as de,c8 as fe,E as R,aL as j,a7 as me,c9 as z,q as i,F as q,X as D,ay as he,H as be,a8 as ye,c6 as ge}from"./index-62e44508.js";import{m as xe,u as ke}from"./filter-4f94d92f.js";import{u as Ve,t as S,V as pe,a as H}from"./VList-1328fe71.js";import{V as Ce}from"./VMenu-f088b4c3.js";import{V as we}from"./VCheckboxBtn-b1f0a5d3.js";import{V as _e}from"./VChip-a068bcbe.js";function De(e,m,I){if(m==null)return e;if(Array.isArray(m))throw new Error("Multiple matches is not implemented");return typeof m=="number"&&~m?i(q,null,[i("span",{class:"v-combobox__unmask"},[e.substr(0,m)]),i("span",{class:"v-combobox__mask"},[e.substr(m,I)]),i("span",{class:"v-combobox__unmask"},[e.substr(m+I)])]):e}const Te=ie()({name:"VCombobox",props:{delimiters:Array,...xe({filterKeys:["title"]}),...oe({hideNoData:!0,returnObject:!0}),...se(re({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...ce({transition:!1})},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,m){var K;let{emit:I,slots:t}=m;const{t:X}=ve(),y=p(),g=p(!1),x=p(!0),U=p(),E=$(e,"menu"),v=b({get:()=>E.value,set:l=>{var a;E.value&&!l&&((a=U.value)!=null&&a.ΨopenChildren)||(E.value=l)}}),n=p(-1);let T=!1;const G=b(()=>{var l;return(l=y.value)==null?void 0:l.color}),{items:L,transformIn:J,transformOut:Q}=Ve(e),{textColorClasses:W,textColorStyles:Y}=de(G),c=$(e,"modelValue",[],l=>J(ge(l)),l=>{const a=Q(l);return e.multiple?a:a[0]??null}),C=fe(),w=p(e.multiple?"":((K=c.value[0])==null?void 0:K.title)??""),s=b({get:()=>w.value,set:l=>{var a;if(w.value=l,e.multiple||(c.value=[S(e,l)]),l&&e.multiple&&((a=e.delimiters)!=null&&a.length)){const r=l.split(new RegExp(`(?:${e.delimiters.join("|")})+`));r.length>1&&(r.forEach(h=>{h=h.trim(),h&&V(S(e,h))}),w.value="")}l||(n.value=-1),x.value=!l}});R(w,l=>{T?j(()=>T=!1):g.value&&!v.value&&(v.value=!0),I("update:search",l)}),R(c,l=>{var a;e.multiple||(w.value=((a=l[0])==null?void 0:a.title)??"")});const{filteredItems:F,getMatches:Z}=ke(e,L,b(()=>x.value?void 0:s.value)),k=b(()=>c.value.map(l=>L.value.find(a=>e.valueComparator(a.value,l.value))||l)),M=b(()=>e.hideSelected?F.value.filter(l=>!k.value.some(a=>a.value===l.value)):F.value),N=b(()=>k.value.map(l=>l.props.value)),B=b(()=>k.value[n.value]),O=p();function ee(l){T=!0,e.openOnClear&&(v.value=!0)}function le(){e.hideNoData&&!L.value.length||e.readonly||C!=null&&C.isReadonly.value||(v.value=!0)}function ae(l){var h,u;if(e.readonly||C!=null&&C.isReadonly.value)return;const a=y.value.selectionStart,r=N.value.length;if((n.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(v.value=!0),["Escape"].includes(l.key)&&(v.value=!1),["Enter","Escape","Tab"].includes(l.key)&&(x.value=!0),l.key==="ArrowDown"?(h=O.value)==null||h.focus("next"):l.key==="ArrowUp"&&((u=O.value)==null||u.focus("prev")),!!e.multiple){if(["Backspace","Delete"].includes(l.key)){if(n.value<0){l.key==="Backspace"&&!s.value&&(n.value=r-1);return}const o=n.value;B.value&&V(B.value),n.value=o>=r-1?r-2:o}if(l.key==="ArrowLeft"){if(n.value<0&&a>0)return;const o=n.value>-1?n.value-1:r-1;k.value[o]?n.value=o:(n.value=-1,y.value.setSelectionRange(s.value.length,s.value.length))}if(l.key==="ArrowRight"){if(n.value<0)return;const o=n.value+1;k.value[o]?n.value=o:(n.value=-1,y.value.setSelectionRange(0,0))}l.key==="Enter"&&s.value&&(V(S(e,s.value)),s.value="")}}function te(){g.value&&(x.value=!0)}function V(l){if(e.multiple){const a=N.value.findIndex(r=>e.valueComparator(r,l.value));if(a===-1)c.value=[...c.value,l];else{const r=[...c.value];r.splice(a,1),c.value=r}s.value=""}else c.value=[l],w.value=l.title,j(()=>{v.value=!1,x.value=!0})}function ue(l){g.value=!0}function ne(l){var a;l.relatedTarget==null&&((a=y.value)==null||a.focus())}return R(F,l=>{!l.length&&e.hideNoData&&(v.value=!1)}),R(g,l=>{if(l)n.value=-1;else{if(v.value=!1,!e.multiple||!s.value)return;c.value=[...c.value,S(e,s.value)],s.value=""}}),me(()=>{const l=!!(e.chips||t.chip),a=!!(!e.hideNoData||M.value.length||t.prepend||t.append||t["no-data"]),r=c.value.length>0,[h]=z.filterProps(e);return i(z,D({ref:y},h,{modelValue:s.value,"onUpdate:modelValue":[u=>s.value=u,u=>{u==null&&(c.value=[])}],focused:g.value,"onUpdate:focused":u=>g.value=u,validationValue:c.externalValue,dirty:r,class:["v-combobox",{"v-combobox--active-menu":v.value,"v-combobox--chips":!!e.chips,"v-combobox--selecting-index":n.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0},e.class],style:e.style,appendInnerIcon:e.items.length?e.menuIcon:void 0,readonly:e.readonly,placeholder:r?void 0:e.placeholder,"onClick:clear":ee,"onMousedown:control":le,onKeydown:ae}),{...t,default:()=>i(q,null,[i(Ce,D({ref:U,modelValue:v.value,"onUpdate:modelValue":u=>v.value=u,activator:"parent",contentClass:"v-combobox__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:te},e.menuProps),{default:()=>[a&&i(pe,{ref:O,selected:N.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:u=>u.preventDefault(),onFocusin:ue,onFocusout:ne},{default:()=>{var u,o,A;return[!M.value.length&&!e.hideNoData&&(((u=t["no-data"])==null?void 0:u.call(t))??i(H,{title:X(e.noDataText)},null)),(o=t["prepend-item"])==null?void 0:o.call(t),M.value.map(d=>{var _;return((_=t.item)==null?void 0:_.call(t,{item:d,props:D(d.props,{onClick:()=>V(d)})}))??i(H,D({key:d.value},d.props,{onClick:()=>V(d)}),{prepend:f=>{let{isSelected:P}=f;return e.multiple&&!e.hideSelected?i(we,{modelValue:P,ripple:!1,tabindex:"-1"},null):void 0},title:()=>{var f,P;return x.value?d.title:De(d.title,(f=Z(d))==null?void 0:f.title,((P=s.value)==null?void 0:P.length)??0)}})}),(A=t["append-item"])==null?void 0:A.call(t)]}})]}),k.value.map((u,o)=>{var _;function A(f){f.stopPropagation(),f.preventDefault(),V(u)}const d={"onClick:close":A,modelValue:!0,"onUpdate:modelValue":void 0};return i("div",{key:u.value,class:["v-combobox__selection",o===n.value&&["v-combobox__selection--selected",W.value]],style:o===n.value?Y.value:{}},[l?t.chip?i(he,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:u.title}}},{default:()=>{var f;return[(f=t.chip)==null?void 0:f.call(t,{item:u,index:o,props:d})]}}):i(_e,D({key:"chip",closable:e.closableChips,size:"small",text:u.title},d),null):((_=t.selection)==null?void 0:_.call(t,{item:u,index:o}))??i("span",{class:"v-combobox__selection-text"},[u.title,e.multiple&&o<k.value.length-1&&i("span",{class:"v-combobox__selection-comma"},[be(",")])])])})])})}),ye({isFocused:g,isPristine:x,menu:v,search:s,selectionIndex:n,filteredItems:F,select:V},y)}});export{Te as V};
