(function(e){function t(t){for(var a,r,o=t[0],u=t[1],i=t[2],d=0,l=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&l.push(s[r][0]),s[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},s={app:0},c=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-1e29c23d":"ecbe149b","chunk-08f04ebc":"8fba2491","chunk-2b48c3c1":"7fab6a8d","chunk-35bba89a":"ca4fc2a9","chunk-43493fe2":"85709bca","chunk-2d0b6a99":"2a28b2be","chunk-2d0db0a3":"d64ca96e"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-08f04ebc":1,"chunk-2b48c3c1":1,"chunk-35bba89a":1,"chunk-43493fe2":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1e29c23d":"31d6cfe0","chunk-08f04ebc":"4a0b3cc1","chunk-2b48c3c1":"fe53acbf","chunk-35bba89a":"f9351ec0","chunk-43493fe2":"b3fe2fa7","chunk-2d0b6a99":"31d6cfe0","chunk-2d0db0a3":"31d6cfe0"}[e]+".css",s=u.p+a,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var i=c[o],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===a||d===s))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){i=l[o],d=i.getAttribute("data-href");if(d===a||d===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=c);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=o(e);var l=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}s[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b0f":function(e,t,n){},"23be":function(e,t,n){},4360:function(e,t,n){"use strict";var a=n("2b0e"),r=n("2f62"),s=(n("4fad"),n("a78e")),c=n.n(s);function o(e){for(var t=Object.entries(e),n=0;n<t.length;n+=1)c.a.set(t[n][0],t[n][1]);return!0}function u(){return{username:c.a.get("username"),appkey:c.a.get("appkey"),email:c.a.get("email"),role:c.a.get("role")}}function i(){c.a.remove("username"),c.a.remove("appkey"),c.a.remove("email"),c.a.remove("role")}a["a"].use(r["a"]);t["a"]=new r["a"].Store({state:{collapsed:!1,user:u(),menuRoutes:[]},mutations:{changeCollapsed:function(e){e.collapsed=!e.collapsed},setUserInfo:function(e,t){e.user=t},logOut:function(e){e.user={username:"",appkey:"",email:"",role:""}},changeMenuRoutes:function(e,t){e.menuRoutes=t}},actions:{changeCollapsed:function(e){var t=e.commit;t("changeCollapsed")},setUserInfo:function(e,t){var n=e.commit;n("setUserInfo",t),o(t)},logOut:function(e){var t=e.commit;t("logOut"),i()},changeMenuRoutes:function(e,t){var n=e.commit;n("changeMenuRoutes",t)}},modules:{}})},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("2819"),s=n.n(r),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],u={name:"app",components:{}},i=u,d=n("2877"),l=Object(d["a"])(i,c,o,!1,null,null,null),f=l.exports,m=(n("99af"),n("d3b7"),n("8c4f")),b=n("4360"),h=(n("4de4"),n("c975"),n("d81d"),n("b0c0"),{coustomer:[{name:"Product"},{name:"ProductList"},{name:"ProductAdd"},{name:"ProductEdit"}],admin:[{name:"Product"},{name:"ProductList"},{name:"ProductAdd"},{name:"Category"},{name:"ProductEdit"}]});function j(e,t){var n=h[e].map((function(e){return e.name})),a=t.filter((function(e){var t=e;if(-1!==n.indexOf(e.name)){var a=t.children;return t.children=a.filter((function(e){return-1!==n.indexOf(e.name)})),!0}return!1}));return a}var p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("left-menu",{key:e.key}),n("div",{class:{"main-app":!0,"menu-unfold":e.$store.state.collapsed}},[n("slider-nav"),n("router-view")],1)],1)},g=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-list"},[n("a-menu",{attrs:{"default-selected-keys":[e.defaultSelectKey],"default-open-keys":[e.defaultOpenKey],mode:"inline",theme:"dark","inline-collapsed":e.$store.state.collapsed}},[e._l(e.$store.state.menuRoutes,(function(t){return[t.meta.hidden?e._e():n("a-sub-menu",{key:t.name},[n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:t.meta.icon}}),n("span",[e._v(e._s(t.meta.title))])],1),e._l(t.children,(function(t){return[t.meta.hidden?e._e():n("a-menu-item",{key:t.name},[n("router-link",{attrs:{to:{name:t.name}}},[n("a-icon",{attrs:{type:t.meta.icon}}),e._v(" "+e._s(t.meta.title)+" ")],1)],1)]}))],2)]}))],2)],1)},k=[],y={computed:{defaultSelectKey:{get:function(){return this.$router.currentRoute.matched[1].name?this.$router.currentRoute.matched[1].name:""}},defaultOpenKey:{get:function(){return this.$router.currentRoute.matched[0].name?this.$router.currentRoute.matched[0].name:""}}}},_=y,w=Object(d["a"])(_,v,k,!1,null,null,null),O=w.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-header"},[n("a-button",{staticStyle:{"margin-bottom":"16px"},attrs:{type:"primary"},on:{click:e.toggleCollapsed}},[n("a-icon",{attrs:{type:e.$store.state.collapsed?"menu-unfold":"menu-fold"}})],1),n("div",{staticClass:"breadcrumb"},[n("a-breadcrumb",[n("a-breadcrumb-item",[e._v(e._s(e.currentRoute[0]?e.currentRoute[0].meta.title:""))]),n("a-breadcrumb-item",[n("router-link",{attrs:{to:{name:e.currentRoute[1].name}}},[e._v(e._s(e.currentRoute[1]?e.currentRoute[1].meta.title:""))])],1)],1)],1),n("ul",{staticClass:"user-info"},[n("li",{staticClass:"user-name"},[e._v(" 欢迎， "+e._s(e.$store.state.user.username)+" "),n("a-icon",{attrs:{type:"down"}})],1),n("li",{staticClass:"login-out",on:{click:e.logOut}},[e._v("退出登录")])])],1)},z=[],C={data:function(){return{currentRoute:[{name:"Home",meta:{title:"首页"}},{name:"Statistics",meta:{title:"统计"}}]}},watch:{$route:function(){this.currentRoute=this.$router.currentRoute.matched}},methods:{toggleCollapsed:function(){this.$store.dispatch("changeCollapsed")},logOut:function(){this.$store.dispatch("logOut"),this.$router.push("/login")}}},R=C,x=Object(d["a"])(R,P,z,!1,null,null,null),$=x.exports,E={data:function(){return{key:(new Date).getTime()}},watch:{$route:function(){this.key=(new Date).getTime()}},components:{leftMenu:O,sliderNav:$},methods:{}},S=E,T=(n("de16"),Object(d["a"])(S,p,g,!1,null,null,null)),L=T.exports;a["a"].use(m["a"]);var M=[{path:"/product",name:"Product",component:L,meta:{title:"商品",hidden:!1,icon:"inbox"},children:[{path:"list",name:"ProductList",meta:{title:"商品列表",hidden:!1,icon:"unordered-list"},component:function(){return Promise.all([n.e("chunk-1e29c23d"),n.e("chunk-08f04ebc")]).then(n.bind(null,"9201"))}},{path:"add",name:"ProductAdd",meta:{title:"添加商品",icon:"file-add",hidden:!1},component:function(){return Promise.all([n.e("chunk-1e29c23d"),n.e("chunk-43493fe2")]).then(n.bind(null,"ed8a"))}},{path:"edit/:id",name:"ProductEdit",meta:{title:"编辑商品",icon:"edit",hidden:!0},component:function(){return Promise.all([n.e("chunk-1e29c23d"),n.e("chunk-43493fe2")]).then(n.bind(null,"ed8a"))}},{path:"category",name:"Category",meta:{title:"类目管理",hidden:!1,icon:"project"},component:function(){return n.e("chunk-2d0db0a3").then(n.bind(null,"6dba"))}}]}],A=[{path:"/",name:"Home",component:L,redirect:"/statistics",meta:{title:"首页",hidden:!1,icon:"home"},children:[{path:"statistics",name:"Statistics",meta:{title:"统计",hidden:!1,icon:"number"},component:function(){return n.e("chunk-2d0b6a99").then(n.bind(null,"1db2"))}}]},{path:"/login",name:"Login",meta:{title:"登录",hidden:!0},component:function(){return Promise.all([n.e("chunk-1e29c23d"),n.e("chunk-35bba89a")]).then(n.bind(null,"a55b"))}},{path:"/registered",name:"Registered",meta:{title:"注册",hidden:!0},component:function(){return Promise.all([n.e("chunk-1e29c23d"),n.e("chunk-2b48c3c1")]).then(n.bind(null,"95f5"))}}],N=new m["a"]({routes:A}),D=!1;N.beforeEach((function(e,t,n){if("/login"!==e.path&&"/registered"!==e.path){if(b["a"].state.user.appkey&&b["a"].state.user.username&&b["a"].state.user.email&&b["a"].state.user.role){if(!D){var a=j(b["a"].state.user.role,M);b["a"].dispatch("changeMenuRoutes",A.concat(a)).then((function(){n("/"),N.addRoutes(a)})),D=!0}return n()}return n("/login")}return"/login"===e.path&&b["a"].state.user.appkey&&b["a"].state.user.username&&b["a"].state.user.email&&b["a"].state.user.role?n("/"):n()}));var U=N,K=n("f23d");n("0b0f");a["a"].use(K["a"]);n("23be");a["a"].use(s.a),a["a"].config.productionTip=!1,new a["a"]({router:U,store:b["a"],render:function(e){return e(f)}}).$mount("#app")},"8d91":function(e,t,n){},de16:function(e,t,n){"use strict";n("8d91")}});
//# sourceMappingURL=app.0711d552.js.map