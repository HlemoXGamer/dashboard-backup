import{aa as we,a3 as G,ab as be,ac as ee,ad as ke,ae as Se,af as te,ag as xe,ah as _e,ai as ae,aj as ne,ak as le,al as Ce,a5 as oe,O as y,am as ie,an as Te,ao as Be,ap as Ve,aq as se,ar as Ee,as as Me,at as ue,au as Pe,av as H,aw as pe,q as u,ax as Re,z as I,ay as Z,az as re,X as ce,l as M,aA as L,R as de,E as N,aB as ve,aC as Oe,aD as De,aE as Le,aF as Ne,aG as $e,aH as J,aI as ze,aJ as He,aK as Ie,aL as Ae,aM as Ye,aN as We,aO as Xe,a7 as Fe,T as je,F as A,v as qe,j as Ze,Q as Je,s as R,o as z,c as K,w as $,P as Ke,n as O,a as Qe,b as Ue,H as Ge,y as et,A as tt,k as at,aP as nt,aQ as lt}from"./index-1dd32ede.js";import{V as ot}from"./VDivider-97372cc6.js";import{u as it}from"./ssrBoot-8f54b7f9.js";const st=we("v-alert-title"),ut=["success","info","warning","error"],rt=G()({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:be,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>ut.includes(e)},...ee(),...ke(),...Se(),...te(),...xe(),..._e(),...ae(),...ne(),...le(),...Ce({variant:"flat"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:d,slots:a}=v;const n=oe(e,"modelValue"),t=y(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),h=y(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:g}=ie(e),{colorClasses:k,colorStyles:f,variantClasses:l}=Te(h),{densityClasses:s}=Be(e),{dimensionStyles:r}=Ve(e),{elevationClasses:m}=se(e),{locationStyles:w}=Ee(e),{positionClasses:P}=Me(e),{roundedClasses:p}=ue(e),{textColorClasses:B,textColorStyles:E}=Pe(H(e,"borderColor")),{t:V}=pe(),S=y(()=>({"aria-label":V(e.closeLabel),onClick(o){n.value=!1,d("click:close",o)}}));return()=>{const o=!!(a.prepend||t.value),i=!!(a.title||e.title),c=!!(e.text||a.text),b=!!(a.close||e.closable);return n.value&&u(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},g.value,k.value,s.value,m.value,P.value,p.value,l.value,e.class],style:[f.value,r.value,w.value,e.style],role:"alert"},{default:()=>{var x,_;return[Re(!1,"v-alert"),e.border&&u("div",{key:"border",class:["v-alert__border",B.value],style:E.value},null),o&&u("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?u(Z,{key:"prepend-defaults",disabled:!t.value,defaults:{VIcon:{density:e.density,icon:t.value,size:e.prominent?44:28}}},a.prepend):u(I,{key:"prepend-icon",density:e.density,icon:t.value,size:e.prominent?44:28},null)]),u("div",{class:"v-alert__content"},[i&&u(st,{key:"title"},{default:()=>{var C;return[((C=a.title)==null?void 0:C.call(a))??e.title]}}),c&&(((x=a.text)==null?void 0:x.call(a))??e.text),(_=a.default)==null?void 0:_.call(a)]),a.append&&u("div",{key:"append",class:"v-alert__append"},[a.append()]),b&&u("div",{key:"close",class:"v-alert__close"},[a.close?u(Z,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var C;return[(C=a.close)==null?void 0:C.call(a,{props:S.value})]}}):u(re,ce({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},S.value),null)])]}})}}});function ct(e){let{rootEl:v,isSticky:d,layoutItemStyles:a}=e;const n=M(!1),t=M(0),h=y(()=>{const f=typeof n.value=="boolean"?"top":n.value;return[d.value?{top:"auto",bottom:"auto",height:void 0}:void 0,n.value?{[f]:L(t.value)}:{top:a.value.top}]});de(()=>{N(d,f=>{f?window.addEventListener("scroll",k,{passive:!0}):window.removeEventListener("scroll",k)},{immediate:!0})}),ve(()=>{document.removeEventListener("scroll",k)});let g=0;function k(){const f=g>window.scrollY?"up":"down",l=v.value.getBoundingClientRect(),s=parseFloat(a.value.top??0),r=window.scrollY-Math.max(0,t.value-s),m=l.height+Math.max(t.value,s)-window.scrollY-window.innerHeight;l.height<window.innerHeight-s?(n.value="top",t.value=s):f==="up"&&n.value==="bottom"||f==="down"&&n.value==="top"?(t.value=window.scrollY+l.top,n.value=!0):f==="down"&&m<=0?(t.value=0,n.value="bottom"):f==="up"&&r<=0&&(t.value=l.top+r,n.value="top"),g=window.scrollY}return{isStuck:n,stickyStyles:h}}const dt=100,vt=20;function Q(e){const v=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*v}function U(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let v=0;for(let d=e.length-1;d>0;d--){if(e[d].t===e[d-1].t)continue;const a=Q(v),n=(e[d].d-e[d-1].d)/(e[d].t-e[d-1].t);v+=(n-a)*Math.abs(n),d===e.length-1&&(v*=.5)}return Q(v)*1e3}function ft(){const e={};function v(n){Array.from(n.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new Oe(vt))).push([n.timeStamp,t])})}function d(n){Array.from(n.changedTouches).forEach(t=>{delete e[t.identifier]})}function a(n){var f;const t=(f=e[n])==null?void 0:f.values().reverse();if(!t)throw new Error(`No samples for touch id ${n}`);const h=t[0],g=[],k=[];for(const l of t){if(h[0]-l[0]>dt)break;g.push({t:l[0],d:l[1].clientX}),k.push({t:l[0],d:l[1].clientY})}return{x:U(g),y:U(k),get direction(){const{x:l,y:s}=this,[r,m]=[Math.abs(l),Math.abs(s)];return r>m&&l>=0?"right":r>m&&l<=0?"left":m>r&&s>=0?"down":m>r&&s<=0?"up":mt()}}}return{addMovement:v,endTouch:d,getVelocity:a}}function mt(){throw new Error}function ht(e){let{isActive:v,isTemporary:d,width:a,touchless:n,position:t}=e;de(()=>{window.addEventListener("touchstart",B,{passive:!0}),window.addEventListener("touchmove",E,{passive:!1}),window.addEventListener("touchend",V,{passive:!0})}),ve(()=>{window.removeEventListener("touchstart",B),window.removeEventListener("touchmove",E),window.removeEventListener("touchend",V)});const h=y(()=>["left","right"].includes(t.value)),{addMovement:g,endTouch:k,getVelocity:f}=ft();let l=!1;const s=M(!1),r=M(0),m=M(0);let w;function P(o,i){return(t.value==="left"?o:t.value==="right"?document.documentElement.clientWidth-o:t.value==="top"?o:t.value==="bottom"?document.documentElement.clientHeight-o:D())-(i?a.value:0)}function p(o){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const c=t.value==="left"?(o-m.value)/a.value:t.value==="right"?(document.documentElement.clientWidth-o-m.value)/a.value:t.value==="top"?(o-m.value)/a.value:t.value==="bottom"?(document.documentElement.clientHeight-o-m.value)/a.value:D();return i?Math.max(0,Math.min(1,c)):c}function B(o){if(n.value)return;const i=o.changedTouches[0].clientX,c=o.changedTouches[0].clientY,b=25,x=t.value==="left"?i<b:t.value==="right"?i>document.documentElement.clientWidth-b:t.value==="top"?c<b:t.value==="bottom"?c>document.documentElement.clientHeight-b:D(),_=v.value&&(t.value==="left"?i<a.value:t.value==="right"?i>document.documentElement.clientWidth-a.value:t.value==="top"?c<a.value:t.value==="bottom"?c>document.documentElement.clientHeight-a.value:D());(x||_||v.value&&d.value)&&(l=!0,w=[i,c],m.value=P(h.value?i:c,v.value),r.value=p(h.value?i:c),k(o),g(o))}function E(o){const i=o.changedTouches[0].clientX,c=o.changedTouches[0].clientY;if(l){if(!o.cancelable){l=!1;return}const x=Math.abs(i-w[0]),_=Math.abs(c-w[1]);(h.value?x>_&&x>3:_>x&&_>3)?(s.value=!0,l=!1):(h.value?_:x)>3&&(l=!1)}if(!s.value)return;o.preventDefault(),g(o);const b=p(h.value?i:c,!1);r.value=Math.max(0,Math.min(1,b)),b>1?m.value=P(h.value?i:c,!0):b<0&&(m.value=P(h.value?i:c,!1))}function V(o){if(l=!1,!s.value)return;g(o),s.value=!1;const i=f(o.changedTouches[0].identifier),c=Math.abs(i.x),b=Math.abs(i.y);(h.value?c>b&&c>400:b>c&&b>3)?v.value=i.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||D()):v.value=r.value>.5}const S=y(()=>s.value?{transform:t.value==="left"?`translateX(calc(-100% + ${r.value*a.value}px))`:t.value==="right"?`translateX(calc(100% - ${r.value*a.value}px))`:t.value==="top"?`translateY(calc(-100% + ${r.value*a.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${r.value*a.value}px))`:D(),transition:"none"}:void 0);return{isDragging:s,dragProgress:r,dragStyles:S}}function D(){throw new Error}const gt=["start","end","left","right","top","bottom"],yt=G()({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>gt.includes(e)},sticky:Boolean,...De(),...ee(),...te(),...Le(),...ae(),...ne({tag:"nav"}),...le()},emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,v){let{attrs:d,emit:a,slots:n}=v;const{isRtl:t}=Ne(),{themeClasses:h}=ie(e),{borderClasses:g}=$e(e),{backgroundColorClasses:k,backgroundColorStyles:f}=J(H(e,"color")),{elevationClasses:l}=se(e),{mobile:s}=ze(),{roundedClasses:r}=ue(e),m=He(),w=oe(e,"modelValue",null,T=>!!T),{ssrBootStyles:P}=it(),p=M(),B=M(!1),E=y(()=>e.rail&&e.expandOnHover&&B.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),V=y(()=>Ie(e.location,t.value)),S=y(()=>!e.permanent&&(s.value||e.temporary)),o=y(()=>e.sticky&&!S.value&&V.value!=="bottom");e.expandOnHover&&e.rail!=null&&N(B,T=>a("update:rail",!T)),e.disableResizeWatcher||N(S,T=>!e.permanent&&Ae(()=>w.value=!T)),!e.disableRouteWatcher&&m&&N(m.currentRoute,()=>S.value&&(w.value=!1)),N(()=>e.permanent,T=>{T&&(w.value=!0)}),Ye(()=>{e.modelValue!=null||S.value||(w.value=e.permanent||!s.value)});const{isDragging:i,dragProgress:c,dragStyles:b}=ht({isActive:w,isTemporary:S,width:E,touchless:H(e,"touchless"),position:V}),x=y(()=>{const T=S.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):E.value;return i.value?T*c.value:T}),{layoutItemStyles:_,layoutRect:C,layoutItemScrimStyles:fe}=We({id:e.name,order:y(()=>parseInt(e.order,10)),position:V,layoutSize:x,elementSize:E,active:y(()=>w.value||i.value),disableTransitions:y(()=>i.value),absolute:y(()=>e.absolute||o.value&&typeof Y.value!="string")}),{isStuck:Y,stickyStyles:me}=ct({rootEl:p,isSticky:o,layoutItemStyles:_}),W=J(y(()=>typeof e.scrim=="string"?e.scrim:null)),he=y(()=>({...i.value?{opacity:c.value*.2,transition:"none"}:void 0,...C.value?{left:L(C.value.left),right:L(C.value.right),top:L(C.value.top),bottom:L(C.value.bottom)}:void 0,...fe.value}));Xe({VList:{bgColor:"transparent"}});function ge(){B.value=!0}function ye(){B.value=!1}return Fe(()=>{const T=n.image||e.image;return u(A,null,[u(e.tag,ce({ref:p,onMouseenter:ge,onMouseleave:ye,class:["v-navigation-drawer",`v-navigation-drawer--${V.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":B.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":S.value,"v-navigation-drawer--active":w.value,"v-navigation-drawer--sticky":o.value},h.value,k.value,g.value,l.value,r.value,e.class],style:[f.value,_.value,b.value,P.value,me.value,e.style]},d),{default:()=>{var X,F,j,q;return[T&&u("div",{key:"image",class:"v-navigation-drawer__img"},[n.image?(X=n.image)==null?void 0:X.call(n,{image:e.image}):u("img",{src:e.image,alt:""},null)]),n.prepend&&u("div",{class:"v-navigation-drawer__prepend"},[(F=n.prepend)==null?void 0:F.call(n)]),u("div",{class:"v-navigation-drawer__content"},[(j=n.default)==null?void 0:j.call(n)]),n.append&&u("div",{class:"v-navigation-drawer__append"},[(q=n.append)==null?void 0:q.call(n)])]}}),u(je,{name:"fade-transition"},{default:()=>[S.value&&(i.value||w.value)&&!!e.scrim&&u("div",{class:["v-navigation-drawer__scrim",W.backgroundColorClasses.value],style:[he.value,W.backgroundColorStyles.value],onClick:()=>w.value=!1},null)]})])}),{isStuck:Y}}}),wt=O("div",{class:"customizer-heading d-flex align-center justify-space-between"},[O("div",null,[O("h6",{class:"text-h6"},"ORDER TRACKER"),O("span",{class:"text-body-1"},"Make Sure To Finish All Orders")])],-1),bt={style:{color:"#fff"},class:"ma-0 pa-0"},kt=O("h3",{style:{color:"#fff","text-align":"center"}},"Need An Action",-1),Ct={__name:"OrderSideBar",setup(e){var f;const v=at(),d=nt(),a=(f=JSON.parse(localStorage.getItem("userData")))==null?void 0:f.type,n=M(!0),{isLessThanOverlayNavBreakpoint:t}=qe(),{width:h}=Ze(),g=y(()=>Je().$state.items.filter(l=>l.o_status=="paid")),k=l=>{const s=g.value.indexOf(l);s!=-1&&g.value.splice(s,1),(g.value.length==0||g.value.length=="undefined")&&lt.Howler.stop(),v.push(`./orders/${l.order_id}`)};return(l,s)=>!R(t)(R(h))&&!R(d).path.includes("orders")&&!R(d).params.id&&R(a)=="restaurant"?(z(),K(A,{key:0},[u(re,{icon:"",size:"small",class:"app-customizer-toggler rounded-s-lg rounded-0",style:{"z-index":"1001"},onClick:s[0]||(s[0]=r=>n.value=!0)},{default:$(()=>[u(I,{size:"22",icon:"tabler-chef-hat"})]),_:1}),u(yt,{location:"end",width:"300",class:"app-customizer",permanent:"",absolute:!1},{default:$(()=>[wt,u(ot),u(R(Ke),{tag:"ul",options:{wheelPropagation:!1}},{default:$(()=>[O("div",null,[(z(!0),K(A,null,Qe(R(g),(r,m)=>(z(),Ue(rt,{color:"success",class:"mb-5 mt-5 Alert",onClick:w=>k(r),style:{cursor:"pointer",width:"calc(100% - 20px)",margin:"auto"}},{default:$(()=>[O("h2",bt,[u(I,{icon:"tabler-chef-hat"}),Ge(" Order #"+et(r.order_id),1)]),kt]),_:2},1032,["onClick"]))),256))])]),_:1})]),_:1})],64)):tt("",!0)}};export{Ct as default};
