if(!self.define){let l,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const l=document.createElement("script");l.src=i,l.onload=s,document.head.appendChild(l)}else l=i,importScripts(i),s()})).then((()=>{let l=s[i];if(!l)throw new Error(`Module ${i} didn’t register its module`);return l})));self.define=(n,e)=>{const r=l||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let u={};const o=l=>i(l,r),c={module:{uri:r},exports:u,require:o};s[r]=Promise.all(n.map((l=>c[l]||o(l)))).then((l=>(e(...l),u)))}}define(["./workbox-5b385ed2"],(function(l){"use strict";l.setCacheNameDetails({prefix:"portal_age_front"}),self.addEventListener("message",(l=>{l.data&&"SKIP_WAITING"===l.data.type&&self.skipWaiting()})),l.precacheAndRoute([{url:"/css/153.bb4023c6.css",revision:null},{url:"/css/196.26c424d1.css",revision:null},{url:"/css/32.6241a723.css",revision:null},{url:"/css/384.b5c09e93.css",revision:null},{url:"/css/479.0dd39d27.css",revision:null},{url:"/css/751.ebd423be.css",revision:null},{url:"/css/789.aa1916c6.css",revision:null},{url:"/css/891.11032bcd.css",revision:null},{url:"/css/967.4ebfef2d.css",revision:null},{url:"/css/977.d3a51382.css",revision:null},{url:"/css/991.fd7f5dd6.css",revision:null},{url:"/css/app.68cc2577.css",revision:null},{url:"/img/AgeLogo.1d0d63d6.svg",revision:null},{url:"/img/HomeBackgroundMobile.1f8325cc.png",revision:null},{url:"/img/ageLogoMobile.b219e60f.svg",revision:null},{url:"/img/female-avatar.c59cf831.png",revision:null},{url:"/img/female-avatar2.c447fdeb.png",revision:null},{url:"/img/home_fig_1.6ac901c7.png",revision:null},{url:"/img/home_fig_2.323cb66e.png",revision:null},{url:"/img/home_fig_3.c910205f.png",revision:null},{url:"/img/home_fig_4.bc8caeee.png",revision:null},{url:"/img/listComunicate.09da3bc5.svg",revision:null},{url:"/img/loginBackground.33758157.jpg",revision:null},{url:"/img/loginBackgroundMobile.ff413ad4.png",revision:null},{url:"/img/logoBackgroundComunicate.41dac38b.png",revision:null},{url:"/img/logo_age_orange.d9b0681f.png",revision:null},{url:"/img/male-avatar.10e65b93.png",revision:null},{url:"/img/male-avatar2.0008dadb.png",revision:null},{url:"/img/motocycle.163de3f0.png",revision:null},{url:"/img/newComunicate.23c169f8.svg",revision:null},{url:"/img/retention.1b9fd8a8.png",revision:null},{url:"/img/welcome.ad930a87.png",revision:null},{url:"/index.html",revision:"feee14d38c6ac6edc04db8f273382494"},{url:"/js/153.a798cd39.js",revision:null},{url:"/js/196.6f3fe35e.js",revision:null},{url:"/js/32.f36f067c.js",revision:null},{url:"/js/33.8b8dc9fe.js",revision:null},{url:"/js/345.01161572.js",revision:null},{url:"/js/384.8a2104ca.js",revision:null},{url:"/js/479.344ba359.js",revision:null},{url:"/js/751.6aab7496.js",revision:null},{url:"/js/789.9318f8fe.js",revision:null},{url:"/js/891.2c816c24.js",revision:null},{url:"/js/909.ece77392.js",revision:null},{url:"/js/95.fdcabd61.js",revision:null},{url:"/js/967.3d0285a4.js",revision:null},{url:"/js/977.e3faa280.js",revision:null},{url:"/js/991.8b77f1c1.js",revision:null},{url:"/js/app.3ef377a7.js",revision:null},{url:"/js/chunk-vendors.41f492eb.js",revision:null},{url:"/manifest.json",revision:"32bd526b74b7f8c4becdfb4c2bbfa7a5"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map