import{C as P,cF as E,l as g,bh as f,E as A,U as j,r as G,o as l,b as m,w as t,q as a,I as X,aX as w,c9 as H,s as r,G as O,cG as B,n as o,z as u,P as J,M as D,c as d,F as v,a as x,H as z,y as b,p as $,N as I,a1 as W,a2 as Y,A as L,$ as Z,a0 as ee}from"./index-7157bb72.js";import{V as se}from"./VDivider-df998627.js";import{V as R,d as te,a as F,b as ae}from"./VList-f81baed7.js";import{V as re}from"./VDialog-474fb5d1.js";import"./ssrBoot-5e92ae1e.js";import"./VOverlay-f4087ea4.js";import"./lazy-80a79e47.js";import"./dialog-transition-84874201.js";const K=y=>(Z("data-v-c1d2575e"),y=y(),ee(),y),le={class:"d-flex align-center text-high-emphasis me-1"},oe={class:"d-flex align-center"},ie={class:"h-100"},ne={class:"text-xs text-disabled text-uppercase"},ce={class:"h-100"},ue={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis h-100"},de={class:"d-flex align-center flex-wrap justify-center gap-2 text-h6 my-3"},pe=K(()=>o("span",null,"No Result For ",-1)),he={key:0,class:"mt-8"},fe=K(()=>o("span",{class:"d-flex justify-center text-disabled"},"Try searching for",-1)),ye=["onClick"],_e={class:"text-sm"},ge={__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean,required:!0},searchQuery:{type:String,required:!0},searchResults:{type:Array,required:!0},suggestions:{type:Array,required:!1},noDataSuggestion:{type:Array,required:!1}},emits:["update:isDialogVisible","update:searchQuery","itemSelected"],setup(y,{emit:_}){const i=y,{ctrl_k:Q,meta_k:T}=E({passive:!1,onEventFired(e){e.ctrlKey&&e.key==="k"&&e.type==="keydown"&&e.preventDefault()}}),S=g(),n=g(structuredClone(f(i.searchQuery))),U=g(),C=g(structuredClone(f(i.isDialogVisible))),p=g(structuredClone(f(i.searchResults)));A(i,()=>{C.value=structuredClone(f(i.isDialogVisible)),p.value=structuredClone(f(i.searchResults)),n.value=structuredClone(f(i.searchQuery))}),A([Q,T],()=>{C.value=!0,_("update:isDialogVisible",!0)});const V=()=>{_("update:isDialogVisible",!1),_("update:searchQuery","")};j(()=>{n.value.length||(p.value=[])});const q=e=>{var c,k;e.key==="ArrowDown"?(e.preventDefault(),(c=S.value)==null||c.focus("next")):e.key==="ArrowUp"&&(e.preventDefault(),(k=S.value)==null||k.focus("prev"))},M=e=>{_("update:isDialogVisible",e),_("update:searchQuery","")},N=e=>e==="dashboards"?"Dashboards":e==="appsPages"?"Apps & Pages":e==="userInterface"?"User Interface":e==="formsTables"?"Forms Tables":e==="chartsMisc"?"Charts Misc":"Misc";return(e,c)=>{const k=G("IconBtn");return l(),m(re,{"max-width":"600","model-value":r(C),height:e.$vuetify.display.smAndUp?"550":"100%",fullscreen:e.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":M,onKeyup:B(V,["esc"])},{default:t(()=>[a(X,{height:"100%",width:"100%",class:"position-relative"},{default:t(()=>[a(w,{class:"pt-1",style:{"min-block-size":"65px"}},{default:t(()=>[a(H,{ref_key:"refSearchInput",ref:U,modelValue:r(n),"onUpdate:modelValue":[c[0]||(c[0]=s=>O(n)?n.value=s:null),c[1]||(c[1]=s=>e.$emit("update:searchQuery",r(n)))],autofocus:"",density:"comfortable",variant:"plain",class:"app-bar-autocomplete-box",onKeyup:B(V,["esc"]),onKeydown:q},{"prepend-inner":t(()=>[o("div",le,[a(u,{size:"22",icon:"tabler-search",class:"mt-1",style:{opacity:"1"}})])]),"append-inner":t(()=>[o("div",oe,[o("div",{class:"text-base text-disabled cursor-pointer me-1",onClick:V}," [esc] "),a(k,{size:"small",onClick:V},{default:t(()=>[a(u,{icon:"tabler-x"})]),_:1})])]),_:1},8,["modelValue","onKeyup"])]),_:1}),a(se),a(r(J),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:t(()=>[D(a(r(R),{ref_key:"refSearchList",ref:S,density:"compact",class:"app-bar-search-list"},{default:t(()=>[(l(!0),d(v,null,x(r(p),s=>(l(),d(v,{key:s.title},["header"in s?(l(),m(r(te),{key:0,class:"text-disabled"},{default:t(()=>[z(b(N(s.title)),1)]),_:2},1024)):$(e.$slots,"searchResult",{key:1,item:s},()=>[a(r(F),{link:"",onClick:h=>e.$emit("itemSelected",s)},{prepend:t(()=>[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"])]),append:t(()=>[a(u,{size:"20",icon:"tabler-corner-down-left",class:"enter-icon text-disabled"})]),default:t(()=>[a(ae,null,{default:t(()=>[z(b(s.title),1)]),_:2},1024)]),_:2},1032,["onClick"])],!0)],64))),128))]),_:3},512),[[I,r(n).length&&!!r(p).length]]),D(o("div",ie,[$(e.$slots,"suggestions",{},()=>[a(w,{class:"app-bar-search-suggestions h-100 pa-10"},{default:t(()=>[i.suggestions?(l(),m(W,{key:0,class:"gap-y-4"},{default:t(()=>[(l(!0),d(v,null,x(i.suggestions,s=>(l(),m(Y,{key:s.title,cols:"12",sm:"6",class:"ps-6"},{default:t(()=>[o("p",ne,b(s.title),1),a(r(R),{class:"card-list"},{default:t(()=>[(l(!0),d(v,null,x(s.content,h=>(l(),m(r(F),{key:h.title,link:"",title:h.title,class:"app-bar-search-suggestion",onClick:me=>e.$emit("itemSelected",h)},{prepend:t(()=>[a(u,{icon:h.icon,size:"20",class:"me-2"},null,8,["icon"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})):L("",!0)]),_:1})],!0)],512),[[I,!!r(p)&&!r(n)]]),D(o("div",ce,[$(e.$slots,"noData",{},()=>[a(w,{class:"h-100"},{default:t(()=>[o("div",ue,[a(u,{size:"75",icon:"tabler-file-x"}),o("div",de,[pe,o("span",null,'"'+b(r(n))+'"',1)]),i.noDataSuggestion?(l(),d("div",he,[fe,(l(!0),d(v,null,x(i.noDataSuggestion,s=>(l(),d("h6",{key:s.title,class:"app-bar-search-suggestion text-sm font-weight-regular cursor-pointer mt-3",onClick:h=>e.$emit("itemSelected",s)},[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"]),o("span",_e,b(s.title),1)],8,ye))),128))])):L("",!0)])]),_:1})],!0)],512),[[I,!r(p).length&&r(n).length]])]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen","onKeyup"])}}},De=P(ge,[["__scopeId","data-v-c1d2575e"]]);export{De as default};