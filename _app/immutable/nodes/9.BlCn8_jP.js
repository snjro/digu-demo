import{_ as y}from"../chunks/_page.z8Ww-fXT.js";import{s as A,I as b,L as h,k as L}from"../chunks/scheduler.CDAxP_dO.js";import{S as M,i as z,f as F,c as D,a as w,m as $,t as C,d as N,e as I}from"../chunks/index.C5tY04hK.js";import{c as W,g as G,B as P,s as j,p as x}from"../chunks/stores.DaGaFg9x.js";import{T as k,j as E}from"../chunks/CommonItemMember.DAycnk9o.js";import{B as v}from"../chunks/BaseGrid.BuoUMf3S.js";import{b as R}from"../chunks/storeRpcSettings.BR5-jVLy.js";import"../chunks/dbBase.Dq0K4QQ7.js";import"../chunks/storeSyncStatus.BvxaFNyT.js";import"../chunks/dbSettings.DpToC6M0.js";/* empty css                    */import{a as m}from"../chunks/AbiParamsTable.DZmEXRTZ.js";import{c as U}from"../chunks/columnDefStateMutability.CG5bq9wk.js";import{c as O}from"../chunks/columnDefAbiParams.BCYYt__L.js";import{a as q}from"../chunks/functionNameHandler.DESEVfX8.js";function K({params:n}){return V({params:n})}function V({params:n}){const o=y({params:n}),e=o.targetContract.functions.abiFragments;return{...o,targetFunctionAbiFragments:e}}const St=Object.freeze(Object.defineProperty({__proto__:null,load:K},Symbol.toStringTag,{value:"Module"})),H=W(""),g=!0,d=!1,p=j.grid,J=n=>({headerName:"Basic",children:[{headerName:"Function Name",sortable:g,editable:d,cellClass:H,columnGroupShow:void 0,valueGetter:e=>e.data?e.data.functionName:"",cellRenderer:m((e,a)=>{a.data&&new G({target:e.eGui,props:{text:a.data.functionName,href:`${n}${a.data.functionName}${a.data.functionSelectorWithSplitter}#${R(k[0])}`,textSize:p,openNewTab:!1,prefixIcon:{name:"function",size:p}}})})},U("functionStateMutability"),{headerName:"Function Selector",sortable:g,editable:d,cellClass:"flex justify-center",columnGroupShow:"open",valueGetter:e=>e.data?e.data.functionSelector:"",cellRenderer:m((e,a)=>{a.data&&new P({target:e.eGui,props:{text:a.data.functionSelector,textSize:p,fontMono:!0,showCopyButton:!0}})})}]}),Q=n=>O("functionInputs","inputs",n,!1),X=n=>O("functionOutputs","outputs",n,!1),_=(n,o,e)=>[J(n),Q(o),X(e)],Y=n=>{const o=[];for(const e of n){const a={functionName:e.name,functionStateMutability:e.stateMutability,functionSelector:e.selector,functionInputs:e.inputs,functionOutputs:e.outputs,functionSelectorWithSplitter:q(e)};o.push(a)}return o};function Z(n){let o,e,a;function u(t){n[7](t)}let c={rows:n[1],paramColumnDefs:_(n[3].url.pathname,n[4](),n[5]()),exportFilePrefix:"functions",hasMultipulTabs:!1};return n[2]!==void 0&&(c.isFullScreen=n[2]),o=new v({props:c}),b.push(()=>F(o,"isFullScreen",u)),{c(){D(o.$$.fragment)},l(t){w(o.$$.fragment,t)},m(t,s){$(o,t,s),a=!0},p(t,s){const i={};s&2&&(i.rows=t[1]),s&8&&(i.paramColumnDefs=_(t[3].url.pathname,t[4](),t[5]())),!e&&s&4&&(e=!0,i.isFullScreen=t[2],h(()=>e=!1)),o.$set(i)},i(t){a||(C(o.$$.fragment,t),a=!0)},o(t){N(o.$$.fragment,t),a=!1},d(t){I(o,t)}}}function tt(n){let o,e,a;function u(t){n[8](t)}let c={titleProps:{titleText:n[0],titleCategoryLabelText:S},$$slots:{PageWrapperContent:[Z]},$$scope:{ctx:n}};return n[2]!==void 0&&(c.isFullScreen=n[2]),o=new E({props:c}),b.push(()=>F(o,"isFullScreen",u)),{c(){D(o.$$.fragment)},l(t){w(o.$$.fragment,t)},m(t,s){$(o,t,s),a=!0},p(t,[s]){const i={};s&1&&(i.titleProps={titleText:t[0],titleCategoryLabelText:S}),s&526&&(i.$$scope={dirty:s,ctx:t}),!e&&s&4&&(e=!0,i.isFullScreen=t[2],h(()=>e=!1)),o.$set(i)},i(t){a||(C(o.$$.fragment,t),a=!0)},o(t){N(o.$$.fragment,t),a=!1},d(t){I(o,t)}}}const S="Functions";function et(n,o,e){let a;L(n,x,r=>e(3,a=r));let{data:u}=o,c,t=[];const s=()=>{let r=0;return t.forEach(f=>{f.functionInputs.length>r&&(r=f.functionInputs.length)}),r},i=()=>{let r=0;return t.forEach(f=>{f.functionOutputs.length>r&&(r=f.functionOutputs.length)}),r};let l=!1;function T(r){l=r,e(2,l)}function B(r){l=r,e(2,l)}return n.$$set=r=>{"data"in r&&e(6,u=r.data)},n.$$.update=()=>{n.$$.dirty&64&&e(0,c=u.targetContract.name),n.$$.dirty&64&&e(1,t=Y(u.targetFunctionAbiFragments))},[c,t,l,a,s,i,u,T,B]}class bt extends M{constructor(o){super(),z(this,o,et,tt,A,{data:6})}}export{bt as component,St as universal};
