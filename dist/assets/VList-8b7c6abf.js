import{bf as F,l as k,bg as _,bh as B,bi as z,a5 as Z,O as f,aB as re,bj as Re,a6 as He,bk as Ke,ab as L,ac as D,aj as G,a3 as x,av as I,a7 as N,q as v,ay as U,aU as Ue,bl as qe,M as ue,N as ze,aa as oe,bm as We,bn as ee,aD as ce,ad as de,ae as ve,af as fe,ai as ye,bo as Xe,ak as me,al as ge,bp as Je,E as Qe,am as pe,aG as he,an as Ye,ao as Se,ap as be,aq as ke,at as Ce,bq as Ze,ax as et,F as te,L as ne,z as ae,au as tt,X as le,br as A,aT as Ie,bs as nt,aH as at,aO as lt,bt as st}from"./index-358c466b.js";import{u as it}from"./ssrBoot-404c9b1f.js";import{V as rt}from"./VDivider-a7998058.js";const q=Symbol.for("vuetify:list");function we(){const e=F(q,{hasPrepend:k(!1),updateHasPrepend:()=>null}),l={hasPrepend:k(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return _(q,l),e}function Ae(){return F(q,null)}const ut={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){const a=new Set;a.add(l);let i=s.get(l);for(;i!=null;)a.add(i),i=s.get(i);return a}else return n.delete(l),n},select:()=>null},Pe={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){let a=s.get(l);for(n.add(l);a!=null&&a!==l;)n.add(a),a=s.get(a);return n}else n.delete(l);return n},select:()=>null},ot={open:Pe.open,select:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(!t)return n;const a=[];let i=s.get(l);for(;i!=null;)a.push(i),i=s.get(i);return new Set(a)}},W=e=>{const l={select:t=>{let{id:n,value:s,selected:a}=t;if(n=B(n),e&&!s){const i=Array.from(a.entries()).reduce((r,S)=>{let[g,p]=S;return p==="on"?[...r,g]:r},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,s?"on":"off"),a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:t=>{const n=[];for(const[s,a]of t.entries())a==="on"&&n.push(s);return n}};return l},Ve=e=>{const l=W(e);return{select:n=>{let{selected:s,id:a,...i}=n;a=B(a);const r=s.has(a)?new Map([[a,s.get(a)]]):new Map;return l.select({...i,id:a,selected:r})},in:(n,s,a)=>{let i=new Map;return n!=null&&n.length&&(i=l.in(n.slice(0,1),s,a)),i},out:(n,s,a)=>l.out(n,s,a)}},ct=e=>{const l=W(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=B(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},dt=e=>{const l=Ve(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=B(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},vt=e=>{const l={select:t=>{let{id:n,value:s,selected:a,children:i,parents:r}=t;n=B(n);const S=new Map(a),g=[n];for(;g.length;){const u=g.shift();a.set(u,s?"on":"off"),i.has(u)&&g.push(...i.get(u))}let p=r.get(n);for(;p;){const u=i.get(p),o=u.every(d=>a.get(d)==="on"),c=u.every(d=>!a.has(d)||a.get(d)==="off");a.set(p,o?"on":c?"off":"indeterminate"),p=r.get(p)}return e&&!s&&Array.from(a.entries()).reduce((o,c)=>{let[d,y]=c;return y==="on"?[...o,d]:o},[]).length===0?S:a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:(t,n)=>{const s=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&s.push(a);return s}};return l},M=Symbol.for("vuetify:nested"),Le={id:k(),root:{register:()=>null,unregister:()=>null,parents:k(new Map),children:k(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:k(new Set),selected:k(new Map),selectedValues:k([])}},ft=z({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),yt=e=>{let l=!1;const t=k(new Map),n=k(new Map),s=Z(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),a=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return dt(e.mandatory);case"leaf":return ct(e.mandatory);case"independent":return W(e.mandatory);case"single-independent":return Ve(e.mandatory);case"classic":default:return vt(e.mandatory)}}),i=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return ot;case"single":return ut;case"multiple":default:return Pe}}),r=Z(e,"selected",e.selected,u=>a.value.in(u,t.value,n.value),u=>a.value.out(u,t.value,n.value));re(()=>{l=!0});function S(u){const o=[];let c=u;for(;c!=null;)o.unshift(c),c=n.value.get(c);return o}const g=Re("nested"),p={id:k(),root:{opened:s,selected:r,selectedValues:f(()=>{const u=[];for(const[o,c]of r.value.entries())c==="on"&&u.push(o);return u}),register:(u,o,c)=>{o&&u!==o&&n.value.set(u,o),c&&t.value.set(u,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],u])},unregister:u=>{if(l)return;t.value.delete(u);const o=n.value.get(u);if(o){const c=t.value.get(o)??[];t.value.set(o,c.filter(d=>d!==u))}n.value.delete(u),s.value.delete(u)},open:(u,o,c)=>{g.emit("click:open",{id:u,value:o,path:S(u),event:c});const d=i.value.open({id:u,value:o,opened:new Set(s.value),children:t.value,parents:n.value,event:c});d&&(s.value=d)},openOnSelect:(u,o,c)=>{const d=i.value.select({id:u,value:o,selected:new Map(r.value),opened:new Set(s.value),children:t.value,parents:n.value,event:c});d&&(s.value=d)},select:(u,o,c)=>{g.emit("click:select",{id:u,value:o,path:S(u),event:c});const d=a.value.select({id:u,value:o,selected:new Map(r.value),children:t.value,parents:n.value,event:c});d&&(r.value=d),p.root.openOnSelect(u,o,c)},children:t,parents:n}};return _(M,p),p.root},Be=(e,l)=>{const t=F(M,Le),n=Symbol(He()),s=f(()=>e.value??n),a={...t,id:s,open:(i,r)=>t.root.open(s.value,i,r),openOnSelect:(i,r)=>t.root.openOnSelect(s.value,i,r),isOpen:f(()=>t.root.opened.value.has(s.value)),parent:f(()=>t.root.parents.value.get(s.value)),select:(i,r)=>t.root.select(s.value,i,r),isSelected:f(()=>t.root.selected.value.get(B(s.value))==="on"),isIndeterminate:f(()=>t.root.selected.value.get(s.value)==="indeterminate"),isLeaf:f(()=>!t.root.children.value.get(s.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(s.value,t.id.value,l),re(()=>{!t.isGroupActivator&&t.root.unregister(s.value)}),l&&_(M,a),a},mt=()=>{const e=F(M,Le);_(M,{...e,isGroupActivator:!0})},gt=Ke({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return mt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),pt=z({activeColor:String,color:String,collapseIcon:{type:L,default:"$collapse"},expandIcon:{type:L,default:"$expand"},prependIcon:L,appendIcon:L,fluid:Boolean,subgroup:Boolean,value:null,...D(),...G()},"v-list-group"),se=x()({name:"VListGroup",props:{title:String,...pt()},setup(e,l){let{slots:t}=l;const{isOpen:n,open:s,id:a}=Be(I(e,"value"),!0),i=f(()=>`v-list-group--id-${String(a.value)}`),r=Ae(),{isBooted:S}=it();function g(c){s(!n.value,c)}const p=f(()=>({onClick:g,class:"v-list-group__header",id:i.value})),u=f(()=>n.value?e.collapseIcon:e.expandIcon),o=f(()=>({VListItem:{active:n.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&u.value,appendIcon:e.appendIcon||!e.subgroup&&u.value,title:e.title,value:e.value}}));return N(()=>v(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&v(U,{defaults:o.value},{default:()=>[v(gt,null,{default:()=>[t.activator({props:p.value,isOpen:n.value})]})]}),v(Ue,{transition:{component:qe},disabled:!S.value},{default:()=>{var c;return[ue(v("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(c=t.default)==null?void 0:c.call(t)]),[[ze,n.value]])]}})]})),{}}});const ht=oe("v-list-item-subtitle"),St=oe("v-list-item-title"),ie=x()({name:"VListItem",directives:{Ripple:We},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:L,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:L,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:ee(),onClickOnce:ee(),...ce(),...D(),...de(),...ve(),...fe(),...ye(),...Xe(),...G(),...me(),...ge({variant:"text"})},emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:n,emit:s}=l;const a=Je(e,t),i=f(()=>e.value??a.href.value),{select:r,isSelected:S,isIndeterminate:g,isGroupActivator:p,root:u,parent:o,openOnSelect:c}=Be(i,!1),d=Ae(),y=f(()=>{var h;return e.active!==!1&&(e.active||((h=a.isActive)==null?void 0:h.value)||S.value)}),m=f(()=>e.link!==!1&&a.isLink.value),w=f(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!d)),V=f(()=>e.rounded||e.nav),$=f(()=>({color:y.value?e.activeColor??e.color:e.color,variant:e.variant}));Qe(()=>{var h;return(h=a.isActive)==null?void 0:h.value},h=>{h&&o.value!=null&&u.open(o.value,!0),h&&c(h)},{immediate:!0});const{themeClasses:j}=pe(e),{borderClasses:E}=he(e),{colorClasses:R,colorStyles:P,variantClasses:b}=Ye($),{densityClasses:T}=Se(e),{dimensionStyles:Fe}=be(e),{elevationClasses:_e}=ke(e),{roundedClasses:De}=Ce(V),Ge=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),H=f(()=>({isActive:y.value,select:r,isSelected:S.value,isIndeterminate:g.value}));function X(h){var O;s("click",h),!(p||!w.value)&&((O=a.navigate)==null||O.call(a,h),e.value!=null&&r(!S.value,h))}function Ne(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),X(h))}return N(()=>{const h=m.value?"a":e.tag,O=!d||S.value||y.value,$e=n.title||e.title,je=n.subtitle||e.subtitle,J=!!(e.appendAvatar||e.appendIcon),Ee=!!(J||n.append),Q=!!(e.prependAvatar||e.prependIcon),K=!!(Q||n.prepend);return d==null||d.updateHasPrepend(K),ue(v(h,{class:["v-list-item",{"v-list-item--active":y.value,"v-list-item--disabled":e.disabled,"v-list-item--link":w.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!K&&(d==null?void 0:d.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&y.value},j.value,E.value,O?R.value:void 0,T.value,_e.value,Ge.value,De.value,b.value,e.class],style:[O?P.value:void 0,Fe.value,e.style],href:a.href.value,tabindex:w.value?0:void 0,onClick:X,onKeydown:w.value&&!m.value&&Ne},{default:()=>{var Y;return[et(w.value||y.value,"v-list-item"),K&&v("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?v(U,{key:"prepend-defaults",disabled:!Q,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var C;return[(C=n.prepend)==null?void 0:C.call(n,H.value)]}}):v(te,null,[e.prependAvatar&&v(ne,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&v(ae,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),v("div",{class:"v-list-item__content","data-no-activator":""},[$e&&v(St,{key:"title"},{default:()=>{var C;return[((C=n.title)==null?void 0:C.call(n,{title:e.title}))??e.title]}}),je&&v(ht,{key:"subtitle"},{default:()=>{var C;return[((C=n.subtitle)==null?void 0:C.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(Y=n.default)==null?void 0:Y.call(n,H.value)]),Ee&&v("div",{key:"append",class:"v-list-item__append"},[n.append?v(U,{key:"append-defaults",disabled:!J,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var C;return[(C=n.append)==null?void 0:C.call(n,H.value)]}}):v(te,null,[e.appendIcon&&v(ae,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&v(ne,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])]}}),[[Ze("ripple"),w.value&&e.ripple]])}),{}}}),bt=x()({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...D(),...G()},setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:s}=tt(I(e,"color"));return N(()=>{const a=!!(t.default||e.title);return v(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:s},e.style]},{default:()=>{var i;return[a&&v("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),Oe=x()({name:"VListChildren",props:{items:Array},setup(e,l){let{slots:t}=l;return we(),()=>{var n,s;return((n=t.default)==null?void 0:n.call(t))??((s=e.items)==null?void 0:s.map(a=>{var c,d;let{children:i,props:r,type:S,raw:g}=a;if(S==="divider")return((c=t.divider)==null?void 0:c.call(t,{props:r}))??v(rt,r,null);if(S==="subheader")return((d=t.subheader)==null?void 0:d.call(t,{props:r}))??v(bt,r,{default:t.subheader});const p={subtitle:t.subtitle?y=>{var m;return(m=t.subtitle)==null?void 0:m.call(t,{...y,item:g})}:void 0,prepend:t.prepend?y=>{var m;return(m=t.prepend)==null?void 0:m.call(t,{...y,item:g})}:void 0,append:t.append?y=>{var m;return(m=t.append)==null?void 0:m.call(t,{...y,item:g})}:void 0,default:t.default?y=>{var m;return(m=t.default)==null?void 0:m.call(t,{...y,item:g})}:void 0,title:t.title?y=>{var m;return(m=t.title)==null?void 0:m.call(t,{...y,item:g})}:void 0},[u,o]=se.filterProps(r);return i?v(se,le({value:r==null?void 0:r.value},u),{activator:y=>{let{props:m}=y;return t.header?t.header({props:{...r,...m}}):v(ie,le(r,m),p)},default:()=>v(Oe,{items:i},t)}):t.item?t.item(r):v(ie,r,p)}))}}}),kt=z({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function Me(e,l){const t=A(l,e.itemTitle,l),n=e.returnObject?l:A(l,e.itemValue,t),s=A(l,e.itemChildren),a=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?Ie(l,["children"])[1]:l:void 0:A(l,e.itemProps),i={title:t,value:n,...a};return{title:String(i.title??""),value:i.value,props:i,children:Array.isArray(s)?xe(e,s):void 0,raw:l}}function xe(e,l){const t=[];for(const n of l)t.push(Me(e,n));return t}function Lt(e){const l=f(()=>xe(e,e.items));function t(s){return s.map(a=>l.value.find(r=>nt(a,r.value))??Me(e,a))}function n(s){return s.map(a=>{let{props:i}=a;return i.value})}return{items:l,transformIn:t,transformOut:n}}function Ct(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function It(e,l){const t=A(l,e.itemType,"item"),n=Ct(l)?l:A(l,e.itemTitle),s=A(l,e.itemValue,void 0),a=A(l,e.itemChildren),i=e.itemProps===!0?Ie(l,["children"])[1]:A(l,e.itemProps),r={title:n,value:s,...i};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?Te(e,a):void 0,raw:l}}function Te(e,l){const t=[];for(const n of l)t.push(It(e,n));return t}function wt(e){return{items:f(()=>Te(e,e.items))}}const Bt=x()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...ft({selectStrategy:"single-leaf",openStrategy:"list"}),...ce(),...D(),...de(),...ve(),...fe(),itemType:{type:String,default:"type"},...kt(),...ye(),...G(),...me(),...ge({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=wt(e),{themeClasses:s}=pe(e),{backgroundColorClasses:a,backgroundColorStyles:i}=at(I(e,"bgColor")),{borderClasses:r}=he(e),{densityClasses:S}=Se(e),{dimensionStyles:g}=be(e),{elevationClasses:p}=ke(e),{roundedClasses:u}=Ce(e),{open:o,select:c}=yt(e),d=f(()=>e.lines?`v-list--${e.lines}-line`:void 0),y=I(e,"activeColor"),m=I(e,"color");we(),lt({VListGroup:{activeColor:y,color:m},VListItem:{activeClass:I(e,"activeClass"),activeColor:y,color:m,density:I(e,"density"),disabled:I(e,"disabled"),lines:I(e,"lines"),nav:I(e,"nav"),variant:I(e,"variant")}});const w=k(!1),V=k();function $(b){w.value=!0}function j(b){w.value=!1}function E(b){var T;!w.value&&!(b.relatedTarget&&((T=V.value)!=null&&T.contains(b.relatedTarget)))&&P()}function R(b){if(V.value){if(b.key==="ArrowDown")P("next");else if(b.key==="ArrowUp")P("prev");else if(b.key==="Home")P("first");else if(b.key==="End")P("last");else return;b.preventDefault()}}function P(b){if(V.value)return st(V.value,b)}return N(()=>v(e.tag,{ref:V,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},s.value,a.value,r.value,S.value,p.value,d.value,u.value,e.class],style:[i.value,g.value,e.style],role:"listbox","aria-activedescendant":void 0,onFocusin:$,onFocusout:j,onFocus:E,onKeydown:R},{default:()=>[v(Oe,{items:n.value},t)]})),{open:o,select:c,focus:P}}});export{Bt as V,ie as a,St as b,ht as c,bt as d,kt as m,Me as t,Lt as u};
