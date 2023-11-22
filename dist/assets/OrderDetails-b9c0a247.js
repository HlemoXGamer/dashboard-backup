import{o as n,b as i,w as e,n as s,y as a,q as t,a2 as k,a1 as o,I as $,aX as h,A as f,C as R,D as K,l as x,O as T,c as y,s as v,F as g,a as F,az as C,H as w,G as W,z as q,b4 as P}from"./index-62e44508.js";import{V as b}from"./VDivider-2dfa86e0.js";import{_ as S}from"./DialogCloseBtn-8876c18b.js";import{V as M}from"./VDialog-91d65965.js";import{V as j}from"./VChip-a068bcbe.js";const O={class:"text-h4 pt-3 mb-3"},A={class:"mb-2"},E={class:"mb-2"},U={class:"mb-2"},X={class:"mb-2"},G={class:"mb-2"},H={class:"mb-2"},L={class:"mb-2"},Q={class:"mb-2"},J={class:"mb-2"},Y={class:"mb-2"},Z={class:"mb-0"},ee={class:"mb-0"},me={__name:"PaymentDetails",props:{paymentMethod:{type:String,default:""},total:{default:""},subtotal:{default:""},newtotal:{default:""},discountType:{default:""},discountRate:{default:""},deliveryCost:{default:""},extraCost:{default:""}},setup(u){const p={fixed:"KWD",percentage:"%"};return(r,V)=>(n(),i(k,{class:"px-5 rounded pb-10 w-100 mx-auto",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:e(()=>[s("p",O,a(r.$t("Payment Details")),1),t(k,null,{default:e(()=>[t(o,{class:"mt-0"},{default:e(()=>[t($,{class:"w-100 px-2 py-2",variant:"tonal",color:r.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},{default:e(()=>[t(h,null,{default:e(()=>[t(o,{align:"center",justify:"space-between"},{default:e(()=>[s("p",A,a(r.$t("Payment Method")),1),s("p",E,a(u.paymentMethod),1)]),_:1}),t(o,null,{default:e(()=>[t(b,{color:r.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1}),t(o,{align:"center",justify:"space-between",class:"mt-5"},{default:e(()=>[s("p",U,a(r.$t("Subtotal")),1),s("p",X,a(u.subtotal)+" KWD",1)]),_:1}),t(o,null,{default:e(()=>[t(b,{color:r.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1}),u.discountRate?(n(),i(o,{key:0,align:"center",justify:"space-between",class:"mt-5"},{default:e(()=>[s("p",G,a(r.$t("Discount rate")),1),s("p",H,a(u.discountRate!==0?u.discountRate+p[u.discountType]:"Free Delivery"),1)]),_:1})):f("",!0),u.discountRate?(n(),i(o,{key:1},{default:e(()=>[t(b,{color:r.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1})):f("",!0),t(o,{align:"center",justify:"space-between",class:"mt-5"},{default:e(()=>[s("p",L,a(r.$t("Deliver Cost")),1),s("p",Q,a(u.deliveryCost)+" KWD",1)]),_:1}),t(o,null,{default:e(()=>[t(b,{color:r.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1}),t(o,{align:"center",justify:"space-between",class:"mt-5"},{default:e(()=>[s("p",J,a(r.$t("Total")),1),s("p",Y,a(u.total)+" KWD",1)]),_:1}),u.newtotal?(n(),i(o,{key:2},{default:e(()=>[t(b,{color:r.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1})):f("",!0),u.newtotal?(n(),i(o,{key:3,align:"center",justify:"space-between",class:"mt-5"},{default:e(()=>[s("p",Z,a(r.$t("New Total")),1),s("p",ee,a(Number(u.newtotal).toFixed(2))+" KWD",1)]),_:1})):f("",!0)]),_:1})]),_:1},8,["color"])]),_:1})]),_:1})]),_:1}))}};const te={class:"text-h5 py-0"},ae={class:"text-h4 pt-3 mb-0"},se={class:"text-h6 pb-0 mb-0 font-weight-bold"},le={class:"text-h6 pb-0 mb-0 me-5 font-weight-bold"},ne={class:"mx-1 position-relative cart_image"},oe={class:"cart_image_download position-absolute d-flex align-center justify-center w-100 h-100"},re={__name:"OrderDetails",props:{products:{type:Array,default:[]},status:{type:String,default:""}},setup(u){const p=u,r=K(),V=d=>{const c=document.createElement("a");c.href=d,c.target="_blank",c.click(),c.remove()},m=x(!1),D=x(),N=d=>{D.value=d,m.value=!0},I=T(()=>{if(r.locale.value==="en")return"name_en";if(r.locale.value==="ar")return"name_ar"});return(d,c)=>{const z=S;return n(),y("div",null,[t(M,{modelValue:v(m),"onUpdate:modelValue":c[2]||(c[2]=l=>W(m)?m.value=l:null),width:"500"},{default:e(()=>[t(z,{onClick:c[0]||(c[0]=l=>m.value=!v(m))}),t($,{title:d.$t("Product Notes")},{default:e(()=>[(n(!0),y(g,null,F(v(D),l=>(n(),i(h,{class:"pb-0"},{default:e(()=>[s("p",te,a(l.index+" - "+l.note),1)]),_:2},1024))),256)),t(h,{class:"d-flex justify-end"},{default:e(()=>[t(C,{onClick:c[1]||(c[1]=l=>m.value=!1)},{default:e(()=>[w(a(d.$t("Close")),1)]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"]),t(k,{class:"mt-0 px-5 rounded pb-6",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:e(()=>[t(o,{class:"mx-0 my-0",align:"center",justify:"space-between"},{default:e(()=>[s("p",ae,a(d.$t("Details")),1),p.status?(n(),i(j,{key:0,class:"text-h6",variant:"tonal",color:"success",size:"default"},{default:e(()=>[w(a(p.status.toUpperCase()),1)]),_:1})):f("",!0)]),_:1}),(n(!0),y(g,null,F(p.products,l=>(n(),i(k,{class:"px-0 mx-0"},{default:e(()=>[t($,{class:"px-5 py-3 mt-3",variant:"tonal"},{default:e(()=>[t(h,{class:"w-100 align-center"},{default:e(()=>[t(o,{align:"center",justify:"space-between"},{default:e(()=>[s("p",se,a(l[v(I)]),1),t(o,{justify:"end",align:"center"},{default:e(()=>[s("p",le,a(l.quantity)+" X "+a(l.price)+" = "+a(Number(l.price*l.quantity).toFixed(2))+" KWD ",1),l.has_note==1&&l.cart_notes.length>0?(n(),i(C,{key:0,size:"small",class:"px-2 me-3",onClick:_=>N(l.cart_notes)},{default:e(()=>[w(a(d.$t("Check Notes")),1)]),_:2},1032,["onClick"])):f("",!0),t(j,{size:"large",color:"primary",variant:"flat",class:"font-weight-bold justify-center align-center"},{default:e(()=>[w(a(l.quantity),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),d.cart_extra_flavor.length>0?(n(),i(o,{key:0},{default:e(()=>[(n(!0),y(g,null,F(d.cart_extra_flavor,(_,B)=>(n(),i($,{class:"ma-5 ml-0 w-100",key:B},{default:e(()=>[t(h,null,{default:e(()=>[s("div",null,"Name: "+a(_.name),1),s("div",null,"Price: "+a(_.price),1),s("div",null,"Quantity: "+a(_.quantity),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})):f("",!0),l.has_image==1&&l.cart_images.length?(n(),i(o,{key:1,align:"center",justify:"space-between",class:"mt-7"},{default:e(()=>[(n(!0),y(g,null,F(l.cart_images,_=>(n(),y("div",ne,[s("div",oe,[t(C,{size:"40",color:"primary",rounded:"xl",class:"py-2 px-2",onClick:B=>V(_.file)},{default:e(()=>[t(q,{icon:"tabler-cloud-download",size:"22"})]),_:2},1032,["onClick"])]),t(P,{class:"w-100 h-100",cover:"",src:_.file},null,8,["src"])]))),256))]),_:2},1024)):f("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})])}}},_e=R(re,[["__scopeId","data-v-2c88e54a"]]);export{_e as _,me as a};
