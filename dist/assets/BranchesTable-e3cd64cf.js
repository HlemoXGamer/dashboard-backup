import{o as d,b as w,w as a,q as s,az as $,b8 as J,b9 as U,H as p,y,I as D,aX as L,U as q,c as A,F as z,a as E,D as G,O as S,l as B,aV as H,r as X,s as f,G as K,A as g,t as M,z as k}from"./index-36d8cfe3.js";import{V as T}from"./VDialog-a58735bf.js";import{_ as Q}from"./DialogCloseBtn-c677f423.js";import{r as W}from"./branches-554dffa9.js";import{V as Y}from"./VDataTable-e542c293.js";import{V as Z}from"./VChip-8213b9b6.js";const ee={__name:"AreasDialog",props:{name:{type:String,default:""},areas:{type:Array,default:[]}},setup(_){const n=_;return(v,l)=>(d(),w(T,{width:"500"},{activator:a(({props:m})=>[s($,J(U(m)),{default:a(()=>[p(y(n.name),1)]),_:2},1040)]),default:a(()=>[s(D,{title:"Branch Areas"},{default:a(()=>[s(L,null,{default:a(()=>[s(q,{class:"px-3 py-4",align:"center",justify:"center"},{default:a(()=>[(d(!0),A(z,null,E(n.areas,m=>(d(),w($,{class:"my-2 mx-3"},{default:a(()=>[p(y(m.name),1)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})]),_:1}))}},ae={key:0,class:"d-flex gap-1"},ie={__name:"BranchesTable",props:{branches:{type:Array,default:[]},search:{type:String,default:""},performance:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup(_){const n=_,v=G(),l=v.t,m=S(()=>{if(v.locale.value==="en")return"name_en";if(v.locale.value==="ar")return"name_ar"}),C=B([]),h=B(!1),x=H(),c=B(!1),O=S(()=>{let t=[];return t.push({title:l("Name"),key:m},{title:l("City"),key:"city.name"},{title:l("Areas"),key:"areas"},{title:l("Phone Number"),key:"phone_no"},{title:l("Created Date"),key:"created_at"}),n.performance?t.push({title:l("Actions"),key:"actions"}):t.push({title:l("Status"),key:"status"},{title:l("Actions"),key:"actions"}),t}),V=t=>{if(parseInt(t)!==0)return{color:"success",text:l("Active")};if(parseInt(t)===0)return{color:"secondary",text:l("Disabled")}},F=(t,r,o,N)=>{const i=r.split(",")[0],e=r.split(",")[1].split("-").filter(b=>b!==""),u=r.split(",")[2];return o.raw.name_en.toLowerCase().includes(i.toLowerCase())&&!e.length?o.raw.name_en.toLowerCase().includes(i.toLowerCase()):o.raw.name_en.toLowerCase().includes(i)&&u.length&&!e.length?o.raw.name_en.toLowerCase().includes(i.toLowerCase())&&o.raw.city.name.toLowerCase().includes(u.toLowerCase()):o.raw.name_en.toLowerCase().includes(i)&&u.length&&e.length?o.raw.name_en.toLowerCase().includes(i.toLowerCase())&&o.raw.city.name.toLowerCase().includes(u.toLowerCase())&&e.some(b=>o.raw.areas.map(j=>j.name).includes(b)):!1};let I={};const P=t=>{I=t,C.value=JSON.stringify(t),C.value=JSON.parse(C.value),c.value=!0},R=async()=>{h.value=!0;try{await W(C.value),n.branches.splice(n.branches.indexOf(I),1),x.success("Branch deleted successfully"),h.value=!1,c.value=!1}catch(t){x.error(t.response.data.message)}};return(t,r)=>{const o=Q,N=ee,i=X("IconBtn");return d(),A(z,null,[n.performance?g("",!0):(d(),w(T,{key:0,modelValue:f(c),"onUpdate:modelValue":r[3]||(r[3]=e=>K(c)?c.value=e:null),persistent:"",class:"v-dialog-sm"},{default:a(()=>[s(o,{onClick:r[0]||(r[0]=e=>c.value=!f(c))}),s(D,{title:t.$t("Delete Branch")},{default:a(()=>[s(L,null,{default:a(()=>[p(y(t.$t("Are you sure that you want to delete this Branch?")),1)]),_:1}),s(L,{class:"d-flex justify-end gap-3 flex-wrap"},{default:a(()=>[s($,{color:"secondary",variant:"tonal",onClick:r[1]||(r[1]=e=>c.value=!1),disabled:f(h)},{default:a(()=>[p(y(t.$t("Cancel")),1)]),_:1},8,["disabled"]),s($,{onClick:r[2]||(r[2]=e=>R()),loading:f(h)},{default:a(()=>[p(y(t.$t("Delete")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"])),s(D,{elevation:"0",rounded:"0",class:"px-0 mb-0 pb-5 mt-10 pt-2",loading:_.loading},{default:a(()=>[s(f(Y),{items:n.branches,headers:f(O),search:n.search,"items-per-page":15,"custom-filter":F},{"item.areas":a(({item:e})=>[e.raw.areas[0]?(d(),w(N,{key:0,name:e.raw.areas[0][f(m)],areas:e.raw.areas},null,8,["name","areas"])):g("",!0)]),"item.status":a(({item:e})=>[s(Z,{color:V(e.raw.is_active).color,class:M([`text-${V(e.raw.is_active).color}`,"font-weight-medium"]),size:"small"},{default:a(()=>[p(y(V(e.raw.is_active).text),1)]),_:2},1032,["color","class"])]),"item.actions":a(({item:e})=>[n.performance?g("",!0):(d(),A("div",ae,[s(i,{onClick:u=>t.$router.push(`/branches/view/${e.raw.id}`)},{default:a(()=>[s(k,{icon:"mdi-eye"})]),_:2},1032,["onClick"]),s(i,{onClick:u=>t.$router.push(`branches/edit/${e.raw.id}`)},{default:a(()=>[s(k,{icon:"mdi-pencil-outline"})]),_:2},1032,["onClick"]),s(i,null,{default:a(()=>[s(k,{icon:"mdi-delete-outline",onClick:u=>P(e.value)},null,8,["onClick"])]),_:2},1024)])),n.performance?(d(),w(i,{key:1},{default:a(()=>[s(k,{icon:"mdi-eye",onClick:u=>t.$router.push(`performance/${e.raw.id}`)},null,8,["onClick"])]),_:2},1024)):g("",!0)]),_:1},8,["items","headers","search"])]),_:1},8,["loading"])],64)}}};export{ie as _};
