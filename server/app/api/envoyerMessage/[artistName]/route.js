"use strict";(()=>{var e={};e.id=363,e.ids=[363],e.modules={8013:e=>{e.exports=require("mongodb")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1066:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>v,originalPathname:()=>h,patchFetch:()=>y,requestAsyncStorage:()=>d,routeModule:()=>p,serverHooks:()=>m,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>g});var r={};a.r(r),a.d(r,{POST:()=>c});var s=a(5419),n=a(9108),o=a(9678),i=a(8578),u=a(8070);async function c(e,t){let{params:a}=t,{user:r,email:s,message:n}=await e.json(),o=a.artistName,c=(await (0,i.v)()).collection("messages"),p={user:r,email:s,message:n,artist:o,timestamp:new Date};return await c.insertOne(p),u.Z.json({})}let p=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/envoyerMessage/[artistName]/route",pathname:"/api/envoyerMessage/[artistName]",filename:"route",bundlePath:"app/api/envoyerMessage/[artistName]/route"},resolvedPagePath:"/Users/kante/Downloads/gabarit/src/app/api/envoyerMessage/[artistName]/route.js",nextConfigOutput:"",userland:r}),{requestAsyncStorage:d,staticGenerationAsyncStorage:l,serverHooks:m,headerHooks:v,staticGenerationBailout:g}=p,h="/api/envoyerMessage/[artistName]/route";function y(){return(0,o.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:l})}},8578:(e,t,a)=>{a.d(t,{v:()=>o});var r=a(8013);let s=process.env.DB_CHAINE_CONNEXION,n=new r.MongoClient(s);async function o(){try{return await n.connect(),n.db("musics")}catch(e){return console.error("Erreur de connexion \xe0 la base de donn\xe9es :",e),null}}}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[638,206],()=>a(1066));module.exports=r})();