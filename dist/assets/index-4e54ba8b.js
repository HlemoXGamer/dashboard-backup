import{bb as N,a3 as F,ab as L,a5 as M,aw as z,l as b,E as k,R as O,a7 as R,q as l,F as $,ay as W,az as E,X as q,cA as j,aA as G,ac as H,b4 as U,aV as J,aM as X,o as p,b as _,w as d,a2 as B,n as Z,y as A,a1 as I,c as C,a as P,s as w,z as K,G as Q,H as Y,A as ee,aZ as S}from"./index-581c2083.js";import{t as T}from"./files-2e167225.js";import{V as ae}from"./VFileInput-2d78526d.js";import{m as te,a as le,V as se}from"./VWindowItem-c0d01332.js";import"./VChip-2cd4c1fb.js";import"./lazy-e0bc52de.js";import"./ssrBoot-f2e19377.js";let{get:re,show:Ve,update:xe,create:ne,remove:ke}=N("/banners"),{get:oe,show:_e,update:Be,create:ie,remove:Ie}=N("markter/banners");const ue=F()({name:"VCarousel",props:{color:String,cycle:Boolean,delimiterIcon:{type:L,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...te({continuous:!0,mandatory:"force",showArrows:!0})},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const i=M(e,"modelValue"),{t:s}=z(),v=b();let c=-1;k(i,h),k(()=>e.interval,h),k(()=>e.cycle,m=>{m?h():window.clearTimeout(c)}),O(V);function V(){!e.cycle||!v.value||(c=window.setTimeout(v.value.group.next,+e.interval>0?+e.interval:6e3))}function h(){window.clearTimeout(c),window.requestAnimationFrame(V)}return R(()=>l(le,{ref:v,modelValue:i.value,"onUpdate:modelValue":m=>i.value=m,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:G(e.height)},e.style],continuous:!0,mandatory:"force",showArrows:e.showArrows},{default:n.default,additional:m=>{let{group:u}=m;return l($,null,[!e.hideDelimiters&&l("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[u.items.value.length>0&&l(W,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[u.items.value.map((f,x)=>{const y={id:`carousel-item-${f.id}`,"aria-label":s("$vuetify.carousel.ariaLabel.delimiter",x+1,u.items.value.length),class:[u.isSelected(f.id)&&"v-btn--active"],onClick:()=>u.select(f.id,!0)};return n.item?n.item({props:y,item:f}):l(E,q(f,y),null)})]})]),e.progress&&l(j,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(u.getItemIndex(i.value)+1)/u.items.value.length*100},null)])},prev:n.prev,next:n.next})),{}}}),ce=F()({name:"VCarouselItem",inheritAttrs:!1,props:{value:null,...H()},setup(e,o){let{slots:n,attrs:i}=o;R(()=>l(se,{class:["v-carousel-item",e.class],style:e.style,value:e.value},{default:()=>[l(U,i,n)]}))}}),de={class:"text-h4 pt-3 pb-2 px-3"},me={class:"position-relative"},fe={__name:"index",setup(e){var y;const o=b([]),n=b([]),i=b(!1),s=b([]),v=J(),c=(y=JSON.parse(localStorage.getItem("userData")))==null?void 0:y.type,V=async t=>{if(t instanceof File){let a=await T(t);s.value.push(a),o.value.push(t)}},h=async()=>{await V(n.value.pop())},m=()=>{c=="admin"?re().then(({data:t})=>{t.data.banners.map(a=>a.image).forEach(a=>{s.value.push(a)}),o.value=t.data.banners.map(a=>a.image)}):c=="markter"&&oe().then(({data:t})=>{t.data.banners.map(a=>a.image).forEach(a=>{s.value.push(a)}),o.value=t.data.banners.map(a=>a.image)})},u=async()=>{i.value=!0;let t=new FormData,a=0;o.value.forEach((r,g)=>{t.append(`banners[${a}]`,r),a++});try{c=="admin"?await ne(t).then().finally(()=>{i.value=!1}):c=="markter"&&await ie(t).then().finally(()=>{i.value=!1}),v.success("Banners updated successfully")}catch(r){console.log(r),v.error(r.response.data.message)}},f=async t=>{if(x(t)){const a=s.value.indexOf(t);s.value.splice(a,1),o.value.splice(a,1)}else{const a=s.value.indexOf(t);a!==-1?(s.value.splice(a,1),o.value.splice(a,1)):s.value.forEach(async(r,g)=>{r instanceof File&&await T(r).then(D=>{D===t&&(s.value.splice(g,1),o.value.splice(g,1))})})}};function x(t){return/^(ftp|http|https):\/\/[^ "]+$/.test(t)}return X(()=>{m()}),(t,a)=>(p(),_(I,{class:"mt-4 px-4"},{default:d(()=>[l(B,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:d(()=>[Z("p",de,A(t.$t("Banners")),1),l(B,null,{default:d(()=>[l(I,{class:"px-5"},{default:d(()=>[(p(!0),C($,null,P(w(s),(r,g)=>(p(),C("div",me,[l(K,{class:"position-absolute bg-red rounded px-1",style:{width:"30px",height:"30px","background-color":"rgb(199, 0, 0)","z-index":"2",right:"-5px",top:"-7px"},color:"#fff",icon:"tabler-ban",onClick:D=>f(r)},null,8,["onClick"]),l(U,{"prepend-icon":"tabler-camera",src:r,width:"150px",style:{height:"150px"},cover:"",class:"mx-1 my-2 rounded"},null,8,["src"])]))),256))]),_:1}),l(I,{align:"center",class:"mt-8 px-5"},{default:d(()=>[l(ae,{class:"px-2",accept:"image/png, image/jpeg, image/bmp","prepend-icon":"tabler-camera",placeholder:"Pick an image",label:t.$t("Upload image"),modelValue:w(n),"onUpdate:modelValue":a[0]||(a[0]=r=>Q(n)?n.value=r:null),onChange:h},null,8,["label","modelValue"]),l(E,{onClick:u,loading:w(i)},{default:d(()=>[Y(A(t.$t("Update")),1)]),_:1},8,["loading"])]),_:1})]),_:1}),l(B,{class:"px-5 mt-2"},{default:d(()=>[w(s).length?(p(),_(ue,{key:0,"hide-delimiters":"",class:"rounded mt-2"},{default:d(()=>[(p(!0),C($,null,P(w(s),(r,g)=>(p(),_(ce,{key:g,src:r,cover:""},null,8,["src"]))),128))]),_:1})):ee("",!0)]),_:1})]),_:1})]),_:1}))}};typeof S=="function"&&S(fe);export{fe as default};
