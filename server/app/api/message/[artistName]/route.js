"use strict";(()=>{var e={};e.id=263,e.ids=[263],e.modules={8013:e=>{e.exports=require("mongodb")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8524:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>g,originalPathname:()=>h,patchFetch:()=>N,requestAsyncStorage:()=>p,routeModule:()=>d,serverHooks:()=>m,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>v});var r={};a.r(r),a.d(r,{GET:()=>c});var s=a(5419),n=a(9108),o=a(9678),i=a(8578),u=a(8070);async function c(e,t){let{params:a}=t,r=(await (0,i.v)()).collection("messages"),s=await r.find({artist:a.artistName}).toArray();return u.Z.json(s)}let d=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/message/[artistName]/route",pathname:"/api/message/[artistName]",filename:"route",bundlePath:"app/api/message/[artistName]/route"},resolvedPagePath:"/Users/kante/Downloads/gabarit/src/app/api/message/[artistName]/route.js",nextConfigOutput:"",userland:r}),{requestAsyncStorage:p,staticGenerationAsyncStorage:l,serverHooks:m,headerHooks:g,staticGenerationBailout:v}=d,h="/api/message/[artistName]/route";function N(){return(0,o.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:l})}},8578:(e,t,a)=>{a.d(t,{v:()=>o});var r=a(8013);let s=process.env.DB_CHAINE_CONNEXION,n=new r.MongoClient(s);async function o(){try{return await n.connect(),n.db("musics")}catch(e){return console.error("Erreur de connexion \xe0 la base de donn\xe9es :",e),null}}}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[638,206],()=>a(8524));module.exports=r})();