import{a as P,b as B}from"./chunk-7SFB24EJ.js";import{a as c}from"./chunk-FZFX6HZC.js";import{b as O}from"./chunk-PLOAZ5ER.js";import{C as p,D as l,I as m,K as d,L as o,M as n,N as u,O as x,Q as C,R as b,U as a,ea as D,ga as R,ia as T,j as L,ja as E,k,ka as H,la as j,na as F,o as y,p as h,pa as N,qa as V,r as M,ra as A,s as v,sa as I,t as g,ta as q,w as S,wa as z,x as _}from"./chunk-JJWHNU3G.js";function Z(t,e){t&1&&(o(0,"li",7)(1,"a",12),a(2,"Recipes"),n()())}function $(t,e){t&1&&(o(0,"li",7)(1,"a",13),a(2,"Login"),n()())}function ee(t,e){if(t&1){let f=x();o(0,"a",14),C("click",function(){S(f);let i=b();return _(i.onLogout())}),a(1,"Logout"),n()}}function te(t,e){if(t&1){let f=x();o(0,"li",15)(1,"a",16),a(2,"Manage "),u(3,"span",17),n(),o(4,"ul",18)(5,"li")(6,"a",14),C("click",function(){S(f);let i=b();return _(i.onSaveData())}),a(7,"Save Data"),n()(),o(8,"li")(9,"a",14),C("click",function(){S(f);let i=b();return _(i.onFetchData())}),a(10,"Fetch Data"),n()()()()}}var J=(()=>{let e=class e{constructor(r,i){this.dataStorageService=r,this.authService=i,this.isLoggedIn=!1}ngOnInit(){this.authSub=this.authService.user.subscribe(r=>{this.isLoggedIn=!!r})}ngOnDestroy(){this.authSub.unsubscribe()}onSaveData(){this.dataStorageService.storeRecipes()}onFetchData(){this.dataStorageService.fetchRecipes().subscribe()}onLogout(){this.authService.logout()}};e.\u0275fac=function(i){return new(i||e)(l(B),l(c))},e.\u0275cmp=v({type:e,selectors:[["app-header"]],decls:16,vars:4,consts:[[1,"navbar","navbar-default"],[1,"container-fluid"],[1,"navbar-header"],["routerLink","/",1,"navbar-brand"],[1,"collapse","navbar-collapse"],[1,"nav","navbar-nav"],["routerLinkActive","active",4,"ngIf"],["routerLinkActive","active"],["routerLink","/shopping-list"],[1,"nav","navbar-nav","navbar-right"],["style","cursor: pointer",3,"click",4,"ngIf"],["class","dropdown","appDropdown","",4,"ngIf"],["routerLink","/recipes"],["routerLink","/auth"],[2,"cursor","pointer",3,"click"],["appDropdown","",1,"dropdown"],["role","button",1,"dropdown-toggle",2,"cursor","pointer"],[1,"caret"],[1,"dropdown-menu"]],template:function(i,s){i&1&&(o(0,"nav",0)(1,"div",1)(2,"div",2)(3,"a",3),a(4,"Recipe Book"),n()(),o(5,"div",4)(6,"ul",5),d(7,Z,3,0,"li",6),o(8,"li",7)(9,"a",8),a(10,"Shopping List"),n()()(),o(11,"ul",9),d(12,$,3,0,"li",6),o(13,"li"),d(14,ee,2,0,"a",10),n(),d(15,te,11,0,"li",11),n()()()()),i&2&&(p(7),m("ngIf",s.isLoggedIn),p(5),m("ngIf",!s.isLoggedIn),p(2),m("ngIf",s.isLoggedIn),p(),m("ngIf",s.isLoggedIn))},dependencies:[D,N,V,q],encapsulation:2});let t=e;return t})();var K=(()=>{let e=class e{constructor(r){this.authService=r}ngOnInit(){this.authService.autoLogin()}};e.\u0275fac=function(i){return new(i||e)(l(c))},e.\u0275cmp=v({type:e,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-md-12"]],template:function(i,s){i&1&&(u(0,"app-header"),o(1,"div",0)(2,"div",1)(3,"div",2),u(4,"router-outlet"),n()()())},dependencies:[F,J]});let t=e;return t})();var re=[{path:"",redirectTo:"/recipes",pathMatch:"full"},{path:"recipes",loadChildren:()=>import("./chunk-QYBHIHEP.js").then(t=>t.RecipesModule)},{path:"auth",loadChildren:()=>import("./chunk-BVGYOTKA.js").then(t=>t.AuthModule)},{path:"shopping-list",loadChildren:()=>import("./chunk-YV56V56H.js").then(t=>t.ShoppingListModule)}],Q=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=g({type:e}),e.\u0275inj=h({imports:[I.forRoot(re,{preloadingStrategy:A}),I]});let t=e;return t})();var U=(()=>{let e=class e{constructor(r){this.authService=r}intercept(r,i){return this.authService.user.pipe(L(1),k(s=>{if(!s)return i.handle(r);let X=r.clone({params:new R().set("auth",s.token)});return i.handle(X)}))}};e.\u0275fac=function(i){return new(i||e)(M(c))},e.\u0275prov=y({token:e,factory:e.\u0275fac});let t=e;return t})();var W=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=g({type:e,bootstrap:[K]}),e.\u0275inj=h({providers:[O,P,{provide:T,useClass:U,multi:!0}],imports:[j,E,Q,z]});let t=e;return t})();H().bootstrapModule(W).catch(t=>console.error(t));
