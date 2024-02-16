import{c as $}from"./storeRpcSettings.CTg7fdRt.js";import{A as T,c as S,b as w,a as k,d as B}from"./AbiParamsTable.DCGQsMD1.js";import{s as I,l as h,i as A,f as P,I as y,a as D,d as F,L as C}from"./scheduler.CDAxP_dO.js";import{S as E,i as H,g as N,d as m,b as z,t as u,c as d,a as g,m as p,e as b,f as G}from"./index.C5tY04hK.js";import{P as v}from"./CommonItemMember.CRanTEMj.js";import{s as x,B as L,d as R,a as W}from"./stores.C9_zYEKn.js";import{o as O,B as q}from"./BaseDialog.CrHyXgs1.js";function M(r){let e,a;return e=new L({props:{text:r[0].length.toString(),textSize:r[4],colorCategoryFront:R.gridCell}}),{c(){d(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,o){p(e,t,o),a=!0},p(t,o){const s={};o&1&&(s.text=t[0].length.toString()),e.$set(s)},i(t){a||(u(e.$$.fragment,t),a=!0)},o(t){m(e.$$.fragment,t),a=!1},d(t){b(e,t)}}}function j(r){let e,a,t,o,s;e=new W({props:{size:r[4],label:r[0].length.toString(),noPadding:!0,hoverEffect:!1,shadowEffect:!1,colorCategoryFront:"interactive"}}),e.$on("click",r[5]);function i(n){r[6](n)}let c={headerText:`${r[1]}`,headerIconName:void 0,$$slots:{dialogBody:[Q]},$$scope:{ctx:r}};return r[3]!==void 0&&(c.dialogElement=r[3]),t=new q({props:c}),y.push(()=>G(t,"dialogElement",i)),{c(){d(e.$$.fragment),a=D(),d(t.$$.fragment)},l(n){g(e.$$.fragment,n),a=F(n),g(t.$$.fragment,n)},m(n,l){p(e,n,l),A(n,a,l),p(t,n,l),s=!0},p(n,l){const f={};l&1&&(f.label=n[0].length.toString()),e.$set(f);const _={};l&2&&(_.headerText=`${n[1]}`),l&135&&(_.$$scope={dirty:l,ctx:n}),!o&&l&8&&(o=!0,_.dialogElement=n[3],C(()=>o=!1)),t.$set(_)},i(n){s||(u(e.$$.fragment,n),u(t.$$.fragment,n),s=!0)},o(n){m(e.$$.fragment,n),m(t.$$.fragment,n),s=!1},d(n){n&&P(a),b(e,n),b(t,n)}}}function J(r){let e,a;return e=new T({props:{paramTypes:r[0],dialogHeaderText:r[1],showInputIndexedField:r[2]}}),{c(){d(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,o){p(e,t,o),a=!0},p(t,o){const s={};o&1&&(s.paramTypes=t[0]),o&2&&(s.dialogHeaderText=t[1]),o&4&&(s.showInputIndexedField=t[2]),e.$set(s)},i(t){a||(u(e.$$.fragment,t),a=!0)},o(t){m(e.$$.fragment,t),a=!1},d(t){b(e,t)}}}function Q(r){let e,a;return e=new v({props:{hasMultipulTabs:!1,slot:"dialogBody",$$slots:{PageWrapperContentBody:[J]},$$scope:{ctx:r}}}),{c(){d(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,o){p(e,t,o),a=!0},p(t,o){const s={};o&135&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)},i(t){a||(u(e.$$.fragment,t),a=!0)},o(t){m(e.$$.fragment,t),a=!1},d(t){b(e,t)}}}function U(r){let e,a,t,o;const s=[j,M],i=[];function c(n,l){return n[0].length>0?0:1}return e=c(r),a=i[e]=s[e](r),{c(){a.c(),t=h()},l(n){a.l(n),t=h()},m(n,l){i[e].m(n,l),A(n,t,l),o=!0},p(n,[l]){let f=e;e=c(n),e===f?i[e].p(n,l):(N(),m(i[f],1,1,()=>{i[f]=null}),z(),a=i[e],a?a.p(n,l):(a=i[e]=s[e](n),a.c()),u(a,1),a.m(t.parentNode,t))},i(n){o||(u(a),o=!0)},o(n){m(a),o=!1},d(n){n&&P(t),i[e].d(n)}}}function V(r,e,a){let{paramTypes:t}=e,{dialogHeaderText:o}=e,{showAbiParamsInputIndexedField:s=!1}=e;const i=x.abiParamsTable;let c;function n(){O(c)}function l(f){c=f,a(3,c)}return r.$$set=f=>{"paramTypes"in f&&a(0,t=f.paramTypes),"dialogHeaderText"in f&&a(1,o=f.dialogHeaderText),"showAbiParamsInputIndexedField"in f&&a(2,s=f.showAbiParamsInputIndexedField)},[t,o,s,c,i,n,l]}class X extends E{constructor(e){super(),H(this,e,V,U,I,{paramTypes:0,dialogHeaderText:1,showAbiParamsInputIndexedField:2})}}const Y=(r,e,a)=>({headerName:`Num of ${$(e)}`,sortable:!0,editable:!1,cellStyle:S("end"),columnGroupShow:void 0,valueGetter:t=>Z(t,r),cellRenderer:K(r,e,a)}),Z=(r,e)=>w(r,e).length,K=(r,e,a)=>k((t,o)=>{o.data&&new X({target:t.eGui,props:{paramTypes:w(o,r),dialogHeaderText:`Params of ${$(e)}`,showAbiParamsInputIndexedField:a}})}),ee=(r,e,a,t)=>{const o=[];for(let s=0;s<=a-1;s++){const i=te(e,s),c={headerName:i,columnGroupShow:"open",children:B(r,t,i,s)};o.push(c)}return o},te=(r,e)=>`${$(r.slice(0,-1))} ${e+1}`,fe=(r,e,a,t)=>({headerName:$(e),columnGroupShow:"open",openByDefault:!1,children:[Y(r,e,t),...ee(r,e,a,t)]});export{fe as c};
