"use strict";(()=>{var e={};e.id=483,e.ids=[483],e.modules={8013:e=>{e.exports=require("mongodb")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9791:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>g,originalPathname:()=>h,patchFetch:()=>x,requestAsyncStorage:()=>p,routeModule:()=>d,serverHooks:()=>m,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>v});var a={};r.r(a),r.d(a,{GET:()=>c});var n=r(5419),o=r(9108),s=r(9678),i=r(8578),u=r(8070);async function c(){let e=(await (0,i.v)()).collection("artists"),t=await e.find({}).toArray();return u.Z.json(t)}let d=new n.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/getTeams/route",pathname:"/api/getTeams",filename:"route",bundlePath:"app/api/getTeams/route"},resolvedPagePath:"/Users/kante/Downloads/gabarit/src/app/api/getTeams/route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:p,staticGenerationAsyncStorage:l,serverHooks:m,headerHooks:g,staticGenerationBailout:v}=d,h="/api/getTeams/route";function x(){return(0,s.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:l})}},8578:(e,t,r)=>{r.d(t,{v:()=>s});var a=r(8013);let n=process.env.DB_CHAINE_CONNEXION,o=new a.MongoClient(n);async function s(){try{return await o.connect(),o.db("musics")}catch(e){return console.error("Erreur de connexion \xe0 la base de donn\xe9es :",e),null}}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,206],()=>r(9791));module.exports=a})();