import{o as n,b as u,w as e,n as l,y as a,q as t,W as x,U as o,I as k,aX as v,A as m,C as K,D as R,l as j,O as T,c as p,s as g,F,a as w,az as C,H as $,G as q,z as P,b4 as S}from"./index-5f1e036d.js";import{V as h}from"./VDivider-ca899a5a.js";import{_ as M}from"./DialogCloseBtn-35cd036e.js";import{V as O}from"./VDialog-c2a8b0a4.js";import{V as N}from"./VChip-c99b15f1.js";const U={class:"text-h4 pt-3 mb-3"},A={class:"mb-2"},E={class:"mb-2"},X={class:"mb-2"},G={class:"mb-2"},H={class:"mb-2"},L={class:"mb-2"},Q={class:"mb-2"},J={class:"mb-2"},Y={class:"mb-2"},Z={class:"mb-2"},ee={class:"mb-0"},te={class:"mb-0"},_e={__name:"PaymentDetails",props:{paymentMethod:{type:String,default:""},total:{default:""},subtotal:{default:""},newtotal:{default:""},discountType:{default:""},discountRate:{default:""},deliveryCost:{default:""},extraCost:{default:""}},setup(c){const b={fixed:"KWD",percentage:"%"};return(r,D)=>(n(),u(x,{class:"px-5 rounded pb-10 w-100 mx-auto",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:e(()=>[l("p",U,a(r.$t("Payment Details")),1),t(x,null,{default:e(()=>[t(o,{class:"mt-0"},{default:e(()=>[t(k,{class:"w-100 px-2 py-2",variant:"tonal",color:r.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},{default:e(()=>[t(v,null,{default:e(()=>[t(o,{align:"center",justify:"space-between"},{default:e(()=>[l("p",A,a(r.$t("Payment Method")),1),l("p",E,a(c.paymentMethod),1)]),_:1}),t(o,null,{default:e(()=>[t(h,{color:r.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1}),t(o,{align:"center",justify:"space-between",class:"mt-5"},{default:e(()=>[l("p",X,a(r.$t("Subtotal")),1),l("p",G,a(c.subtotal)+" KWD",1)]),_:1}),t(o,null,{default:e(()=>[t(h,{color:r.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1}),c.discountRate?(n(),u(o,{key:0,align:"center",justify:"space-between",class:"mt-5"},{default:e(()=>[l("p",H,a(r.$t("Discount rate")),1),l("p",L,a(c.discountRate!==0?c.discountRate+b[c.discountType]:"Free Delivery"),1)]),_:1})):m("",!0),c.discountRate?(n(),u(o,{key:1},{default:e(()=>[t(h,{color:r.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1})):m("",!0),t(o,{align:"center",justify:"space-between",class:"mt-5"},{default:e(()=>[l("p",Q,a(r.$t("Deliver Cost")),1),l("p",J,a(c.deliveryCost)+" KWD",1)]),_:1}),t(o,null,{default:e(()=>[t(h,{color:r.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1}),t(o,{align:"center",justify:"space-between",class:"mt-5"},{default:e(()=>[l("p",Y,a(r.$t("Total")),1),l("p",Z,a(c.total)+" KWD",1)]),_:1}),c.newtotal?(n(),u(o,{key:2},{default:e(()=>[t(h,{color:r.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1})):m("",!0),c.newtotal?(n(),u(o,{key:3,align:"center",justify:"space-between",class:"mt-5"},{default:e(()=>[l("p",ee,a(r.$t("New Total")),1),l("p",te,a(Number(c.newtotal).toFixed(2))+" KWD",1)]),_:1})):m("",!0)]),_:1})]),_:1},8,["color"])]),_:1})]),_:1})]),_:1}))}};const ae={class:"text-h5 py-0"},se={class:"text-h4 pt-3 mb-0"},le={class:"text-h6 pb-0 mb-0 font-weight-bold"},ne={class:"text-h6 pb-0 mb-0 me-5 font-weight-bold"},oe={class:"mx-1 position-relative cart_image"},re={class:"cart_image_download position-absolute d-flex align-center justify-center w-100 h-100"},ce={__name:"OrderDetails",props:{products:{type:Array,default:[]},status:{type:String,default:""}},setup(c){const b=c,r=R(),D=f=>{const i=document.createElement("a");i.href=f,i.target="_blank",i.click(),i.remove()},_=j(!1),V=j(),I=f=>{V.value=f,_.value=!0},W=T(()=>{if(r.locale.value==="en")return"name_en";if(r.locale.value==="ar")return"name_ar"});return(f,i)=>{const z=M;return n(),p("div",null,[t(O,{modelValue:g(_),"onUpdate:modelValue":i[2]||(i[2]=s=>q(_)?_.value=s:null),width:"500"},{default:e(()=>[t(z,{onClick:i[0]||(i[0]=s=>_.value=!g(_))}),t(k,{title:f.$t("Product Notes")},{default:e(()=>[(n(!0),p(F,null,w(g(V),s=>(n(),u(v,{class:"pb-0"},{default:e(()=>[l("p",ae,a(s.index+" - "+s.note),1)]),_:2},1024))),256)),t(v,{class:"d-flex justify-end"},{default:e(()=>[t(C,{onClick:i[1]||(i[1]=s=>_.value=!1)},{default:e(()=>[$(a(f.$t("Close")),1)]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"]),t(x,{class:"mt-0 px-5 rounded pb-6",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:e(()=>[t(o,{class:"mx-0 my-0",align:"center",justify:"space-between"},{default:e(()=>[l("p",se,a(f.$t("Details")),1),b.status?(n(),u(N,{key:0,class:"text-h6",variant:"tonal",color:"success",size:"default"},{default:e(()=>[$(a(b.status.toUpperCase()),1)]),_:1})):m("",!0)]),_:1}),(n(!0),p(F,null,w(b.products,s=>(n(),u(x,{class:"px-0 mx-0"},{default:e(()=>[t(k,{class:"px-5 py-3 mt-3",variant:"tonal"},{default:e(()=>[t(v,{class:"w-100 align-center"},{default:e(()=>{var B;return[t(o,{align:"center",justify:"space-between"},{default:e(()=>[l("p",le,a(s[g(W)]),1),t(o,{justify:"end",align:"center"},{default:e(()=>[l("p",ne,a(s.quantity)+" X "+a(s.price)+" + "+a(s.cart_extra_flavor.reduce((d,y)=>d+Number(y.price),0).toFixed(2))+" KWD = "+a((Number(s.price*s.quantity)+s.cart_extra_flavor.reduce((d,y)=>d+Number(y.price),0)).toFixed(2))+" KWD ",1),s.has_note==1&&s.cart_notes.length>0?(n(),u(C,{key:0,size:"small",class:"px-2 me-3",onClick:d=>I(s.cart_notes)},{default:e(()=>[$(a(f.$t("Check Notes")),1)]),_:2},1032,["onClick"])):m("",!0),t(N,{size:"large",color:"primary",variant:"flat",class:"font-weight-bold justify-center align-center"},{default:e(()=>[$(a(s.quantity),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),((B=s.cart_extra_flavor)==null?void 0:B.length)>0?(n(),u(o,{key:0},{default:e(()=>[(n(!0),p(F,null,w(s.cart_extra_flavor,(d,y)=>(n(),u(k,{class:"ma-5 ml-0 w-100",key:y},{default:e(()=>[t(v,{class:"d-flex justify-space-between align-center"},{default:e(()=>[l("div",null,"Name: "+a(d.name),1),l("div",null,"Price: "+a(d.price),1),l("div",null,"Quantity: "+a(d.quantity),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)):m("",!0),s.has_image==1&&s.cart_images.length?(n(),u(o,{key:1,align:"center",justify:"space-between",class:"mt-7"},{default:e(()=>[(n(!0),p(F,null,w(s.cart_images,d=>(n(),p("div",oe,[l("div",re,[t(C,{size:"40",color:"primary",rounded:"xl",class:"py-2 px-2",onClick:y=>D(d.file)},{default:e(()=>[t(P,{icon:"tabler-cloud-download",size:"22"})]),_:2},1032,["onClick"])]),t(S,{class:"w-100 h-100",cover:"",src:d.file},null,8,["src"])]))),256))]),_:2},1024)):m("",!0)]}),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})])}}},ye=K(ce,[["__scopeId","data-v-bc3770e5"]]);export{ye as _,_e as a};
