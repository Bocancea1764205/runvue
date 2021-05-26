(function(t){function e(e){for(var r,i,u=e[0],s=e[1],c=e[2],l=0,p=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);m&&m(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8efe9c95"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(t);var c=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var m=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4360:function(t,e,n){"use strict";var r=n("2b0e"),o=n("2f62"),a=n("1da1"),i=(n("d3b7"),n("96cf"),n("bc3a")),u=n.n(i),s={namespaced:!0,state:{token:null,user:null},getters:{authenticated:function(t){return t.token&&t.user},user:function(t){return t.user}},mutations:{SET_TOKEN:function(t,e){t.token=e},SET_USER:function(t,e){t.user=e}},actions:{signUp:function(t,e){return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.dispatch,n.next=3,u.a.post("api/signup",e);case 3:o=n.sent,r("attempt",o.data.jwt);case 5:case"end":return n.stop()}}),n)})))()},logIn:function(t,e){return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.dispatch,n.next=3,u.a.post("api/login",e);case 3:o=n.sent,r("attempt",o.data.jwt);case 5:case"end":return n.stop()}}),n)})))()},attempt:function(t,e){return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.commit,o=t.state,e&&r("SET_TOKEN",e),o.token){n.next=4;break}return n.abrupt("return");case 4:return n.prev=4,n.next=7,u.a.get("api");case 7:a=n.sent,r("SET_USER",a.data.user),console.log("riuscito!!!"),n.next=17;break;case 12:n.prev=12,n.t0=n["catch"](4),console.log("fail"),r("SET_TOKEN",null),r("SET_USER",null);case 17:case"end":return n.stop()}}),n,null,[[4,12]])})))()},logOut:function(t){var e=t.commit;e("SET_TOKEN",null),e("SET_USER",null)},forgotPassword:function(t,e){u.a.post("api/forgotPassword",e)},resetPassword:function(t,e){fetch("".concat(location.pathname),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e})})}}};r["a"].use(o["a"]);e["a"]=new o["a"].Store({state:{},mutations:{},actions:{},modules:{auth:s}})},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Navigation"),n("v-content",[n("router-view")],1)],1)},a=[],i=n("4360"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-app-bar",{attrs:{color:"deep-orange",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Runaton!")])],1),n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{"active-class":"deep-orange--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[n("v-list-item",{attrs:{to:"/"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("Home")])],1),n("v-list-item",{attrs:{to:"/run"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-run-fast")])],1),n("v-list-item-title",[t._v("Run")])],1),t.authenticated?n("v-list-item",{attrs:{to:"/archivio"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-text-box-multiple-outline")])],1),n("v-list-item-title",[t._v("Archivio")])],1):t._e(),t.authenticated?n("v-list-item",{attrs:{to:"/account"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account")])],1),n("v-list-item-title",[t._v("Account")])],1):t._e(),t.authenticated?n("v-list-item",{attrs:{to:"/about"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-information-outline")])],1),n("v-list-item-title",[t._v("About")])],1):t._e(),t.authenticated?t._e():n("v-list-item",{attrs:{to:"/signup"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account-plus")])],1),n("v-list-item-title",[t._v("Signup")])],1),t.authenticated?t._e():n("v-list-item",{attrs:{to:"/login"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account-arrow-left")])],1),n("v-list-item-title",[t._v("Login")])],1),t.authenticated?n("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logOut(e)}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-logout-variant")])],1),n("v-list-item-title",[t._v("Logout")])],1):t._e()],1)],1)],1)],1)},s=[],c=n("5530"),l=(n("b0c0"),n("ac1f"),n("5319"),n("2f62")),m={data:function(){return{drawer:!1,group:null,links:[{icon:""}]}},computed:Object(c["a"])({},Object(l["c"])({authenticated:"auth/authenticated",user:"auth/user"})),methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])({logOutAction:"auth/logOut"})),{},{logOut:function(){var t=this;this.logOutAction().then((function(){"Home"!==t.$route.name&&t.$router.replace({name:"Home"})}))}})},p=m,v=n("2877"),d=n("6544"),f=n.n(d),b=n("40dc"),h=n("5bc1"),g=n("132d"),_=n("8860"),w=n("da13"),O=n("1baa"),j=n("34c3"),x=n("5d23"),y=n("f774"),E=n("2a7f"),S=Object(v["a"])(p,u,s,!1,null,null,null),P=S.exports;f()(S,{VAppBar:b["a"],VAppBarNavIcon:h["a"],VIcon:g["a"],VList:_["a"],VListItem:w["a"],VListItemGroup:O["a"],VListItemIcon:j["a"],VListItemTitle:x["a"],VNavigationDrawer:y["a"],VToolbarTitle:E["a"]});var k={store:i["a"],name:"App",components:{Navigation:P},data:function(){return{}}},R=k,A=n("7496"),T=n("a75b"),$=Object(v["a"])(R,o,a,!1,null,null,null),N=$.exports;f()($,{VApp:A["a"],VContent:T["a"]});n("d3b7"),n("3ca3"),n("ddb0");var I,L,V,H,U=n("8c4f"),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" HOME ")])},C=[],D={name:"Home",computed:Object(c["a"])({},Object(l["c"])({authenticated:"auth/authenticated",user:"auth/user"}))},K=D,F=Object(v["a"])(K,M,C,!1,null,null,null),B=F.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.authenticated?n("div",[t._v(" Runaton username account: "+t._s(t.user.email)+" "),n("br"),t._v(" Runaton email account: "+t._s(t.user.email)+" ")]):t._e()},W=[],z={name:"Run",computed:Object(c["a"])({},Object(l["c"])({authenticated:"auth/authenticated",user:"auth/user"}))},q=z,G=Object(v["a"])(q,J,W,!1,null,null,null),Q=G.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" USERNAME:"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],attrs:{type:"text"},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}}),t._v(" "),n("br"),t._v(" EMAIL:"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{type:"text"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),n("br"),t._v(" PASSWORD:"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{type:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),n("br"),n("button",{on:{click:t.submit}},[t._v("Signup")]),n("br"),n("router-link",{attrs:{to:"/forgotPassword"}},[t._v("Password dimenticata?")]),t._v(" "),n("br"),n("router-link",{attrs:{to:"/login"}},[t._v("Hai già un account? Fai il login")]),t._v(" "),n("br"),t._v(" "+t._s(t.error)+" ")],1)},Y=[],Z={name:"Signup",data:function(){return{form:{username:"",email:"",password:""},error:""}},methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])({signUp:"auth/signUp"})),{},{submit:function(){var t=this;this.signUp(this.form).then((function(){t.$router.replace({name:"Run"})}))}})},tt=Z,et=Object(v["a"])(tt,X,Y,!1,null,null,null),nt=et.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" USERNAME: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],attrs:{type:"text"},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}}),n("br"),t._v(" PASSWORD: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{type:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),n("br"),n("button",{on:{click:t.submit}},[t._v("login")]),n("br"),n("router-link",{attrs:{to:"/forgotPassword"}},[t._v("Password dimenticata?")]),t._v(" "),n("br"),n("router-link",{attrs:{to:"/login"}},[t._v("Hai già un account? Fai il login")]),t._v(" "),n("br"),t._v(" "+t._s(t.error)+" ")],1)},ot=[],at={name:"Login",data:function(){return{form:{username:"",password:""},error:""}},methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])({logIn:"auth/logIn"})),{},{submit:function(){var t=this;this.logIn(this.form).then((function(){t.$router.replace({name:"Run"})}))}})},it=at,ut=Object(v["a"])(it,rt,ot,!1,null,null,null),st=ut.exports,ct={},lt=Object(v["a"])(ct,I,L,!1,null,null,null),mt=lt.exports,pt={},vt=Object(v["a"])(pt,V,H,!1,null,null,null),dt=vt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" EMAIL:"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{type:"text"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),n("br"),n("button",{on:{click:t.submit}},[t._v("Invia email")]),n("br"),t._v(" "+t._s(t.error)+" ")])},bt=[],ht={name:"Forgot",data:function(){return{form:{email:""},error:""}},methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])({forgotPassword:"auth/forgotPassword"})),{},{submit:function(){var t=this;this.forgotPassword(this.form).then((function(){t.$router.replace({name:"Home"})}))}})},gt=ht,_t=Object(v["a"])(gt,ft,bt,!1,null,null,null),wt=_t.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" NUOVA PASSWORD:"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{type:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),n("br"),n("button",{on:{click:t.submit}},[t._v("Resetta la password")]),n("br"),t._v(" "+t._s(t.error)+" ")])},jt=[],xt={name:"Reset",data:function(){return{form:{password:""},error:""}},methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])({resetPassword:"auth/resetPassword"})),{},{submit:function(){var t=this;this.resetPassword(this.form).then((function(){t.$router.replace({name:"Home"})}))}})},yt=xt,Et=Object(v["a"])(yt,Ot,jt,!1,null,null,null),St=Et.exports;r["a"].use(U["a"]);var Pt=[{path:"/",name:"Home",component:B},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:st},{path:"/signup",name:"Signup",component:nt},{path:"/run",name:"Run",component:Q},{path:"/archivio",name:"Archivio",component:mt},{path:"/account",name:"Account",component:dt},{path:"/forgotPassword",name:"Forgot",component:wt},{path:"/resetPassword/:token",name:"Reset",component:St}],kt=new U["a"]({mode:"history",base:"/",routes:Pt}),Rt=kt,At=n("f309");r["a"].use(At["a"]);var Tt=new At["a"]({icons:{iconfont:"mdiSvg"}}),$t=n("2b27"),Nt=n.n($t),It=n("00e7"),Lt=n.n(It);r["a"].use(Nt.a),r["a"].use(Lt.a),n("66c6"),r["a"].config.productionTip=!1,i["a"].dispatch("auth/attempt",localStorage.getItem("token")).then((function(){new r["a"]({store:i["a"],router:Rt,vuetify:Tt,render:function(t){return t(N)}}).$mount("#app")}))},"66c6":function(t,e,n){"use strict";n.r(e);var r=n("4360"),o=n("bc3a"),a=n.n(o);r["a"].subscribe((function(t){switch(t.type){case"auth/SET_TOKEN":t.payload?(a.a.defaults.headers.common["Authorization"]="Bearer ".concat(t.payload),localStorage.setItem("token",t.payload)):(a.a.defaults.headers.common["Authorization"]=null,localStorage.removeItem("token"));break}}))}});
//# sourceMappingURL=app.00a79e21.js.map