(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function a(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9782021c"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(e);var s=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/japanese-learning/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"24ef":function(e,t,n){},c810:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},c=Object(r["e"])("Home"),a=Object(r["e"])(" | "),u=Object(r["e"])("About");function i(e,t){var n=Object(r["v"])("router-link"),i=Object(r["v"])("router-view");return Object(r["o"])(),Object(r["d"])(r["a"],null,[Object(r["f"])("div",o,[Object(r["f"])(n,{to:"/"},{default:Object(r["z"])((function(){return[c]})),_:1}),a,Object(r["f"])(n,{to:"/about"},{default:Object(r["z"])((function(){return[u]})),_:1})]),Object(r["f"])(i)],64)}n("d400");const s={};s.render=i;var l=s,f=n("9483");Object(f["a"])("".concat("/japanese-learning/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var p=n("6c02"),b={class:"home"};function d(e,t,n,o,c,a){var u=Object(r["v"])("Welcome");return Object(r["o"])(),Object(r["d"])("div",b,[Object(r["f"])(u,{msg:"Welcome to Your Vue.js + TypeScript App"})])}var v=n("d4ec"),j=n("262e"),O=n("2caf"),h=n("9ab4"),g=n("ce1f"),m=Object(r["A"])("data-v-5d12c981");Object(r["s"])("data-v-5d12c981");var y={class:"hello"},w=Object(r["f"])("h1",null,"Welcome to Japanese learning",-1);Object(r["p"])();var k=m((function(e,t,n,o,c,a){return Object(r["o"])(),Object(r["d"])("div",y,[w])})),_=function(e){Object(j["a"])(n,e);var t=Object(O["a"])(n);function n(){return Object(v["a"])(this,n),t.apply(this,arguments)}return n}(g["b"]);_=Object(h["a"])([Object(g["a"])({props:{msg:String}})],_);var P=_;n("e750");P.render=k,P.__scopeId="data-v-5d12c981";var A=P,S=function(e){Object(j["a"])(n,e);var t=Object(O["a"])(n);function n(){return Object(v["a"])(this,n),t.apply(this,arguments)}return n}(g["b"]);S=Object(h["a"])([Object(g["a"])({components:{Welcome:A}})],S);var x=S;x.render=d;var T=x,E=[{path:"/",name:"Home",component:T},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],M=Object(p["a"])({history:Object(p["b"])("/japanese-learning/"),routes:E}),W=M,C=n("5502"),J=Object(C["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(l).use(J).use(W).mount("#app")},d400:function(e,t,n){"use strict";n("c810")},e750:function(e,t,n){"use strict";n("24ef")}});
//# sourceMappingURL=app.57feaa43.js.map