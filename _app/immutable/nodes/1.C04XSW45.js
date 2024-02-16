import{s as O,e as S,a as B,c as x,b as C,d as D,f as $,g as _,i as H,h as v,j as P,k as N,n as A}from"../chunks/scheduler.CDAxP_dO.js";import{S as G,i as J,c as k,a as M,m as z,t as h,b as K,d as b,e as I,g as Q}from"../chunks/index.C5tY04hK.js";import{B as F,e as U,a as R,c as w,b as E,d as T,p as W}from"../chunks/stores.C9_zYEKn.js";import{s as X}from"../chunks/storeUserSettings.Lwb5je2J.js";function j(l,t,a){const c=l.slice();return c[5]=t[a],c}function q(l){let t,a,c,n,u,m;return a=new F({props:{textSize:"sm",text:l[5].title,appendClass:"w-16"}}),n=new F({props:{textSize:"md",text:l[5].value??"No Message",fontMono:!!l[5].value,italic:!l[5].value}}),{c(){t=S("div"),k(a.$$.fragment),c=B(),k(n.$$.fragment),u=B(),this.h()},l(i){t=x(i,"DIV",{class:!0});var f=C(t);M(a.$$.fragment,f),c=D(f),M(n.$$.fragment,f),u=D(f),f.forEach($),this.h()},h(){_(t,"class",w("flex","flex-row","space-x-3"))},m(i,f){H(i,t,f),z(a,t,null),v(t,c),z(n,t,null),v(t,u),m=!0},p:A,i(i){m||(h(a.$$.fragment,i),h(n.$$.fragment,i),m=!0)},o(i){b(a.$$.fragment,i),b(n.$$.fragment,i),m=!1},d(i){i&&$(t),I(a),I(n)}}}function Y(l){let t,a,c,n,u,m,i,f,p,d;a=new F({props:{textSize:"2xl",text:"Error",colorCategoryFront:l[1],fontMono:!0}});let g=U(l[2]),r=[];for(let e=0;e<g.length;e+=1)r[e]=q(j(l,g,e));const L=e=>b(r[e],1,1,()=>{r[e]=null});return f=new R({props:{size:"md",label:"HOME",href:"/",border:!0,shadowEffect:!0,hoverEffect:!0,popupEffect:!0,colorCategoryFront:"white",colorCategoryBg:"interactive"}}),{c(){t=S("div"),k(a.$$.fragment),c=B(),n=S("div");for(let e=0;e<r.length;e+=1)r[e].c();m=B(),i=S("div"),k(f.$$.fragment),this.h()},l(e){t=x(e,"DIV",{class:!0});var o=C(t);M(a.$$.fragment,o),c=D(o),n=x(o,"DIV",{class:!0});var s=C(n);for(let V=0;V<r.length;V+=1)r[V].l(s);s.forEach($),m=D(o),i=x(o,"DIV",{class:!0});var y=C(i);M(f.$$.fragment,y),y.forEach($),o.forEach($),this.h()},h(){_(n,"class",u=w("flex","flex-col","border-y",E[l[0]][l[1]].border,"pl-3","")),_(i,"class","self-center pt-3"),_(t,"class",p=w("flex","flex-col","w-fit","items-start","space-y-3","pt-3",E[l[0]][l[1]].bg,""))},m(e,o){H(e,t,o),z(a,t,null),v(t,c),v(t,n);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(n,null);v(t,m),v(t,i),z(f,i,null),d=!0},p(e,[o]){if(o&4){g=U(e[2]);let s;for(s=0;s<g.length;s+=1){const y=j(e,g,s);r[s]?(r[s].p(y,o),h(r[s],1)):(r[s]=q(y),r[s].c(),h(r[s],1),r[s].m(n,null))}for(Q(),s=g.length;s<r.length;s+=1)L(s);K()}(!d||o&1&&u!==(u=w("flex","flex-col","border-y",E[e[0]][e[1]].border,"pl-3","")))&&_(n,"class",u),(!d||o&1&&p!==(p=w("flex","flex-col","w-fit","items-start","space-y-3","pt-3",E[e[0]][e[1]].bg,"")))&&_(t,"class",p)},i(e){if(!d){h(a.$$.fragment,e);for(let o=0;o<g.length;o+=1)h(r[o]);h(f.$$.fragment,e),d=!0}},o(e){b(a.$$.fragment,e),r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)b(r[o]);b(f.$$.fragment,e),d=!1},d(e){e&&$(t),I(a),P(r,e),I(f)}}}function Z(l,t,a){var f;let c,n;N(l,W,p=>a(4,c=p)),N(l,X,p=>a(3,n=p));let u;const m=T.errorPage,i=[{title:"Status",value:c.status.toString()},{title:"Message",value:(f=c.error)==null?void 0:f.message}];return l.$$.update=()=>{l.$$.dirty&8&&a(0,u=n.themeColor)},[u,m,i,n]}class ae extends G{constructor(t){super(),J(this,t,Z,Y,O,{})}}export{ae as component};
