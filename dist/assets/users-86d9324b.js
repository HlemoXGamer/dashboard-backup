import{bb as s,ba as o}from"./index-f1c459eb.js";let{get:t,show:p,update:u}=s("/users");function a(e){return e instanceof FormData?e.append("_method","put"):e._method="put",o.post("/profile/password",e)}export{t as g,p as s,a as u};