(function(t){function e(e){for(var a,i,s=e[0],u=e[1],c=e[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);m&&m(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b7511ccb"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=a);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t);var c=new Error;r=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",c.name="ChunkLoadError",c.type=a,c.request=r,n[1](c)}o[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var m=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3c61":function(t,e,n){"use strict";n("86c7")},4360:function(t,e,n){"use strict";var a=n("2b0e"),o=n("2f62"),r=n("1da1"),i=(n("d3b7"),n("96cf"),n("bc3a")),s=n.n(i),u={namespaced:!0,state:{token:null,user:null},getters:{authenticated:function(t){return t.token&&t.user},user:function(t){return t.user}},mutations:{SET_TOKEN:function(t,e){t.token=e},SET_USER:function(t,e){t.user=e}},actions:{signUp:function(t,e){return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.dispatch,n.next=3,s.a.post("api/signup",e);case 3:o=n.sent,a("attempt",o.data.jwt);case 5:case"end":return n.stop()}}),n)})))()},logIn:function(t,e){return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.dispatch,n.next=3,s.a.post("api/login",e);case 3:o=n.sent,a("attempt",o.data.jwt);case 5:case"end":return n.stop()}}),n)})))()},attempt:function(t,e){return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=t.commit,o=t.state,e&&a("SET_TOKEN",e),o.token){n.next=4;break}return n.abrupt("return");case 4:return n.prev=4,n.next=7,s.a.get("api");case 7:r=n.sent,a("SET_USER",r.data.user),console.log("riuscito!!!"),n.next=17;break;case 12:n.prev=12,n.t0=n["catch"](4),console.log("fail"),a("SET_TOKEN",null),a("SET_USER",null);case 17:case"end":return n.stop()}}),n,null,[[4,12]])})))()},logOut:function(t){var e=t.commit;e("SET_TOKEN",null),e("SET_USER",null)},forgotPassword:function(t,e){s.a.post("api/forgotPassword",e)},resetPassword:function(t,e){fetch(location.pathname,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e})})}}};a["a"].use(o["a"]);e["a"]=new o["a"].Store({state:{},mutations:{},actions:{},modules:{auth:u}})},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b0c0");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Navigation"),n("v-main",[n("router-view")],1)],1)},r=[],i=n("4360"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-app-bar",{attrs:{color:"deep-orange",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Runaton!")])],1),n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{"active-class":"deep-orange--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[n("v-list-item",{attrs:{to:"/"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("Home")])],1),n("v-list-item",{attrs:{to:"/run"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-run-fast")])],1),n("v-list-item-title",[t._v("Run")])],1),t.authenticated?n("v-list-item",{attrs:{to:"/archivio"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-text-box-multiple-outline")])],1),n("v-list-item-title",[t._v("Archivio")])],1):t._e(),t.authenticated?n("v-list-item",{attrs:{to:"/account"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account")])],1),n("v-list-item-title",[t._v("Account")])],1):t._e(),n("v-list-item",{attrs:{to:"/about"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-information-outline")])],1),n("v-list-item-title",[t._v("About")])],1),t.authenticated?t._e():n("v-list-item",{attrs:{to:"/signup"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account-plus")])],1),n("v-list-item-title",[t._v("Signup")])],1),t.authenticated?t._e():n("v-list-item",{attrs:{to:"/login"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account-arrow-left")])],1),n("v-list-item-title",[t._v("Login")])],1),t.authenticated?n("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logOut(e)}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-logout-variant")])],1),n("v-list-item-title",[t._v("Logout")])],1):t._e()],1)],1)],1)],1)},u=[],c=n("5530"),l=(n("ac1f"),n("5319"),n("2f62")),m={data:function(){return{drawer:!1,group:null}},computed:Object(c["a"])({},Object(l["c"])({authenticated:"auth/authenticated",user:"auth/user"})),methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])({logOutAction:"auth/logOut"})),{},{logOut:function(){var t=this;this.logOutAction().then((function(){"Home"!==t.$route.name&&t.$router.replace({name:"Home"})}))}})},p=m,d=n("2877"),v=n("6544"),f=n.n(v),h=n("40dc"),b=n("5bc1"),g=n("132d"),_=n("8860"),w=n("da13"),O=n("1baa"),j=n("34c3"),y=n("5d23"),x=n("f774"),S=n("2a7f"),E=Object(d["a"])(p,s,u,!1,null,null,null),P=E.exports;f()(E,{VAppBar:h["a"],VAppBarNavIcon:b["a"],VIcon:g["a"],VList:_["a"],VListItem:w["a"],VListItemGroup:O["a"],VListItemIcon:j["a"],VListItemTitle:y["a"],VNavigationDrawer:x["a"],VToolbarTitle:S["a"]});var k={store:i["a"],name:"App",components:{Navigation:P},data:function(){return{}}},A=k,R=n("7496"),T=n("f6c4"),N=Object(d["a"])(A,o,r,!1,null,null,null),$=N.exports;f()(N,{VApp:R["a"],VMain:T["a"]});n("d3b7"),n("3ca3"),n("ddb0");var I=n("8c4f"),V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("HOME")])},L=[],M={name:"Home",computed:Object(c["a"])({},Object(l["c"])({authenticated:"auth/authenticated",user:"auth/user"}))},H=M,U=Object(d["a"])(H,V,L,!1,null,null,null),W=U.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.authenticated?n("div",[t._v(" Runaton username account: "+t._s(t.user.email)+" "),n("br"),t._v(" Runaton email account: "+t._s(t.user.email)+" ")]):t._e(),n("div",{attrs:{id:"display"}},[n("span",{attrs:{id:"timer"}},[t._v("00:00:00.00")])]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.started,expression:"!started"}],attrs:{center:"",fab:"",large:""},on:{click:function(e){t.started=!t.started,t.trackPosition()}}},[t._v("START")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.started,expression:"started"}]},[n("v-btn",{attrs:{fab:"",large:""},on:{click:function(e){t.started=!t.started,t.stopTracking()}}},[t._v("STOP")])],1),n("v-card",{directives:[{name:"show",rawName:"v-show",value:!t.started&&0===t.count,expression:"!started && count===0"}],attrs:{elevation:"2"}},[n("div",{staticStyle:{width:"100% !important",height:"500px !important"},attrs:{id:"map"}})])],1)},C=[],J=(n("07ac"),n("e192")),z=n.n(J),B={id:void 0};a["a"].use(B),a["a"].use(z.a);var D={data:function(){return{coordinates:"",count:"",started:""}},name:"Run",computed:Object(c["a"])({},Object(l["c"])({authenticated:"auth/authenticated",user:"auth/user"})),created:function(){this.coordinates=[],this.count=0,this.started=!1},methods:{trackPosition:function(){B.id=navigator.geolocation.watchPosition(this.successPosition,this.failurePosition,{enableHighAccuracy:!0,timeout:1/0,maximumAge:1/0})},successPosition:function(t){(this.count+=1)>5&&t.coords.accuracy<20&&this.coordinates.push([t.coords.longitude,t.coords.latitude]),console.log(this.coordinates),console.log(t.coords.accuracy)},failurePosition:function(t){alert("Error Code: "+t.code+" Error Message: "+t.message)},stopTracking:function(){navigator.geolocation.clearWatch(B.id),this.drawMap()},drawMap:function(){var t=Object.values(this.coordinates),e=t.length;if(this.coordinates=[],this.count=0,e>0){z.a.accessToken="pk.eyJ1IjoiYm9jYW5jZWExNzY0MjA1IiwiYSI6ImNrb2JqYzhmcTA4bjMycG4yNnpid2t4cmoifQ.iidVnJSybWrLpLgQQGWiaQ";var n=new z.a.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:t[Math.floor(e/2)],zoom:15});n.on("load",(function(){n.addSource("route",{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:t}}}),n.addLayer({id:"route",type:"line",source:"route",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#f26958","line-width":8}})}))}}}},K=D,Y=(n("3c61"),n("8336")),Q=n("b0af"),G=Object(d["a"])(K,F,C,!1,null,null,null),q=G.exports;f()(G,{VApp:R["a"],VBtn:Y["a"],VCard:Q["a"]});var Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" USERNAME:"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],attrs:{type:"text"},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}}),t._v(" "),n("br"),t._v(" EMAIL:"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{type:"text"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),n("br"),t._v(" PASSWORD:"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{type:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),n("br"),n("button",{on:{click:t.submit}},[t._v("Signup")]),n("br"),n("router-link",{attrs:{to:"/forgotPassword"}},[t._v("Password dimenticata?")]),t._v(" "),n("br"),n("router-link",{attrs:{to:"/login"}},[t._v("Hai già un account? Fai il login")]),t._v(" "),n("br"),t._v(" "+t._s(t.error)+" ")],1)},X=[],tt={name:"Signup",data:function(){return{form:{username:"",email:"",password:""},error:""}},methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])({signUp:"auth/signUp"})),{},{submit:function(){var t=this;this.signUp(this.form).then((function(){t.$router.replace({name:"Run"})}))}})},et=tt,nt=Object(d["a"])(et,Z,X,!1,null,null,null),at=nt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" USERNAME: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],attrs:{type:"text"},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}}),n("br"),t._v("PASSWORD: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{type:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),n("br"),n("button",{on:{click:t.submit}},[t._v("login")]),n("br"),n("router-link",{attrs:{to:"/forgotPassword"}},[t._v("Password dimenticata?")]),n("br"),n("router-link",{attrs:{to:"/login"}},[t._v("Hai già un account? Fai il login")]),n("br"),t._v(" "+t._s(t.error)+" ")],1)},rt=[],it={name:"Login",data:function(){return{form:{username:"",password:""},error:""}},methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])({logIn:"auth/logIn"})),{},{submit:function(){var t=this;this.logIn(this.form).then((function(){t.$router.replace({name:"Run"})}))}})},st=it,ut=Object(d["a"])(st,ot,rt,!1,null,null,null),ct=ut.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t._v("Archivio page")])},mt=[],pt={name:"About"},dt=pt,vt=Object(d["a"])(dt,lt,mt,!1,null,null,null),ft=vt.exports;f()(vt,{VApp:R["a"]});var ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.authenticated?n("div",[t._v(" Username account: "+t._s(t.user.email)+" "),n("br"),t._v(" Email account: "+t._s(t.user.email)+" ")]):t._e(),n("v-btn",{attrs:{fab:"",large:""}},[t._v("RUN")])],1)},bt=[],gt={name:"Account",computed:Object(c["a"])({},Object(l["c"])({authenticated:"auth/authenticated",user:"auth/user"}))},_t=gt,wt=Object(d["a"])(_t,ht,bt,!1,null,null,null),Ot=wt.exports;f()(wt,{VApp:R["a"],VBtn:Y["a"]});var jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" EMAIL: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{type:"text"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),n("br"),n("button",{on:{click:t.submit}},[t._v("Invia email")]),n("br"),t._v(" "+t._s(t.error)+" ")])},yt=[],xt={name:"Forgot",data:function(){return{form:{email:""},error:""}},methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])({forgotPassword:"auth/forgotPassword"})),{},{submit:function(){var t=this;this.forgotPassword(this.form).then((function(){t.$router.replace({name:"Home"})}))}})},St=xt,Et=Object(d["a"])(St,jt,yt,!1,null,null,null),Pt=Et.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t._v(" NUOVA PASSWORD: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{type:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),n("br"),n("button",{on:{click:t.submit}},[t._v("Resetta la password")]),n("br"),t._v(" "+t._s(t.error)+" ")])},At=[],Rt={name:"Reset",data:function(){return{form:{password:""},error:""}},methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])({resetPassword:"auth/resetPassword"})),{},{submit:function(){var t=this;this.resetPassword(this.form.password).then((function(){t.$router.replace({name:"Home"})}))}})},Tt=Rt,Nt=Object(d["a"])(Tt,kt,At,!1,null,null,null),$t=Nt.exports;f()(Nt,{VApp:R["a"]}),a["a"].use(I["a"]);var It=[{path:"/",name:"Home",component:W},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:ct},{path:"/signup",name:"Signup",component:at},{path:"/run",name:"Run",component:q},{path:"/archivio",name:"Archivio",component:ft},{path:"/account",name:"Account",component:Ot},{path:"/forgotPassword",name:"Forgot",component:Pt},{path:"/resetPassword/:token",name:"Reset",component:$t}],Vt=new I["a"]({mode:"history",base:"/",routes:It}),Lt=Vt,Mt=n("f309");a["a"].use(Mt["a"]);var Ht=new Mt["a"]({icons:{iconfont:"mdiSvg"},theme:{dark:!1}}),Ut=n("2b27"),Wt=n.n(Ut),Ft=n("00e7"),Ct=n.n(Ft);a["a"].use(Wt.a),a["a"].use(Ct.a),n("66c6"),Lt.beforeEach((function(t,e,n){!i["a"].getters["auth/authenticated"]||"Login"!==t.name&&"Signup"!==t.name&&"Reset"!==t.name&&"Forgot"!==t.name?n():n(!1),i["a"].getters["auth/authenticated"]||"Login"===t.name||"Signup"===t.name||"Run"===t.name||"Home"===t.name||"About"===t.name||"Reset"===t.name||"Forgot"===t.name?n():n({name:"Home"})})),a["a"].config.productionTip=!1,i["a"].dispatch("auth/attempt",localStorage.getItem("token")).then((function(){new a["a"]({store:i["a"],router:Lt,vuetify:Ht,render:function(t){return t($)}}).$mount("#app")}))},"66c6":function(t,e,n){"use strict";n.r(e);var a=n("4360"),o=n("bc3a"),r=n.n(o);a["a"].subscribe((function(t){switch(t.type){case"auth/SET_TOKEN":t.payload?(r.a.defaults.headers.common["Authorization"]="Bearer ".concat(t.payload),localStorage.setItem("token",t.payload)):(r.a.defaults.headers.common["Authorization"]=null,localStorage.removeItem("token"));break}}))},"86c7":function(t,e,n){}});
//# sourceMappingURL=app.aa021364.js.map