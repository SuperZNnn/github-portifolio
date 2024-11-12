function Pv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Nv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rp={exports:{}},ca={},ip={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gs=Symbol.for("react.element"),Av=Symbol.for("react.portal"),Ov=Symbol.for("react.fragment"),bv=Symbol.for("react.strict_mode"),Lv=Symbol.for("react.profiler"),Dv=Symbol.for("react.provider"),Fv=Symbol.for("react.context"),jv=Symbol.for("react.forward_ref"),Mv=Symbol.for("react.suspense"),Uv=Symbol.for("react.memo"),zv=Symbol.for("react.lazy"),Td=Symbol.iterator;function $v(e){return e===null||typeof e!="object"?null:(e=Td&&e[Td]||e["@@iterator"],typeof e=="function"?e:null)}var sp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},op=Object.assign,ap={};function ai(e,t,n){this.props=e,this.context=t,this.refs=ap,this.updater=n||sp}ai.prototype.isReactComponent={};ai.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ai.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lp(){}lp.prototype=ai.prototype;function tc(e,t,n){this.props=e,this.context=t,this.refs=ap,this.updater=n||sp}var nc=tc.prototype=new lp;nc.constructor=tc;op(nc,ai.prototype);nc.isPureReactComponent=!0;var Rd=Array.isArray,up=Object.prototype.hasOwnProperty,rc={current:null},cp={key:!0,ref:!0,__self:!0,__source:!0};function dp(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)up.call(t,r)&&!cp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:gs,type:e,key:s,ref:o,props:i,_owner:rc.current}}function Bv(e,t){return{$$typeof:gs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ic(e){return typeof e=="object"&&e!==null&&e.$$typeof===gs}function Vv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pd=/\/+/g;function Ka(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vv(""+e.key):t.toString(36)}function Xs(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case gs:case Av:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ka(o,0):r,Rd(i)?(n="",e!=null&&(n=e.replace(Pd,"$&/")+"/"),Xs(i,t,n,"",function(u){return u})):i!=null&&(ic(i)&&(i=Bv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pd,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Rd(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Ka(s,a);o+=Xs(s,t,n,l,i)}else if(l=$v(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Ka(s,a++),o+=Xs(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function As(e,t,n){if(e==null)return e;var r=[],i=0;return Xs(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Hv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},Ys={transition:null},Wv={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:Ys,ReactCurrentOwner:rc};function fp(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:As,forEach:function(e,t,n){As(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return As(e,function(){t++}),t},toArray:function(e){return As(e,function(t){return t})||[]},only:function(e){if(!ic(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=ai;Y.Fragment=Ov;Y.Profiler=Lv;Y.PureComponent=tc;Y.StrictMode=bv;Y.Suspense=Mv;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wv;Y.act=fp;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=op({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=rc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)up.call(t,l)&&!cp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:gs,type:e.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(e){return e={$$typeof:Fv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Dv,_context:e},e.Consumer=e};Y.createElement=dp;Y.createFactory=function(e){var t=dp.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:jv,render:e}};Y.isValidElement=ic;Y.lazy=function(e){return{$$typeof:zv,_payload:{_status:-1,_result:e},_init:Hv}};Y.memo=function(e,t){return{$$typeof:Uv,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Ys.transition;Ys.transition={};try{e()}finally{Ys.transition=t}};Y.unstable_act=fp;Y.useCallback=function(e,t){return We.current.useCallback(e,t)};Y.useContext=function(e){return We.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return We.current.useDeferredValue(e)};Y.useEffect=function(e,t){return We.current.useEffect(e,t)};Y.useId=function(){return We.current.useId()};Y.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return We.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};Y.useRef=function(e){return We.current.useRef(e)};Y.useState=function(e){return We.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return We.current.useTransition()};Y.version="18.3.1";ip.exports=Y;var A=ip.exports;const ke=Nv(A),Kv=Pv({__proto__:null,default:ke},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv=A,Gv=Symbol.for("react.element"),Jv=Symbol.for("react.fragment"),Qv=Object.prototype.hasOwnProperty,Xv=qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yv={key:!0,ref:!0,__self:!0,__source:!0};function hp(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Qv.call(t,r)&&!Yv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Gv,type:e,key:s,ref:o,props:i,_owner:Xv.current}}ca.Fragment=Jv;ca.jsx=hp;ca.jsxs=hp;rp.exports=ca;var _=rp.exports,pp={exports:{}},ut={},mp={exports:{}},gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,U){var V=L.length;L.push(U);e:for(;0<V;){var ee=V-1>>>1,te=L[ee];if(0<i(te,U))L[ee]=U,L[V]=te,V=ee;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var U=L[0],V=L.pop();if(V!==U){L[0]=V;e:for(var ee=0,te=L.length,Wt=te>>>1;ee<Wt;){var qe=2*(ee+1)-1,At=L[qe],be=qe+1,dt=L[be];if(0>i(At,V))be<te&&0>i(dt,At)?(L[ee]=dt,L[be]=V,ee=be):(L[ee]=At,L[qe]=V,ee=qe);else if(be<te&&0>i(dt,V))L[ee]=dt,L[be]=V,ee=be;else break e}}return U}function i(L,U){var V=L.sortIndex-U.sortIndex;return V!==0?V:L.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,m=3,w=!1,y=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(L){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=L)r(u),U.sortIndex=U.expirationTime,t(l,U);else break;U=n(u)}}function S(L){if(v=!1,p(L),!y)if(n(l)!==null)y=!0,J(C);else{var U=n(u);U!==null&&ie(S,U.startTime-L)}}function C(L,U){y=!1,v&&(v=!1,h(b),b=-1),w=!0;var V=m;try{for(p(U),d=n(l);d!==null&&(!(d.expirationTime>U)||L&&!_e());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,m=d.priorityLevel;var te=ee(d.expirationTime<=U);U=e.unstable_now(),typeof te=="function"?d.callback=te:d===n(l)&&r(l),p(U)}else r(l);d=n(l)}if(d!==null)var Wt=!0;else{var qe=n(u);qe!==null&&ie(S,qe.startTime-U),Wt=!1}return Wt}finally{d=null,m=V,w=!1}}var R=!1,T=null,b=-1,K=5,z=-1;function _e(){return!(e.unstable_now()-z<K)}function H(){if(T!==null){var L=e.unstable_now();z=L;var U=!0;try{U=T(!0,L)}finally{U?G():(R=!1,T=null)}}else R=!1}var G;if(typeof f=="function")G=function(){f(H)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,B=D.port2;D.port1.onmessage=H,G=function(){B.postMessage(null)}}else G=function(){x(H,0)};function J(L){T=L,R||(R=!0,G())}function ie(L,U){b=x(function(){L(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,J(C))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(m){case 1:case 2:case 3:var U=3;break;default:U=m}var V=m;m=U;try{return L()}finally{m=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,U){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var V=m;m=L;try{return U()}finally{m=V}},e.unstable_scheduleCallback=function(L,U,V){var ee=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ee+V:ee):V=ee,L){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=V+te,L={id:c++,callback:U,priorityLevel:L,startTime:V,expirationTime:te,sortIndex:-1},V>ee?(L.sortIndex=V,t(u,L),n(l)===null&&L===n(u)&&(v?(h(b),b=-1):v=!0,ie(S,V-ee))):(L.sortIndex=te,t(l,L),y||w||(y=!0,J(C))),L},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(L){var U=m;return function(){var V=m;m=U;try{return L.apply(this,arguments)}finally{m=V}}}})(gp);mp.exports=gp;var Zv=mp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0=A,lt=Zv;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yp=new Set,Wi={};function vr(e,t){qr(e,t),qr(e+"Capture",t)}function qr(e,t){for(Wi[e]=t,e=0;e<t.length;e++)yp.add(t[e])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jl=Object.prototype.hasOwnProperty,t0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nd={},Ad={};function n0(e){return jl.call(Ad,e)?!0:jl.call(Nd,e)?!1:t0.test(e)?Ad[e]=!0:(Nd[e]=!0,!1)}function r0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function i0(e,t,n,r){if(t===null||typeof t>"u"||r0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ke(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var sc=/[\-:]([a-z])/g;function oc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sc,oc);Fe[t]=new Ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sc,oc);Fe[t]=new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sc,oc);Fe[t]=new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function ac(e,t,n,r){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(i0(t,n,i,r)&&(n=null),r||i===null?n0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var hn=e0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Os=Symbol.for("react.element"),kr=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),Ml=Symbol.for("react.profiler"),vp=Symbol.for("react.provider"),wp=Symbol.for("react.context"),uc=Symbol.for("react.forward_ref"),Ul=Symbol.for("react.suspense"),zl=Symbol.for("react.suspense_list"),cc=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),_p=Symbol.for("react.offscreen"),Od=Symbol.iterator;function yi(e){return e===null||typeof e!="object"?null:(e=Od&&e[Od]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,qa;function Ri(e){if(qa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qa=t&&t[1]||""}return`
`+qa+e}var Ga=!1;function Ja(e,t){if(!e||Ga)return"";Ga=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ga=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ri(e):""}function s0(e){switch(e.tag){case 5:return Ri(e.type);case 16:return Ri("Lazy");case 13:return Ri("Suspense");case 19:return Ri("SuspenseList");case 0:case 2:case 15:return e=Ja(e.type,!1),e;case 11:return e=Ja(e.type.render,!1),e;case 1:return e=Ja(e.type,!0),e;default:return""}}function $l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cr:return"Fragment";case kr:return"Portal";case Ml:return"Profiler";case lc:return"StrictMode";case Ul:return"Suspense";case zl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wp:return(e.displayName||"Context")+".Consumer";case vp:return(e._context.displayName||"Context")+".Provider";case uc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cc:return t=e.displayName||null,t!==null?t:$l(e.type)||"Memo";case vn:t=e._payload,e=e._init;try{return $l(e(t))}catch{}}return null}function o0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $l(t);case 8:return t===lc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function a0(e){var t=Sp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bs(e){e._valueTracker||(e._valueTracker=a0(e))}function xp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Sp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Eo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bl(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ep(e,t){t=t.checked,t!=null&&ac(e,"checked",t,!1)}function Vl(e,t){Ep(e,t);var n=Un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hl(e,t.type,Un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ld(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hl(e,t,n){(t!=="number"||Eo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pi=Array.isArray;function jr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Dd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Pi(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Un(n)}}function kp(e,t){var n=Un(t.value),r=Un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ls,Ip=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ls=Ls||document.createElement("div"),Ls.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ls.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ki(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},l0=["Webkit","ms","Moz","O"];Object.keys(bi).forEach(function(e){l0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),bi[t]=bi[e]})});function Tp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||bi.hasOwnProperty(e)&&bi[e]?(""+t).trim():t+"px"}function Rp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Tp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var u0=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ql(e,t){if(t){if(u0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jl=null;function dc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ql=null,Mr=null,Ur=null;function jd(e){if(e=ws(e)){if(typeof Ql!="function")throw Error(P(280));var t=e.stateNode;t&&(t=ma(t),Ql(e.stateNode,e.type,t))}}function Pp(e){Mr?Ur?Ur.push(e):Ur=[e]:Mr=e}function Np(){if(Mr){var e=Mr,t=Ur;if(Ur=Mr=null,jd(e),t)for(e=0;e<t.length;e++)jd(t[e])}}function Ap(e,t){return e(t)}function Op(){}var Qa=!1;function bp(e,t,n){if(Qa)return e(t,n);Qa=!0;try{return Ap(e,t,n)}finally{Qa=!1,(Mr!==null||Ur!==null)&&(Op(),Np())}}function qi(e,t){var n=e.stateNode;if(n===null)return null;var r=ma(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Xl=!1;if(an)try{var vi={};Object.defineProperty(vi,"passive",{get:function(){Xl=!0}}),window.addEventListener("test",vi,vi),window.removeEventListener("test",vi,vi)}catch{Xl=!1}function c0(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Li=!1,ko=null,Co=!1,Yl=null,d0={onError:function(e){Li=!0,ko=e}};function f0(e,t,n,r,i,s,o,a,l){Li=!1,ko=null,c0.apply(d0,arguments)}function h0(e,t,n,r,i,s,o,a,l){if(f0.apply(this,arguments),Li){if(Li){var u=ko;Li=!1,ko=null}else throw Error(P(198));Co||(Co=!0,Yl=u)}}function wr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Md(e){if(wr(e)!==e)throw Error(P(188))}function p0(e){var t=e.alternate;if(!t){if(t=wr(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Md(i),e;if(s===r)return Md(i),t;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Dp(e){return e=p0(e),e!==null?Fp(e):null}function Fp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fp(e);if(t!==null)return t;e=e.sibling}return null}var jp=lt.unstable_scheduleCallback,Ud=lt.unstable_cancelCallback,m0=lt.unstable_shouldYield,g0=lt.unstable_requestPaint,ye=lt.unstable_now,y0=lt.unstable_getCurrentPriorityLevel,fc=lt.unstable_ImmediatePriority,Mp=lt.unstable_UserBlockingPriority,Io=lt.unstable_NormalPriority,v0=lt.unstable_LowPriority,Up=lt.unstable_IdlePriority,da=null,zt=null;function w0(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(da,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:x0,_0=Math.log,S0=Math.LN2;function x0(e){return e>>>=0,e===0?32:31-(_0(e)/S0|0)|0}var Ds=64,Fs=4194304;function Ni(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function To(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ni(a):(s&=o,s!==0&&(r=Ni(s)))}else o=n&~i,o!==0?r=Ni(o):s!==0&&(r=Ni(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ct(t),i=1<<n,r|=e[n],t&=~i;return r}function E0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Ct(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=E0(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zp(){var e=Ds;return Ds<<=1,!(Ds&4194240)&&(Ds=64),e}function Xa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ys(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=n}function C0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ct(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function hc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var re=0;function $p(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bp,pc,Vp,Hp,Wp,eu=!1,js=[],Pn=null,Nn=null,An=null,Gi=new Map,Ji=new Map,_n=[],I0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zd(e,t){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":Gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ji.delete(t.pointerId)}}function wi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ws(t),t!==null&&pc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function T0(e,t,n,r,i){switch(t){case"focusin":return Pn=wi(Pn,e,t,n,r,i),!0;case"dragenter":return Nn=wi(Nn,e,t,n,r,i),!0;case"mouseover":return An=wi(An,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Gi.set(s,wi(Gi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ji.set(s,wi(Ji.get(s)||null,e,t,n,r,i)),!0}return!1}function Kp(e){var t=Xn(e.target);if(t!==null){var n=wr(t);if(n!==null){if(t=n.tag,t===13){if(t=Lp(n),t!==null){e.blockedOn=t,Wp(e.priority,function(){Vp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=tu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jl=r,n.target.dispatchEvent(r),Jl=null}else return t=ws(n),t!==null&&pc(t),e.blockedOn=n,!1;t.shift()}return!0}function $d(e,t,n){Zs(e)&&n.delete(t)}function R0(){eu=!1,Pn!==null&&Zs(Pn)&&(Pn=null),Nn!==null&&Zs(Nn)&&(Nn=null),An!==null&&Zs(An)&&(An=null),Gi.forEach($d),Ji.forEach($d)}function _i(e,t){e.blockedOn===t&&(e.blockedOn=null,eu||(eu=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,R0)))}function Qi(e){function t(i){return _i(i,e)}if(0<js.length){_i(js[0],e);for(var n=1;n<js.length;n++){var r=js[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pn!==null&&_i(Pn,e),Nn!==null&&_i(Nn,e),An!==null&&_i(An,e),Gi.forEach(t),Ji.forEach(t),n=0;n<_n.length;n++)r=_n[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_n.length&&(n=_n[0],n.blockedOn===null);)Kp(n),n.blockedOn===null&&_n.shift()}var zr=hn.ReactCurrentBatchConfig,Ro=!0;function P0(e,t,n,r){var i=re,s=zr.transition;zr.transition=null;try{re=1,mc(e,t,n,r)}finally{re=i,zr.transition=s}}function N0(e,t,n,r){var i=re,s=zr.transition;zr.transition=null;try{re=4,mc(e,t,n,r)}finally{re=i,zr.transition=s}}function mc(e,t,n,r){if(Ro){var i=tu(e,t,n,r);if(i===null)al(e,t,r,Po,n),zd(e,r);else if(T0(i,e,t,n,r))r.stopPropagation();else if(zd(e,r),t&4&&-1<I0.indexOf(e)){for(;i!==null;){var s=ws(i);if(s!==null&&Bp(s),s=tu(e,t,n,r),s===null&&al(e,t,r,Po,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else al(e,t,r,null,n)}}var Po=null;function tu(e,t,n,r){if(Po=null,e=dc(r),e=Xn(e),e!==null)if(t=wr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Po=e,null}function qp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y0()){case fc:return 1;case Mp:return 4;case Io:case v0:return 16;case Up:return 536870912;default:return 16}default:return 16}}var In=null,gc=null,eo=null;function Gp(){if(eo)return eo;var e,t=gc,n=t.length,r,i="value"in In?In.value:In.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return eo=i.slice(e,1<r?1-r:void 0)}function to(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ms(){return!0}function Bd(){return!1}function ct(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ms:Bd,this.isPropagationStopped=Bd,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ms)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ms)},persist:function(){},isPersistent:Ms}),t}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yc=ct(li),vs=pe({},li,{view:0,detail:0}),A0=ct(vs),Ya,Za,Si,fa=pe({},vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Si&&(Si&&e.type==="mousemove"?(Ya=e.screenX-Si.screenX,Za=e.screenY-Si.screenY):Za=Ya=0,Si=e),Ya)},movementY:function(e){return"movementY"in e?e.movementY:Za}}),Vd=ct(fa),O0=pe({},fa,{dataTransfer:0}),b0=ct(O0),L0=pe({},vs,{relatedTarget:0}),el=ct(L0),D0=pe({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),F0=ct(D0),j0=pe({},li,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),M0=ct(j0),U0=pe({},li,{data:0}),Hd=ct(U0),z0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=B0[e])?!!t[e]:!1}function vc(){return V0}var H0=pe({},vs,{key:function(e){if(e.key){var t=z0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=to(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(e){return e.type==="keypress"?to(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?to(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),W0=ct(H0),K0=pe({},fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wd=ct(K0),q0=pe({},vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),G0=ct(q0),J0=pe({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q0=ct(J0),X0=pe({},fa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Y0=ct(X0),Z0=[9,13,27,32],wc=an&&"CompositionEvent"in window,Di=null;an&&"documentMode"in document&&(Di=document.documentMode);var ew=an&&"TextEvent"in window&&!Di,Jp=an&&(!wc||Di&&8<Di&&11>=Di),Kd=" ",qd=!1;function Qp(e,t){switch(e){case"keyup":return Z0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ir=!1;function tw(e,t){switch(e){case"compositionend":return Xp(t);case"keypress":return t.which!==32?null:(qd=!0,Kd);case"textInput":return e=t.data,e===Kd&&qd?null:e;default:return null}}function nw(e,t){if(Ir)return e==="compositionend"||!wc&&Qp(e,t)?(e=Gp(),eo=gc=In=null,Ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jp&&t.locale!=="ko"?null:t.data;default:return null}}var rw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rw[e.type]:t==="textarea"}function Yp(e,t,n,r){Pp(r),t=No(t,"onChange"),0<t.length&&(n=new yc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fi=null,Xi=null;function iw(e){um(e,0)}function ha(e){var t=Pr(e);if(xp(t))return e}function sw(e,t){if(e==="change")return t}var Zp=!1;if(an){var tl;if(an){var nl="oninput"in document;if(!nl){var Jd=document.createElement("div");Jd.setAttribute("oninput","return;"),nl=typeof Jd.oninput=="function"}tl=nl}else tl=!1;Zp=tl&&(!document.documentMode||9<document.documentMode)}function Qd(){Fi&&(Fi.detachEvent("onpropertychange",em),Xi=Fi=null)}function em(e){if(e.propertyName==="value"&&ha(Xi)){var t=[];Yp(t,Xi,e,dc(e)),bp(iw,t)}}function ow(e,t,n){e==="focusin"?(Qd(),Fi=t,Xi=n,Fi.attachEvent("onpropertychange",em)):e==="focusout"&&Qd()}function aw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ha(Xi)}function lw(e,t){if(e==="click")return ha(t)}function uw(e,t){if(e==="input"||e==="change")return ha(t)}function cw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pt=typeof Object.is=="function"?Object.is:cw;function Yi(e,t){if(Pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jl.call(t,i)||!Pt(e[i],t[i]))return!1}return!0}function Xd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yd(e,t){var n=Xd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xd(n)}}function tm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nm(){for(var e=window,t=Eo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Eo(e.document)}return t}function _c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dw(e){var t=nm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tm(n.ownerDocument.documentElement,n)){if(r!==null&&_c(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Yd(n,s);var o=Yd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fw=an&&"documentMode"in document&&11>=document.documentMode,Tr=null,nu=null,ji=null,ru=!1;function Zd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ru||Tr==null||Tr!==Eo(r)||(r=Tr,"selectionStart"in r&&_c(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ji&&Yi(ji,r)||(ji=r,r=No(nu,"onSelect"),0<r.length&&(t=new yc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Tr)))}function Us(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rr={animationend:Us("Animation","AnimationEnd"),animationiteration:Us("Animation","AnimationIteration"),animationstart:Us("Animation","AnimationStart"),transitionend:Us("Transition","TransitionEnd")},rl={},rm={};an&&(rm=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function pa(e){if(rl[e])return rl[e];if(!Rr[e])return e;var t=Rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rm)return rl[e]=t[n];return e}var im=pa("animationend"),sm=pa("animationiteration"),om=pa("animationstart"),am=pa("transitionend"),lm=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,t){lm.set(e,t),vr(t,[e])}for(var il=0;il<ef.length;il++){var sl=ef[il],hw=sl.toLowerCase(),pw=sl[0].toUpperCase()+sl.slice(1);$n(hw,"on"+pw)}$n(im,"onAnimationEnd");$n(sm,"onAnimationIteration");$n(om,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(am,"onTransitionEnd");qr("onMouseEnter",["mouseout","mouseover"]);qr("onMouseLeave",["mouseout","mouseover"]);qr("onPointerEnter",["pointerout","pointerover"]);qr("onPointerLeave",["pointerout","pointerover"]);vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ai));function tf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,h0(r,t,void 0,e),e.currentTarget=null}function um(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;tf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;tf(i,a,u),s=l}}}if(Co)throw e=Yl,Co=!1,Yl=null,e}function ae(e,t){var n=t[lu];n===void 0&&(n=t[lu]=new Set);var r=e+"__bubble";n.has(r)||(cm(t,e,2,!1),n.add(r))}function ol(e,t,n){var r=0;t&&(r|=4),cm(n,e,r,t)}var zs="_reactListening"+Math.random().toString(36).slice(2);function Zi(e){if(!e[zs]){e[zs]=!0,yp.forEach(function(n){n!=="selectionchange"&&(mw.has(n)||ol(n,!1,e),ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zs]||(t[zs]=!0,ol("selectionchange",!1,t))}}function cm(e,t,n,r){switch(qp(t)){case 1:var i=P0;break;case 4:i=N0;break;default:i=mc}n=i.bind(null,t,n,e),i=void 0,!Xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function al(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}bp(function(){var u=s,c=dc(n),d=[];e:{var m=lm.get(e);if(m!==void 0){var w=yc,y=e;switch(e){case"keypress":if(to(n)===0)break e;case"keydown":case"keyup":w=W0;break;case"focusin":y="focus",w=el;break;case"focusout":y="blur",w=el;break;case"beforeblur":case"afterblur":w=el;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=b0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=G0;break;case im:case sm:case om:w=F0;break;case am:w=Q0;break;case"scroll":w=A0;break;case"wheel":w=Y0;break;case"copy":case"cut":case"paste":w=M0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Wd}var v=(t&4)!==0,x=!v&&e==="scroll",h=v?m!==null?m+"Capture":null:m;v=[];for(var f=u,p;f!==null;){p=f;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,h!==null&&(S=qi(f,h),S!=null&&v.push(es(f,S,p)))),x)break;f=f.return}0<v.length&&(m=new w(m,y,null,n,c),d.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==Jl&&(y=n.relatedTarget||n.fromElement)&&(Xn(y)||y[ln]))break e;if((w||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?Xn(y):null,y!==null&&(x=wr(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(v=Vd,S="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=Wd,S="onPointerLeave",h="onPointerEnter",f="pointer"),x=w==null?m:Pr(w),p=y==null?m:Pr(y),m=new v(S,f+"leave",w,n,c),m.target=x,m.relatedTarget=p,S=null,Xn(c)===u&&(v=new v(h,f+"enter",y,n,c),v.target=p,v.relatedTarget=x,S=v),x=S,w&&y)t:{for(v=w,h=y,f=0,p=v;p;p=Sr(p))f++;for(p=0,S=h;S;S=Sr(S))p++;for(;0<f-p;)v=Sr(v),f--;for(;0<p-f;)h=Sr(h),p--;for(;f--;){if(v===h||h!==null&&v===h.alternate)break t;v=Sr(v),h=Sr(h)}v=null}else v=null;w!==null&&nf(d,m,w,v,!1),y!==null&&x!==null&&nf(d,x,y,v,!0)}}e:{if(m=u?Pr(u):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var C=sw;else if(Gd(m))if(Zp)C=uw;else{C=aw;var R=ow}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=lw);if(C&&(C=C(e,u))){Yp(d,C,n,c);break e}R&&R(e,m,u),e==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&Hl(m,"number",m.value)}switch(R=u?Pr(u):window,e){case"focusin":(Gd(R)||R.contentEditable==="true")&&(Tr=R,nu=u,ji=null);break;case"focusout":ji=nu=Tr=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,Zd(d,n,c);break;case"selectionchange":if(fw)break;case"keydown":case"keyup":Zd(d,n,c)}var T;if(wc)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ir?Qp(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Jp&&n.locale!=="ko"&&(Ir||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ir&&(T=Gp()):(In=c,gc="value"in In?In.value:In.textContent,Ir=!0)),R=No(u,b),0<R.length&&(b=new Hd(b,e,null,n,c),d.push({event:b,listeners:R}),T?b.data=T:(T=Xp(n),T!==null&&(b.data=T)))),(T=ew?tw(e,n):nw(e,n))&&(u=No(u,"onBeforeInput"),0<u.length&&(c=new Hd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=T))}um(d,t)})}function es(e,t,n){return{instance:e,listener:t,currentTarget:n}}function No(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qi(e,n),s!=null&&r.unshift(es(e,s,i)),s=qi(e,t),s!=null&&r.push(es(e,s,i))),e=e.return}return r}function Sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nf(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=qi(n,s),l!=null&&o.unshift(es(n,l,a))):i||(l=qi(n,s),l!=null&&o.push(es(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var gw=/\r\n?/g,yw=/\u0000|\uFFFD/g;function rf(e){return(typeof e=="string"?e:""+e).replace(gw,`
`).replace(yw,"")}function $s(e,t,n){if(t=rf(t),rf(e)!==t&&n)throw Error(P(425))}function Ao(){}var iu=null,su=null;function ou(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var au=typeof setTimeout=="function"?setTimeout:void 0,vw=typeof clearTimeout=="function"?clearTimeout:void 0,sf=typeof Promise=="function"?Promise:void 0,ww=typeof queueMicrotask=="function"?queueMicrotask:typeof sf<"u"?function(e){return sf.resolve(null).then(e).catch(_w)}:au;function _w(e){setTimeout(function(){throw e})}function ll(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qi(t)}function On(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function of(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ui=Math.random().toString(36).slice(2),Mt="__reactFiber$"+ui,ts="__reactProps$"+ui,ln="__reactContainer$"+ui,lu="__reactEvents$"+ui,Sw="__reactListeners$"+ui,xw="__reactHandles$"+ui;function Xn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ln]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=of(e);e!==null;){if(n=e[Mt])return n;e=of(e)}return t}e=n,n=e.parentNode}return null}function ws(e){return e=e[Mt]||e[ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function ma(e){return e[ts]||null}var uu=[],Nr=-1;function Bn(e){return{current:e}}function ce(e){0>Nr||(e.current=uu[Nr],uu[Nr]=null,Nr--)}function oe(e,t){Nr++,uu[Nr]=e.current,e.current=t}var zn={},ze=Bn(zn),Ye=Bn(!1),dr=zn;function Gr(e,t){var n=e.type.contextTypes;if(!n)return zn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ze(e){return e=e.childContextTypes,e!=null}function Oo(){ce(Ye),ce(ze)}function af(e,t,n){if(ze.current!==zn)throw Error(P(168));oe(ze,t),oe(Ye,n)}function dm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,o0(e)||"Unknown",i));return pe({},n,r)}function bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zn,dr=ze.current,oe(ze,e),oe(Ye,Ye.current),!0}function lf(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=dm(e,t,dr),r.__reactInternalMemoizedMergedChildContext=e,ce(Ye),ce(ze),oe(ze,e)):ce(Ye),oe(Ye,n)}var Qt=null,ga=!1,ul=!1;function fm(e){Qt===null?Qt=[e]:Qt.push(e)}function Ew(e){ga=!0,fm(e)}function Vn(){if(!ul&&Qt!==null){ul=!0;var e=0,t=re;try{var n=Qt;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qt=null,ga=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(e+1)),jp(fc,Vn),i}finally{re=t,ul=!1}}return null}var Ar=[],Or=0,Lo=null,Do=0,ht=[],pt=0,fr=null,Yt=1,Zt="";function Gn(e,t){Ar[Or++]=Do,Ar[Or++]=Lo,Lo=e,Do=t}function hm(e,t,n){ht[pt++]=Yt,ht[pt++]=Zt,ht[pt++]=fr,fr=e;var r=Yt;e=Zt;var i=32-Ct(r)-1;r&=~(1<<i),n+=1;var s=32-Ct(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yt=1<<32-Ct(t)+i|n<<i|r,Zt=s+e}else Yt=1<<s|n<<i|r,Zt=e}function Sc(e){e.return!==null&&(Gn(e,1),hm(e,1,0))}function xc(e){for(;e===Lo;)Lo=Ar[--Or],Ar[Or]=null,Do=Ar[--Or],Ar[Or]=null;for(;e===fr;)fr=ht[--pt],ht[pt]=null,Zt=ht[--pt],ht[pt]=null,Yt=ht[--pt],ht[pt]=null}var ot=null,st=null,de=!1,Et=null;function pm(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function uf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,st=On(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,st=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fr!==null?{id:Yt,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,st=null,!0):!1;default:return!1}}function cu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function du(e){if(de){var t=st;if(t){var n=t;if(!uf(e,t)){if(cu(e))throw Error(P(418));t=On(n.nextSibling);var r=ot;t&&uf(e,t)?pm(r,n):(e.flags=e.flags&-4097|2,de=!1,ot=e)}}else{if(cu(e))throw Error(P(418));e.flags=e.flags&-4097|2,de=!1,ot=e}}}function cf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function Bs(e){if(e!==ot)return!1;if(!de)return cf(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ou(e.type,e.memoizedProps)),t&&(t=st)){if(cu(e))throw mm(),Error(P(418));for(;t;)pm(e,t),t=On(t.nextSibling)}if(cf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){st=On(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}st=null}}else st=ot?On(e.stateNode.nextSibling):null;return!0}function mm(){for(var e=st;e;)e=On(e.nextSibling)}function Jr(){st=ot=null,de=!1}function Ec(e){Et===null?Et=[e]:Et.push(e)}var kw=hn.ReactCurrentBatchConfig;function xi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Vs(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function df(e){var t=e._init;return t(e._payload)}function gm(e){function t(h,f){if(e){var p=h.deletions;p===null?(h.deletions=[f],h.flags|=16):p.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=Fn(h,f),h.index=0,h.sibling=null,h}function s(h,f,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<f?(h.flags|=2,f):p):(h.flags|=2,f)):(h.flags|=1048576,f)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,f,p,S){return f===null||f.tag!==6?(f=gl(p,h.mode,S),f.return=h,f):(f=i(f,p),f.return=h,f)}function l(h,f,p,S){var C=p.type;return C===Cr?c(h,f,p.props.children,S,p.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===vn&&df(C)===f.type)?(S=i(f,p.props),S.ref=xi(h,f,p),S.return=h,S):(S=lo(p.type,p.key,p.props,null,h.mode,S),S.ref=xi(h,f,p),S.return=h,S)}function u(h,f,p,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=yl(p,h.mode,S),f.return=h,f):(f=i(f,p.children||[]),f.return=h,f)}function c(h,f,p,S,C){return f===null||f.tag!==7?(f=sr(p,h.mode,S,C),f.return=h,f):(f=i(f,p),f.return=h,f)}function d(h,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=gl(""+f,h.mode,p),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Os:return p=lo(f.type,f.key,f.props,null,h.mode,p),p.ref=xi(h,null,f),p.return=h,p;case kr:return f=yl(f,h.mode,p),f.return=h,f;case vn:var S=f._init;return d(h,S(f._payload),p)}if(Pi(f)||yi(f))return f=sr(f,h.mode,p,null),f.return=h,f;Vs(h,f)}return null}function m(h,f,p,S){var C=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:a(h,f,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Os:return p.key===C?l(h,f,p,S):null;case kr:return p.key===C?u(h,f,p,S):null;case vn:return C=p._init,m(h,f,C(p._payload),S)}if(Pi(p)||yi(p))return C!==null?null:c(h,f,p,S,null);Vs(h,p)}return null}function w(h,f,p,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(p)||null,a(f,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Os:return h=h.get(S.key===null?p:S.key)||null,l(f,h,S,C);case kr:return h=h.get(S.key===null?p:S.key)||null,u(f,h,S,C);case vn:var R=S._init;return w(h,f,p,R(S._payload),C)}if(Pi(S)||yi(S))return h=h.get(p)||null,c(f,h,S,C,null);Vs(f,S)}return null}function y(h,f,p,S){for(var C=null,R=null,T=f,b=f=0,K=null;T!==null&&b<p.length;b++){T.index>b?(K=T,T=null):K=T.sibling;var z=m(h,T,p[b],S);if(z===null){T===null&&(T=K);break}e&&T&&z.alternate===null&&t(h,T),f=s(z,f,b),R===null?C=z:R.sibling=z,R=z,T=K}if(b===p.length)return n(h,T),de&&Gn(h,b),C;if(T===null){for(;b<p.length;b++)T=d(h,p[b],S),T!==null&&(f=s(T,f,b),R===null?C=T:R.sibling=T,R=T);return de&&Gn(h,b),C}for(T=r(h,T);b<p.length;b++)K=w(T,h,b,p[b],S),K!==null&&(e&&K.alternate!==null&&T.delete(K.key===null?b:K.key),f=s(K,f,b),R===null?C=K:R.sibling=K,R=K);return e&&T.forEach(function(_e){return t(h,_e)}),de&&Gn(h,b),C}function v(h,f,p,S){var C=yi(p);if(typeof C!="function")throw Error(P(150));if(p=C.call(p),p==null)throw Error(P(151));for(var R=C=null,T=f,b=f=0,K=null,z=p.next();T!==null&&!z.done;b++,z=p.next()){T.index>b?(K=T,T=null):K=T.sibling;var _e=m(h,T,z.value,S);if(_e===null){T===null&&(T=K);break}e&&T&&_e.alternate===null&&t(h,T),f=s(_e,f,b),R===null?C=_e:R.sibling=_e,R=_e,T=K}if(z.done)return n(h,T),de&&Gn(h,b),C;if(T===null){for(;!z.done;b++,z=p.next())z=d(h,z.value,S),z!==null&&(f=s(z,f,b),R===null?C=z:R.sibling=z,R=z);return de&&Gn(h,b),C}for(T=r(h,T);!z.done;b++,z=p.next())z=w(T,h,b,z.value,S),z!==null&&(e&&z.alternate!==null&&T.delete(z.key===null?b:z.key),f=s(z,f,b),R===null?C=z:R.sibling=z,R=z);return e&&T.forEach(function(H){return t(h,H)}),de&&Gn(h,b),C}function x(h,f,p,S){if(typeof p=="object"&&p!==null&&p.type===Cr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Os:e:{for(var C=p.key,R=f;R!==null;){if(R.key===C){if(C=p.type,C===Cr){if(R.tag===7){n(h,R.sibling),f=i(R,p.props.children),f.return=h,h=f;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===vn&&df(C)===R.type){n(h,R.sibling),f=i(R,p.props),f.ref=xi(h,R,p),f.return=h,h=f;break e}n(h,R);break}else t(h,R);R=R.sibling}p.type===Cr?(f=sr(p.props.children,h.mode,S,p.key),f.return=h,h=f):(S=lo(p.type,p.key,p.props,null,h.mode,S),S.ref=xi(h,f,p),S.return=h,h=S)}return o(h);case kr:e:{for(R=p.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(h,f.sibling),f=i(f,p.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=yl(p,h.mode,S),f.return=h,h=f}return o(h);case vn:return R=p._init,x(h,f,R(p._payload),S)}if(Pi(p))return y(h,f,p,S);if(yi(p))return v(h,f,p,S);Vs(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,p),f.return=h,h=f):(n(h,f),f=gl(p,h.mode,S),f.return=h,h=f),o(h)):n(h,f)}return x}var Qr=gm(!0),ym=gm(!1),Fo=Bn(null),jo=null,br=null,kc=null;function Cc(){kc=br=jo=null}function Ic(e){var t=Fo.current;ce(Fo),e._currentValue=t}function fu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $r(e,t){jo=e,kc=br=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qe=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(kc!==e)if(e={context:e,memoizedValue:t,next:null},br===null){if(jo===null)throw Error(P(308));br=e,jo.dependencies={lanes:0,firstContext:e}}else br=br.next=e;return t}var Yn=null;function Tc(e){Yn===null?Yn=[e]:Yn.push(e)}function vm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Tc(t)):(n.next=i.next,i.next=n),t.interleaved=n,un(e,r)}function un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wn=!1;function Rc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function on(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,un(e,n)}return i=r.interleaved,i===null?(t.next=t,Tc(r)):(t.next=i.next,i.next=t),r.interleaved=t,un(e,n)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hc(e,n)}}function ff(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Mo(e,t,n,r){var i=e.updateQueue;wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var m=a.lane,w=a.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(m=t,w=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(w,d,m);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,m=typeof y=="function"?y.call(w,d,m):y,m==null)break e;d=pe({},d,m);break e;case 2:wn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=w,l=d):c=c.next=w,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);pr|=o,e.lanes=o,e.memoizedState=d}}function hf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var _s={},$t=Bn(_s),ns=Bn(_s),rs=Bn(_s);function Zn(e){if(e===_s)throw Error(P(174));return e}function Pc(e,t){switch(oe(rs,t),oe(ns,e),oe($t,_s),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kl(t,e)}ce($t),oe($t,t)}function Xr(){ce($t),ce(ns),ce(rs)}function _m(e){Zn(rs.current);var t=Zn($t.current),n=Kl(t,e.type);t!==n&&(oe(ns,e),oe($t,n))}function Nc(e){ns.current===e&&(ce($t),ce(ns))}var fe=Bn(0);function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cl=[];function Ac(){for(var e=0;e<cl.length;e++)cl[e]._workInProgressVersionPrimary=null;cl.length=0}var ro=hn.ReactCurrentDispatcher,dl=hn.ReactCurrentBatchConfig,hr=0,he=null,Ce=null,Ne=null,zo=!1,Mi=!1,is=0,Cw=0;function je(){throw Error(P(321))}function Oc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pt(e[n],t[n]))return!1;return!0}function bc(e,t,n,r,i,s){if(hr=s,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=e===null||e.memoizedState===null?Pw:Nw,e=n(r,i),Mi){s=0;do{if(Mi=!1,is=0,25<=s)throw Error(P(301));s+=1,Ne=Ce=null,t.updateQueue=null,ro.current=Aw,e=n(r,i)}while(Mi)}if(ro.current=$o,t=Ce!==null&&Ce.next!==null,hr=0,Ne=Ce=he=null,zo=!1,t)throw Error(P(300));return e}function Lc(){var e=is!==0;return is=0,e}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?he.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function vt(){if(Ce===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Ne===null?he.memoizedState:Ne.next;if(t!==null)Ne=t,Ce=e;else{if(e===null)throw Error(P(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ne===null?he.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function ss(e,t){return typeof t=="function"?t(e):t}function fl(e){var t=vt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=Ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((hr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,he.lanes|=c,pr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Pt(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,he.lanes|=s,pr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hl(e){var t=vt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Pt(s,t.memoizedState)||(Qe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Sm(){}function xm(e,t){var n=he,r=vt(),i=t(),s=!Pt(r.memoizedState,i);if(s&&(r.memoizedState=i,Qe=!0),r=r.queue,Dc(Cm.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,os(9,km.bind(null,n,r,i,t),void 0,null),Oe===null)throw Error(P(349));hr&30||Em(n,t,i)}return i}function Em(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function km(e,t,n,r){t.value=n,t.getSnapshot=r,Im(t)&&Tm(e)}function Cm(e,t,n){return n(function(){Im(t)&&Tm(e)})}function Im(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pt(e,n)}catch{return!0}}function Tm(e){var t=un(e,1);t!==null&&It(t,e,1,-1)}function pf(e){var t=Dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:e},t.queue=e,e=e.dispatch=Rw.bind(null,he,e),[t.memoizedState,e]}function os(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rm(){return vt().memoizedState}function io(e,t,n,r){var i=Dt();he.flags|=e,i.memoizedState=os(1|t,n,void 0,r===void 0?null:r)}function ya(e,t,n,r){var i=vt();r=r===void 0?null:r;var s=void 0;if(Ce!==null){var o=Ce.memoizedState;if(s=o.destroy,r!==null&&Oc(r,o.deps)){i.memoizedState=os(t,n,s,r);return}}he.flags|=e,i.memoizedState=os(1|t,n,s,r)}function mf(e,t){return io(8390656,8,e,t)}function Dc(e,t){return ya(2048,8,e,t)}function Pm(e,t){return ya(4,2,e,t)}function Nm(e,t){return ya(4,4,e,t)}function Am(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Om(e,t,n){return n=n!=null?n.concat([e]):null,ya(4,4,Am.bind(null,t,e),n)}function Fc(){}function bm(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Lm(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dm(e,t,n){return hr&21?(Pt(n,t)||(n=zp(),he.lanes|=n,pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n)}function Iw(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=dl.transition;dl.transition={};try{e(!1),t()}finally{re=n,dl.transition=r}}function Fm(){return vt().memoizedState}function Tw(e,t,n){var r=Dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jm(e))Mm(t,n);else if(n=vm(e,t,n,r),n!==null){var i=Ve();It(n,e,r,i),Um(n,t,r)}}function Rw(e,t,n){var r=Dn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jm(e))Mm(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Pt(a,o)){var l=t.interleaved;l===null?(i.next=i,Tc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=vm(e,t,i,r),n!==null&&(i=Ve(),It(n,e,r,i),Um(n,t,r))}}function jm(e){var t=e.alternate;return e===he||t!==null&&t===he}function Mm(e,t){Mi=zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Um(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hc(e,n)}}var $o={readContext:yt,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},Pw={readContext:yt,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:mf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,io(4194308,4,Am.bind(null,t,e),n)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){return io(4,2,e,t)},useMemo:function(e,t){var n=Dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Tw.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:pf,useDebugValue:Fc,useDeferredValue:function(e){return Dt().memoizedState=e},useTransition:function(){var e=pf(!1),t=e[0];return e=Iw.bind(null,e[1]),Dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,i=Dt();if(de){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Oe===null)throw Error(P(349));hr&30||Em(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,mf(Cm.bind(null,r,s,e),[e]),r.flags|=2048,os(9,km.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Dt(),t=Oe.identifierPrefix;if(de){var n=Zt,r=Yt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=is++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Nw={readContext:yt,useCallback:bm,useContext:yt,useEffect:Dc,useImperativeHandle:Om,useInsertionEffect:Pm,useLayoutEffect:Nm,useMemo:Lm,useReducer:fl,useRef:Rm,useState:function(){return fl(ss)},useDebugValue:Fc,useDeferredValue:function(e){var t=vt();return Dm(t,Ce.memoizedState,e)},useTransition:function(){var e=fl(ss)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Sm,useSyncExternalStore:xm,useId:Fm,unstable_isNewReconciler:!1},Aw={readContext:yt,useCallback:bm,useContext:yt,useEffect:Dc,useImperativeHandle:Om,useInsertionEffect:Pm,useLayoutEffect:Nm,useMemo:Lm,useReducer:hl,useRef:Rm,useState:function(){return hl(ss)},useDebugValue:Fc,useDeferredValue:function(e){var t=vt();return Ce===null?t.memoizedState=e:Dm(t,Ce.memoizedState,e)},useTransition:function(){var e=hl(ss)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Sm,useSyncExternalStore:xm,useId:Fm,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function hu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var va={isMounted:function(e){return(e=e._reactInternals)?wr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=Dn(e),s=on(r,i);s.payload=t,n!=null&&(s.callback=n),t=bn(e,s,i),t!==null&&(It(t,e,i,r),no(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=Dn(e),s=on(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=bn(e,s,i),t!==null&&(It(t,e,i,r),no(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=Dn(e),i=on(n,r);i.tag=2,t!=null&&(i.callback=t),t=bn(e,i,r),t!==null&&(It(t,e,r,n),no(t,e,r))}};function gf(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Yi(n,r)||!Yi(i,s):!0}function zm(e,t,n){var r=!1,i=zn,s=t.contextType;return typeof s=="object"&&s!==null?s=yt(s):(i=Ze(t)?dr:ze.current,r=t.contextTypes,s=(r=r!=null)?Gr(e,i):zn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=va,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function yf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&va.enqueueReplaceState(t,t.state,null)}function pu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Rc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=yt(s):(s=Ze(t)?dr:ze.current,i.context=Gr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(hu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&va.enqueueReplaceState(i,i.state,null),Mo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yr(e,t){try{var n="",r=t;do n+=s0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function mu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ow=typeof WeakMap=="function"?WeakMap:Map;function $m(e,t,n){n=on(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vo||(Vo=!0,Cu=r),mu(e,t)},n}function Bm(e,t,n){n=on(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){mu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mu(e,t),typeof r!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function vf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ow;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Kw.bind(null,e,t,n),t.then(e,e))}function wf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _f(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=on(-1,1),t.tag=2,bn(n,t,1))),n.lanes|=1),e)}var bw=hn.ReactCurrentOwner,Qe=!1;function $e(e,t,n,r){t.child=e===null?ym(t,null,n,r):Qr(t,e.child,n,r)}function Sf(e,t,n,r,i){n=n.render;var s=t.ref;return $r(t,i),r=bc(e,t,n,r,s,i),n=Lc(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cn(e,t,i)):(de&&n&&Sc(t),t.flags|=1,$e(e,t,r,i),t.child)}function xf(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Hc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Vm(e,t,s,r,i)):(e=lo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yi,n(o,r)&&e.ref===t.ref)return cn(e,t,i)}return t.flags|=1,e=Fn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Vm(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Yi(s,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Qe=!0);else return t.lanes=e.lanes,cn(e,t,i)}return gu(e,t,n,r,i)}function Hm(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Dr,it),it|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(Dr,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,oe(Dr,it),it|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,oe(Dr,it),it|=r;return $e(e,t,i,n),t.child}function Wm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function gu(e,t,n,r,i){var s=Ze(n)?dr:ze.current;return s=Gr(t,s),$r(t,i),n=bc(e,t,n,r,s,i),r=Lc(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cn(e,t,i)):(de&&r&&Sc(t),t.flags|=1,$e(e,t,n,i),t.child)}function Ef(e,t,n,r,i){if(Ze(n)){var s=!0;bo(t)}else s=!1;if($r(t,i),t.stateNode===null)so(e,t),zm(t,n,r),pu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=yt(u):(u=Ze(n)?dr:ze.current,u=Gr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&yf(t,o,r,u),wn=!1;var m=t.memoizedState;o.state=m,Mo(t,r,o,i),l=t.memoizedState,a!==r||m!==l||Ye.current||wn?(typeof c=="function"&&(hu(t,n,c,r),l=t.memoizedState),(a=wn||gf(t,n,a,r,m,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,wm(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:St(t.type,a),o.props=u,d=t.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=yt(l):(l=Ze(n)?dr:ze.current,l=Gr(t,l));var w=n.getDerivedStateFromProps;(c=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||m!==l)&&yf(t,o,r,l),wn=!1,m=t.memoizedState,o.state=m,Mo(t,r,o,i);var y=t.memoizedState;a!==d||m!==y||Ye.current||wn?(typeof w=="function"&&(hu(t,n,w,r),y=t.memoizedState),(u=wn||gf(t,n,u,r,m,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return yu(e,t,n,r,s,i)}function yu(e,t,n,r,i,s){Wm(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&lf(t,n,!1),cn(e,t,s);r=t.stateNode,bw.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Qr(t,e.child,null,s),t.child=Qr(t,null,a,s)):$e(e,t,a,s),t.memoizedState=r.state,i&&lf(t,n,!0),t.child}function Km(e){var t=e.stateNode;t.pendingContext?af(e,t.pendingContext,t.pendingContext!==t.context):t.context&&af(e,t.context,!1),Pc(e,t.containerInfo)}function kf(e,t,n,r,i){return Jr(),Ec(i),t.flags|=256,$e(e,t,n,r),t.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function wu(e){return{baseLanes:e,cachePool:null,transitions:null}}function qm(e,t,n){var r=t.pendingProps,i=fe.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),oe(fe,i&1),e===null)return du(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sa(o,r,0,null),e=sr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=wu(n),t.memoizedState=vu,e):jc(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Lw(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Fn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Fn(a,s):(s=sr(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?wu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=vu,r}return s=e.child,e=s.sibling,r=Fn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jc(e,t){return t=Sa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hs(e,t,n,r){return r!==null&&Ec(r),Qr(t,e.child,null,n),e=jc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lw(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=pl(Error(P(422))),Hs(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Sa({mode:"visible",children:r.children},i,0,null),s=sr(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Qr(t,e.child,null,o),t.child.memoizedState=wu(o),t.memoizedState=vu,s);if(!(t.mode&1))return Hs(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=pl(s,r,void 0),Hs(e,t,o,r)}if(a=(o&e.childLanes)!==0,Qe||a){if(r=Oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,un(e,i),It(r,e,i,-1))}return Vc(),r=pl(Error(P(421))),Hs(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=qw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,st=On(i.nextSibling),ot=t,de=!0,Et=null,e!==null&&(ht[pt++]=Yt,ht[pt++]=Zt,ht[pt++]=fr,Yt=e.id,Zt=e.overflow,fr=t),t=jc(t,r.children),t.flags|=4096,t)}function Cf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fu(e.return,t,n)}function ml(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Gm(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if($e(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cf(e,n,t);else if(e.tag===19)Cf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ml(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ml(t,!0,n,null,s);break;case"together":ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function so(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dw(e,t,n){switch(t.tag){case 3:Km(t),Jr();break;case 5:_m(t);break;case 1:Ze(t.type)&&bo(t);break;case 4:Pc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;oe(Fo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?qm(e,t,n):(oe(fe,fe.current&1),e=cn(e,t,n),e!==null?e.sibling:null);oe(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Gm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Hm(e,t,n)}return cn(e,t,n)}var Jm,_u,Qm,Xm;Jm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_u=function(){};Qm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Zn($t.current);var s=null;switch(n){case"input":i=Bl(e,i),r=Bl(e,r),s=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),s=[];break;case"textarea":i=Wl(e,i),r=Wl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ao)}ql(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Xm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ei(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fw(e,t,n){var r=t.pendingProps;switch(xc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Ze(t.type)&&Oo(),Me(t),null;case 3:return r=t.stateNode,Xr(),ce(Ye),ce(ze),Ac(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Bs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Et!==null&&(Ru(Et),Et=null))),_u(e,t),Me(t),null;case 5:Nc(t);var i=Zn(rs.current);if(n=t.type,e!==null&&t.stateNode!=null)Qm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Me(t),null}if(e=Zn($t.current),Bs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Mt]=t,r[ts]=s,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<Ai.length;i++)ae(Ai[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":bd(r,s),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ae("invalid",r);break;case"textarea":Dd(r,s),ae("invalid",r)}ql(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&$s(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$s(r.textContent,a,e),i=["children",""+a]):Wi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ae("scroll",r)}switch(n){case"input":bs(r),Ld(r,s,!0);break;case"textarea":bs(r),Fd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ao)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Mt]=t,e[ts]=r,Jm(e,t,!1,!1),t.stateNode=e;e:{switch(o=Gl(n,r),n){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ai.length;i++)ae(Ai[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":bd(e,r),i=Bl(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),ae("invalid",e);break;case"textarea":Dd(e,r),i=Wl(e,r),ae("invalid",e);break;default:i=r}ql(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Rp(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ip(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ki(e,l):typeof l=="number"&&Ki(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ae("scroll",e):l!=null&&ac(e,s,l,o))}switch(n){case"input":bs(e),Ld(e,r,!1);break;case"textarea":bs(e),Fd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Un(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?jr(e,!!r.multiple,s,!1):r.defaultValue!=null&&jr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)Xm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Zn(rs.current),Zn($t.current),Bs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Mt]=t,(s=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:$s(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$s(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=t,t.stateNode=r}return Me(t),null;case 13:if(ce(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&st!==null&&t.mode&1&&!(t.flags&128))mm(),Jr(),t.flags|=98560,s=!1;else if(s=Bs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(P(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[Mt]=t}else Jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Me(t),s=!1}else Et!==null&&(Ru(Et),Et=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?Ie===0&&(Ie=3):Vc())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return Xr(),_u(e,t),e===null&&Zi(t.stateNode.containerInfo),Me(t),null;case 10:return Ic(t.type._context),Me(t),null;case 17:return Ze(t.type)&&Oo(),Me(t),null;case 19:if(ce(fe),s=t.memoizedState,s===null)return Me(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Ei(s,!1);else{if(Ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Uo(e),o!==null){for(t.flags|=128,Ei(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(fe,fe.current&1|2),t.child}e=e.sibling}s.tail!==null&&ye()>Zr&&(t.flags|=128,r=!0,Ei(s,!1),t.lanes=4194304)}else{if(!r)if(e=Uo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ei(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return Me(t),null}else 2*ye()-s.renderingStartTime>Zr&&n!==1073741824&&(t.flags|=128,r=!0,Ei(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ye(),t.sibling=null,n=fe.current,oe(fe,r?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return Bc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?it&1073741824&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function jw(e,t){switch(xc(t),t.tag){case 1:return Ze(t.type)&&Oo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xr(),ce(Ye),ce(ze),Ac(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Nc(t),null;case 13:if(ce(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(fe),null;case 4:return Xr(),null;case 10:return Ic(t.type._context),null;case 22:case 23:return Bc(),null;case 24:return null;default:return null}}var Ws=!1,Ue=!1,Mw=typeof WeakSet=="function"?WeakSet:Set,j=null;function Lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function Su(e,t,n){try{n()}catch(r){me(e,t,r)}}var If=!1;function Uw(e,t){if(iu=Ro,e=nm(),_c(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,m=null;t:for(;;){for(var w;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(w=d.firstChild)!==null;)m=d,d=w;for(;;){if(d===e)break t;if(m===n&&++u===i&&(a=o),m===s&&++c===r&&(l=o),(w=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=w}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(su={focusedElem:e,selectionRange:n},Ro=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,x=y.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:St(t.type,v),x);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(S){me(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return y=If,If=!1,y}function Ui(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Su(t,n,s)}i=i.next}while(i!==r)}}function wa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ym(e){var t=e.alternate;t!==null&&(e.alternate=null,Ym(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[ts],delete t[lu],delete t[Sw],delete t[xw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zm(e){return e.tag===5||e.tag===3||e.tag===4}function Tf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Eu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ao));else if(r!==4&&(e=e.child,e!==null))for(Eu(e,t,n),e=e.sibling;e!==null;)Eu(e,t,n),e=e.sibling}function ku(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ku(e,t,n),e=e.sibling;e!==null;)ku(e,t,n),e=e.sibling}var Le=null,xt=!1;function pn(e,t,n){for(n=n.child;n!==null;)eg(e,t,n),n=n.sibling}function eg(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(da,n)}catch{}switch(n.tag){case 5:Ue||Lr(n,t);case 6:var r=Le,i=xt;Le=null,pn(e,t,n),Le=r,xt=i,Le!==null&&(xt?(e=Le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(xt?(e=Le,n=n.stateNode,e.nodeType===8?ll(e.parentNode,n):e.nodeType===1&&ll(e,n),Qi(e)):ll(Le,n.stateNode));break;case 4:r=Le,i=xt,Le=n.stateNode.containerInfo,xt=!0,pn(e,t,n),Le=r,xt=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Su(n,t,o),i=i.next}while(i!==r)}pn(e,t,n);break;case 1:if(!Ue&&(Lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){me(n,t,a)}pn(e,t,n);break;case 21:pn(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,pn(e,t,n),Ue=r):pn(e,t,n);break;default:pn(e,t,n)}}function Rf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Mw),t.forEach(function(r){var i=Gw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Le=a.stateNode,xt=!1;break e;case 3:Le=a.stateNode.containerInfo,xt=!0;break e;case 4:Le=a.stateNode.containerInfo,xt=!0;break e}a=a.return}if(Le===null)throw Error(P(160));eg(s,o,i),Le=null,xt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){me(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tg(t,e),t=t.sibling}function tg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_t(t,e),Lt(e),r&4){try{Ui(3,e,e.return),wa(3,e)}catch(v){me(e,e.return,v)}try{Ui(5,e,e.return)}catch(v){me(e,e.return,v)}}break;case 1:_t(t,e),Lt(e),r&512&&n!==null&&Lr(n,n.return);break;case 5:if(_t(t,e),Lt(e),r&512&&n!==null&&Lr(n,n.return),e.flags&32){var i=e.stateNode;try{Ki(i,"")}catch(v){me(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ep(i,s),Gl(a,o);var u=Gl(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Rp(i,d):c==="dangerouslySetInnerHTML"?Ip(i,d):c==="children"?Ki(i,d):ac(i,c,d,u)}switch(a){case"input":Vl(i,s);break;case"textarea":kp(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?jr(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?jr(i,!!s.multiple,s.defaultValue,!0):jr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ts]=s}catch(v){me(e,e.return,v)}}break;case 6:if(_t(t,e),Lt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){me(e,e.return,v)}}break;case 3:if(_t(t,e),Lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qi(t.containerInfo)}catch(v){me(e,e.return,v)}break;case 4:_t(t,e),Lt(e);break;case 13:_t(t,e),Lt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(zc=ye())),r&4&&Rf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(u=Ue)||c,_t(t,e),Ue=u):_t(t,e),Lt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(j=e,c=e.child;c!==null;){for(d=j=c;j!==null;){switch(m=j,w=m.child,m.tag){case 0:case 11:case 14:case 15:Ui(4,m,m.return);break;case 1:Lr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){me(r,n,v)}}break;case 5:Lr(m,m.return);break;case 22:if(m.memoizedState!==null){Nf(d);continue}}w!==null?(w.return=m,j=w):Nf(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Tp("display",o))}catch(v){me(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){me(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:_t(t,e),Lt(e),r&4&&Rf(e);break;case 21:break;default:_t(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zm(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ki(i,""),r.flags&=-33);var s=Tf(e);ku(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Tf(e);Eu(e,a,o);break;default:throw Error(P(161))}}catch(l){me(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zw(e,t,n){j=e,ng(e)}function ng(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ws;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ue;a=Ws;var u=Ue;if(Ws=o,(Ue=l)&&!u)for(j=i;j!==null;)o=j,l=o.child,o.tag===22&&o.memoizedState!==null?Af(i):l!==null?(l.return=o,j=l):Af(i);for(;s!==null;)j=s,ng(s),s=s.sibling;j=i,Ws=a,Ue=u}Pf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):Pf(e)}}function Pf(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||wa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&hf(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hf(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Qi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ue||t.flags&512&&xu(t)}catch(m){me(t,t.return,m)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Nf(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Af(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wa(4,t)}catch(l){me(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){me(t,i,l)}}var s=t.return;try{xu(t)}catch(l){me(t,s,l)}break;case 5:var o=t.return;try{xu(t)}catch(l){me(t,o,l)}}}catch(l){me(t,t.return,l)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var $w=Math.ceil,Bo=hn.ReactCurrentDispatcher,Mc=hn.ReactCurrentOwner,gt=hn.ReactCurrentBatchConfig,Z=0,Oe=null,xe=null,De=0,it=0,Dr=Bn(0),Ie=0,as=null,pr=0,_a=0,Uc=0,zi=null,Je=null,zc=0,Zr=1/0,Gt=null,Vo=!1,Cu=null,Ln=null,Ks=!1,Tn=null,Ho=0,$i=0,Iu=null,oo=-1,ao=0;function Ve(){return Z&6?ye():oo!==-1?oo:oo=ye()}function Dn(e){return e.mode&1?Z&2&&De!==0?De&-De:kw.transition!==null?(ao===0&&(ao=zp()),ao):(e=re,e!==0||(e=window.event,e=e===void 0?16:qp(e.type)),e):1}function It(e,t,n,r){if(50<$i)throw $i=0,Iu=null,Error(P(185));ys(e,n,r),(!(Z&2)||e!==Oe)&&(e===Oe&&(!(Z&2)&&(_a|=n),Ie===4&&Sn(e,De)),et(e,r),n===1&&Z===0&&!(t.mode&1)&&(Zr=ye()+500,ga&&Vn()))}function et(e,t){var n=e.callbackNode;k0(e,t);var r=To(e,e===Oe?De:0);if(r===0)n!==null&&Ud(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ud(n),t===1)e.tag===0?Ew(Of.bind(null,e)):fm(Of.bind(null,e)),ww(function(){!(Z&6)&&Vn()}),n=null;else{switch($p(r)){case 1:n=fc;break;case 4:n=Mp;break;case 16:n=Io;break;case 536870912:n=Up;break;default:n=Io}n=cg(n,rg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rg(e,t){if(oo=-1,ao=0,Z&6)throw Error(P(327));var n=e.callbackNode;if(Br()&&e.callbackNode!==n)return null;var r=To(e,e===Oe?De:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Wo(e,r);else{t=r;var i=Z;Z|=2;var s=sg();(Oe!==e||De!==t)&&(Gt=null,Zr=ye()+500,ir(e,t));do try{Hw();break}catch(a){ig(e,a)}while(!0);Cc(),Bo.current=s,Z=i,xe!==null?t=0:(Oe=null,De=0,t=Ie)}if(t!==0){if(t===2&&(i=Zl(e),i!==0&&(r=i,t=Tu(e,i))),t===1)throw n=as,ir(e,0),Sn(e,r),et(e,ye()),n;if(t===6)Sn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Bw(i)&&(t=Wo(e,r),t===2&&(s=Zl(e),s!==0&&(r=s,t=Tu(e,s))),t===1))throw n=as,ir(e,0),Sn(e,r),et(e,ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Jn(e,Je,Gt);break;case 3:if(Sn(e,r),(r&130023424)===r&&(t=zc+500-ye(),10<t)){if(To(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=au(Jn.bind(null,e,Je,Gt),t);break}Jn(e,Je,Gt);break;case 4:if(Sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ct(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$w(r/1960))-r,10<r){e.timeoutHandle=au(Jn.bind(null,e,Je,Gt),r);break}Jn(e,Je,Gt);break;case 5:Jn(e,Je,Gt);break;default:throw Error(P(329))}}}return et(e,ye()),e.callbackNode===n?rg.bind(null,e):null}function Tu(e,t){var n=zi;return e.current.memoizedState.isDehydrated&&(ir(e,t).flags|=256),e=Wo(e,t),e!==2&&(t=Je,Je=n,t!==null&&Ru(t)),e}function Ru(e){Je===null?Je=e:Je.push.apply(Je,e)}function Bw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Pt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sn(e,t){for(t&=~Uc,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ct(t),r=1<<n;e[n]=-1,t&=~r}}function Of(e){if(Z&6)throw Error(P(327));Br();var t=To(e,0);if(!(t&1))return et(e,ye()),null;var n=Wo(e,t);if(e.tag!==0&&n===2){var r=Zl(e);r!==0&&(t=r,n=Tu(e,r))}if(n===1)throw n=as,ir(e,0),Sn(e,t),et(e,ye()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jn(e,Je,Gt),et(e,ye()),null}function $c(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(Zr=ye()+500,ga&&Vn())}}function mr(e){Tn!==null&&Tn.tag===0&&!(Z&6)&&Br();var t=Z;Z|=1;var n=gt.transition,r=re;try{if(gt.transition=null,re=1,e)return e()}finally{re=r,gt.transition=n,Z=t,!(Z&6)&&Vn()}}function Bc(){it=Dr.current,ce(Dr)}function ir(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vw(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(xc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oo();break;case 3:Xr(),ce(Ye),ce(ze),Ac();break;case 5:Nc(r);break;case 4:Xr();break;case 13:ce(fe);break;case 19:ce(fe);break;case 10:Ic(r.type._context);break;case 22:case 23:Bc()}n=n.return}if(Oe=e,xe=e=Fn(e.current,null),De=it=t,Ie=0,as=null,Uc=_a=pr=0,Je=zi=null,Yn!==null){for(t=0;t<Yn.length;t++)if(n=Yn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Yn=null}return e}function ig(e,t){do{var n=xe;try{if(Cc(),ro.current=$o,zo){for(var r=he.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zo=!1}if(hr=0,Ne=Ce=he=null,Mi=!1,is=0,Mc.current=null,n===null||n.return===null){Ie=1,as=t,xe=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=De,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var w=wf(o);if(w!==null){w.flags&=-257,_f(w,o,a,s,t),w.mode&1&&vf(s,u,t),t=w,l=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(l),t.updateQueue=v}else y.add(l);break e}else{if(!(t&1)){vf(s,u,t),Vc();break e}l=Error(P(426))}}else if(de&&a.mode&1){var x=wf(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),_f(x,o,a,s,t),Ec(Yr(l,a));break e}}s=l=Yr(l,a),Ie!==4&&(Ie=2),zi===null?zi=[s]:zi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=$m(s,l,t);ff(s,h);break e;case 1:a=l;var f=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ln===null||!Ln.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=Bm(s,a,t);ff(s,S);break e}}s=s.return}while(s!==null)}ag(n)}catch(C){t=C,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function sg(){var e=Bo.current;return Bo.current=$o,e===null?$o:e}function Vc(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Oe===null||!(pr&268435455)&&!(_a&268435455)||Sn(Oe,De)}function Wo(e,t){var n=Z;Z|=2;var r=sg();(Oe!==e||De!==t)&&(Gt=null,ir(e,t));do try{Vw();break}catch(i){ig(e,i)}while(!0);if(Cc(),Z=n,Bo.current=r,xe!==null)throw Error(P(261));return Oe=null,De=0,Ie}function Vw(){for(;xe!==null;)og(xe)}function Hw(){for(;xe!==null&&!m0();)og(xe)}function og(e){var t=ug(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?ag(e):xe=t,Mc.current=null}function ag(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jw(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,xe=null;return}}else if(n=Fw(n,t,it),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Ie===0&&(Ie=5)}function Jn(e,t,n){var r=re,i=gt.transition;try{gt.transition=null,re=1,Ww(e,t,n,r)}finally{gt.transition=i,re=r}return null}function Ww(e,t,n,r){do Br();while(Tn!==null);if(Z&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(C0(e,s),e===Oe&&(xe=Oe=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ks||(Ks=!0,cg(Io,function(){return Br(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=gt.transition,gt.transition=null;var o=re;re=1;var a=Z;Z|=4,Mc.current=null,Uw(e,n),tg(n,e),dw(su),Ro=!!iu,su=iu=null,e.current=n,zw(n),g0(),Z=a,re=o,gt.transition=s}else e.current=n;if(Ks&&(Ks=!1,Tn=e,Ho=i),s=e.pendingLanes,s===0&&(Ln=null),w0(n.stateNode),et(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vo)throw Vo=!1,e=Cu,Cu=null,e;return Ho&1&&e.tag!==0&&Br(),s=e.pendingLanes,s&1?e===Iu?$i++:($i=0,Iu=e):$i=0,Vn(),null}function Br(){if(Tn!==null){var e=$p(Ho),t=gt.transition,n=re;try{if(gt.transition=null,re=16>e?16:e,Tn===null)var r=!1;else{if(e=Tn,Tn=null,Ho=0,Z&6)throw Error(P(331));var i=Z;for(Z|=4,j=e.current;j!==null;){var s=j,o=s.child;if(j.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:Ui(8,c,s)}var d=c.child;if(d!==null)d.return=c,j=d;else for(;j!==null;){c=j;var m=c.sibling,w=c.return;if(Ym(c),c===u){j=null;break}if(m!==null){m.return=w,j=m;break}j=w}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}j=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,j=o;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ui(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,j=h;break e}j=s.return}}var f=e.current;for(j=f;j!==null;){o=j;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,j=p;else e:for(o=f;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wa(9,a)}}catch(C){me(a,a.return,C)}if(a===o){j=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,j=S;break e}j=a.return}}if(Z=i,Vn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(da,e)}catch{}r=!0}return r}finally{re=n,gt.transition=t}}return!1}function bf(e,t,n){t=Yr(n,t),t=$m(e,t,1),e=bn(e,t,1),t=Ve(),e!==null&&(ys(e,1,t),et(e,t))}function me(e,t,n){if(e.tag===3)bf(e,e,n);else for(;t!==null;){if(t.tag===3){bf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ln===null||!Ln.has(r))){e=Yr(n,e),e=Bm(t,e,1),t=bn(t,e,1),e=Ve(),t!==null&&(ys(t,1,e),et(t,e));break}}t=t.return}}function Kw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(De&n)===n&&(Ie===4||Ie===3&&(De&130023424)===De&&500>ye()-zc?ir(e,0):Uc|=n),et(e,t)}function lg(e,t){t===0&&(e.mode&1?(t=Fs,Fs<<=1,!(Fs&130023424)&&(Fs=4194304)):t=1);var n=Ve();e=un(e,t),e!==null&&(ys(e,t,n),et(e,n))}function qw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lg(e,n)}function Gw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),lg(e,n)}var ug;ug=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)Qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Qe=!1,Dw(e,t,n);Qe=!!(e.flags&131072)}else Qe=!1,de&&t.flags&1048576&&hm(t,Do,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;so(e,t),e=t.pendingProps;var i=Gr(t,ze.current);$r(t,n),i=bc(null,t,r,e,i,n);var s=Lc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(r)?(s=!0,bo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rc(t),i.updater=va,t.stateNode=i,i._reactInternals=t,pu(t,r,e,n),t=yu(null,t,r,!0,s,n)):(t.tag=0,de&&s&&Sc(t),$e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(so(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Qw(r),e=St(r,e),i){case 0:t=gu(null,t,r,e,n);break e;case 1:t=Ef(null,t,r,e,n);break e;case 11:t=Sf(null,t,r,e,n);break e;case 14:t=xf(null,t,r,St(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),gu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Ef(e,t,r,i,n);case 3:e:{if(Km(t),e===null)throw Error(P(387));r=t.pendingProps,s=t.memoizedState,i=s.element,wm(e,t),Mo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Yr(Error(P(423)),t),t=kf(e,t,r,n,i);break e}else if(r!==i){i=Yr(Error(P(424)),t),t=kf(e,t,r,n,i);break e}else for(st=On(t.stateNode.containerInfo.firstChild),ot=t,de=!0,Et=null,n=ym(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jr(),r===i){t=cn(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return _m(t),e===null&&du(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,ou(r,i)?o=null:s!==null&&ou(r,s)&&(t.flags|=32),Wm(e,t),$e(e,t,o,n),t.child;case 6:return e===null&&du(t),null;case 13:return qm(e,t,n);case 4:return Pc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qr(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Sf(e,t,r,i,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,oe(Fo,r._currentValue),r._currentValue=o,s!==null)if(Pt(s.value,o)){if(s.children===i.children&&!Ye.current){t=cn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=on(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),fu(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),fu(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$r(t,n),i=yt(i),r=r(i),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,i=St(r,t.pendingProps),i=St(r.type,i),xf(e,t,r,i,n);case 15:return Vm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),so(e,t),t.tag=1,Ze(r)?(e=!0,bo(t)):e=!1,$r(t,n),zm(t,r,i),pu(t,r,i,n),yu(null,t,r,!0,e,n);case 19:return Gm(e,t,n);case 22:return Hm(e,t,n)}throw Error(P(156,t.tag))};function cg(e,t){return jp(e,t)}function Jw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new Jw(e,t,n,r)}function Hc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qw(e){if(typeof e=="function")return Hc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===uc)return 11;if(e===cc)return 14}return 2}function Fn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lo(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Hc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Cr:return sr(n.children,i,s,t);case lc:o=8,i|=8;break;case Ml:return e=mt(12,n,t,i|2),e.elementType=Ml,e.lanes=s,e;case Ul:return e=mt(13,n,t,i),e.elementType=Ul,e.lanes=s,e;case zl:return e=mt(19,n,t,i),e.elementType=zl,e.lanes=s,e;case _p:return Sa(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vp:o=10;break e;case wp:o=9;break e;case uc:o=11;break e;case cc:o=14;break e;case vn:o=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=mt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function sr(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function Sa(e,t,n,r){return e=mt(22,e,r,t),e.elementType=_p,e.lanes=n,e.stateNode={isHidden:!1},e}function gl(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function yl(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xa(0),this.expirationTimes=Xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wc(e,t,n,r,i,s,o,a,l){return e=new Xw(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=mt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rc(s),e}function Yw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dg(e){if(!e)return zn;e=e._reactInternals;e:{if(wr(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ze(n))return dm(e,n,t)}return t}function fg(e,t,n,r,i,s,o,a,l){return e=Wc(n,r,!0,e,i,s,o,a,l),e.context=dg(null),n=e.current,r=Ve(),i=Dn(n),s=on(r,i),s.callback=t??null,bn(n,s,i),e.current.lanes=i,ys(e,i,r),et(e,r),e}function xa(e,t,n,r){var i=t.current,s=Ve(),o=Dn(i);return n=dg(n),t.context===null?t.context=n:t.pendingContext=n,t=on(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bn(i,t,o),e!==null&&(It(e,i,o,s),no(e,i,o)),o}function Ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Kc(e,t){Lf(e,t),(e=e.alternate)&&Lf(e,t)}function Zw(){return null}var hg=typeof reportError=="function"?reportError:function(e){console.error(e)};function qc(e){this._internalRoot=e}Ea.prototype.render=qc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));xa(e,t,null,null)};Ea.prototype.unmount=qc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mr(function(){xa(null,e,null,null)}),t[ln]=null}};function Ea(e){this._internalRoot=e}Ea.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_n.length&&t!==0&&t<_n[n].priority;n++);_n.splice(n,0,e),n===0&&Kp(e)}};function Gc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Df(){}function e1(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ko(o);s.call(u)}}var o=fg(t,r,e,0,null,!1,!1,"",Df);return e._reactRootContainer=o,e[ln]=o.current,Zi(e.nodeType===8?e.parentNode:e),mr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ko(l);a.call(u)}}var l=Wc(e,0,!1,null,null,!1,!1,"",Df);return e._reactRootContainer=l,e[ln]=l.current,Zi(e.nodeType===8?e.parentNode:e),mr(function(){xa(t,l,n,r)}),l}function Ca(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ko(o);a.call(l)}}xa(t,o,e,i)}else o=e1(n,t,e,i,r);return Ko(o)}Bp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ni(t.pendingLanes);n!==0&&(hc(t,n|1),et(t,ye()),!(Z&6)&&(Zr=ye()+500,Vn()))}break;case 13:mr(function(){var r=un(e,1);if(r!==null){var i=Ve();It(r,e,1,i)}}),Kc(e,1)}};pc=function(e){if(e.tag===13){var t=un(e,134217728);if(t!==null){var n=Ve();It(t,e,134217728,n)}Kc(e,134217728)}};Vp=function(e){if(e.tag===13){var t=Dn(e),n=un(e,t);if(n!==null){var r=Ve();It(n,e,t,r)}Kc(e,t)}};Hp=function(){return re};Wp=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};Ql=function(e,t,n){switch(t){case"input":if(Vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ma(r);if(!i)throw Error(P(90));xp(r),Vl(r,i)}}}break;case"textarea":kp(e,n);break;case"select":t=n.value,t!=null&&jr(e,!!n.multiple,t,!1)}};Ap=$c;Op=mr;var t1={usingClientEntryPoint:!1,Events:[ws,Pr,ma,Pp,Np,$c]},ki={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},n1={bundleType:ki.bundleType,version:ki.version,rendererPackageName:ki.rendererPackageName,rendererConfig:ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Dp(e),e===null?null:e.stateNode},findFiberByHostInstance:ki.findFiberByHostInstance||Zw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qs.isDisabled&&qs.supportsFiber)try{da=qs.inject(n1),zt=qs}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t1;ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gc(t))throw Error(P(200));return Yw(e,t,null,n)};ut.createRoot=function(e,t){if(!Gc(e))throw Error(P(299));var n=!1,r="",i=hg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wc(e,1,!1,null,null,n,!1,r,i),e[ln]=t.current,Zi(e.nodeType===8?e.parentNode:e),new qc(t)};ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Dp(t),e=e===null?null:e.stateNode,e};ut.flushSync=function(e){return mr(e)};ut.hydrate=function(e,t,n){if(!ka(t))throw Error(P(200));return Ca(null,e,t,!0,n)};ut.hydrateRoot=function(e,t,n){if(!Gc(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=hg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=fg(t,null,e,1,n??null,i,!1,s,o),e[ln]=t.current,Zi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ea(t)};ut.render=function(e,t,n){if(!ka(t))throw Error(P(200));return Ca(null,e,t,!1,n)};ut.unmountComponentAtNode=function(e){if(!ka(e))throw Error(P(40));return e._reactRootContainer?(mr(function(){Ca(null,null,e,!1,function(){e._reactRootContainer=null,e[ln]=null})}),!0):!1};ut.unstable_batchedUpdates=$c;ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ka(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Ca(e,t,n,!1,r)};ut.version="18.3.1-next-f1338f8080-20240426";function pg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pg)}catch(e){console.error(e)}}pg(),pp.exports=ut;var r1=pp.exports,mg,Ff=r1;mg=Ff.createRoot,Ff.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ls(){return ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ls.apply(this,arguments)}var Rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rn||(Rn={}));const jf="popstate";function i1(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Pu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:yg(i)}return o1(t,n,null,e)}function Te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function gg(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function s1(){return Math.random().toString(36).substr(2,8)}function Mf(e,t){return{usr:e.state,key:e.key,idx:t}}function Pu(e,t,n,r){return n===void 0&&(n=null),ls({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ci(t):t,{state:n,key:t&&t.key||r||s1()})}function yg(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ci(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function o1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Rn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ls({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Rn.Pop;let x=c(),h=x==null?null:x-u;u=x,l&&l({action:a,location:v.location,delta:h})}function m(x,h){a=Rn.Push;let f=Pu(v.location,x,h);u=c()+1;let p=Mf(f,u),S=v.createHref(f);try{o.pushState(p,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(S)}s&&l&&l({action:a,location:v.location,delta:1})}function w(x,h){a=Rn.Replace;let f=Pu(v.location,x,h);u=c();let p=Mf(f,u),S=v.createHref(f);o.replaceState(p,"",S),s&&l&&l({action:a,location:v.location,delta:0})}function y(x){let h=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof x=="string"?x:yg(x);return f=f.replace(/ $/,"%20"),Te(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let v={get action(){return a},get location(){return e(i,o)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(jf,d),l=x,()=>{i.removeEventListener(jf,d),l=null}},createHref(x){return t(i,x)},createURL:y,encodeLocation(x){let h=y(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:w,go(x){return o.go(x)}};return v}var Uf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Uf||(Uf={}));function a1(e,t,n){return n===void 0&&(n="/"),l1(e,t,n,!1)}function l1(e,t,n,r){let i=typeof t=="string"?ci(t):t,s=_g(i.pathname||"/",n);if(s==null)return null;let o=vg(e);u1(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=_1(s);a=v1(o[l],u,r)}return a}function vg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=or([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Te(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),vg(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:g1(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of wg(s.path))i(s,o,l)}),t}function wg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=wg(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function u1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:y1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const c1=/^:[\w-]+$/,d1=3,f1=2,h1=1,p1=10,m1=-2,zf=e=>e==="*";function g1(e,t){let n=e.split("/"),r=n.length;return n.some(zf)&&(r+=m1),t&&(r+=f1),n.filter(i=>!zf(i)).reduce((i,s)=>i+(c1.test(s)?d1:s===""?h1:p1),r)}function y1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function v1(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=s==="/"?t:t.slice(s.length)||"/",d=$f({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),m=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=$f({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:or([s,d.pathname]),pathnameBase:I1(or([s,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(s=or([s,d.pathnameBase]))}return o}function $f(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=w1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:m,isOptional:w}=c;if(m==="*"){let v=a[d]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[d];return w&&!y?u[m]=void 0:u[m]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function w1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),gg(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function _1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return gg(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function _g(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function S1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ci(e):e;return{pathname:n?n.startsWith("/")?n:x1(n,t):t,search:T1(r),hash:R1(i)}}function x1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function vl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function E1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function k1(e,t){let n=E1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function C1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ci(e):(i=ls({},e),Te(!i.pathname||!i.pathname.includes("?"),vl("?","pathname","search",i)),Te(!i.pathname||!i.pathname.includes("#"),vl("#","pathname","hash",i)),Te(!i.search||!i.search.includes("#"),vl("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),d-=1;i.pathname=m.join("/")}a=d>=0?t[d]:"/"}let l=S1(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const or=e=>e.join("/").replace(/\/\/+/g,"/"),I1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),T1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,R1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function P1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Sg=["post","put","patch","delete"];new Set(Sg);const N1=["get",...Sg];new Set(N1);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function us(){return us=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},us.apply(this,arguments)}const Jc=A.createContext(null),A1=A.createContext(null),Ia=A.createContext(null),Ta=A.createContext(null),_r=A.createContext({outlet:null,matches:[],isDataRoute:!1}),xg=A.createContext(null);function Ra(){return A.useContext(Ta)!=null}function Eg(){return Ra()||Te(!1),A.useContext(Ta).location}function kg(e){A.useContext(Ia).static||A.useLayoutEffect(e)}function O1(){let{isDataRoute:e}=A.useContext(_r);return e?K1():b1()}function b1(){Ra()||Te(!1);let e=A.useContext(Jc),{basename:t,future:n,navigator:r}=A.useContext(Ia),{matches:i}=A.useContext(_r),{pathname:s}=Eg(),o=JSON.stringify(k1(i,n.v7_relativeSplatPath)),a=A.useRef(!1);return kg(()=>{a.current=!0}),A.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=C1(u,JSON.parse(o),s,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:or([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,o,s,e])}function L1(){let{matches:e}=A.useContext(_r),t=e[e.length-1];return t?t.params:{}}function D1(e,t){return F1(e,t)}function F1(e,t,n,r){Ra()||Te(!1);let{navigator:i}=A.useContext(Ia),{matches:s}=A.useContext(_r),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Eg(),c;if(t){var d;let x=typeof t=="string"?ci(t):t;l==="/"||(d=x.pathname)!=null&&d.startsWith(l)||Te(!1),c=x}else c=u;let m=c.pathname||"/",w=m;if(l!=="/"){let x=l.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let y=a1(e,{pathname:w}),v=$1(y&&y.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:or([l,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:or([l,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return t&&v?A.createElement(Ta.Provider,{value:{location:us({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Rn.Pop}},v):v}function j1(){let e=W1(),t=P1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},t),n?A.createElement("pre",{style:i},n):null,null)}const M1=A.createElement(j1,null);class U1 extends A.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?A.createElement(_r.Provider,{value:this.props.routeContext},A.createElement(xg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function z1(e){let{routeContext:t,match:n,children:r}=e,i=A.useContext(Jc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(_r.Provider,{value:t},r)}function $1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||Te(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:m,errors:w}=n,y=d.route.loader&&m[d.route.id]===void 0&&(!w||w[d.route.id]===void 0);if(d.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,m)=>{let w,y=!1,v=null,x=null;n&&(w=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||M1,l&&(u<0&&m===0?(y=!0,x=null):u===m&&(y=!0,x=d.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,m+1)),f=()=>{let p;return w?p=v:y?p=x:d.route.Component?p=A.createElement(d.route.Component,null):d.route.element?p=d.route.element:p=c,A.createElement(z1,{match:d,routeContext:{outlet:c,matches:h,isDataRoute:n!=null},children:p})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?A.createElement(U1,{location:n.location,revalidation:n.revalidation,component:v,error:w,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var Cg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Cg||{}),qo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(qo||{});function B1(e){let t=A.useContext(Jc);return t||Te(!1),t}function V1(e){let t=A.useContext(A1);return t||Te(!1),t}function H1(e){let t=A.useContext(_r);return t||Te(!1),t}function Ig(e){let t=H1(),n=t.matches[t.matches.length-1];return n.route.id||Te(!1),n.route.id}function W1(){var e;let t=A.useContext(xg),n=V1(qo.UseRouteError),r=Ig(qo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function K1(){let{router:e}=B1(Cg.UseNavigateStable),t=Ig(qo.UseNavigateStable),n=A.useRef(!1);return kg(()=>{n.current=!0}),A.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,us({fromRouteId:t},s)))},[e,t])}function Nu(e){Te(!1)}function q1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Rn.Pop,navigator:s,static:o=!1,future:a}=e;Ra()&&Te(!1);let l=t.replace(/^\/*/,"/"),u=A.useMemo(()=>({basename:l,navigator:s,static:o,future:us({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ci(r));let{pathname:c="/",search:d="",hash:m="",state:w=null,key:y="default"}=r,v=A.useMemo(()=>{let x=_g(c,l);return x==null?null:{location:{pathname:x,search:d,hash:m,state:w,key:y},navigationType:i}},[l,c,d,m,w,y,i]);return v==null?null:A.createElement(Ia.Provider,{value:u},A.createElement(Ta.Provider,{children:n,value:v}))}function G1(e){let{children:t,location:n}=e;return D1(Au(t),n)}new Promise(()=>{});function Au(e,t){t===void 0&&(t=[]);let n=[];return A.Children.forEach(e,(r,i)=>{if(!A.isValidElement(r))return;let s=[...t,i];if(r.type===A.Fragment){n.push.apply(n,Au(r.props.children,s));return}r.type!==Nu&&Te(!1),!r.props.index||!r.props.children||Te(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Au(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const J1="6";try{window.__reactRouterVersion=J1}catch{}const Q1="startTransition",Bf=Kv[Q1];function X1(e){let{basename:t,children:n,future:r,window:i}=e,s=A.useRef();s.current==null&&(s.current=i1({window:i,v5Compat:!0}));let o=s.current,[a,l]=A.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=A.useCallback(d=>{u&&Bf?Bf(()=>l(d)):l(d)},[l,u]);return A.useLayoutEffect(()=>o.listen(c),[o,c]),A.createElement(q1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var Vf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Vf||(Vf={}));var Hf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hf||(Hf={}));var Xe=function(){return Xe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Xe.apply(this,arguments)};function Qc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Go(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var le="-ms-",Bi="-moz-",ne="-webkit-",Tg="comm",Pa="rule",Xc="decl",Y1="@import",Rg="@keyframes",Z1="@layer",Pg=Math.abs,Yc=String.fromCharCode,Ou=Object.assign;function e_(e,t){return Ae(e,0)^45?(((t<<2^Ae(e,0))<<2^Ae(e,1))<<2^Ae(e,2))<<2^Ae(e,3):0}function Ng(e){return e.trim()}function Jt(e,t){return(e=t.exec(e))?e[0]:e}function Q(e,t,n){return e.replace(t,n)}function uo(e,t,n){return e.indexOf(t,n)}function Ae(e,t){return e.charCodeAt(t)|0}function ei(e,t,n){return e.slice(t,n)}function jt(e){return e.length}function Ag(e){return e.length}function Oi(e,t){return t.push(e),e}function t_(e,t){return e.map(t).join("")}function Wf(e,t){return e.filter(function(n){return!Jt(n,t)})}var Na=1,ti=1,Og=0,wt=0,Se=0,di="";function Aa(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Na,column:ti,length:o,return:"",siblings:a}}function yn(e,t){return Ou(Aa("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function xr(e){for(;e.root;)e=yn(e.root,{children:[e]});Oi(e,e.siblings)}function n_(){return Se}function r_(){return Se=wt>0?Ae(di,--wt):0,ti--,Se===10&&(ti=1,Na--),Se}function Tt(){return Se=wt<Og?Ae(di,wt++):0,ti++,Se===10&&(ti=1,Na++),Se}function ar(){return Ae(di,wt)}function co(){return wt}function Oa(e,t){return ei(di,e,t)}function bu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function i_(e){return Na=ti=1,Og=jt(di=e),wt=0,[]}function s_(e){return di="",e}function wl(e){return Ng(Oa(wt-1,Lu(e===91?e+2:e===40?e+1:e)))}function o_(e){for(;(Se=ar())&&Se<33;)Tt();return bu(e)>2||bu(Se)>3?"":" "}function a_(e,t){for(;--t&&Tt()&&!(Se<48||Se>102||Se>57&&Se<65||Se>70&&Se<97););return Oa(e,co()+(t<6&&ar()==32&&Tt()==32))}function Lu(e){for(;Tt();)switch(Se){case e:return wt;case 34:case 39:e!==34&&e!==39&&Lu(Se);break;case 40:e===41&&Lu(e);break;case 92:Tt();break}return wt}function l_(e,t){for(;Tt()&&e+Se!==57;)if(e+Se===84&&ar()===47)break;return"/*"+Oa(t,wt-1)+"*"+Yc(e===47?e:Tt())}function u_(e){for(;!bu(ar());)Tt();return Oa(e,wt)}function c_(e){return s_(fo("",null,null,null,[""],e=i_(e),0,[0],e))}function fo(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,m=0,w=0,y=0,v=1,x=1,h=1,f=0,p="",S=i,C=s,R=r,T=p;x;)switch(y=f,f=Tt()){case 40:if(y!=108&&Ae(T,d-1)==58){uo(T+=Q(wl(f),"&","&\f"),"&\f",Pg(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:T+=wl(f);break;case 9:case 10:case 13:case 32:T+=o_(y);break;case 92:T+=a_(co()-1,7);continue;case 47:switch(ar()){case 42:case 47:Oi(d_(l_(Tt(),co()),t,n,l),l);break;default:T+="/"}break;case 123*v:a[u++]=jt(T)*h;case 125*v:case 59:case 0:switch(f){case 0:case 125:x=0;case 59+c:h==-1&&(T=Q(T,/\f/g,"")),w>0&&jt(T)-d&&Oi(w>32?qf(T+";",r,n,d-1,l):qf(Q(T," ","")+";",r,n,d-2,l),l);break;case 59:T+=";";default:if(Oi(R=Kf(T,t,n,u,c,i,a,p,S=[],C=[],d,s),s),f===123)if(c===0)fo(T,t,R,R,S,s,d,a,C);else switch(m===99&&Ae(T,3)===110?100:m){case 100:case 108:case 109:case 115:fo(e,R,R,r&&Oi(Kf(e,R,R,0,0,i,a,p,i,S=[],d,C),C),i,C,d,a,r?S:C);break;default:fo(T,R,R,R,[""],C,0,a,C)}}u=c=w=0,v=h=1,p=T="",d=o;break;case 58:d=1+jt(T),w=y;default:if(v<1){if(f==123)--v;else if(f==125&&v++==0&&r_()==125)continue}switch(T+=Yc(f),f*v){case 38:h=c>0?1:(T+="\f",-1);break;case 44:a[u++]=(jt(T)-1)*h,h=1;break;case 64:ar()===45&&(T+=wl(Tt())),m=ar(),c=d=jt(p=T+=u_(co())),f++;break;case 45:y===45&&jt(T)==2&&(v=0)}}return s}function Kf(e,t,n,r,i,s,o,a,l,u,c,d){for(var m=i-1,w=i===0?s:[""],y=Ag(w),v=0,x=0,h=0;v<r;++v)for(var f=0,p=ei(e,m+1,m=Pg(x=o[v])),S=e;f<y;++f)(S=Ng(x>0?w[f]+" "+p:Q(p,/&\f/g,w[f])))&&(l[h++]=S);return Aa(e,t,n,i===0?Pa:a,l,u,c,d)}function d_(e,t,n,r){return Aa(e,t,n,Tg,Yc(n_()),ei(e,2,-2),0,r)}function qf(e,t,n,r,i){return Aa(e,t,n,Xc,ei(e,0,r),ei(e,r+1,-1),r,i)}function bg(e,t,n){switch(e_(e,t)){case 5103:return ne+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ne+e+e;case 4789:return Bi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ne+e+Bi+e+le+e+e;case 5936:switch(Ae(e,t+11)){case 114:return ne+e+le+Q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ne+e+le+Q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ne+e+le+Q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ne+e+le+e+e;case 6165:return ne+e+le+"flex-"+e+e;case 5187:return ne+e+Q(e,/(\w+).+(:[^]+)/,ne+"box-$1$2"+le+"flex-$1$2")+e;case 5443:return ne+e+le+"flex-item-"+Q(e,/flex-|-self/g,"")+(Jt(e,/flex-|baseline/)?"":le+"grid-row-"+Q(e,/flex-|-self/g,""))+e;case 4675:return ne+e+le+"flex-line-pack"+Q(e,/align-content|flex-|-self/g,"")+e;case 5548:return ne+e+le+Q(e,"shrink","negative")+e;case 5292:return ne+e+le+Q(e,"basis","preferred-size")+e;case 6060:return ne+"box-"+Q(e,"-grow","")+ne+e+le+Q(e,"grow","positive")+e;case 4554:return ne+Q(e,/([^-])(transform)/g,"$1"+ne+"$2")+e;case 6187:return Q(Q(Q(e,/(zoom-|grab)/,ne+"$1"),/(image-set)/,ne+"$1"),e,"")+e;case 5495:case 3959:return Q(e,/(image-set\([^]*)/,ne+"$1$`$1");case 4968:return Q(Q(e,/(.+:)(flex-)?(.*)/,ne+"box-pack:$3"+le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ne+e+e;case 4200:if(!Jt(e,/flex-|baseline/))return le+"grid-column-align"+ei(e,t)+e;break;case 2592:case 3360:return le+Q(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Jt(r.props,/grid-\w+-end/)})?~uo(e+(n=n[t].value),"span",0)?e:le+Q(e,"-start","")+e+le+"grid-row-span:"+(~uo(n,"span",0)?Jt(n,/\d+/):+Jt(n,/\d+/)-+Jt(e,/\d+/))+";":le+Q(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Jt(r.props,/grid-\w+-start/)})?e:le+Q(Q(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Q(e,/(.+)-inline(.+)/,ne+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jt(e)-1-t>6)switch(Ae(e,t+1)){case 109:if(Ae(e,t+4)!==45)break;case 102:return Q(e,/(.+:)(.+)-([^]+)/,"$1"+ne+"$2-$3$1"+Bi+(Ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~uo(e,"stretch",0)?bg(Q(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Q(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return le+i+":"+s+u+(o?le+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(Ae(e,t+6)===121)return Q(e,":",":"+ne)+e;break;case 6444:switch(Ae(e,Ae(e,14)===45?18:11)){case 120:return Q(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ne+(Ae(e,14)===45?"inline-":"")+"box$3$1"+ne+"$2$3$1"+le+"$2box$3")+e;case 100:return Q(e,":",":"+le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Q(e,"scroll-","scroll-snap-")+e}return e}function Jo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function f_(e,t,n,r){switch(e.type){case Z1:if(e.children.length)break;case Y1:case Xc:return e.return=e.return||e.value;case Tg:return"";case Rg:return e.return=e.value+"{"+Jo(e.children,r)+"}";case Pa:if(!jt(e.value=e.props.join(",")))return""}return jt(n=Jo(e.children,r))?e.return=e.value+"{"+n+"}":""}function h_(e){var t=Ag(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function p_(e){return function(t){t.root||(t=t.return)&&e(t)}}function m_(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Xc:e.return=bg(e.value,e.length,n);return;case Rg:return Jo([yn(e,{value:Q(e.value,"@","@"+ne)})],r);case Pa:if(e.length)return t_(n=e.props,function(i){switch(Jt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xr(yn(e,{props:[Q(i,/:(read-\w+)/,":"+Bi+"$1")]})),xr(yn(e,{props:[i]})),Ou(e,{props:Wf(n,r)});break;case"::placeholder":xr(yn(e,{props:[Q(i,/:(plac\w+)/,":"+ne+"input-$1")]})),xr(yn(e,{props:[Q(i,/:(plac\w+)/,":"+Bi+"$1")]})),xr(yn(e,{props:[Q(i,/:(plac\w+)/,le+"input-$1")]})),xr(yn(e,{props:[i]})),Ou(e,{props:Wf(n,r)});break}return""})}}var g_={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},rt={},ni=typeof process<"u"&&rt!==void 0&&(rt.REACT_APP_SC_ATTR||rt.SC_ATTR)||"data-styled",Lg="active",Dg="data-styled-version",ba="6.1.13",Zc=`/*!sc*/
`,Qo=typeof window<"u"&&"HTMLElement"in window,y_=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&rt!==void 0&&rt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&rt.REACT_APP_SC_DISABLE_SPEEDY!==""?rt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&rt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&rt!==void 0&&rt.SC_DISABLE_SPEEDY!==void 0&&rt.SC_DISABLE_SPEEDY!==""&&rt.SC_DISABLE_SPEEDY!=="false"&&rt.SC_DISABLE_SPEEDY),La=Object.freeze([]),ri=Object.freeze({});function v_(e,t,n){return n===void 0&&(n=ri),e.theme!==n.theme&&e.theme||t||n.theme}var Fg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),w_=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,__=/(^-|-$)/g;function Gf(e){return e.replace(w_,"-").replace(__,"")}var S_=/(a)(d)/gi,Gs=52,Jf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Du(e){var t,n="";for(t=Math.abs(e);t>Gs;t=t/Gs|0)n=Jf(t%Gs)+n;return(Jf(t%Gs)+n).replace(S_,"$1-$2")}var _l,jg=5381,Fr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Mg=function(e){return Fr(jg,e)};function x_(e){return Du(Mg(e)>>>0)}function E_(e){return e.displayName||e.name||"Component"}function Sl(e){return typeof e=="string"&&!0}var Ug=typeof Symbol=="function"&&Symbol.for,zg=Ug?Symbol.for("react.memo"):60115,k_=Ug?Symbol.for("react.forward_ref"):60112,C_={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},I_={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$g={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},T_=((_l={})[k_]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_l[zg]=$g,_l);function Qf(e){return("type"in(t=e)&&t.type.$$typeof)===zg?$g:"$$typeof"in e?T_[e.$$typeof]:C_;var t}var R_=Object.defineProperty,P_=Object.getOwnPropertyNames,Xf=Object.getOwnPropertySymbols,N_=Object.getOwnPropertyDescriptor,A_=Object.getPrototypeOf,Yf=Object.prototype;function Bg(e,t,n){if(typeof t!="string"){if(Yf){var r=A_(t);r&&r!==Yf&&Bg(e,r,n)}var i=P_(t);Xf&&(i=i.concat(Xf(t)));for(var s=Qf(e),o=Qf(t),a=0;a<i.length;++a){var l=i[a];if(!(l in I_||n&&n[l]||o&&l in o||s&&l in s)){var u=N_(t,l);try{R_(e,l,u)}catch{}}}}return e}function ii(e){return typeof e=="function"}function ed(e){return typeof e=="object"&&"styledComponentId"in e}function er(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zf(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function cs(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Fu(e,t,n){if(n===void 0&&(n=!1),!n&&!cs(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Fu(e[r],t[r]);else if(cs(t))for(var r in t)e[r]=Fu(e[r],t[r]);return e}function td(e,t){Object.defineProperty(e,"toString",{value:t})}function Ss(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var O_=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Ss(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Zc);return n},e}(),ho=new Map,Xo=new Map,po=1,Js=function(e){if(ho.has(e))return ho.get(e);for(;Xo.has(po);)po++;var t=po++;return ho.set(e,t),Xo.set(t,e),t},b_=function(e,t){po=t+1,ho.set(e,t),Xo.set(t,e)},L_="style[".concat(ni,"][").concat(Dg,'="').concat(ba,'"]'),D_=new RegExp("^".concat(ni,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),F_=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},j_=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Zc),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(D_);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(b_(c,u),F_(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},eh=function(e){for(var t=document.querySelectorAll(L_),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(ni)!==Lg&&(j_(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function M_(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Vg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ni,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(ni,Lg),r.setAttribute(Dg,ba);var o=M_();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},U_=function(){function e(t){this.element=Vg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ss(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),z_=function(){function e(t){this.element=Vg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),$_=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),th=Qo,B_={isServer:!Qo,useCSSOMInjection:!y_},Hg=function(){function e(t,n,r){t===void 0&&(t=ri),n===void 0&&(n={});var i=this;this.options=Xe(Xe({},B_),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Qo&&th&&(th=!1,eh(this)),td(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var m=function(h){return Xo.get(h)}(d);if(m===void 0)return"continue";var w=s.names.get(m),y=o.getGroup(d);if(w===void 0||!w.size||y.length===0)return"continue";var v="".concat(ni,".g").concat(d,'[id="').concat(m,'"]'),x="";w!==void 0&&w.forEach(function(h){h.length>0&&(x+="".concat(h,","))}),l+="".concat(y).concat(v,'{content:"').concat(x,'"}').concat(Zc)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Js(t)},e.prototype.rehydrate=function(){!this.server&&Qo&&eh(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Xe(Xe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new $_(i):r?new U_(i):new z_(i)}(this.options),new O_(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Js(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Js(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Js(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),V_=/&/g,H_=/^\s*\/\/.*$/gm;function Wg(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Wg(n.children,t)),n})}function W_(e){var t,n,r,i=ri,s=i.options,o=s===void 0?ri:s,a=i.plugins,l=a===void 0?La:a,u=function(m,w,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},c=l.slice();c.push(function(m){m.type===Pa&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(V_,n).replace(r,u))}),o.prefix&&c.push(m_),c.push(f_);var d=function(m,w,y,v){w===void 0&&(w=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var x=m.replace(H_,""),h=c_(y||w?"".concat(y," ").concat(w," { ").concat(x," }"):x);o.namespace&&(h=Wg(h,o.namespace));var f=[];return Jo(h,h_(c.concat(p_(function(p){return f.push(p)})))),f};return d.hash=l.length?l.reduce(function(m,w){return w.name||Ss(15),Fr(m,w.name)},jg).toString():"",d}var K_=new Hg,ju=W_(),Kg=ke.createContext({shouldForwardProp:void 0,styleSheet:K_,stylis:ju});Kg.Consumer;ke.createContext(void 0);function nh(){return A.useContext(Kg)}var q_=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ju);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,td(this,function(){throw Ss(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ju),this.name+t.hash},e}(),G_=function(e){return e>="A"&&e<="Z"};function rh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;G_(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var qg=function(e){return e==null||e===!1||e===""},Gg=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!qg(s)&&(Array.isArray(s)&&s.isCss||ii(s)?r.push("".concat(rh(i),":"),s,";"):cs(s)?r.push.apply(r,Go(Go(["".concat(i," {")],Gg(s),!1),["}"],!1)):r.push("".concat(rh(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in g_||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function lr(e,t,n,r){if(qg(e))return[];if(ed(e))return[".".concat(e.styledComponentId)];if(ii(e)){if(!ii(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return lr(i,t,n,r)}var s;return e instanceof q_?n?(e.inject(n,r),[e.getName(r)]):[e]:cs(e)?Gg(e):Array.isArray(e)?Array.prototype.concat.apply(La,e.map(function(o){return lr(o,t,n,r)})):[e.toString()]}function J_(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ii(n)&&!ed(n))return!1}return!0}var Q_=Mg(ba),X_=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&J_(t),this.componentId=n,this.baseHash=Fr(Q_,n),this.baseStyle=r,Hg.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=er(i,this.staticRulesId);else{var s=Zf(lr(this.rules,t,n,r)),o=Du(Fr(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=er(i,o),this.staticRulesId=o}else{for(var l=Fr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var m=Zf(lr(d,t,n,r));l=Fr(l,m+c),u+=m}}if(u){var w=Du(l>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(u,".".concat(w),void 0,this.componentId)),i=er(i,w)}}return i},e}(),Jg=ke.createContext(void 0);Jg.Consumer;var xl={};function Y_(e,t,n){var r=ed(e),i=e,s=!Sl(e),o=t.attrs,a=o===void 0?La:o,l=t.componentId,u=l===void 0?function(S,C){var R=typeof S!="string"?"sc":Gf(S);xl[R]=(xl[R]||0)+1;var T="".concat(R,"-").concat(x_(ba+R+xl[R]));return C?"".concat(C,"-").concat(T):T}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(S){return Sl(S)?"styled.".concat(S):"Styled(".concat(E_(S),")")}(e):c,m=t.displayName&&t.componentId?"".concat(Gf(t.displayName),"-").concat(t.componentId):t.componentId||u,w=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;y=function(S,C){return v(S,C)&&x(S,C)}}else y=v}var h=new X_(n,m,r?i.componentStyle:void 0);function f(S,C){return function(R,T,b){var K=R.attrs,z=R.componentStyle,_e=R.defaultProps,H=R.foldedComponentIds,G=R.styledComponentId,D=R.target,B=ke.useContext(Jg),J=nh(),ie=R.shouldForwardProp||J.shouldForwardProp,L=v_(T,B,_e)||ri,U=function(At,be,dt){for(var Kt,Ot=Xe(Xe({},be),{className:void 0,theme:dt}),gi=0;gi<At.length;gi+=1){var Kn=ii(Kt=At[gi])?Kt(Ot):Kt;for(var bt in Kn)Ot[bt]=bt==="className"?er(Ot[bt],Kn[bt]):bt==="style"?Xe(Xe({},Ot[bt]),Kn[bt]):Kn[bt]}return be.className&&(Ot.className=er(Ot.className,be.className)),Ot}(K,T,L),V=U.as||D,ee={};for(var te in U)U[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&U.theme===L||(te==="forwardedAs"?ee.as=U.forwardedAs:ie&&!ie(te,V)||(ee[te]=U[te]));var Wt=function(At,be){var dt=nh(),Kt=At.generateAndInjectStyles(be,dt.styleSheet,dt.stylis);return Kt}(z,U),qe=er(H,G);return Wt&&(qe+=" "+Wt),U.className&&(qe+=" "+U.className),ee[Sl(V)&&!Fg.has(V)?"class":"className"]=qe,ee.ref=b,A.createElement(V,ee)}(p,S,C)}f.displayName=d;var p=ke.forwardRef(f);return p.attrs=w,p.componentStyle=h,p.displayName=d,p.shouldForwardProp=y,p.foldedComponentIds=r?er(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=m,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(C){for(var R=[],T=1;T<arguments.length;T++)R[T-1]=arguments[T];for(var b=0,K=R;b<K.length;b++)Fu(C,K[b],!0);return C}({},i.defaultProps,S):S}}),td(p,function(){return".".concat(p.styledComponentId)}),s&&Bg(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function ih(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var sh=function(e){return Object.assign(e,{isCss:!0})};function Z_(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ii(e)||cs(e))return sh(lr(ih(La,Go([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?lr(r):sh(lr(ih(r,t)))}function Mu(e,t,n){if(n===void 0&&(n=ri),!t)throw Ss(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,Z_.apply(void 0,Go([i],s,!1)))};return r.attrs=function(i){return Mu(e,t,Xe(Xe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Mu(e,t,Xe(Xe({},n),i))},r}var Qg=function(e){return Mu(Y_,e)},Ht=Qg;Fg.forEach(function(e){Ht[e]=Qg(e)});const Xg=Ht.section`
    width: 409px;
    height: 503px;
    border-radius: 20px;
    border: 3px solid var(--dark_green);
    background-color: var(--card_color);
    box-shadow: 5px 5px 0px var(--primary_color);
    padding: 32px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .middle{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 503px;
        gap: 16px;
    }

    .content{
        display: flex;
        flex-direction: column;
        gap: 16px;
        height: 445px;
        overflow: auto;
        width: 342px;
        overflow-x: hidden;

        &::-webkit-scrollbar{
            width: 10px;
        }

        &::-webkit-scrollbar-track{
            background-color: var(--card_color);
        }

        &::-webkit-scrollbar-thumb{
            background-color: var(--dark_green);
            border-radius: 10px;
        }
    }

    h3{
        font-weight: 800;
        font-size: 32px;
        line-height: 40px;
        color: var(--secondary_text);
        font-family: "Roboto", sans-serif;
    }
    p.during{
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
        color: var(--tertiary_text);
    }

    .technologies{
        width: 353px;
        padding: 0 8px;
        gap: 10px;
        display: flex;

        p{
            padding: 0 8px;
            background-color: var(--dark_green);
            border-radius: 4px;

            font-family: "Roboto", sans-serif;
            font-weight: 700;
            font-size: 12px;
            line-height: 27px;
            color: var(--secondary_text);
        }
    }

    p.descrip{
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: 24px;
        line-height: 34px;
        color: var(--secondary_text);
    }

    button{
        width: 353px;
        height: 58px;
        background-color: var(--dark_green);
        border-radius: 6px;
        border: none;
        padding: 10px 0;
        cursor: pointer;

        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 34px;
        color: var(--secondary_text);
        text-align: center;

        transform: translate(-6px);

        transition: 0.2s;
        &:hover{
            background-color: var(--primary_color);
        }
    }
`,eS=Ht.div`
    z-index: 99;
    position: absolute;
    width: 406px;
    transform: translate(-32px);
    overflow: hidden;
    border-radius: 20px;
    opacity: 0;
    transition: .2s;
    transform: translate(-32px,-34px);
    &:hover{
        opacity: 1;
    }

    .option{
        height: 251.5px;
        transition: .2s;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        &:nth-child(1){
            background-color: rgba(9, 64, 77, 0.812);
            &:hover{
                background-color: rgba(9, 64, 77, 1);
            }
        }
        &:nth-child(2){
            background-color: rgba(52, 8, 8, 0.659);
            &:hover{
                background-color: rgba(52, 8, 8, 1);
            }
        }
    }
`,tS=({setCardFormState:e})=>_.jsx(Xg,{style:{cursor:"pointer"},onClick:e,children:_.jsxs("div",{className:"middle",children:[_.jsx("img",{src:"/assets/images/plus.png",alt:"Mais"}),_.jsx("h3",{children:"Adicionar Card"})]})}),nS=({setState:e,del:t})=>_.jsxs(eS,{children:[_.jsx("div",{className:"option",onClick:e,children:_.jsx("img",{src:"/assets/images/edit.png",alt:"Editar"})}),_.jsx("div",{className:"option",onClick:t,children:_.jsx("img",{src:"/assets/images/trash.png",alt:"Deletar"})})]}),rS=({title:e,during:t,technologies:n,description:r,link:i,editMode:s,setCardFormState:o,del:a})=>_.jsxs(Xg,{children:[_.jsxs("div",{className:"content",children:[_.jsx("h3",{children:e}),_.jsx("p",{className:"during",children:t}),_.jsx("div",{className:"technologies",children:n.map((l,u)=>_.jsx("p",{children:l},u))}),_.jsx("p",{className:"descrip",children:r})]}),s&&_.jsx(nS,{setState:()=>o(),del:()=>a()}),i&&_.jsx("a",{href:i,children:_.jsx("button",{children:"Ver repositório"})})]}),iS=Ht.header`
    width: 1368px;
    height: 108px;
    background-color: var(--dark_green);
    border-radius: 0px 0px 35.6px 35.6px;
    display: flex;
    align-items: center;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 98;

    .header_links{
        width: 775px;
        height: 38px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 64px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);

        a{
            font-family: "Roboto", sans-serif;
            font-weight: 600;
            font-size: 32px;
            line-height: 37.5px;
            color: var(--secondary_text);
            text-decoration: none;
            cursor: pointer;
            transition: 0.3s;

            &:hover{
                color: var(--primary_color);
            }
        }
    }
    .log_in{
        position: absolute;
        left: 1168px;
        width: 168px;
        height: 58px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        gap: 10px;

        img{
            width: 32px
        }
    }
    .log_out{
        width: 150px;
        height: 76px;
        position: absolute;
        left: 1186px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img{
            width: 77px;
            height: 76px;
            background-color: var(--primary_color);
            border: 2px solid var(--dark_green);
            border-radius: 50%;
        }
    }

    p{
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: 32px;
        line-height: 37.5px;
        color: var(--secondary_text);
        cursor: pointer;
        transition: 0.3s;

        &:hover{
            color: var(--primary_color);
        }
    }
`;var oh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},sS=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Zg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,w=u&63;l||(w=64,o||(m=64)),r.push(n[c],n[d],n[m],n[w])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Yg(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):sS(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new oS;const m=s<<2|a>>4;if(r.push(m),u!==64){const w=a<<4&240|u>>2;if(r.push(w),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class oS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aS=function(e){const t=Yg(e);return Zg.encodeByteArray(t,!0)},ey=function(e){return aS(e).replace(/\./g,"")},ty=function(e){try{return Zg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=()=>lS().__FIREBASE_DEFAULTS__,cS=()=>{if(typeof process>"u"||typeof oh>"u")return;const e=oh.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},dS=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ty(e[1]);return t&&JSON.parse(t)},nd=()=>{try{return uS()||cS()||dS()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},fS=e=>{var t,n;return(n=(t=nd())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ny=()=>{var e;return(e=nd())===null||e===void 0?void 0:e.config},ry=e=>{var t;return(t=nd())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function mS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gS(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function yS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vS(){const e=He();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function wS(){try{return typeof indexedDB=="object"}catch{return!1}}function _S(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="FirebaseError";class Hn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=SS,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?xS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Hn(i,a,r)}}function xS(e,t){return e.replace(ES,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const ES=/\{\$([^}]+)}/g;function kS(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Yo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(ah(s)&&ah(o)){if(!Yo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ah(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function CS(e,t){const n=new IS(e,t);return n.subscribe.bind(n)}class IS{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TS(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=El),i.error===void 0&&(i.error=El),i.complete===void 0&&(i.complete=El);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TS(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function El(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(e){return e&&e._delegate?e._delegate:e}class si{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new hS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(NS(t))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Qn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qn){return this.instances.has(t)}getOptions(t=Qn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PS(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qn){return this.component?this.component.multipleInstances?t:Qn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PS(e){return e===Qn?void 0:e}function NS(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new RS(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(se||(se={}));const OS={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},bS=se.INFO,LS={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},DS=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=LS[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class iy{constructor(t){this.name=t,this._logLevel=bS,this._logHandler=DS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in se))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?OS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...t),this._logHandler(this,se.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...t),this._logHandler(this,se.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,se.INFO,...t),this._logHandler(this,se.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,se.WARN,...t),this._logHandler(this,se.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...t),this._logHandler(this,se.ERROR,...t)}}const FS=(e,t)=>t.some(n=>e instanceof n);let lh,uh;function jS(){return lh||(lh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MS(){return uh||(uh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sy=new WeakMap,Uu=new WeakMap,oy=new WeakMap,kl=new WeakMap,rd=new WeakMap;function US(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(jn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&sy.set(n,e)}).catch(()=>{}),rd.set(t,e),t}function zS(e){if(Uu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Uu.set(e,t)}let zu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Uu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||oy.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function $S(e){zu=e(zu)}function BS(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Cl(this),t,...n);return oy.set(r,t.sort?t.sort():[t]),jn(r)}:MS().includes(e)?function(...t){return e.apply(Cl(this),t),jn(sy.get(this))}:function(...t){return jn(e.apply(Cl(this),t))}}function VS(e){return typeof e=="function"?BS(e):(e instanceof IDBTransaction&&zS(e),FS(e,jS())?new Proxy(e,zu):e)}function jn(e){if(e instanceof IDBRequest)return US(e);if(kl.has(e))return kl.get(e);const t=VS(e);return t!==e&&(kl.set(e,t),rd.set(t,e)),t}const Cl=e=>rd.get(e);function HS(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=jn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(jn(o.result),l.oldVersion,l.newVersion,jn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const WS=["get","getKey","getAll","getAllKeys","count"],KS=["put","add","delete","clear"],Il=new Map;function ch(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Il.get(t))return Il.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=KS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||WS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Il.set(t,s),s}$S(e=>({...e,get:(t,n,r)=>ch(t,n)||e.get(t,n,r),has:(t,n)=>!!ch(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GS(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const $u="@firebase/app",dh="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new iy("@firebase/app"),JS="@firebase/app-compat",QS="@firebase/analytics-compat",XS="@firebase/analytics",YS="@firebase/app-check-compat",ZS="@firebase/app-check",ex="@firebase/auth",tx="@firebase/auth-compat",nx="@firebase/database",rx="@firebase/data-connect",ix="@firebase/database-compat",sx="@firebase/functions",ox="@firebase/functions-compat",ax="@firebase/installations",lx="@firebase/installations-compat",ux="@firebase/messaging",cx="@firebase/messaging-compat",dx="@firebase/performance",fx="@firebase/performance-compat",hx="@firebase/remote-config",px="@firebase/remote-config-compat",mx="@firebase/storage",gx="@firebase/storage-compat",yx="@firebase/firestore",vx="@firebase/vertexai",wx="@firebase/firestore-compat",_x="firebase",Sx="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="[DEFAULT]",xx={[$u]:"fire-core",[JS]:"fire-core-compat",[XS]:"fire-analytics",[QS]:"fire-analytics-compat",[ZS]:"fire-app-check",[YS]:"fire-app-check-compat",[ex]:"fire-auth",[tx]:"fire-auth-compat",[nx]:"fire-rtdb",[rx]:"fire-data-connect",[ix]:"fire-rtdb-compat",[sx]:"fire-fn",[ox]:"fire-fn-compat",[ax]:"fire-iid",[lx]:"fire-iid-compat",[ux]:"fire-fcm",[cx]:"fire-fcm-compat",[dx]:"fire-perf",[fx]:"fire-perf-compat",[hx]:"fire-rc",[px]:"fire-rc-compat",[mx]:"fire-gcs",[gx]:"fire-gcs-compat",[yx]:"fire-fst",[wx]:"fire-fst-compat",[vx]:"fire-vertex","fire-js":"fire-js",[_x]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Map,Ex=new Map,Vu=new Map;function fh(e,t){try{e.container.addComponent(t)}catch(n){dn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ds(e){const t=e.name;if(Vu.has(t))return dn.debug(`There were multiple attempts to register component ${t}.`),!1;Vu.set(t,e);for(const n of Zo.values())fh(n,e);for(const n of Ex.values())fh(n,e);return!0}function ay(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function en(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mn=new xs("app","Firebase",kx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=Sx;function ly(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Bu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Mn.create("bad-app-name",{appName:String(i)});if(n||(n=ny()),!n)throw Mn.create("no-options");const s=Zo.get(i);if(s){if(Yo(n,s.options)&&Yo(r,s.config))return s;throw Mn.create("duplicate-app",{appName:i})}const o=new AS(i);for(const l of Vu.values())o.addComponent(l);const a=new Cx(n,r,o);return Zo.set(i,a),a}function Ix(e=Bu){const t=Zo.get(e);if(!t&&e===Bu&&ny())return ly();if(!t)throw Mn.create("no-app",{appName:e});return t}function Vr(e,t,n){var r;let i=(r=xx[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),dn.warn(a.join(" "));return}ds(new si(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx="firebase-heartbeat-database",Rx=1,fs="firebase-heartbeat-store";let Tl=null;function uy(){return Tl||(Tl=HS(Tx,Rx,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(fs)}catch(n){console.warn(n)}}}}).catch(e=>{throw Mn.create("idb-open",{originalErrorMessage:e.message})})),Tl}async function Px(e){try{const n=(await uy()).transaction(fs),r=await n.objectStore(fs).get(cy(e));return await n.done,r}catch(t){if(t instanceof Hn)dn.warn(t.message);else{const n=Mn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});dn.warn(n.message)}}}async function hh(e,t){try{const r=(await uy()).transaction(fs,"readwrite");await r.objectStore(fs).put(t,cy(e)),await r.done}catch(n){if(n instanceof Hn)dn.warn(n.message);else{const r=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dn.warn(r.message)}}}function cy(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=1024,Ax=30*24*60*60*1e3;class Ox{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ph();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ax}),this._storage.overwrite(this._heartbeatsCache))}catch(r){dn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ph(),{heartbeatsToSend:r,unsentEntries:i}=bx(this._heartbeatsCache.heartbeats),s=ey(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return dn.warn(n),""}}}function ph(){return new Date().toISOString().substring(0,10)}function bx(e,t=Nx){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),mh(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Lx{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wS()?_S().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Px(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function mh(e){return ey(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(e){ds(new si("platform-logger",t=>new qS(t),"PRIVATE")),ds(new si("heartbeat",t=>new Ox(t),"PRIVATE")),Vr($u,dh,e),Vr($u,dh,"esm2017"),Vr("fire-js","")}Dx("");var Fx="firebase",jx="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vr(Fx,jx,"app");function dy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mx=dy,fy=new xs("auth","Firebase",dy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=new iy("@firebase/auth");function Ux(e,...t){ea.logLevel<=se.WARN&&ea.warn(`Auth (${ks}): ${e}`,...t)}function mo(e,...t){ea.logLevel<=se.ERROR&&ea.error(`Auth (${ks}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e,...t){throw sd(e,...t)}function Rt(e,...t){return sd(e,...t)}function id(e,t,n){const r=Object.assign(Object.assign({},Mx()),{[t]:n});return new xs("auth","Firebase",r).create(t,{appName:e.name})}function ur(e){return id(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zx(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Vt(e,"argument-error"),id(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sd(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return fy.create(e,...t)}function W(e,t,...n){if(!e)throw sd(t,...n)}function tn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw mo(t),new Error(t)}function fn(e,t){e||tn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function $x(){return gh()==="http:"||gh()==="https:"}function gh(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($x()||gS()||"connection"in navigator)?navigator.onLine:!0}function Vx(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,n){this.shortDelay=t,this.longDelay=n,fn(n>t,"Short delay should be less than long delay!"),this.isMobile=pS()||yS()}get(){return Bx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(e,t){fn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=new Cs(3e4,6e4);function ad(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function hi(e,t,n,r,i={}){return py(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Es(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},s);return mS()||(u.referrerPolicy="no-referrer"),hy.fetch()(my(e,e.config.apiHost,n,a),u)})}async function py(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Hx),t);try{const i=new qx(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Qs(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qs(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Qs(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Qs(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw id(e,c,u);Vt(e,c)}}catch(i){if(i instanceof Hn)throw i;Vt(e,"network-request-failed",{message:String(i)})}}async function Kx(e,t,n,r,i={}){const s=await hi(e,t,n,r,i);return"mfaPendingCredential"in s&&Vt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function my(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?od(e.config,i):`${e.config.apiScheme}://${i}`}class qx{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rt(this.auth,"network-request-failed")),Wx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qs(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gx(e,t){return hi(e,"POST","/v1/accounts:delete",t)}async function gy(e,t){return hi(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Jx(e,t=!1){const n=fi(e),r=await n.getIdToken(t),i=ld(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vi(Rl(i.auth_time)),issuedAtTime:Vi(Rl(i.iat)),expirationTime:Vi(Rl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Rl(e){return Number(e)*1e3}function ld(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const i=ty(n);return i?JSON.parse(i):(mo("Failed to decode base64 JWT payload"),null)}catch(i){return mo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yh(e){const t=ld(e);return W(t,"internal-error"),W(typeof t.exp<"u","internal-error"),W(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Hn&&Qx(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Qx({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vi(this.lastLoginAt),this.creationTime=Vi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(e){var t;const n=e.auth,r=await e.getIdToken(),i=await hs(e,gy(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?yy(s.providerUserInfo):[],a=Zx(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Wu(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function Yx(e){const t=fi(e);await ta(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Zx(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function yy(e){return e.map(t=>{var{providerId:n}=t,r=Qc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE(e,t){const n=await py(e,{},async()=>{const r=Es({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=my(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",hy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tE(e,t){return hi(e,"POST","/v2/accounts:revokeToken",ad(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){W(t.idToken,"internal-error"),W(typeof t.idToken<"u","internal-error"),W(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):yh(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){W(t.length!==0,"internal-error");const n=yh(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await eE(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Hr;return r&&(W(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Hr,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(e,t){W(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class nn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Qc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Wu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await hs(this,this.stsTokenManager.getToken(this.auth,t));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Jx(this,t)}reload(){return Yx(this)}_assign(t){this!==t&&(W(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new nn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ta(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(en(this.auth.app))return Promise.reject(ur(this.auth));const t=await this.getIdToken();return await hs(this,Gx(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:S,isAnonymous:C,providerData:R,stsTokenManager:T}=n;W(p&&T,t,"internal-error");const b=Hr.fromJSON(this.name,T);W(typeof p=="string",t,"internal-error"),mn(d,t.name),mn(m,t.name),W(typeof S=="boolean",t,"internal-error"),W(typeof C=="boolean",t,"internal-error"),mn(w,t.name),mn(y,t.name),mn(v,t.name),mn(x,t.name),mn(h,t.name),mn(f,t.name);const K=new nn({uid:p,auth:t,email:m,emailVerified:S,displayName:d,isAnonymous:C,photoURL:y,phoneNumber:w,tenantId:v,stsTokenManager:b,createdAt:h,lastLoginAt:f});return R&&Array.isArray(R)&&(K.providerData=R.map(z=>Object.assign({},z))),x&&(K._redirectEventId=x),K}static async _fromIdTokenResponse(t,n,r=!1){const i=new Hr;i.updateFromServerResponse(n);const s=new nn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ta(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?yy(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Hr;a.updateFromIdToken(r);const l=new nn({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Wu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=new Map;function rn(e){fn(e instanceof Function,"Expected a class definition");let t=vh.get(e);return t?(fn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,vh.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}vy.type="NONE";const wh=vy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(e,t,n){return`firebase:${e}:${t}:${n}`}class Wr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=go(this.userKey,i.apiKey,s),this.fullPersistenceKey=go("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?nn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Wr(rn(wh),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||rn(wh);const o=go(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=nn._fromJSON(t,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Wr(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Wr(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(xy(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(wy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ky(t))return"Blackberry";if(Cy(t))return"Webos";if(_y(t))return"Safari";if((t.includes("chrome/")||Sy(t))&&!t.includes("edge/"))return"Chrome";if(Ey(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wy(e=He()){return/firefox\//i.test(e)}function _y(e=He()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Sy(e=He()){return/crios\//i.test(e)}function xy(e=He()){return/iemobile/i.test(e)}function Ey(e=He()){return/android/i.test(e)}function ky(e=He()){return/blackberry/i.test(e)}function Cy(e=He()){return/webos/i.test(e)}function ud(e=He()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function nE(e=He()){var t;return ud(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function rE(){return vS()&&document.documentMode===10}function Iy(e=He()){return ud(e)||Ey(e)||Cy(e)||ky(e)||/windows phone/i.test(e)||xy(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(e,t=[]){let n;switch(e){case"Browser":n=_h(He());break;case"Worker":n=`${_h(He())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ks}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sE(e,t={}){return hi(e,"GET","/v2/passwordPolicy",ad(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=6;class aE{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:oE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sh(this),this.idTokenSubscription=new Sh(this),this.beforeStateQueue=new iE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Wr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await gy(this,{idToken:t}),r=await nn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(en(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ta(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Vx()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(en(this.app))return Promise.reject(ur(this));const n=t?fi(t):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&W(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return en(this.app)?Promise.reject(ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return en(this.app)?Promise.reject(ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await sE(this),n=new aE(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new xs("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tE(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&rn(t)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ty(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Ux(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Da(e){return fi(e)}class Sh{constructor(t){this.auth=t,this.observer=null,this.addObserver=CS(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uE(e){cd=e}function cE(e){return cd.loadJS(e)}function dE(){return cd.gapiScript}function fE(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(e,t){const n=ay(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yo(s,t??{}))return i;Vt(i,"already-initialized")}return n.initialize({options:t})}function pE(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function mE(e,t,n){const r=Da(e);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Ry(t),{host:o,port:a}=gE(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),yE()}function Ry(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function gE(e){const t=Ry(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:xh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:xh(o)}}}function xh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function yE(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return tn("not implemented")}_getIdTokenResponse(t){return tn("not implemented")}_linkToIdToken(t,n){return tn("not implemented")}_getReauthenticationResolver(t){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(e,t){return Kx(e,"POST","/v1/accounts:signInWithIdp",ad(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="http://localhost";class gr extends Py{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new gr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Qc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new gr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Kr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Kr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Kr(t,n)}buildRequest(){const t={requestUri:vE,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Es(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends dd{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Is{constructor(){super("facebook.com")}static credential(t){return gr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xn.credentialFromTaggedObject(t)}static credentialFromError(t){return xn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xn.credential(t.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Is{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return gr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return En.credentialFromTaggedObject(t)}static credentialFromError(t){return En.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return En.credential(n,r)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Is{constructor(){super("github.com")}static credential(t){return gr._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Xt.credential(t.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Is{constructor(){super("twitter.com")}static credential(t,n){return gr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return kn.credentialFromTaggedObject(t)}static credentialFromError(t){return kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await nn._fromIdTokenResponse(t,r,i),o=Eh(r);return new oi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Eh(r);return new oi({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Eh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends Hn{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,na.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new na(t,n,r,i)}}function Ny(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(e,s,t,r):s})}async function wE(e,t,n=!1){const r=await hs(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return oi._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _E(e,t,n=!1){const{auth:r}=e;if(en(r.app))return Promise.reject(ur(r));const i="reauthenticate";try{const s=await hs(e,Ny(r,i,t,e),n);W(s.idToken,r,"internal-error");const o=ld(s.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(e.uid===a,r,"user-mismatch"),oi._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SE(e,t,n=!1){if(en(e.app))return Promise.reject(ur(e));const r="signIn",i=await Ny(e,r,t),s=await oi._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function xE(e,t,n,r){return fi(e).onIdTokenChanged(t,n,r)}function EE(e,t,n){return fi(e).beforeAuthStateChanged(t,n)}const ra="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ra,"1"),this.storage.removeItem(ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=1e3,CE=10;class Oy extends Ay{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Iy(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);rE()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,CE):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},kE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Oy.type="LOCAL";const IE=Oy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by extends Ay{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}by.type="SESSION";const Ly=by;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Fa(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await TE(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=fd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return window}function PE(e){Bt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function NE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AE(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function OE(){return Dy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="firebaseLocalStorageDb",bE=1,ia="firebaseLocalStorage",jy="fbase_key";class Ts{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ja(e,t){return e.transaction([ia],t?"readwrite":"readonly").objectStore(ia)}function LE(){const e=indexedDB.deleteDatabase(Fy);return new Ts(e).toPromise()}function Ku(){const e=indexedDB.open(Fy,bE);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ia,{keyPath:jy})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ia)?t(r):(r.close(),await LE(),t(await Ku()))})})}async function kh(e,t,n){const r=ja(e,!0).put({[jy]:t,value:n});return new Ts(r).toPromise()}async function DE(e,t){const n=ja(e,!1).get(t),r=await new Ts(n).toPromise();return r===void 0?null:r.value}function Ch(e,t){const n=ja(e,!0).delete(t);return new Ts(n).toPromise()}const FE=800,jE=3;class My{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ku(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>jE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fa._getInstance(OE()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await NE(),!this.activeServiceWorker)return;this.sender=new RE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||AE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ku();return await kh(t,ra,"1"),await Ch(t,ra),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>kh(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>DE(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ch(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=ja(i,!1).getAll();return new Ts(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}My.type="LOCAL";const ME=My;new Cs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(e,t){return t?rn(t):(W(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd extends Py{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Kr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Kr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Kr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function UE(e){return SE(e.auth,new hd(e),e.bypassAuthState)}function zE(e){const{auth:t,user:n}=e;return W(n,t,"internal-error"),_E(n,new hd(e),e.bypassAuthState)}async function $E(e){const{auth:t,user:n}=e;return W(n,t,"internal-error"),wE(n,new hd(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return UE;case"linkViaPopup":case"linkViaRedirect":return $E;case"reauthViaPopup":case"reauthViaRedirect":return zE;default:Vt(this.auth,"internal-error")}}resolve(t){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=new Cs(2e3,1e4);async function VE(e,t,n){if(en(e.app))return Promise.reject(Rt(e,"operation-not-supported-in-this-environment"));const r=Da(e);zx(e,t,dd);const i=Uy(r,n);return new tr(r,"signInViaPopup",t,i).executeNotNull()}class tr extends zy{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,tr.currentPopupAction&&tr.currentPopupAction.cancel(),tr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return W(t,this.auth,"internal-error"),t}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const t=fd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,BE.get())};t()}}tr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="pendingRedirect",yo=new Map;class WE extends zy{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=yo.get(this.auth._key());if(!t){try{const r=await KE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}yo.set(this.auth._key(),t)}return this.bypassAuthState||yo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KE(e,t){const n=JE(t),r=GE(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function qE(e,t){yo.set(e._key(),t)}function GE(e){return rn(e._redirectPersistence)}function JE(e){return go(HE,e.config.apiKey,e.name)}async function QE(e,t,n=!1){if(en(e.app))return Promise.reject(ur(e));const r=Da(e),i=Uy(r,t),o=await new WE(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=10*60*1e3;class YE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!ZE(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!$y(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=XE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ih(t))}saveEventToCache(t){this.cachedEventUids.add(Ih(t)),this.lastProcessedEventTime=Date.now()}}function Ih(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function $y({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function ZE(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $y(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ek(e,t={}){return hi(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nk=/^https?/;async function rk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await ek(e);for(const n of t)try{if(ik(n))return}catch{}Vt(e,"unauthorized-domain")}function ik(e){const t=Hu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nk.test(n))return!1;if(tk.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=new Cs(3e4,6e4);function Th(){const e=Bt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function ok(e){return new Promise((t,n)=>{var r,i,s;function o(){Th(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Th(),n(Rt(e,"network-request-failed"))},timeout:sk.get()})}if(!((i=(r=Bt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Bt().gapi)===null||s===void 0)&&s.load)o();else{const a=fE("iframefcb");return Bt()[a]=()=>{gapi.load?o():n(Rt(e,"network-request-failed"))},cE(`${dE()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw vo=null,t})}let vo=null;function ak(e){return vo=vo||ok(e),vo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=new Cs(5e3,15e3),uk="__/auth/iframe",ck="emulator/auth/iframe",dk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hk(e){const t=e.config;W(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?od(t,ck):`https://${e.config.authDomain}/${uk}`,r={apiKey:t.apiKey,appName:e.name,v:ks},i=fk.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Es(r).slice(1)}`}async function pk(e){const t=await ak(e),n=Bt().gapi;return W(n,e,"internal-error"),t.open({where:document.body,url:hk(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rt(e,"network-request-failed"),a=Bt().setTimeout(()=>{s(o)},lk.get());function l(){Bt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gk=500,yk=600,vk="_blank",wk="http://localhost";class Rh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _k(e,t,n,r=gk,i=yk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},mk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=He().toLowerCase();n&&(a=Sy(u)?vk:n),wy(u)&&(t=t||wk,l.scrollbars="yes");const c=Object.entries(l).reduce((m,[w,y])=>`${m}${w}=${y},`,"");if(nE(u)&&a!=="_self")return Sk(t||"",a),new Rh(null);const d=window.open(t||"",a,c);W(d,e,"popup-blocked");try{d.focus()}catch{}return new Rh(d)}function Sk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk="__/auth/handler",Ek="emulator/auth/handler",kk=encodeURIComponent("fac");async function Ph(e,t,n,r,i,s){W(e.config.authDomain,e,"auth-domain-config-required"),W(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ks,eventId:i};if(t instanceof dd){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",kS(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries({}))o[c]=d}if(t instanceof Is){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${kk}=${encodeURIComponent(l)}`:"";return`${Ck(e)}?${Es(a).slice(1)}${u}`}function Ck({config:e}){return e.emulator?od(e,Ek):`https://${e.authDomain}/${xk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="webStorageSupport";class Ik{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ly,this._completeRedirectFn=QE,this._overrideRedirectResult=qE}async _openPopup(t,n,r,i){var s;fn((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ph(t,n,r,Hu(),i);return _k(t,o,fd())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Ph(t,n,r,Hu(),i);return PE(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await pk(t),r=new YE(t);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Pl,{type:Pl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Pl];o!==void 0&&n(!!o),Vt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rk(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Iy()||_y()||ud()}}const Tk=Ik;var Nh="@firebase/auth",Ah="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nk(e){ds(new si("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ty(e)},u=new lE(r,i,s,l);return pE(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ds(new si("auth-internal",t=>{const n=Da(t.getProvider("auth").getImmediate());return(r=>new Rk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vr(Nh,Ah,Pk(e)),Vr(Nh,Ah,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=5*60,Ok=ry("authIdTokenMaxAge")||Ak;let Oh=null;const bk=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ok)return;const i=n==null?void 0:n.token;Oh!==i&&(Oh=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Lk(e=Ix()){const t=ay(e,"auth");if(t.isInitialized())return t.getImmediate();const n=hE(e,{popupRedirectResolver:Tk,persistence:[ME,IE,Ly]}),r=ry("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=bk(s.toString());EE(n,o,()=>o(n.currentUser)),xE(n,a=>o(a))}}const i=fS("auth");return i&&mE(n,`http://${i}`),n}function Dk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}uE({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Rt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Dk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Nk("Browser");const Fk={apiKey:"AIzaSyAHvQxDyqnjRpDYT2I7I7HVUXcXlINEjlA",authDomain:"git-port-c55c7.firebaseapp.com",projectId:"git-port-c55c7",storageBucket:"git-port-c55c7.firebasestorage.app",messagingSenderId:"38354659538",appId:"1:38354659538:web:6c614f88f39bd2185d250b",measurementId:"G-NHXWF08Z2V"},jk=ly(Fk),Mk=Lk(jk),Uk=new Xt,By=({callback:e})=>{VE(Mk,Uk).then(t=>{const n=t.user;e&&e(`${n.reloadUserInfo.screenName}`)}).catch(t=>{console.log(t)})},Vy=e=>{const t={login:e};localStorage.setItem("gitPortSession",JSON.stringify(t))},Hy=()=>JSON.parse(localStorage.getItem("gitPortSession")||"{}"),zk=()=>{localStorage.removeItem("gitPortSession")};function Wy(e,t){return function(){return e.apply(t,arguments)}}const{toString:$k}=Object.prototype,{getPrototypeOf:pd}=Object,Ma=(e=>t=>{const n=$k.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Nt=e=>(e=e.toLowerCase(),t=>Ma(t)===e),Ua=e=>t=>typeof t===e,{isArray:pi}=Array,ps=Ua("undefined");function Bk(e){return e!==null&&!ps(e)&&e.constructor!==null&&!ps(e.constructor)&&at(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ky=Nt("ArrayBuffer");function Vk(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ky(e.buffer),t}const Hk=Ua("string"),at=Ua("function"),qy=Ua("number"),za=e=>e!==null&&typeof e=="object",Wk=e=>e===!0||e===!1,wo=e=>{if(Ma(e)!=="object")return!1;const t=pd(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Kk=Nt("Date"),qk=Nt("File"),Gk=Nt("Blob"),Jk=Nt("FileList"),Qk=e=>za(e)&&at(e.pipe),Xk=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||at(e.append)&&((t=Ma(e))==="formdata"||t==="object"&&at(e.toString)&&e.toString()==="[object FormData]"))},Yk=Nt("URLSearchParams"),[Zk,eC,tC,nC]=["ReadableStream","Request","Response","Headers"].map(Nt),rC=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Rs(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),pi(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let a;for(r=0;r<o;r++)a=s[r],t.call(null,e[a],a,e)}}function Gy(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const nr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Jy=e=>!ps(e)&&e!==nr;function qu(){const{caseless:e}=Jy(this)&&this||{},t={},n=(r,i)=>{const s=e&&Gy(t,i)||i;wo(t[s])&&wo(r)?t[s]=qu(t[s],r):wo(r)?t[s]=qu({},r):pi(r)?t[s]=r.slice():t[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Rs(arguments[r],n);return t}const iC=(e,t,n,{allOwnKeys:r}={})=>(Rs(t,(i,s)=>{n&&at(i)?e[s]=Wy(i,n):e[s]=i},{allOwnKeys:r}),e),sC=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),oC=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},aC=(e,t,n,r)=>{let i,s,o;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&pd(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},lC=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},uC=e=>{if(!e)return null;if(pi(e))return e;let t=e.length;if(!qy(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},cC=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&pd(Uint8Array)),dC=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},fC=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},hC=Nt("HTMLFormElement"),pC=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),bh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),mC=Nt("RegExp"),Qy=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Rs(n,(i,s)=>{let o;(o=t(i,s,e))!==!1&&(r[s]=o||i)}),Object.defineProperties(e,r)},gC=e=>{Qy(e,(t,n)=>{if(at(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(at(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},yC=(e,t)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return pi(e)?r(e):r(String(e).split(t)),n},vC=()=>{},wC=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Nl="abcdefghijklmnopqrstuvwxyz",Lh="0123456789",Xy={DIGIT:Lh,ALPHA:Nl,ALPHA_DIGIT:Nl+Nl.toUpperCase()+Lh},_C=(e=16,t=Xy.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function SC(e){return!!(e&&at(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const xC=e=>{const t=new Array(10),n=(r,i)=>{if(za(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const s=pi(r)?[]:{};return Rs(r,(o,a)=>{const l=n(o,i+1);!ps(l)&&(s[a]=l)}),t[i]=void 0,s}}return r};return n(e,0)},EC=Nt("AsyncFunction"),kC=e=>e&&(za(e)||at(e))&&at(e.then)&&at(e.catch),Yy=((e,t)=>e?setImmediate:t?((n,r)=>(nr.addEventListener("message",({source:i,data:s})=>{i===nr&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),nr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",at(nr.postMessage)),CC=typeof queueMicrotask<"u"?queueMicrotask.bind(nr):typeof process<"u"&&process.nextTick||Yy,k={isArray:pi,isArrayBuffer:Ky,isBuffer:Bk,isFormData:Xk,isArrayBufferView:Vk,isString:Hk,isNumber:qy,isBoolean:Wk,isObject:za,isPlainObject:wo,isReadableStream:Zk,isRequest:eC,isResponse:tC,isHeaders:nC,isUndefined:ps,isDate:Kk,isFile:qk,isBlob:Gk,isRegExp:mC,isFunction:at,isStream:Qk,isURLSearchParams:Yk,isTypedArray:cC,isFileList:Jk,forEach:Rs,merge:qu,extend:iC,trim:rC,stripBOM:sC,inherits:oC,toFlatObject:aC,kindOf:Ma,kindOfTest:Nt,endsWith:lC,toArray:uC,forEachEntry:dC,matchAll:fC,isHTMLForm:hC,hasOwnProperty:bh,hasOwnProp:bh,reduceDescriptors:Qy,freezeMethods:gC,toObjectSet:yC,toCamelCase:pC,noop:vC,toFiniteNumber:wC,findKey:Gy,global:nr,isContextDefined:Jy,ALPHABET:Xy,generateString:_C,isSpecCompliantForm:SC,toJSONObject:xC,isAsyncFn:EC,isThenable:kC,setImmediate:Yy,asap:CC};function q(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}k.inherits(q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}});const Zy=q.prototype,ev={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ev[e]={value:e}});Object.defineProperties(q,ev);Object.defineProperty(Zy,"isAxiosError",{value:!0});q.from=(e,t,n,r,i,s)=>{const o=Object.create(Zy);return k.toFlatObject(e,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),q.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};const IC=null;function Gu(e){return k.isPlainObject(e)||k.isArray(e)}function tv(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function Dh(e,t,n){return e?e.concat(t).map(function(i,s){return i=tv(i),!n&&s?"["+i+"]":i}).join(n?".":""):t}function TC(e){return k.isArray(e)&&!e.some(Gu)}const RC=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function $a(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,x){return!k.isUndefined(x[v])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(i))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(k.isDate(y))return y.toISOString();if(!l&&k.isBlob(y))throw new q("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(y)||k.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function c(y,v,x){let h=y;if(y&&!x&&typeof y=="object"){if(k.endsWith(v,"{}"))v=r?v:v.slice(0,-2),y=JSON.stringify(y);else if(k.isArray(y)&&TC(y)||(k.isFileList(y)||k.endsWith(v,"[]"))&&(h=k.toArray(y)))return v=tv(v),h.forEach(function(p,S){!(k.isUndefined(p)||p===null)&&t.append(o===!0?Dh([v],S,s):o===null?v:v+"[]",u(p))}),!1}return Gu(y)?!0:(t.append(Dh(x,v,s),u(y)),!1)}const d=[],m=Object.assign(RC,{defaultVisitor:c,convertValue:u,isVisitable:Gu});function w(y,v){if(!k.isUndefined(y)){if(d.indexOf(y)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(y),k.forEach(y,function(h,f){(!(k.isUndefined(h)||h===null)&&i.call(t,h,k.isString(f)?f.trim():f,v,m))===!0&&w(h,v?v.concat(f):[f])}),d.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Fh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function md(e,t){this._pairs=[],e&&$a(e,this,t)}const nv=md.prototype;nv.append=function(t,n){this._pairs.push([t,n])};nv.toString=function(t){const n=t?function(r){return t.call(this,r,Fh)}:Fh;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function PC(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function rv(e,t,n){if(!t)return e;const r=n&&n.encode||PC,i=n&&n.serialize;let s;if(i?s=i(t,n):s=k.isURLSearchParams(t)?t.toString():new md(t,n).toString(r),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class jh{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(r){r!==null&&t(r)})}}const iv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},NC=typeof URLSearchParams<"u"?URLSearchParams:md,AC=typeof FormData<"u"?FormData:null,OC=typeof Blob<"u"?Blob:null,bC={isBrowser:!0,classes:{URLSearchParams:NC,FormData:AC,Blob:OC},protocols:["http","https","file","blob","url","data"]},gd=typeof window<"u"&&typeof document<"u",Ju=typeof navigator=="object"&&navigator||void 0,LC=gd&&(!Ju||["ReactNative","NativeScript","NS"].indexOf(Ju.product)<0),DC=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",FC=gd&&window.location.href||"http://localhost",jC=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:gd,hasStandardBrowserEnv:LC,hasStandardBrowserWebWorkerEnv:DC,navigator:Ju,origin:FC},Symbol.toStringTag,{value:"Module"})),tt={...jC,...bC};function MC(e,t){return $a(e,new tt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return tt.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function UC(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function zC(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}function sv(e){function t(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&k.isArray(i)?i.length:o,l?(k.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!k.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],s)&&k.isArray(i[o])&&(i[o]=zC(i[o])),!a)}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,(r,i)=>{t(UC(r),i,n,0)}),n}return null}function $C(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const Ps={transitional:iv,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=k.isObject(t);if(s&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return i?JSON.stringify(sv(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t)||k.isReadableStream(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return MC(t,this.formSerializer).toString();if((a=k.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return $a(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),$C(t)):t}],transformResponse:[function(t){const n=this.transitional||Ps.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(k.isResponse(t)||k.isReadableStream(t))return t;if(t&&k.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?q.from(a,q.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tt.classes.FormData,Blob:tt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{Ps.headers[e]={}});const BC=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),VC=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&BC[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Mh=Symbol("internals");function Ci(e){return e&&String(e).trim().toLowerCase()}function _o(e){return e===!1||e==null?e:k.isArray(e)?e.map(_o):String(e)}function HC(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const WC=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Al(e,t,n,r,i){if(k.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!k.isString(t)){if(k.isString(r))return t.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(t)}}function KC(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function qC(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,s,o){return this[r].call(this,t,i,s,o)},configurable:!0})})}class nt{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function s(a,l,u){const c=Ci(l);if(!c)throw new Error("header name must be a non-empty string");const d=k.findKey(i,c);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||l]=_o(a))}const o=(a,l)=>k.forEach(a,(u,c)=>s(u,c,l));if(k.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(k.isString(t)&&(t=t.trim())&&!WC(t))o(VC(t),n);else if(k.isHeaders(t))for(const[a,l]of t.entries())s(l,a,r);else t!=null&&s(n,t,r);return this}get(t,n){if(t=Ci(t),t){const r=k.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return HC(i);if(k.isFunction(n))return n.call(this,i,r);if(k.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ci(t),t){const r=k.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Al(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function s(o){if(o=Ci(o),o){const a=k.findKey(r,o);a&&(!n||Al(r,r[a],a,n))&&(delete r[a],i=!0)}}return k.isArray(t)?t.forEach(s):s(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!t||Al(this,this[s],s,t,!0))&&(delete this[s],i=!0)}return i}normalize(t){const n=this,r={};return k.forEach(this,(i,s)=>{const o=k.findKey(r,s);if(o){n[o]=_o(i),delete n[s];return}const a=t?KC(s):String(s).trim();a!==s&&delete n[s],n[a]=_o(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return k.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Mh]=this[Mh]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=Ci(o);r[a]||(qC(i,o),r[a]=!0)}return k.isArray(t)?t.forEach(s):s(t),this}}nt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(nt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});k.freezeMethods(nt);function Ol(e,t){const n=this||Ps,r=t||n,i=nt.from(r.headers);let s=r.data;return k.forEach(e,function(a){s=a.call(n,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function ov(e){return!!(e&&e.__CANCEL__)}function mi(e,t,n){q.call(this,e??"canceled",q.ERR_CANCELED,t,n),this.name="CanceledError"}k.inherits(mi,q,{__CANCEL__:!0});function av(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new q("Request failed with status code "+n.status,[q.ERR_BAD_REQUEST,q.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function GC(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function JC(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[s];o||(o=u),n[i]=l,r[i]=u;let d=s,m=0;for(;d!==i;)m+=n[d++],d=d%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),u-o<t)return;const w=c&&u-c;return w?Math.round(m*1e3/w):void 0}}function QC(e,t){let n=0,r=1e3/t,i,s;const o=(u,c=Date.now())=>{n=c,i=null,s&&(clearTimeout(s),s=null),e.apply(null,u)};return[(...u)=>{const c=Date.now(),d=c-n;d>=r?o(u,c):(i=u,s||(s=setTimeout(()=>{s=null,o(i)},r-d)))},()=>i&&o(i)]}const sa=(e,t,n=3)=>{let r=0;const i=JC(50,250);return QC(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-r,u=i(l),c=o<=a;r=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&c?(a-o)/u:void 0,event:s,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(d)},n)},Uh=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},zh=e=>(...t)=>k.asap(()=>e(...t)),XC=tt.hasStandardBrowserEnv?function(){const t=tt.navigator&&/(msie|trident)/i.test(tt.navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=k.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),YC=tt.hasStandardBrowserEnv?{write(e,t,n,r,i,s){const o=[e+"="+encodeURIComponent(t)];k.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),k.isString(r)&&o.push("path="+r),k.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ZC(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function eI(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function lv(e,t){return e&&!ZC(t)?eI(e,t):t}const $h=e=>e instanceof nt?{...e}:e;function yr(e,t){t=t||{};const n={};function r(u,c,d){return k.isPlainObject(u)&&k.isPlainObject(c)?k.merge.call({caseless:d},u,c):k.isPlainObject(c)?k.merge({},c):k.isArray(c)?c.slice():c}function i(u,c,d){if(k.isUndefined(c)){if(!k.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function s(u,c){if(!k.isUndefined(c))return r(void 0,c)}function o(u,c){if(k.isUndefined(c)){if(!k.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,d){if(d in t)return r(u,c);if(d in e)return r(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,c)=>i($h(u),$h(c),!0)};return k.forEach(Object.keys(Object.assign({},e,t)),function(c){const d=l[c]||i,m=d(e[c],t[c],c);k.isUndefined(m)&&d!==a||(n[c]=m)}),n}const uv=e=>{const t=yr({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:a}=t;t.headers=o=nt.from(o),t.url=rv(lv(t.baseURL,t.url),e.params,e.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(k.isFormData(n)){if(tt.hasStandardBrowserEnv||tt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[u,...c]=l?l.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...c].join("; "))}}if(tt.hasStandardBrowserEnv&&(r&&k.isFunction(r)&&(r=r(t)),r||r!==!1&&XC(t.url))){const u=i&&s&&YC.read(s);u&&o.set(i,u)}return t},tI=typeof XMLHttpRequest<"u",nI=tI&&function(e){return new Promise(function(n,r){const i=uv(e);let s=i.data;const o=nt.from(i.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:u}=i,c,d,m,w,y;function v(){w&&w(),y&&y(),i.cancelToken&&i.cancelToken.unsubscribe(c),i.signal&&i.signal.removeEventListener("abort",c)}let x=new XMLHttpRequest;x.open(i.method.toUpperCase(),i.url,!0),x.timeout=i.timeout;function h(){if(!x)return;const p=nt.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),C={data:!a||a==="text"||a==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:p,config:e,request:x};av(function(T){n(T),v()},function(T){r(T),v()},C),x=null}"onloadend"in x?x.onloadend=h:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(h)},x.onabort=function(){x&&(r(new q("Request aborted",q.ECONNABORTED,e,x)),x=null)},x.onerror=function(){r(new q("Network Error",q.ERR_NETWORK,e,x)),x=null},x.ontimeout=function(){let S=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const C=i.transitional||iv;i.timeoutErrorMessage&&(S=i.timeoutErrorMessage),r(new q(S,C.clarifyTimeoutError?q.ETIMEDOUT:q.ECONNABORTED,e,x)),x=null},s===void 0&&o.setContentType(null),"setRequestHeader"in x&&k.forEach(o.toJSON(),function(S,C){x.setRequestHeader(C,S)}),k.isUndefined(i.withCredentials)||(x.withCredentials=!!i.withCredentials),a&&a!=="json"&&(x.responseType=i.responseType),u&&([m,y]=sa(u,!0),x.addEventListener("progress",m)),l&&x.upload&&([d,w]=sa(l),x.upload.addEventListener("progress",d),x.upload.addEventListener("loadend",w)),(i.cancelToken||i.signal)&&(c=p=>{x&&(r(!p||p.type?new mi(null,e,x):p),x.abort(),x=null)},i.cancelToken&&i.cancelToken.subscribe(c),i.signal&&(i.signal.aborted?c():i.signal.addEventListener("abort",c)));const f=GC(i.url);if(f&&tt.protocols.indexOf(f)===-1){r(new q("Unsupported protocol "+f+":",q.ERR_BAD_REQUEST,e));return}x.send(s||null)})},rI=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,i;const s=function(u){if(!i){i=!0,a();const c=u instanceof Error?u:this.reason;r.abort(c instanceof q?c:new mi(c instanceof Error?c.message:c))}};let o=t&&setTimeout(()=>{o=null,s(new q(`timeout ${t} of ms exceeded`,q.ETIMEDOUT))},t);const a=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(s):u.removeEventListener("abort",s)}),e=null)};e.forEach(u=>u.addEventListener("abort",s));const{signal:l}=r;return l.unsubscribe=()=>k.asap(a),l}},iI=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},sI=async function*(e,t){for await(const n of oI(e))yield*iI(n,t)},oI=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Bh=(e,t,n,r)=>{const i=sI(e,t);let s=0,o,a=l=>{o||(o=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:u,value:c}=await i.next();if(u){a(),l.close();return}let d=c.byteLength;if(n){let m=s+=d;n(m)}l.enqueue(new Uint8Array(c))}catch(u){throw a(u),u}},cancel(l){return a(l),i.return()}},{highWaterMark:2})},Ba=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",cv=Ba&&typeof ReadableStream=="function",aI=Ba&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),dv=(e,...t)=>{try{return!!e(...t)}catch{return!1}},lI=cv&&dv(()=>{let e=!1;const t=new Request(tt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Vh=64*1024,Qu=cv&&dv(()=>k.isReadableStream(new Response("").body)),oa={stream:Qu&&(e=>e.body)};Ba&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!oa[t]&&(oa[t]=k.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new q(`Response type '${t}' is not supported`,q.ERR_NOT_SUPPORT,r)})})})(new Response);const uI=async e=>{if(e==null)return 0;if(k.isBlob(e))return e.size;if(k.isSpecCompliantForm(e))return(await new Request(tt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(k.isArrayBufferView(e)||k.isArrayBuffer(e))return e.byteLength;if(k.isURLSearchParams(e)&&(e=e+""),k.isString(e))return(await aI(e)).byteLength},cI=async(e,t)=>{const n=k.toFiniteNumber(e.getContentLength());return n??uI(t)},dI=Ba&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:m}=uv(e);u=u?(u+"").toLowerCase():"text";let w=rI([i,s&&s.toAbortSignal()],o),y;const v=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let x;try{if(l&&lI&&n!=="get"&&n!=="head"&&(x=await cI(c,r))!==0){let C=new Request(t,{method:"POST",body:r,duplex:"half"}),R;if(k.isFormData(r)&&(R=C.headers.get("content-type"))&&c.setContentType(R),C.body){const[T,b]=Uh(x,sa(zh(l)));r=Bh(C.body,Vh,T,b)}}k.isString(d)||(d=d?"include":"omit");const h="credentials"in Request.prototype;y=new Request(t,{...m,signal:w,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",credentials:h?d:void 0});let f=await fetch(y);const p=Qu&&(u==="stream"||u==="response");if(Qu&&(a||p&&v)){const C={};["status","statusText","headers"].forEach(K=>{C[K]=f[K]});const R=k.toFiniteNumber(f.headers.get("content-length")),[T,b]=a&&Uh(R,sa(zh(a),!0))||[];f=new Response(Bh(f.body,Vh,T,()=>{b&&b(),v&&v()}),C)}u=u||"text";let S=await oa[k.findKey(oa,u)||"text"](f,e);return!p&&v&&v(),await new Promise((C,R)=>{av(C,R,{data:S,headers:nt.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:y})})}catch(h){throw v&&v(),h&&h.name==="TypeError"&&/fetch/i.test(h.message)?Object.assign(new q("Network Error",q.ERR_NETWORK,e,y),{cause:h.cause||h}):q.from(h,h&&h.code,e,y)}}),Xu={http:IC,xhr:nI,fetch:dI};k.forEach(Xu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Hh=e=>`- ${e}`,fI=e=>k.isFunction(e)||e===null||e===!1,fv={getAdapter:e=>{e=k.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let s=0;s<t;s++){n=e[s];let o;if(r=n,!fI(n)&&(r=Xu[(o=String(n)).toLowerCase()],r===void 0))throw new q(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=t?s.length>1?`since :
`+s.map(Hh).join(`
`):" "+Hh(s[0]):"as no adapter specified";throw new q("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Xu};function bl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new mi(null,e)}function Wh(e){return bl(e),e.headers=nt.from(e.headers),e.data=Ol.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),fv.getAdapter(e.adapter||Ps.adapter)(e).then(function(r){return bl(e),r.data=Ol.call(e,e.transformResponse,r),r.headers=nt.from(r.headers),r},function(r){return ov(r)||(bl(e),r&&r.response&&(r.response.data=Ol.call(e,e.transformResponse,r.response),r.response.headers=nt.from(r.response.headers))),Promise.reject(r)})}const hv="1.7.7",yd={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{yd[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Kh={};yd.transitional=function(t,n,r){function i(s,o){return"[Axios v"+hv+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(t===!1)throw new q(i(o," has been removed"+(n?" in "+n:"")),q.ERR_DEPRECATED);return n&&!Kh[o]&&(Kh[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,o,a):!0}};function hI(e,t,n){if(typeof e!="object")throw new q("options must be an object",q.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const a=e[s],l=a===void 0||o(a,s,e);if(l!==!0)throw new q("option "+s+" must be "+l,q.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new q("Unknown option "+s,q.ERR_BAD_OPTION)}}const Yu={assertOptions:hI,validators:yd},gn=Yu.validators;class cr{constructor(t){this.defaults=t,this.interceptors={request:new jh,response:new jh}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=yr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Yu.assertOptions(r,{silentJSONParsing:gn.transitional(gn.boolean),forcedJSONParsing:gn.transitional(gn.boolean),clarifyTimeoutError:gn.transitional(gn.boolean)},!1),i!=null&&(k.isFunction(i)?n.paramsSerializer={serialize:i}:Yu.assertOptions(i,{encode:gn.function,serialize:gn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&k.merge(s.common,s[n.method]);s&&k.forEach(["delete","get","head","post","put","patch","common"],y=>{delete s[y]}),n.headers=nt.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let c,d=0,m;if(!l){const y=[Wh.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,u),m=y.length,c=Promise.resolve(n);d<m;)c=c.then(y[d++],y[d++]);return c}m=a.length;let w=n;for(d=0;d<m;){const y=a[d++],v=a[d++];try{w=y(w)}catch(x){v.call(this,x);break}}try{c=Wh.call(this,w)}catch(y){return Promise.reject(y)}for(d=0,m=u.length;d<m;)c=c.then(u[d++],u[d++]);return c}getUri(t){t=yr(this.defaults,t);const n=lv(t.baseURL,t.url);return rv(n,t.params,t.paramsSerializer)}}k.forEach(["delete","get","head","options"],function(t){cr.prototype[t]=function(n,r){return this.request(yr(r||{},{method:t,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(t){function n(r){return function(s,o,a){return this.request(yr(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}cr.prototype[t]=n(),cr.prototype[t+"Form"]=n(!0)});class vd{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},t(function(s,o,a){r.reason||(r.reason=new mi(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new vd(function(i){t=i}),cancel:t}}}function pI(e){return function(n){return e.apply(null,n)}}function mI(e){return k.isObject(e)&&e.isAxiosError===!0}const Zu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Zu).forEach(([e,t])=>{Zu[t]=e});function pv(e){const t=new cr(e),n=Wy(cr.prototype.request,t);return k.extend(n,cr.prototype,t,{allOwnKeys:!0}),k.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return pv(yr(e,i))},n}const we=pv(Ps);we.Axios=cr;we.CanceledError=mi;we.CancelToken=vd;we.isCancel=ov;we.VERSION=hv;we.toFormData=$a;we.AxiosError=q;we.Cancel=we.CanceledError;we.all=function(t){return Promise.all(t)};we.spread=pI;we.isAxiosError=mI;we.mergeConfig=yr;we.AxiosHeaders=nt;we.formToJSON=e=>sv(k.isHTMLForm(e)?new FormData(e):e);we.getAdapter=fv.getAdapter;we.HttpStatusCode=Zu;we.default=we;const gI=({updateUser:e})=>{const[t,n]=A.useState(!1),[r,i]=A.useState(""),s=()=>{const o=Hy();o.login?we.get(`https://api.github.com/users/${o.login}`,{headers:{Authorization:"Bearer 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"}}).then(a=>{n(!0),i(a.data.avatar_url)}).catch(a=>{console.log(a)}):n(!1)};return A.useEffect(()=>{s()},[]),_.jsxs(iS,{children:[_.jsxs("section",{className:"header_links",children:[_.jsx("a",{href:"#info",children:"Início"}),_.jsx("a",{href:"#history",children:"Minha história"}),_.jsx("a",{href:"#experiences",children:"Experiências"}),_.jsx("a",{href:"#contact",children:"Contato"})]}),!t&&_.jsxs("div",{className:"log_in",onClick:()=>{By({callback:o=>{Vy(o),setTimeout(()=>{s()},200),e()}})},children:[_.jsx("img",{src:"/assets/images/log_in_button.png",alt:"Login"}),_.jsx("p",{children:"Entrar"})]}),t&&_.jsxs("div",{className:"log_out",onClick:()=>{zk(),n(!1),e()},children:[_.jsx("p",{children:"Sair"}),_.jsx("img",{src:r,alt:"Profile"})]})]})},yI=Ht.main`
    button.edit{
        width: 105px;
        height: 105px;
        background-color: var(--card_color);
        border: none;
        border-radius: 50%;
        position: absolute;
        top: 160px;
        cursor: pointer;
        left: 50%;
        transform: translateX(500px);
    }

    p.nothing_here{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 40px;
        line-height: 40px;
        color: var(--tertiary_text);
        text-align: center;
        position: relative;
        left: 50%;
        transform: translate(-50%)
    }

    .profile_info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        top: 236px;
        width: 1240px;
        height: 400px;
        left: 50%;
        transform: translateX(-50%);

        .perfil{
            width: 320px;
            height: 400px;
            gap: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            img{
                width: 256px;
                height: 256px;
                border: 2px solid var(--dark_green);
                border-radius: 50%;
            }

            h2{
                text-align: center;
                font-weight: 800;
                font-size: 64px;
                line-height: 40px;
                color: var(--primary_text);
                font-family: "Roboto", sans-serif;
            }

            p{
                text-align: center;
                font-weight: 600;
                font-size: 25px;
                line-height: 28px;
                color: var(--primary_text);
                font-family: "Roboto", sans-serif;
            }
        }

        .brand{
            width: 500px;
            height: 353px;

            h1{
                font-weight: 800;
                font-size: 64px;
                line-height: 40px;
                color: var(--primary_text);
                font-family: "Roboto", sans-serif;

                span, input{
                    margin-left: 5px;
                    color: var(--primary_color);
                    font-size: 64px
                }
                input{
                    width: 80%;
                    border: none;
                    border-bottom: 3px solid var(--primary_text);
                    font-weight: 750;
                    height: 50px;
                    &:focus{
                        outline: none;
                    }
                }
            }

            p{
                font-weight: 600;
                font-size: 25px;
                line-height: 28px;
                color: var(--primary_text);
                font-family: "Roboto", sans-serif;
                width: 445px;
            }

            .buttons_container{
                width: 500px;
                display: flex;
                justify-content: space-between;

                button{
                    box-sizing: border-box;
                    padding: 12px 50px;
                    border-radius: 16px;
                    border: 1px solid var(--dark_green);
                    box-shadow: 5px 5px 0px var(--primary_color);
                    font-weight: 700;
                    font-size: 32px;
                    line-height: 37.5px;
                    color: var(--secondary_text);
                    font-family: "Roboto", sans-serif;
                    background-color: var(--dark_green);
                    cursor: pointer;
                    transition: 0.2s;

                    &:hover{
                        background-color: var(--primary_color);
                        border-color: var(--primary_color);
                    }

                    .edit{
                        width: 25px;
                        height: 25px;
                        position: absolute;
                        background-color: var(--card_color);
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transform: translate(148px,-50px);
                        cursor: pointer;
                        transition: 0.2s;

                        &:hover{
                            box-shadow: 2px 2px 0px rgba(0,0,0,.5);
                        }

                        img{
                            width: 11.43px;
                            height: 11.43px;
                        }
                    }
                }
            }
        }
    }

    .history{
        position: relative;
        top: 236px;
        margin-top: 128px;
        width: 1240px;
        border-radius: 20px;
        left: 50%;
        transform: translateX(-50%);
        box-sizing: border-box;
        padding: 64px;
        background-color: var(--card_color);
        margin-bottom: 128px;

        h2{
            font-weight: 800;
            font-size: 64px;
            line-height: 40px;
            color: var(--secondary_text);
            font-family: "Roboto", sans-serif;
        }
        p,textarea{
            font-weight: 700;
            font-size: 24px;
            line-height: 34px;
            color: var(--secondary_text);
            font-family: "Roboto", sans-serif;
            margin-top: 64px;
        }

        textarea{
            background-color: transparent;
            outline: none;
            border: none;
            width: 100%;
            resize: none;
        }
    }

    footer{
        position: relative;
        top: 236px;
        left: 50%;
        transform: translateX(-50%);
        width: 1368px;
        margin-top: 128px;

        p.disclaimer{
            width: 1240px;
            height: 115px;
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            font-size: 40px;
            line-height: 42px;
            text-align: center;
            color: var(--dark_green);
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }

        .social{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 405px;
            gap: 7px;
            position: relative;
            left: 50%;
            transform: translateX(-50%);

            .link{
                background-color: var(--primary_text);
                width: 96px;
                height: 96px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;

                img{
                    width: 77px;
                    height: 77px;
                    transition: .2s;
                    position: absolute;

                    &:nth-child(2):hover{
                        opacity: 0
                    }
                }
                .edit{
                    width: 25px;
                    height: 25px;
                    position: absolute;
                    background-color: var(--card_color);
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transform: translate(38px,-30px);
                    cursor: pointer;
                    transition: 0.2s;

                    &:hover{
                        box-shadow: 2px 2px 0px rgba(0,0,0,.5);
                    }

                    img{
                        width: 11.43px;
                        height: 11.43px;
                    }
                }
            }
        }

        .copyright{
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            margin-top: 64px;
            gap: 84.45px;

            .location{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 12px;
            }
            h5{
                font-family: "Roboto", sans-serif;
                font-weight: 500;
                font-size: 25px;
                line-height: 29.3px;
                color: var(--dark_green);
            }
        }
    }
`,vI=Ht.section`
    position: relative;
    top: 236px;
    padding: 64px 0;
    background-color: var(--secondary_color);
    width: 1368px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 64px;

    h2{
        font-family: "Montserrat", sans-serif;
        text-align: center;
        font-weight: 800;
        font-size: 64px;
        line-height: 40px;
        color: var(--secondary_text);
    }
    .experiencies{
        width: 865px;
        gap: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
`,wI=Ht.section`
    position: relative;
    top: 236px;
    padding: 128px 64px;
    width: 1368px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--dark_green);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 64px;

    h4{
        width: 1240px;
        font-family: "Roboto", sans-serif;
        font-weight: 800;
        font-size: 42px;
        line-height: 40px;
        text-align: center;
        color: var(--secondary_text);
    }
    h3,input{
        font-family: "Roboto", sans-serif;
        font-weight: 800;
        font-size: 64px;
        line-height: 40px;
        text-align: center;
        color: var(--secondary_text);
    }
    input{
        width: 900px;
        background-color: transparent;
        outline: none;
        border: none;
        border-bottom: 3px solid var(--tertiary_text);
    }
`,mv=Ht.main`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    background-color: rgba(109, 109, 109,.5);
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;

    .content{
        border-radius: 26px;
        background-color: #FFFFFF;

        form{
            padding: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 64px;
            flex-direction: column;

            input,h3,textarea{
                width: 739px;
                height: 72px;
            }
            h3{
                font-family: "Montserrat", sans-serif;
                font-weight: 800;
                font-size: 48px;
                line-height: 40px;
                color: var(--dark_green)
            }
            input,textarea{
                border: 1px solid #172A3A;
                border-radius: 1px;
                padding: 16px 12px;
                font-family: "Roboto", sans-serif;
                font-weight: 600;
                font-size: 24px;
                line-height: 40px;

                border-radius: 8px;

                &:focus{
                    outline: none;
                }
            }
            textarea{
                resize: none;
                height: 281px;
            }
            .buttonsContainer{
                width: 739px;
                height: 88px;
                display: flex;
                justify-content: center;
                align-items: end;
                gap: 24px;

                button{
                    width: 357.5px;
                    height: 64px;
                    padding: 12px 0;
                    font-family: "Roboto", sans-serif;
                    font-weight: 600;
                    font-size: 32px;
                    line-height: 40px;
                    box-sizing: border-box;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: .2s;

                    &:disabled{
                        cursor: not-allowed;
                        background-color: #D1D5DB!important;
                    }

                    &:nth-child(1) {
                        background-color: var(--secondary_text);
                        border: 1px solid var(--dark_green);
                        color: var(--dark_green);
                        &:hover{
                            background-color: var(--red);
                            color: var(--secondary_text);
                        }
                    }
                    &:nth-child(2) {
                        background-color: var(--dark_green);
                        color: var(--secondary_text);
                        &:hover{
                            background-color: var(--primary_color);
                            color: var(--secondary_text);
                            border-color: transparent
                        }
                    }
                }
            }
        }
    }
`;var Ns=e=>e.type==="checkbox",rr=e=>e instanceof Date,Be=e=>e==null;const gv=e=>typeof e=="object";var ve=e=>!Be(e)&&!Array.isArray(e)&&gv(e)&&!rr(e),_I=e=>ve(e)&&e.target?Ns(e.target)?e.target.checked:e.target.value:e,SI=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,xI=(e,t)=>e.has(SI(t)),EI=e=>{const t=e.constructor&&e.constructor.prototype;return ve(t)&&t.hasOwnProperty("isPrototypeOf")},wd=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ft(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(wd&&(e instanceof Blob||e instanceof FileList))&&(n||ve(e)))if(t=n?[]:{},!n&&!EI(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=ft(e[r]));else return e;return t}var Va=e=>Array.isArray(e)?e.filter(Boolean):[],ge=e=>e===void 0,M=(e,t,n)=>{if(!t||!ve(e))return n;const r=Va(t.split(/[,[\].]+?/)).reduce((i,s)=>Be(i)?i:i[s],e);return ge(r)||r===e?ge(e[t])?n:e[t]:r},Ft=e=>typeof e=="boolean",_d=e=>/^\w*$/.test(e),yv=e=>Va(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ue=(e,t,n)=>{let r=-1;const i=_d(t)?[t]:yv(t),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=e[a];l=ve(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}if(a==="__proto__")return;e[a]=l,e=e[a]}return e};const qh={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},kt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},qt={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ke.createContext(null);var kI=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(i,s,{get:()=>{const o=s;return t._proxyFormState[o]!==kt.all&&(t._proxyFormState[o]=!r||kt.all),e[o]}});return i},Ge=e=>ve(e)&&!Object.keys(e).length,CI=(e,t,n,r)=>{n(e);const{name:i,...s}=e;return Ge(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(o=>t[o]===kt.all)},So=e=>Array.isArray(e)?e:[e];function II(e){const t=ke.useRef(e);t.current=e,ke.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var Ut=e=>typeof e=="string",TI=(e,t,n,r,i)=>Ut(e)?(r&&t.watch.add(e),M(n,e,i)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),M(n,s))):(r&&(t.watchAll=!0),n),RI=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Gh=e=>({isOnSubmit:!e||e===kt.onSubmit,isOnBlur:e===kt.onBlur,isOnChange:e===kt.onChange,isOnAll:e===kt.all,isOnTouch:e===kt.onTouched}),Jh=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Hi=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const s=M(e,i);if(s){const{_f:o,...a}=s;if(o){if(o.refs&&o.refs[0]&&t(o.refs[0],i)&&!r)return!0;if(o.ref&&t(o.ref,o.name)&&!r)return!0;if(Hi(a,t))break}else if(ve(a)&&Hi(a,t))break}}};var PI=(e,t,n)=>{const r=So(M(e,n));return ue(r,"root",t[n]),ue(e,n,r),e},Sd=e=>e.type==="file",sn=e=>typeof e=="function",aa=e=>{if(!wd)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},xo=e=>Ut(e),xd=e=>e.type==="radio",la=e=>e instanceof RegExp;const Qh={value:!1,isValid:!1},Xh={value:!0,isValid:!0};var vv=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!ge(e[0].attributes.value)?ge(e[0].value)||e[0].value===""?Xh:{value:e[0].value,isValid:!0}:Xh:Qh}return Qh};const Yh={isValid:!1,value:null};var wv=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Yh):Yh;function Zh(e,t,n="validate"){if(xo(e)||Array.isArray(e)&&e.every(xo)||Ft(e)&&!e)return{type:n,message:xo(e)?e:"",ref:t}}var Er=e=>ve(e)&&!la(e)?e:{value:e,message:""},ep=async(e,t,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:d,pattern:m,validate:w,name:y,valueAsNumber:v,mount:x,disabled:h}=e._f,f=M(t,y);if(!x||h)return{};const p=o?o[0]:s,S=H=>{r&&p.reportValidity&&(p.setCustomValidity(Ft(H)?"":H||""),p.reportValidity())},C={},R=xd(s),T=Ns(s),b=R||T,K=(v||Sd(s))&&ge(s.value)&&ge(f)||aa(s)&&s.value===""||f===""||Array.isArray(f)&&!f.length,z=RI.bind(null,y,n,C),_e=(H,G,D,B=qt.maxLength,J=qt.minLength)=>{const ie=H?G:D;C[y]={type:H?B:J,message:ie,ref:s,...z(H?B:J,ie)}};if(i?!Array.isArray(f)||!f.length:a&&(!b&&(K||Be(f))||Ft(f)&&!f||T&&!vv(o).isValid||R&&!wv(o).isValid)){const{value:H,message:G}=xo(a)?{value:!!a,message:a}:Er(a);if(H&&(C[y]={type:qt.required,message:G,ref:p,...z(qt.required,G)},!n))return S(G),C}if(!K&&(!Be(c)||!Be(d))){let H,G;const D=Er(d),B=Er(c);if(!Be(f)&&!isNaN(f)){const J=s.valueAsNumber||f&&+f;Be(D.value)||(H=J>D.value),Be(B.value)||(G=J<B.value)}else{const J=s.valueAsDate||new Date(f),ie=V=>new Date(new Date().toDateString()+" "+V),L=s.type=="time",U=s.type=="week";Ut(D.value)&&f&&(H=L?ie(f)>ie(D.value):U?f>D.value:J>new Date(D.value)),Ut(B.value)&&f&&(G=L?ie(f)<ie(B.value):U?f<B.value:J<new Date(B.value))}if((H||G)&&(_e(!!H,D.message,B.message,qt.max,qt.min),!n))return S(C[y].message),C}if((l||u)&&!K&&(Ut(f)||i&&Array.isArray(f))){const H=Er(l),G=Er(u),D=!Be(H.value)&&f.length>+H.value,B=!Be(G.value)&&f.length<+G.value;if((D||B)&&(_e(D,H.message,G.message),!n))return S(C[y].message),C}if(m&&!K&&Ut(f)){const{value:H,message:G}=Er(m);if(la(H)&&!f.match(H)&&(C[y]={type:qt.pattern,message:G,ref:s,...z(qt.pattern,G)},!n))return S(G),C}if(w){if(sn(w)){const H=await w(f,t),G=Zh(H,p);if(G&&(C[y]={...G,...z(qt.validate,G.message)},!n))return S(G.message),C}else if(ve(w)){let H={};for(const G in w){if(!Ge(H)&&!n)break;const D=Zh(await w[G](f,t),p,G);D&&(H={...D,...z(G,D.message)},S(D.message),n&&(C[y]=H))}if(!Ge(H)&&(C[y]={ref:p,...H},!n))return C}}return S(!0),C};function NI(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=ge(e)?r++:e[t[r++]];return e}function AI(e){for(const t in e)if(e.hasOwnProperty(t)&&!ge(e[t]))return!1;return!0}function Ee(e,t){const n=Array.isArray(t)?t:_d(t)?[t]:yv(t),r=n.length===1?e:NI(e,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(ve(r)&&Ge(r)||Array.isArray(r)&&AI(r))&&Ee(e,n.slice(0,-1)),e}var Ll=()=>{let e=[];return{get observers(){return e},next:i=>{for(const s of e)s.next&&s.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(s=>s!==i)}}),unsubscribe:()=>{e=[]}}},ec=e=>Be(e)||!gv(e);function Cn(e,t){if(ec(e)||ec(t))return e===t;if(rr(e)&&rr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const s=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=t[i];if(rr(s)&&rr(o)||ve(s)&&ve(o)||Array.isArray(s)&&Array.isArray(o)?!Cn(s,o):s!==o)return!1}}return!0}var _v=e=>e.type==="select-multiple",OI=e=>xd(e)||Ns(e),Dl=e=>aa(e)&&e.isConnected,Sv=e=>{for(const t in e)if(sn(e[t]))return!0;return!1};function ua(e,t={}){const n=Array.isArray(e);if(ve(e)||n)for(const r in e)Array.isArray(e[r])||ve(e[r])&&!Sv(e[r])?(t[r]=Array.isArray(e[r])?[]:{},ua(e[r],t[r])):Be(e[r])||(t[r]=!0);return t}function xv(e,t,n){const r=Array.isArray(e);if(ve(e)||r)for(const i in e)Array.isArray(e[i])||ve(e[i])&&!Sv(e[i])?ge(t)||ec(n[i])?n[i]=Array.isArray(e[i])?ua(e[i],[]):{...ua(e[i])}:xv(e[i],Be(t)?{}:t[i],n[i]):n[i]=!Cn(e[i],t[i]);return n}var Ii=(e,t)=>xv(e,t,ua(t)),Ev=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>ge(e)?e:t?e===""?NaN:e&&+e:n&&Ut(e)?new Date(e):r?r(e):e;function Fl(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Sd(t)?t.files:xd(t)?wv(e.refs).value:_v(t)?[...t.selectedOptions].map(({value:n})=>n):Ns(t)?vv(e.refs).value:Ev(ge(t.value)?e.ref.value:t.value,e)}var bI=(e,t,n,r)=>{const i={};for(const s of e){const o=M(t,s);o&&ue(i,s,o._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},Ti=e=>ge(e)?e:la(e)?e.source:ve(e)?la(e.value)?e.value.source:e.value:e;const tp="AsyncFunction";var LI=e=>(!e||!e.validate)&&!!(sn(e.validate)&&e.validate.constructor.name===tp||ve(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===tp)),DI=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function np(e,t,n){const r=M(e,n);if(r||_d(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=M(t,s),a=M(e,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var FI=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,jI=(e,t)=>!Va(M(e,t)).length&&Ee(e,t);const MI={mode:kt.onSubmit,reValidateMode:kt.onChange,shouldFocusError:!0};function UI(e={}){let t={...MI,...e},n={submitCount:0,isDirty:!1,isLoading:sn(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},i=ve(t.defaultValues)||ve(t.values)?ft(t.defaultValues||t.values)||{}:{},s=t.shouldUnregister?{}:ft(i),o={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,u=0;const c={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={values:Ll(),array:Ll(),state:Ll()},m=Gh(t.mode),w=Gh(t.reValidateMode),y=t.criteriaMode===kt.all,v=g=>E=>{clearTimeout(u),u=setTimeout(g,E)},x=async g=>{if(!e.disabled&&(c.isValid||g)){const E=t.resolver?Ge((await b()).errors):await z(r,!0);E!==n.isValid&&d.state.next({isValid:E})}},h=(g,E)=>{!e.disabled&&(c.isValidating||c.validatingFields)&&((g||Array.from(a.mount)).forEach(I=>{I&&(E?ue(n.validatingFields,I,E):Ee(n.validatingFields,I))}),d.state.next({validatingFields:n.validatingFields,isValidating:!Ge(n.validatingFields)}))},f=(g,E=[],I,F,O=!0,N=!0)=>{if(F&&I&&!e.disabled){if(o.action=!0,N&&Array.isArray(M(r,g))){const $=I(M(r,g),F.argA,F.argB);O&&ue(r,g,$)}if(N&&Array.isArray(M(n.errors,g))){const $=I(M(n.errors,g),F.argA,F.argB);O&&ue(n.errors,g,$),jI(n.errors,g)}if(c.touchedFields&&N&&Array.isArray(M(n.touchedFields,g))){const $=I(M(n.touchedFields,g),F.argA,F.argB);O&&ue(n.touchedFields,g,$)}c.dirtyFields&&(n.dirtyFields=Ii(i,s)),d.state.next({name:g,isDirty:H(g,E),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else ue(s,g,E)},p=(g,E)=>{ue(n.errors,g,E),d.state.next({errors:n.errors})},S=g=>{n.errors=g,d.state.next({errors:n.errors,isValid:!1})},C=(g,E,I,F)=>{const O=M(r,g);if(O){const N=M(s,g,ge(I)?M(i,g):I);ge(N)||F&&F.defaultChecked||E?ue(s,g,E?N:Fl(O._f)):B(g,N),o.mount&&x()}},R=(g,E,I,F,O)=>{let N=!1,$=!1;const X={name:g};if(!e.disabled){const Re=!!(M(r,g)&&M(r,g)._f&&M(r,g)._f.disabled);if(!I||F){c.isDirty&&($=n.isDirty,n.isDirty=X.isDirty=H(),N=$!==X.isDirty);const Pe=Re||Cn(M(i,g),E);$=!!(!Re&&M(n.dirtyFields,g)),Pe||Re?Ee(n.dirtyFields,g):ue(n.dirtyFields,g,!0),X.dirtyFields=n.dirtyFields,N=N||c.dirtyFields&&$!==!Pe}if(I){const Pe=M(n.touchedFields,g);Pe||(ue(n.touchedFields,g,I),X.touchedFields=n.touchedFields,N=N||c.touchedFields&&Pe!==I)}N&&O&&d.state.next(X)}return N?X:{}},T=(g,E,I,F)=>{const O=M(n.errors,g),N=c.isValid&&Ft(E)&&n.isValid!==E;if(e.delayError&&I?(l=v(()=>p(g,I)),l(e.delayError)):(clearTimeout(u),l=null,I?ue(n.errors,g,I):Ee(n.errors,g)),(I?!Cn(O,I):O)||!Ge(F)||N){const $={...F,...N&&Ft(E)?{isValid:E}:{},errors:n.errors,name:g};n={...n,...$},d.state.next($)}},b=async g=>{h(g,!0);const E=await t.resolver(s,t.context,bI(g||a.mount,r,t.criteriaMode,t.shouldUseNativeValidation));return h(g),E},K=async g=>{const{errors:E}=await b(g);if(g)for(const I of g){const F=M(E,I);F?ue(n.errors,I,F):Ee(n.errors,I)}else n.errors=E;return E},z=async(g,E,I={valid:!0})=>{for(const F in g){const O=g[F];if(O){const{_f:N,...$}=O;if(N){const X=a.array.has(N.name),Re=O._f&&LI(O._f);Re&&c.validatingFields&&h([F],!0);const Pe=await ep(O,s,y,t.shouldUseNativeValidation&&!E,X);if(Re&&c.validatingFields&&h([F]),Pe[N.name]&&(I.valid=!1,E))break;!E&&(M(Pe,N.name)?X?PI(n.errors,Pe,N.name):ue(n.errors,N.name,Pe[N.name]):Ee(n.errors,N.name))}!Ge($)&&await z($,E,I)}}return I.valid},_e=()=>{for(const g of a.unMount){const E=M(r,g);E&&(E._f.refs?E._f.refs.every(I=>!Dl(I)):!Dl(E._f.ref))&&be(g)}a.unMount=new Set},H=(g,E)=>!e.disabled&&(g&&E&&ue(s,g,E),!Cn(ee(),i)),G=(g,E,I)=>TI(g,a,{...o.mount?s:ge(E)?i:Ut(g)?{[g]:E}:E},I,E),D=g=>Va(M(o.mount?s:i,g,e.shouldUnregister?M(i,g,[]):[])),B=(g,E,I={})=>{const F=M(r,g);let O=E;if(F){const N=F._f;N&&(!N.disabled&&ue(s,g,Ev(E,N)),O=aa(N.ref)&&Be(E)?"":E,_v(N.ref)?[...N.ref.options].forEach($=>$.selected=O.includes($.value)):N.refs?Ns(N.ref)?N.refs.length>1?N.refs.forEach($=>(!$.defaultChecked||!$.disabled)&&($.checked=Array.isArray(O)?!!O.find(X=>X===$.value):O===$.value)):N.refs[0]&&(N.refs[0].checked=!!O):N.refs.forEach($=>$.checked=$.value===O):Sd(N.ref)?N.ref.value="":(N.ref.value=O,N.ref.type||d.values.next({name:g,values:{...s}})))}(I.shouldDirty||I.shouldTouch)&&R(g,O,I.shouldTouch,I.shouldDirty,!0),I.shouldValidate&&V(g)},J=(g,E,I)=>{for(const F in E){const O=E[F],N=`${g}.${F}`,$=M(r,N);(a.array.has(g)||ve(O)||$&&!$._f)&&!rr(O)?J(N,O,I):B(N,O,I)}},ie=(g,E,I={})=>{const F=M(r,g),O=a.array.has(g),N=ft(E);ue(s,g,N),O?(d.array.next({name:g,values:{...s}}),(c.isDirty||c.dirtyFields)&&I.shouldDirty&&d.state.next({name:g,dirtyFields:Ii(i,s),isDirty:H(g,N)})):F&&!F._f&&!Be(N)?J(g,N,I):B(g,N,I),Jh(g,a)&&d.state.next({...n}),d.values.next({name:o.mount?g:void 0,values:{...s}})},L=async g=>{o.mount=!0;const E=g.target;let I=E.name,F=!0;const O=M(r,I),N=()=>E.type?Fl(O._f):_I(g),$=X=>{F=Number.isNaN(X)||rr(X)&&isNaN(X.getTime())||Cn(X,M(s,I,X))};if(O){let X,Re;const Pe=N(),qn=g.type===qh.BLUR||g.type===qh.FOCUS_OUT,Iv=!DI(O._f)&&!t.resolver&&!M(n.errors,I)&&!O._f.deps||FI(qn,M(n.touchedFields,I),n.isSubmitted,w,m),Ha=Jh(I,a,qn);ue(s,I,Pe),qn?(O._f.onBlur&&O._f.onBlur(g),l&&l(0)):O._f.onChange&&O._f.onChange(g);const Wa=R(I,Pe,qn,!1),Tv=!Ge(Wa)||Ha;if(!qn&&d.values.next({name:I,type:g.type,values:{...s}}),Iv)return c.isValid&&(e.mode==="onBlur"?qn&&x():x()),Tv&&d.state.next({name:I,...Ha?{}:Wa});if(!qn&&Ha&&d.state.next({...n}),t.resolver){const{errors:Cd}=await b([I]);if($(Pe),F){const Rv=np(n.errors,r,I),Id=np(Cd,r,Rv.name||I);X=Id.error,I=Id.name,Re=Ge(Cd)}}else h([I],!0),X=(await ep(O,s,y,t.shouldUseNativeValidation))[I],h([I]),$(Pe),F&&(X?Re=!1:c.isValid&&(Re=await z(r,!0)));F&&(O._f.deps&&V(O._f.deps),T(I,Re,X,Wa))}},U=(g,E)=>{if(M(n.errors,E)&&g.focus)return g.focus(),1},V=async(g,E={})=>{let I,F;const O=So(g);if(t.resolver){const N=await K(ge(g)?g:O);I=Ge(N),F=g?!O.some($=>M(N,$)):I}else g?(F=(await Promise.all(O.map(async N=>{const $=M(r,N);return await z($&&$._f?{[N]:$}:$)}))).every(Boolean),!(!F&&!n.isValid)&&x()):F=I=await z(r);return d.state.next({...!Ut(g)||c.isValid&&I!==n.isValid?{}:{name:g},...t.resolver||!g?{isValid:I}:{},errors:n.errors}),E.shouldFocus&&!F&&Hi(r,U,g?O:a.mount),F},ee=g=>{const E={...o.mount?s:i};return ge(g)?E:Ut(g)?M(E,g):g.map(I=>M(E,I))},te=(g,E)=>({invalid:!!M((E||n).errors,g),isDirty:!!M((E||n).dirtyFields,g),error:M((E||n).errors,g),isValidating:!!M(n.validatingFields,g),isTouched:!!M((E||n).touchedFields,g)}),Wt=g=>{g&&So(g).forEach(E=>Ee(n.errors,E)),d.state.next({errors:g?n.errors:{}})},qe=(g,E,I)=>{const F=(M(r,g,{_f:{}})._f||{}).ref,O=M(n.errors,g)||{},{ref:N,message:$,type:X,...Re}=O;ue(n.errors,g,{...Re,...E,ref:F}),d.state.next({name:g,errors:n.errors,isValid:!1}),I&&I.shouldFocus&&F&&F.focus&&F.focus()},At=(g,E)=>sn(g)?d.values.subscribe({next:I=>g(G(void 0,E),I)}):G(g,E,!0),be=(g,E={})=>{for(const I of g?So(g):a.mount)a.mount.delete(I),a.array.delete(I),E.keepValue||(Ee(r,I),Ee(s,I)),!E.keepError&&Ee(n.errors,I),!E.keepDirty&&Ee(n.dirtyFields,I),!E.keepTouched&&Ee(n.touchedFields,I),!E.keepIsValidating&&Ee(n.validatingFields,I),!t.shouldUnregister&&!E.keepDefaultValue&&Ee(i,I);d.values.next({values:{...s}}),d.state.next({...n,...E.keepDirty?{isDirty:H()}:{}}),!E.keepIsValid&&x()},dt=({disabled:g,name:E,field:I,fields:F,value:O})=>{if(Ft(g)&&o.mount||g){const N=g?void 0:ge(O)?Fl(I?I._f:M(F,E)._f):O;ue(s,E,N),R(E,N,!1,!1,!0)}},Kt=(g,E={})=>{let I=M(r,g);const F=Ft(E.disabled)||Ft(e.disabled);return ue(r,g,{...I||{},_f:{...I&&I._f?I._f:{ref:{name:g}},name:g,mount:!0,...E}}),a.mount.add(g),I?dt({field:I,disabled:Ft(E.disabled)?E.disabled:e.disabled,name:g,value:E.value}):C(g,!0,E.value),{...F?{disabled:E.disabled||e.disabled}:{},...t.progressive?{required:!!E.required,min:Ti(E.min),max:Ti(E.max),minLength:Ti(E.minLength),maxLength:Ti(E.maxLength),pattern:Ti(E.pattern)}:{},name:g,onChange:L,onBlur:L,ref:O=>{if(O){Kt(g,E),I=M(r,g);const N=ge(O.value)&&O.querySelectorAll&&O.querySelectorAll("input,select,textarea")[0]||O,$=OI(N),X=I._f.refs||[];if($?X.find(Re=>Re===N):N===I._f.ref)return;ue(r,g,{_f:{...I._f,...$?{refs:[...X.filter(Dl),N,...Array.isArray(M(i,g))?[{}]:[]],ref:{type:N.type,name:g}}:{ref:N}}}),C(g,!1,void 0,N)}else I=M(r,g,{}),I._f&&(I._f.mount=!1),(t.shouldUnregister||E.shouldUnregister)&&!(xI(a.array,g)&&o.action)&&a.unMount.add(g)}}},Ot=()=>t.shouldFocusError&&Hi(r,U,a.mount),gi=g=>{Ft(g)&&(d.state.next({disabled:g}),Hi(r,(E,I)=>{const F=M(r,I);F&&(E.disabled=F._f.disabled||g,Array.isArray(F._f.refs)&&F._f.refs.forEach(O=>{O.disabled=F._f.disabled||g}))},0,!1))},Kn=(g,E)=>async I=>{let F;I&&(I.preventDefault&&I.preventDefault(),I.persist&&I.persist());let O=ft(s);if(d.state.next({isSubmitting:!0}),t.resolver){const{errors:N,values:$}=await b();n.errors=N,O=$}else await z(r);if(Ee(n.errors,"root"),Ge(n.errors)){d.state.next({errors:{}});try{await g(O,I)}catch(N){F=N}}else E&&await E({...n.errors},I),Ot(),setTimeout(Ot);if(d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ge(n.errors)&&!F,submitCount:n.submitCount+1,errors:n.errors}),F)throw F},bt=(g,E={})=>{M(r,g)&&(ge(E.defaultValue)?ie(g,ft(M(i,g))):(ie(g,E.defaultValue),ue(i,g,ft(E.defaultValue))),E.keepTouched||Ee(n.touchedFields,g),E.keepDirty||(Ee(n.dirtyFields,g),n.isDirty=E.defaultValue?H(g,ft(M(i,g))):H()),E.keepError||(Ee(n.errors,g),c.isValid&&x()),d.state.next({...n}))},Ed=(g,E={})=>{const I=g?ft(g):i,F=ft(I),O=Ge(g),N=O?i:F;if(E.keepDefaultValues||(i=I),!E.keepValues){if(E.keepDirtyValues){const $=new Set([...a.mount,...Object.keys(Ii(i,s))]);for(const X of Array.from($))M(n.dirtyFields,X)?ue(N,X,M(s,X)):ie(X,M(N,X))}else{if(wd&&ge(g))for(const $ of a.mount){const X=M(r,$);if(X&&X._f){const Re=Array.isArray(X._f.refs)?X._f.refs[0]:X._f.ref;if(aa(Re)){const Pe=Re.closest("form");if(Pe){Pe.reset();break}}}}r={}}s=e.shouldUnregister?E.keepDefaultValues?ft(i):{}:ft(N),d.array.next({values:{...N}}),d.values.next({values:{...N}})}a={mount:E.keepDirtyValues?a.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!c.isValid||!!E.keepIsValid||!!E.keepDirtyValues,o.watch=!!e.shouldUnregister,d.state.next({submitCount:E.keepSubmitCount?n.submitCount:0,isDirty:O?!1:E.keepDirty?n.isDirty:!!(E.keepDefaultValues&&!Cn(g,i)),isSubmitted:E.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:O?{}:E.keepDirtyValues?E.keepDefaultValues&&s?Ii(i,s):n.dirtyFields:E.keepDefaultValues&&g?Ii(i,g):E.keepDirty?n.dirtyFields:{},touchedFields:E.keepTouched?n.touchedFields:{},errors:E.keepErrors?n.errors:{},isSubmitSuccessful:E.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},kd=(g,E)=>Ed(sn(g)?g(s):g,E);return{control:{register:Kt,unregister:be,getFieldState:te,handleSubmit:Kn,setError:qe,_executeSchema:b,_getWatch:G,_getDirty:H,_updateValid:x,_removeUnmounted:_e,_updateFieldArray:f,_updateDisabledField:dt,_getFieldArray:D,_reset:Ed,_resetDefaultValues:()=>sn(t.defaultValues)&&t.defaultValues().then(g=>{kd(g,t.resetOptions),d.state.next({isLoading:!1})}),_updateFormState:g=>{n={...n,...g}},_disableForm:gi,_subjects:d,_proxyFormState:c,_setErrors:S,get _fields(){return r},get _formValues(){return s},get _state(){return o},set _state(g){o=g},get _defaultValues(){return i},get _names(){return a},set _names(g){a=g},get _formState(){return n},set _formState(g){n=g},get _options(){return t},set _options(g){t={...t,...g}}},trigger:V,register:Kt,handleSubmit:Kn,watch:At,setValue:ie,getValues:ee,reset:kd,resetField:bt,clearErrors:Wt,unregister:be,setError:qe,setFocus:(g,E={})=>{const I=M(r,g),F=I&&I._f;if(F){const O=F.refs?F.refs[0]:F.ref;O.focus&&(O.focus(),E.shouldSelect&&O.select())}},getFieldState:te}}function kv(e={}){const t=ke.useRef(),n=ke.useRef(),[r,i]=ke.useState({isDirty:!1,isValidating:!1,isLoading:sn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:sn(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...UI(e),formState:r});const s=t.current.control;return s._options=e,II({subject:s._subjects.state,next:o=>{CI(o,s._proxyFormState,s._updateFormState)&&i({...s._formState})}}),ke.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),ke.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),ke.useEffect(()=>{e.values&&!Cn(e.values,n.current)?(s._reset(e.values,s._options.resetOptions),n.current=e.values,i(o=>({...o}))):s._resetDefaultValues()},[e.values,s]),ke.useEffect(()=>{e.errors&&s._setErrors(e.errors)},[e.errors,s]),ke.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),ke.useEffect(()=>{e.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[e.shouldUnregister,s]),ke.useEffect(()=>{t.current&&(t.current.watch=t.current.watch.bind({}))},[r]),t.current.formState=kI(r,s),t.current}const zI=({close:e,action:t})=>{const{register:n,handleSubmit:r}=kv(),i=s=>{t(s.link),setTimeout(()=>{e()},200)};return _.jsx(mv,{children:_.jsx("div",{className:"content",children:_.jsxs("form",{onSubmit:r(i),children:[_.jsx("h3",{children:"Adicionar Link"}),_.jsx("input",{type:"text",placeholder:"Digite a URL",...n("link")}),_.jsxs("div",{className:"buttonsContainer",children:[_.jsx("button",{className:"cancelButton",type:"button",onClick:e,children:"Cancelar"}),_.jsx("button",{className:"saveButton",type:"submit",children:"Salvar"})]})]})})})},$I=({close:e,action:t,value:n})=>{const{register:r,setValue:i,handleSubmit:s,formState:{isValid:o},watch:a}=kv({mode:"onChange"});A.useEffect(()=>{if(n){const{title:u,during:c,technologies:d,descrip:m,link:w}=n[0];i("title",u),i("during",c),i("technologies",d.join(", ")),i("descrip",m),i("link",w||"")}},[n,i]);const l=u=>{const c={...u,technologies:u.technologies.split(",").map(d=>d.trim())};t(JSON.stringify(c)),setTimeout(()=>{e()},200)};return a(),_.jsx(mv,{children:_.jsx("div",{className:"content",children:_.jsxs("form",{onSubmit:s(l),children:[_.jsx("h3",{children:"Criação de Card"}),_.jsx("input",{type:"text",placeholder:"Título",...r("title",{required:!0}),defaultValue:n?n[0].title:""}),_.jsx("input",{type:"text",placeholder:"Período de atuação",...r("during",{required:!0}),defaultValue:n?n[0].during:""}),_.jsx("input",{type:"text",placeholder:"Habilidades (Separe-as por vírgula)",...r("technologies",{required:!0}),defaultValue:n?n[0].technologies.join(", "):""}),_.jsx("textarea",{placeholder:"Descreva sua experiência",...r("descrip",{required:!0}),defaultValue:n?n[0].descrip:""}),_.jsx("input",{type:"text",placeholder:"Link do repositório (Opcional)",...r("link"),defaultValue:n?n[0].link:""}),_.jsxs("div",{className:"buttonsContainer",children:[_.jsx("button",{className:"cancelButton",type:"button",onClick:e,children:"Cancelar"}),_.jsx("button",{className:"saveButton",type:"submit",disabled:!o,children:"Salvar"})]})]})})})},ms=e=>{const t=JSON.parse(localStorage.getItem("users")||"[]"),n=t.findIndex(r=>r.name===e);return{usersArray:t,userIndex:n}},Cv=()=>JSON.parse(localStorage.getItem("users")||"[]"),Wn=(e,t,n)=>{const{usersArray:r,userIndex:i}=ms(e);if(i!==-1)r[i][t]=n;else{const s={name:e,[t]:n};r.push(s)}localStorage.setItem("users",JSON.stringify(r))},BI=(e,t)=>{Wn(e,"linkedinLink",t)},VI=(e,t)=>{Wn(e,"instaLink",t)},HI=(e,t)=>{Wn(e,"faceLink",t)},WI=(e,t)=>{Wn(e,"xLink",t)},KI=(e,t)=>{Wn(e,"youLink",t)},qI=(e,t)=>{Wn(e,"displayName",t)},GI=(e,t)=>{Wn(e,"history",t)},JI=(e,t)=>{Wn(e,"extraEmail",t)},QI=(e,t)=>{const{usersArray:n,userIndex:r}=ms(e);if(r>-1){const i=JSON.parse(t);n[r].experiences=[...n[r].experiences||[],i]}localStorage.setItem("users",JSON.stringify(n))},XI=(e,t,n)=>{const{usersArray:r,userIndex:i}=ms(e);if(i>-1){const s=JSON.parse(t);r[i].experiences[n]=s}localStorage.setItem("users",JSON.stringify(r))},YI=({userLogged:e,updateUser:t})=>{var G;const{user:n}=L1(),[r,i]=A.useState(!1),[s,o]=A.useState(!1),[a,l]=A.useState(!1),[u,c]=A.useState(""),[d,m]=A.useState(),[w,y]=A.useState(),[v,x]=A.useState({imgUrl:"/assets/images/github_icon.png",name:"Loading...",link:"https://github.com/",location:"Loading...",email:"Loading...",bio:""}),[h,f]=A.useState({name:n||""}),p=A.useRef(null),S=A.useRef(null),C=A.useRef(null);A.useEffect(()=>{const{usersArray:D,userIndex:B}=ms(n||"");B!==-1&&f(D[B]),we.get(`https://api.github.com/users/${n}`,{headers:{Authorization:"Bearer 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"}}).then(J=>{x({imgUrl:J.data.avatar_url,name:J.data.name,link:J.data.html_url,location:J.data.location,email:J.data.email,bio:J.data.bio})}).catch(J=>{console.log(J)})},[]),A.useEffect(()=>{i(!1)},[e]);const R=D=>{D.preventDefault(),c("linkedin"),o(!0)},T=D=>{D.preventDefault(),c("instagram"),o(!0)},b=D=>{D.preventDefault(),c("facebook"),o(!0)},K=D=>{D.preventDefault(),c("x"),o(!0)},z=D=>{D.preventDefault(),c("youtube"),o(!0)},_e=D=>{u==="linkedin"&&(BI(n||"",D),f(B=>({...B,linkedinLink:D}))),u==="instagram"&&(VI(n||"",D),f(B=>({...B,instaLink:D}))),u==="facebook"&&(HI(n||"",D),f(B=>({...B,faceLink:D}))),u==="x"&&(WI(n||"",D),f(B=>({...B,xLink:D}))),u==="youtube"&&(KI(n||"",D),f(B=>({...B,youLink:D})))},H=D=>{d===-1&&(QI(n||"",D),f(B=>({...B,experiences:B.experiences?[...B.experiences,JSON.parse(D)]:[JSON.parse(D)]}))),d&&d>0&&(f(B=>{const ie=[...B.experiences??[]];return ie[d-1]=JSON.parse(D),{...B,experiences:ie}}),XI(n||"",D,d-1)),i(!0)};return A.useEffect(()=>{r&&p.current&&(p.current.value=h.displayName?h.displayName:v.name),r&&S.current&&(S.current.value=h.history?h.history:"Adicione sua história"),r&&C.current&&(C.current.value=h.extraEmail?h.extraEmail:"")},[r]),_.jsxs(yI,{children:[_.jsx(gI,{updateUser:t}),e===n&&_.jsx("button",{className:"edit",onClick:()=>{i(!r)},children:_.jsx("img",{src:`${r?"/assets/images/check.png":"/assets/images/edit_icon.png"}`})}),_.jsxs("section",{className:"profile_info",id:"info",children:[_.jsxs("div",{className:"perfil",children:[_.jsx("img",{src:v.imgUrl,alt:"profile"}),_.jsx("h2",{children:v.name}),_.jsx("p",{children:v.location}),_.jsx("p",{children:v.email})]}),_.jsxs("div",{className:"brand",children:[_.jsx("h1",{children:"Hello,"}),_.jsxs("h1",{style:{marginTop:"29px"},children:["I'm",!r&&_.jsx("span",{children:h.displayName?h.displayName:v.name}),r&&_.jsx("input",{ref:p,type:"text",onChange:()=>{var D;f(B=>{var J;return{...B,displayName:((J=p.current)==null?void 0:J.value)||""}}),qI(n||"",((D=p.current)==null?void 0:D.value)||"")}})]}),_.jsx("p",{style:{marginTop:"32px"},children:v.bio}),_.jsxs("div",{className:"buttons_container",style:{marginTop:"32px"},children:[_.jsx("a",{href:v.link,children:_.jsx("button",{children:"Github"})}),_.jsx("a",{href:h.linkedinLink?h.linkedinLink:"https://www.linkedin.com",children:_.jsxs("button",{children:["LinkedIn",r&&_.jsx("div",{className:"edit",onClick:R,children:_.jsx("img",{src:"/assets/images/edit_icon.png"})})]})})]})]})]}),_.jsxs("section",{className:"history",id:"history",children:[_.jsx("h2",{children:"Minha história"}),!r&&_.jsx("p",{children:h.history?h.history:"Não há nenhuma história pra contar!"}),r&&_.jsx("textarea",{ref:S,onChange:()=>{var D;f(B=>{var J;return{...B,history:((J=S.current)==null?void 0:J.value)||""}}),GI(n||"",((D=S.current)==null?void 0:D.value)||"")}})]}),_.jsxs(vI,{id:"experiences",children:[_.jsx("h2",{children:"Experiências"}),_.jsxs("div",{className:"experiencies",children:[(G=h.experiences)==null?void 0:G.map((D,B)=>_.jsx(rS,{title:D.title,during:D.during,technologies:D.technologies,description:D.descrip,editMode:r,link:D.link,setCardFormState:()=>{y([D]),m(B+1),l(!0)},del:()=>{var L;const{usersArray:J,userIndex:ie}=ms(n||"");ie>-1&&((L=J[ie].experiences)==null||L.splice(B,1),f(U=>({...U,experiences:J[ie].experiences})),localStorage.setItem("users",JSON.stringify(J)),i(!0))}},B)),!(h.experiences&&h.experiences.length>0)&&!r&&_.jsx("p",{className:"nothing_here",children:"Não há nada por aqui!"}),r&&_.jsx(tS,{setCardFormState:()=>{y(null),l(!0),m(-1)}})]})]}),h.extraEmail||r?_.jsxs(wI,{id:"contact",children:[_.jsx("h4",{children:"Sinta-se livre para me contatar a qualquer momento!"}),r?_.jsx("input",{type:"text",ref:C,placeholder:"Adicione um email adicional",onChange:()=>{var D;JI(n||"",((D=C.current)==null?void 0:D.value)||""),f(B=>{var J;return{...B,extraEmail:((J=C.current)==null?void 0:J.value)||""}})}}):_.jsx("h4",{children:h.extraEmail})]}):void 0,_.jsxs("footer",{children:[_.jsx("p",{className:"disclaimer",children:"Assim que possível, me envie um email para que possamos trabalhar felizes juntos!"}),_.jsxs("div",{className:"social",children:[h.instaLink||r?_.jsx("a",{target:"blank",href:h.instaLink?`${h.instaLink}`:"https://instagram.com",children:_.jsxs("div",{className:"link",children:[_.jsx("img",{alt:"Instagram",src:"/assets/socialIcons/insta_color.png"}),_.jsx("img",{alt:"Instagram",src:"/assets/socialIcons/insta_black.png"}),r?_.jsx("div",{className:"edit",onClick:T,children:_.jsx("img",{src:"/assets/images/edit_icon.png"})}):void 0]})}):void 0,h.faceLink||r?_.jsx("a",{target:"blank",href:h.faceLink?`${h.faceLink}`:"https://facebook.com",children:_.jsxs("div",{className:"link",children:[_.jsx("img",{alt:"Facebook",src:"/assets/socialIcons/face_color.png"}),_.jsx("img",{alt:"Facebook",src:"/assets/socialIcons/face_black.png"}),r?_.jsx("div",{className:"edit",onClick:b,children:_.jsx("img",{src:"/assets/images/edit_icon.png"})}):void 0]})}):void 0,h.xLink||r?_.jsx("a",{target:"blank",href:h.xLink?`${h.xLink}`:"https://x.com",children:_.jsxs("div",{className:"link",children:[_.jsx("img",{alt:"X",src:"/assets/socialIcons/x_color.png"}),_.jsx("img",{alt:"X",src:"/assets/socialIcons/x_black.png"}),r?_.jsx("div",{className:"edit",onClick:K,children:_.jsx("img",{src:"/assets/images/edit_icon.png"})}):void 0]})}):void 0,h.youLink||r?_.jsx("a",{target:"blank",href:h.youLink?`${h.youLink}`:"https://youtube.com",children:_.jsxs("div",{className:"link",children:[_.jsx("img",{alt:"Youtube",src:"/assets/socialIcons/you_color.png"}),_.jsx("img",{alt:"Youtube",src:"/assets/socialIcons/you_black.png"}),r?_.jsx("div",{className:"edit",onClick:z,children:_.jsx("img",{src:"/assets/images/edit_icon.png"})}):void 0]})}):void 0]}),_.jsxs("div",{className:"copyright",children:[_.jsxs("div",{className:"location",children:[_.jsx("img",{alt:"Localidade",src:"/assets/images/location.png"}),_.jsx("h5",{children:"Brasil"})]}),_.jsxs("h5",{children:["© 2024 ",v.name,". Todos os direitos reservados."]})]})]}),s&&_.jsx(zI,{action:D=>{_e(D)},close:()=>{o(!1)}}),a&&_.jsx($I,{value:w,close:()=>{l(!1)},action:D=>{H(D)}})]})},ZI=Ht.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;

    h1{
        font-family: "Roboto", sans-serif;
        font-weight: 800;
        font-size: 40px;
        line-height: 40px;
    }
    
    .input_group{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 788px;
        flex-wrap: wrap;
        
        p.warning{
            display: flex;
            align-items: center;
            height: 40px;
            gap: 8px;

            span{
                color: var(--red);
                font-family: "Roboto", sans-serif;
                font-weight: 600;
                font-size: 16px;
                line-height: 40px;
            }
        }

        button{
            width: 83px;
            height: 56px;
            border-radius: 16px;
            border: 1px solid var(--primary_text);
            background-color: var(--tertiary_text);
            transition: 0.2s;
            cursor: pointer;

            &:hover{
                background-color: var(--primary_color);
            }
        }
        input{
            width: 687.88px;
            height: 56px;
            border-radius: 16px;
            border: 1px solid var(--primary_text);

            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 24px;
            line-height: 40px;
            padding-left: 17.12px;

            &:focus{
                outline: none;
            }
        }
    }

    .or_bar{
        width: 788px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .line{
            width: 361px;
            height: 5px;
            background-color: var(--secondary_color);
        }
        p{
            font-weight: 700;
            font-family: "Roboto", sans-serif;
            font-size: 24px;
            line-height: 40px;
            color: var(--primary_text);
        }
    }

    .github_option{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 48px;
        gap: 16px;

        p.label{
            font-weight: 800;
            font-family: "Roboto", sans-serif;
            font-size: 24px;
            line-height: 40px;
            color: var(--primary_text);
        }

        button{
            width: 130px;
            height: 48px;
            border-radius: 24px;
            padding: 4px 24px;
            background-color: var(--dark_green);
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            cursor: pointer;
            transition: 0.2s;

            &:hover{
                background-color: var(--primary_color);
            }

            p{
                font-family: "Roboto", sans-serif;
                font-weight: 800;
                font-size: 16px;
                line-height: 40px;
                color: var(--secondary_text);
            }
        }
    }
`,eT=Ht.div`
    position: absolute;
    top: calc((50%) + 6px);
    width: 688px;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.169);
    border-radius: 6px;
    border: 1px solid #D6D6D6;
    background-color: #FFFFFF;
    padding: 12px 12px 34px 12px;
    box-sizing: border-box;

    .user{
        display: flex;
        align-items: center;
        gap: 10px;
        color: #C9CACC;
        width: 664px;
        border-bottom: 1px solid #C9CACC;
        cursor: pointer;
        transition: 0.2s;
        &:hover{
            color: #000000;
        }

        p{
            font-family: "Roboto", sans-serif;
            font-weight: 600px;
            font-size: 16px;
            line-height: 40px
        }
    }
`,tT=({search:e,complete:t})=>{const n=Cv(),[r,i]=A.useState([]);return A.useEffect(()=>{i(e?n.filter(s=>{var o;return(o=s.name)==null?void 0:o.startsWith(e)}):[])},[e]),_.jsx(eT,{children:r.map((s,o)=>_.jsxs("div",{className:"user",onClick:()=>{t(s.name)},children:[_.jsx("img",{src:"/assets/images/default_user.png",alt:"User"}),_.jsx("p",{children:s.name})]},o))})},nT=()=>{const e=O1(),t=Cv(),n=A.useRef(null),[r,i]=A.useState(!1),[s,o]=A.useState(""),[a,l]=A.useState(!1),u=()=>{i(!0),l(!1)},c=()=>{setTimeout(()=>{i(!1)},200)},d=()=>{t.find(m=>m.name===n.current.value)?e(`/profile/${n.current.value}`):l(!0)};return _.jsxs(ZI,{children:[_.jsx("h1",{children:"Digite o nome do usuário que deseja bucar"}),_.jsxs("div",{className:"input_group",children:[_.jsx("input",{type:"text",name:"user",id:"user",placeholder:"Digite o nome do usuário",ref:n,onFocus:u,onBlur:c,onChange:m=>o(m.target.value)}),r&&_.jsx(tT,{search:s,complete:m=>{n.current.value=m}}),_.jsx("button",{onClick:d,children:_.jsx("img",{src:"/assets/images/arrow_right.png",alt:"Avançar"})}),a&&_.jsxs("p",{className:"warning",children:[_.jsx("img",{src:"/assets/images/warning.png"}),_.jsx("span",{children:"O nome que você digitou não existe ou não está cadastrado!"})]})]}),_.jsxs("div",{className:"or_bar",children:[_.jsx("div",{className:"line"}),_.jsx("p",{children:"OU"}),_.jsx("div",{className:"line"})]}),_.jsxs("div",{className:"github_option",onClick:()=>{By({callback:m=>{Vy(m),e(`/profile/${m}`)}})},children:[_.jsx("p",{className:"label",children:"Acesse sua conta com"}),_.jsxs("button",{children:[_.jsx("img",{src:"/assets/images/github_icon.png",alt:"GitHub"}),_.jsx("p",{children:"Github"})]})]})]})},rT=()=>{const[e,t]=A.useState(),n=()=>{const r=Hy();r.login?t(r.login):t(null)};return A.useEffect(n,[]),_.jsxs(G1,{children:[_.jsx(Nu,{path:"/",element:_.jsx(nT,{})}),_.jsx(Nu,{path:"/profile/:user",element:_.jsx(YI,{updateUser:n,userLogged:e})})]})};function iT(){return _.jsx(_.Fragment,{children:_.jsx(X1,{children:_.jsx(rT,{})})})}mg(document.getElementById("root")).render(_.jsx(A.StrictMode,{children:_.jsx(iT,{})}));
