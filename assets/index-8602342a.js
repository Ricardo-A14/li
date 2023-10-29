function id(e,n){for(var t=0;t<n.length;t++){const i=n[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function rd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Eu={exports:{}},mr={},Pu={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ti=Symbol.for("react.element"),od=Symbol.for("react.portal"),ld=Symbol.for("react.fragment"),ad=Symbol.for("react.strict_mode"),ud=Symbol.for("react.profiler"),sd=Symbol.for("react.provider"),cd=Symbol.for("react.context"),dd=Symbol.for("react.forward_ref"),fd=Symbol.for("react.suspense"),pd=Symbol.for("react.memo"),hd=Symbol.for("react.lazy"),ua=Symbol.iterator;function md(e){return e===null||typeof e!="object"?null:(e=ua&&e[ua]||e["@@iterator"],typeof e=="function"?e:null)}var ju={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nu=Object.assign,Ru={};function dt(e,n,t){this.props=e,this.context=n,this.refs=Ru,this.updater=t||ju}dt.prototype.isReactComponent={};dt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};dt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _u(){}_u.prototype=dt.prototype;function ul(e,n,t){this.props=e,this.context=n,this.refs=Ru,this.updater=t||ju}var sl=ul.prototype=new _u;sl.constructor=ul;Nu(sl,dt.prototype);sl.isPureReactComponent=!0;var sa=Array.isArray,Du=Object.prototype.hasOwnProperty,cl={current:null},Au={key:!0,ref:!0,__self:!0,__source:!0};function Lu(e,n,t){var i,r={},o=null,l=null;if(n!=null)for(i in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)Du.call(n,i)&&!Au.hasOwnProperty(i)&&(r[i]=n[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ti,type:e,key:o,ref:l,props:r,_owner:cl.current}}function vd(e,n){return{$$typeof:ti,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function dl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ti}function wd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ca=/\/+/g;function Fr(e,n){return typeof e=="object"&&e!==null&&e.key!=null?wd(""+e.key):n.toString(36)}function Ri(e,n,t,i,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ti:case od:l=!0}}if(l)return l=e,r=r(l),e=i===""?"."+Fr(l,0):i,sa(r)?(t="",e!=null&&(t=e.replace(ca,"$&/")+"/"),Ri(r,n,t,"",function(s){return s})):r!=null&&(dl(r)&&(r=vd(r,t+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(ca,"$&/")+"/")+e)),n.push(r)),1;if(l=0,i=i===""?".":i+":",sa(e))for(var a=0;a<e.length;a++){o=e[a];var u=i+Fr(o,a);l+=Ri(o,n,t,u,r)}else if(u=md(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=i+Fr(o,a++),l+=Ri(o,n,t,u,r);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function di(e,n,t){if(e==null)return e;var i=[],r=0;return Ri(e,i,"","",function(o){return n.call(t,o,r++)}),i}function gd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},_i={transition:null},yd={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:_i,ReactCurrentOwner:cl};L.Children={map:di,forEach:function(e,n,t){di(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return di(e,function(){n++}),n},toArray:function(e){return di(e,function(n){return n})||[]},only:function(e){if(!dl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=dt;L.Fragment=ld;L.Profiler=ud;L.PureComponent=ul;L.StrictMode=ad;L.Suspense=fd;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yd;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Nu({},e.props),r=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=cl.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)Du.call(n,u)&&!Au.hasOwnProperty(u)&&(i[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];i.children=a}return{$$typeof:ti,type:e.type,key:r,ref:o,props:i,_owner:l}};L.createContext=function(e){return e={$$typeof:cd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sd,_context:e},e.Consumer=e};L.createElement=Lu;L.createFactory=function(e){var n=Lu.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:dd,render:e}};L.isValidElement=dl;L.lazy=function(e){return{$$typeof:hd,_payload:{_status:-1,_result:e},_init:gd}};L.memo=function(e,n){return{$$typeof:pd,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=_i.transition;_i.transition={};try{e()}finally{_i.transition=n}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,n){return se.current.useCallback(e,n)};L.useContext=function(e){return se.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return se.current.useDeferredValue(e)};L.useEffect=function(e,n){return se.current.useEffect(e,n)};L.useId=function(){return se.current.useId()};L.useImperativeHandle=function(e,n,t){return se.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return se.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return se.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return se.current.useMemo(e,n)};L.useReducer=function(e,n,t){return se.current.useReducer(e,n,t)};L.useRef=function(e){return se.current.useRef(e)};L.useState=function(e){return se.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return se.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return se.current.useTransition()};L.version="18.2.0";Pu.exports=L;var C=Pu.exports;const kd=rd(C),Sd=id({__proto__:null,default:kd},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd=C,xd=Symbol.for("react.element"),Ed=Symbol.for("react.fragment"),Pd=Object.prototype.hasOwnProperty,jd=Cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nd={key:!0,ref:!0,__self:!0,__source:!0};function Tu(e,n,t){var i,r={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(i in n)Pd.call(n,i)&&!Nd.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps,n)r[i]===void 0&&(r[i]=n[i]);return{$$typeof:xd,type:e,key:o,ref:l,props:r,_owner:jd.current}}mr.Fragment=Ed;mr.jsx=Tu;mr.jsxs=Tu;Eu.exports=mr;var f=Eu.exports,po={},zu={exports:{}},ke={},Mu={exports:{}},Ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(P,D){var A=P.length;P.push(D);e:for(;0<A;){var Q=A-1>>>1,Z=P[Q];if(0<r(Z,D))P[Q]=D,P[A]=Z,A=Q;else break e}}function t(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var D=P[0],A=P.pop();if(A!==D){P[0]=A;e:for(var Q=0,Z=P.length,si=Z>>>1;Q<si;){var kn=2*(Q+1)-1,Ir=P[kn],Sn=kn+1,ci=P[Sn];if(0>r(Ir,A))Sn<Z&&0>r(ci,Ir)?(P[Q]=ci,P[Sn]=A,Q=Sn):(P[Q]=Ir,P[kn]=A,Q=kn);else if(Sn<Z&&0>r(ci,A))P[Q]=ci,P[Sn]=A,Q=Sn;else break e}}return D}function r(P,D){var A=P.sortIndex-D.sortIndex;return A!==0?A:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],h=1,v=null,m=3,k=!1,y=!1,g=!1,R=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var D=t(s);D!==null;){if(D.callback===null)i(s);else if(D.startTime<=P)i(s),D.sortIndex=D.expirationTime,n(u,D);else break;D=t(s)}}function w(P){if(g=!1,p(P),!y)if(t(u)!==null)y=!0,Mr(x);else{var D=t(s);D!==null&&Or(w,D.startTime-P)}}function x(P,D){y=!1,g&&(g=!1,d(_),_=-1),k=!0;var A=m;try{for(p(D),v=t(u);v!==null&&(!(v.expirationTime>D)||P&&!Re());){var Q=v.callback;if(typeof Q=="function"){v.callback=null,m=v.priorityLevel;var Z=Q(v.expirationTime<=D);D=e.unstable_now(),typeof Z=="function"?v.callback=Z:v===t(u)&&i(u),p(D)}else i(u);v=t(u)}if(v!==null)var si=!0;else{var kn=t(s);kn!==null&&Or(w,kn.startTime-D),si=!1}return si}finally{v=null,m=A,k=!1}}var j=!1,N=null,_=-1,$=5,T=-1;function Re(){return!(e.unstable_now()-T<$)}function mt(){if(N!==null){var P=e.unstable_now();T=P;var D=!0;try{D=N(!0,P)}finally{D?vt():(j=!1,N=null)}}else j=!1}var vt;if(typeof c=="function")vt=function(){c(mt)};else if(typeof MessageChannel<"u"){var aa=new MessageChannel,td=aa.port2;aa.port1.onmessage=mt,vt=function(){td.postMessage(null)}}else vt=function(){R(mt,0)};function Mr(P){N=P,j||(j=!0,vt())}function Or(P,D){_=R(function(){P(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||k||(y=!0,Mr(x))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var D=3;break;default:D=m}var A=m;m=D;try{return P()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var A=m;m=P;try{return D()}finally{m=A}},e.unstable_scheduleCallback=function(P,D,A){var Q=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?Q+A:Q):A=Q,P){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=A+Z,P={id:h++,callback:D,priorityLevel:P,startTime:A,expirationTime:Z,sortIndex:-1},A>Q?(P.sortIndex=A,n(s,P),t(u)===null&&P===t(s)&&(g?(d(_),_=-1):g=!0,Or(w,A-Q))):(P.sortIndex=Z,n(u,P),y||k||(y=!0,Mr(x))),P},e.unstable_shouldYield=Re,e.unstable_wrapCallback=function(P){var D=m;return function(){var A=m;m=D;try{return P.apply(this,arguments)}finally{m=A}}}})(Ou);Mu.exports=Ou;var Rd=Mu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu=C,ye=Rd;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fu=new Set,Ft={};function Mn(e,n){rt(e,n),rt(e+"Capture",n)}function rt(e,n){for(Ft[e]=n,e=0;e<n.length;e++)Fu.add(n[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ho=Object.prototype.hasOwnProperty,_d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,da={},fa={};function Dd(e){return ho.call(fa,e)?!0:ho.call(da,e)?!1:_d.test(e)?fa[e]=!0:(da[e]=!0,!1)}function Ad(e,n,t,i){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ld(e,n,t,i){if(n===null||typeof n>"u"||Ad(e,n,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,i,r,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var fl=/[\-:]([a-z])/g;function pl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(fl,pl);te[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(fl,pl);te[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(fl,pl);te[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function hl(e,n,t,i){var r=te.hasOwnProperty(n)?te[n]:null;(r!==null?r.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ld(n,t,r,i)&&(t=null),i||r===null?Dd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,i=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?e.setAttributeNS(i,n,t):e.setAttribute(n,t))))}var Je=Iu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fi=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Wn=Symbol.for("react.fragment"),ml=Symbol.for("react.strict_mode"),mo=Symbol.for("react.profiler"),Bu=Symbol.for("react.provider"),Uu=Symbol.for("react.context"),vl=Symbol.for("react.forward_ref"),vo=Symbol.for("react.suspense"),wo=Symbol.for("react.suspense_list"),wl=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),Wu=Symbol.for("react.offscreen"),pa=Symbol.iterator;function wt(e){return e===null||typeof e!="object"?null:(e=pa&&e[pa]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Br;function Pt(e){if(Br===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Br=n&&n[1]||""}return`
`+Br+e}var Ur=!1;function Wr(e,n){if(!e||Ur)return"";Ur=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var i=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){i=s}e.call(n.prototype)}else{try{throw Error()}catch(s){i=s}e()}}catch(s){if(s&&i&&typeof s.stack=="string"){for(var r=s.stack.split(`
`),o=i.stack.split(`
`),l=r.length-1,a=o.length-1;1<=l&&0<=a&&r[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(r[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||r[l]!==o[a]){var u=`
`+r[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Ur=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Pt(e):""}function Td(e){switch(e.tag){case 5:return Pt(e.type);case 16:return Pt("Lazy");case 13:return Pt("Suspense");case 19:return Pt("SuspenseList");case 0:case 2:case 15:return e=Wr(e.type,!1),e;case 11:return e=Wr(e.type.render,!1),e;case 1:return e=Wr(e.type,!0),e;default:return""}}function go(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wn:return"Fragment";case Un:return"Portal";case mo:return"Profiler";case ml:return"StrictMode";case vo:return"Suspense";case wo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Uu:return(e.displayName||"Context")+".Consumer";case Bu:return(e._context.displayName||"Context")+".Provider";case vl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wl:return n=e.displayName||null,n!==null?n:go(e.type)||"Memo";case qe:n=e._payload,e=e._init;try{return go(e(n))}catch{}}return null}function zd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return go(n);case 8:return n===ml?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Md(e){var n=Vu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pi(e){e._valueTracker||(e._valueTracker=Md(e))}function Hu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=Vu(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function Wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yo(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ha(e,n){var t=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;t=mn(n.value!=null?n.value:t),e._wrapperState={initialChecked:i,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function $u(e,n){n=n.checked,n!=null&&hl(e,"checked",n,!1)}function ko(e,n){$u(e,n);var t=mn(n.value),i=n.type;if(t!=null)i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?So(e,n.type,t):n.hasOwnProperty("defaultValue")&&So(e,n.type,mn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ma(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function So(e,n,t){(n!=="number"||Wi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var jt=Array.isArray;function qn(e,n,t,i){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&i&&(e[t].defaultSelected=!0)}else{for(t=""+mn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Co(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function va(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(jt(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:mn(t)}}function Qu(e,n){var t=mn(n.value),i=mn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),i!=null&&(e.defaultValue=""+i)}function wa(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Gu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Gu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hi,Ku=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,i,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,i,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(hi=hi||document.createElement("div"),hi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=hi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Bt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var _t={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Od=["Webkit","ms","Moz","O"];Object.keys(_t).forEach(function(e){Od.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),_t[n]=_t[e]})});function Yu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||_t.hasOwnProperty(e)&&_t[e]?(""+n).trim():n+"px"}function Xu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Yu(t,n[t],i);t==="float"&&(t="cssFloat"),i?e.setProperty(t,r):e[t]=r}}var Id=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eo(e,n){if(n){if(Id[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function Po(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jo=null;function gl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var No=null,bn=null,et=null;function ga(e){if(e=oi(e)){if(typeof No!="function")throw Error(S(280));var n=e.stateNode;n&&(n=kr(n),No(e.stateNode,e.type,n))}}function Ju(e){bn?et?et.push(e):et=[e]:bn=e}function Zu(){if(bn){var e=bn,n=et;if(et=bn=null,ga(e),n)for(e=0;e<n.length;e++)ga(n[e])}}function qu(e,n){return e(n)}function bu(){}var Vr=!1;function es(e,n,t){if(Vr)return e(n,t);Vr=!0;try{return qu(e,n,t)}finally{Vr=!1,(bn!==null||et!==null)&&(bu(),Zu())}}function Ut(e,n){var t=e.stateNode;if(t===null)return null;var i=kr(t);if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var Ro=!1;if(Ge)try{var gt={};Object.defineProperty(gt,"passive",{get:function(){Ro=!0}}),window.addEventListener("test",gt,gt),window.removeEventListener("test",gt,gt)}catch{Ro=!1}function Fd(e,n,t,i,r,o,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(h){this.onError(h)}}var Dt=!1,Vi=null,Hi=!1,_o=null,Bd={onError:function(e){Dt=!0,Vi=e}};function Ud(e,n,t,i,r,o,l,a,u){Dt=!1,Vi=null,Fd.apply(Bd,arguments)}function Wd(e,n,t,i,r,o,l,a,u){if(Ud.apply(this,arguments),Dt){if(Dt){var s=Vi;Dt=!1,Vi=null}else throw Error(S(198));Hi||(Hi=!0,_o=s)}}function On(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ns(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ya(e){if(On(e)!==e)throw Error(S(188))}function Vd(e){var n=e.alternate;if(!n){if(n=On(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,i=n;;){var r=t.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===t)return ya(r),e;if(o===i)return ya(r),n;o=o.sibling}throw Error(S(188))}if(t.return!==i.return)t=r,i=o;else{for(var l=!1,a=r.child;a;){if(a===t){l=!0,t=r,i=o;break}if(a===i){l=!0,i=r,t=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===t){l=!0,t=o,i=r;break}if(a===i){l=!0,i=o,t=r;break}a=a.sibling}if(!l)throw Error(S(189))}}if(t.alternate!==i)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function ts(e){return e=Vd(e),e!==null?is(e):null}function is(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=is(e);if(n!==null)return n;e=e.sibling}return null}var rs=ye.unstable_scheduleCallback,ka=ye.unstable_cancelCallback,Hd=ye.unstable_shouldYield,$d=ye.unstable_requestPaint,G=ye.unstable_now,Qd=ye.unstable_getCurrentPriorityLevel,yl=ye.unstable_ImmediatePriority,os=ye.unstable_UserBlockingPriority,$i=ye.unstable_NormalPriority,Gd=ye.unstable_LowPriority,ls=ye.unstable_IdlePriority,vr=null,Be=null;function Kd(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(vr,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:Jd,Yd=Math.log,Xd=Math.LN2;function Jd(e){return e>>>=0,e===0?32:31-(Yd(e)/Xd|0)|0}var mi=64,vi=4194304;function Nt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qi(e,n){var t=e.pendingLanes;if(t===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~r;a!==0?i=Nt(a):(o&=l,o!==0&&(i=Nt(o)))}else l=t&~r,l!==0?i=Nt(l):o!==0&&(i=Nt(o));if(i===0)return 0;if(n!==0&&n!==i&&!(n&r)&&(r=i&-i,o=n&-n,r>=o||r===16&&(o&4194240)!==0))return n;if(i&4&&(i|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)t=31-Te(n),r=1<<t,i|=e[t],n&=~r;return i}function Zd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qd(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Te(o),a=1<<l,u=r[l];u===-1?(!(a&t)||a&i)&&(r[l]=Zd(a,n)):u<=n&&(e.expiredLanes|=a),o&=~a}}function Do(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function as(){var e=mi;return mi<<=1,!(mi&4194240)&&(mi=64),e}function Hr(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ii(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Te(n),e[n]=t}function bd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Te(t),o=1<<r;n[r]=0,i[r]=-1,e[r]=-1,t&=~o}}function kl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-Te(t),r=1<<i;r&n|e[i]&n&&(e[i]|=n),t&=~r}}var M=0;function us(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ss,Sl,cs,ds,fs,Ao=!1,wi=[],ln=null,an=null,un=null,Wt=new Map,Vt=new Map,en=[],ef="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sa(e,n){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Wt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vt.delete(n.pointerId)}}function yt(e,n,t,i,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},n!==null&&(n=oi(n),n!==null&&Sl(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function nf(e,n,t,i,r){switch(n){case"focusin":return ln=yt(ln,e,n,t,i,r),!0;case"dragenter":return an=yt(an,e,n,t,i,r),!0;case"mouseover":return un=yt(un,e,n,t,i,r),!0;case"pointerover":var o=r.pointerId;return Wt.set(o,yt(Wt.get(o)||null,e,n,t,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Vt.set(o,yt(Vt.get(o)||null,e,n,t,i,r)),!0}return!1}function ps(e){var n=En(e.target);if(n!==null){var t=On(n);if(t!==null){if(n=t.tag,n===13){if(n=ns(t),n!==null){e.blockedOn=n,fs(e.priority,function(){cs(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Di(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Lo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);jo=i,t.target.dispatchEvent(i),jo=null}else return n=oi(t),n!==null&&Sl(n),e.blockedOn=t,!1;n.shift()}return!0}function Ca(e,n,t){Di(e)&&t.delete(n)}function tf(){Ao=!1,ln!==null&&Di(ln)&&(ln=null),an!==null&&Di(an)&&(an=null),un!==null&&Di(un)&&(un=null),Wt.forEach(Ca),Vt.forEach(Ca)}function kt(e,n){e.blockedOn===n&&(e.blockedOn=null,Ao||(Ao=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,tf)))}function Ht(e){function n(r){return kt(r,e)}if(0<wi.length){kt(wi[0],e);for(var t=1;t<wi.length;t++){var i=wi[t];i.blockedOn===e&&(i.blockedOn=null)}}for(ln!==null&&kt(ln,e),an!==null&&kt(an,e),un!==null&&kt(un,e),Wt.forEach(n),Vt.forEach(n),t=0;t<en.length;t++)i=en[t],i.blockedOn===e&&(i.blockedOn=null);for(;0<en.length&&(t=en[0],t.blockedOn===null);)ps(t),t.blockedOn===null&&en.shift()}var nt=Je.ReactCurrentBatchConfig,Gi=!0;function rf(e,n,t,i){var r=M,o=nt.transition;nt.transition=null;try{M=1,Cl(e,n,t,i)}finally{M=r,nt.transition=o}}function of(e,n,t,i){var r=M,o=nt.transition;nt.transition=null;try{M=4,Cl(e,n,t,i)}finally{M=r,nt.transition=o}}function Cl(e,n,t,i){if(Gi){var r=Lo(e,n,t,i);if(r===null)br(e,n,i,Ki,t),Sa(e,i);else if(nf(r,e,n,t,i))i.stopPropagation();else if(Sa(e,i),n&4&&-1<ef.indexOf(e)){for(;r!==null;){var o=oi(r);if(o!==null&&ss(o),o=Lo(e,n,t,i),o===null&&br(e,n,i,Ki,t),o===r)break;r=o}r!==null&&i.stopPropagation()}else br(e,n,i,null,t)}}var Ki=null;function Lo(e,n,t,i){if(Ki=null,e=gl(i),e=En(e),e!==null)if(n=On(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ns(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ki=e,null}function hs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qd()){case yl:return 1;case os:return 4;case $i:case Gd:return 16;case ls:return 536870912;default:return 16}default:return 16}}var tn=null,xl=null,Ai=null;function ms(){if(Ai)return Ai;var e,n=xl,t=n.length,i,r="value"in tn?tn.value:tn.textContent,o=r.length;for(e=0;e<t&&n[e]===r[e];e++);var l=t-e;for(i=1;i<=l&&n[t-i]===r[o-i];i++);return Ai=r.slice(e,1<i?1-i:void 0)}function Li(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function gi(){return!0}function xa(){return!1}function Se(e){function n(t,i,r,o,l){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?gi:xa,this.isPropagationStopped=xa,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=gi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=gi)},persist:function(){},isPersistent:gi}),n}var ft={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=Se(ft),ri=V({},ft,{view:0,detail:0}),lf=Se(ri),$r,Qr,St,wr=V({},ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==St&&(St&&e.type==="mousemove"?($r=e.screenX-St.screenX,Qr=e.screenY-St.screenY):Qr=$r=0,St=e),$r)},movementY:function(e){return"movementY"in e?e.movementY:Qr}}),Ea=Se(wr),af=V({},wr,{dataTransfer:0}),uf=Se(af),sf=V({},ri,{relatedTarget:0}),Gr=Se(sf),cf=V({},ft,{animationName:0,elapsedTime:0,pseudoElement:0}),df=Se(cf),ff=V({},ft,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pf=Se(ff),hf=V({},ft,{data:0}),Pa=Se(hf),mf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=wf[e])?!!n[e]:!1}function Pl(){return gf}var yf=V({},ri,{key:function(e){if(e.key){var n=mf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pl,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kf=Se(yf),Sf=V({},wr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ja=Se(Sf),Cf=V({},ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pl}),xf=Se(Cf),Ef=V({},ft,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pf=Se(Ef),jf=V({},wr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nf=Se(jf),Rf=[9,13,27,32],jl=Ge&&"CompositionEvent"in window,At=null;Ge&&"documentMode"in document&&(At=document.documentMode);var _f=Ge&&"TextEvent"in window&&!At,vs=Ge&&(!jl||At&&8<At&&11>=At),Na=String.fromCharCode(32),Ra=!1;function ws(e,n){switch(e){case"keyup":return Rf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function Df(e,n){switch(e){case"compositionend":return gs(n);case"keypress":return n.which!==32?null:(Ra=!0,Na);case"textInput":return e=n.data,e===Na&&Ra?null:e;default:return null}}function Af(e,n){if(Vn)return e==="compositionend"||!jl&&ws(e,n)?(e=ms(),Ai=xl=tn=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vs&&n.locale!=="ko"?null:n.data;default:return null}}var Lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _a(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Lf[e.type]:n==="textarea"}function ys(e,n,t,i){Ju(i),n=Yi(n,"onChange"),0<n.length&&(t=new El("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var Lt=null,$t=null;function Tf(e){Ds(e,0)}function gr(e){var n=Qn(e);if(Hu(n))return e}function zf(e,n){if(e==="change")return n}var ks=!1;if(Ge){var Kr;if(Ge){var Yr="oninput"in document;if(!Yr){var Da=document.createElement("div");Da.setAttribute("oninput","return;"),Yr=typeof Da.oninput=="function"}Kr=Yr}else Kr=!1;ks=Kr&&(!document.documentMode||9<document.documentMode)}function Aa(){Lt&&(Lt.detachEvent("onpropertychange",Ss),$t=Lt=null)}function Ss(e){if(e.propertyName==="value"&&gr($t)){var n=[];ys(n,$t,e,gl(e)),es(Tf,n)}}function Mf(e,n,t){e==="focusin"?(Aa(),Lt=n,$t=t,Lt.attachEvent("onpropertychange",Ss)):e==="focusout"&&Aa()}function Of(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gr($t)}function If(e,n){if(e==="click")return gr(n)}function Ff(e,n){if(e==="input"||e==="change")return gr(n)}function Bf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Me=typeof Object.is=="function"?Object.is:Bf;function Qt(e,n){if(Me(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ho.call(n,r)||!Me(e[r],n[r]))return!1}return!0}function La(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ta(e,n){var t=La(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=La(t)}}function Cs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Cs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xs(){for(var e=window,n=Wi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Wi(e.document)}return n}function Nl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Uf(e){var n=xs(),t=e.focusedElem,i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Cs(t.ownerDocument.documentElement,t)){if(i!==null&&Nl(t)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!e.extend&&o>i&&(r=i,i=o,o=r),r=Ta(t,o);var l=Ta(t,i);r&&l&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),o>i?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wf=Ge&&"documentMode"in document&&11>=document.documentMode,Hn=null,To=null,Tt=null,zo=!1;function za(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;zo||Hn==null||Hn!==Wi(i)||(i=Hn,"selectionStart"in i&&Nl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Tt&&Qt(Tt,i)||(Tt=i,i=Yi(To,"onSelect"),0<i.length&&(n=new El("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=Hn)))}function yi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var $n={animationend:yi("Animation","AnimationEnd"),animationiteration:yi("Animation","AnimationIteration"),animationstart:yi("Animation","AnimationStart"),transitionend:yi("Transition","TransitionEnd")},Xr={},Es={};Ge&&(Es=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function yr(e){if(Xr[e])return Xr[e];if(!$n[e])return e;var n=$n[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Es)return Xr[e]=n[t];return e}var Ps=yr("animationend"),js=yr("animationiteration"),Ns=yr("animationstart"),Rs=yr("transitionend"),_s=new Map,Ma="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,n){_s.set(e,n),Mn(n,[e])}for(var Jr=0;Jr<Ma.length;Jr++){var Zr=Ma[Jr],Vf=Zr.toLowerCase(),Hf=Zr[0].toUpperCase()+Zr.slice(1);wn(Vf,"on"+Hf)}wn(Ps,"onAnimationEnd");wn(js,"onAnimationIteration");wn(Ns,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(Rs,"onTransitionEnd");rt("onMouseEnter",["mouseout","mouseover"]);rt("onMouseLeave",["mouseout","mouseover"]);rt("onPointerEnter",["pointerout","pointerover"]);rt("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$f=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rt));function Oa(e,n,t){var i=e.type||"unknown-event";e.currentTarget=t,Wd(i,n,void 0,e),e.currentTarget=null}function Ds(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],r=i.event;i=i.listeners;e:{var o=void 0;if(n)for(var l=i.length-1;0<=l;l--){var a=i[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==o&&r.isPropagationStopped())break e;Oa(r,a,s),o=u}else for(l=0;l<i.length;l++){if(a=i[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==o&&r.isPropagationStopped())break e;Oa(r,a,s),o=u}}}if(Hi)throw e=_o,Hi=!1,_o=null,e}function I(e,n){var t=n[Bo];t===void 0&&(t=n[Bo]=new Set);var i=e+"__bubble";t.has(i)||(As(n,e,2,!1),t.add(i))}function qr(e,n,t){var i=0;n&&(i|=4),As(t,e,i,n)}var ki="_reactListening"+Math.random().toString(36).slice(2);function Gt(e){if(!e[ki]){e[ki]=!0,Fu.forEach(function(t){t!=="selectionchange"&&($f.has(t)||qr(t,!1,e),qr(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ki]||(n[ki]=!0,qr("selectionchange",!1,n))}}function As(e,n,t,i){switch(hs(n)){case 1:var r=rf;break;case 4:r=of;break;default:r=Cl}t=r.bind(null,n,t,e),r=void 0,!Ro||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function br(e,n,t,i,r){var o=i;if(!(n&1)&&!(n&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(l===4)for(l=i.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;l=l.return}for(;a!==null;){if(l=En(a),l===null)return;if(u=l.tag,u===5||u===6){i=o=l;continue e}a=a.parentNode}}i=i.return}es(function(){var s=o,h=gl(t),v=[];e:{var m=_s.get(e);if(m!==void 0){var k=El,y=e;switch(e){case"keypress":if(Li(t)===0)break e;case"keydown":case"keyup":k=kf;break;case"focusin":y="focus",k=Gr;break;case"focusout":y="blur",k=Gr;break;case"beforeblur":case"afterblur":k=Gr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=uf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=xf;break;case Ps:case js:case Ns:k=df;break;case Rs:k=Pf;break;case"scroll":k=lf;break;case"wheel":k=Nf;break;case"copy":case"cut":case"paste":k=pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ja}var g=(n&4)!==0,R=!g&&e==="scroll",d=g?m!==null?m+"Capture":null:m;g=[];for(var c=s,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,d!==null&&(w=Ut(c,d),w!=null&&g.push(Kt(c,w,p)))),R)break;c=c.return}0<g.length&&(m=new k(m,y,null,t,h),v.push({event:m,listeners:g}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",m&&t!==jo&&(y=t.relatedTarget||t.fromElement)&&(En(y)||y[Ke]))break e;if((k||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,k?(y=t.relatedTarget||t.toElement,k=s,y=y?En(y):null,y!==null&&(R=On(y),y!==R||y.tag!==5&&y.tag!==6)&&(y=null)):(k=null,y=s),k!==y)){if(g=Ea,w="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(g=ja,w="onPointerLeave",d="onPointerEnter",c="pointer"),R=k==null?m:Qn(k),p=y==null?m:Qn(y),m=new g(w,c+"leave",k,t,h),m.target=R,m.relatedTarget=p,w=null,En(h)===s&&(g=new g(d,c+"enter",y,t,h),g.target=p,g.relatedTarget=R,w=g),R=w,k&&y)n:{for(g=k,d=y,c=0,p=g;p;p=Bn(p))c++;for(p=0,w=d;w;w=Bn(w))p++;for(;0<c-p;)g=Bn(g),c--;for(;0<p-c;)d=Bn(d),p--;for(;c--;){if(g===d||d!==null&&g===d.alternate)break n;g=Bn(g),d=Bn(d)}g=null}else g=null;k!==null&&Ia(v,m,k,g,!1),y!==null&&R!==null&&Ia(v,R,y,g,!0)}}e:{if(m=s?Qn(s):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var x=zf;else if(_a(m))if(ks)x=Ff;else{x=Of;var j=Mf}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(x=If);if(x&&(x=x(e,s))){ys(v,x,t,h);break e}j&&j(e,m,s),e==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&So(m,"number",m.value)}switch(j=s?Qn(s):window,e){case"focusin":(_a(j)||j.contentEditable==="true")&&(Hn=j,To=s,Tt=null);break;case"focusout":Tt=To=Hn=null;break;case"mousedown":zo=!0;break;case"contextmenu":case"mouseup":case"dragend":zo=!1,za(v,t,h);break;case"selectionchange":if(Wf)break;case"keydown":case"keyup":za(v,t,h)}var N;if(jl)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Vn?ws(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(vs&&t.locale!=="ko"&&(Vn||_!=="onCompositionStart"?_==="onCompositionEnd"&&Vn&&(N=ms()):(tn=h,xl="value"in tn?tn.value:tn.textContent,Vn=!0)),j=Yi(s,_),0<j.length&&(_=new Pa(_,e,null,t,h),v.push({event:_,listeners:j}),N?_.data=N:(N=gs(t),N!==null&&(_.data=N)))),(N=_f?Df(e,t):Af(e,t))&&(s=Yi(s,"onBeforeInput"),0<s.length&&(h=new Pa("onBeforeInput","beforeinput",null,t,h),v.push({event:h,listeners:s}),h.data=N))}Ds(v,n)})}function Kt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Yi(e,n){for(var t=n+"Capture",i=[];e!==null;){var r=e,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ut(e,t),o!=null&&i.unshift(Kt(e,o,r)),o=Ut(e,n),o!=null&&i.push(Kt(e,o,r))),e=e.return}return i}function Bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ia(e,n,t,i,r){for(var o=n._reactName,l=[];t!==null&&t!==i;){var a=t,u=a.alternate,s=a.stateNode;if(u!==null&&u===i)break;a.tag===5&&s!==null&&(a=s,r?(u=Ut(t,o),u!=null&&l.unshift(Kt(t,u,a))):r||(u=Ut(t,o),u!=null&&l.push(Kt(t,u,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Qf=/\r\n?/g,Gf=/\u0000|\uFFFD/g;function Fa(e){return(typeof e=="string"?e:""+e).replace(Qf,`
`).replace(Gf,"")}function Si(e,n,t){if(n=Fa(n),Fa(e)!==n&&t)throw Error(S(425))}function Xi(){}var Mo=null,Oo=null;function Io(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Fo=typeof setTimeout=="function"?setTimeout:void 0,Kf=typeof clearTimeout=="function"?clearTimeout:void 0,Ba=typeof Promise=="function"?Promise:void 0,Yf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ba<"u"?function(e){return Ba.resolve(null).then(e).catch(Xf)}:Fo;function Xf(e){setTimeout(function(){throw e})}function eo(e,n){var t=n,i=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){e.removeChild(r),Ht(n);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ht(n)}function sn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ua(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var pt=Math.random().toString(36).slice(2),Fe="__reactFiber$"+pt,Yt="__reactProps$"+pt,Ke="__reactContainer$"+pt,Bo="__reactEvents$"+pt,Jf="__reactListeners$"+pt,Zf="__reactHandles$"+pt;function En(e){var n=e[Fe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ke]||t[Fe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ua(e);e!==null;){if(t=e[Fe])return t;e=Ua(e)}return n}e=t,t=e.parentNode}return null}function oi(e){return e=e[Fe]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function kr(e){return e[Yt]||null}var Uo=[],Gn=-1;function gn(e){return{current:e}}function F(e){0>Gn||(e.current=Uo[Gn],Uo[Gn]=null,Gn--)}function O(e,n){Gn++,Uo[Gn]=e.current,e.current=n}var vn={},le=gn(vn),pe=gn(!1),Dn=vn;function ot(e,n){var t=e.type.contextTypes;if(!t)return vn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in t)r[o]=n[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function he(e){return e=e.childContextTypes,e!=null}function Ji(){F(pe),F(le)}function Wa(e,n,t){if(le.current!==vn)throw Error(S(168));O(le,n),O(pe,t)}function Ls(e,n,t){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in n))throw Error(S(108,zd(e)||"Unknown",r));return V({},t,i)}function Zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,Dn=le.current,O(le,e),O(pe,pe.current),!0}function Va(e,n,t){var i=e.stateNode;if(!i)throw Error(S(169));t?(e=Ls(e,n,Dn),i.__reactInternalMemoizedMergedChildContext=e,F(pe),F(le),O(le,e)):F(pe),O(pe,t)}var Ve=null,Sr=!1,no=!1;function Ts(e){Ve===null?Ve=[e]:Ve.push(e)}function qf(e){Sr=!0,Ts(e)}function yn(){if(!no&&Ve!==null){no=!0;var e=0,n=M;try{var t=Ve;for(M=1;e<t.length;e++){var i=t[e];do i=i(!0);while(i!==null)}Ve=null,Sr=!1}catch(r){throw Ve!==null&&(Ve=Ve.slice(e+1)),rs(yl,yn),r}finally{M=n,no=!1}}return null}var Kn=[],Yn=0,qi=null,bi=0,Ce=[],xe=0,An=null,He=1,$e="";function Cn(e,n){Kn[Yn++]=bi,Kn[Yn++]=qi,qi=e,bi=n}function zs(e,n,t){Ce[xe++]=He,Ce[xe++]=$e,Ce[xe++]=An,An=e;var i=He;e=$e;var r=32-Te(i)-1;i&=~(1<<r),t+=1;var o=32-Te(n)+r;if(30<o){var l=r-r%5;o=(i&(1<<l)-1).toString(32),i>>=l,r-=l,He=1<<32-Te(n)+r|t<<r|i,$e=o+e}else He=1<<o|t<<r|i,$e=e}function Rl(e){e.return!==null&&(Cn(e,1),zs(e,1,0))}function _l(e){for(;e===qi;)qi=Kn[--Yn],Kn[Yn]=null,bi=Kn[--Yn],Kn[Yn]=null;for(;e===An;)An=Ce[--xe],Ce[xe]=null,$e=Ce[--xe],Ce[xe]=null,He=Ce[--xe],Ce[xe]=null}var ge=null,we=null,B=!1,Le=null;function Ms(e,n){var t=Ee(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ha(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ge=e,we=sn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ge=e,we=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=An!==null?{id:He,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ee(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ge=e,we=null,!0):!1;default:return!1}}function Wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vo(e){if(B){var n=we;if(n){var t=n;if(!Ha(e,n)){if(Wo(e))throw Error(S(418));n=sn(t.nextSibling);var i=ge;n&&Ha(e,n)?Ms(i,t):(e.flags=e.flags&-4097|2,B=!1,ge=e)}}else{if(Wo(e))throw Error(S(418));e.flags=e.flags&-4097|2,B=!1,ge=e}}}function $a(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function Ci(e){if(e!==ge)return!1;if(!B)return $a(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Io(e.type,e.memoizedProps)),n&&(n=we)){if(Wo(e))throw Os(),Error(S(418));for(;n;)Ms(e,n),n=sn(n.nextSibling)}if($a(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){we=sn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}we=null}}else we=ge?sn(e.stateNode.nextSibling):null;return!0}function Os(){for(var e=we;e;)e=sn(e.nextSibling)}function lt(){we=ge=null,B=!1}function Dl(e){Le===null?Le=[e]:Le.push(e)}var bf=Je.ReactCurrentBatchConfig;function De(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var er=gn(null),nr=null,Xn=null,Al=null;function Ll(){Al=Xn=nr=null}function Tl(e){var n=er.current;F(er),e._currentValue=n}function Ho(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function tt(e,n){nr=e,Al=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(fe=!0),e.firstContext=null)}function je(e){var n=e._currentValue;if(Al!==e)if(e={context:e,memoizedValue:n,next:null},Xn===null){if(nr===null)throw Error(S(308));Xn=e,nr.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return n}var Pn=null;function zl(e){Pn===null?Pn=[e]:Pn.push(e)}function Is(e,n,t,i){var r=n.interleaved;return r===null?(t.next=t,zl(n)):(t.next=r.next,r.next=t),n.interleaved=t,Ye(e,i)}function Ye(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var be=!1;function Ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fs(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function cn(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,z&2){var r=i.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n,Ye(e,t)}return r=i.interleaved,r===null?(n.next=n,zl(i)):(n.next=r.next,r.next=n),i.interleaved=n,Ye(e,t)}function Ti(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,kl(e,t)}}function Qa(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?r=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?r=o=n:o=o.next=n}else r=o=n;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function tr(e,n,t,i){var r=e.updateQueue;be=!1;var o=r.firstBaseUpdate,l=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?o=s:l.next=s,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=s:a.next=s,h.lastBaseUpdate=u))}if(o!==null){var v=r.baseState;l=0,h=s=u=null,a=o;do{var m=a.lane,k=a.eventTime;if((i&m)===m){h!==null&&(h=h.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,g=a;switch(m=n,k=t,g.tag){case 1:if(y=g.payload,typeof y=="function"){v=y.call(k,v,m);break e}v=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,m=typeof y=="function"?y.call(k,v,m):y,m==null)break e;v=V({},v,m);break e;case 2:be=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=r.effects,m===null?r.effects=[a]:m.push(a))}else k={eventTime:k,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(s=h=k,u=v):h=h.next=k,l|=m;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;m=a,a=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(1);if(h===null&&(u=v),r.baseState=u,r.firstBaseUpdate=s,r.lastBaseUpdate=h,n=r.shared.interleaved,n!==null){r=n;do l|=r.lane,r=r.next;while(r!==n)}else o===null&&(r.shared.lanes=0);Tn|=l,e.lanes=l,e.memoizedState=v}}function Ga(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(S(191,r));r.call(i)}}}var Bs=new Iu.Component().refs;function $o(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Cr={isMounted:function(e){return(e=e._reactInternals)?On(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var i=ue(),r=fn(e),o=Qe(i,r);o.payload=n,t!=null&&(o.callback=t),n=cn(e,o,r),n!==null&&(ze(n,e,r,i),Ti(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=ue(),r=fn(e),o=Qe(i,r);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=cn(e,o,r),n!==null&&(ze(n,e,r,i),Ti(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ue(),i=fn(e),r=Qe(t,i);r.tag=2,n!=null&&(r.callback=n),n=cn(e,r,i),n!==null&&(ze(n,e,i,t),Ti(n,e,i))}};function Ka(e,n,t,i,r,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,l):n.prototype&&n.prototype.isPureReactComponent?!Qt(t,i)||!Qt(r,o):!0}function Us(e,n,t){var i=!1,r=vn,o=n.contextType;return typeof o=="object"&&o!==null?o=je(o):(r=he(n)?Dn:le.current,i=n.contextTypes,o=(i=i!=null)?ot(e,r):vn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Cr,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),n}function Ya(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&Cr.enqueueReplaceState(n,n.state,null)}function Qo(e,n,t,i){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs=Bs,Ml(e);var o=n.contextType;typeof o=="object"&&o!==null?r.context=je(o):(o=he(n)?Dn:le.current,r.context=ot(e,o)),r.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&($o(e,n,o,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&Cr.enqueueReplaceState(r,r.state,null),tr(e,t,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Ct(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var i=t.stateNode}if(!i)throw Error(S(147,e));var r=i,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var a=r.refs;a===Bs&&(a=r.refs={}),l===null?delete a[o]:a[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function xi(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Xa(e){var n=e._init;return n(e._payload)}function Ws(e){function n(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function i(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function r(d,c){return d=pn(d,c),d.index=0,d.sibling=null,d}function o(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,p,w){return c===null||c.tag!==6?(c=uo(p,d.mode,w),c.return=d,c):(c=r(c,p),c.return=d,c)}function u(d,c,p,w){var x=p.type;return x===Wn?h(d,c,p.props.children,w,p.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===qe&&Xa(x)===c.type)?(w=r(c,p.props),w.ref=Ct(d,c,p),w.return=d,w):(w=Bi(p.type,p.key,p.props,null,d.mode,w),w.ref=Ct(d,c,p),w.return=d,w)}function s(d,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=so(p,d.mode,w),c.return=d,c):(c=r(c,p.children||[]),c.return=d,c)}function h(d,c,p,w,x){return c===null||c.tag!==7?(c=_n(p,d.mode,w,x),c.return=d,c):(c=r(c,p),c.return=d,c)}function v(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=uo(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case fi:return p=Bi(c.type,c.key,c.props,null,d.mode,p),p.ref=Ct(d,null,c),p.return=d,p;case Un:return c=so(c,d.mode,p),c.return=d,c;case qe:var w=c._init;return v(d,w(c._payload),p)}if(jt(c)||wt(c))return c=_n(c,d.mode,p,null),c.return=d,c;xi(d,c)}return null}function m(d,c,p,w){var x=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return x!==null?null:a(d,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case fi:return p.key===x?u(d,c,p,w):null;case Un:return p.key===x?s(d,c,p,w):null;case qe:return x=p._init,m(d,c,x(p._payload),w)}if(jt(p)||wt(p))return x!==null?null:h(d,c,p,w,null);xi(d,p)}return null}function k(d,c,p,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(p)||null,a(c,d,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fi:return d=d.get(w.key===null?p:w.key)||null,u(c,d,w,x);case Un:return d=d.get(w.key===null?p:w.key)||null,s(c,d,w,x);case qe:var j=w._init;return k(d,c,p,j(w._payload),x)}if(jt(w)||wt(w))return d=d.get(p)||null,h(c,d,w,x,null);xi(c,w)}return null}function y(d,c,p,w){for(var x=null,j=null,N=c,_=c=0,$=null;N!==null&&_<p.length;_++){N.index>_?($=N,N=null):$=N.sibling;var T=m(d,N,p[_],w);if(T===null){N===null&&(N=$);break}e&&N&&T.alternate===null&&n(d,N),c=o(T,c,_),j===null?x=T:j.sibling=T,j=T,N=$}if(_===p.length)return t(d,N),B&&Cn(d,_),x;if(N===null){for(;_<p.length;_++)N=v(d,p[_],w),N!==null&&(c=o(N,c,_),j===null?x=N:j.sibling=N,j=N);return B&&Cn(d,_),x}for(N=i(d,N);_<p.length;_++)$=k(N,d,_,p[_],w),$!==null&&(e&&$.alternate!==null&&N.delete($.key===null?_:$.key),c=o($,c,_),j===null?x=$:j.sibling=$,j=$);return e&&N.forEach(function(Re){return n(d,Re)}),B&&Cn(d,_),x}function g(d,c,p,w){var x=wt(p);if(typeof x!="function")throw Error(S(150));if(p=x.call(p),p==null)throw Error(S(151));for(var j=x=null,N=c,_=c=0,$=null,T=p.next();N!==null&&!T.done;_++,T=p.next()){N.index>_?($=N,N=null):$=N.sibling;var Re=m(d,N,T.value,w);if(Re===null){N===null&&(N=$);break}e&&N&&Re.alternate===null&&n(d,N),c=o(Re,c,_),j===null?x=Re:j.sibling=Re,j=Re,N=$}if(T.done)return t(d,N),B&&Cn(d,_),x;if(N===null){for(;!T.done;_++,T=p.next())T=v(d,T.value,w),T!==null&&(c=o(T,c,_),j===null?x=T:j.sibling=T,j=T);return B&&Cn(d,_),x}for(N=i(d,N);!T.done;_++,T=p.next())T=k(N,d,_,T.value,w),T!==null&&(e&&T.alternate!==null&&N.delete(T.key===null?_:T.key),c=o(T,c,_),j===null?x=T:j.sibling=T,j=T);return e&&N.forEach(function(mt){return n(d,mt)}),B&&Cn(d,_),x}function R(d,c,p,w){if(typeof p=="object"&&p!==null&&p.type===Wn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case fi:e:{for(var x=p.key,j=c;j!==null;){if(j.key===x){if(x=p.type,x===Wn){if(j.tag===7){t(d,j.sibling),c=r(j,p.props.children),c.return=d,d=c;break e}}else if(j.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===qe&&Xa(x)===j.type){t(d,j.sibling),c=r(j,p.props),c.ref=Ct(d,j,p),c.return=d,d=c;break e}t(d,j);break}else n(d,j);j=j.sibling}p.type===Wn?(c=_n(p.props.children,d.mode,w,p.key),c.return=d,d=c):(w=Bi(p.type,p.key,p.props,null,d.mode,w),w.ref=Ct(d,c,p),w.return=d,d=w)}return l(d);case Un:e:{for(j=p.key;c!==null;){if(c.key===j)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(d,c.sibling),c=r(c,p.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=so(p,d.mode,w),c.return=d,d=c}return l(d);case qe:return j=p._init,R(d,c,j(p._payload),w)}if(jt(p))return y(d,c,p,w);if(wt(p))return g(d,c,p,w);xi(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(t(d,c.sibling),c=r(c,p),c.return=d,d=c):(t(d,c),c=uo(p,d.mode,w),c.return=d,d=c),l(d)):t(d,c)}return R}var at=Ws(!0),Vs=Ws(!1),li={},Ue=gn(li),Xt=gn(li),Jt=gn(li);function jn(e){if(e===li)throw Error(S(174));return e}function Ol(e,n){switch(O(Jt,n),O(Xt,e),O(Ue,li),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:xo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=xo(n,e)}F(Ue),O(Ue,n)}function ut(){F(Ue),F(Xt),F(Jt)}function Hs(e){jn(Jt.current);var n=jn(Ue.current),t=xo(n,e.type);n!==t&&(O(Xt,e),O(Ue,t))}function Il(e){Xt.current===e&&(F(Ue),F(Xt))}var U=gn(0);function ir(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var to=[];function Fl(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var zi=Je.ReactCurrentDispatcher,io=Je.ReactCurrentBatchConfig,Ln=0,W=null,X=null,q=null,rr=!1,zt=!1,Zt=0,ep=0;function ie(){throw Error(S(321))}function Bl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Me(e[t],n[t]))return!1;return!0}function Ul(e,n,t,i,r,o){if(Ln=o,W=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,zi.current=e===null||e.memoizedState===null?rp:op,e=t(i,r),zt){o=0;do{if(zt=!1,Zt=0,25<=o)throw Error(S(301));o+=1,q=X=null,n.updateQueue=null,zi.current=lp,e=t(i,r)}while(zt)}if(zi.current=or,n=X!==null&&X.next!==null,Ln=0,q=X=W=null,rr=!1,n)throw Error(S(300));return e}function Wl(){var e=Zt!==0;return Zt=0,e}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?W.memoizedState=q=e:q=q.next=e,q}function Ne(){if(X===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=q===null?W.memoizedState:q.next;if(n!==null)q=n,X=e;else{if(e===null)throw Error(S(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},q===null?W.memoizedState=q=e:q=q.next=e}return q}function qt(e,n){return typeof n=="function"?n(e):n}function ro(e){var n=Ne(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var i=X,r=i.baseQueue,o=t.pending;if(o!==null){if(r!==null){var l=r.next;r.next=o.next,o.next=l}i.baseQueue=r=o,t.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=l=null,u=null,s=o;do{var h=s.lane;if((Ln&h)===h)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),i=s.hasEagerState?s.eagerState:e(i,s.action);else{var v={lane:h,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=v,l=i):u=u.next=v,W.lanes|=h,Tn|=h}s=s.next}while(s!==null&&s!==o);u===null?l=i:u.next=a,Me(i,n.memoizedState)||(fe=!0),n.memoizedState=i,n.baseState=l,n.baseQueue=u,t.lastRenderedState=i}if(e=t.interleaved,e!==null){r=e;do o=r.lane,W.lanes|=o,Tn|=o,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function oo(e){var n=Ne(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var i=t.dispatch,r=t.pending,o=n.memoizedState;if(r!==null){t.pending=null;var l=r=r.next;do o=e(o,l.action),l=l.next;while(l!==r);Me(o,n.memoizedState)||(fe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,i]}function $s(){}function Qs(e,n){var t=W,i=Ne(),r=n(),o=!Me(i.memoizedState,r);if(o&&(i.memoizedState=r,fe=!0),i=i.queue,Vl(Ys.bind(null,t,i,e),[e]),i.getSnapshot!==n||o||q!==null&&q.memoizedState.tag&1){if(t.flags|=2048,bt(9,Ks.bind(null,t,i,r,n),void 0,null),b===null)throw Error(S(349));Ln&30||Gs(t,n,r)}return r}function Gs(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ks(e,n,t,i){n.value=t,n.getSnapshot=i,Xs(n)&&Js(e)}function Ys(e,n,t){return t(function(){Xs(n)&&Js(e)})}function Xs(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Me(e,t)}catch{return!0}}function Js(e){var n=Ye(e,1);n!==null&&ze(n,e,1,-1)}function Ja(e){var n=Ie();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},n.queue=e,e=e.dispatch=ip.bind(null,W,e),[n.memoizedState,e]}function bt(e,n,t,i){return e={tag:e,create:n,destroy:t,deps:i,next:null},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e)),e}function Zs(){return Ne().memoizedState}function Mi(e,n,t,i){var r=Ie();W.flags|=e,r.memoizedState=bt(1|n,t,void 0,i===void 0?null:i)}function xr(e,n,t,i){var r=Ne();i=i===void 0?null:i;var o=void 0;if(X!==null){var l=X.memoizedState;if(o=l.destroy,i!==null&&Bl(i,l.deps)){r.memoizedState=bt(n,t,o,i);return}}W.flags|=e,r.memoizedState=bt(1|n,t,o,i)}function Za(e,n){return Mi(8390656,8,e,n)}function Vl(e,n){return xr(2048,8,e,n)}function qs(e,n){return xr(4,2,e,n)}function bs(e,n){return xr(4,4,e,n)}function ec(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function nc(e,n,t){return t=t!=null?t.concat([e]):null,xr(4,4,ec.bind(null,n,e),t)}function Hl(){}function tc(e,n){var t=Ne();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&Bl(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function ic(e,n){var t=Ne();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&Bl(n,i[1])?i[0]:(e=e(),t.memoizedState=[e,n],e)}function rc(e,n,t){return Ln&21?(Me(t,n)||(t=as(),W.lanes|=t,Tn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=t)}function np(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var i=io.transition;io.transition={};try{e(!1),n()}finally{M=t,io.transition=i}}function oc(){return Ne().memoizedState}function tp(e,n,t){var i=fn(e);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},lc(e))ac(n,t);else if(t=Is(e,n,t,i),t!==null){var r=ue();ze(t,e,i,r),uc(t,n,i)}}function ip(e,n,t){var i=fn(e),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(lc(e))ac(n,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,a=o(l,t);if(r.hasEagerState=!0,r.eagerState=a,Me(a,l)){var u=n.interleaved;u===null?(r.next=r,zl(n)):(r.next=u.next,u.next=r),n.interleaved=r;return}}catch{}finally{}t=Is(e,n,r,i),t!==null&&(r=ue(),ze(t,e,i,r),uc(t,n,i))}}function lc(e){var n=e.alternate;return e===W||n!==null&&n===W}function ac(e,n){zt=rr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function uc(e,n,t){if(t&4194240){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,kl(e,t)}}var or={readContext:je,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},rp={readContext:je,useCallback:function(e,n){return Ie().memoizedState=[e,n===void 0?null:n],e},useContext:je,useEffect:Za,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Mi(4194308,4,ec.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Mi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Mi(4,2,e,n)},useMemo:function(e,n){var t=Ie();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var i=Ie();return n=t!==void 0?t(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=tp.bind(null,W,e),[i.memoizedState,e]},useRef:function(e){var n=Ie();return e={current:e},n.memoizedState=e},useState:Ja,useDebugValue:Hl,useDeferredValue:function(e){return Ie().memoizedState=e},useTransition:function(){var e=Ja(!1),n=e[0];return e=np.bind(null,e[1]),Ie().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var i=W,r=Ie();if(B){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),b===null)throw Error(S(349));Ln&30||Gs(i,n,t)}r.memoizedState=t;var o={value:t,getSnapshot:n};return r.queue=o,Za(Ys.bind(null,i,o,e),[e]),i.flags|=2048,bt(9,Ks.bind(null,i,o,t,n),void 0,null),t},useId:function(){var e=Ie(),n=b.identifierPrefix;if(B){var t=$e,i=He;t=(i&~(1<<32-Te(i)-1)).toString(32)+t,n=":"+n+"R"+t,t=Zt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=ep++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},op={readContext:je,useCallback:tc,useContext:je,useEffect:Vl,useImperativeHandle:nc,useInsertionEffect:qs,useLayoutEffect:bs,useMemo:ic,useReducer:ro,useRef:Zs,useState:function(){return ro(qt)},useDebugValue:Hl,useDeferredValue:function(e){var n=Ne();return rc(n,X.memoizedState,e)},useTransition:function(){var e=ro(qt)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:$s,useSyncExternalStore:Qs,useId:oc,unstable_isNewReconciler:!1},lp={readContext:je,useCallback:tc,useContext:je,useEffect:Vl,useImperativeHandle:nc,useInsertionEffect:qs,useLayoutEffect:bs,useMemo:ic,useReducer:oo,useRef:Zs,useState:function(){return oo(qt)},useDebugValue:Hl,useDeferredValue:function(e){var n=Ne();return X===null?n.memoizedState=e:rc(n,X.memoizedState,e)},useTransition:function(){var e=oo(qt)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:$s,useSyncExternalStore:Qs,useId:oc,unstable_isNewReconciler:!1};function st(e,n){try{var t="",i=n;do t+=Td(i),i=i.return;while(i);var r=t}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:r,digest:null}}function lo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Go(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ap=typeof WeakMap=="function"?WeakMap:Map;function sc(e,n,t){t=Qe(-1,t),t.tag=3,t.payload={element:null};var i=n.value;return t.callback=function(){ar||(ar=!0,tl=i),Go(e,n)},t}function cc(e,n,t){t=Qe(-1,t),t.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;t.payload=function(){return i(r)},t.callback=function(){Go(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Go(e,n),typeof i!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function qa(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new ap;var r=new Set;i.set(n,r)}else r=i.get(n),r===void 0&&(r=new Set,i.set(n,r));r.has(t)||(r.add(t),e=Sp.bind(null,e,n,t),n.then(e,e))}function ba(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function eu(e,n,t,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Qe(-1,1),n.tag=2,cn(t,n,1))),t.lanes|=1),e)}var up=Je.ReactCurrentOwner,fe=!1;function ae(e,n,t,i){n.child=e===null?Vs(n,null,t,i):at(n,e.child,t,i)}function nu(e,n,t,i,r){t=t.render;var o=n.ref;return tt(n,r),i=Ul(e,n,t,i,o,r),t=Wl(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Xe(e,n,r)):(B&&t&&Rl(n),n.flags|=1,ae(e,n,i,r),n.child)}function tu(e,n,t,i,r){if(e===null){var o=t.type;return typeof o=="function"&&!Zl(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,dc(e,n,o,i,r)):(e=Bi(t.type,null,i,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&r)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:Qt,t(l,i)&&e.ref===n.ref)return Xe(e,n,r)}return n.flags|=1,e=pn(o,i),e.ref=n.ref,e.return=n,n.child=e}function dc(e,n,t,i,r){if(e!==null){var o=e.memoizedProps;if(Qt(o,i)&&e.ref===n.ref)if(fe=!1,n.pendingProps=i=o,(e.lanes&r)!==0)e.flags&131072&&(fe=!0);else return n.lanes=e.lanes,Xe(e,n,r)}return Ko(e,n,t,i,r)}function fc(e,n,t){var i=n.pendingProps,r=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Zn,ve),ve|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,O(Zn,ve),ve|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:t,O(Zn,ve),ve|=i}else o!==null?(i=o.baseLanes|t,n.memoizedState=null):i=t,O(Zn,ve),ve|=i;return ae(e,n,r,t),n.child}function pc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ko(e,n,t,i,r){var o=he(t)?Dn:le.current;return o=ot(n,o),tt(n,r),t=Ul(e,n,t,i,o,r),i=Wl(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Xe(e,n,r)):(B&&i&&Rl(n),n.flags|=1,ae(e,n,t,r),n.child)}function iu(e,n,t,i,r){if(he(t)){var o=!0;Zi(n)}else o=!1;if(tt(n,r),n.stateNode===null)Oi(e,n),Us(n,t,i),Qo(n,t,i,r),i=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var u=l.context,s=t.contextType;typeof s=="object"&&s!==null?s=je(s):(s=he(t)?Dn:le.current,s=ot(n,s));var h=t.getDerivedStateFromProps,v=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==i||u!==s)&&Ya(n,l,i,s),be=!1;var m=n.memoizedState;l.state=m,tr(n,i,l,r),u=n.memoizedState,a!==i||m!==u||pe.current||be?(typeof h=="function"&&($o(n,t,h,i),u=n.memoizedState),(a=be||Ka(n,t,a,i,m,u,s))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=u),l.props=i,l.state=u,l.context=s,i=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{l=n.stateNode,Fs(e,n),a=n.memoizedProps,s=n.type===n.elementType?a:De(n.type,a),l.props=s,v=n.pendingProps,m=l.context,u=t.contextType,typeof u=="object"&&u!==null?u=je(u):(u=he(t)?Dn:le.current,u=ot(n,u));var k=t.getDerivedStateFromProps;(h=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==v||m!==u)&&Ya(n,l,i,u),be=!1,m=n.memoizedState,l.state=m,tr(n,i,l,r);var y=n.memoizedState;a!==v||m!==y||pe.current||be?(typeof k=="function"&&($o(n,t,k,i),y=n.memoizedState),(s=be||Ka(n,t,s,i,m,y,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,y,u)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=y),l.props=i,l.state=y,l.context=u,i=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),i=!1)}return Yo(e,n,t,i,o,r)}function Yo(e,n,t,i,r,o){pc(e,n);var l=(n.flags&128)!==0;if(!i&&!l)return r&&Va(n,t,!1),Xe(e,n,o);i=n.stateNode,up.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&l?(n.child=at(n,e.child,null,o),n.child=at(n,null,a,o)):ae(e,n,a,o),n.memoizedState=i.state,r&&Va(n,t,!0),n.child}function hc(e){var n=e.stateNode;n.pendingContext?Wa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Wa(e,n.context,!1),Ol(e,n.containerInfo)}function ru(e,n,t,i,r){return lt(),Dl(r),n.flags|=256,ae(e,n,t,i),n.child}var Xo={dehydrated:null,treeContext:null,retryLane:0};function Jo(e){return{baseLanes:e,cachePool:null,transitions:null}}function mc(e,n,t){var i=n.pendingProps,r=U.current,o=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),O(U,r&1),e===null)return Vo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=i.children,e=i.fallback,o?(i=n.mode,o=n.child,l={mode:"hidden",children:l},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=jr(l,i,0,null),e=_n(e,i,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Jo(t),n.memoizedState=Xo,e):$l(n,l));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return sp(e,n,l,i,a,r,t);if(o){o=i.fallback,l=n.mode,r=e.child,a=r.sibling;var u={mode:"hidden",children:i.children};return!(l&1)&&n.child!==r?(i=n.child,i.childLanes=0,i.pendingProps=u,n.deletions=null):(i=pn(r,u),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=pn(a,o):(o=_n(o,l,t,null),o.flags|=2),o.return=n,i.return=n,i.sibling=o,n.child=i,i=o,o=n.child,l=e.child.memoizedState,l=l===null?Jo(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=Xo,i}return o=e.child,e=o.sibling,i=pn(o,{mode:"visible",children:i.children}),!(n.mode&1)&&(i.lanes=t),i.return=n,i.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=i,n.memoizedState=null,i}function $l(e,n){return n=jr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ei(e,n,t,i){return i!==null&&Dl(i),at(n,e.child,null,t),e=$l(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sp(e,n,t,i,r,o,l){if(t)return n.flags&256?(n.flags&=-257,i=lo(Error(S(422))),Ei(e,n,l,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=i.fallback,r=n.mode,i=jr({mode:"visible",children:i.children},r,0,null),o=_n(o,r,l,null),o.flags|=2,i.return=n,o.return=n,i.sibling=o,n.child=i,n.mode&1&&at(n,e.child,null,l),n.child.memoizedState=Jo(l),n.memoizedState=Xo,o);if(!(n.mode&1))return Ei(e,n,l,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(S(419)),i=lo(o,i,void 0),Ei(e,n,l,i)}if(a=(l&e.childLanes)!==0,fe||a){if(i=b,i!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|l)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ye(e,r),ze(i,e,r,-1))}return Jl(),i=lo(Error(S(421))),Ei(e,n,l,i)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=Cp.bind(null,e),r._reactRetry=n,null):(e=o.treeContext,we=sn(r.nextSibling),ge=n,B=!0,Le=null,e!==null&&(Ce[xe++]=He,Ce[xe++]=$e,Ce[xe++]=An,He=e.id,$e=e.overflow,An=n),n=$l(n,i.children),n.flags|=4096,n)}function ou(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),Ho(e.return,n,t)}function ao(e,n,t,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=t,o.tailMode=r)}function vc(e,n,t){var i=n.pendingProps,r=i.revealOrder,o=i.tail;if(ae(e,n,i.children,t),i=U.current,i&2)i=i&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ou(e,t,n);else if(e.tag===19)ou(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(O(U,i),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&ir(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),ao(n,!1,r,t,o);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&ir(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}ao(n,!0,t,null,o);break;case"together":ao(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Oi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Xe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Tn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=pn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=pn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function cp(e,n,t){switch(n.tag){case 3:hc(n),lt();break;case 5:Hs(n);break;case 1:he(n.type)&&Zi(n);break;case 4:Ol(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,r=n.memoizedProps.value;O(er,i._currentValue),i._currentValue=r;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(O(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?mc(e,n,t):(O(U,U.current&1),e=Xe(e,n,t),e!==null?e.sibling:null);O(U,U.current&1);break;case 19:if(i=(t&n.childLanes)!==0,e.flags&128){if(i)return vc(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),O(U,U.current),i)break;return null;case 22:case 23:return n.lanes=0,fc(e,n,t)}return Xe(e,n,t)}var wc,Zo,gc,yc;wc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Zo=function(){};gc=function(e,n,t,i){var r=e.memoizedProps;if(r!==i){e=n.stateNode,jn(Ue.current);var o=null;switch(t){case"input":r=yo(e,r),i=yo(e,i),o=[];break;case"select":r=V({},r,{value:void 0}),i=V({},i,{value:void 0}),o=[];break;case"textarea":r=Co(e,r),i=Co(e,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Xi)}Eo(t,i);var l;t=null;for(s in r)if(!i.hasOwnProperty(s)&&r.hasOwnProperty(s)&&r[s]!=null)if(s==="style"){var a=r[s];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ft.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,null));for(s in i){var u=i[s];if(a=r!=null?r[s]:void 0,i.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(t||(t={}),t[l]=u[l])}else t||(o||(o=[]),o.push(s,t)),t=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Ft.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&I("scroll",e),o||a===u||(o=[])):(o=o||[]).push(s,u))}t&&(o=o||[]).push("style",t);var s=o;(n.updateQueue=s)&&(n.flags|=4)}};yc=function(e,n,t,i){t!==i&&(n.flags|=4)};function xt(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function dp(e,n,t){var i=n.pendingProps;switch(_l(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(n),null;case 1:return he(n.type)&&Ji(),re(n),null;case 3:return i=n.stateNode,ut(),F(pe),F(le),Fl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ci(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Le!==null&&(ol(Le),Le=null))),Zo(e,n),re(n),null;case 5:Il(n);var r=jn(Jt.current);if(t=n.type,e!==null&&n.stateNode!=null)gc(e,n,t,i,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(S(166));return re(n),null}if(e=jn(Ue.current),Ci(n)){i=n.stateNode,t=n.type;var o=n.memoizedProps;switch(i[Fe]=n,i[Yt]=o,e=(n.mode&1)!==0,t){case"dialog":I("cancel",i),I("close",i);break;case"iframe":case"object":case"embed":I("load",i);break;case"video":case"audio":for(r=0;r<Rt.length;r++)I(Rt[r],i);break;case"source":I("error",i);break;case"img":case"image":case"link":I("error",i),I("load",i);break;case"details":I("toggle",i);break;case"input":ha(i,o),I("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},I("invalid",i);break;case"textarea":va(i,o),I("invalid",i)}Eo(t,o),r=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Si(i.textContent,a,e),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Si(i.textContent,a,e),r=["children",""+a]):Ft.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&I("scroll",i)}switch(t){case"input":pi(i),ma(i,o,!0);break;case"textarea":pi(i),wa(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Xi)}i=r,n.updateQueue=i,i!==null&&(n.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=l.createElement(t,{is:i.is}):(e=l.createElement(t),t==="select"&&(l=e,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):e=l.createElementNS(e,t),e[Fe]=n,e[Yt]=i,wc(e,n,!1,!1),n.stateNode=e;e:{switch(l=Po(t,i),t){case"dialog":I("cancel",e),I("close",e),r=i;break;case"iframe":case"object":case"embed":I("load",e),r=i;break;case"video":case"audio":for(r=0;r<Rt.length;r++)I(Rt[r],e);r=i;break;case"source":I("error",e),r=i;break;case"img":case"image":case"link":I("error",e),I("load",e),r=i;break;case"details":I("toggle",e),r=i;break;case"input":ha(e,i),r=yo(e,i),I("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=V({},i,{value:void 0}),I("invalid",e);break;case"textarea":va(e,i),r=Co(e,i),I("invalid",e);break;default:r=i}Eo(t,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?Xu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ku(e,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Bt(e,u):typeof u=="number"&&Bt(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ft.hasOwnProperty(o)?u!=null&&o==="onScroll"&&I("scroll",e):u!=null&&hl(e,o,u,l))}switch(t){case"input":pi(e),ma(e,i,!1);break;case"textarea":pi(e),wa(e);break;case"option":i.value!=null&&e.setAttribute("value",""+mn(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?qn(e,!!i.multiple,o,!1):i.defaultValue!=null&&qn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Xi)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return re(n),null;case 6:if(e&&n.stateNode!=null)yc(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(S(166));if(t=jn(Jt.current),jn(Ue.current),Ci(n)){if(i=n.stateNode,t=n.memoizedProps,i[Fe]=n,(o=i.nodeValue!==t)&&(e=ge,e!==null))switch(e.tag){case 3:Si(i.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Si(i.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Fe]=n,n.stateNode=i}return re(n),null;case 13:if(F(U),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&we!==null&&n.mode&1&&!(n.flags&128))Os(),lt(),n.flags|=98560,o=!1;else if(o=Ci(n),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Fe]=n}else lt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;re(n),o=!1}else Le!==null&&(ol(Le),Le=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?J===0&&(J=3):Jl())),n.updateQueue!==null&&(n.flags|=4),re(n),null);case 4:return ut(),Zo(e,n),e===null&&Gt(n.stateNode.containerInfo),re(n),null;case 10:return Tl(n.type._context),re(n),null;case 17:return he(n.type)&&Ji(),re(n),null;case 19:if(F(U),o=n.memoizedState,o===null)return re(n),null;if(i=(n.flags&128)!==0,l=o.rendering,l===null)if(i)xt(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=ir(e),l!==null){for(n.flags|=128,xt(o,!1),i=l.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=t,t=n.child;t!==null;)o=t,e=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return O(U,U.current&1|2),n.child}e=e.sibling}o.tail!==null&&G()>ct&&(n.flags|=128,i=!0,xt(o,!1),n.lanes=4194304)}else{if(!i)if(e=ir(l),e!==null){if(n.flags|=128,i=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),xt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!B)return re(n),null}else 2*G()-o.renderingStartTime>ct&&t!==1073741824&&(n.flags|=128,i=!0,xt(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=G(),n.sibling=null,t=U.current,O(U,i?t&1|2:t&1),n):(re(n),null);case 22:case 23:return Xl(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&n.mode&1?ve&1073741824&&(re(n),n.subtreeFlags&6&&(n.flags|=8192)):re(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function fp(e,n){switch(_l(n),n.tag){case 1:return he(n.type)&&Ji(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ut(),F(pe),F(le),Fl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Il(n),null;case 13:if(F(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));lt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return F(U),null;case 4:return ut(),null;case 10:return Tl(n.type._context),null;case 22:case 23:return Xl(),null;case 24:return null;default:return null}}var Pi=!1,oe=!1,pp=typeof WeakSet=="function"?WeakSet:Set,E=null;function Jn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){H(e,n,i)}else t.current=null}function qo(e,n,t){try{t()}catch(i){H(e,n,i)}}var lu=!1;function hp(e,n){if(Mo=Gi,e=xs(),Nl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,a=-1,u=-1,s=0,h=0,v=e,m=null;n:for(;;){for(var k;v!==t||r!==0&&v.nodeType!==3||(a=l+r),v!==o||i!==0&&v.nodeType!==3||(u=l+i),v.nodeType===3&&(l+=v.nodeValue.length),(k=v.firstChild)!==null;)m=v,v=k;for(;;){if(v===e)break n;if(m===t&&++s===r&&(a=l),m===o&&++h===i&&(u=l),(k=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=k}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Oo={focusedElem:e,selectionRange:t},Gi=!1,E=n;E!==null;)if(n=E,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,E=e;else for(;E!==null;){n=E;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,R=y.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?g:De(n.type,g),R);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){H(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,E=e;break}E=n.return}return y=lu,lu=!1,y}function Mt(e,n,t){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var o=r.destroy;r.destroy=void 0,o!==void 0&&qo(n,t,o)}r=r.next}while(r!==i)}}function Er(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var i=t.create;t.destroy=i()}t=t.next}while(t!==n)}}function bo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function kc(e){var n=e.alternate;n!==null&&(e.alternate=null,kc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Fe],delete n[Yt],delete n[Bo],delete n[Jf],delete n[Zf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sc(e){return e.tag===5||e.tag===3||e.tag===4}function au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Xi));else if(i!==4&&(e=e.child,e!==null))for(el(e,n,t),e=e.sibling;e!==null;)el(e,n,t),e=e.sibling}function nl(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(nl(e,n,t),e=e.sibling;e!==null;)nl(e,n,t),e=e.sibling}var ee=null,Ae=!1;function Ze(e,n,t){for(t=t.child;t!==null;)Cc(e,n,t),t=t.sibling}function Cc(e,n,t){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(vr,t)}catch{}switch(t.tag){case 5:oe||Jn(t,n);case 6:var i=ee,r=Ae;ee=null,Ze(e,n,t),ee=i,Ae=r,ee!==null&&(Ae?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Ae?(e=ee,t=t.stateNode,e.nodeType===8?eo(e.parentNode,t):e.nodeType===1&&eo(e,t),Ht(e)):eo(ee,t.stateNode));break;case 4:i=ee,r=Ae,ee=t.stateNode.containerInfo,Ae=!0,Ze(e,n,t),ee=i,Ae=r;break;case 0:case 11:case 14:case 15:if(!oe&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&qo(t,n,l),r=r.next}while(r!==i)}Ze(e,n,t);break;case 1:if(!oe&&(Jn(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){H(t,n,a)}Ze(e,n,t);break;case 21:Ze(e,n,t);break;case 22:t.mode&1?(oe=(i=oe)||t.memoizedState!==null,Ze(e,n,t),oe=i):Ze(e,n,t);break;default:Ze(e,n,t)}}function uu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new pp),n.forEach(function(i){var r=xp.bind(null,e,i);t.has(i)||(t.add(i),i.then(r,r))})}}function _e(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var o=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Ae=!1;break e;case 3:ee=a.stateNode.containerInfo,Ae=!0;break e;case 4:ee=a.stateNode.containerInfo,Ae=!0;break e}a=a.return}if(ee===null)throw Error(S(160));Cc(o,l,r),ee=null,Ae=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(s){H(r,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)xc(n,e),n=n.sibling}function xc(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(n,e),Oe(e),i&4){try{Mt(3,e,e.return),Er(3,e)}catch(g){H(e,e.return,g)}try{Mt(5,e,e.return)}catch(g){H(e,e.return,g)}}break;case 1:_e(n,e),Oe(e),i&512&&t!==null&&Jn(t,t.return);break;case 5:if(_e(n,e),Oe(e),i&512&&t!==null&&Jn(t,t.return),e.flags&32){var r=e.stateNode;try{Bt(r,"")}catch(g){H(e,e.return,g)}}if(i&4&&(r=e.stateNode,r!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&$u(r,o),Po(a,l);var s=Po(a,o);for(l=0;l<u.length;l+=2){var h=u[l],v=u[l+1];h==="style"?Xu(r,v):h==="dangerouslySetInnerHTML"?Ku(r,v):h==="children"?Bt(r,v):hl(r,h,v,s)}switch(a){case"input":ko(r,o);break;case"textarea":Qu(r,o);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?qn(r,!!o.multiple,k,!1):m!==!!o.multiple&&(o.defaultValue!=null?qn(r,!!o.multiple,o.defaultValue,!0):qn(r,!!o.multiple,o.multiple?[]:"",!1))}r[Yt]=o}catch(g){H(e,e.return,g)}}break;case 6:if(_e(n,e),Oe(e),i&4){if(e.stateNode===null)throw Error(S(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch(g){H(e,e.return,g)}}break;case 3:if(_e(n,e),Oe(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ht(n.containerInfo)}catch(g){H(e,e.return,g)}break;case 4:_e(n,e),Oe(e);break;case 13:_e(n,e),Oe(e),r=e.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Kl=G())),i&4&&uu(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(oe=(s=oe)||h,_e(n,e),oe=s):_e(n,e),Oe(e),i&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!h&&e.mode&1)for(E=e,h=e.child;h!==null;){for(v=E=h;E!==null;){switch(m=E,k=m.child,m.tag){case 0:case 11:case 14:case 15:Mt(4,m,m.return);break;case 1:Jn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){i=m,t=m.return;try{n=i,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(g){H(i,t,g)}}break;case 5:Jn(m,m.return);break;case 22:if(m.memoizedState!==null){cu(v);continue}}k!==null?(k.return=m,E=k):cu(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{r=v.stateNode,s?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=v.stateNode,u=v.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Yu("display",l))}catch(g){H(e,e.return,g)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=s?"":v.memoizedProps}catch(g){H(e,e.return,g)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:_e(n,e),Oe(e),i&4&&uu(e);break;case 21:break;default:_e(n,e),Oe(e)}}function Oe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Sc(t)){var i=t;break e}t=t.return}throw Error(S(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Bt(r,""),i.flags&=-33);var o=au(e);nl(e,o,r);break;case 3:case 4:var l=i.stateNode.containerInfo,a=au(e);el(e,a,l);break;default:throw Error(S(161))}}catch(u){H(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function mp(e,n,t){E=e,Ec(e)}function Ec(e,n,t){for(var i=(e.mode&1)!==0;E!==null;){var r=E,o=r.child;if(r.tag===22&&i){var l=r.memoizedState!==null||Pi;if(!l){var a=r.alternate,u=a!==null&&a.memoizedState!==null||oe;a=Pi;var s=oe;if(Pi=l,(oe=u)&&!s)for(E=r;E!==null;)l=E,u=l.child,l.tag===22&&l.memoizedState!==null?du(r):u!==null?(u.return=l,E=u):du(r);for(;o!==null;)E=o,Ec(o),o=o.sibling;E=r,Pi=a,oe=s}su(e)}else r.subtreeFlags&8772&&o!==null?(o.return=r,E=o):su(e)}}function su(e){for(;E!==null;){var n=E;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:oe||Er(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!oe)if(t===null)i.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:De(n.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Ga(n,o,i);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ga(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var h=s.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&Ht(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}oe||n.flags&512&&bo(n)}catch(m){H(n,n.return,m)}}if(n===e){E=null;break}if(t=n.sibling,t!==null){t.return=n.return,E=t;break}E=n.return}}function cu(e){for(;E!==null;){var n=E;if(n===e){E=null;break}var t=n.sibling;if(t!==null){t.return=n.return,E=t;break}E=n.return}}function du(e){for(;E!==null;){var n=E;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Er(4,n)}catch(u){H(n,t,u)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var r=n.return;try{i.componentDidMount()}catch(u){H(n,r,u)}}var o=n.return;try{bo(n)}catch(u){H(n,o,u)}break;case 5:var l=n.return;try{bo(n)}catch(u){H(n,l,u)}}}catch(u){H(n,n.return,u)}if(n===e){E=null;break}var a=n.sibling;if(a!==null){a.return=n.return,E=a;break}E=n.return}}var vp=Math.ceil,lr=Je.ReactCurrentDispatcher,Ql=Je.ReactCurrentOwner,Pe=Je.ReactCurrentBatchConfig,z=0,b=null,K=null,ne=0,ve=0,Zn=gn(0),J=0,ei=null,Tn=0,Pr=0,Gl=0,Ot=null,de=null,Kl=0,ct=1/0,We=null,ar=!1,tl=null,dn=null,ji=!1,rn=null,ur=0,It=0,il=null,Ii=-1,Fi=0;function ue(){return z&6?G():Ii!==-1?Ii:Ii=G()}function fn(e){return e.mode&1?z&2&&ne!==0?ne&-ne:bf.transition!==null?(Fi===0&&(Fi=as()),Fi):(e=M,e!==0||(e=window.event,e=e===void 0?16:hs(e.type)),e):1}function ze(e,n,t,i){if(50<It)throw It=0,il=null,Error(S(185));ii(e,t,i),(!(z&2)||e!==b)&&(e===b&&(!(z&2)&&(Pr|=t),J===4&&nn(e,ne)),me(e,i),t===1&&z===0&&!(n.mode&1)&&(ct=G()+500,Sr&&yn()))}function me(e,n){var t=e.callbackNode;qd(e,n);var i=Qi(e,e===b?ne:0);if(i===0)t!==null&&ka(t),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(t!=null&&ka(t),n===1)e.tag===0?qf(fu.bind(null,e)):Ts(fu.bind(null,e)),Yf(function(){!(z&6)&&yn()}),t=null;else{switch(us(i)){case 1:t=yl;break;case 4:t=os;break;case 16:t=$i;break;case 536870912:t=ls;break;default:t=$i}t=Lc(t,Pc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Pc(e,n){if(Ii=-1,Fi=0,z&6)throw Error(S(327));var t=e.callbackNode;if(it()&&e.callbackNode!==t)return null;var i=Qi(e,e===b?ne:0);if(i===0)return null;if(i&30||i&e.expiredLanes||n)n=sr(e,i);else{n=i;var r=z;z|=2;var o=Nc();(b!==e||ne!==n)&&(We=null,ct=G()+500,Rn(e,n));do try{yp();break}catch(a){jc(e,a)}while(1);Ll(),lr.current=o,z=r,K!==null?n=0:(b=null,ne=0,n=J)}if(n!==0){if(n===2&&(r=Do(e),r!==0&&(i=r,n=rl(e,r))),n===1)throw t=ei,Rn(e,0),nn(e,i),me(e,G()),t;if(n===6)nn(e,i);else{if(r=e.current.alternate,!(i&30)&&!wp(r)&&(n=sr(e,i),n===2&&(o=Do(e),o!==0&&(i=o,n=rl(e,o))),n===1))throw t=ei,Rn(e,0),nn(e,i),me(e,G()),t;switch(e.finishedWork=r,e.finishedLanes=i,n){case 0:case 1:throw Error(S(345));case 2:xn(e,de,We);break;case 3:if(nn(e,i),(i&130023424)===i&&(n=Kl+500-G(),10<n)){if(Qi(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){ue(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Fo(xn.bind(null,e,de,We),n);break}xn(e,de,We);break;case 4:if(nn(e,i),(i&4194240)===i)break;for(n=e.eventTimes,r=-1;0<i;){var l=31-Te(i);o=1<<l,l=n[l],l>r&&(r=l),i&=~o}if(i=r,i=G()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*vp(i/1960))-i,10<i){e.timeoutHandle=Fo(xn.bind(null,e,de,We),i);break}xn(e,de,We);break;case 5:xn(e,de,We);break;default:throw Error(S(329))}}}return me(e,G()),e.callbackNode===t?Pc.bind(null,e):null}function rl(e,n){var t=Ot;return e.current.memoizedState.isDehydrated&&(Rn(e,n).flags|=256),e=sr(e,n),e!==2&&(n=de,de=t,n!==null&&ol(n)),e}function ol(e){de===null?de=e:de.push.apply(de,e)}function wp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],o=r.getSnapshot;r=r.value;try{if(!Me(o(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function nn(e,n){for(n&=~Gl,n&=~Pr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Te(n),i=1<<t;e[t]=-1,n&=~i}}function fu(e){if(z&6)throw Error(S(327));it();var n=Qi(e,0);if(!(n&1))return me(e,G()),null;var t=sr(e,n);if(e.tag!==0&&t===2){var i=Do(e);i!==0&&(n=i,t=rl(e,i))}if(t===1)throw t=ei,Rn(e,0),nn(e,n),me(e,G()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,xn(e,de,We),me(e,G()),null}function Yl(e,n){var t=z;z|=1;try{return e(n)}finally{z=t,z===0&&(ct=G()+500,Sr&&yn())}}function zn(e){rn!==null&&rn.tag===0&&!(z&6)&&it();var n=z;z|=1;var t=Pe.transition,i=M;try{if(Pe.transition=null,M=1,e)return e()}finally{M=i,Pe.transition=t,z=n,!(z&6)&&yn()}}function Xl(){ve=Zn.current,F(Zn)}function Rn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Kf(t)),K!==null)for(t=K.return;t!==null;){var i=t;switch(_l(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ji();break;case 3:ut(),F(pe),F(le),Fl();break;case 5:Il(i);break;case 4:ut();break;case 13:F(U);break;case 19:F(U);break;case 10:Tl(i.type._context);break;case 22:case 23:Xl()}t=t.return}if(b=e,K=e=pn(e.current,null),ne=ve=n,J=0,ei=null,Gl=Pr=Tn=0,de=Ot=null,Pn!==null){for(n=0;n<Pn.length;n++)if(t=Pn[n],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,o=t.pending;if(o!==null){var l=o.next;o.next=r,i.next=l}t.pending=i}Pn=null}return e}function jc(e,n){do{var t=K;try{if(Ll(),zi.current=or,rr){for(var i=W.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}rr=!1}if(Ln=0,q=X=W=null,zt=!1,Zt=0,Ql.current=null,t===null||t.return===null){J=1,ei=n,K=null;break}e:{var o=e,l=t.return,a=t,u=n;if(n=ne,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,h=a,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var k=ba(l);if(k!==null){k.flags&=-257,eu(k,l,a,o,n),k.mode&1&&qa(o,s,n),n=k,u=s;var y=n.updateQueue;if(y===null){var g=new Set;g.add(u),n.updateQueue=g}else y.add(u);break e}else{if(!(n&1)){qa(o,s,n),Jl();break e}u=Error(S(426))}}else if(B&&a.mode&1){var R=ba(l);if(R!==null){!(R.flags&65536)&&(R.flags|=256),eu(R,l,a,o,n),Dl(st(u,a));break e}}o=u=st(u,a),J!==4&&(J=2),Ot===null?Ot=[o]:Ot.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var d=sc(o,u,n);Qa(o,d);break e;case 1:a=u;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(dn===null||!dn.has(p)))){o.flags|=65536,n&=-n,o.lanes|=n;var w=cc(o,a,n);Qa(o,w);break e}}o=o.return}while(o!==null)}_c(t)}catch(x){n=x,K===t&&t!==null&&(K=t=t.return);continue}break}while(1)}function Nc(){var e=lr.current;return lr.current=or,e===null?or:e}function Jl(){(J===0||J===3||J===2)&&(J=4),b===null||!(Tn&268435455)&&!(Pr&268435455)||nn(b,ne)}function sr(e,n){var t=z;z|=2;var i=Nc();(b!==e||ne!==n)&&(We=null,Rn(e,n));do try{gp();break}catch(r){jc(e,r)}while(1);if(Ll(),z=t,lr.current=i,K!==null)throw Error(S(261));return b=null,ne=0,J}function gp(){for(;K!==null;)Rc(K)}function yp(){for(;K!==null&&!Hd();)Rc(K)}function Rc(e){var n=Ac(e.alternate,e,ve);e.memoizedProps=e.pendingProps,n===null?_c(e):K=n,Ql.current=null}function _c(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=fp(t,n),t!==null){t.flags&=32767,K=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,K=null;return}}else if(t=dp(t,n,ve),t!==null){K=t;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);J===0&&(J=5)}function xn(e,n,t){var i=M,r=Pe.transition;try{Pe.transition=null,M=1,kp(e,n,t,i)}finally{Pe.transition=r,M=i}return null}function kp(e,n,t,i){do it();while(rn!==null);if(z&6)throw Error(S(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(bd(e,o),e===b&&(K=b=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ji||(ji=!0,Lc($i,function(){return it(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var l=M;M=1;var a=z;z|=4,Ql.current=null,hp(e,t),xc(t,e),Uf(Oo),Gi=!!Mo,Oo=Mo=null,e.current=t,mp(t),$d(),z=a,M=l,Pe.transition=o}else e.current=t;if(ji&&(ji=!1,rn=e,ur=r),o=e.pendingLanes,o===0&&(dn=null),Kd(t.stateNode),me(e,G()),n!==null)for(i=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ar)throw ar=!1,e=tl,tl=null,e;return ur&1&&e.tag!==0&&it(),o=e.pendingLanes,o&1?e===il?It++:(It=0,il=e):It=0,yn(),null}function it(){if(rn!==null){var e=us(ur),n=Pe.transition,t=M;try{if(Pe.transition=null,M=16>e?16:e,rn===null)var i=!1;else{if(e=rn,rn=null,ur=0,z&6)throw Error(S(331));var r=z;for(z|=4,E=e.current;E!==null;){var o=E,l=o.child;if(E.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(E=s;E!==null;){var h=E;switch(h.tag){case 0:case 11:case 15:Mt(8,h,o)}var v=h.child;if(v!==null)v.return=h,E=v;else for(;E!==null;){h=E;var m=h.sibling,k=h.return;if(kc(h),h===s){E=null;break}if(m!==null){m.return=k,E=m;break}E=k}}}var y=o.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var R=g.sibling;g.sibling=null,g=R}while(g!==null)}}E=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,E=l;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Mt(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,E=d;break e}E=o.return}}var c=e.current;for(E=c;E!==null;){l=E;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,E=p;else e:for(l=c;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Er(9,a)}}catch(x){H(a,a.return,x)}if(a===l){E=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,E=w;break e}E=a.return}}if(z=r,yn(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(vr,e)}catch{}i=!0}return i}finally{M=t,Pe.transition=n}}return!1}function pu(e,n,t){n=st(t,n),n=sc(e,n,1),e=cn(e,n,1),n=ue(),e!==null&&(ii(e,1,n),me(e,n))}function H(e,n,t){if(e.tag===3)pu(e,e,t);else for(;n!==null;){if(n.tag===3){pu(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dn===null||!dn.has(i))){e=st(t,e),e=cc(n,e,1),n=cn(n,e,1),e=ue(),n!==null&&(ii(n,1,e),me(n,e));break}}n=n.return}}function Sp(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),n=ue(),e.pingedLanes|=e.suspendedLanes&t,b===e&&(ne&t)===t&&(J===4||J===3&&(ne&130023424)===ne&&500>G()-Kl?Rn(e,0):Gl|=t),me(e,n)}function Dc(e,n){n===0&&(e.mode&1?(n=vi,vi<<=1,!(vi&130023424)&&(vi=4194304)):n=1);var t=ue();e=Ye(e,n),e!==null&&(ii(e,n,t),me(e,t))}function Cp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Dc(e,t)}function xp(e,n){var t=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(S(314))}i!==null&&i.delete(n),Dc(e,t)}var Ac;Ac=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return fe=!1,cp(e,n,t);fe=!!(e.flags&131072)}else fe=!1,B&&n.flags&1048576&&zs(n,bi,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;Oi(e,n),e=n.pendingProps;var r=ot(n,le.current);tt(n,t),r=Ul(null,n,i,e,r,t);var o=Wl();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,he(i)?(o=!0,Zi(n)):o=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ml(n),r.updater=Cr,n.stateNode=r,r._reactInternals=n,Qo(n,i,e,t),n=Yo(null,n,i,!0,o,t)):(n.tag=0,B&&o&&Rl(n),ae(null,n,r,t),n=n.child),n;case 16:i=n.elementType;e:{switch(Oi(e,n),e=n.pendingProps,r=i._init,i=r(i._payload),n.type=i,r=n.tag=Pp(i),e=De(i,e),r){case 0:n=Ko(null,n,i,e,t);break e;case 1:n=iu(null,n,i,e,t);break e;case 11:n=nu(null,n,i,e,t);break e;case 14:n=tu(null,n,i,De(i.type,e),t);break e}throw Error(S(306,i,""))}return n;case 0:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:De(i,r),Ko(e,n,i,r,t);case 1:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:De(i,r),iu(e,n,i,r,t);case 3:e:{if(hc(n),e===null)throw Error(S(387));i=n.pendingProps,o=n.memoizedState,r=o.element,Fs(e,n),tr(n,i,null,t);var l=n.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){r=st(Error(S(423)),n),n=ru(e,n,i,t,r);break e}else if(i!==r){r=st(Error(S(424)),n),n=ru(e,n,i,t,r);break e}else for(we=sn(n.stateNode.containerInfo.firstChild),ge=n,B=!0,Le=null,t=Vs(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(lt(),i===r){n=Xe(e,n,t);break e}ae(e,n,i,t)}n=n.child}return n;case 5:return Hs(n),e===null&&Vo(n),i=n.type,r=n.pendingProps,o=e!==null?e.memoizedProps:null,l=r.children,Io(i,r)?l=null:o!==null&&Io(i,o)&&(n.flags|=32),pc(e,n),ae(e,n,l,t),n.child;case 6:return e===null&&Vo(n),null;case 13:return mc(e,n,t);case 4:return Ol(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=at(n,null,i,t):ae(e,n,i,t),n.child;case 11:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:De(i,r),nu(e,n,i,r,t);case 7:return ae(e,n,n.pendingProps,t),n.child;case 8:return ae(e,n,n.pendingProps.children,t),n.child;case 12:return ae(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(i=n.type._context,r=n.pendingProps,o=n.memoizedProps,l=r.value,O(er,i._currentValue),i._currentValue=l,o!==null)if(Me(o.value,l)){if(o.children===r.children&&!pe.current){n=Xe(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===i){if(o.tag===1){u=Qe(-1,t&-t),u.tag=2;var s=o.updateQueue;if(s!==null){s=s.shared;var h=s.pending;h===null?u.next=u:(u.next=h.next,h.next=u),s.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Ho(o.return,t,n),a.lanes|=t;break}u=u.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Ho(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ae(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,i=n.pendingProps.children,tt(n,t),r=je(r),i=i(r),n.flags|=1,ae(e,n,i,t),n.child;case 14:return i=n.type,r=De(i,n.pendingProps),r=De(i.type,r),tu(e,n,i,r,t);case 15:return dc(e,n,n.type,n.pendingProps,t);case 17:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:De(i,r),Oi(e,n),n.tag=1,he(i)?(e=!0,Zi(n)):e=!1,tt(n,t),Us(n,i,r),Qo(n,i,r,t),Yo(null,n,i,!0,e,t);case 19:return vc(e,n,t);case 22:return fc(e,n,t)}throw Error(S(156,n.tag))};function Lc(e,n){return rs(e,n)}function Ep(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,n,t,i){return new Ep(e,n,t,i)}function Zl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pp(e){if(typeof e=="function")return Zl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vl)return 11;if(e===wl)return 14}return 2}function pn(e,n){var t=e.alternate;return t===null?(t=Ee(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Bi(e,n,t,i,r,o){var l=2;if(i=e,typeof e=="function")Zl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Wn:return _n(t.children,r,o,n);case ml:l=8,r|=8;break;case mo:return e=Ee(12,t,n,r|2),e.elementType=mo,e.lanes=o,e;case vo:return e=Ee(13,t,n,r),e.elementType=vo,e.lanes=o,e;case wo:return e=Ee(19,t,n,r),e.elementType=wo,e.lanes=o,e;case Wu:return jr(t,r,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bu:l=10;break e;case Uu:l=9;break e;case vl:l=11;break e;case wl:l=14;break e;case qe:l=16,i=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Ee(l,t,n,r),n.elementType=e,n.type=i,n.lanes=o,n}function _n(e,n,t,i){return e=Ee(7,e,i,n),e.lanes=t,e}function jr(e,n,t,i){return e=Ee(22,e,i,n),e.elementType=Wu,e.lanes=t,e.stateNode={isHidden:!1},e}function uo(e,n,t){return e=Ee(6,e,null,n),e.lanes=t,e}function so(e,n,t){return n=Ee(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function jp(e,n,t,i,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hr(0),this.expirationTimes=Hr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hr(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ql(e,n,t,i,r,o,l,a,u){return e=new jp(e,n,t,a,u),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Ee(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ml(o),e}function Np(e,n,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:i==null?null:""+i,children:e,containerInfo:n,implementation:t}}function Tc(e){if(!e)return vn;e=e._reactInternals;e:{if(On(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(he(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(he(t))return Ls(e,t,n)}return n}function zc(e,n,t,i,r,o,l,a,u){return e=ql(t,i,!0,e,r,o,l,a,u),e.context=Tc(null),t=e.current,i=ue(),r=fn(t),o=Qe(i,r),o.callback=n??null,cn(t,o,r),e.current.lanes=r,ii(e,r,i),me(e,i),e}function Nr(e,n,t,i){var r=n.current,o=ue(),l=fn(r);return t=Tc(t),n.context===null?n.context=t:n.pendingContext=t,n=Qe(o,l),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=cn(r,n,l),e!==null&&(ze(e,r,l,o),Ti(e,r,l)),l}function cr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function bl(e,n){hu(e,n),(e=e.alternate)&&hu(e,n)}function Rp(){return null}var Mc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ea(e){this._internalRoot=e}Rr.prototype.render=ea.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));Nr(e,n,null,null)};Rr.prototype.unmount=ea.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zn(function(){Nr(null,e,null,null)}),n[Ke]=null}};function Rr(e){this._internalRoot=e}Rr.prototype.unstable_scheduleHydration=function(e){if(e){var n=ds();e={blockedOn:null,target:e,priority:n};for(var t=0;t<en.length&&n!==0&&n<en[t].priority;t++);en.splice(t,0,e),t===0&&ps(e)}};function na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mu(){}function _p(e,n,t,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var s=cr(l);o.call(s)}}var l=zc(n,i,e,0,null,!1,!1,"",mu);return e._reactRootContainer=l,e[Ke]=l.current,Gt(e.nodeType===8?e.parentNode:e),zn(),l}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var s=cr(u);a.call(s)}}var u=ql(e,0,!1,null,null,!1,!1,"",mu);return e._reactRootContainer=u,e[Ke]=u.current,Gt(e.nodeType===8?e.parentNode:e),zn(function(){Nr(n,u,t,i)}),u}function Dr(e,n,t,i,r){var o=t._reactRootContainer;if(o){var l=o;if(typeof r=="function"){var a=r;r=function(){var u=cr(l);a.call(u)}}Nr(n,l,e,r)}else l=_p(t,n,e,r,i);return cr(l)}ss=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Nt(n.pendingLanes);t!==0&&(kl(n,t|1),me(n,G()),!(z&6)&&(ct=G()+500,yn()))}break;case 13:zn(function(){var i=Ye(e,1);if(i!==null){var r=ue();ze(i,e,1,r)}}),bl(e,1)}};Sl=function(e){if(e.tag===13){var n=Ye(e,134217728);if(n!==null){var t=ue();ze(n,e,134217728,t)}bl(e,134217728)}};cs=function(e){if(e.tag===13){var n=fn(e),t=Ye(e,n);if(t!==null){var i=ue();ze(t,e,n,i)}bl(e,n)}};ds=function(){return M};fs=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};No=function(e,n,t){switch(n){case"input":if(ko(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var r=kr(i);if(!r)throw Error(S(90));Hu(i),ko(i,r)}}}break;case"textarea":Qu(e,t);break;case"select":n=t.value,n!=null&&qn(e,!!t.multiple,n,!1)}};qu=Yl;bu=zn;var Dp={usingClientEntryPoint:!1,Events:[oi,Qn,kr,Ju,Zu,Yl]},Et={findFiberByHostInstance:En,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ap={bundleType:Et.bundleType,version:Et.version,rendererPackageName:Et.rendererPackageName,rendererConfig:Et.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ts(e),e===null?null:e.stateNode},findFiberByHostInstance:Et.findFiberByHostInstance||Rp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ni.isDisabled&&Ni.supportsFiber)try{vr=Ni.inject(Ap),Be=Ni}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dp;ke.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!na(n))throw Error(S(200));return Np(e,n,null,t)};ke.createRoot=function(e,n){if(!na(e))throw Error(S(299));var t=!1,i="",r=Mc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=ql(e,1,!1,null,null,t,!1,i,r),e[Ke]=n.current,Gt(e.nodeType===8?e.parentNode:e),new ea(n)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ts(n),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return zn(e)};ke.hydrate=function(e,n,t){if(!_r(n))throw Error(S(200));return Dr(null,e,n,!0,t)};ke.hydrateRoot=function(e,n,t){if(!na(e))throw Error(S(405));var i=t!=null&&t.hydratedSources||null,r=!1,o="",l=Mc;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=zc(n,null,e,1,t??null,r,!1,o,l),e[Ke]=n.current,Gt(e),i)for(e=0;e<i.length;e++)t=i[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new Rr(n)};ke.render=function(e,n,t){if(!_r(n))throw Error(S(200));return Dr(null,e,n,!1,t)};ke.unmountComponentAtNode=function(e){if(!_r(e))throw Error(S(40));return e._reactRootContainer?(zn(function(){Dr(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ke.unstable_batchedUpdates=Yl;ke.unstable_renderSubtreeIntoContainer=function(e,n,t,i){if(!_r(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Dr(e,n,t,!1,i)};ke.version="18.2.0-next-9e3b772b8-20220608";function Oc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oc)}catch(e){console.error(e)}}Oc(),zu.exports=ke;var Lp=zu.exports,vu=Lp;po.createRoot=vu.createRoot,po.hydrateRoot=vu.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ni.apply(this,arguments)}var on;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(on||(on={}));const wu="popstate";function Tp(e){e===void 0&&(e={});function n(i,r){let{pathname:o,search:l,hash:a}=i.location;return ll("",{pathname:o,search:l,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:dr(r)}return Mp(n,t,null,e)}function Y(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ta(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function zp(){return Math.random().toString(36).substr(2,8)}function gu(e,n){return{usr:e.state,key:e.key,idx:n}}function ll(e,n,t,i){return t===void 0&&(t=null),ni({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?ht(n):n,{state:t,key:n&&n.key||i||zp()})}function dr(e){let{pathname:n="/",search:t="",hash:i=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function ht(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let i=e.indexOf("?");i>=0&&(n.search=e.substr(i),e=e.substr(0,i)),e&&(n.pathname=e)}return n}function Mp(e,n,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,l=r.history,a=on.Pop,u=null,s=h();s==null&&(s=0,l.replaceState(ni({},l.state,{idx:s}),""));function h(){return(l.state||{idx:null}).idx}function v(){a=on.Pop;let R=h(),d=R==null?null:R-s;s=R,u&&u({action:a,location:g.location,delta:d})}function m(R,d){a=on.Push;let c=ll(g.location,R,d);t&&t(c,R),s=h()+1;let p=gu(c,s),w=g.createHref(c);try{l.pushState(p,"",w)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;r.location.assign(w)}o&&u&&u({action:a,location:g.location,delta:1})}function k(R,d){a=on.Replace;let c=ll(g.location,R,d);t&&t(c,R),s=h();let p=gu(c,s),w=g.createHref(c);l.replaceState(p,"",w),o&&u&&u({action:a,location:g.location,delta:0})}function y(R){let d=r.location.origin!=="null"?r.location.origin:r.location.href,c=typeof R=="string"?R:dr(R);return Y(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let g={get action(){return a},get location(){return e(r,l)},listen(R){if(u)throw new Error("A history only accepts one active listener");return r.addEventListener(wu,v),u=R,()=>{r.removeEventListener(wu,v),u=null}},createHref(R){return n(r,R)},createURL:y,encodeLocation(R){let d=y(R);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:k,go(R){return l.go(R)}};return g}var yu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(yu||(yu={}));function Op(e,n,t){t===void 0&&(t="/");let i=typeof n=="string"?ht(n):n,r=ia(i.pathname||"/",t);if(r==null)return null;let o=Ic(e);Ip(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=Gp(o[a],Xp(r));return l}function Ic(e,n,t,i){n===void 0&&(n=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(o,l,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(Y(u.relativePath.startsWith(i),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(i.length));let s=hn([i,u.relativePath]),h=t.concat(u);o.children&&o.children.length>0&&(Y(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),Ic(o.children,n,h,s)),!(o.path==null&&!o.index)&&n.push({path:s,score:$p(s,o.index),routesMeta:h})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,l);else for(let u of Fc(o.path))r(o,l,u)}),n}function Fc(e){let n=e.split("/");if(n.length===0)return[];let[t,...i]=n,r=t.endsWith("?"),o=t.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let l=Fc(i.join("/")),a=[];return a.push(...l.map(u=>u===""?o:[o,u].join("/"))),r&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Ip(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Qp(n.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const Fp=/^:\w+$/,Bp=3,Up=2,Wp=1,Vp=10,Hp=-2,ku=e=>e==="*";function $p(e,n){let t=e.split("/"),i=t.length;return t.some(ku)&&(i+=Hp),n&&(i+=Up),t.filter(r=>!ku(r)).reduce((r,o)=>r+(Fp.test(o)?Bp:o===""?Wp:Vp),i)}function Qp(e,n){return e.length===n.length&&e.slice(0,-1).every((i,r)=>i===n[r])?e[e.length-1]-n[n.length-1]:0}function Gp(e,n){let{routesMeta:t}=e,i={},r="/",o=[];for(let l=0;l<t.length;++l){let a=t[l],u=l===t.length-1,s=r==="/"?n:n.slice(r.length)||"/",h=Kp({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},s);if(!h)return null;Object.assign(i,h.params);let v=a.route;o.push({params:i,pathname:hn([r,h.pathname]),pathnameBase:bp(hn([r,h.pathnameBase])),route:v}),h.pathnameBase!=="/"&&(r=hn([r,h.pathnameBase]))}return o}function Kp(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,i]=Yp(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let o=r[0],l=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((s,h,v)=>{if(h==="*"){let m=a[v]||"";l=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return s[h]=Jp(a[v]||"",h),s},{}),pathname:o,pathnameBase:l,pattern:e}}function Yp(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),ta(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(i.push(a),"/([^\\/]+)"));return e.endsWith("*")?(i.push("*"),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),i]}function Xp(e){try{return decodeURI(e)}catch(n){return ta(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Jp(e,n){try{return decodeURIComponent(e)}catch(t){return ta(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),e}}function ia(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,i=e.charAt(t);return i&&i!=="/"?null:e.slice(t)||"/"}function Zp(e,n){n===void 0&&(n="/");let{pathname:t,search:i="",hash:r=""}=typeof e=="string"?ht(e):e;return{pathname:t?t.startsWith("/")?t:qp(t,n):n,search:eh(i),hash:nh(r)}}function qp(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function co(e,n,t,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bc(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Uc(e,n,t,i){i===void 0&&(i=!1);let r;typeof e=="string"?r=ht(e):(r=ni({},e),Y(!r.pathname||!r.pathname.includes("?"),co("?","pathname","search",r)),Y(!r.pathname||!r.pathname.includes("#"),co("#","pathname","hash",r)),Y(!r.search||!r.search.includes("#"),co("#","search","hash",r)));let o=e===""||r.pathname==="",l=o?"/":r.pathname,a;if(i||l==null)a=t;else{let v=n.length-1;if(l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),v-=1;r.pathname=m.join("/")}a=v>=0?n[v]:"/"}let u=Zp(r,a),s=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(s||h)&&(u.pathname+="/"),u}const hn=e=>e.join("/").replace(/\/\/+/g,"/"),bp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),eh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,nh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function th(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Wc=["post","put","patch","delete"];new Set(Wc);const ih=["get",...Wc];new Set(ih);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fr(){return fr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},fr.apply(this,arguments)}const ra=C.createContext(null),Vc=C.createContext(null),In=C.createContext(null),Ar=C.createContext(null),Fn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Hc=C.createContext(null);function rh(e,n){let{relative:t}=n===void 0?{}:n;ai()||Y(!1);let{basename:i,navigator:r}=C.useContext(In),{hash:o,pathname:l,search:a}=oa(e,{relative:t}),u=l;return i!=="/"&&(u=l==="/"?i:hn([i,l])),r.createHref({pathname:u,search:a,hash:o})}function ai(){return C.useContext(Ar)!=null}function ui(){return ai()||Y(!1),C.useContext(Ar).location}function $c(e){C.useContext(In).static||C.useLayoutEffect(e)}function oh(){let{isDataRoute:e}=C.useContext(Fn);return e?gh():lh()}function lh(){ai()||Y(!1);let e=C.useContext(ra),{basename:n,navigator:t}=C.useContext(In),{matches:i}=C.useContext(Fn),{pathname:r}=ui(),o=JSON.stringify(Bc(i).map(u=>u.pathnameBase)),l=C.useRef(!1);return $c(()=>{l.current=!0}),C.useCallback(function(u,s){if(s===void 0&&(s={}),!l.current)return;if(typeof u=="number"){t.go(u);return}let h=Uc(u,JSON.parse(o),r,s.relative==="path");e==null&&n!=="/"&&(h.pathname=h.pathname==="/"?n:hn([n,h.pathname])),(s.replace?t.replace:t.push)(h,s.state,s)},[n,t,o,r,e])}function oa(e,n){let{relative:t}=n===void 0?{}:n,{matches:i}=C.useContext(Fn),{pathname:r}=ui(),o=JSON.stringify(Bc(i).map(l=>l.pathnameBase));return C.useMemo(()=>Uc(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function ah(e,n){return uh(e,n)}function uh(e,n,t){ai()||Y(!1);let{navigator:i}=C.useContext(In),{matches:r}=C.useContext(Fn),o=r[r.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=ui(),s;if(n){var h;let g=typeof n=="string"?ht(n):n;a==="/"||(h=g.pathname)!=null&&h.startsWith(a)||Y(!1),s=g}else s=u;let v=s.pathname||"/",m=a==="/"?v:v.slice(a.length)||"/",k=Op(e,{pathname:m}),y=ph(k&&k.map(g=>Object.assign({},g,{params:Object.assign({},l,g.params),pathname:hn([a,i.encodeLocation?i.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?a:hn([a,i.encodeLocation?i.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),r,t);return n&&y?C.createElement(Ar.Provider,{value:{location:fr({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:on.Pop}},y):y}function sh(){let e=wh(),n=th(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},n),t?C.createElement("pre",{style:r},t):null,o)}const ch=C.createElement(sh,null);class dh extends C.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error||t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error?C.createElement(Fn.Provider,{value:this.props.routeContext},C.createElement(Hc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fh(e){let{routeContext:n,match:t,children:i}=e,r=C.useContext(ra);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement(Fn.Provider,{value:n},i)}function ph(e,n,t){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),e==null){var r;if((r=t)!=null&&r.errors)e=t.matches;else return null}let o=e,l=(i=t)==null?void 0:i.errors;if(l!=null){let a=o.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id]));a>=0||Y(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,u,s)=>{let h=u.route.id?l==null?void 0:l[u.route.id]:null,v=null;t&&(v=u.route.errorElement||ch);let m=n.concat(o.slice(0,s+1)),k=()=>{let y;return h?y=v:u.route.Component?y=C.createElement(u.route.Component,null):u.route.element?y=u.route.element:y=a,C.createElement(fh,{match:u,routeContext:{outlet:a,matches:m,isDataRoute:t!=null},children:y})};return t&&(u.route.ErrorBoundary||u.route.errorElement||s===0)?C.createElement(dh,{location:t.location,revalidation:t.revalidation,component:v,error:h,children:k(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):k()},null)}var Qc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qc||{}),pr=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(pr||{});function hh(e){let n=C.useContext(ra);return n||Y(!1),n}function mh(e){let n=C.useContext(Vc);return n||Y(!1),n}function vh(e){let n=C.useContext(Fn);return n||Y(!1),n}function Gc(e){let n=vh(),t=n.matches[n.matches.length-1];return t.route.id||Y(!1),t.route.id}function wh(){var e;let n=C.useContext(Hc),t=mh(pr.UseRouteError),i=Gc(pr.UseRouteError);return n||((e=t.errors)==null?void 0:e[i])}function gh(){let{router:e}=hh(Qc.UseNavigateStable),n=Gc(pr.UseNavigateStable),t=C.useRef(!1);return $c(()=>{t.current=!0}),C.useCallback(function(r,o){o===void 0&&(o={}),t.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,fr({fromRouteId:n},o)))},[e,n])}function Ui(e){Y(!1)}function yh(e){let{basename:n="/",children:t=null,location:i,navigationType:r=on.Pop,navigator:o,static:l=!1}=e;ai()&&Y(!1);let a=n.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof i=="string"&&(i=ht(i));let{pathname:s="/",search:h="",hash:v="",state:m=null,key:k="default"}=i,y=C.useMemo(()=>{let g=ia(s,a);return g==null?null:{location:{pathname:g,search:h,hash:v,state:m,key:k},navigationType:r}},[a,s,h,v,m,k,r]);return y==null?null:C.createElement(In.Provider,{value:u},C.createElement(Ar.Provider,{children:t,value:y}))}function kh(e){let{children:n,location:t}=e;return ah(al(n),t)}new Promise(()=>{});function al(e,n){n===void 0&&(n=[]);let t=[];return C.Children.forEach(e,(i,r)=>{if(!C.isValidElement(i))return;let o=[...n,r];if(i.type===C.Fragment){t.push.apply(t,al(i.props.children,o));return}i.type!==Ui&&Y(!1),!i.props.index||!i.props.children||Y(!1);let l={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(l.children=al(i.props.children,o)),t.push(l)}),t}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hr(){return hr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},hr.apply(this,arguments)}function Kc(e,n){if(e==null)return{};var t={},i=Object.keys(e),r,o;for(o=0;o<i.length;o++)r=i[o],!(n.indexOf(r)>=0)&&(t[r]=e[r]);return t}function Sh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ch(e,n){return e.button===0&&(!n||n==="_self")&&!Sh(e)}const xh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Eh=["aria-current","caseSensitive","className","end","style","to","children"],Ph="startTransition",Su=Sd[Ph];function jh(e){let{basename:n,children:t,future:i,window:r}=e,o=C.useRef();o.current==null&&(o.current=Tp({window:r,v5Compat:!0}));let l=o.current,[a,u]=C.useState({action:l.action,location:l.location}),{v7_startTransition:s}=i||{},h=C.useCallback(v=>{s&&Su?Su(()=>u(v)):u(v)},[u,s]);return C.useLayoutEffect(()=>l.listen(h),[l,h]),C.createElement(yh,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:l})}const Nh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_h=C.forwardRef(function(n,t){let{onClick:i,relative:r,reloadDocument:o,replace:l,state:a,target:u,to:s,preventScrollReset:h}=n,v=Kc(n,xh),{basename:m}=C.useContext(In),k,y=!1;if(typeof s=="string"&&Rh.test(s)&&(k=s,Nh))try{let c=new URL(window.location.href),p=s.startsWith("//")?new URL(c.protocol+s):new URL(s),w=ia(p.pathname,m);p.origin===c.origin&&w!=null?s=w+p.search+p.hash:y=!0}catch{}let g=rh(s,{relative:r}),R=Ah(s,{replace:l,state:a,target:u,preventScrollReset:h,relative:r});function d(c){i&&i(c),c.defaultPrevented||R(c)}return C.createElement("a",hr({},v,{href:k||g,onClick:y||o?i:d,ref:t,target:u}))}),Dh=C.forwardRef(function(n,t){let{"aria-current":i="page",caseSensitive:r=!1,className:o="",end:l=!1,style:a,to:u,children:s}=n,h=Kc(n,Eh),v=oa(u,{relative:h.relative}),m=ui(),k=C.useContext(Vc),{navigator:y}=C.useContext(In),g=y.encodeLocation?y.encodeLocation(v).pathname:v.pathname,R=m.pathname,d=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;r||(R=R.toLowerCase(),d=d?d.toLowerCase():null,g=g.toLowerCase());let c=R===g||!l&&R.startsWith(g)&&R.charAt(g.length)==="/",p=d!=null&&(d===g||!l&&d.startsWith(g)&&d.charAt(g.length)==="/"),w=c?i:void 0,x;typeof o=="function"?x=o({isActive:c,isPending:p}):x=[o,c?"active":null,p?"pending":null].filter(Boolean).join(" ");let j=typeof a=="function"?a({isActive:c,isPending:p}):a;return C.createElement(_h,hr({},h,{"aria-current":w,className:x,ref:t,style:j,to:u}),typeof s=="function"?s({isActive:c,isPending:p}):s)});var Cu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Cu||(Cu={}));var xu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(xu||(xu={}));function Ah(e,n){let{target:t,replace:i,state:r,preventScrollReset:o,relative:l}=n===void 0?{}:n,a=oh(),u=ui(),s=oa(e,{relative:l});return C.useCallback(h=>{if(Ch(h,t)){h.preventDefault();let v=i!==void 0?i:dr(u)===dr(s);a(e,{replace:v,state:r,preventScrollReset:o,relative:l})}},[u,a,s,i,r,t,e,o,l])}const Nn=new webkitSpeechRecognition;Nn.continuous=!0;Nn.lang="en-US";Nn.interimResult=!0;const Lh=({word:e,index:n})=>{const[t,i]=C.useState("red"),[r,o]=C.useState("white"),[l,a]=C.useState(!1),u=()=>{a(!l),l?(i("chartreuse"),o("black")):(i("red"),o("white"))},s=v=>{Nn.start();let m=v.toLowerCase();Nn.onresult=k=>{const y=k.results[0][0].transcript;alert(m===y?`Bien, la palabra es: ${y}`:`Mal, dijiste algo como: ${y}`)},setTimeout(()=>{Nn.stop(),setTimeout(()=>{Nn.abort()},500)},4e3)},h=v=>{const m=new SpeechSynthesisUtterance(v);m.rate=.7,m.lang="en-US",speechSynthesis.speak(m)};return f.jsx("div",{className:"word_c",children:f.jsxs("div",{className:"word",children:[f.jsx("span",{className:"word_item",children:e.word}),f.jsxs("div",{className:"pronunciation_container",children:[f.jsx("span",{className:"pronunciation",children:e.pronunciation}),f.jsx("button",{className:"listen",onClick:()=>h(e.word),children:"Listen"})]}),f.jsxs("div",{className:"meaning_word",children:[f.jsx("div",{className:"defi",children:e.definition}),f.jsxs("div",{className:"talk_container",children:[f.jsx("button",{className:"talk",onClick:()=>s(e.word),children:"Talk"}),f.jsx("div",{onClick:()=>u(),style:{backgroundColor:t,color:r},className:"index",children:n})]})]})]})})},Th=`the
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
become`.toLowerCase(),zh=`the
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
white`.toLowerCase(),Mh=`the
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
however`.toLowerCase(),Oh=`Shelter
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
device`.toLowerCase(),Ih=`cartography
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
Island`.toLowerCase(),Fh=`lowercase
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
Cost`.toLowerCase(),Bh=`smell
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
earn`.toLowerCase(),Uh=`arise
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
bleed`,Wh=`wake up
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
put up with`.toLowerCase(),Yc=Th.split(`
`),Xc=zh.split(`
`),Jc=Mh.split(`
`),Zc=Oh.split(`
`),qc=Ih.split(`
`),Lr=Fh.split(`
`),Tr=Bh.split(`
`).sort(),Vh=new Set(Tr);Array.from(Vh);const zr=Uh.split(`
`),Hh=new Set(zr);Array.from(Hh);const bc=Wh.split(`
`),$h=new Set(bc),fo=Array.from($h).sort(),Qh=[...Yc,...Xc,Jc,...Zc,...qc,...Lr],Gh=new Set(Qh),Kh=Array.from(Gh).sort(),Yh=[...Yc,...Xc,...Jc,...Zc,...qc,...Lr,...bc,...Tr,...zr],Xh=new Set(Yh),ed=Array.from(Xh).sort(),Jh=ed.find(e=>e==="will");ed.indexOf(Jh);const Zh=Tr.find(e=>e==="break");Tr.indexOf(Zh);const qh=zr.find(e=>e==="make");zr.indexOf(qh);const bh=Lr.find(e=>e==="wound");Lr.indexOf(bh);const em=()=>{fo.splice(0,0),console.log(fo.length),console.log(fo)};em();Kh.find(e=>e==="yet");const nm=[{word:"I",pronunciation:"ai",definition:"Yo"},{word:"You",pronunciation:"iú",definition:"Tú"},{word:"He",pronunciation:"ji",definition:"Él"},{word:"She",pronunciation:"shi",definition:"Ella"},{word:"We",pronunciation:"uí",definition:"Nosotros"},{word:"They",pronunciation:"Dei",definition:"Ellos"},{word:"Them",pronunciation:"dem",definition:"Ellos"},{word:"Him",pronunciation:"jim",definition:"A él"},{word:"His",pronunciation:"jis",definition:"Su"},{word:"Her",pronunciation:"ger",definition:"Su"},{word:"About",pronunciation:"abaut",definition:"Acerca de"},{word:"Advertisement",pronunciation:"advertuaisment",definition:"anuncio"},{word:"Aerial",pronunciation:"er-ial",definition:"Aéreo"},{word:"After",pronunciation:"after",definition:"Despues"},{word:"Agile",pronunciation:"ayol",definition:"Ágil"},{word:"A",pronunciation:"a",definition:"un - uno - una"},{word:"An",pronunciation:"an",definition:"un - uno - una"},{word:"And",pronunciation:"",definition:"Y"},{word:"Again",pronunciation:"eguen",definition:"Otra vez"},{word:"Against",pronunciation:"eguenst",definition:"En contra"},{word:"Agreement",pronunciation:"agriment",definition:"Acuerdo"},{word:"Air",pronunciation:"er",definition:"Aire"},{word:"Algorithm",pronunciation:"algridem",definition:"Algoritmo"},{word:"All",pronunciation:"oll",definition:"Todo - todos"},{word:"Allergy",pronunciation:"aleryi",definition:"Alergia"},{word:"Also",pronunciation:"olso",definition:"También"},{word:"Although",pronunciation:"oldo",definition:"Aunque"},{word:"Always",pronunciation:"olwis",definition:"Siempre"},{word:"America",pronunciation:"america",definition:"America"},{word:"Ammunition",pronunciation:"emiunichen",definition:"Munición"},{word:"Analgesic",pronunciation:"enal-yisik",definition:"Analgésico"},{word:"Analysis",pronunciation:"enalisis",definition:"Análisis"},{word:"Analytics",pronunciation:"enalidiks",definition:"Análitica"},{word:"Animal",pronunciation:"enemel",definition:"Animal"},{word:"Answer",pronunciation:"enser",definition:"Respuesta"},{word:"Antiseptic",pronunciation:"entiseptik",definition:"Antiséptico"},{word:"Any",pronunciation:"eny",definition:"Cualquier"},{word:"Anyone",pronunciation:"eni-uan",definition:"Alguien"},{word:"Anything",pronunciation:"eniting",definition:"Cualquier cosa"},{word:"Anywhere",pronunciation:"eniuer",definition:"En cualquier lugar"},{word:"Application",pronunciation:"aplikeichon",definition:"Aplicación - Solicitud"},{word:"Are",pronunciation:"ar",definition:"Son"},{word:"Arrow",pronunciation:"arrou",definition:"Flecha"},{word:"Area",pronunciation:"",definition:"Área"},{word:"Artificial",pronunciation:"arde-fishol",definition:"Artificial"},{word:"As",pronunciation:"as",definition:"Como"},{word:"Abide",pronunciation:"abaid",definition:"cumplir"},{word:"Aspect",pronunciation:"aspect",definition:"Aspecto"},{word:"At",pronunciation:"at",definition:"En"},{word:"Automation",pronunciation:"oro-meichen",definition:"Automatización"},{word:"Avalanche",pronunciation:"ava-lantsh",definition:"Avalancha"},{word:"Away",pronunciation:"e-uey",definition:"Lejos"},{word:"Awake",pronunciation:"a-ueik",definition:"Despierto"},{word:"Axe",pronunciation:"aks",definition:"Hacha"},{word:"Among",pronunciation:"amang",definition:"Entre"},{word:"Above",pronunciation:"abov",definition:"Arriba de"},{word:"Address",pronunciation:"adres",definition:"Dirección"},{word:"Backpack",pronunciation:"bak-pak",definition:"Mochila"},{word:"Breakfast",pronunciation:"",definition:"Desayuno"},{word:"Backup",pronunciation:"bak-up",definition:"Respaldo"},{word:"Bandage",pronunciation:"bendich",definition:"Vendaje"},{word:"Bread",pronunciation:"bred",definition:"Pan"},{word:"Boxing",pronunciation:"boxing",definition:"Boxeo"},{word:"Box",pronunciation:"box",definition:"Caja"},{word:"Bear",pronunciation:"ber",definition:"Oso"},{word:"Because",pronunciation:"bicos",definition:"Porque"},{word:"Before",pronunciation:"befor",definition:"antes"},{word:"Between",pronunciation:"be-tuin",definition:"Entre"},{word:"Big",pronunciation:"big",definition:"Grande"},{word:"Binoculars",pronunciation:"banakiulers",definition:"Binoculares"},{word:"Bow",pronunciation:"bou",definition:"Arco"},{word:"Boots",pronunciation:"buts",definition:"Botas"},{word:"Book",pronunciation:"buk",definition:"Libro"},{word:"Bottle",pronunciation:"",definition:"Botella"},{word:"Budget",pronunciation:"bayet",definition:"Presupuesto"},{word:"Bug net",pronunciation:"bag-net",definition:"Toldillo"},{word:"But",pronunciation:"bat",definition:"Pero"},{word:"By",pronunciation:"bay",definition:"Por - Mediante - Según - Junto a"},{word:"Below",pronunciation:"below",definition:"Abajo"},{word:"Branch",pronunciation:"branch",definition:"Rama"},{word:"Camera",pronunciation:"",definition:"Cámara"},{word:"Campfire",pronunciation:"camp-faier",definition:"Hoguera - Fogata"},{word:"Card",pronunciation:"card",definition:"Tarjeta"},{word:"Certain",pronunciation:"cert-en",definition:"Cierto"},{word:"Coffee",pronunciation:"cofi",definition:"Café"},{word:"Chocolate",pronunciation:"",definition:"Chocolate"},{word:"Chicken",pronunciation:"chiken",definition:"Pollo"},{word:"Canyon",pronunciation:"kanien",definition:"Cañón"},{word:"Car",pronunciation:"car",definition:"Carro"},{word:"Carabiner",pronunciation:"karabiner",definition:"Mosquetón"},{word:"characteristic",pronunciation:"",definition:"Caracterìstica"},{word:"Cartographer",pronunciation:"kartagrefer",definition:"Cartógrafo"},{word:"Cartography",pronunciation:"kartagrefi",definition:"Cartografía"},{word:"Case",pronunciation:"kes",definition:"Caso"},{word:"Charger",pronunciation:"charyer",definition:"Cargador"},{word:"Center",pronunciation:"center",definition:"centro"},{word:"Crew",pronunciation:"kru",definition:"Grupo - equipo"},{word:"City",pronunciation:"siti",definition:"Ciudad"},{word:"Cliff",pronunciation:"klif",definition:"Acantilado"},{word:"Clothes",pronunciation:"klotz",definition:"Ropa"},{word:"Cloud",pronunciation:"kloud",definition:"Nube"},{word:"Code",pronunciation:"koud",definition:"Código"},{word:"Collaboration",pronunciation:"colaboreichen",definition:"Colaboración"},{word:"Company",pronunciation:"campani",definition:"Compañía"},{word:"Compass",pronunciation:"kampes",definition:"Brújula"},{word:"Computer",pronunciation:"kampiurer",definition:"Computador"},{word:"Conferece",pronunciation:"kanfrens",definition:"Conferencia"},{word:"Container",pronunciation:"kenteiner",definition:"Contenedor"},{word:"Content",pronunciation:"kanten",definition:"Contenido"},{word:"Contour",pronunciation:"kan-tor",definition:"Contorno"},{word:"Coordinates",pronunciation:"coordenets",definition:"Coordenadas"},{word:"Cost",pronunciation:"cost",definition:"Costo"},{word:"Course",pronunciation:"kors",definition:"Curso"},{word:"Cycle",pronunciation:"saicol",definition:"Ciclo"},{word:"Dinner",pronunciation:"diner",definition:"Cena"},{word:"Data",pronunciation:"deira",definition:"Datos"},{word:"Database",pronunciation:"dara-beis",definition:"Base de datos"},{word:"Datum",pronunciation:"dadem",definition:"Dato"},{word:"Day",pronunciation:"dey",definition:"Día"},{word:"Deal",pronunciation:"dill",definition:"Trato"},{word:"Dehydration",pronunciation:"dijai-dreichen",definition:"Deshidratación"},{word:"deployment",pronunciation:"deploiment",definition:"Despliegue"},{word:"Desert",pronunciation:"desert",definition:"Desierto"},{word:"Desk",pronunciation:"desk",definition:"Escritorio"},{word:"Device",pronunciation:"devais",definition:"Dispositivo"},{word:"Different",pronunciation:"di-frent",definition:"Diferente"},{word:"Direction",pronunciation:"",definition:"Dirección"},{word:"Disaster",pronunciation:"desaster",definition:"Desastre"},{word:"Down",pronunciation:"daun",definition:"Abajo"},{word:"Declination",pronunciation:"daclineichen",definition:"Declinación"},{word:"Earthquake",pronunciation:"erz-cueic",definition:"Terremoto"},{word:"East",pronunciation:"ist",definition:"Este"},{word:"Electronic",pronunciation:"elek-tranik",definition:"Electrónica"},{word:"Elevation",pronunciation:"eleveichen",definition:"Elevación"},{word:"Earth",pronunciation:"Erz",definition:"Arena"},{word:"Email",pronunciation:"imel",definition:"Correo"},{word:"Emergency",pronunciation:"emerjensi",definition:"Emergencia"},{word:"Egg",pronunciation:"eg",definition:"Huevo"},{word:"End",pronunciation:"end",definition:"Fin"},{word:"Engine",pronunciation:"enjen",definition:"Motor"},{word:"Early",pronunciation:"erly",definition:"Temprano"},{word:"Every",pronunciation:"ebri",definition:"Cada"},{word:"Even",pronunciation:"iven",definition:"Incluso"},{word:"Event",pronunciation:"event",definition:"Evento"},{word:"Eyes",pronunciation:"ai",definition:"Ojo"},{word:"Fact",pronunciation:"fakt",definition:"Hecho"},{word:"Far",pronunciation:"far",definition:"Lejos"},{word:"Farm",pronunciation:"farm",definition:"Granja"},{word:"Few",pronunciation:"fiu",definition:"Pocos"},{word:"Feature",pronunciation:"ficher",definition:"caracterìstica"},{word:"Fire",pronunciation:"faier",definition:"Fuego"},{word:"Firewall",pronunciation:"faier-wol",definition:"Cortafuegos"},{word:"First",pronunciation:"ferst",definition:"Primero"},{word:"First aid",pronunciation:"ferst-eid",definition:"Primeros auxilios"},{word:"First-aid kit",pronunciation:"ferst-eid kit",definition:"Kit de primeros auxilios"},{word:"Fish",pronunciation:"fich",definition:"Pez"},{word:"Fishing bait",pronunciation:"fiching beit",definition:"Cebo de pesca"},{word:"Flares",pronunciation:"flers",definition:"Bengalas"},{word:"Flashlight",pronunciation:"flach-lait",definition:"Linterna"},{word:"Flood",pronunciation:"flod",definition:"Inundación"},{word:"Food",pronunciation:"fud",definition:"Comida"},{word:"For",pronunciation:"for",definition:"Por"},{word:"Forage",pronunciation:"for-ech",definition:"Forraje"},{word:"Forecast",pronunciation:"for-kast",definition:"Pronóstico"},{word:"Four",pronunciation:"for",definition:"Cuatro"},{word:"Friend",pronunciation:"fren",definition:"Amigo"},{word:"From",pronunciation:"from",definition:"De - Desde"},{word:"Food",pronunciation:"Fud",definition:"Comida"},{word:"Family",pronunciation:"femly",definition:"Familia"},{word:"Front",pronunciation:"front",definition:"Frente"},{word:"Game",pronunciation:"gueim",definition:"Juego"},{word:"Gear",pronunciation:"guir",definition:"Engranaje"},{word:"Geographer",pronunciation:"yia-grefer",definition:"Geógrafo"},{word:"Geographic",pronunciation:"yio-grafic",definition:"Gegráfico"},{word:"Geography",pronunciation:"yia-grefi",definition:"Geografía"},{word:"Geologic",pronunciation:"yio-loyic",definition:"Geológico"},{word:"Geology",pronunciation:"yia-leyi",definition:"Geología"},{word:"Ground",pronunciation:"graund",definition:"Suelo"},{word:"Group",pronunciation:"grup",definition:"Grupo"},{word:"Glasses",pronunciation:"glases",definition:"Gafas"},{word:"Hammock",pronunciation:"jamek",definition:"Hamaca"},{word:"Harbor",pronunciation:"jarvor",definition:"Puerto"},{word:"Hard",pronunciation:"jard",definition:"Duro - Difícil"},{word:"Hat",pronunciation:"jat",definition:"Sombrero"},{word:"Headlamp",pronunciation:"jed-lamp",definition:"Linterna de cabeza"},{word:"Hear",pronunciation:"jir",definition:"Aquí"},{word:"Higt",pronunciation:"jai",definition:"Alto"},{word:"Hike",pronunciation:"jaik",definition:"Caminata"},{word:"Height",pronunciation:"jait",definition:"Altura"},{word:"Harness",pronunciation:"arnes",definition:"Arnés"},{word:"Hook",pronunciation:"jok",definition:"Gancho"},{word:"Helmet",pronunciation:"elmet",definition:"Casco"},{word:"Hill",pronunciation:"jil",definition:"Colina"},{word:"Home",pronunciation:"jom",definition:"Hogar"},{word:"House",pronunciation:"jaus",definition:"Casa"},{word:"Hurricane",pronunciation:"",definition:"Huracán"},{word:"Hydration",pronunciation:"jai-dreichen",definition:"Hidratación"},{word:"Hypothermia",pronunciation:"jaipotermia",definition:"Hipotermia"},{word:"If",pronunciation:"if",definition:"si"},{word:"Image",pronunciation:"imech",definition:"Imagen"},{word:"In",pronunciation:"in",definition:"En"},{word:"Incident",pronunciation:"incident",definition:"Incidente"},{word:"Index",pronunciation:"index",definition:"Ídice"},{word:"Information",pronunciation:"infor-meichen",definition:"Información"},{word:"Infrastructure",pronunciation:"infras-trakcher",definition:"Infraestructura"},{word:"Input",pronunciation:"input",definition:"Entrada - Aporte"},{word:"Insects",pronunciation:"insekt",definition:"Insecto"},{word:"Integration",pronunciation:"inte-greichen",definition:"Integración"},{word:"Intelligence",pronunciation:"in-teliyens",definition:"Inteligencia"},{word:"Interface",pronunciation:"interfeis",definition:"Interfaz"},{word:"Interval",pronunciation:"interval",definition:"Intervalo"},{word:"Into",pronunciation:"intu",definition:"En"},{word:"Investment",pronunciation:"investment",definition:"Inversión"},{word:"Is",pronunciation:"is",definition:"Es"},{word:"Island",pronunciation:"ailand",definition:"Isla"},{word:"It",pronunciation:"it",definition:"El"},{word:"Just",pronunciation:"yost",definition:"Solo - Justo"},{word:"Juice",pronunciation:"",definition:"Jugo"},{word:"Key",pronunciation:"ki",definition:"Llave"},{word:"Keyboard",pronunciation:"ki-bord",definition:"Teclado"},{word:"Kind",pronunciation:"kaind",definition:"Tipo - Amable"},{word:"Kit",pronunciation:"kit",definition:"Equipo"},{word:"Kookie",pronunciation:"kuki",definition:"Galleta"},{word:"Knife",pronunciation:"Naif",definition:"Cuchillo"},{word:"Lake",pronunciation:"leik",definition:"Lago"},{word:"Land",pronunciation:"land",definition:"Tierra"},{word:"Landmark",pronunciation:"land-mark",definition:"Punto de referencia"},{word:"Lantern",pronunciation:"lantern",definition:"Linterna"},{word:"Last",pronunciation:"last",definition:"Último"},{word:"Latitude",pronunciation:"latitud",definition:"Latitud"},{word:"Left",pronunciation:"left",definition:"Izquierda"},{word:"Legend",pronunciation:"leyend",definition:"Leyenda"},{word:"Letter",pronunciation:"leder",definition:"Carta - Letra"},{word:"Level",pronunciation:"level",definition:"Nivel"},{word:"Library",pronunciation:"laibrery",definition:"Biblioteca"},{word:"Life",pronunciation:"laif",definition:"Vida"},{word:"Little",pronunciation:"",definition:"Pequeño - Poco"},{word:"Load",pronunciation:"loud",definition:"Carga"},{word:"Long",pronunciation:"long",definition:"largo"},{word:"Longitude",pronunciation:"lonyi-tud",definition:"Longitud"},{word:"Lowercase",pronunciation:"louer-keis",definition:"Minúscula"},{word:"Late",pronunciation:"leit",definition:"Tarde"},{word:"Lighter",pronunciation:"lairer",definition:"Encendedor"},{word:"Line",pronunciation:"lain",definition:"Línea"},{word:"Lunch",pronunciation:"lanch",definition:"Almuerzo"},{word:"Lamp",pronunciation:"lamp",definition:"Lámpara"},{word:"Machete",pronunciation:"macheti",definition:"Machete"},{word:"Machine",pronunciation:"ma-chin",definition:"Máquina"},{word:"Medication",pronunciation:"medi-keichen",definition:"Medicamento"},{word:"Meat",pronunciation:"mit",definition:"Carne"},{word:"Mistake",pronunciation:"mesteik",definition:"Error"},{word:"Many",pronunciation:"meni",definition:"Muchos"},{word:"Map",pronunciation:"map",definition:"Mapa"},{word:"Medicine",pronunciation:"medisin",definition:"Medicamento"},{word:"Meeting",pronunciation:"miring",definition:"Reunión"},{word:"Men",pronunciation:"men",definition:"Hombres"},{word:"Message",pronunciation:"mesich",definition:"Mensaje"},{word:"Metrics",pronunciation:"metriks",definition:"Métrica"},{word:"Microphone",pronunciation:"maikre-fon",definition:"Micrófono"},{word:"Migration",pronunciation:"mai-greichen",definition:"Miración"},{word:"Mind",pronunciation:"maind",definition:"Mente"},{word:"Mirror",pronunciation:"mirror",definition:"Espejo"},{word:"Mobile",pronunciation:"",definition:"Móvil"},{word:"Moment",pronunciation:"moment",definition:"Momento"},{word:"Monitor",pronunciation:"maneder",definition:"Monitor"},{word:"More",pronunciation:"mor",definition:"Más"},{word:"Most",pronunciation:"most",definition:"Más"},{word:"Mother",pronunciation:"moder",definition:"Mamá"},{word:"Mountain",pronunciation:"maun-ten",definition:""},{word:"Mouse",pronunciation:"maus",definition:"Ratón"},{word:"Much",pronunciation:"mach",definition:"Mucho"},{word:"My",pronunciation:"may",definition:"Mi"},{word:"National",pronunciation:"nashenal",definition:"Nacional"},{word:"Natural",pronunciation:"",definition:"Natural"},{word:"Nature",pronunciation:"neicher",definition:"Naturaleza"},{word:"Navigation",pronunciation:"navi-gueichen",definition:"Navegación"},{word:"Network",pronunciation:"net-work",definition:"Red"},{word:"Never",pronunciation:"never",definition:"Nunca"},{word:"New",pronunciation:"niu",definition:"Nuevo"},{word:"Next",pronunciation:"next",definition:"Siguiente"},{word:"Night",pronunciation:"nait",definition:"Noche"},{word:"No",pronunciation:"nou",definition:"No"},{word:"North",pronunciation:"nort",definition:"Norte"},{word:"Northwest",pronunciation:"nort-west",definition:"Noroeste"},{word:"Not",pronunciation:"not",definition:"No"},{word:"Nothing",pronunciation:"noting",definition:"Nada"},{word:"Now",pronunciation:"nao",definition:"Ahora"},{word:"Number",pronunciation:"namber",definition:"Número"},{word:"Of",pronunciation:"of",definition:"De"},{word:"Off",pronunciation:"of",definition:"Apagado"},{word:"Often",pronunciation:"afen",definition:"Con frecuencia"},{word:"Oil",pronunciation:"oil",definition:"Aceite"},{word:"Old",pronunciation:"old",definition:"Viejo"},{word:"Once",pronunciation:"uans",definition:"Una vez - Alguna vez"},{word:"One",pronunciation:"uan",definition:"Uno"},{word:"Oneline",pronunciation:"on-lain",definition:"En línea"},{word:"Only",pronunciation:"only",definition:"Solo"},{word:"Or",pronunciation:"or",definition:"O"},{word:"Orientation",pronunciation:"orien-teichen",definition:"Orientación"},{word:"Other",pronunciation:"oder",definition:"Otro"},{word:"Our",pronunciation:"aur",definition:"Nuestro"},{word:"Out",pronunciation:"aut",definition:"Afuera"},{word:"Output",pronunciation:"aut-put",definition:"Producción - Salida"},{word:"Over",pronunciation:"over",definition:"Encima - Más de - Terminado"},{word:"Own",pronunciation:"oun",definition:"Aceptar - Propio"},{word:"On",pronunciation:"an",definition:"En"},{word:"Orange",pronunciation:"oranch",definition:"Naranja"},{word:"Page",pronunciation:"pech",definition:"Página"},{word:"Pad",pronunciation:"pad",definition:"Colchoneta"},{word:"Part",pronunciation:"part",definition:"Parte"},{word:"Patch",pronunciation:"pach",definition:"Parche"},{word:"Port",pronunciation:"port",definition:"Puerto"},{word:"People",pronunciation:"pipol",definition:"Personas"},{word:"Performance",pronunciation:"per-formans",definition:"Rendimiento"},{word:"Peel",pronunciation:"pil",definition:"Rendimiento"},{word:"Phone",pronunciation:"fon",definition:"Teléfono"},{word:"Photography",pronunciation:"fotagrefi",definition:"Fotografía"},{word:"physical",pronunciation:"fisical",definition:"Física"},{word:"Physics",pronunciation:"fisiks",definition:"Física"},{word:"Pill",pronunciation:"pil",definition:"Píldora"},{word:"Pillow",pronunciation:"",definition:""},{word:"Place",pronunciation:"pleis",definition:"Lugar"},{word:"Plane",pronunciation:"plein",definition:"Plano"},{word:"Point",pronunciation:"point",definition:"Punto"},{word:"Poisonous",pronunciation:"poisenes",definition:"Venenoso"},{word:"Political",pronunciation:"",definition:"Política"},{word:"Politics",pronunciation:"poli-tiks",definition:""},{word:"Politician",pronunciation:"poli-tishen",definition:"Político"},{word:"Press",pronunciation:"",definition:"Político"},{word:"Printer",pronunciation:"printer",definition:"Impresora"},{word:"Problem",pronunciation:"prable",definition:"Problema"},{word:"Project",pronunciation:"proyect",definition:"Proyecto"},{word:"Projection",pronunciation:"proyec-shen",definition:"Proyección"},{word:"Protection",pronunciation:"protec-shen",definition:"Protección"},{word:"Purifier",pronunciation:"",definition:"Purificador"},{word:"Question",pronunciation:"cues-chen",definition:"Pregunta"},{word:"Radio",pronunciation:"",definition:"Radio"},{word:"Range",pronunciation:"ruench",definition:"Rango"},{word:"Reach",pronunciation:"ruich",definition:"Alcanzar"},{word:"Real",pronunciation:"ruial",definition:"Real"},{word:"Reality",pronunciation:"ruialidi",definition:"Realidad"},{word:"Recovery",pronunciation:"",definition:""},{word:"Recognition",pronunciation:"recog-nichen",definition:"Reconocimiento"},{word:"Recognition",pronunciation:"re-kanesens",definition:"Reconocimiento"},{word:"Relief",pronunciation:"relif",definition:"Socorro - Relieve"},{word:"Remote",pronunciation:"remout",definition:"Remoto"},{word:"Response",pronunciation:"ris-pans",definition:"Respuesta"},{word:"Repellent",pronunciation:"ripelent",definition:"Repelente"},{word:"Rifle",pronunciation:"ruai-fol",definition:"Rifle"},{word:"Right",pronunciation:"rua-it",definition:"Derecha - correcto - razon"},{word:"River",pronunciation:"ruiver",definition:"Río"},{word:"Rice",pronunciation:"raiz",definition:"Arroz"},{word:"Road",pronunciation:"roud",definition:"Carretera - Camino"},{word:"Robotics",pronunciation:"rou-badiks",definition:"Robótica"},{word:"Rope",pronunciation:"rop",definition:"Soga"},{word:"Route",pronunciation:"rut",definition:"Ruta"},{word:"Security",pronunciation:"rut",definition:"Ruta"},{word:"Same",pronunciation:"seim",definition:"Mismo"},{word:"Satellite",pronunciation:"",definition:"Satélite"},{word:"Since",pronunciation:"sens",definition:"Desde"},{word:"Scale",pronunciation:"skel",definition:"Escala"},{word:"School",pronunciation:"skul",definition:"Escuela"},{word:"Scissors",pronunciation:"si-sors",definition:"Tijeras"},{word:"Sea",pronunciation:"si",definition:"Mar"},{word:"Seabed",pronunciation:"si-bed",definition:"Fondo del mar"},{word:"Security",pronunciation:"se-kiuridi",definition:"Seguridad"},{word:"Server",pronunciation:"server",definition:"Servidor"},{word:"Service",pronunciation:"serves",definition:"Servicio"},{word:"Shelter",pronunciation:"chelter",definition:"Refugio - Albergue"},{word:"Side",pronunciation:"said",definition:"Lado"},{word:"Signal",pronunciation:"signal",definition:"Señal"},{word:"Skill",pronunciation:"skil",definition:"Habilidad"},{word:"Sleeping bag",pronunciation:"sliping-bak",definition:"Bolsa de dormir"},{word:"Slope",pronunciation:"slop",definition:"Pendiente - Inclinación"},{word:"Small",pronunciation:"smol",definition:"Pequeño"},{word:"Snake",pronunciation:"snek",definition:"Serpiente"},{word:"So",pronunciation:"sou",definition:"Entonces"},{word:"Soda",pronunciation:"soda",definition:"Gaseosa"},{word:"Some",pronunciation:"som",definition:"Alguno"},{word:"Something",pronunciation:"som-ting",definition:"Algo"},{word:"Sometimes",pronunciation:"somtaims",definition:"A veces"},{word:"South",pronunciation:"",definition:"Sur"},{word:"Southeast",pronunciation:"",definition:"Sureste"},{word:"Southwest",pronunciation:"",definition:"Sur oeste"},{word:"Spell",pronunciation:"spell",definition:"Deletrear"},{word:"State",pronunciation:"steit",definition:"Estado"},{word:"Still",pronunciation:"stell",definition:"Aún"},{word:"Storage",pronunciation:"storech",definition:"Almacenamiento"},{word:"Storm",pronunciation:"storm",definition:"Tormenta"},{word:"Story",pronunciation:"stoty",definition:"Historia"},{word:"Stream",pronunciation:"strim",definition:"Corriente"},{word:"Such",pronunciation:"sach",definition:"Semejante"},{word:"Sun",pronunciation:"son",definition:"Sol"},{word:"Shirt",pronunciation:"shert",definition:"Camisa"},{word:"Sunscreen",pronunciation:"sons-krin",definition:"Protector solar"},{word:"Survival",pronunciation:"ser-vayvol",definition:"Supervivencia"},{word:"Survivor",pronunciation:"ser-vaivor",definition:"Sobreviviente"},{word:"System",pronunciation:"sistem",definition:"Sistema"},{word:"Shower",pronunciation:"shouer",definition:"Ducha"},{word:"Tablet",pronunciation:"tablet",definition:"Tableta"},{word:"Tent",pronunciation:"tent",definition:"Carpa"},{word:"Time",pronunciation:"Taim",definition:"Tiempo"},{word:"To",pronunciation:"tu",definition:""},{word:"Trap",pronunciation:"truap",definition:"Trampa"},{word:"Technology",pronunciation:"tecnoloyi",definition:"Tecnología"},{word:"technique",pronunciation:"tec-nic",definition:"Técnica"},{word:"Terrain",pronunciation:"terren",definition:"Terreno"},{word:"Than",pronunciation:"dan",definition:"Que"},{word:"That",pronunciation:"dat",definition:"Ese"},{word:"The",pronunciation:"de",definition:"El - La - los - Las"},{word:"Their",pronunciation:"der",definition:"Su"},{word:"Then",pronunciation:"den",definition:"Entonces"},{word:"There",pronunciation:"der",definition:"Allá"},{word:"These",pronunciation:"dis",definition:"Estos"},{word:"This",pronunciation:"des",definition:"Esto"},{word:"Those",pronunciation:"dous",definition:"Aquellos"},{word:"Thought",pronunciation:"",definition:"Pensamiento"},{word:"Three",pronunciation:"",definition:"Tres"},{word:"Through",pronunciation:"tru",definition:"A través de"},{word:"Thunder",pronunciation:"tander",definition:"Trueno"},{word:"Ticket",pronunciation:"tiket",definition:"Boleto"},{word:"Tide",pronunciation:"taid",definition:"Marea"},{word:"Time",pronunciation:"taim",definition:"Tiempo"},{word:"Together",pronunciation:"tu-gueder",definition:"Juntos"},{word:"Too",pronunciation:"tu",definition:"También"},{word:"Tool",pronunciation:"tul",definition:"Herramientas"},{word:"Top",pronunciation:"tap",definition:"Arriba"},{word:"Topographic",pronunciation:"tapografic",definition:"Topográfico"},{word:"Topography",pronunciation:"te-pagrefi",definition:"Topografía"},{word:"Tornado",pronunciation:"tor-neido",definition:"Tornado"},{word:"Treatment",pronunciation:"truit-ment",definition:"Tratamiento"},{word:"Tree",pronunciation:"",definition:"Árbol"},{word:"Tweezers",pronunciation:"tuisers",definition:"Pinzas"},{word:"Two",pronunciation:"tu",definition:"Dos"},{word:"Train",pronunciation:"trein",definition:"Entrenar - Tren"},{word:"Trouble",pronunciation:"truabol",definition:"Problemas"},{word:"Us",pronunciation:"os",definition:"Nosotro"},{word:"User",pronunciation:"iuser",definition:"Usuario"},{word:"Until",pronunciation:"antil",definition:"Hasta"},{word:"Unless",pronunciation:"enles",definition:"A menos que"},{word:"Valley",pronunciation:"vali",definition:"Valle"},{word:"Variation",pronunciation:"",definition:"Variación"},{word:"Vegetation",pronunciation:"veye-teichen",definition:"Vegetación"},{word:"Venom",pronunciation:"venom",definition:"Veneno"},{word:"Very",pronunciation:"very",definition:"Muy"},{word:"Video",pronunciation:"vidio",definition:"Video"},{word:"Volcano",pronunciation:"volkeino",definition:"Volcán"},{word:"Vulnerability",pronunciation:"",definition:"Vulnerabilidad"},{word:"Vulnerable",pronunciation:"",definition:"Vulnerable"},{word:"Water",pronunciation:"uarer",definition:"Agua"},{word:"Waterfall",pronunciation:"uarer-fol",definition:"Cascada"},{word:"Way",pronunciation:"uey",definition:"Camino"},{word:"Weather",pronunciation:"ueder",definition:"Clima"},{word:"Website",pronunciation:"ueb-sait",definition:"Website"},{word:"Well",pronunciation:"uel",definition:"Bien - Bueno"},{word:"West",pronunciation:"uest",definition:"Oeste"},{word:"Wetland",pronunciation:"uet-land",definition:"Humedal"},{word:"What",pronunciation:"uat",definition:"Qué"},{word:"When",pronunciation:"uen",definition:"Cuando"},{word:"Where",pronunciation:"uer",definition:"Dónde"},{word:"Which",pronunciation:"uech",definition:"Cual"},{word:"While",pronunciation:"uail",definition:"Mientras"},{word:"White",pronunciation:"uait",definition:"Blanco"},{word:"Who",pronunciation:"ju",definition:"Quien"},{word:"Wilderness",pronunciation:"uildernes",definition:"Desierto"},{word:"With",pronunciation:"uit",definition:"Con"},{word:"Within",pronunciation:"uit-in",definition:"Dentro"},{word:"Without",pronunciation:"uit-out",definition:"Sin"},{word:"World",pronunciation:"uorld",definition:"Mundo"},{word:"Wave",pronunciation:"ueiv",definition:"Ola - Onda"},{word:"Wound",pronunciation:"wud",definition:"Herida"},{word:"Whether",pronunciation:"ueder",definition:"Si"},{word:"Year",pronunciation:"ier",definition:"Año"},{word:"Yet",pronunciation:"yet",definition:"Todavía"},{word:"Your",pronunciation:"iur",definition:"Su"}],nd=[{word:"Accept",pronunciation:"ak-sept",definition:"Aceptar"},{word:"Access",pronunciation:"ak-ses",definition:"Acceder - Acceso"},{word:"Act",pronunciation:"act",definition:"Actuar, Acto"},{word:"Add",pronunciation:"ad",definition:"Agregar"},{word:"Admire",pronunciation:"edmaier",definition:"Admirar"},{word:"Admire",pronunciation:"edmaier",definition:"Admirar"},{word:"Admit",pronunciation:"edmit",definition:"Admitir"},{word:"Advise",pronunciation:"ed-vais",definition:"Aconsejar"},{word:"Agree",pronunciation:"agri",definition:"Aceptar - Acordar"},{word:"Aim",pronunciation:"eim",definition:"Apuntar"},{word:"Allow",pronunciation:"alau",definition:"Permitir"},{word:"Analyze",pronunciation:"enalais",definition:"Analizar"},{word:"Announce",pronunciation:"anauns",definition:"Anunciar"},{word:"Answer",pronunciation:"enser",definition:"Responder - Respuesta"},{word:"Appear",pronunciation:"apir",definition:"Aparecer"},{word:"Apply",pronunciation:"aplay",definition:"Aplicar"},{word:"Appreciate",pronunciation:"aprishi-eit",definition:"Agradecer"},{word:"Approach",pronunciation:"aproch",definition:"Acercarse"},{word:"Approve",pronunciation:"apruv",definition:"Aprobar"},{word:"Argue",pronunciation:"arruench",definition:"Pactar - Planificar - Organizar"},{word:"Arrive",pronunciation:"",definition:"Llegar"},{word:"Ask",pronunciation:"ask",definition:"Preguntar"},{word:"Assess",pronunciation:"ases",definition:"Evaluar - Analizar"},{word:"Assume",pronunciation:"asum",definition:"Asumir"},{word:"Attach",pronunciation:"atach",definition:"Adjuntar - Añadir"},{word:"Attack",pronunciation:"atak",definition:"Atacar - Ataque"},{word:"Attend",pronunciation:"atend",definition:"Atender - Asistir"},{word:"Attract",pronunciation:"atract",definition:"Atraer"},{word:"Avoid",pronunciation:"avoid",definition:"Evitar"},{word:"Back",pronunciation:"bak",definition:"Regresar - Atras"},{word:"Base",pronunciation:"beis",definition:"Basar - Establecer"},{word:"Belive",pronunciation:"beliv",definition:"Creer"},{word:"Belong",pronunciation:"belong",definition:"Pertenecer"},{word:"Blame",pronunciation:"bleim",definition:"Culpar - Responsabilidad"},{word:"Block",pronunciation:"blok",definition:"Bloquear - Bloque "},{word:"Boil",pronunciation:"boil",definition:"Hervir"},{word:"Borrow",pronunciation:"",definition:"Pedir prestado"},{word:"Bother",pronunciation:"bader",definition:"Molestar"},{word:"Bounce",pronunciation:"bauns",definition:"Rebotar"},{word:"Breathe",pronunciation:"bruid",definition:"Respirar"},{word:"Brush",pronunciation:"brach",definition:"Cepillar"},{word:"Burn",pronunciation:"bern",definition:"Quemar"},{word:"Bury",pronunciation:"",definition:"Enterrar"},{word:"Calculate",pronunciation:"kalkiu-leit",definition:"Calcular"},{word:"Call",pronunciation:"col",definition:"Llamar"},{word:"Calm",pronunciation:"calm",definition:"Calmar - Calma"},{word:"Camp",pronunciation:"camp",definition:"Acampar - Campamento"},{word:"Cancel",pronunciation:"ken-sol",definition:"Cancelar"},{word:"Capture",pronunciation:"cap-cher",definition:"Capturar - Captura"},{word:"Care",pronunciation:"ker",definition:"Cuidar - Cuidado"},{word:"Carry",pronunciation:"kerrui",definition:"Llevar - Portar"},{word:"Cause",pronunciation:"kas",definition:"Causar - Causa - Caso"},{word:"Celebrate",pronunciation:"sele-breit",definition:"Celebrar"},{word:"Challenge",pronunciation:"chalench",definition:"Desafiar"},{word:"Change",pronunciation:"cheinch",definition:"Cambiar"},{word:"Charge",pronunciation:"charch",definition:"Cargar"},{word:"Chase",pronunciation:"cheis",definition:"Perseguir"},{word:"Check",pronunciation:"chek",definition:"Revisar"},{word:"Cheer",pronunciation:"chir",definition:"Animar - Alegría"},{word:"Claim",pronunciation:"cleim",definition:"Reclamar"},{word:"Clarify",pronunciation:"cleri-fai",definition:"Aclarar"},{word:"Clean",pronunciation:"clin",definition:"Limpiar - Limpio"},{word:"Clear ",pronunciation:"clir",definition:"Despejar - Limpio - despejado"},{word:"Climb ",pronunciation:"claim",definition:"Escalar - Trepar"},{word:"Close",pronunciation:"clous",definition:"Cerrar"},{word:"Collect",pronunciation:"colect",definition:"Recolectar - Recoger"},{word:"Comment",pronunciation:"coument",definition:"Comentar - Comentario"},{word:"Communicate",pronunciation:"comiuni-keit",definition:"Comunicarse - Comunicar"},{word:"Compare",pronunciation:"comper",definition:"Comparar"},{word:"Compete",pronunciation:"compit",definition:"Competir"},{word:"Complain",pronunciation:"com-plein",definition:"Quejarse - Queja"},{word:"Complete",pronunciation:"com-plit",definition:"Completar"},{word:"Concentrate",pronunciation:"cansen-trueit",definition:"Concentrarse"},{word:"Conclude",pronunciation:"ken-klud",definition:"Concluir"},{word:"Confess",pronunciation:"ken-fes",definition:"Confesar"},{word:"Confirm",pronunciation:"ken-ferm",definition:"Confirmar"},{word:"Connect",pronunciation:"ke-nect",definition:"Conectar"},{word:"Conserve",pronunciation:"ken-serv",definition:"Conservar"},{word:"Consider",pronunciation:"ken-sider",definition:"Considerar"},{word:"Consist",pronunciation:"ken-sist",definition:"Consistir"},{word:"Construct",pronunciation:"kenstroct",definition:"Construir"},{word:"Consult",pronunciation:"ken-sel",definition:"Consultar"},{word:"Contain",pronunciation:"ken-tein",definition:"Contener"},{word:"Continue",pronunciation:"ken-tiniu",definition:"Continuar"},{word:"Contribute",pronunciation:"ken-truebiut",definition:"Contribuir"},{word:"Convert",pronunciation:"ken-vert",definition:"Convertir"},{word:"Cook",pronunciation:"kuc",definition:"Cocinar"},{word:"Cooperate",pronunciation:"kou-opereit",definition:"Cooperar"},{word:"Copy",pronunciation:"copi",definition:"Copiar"},{word:"Correct",pronunciation:"kerrect",definition:"Corregir - Correcto"},{word:"Cost",pronunciation:"cost",definition:"Costar - Costo"},{word:"Counsel",pronunciation:"kaun-sol",definition:"Aconsejar - Consejo"},{word:"Count",pronunciation:"kaunt",definition:"Contar"},{word:"Cover",pronunciation:"cover",definition:"Cubrir"},{word:"Crawl",pronunciation:"crol",definition:"Arrastrarse"},{word:"Create",pronunciation:"crieit",definition:"Crear"},{word:"Cross",pronunciation:"cros",definition:"Cruzar - Cruz"},{word:"Cry",pronunciation:"krai",definition:"Llorar"},{word:"Damage",pronunciation:"dameich",definition:"Dañar - Daño"},{word:"Dance",pronunciation:"dans",definition:"Bailar - Danza"},{word:"Dare",pronunciation:"der",definition:"Atreverse - Atrevimiento - Desafiar"},{word:"Date",pronunciation:"deit",definition:"Citar - Cita - Fecha"},{word:"Discuss",pronunciation:"des-cas",definition:"Conversar - Debatir"},{word:"Decide",pronunciation:"desaid",definition:"Decidir"},{word:"Declare",pronunciation:"de-cler",definition:"Declarar"},{word:"Decline",pronunciation:"di-clain",definition:"Rechazar - Declinar - Disminución"},{word:"Decorate",pronunciation:"decoreit",definition:"Decorar"},{word:"Decrease",pronunciation:"de-kruis",definition:"Disminuir"},{word:"Dehydrate",pronunciation:"dijai-dreit",definition:"Deshidratar"},{word:"Delay",pronunciation:"delei",definition:"Retrasar - Posponer - Retraso"},{word:"Delete",pronunciation:"delit",definition:"Eliminar"},{word:"Deliver",pronunciation:"deliver",definition:"Entregar"},{word:"Demand",pronunciation:"demand",definition:"Demandar - Demanda"},{word:"Demonstrate",pronunciation:"demenstreit",definition:"Demostrar"},{word:"Depend",pronunciation:"dipend",definition:"Depender"},{word:"Deploy",pronunciation:"deploy",definition:"Desplegar"},{word:"Describe",pronunciation:"des-craib",definition:"Describir"},{word:"Design",pronunciation:"desain",definition:"Diseñar - Diseño"},{word:"Desire",pronunciation:"desaier",definition:"Desear - Deseo"},{word:"Destroy",pronunciation:"distroy",definition:"Destruir"},{word:"Detect",pronunciation:"detect",definition:"Detectar"},{word:"Develop",pronunciation:"develep",definition:"Desarrollar"},{word:"Dictate",pronunciation:"dicteit",definition:"Dictar"},{word:"Die",pronunciation:"dai",definition:"Morir"},{word:"Direct",pronunciation:"",definition:"Dirigir - Directo"},{word:"Disagree",pronunciation:"dise-gri",definition:"No estar de acuerdo"},{word:"Disappear",pronunciation:"disapir",definition:"Desaparecer"},{word:"Discover",pronunciation:"deskaver",definition:"Descubrir"},{word:"Discuss",pronunciation:"deskas",definition:"Conversar - Discutir"},{word:"Distribute",pronunciation:"destribiut",definition:"Distribuir"},{word:"Distribute",pronunciation:"destribiut",definition:"Distribuir"},{word:"Distribute",pronunciation:"destribiut",definition:"Distribuir"},{word:"Distribute",pronunciation:"destribiut",definition:"Distribuir"},{word:"Dispose",pronunciation:"dispos",definition:"Disponer - Colocar - Resolver"},{word:"Distribute",pronunciation:"destribiut",definition:"Distribuir"},{word:"Dive",pronunciation:"daiv",definition:"Bucear - Sumergirse"},{word:"Divide",pronunciation:"devaid",definition:"Dividir"},{word:"Donate",pronunciation:"doneit",definition:"Donar"},{word:"Doubt",pronunciation:"dout",definition:"Dudar - Duda"},{word:"Download",pronunciation:"daun-loud",definition:"Dudar - Duda"},{word:"Dream",pronunciation:"dru-im",definition:"Soñar - Sueño"},{word:"Dress",pronunciation:"dru-es",definition:"Vertirse - Vestido - Vestir"},{word:"Drill",pronunciation:"druil",definition:"Perforar"},{word:"Drop",pronunciation:"drop",definition:"Dejar caer - caida - descenso - Gota"},{word:"Dry",pronunciation:"dray",definition:"Secar - Seco"},{word:"Earn",pronunciation:"ern",definition:"Obtener - Ganar"},{word:"FIlter",pronunciation:"filter",definition:"Filtrar"},{word:"Fix",pronunciation:"fix",definition:"Reparar"},{word:"Guide",pronunciation:"gaid",definition:"Guiar - Guía"},{word:"Handle",pronunciation:"jendel",definition:"Manejar - Controlar"},{word:"Heat",pronunciation:"jit",definition:"Calentar - Calor"},{word:"Hunt",pronunciation:"jant",definition:"Cazar - Caza"},{word:"Hydrate",pronunciation:"jai-drueit",definition:"Hidratar"},{word:"Improve",pronunciation:"impruf",definition:"Mejorar"},{word:"Increase",pronunciation:"incruis",definition:"Aumentar - Aumento"},{word:"Learn",pronunciation:"lern",definition:"Aprender"},{word:"Like",pronunciation:"laik",definition:"Gustar - Como"},{word:"Manage",pronunciation:"menech",definition:"Manejar - Administrar"},{word:"Merge",pronunciation:"merch",definition:"unir"},{word:"Open",pronunciation:"open",definition:"Abrir - Abierto"},{word:"Organize",pronunciation:"organais",definition:"Organizar"},{word:"Penetrate",pronunciation:"penetreit",definition:"Penetrar"},{word:"Plan",pronunciation:"plan",definition:"Planear - Plan"},{word:"Plant",pronunciation:"plant",definition:"Plantar - Planta"},{word:"Play",pronunciation:"pley",definition:"Jugar - Reproducir - Tocar"},{word:"Poison",pronunciation:"poisen",definition:"Envenenar - Veneno"},{word:"Present",pronunciation:"present",definition:"Presentar"},{word:"Press",pronunciation:"pres",definition:"Presionar - Prensa"},{word:"Print",pronunciation:"print",definition:"Imprimir - Impresión"},{word:"Program",pronunciation:"prou-gram",definition:"Programar - Programa"},{word:"Promise",pronunciation:"promes",definition:"Prometer - Promesa"},{word:"Protect",pronunciation:"pro-tect",definition:"Proteger"},{word:"Provide",pronunciation:"provaid",definition:"Proporcionar - Proveer"},{word:"Purify",pronunciation:"piure-fay",definition:"Purificar"},{word:"Recover",pronunciation:"ruecover",definition:"Recuperar"},{word:"Report",pronunciation:"rueport",definition:"Reportar - Reporte"},{word:"Rescue",pronunciation:"rues-kiu",definition:"Rescatar - Rescate"},{word:"Return",pronunciation:"rue-tern",definition:"Devolver"},{word:"Save",pronunciation:"seif",definition:"Salvar - Guardar - Ahorrar"},{word:"Search",pronunciation:"serch",definition:"Buscar - Búsqueda"},{word:"Seem",pronunciation:"sim",definition:"Parecer"},{word:"Share",pronunciation:"cher",definition:"Compartir"},{word:"Shave",pronunciation:"sheiv",definition:"Afeitar"},{word:"Smell",pronunciation:"smel",definition:"Oler"},{word:"Spell",pronunciation:"spell",definition:"Deletrear - Hechizo"},{word:"Spend",pronunciation:"spend",definition:"Gastar"},{word:"Spill",pronunciation:"spil",definition:"Derramar"},{word:"Start",pronunciation:"start",definition:"Comenzar"},{word:"Stop",pronunciation:"stap",definition:"Detenerse"},{word:"Study",pronunciation:"stady",definition:"Estudiar"},{word:"Support",pronunciation:"se-port",definition:"Apoyar - Financiar - Apoyo"},{word:"Survive",pronunciation:"servaiv",definition:"Sobrevivir"},{word:"Test",pronunciation:"test",definition:"Probar - Prueba"},{word:"Tie",pronunciation:"tai",definition:"Atar - Corbata - Empate"},{word:"Travel",pronunciation:"truavol",definition:"Viajar - Viaje"},{word:"Use",pronunciation:"ius",definition:"Usar - Uso"},{word:"Walk",pronunciation:"uok",definition:"Caminar - Caminata"},{word:"Warn",pronunciation:"uorn",definition:"Advertir"},{word:"Whistle",pronunciation:"uisel",definition:"Silbar - Silbato"}],tm=[{word:"Arise",pronunciation:"",definition:"Levantarse - Surgir"},{word:"Be",pronunciation:"bi",definition:"Ser - Estar"},{word:"Become",pronunciation:"bicom",definition:"Convertirse"},{word:"Begin",pronunciation:"biguin",definition:"Comenzar"},{word:"Bend",pronunciation:"bend",definition:"Doblar"},{word:"Bet",pronunciation:"bet",definition:"Apostar - Apuesta"},{word:"Bite",pronunciation:"bait",definition:"Morder - Mordedura"},{word:"Beat",pronunciation:"bit",definition:"Derrotar"},{word:"Bleed",pronunciation:"blid",definition:"Sangrar"},{word:"Blow",pronunciation:"blou",definition:"Soplar"},{word:"Break",pronunciation:"breik",definition:"Romper - Quebrar - Pausa"},{word:"Breed",pronunciation:"brid",definition:"Criar - Raza"},{word:"Bring",pronunciation:"bring",definition:"Traer"},{word:"Build",pronunciation:"bild",definition:"Construir"},{word:"Buy",pronunciation:"bay",definition:"Comprar"},{word:"Catch",pronunciation:"catch",definition:"Atrapar"},{word:"Choose",pronunciation:"chus",definition:"Elegir"},{word:"Cling",pronunciation:"cling",definition:"Aferrarse"},{word:"Come",pronunciation:"com",definition:"Venir"},{word:"Cost",pronunciation:"cost",definition:"Costar - Costo"},{word:"Cut",pronunciation:"cot",definition:"Cortar - Corte"},{word:"Deal",pronunciation:"dil",definition:"Negociar - Trato"},{word:"Dig",pronunciation:"dig",definition:"Cavar - Excavar"},{word:"Do",pronunciation:"du",definition:"Hacer"},{word:"Draw",pronunciation:"drou",definition:"Dibujar"},{word:"Drink",pronunciation:"druink",definition:"Beber"},{word:"Drive",pronunciation:"druaiv",definition:"Conducir"},{word:"Dwell",pronunciation:"druell",definition:"Habitar - Morar"},{word:"Eat",pronunciation:"it",definition:"Comer"},{word:"Fall",pronunciation:"fol",definition:"Caer"},{word:"Feed",pronunciation:"fid",definition:"Alimentarse"},{word:"Feel",pronunciation:"fil",definition:"Sentir"},{word:"Fight",pronunciation:"fait",definition:"Pelear"},{word:"Find",pronunciation:"faind",definition:"Encontrar"},{word:"Flee",pronunciation:"fli",definition:"Huir"}],im=[{word:"Bring back",pronunciation:"bruinc bac",definition:"Devolver"},{word:"Come back",pronunciation:"com bak",definition:"Regresar"},{word:"Find out",pronunciation:"faind aut",definition:"Descubrir - Averiguar"},{word:"Figure out",pronunciation:"figuiur aut",definition:"Resolver - Entender"},{word:"Go out",pronunciation:"gou aut",definition:"Salir - Dejar de funcionar"},{word:"Give up",pronunciation:"giv up",definition:"Rendirse - dejar"},{word:"Get up",pronunciation:"get ap",definition:"Levantarse"},{word:"Get up",pronunciation:"get ap",definition:"Levantarse"},{word:"Go over",pronunciation:"gou over",definition:"Revisar - Repasar"},{word:"Go through",pronunciation:"gou tru",definition:"Atravesar - Pasar"},{word:"Wake up",pronunciation:"ueik ap",definition:"Despertarse"},{word:"Look up",pronunciation:"luc ap",definition:"Mirar hacia arriba"},{word:"Look for",pronunciation:"luc for",definition:"Buscar"},{word:"Pick up",pronunciation:"pic ap",definition:"Recoger - Levantar"},{word:"Put on",pronunciation:"put on",definition:"Vestirse - Aplicarse"},{word:"Run into",pronunciation:"ruan into",definition:"Encontrarse con algo/alguien"},{word:"Turn on",pronunciation:"torn on",definition:"Encender"},{word:"Turn off",pronunciation:"torn of",definition:"Apagar"},{word:"Take off",pronunciation:"teik of",definition:"Despegar - Quitarse"},{word:"Throw away",pronunciation:"tru euey",definition:"Tirar - Deshacerse"}],rm=[{word:"am",pronunciation:"am",definition:"Ser"},{word:"Is",pronunciation:"is",definition:"Ser"},{word:"Are",pronunciation:"arr",definition:"Ser"}],om=[{word:"Can",pronunciation:"can",definition:"Poder"},{word:"Could",pronunciation:"cud",definition:"Podría"},{word:"Will",pronunciation:"uill",definition:"Verbo auxiliar futuro"},{word:"Would",pronunciation:"wud",definition:""},{word:"Should",pronunciation:"shud",definition:"Debería"},{word:"May",pronunciation:"mey",definition:"Puede"},{word:"Might",pronunciation:"mait",definition:"Podría"},{word:"Must",pronunciation:"most",definition:"Debe"}];nd.map(e=>e.word.toLowerCase());const lm=()=>{const[e,n]=C.useState("");C.useEffect(()=>{const i=localStorage.getItem("notes");i&&n(i)},[]);const t=i=>{const r=i.target.value;n(r),localStorage.setItem("notes",r)};return f.jsx("div",{className:"notes_container",children:f.jsx("textarea",{value:e,className:"textArea",cols:"30",rows:"10",placeholder:"Escribe tus notas.",onChange:t})})},la=C.createContext({});const am=()=>{const{notesState:e}=C.useContext(la),n=[...nm,...rm,...om,...nd,...tm,...im];return f.jsxs("div",{className:"home",children:[f.jsx("div",{className:"words_container",children:f.jsxs("div",{className:"titles",children:[f.jsx("span",{children:"Palabra"}),f.jsx("span",{className:"pronunciation_t",children:"Pronunciación"}),f.jsx("span",{className:"meaning",children:"Significado"})]})}),n.map((t,i)=>f.jsx(Lh,{word:t,index:i},i)),e?f.jsx(lm,{}):null]})},um=()=>f.jsx("div",{children:f.jsx("h5",{children:"Introduction"})});const sm=()=>f.jsxs("div",{className:"rules",children:[f.jsxs("div",{className:"rule_container noun",children:[f.jsx("h1",{children:"Sustantivo"}),f.jsx("p",{children:"Son palabras que nombran a personas, animales, cosas, lugares, sentimientos e ideas, ejemplo:"}),f.jsxs("ul",{children:[f.jsxs("li",{children:[f.jsx("span",{children:"-"})," El rey, donde ",f.jsx("span",{children:"rey"})," es el sustantivo al cual podemos asignarle los articulos ",f.jsx("span",{children:"el, un"}),": un rey / el rey."]}),f.jsxs("li",{children:[f.jsx("span",{children:"-"})," Las sillas, donde ",f.jsx("span",{children:"sillas"})," es el sustantivo y ",f.jsx("span",{children:"las"})," un articulo."]})]})]}),f.jsxs("div",{className:"rule_container article",children:[f.jsx("h1",{children:"Artículo"}),f.jsx("p",{children:"Palabra que anuncia la presencia de un sustantivo, ejemplo:"}),f.jsx("ul",{children:f.jsxs("li",{children:[f.jsx("span",{children:"-"})," El auto, donde ",f.jsx("span",{children:"auto"})," es el sustantivo que va acompañado por el artículo ",f.jsx("span",{children:"el"}),"."]})}),f.jsx("h2",{children:"Artículos definidos"}),f.jsx("ul",{children:f.jsxs("li",{children:[f.jsx("span",{children:"-"})," El, la, los, las."]})}),f.jsx("h2",{children:"Artículos indefinidos"}),f.jsx("ul",{children:f.jsxs("li",{children:[f.jsx("span",{children:"-"})," Un, una, unos, unas."]})})]}),f.jsxs("div",{className:"rule_container adjective",children:[f.jsx("h1",{children:"Adjetivo"}),f.jsx("p",{children:"Palabra que acompaña a un sustantivo y describe una cualidad o estado, ejemplo:"}),f.jsx("ul",{children:f.jsxs("li",{children:[f.jsx("span",{children:"-"})," El auto rojo, donde ",f.jsx("span",{children:"rojo"})," es el adjetivo."]})}),f.jsx("ul",{children:f.jsxs("li",{children:["el = artículo ",f.jsx("br",{}),"auto = sustantivo ",f.jsx("br",{}),"rojo = ",f.jsx("span",{children:"adjetivo"})]})}),f.jsx("p",{children:"El adjetivo concuerda en género y número con el sustantivo:"}),f.jsx("ul",{children:f.jsxs("li",{children:[f.jsx("span",{children:"-"})," Avión amarillo."]})})]}),f.jsxs("div",{className:"rule_container preposition",children:[f.jsx("h1",{children:"Preposición"}),f.jsx("p",{children:"Son palabras que unen o relacionan palabras o grupos de palabras, ejemplo:"}),f.jsx("ul",{children:f.jsxs("li",{children:[f.jsx("span",{children:"-"})," la vela está en la mesa, donde ",f.jsx("span",{children:"en"})," es la preposicíon."]})}),f.jsx("ul",{children:f.jsxs("li",{children:["la = artículo ",f.jsx("br",{}),"vela = sustantivo ",f.jsx("br",{}),"está = verbo ",f.jsx("br",{}),"en = ",f.jsx("span",{children:"PREPOSOCÍON"})," ",f.jsx("br",{}),"la = artículo",f.jsx("br",{}),"mesa = sustantivo",f.jsx("br",{})]})}),f.jsx("p",{children:"Otras preposiciones son:"}),f.jsx("ul",{children:f.jsxs("li",{children:[f.jsx("span",{children:"-"})," A, ante, bajo, cabe, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, sobre, tras, versus."]})})]}),f.jsxs("div",{className:"rule_container adverb",children:[f.jsx("h1",{children:"Adverbios"}),f.jsx("p",{children:"Son palabras que no varían en género y número, son invariables y complementan el significado de otras palabras, ejemplo:"}),f.jsxs("ul",{children:[f.jsxs("li",{children:[f.jsx("span",{children:"-"})," Voy mañana, donde ",f.jsx("span",{children:"mañana"})," no varía en género (mañano) ni en número (mañanas)."]}),f.jsxs("li",{children:[f.jsx("span",{children:"-"})," Muy bien, donde ",f.jsx("span",{children:"muy"})," no varía en genero (muya) ni en número (muys)."]})]}),f.jsx("h2",{children:"Adverbios de lugar"}),f.jsx("ul",{children:f.jsxs("li",{children:[f.jsx("span",{children:"-"})," Aquí, allí, ahí, allá, arriba, abajo, cerca, lejos, dentro, fuera, delante, alrededor."]})}),f.jsx("h2",{children:"Adverbios de tiempo"}),f.jsx("ul",{children:f.jsxs("li",{children:[f.jsx("span",{children:"-"})," Hoy, luego, ahora, despues, ayer, mañana, entonces, ahora, antes, tarde, pronto."]})}),f.jsx("h2",{children:"Adverbios de modo"}),f.jsx("ul",{children:f.jsxs("li",{children:[f.jsx("span",{children:"-"})," Bien, mal, así, despacio, deprisa, gratis."]})}),f.jsx("h2",{children:"Adverbios de cantidad"}),f.jsx("ul",{children:f.jsxs("li",{children:[f.jsx("span",{children:"-"})," Mucho, poco, bastante, más, menos, muy, demasiado, casi, medio, nada, algo."]})}),f.jsx("h2",{children:"Adverbios de afirmación"}),f.jsx("ul",{children:f.jsxs("li",{children:[f.jsx("span",{children:"-"})," Sí, claro, ciertamente, también, cierto, efectivamente."]})}),f.jsx("h2",{children:"Adverbios de negación"}),f.jsx("ul",{children:f.jsxs("li",{children:[f.jsx("span",{children:"-"})," No, tampoco, nunca, jamas."]})}),f.jsx("h2",{children:"Adverbios de duda"}),f.jsx("ul",{children:f.jsxs("li",{children:[f.jsx("span",{children:"-"})," Quizás, tal vez, acaso, probablemente."]})})]}),f.jsxs("div",{className:"rule_container conjunction",children:[f.jsx("h1",{children:"Conjunciones"}),f.jsx("p",{children:"Son palabras que unen palabras o grupos de palabras que expresan ideas semejantes, ejemplo:"}),f.jsxs("ul",{children:[f.jsxs("li",{children:[f.jsx("span",{children:"-"})," Rey y reina, donde ",f.jsx("span",{children:"y"})," es la conjunción."]}),f.jsxs("li",{children:["Rey = sustantivo ",f.jsx("br",{}),"y = CONJUNCIÓN ",f.jsx("br",{}),"reina = sustantivo"]})]}),f.jsx("h2",{children:"Copulativas"}),f.jsx("ul",{children:f.jsxs("li",{children:[f.jsx("span",{children:"-"})," y, e, ni."]})}),f.jsx("h2",{children:"Disyuntivas"}),f.jsx("ul",{children:f.jsxs("li",{children:[f.jsx("span",{children:"-"})," o, u."]})}),f.jsx("h2",{children:"Adversativas"}),f.jsx("ul",{children:f.jsxs("li",{children:[f.jsx("span",{children:"-"})," pero, sino."]})})]})]});const cm=()=>{const{ActiveNote:e}=C.useContext(la);return f.jsx("div",{className:"header",children:f.jsxs("nav",{className:"nav",children:[f.jsxs("div",{className:"nav_left",children:[f.jsxs("div",{className:"mobile_menu",children:[f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{})]}),f.jsx("ul",{children:f.jsx("li",{children:f.jsx(Dh,{to:"/li/reglas/",children:"Reglas"})})})]}),f.jsx("div",{className:"nav_right",children:f.jsx("div",{className:"notes",onClick:()=>e(),children:"Notas"})})]})})};const dm=({children:e})=>f.jsx("div",{children:f.jsxs("div",{className:"layout",children:[f.jsx(cm,{}),e]})}),fm=()=>{const[e,n]=C.useState(!1);return{notesState:e,ActiveNote:()=>{n(!e)}}};function pm(){const e=fm();return f.jsx("div",{className:"app",children:f.jsx(la.Provider,{value:e,children:f.jsx(jh,{children:f.jsx(dm,{children:f.jsxs(kh,{children:[f.jsx(Ui,{path:"/li",element:f.jsx(am,{})}),f.jsx(Ui,{path:"/li/introduccion",element:f.jsx(um,{})}),f.jsx(Ui,{path:"/li/reglas",element:f.jsx(sm,{})})]})})})})})}po.createRoot(document.getElementById("root")).render(f.jsx(pm,{}));
