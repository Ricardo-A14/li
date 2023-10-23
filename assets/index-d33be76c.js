function nd(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function td(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xu={exports:{}},mi={},Eu={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tr=Symbol.for("react.element"),rd=Symbol.for("react.portal"),id=Symbol.for("react.fragment"),od=Symbol.for("react.strict_mode"),ld=Symbol.for("react.profiler"),ad=Symbol.for("react.provider"),ud=Symbol.for("react.context"),sd=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),dd=Symbol.for("react.memo"),fd=Symbol.for("react.lazy"),aa=Symbol.iterator;function pd(e){return e===null||typeof e!="object"?null:(e=aa&&e[aa]||e["@@iterator"],typeof e=="function"?e:null)}var Pu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ju=Object.assign,Nu={};function dt(e,n,t){this.props=e,this.context=n,this.refs=Nu,this.updater=t||Pu}dt.prototype.isReactComponent={};dt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};dt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _u(){}_u.prototype=dt.prototype;function al(e,n,t){this.props=e,this.context=n,this.refs=Nu,this.updater=t||Pu}var ul=al.prototype=new _u;ul.constructor=al;ju(ul,dt.prototype);ul.isPureReactComponent=!0;var ua=Array.isArray,Ru=Object.prototype.hasOwnProperty,sl={current:null},Lu={key:!0,ref:!0,__self:!0,__source:!0};function Du(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)Ru.call(n,r)&&!Lu.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:tr,type:e,key:o,ref:l,props:i,_owner:sl.current}}function hd(e,n){return{$$typeof:tr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function cl(e){return typeof e=="object"&&e!==null&&e.$$typeof===tr}function md(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var sa=/\/+/g;function Ii(e,n){return typeof e=="object"&&e!==null&&e.key!=null?md(""+e.key):n.toString(36)}function _r(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case tr:case rd:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ii(l,0):r,ua(i)?(t="",e!=null&&(t=e.replace(sa,"$&/")+"/"),_r(i,n,t,"",function(s){return s})):i!=null&&(cl(i)&&(i=hd(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(sa,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",ua(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Ii(o,a);l+=_r(o,n,t,u,i)}else if(u=pd(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Ii(o,a++),l+=_r(o,n,t,u,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function dr(e,n,t){if(e==null)return e;var r=[],i=0;return _r(e,r,"","",function(o){return n.call(t,o,i++)}),r}function vd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},Rr={transition:null},gd={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Rr,ReactCurrentOwner:sl};T.Children={map:dr,forEach:function(e,n,t){dr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return dr(e,function(){n++}),n},toArray:function(e){return dr(e,function(n){return n})||[]},only:function(e){if(!cl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=dt;T.Fragment=id;T.Profiler=ld;T.PureComponent=al;T.StrictMode=od;T.Suspense=cd;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gd;T.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ju({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=sl.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)Ru.call(n,u)&&!Lu.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:tr,type:e.type,key:i,ref:o,props:r,_owner:l}};T.createContext=function(e){return e={$$typeof:ud,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ad,_context:e},e.Consumer=e};T.createElement=Du;T.createFactory=function(e){var n=Du.bind(null,e);return n.type=e,n};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:sd,render:e}};T.isValidElement=cl;T.lazy=function(e){return{$$typeof:fd,_payload:{_status:-1,_result:e},_init:vd}};T.memo=function(e,n){return{$$typeof:dd,type:e,compare:n===void 0?null:n}};T.startTransition=function(e){var n=Rr.transition;Rr.transition={};try{e()}finally{Rr.transition=n}};T.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};T.useCallback=function(e,n){return se.current.useCallback(e,n)};T.useContext=function(e){return se.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return se.current.useDeferredValue(e)};T.useEffect=function(e,n){return se.current.useEffect(e,n)};T.useId=function(){return se.current.useId()};T.useImperativeHandle=function(e,n,t){return se.current.useImperativeHandle(e,n,t)};T.useInsertionEffect=function(e,n){return se.current.useInsertionEffect(e,n)};T.useLayoutEffect=function(e,n){return se.current.useLayoutEffect(e,n)};T.useMemo=function(e,n){return se.current.useMemo(e,n)};T.useReducer=function(e,n,t){return se.current.useReducer(e,n,t)};T.useRef=function(e){return se.current.useRef(e)};T.useState=function(e){return se.current.useState(e)};T.useSyncExternalStore=function(e,n,t){return se.current.useSyncExternalStore(e,n,t)};T.useTransition=function(){return se.current.useTransition()};T.version="18.2.0";Eu.exports=T;var x=Eu.exports;const wd=td(x),yd=nd({__proto__:null,default:wd},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd=x,Sd=Symbol.for("react.element"),Cd=Symbol.for("react.fragment"),xd=Object.prototype.hasOwnProperty,Ed=kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pd={key:!0,ref:!0,__self:!0,__source:!0};function Tu(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)xd.call(n,r)&&!Pd.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Sd,type:e,key:o,ref:l,props:i,_owner:Ed.current}}mi.Fragment=Cd;mi.jsx=Tu;mi.jsxs=Tu;xu.exports=mi;var p=xu.exports,fo={},Au={exports:{}},ke={},zu={exports:{}},Mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(P,L){var D=P.length;P.push(L);e:for(;0<D;){var Q=D-1>>>1,Z=P[Q];if(0<i(Z,L))P[Q]=L,P[D]=Z,D=Q;else break e}}function t(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var L=P[0],D=P.pop();if(D!==L){P[0]=D;e:for(var Q=0,Z=P.length,sr=Z>>>1;Q<sr;){var kn=2*(Q+1)-1,Oi=P[kn],Sn=kn+1,cr=P[Sn];if(0>i(Oi,D))Sn<Z&&0>i(cr,Oi)?(P[Q]=cr,P[Sn]=D,Q=Sn):(P[Q]=Oi,P[kn]=D,Q=kn);else if(Sn<Z&&0>i(cr,D))P[Q]=cr,P[Sn]=D,Q=Sn;else break e}}return L}function i(P,L){var D=P.sortIndex-L.sortIndex;return D!==0?D:P.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],h=1,m=null,v=3,y=!1,k=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(P){for(var L=t(s);L!==null;){if(L.callback===null)r(s);else if(L.startTime<=P)r(s),L.sortIndex=L.expirationTime,n(u,L);else break;L=t(s)}}function g(P){if(w=!1,f(P),!k)if(t(u)!==null)k=!0,zi(C);else{var L=t(s);L!==null&&Mi(g,L.startTime-P)}}function C(P,L){k=!1,w&&(w=!1,d(R),R=-1),y=!0;var D=v;try{for(f(L),m=t(u);m!==null&&(!(m.expirationTime>L)||P&&!_e());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,v=m.priorityLevel;var Z=Q(m.expirationTime<=L);L=e.unstable_now(),typeof Z=="function"?m.callback=Z:m===t(u)&&r(u),f(L)}else r(u);m=t(u)}if(m!==null)var sr=!0;else{var kn=t(s);kn!==null&&Mi(g,kn.startTime-L),sr=!1}return sr}finally{m=null,v=D,y=!1}}var j=!1,N=null,R=-1,$=5,A=-1;function _e(){return!(e.unstable_now()-A<$)}function mt(){if(N!==null){var P=e.unstable_now();A=P;var L=!0;try{L=N(!0,P)}finally{L?vt():(j=!1,N=null)}}else j=!1}var vt;if(typeof c=="function")vt=function(){c(mt)};else if(typeof MessageChannel<"u"){var la=new MessageChannel,ed=la.port2;la.port1.onmessage=mt,vt=function(){ed.postMessage(null)}}else vt=function(){_(mt,0)};function zi(P){N=P,j||(j=!0,vt())}function Mi(P,L){R=_(function(){P(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){k||y||(k=!0,zi(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(P){switch(v){case 1:case 2:case 3:var L=3;break;default:L=v}var D=v;v=L;try{return P()}finally{v=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,L){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var D=v;v=P;try{return L()}finally{v=D}},e.unstable_scheduleCallback=function(P,L,D){var Q=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Q+D:Q):D=Q,P){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=D+Z,P={id:h++,callback:L,priorityLevel:P,startTime:D,expirationTime:Z,sortIndex:-1},D>Q?(P.sortIndex=D,n(s,P),t(u)===null&&P===t(s)&&(w?(d(R),R=-1):w=!0,Mi(g,D-Q))):(P.sortIndex=Z,n(u,P),k||y||(k=!0,zi(C))),P},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(P){var L=v;return function(){var D=v;v=L;try{return P.apply(this,arguments)}finally{v=D}}}})(Mu);zu.exports=Mu;var jd=zu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou=x,ye=jd;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Iu=new Set,Ft={};function Mn(e,n){it(e,n),it(e+"Capture",n)}function it(e,n){for(Ft[e]=n,e=0;e<n.length;e++)Iu.add(n[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),po=Object.prototype.hasOwnProperty,Nd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ca={},da={};function _d(e){return po.call(da,e)?!0:po.call(ca,e)?!1:Nd.test(e)?da[e]=!0:(ca[e]=!0,!1)}function Rd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ld(e,n,t,r){if(n===null||typeof n>"u"||Rd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var dl=/[\-:]([a-z])/g;function fl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(dl,fl);te[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(dl,fl);te[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(dl,fl);te[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function pl(e,n,t,r){var i=te.hasOwnProperty(n)?te[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ld(n,t,i,r)&&(t=null),r||i===null?_d(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Je=Ou.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fr=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Wn=Symbol.for("react.fragment"),hl=Symbol.for("react.strict_mode"),ho=Symbol.for("react.profiler"),Fu=Symbol.for("react.provider"),Bu=Symbol.for("react.context"),ml=Symbol.for("react.forward_ref"),mo=Symbol.for("react.suspense"),vo=Symbol.for("react.suspense_list"),vl=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),Uu=Symbol.for("react.offscreen"),fa=Symbol.iterator;function gt(e){return e===null||typeof e!="object"?null:(e=fa&&e[fa]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Fi;function Pt(e){if(Fi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Fi=n&&n[1]||""}return`
`+Fi+e}var Bi=!1;function Ui(e,n){if(!e||Bi)return"";Bi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Bi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Pt(e):""}function Dd(e){switch(e.tag){case 5:return Pt(e.type);case 16:return Pt("Lazy");case 13:return Pt("Suspense");case 19:return Pt("SuspenseList");case 0:case 2:case 15:return e=Ui(e.type,!1),e;case 11:return e=Ui(e.type.render,!1),e;case 1:return e=Ui(e.type,!0),e;default:return""}}function go(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wn:return"Fragment";case Un:return"Portal";case ho:return"Profiler";case hl:return"StrictMode";case mo:return"Suspense";case vo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bu:return(e.displayName||"Context")+".Consumer";case Fu:return(e._context.displayName||"Context")+".Provider";case ml:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vl:return n=e.displayName||null,n!==null?n:go(e.type)||"Memo";case qe:n=e._payload,e=e._init;try{return go(e(n))}catch{}}return null}function Td(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return go(n);case 8:return n===hl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ad(e){var n=Wu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pr(e){e._valueTracker||(e._valueTracker=Ad(e))}function Vu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Wu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wo(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function pa(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=mn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Hu(e,n){n=n.checked,n!=null&&pl(e,"checked",n,!1)}function yo(e,n){Hu(e,n);var t=mn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ko(e,n.type,t):n.hasOwnProperty("defaultValue")&&ko(e,n.type,mn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ha(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ko(e,n,t){(n!=="number"||Wr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var jt=Array.isArray;function qn(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+mn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function So(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ma(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(jt(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:mn(t)}}function $u(e,n){var t=mn(n.value),r=mn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function va(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Qu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Co(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Qu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hr,Gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(hr=hr||document.createElement("div"),hr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Bt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Rt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zd=["Webkit","ms","Moz","O"];Object.keys(Rt).forEach(function(e){zd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Rt[n]=Rt[e]})});function Ku(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Rt.hasOwnProperty(e)&&Rt[e]?(""+n).trim():n+"px"}function Yu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Ku(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Md=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xo(e,n){if(n){if(Md[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function Eo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Po=null;function gl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jo=null,bn=null,et=null;function ga(e){if(e=or(e)){if(typeof jo!="function")throw Error(S(280));var n=e.stateNode;n&&(n=ki(n),jo(e.stateNode,e.type,n))}}function Xu(e){bn?et?et.push(e):et=[e]:bn=e}function Ju(){if(bn){var e=bn,n=et;if(et=bn=null,ga(e),n)for(e=0;e<n.length;e++)ga(n[e])}}function Zu(e,n){return e(n)}function qu(){}var Wi=!1;function bu(e,n,t){if(Wi)return e(n,t);Wi=!0;try{return Zu(e,n,t)}finally{Wi=!1,(bn!==null||et!==null)&&(qu(),Ju())}}function Ut(e,n){var t=e.stateNode;if(t===null)return null;var r=ki(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var No=!1;if(Ge)try{var wt={};Object.defineProperty(wt,"passive",{get:function(){No=!0}}),window.addEventListener("test",wt,wt),window.removeEventListener("test",wt,wt)}catch{No=!1}function Od(e,n,t,r,i,o,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(h){this.onError(h)}}var Lt=!1,Vr=null,Hr=!1,_o=null,Id={onError:function(e){Lt=!0,Vr=e}};function Fd(e,n,t,r,i,o,l,a,u){Lt=!1,Vr=null,Od.apply(Id,arguments)}function Bd(e,n,t,r,i,o,l,a,u){if(Fd.apply(this,arguments),Lt){if(Lt){var s=Vr;Lt=!1,Vr=null}else throw Error(S(198));Hr||(Hr=!0,_o=s)}}function On(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function es(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function wa(e){if(On(e)!==e)throw Error(S(188))}function Ud(e){var n=e.alternate;if(!n){if(n=On(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return wa(i),e;if(o===r)return wa(i),n;o=o.sibling}throw Error(S(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===t){l=!0,t=i,r=o;break}if(a===r){l=!0,r=i,t=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===t){l=!0,t=o,r=i;break}if(a===r){l=!0,r=o,t=i;break}a=a.sibling}if(!l)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function ns(e){return e=Ud(e),e!==null?ts(e):null}function ts(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ts(e);if(n!==null)return n;e=e.sibling}return null}var rs=ye.unstable_scheduleCallback,ya=ye.unstable_cancelCallback,Wd=ye.unstable_shouldYield,Vd=ye.unstable_requestPaint,G=ye.unstable_now,Hd=ye.unstable_getCurrentPriorityLevel,wl=ye.unstable_ImmediatePriority,is=ye.unstable_UserBlockingPriority,$r=ye.unstable_NormalPriority,$d=ye.unstable_LowPriority,os=ye.unstable_IdlePriority,vi=null,Be=null;function Qd(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(vi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:Yd,Gd=Math.log,Kd=Math.LN2;function Yd(e){return e>>>=0,e===0?32:31-(Gd(e)/Kd|0)|0}var mr=64,vr=4194304;function Nt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~i;a!==0?r=Nt(a):(o&=l,o!==0&&(r=Nt(o)))}else l=t&~i,l!==0?r=Nt(l):o!==0&&(r=Nt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ae(n),i=1<<t,r|=e[t],n&=~i;return r}function Xd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ae(o),a=1<<l,u=i[l];u===-1?(!(a&t)||a&r)&&(i[l]=Xd(a,n)):u<=n&&(e.expiredLanes|=a),o&=~a}}function Ro(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ls(){var e=mr;return mr<<=1,!(mr&4194240)&&(mr=64),e}function Vi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function rr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ae(n),e[n]=t}function Zd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Ae(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function yl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ae(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var M=0;function as(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var us,kl,ss,cs,ds,Lo=!1,gr=[],ln=null,an=null,un=null,Wt=new Map,Vt=new Map,en=[],qd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ka(e,n){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Wt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vt.delete(n.pointerId)}}function yt(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=or(n),n!==null&&kl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function bd(e,n,t,r,i){switch(n){case"focusin":return ln=yt(ln,e,n,t,r,i),!0;case"dragenter":return an=yt(an,e,n,t,r,i),!0;case"mouseover":return un=yt(un,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Wt.set(o,yt(Wt.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Vt.set(o,yt(Vt.get(o)||null,e,n,t,r,i)),!0}return!1}function fs(e){var n=En(e.target);if(n!==null){var t=On(n);if(t!==null){if(n=t.tag,n===13){if(n=es(t),n!==null){e.blockedOn=n,ds(e.priority,function(){ss(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Do(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Po=r,t.target.dispatchEvent(r),Po=null}else return n=or(t),n!==null&&kl(n),e.blockedOn=t,!1;n.shift()}return!0}function Sa(e,n,t){Lr(e)&&t.delete(n)}function ef(){Lo=!1,ln!==null&&Lr(ln)&&(ln=null),an!==null&&Lr(an)&&(an=null),un!==null&&Lr(un)&&(un=null),Wt.forEach(Sa),Vt.forEach(Sa)}function kt(e,n){e.blockedOn===n&&(e.blockedOn=null,Lo||(Lo=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,ef)))}function Ht(e){function n(i){return kt(i,e)}if(0<gr.length){kt(gr[0],e);for(var t=1;t<gr.length;t++){var r=gr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&kt(ln,e),an!==null&&kt(an,e),un!==null&&kt(un,e),Wt.forEach(n),Vt.forEach(n),t=0;t<en.length;t++)r=en[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(t=en[0],t.blockedOn===null);)fs(t),t.blockedOn===null&&en.shift()}var nt=Je.ReactCurrentBatchConfig,Gr=!0;function nf(e,n,t,r){var i=M,o=nt.transition;nt.transition=null;try{M=1,Sl(e,n,t,r)}finally{M=i,nt.transition=o}}function tf(e,n,t,r){var i=M,o=nt.transition;nt.transition=null;try{M=4,Sl(e,n,t,r)}finally{M=i,nt.transition=o}}function Sl(e,n,t,r){if(Gr){var i=Do(e,n,t,r);if(i===null)qi(e,n,r,Kr,t),ka(e,r);else if(bd(i,e,n,t,r))r.stopPropagation();else if(ka(e,r),n&4&&-1<qd.indexOf(e)){for(;i!==null;){var o=or(i);if(o!==null&&us(o),o=Do(e,n,t,r),o===null&&qi(e,n,r,Kr,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else qi(e,n,r,null,t)}}var Kr=null;function Do(e,n,t,r){if(Kr=null,e=gl(r),e=En(e),e!==null)if(n=On(e),n===null)e=null;else if(t=n.tag,t===13){if(e=es(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Kr=e,null}function ps(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hd()){case wl:return 1;case is:return 4;case $r:case $d:return 16;case os:return 536870912;default:return 16}default:return 16}}var tn=null,Cl=null,Dr=null;function hs(){if(Dr)return Dr;var e,n=Cl,t=n.length,r,i="value"in tn?tn.value:tn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return Dr=i.slice(e,1<r?1-r:void 0)}function Tr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wr(){return!0}function Ca(){return!1}function Se(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wr:Ca,this.isPropagationStopped=Ca,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),n}var ft={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Se(ft),ir=V({},ft,{view:0,detail:0}),rf=Se(ir),Hi,$i,St,gi=V({},ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:El,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==St&&(St&&e.type==="mousemove"?(Hi=e.screenX-St.screenX,$i=e.screenY-St.screenY):$i=Hi=0,St=e),Hi)},movementY:function(e){return"movementY"in e?e.movementY:$i}}),xa=Se(gi),of=V({},gi,{dataTransfer:0}),lf=Se(of),af=V({},ir,{relatedTarget:0}),Qi=Se(af),uf=V({},ft,{animationName:0,elapsedTime:0,pseudoElement:0}),sf=Se(uf),cf=V({},ft,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),df=Se(cf),ff=V({},ft,{data:0}),Ea=Se(ff),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=mf[e])?!!n[e]:!1}function El(){return vf}var gf=V({},ir,{key:function(e){if(e.key){var n=pf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:El,charCode:function(e){return e.type==="keypress"?Tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wf=Se(gf),yf=V({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pa=Se(yf),kf=V({},ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:El}),Sf=Se(kf),Cf=V({},ft,{propertyName:0,elapsedTime:0,pseudoElement:0}),xf=Se(Cf),Ef=V({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pf=Se(Ef),jf=[9,13,27,32],Pl=Ge&&"CompositionEvent"in window,Dt=null;Ge&&"documentMode"in document&&(Dt=document.documentMode);var Nf=Ge&&"TextEvent"in window&&!Dt,ms=Ge&&(!Pl||Dt&&8<Dt&&11>=Dt),ja=String.fromCharCode(32),Na=!1;function vs(e,n){switch(e){case"keyup":return jf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function _f(e,n){switch(e){case"compositionend":return gs(n);case"keypress":return n.which!==32?null:(Na=!0,ja);case"textInput":return e=n.data,e===ja&&Na?null:e;default:return null}}function Rf(e,n){if(Vn)return e==="compositionend"||!Pl&&vs(e,n)?(e=hs(),Dr=Cl=tn=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ms&&n.locale!=="ko"?null:n.data;default:return null}}var Lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _a(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Lf[e.type]:n==="textarea"}function ws(e,n,t,r){Xu(r),n=Yr(n,"onChange"),0<n.length&&(t=new xl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Tt=null,$t=null;function Df(e){Rs(e,0)}function wi(e){var n=Qn(e);if(Vu(n))return e}function Tf(e,n){if(e==="change")return n}var ys=!1;if(Ge){var Gi;if(Ge){var Ki="oninput"in document;if(!Ki){var Ra=document.createElement("div");Ra.setAttribute("oninput","return;"),Ki=typeof Ra.oninput=="function"}Gi=Ki}else Gi=!1;ys=Gi&&(!document.documentMode||9<document.documentMode)}function La(){Tt&&(Tt.detachEvent("onpropertychange",ks),$t=Tt=null)}function ks(e){if(e.propertyName==="value"&&wi($t)){var n=[];ws(n,$t,e,gl(e)),bu(Df,n)}}function Af(e,n,t){e==="focusin"?(La(),Tt=n,$t=t,Tt.attachEvent("onpropertychange",ks)):e==="focusout"&&La()}function zf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wi($t)}function Mf(e,n){if(e==="click")return wi(n)}function Of(e,n){if(e==="input"||e==="change")return wi(n)}function If(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Me=typeof Object.is=="function"?Object.is:If;function Qt(e,n){if(Me(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!po.call(n,i)||!Me(e[i],n[i]))return!1}return!0}function Da(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ta(e,n){var t=Da(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Da(t)}}function Ss(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ss(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Cs(){for(var e=window,n=Wr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Wr(e.document)}return n}function jl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ff(e){var n=Cs(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ss(t.ownerDocument.documentElement,t)){if(r!==null&&jl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ta(t,o);var l=Ta(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bf=Ge&&"documentMode"in document&&11>=document.documentMode,Hn=null,To=null,At=null,Ao=!1;function Aa(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ao||Hn==null||Hn!==Wr(r)||(r=Hn,"selectionStart"in r&&jl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),At&&Qt(At,r)||(At=r,r=Yr(To,"onSelect"),0<r.length&&(n=new xl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Hn)))}function yr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var $n={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionend:yr("Transition","TransitionEnd")},Yi={},xs={};Ge&&(xs=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function yi(e){if(Yi[e])return Yi[e];if(!$n[e])return e;var n=$n[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in xs)return Yi[e]=n[t];return e}var Es=yi("animationend"),Ps=yi("animationiteration"),js=yi("animationstart"),Ns=yi("transitionend"),_s=new Map,za="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,n){_s.set(e,n),Mn(n,[e])}for(var Xi=0;Xi<za.length;Xi++){var Ji=za[Xi],Uf=Ji.toLowerCase(),Wf=Ji[0].toUpperCase()+Ji.slice(1);gn(Uf,"on"+Wf)}gn(Es,"onAnimationEnd");gn(Ps,"onAnimationIteration");gn(js,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(Ns,"onTransitionEnd");it("onMouseEnter",["mouseout","mouseover"]);it("onMouseLeave",["mouseout","mouseover"]);it("onPointerEnter",["pointerout","pointerover"]);it("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _t="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vf=new Set("cancel close invalid load scroll toggle".split(" ").concat(_t));function Ma(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Bd(r,n,void 0,e),e.currentTarget=null}function Rs(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Ma(i,a,s),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Ma(i,a,s),o=u}}}if(Hr)throw e=_o,Hr=!1,_o=null,e}function I(e,n){var t=n[Fo];t===void 0&&(t=n[Fo]=new Set);var r=e+"__bubble";t.has(r)||(Ls(n,e,2,!1),t.add(r))}function Zi(e,n,t){var r=0;n&&(r|=4),Ls(t,e,r,n)}var kr="_reactListening"+Math.random().toString(36).slice(2);function Gt(e){if(!e[kr]){e[kr]=!0,Iu.forEach(function(t){t!=="selectionchange"&&(Vf.has(t)||Zi(t,!1,e),Zi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kr]||(n[kr]=!0,Zi("selectionchange",!1,n))}}function Ls(e,n,t,r){switch(ps(n)){case 1:var i=nf;break;case 4:i=tf;break;default:i=Sl}t=i.bind(null,n,t,e),i=void 0,!No||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function qi(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=En(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}bu(function(){var s=o,h=gl(t),m=[];e:{var v=_s.get(e);if(v!==void 0){var y=xl,k=e;switch(e){case"keypress":if(Tr(t)===0)break e;case"keydown":case"keyup":y=wf;break;case"focusin":k="focus",y=Qi;break;case"focusout":k="blur",y=Qi;break;case"beforeblur":case"afterblur":y=Qi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Sf;break;case Es:case Ps:case js:y=sf;break;case Ns:y=xf;break;case"scroll":y=rf;break;case"wheel":y=Pf;break;case"copy":case"cut":case"paste":y=df;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Pa}var w=(n&4)!==0,_=!w&&e==="scroll",d=w?v!==null?v+"Capture":null:v;w=[];for(var c=s,f;c!==null;){f=c;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=Ut(c,d),g!=null&&w.push(Kt(c,g,f)))),_)break;c=c.return}0<w.length&&(v=new y(v,k,null,t,h),m.push({event:v,listeners:w}))}}if(!(n&7)){e:{if(v=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",v&&t!==Po&&(k=t.relatedTarget||t.fromElement)&&(En(k)||k[Ke]))break e;if((y||v)&&(v=h.window===h?h:(v=h.ownerDocument)?v.defaultView||v.parentWindow:window,y?(k=t.relatedTarget||t.toElement,y=s,k=k?En(k):null,k!==null&&(_=On(k),k!==_||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=s),y!==k)){if(w=xa,g="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Pa,g="onPointerLeave",d="onPointerEnter",c="pointer"),_=y==null?v:Qn(y),f=k==null?v:Qn(k),v=new w(g,c+"leave",y,t,h),v.target=_,v.relatedTarget=f,g=null,En(h)===s&&(w=new w(d,c+"enter",k,t,h),w.target=f,w.relatedTarget=_,g=w),_=g,y&&k)n:{for(w=y,d=k,c=0,f=w;f;f=Bn(f))c++;for(f=0,g=d;g;g=Bn(g))f++;for(;0<c-f;)w=Bn(w),c--;for(;0<f-c;)d=Bn(d),f--;for(;c--;){if(w===d||d!==null&&w===d.alternate)break n;w=Bn(w),d=Bn(d)}w=null}else w=null;y!==null&&Oa(m,v,y,w,!1),k!==null&&_!==null&&Oa(m,_,k,w,!0)}}e:{if(v=s?Qn(s):window,y=v.nodeName&&v.nodeName.toLowerCase(),y==="select"||y==="input"&&v.type==="file")var C=Tf;else if(_a(v))if(ys)C=Of;else{C=zf;var j=Af}else(y=v.nodeName)&&y.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(C=Mf);if(C&&(C=C(e,s))){ws(m,C,t,h);break e}j&&j(e,v,s),e==="focusout"&&(j=v._wrapperState)&&j.controlled&&v.type==="number"&&ko(v,"number",v.value)}switch(j=s?Qn(s):window,e){case"focusin":(_a(j)||j.contentEditable==="true")&&(Hn=j,To=s,At=null);break;case"focusout":At=To=Hn=null;break;case"mousedown":Ao=!0;break;case"contextmenu":case"mouseup":case"dragend":Ao=!1,Aa(m,t,h);break;case"selectionchange":if(Bf)break;case"keydown":case"keyup":Aa(m,t,h)}var N;if(Pl)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Vn?vs(e,t)&&(R="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(ms&&t.locale!=="ko"&&(Vn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Vn&&(N=hs()):(tn=h,Cl="value"in tn?tn.value:tn.textContent,Vn=!0)),j=Yr(s,R),0<j.length&&(R=new Ea(R,e,null,t,h),m.push({event:R,listeners:j}),N?R.data=N:(N=gs(t),N!==null&&(R.data=N)))),(N=Nf?_f(e,t):Rf(e,t))&&(s=Yr(s,"onBeforeInput"),0<s.length&&(h=new Ea("onBeforeInput","beforeinput",null,t,h),m.push({event:h,listeners:s}),h.data=N))}Rs(m,n)})}function Kt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Yr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ut(e,t),o!=null&&r.unshift(Kt(e,o,i)),o=Ut(e,n),o!=null&&r.push(Kt(e,o,i))),e=e.return}return r}function Bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oa(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var a=t,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,i?(u=Ut(t,o),u!=null&&l.unshift(Kt(t,u,a))):i||(u=Ut(t,o),u!=null&&l.push(Kt(t,u,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Hf=/\r\n?/g,$f=/\u0000|\uFFFD/g;function Ia(e){return(typeof e=="string"?e:""+e).replace(Hf,`
`).replace($f,"")}function Sr(e,n,t){if(n=Ia(n),Ia(e)!==n&&t)throw Error(S(425))}function Xr(){}var zo=null,Mo=null;function Oo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Io=typeof setTimeout=="function"?setTimeout:void 0,Qf=typeof clearTimeout=="function"?clearTimeout:void 0,Fa=typeof Promise=="function"?Promise:void 0,Gf=typeof queueMicrotask=="function"?queueMicrotask:typeof Fa<"u"?function(e){return Fa.resolve(null).then(e).catch(Kf)}:Io;function Kf(e){setTimeout(function(){throw e})}function bi(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Ht(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Ht(n)}function sn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ba(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var pt=Math.random().toString(36).slice(2),Fe="__reactFiber$"+pt,Yt="__reactProps$"+pt,Ke="__reactContainer$"+pt,Fo="__reactEvents$"+pt,Yf="__reactListeners$"+pt,Xf="__reactHandles$"+pt;function En(e){var n=e[Fe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ke]||t[Fe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ba(e);e!==null;){if(t=e[Fe])return t;e=Ba(e)}return n}e=t,t=e.parentNode}return null}function or(e){return e=e[Fe]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ki(e){return e[Yt]||null}var Bo=[],Gn=-1;function wn(e){return{current:e}}function F(e){0>Gn||(e.current=Bo[Gn],Bo[Gn]=null,Gn--)}function O(e,n){Gn++,Bo[Gn]=e.current,e.current=n}var vn={},le=wn(vn),pe=wn(!1),Ln=vn;function ot(e,n){var t=e.type.contextTypes;if(!t)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function he(e){return e=e.childContextTypes,e!=null}function Jr(){F(pe),F(le)}function Ua(e,n,t){if(le.current!==vn)throw Error(S(168));O(le,n),O(pe,t)}function Ds(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(S(108,Td(e)||"Unknown",i));return V({},t,r)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,Ln=le.current,O(le,e),O(pe,pe.current),!0}function Wa(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=Ds(e,n,Ln),r.__reactInternalMemoizedMergedChildContext=e,F(pe),F(le),O(le,e)):F(pe),O(pe,t)}var Ve=null,Si=!1,eo=!1;function Ts(e){Ve===null?Ve=[e]:Ve.push(e)}function Jf(e){Si=!0,Ts(e)}function yn(){if(!eo&&Ve!==null){eo=!0;var e=0,n=M;try{var t=Ve;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ve=null,Si=!1}catch(i){throw Ve!==null&&(Ve=Ve.slice(e+1)),rs(wl,yn),i}finally{M=n,eo=!1}}return null}var Kn=[],Yn=0,qr=null,br=0,Ce=[],xe=0,Dn=null,He=1,$e="";function Cn(e,n){Kn[Yn++]=br,Kn[Yn++]=qr,qr=e,br=n}function As(e,n,t){Ce[xe++]=He,Ce[xe++]=$e,Ce[xe++]=Dn,Dn=e;var r=He;e=$e;var i=32-Ae(r)-1;r&=~(1<<i),t+=1;var o=32-Ae(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,He=1<<32-Ae(n)+i|t<<i|r,$e=o+e}else He=1<<o|t<<i|r,$e=e}function Nl(e){e.return!==null&&(Cn(e,1),As(e,1,0))}function _l(e){for(;e===qr;)qr=Kn[--Yn],Kn[Yn]=null,br=Kn[--Yn],Kn[Yn]=null;for(;e===Dn;)Dn=Ce[--xe],Ce[xe]=null,$e=Ce[--xe],Ce[xe]=null,He=Ce[--xe],Ce[xe]=null}var we=null,ge=null,B=!1,Te=null;function zs(e,n){var t=Ee(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Va(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,we=e,ge=sn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,we=e,ge=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Dn!==null?{id:He,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ee(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,we=e,ge=null,!0):!1;default:return!1}}function Uo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wo(e){if(B){var n=ge;if(n){var t=n;if(!Va(e,n)){if(Uo(e))throw Error(S(418));n=sn(t.nextSibling);var r=we;n&&Va(e,n)?zs(r,t):(e.flags=e.flags&-4097|2,B=!1,we=e)}}else{if(Uo(e))throw Error(S(418));e.flags=e.flags&-4097|2,B=!1,we=e}}}function Ha(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Cr(e){if(e!==we)return!1;if(!B)return Ha(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Oo(e.type,e.memoizedProps)),n&&(n=ge)){if(Uo(e))throw Ms(),Error(S(418));for(;n;)zs(e,n),n=sn(n.nextSibling)}if(Ha(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ge=sn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ge=null}}else ge=we?sn(e.stateNode.nextSibling):null;return!0}function Ms(){for(var e=ge;e;)e=sn(e.nextSibling)}function lt(){ge=we=null,B=!1}function Rl(e){Te===null?Te=[e]:Te.push(e)}var Zf=Je.ReactCurrentBatchConfig;function Le(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var ei=wn(null),ni=null,Xn=null,Ll=null;function Dl(){Ll=Xn=ni=null}function Tl(e){var n=ei.current;F(ei),e._currentValue=n}function Vo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function tt(e,n){ni=e,Ll=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(fe=!0),e.firstContext=null)}function je(e){var n=e._currentValue;if(Ll!==e)if(e={context:e,memoizedValue:n,next:null},Xn===null){if(ni===null)throw Error(S(308));Xn=e,ni.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return n}var Pn=null;function Al(e){Pn===null?Pn=[e]:Pn.push(e)}function Os(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Al(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ye(e,r)}function Ye(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var be=!1;function zl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Is(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function cn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Ye(e,t)}return i=r.interleaved,i===null?(n.next=n,Al(r)):(n.next=i.next,i.next=n),r.interleaved=n,Ye(e,t)}function Ar(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,yl(e,t)}}function $a(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ti(e,n,t,r){var i=e.updateQueue;be=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?o=s:l.next=s,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=s:a.next=s,h.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;l=0,h=s=u=null,a=o;do{var v=a.lane,y=a.eventTime;if((r&v)===v){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,w=a;switch(v=n,y=t,w.tag){case 1:if(k=w.payload,typeof k=="function"){m=k.call(y,m,v);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,v=typeof k=="function"?k.call(y,m,v):k,v==null)break e;m=V({},m,v);break e;case 2:be=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[a]:v.push(a))}else y={eventTime:y,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(s=h=y,u=m):h=h.next=y,l|=v;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;v=a,a=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=s,i.lastBaseUpdate=h,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);An|=l,e.lanes=l,e.memoizedState=m}}function Qa(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Fs=new Ou.Component().refs;function Ho(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ci={isMounted:function(e){return(e=e._reactInternals)?On(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ue(),i=fn(e),o=Qe(r,i);o.payload=n,t!=null&&(o.callback=t),n=cn(e,o,i),n!==null&&(ze(n,e,i,r),Ar(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ue(),i=fn(e),o=Qe(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=cn(e,o,i),n!==null&&(ze(n,e,i,r),Ar(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ue(),r=fn(e),i=Qe(t,r);i.tag=2,n!=null&&(i.callback=n),n=cn(e,i,r),n!==null&&(ze(n,e,r,t),Ar(n,e,r))}};function Ga(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!Qt(t,r)||!Qt(i,o):!0}function Bs(e,n,t){var r=!1,i=vn,o=n.contextType;return typeof o=="object"&&o!==null?o=je(o):(i=he(n)?Ln:le.current,r=n.contextTypes,o=(r=r!=null)?ot(e,i):vn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ci,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Ka(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ci.enqueueReplaceState(n,n.state,null)}function $o(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=Fs,zl(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=je(o):(o=he(n)?Ln:le.current,i.context=ot(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Ho(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ci.enqueueReplaceState(i,i.state,null),ti(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ct(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var a=i.refs;a===Fs&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function xr(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ya(e){var n=e._init;return n(e._payload)}function Us(e){function n(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=pn(d,c),d.index=0,d.sibling=null,d}function o(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,f,g){return c===null||c.tag!==6?(c=ao(f,d.mode,g),c.return=d,c):(c=i(c,f),c.return=d,c)}function u(d,c,f,g){var C=f.type;return C===Wn?h(d,c,f.props.children,g,f.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===qe&&Ya(C)===c.type)?(g=i(c,f.props),g.ref=Ct(d,c,f),g.return=d,g):(g=Br(f.type,f.key,f.props,null,d.mode,g),g.ref=Ct(d,c,f),g.return=d,g)}function s(d,c,f,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=uo(f,d.mode,g),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function h(d,c,f,g,C){return c===null||c.tag!==7?(c=Rn(f,d.mode,g,C),c.return=d,c):(c=i(c,f),c.return=d,c)}function m(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ao(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case fr:return f=Br(c.type,c.key,c.props,null,d.mode,f),f.ref=Ct(d,null,c),f.return=d,f;case Un:return c=uo(c,d.mode,f),c.return=d,c;case qe:var g=c._init;return m(d,g(c._payload),f)}if(jt(c)||gt(c))return c=Rn(c,d.mode,f,null),c.return=d,c;xr(d,c)}return null}function v(d,c,f,g){var C=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:a(d,c,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case fr:return f.key===C?u(d,c,f,g):null;case Un:return f.key===C?s(d,c,f,g):null;case qe:return C=f._init,v(d,c,C(f._payload),g)}if(jt(f)||gt(f))return C!==null?null:h(d,c,f,g,null);xr(d,f)}return null}function y(d,c,f,g,C){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,a(c,d,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case fr:return d=d.get(g.key===null?f:g.key)||null,u(c,d,g,C);case Un:return d=d.get(g.key===null?f:g.key)||null,s(c,d,g,C);case qe:var j=g._init;return y(d,c,f,j(g._payload),C)}if(jt(g)||gt(g))return d=d.get(f)||null,h(c,d,g,C,null);xr(c,g)}return null}function k(d,c,f,g){for(var C=null,j=null,N=c,R=c=0,$=null;N!==null&&R<f.length;R++){N.index>R?($=N,N=null):$=N.sibling;var A=v(d,N,f[R],g);if(A===null){N===null&&(N=$);break}e&&N&&A.alternate===null&&n(d,N),c=o(A,c,R),j===null?C=A:j.sibling=A,j=A,N=$}if(R===f.length)return t(d,N),B&&Cn(d,R),C;if(N===null){for(;R<f.length;R++)N=m(d,f[R],g),N!==null&&(c=o(N,c,R),j===null?C=N:j.sibling=N,j=N);return B&&Cn(d,R),C}for(N=r(d,N);R<f.length;R++)$=y(N,d,R,f[R],g),$!==null&&(e&&$.alternate!==null&&N.delete($.key===null?R:$.key),c=o($,c,R),j===null?C=$:j.sibling=$,j=$);return e&&N.forEach(function(_e){return n(d,_e)}),B&&Cn(d,R),C}function w(d,c,f,g){var C=gt(f);if(typeof C!="function")throw Error(S(150));if(f=C.call(f),f==null)throw Error(S(151));for(var j=C=null,N=c,R=c=0,$=null,A=f.next();N!==null&&!A.done;R++,A=f.next()){N.index>R?($=N,N=null):$=N.sibling;var _e=v(d,N,A.value,g);if(_e===null){N===null&&(N=$);break}e&&N&&_e.alternate===null&&n(d,N),c=o(_e,c,R),j===null?C=_e:j.sibling=_e,j=_e,N=$}if(A.done)return t(d,N),B&&Cn(d,R),C;if(N===null){for(;!A.done;R++,A=f.next())A=m(d,A.value,g),A!==null&&(c=o(A,c,R),j===null?C=A:j.sibling=A,j=A);return B&&Cn(d,R),C}for(N=r(d,N);!A.done;R++,A=f.next())A=y(N,d,R,A.value,g),A!==null&&(e&&A.alternate!==null&&N.delete(A.key===null?R:A.key),c=o(A,c,R),j===null?C=A:j.sibling=A,j=A);return e&&N.forEach(function(mt){return n(d,mt)}),B&&Cn(d,R),C}function _(d,c,f,g){if(typeof f=="object"&&f!==null&&f.type===Wn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case fr:e:{for(var C=f.key,j=c;j!==null;){if(j.key===C){if(C=f.type,C===Wn){if(j.tag===7){t(d,j.sibling),c=i(j,f.props.children),c.return=d,d=c;break e}}else if(j.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===qe&&Ya(C)===j.type){t(d,j.sibling),c=i(j,f.props),c.ref=Ct(d,j,f),c.return=d,d=c;break e}t(d,j);break}else n(d,j);j=j.sibling}f.type===Wn?(c=Rn(f.props.children,d.mode,g,f.key),c.return=d,d=c):(g=Br(f.type,f.key,f.props,null,d.mode,g),g.ref=Ct(d,c,f),g.return=d,d=g)}return l(d);case Un:e:{for(j=f.key;c!==null;){if(c.key===j)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){t(d,c.sibling),c=i(c,f.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=uo(f,d.mode,g),c.return=d,d=c}return l(d);case qe:return j=f._init,_(d,c,j(f._payload),g)}if(jt(f))return k(d,c,f,g);if(gt(f))return w(d,c,f,g);xr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(t(d,c.sibling),c=i(c,f),c.return=d,d=c):(t(d,c),c=ao(f,d.mode,g),c.return=d,d=c),l(d)):t(d,c)}return _}var at=Us(!0),Ws=Us(!1),lr={},Ue=wn(lr),Xt=wn(lr),Jt=wn(lr);function jn(e){if(e===lr)throw Error(S(174));return e}function Ml(e,n){switch(O(Jt,n),O(Xt,e),O(Ue,lr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Co(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Co(n,e)}F(Ue),O(Ue,n)}function ut(){F(Ue),F(Xt),F(Jt)}function Vs(e){jn(Jt.current);var n=jn(Ue.current),t=Co(n,e.type);n!==t&&(O(Xt,e),O(Ue,t))}function Ol(e){Xt.current===e&&(F(Ue),F(Xt))}var U=wn(0);function ri(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var no=[];function Il(){for(var e=0;e<no.length;e++)no[e]._workInProgressVersionPrimary=null;no.length=0}var zr=Je.ReactCurrentDispatcher,to=Je.ReactCurrentBatchConfig,Tn=0,W=null,X=null,q=null,ii=!1,zt=!1,Zt=0,qf=0;function re(){throw Error(S(321))}function Fl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Me(e[t],n[t]))return!1;return!0}function Bl(e,n,t,r,i,o){if(Tn=o,W=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,zr.current=e===null||e.memoizedState===null?tp:rp,e=t(r,i),zt){o=0;do{if(zt=!1,Zt=0,25<=o)throw Error(S(301));o+=1,q=X=null,n.updateQueue=null,zr.current=ip,e=t(r,i)}while(zt)}if(zr.current=oi,n=X!==null&&X.next!==null,Tn=0,q=X=W=null,ii=!1,n)throw Error(S(300));return e}function Ul(){var e=Zt!==0;return Zt=0,e}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?W.memoizedState=q=e:q=q.next=e,q}function Ne(){if(X===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=q===null?W.memoizedState:q.next;if(n!==null)q=n,X=e;else{if(e===null)throw Error(S(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},q===null?W.memoizedState=q=e:q=q.next=e}return q}function qt(e,n){return typeof n=="function"?n(e):n}function ro(e){var n=Ne(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=X,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,s=o;do{var h=s.lane;if((Tn&h)===h)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var m={lane:h,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=m,l=r):u=u.next=m,W.lanes|=h,An|=h}s=s.next}while(s!==null&&s!==o);u===null?l=r:u.next=a,Me(r,n.memoizedState)||(fe=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,W.lanes|=o,An|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function io(e){var n=Ne(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Me(o,n.memoizedState)||(fe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Hs(){}function $s(e,n){var t=W,r=Ne(),i=n(),o=!Me(r.memoizedState,i);if(o&&(r.memoizedState=i,fe=!0),r=r.queue,Wl(Ks.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||q!==null&&q.memoizedState.tag&1){if(t.flags|=2048,bt(9,Gs.bind(null,t,r,i,n),void 0,null),b===null)throw Error(S(349));Tn&30||Qs(t,n,i)}return i}function Qs(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Gs(e,n,t,r){n.value=t,n.getSnapshot=r,Ys(n)&&Xs(e)}function Ks(e,n,t){return t(function(){Ys(n)&&Xs(e)})}function Ys(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Me(e,t)}catch{return!0}}function Xs(e){var n=Ye(e,1);n!==null&&ze(n,e,1,-1)}function Xa(e){var n=Ie();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},n.queue=e,e=e.dispatch=np.bind(null,W,e),[n.memoizedState,e]}function bt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Js(){return Ne().memoizedState}function Mr(e,n,t,r){var i=Ie();W.flags|=e,i.memoizedState=bt(1|n,t,void 0,r===void 0?null:r)}function xi(e,n,t,r){var i=Ne();r=r===void 0?null:r;var o=void 0;if(X!==null){var l=X.memoizedState;if(o=l.destroy,r!==null&&Fl(r,l.deps)){i.memoizedState=bt(n,t,o,r);return}}W.flags|=e,i.memoizedState=bt(1|n,t,o,r)}function Ja(e,n){return Mr(8390656,8,e,n)}function Wl(e,n){return xi(2048,8,e,n)}function Zs(e,n){return xi(4,2,e,n)}function qs(e,n){return xi(4,4,e,n)}function bs(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ec(e,n,t){return t=t!=null?t.concat([e]):null,xi(4,4,bs.bind(null,n,e),t)}function Vl(){}function nc(e,n){var t=Ne();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Fl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function tc(e,n){var t=Ne();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Fl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function rc(e,n,t){return Tn&21?(Me(t,n)||(t=ls(),W.lanes|=t,An|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=t)}function bf(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=to.transition;to.transition={};try{e(!1),n()}finally{M=t,to.transition=r}}function ic(){return Ne().memoizedState}function ep(e,n,t){var r=fn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},oc(e))lc(n,t);else if(t=Os(e,n,t,r),t!==null){var i=ue();ze(t,e,r,i),ac(t,n,r)}}function np(e,n,t){var r=fn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(oc(e))lc(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,a=o(l,t);if(i.hasEagerState=!0,i.eagerState=a,Me(a,l)){var u=n.interleaved;u===null?(i.next=i,Al(n)):(i.next=u.next,u.next=i),n.interleaved=i;return}}catch{}finally{}t=Os(e,n,i,r),t!==null&&(i=ue(),ze(t,e,r,i),ac(t,n,r))}}function oc(e){var n=e.alternate;return e===W||n!==null&&n===W}function lc(e,n){zt=ii=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ac(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,yl(e,t)}}var oi={readContext:je,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},tp={readContext:je,useCallback:function(e,n){return Ie().memoizedState=[e,n===void 0?null:n],e},useContext:je,useEffect:Ja,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Mr(4194308,4,bs.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Mr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Mr(4,2,e,n)},useMemo:function(e,n){var t=Ie();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ie();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ep.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var n=Ie();return e={current:e},n.memoizedState=e},useState:Xa,useDebugValue:Vl,useDeferredValue:function(e){return Ie().memoizedState=e},useTransition:function(){var e=Xa(!1),n=e[0];return e=bf.bind(null,e[1]),Ie().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=W,i=Ie();if(B){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),b===null)throw Error(S(349));Tn&30||Qs(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Ja(Ks.bind(null,r,o,e),[e]),r.flags|=2048,bt(9,Gs.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Ie(),n=b.identifierPrefix;if(B){var t=$e,r=He;t=(r&~(1<<32-Ae(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Zt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=qf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},rp={readContext:je,useCallback:nc,useContext:je,useEffect:Wl,useImperativeHandle:ec,useInsertionEffect:Zs,useLayoutEffect:qs,useMemo:tc,useReducer:ro,useRef:Js,useState:function(){return ro(qt)},useDebugValue:Vl,useDeferredValue:function(e){var n=Ne();return rc(n,X.memoizedState,e)},useTransition:function(){var e=ro(qt)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:Hs,useSyncExternalStore:$s,useId:ic,unstable_isNewReconciler:!1},ip={readContext:je,useCallback:nc,useContext:je,useEffect:Wl,useImperativeHandle:ec,useInsertionEffect:Zs,useLayoutEffect:qs,useMemo:tc,useReducer:io,useRef:Js,useState:function(){return io(qt)},useDebugValue:Vl,useDeferredValue:function(e){var n=Ne();return X===null?n.memoizedState=e:rc(n,X.memoizedState,e)},useTransition:function(){var e=io(qt)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:Hs,useSyncExternalStore:$s,useId:ic,unstable_isNewReconciler:!1};function st(e,n){try{var t="",r=n;do t+=Dd(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function oo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Qo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var op=typeof WeakMap=="function"?WeakMap:Map;function uc(e,n,t){t=Qe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ai||(ai=!0,nl=r),Qo(e,n)},t}function sc(e,n,t){t=Qe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Qo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Qo(e,n),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Za(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new op;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=yp.bind(null,e,n,t),n.then(e,e))}function qa(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ba(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Qe(-1,1),n.tag=2,cn(t,n,1))),t.lanes|=1),e)}var lp=Je.ReactCurrentOwner,fe=!1;function ae(e,n,t,r){n.child=e===null?Ws(n,null,t,r):at(n,e.child,t,r)}function eu(e,n,t,r,i){t=t.render;var o=n.ref;return tt(n,i),r=Bl(e,n,t,r,o,i),t=Ul(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Xe(e,n,i)):(B&&t&&Nl(n),n.flags|=1,ae(e,n,r,i),n.child)}function nu(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Jl(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,cc(e,n,o,r,i)):(e=Br(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:Qt,t(l,r)&&e.ref===n.ref)return Xe(e,n,i)}return n.flags|=1,e=pn(o,r),e.ref=n.ref,e.return=n,n.child=e}function cc(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Qt(o,r)&&e.ref===n.ref)if(fe=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(fe=!0);else return n.lanes=e.lanes,Xe(e,n,i)}return Go(e,n,t,r,i)}function dc(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Zn,ve),ve|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,O(Zn,ve),ve|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,O(Zn,ve),ve|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,O(Zn,ve),ve|=r;return ae(e,n,i,t),n.child}function fc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Go(e,n,t,r,i){var o=he(t)?Ln:le.current;return o=ot(n,o),tt(n,i),t=Bl(e,n,t,r,o,i),r=Ul(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Xe(e,n,i)):(B&&r&&Nl(n),n.flags|=1,ae(e,n,t,i),n.child)}function tu(e,n,t,r,i){if(he(t)){var o=!0;Zr(n)}else o=!1;if(tt(n,i),n.stateNode===null)Or(e,n),Bs(n,t,r),$o(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var u=l.context,s=t.contextType;typeof s=="object"&&s!==null?s=je(s):(s=he(t)?Ln:le.current,s=ot(n,s));var h=t.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==s)&&Ka(n,l,r,s),be=!1;var v=n.memoizedState;l.state=v,ti(n,r,l,i),u=n.memoizedState,a!==r||v!==u||pe.current||be?(typeof h=="function"&&(Ho(n,t,h,r),u=n.memoizedState),(a=be||Ga(n,t,a,r,v,u,s))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),l.props=r,l.state=u,l.context=s,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Is(e,n),a=n.memoizedProps,s=n.type===n.elementType?a:Le(n.type,a),l.props=s,m=n.pendingProps,v=l.context,u=t.contextType,typeof u=="object"&&u!==null?u=je(u):(u=he(t)?Ln:le.current,u=ot(n,u));var y=t.getDerivedStateFromProps;(h=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||v!==u)&&Ka(n,l,r,u),be=!1,v=n.memoizedState,l.state=v,ti(n,r,l,i);var k=n.memoizedState;a!==m||v!==k||pe.current||be?(typeof y=="function"&&(Ho(n,t,y,r),k=n.memoizedState),(s=be||Ga(n,t,s,r,v,k,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=k),l.props=r,l.state=k,l.context=u,r=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),r=!1)}return Ko(e,n,t,r,o,i)}function Ko(e,n,t,r,i,o){fc(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&Wa(n,t,!1),Xe(e,n,o);r=n.stateNode,lp.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=at(n,e.child,null,o),n.child=at(n,null,a,o)):ae(e,n,a,o),n.memoizedState=r.state,i&&Wa(n,t,!0),n.child}function pc(e){var n=e.stateNode;n.pendingContext?Ua(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ua(e,n.context,!1),Ml(e,n.containerInfo)}function ru(e,n,t,r,i){return lt(),Rl(i),n.flags|=256,ae(e,n,t,r),n.child}var Yo={dehydrated:null,treeContext:null,retryLane:0};function Xo(e){return{baseLanes:e,cachePool:null,transitions:null}}function hc(e,n,t){var r=n.pendingProps,i=U.current,o=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),O(U,i&1),e===null)return Wo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ji(l,r,0,null),e=Rn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Xo(t),n.memoizedState=Yo,e):Hl(n,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ap(e,n,l,r,a,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=pn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=pn(a,o):(o=Rn(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?Xo(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=Yo,r}return o=e.child,e=o.sibling,r=pn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Hl(e,n){return n=ji({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Er(e,n,t,r){return r!==null&&Rl(r),at(n,e.child,null,t),e=Hl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ap(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=oo(Error(S(422))),Er(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=ji({mode:"visible",children:r.children},i,0,null),o=Rn(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&at(n,e.child,null,l),n.child.memoizedState=Xo(l),n.memoizedState=Yo,o);if(!(n.mode&1))return Er(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=oo(o,r,void 0),Er(e,n,l,r)}if(a=(l&e.childLanes)!==0,fe||a){if(r=b,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ye(e,i),ze(r,e,i,-1))}return Xl(),r=oo(Error(S(421))),Er(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=kp.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,ge=sn(i.nextSibling),we=n,B=!0,Te=null,e!==null&&(Ce[xe++]=He,Ce[xe++]=$e,Ce[xe++]=Dn,He=e.id,$e=e.overflow,Dn=n),n=Hl(n,r.children),n.flags|=4096,n)}function iu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Vo(e.return,n,t)}function lo(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function mc(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(ae(e,n,r.children,t),r=U.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&iu(e,t,n);else if(e.tag===19)iu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(U,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ri(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),lo(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ri(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}lo(n,!0,t,null,o);break;case"together":lo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Or(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Xe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),An|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=pn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=pn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function up(e,n,t){switch(n.tag){case 3:pc(n),lt();break;case 5:Vs(n);break;case 1:he(n.type)&&Zr(n);break;case 4:Ml(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;O(ei,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(O(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?hc(e,n,t):(O(U,U.current&1),e=Xe(e,n,t),e!==null?e.sibling:null);O(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return mc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(U,U.current),r)break;return null;case 22:case 23:return n.lanes=0,dc(e,n,t)}return Xe(e,n,t)}var vc,Jo,gc,wc;vc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Jo=function(){};gc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,jn(Ue.current);var o=null;switch(t){case"input":i=wo(e,i),r=wo(e,r),o=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":i=So(e,i),r=So(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xr)}xo(t,r);var l;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var a=i[s];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ft.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,null));for(s in r){var u=r[s];if(a=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(t||(t={}),t[l]=u[l])}else t||(o||(o=[]),o.push(s,t)),t=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Ft.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&I("scroll",e),o||a===u||(o=[])):(o=o||[]).push(s,u))}t&&(o=o||[]).push("style",t);var s=o;(n.updateQueue=s)&&(n.flags|=4)}};wc=function(e,n,t,r){t!==r&&(n.flags|=4)};function xt(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function sp(e,n,t){var r=n.pendingProps;switch(_l(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return he(n.type)&&Jr(),ie(n),null;case 3:return r=n.stateNode,ut(),F(pe),F(le),Il(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Te!==null&&(il(Te),Te=null))),Jo(e,n),ie(n),null;case 5:Ol(n);var i=jn(Jt.current);if(t=n.type,e!==null&&n.stateNode!=null)gc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return ie(n),null}if(e=jn(Ue.current),Cr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Fe]=n,r[Yt]=o,e=(n.mode&1)!==0,t){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(i=0;i<_t.length;i++)I(_t[i],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":pa(r,o),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},I("invalid",r);break;case"textarea":ma(r,o),I("invalid",r)}xo(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Sr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Sr(r.textContent,a,e),i=["children",""+a]):Ft.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&I("scroll",r)}switch(t){case"input":pr(r),ha(r,o,!0);break;case"textarea":pr(r),va(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Xr)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Fe]=n,e[Yt]=r,vc(e,n,!1,!1),n.stateNode=e;e:{switch(l=Eo(t,r),t){case"dialog":I("cancel",e),I("close",e),i=r;break;case"iframe":case"object":case"embed":I("load",e),i=r;break;case"video":case"audio":for(i=0;i<_t.length;i++)I(_t[i],e);i=r;break;case"source":I("error",e),i=r;break;case"img":case"image":case"link":I("error",e),I("load",e),i=r;break;case"details":I("toggle",e),i=r;break;case"input":pa(e,r),i=wo(e,r),I("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),I("invalid",e);break;case"textarea":ma(e,r),i=So(e,r),I("invalid",e);break;default:i=r}xo(t,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?Yu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Gu(e,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Bt(e,u):typeof u=="number"&&Bt(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ft.hasOwnProperty(o)?u!=null&&o==="onScroll"&&I("scroll",e):u!=null&&pl(e,o,u,l))}switch(t){case"input":pr(e),ha(e,r,!1);break;case"textarea":pr(e),va(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?qn(e,!!r.multiple,o,!1):r.defaultValue!=null&&qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)wc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=jn(Jt.current),jn(Ue.current),Cr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Fe]=n,(o=r.nodeValue!==t)&&(e=we,e!==null))switch(e.tag){case 3:Sr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Fe]=n,n.stateNode=r}return ie(n),null;case 13:if(F(U),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ge!==null&&n.mode&1&&!(n.flags&128))Ms(),lt(),n.flags|=98560,o=!1;else if(o=Cr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Fe]=n}else lt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),o=!1}else Te!==null&&(il(Te),Te=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?J===0&&(J=3):Xl())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return ut(),Jo(e,n),e===null&&Gt(n.stateNode.containerInfo),ie(n),null;case 10:return Tl(n.type._context),ie(n),null;case 17:return he(n.type)&&Jr(),ie(n),null;case 19:if(F(U),o=n.memoizedState,o===null)return ie(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)xt(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=ri(e),l!==null){for(n.flags|=128,xt(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return O(U,U.current&1|2),n.child}e=e.sibling}o.tail!==null&&G()>ct&&(n.flags|=128,r=!0,xt(o,!1),n.lanes=4194304)}else{if(!r)if(e=ri(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),xt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!B)return ie(n),null}else 2*G()-o.renderingStartTime>ct&&t!==1073741824&&(n.flags|=128,r=!0,xt(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=G(),n.sibling=null,t=U.current,O(U,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return Yl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ve&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function cp(e,n){switch(_l(n),n.tag){case 1:return he(n.type)&&Jr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ut(),F(pe),F(le),Il(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ol(n),null;case 13:if(F(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));lt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return F(U),null;case 4:return ut(),null;case 10:return Tl(n.type._context),null;case 22:case 23:return Yl(),null;case 24:return null;default:return null}}var Pr=!1,oe=!1,dp=typeof WeakSet=="function"?WeakSet:Set,E=null;function Jn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){H(e,n,r)}else t.current=null}function Zo(e,n,t){try{t()}catch(r){H(e,n,r)}}var ou=!1;function fp(e,n){if(zo=Gr,e=Cs(),jl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,a=-1,u=-1,s=0,h=0,m=e,v=null;n:for(;;){for(var y;m!==t||i!==0&&m.nodeType!==3||(a=l+i),m!==o||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(y=m.firstChild)!==null;)v=m,m=y;for(;;){if(m===e)break n;if(v===t&&++s===i&&(a=l),v===o&&++h===r&&(u=l),(y=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=y}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Mo={focusedElem:e,selectionRange:t},Gr=!1,E=n;E!==null;)if(n=E,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,E=e;else for(;E!==null;){n=E;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,_=k.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?w:Le(n.type,w),_);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(g){H(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,E=e;break}E=n.return}return k=ou,ou=!1,k}function Mt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Zo(n,t,o)}i=i.next}while(i!==r)}}function Ei(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function qo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function yc(e){var n=e.alternate;n!==null&&(e.alternate=null,yc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Fe],delete n[Yt],delete n[Fo],delete n[Yf],delete n[Xf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kc(e){return e.tag===5||e.tag===3||e.tag===4}function lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Xr));else if(r!==4&&(e=e.child,e!==null))for(bo(e,n,t),e=e.sibling;e!==null;)bo(e,n,t),e=e.sibling}function el(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(el(e,n,t),e=e.sibling;e!==null;)el(e,n,t),e=e.sibling}var ee=null,De=!1;function Ze(e,n,t){for(t=t.child;t!==null;)Sc(e,n,t),t=t.sibling}function Sc(e,n,t){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(vi,t)}catch{}switch(t.tag){case 5:oe||Jn(t,n);case 6:var r=ee,i=De;ee=null,Ze(e,n,t),ee=r,De=i,ee!==null&&(De?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(De?(e=ee,t=t.stateNode,e.nodeType===8?bi(e.parentNode,t):e.nodeType===1&&bi(e,t),Ht(e)):bi(ee,t.stateNode));break;case 4:r=ee,i=De,ee=t.stateNode.containerInfo,De=!0,Ze(e,n,t),ee=r,De=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Zo(t,n,l),i=i.next}while(i!==r)}Ze(e,n,t);break;case 1:if(!oe&&(Jn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){H(t,n,a)}Ze(e,n,t);break;case 21:Ze(e,n,t);break;case 22:t.mode&1?(oe=(r=oe)||t.memoizedState!==null,Ze(e,n,t),oe=r):Ze(e,n,t);break;default:Ze(e,n,t)}}function au(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new dp),n.forEach(function(r){var i=Sp.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Re(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,De=!1;break e;case 3:ee=a.stateNode.containerInfo,De=!0;break e;case 4:ee=a.stateNode.containerInfo,De=!0;break e}a=a.return}if(ee===null)throw Error(S(160));Sc(o,l,i),ee=null,De=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(s){H(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Cc(n,e),n=n.sibling}function Cc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(n,e),Oe(e),r&4){try{Mt(3,e,e.return),Ei(3,e)}catch(w){H(e,e.return,w)}try{Mt(5,e,e.return)}catch(w){H(e,e.return,w)}}break;case 1:Re(n,e),Oe(e),r&512&&t!==null&&Jn(t,t.return);break;case 5:if(Re(n,e),Oe(e),r&512&&t!==null&&Jn(t,t.return),e.flags&32){var i=e.stateNode;try{Bt(i,"")}catch(w){H(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Hu(i,o),Eo(a,l);var s=Eo(a,o);for(l=0;l<u.length;l+=2){var h=u[l],m=u[l+1];h==="style"?Yu(i,m):h==="dangerouslySetInnerHTML"?Gu(i,m):h==="children"?Bt(i,m):pl(i,h,m,s)}switch(a){case"input":yo(i,o);break;case"textarea":$u(i,o);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?qn(i,!!o.multiple,y,!1):v!==!!o.multiple&&(o.defaultValue!=null?qn(i,!!o.multiple,o.defaultValue,!0):qn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Yt]=o}catch(w){H(e,e.return,w)}}break;case 6:if(Re(n,e),Oe(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){H(e,e.return,w)}}break;case 3:if(Re(n,e),Oe(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ht(n.containerInfo)}catch(w){H(e,e.return,w)}break;case 4:Re(n,e),Oe(e);break;case 13:Re(n,e),Oe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Gl=G())),r&4&&au(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(oe=(s=oe)||h,Re(n,e),oe=s):Re(n,e),Oe(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!h&&e.mode&1)for(E=e,h=e.child;h!==null;){for(m=E=h;E!==null;){switch(v=E,y=v.child,v.tag){case 0:case 11:case 14:case 15:Mt(4,v,v.return);break;case 1:Jn(v,v.return);var k=v.stateNode;if(typeof k.componentWillUnmount=="function"){r=v,t=v.return;try{n=r,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(w){H(r,t,w)}}break;case 5:Jn(v,v.return);break;case 22:if(v.memoizedState!==null){su(m);continue}}y!==null?(y.return=v,E=y):su(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,s?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Ku("display",l))}catch(w){H(e,e.return,w)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=s?"":m.memoizedProps}catch(w){H(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Re(n,e),Oe(e),r&4&&au(e);break;case 21:break;default:Re(n,e),Oe(e)}}function Oe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(kc(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bt(i,""),r.flags&=-33);var o=lu(e);el(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=lu(e);bo(e,a,l);break;default:throw Error(S(161))}}catch(u){H(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pp(e,n,t){E=e,xc(e)}function xc(e,n,t){for(var r=(e.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Pr;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||oe;a=Pr;var s=oe;if(Pr=l,(oe=u)&&!s)for(E=i;E!==null;)l=E,u=l.child,l.tag===22&&l.memoizedState!==null?cu(i):u!==null?(u.return=l,E=u):cu(i);for(;o!==null;)E=o,xc(o),o=o.sibling;E=i,Pr=a,oe=s}uu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,E=o):uu(e)}}function uu(e){for(;E!==null;){var n=E;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:oe||Ei(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!oe)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Le(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Qa(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Qa(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var h=s.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Ht(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}oe||n.flags&512&&qo(n)}catch(v){H(n,n.return,v)}}if(n===e){E=null;break}if(t=n.sibling,t!==null){t.return=n.return,E=t;break}E=n.return}}function su(e){for(;E!==null;){var n=E;if(n===e){E=null;break}var t=n.sibling;if(t!==null){t.return=n.return,E=t;break}E=n.return}}function cu(e){for(;E!==null;){var n=E;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ei(4,n)}catch(u){H(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(u){H(n,i,u)}}var o=n.return;try{qo(n)}catch(u){H(n,o,u)}break;case 5:var l=n.return;try{qo(n)}catch(u){H(n,l,u)}}}catch(u){H(n,n.return,u)}if(n===e){E=null;break}var a=n.sibling;if(a!==null){a.return=n.return,E=a;break}E=n.return}}var hp=Math.ceil,li=Je.ReactCurrentDispatcher,$l=Je.ReactCurrentOwner,Pe=Je.ReactCurrentBatchConfig,z=0,b=null,K=null,ne=0,ve=0,Zn=wn(0),J=0,er=null,An=0,Pi=0,Ql=0,Ot=null,de=null,Gl=0,ct=1/0,We=null,ai=!1,nl=null,dn=null,jr=!1,rn=null,ui=0,It=0,tl=null,Ir=-1,Fr=0;function ue(){return z&6?G():Ir!==-1?Ir:Ir=G()}function fn(e){return e.mode&1?z&2&&ne!==0?ne&-ne:Zf.transition!==null?(Fr===0&&(Fr=ls()),Fr):(e=M,e!==0||(e=window.event,e=e===void 0?16:ps(e.type)),e):1}function ze(e,n,t,r){if(50<It)throw It=0,tl=null,Error(S(185));rr(e,t,r),(!(z&2)||e!==b)&&(e===b&&(!(z&2)&&(Pi|=t),J===4&&nn(e,ne)),me(e,r),t===1&&z===0&&!(n.mode&1)&&(ct=G()+500,Si&&yn()))}function me(e,n){var t=e.callbackNode;Jd(e,n);var r=Qr(e,e===b?ne:0);if(r===0)t!==null&&ya(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ya(t),n===1)e.tag===0?Jf(du.bind(null,e)):Ts(du.bind(null,e)),Gf(function(){!(z&6)&&yn()}),t=null;else{switch(as(r)){case 1:t=wl;break;case 4:t=is;break;case 16:t=$r;break;case 536870912:t=os;break;default:t=$r}t=Dc(t,Ec.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ec(e,n){if(Ir=-1,Fr=0,z&6)throw Error(S(327));var t=e.callbackNode;if(rt()&&e.callbackNode!==t)return null;var r=Qr(e,e===b?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=si(e,r);else{n=r;var i=z;z|=2;var o=jc();(b!==e||ne!==n)&&(We=null,ct=G()+500,_n(e,n));do try{gp();break}catch(a){Pc(e,a)}while(1);Dl(),li.current=o,z=i,K!==null?n=0:(b=null,ne=0,n=J)}if(n!==0){if(n===2&&(i=Ro(e),i!==0&&(r=i,n=rl(e,i))),n===1)throw t=er,_n(e,0),nn(e,r),me(e,G()),t;if(n===6)nn(e,r);else{if(i=e.current.alternate,!(r&30)&&!mp(i)&&(n=si(e,r),n===2&&(o=Ro(e),o!==0&&(r=o,n=rl(e,o))),n===1))throw t=er,_n(e,0),nn(e,r),me(e,G()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:xn(e,de,We);break;case 3:if(nn(e,r),(r&130023424)===r&&(n=Gl+500-G(),10<n)){if(Qr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Io(xn.bind(null,e,de,We),n);break}xn(e,de,We);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-Ae(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hp(r/1960))-r,10<r){e.timeoutHandle=Io(xn.bind(null,e,de,We),r);break}xn(e,de,We);break;case 5:xn(e,de,We);break;default:throw Error(S(329))}}}return me(e,G()),e.callbackNode===t?Ec.bind(null,e):null}function rl(e,n){var t=Ot;return e.current.memoizedState.isDehydrated&&(_n(e,n).flags|=256),e=si(e,n),e!==2&&(n=de,de=t,n!==null&&il(n)),e}function il(e){de===null?de=e:de.push.apply(de,e)}function mp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Me(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function nn(e,n){for(n&=~Ql,n&=~Pi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ae(n),r=1<<t;e[t]=-1,n&=~r}}function du(e){if(z&6)throw Error(S(327));rt();var n=Qr(e,0);if(!(n&1))return me(e,G()),null;var t=si(e,n);if(e.tag!==0&&t===2){var r=Ro(e);r!==0&&(n=r,t=rl(e,r))}if(t===1)throw t=er,_n(e,0),nn(e,n),me(e,G()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,xn(e,de,We),me(e,G()),null}function Kl(e,n){var t=z;z|=1;try{return e(n)}finally{z=t,z===0&&(ct=G()+500,Si&&yn())}}function zn(e){rn!==null&&rn.tag===0&&!(z&6)&&rt();var n=z;z|=1;var t=Pe.transition,r=M;try{if(Pe.transition=null,M=1,e)return e()}finally{M=r,Pe.transition=t,z=n,!(z&6)&&yn()}}function Yl(){ve=Zn.current,F(Zn)}function _n(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Qf(t)),K!==null)for(t=K.return;t!==null;){var r=t;switch(_l(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:ut(),F(pe),F(le),Il();break;case 5:Ol(r);break;case 4:ut();break;case 13:F(U);break;case 19:F(U);break;case 10:Tl(r.type._context);break;case 22:case 23:Yl()}t=t.return}if(b=e,K=e=pn(e.current,null),ne=ve=n,J=0,er=null,Ql=Pi=An=0,de=Ot=null,Pn!==null){for(n=0;n<Pn.length;n++)if(t=Pn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}Pn=null}return e}function Pc(e,n){do{var t=K;try{if(Dl(),zr.current=oi,ii){for(var r=W.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ii=!1}if(Tn=0,q=X=W=null,zt=!1,Zt=0,$l.current=null,t===null||t.return===null){J=1,er=n,K=null;break}e:{var o=e,l=t.return,a=t,u=n;if(n=ne,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var v=h.alternate;v?(h.updateQueue=v.updateQueue,h.memoizedState=v.memoizedState,h.lanes=v.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=qa(l);if(y!==null){y.flags&=-257,ba(y,l,a,o,n),y.mode&1&&Za(o,s,n),n=y,u=s;var k=n.updateQueue;if(k===null){var w=new Set;w.add(u),n.updateQueue=w}else k.add(u);break e}else{if(!(n&1)){Za(o,s,n),Xl();break e}u=Error(S(426))}}else if(B&&a.mode&1){var _=qa(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),ba(_,l,a,o,n),Rl(st(u,a));break e}}o=u=st(u,a),J!==4&&(J=2),Ot===null?Ot=[o]:Ot.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var d=uc(o,u,n);$a(o,d);break e;case 1:a=u;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(dn===null||!dn.has(f)))){o.flags|=65536,n&=-n,o.lanes|=n;var g=sc(o,a,n);$a(o,g);break e}}o=o.return}while(o!==null)}_c(t)}catch(C){n=C,K===t&&t!==null&&(K=t=t.return);continue}break}while(1)}function jc(){var e=li.current;return li.current=oi,e===null?oi:e}function Xl(){(J===0||J===3||J===2)&&(J=4),b===null||!(An&268435455)&&!(Pi&268435455)||nn(b,ne)}function si(e,n){var t=z;z|=2;var r=jc();(b!==e||ne!==n)&&(We=null,_n(e,n));do try{vp();break}catch(i){Pc(e,i)}while(1);if(Dl(),z=t,li.current=r,K!==null)throw Error(S(261));return b=null,ne=0,J}function vp(){for(;K!==null;)Nc(K)}function gp(){for(;K!==null&&!Wd();)Nc(K)}function Nc(e){var n=Lc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,n===null?_c(e):K=n,$l.current=null}function _c(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=cp(t,n),t!==null){t.flags&=32767,K=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,K=null;return}}else if(t=sp(t,n,ve),t!==null){K=t;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);J===0&&(J=5)}function xn(e,n,t){var r=M,i=Pe.transition;try{Pe.transition=null,M=1,wp(e,n,t,r)}finally{Pe.transition=i,M=r}return null}function wp(e,n,t,r){do rt();while(rn!==null);if(z&6)throw Error(S(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Zd(e,o),e===b&&(K=b=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||jr||(jr=!0,Dc($r,function(){return rt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var l=M;M=1;var a=z;z|=4,$l.current=null,fp(e,t),Cc(t,e),Ff(Mo),Gr=!!zo,Mo=zo=null,e.current=t,pp(t),Vd(),z=a,M=l,Pe.transition=o}else e.current=t;if(jr&&(jr=!1,rn=e,ui=i),o=e.pendingLanes,o===0&&(dn=null),Qd(t.stateNode),me(e,G()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(ai)throw ai=!1,e=nl,nl=null,e;return ui&1&&e.tag!==0&&rt(),o=e.pendingLanes,o&1?e===tl?It++:(It=0,tl=e):It=0,yn(),null}function rt(){if(rn!==null){var e=as(ui),n=Pe.transition,t=M;try{if(Pe.transition=null,M=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,ui=0,z&6)throw Error(S(331));var i=z;for(z|=4,E=e.current;E!==null;){var o=E,l=o.child;if(E.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(E=s;E!==null;){var h=E;switch(h.tag){case 0:case 11:case 15:Mt(8,h,o)}var m=h.child;if(m!==null)m.return=h,E=m;else for(;E!==null;){h=E;var v=h.sibling,y=h.return;if(yc(h),h===s){E=null;break}if(v!==null){v.return=y,E=v;break}E=y}}}var k=o.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}E=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,E=l;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Mt(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,E=d;break e}E=o.return}}var c=e.current;for(E=c;E!==null;){l=E;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,E=f;else e:for(l=c;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ei(9,a)}}catch(C){H(a,a.return,C)}if(a===l){E=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,E=g;break e}E=a.return}}if(z=i,yn(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(vi,e)}catch{}r=!0}return r}finally{M=t,Pe.transition=n}}return!1}function fu(e,n,t){n=st(t,n),n=uc(e,n,1),e=cn(e,n,1),n=ue(),e!==null&&(rr(e,1,n),me(e,n))}function H(e,n,t){if(e.tag===3)fu(e,e,t);else for(;n!==null;){if(n.tag===3){fu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=st(t,e),e=sc(n,e,1),n=cn(n,e,1),e=ue(),n!==null&&(rr(n,1,e),me(n,e));break}}n=n.return}}function yp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ue(),e.pingedLanes|=e.suspendedLanes&t,b===e&&(ne&t)===t&&(J===4||J===3&&(ne&130023424)===ne&&500>G()-Gl?_n(e,0):Ql|=t),me(e,n)}function Rc(e,n){n===0&&(e.mode&1?(n=vr,vr<<=1,!(vr&130023424)&&(vr=4194304)):n=1);var t=ue();e=Ye(e,n),e!==null&&(rr(e,n,t),me(e,t))}function kp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Rc(e,t)}function Sp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),Rc(e,t)}var Lc;Lc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return fe=!1,up(e,n,t);fe=!!(e.flags&131072)}else fe=!1,B&&n.flags&1048576&&As(n,br,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Or(e,n),e=n.pendingProps;var i=ot(n,le.current);tt(n,t),i=Bl(null,n,r,e,i,t);var o=Ul();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,he(r)?(o=!0,Zr(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zl(n),i.updater=Ci,n.stateNode=i,i._reactInternals=n,$o(n,r,e,t),n=Ko(null,n,r,!0,o,t)):(n.tag=0,B&&o&&Nl(n),ae(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Or(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=xp(r),e=Le(r,e),i){case 0:n=Go(null,n,r,e,t);break e;case 1:n=tu(null,n,r,e,t);break e;case 11:n=eu(null,n,r,e,t);break e;case 14:n=nu(null,n,r,Le(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),Go(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),tu(e,n,r,i,t);case 3:e:{if(pc(n),e===null)throw Error(S(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Is(e,n),ti(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=st(Error(S(423)),n),n=ru(e,n,r,t,i);break e}else if(r!==i){i=st(Error(S(424)),n),n=ru(e,n,r,t,i);break e}else for(ge=sn(n.stateNode.containerInfo.firstChild),we=n,B=!0,Te=null,t=Ws(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(lt(),r===i){n=Xe(e,n,t);break e}ae(e,n,r,t)}n=n.child}return n;case 5:return Vs(n),e===null&&Wo(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Oo(r,i)?l=null:o!==null&&Oo(r,o)&&(n.flags|=32),fc(e,n),ae(e,n,l,t),n.child;case 6:return e===null&&Wo(n),null;case 13:return hc(e,n,t);case 4:return Ml(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=at(n,null,r,t):ae(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),eu(e,n,r,i,t);case 7:return ae(e,n,n.pendingProps,t),n.child;case 8:return ae(e,n,n.pendingProps.children,t),n.child;case 12:return ae(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,O(ei,r._currentValue),r._currentValue=l,o!==null)if(Me(o.value,l)){if(o.children===i.children&&!pe.current){n=Xe(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Qe(-1,t&-t),u.tag=2;var s=o.updateQueue;if(s!==null){s=s.shared;var h=s.pending;h===null?u.next=u:(u.next=h.next,h.next=u),s.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Vo(o.return,t,n),a.lanes|=t;break}u=u.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Vo(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ae(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,tt(n,t),i=je(i),r=r(i),n.flags|=1,ae(e,n,r,t),n.child;case 14:return r=n.type,i=Le(r,n.pendingProps),i=Le(r.type,i),nu(e,n,r,i,t);case 15:return cc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),Or(e,n),n.tag=1,he(r)?(e=!0,Zr(n)):e=!1,tt(n,t),Bs(n,r,i),$o(n,r,i,t),Ko(null,n,r,!0,e,t);case 19:return mc(e,n,t);case 22:return dc(e,n,t)}throw Error(S(156,n.tag))};function Dc(e,n){return rs(e,n)}function Cp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,n,t,r){return new Cp(e,n,t,r)}function Jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xp(e){if(typeof e=="function")return Jl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ml)return 11;if(e===vl)return 14}return 2}function pn(e,n){var t=e.alternate;return t===null?(t=Ee(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Br(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")Jl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Wn:return Rn(t.children,i,o,n);case hl:l=8,i|=8;break;case ho:return e=Ee(12,t,n,i|2),e.elementType=ho,e.lanes=o,e;case mo:return e=Ee(13,t,n,i),e.elementType=mo,e.lanes=o,e;case vo:return e=Ee(19,t,n,i),e.elementType=vo,e.lanes=o,e;case Uu:return ji(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fu:l=10;break e;case Bu:l=9;break e;case ml:l=11;break e;case vl:l=14;break e;case qe:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Ee(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Rn(e,n,t,r){return e=Ee(7,e,r,n),e.lanes=t,e}function ji(e,n,t,r){return e=Ee(22,e,r,n),e.elementType=Uu,e.lanes=t,e.stateNode={isHidden:!1},e}function ao(e,n,t){return e=Ee(6,e,null,n),e.lanes=t,e}function uo(e,n,t){return n=Ee(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ep(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vi(0),this.expirationTimes=Vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zl(e,n,t,r,i,o,l,a,u){return e=new Ep(e,n,t,a,u),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Ee(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},zl(o),e}function Pp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Tc(e){if(!e)return vn;e=e._reactInternals;e:{if(On(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(he(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(he(t))return Ds(e,t,n)}return n}function Ac(e,n,t,r,i,o,l,a,u){return e=Zl(t,r,!0,e,i,o,l,a,u),e.context=Tc(null),t=e.current,r=ue(),i=fn(t),o=Qe(r,i),o.callback=n??null,cn(t,o,i),e.current.lanes=i,rr(e,i,r),me(e,r),e}function Ni(e,n,t,r){var i=n.current,o=ue(),l=fn(i);return t=Tc(t),n.context===null?n.context=t:n.pendingContext=t,n=Qe(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=cn(i,n,l),e!==null&&(ze(e,i,l,o),Ar(e,i,l)),l}function ci(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ql(e,n){pu(e,n),(e=e.alternate)&&pu(e,n)}function jp(){return null}var zc=typeof reportError=="function"?reportError:function(e){console.error(e)};function bl(e){this._internalRoot=e}_i.prototype.render=bl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));Ni(e,n,null,null)};_i.prototype.unmount=bl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zn(function(){Ni(null,e,null,null)}),n[Ke]=null}};function _i(e){this._internalRoot=e}_i.prototype.unstable_scheduleHydration=function(e){if(e){var n=cs();e={blockedOn:null,target:e,priority:n};for(var t=0;t<en.length&&n!==0&&n<en[t].priority;t++);en.splice(t,0,e),t===0&&fs(e)}};function ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hu(){}function Np(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var s=ci(l);o.call(s)}}var l=Ac(n,r,e,0,null,!1,!1,"",hu);return e._reactRootContainer=l,e[Ke]=l.current,Gt(e.nodeType===8?e.parentNode:e),zn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var s=ci(u);a.call(s)}}var u=Zl(e,0,!1,null,null,!1,!1,"",hu);return e._reactRootContainer=u,e[Ke]=u.current,Gt(e.nodeType===8?e.parentNode:e),zn(function(){Ni(n,u,t,r)}),u}function Li(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=ci(l);a.call(u)}}Ni(n,l,e,i)}else l=Np(t,n,e,i,r);return ci(l)}us=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Nt(n.pendingLanes);t!==0&&(yl(n,t|1),me(n,G()),!(z&6)&&(ct=G()+500,yn()))}break;case 13:zn(function(){var r=Ye(e,1);if(r!==null){var i=ue();ze(r,e,1,i)}}),ql(e,1)}};kl=function(e){if(e.tag===13){var n=Ye(e,134217728);if(n!==null){var t=ue();ze(n,e,134217728,t)}ql(e,134217728)}};ss=function(e){if(e.tag===13){var n=fn(e),t=Ye(e,n);if(t!==null){var r=ue();ze(t,e,n,r)}ql(e,n)}};cs=function(){return M};ds=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};jo=function(e,n,t){switch(n){case"input":if(yo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=ki(r);if(!i)throw Error(S(90));Vu(r),yo(r,i)}}}break;case"textarea":$u(e,t);break;case"select":n=t.value,n!=null&&qn(e,!!t.multiple,n,!1)}};Zu=Kl;qu=zn;var _p={usingClientEntryPoint:!1,Events:[or,Qn,ki,Xu,Ju,Kl]},Et={findFiberByHostInstance:En,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Rp={bundleType:Et.bundleType,version:Et.version,rendererPackageName:Et.rendererPackageName,rendererConfig:Et.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ns(e),e===null?null:e.stateNode},findFiberByHostInstance:Et.findFiberByHostInstance||jp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nr.isDisabled&&Nr.supportsFiber)try{vi=Nr.inject(Rp),Be=Nr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_p;ke.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ea(n))throw Error(S(200));return Pp(e,n,null,t)};ke.createRoot=function(e,n){if(!ea(e))throw Error(S(299));var t=!1,r="",i=zc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Zl(e,1,!1,null,null,t,!1,r,i),e[Ke]=n.current,Gt(e.nodeType===8?e.parentNode:e),new bl(n)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ns(n),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return zn(e)};ke.hydrate=function(e,n,t){if(!Ri(n))throw Error(S(200));return Li(null,e,n,!0,t)};ke.hydrateRoot=function(e,n,t){if(!ea(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=zc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Ac(n,null,e,1,t??null,i,!1,o,l),e[Ke]=n.current,Gt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new _i(n)};ke.render=function(e,n,t){if(!Ri(n))throw Error(S(200));return Li(null,e,n,!1,t)};ke.unmountComponentAtNode=function(e){if(!Ri(e))throw Error(S(40));return e._reactRootContainer?(zn(function(){Li(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ke.unstable_batchedUpdates=Kl;ke.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ri(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Li(e,n,t,!1,r)};ke.version="18.2.0-next-9e3b772b8-20220608";function Mc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mc)}catch(e){console.error(e)}}Mc(),Au.exports=ke;var Lp=Au.exports,mu=Lp;fo.createRoot=mu.createRoot,fo.hydrateRoot=mu.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nr(){return nr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},nr.apply(this,arguments)}var on;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(on||(on={}));const vu="popstate";function Dp(e){e===void 0&&(e={});function n(r,i){let{pathname:o,search:l,hash:a}=r.location;return ol("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:di(i)}return Ap(n,t,null,e)}function Y(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function na(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Tp(){return Math.random().toString(36).substr(2,8)}function gu(e,n){return{usr:e.state,key:e.key,idx:n}}function ol(e,n,t,r){return t===void 0&&(t=null),nr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?ht(n):n,{state:t,key:n&&n.key||r||Tp()})}function di(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function ht(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Ap(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=on.Pop,u=null,s=h();s==null&&(s=0,l.replaceState(nr({},l.state,{idx:s}),""));function h(){return(l.state||{idx:null}).idx}function m(){a=on.Pop;let _=h(),d=_==null?null:_-s;s=_,u&&u({action:a,location:w.location,delta:d})}function v(_,d){a=on.Push;let c=ol(w.location,_,d);t&&t(c,_),s=h()+1;let f=gu(c,s),g=w.createHref(c);try{l.pushState(f,"",g)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(g)}o&&u&&u({action:a,location:w.location,delta:1})}function y(_,d){a=on.Replace;let c=ol(w.location,_,d);t&&t(c,_),s=h();let f=gu(c,s),g=w.createHref(c);l.replaceState(f,"",g),o&&u&&u({action:a,location:w.location,delta:0})}function k(_){let d=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof _=="string"?_:di(_);return Y(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let w={get action(){return a},get location(){return e(i,l)},listen(_){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(vu,m),u=_,()=>{i.removeEventListener(vu,m),u=null}},createHref(_){return n(i,_)},createURL:k,encodeLocation(_){let d=k(_);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:v,replace:y,go(_){return l.go(_)}};return w}var wu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wu||(wu={}));function zp(e,n,t){t===void 0&&(t="/");let r=typeof n=="string"?ht(n):n,i=ta(r.pathname||"/",t);if(i==null)return null;let o=Oc(e);Mp(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=$p(o[a],Kp(i));return l}function Oc(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(o,l,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(Y(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let s=hn([r,u.relativePath]),h=t.concat(u);o.children&&o.children.length>0&&(Y(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),Oc(o.children,n,h,s)),!(o.path==null&&!o.index)&&n.push({path:s,score:Vp(s,o.index),routesMeta:h})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let u of Ic(o.path))i(o,l,u)}),n}function Ic(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Ic(r.join("/")),a=[];return a.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Mp(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Hp(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Op=/^:\w+$/,Ip=3,Fp=2,Bp=1,Up=10,Wp=-2,yu=e=>e==="*";function Vp(e,n){let t=e.split("/"),r=t.length;return t.some(yu)&&(r+=Wp),n&&(r+=Fp),t.filter(i=>!yu(i)).reduce((i,o)=>i+(Op.test(o)?Ip:o===""?Bp:Up),r)}function Hp(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function $p(e,n){let{routesMeta:t}=e,r={},i="/",o=[];for(let l=0;l<t.length;++l){let a=t[l],u=l===t.length-1,s=i==="/"?n:n.slice(i.length)||"/",h=Qp({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},s);if(!h)return null;Object.assign(r,h.params);let m=a.route;o.push({params:r,pathname:hn([i,h.pathname]),pathnameBase:Zp(hn([i,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(i=hn([i,h.pathnameBase]))}return o}function Qp(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Gp(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((s,h,m)=>{if(h==="*"){let v=a[m]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}return s[h]=Yp(a[m]||"",h),s},{}),pathname:o,pathnameBase:l,pattern:e}}function Gp(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),na(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function Kp(e){try{return decodeURI(e)}catch(n){return na(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Yp(e,n){try{return decodeURIComponent(e)}catch(t){return na(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),e}}function ta(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Xp(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?ht(e):e;return{pathname:t?t.startsWith("/")?t:Jp(t,n):n,search:qp(r),hash:bp(i)}}function Jp(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function so(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fc(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Bc(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ht(e):(i=nr({},e),Y(!i.pathname||!i.pathname.includes("?"),so("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),so("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),so("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(r||l==null)a=t;else{let m=n.length-1;if(l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),m-=1;i.pathname=v.join("/")}a=m>=0?n[m]:"/"}let u=Xp(i,a),s=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(s||h)&&(u.pathname+="/"),u}const hn=e=>e.join("/").replace(/\/\/+/g,"/"),Zp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),qp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function eh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Uc=["post","put","patch","delete"];new Set(Uc);const nh=["get",...Uc];new Set(nh);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fi(){return fi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},fi.apply(this,arguments)}const ra=x.createContext(null),Wc=x.createContext(null),In=x.createContext(null),Di=x.createContext(null),Fn=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Vc=x.createContext(null);function th(e,n){let{relative:t}=n===void 0?{}:n;ar()||Y(!1);let{basename:r,navigator:i}=x.useContext(In),{hash:o,pathname:l,search:a}=ia(e,{relative:t}),u=l;return r!=="/"&&(u=l==="/"?r:hn([r,l])),i.createHref({pathname:u,search:a,hash:o})}function ar(){return x.useContext(Di)!=null}function ur(){return ar()||Y(!1),x.useContext(Di).location}function Hc(e){x.useContext(In).static||x.useLayoutEffect(e)}function rh(){let{isDataRoute:e}=x.useContext(Fn);return e?vh():ih()}function ih(){ar()||Y(!1);let e=x.useContext(ra),{basename:n,navigator:t}=x.useContext(In),{matches:r}=x.useContext(Fn),{pathname:i}=ur(),o=JSON.stringify(Fc(r).map(u=>u.pathnameBase)),l=x.useRef(!1);return Hc(()=>{l.current=!0}),x.useCallback(function(u,s){if(s===void 0&&(s={}),!l.current)return;if(typeof u=="number"){t.go(u);return}let h=Bc(u,JSON.parse(o),i,s.relative==="path");e==null&&n!=="/"&&(h.pathname=h.pathname==="/"?n:hn([n,h.pathname])),(s.replace?t.replace:t.push)(h,s.state,s)},[n,t,o,i,e])}function ia(e,n){let{relative:t}=n===void 0?{}:n,{matches:r}=x.useContext(Fn),{pathname:i}=ur(),o=JSON.stringify(Fc(r).map(l=>l.pathnameBase));return x.useMemo(()=>Bc(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function oh(e,n){return lh(e,n)}function lh(e,n,t){ar()||Y(!1);let{navigator:r}=x.useContext(In),{matches:i}=x.useContext(Fn),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=ur(),s;if(n){var h;let w=typeof n=="string"?ht(n):n;a==="/"||(h=w.pathname)!=null&&h.startsWith(a)||Y(!1),s=w}else s=u;let m=s.pathname||"/",v=a==="/"?m:m.slice(a.length)||"/",y=zp(e,{pathname:v}),k=dh(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:hn([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:hn([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,t);return n&&k?x.createElement(Di.Provider,{value:{location:fi({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:on.Pop}},k):k}function ah(){let e=mh(),n=eh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},n),t?x.createElement("pre",{style:i},t):null,o)}const uh=x.createElement(ah,null);class sh extends x.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error||t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error?x.createElement(Fn.Provider,{value:this.props.routeContext},x.createElement(Vc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ch(e){let{routeContext:n,match:t,children:r}=e,i=x.useContext(ra);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(Fn.Provider,{value:n},r)}function dh(e,n,t){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),e==null){var i;if((i=t)!=null&&i.errors)e=t.matches;else return null}let o=e,l=(r=t)==null?void 0:r.errors;if(l!=null){let a=o.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id]));a>=0||Y(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,u,s)=>{let h=u.route.id?l==null?void 0:l[u.route.id]:null,m=null;t&&(m=u.route.errorElement||uh);let v=n.concat(o.slice(0,s+1)),y=()=>{let k;return h?k=m:u.route.Component?k=x.createElement(u.route.Component,null):u.route.element?k=u.route.element:k=a,x.createElement(ch,{match:u,routeContext:{outlet:a,matches:v,isDataRoute:t!=null},children:k})};return t&&(u.route.ErrorBoundary||u.route.errorElement||s===0)?x.createElement(sh,{location:t.location,revalidation:t.revalidation,component:m,error:h,children:y(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):y()},null)}var $c=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}($c||{}),pi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(pi||{});function fh(e){let n=x.useContext(ra);return n||Y(!1),n}function ph(e){let n=x.useContext(Wc);return n||Y(!1),n}function hh(e){let n=x.useContext(Fn);return n||Y(!1),n}function Qc(e){let n=hh(),t=n.matches[n.matches.length-1];return t.route.id||Y(!1),t.route.id}function mh(){var e;let n=x.useContext(Vc),t=ph(pi.UseRouteError),r=Qc(pi.UseRouteError);return n||((e=t.errors)==null?void 0:e[r])}function vh(){let{router:e}=fh($c.UseNavigateStable),n=Qc(pi.UseNavigateStable),t=x.useRef(!1);return Hc(()=>{t.current=!0}),x.useCallback(function(i,o){o===void 0&&(o={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,fi({fromRouteId:n},o)))},[e,n])}function Ur(e){Y(!1)}function gh(e){let{basename:n="/",children:t=null,location:r,navigationType:i=on.Pop,navigator:o,static:l=!1}=e;ar()&&Y(!1);let a=n.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=ht(r));let{pathname:s="/",search:h="",hash:m="",state:v=null,key:y="default"}=r,k=x.useMemo(()=>{let w=ta(s,a);return w==null?null:{location:{pathname:w,search:h,hash:m,state:v,key:y},navigationType:i}},[a,s,h,m,v,y,i]);return k==null?null:x.createElement(In.Provider,{value:u},x.createElement(Di.Provider,{children:t,value:k}))}function wh(e){let{children:n,location:t}=e;return oh(ll(n),t)}new Promise(()=>{});function ll(e,n){n===void 0&&(n=[]);let t=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let o=[...n,i];if(r.type===x.Fragment){t.push.apply(t,ll(r.props.children,o));return}r.type!==Ur&&Y(!1),!r.props.index||!r.props.children||Y(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ll(r.props.children,o)),t.push(l)}),t}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hi(){return hi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},hi.apply(this,arguments)}function Gc(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function yh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function kh(e,n){return e.button===0&&(!n||n==="_self")&&!yh(e)}const Sh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Ch=["aria-current","caseSensitive","className","end","style","to","children"],xh="startTransition",ku=yd[xh];function Eh(e){let{basename:n,children:t,future:r,window:i}=e,o=x.useRef();o.current==null&&(o.current=Dp({window:i,v5Compat:!0}));let l=o.current,[a,u]=x.useState({action:l.action,location:l.location}),{v7_startTransition:s}=r||{},h=x.useCallback(m=>{s&&ku?ku(()=>u(m)):u(m)},[u,s]);return x.useLayoutEffect(()=>l.listen(h),[l,h]),x.createElement(gh,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:l})}const Ph=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nh=x.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:u,to:s,preventScrollReset:h}=n,m=Gc(n,Sh),{basename:v}=x.useContext(In),y,k=!1;if(typeof s=="string"&&jh.test(s)&&(y=s,Ph))try{let c=new URL(window.location.href),f=s.startsWith("//")?new URL(c.protocol+s):new URL(s),g=ta(f.pathname,v);f.origin===c.origin&&g!=null?s=g+f.search+f.hash:k=!0}catch{}let w=th(s,{relative:i}),_=Rh(s,{replace:l,state:a,target:u,preventScrollReset:h,relative:i});function d(c){r&&r(c),c.defaultPrevented||_(c)}return x.createElement("a",hi({},m,{href:y||w,onClick:k||o?r:d,ref:t,target:u}))}),_h=x.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:a,to:u,children:s}=n,h=Gc(n,Ch),m=ia(u,{relative:h.relative}),v=ur(),y=x.useContext(Wc),{navigator:k}=x.useContext(In),w=k.encodeLocation?k.encodeLocation(m).pathname:m.pathname,_=v.pathname,d=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(_=_.toLowerCase(),d=d?d.toLowerCase():null,w=w.toLowerCase());let c=_===w||!l&&_.startsWith(w)&&_.charAt(w.length)==="/",f=d!=null&&(d===w||!l&&d.startsWith(w)&&d.charAt(w.length)==="/"),g=c?r:void 0,C;typeof o=="function"?C=o({isActive:c,isPending:f}):C=[o,c?"active":null,f?"pending":null].filter(Boolean).join(" ");let j=typeof a=="function"?a({isActive:c,isPending:f}):a;return x.createElement(Nh,hi({},h,{"aria-current":g,className:C,ref:t,style:j,to:u}),typeof s=="function"?s({isActive:c,isPending:f}):s)});var Su;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Su||(Su={}));var Cu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cu||(Cu={}));function Rh(e,n){let{target:t,replace:r,state:i,preventScrollReset:o,relative:l}=n===void 0?{}:n,a=rh(),u=ur(),s=ia(e,{relative:l});return x.useCallback(h=>{if(kh(h,t)){h.preventDefault();let m=r!==void 0?r:di(u)===di(s);a(e,{replace:m,state:i,preventScrollReset:o,relative:l})}},[u,a,s,r,i,t,e,o,l])}const Nn=new webkitSpeechRecognition;Nn.continuous=!0;Nn.lang="en-US";Nn.interimResult=!0;const Lh=({word:e,index:n})=>{x.useState(null);const t=i=>{Nn.start();let o=i.toLowerCase();Nn.onresult=l=>{const a=l.results[0][0].transcript;alert(o===a?`Bien, la palabra es: ${a}`:`Mal, dijiste algo como: ${a}`)},setTimeout(()=>{Nn.stop(),setTimeout(()=>{Nn.abort()},500)},4e3)},r=i=>{const o=new SpeechSynthesisUtterance(i);o.rate=.7,o.lang="en-US",speechSynthesis.speak(o)};return p.jsx("div",{className:"word_c",children:p.jsxs("div",{className:"word",children:[p.jsx("span",{className:"word_item",children:e.word}),p.jsxs("div",{className:"pronunciation_container",children:[p.jsx("span",{className:"pronunciation",children:e.pronunciation}),p.jsx("button",{className:"listen",onClick:()=>r(e.word),children:"Listen"})]}),p.jsxs("div",{className:"meaning_word",children:[p.jsx("div",{className:"defi",children:e.definition}),p.jsxs("div",{className:"talk_container",children:[p.jsx("button",{className:"talk",onClick:()=>t(e.word),children:"Talk"}),p.jsx("div",{className:"index",children:n})]})]})]})})},Dh=`the
of
and
to
a
in
that
is
for
it
warn
with
you
be
on
not
are
this
or
they
from
at
by
but
we
an
have
which
one
would
all
will
there
been
has
when
who
their
if
can
said
more
about
into
other
some
than
its
time
up
could
him
her
two
them
these
may
then
so
an
like
his
our
would
no
us
out
when
do
your
what
up
their
if
has
about
into
them
only
other
our
will
said
could
new
some
made
first
any
over
after
back
years
most
just
where
must
well
also
much
should
even
those
before
same
through
now
been
off
down
good
many
such
day
never
get
long
because
very
without
know
even
way
could
see
too
make
three
people
world
own
take
under
years
still
just
great
think
against
come
might
same
found
place
end
number
system
area
form
water
case
group
company
problem
fact
program
question
government
point
night
home
should
always
old
different
away
went
small
once
house
men
kind
part
began
course
city
far
top
given
moment
within
something
nothing
course
told
mind
often
every
become`.toLowerCase(),Th=`the
and
of
to
a
in
that
is
it
for
you
with
was
on
be
at
as
by
this
have
from
or
not
but
they
his
which
she
we
her
all
their
are
there
an
been
who
its
has
one
if
more
when
will
would
can
may
what
so
about
up
out
some
if
my
other
them
do
no
time
than
see
could
make
him
only
into
year
your
like
know
now
take
come
just
than
find
day
back
also
use
first
water
long
way
little
been
call
who
oil
its
now
find
down
side
same
get
here
big
high
old
good
small
own
set
every
under
might
right
still
story
saw
few
stop
own
over
know
never
place
off
such
again
home
play
spell
air
away
animal
house
point
page
letter
mother
answer
found
study
still
learn
should
America
world
school
plant
food
sun
four
between
state
keep
eye
never
last
let
thought
city
tree
cross
farm
hard
start
might
story
saw
far
sea
draw
left
late
run
don't
while
press
close
night
real
life
few
north
open
seem
together
next
white`.toLowerCase(),Ah=`the
be
to
of
and
a
in
that
have
I
it
for
not
on
with
he
as
you
do
at
this
but
his
by
from
they
we
say
her
she
or
an
will
my
one
all
would
there
their
what
so
up
out
if
about
who
get
which
go
me
when
make
can
like
time
no
just
him
know
take
person
into
year
your
good
some
could
them
see
other
than
then
now
look
only
come
its
over
think
also
back
after
use
two
how
our
work
first
well
way
even
new
want
because
any
these
give
day
most
us
is
was
were
has
had
may
can't
shall
should
must
need
ought
but
yet
still
may
might
such
those
every
even
own
just
too
very
much
many
few
little
other
some
any
enough
more
less
much
still
as
only
but
even
though
although
quite
either
neither
so
both
one
two
much
either
neither
several
every
all
some
any
none
nothing
everything
everybody
someone
anyone
no one
anything
everything
somewhere
anywhere
nowhere
everywhere
however`.toLowerCase(),zh=`Shelter
water
food
fire
safety
survival
gear
knife
rope
backpac
bonfire
tent
cliff
emergency
first aid
navigation
map
compass
sunscreen
insect repellent
warmth
clothes
boots
Campfire
Fish
Hunt
Trap
Gathering
meeting
Cook
purifier
Hydration
Flares
Signaling
Rescue
Survival kit
Survivalist
Natural
disasters
Hypothermia
Dehydration
Emergency response
Survival
skill
Wilderness
Climbing
Mountain
Camping
Forage
Edible
plants
Poisonous
Wildlife
Bear
Snake
Insects
Weather
Thunder
storm
Tornado
Hurricane
Earthquake
Flood
Avalanche
tools
GPS
Whistle
Mirror
Survival whistle
Multi-tool
Fishing line
Fishing hooks
Fishing bait
Rifle
Ammunition
First-aid kit
Antiseptic
Bandages
Splint
Tweezers
Scissors
analgesic
Allergy
medicine
treatment
Snake
bite
kit
Water
bottle
Canteen
filter
charger
Lighter
Firestarter
Tarp
Sleeping bag
Sleeping pad
Headlamp
Flashlight
Lantern
Bug net
Hammock
Axe
Saw
Machete
Compass
Binoculars
Backpack
Gloves
Hat
Sunglasses
Sun hat
Sun shirt
Hiking
Climbing helmet
Climbing rope
Climbing harness
Carabiners
Rope bag
Dry bag
Compass
Emergency
radio
Walkie-talkies
Satellite
phone
storage
container
treatment
tablets
Emergency whistle
bite
venom
relief
pill
Sunscreen
device`.toLowerCase(),Mh=`cartography
Map
Scale
Legend
Compass
North
South
East
West
northeast
northwest
southeast
southwest
Topography
Elevation
Terrain
Relief
Projection
Latitude
Longitude
Grid
Coordinates
Cartographer
Geographer
Geographic
Geography
Information
System
Remote
sensing
Aerial
photography
Satellite
images
Topographic
topography
Geological
geology
Political map
Physical map
Road
Nautical chart
scale
key
Index
legend
Magnetic declination
Magnetic variation
Seabed
tide
range
Harbor
Land
cover
National
area
Wilderness
Protect
Vegetation
Hydrology
River
Stream
Lake
Wetland
Flood
plain
Watershed
Ground water
Contour
interval
Slope
Aspect
Direction
orientation
Datum
projection
Geographic
feature
Landmark
Mountain
Hill
Valley
Canyon
Plateau
Plain
Desert
Oasis
Glacier
Volcano
Island`.toLowerCase(),Oh=`lowercase
uppercase
Technology
Software
Hardware
Computer
Data
Network
Internet
System
Server
Cloud
Storage
Security
Database
Code
Programming
Application
Mobile
Device
Operating system
Algorithm
Interface
User
design
Input
Output
contribute
Mouse
Keyboard
Monitor
Printer
Scanner
Camera
Microphone
Headphones
Wi-Fi
Router
route
Firewall
IP address
Analytics
analysis
Artificial
intelligence
Robotics
Automation
reality
Augment
print
Ripple
Digital
Electronic
Online
Website
Pay
car
Search
engine
Advertisements
Content
management
manage
Email
Message
Video
conference
press
pressing machine
Collaboration
Project
Agile
Waterfall
Continue
integration
deploy
Infrastructure
Deployment
Logging
Debugging
Error handling
handle
Test
Performance
Load
Security
Penetration
Vulnerability
Patch
Upgrade
improve
Migration
backup
recovery
Incident
Change
Library
Service
desk
Support
Ticket
Level
Agreement
deal
Metrics
Report
Analysis
Forecast
Budget
Investment
Return
Cost`.toLowerCase(),Ih=`smell
shave
learn
heat
lean
arrive
return
tie
merge
seem
Appear
whistle 
warn
use
study
survive
start
support
report
test
search
stop
save
improve
dream
rescue
plant
recover
print
travel
purify
protect
program
plan
press
poison
make
play
penetrate
dehydrate
made
open
filter
hunt
manage
keep
like
increase
hydrate
spill
deploy
burn
handle
spell
spend
back
whistle
organize
conserve
broadcast
Analyze
access
fix
provide
share
walk
promise
accept
achieve
act
add
admire
admit
advise
agree
aim
allow
announce
answer
appear
apply
appreciate
approach
approve
argue
arrange
arrive
ask
assess
assume
attach
attack
attend
attract
avoid
base
beat
become
believe
belong
bend
bet
bind
bite
blame
bless
block
blow
board
boil
book
bore
borrow
bother
bounce
bow
box
brake
branch
break
breathe
breed
bring
broadcast
brush
build
burn
burst
bury
buy
calculate
call
calm
camp
campaign
cancel
capture
care
carry
carve
catch
cause
celebrate
center
challenge
change
charge
chase
check
cheer
choose
chop
claim
clarify
clean
clear
click
climb
close
coach
collect
color
come
comfort
comment
communicate
compare
compete
complain
complete
concern
concentrate
conclude
conduct
confess
confirm
connect
consider
consist
construct
consult
contain
continue
contribute
control
convert
cook
cooperate
copy
correct
cost
counsel
count
cover
create
cross
cry
cut
cycle
damage
dance
dare
date
deal
debate
decide
declare
decline
decorate
decrease
delay
delete
deliver
demand
demonstrate
depend
describe
design
desire
destroy
detect
develop
dial
dictate
die
differ
dig
direct
disagree
disappear
discover
discuss
display
dispose
distribute
dive
divide
do
donate
doubt
download
draw
dream
dress
drink
drive
drop
dry
dump
earn`.toLowerCase(),Fh=`arise
awake
be
bear
become
begin
bend
bet
bite
beat
bleed
blow
break
breed
bring
build
burst
buy
catch
choose
cling
come
cost
creep
cut
deal
dig
do
draw
drink
drive
dwell
eat
fall
feed
feel
fight
find
flee
fling
fly
forbid
forget
forgive
freeze
get
give
go
grind
grow
hang
have
hear
hide
hit
hold
hurt
keep
kneel
know
lay
lead
leap
leave
lend
let
lie
light
lose
make
mean
meet
overcome
pay
prove
put
quit
read
ride
ring
rise
run
say
see
sell
send
set
shake
shed
shoot
show
shrink
shut
sing
sink
sit
slay
sleep
slide
hang
smite
sneak
sow
speak
spin
spit
split
spoil
spread
spring
stand
steal
stick
sting
stink
strew
stride
strike
string
strive
swear
sweep
swim
swing
take
teach
tear
tell
think
throw
thrust
tread
understand
undertake
upset
wake
wear
weave
wed
weep
weigh
win
wind
withdraw
withhold
withstand
work
wring
write
abide
arise
awake
beget
behold
beseech
betide
bid
bide
bind
bleed`,Bh=`wake up
look up
look for
give up
get up
turn on
turn off
go out
come back
put on
take off
pick up
bring back
throw away
find out
figure out
run into
go over
go through
go on
go off
call back
hold on
give back
put off
set up
break down
bring up
bring down
look after
look out
come up
sit down
stand up
run away
run out
turn up
show up
stand for
take up
take over
let down
make up
put up
put down
bring in
come in
keep up
break up
break in
bring about
cut off
cut down
get back
go back
go through with
go along with
give in
make out
make do
take back
turn around
take on
take in
run into
run over
set aside
put away
put together
take out
look into
look down on
look up to
break out
break through
bring on
bring out
call off
call out
carry on
come down with
come out
come through
cut back
cut up
do without
drop off
drop out
end up
fall apart
fall behind
fall for
get around
get away
get by
get in
get into
get off
get on
get out
get over
get through
give away
give out
give up on
go after
go for
go by
go on with
grow up
hang out
hang up
hold back
hold off
hold up
keep away
keep in
keep on
keep out
kick off
knock down
knock out
lay off
let in
let off
let out
look around
look away
look back
look for
look forward to
look in
look over
make up for
make out
mess up
mix up
pass out
pay back
pay off
pick out
point out
pull out
put back
put in
put out
put through
put up with`.toLowerCase(),Kc=Dh.split(`
`),Yc=Th.split(`
`),Xc=Ah.split(`
`),Jc=zh.split(`
`),Zc=Mh.split(`
`),Ti=Oh.split(`
`),Ai=Ih.split(`
`).sort(),Uh=new Set(Ai),co=Array.from(Uh),oa=Fh.split(`
`),Wh=Bh.split(`
`),Vh=[...Kc,...Yc,Xc,...Jc,...Zc,...Ti],Hh=new Set(Vh),$h=Array.from(Hh).sort(),Qh=[...Kc,...Yc,...Xc,...Jc,...Zc,...Ti,...Wh,...Ai,...oa],Gh=new Set(Qh),qc=Array.from(Gh).sort(),Kh=qc.find(e=>e==="will");qc.indexOf(Kh);const Yh=Ai.find(e=>e==="break");Ai.indexOf(Yh);const Xh=oa.find(e=>e==="keep");oa.indexOf(Xh);const Jh=Ti.find(e=>e==="wound");Ti.indexOf(Jh);const Zh=()=>{co.splice(0,198),console.log(co.length),console.log(co)};Zh();$h.find(e=>e==="yet");const qh=[{word:"I",pronunciation:"ai",definition:"Yo"},{word:"You",pronunciation:"iú",definition:"Tú"},{word:"He",pronunciation:"ji",definition:"Él"},{word:"She",pronunciation:"shi",definition:"Ella"},{word:"We",pronunciation:"uí",definition:"Nosotros"},{word:"They",pronunciation:"Dei",definition:"Ellos"},{word:"Them",pronunciation:"dem",definition:"Ellos"},{word:"Him",pronunciation:"jim",definition:"A él"},{word:"His",pronunciation:"jis",definition:"Su"},{word:"Her",pronunciation:"ger",definition:"Su"},{word:"About",pronunciation:"abaut",definition:"Acerca de"},{word:"Advertisement",pronunciation:"advertuaisment",definition:"anuncio"},{word:"Aerial",pronunciation:"er-ial",definition:"Aéreo"},{word:"After",pronunciation:"after",definition:"Despues"},{word:"Agile",pronunciation:"ayol",definition:"Ágil"},{word:"A",pronunciation:"a",definition:"un - uno - una"},{word:"An",pronunciation:"an",definition:"un - uno - una"},{word:"And",pronunciation:"",definition:"Y"},{word:"Again",pronunciation:"eguen",definition:"Otra vez"},{word:"Against",pronunciation:"eguenst",definition:"En contra"},{word:"Agreement",pronunciation:"agriment",definition:"Acuerdo"},{word:"Air",pronunciation:"er",definition:"Aire"},{word:"Algorithm",pronunciation:"algridem",definition:"Algoritmo"},{word:"All",pronunciation:"oll",definition:"Todo - todos"},{word:"Allergy",pronunciation:"aleryi",definition:"Alergia"},{word:"Also",pronunciation:"olso",definition:"También"},{word:"Although",pronunciation:"oldo",definition:"Aunque"},{word:"Always",pronunciation:"olwis",definition:"Siempre"},{word:"America",pronunciation:"america",definition:"America"},{word:"Ammunition",pronunciation:"emiunichen",definition:"Munición"},{word:"Analgesic",pronunciation:"enal-yisik",definition:"Analgésico"},{word:"Analysis",pronunciation:"enalisis",definition:"Análisis"},{word:"Analytics",pronunciation:"enalidiks",definition:"Análitica"},{word:"Animal",pronunciation:"enemel",definition:"Animal"},{word:"Answer",pronunciation:"enser",definition:"Respuesta"},{word:"Antiseptic",pronunciation:"entiseptik",definition:"Antiséptico"},{word:"Any",pronunciation:"eny",definition:"Cualquier"},{word:"Anyone",pronunciation:"eni-uan",definition:"Alguien"},{word:"Anything",pronunciation:"eniting",definition:"Cualquier cosa"},{word:"Anywhere",pronunciation:"eniuer",definition:"En cualquier lugar"},{word:"Application",pronunciation:"aplikeichon",definition:"Aplicación - Solicitud"},{word:"Are",pronunciation:"ar",definition:"Son"},{word:"Arrow",pronunciation:"arrou",definition:"Flecha"},{word:"Area",pronunciation:"",definition:"Área"},{word:"Artificial",pronunciation:"arde-fishol",definition:"Artificial"},{word:"As",pronunciation:"as",definition:"Como"},{word:"Abide",pronunciation:"abaid",definition:"cumplir"},{word:"Aspect",pronunciation:"aspect",definition:"Aspecto"},{word:"At",pronunciation:"at",definition:"En"},{word:"Automation",pronunciation:"oro-meichen",definition:"Automatización"},{word:"Avalanche",pronunciation:"ava-lantsh",definition:"Avalancha"},{word:"Away",pronunciation:"e-uey",definition:"Lejos"},{word:"Axe",pronunciation:"aks",definition:"Hacha"},{word:"Among",pronunciation:"amang",definition:"Entre"},{word:"Above",pronunciation:"abov",definition:"Arriba de"},{word:"Address",pronunciation:"adres",definition:"Dirección"},{word:"Backpack",pronunciation:"bak-pak",definition:"Mochila"},{word:"Breakfast",pronunciation:"",definition:"Desayuno"},{word:"Backup",pronunciation:"bak-up",definition:"Respaldo"},{word:"Bandage",pronunciation:"bendich",definition:"Vendaje"},{word:"Bread",pronunciation:"bred",definition:"Pan"},{word:"Boxing",pronunciation:"boxing",definition:"Boxeo"},{word:"Box",pronunciation:"box",definition:"Caja"},{word:"Bear",pronunciation:"ber",definition:"Oso"},{word:"Because",pronunciation:"bicos",definition:"Porque"},{word:"Before",pronunciation:"befor",definition:"antes"},{word:"Between",pronunciation:"be-tuin",definition:"Entre"},{word:"Big",pronunciation:"big",definition:"Grande"},{word:"Binoculars",pronunciation:"banakiulers",definition:"Binoculares"},{word:"Bow",pronunciation:"bou",definition:"Arco"},{word:"Boots",pronunciation:"buts",definition:"Botas"},{word:"Book",pronunciation:"buk",definition:"Libro"},{word:"Bottle",pronunciation:"",definition:"Botella"},{word:"Budget",pronunciation:"bayet",definition:"Presupuesto"},{word:"Bug net",pronunciation:"bag-net",definition:"Toldillo"},{word:"But",pronunciation:"bat",definition:"Pero"},{word:"By",pronunciation:"bay",definition:"Por - Mediante - Según - Junto a"},{word:"Below",pronunciation:"below",definition:"Abajo"},{word:"Branch",pronunciation:"branch",definition:"Rama"},{word:"Camera",pronunciation:"",definition:"Cámara"},{word:"Campfire",pronunciation:"camp-faier",definition:"Hoguera - Fogata"},{word:"Card",pronunciation:"card",definition:"Tarjeta"},{word:"Certain",pronunciation:"cert-en",definition:"Cierto"},{word:"Coffee",pronunciation:"cofi",definition:"Café"},{word:"Chocolate",pronunciation:"",definition:"Chocolate"},{word:"Chicken",pronunciation:"chiken",definition:"Pollo"},{word:"Canyon",pronunciation:"kanien",definition:"Cañón"},{word:"Car",pronunciation:"car",definition:"Carro"},{word:"Carabiner",pronunciation:"karabiner",definition:"Mosquetón"},{word:"characteristic",pronunciation:"",definition:"Caracterìstica"},{word:"Cartographer",pronunciation:"kartagrefer",definition:"Cartógrafo"},{word:"Cartography",pronunciation:"kartagrefi",definition:"Cartografía"},{word:"Case",pronunciation:"kes",definition:"Caso"},{word:"Charger",pronunciation:"charyer",definition:"Cargador"},{word:"Center",pronunciation:"center",definition:"centro"},{word:"Crew",pronunciation:"kru",definition:"Grupo - equipo"},{word:"City",pronunciation:"siti",definition:"Ciudad"},{word:"Cliff",pronunciation:"klif",definition:"Acantilado"},{word:"Clothes",pronunciation:"klotz",definition:"Ropa"},{word:"Cloud",pronunciation:"kloud",definition:"Nube"},{word:"Code",pronunciation:"koud",definition:"Código"},{word:"Collaboration",pronunciation:"colaboreichen",definition:"Colaboración"},{word:"Company",pronunciation:"campani",definition:"Compañía"},{word:"Compass",pronunciation:"kampes",definition:"Brújula"},{word:"Computer",pronunciation:"kampiurer",definition:"Computador"},{word:"Conferece",pronunciation:"kanfrens",definition:"Conferencia"},{word:"Container",pronunciation:"kenteiner",definition:"Contenedor"},{word:"Content",pronunciation:"kanten",definition:"Contenido"},{word:"Contour",pronunciation:"kan-tor",definition:"Contorno"},{word:"Coordinates",pronunciation:"coordenets",definition:"Coordenadas"},{word:"Cost",pronunciation:"cost",definition:"Costo"},{word:"Course",pronunciation:"kors",definition:"Curso"},{word:"Cycle",pronunciation:"saicol",definition:"Ciclo"},{word:"Dinner",pronunciation:"diner",definition:"Cena"},{word:"Data",pronunciation:"deira",definition:"Datos"},{word:"Database",pronunciation:"dara-beis",definition:"Base de datos"},{word:"Datum",pronunciation:"dadem",definition:"Dato"},{word:"Day",pronunciation:"dey",definition:"Día"},{word:"Deal",pronunciation:"dill",definition:"Trato"},{word:"Dehydration",pronunciation:"dijai-dreichen",definition:"Deshidratación"},{word:"deployment",pronunciation:"deploiment",definition:"Despliegue"},{word:"Desert",pronunciation:"desert",definition:"Desierto"},{word:"Desk",pronunciation:"desk",definition:"Escritorio"},{word:"Device",pronunciation:"devais",definition:"Dispositivo"},{word:"Different",pronunciation:"di-frent",definition:"Diferente"},{word:"Direction",pronunciation:"",definition:"Dirección"},{word:"Disaster",pronunciation:"desaster",definition:"Desastre"},{word:"Down",pronunciation:"daun",definition:"Abajo"},{word:"Declination",pronunciation:"daclineichen",definition:"Declinación"},{word:"Earthquake",pronunciation:"erz-cueic",definition:"Terremoto"},{word:"East",pronunciation:"ist",definition:"Este"},{word:"Electronic",pronunciation:"elek-tranik",definition:"Electrónica"},{word:"Elevation",pronunciation:"eleveichen",definition:"Elevación"},{word:"Earth",pronunciation:"Erz",definition:"Arena"},{word:"Email",pronunciation:"imel",definition:"Correo"},{word:"Emergency",pronunciation:"emerjensi",definition:"Emergencia"},{word:"Egg",pronunciation:"eg",definition:"Huevo"},{word:"End",pronunciation:"end",definition:"Fin"},{word:"Engine",pronunciation:"enjen",definition:"Motor"},{word:"Early",pronunciation:"erly",definition:"Temprano"},{word:"Every",pronunciation:"ebri",definition:"Cada"},{word:"Even",pronunciation:"iven",definition:"Incluso"},{word:"Event",pronunciation:"event",definition:"Evento"},{word:"Eyes",pronunciation:"ai",definition:"Ojo"},{word:"Fact",pronunciation:"fakt",definition:"Hecho"},{word:"Far",pronunciation:"far",definition:"Lejos"},{word:"Farm",pronunciation:"farm",definition:"Granja"},{word:"Few",pronunciation:"fiu",definition:"Pocos"},{word:"Feature",pronunciation:"ficher",definition:"caracterìstica"},{word:"Fire",pronunciation:"faier",definition:"Fuego"},{word:"Firewall",pronunciation:"faier-wol",definition:"Cortafuegos"},{word:"First",pronunciation:"ferst",definition:"Primero"},{word:"First aid",pronunciation:"ferst-eid",definition:"Primeros auxilios"},{word:"First-aid kit",pronunciation:"ferst-eid kit",definition:"Kit de primeros auxilios"},{word:"Fish",pronunciation:"fich",definition:"Pez"},{word:"Fishing bait",pronunciation:"fiching beit",definition:"Cebo de pesca"},{word:"Flares",pronunciation:"flers",definition:"Bengalas"},{word:"Flashlight",pronunciation:"flach-lait",definition:"Linterna"},{word:"Flood",pronunciation:"flod",definition:"Inundación"},{word:"Food",pronunciation:"fud",definition:"Comida"},{word:"For",pronunciation:"for",definition:"Por"},{word:"Forage",pronunciation:"for-ech",definition:"Forraje"},{word:"Forecast",pronunciation:"for-kast",definition:"Pronóstico"},{word:"Four",pronunciation:"for",definition:"Cuatro"},{word:"Friend",pronunciation:"fren",definition:"Amigo"},{word:"From",pronunciation:"from",definition:"De - Desde"},{word:"Food",pronunciation:"Fud",definition:"Comida"},{word:"Family",pronunciation:"femly",definition:"Familia"},{word:"Front",pronunciation:"front",definition:"Frente"},{word:"Game",pronunciation:"gueim",definition:"Juego"},{word:"Gear",pronunciation:"guir",definition:"Engranaje"},{word:"Geographer",pronunciation:"yia-grefer",definition:"Geógrafo"},{word:"Geographic",pronunciation:"yio-grafic",definition:"Gegráfico"},{word:"Geography",pronunciation:"yia-grefi",definition:"Geografía"},{word:"Geologic",pronunciation:"yio-loyic",definition:"Geológico"},{word:"Geology",pronunciation:"yia-leyi",definition:"Geología"},{word:"Ground",pronunciation:"graund",definition:"Suelo"},{word:"Group",pronunciation:"grup",definition:"Grupo"},{word:"Glasses",pronunciation:"glases",definition:"Gafas"},{word:"Hammock",pronunciation:"jamek",definition:"Hamaca"},{word:"Harbor",pronunciation:"jarvor",definition:"Puerto"},{word:"Hard",pronunciation:"jard",definition:"Duro - Difícil"},{word:"Hat",pronunciation:"jat",definition:"Sombrero"},{word:"Headlamp",pronunciation:"jed-lamp",definition:"Linterna de cabeza"},{word:"Hear",pronunciation:"jir",definition:"Aquí"},{word:"Higt",pronunciation:"jai",definition:"Alto"},{word:"Hike",pronunciation:"jaik",definition:"Caminata"},{word:"Height",pronunciation:"jait",definition:"Altura"},{word:"Harness",pronunciation:"arnes",definition:"Arnés"},{word:"Hook",pronunciation:"jok",definition:"Gancho"},{word:"Helmet",pronunciation:"elmet",definition:"Casco"},{word:"Hill",pronunciation:"jil",definition:"Colina"},{word:"Home",pronunciation:"jom",definition:"Hogar"},{word:"House",pronunciation:"jaus",definition:"Casa"},{word:"Hurricane",pronunciation:"",definition:"Huracán"},{word:"Hydration",pronunciation:"jai-dreichen",definition:"Hidratación"},{word:"Hypothermia",pronunciation:"jaipotermia",definition:"Hipotermia"},{word:"If",pronunciation:"if",definition:"si"},{word:"Image",pronunciation:"imech",definition:"Imagen"},{word:"In",pronunciation:"in",definition:"En"},{word:"Incident",pronunciation:"incident",definition:"Incidente"},{word:"Index",pronunciation:"index",definition:"Ídice"},{word:"Information",pronunciation:"infor-meichen",definition:"Información"},{word:"Infrastructure",pronunciation:"infras-trakcher",definition:"Infraestructura"},{word:"Input",pronunciation:"input",definition:"Entrada - Aporte"},{word:"Insects",pronunciation:"insekt",definition:"Insecto"},{word:"Integration",pronunciation:"inte-greichen",definition:"Integración"},{word:"Intelligence",pronunciation:"in-teliyens",definition:"Inteligencia"},{word:"Interface",pronunciation:"interfeis",definition:"Interfaz"},{word:"Interval",pronunciation:"interval",definition:"Intervalo"},{word:"Into",pronunciation:"intu",definition:"En"},{word:"Investment",pronunciation:"investment",definition:"Inversión"},{word:"Is",pronunciation:"is",definition:"Es"},{word:"Island",pronunciation:"ailand",definition:"Isla"},{word:"It",pronunciation:"it",definition:"El"},{word:"Just",pronunciation:"yost",definition:"Solo - Justo"},{word:"Juice",pronunciation:"",definition:"Jugo"},{word:"Key",pronunciation:"ki",definition:"Llave"},{word:"Keyboard",pronunciation:"ki-bord",definition:"Teclado"},{word:"Kind",pronunciation:"kaind",definition:"Tipo - Amable"},{word:"Kit",pronunciation:"kit",definition:"Equipo"},{word:"Kookie",pronunciation:"kuki",definition:"Galleta"},{word:"Knife",pronunciation:"Naif",definition:"Cuchillo"},{word:"Lake",pronunciation:"leik",definition:"Lago"},{word:"Land",pronunciation:"land",definition:"Tierra"},{word:"Landmark",pronunciation:"land-mark",definition:"Punto de referencia"},{word:"Lantern",pronunciation:"lantern",definition:"Linterna"},{word:"Last",pronunciation:"last",definition:"Último"},{word:"Latitude",pronunciation:"latitud",definition:"Latitud"},{word:"Left",pronunciation:"left",definition:"Izquierda"},{word:"Legend",pronunciation:"leyend",definition:"Leyenda"},{word:"Letter",pronunciation:"leder",definition:"Carta - Letra"},{word:"Level",pronunciation:"level",definition:"Nivel"},{word:"Library",pronunciation:"laibrery",definition:"Biblioteca"},{word:"Life",pronunciation:"laif",definition:"Vida"},{word:"Little",pronunciation:"",definition:"Pequeño - Poco"},{word:"Load",pronunciation:"loud",definition:"Carga"},{word:"Long",pronunciation:"long",definition:"largo"},{word:"Longitude",pronunciation:"lonyi-tud",definition:"Longitud"},{word:"Lowercase",pronunciation:"louer-keis",definition:"Minúscula"},{word:"Late",pronunciation:"leit",definition:"Tarde"},{word:"Lighter",pronunciation:"lairer",definition:"Encendedor"},{word:"Line",pronunciation:"lain",definition:"Línea"},{word:"Lunch",pronunciation:"lanch",definition:"Almuerzo"},{word:"Lamp",pronunciation:"lamp",definition:"Lámpara"},{word:"Machete",pronunciation:"macheti",definition:"Machete"},{word:"Machine",pronunciation:"ma-chin",definition:"Máquina"},{word:"Medication",pronunciation:"medi-keichen",definition:"Medicamento"},{word:"Meat",pronunciation:"mit",definition:"Carne"},{word:"Mistake",pronunciation:"mesteik",definition:"Error"},{word:"Many",pronunciation:"meni",definition:"Muchos"},{word:"Map",pronunciation:"map",definition:"Mapa"},{word:"Medicine",pronunciation:"medisin",definition:"Medicamento"},{word:"Meeting",pronunciation:"miring",definition:"Reunión"},{word:"Men",pronunciation:"men",definition:"Hombres"},{word:"Message",pronunciation:"mesich",definition:"Mensaje"},{word:"Metrics",pronunciation:"metriks",definition:"Métrica"},{word:"Microphone",pronunciation:"maikre-fon",definition:"Micrófono"},{word:"Migration",pronunciation:"mai-greichen",definition:"Miración"},{word:"Mind",pronunciation:"maind",definition:"Mente"},{word:"Mirror",pronunciation:"mirror",definition:"Espejo"},{word:"Mobile",pronunciation:"",definition:"Móvil"},{word:"Moment",pronunciation:"moment",definition:"Momento"},{word:"Monitor",pronunciation:"maneder",definition:"Monitor"},{word:"More",pronunciation:"mor",definition:"Más"},{word:"Most",pronunciation:"most",definition:"Más"},{word:"Mother",pronunciation:"moder",definition:"Mamá"},{word:"Mountain",pronunciation:"maun-ten",definition:""},{word:"Mouse",pronunciation:"maus",definition:"Ratón"},{word:"Much",pronunciation:"mach",definition:"Mucho"},{word:"My",pronunciation:"may",definition:"Mi"},{word:"National",pronunciation:"nashenal",definition:"Nacional"},{word:"Natural",pronunciation:"",definition:"Natural"},{word:"Nature",pronunciation:"neicher",definition:"Naturaleza"},{word:"Navigation",pronunciation:"navi-gueichen",definition:"Navegación"},{word:"Network",pronunciation:"net-work",definition:"Red"},{word:"Never",pronunciation:"never",definition:"Nunca"},{word:"New",pronunciation:"niu",definition:"Nuevo"},{word:"Next",pronunciation:"next",definition:"Siguiente"},{word:"Night",pronunciation:"nait",definition:"Noche"},{word:"No",pronunciation:"nou",definition:"No"},{word:"North",pronunciation:"nort",definition:"Norte"},{word:"Northwest",pronunciation:"nort-west",definition:"Noroeste"},{word:"Not",pronunciation:"not",definition:"No"},{word:"Nothing",pronunciation:"noting",definition:"Nada"},{word:"Now",pronunciation:"nao",definition:"Ahora"},{word:"Number",pronunciation:"namber",definition:"Número"},{word:"Of",pronunciation:"of",definition:"De"},{word:"Off",pronunciation:"of",definition:"Apagado"},{word:"Often",pronunciation:"afen",definition:"Con frecuencia"},{word:"Oil",pronunciation:"oil",definition:"Aceite"},{word:"Old",pronunciation:"old",definition:"Viejo"},{word:"Once",pronunciation:"uans",definition:"Una vez - Alguna vez"},{word:"One",pronunciation:"uan",definition:"Uno"},{word:"Oneline",pronunciation:"on-lain",definition:"En línea"},{word:"Only",pronunciation:"only",definition:"Solo"},{word:"Or",pronunciation:"or",definition:"O"},{word:"Orientation",pronunciation:"orien-teichen",definition:"Orientación"},{word:"Other",pronunciation:"oder",definition:"Otro"},{word:"Our",pronunciation:"aur",definition:"Nuestro"},{word:"Out",pronunciation:"aut",definition:"Afuera"},{word:"Output",pronunciation:"aut-put",definition:"Producción - Salida"},{word:"Over",pronunciation:"over",definition:"Encima - Más de - Terminado"},{word:"Own",pronunciation:"oun",definition:"Aceptar - Propio"},{word:"On",pronunciation:"an",definition:"En"},{word:"Orange",pronunciation:"oranch",definition:"Naranja"},{word:"Page",pronunciation:"pech",definition:"Página"},{word:"Pad",pronunciation:"pad",definition:"Colchoneta"},{word:"Part",pronunciation:"part",definition:"Parte"},{word:"Patch",pronunciation:"pach",definition:"Parche"},{word:"Port",pronunciation:"port",definition:"Puerto"},{word:"People",pronunciation:"pipol",definition:"Personas"},{word:"Performance",pronunciation:"per-formans",definition:"Rendimiento"},{word:"Peel",pronunciation:"pil",definition:"Rendimiento"},{word:"Phone",pronunciation:"fon",definition:"Teléfono"},{word:"Photography",pronunciation:"fotagrefi",definition:"Fotografía"},{word:"physical",pronunciation:"fisical",definition:"Física"},{word:"Physics",pronunciation:"fisiks",definition:"Física"},{word:"Pill",pronunciation:"pil",definition:"Píldora"},{word:"Pillow",pronunciation:"",definition:""},{word:"Place",pronunciation:"pleis",definition:"Lugar"},{word:"Plane",pronunciation:"plein",definition:"Plano"},{word:"Point",pronunciation:"point",definition:"Punto"},{word:"Poisonous",pronunciation:"poisenes",definition:"Venenoso"},{word:"Political",pronunciation:"",definition:"Política"},{word:"Politics",pronunciation:"poli-tiks",definition:""},{word:"Politician",pronunciation:"poli-tishen",definition:"Político"},{word:"Press",pronunciation:"",definition:"Político"},{word:"Printer",pronunciation:"printer",definition:"Impresora"},{word:"Problem",pronunciation:"prable",definition:"Problema"},{word:"Project",pronunciation:"proyect",definition:"Proyecto"},{word:"Projection",pronunciation:"proyec-shen",definition:"Proyección"},{word:"Protection",pronunciation:"protec-shen",definition:"Protección"},{word:"Purifier",pronunciation:"",definition:"Purificador"},{word:"Question",pronunciation:"cues-chen",definition:"Pregunta"},{word:"Radio",pronunciation:"",definition:"Radio"},{word:"Range",pronunciation:"ruench",definition:"Rango"},{word:"Reach",pronunciation:"ruich",definition:"Alcanzar"},{word:"Real",pronunciation:"ruial",definition:"Real"},{word:"Reality",pronunciation:"ruialidi",definition:"Realidad"},{word:"Recovery",pronunciation:"",definition:""},{word:"Recognition",pronunciation:"recog-nichen",definition:"Reconocimiento"},{word:"Recognition",pronunciation:"re-kanesens",definition:"Reconocimiento"},{word:"Relief",pronunciation:"relif",definition:"Socorro - Relieve"},{word:"Remote",pronunciation:"remout",definition:"Remoto"},{word:"Response",pronunciation:"ris-pans",definition:"Respuesta"},{word:"Repellent",pronunciation:"ripelent",definition:"Repelente"},{word:"Rifle",pronunciation:"ruai-fol",definition:"Rifle"},{word:"Right",pronunciation:"rua-it",definition:"Derecha - correcto - razon"},{word:"River",pronunciation:"ruiver",definition:"Río"},{word:"Rice",pronunciation:"raiz",definition:"Arroz"},{word:"Road",pronunciation:"roud",definition:"Carretera - Camino"},{word:"Robotics",pronunciation:"rou-badiks",definition:"Robótica"},{word:"Rope",pronunciation:"rop",definition:"Soga"},{word:"Route",pronunciation:"rut",definition:"Ruta"},{word:"Security",pronunciation:"rut",definition:"Ruta"},{word:"Same",pronunciation:"seim",definition:"Mismo"},{word:"Satellite",pronunciation:"",definition:"Satélite"},{word:"Since",pronunciation:"sens",definition:"Desde"},{word:"Scale",pronunciation:"skel",definition:"Escala"},{word:"School",pronunciation:"skul",definition:"Escuela"},{word:"Scissors",pronunciation:"si-sors",definition:"Tijeras"},{word:"Sea",pronunciation:"si",definition:"Mar"},{word:"Seabed",pronunciation:"si-bed",definition:"Fondo del mar"},{word:"Security",pronunciation:"se-kiuridi",definition:"Seguridad"},{word:"Server",pronunciation:"server",definition:"Servidor"},{word:"Service",pronunciation:"serves",definition:"Servicio"},{word:"Shelter",pronunciation:"chelter",definition:"Refugio - Albergue"},{word:"Side",pronunciation:"said",definition:"Lado"},{word:"Signal",pronunciation:"signal",definition:"Señal"},{word:"Skill",pronunciation:"skil",definition:"Habilidad"},{word:"Sleeping bag",pronunciation:"sliping-bak",definition:"Bolsa de dormir"},{word:"Slope",pronunciation:"slop",definition:"Pendiente - Inclinación"},{word:"Small",pronunciation:"smol",definition:"Pequeño"},{word:"Snake",pronunciation:"snek",definition:"Serpiente"},{word:"So",pronunciation:"sou",definition:"Entonces"},{word:"Soda",pronunciation:"soda",definition:"Gaseosa"},{word:"Some",pronunciation:"som",definition:"Alguno"},{word:"Something",pronunciation:"som-ting",definition:"Algo"},{word:"Sometimes",pronunciation:"somtaims",definition:"A veces"},{word:"South",pronunciation:"",definition:"Sur"},{word:"Southeast",pronunciation:"",definition:"Sureste"},{word:"Southwest",pronunciation:"",definition:"Sur oeste"},{word:"Spell",pronunciation:"spell",definition:"Deletrear"},{word:"State",pronunciation:"steit",definition:"Estado"},{word:"Still",pronunciation:"stell",definition:"Aún"},{word:"Storage",pronunciation:"storech",definition:"Almacenamiento"},{word:"Storm",pronunciation:"storm",definition:"Tormenta"},{word:"Story",pronunciation:"stoty",definition:"Historia"},{word:"Stream",pronunciation:"strim",definition:"Corriente"},{word:"Such",pronunciation:"sach",definition:"Semejante"},{word:"Sun",pronunciation:"son",definition:"Sol"},{word:"Shirt",pronunciation:"shert",definition:"Camisa"},{word:"Sunscreen",pronunciation:"sons-krin",definition:"Protector solar"},{word:"Survival",pronunciation:"ser-vayvol",definition:"Supervivencia"},{word:"Survivor",pronunciation:"ser-vaivor",definition:"Sobreviviente"},{word:"System",pronunciation:"sistem",definition:"Sistema"},{word:"Shower",pronunciation:"shouer",definition:"Ducha"},{word:"Tablet",pronunciation:"tablet",definition:"Tableta"},{word:"Tent",pronunciation:"tent",definition:"Carpa"},{word:"Time",pronunciation:"Taim",definition:"Tiempo"},{word:"To",pronunciation:"tu",definition:""},{word:"Trap",pronunciation:"truap",definition:"Trampa"},{word:"Technology",pronunciation:"tecnoloyi",definition:"Tecnología"},{word:"technique",pronunciation:"tec-nic",definition:"Técnica"},{word:"Terrain",pronunciation:"terren",definition:"Terreno"},{word:"Than",pronunciation:"dan",definition:"Que"},{word:"That",pronunciation:"dat",definition:"Ese"},{word:"The",pronunciation:"de",definition:"El - La - los - Las"},{word:"Their",pronunciation:"der",definition:"Su"},{word:"Then",pronunciation:"den",definition:"Entonces"},{word:"There",pronunciation:"der",definition:"Allá"},{word:"These",pronunciation:"dis",definition:"Estos"},{word:"This",pronunciation:"des",definition:"Esto"},{word:"Those",pronunciation:"dous",definition:"Aquellos"},{word:"Thought",pronunciation:"",definition:"Pensamiento"},{word:"Three",pronunciation:"",definition:"Tres"},{word:"Through",pronunciation:"tru",definition:"A través de"},{word:"Thunder",pronunciation:"tander",definition:"Trueno"},{word:"Ticket",pronunciation:"tiket",definition:"Boleto"},{word:"Tide",pronunciation:"taid",definition:"Marea"},{word:"Time",pronunciation:"taim",definition:"Tiempo"},{word:"Together",pronunciation:"tu-gueder",definition:"Juntos"},{word:"Too",pronunciation:"tu",definition:"También"},{word:"Tool",pronunciation:"tul",definition:"Herramientas"},{word:"Top",pronunciation:"tap",definition:"Arriba"},{word:"Topographic",pronunciation:"tapografic",definition:"Topográfico"},{word:"Topography",pronunciation:"te-pagrefi",definition:"Topografía"},{word:"Tornado",pronunciation:"tor-neido",definition:"Tornado"},{word:"Treatment",pronunciation:"truit-ment",definition:"Tratamiento"},{word:"Tree",pronunciation:"",definition:"Árbol"},{word:"Tweezers",pronunciation:"tuisers",definition:"Pinzas"},{word:"Two",pronunciation:"tu",definition:"Dos"},{word:"Train",pronunciation:"trein",definition:"Entrenar - Tren"},{word:"Trouble",pronunciation:"truabol",definition:"Problemas"},{word:"Us",pronunciation:"os",definition:"Nosotro"},{word:"User",pronunciation:"iuser",definition:"Usuario"},{word:"Until",pronunciation:"antil",definition:"Hasta"},{word:"Unless",pronunciation:"enles",definition:"A menos que"},{word:"Valley",pronunciation:"vali",definition:"Valle"},{word:"Variation",pronunciation:"",definition:"Variación"},{word:"Vegetation",pronunciation:"veye-teichen",definition:"Vegetación"},{word:"Venom",pronunciation:"venom",definition:"Veneno"},{word:"Very",pronunciation:"very",definition:"Muy"},{word:"Video",pronunciation:"vidio",definition:"Video"},{word:"Volcano",pronunciation:"volkeino",definition:"Volcán"},{word:"Vulnerability",pronunciation:"",definition:"Vulnerabilidad"},{word:"Vulnerable",pronunciation:"",definition:"Vulnerable"},{word:"Water",pronunciation:"uarer",definition:"Agua"},{word:"Waterfall",pronunciation:"uarer-fol",definition:"Cascada"},{word:"Way",pronunciation:"uey",definition:"Camino"},{word:"Weather",pronunciation:"ueder",definition:"Clima"},{word:"Website",pronunciation:"ueb-sait",definition:"Website"},{word:"Well",pronunciation:"uel",definition:"Bien - Bueno"},{word:"West",pronunciation:"uest",definition:"Oeste"},{word:"Wetland",pronunciation:"uet-land",definition:"Humedal"},{word:"What",pronunciation:"uat",definition:"Qué"},{word:"When",pronunciation:"uen",definition:"Cuando"},{word:"Where",pronunciation:"uer",definition:"Dónde"},{word:"Which",pronunciation:"uech",definition:"Cual"},{word:"While",pronunciation:"uail",definition:"Mientras"},{word:"White",pronunciation:"uait",definition:"Blanco"},{word:"Who",pronunciation:"ju",definition:"Quien"},{word:"Wilderness",pronunciation:"uildernes",definition:"Desierto"},{word:"With",pronunciation:"uit",definition:"Con"},{word:"Within",pronunciation:"uit-in",definition:"Dentro"},{word:"Without",pronunciation:"uit-out",definition:"Sin"},{word:"World",pronunciation:"uorld",definition:"Mundo"},{word:"Wave",pronunciation:"ueiv",definition:"Ola - Onda"},{word:"Wound",pronunciation:"wud",definition:"Herida"},{word:"Whether",pronunciation:"ueder",definition:"Si"},{word:"Year",pronunciation:"ier",definition:"Año"},{word:"Yet",pronunciation:"yet",definition:"Todavía"},{word:"Your",pronunciation:"iur",definition:"Su"}],bc=[{word:"Accept",pronunciation:"ak-sept",definition:"Aceptar"},{word:"Access",pronunciation:"ak-ses",definition:"Acceder - Acceso"},{word:"Act",pronunciation:"act",definition:"Actuar, Acto"},{word:"Add",pronunciation:"ad",definition:"Agregar"},{word:"Admire",pronunciation:"edmaier",definition:"Admirar"},{word:"Admire",pronunciation:"edmaier",definition:"Admirar"},{word:"Admit",pronunciation:"edmit",definition:"Admitir"},{word:"Advise",pronunciation:"ed-vais",definition:"Aconsejar"},{word:"Agree",pronunciation:"agri",definition:"Aceptar - Acordar"},{word:"Aim",pronunciation:"eim",definition:"Apuntar"},{word:"Allow",pronunciation:"alau",definition:"Permitir"},{word:"Analyze",pronunciation:"enalais",definition:"Analizar"},{word:"Announce",pronunciation:"anauns",definition:"Anunciar"},{word:"Answer",pronunciation:"enser",definition:"Responder - Respuesta"},{word:"Appear",pronunciation:"apir",definition:"Aparecer"},{word:"Apply",pronunciation:"aplay",definition:"Aplicar"},{word:"Appreciate",pronunciation:"aprishi-eit",definition:"Agradecer"},{word:"Approach",pronunciation:"aproch",definition:"Acercarse"},{word:"Approve",pronunciation:"apruv",definition:"Aprobar"},{word:"Argue",pronunciation:"arruench",definition:"Pactar - Planificar - Organizar"},{word:"Arrive",pronunciation:"",definition:"Llegar"},{word:"Ask",pronunciation:"ask",definition:"Preguntar"},{word:"Assess",pronunciation:"ases",definition:"Evaluar - Analizar"},{word:"Assume",pronunciation:"asum",definition:"Asumir"},{word:"Attach",pronunciation:"atach",definition:"Adjuntar - Añadir"},{word:"Attack",pronunciation:"atak",definition:"Atacar - Ataque"},{word:"Attend",pronunciation:"atend",definition:"Atender - Asistir"},{word:"Attract",pronunciation:"atract",definition:"Atraer"},{word:"Avoid",pronunciation:"avoid",definition:"Evitar"},{word:"Back",pronunciation:"bak",definition:"Regresar - Atras"},{word:"Base",pronunciation:"beis",definition:"Basar - Establecer"},{word:"Belive",pronunciation:"beliv",definition:"Creer"},{word:"Belong",pronunciation:"belong",definition:"Pertenecer"},{word:"Blame",pronunciation:"bleim",definition:"Culpar - Responsabilidad"},{word:"Block",pronunciation:"blok",definition:"Bloquear - Bloque "},{word:"Boil",pronunciation:"boil",definition:"Hervir"},{word:"Borrow",pronunciation:"",definition:"Pedir prestado"},{word:"Bother",pronunciation:"bader",definition:"Molestar"},{word:"Bounce",pronunciation:"bauns",definition:"Rebotar"},{word:"Breathe",pronunciation:"bruid",definition:"Respirar"},{word:"Brush",pronunciation:"brach",definition:"Cepillar"},{word:"Burn",pronunciation:"bern",definition:"Quemar"},{word:"Bury",pronunciation:"",definition:"Enterrar"},{word:"Calculate",pronunciation:"kalkiu-leit",definition:"Calcular"},{word:"Call",pronunciation:"col",definition:"Llamar"},{word:"Calm",pronunciation:"calm",definition:"Calmar - Calma"},{word:"Camp",pronunciation:"camp",definition:"Acampar - Campamento"},{word:"Cancel",pronunciation:"ken-sol",definition:"Cancelar"},{word:"Capture",pronunciation:"cap-cher",definition:"Capturar - Captura"},{word:"Care",pronunciation:"ker",definition:"Cuidar - Cuidado"},{word:"Carry",pronunciation:"kerrui",definition:"Llevar - Portar"},{word:"Cause",pronunciation:"kas",definition:"Causar - Causa - Caso"},{word:"Celebrate",pronunciation:"sele-breit",definition:"Celebrar"},{word:"Challenge",pronunciation:"chalench",definition:"Desafiar"},{word:"Change",pronunciation:"cheinch",definition:"Cambiar"},{word:"Charge",pronunciation:"charch",definition:"Cargar"},{word:"Chase",pronunciation:"cheis",definition:"Perseguir"},{word:"Check",pronunciation:"chek",definition:"Revisar"},{word:"Cheer",pronunciation:"chir",definition:"Animar - Alegría"},{word:"Claim",pronunciation:"cleim",definition:"Reclamar"},{word:"Clarify",pronunciation:"cleri-fai",definition:"Aclarar"},{word:"Clean",pronunciation:"clin",definition:"Limpiar - Limpio"},{word:"Clear ",pronunciation:"clir",definition:"Despejar - Limpio - despejado"},{word:"Climb ",pronunciation:"claim",definition:"Escalar - Trepar"},{word:"Close",pronunciation:"clous",definition:"Cerrar"},{word:"Collect",pronunciation:"colect",definition:"Recolectar - Recoger"},{word:"Comment",pronunciation:"coument",definition:"Comentar - Comentario"},{word:"Communicate",pronunciation:"comiuni-keit",definition:"Comunicarse - Comunicar"},{word:"Compare",pronunciation:"comper",definition:"Comparar"},{word:"Compete",pronunciation:"compit",definition:"Competir"},{word:"Complain",pronunciation:"com-plein",definition:"Quejarse - Queja"},{word:"Complete",pronunciation:"com-plit",definition:"Completar"},{word:"Concentrate",pronunciation:"cansen-trueit",definition:"Concentrarse"},{word:"Conclude",pronunciation:"ken-klud",definition:"Concluir"},{word:"Confess",pronunciation:"ken-fes",definition:"Confesar"},{word:"Confirm",pronunciation:"ken-ferm",definition:"Confirmar"},{word:"Connect",pronunciation:"ke-nect",definition:"Conectar"},{word:"Conserve",pronunciation:"ken-serv",definition:"Conservar"},{word:"Consider",pronunciation:"ken-sider",definition:"Considerar"},{word:"Consist",pronunciation:"ken-sist",definition:"Consistir"},{word:"Construct",pronunciation:"kenstroct",definition:"Construir"},{word:"Consult",pronunciation:"ken-sel",definition:"Consultar"},{word:"Contain",pronunciation:"ken-tein",definition:"Contener"},{word:"Continue",pronunciation:"ken-tiniu",definition:"Continuar"},{word:"Contribute",pronunciation:"ken-truebiut",definition:"Contribuir"},{word:"Convert",pronunciation:"ken-vert",definition:"Convertir"},{word:"Cook",pronunciation:"kuc",definition:"Cocinar"},{word:"Cooperate",pronunciation:"kou-opereit",definition:"Cooperar"},{word:"Copy",pronunciation:"copi",definition:"Copiar"},{word:"Correct",pronunciation:"kerrect",definition:"Corregir - Correcto"},{word:"Cost",pronunciation:"cost",definition:"Costar - Costo"},{word:"Counsel",pronunciation:"kaun-sol",definition:"Aconsejar - Consejo"},{word:"Count",pronunciation:"kaunt",definition:"Contar"},{word:"Cover",pronunciation:"cover",definition:"Cubrir"},{word:"Create",pronunciation:"crieit",definition:"Crear"},{word:"Cross",pronunciation:"cros",definition:"Cruzar - Cruz"},{word:"Cry",pronunciation:"krai",definition:"Llorar"},{word:"Damage",pronunciation:"dameich",definition:"Dañar - Daño"},{word:"Dance",pronunciation:"dans",definition:"Bailar - Danza"},{word:"Dare",pronunciation:"der",definition:"Atreverse - Atrevimiento - Desafiar"},{word:"Date",pronunciation:"deit",definition:"Citar - Cita - Fecha"},{word:"Discuss",pronunciation:"des-cas",definition:"Conversar - Debatir"},{word:"Decide",pronunciation:"desaid",definition:"Decidir"},{word:"Declare",pronunciation:"de-cler",definition:"Declarar"},{word:"Decline",pronunciation:"di-clain",definition:"Rechazar - Declinar - Disminución"},{word:"Decorate",pronunciation:"decoreit",definition:"Decorar"},{word:"Decrease",pronunciation:"de-kruis",definition:"Disminuir"},{word:"Dehydrate",pronunciation:"dijai-dreit",definition:"Deshidratar"},{word:"Delay",pronunciation:"delei",definition:"Retrasar - Posponer - Retraso"},{word:"Delete",pronunciation:"delit",definition:"Eliminar"},{word:"Deliver",pronunciation:"deliver",definition:"Entregar"},{word:"Demand",pronunciation:"demand",definition:"Demandar - Demanda"},{word:"Demonstrate",pronunciation:"demenstreit",definition:"Demostrar"},{word:"Depend",pronunciation:"dipend",definition:"Depender"},{word:"Deploy",pronunciation:"deploy",definition:"Desplegar"},{word:"Describe",pronunciation:"des-craib",definition:"Describir"},{word:"Design",pronunciation:"desain",definition:"Diseñar - Diseño"},{word:"Desire",pronunciation:"desaier",definition:"Desear - Deseo"},{word:"Destroy",pronunciation:"distroy",definition:"Destruir"},{word:"Detect",pronunciation:"detect",definition:"Detectar"},{word:"Develop",pronunciation:"develep",definition:"Desarrollar"},{word:"Dictate",pronunciation:"dicteit",definition:"Dictar"},{word:"Die",pronunciation:"dai",definition:"Morir"},{word:"Direct",pronunciation:"",definition:"Dirigir - Directo"},{word:"Disagree",pronunciation:"dise-gri",definition:"No estar de acuerdo"},{word:"Disappear",pronunciation:"disapir",definition:"Desaparecer"},{word:"Discover",pronunciation:"deskaver",definition:"Descubrir"},{word:"Discuss",pronunciation:"deskas",definition:"Conversar - Discutir"},{word:"Distribute",pronunciation:"destribiut",definition:"Distribuir"},{word:"Distribute",pronunciation:"destribiut",definition:"Distribuir"},{word:"Distribute",pronunciation:"destribiut",definition:"Distribuir"},{word:"Distribute",pronunciation:"destribiut",definition:"Distribuir"},{word:"Dispose",pronunciation:"dispos",definition:"Disponer - Colocar - Resolver"},{word:"Distribute",pronunciation:"destribiut",definition:"Distribuir"},{word:"Dive",pronunciation:"daiv",definition:"Bucear - Sumergirse"},{word:"Divide",pronunciation:"devaid",definition:"Dividir"},{word:"Donate",pronunciation:"doneit",definition:"Donar"},{word:"Doubt",pronunciation:"dout",definition:"Dudar - Duda"},{word:"Download",pronunciation:"daun-loud",definition:"Dudar - Duda"},{word:"Dream",pronunciation:"dru-im",definition:"Soñar - Sueño"},{word:"Dress",pronunciation:"dru-es",definition:"Vertirse - Vestido - Vestir"},{word:"Drill",pronunciation:"druil",definition:"Perforar"},{word:"Drop",pronunciation:"drop",definition:"Dejar caer - caida - descenso - Gota"},{word:"Dry",pronunciation:"dray",definition:"Secar - Seco"},{word:"Earn",pronunciation:"ern",definition:"Obtener - Ganar"},{word:"FIlter",pronunciation:"filter",definition:"Filtrar"},{word:"Fix",pronunciation:"fix",definition:"Reparar"},{word:"Guide",pronunciation:"gaid",definition:"Guiar - Guía"},{word:"Handle",pronunciation:"jendel",definition:"Manejar - Controlar"},{word:"Heat",pronunciation:"jit",definition:"Calentar - Calor"},{word:"Hunt",pronunciation:"jant",definition:"Cazar - Caza"},{word:"Hydrate",pronunciation:"jai-drueit",definition:"Hidratar"},{word:"Improve",pronunciation:"impruf",definition:"Mejorar"},{word:"Increase",pronunciation:"incruis",definition:"Aumentar - Aumento"},{word:"Present",pronunciation:"present",definition:"Presentar"}],bh=[{word:"Can",pronunciation:"can",definition:"Poder"},{word:"Could",pronunciation:"cud",definition:"Podría"},{word:"Will",pronunciation:"uill",definition:"Verbo auxiliar futuro"},{word:"Would",pronunciation:"wud",definition:""},{word:"Should",pronunciation:"shud",definition:"Debería"},{word:"May",pronunciation:"mey",definition:"Puede"},{word:"Might",pronunciation:"mait",definition:""},{word:"Must",pronunciation:"most",definition:"Debe"}];bc.map(e=>e.word.toLowerCase());const em=()=>{const e=[...qh,...bh,...bc];return p.jsxs("div",{className:"home",children:[p.jsx("div",{className:"words_container",children:p.jsxs("div",{className:"titles",children:[p.jsx("span",{children:"Palabra"}),p.jsx("span",{className:"pronunciation_t",children:"Pronunciación"}),p.jsx("span",{className:"meaning",children:"Significado"})]})}),e.map((n,t)=>p.jsx(Lh,{word:n,index:t},t))]})},nm=()=>p.jsx("div",{children:p.jsx("h5",{children:"Introduction"})});const tm=()=>p.jsxs("div",{className:"rules",children:[p.jsxs("div",{className:"rule_container noun",children:[p.jsx("h1",{children:"Sustantivo"}),p.jsx("p",{children:"Son palabras que nombran a personas, animales, cosas, lugares, sentimientos e ideas, ejemplo:"}),p.jsxs("ul",{children:[p.jsxs("li",{children:[p.jsx("span",{children:"-"})," El rey, donde ",p.jsx("span",{children:"rey"})," es el sustantivo al cual podemos asignarle los articulos ",p.jsx("span",{children:"el, un"}),": un rey / el rey."]}),p.jsxs("li",{children:[p.jsx("span",{children:"-"})," Las sillas, donde ",p.jsx("span",{children:"sillas"})," es el sustantivo y ",p.jsx("span",{children:"las"})," un articulo."]})]})]}),p.jsxs("div",{className:"rule_container article",children:[p.jsx("h1",{children:"Artículo"}),p.jsx("p",{children:"Palabra que anuncia la presencia de un sustantivo, ejemplo:"}),p.jsx("ul",{children:p.jsxs("li",{children:[p.jsx("span",{children:"-"})," El auto, donde ",p.jsx("span",{children:"auto"})," es el sustantivo que va acompañado por el artículo ",p.jsx("span",{children:"el"}),"."]})}),p.jsx("h2",{children:"Artículos definidos"}),p.jsx("ul",{children:p.jsxs("li",{children:[p.jsx("span",{children:"-"})," El, la, los, las."]})}),p.jsx("h2",{children:"Artículos indefinidos"}),p.jsx("ul",{children:p.jsxs("li",{children:[p.jsx("span",{children:"-"})," Un, una, unos, unas."]})})]}),p.jsxs("div",{className:"rule_container adjective",children:[p.jsx("h1",{children:"Adjetivo"}),p.jsx("p",{children:"Palabra que acompaña a un sustantivo y describe una cualidad o estado, ejemplo:"}),p.jsx("ul",{children:p.jsxs("li",{children:[p.jsx("span",{children:"-"})," El auto rojo, donde ",p.jsx("span",{children:"rojo"})," es el adjetivo."]})}),p.jsx("ul",{children:p.jsxs("li",{children:["el = artículo ",p.jsx("br",{}),"auto = sustantivo ",p.jsx("br",{}),"rojo = ",p.jsx("span",{children:"adjetivo"})]})}),p.jsx("p",{children:"El adjetivo concuerda en género y número con el sustantivo:"}),p.jsx("ul",{children:p.jsxs("li",{children:[p.jsx("span",{children:"-"})," Avión amarillo."]})})]}),p.jsxs("div",{className:"rule_container preposition",children:[p.jsx("h1",{children:"Preposición"}),p.jsx("p",{children:"Son palabras que unen o relacionan palabras o grupos de palabras, ejemplo:"}),p.jsx("ul",{children:p.jsxs("li",{children:[p.jsx("span",{children:"-"})," la vela está en la mesa, donde ",p.jsx("span",{children:"en"})," es la preposicíon."]})}),p.jsx("ul",{children:p.jsxs("li",{children:["la = artículo ",p.jsx("br",{}),"vela = sustantivo ",p.jsx("br",{}),"está = verbo ",p.jsx("br",{}),"en = ",p.jsx("span",{children:"PREPOSOCÍON"})," ",p.jsx("br",{}),"la = artículo",p.jsx("br",{}),"mesa = sustantivo",p.jsx("br",{})]})}),p.jsx("p",{children:"Otras preposiciones son:"}),p.jsx("ul",{children:p.jsxs("li",{children:[p.jsx("span",{children:"-"})," A, ante, bajo, cabe, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, sobre, tras, versus."]})})]}),p.jsxs("div",{className:"rule_container adverb",children:[p.jsx("h1",{children:"Adverbios"}),p.jsx("p",{children:"Son palabras que no varían en género y número, son invariables y complementan el significado de otras palabras, ejemplo:"}),p.jsxs("ul",{children:[p.jsxs("li",{children:[p.jsx("span",{children:"-"})," Voy mañana, donde ",p.jsx("span",{children:"mañana"})," no varía en género (mañano) ni en número (mañanas)."]}),p.jsxs("li",{children:[p.jsx("span",{children:"-"})," Muy bien, donde ",p.jsx("span",{children:"muy"})," no varía en genero (muya) ni en número (muys)."]})]}),p.jsx("h2",{children:"Adverbios de lugar"}),p.jsx("ul",{children:p.jsxs("li",{children:[p.jsx("span",{children:"-"})," Aquí, allí, ahí, allá, arriba, abajo, cerca, lejos, dentro, fuera, delante, alrededor."]})}),p.jsx("h2",{children:"Adverbios de tiempo"}),p.jsx("ul",{children:p.jsxs("li",{children:[p.jsx("span",{children:"-"})," Hoy, luego, ahora, despues, ayer, mañana, entonces, ahora, antes, tarde, pronto."]})}),p.jsx("h2",{children:"Adverbios de modo"}),p.jsx("ul",{children:p.jsxs("li",{children:[p.jsx("span",{children:"-"})," Bien, mal, así, despacio, deprisa, gratis."]})}),p.jsx("h2",{children:"Adverbios de cantidad"}),p.jsx("ul",{children:p.jsxs("li",{children:[p.jsx("span",{children:"-"})," Mucho, poco, bastante, más, menos, muy, demasiado, casi, medio, nada, algo."]})}),p.jsx("h2",{children:"Adverbios de afirmación"}),p.jsx("ul",{children:p.jsxs("li",{children:[p.jsx("span",{children:"-"})," Sí, claro, ciertamente, también, cierto, efectivamente."]})}),p.jsx("h2",{children:"Adverbios de negación"}),p.jsx("ul",{children:p.jsxs("li",{children:[p.jsx("span",{children:"-"})," No, tampoco, nunca, jamas."]})}),p.jsx("h2",{children:"Adverbios de duda"}),p.jsx("ul",{children:p.jsxs("li",{children:[p.jsx("span",{children:"-"})," Quizás, tal vez, acaso, probablemente."]})})]}),p.jsxs("div",{className:"rule_container conjunction",children:[p.jsx("h1",{children:"Conjunciones"}),p.jsx("p",{children:"Son palabras que unen palabras o grupos de palabras que expresan ideas semejantes, ejemplo:"}),p.jsxs("ul",{children:[p.jsxs("li",{children:[p.jsx("span",{children:"-"})," Rey y reina, donde ",p.jsx("span",{children:"y"})," es la conjunción."]}),p.jsxs("li",{children:["Rey = sustantivo ",p.jsx("br",{}),"y = CONJUNCIÓN ",p.jsx("br",{}),"reina = sustantivo"]})]}),p.jsx("h2",{children:"Copulativas"}),p.jsx("ul",{children:p.jsxs("li",{children:[p.jsx("span",{children:"-"})," y, e, ni."]})}),p.jsx("h2",{children:"Disyuntivas"}),p.jsx("ul",{children:p.jsxs("li",{children:[p.jsx("span",{children:"-"})," o, u."]})}),p.jsx("h2",{children:"Adversativas"}),p.jsx("ul",{children:p.jsxs("li",{children:[p.jsx("span",{children:"-"})," pero, sino."]})})]})]});const rm=()=>p.jsx("div",{className:"header",children:p.jsxs("nav",{className:"nav",children:[p.jsxs("div",{className:"nav_left",children:[p.jsxs("div",{className:"mobile_menu",children:[p.jsx("div",{}),p.jsx("div",{}),p.jsx("div",{})]}),p.jsx("ul",{children:p.jsx("li",{children:p.jsx(_h,{to:"/li/reglas/",children:"Reglas"})})})]}),p.jsx("div",{className:"nav_right"})]})});const im=({children:e})=>p.jsx("div",{children:p.jsxs("div",{className:"layout",children:[p.jsx(rm,{}),e]})});function om(){return p.jsx("div",{className:"app",children:p.jsx(Eh,{children:p.jsx(im,{children:p.jsxs(wh,{children:[p.jsx(Ur,{path:"/li",element:p.jsx(em,{})}),p.jsx(Ur,{path:"/li/introduccion",element:p.jsx(nm,{})}),p.jsx(Ur,{path:"/li/reglas",element:p.jsx(tm,{})})]})})})})}fo.createRoot(document.getElementById("root")).render(p.jsx(om,{}));
