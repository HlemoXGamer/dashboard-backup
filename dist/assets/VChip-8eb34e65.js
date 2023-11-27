import{X as _,bs as Q,ac as z,b$ as U,aj as E,ak as R,al as w,am as T,c0 as W,aO as Y,av as r,a1 as ee,q as l,bm as ae,ab as h,bn as x,aD as le,ad as te,af as ne,c1 as se,ai as ie,bo as ce,c2 as de,aw as oe,aG as ue,an as re,ao as ve,aq as fe,at as me,c3 as ke,Z as pe,c4 as ye,bp as be,O as C,M as V,bq as D,ax as he,c5 as Ce,z as v,ay as f,N as Ve,F as G,L,a0 as Ie}from"./index-8aabc48c.js";const $=Symbol.for("vuetify:v-chip-group");_()({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Q},...z(),...U({selectedClass:"v-chip--selected"}),...E(),...R(),...w({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:c}=m;const{themeClasses:o}=T(e),{isSelected:t,select:k,next:p,prev:y,selected:b}=W(e,$);return Y({VChip:{color:r(e,"color"),disabled:r(e,"disabled"),filter:r(e,"filter"),variant:r(e,"variant")}}),ee(()=>l(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},o.value,e.class],style:e.style},{default:()=>{var u;return[(u=c.default)==null?void 0:u.call(c,{isSelected:t,select:k,next:p,prev:y,selected:b.value})]}})),{}}});const Pe=_()({name:"VChip",directives:{Ripple:ae},props:{activeClass:String,appendAvatar:String,appendIcon:h,closable:Boolean,closeIcon:{type:h,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:h,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:x(),onClickOnce:x(),...le(),...z(),...te(),...ne(),...se(),...ie(),...ce(),...de(),...E({tag:"span"}),...R(),...w({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,m){let{attrs:c,emit:o,slots:t}=m;const{t:k}=oe(),{borderClasses:p}=ue(e),{colorClasses:y,colorStyles:b,variantClasses:u}=re(e),{densityClasses:q}=ve(e),{elevationClasses:F}=fe(e),{roundedClasses:M}=me(e),{sizeClasses:O}=ke(e),{themeClasses:K}=T(e),I=pe(e,"modelValue"),a=ye(e,$,!1),s=be(e,c),N=C(()=>e.link!==!1&&s.isLink.value),i=C(()=>!e.disabled&&e.link!==!1&&(!!a||e.link||s.isClickable.value)),X=C(()=>({"aria-label":k(e.closeLabel),onClick(n){I.value=!1,o("click:close",n)}}));function g(n){var d;o("click",n),i.value&&((d=s.navigate)==null||d.call(s,n),a==null||a.toggle())}function j(n){(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),g(n))}return()=>{const n=s.isLink.value?"a":e.tag,d=!!(e.appendIcon||e.appendAvatar),Z=!!(d||t.append),H=!!(t.close||e.closable),P=!!(t.filter||e.filter)&&a,S=!!(e.prependIcon||e.prependAvatar),J=!!(S||t.prepend),A=!a||a.isSelected.value;return I.value&&V(l(n,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":i.value,"v-chip--filter":P,"v-chip--pill":e.pill},K.value,p.value,A?y.value:void 0,q.value,F.value,M.value,O.value,u.value,a==null?void 0:a.selectedClass.value,e.class],style:[A?b.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:s.href.value,tabindex:i.value?0:void 0,onClick:g,onKeydown:i.value&&!N.value&&j},{default:()=>{var B;return[he(i.value,"v-chip"),P&&l(Ce,{key:"filter"},{default:()=>[V(l("div",{class:"v-chip__filter"},[t.filter?V(l(f,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[D("slot"),t.filter,"default"]]):l(v,{key:"filter-icon",icon:e.filterIcon},null)]),[[Ve,a.isSelected.value]])]}),J&&l("div",{key:"prepend",class:"v-chip__prepend"},[t.prepend?l(f,{key:"prepend-defaults",disabled:!S,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},t.prepend):l(G,null,[e.prependIcon&&l(v,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&l(L,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),((B=t.default)==null?void 0:B.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))??e.text,Z&&l("div",{key:"append",class:"v-chip__append"},[t.append?l(f,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},t.append):l(G,null,[e.appendIcon&&l(v,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&l(L,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),H&&l("div",Ie({key:"close",class:"v-chip__close"},X.value),[t.close?l(f,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},t.close):l(v,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[D("ripple"),i.value&&e.ripple,null]])}}});export{Pe as V};