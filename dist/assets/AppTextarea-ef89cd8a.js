import{X as te,cj as ae,cc as ne,cd as le,Z as oe,ck as se,O as b,l as g,R as re,E as h,aB as ue,a1 as ie,cb as ce,ce as z,cf as de,q as l,ch as fe,a0 as p,F as R,M as T,br as ve,cl as me,cm as xe,a2 as ge,aL as S,cn as he,aA as be,bK as Ve,d as ye,b6 as $,o as H,c as we,s as C,b as Ce,b7 as Fe,A as ke,b8 as Pe,a as _e,w as Ie,p as pe,b9 as E,ba as D,t as Re}from"./index-ac936590.js";const Se=te()({name:"VTextarea",directives:{Intersect:ae},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ne(),...le()},emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,V){let{attrs:d,emit:r,slots:a}=V;const o=oe(e,"modelValue"),{isFocused:i,focus:F,blur:G}=se(e),O=b(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),U=b(()=>{if(d.maxlength)return d.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function j(t,s){var n,u;!e.autofocus||!t||(u=(n=s[0].target)==null?void 0:n.focus)==null||u.call(n)}const B=g(),y=g(),A=g(""),w=g(),L=b(()=>i.value||e.persistentPlaceholder);function k(){var t;w.value!==document.activeElement&&((t=w.value)==null||t.focus()),i.value||F()}function q(t){k(),r("click:control",t)}function K(t){r("mousedown:control",t)}function X(t){t.stopPropagation(),k(),S(()=>{o.value="",he(e["onClick:clear"],t)})}function Z(t){var n;const s=t.target;if(o.value=s.value,(n=e.modelModifiers)!=null&&n.trim){const u=[s.selectionStart,s.selectionEnd];S(()=>{s.selectionStart=u[0],s.selectionEnd=u[1]})}}const f=g();function v(){e.autoGrow&&S(()=>{if(!f.value||!y.value)return;const t=getComputedStyle(f.value),s=getComputedStyle(y.value.$el),n=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=f.value.scrollHeight,P=parseFloat(t.lineHeight),_=Math.max(parseFloat(e.rows)*P+n,parseFloat(s.getPropertyValue("--v-input-control-height"))),I=parseFloat(e.maxRows)*P+n||1/0;A.value=be(Ve(u??0,_,I))})}re(v),h(o,v),h(()=>e.rows,v),h(()=>e.maxRows,v),h(()=>e.density,v);let c;return h(f,t=>{t?(c=new ResizeObserver(v),c.observe(f.value)):c==null||c.disconnect()}),ue(()=>{c==null||c.disconnect()}),ie(()=>{const t=!!(a.counter||e.counter||e.counterValue),s=!!(t||a.details),[n,u]=ce(d),[{modelValue:P,..._}]=z.filterProps(e),[I]=de(e);return l(z,p({ref:B,modelValue:o.value,"onUpdate:modelValue":m=>o.value=m,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)},e.class],style:e.style},n,_,{focused:i.value}),{...a,default:m=>{let{isDisabled:x,isDirty:M,isReadonly:J,isValid:Q}=m;return l(fe,p({ref:y,style:{"--v-textarea-control-height":A.value},onClick:q,onMousedown:K,"onClick:clear":X,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},I,{active:L.value||M.value,dirty:M.value||e.dirty,disabled:x.value,focused:i.value,error:Q.value===!1}),{...a,default:W=>{let{props:{class:N,...Y}}=W;return l(R,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),T(l("textarea",p({ref:w,class:N,value:o.value,onInput:Z,autofocus:e.autofocus,readonly:J.value,disabled:x.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:k,onBlur:G},Y,u),null),[[ve("intersect"),{handler:j},null,{once:!0}]]),e.autoGrow&&T(l("textarea",{class:[N,"v-textarea__sizer"],"onUpdate:modelValue":ee=>o.value=ee,ref:f,readonly:!0,"aria-hidden":"true"},null),[[me,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:s?m=>{var x;return l(R,null,[(x=a.details)==null?void 0:x.call(a,m),t&&l(R,null,[l("span",null,null),l(xe,{active:e.persistentCounter||i.value,value:O.value,max:U.value},a.counter)])])}:void 0})}),ge({},B,y,w)}}),Be=ye({name:"AppTextarea",inheritAttrs:!1}),Me=Object.assign(Be,{setup(e){const V=b(()=>{const r=$(),a=r.id||r.label;return a?`app-textarea-${a}-${Math.random().toString(36).slice(2,7)}`:void 0}),d=b(()=>$().label);return(r,a)=>(H(),we("div",{class:Re(["app-textarea",r.$attrs.class])},[C(d)?(H(),Ce(Fe,{key:0,for:C(V),class:"mb-1 text-body-2 text-high-emphasis",text:C(d)},null,8,["for","text"])):ke("",!0),l(Se,E(D({...r.$attrs,class:null,label:void 0,variant:"outlined",id:C(V)})),Pe({_:2},[_e(r.$slots,(o,i)=>({name:i,fn:Ie(F=>[pe(r.$slots,i,E(D(F||{})))])}))]),1040)],2))}});export{Me as _};
