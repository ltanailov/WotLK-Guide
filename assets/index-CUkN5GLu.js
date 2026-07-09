var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.5`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.5`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function D(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function O(e,t){pe++,fe[pe]=e.current,e.current=t}var he=me(null),ge=me(null),_e=me(null),ve=me(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}D(he),O(he,e)}function be(){D(he),D(ge),D(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(D(he),D(ge)),ve.current===e&&(D(ve),Qf._currentValue=de)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var ht=Math.random().toString(36).slice(2),k=`__reactFiber$`+ht,gt=`__reactProps$`+ht,_t=`__reactContainer$`+ht,vt=`__reactEvents$`+ht,yt=`__reactListeners$`+ht,bt=`__reactHandles$`+ht,xt=`__reactResources$`+ht,St=`__reactMarker$`+ht;function Ct(e){delete e[k],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[k];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[k]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[k])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[k]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function A(e){e[St]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return Ae.call(Pt,e)?!0:Ae.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(ue(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&tn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&tn(e,a,t[a])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[gt]||null;if(!i)throw Error(s(90));qt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(h({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(h({},On,{newState:0,oldState:0})),$n=[9,13,27,32],er=_n&&`CompositionEvent`in window,tr=null;_n&&`documentMode`in document&&(tr=document.documentMode);var nr=_n&&`TextEvent`in window&&!tr,rr=_n&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Cn(),Sn=xn=bn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Ut(Et(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(_n){var br;if(_n){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,un(e)),hn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=_n&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Wt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};_n&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),At(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)_i(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=gi(31,n,t,i),e.elementType=ie,e.lanes=a,e;case y:return xi(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=gi(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case te:return e=gi(13,n,t,i),e.elementType=te,e.lanes=a,e;case ne:return e=gi(19,n,t,i),e.elementType=ne,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:o=10;break a;case ee:o=9;break a;case C:o=11;break a;case re:o=14;break a;case w:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=gi(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Li(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-qe(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Ri(e){e.return!==null&&(Ii(e,1),Li(e,1,0))}function zi(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Vi=null,j=null,M=!1,Hi=null,Ui=!1,Wi=Error(s(519));function Gi(e){throw Zi(Ei(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[k]=e,t[gt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(Vi=e.return;Vi;)switch(Vi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vi=Vi.return}}function Ji(e){if(e!==Vi)return!1;if(!M)return qi(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&j&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));j=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));j=uf(e)}else t===27?(t=j,Zd(e.type)?(e=lf,lf=null,j=e):j=t):j=Vi?cf(e.stateNode.nextSibling):null;return!0}function Yi(){j=Vi=null,M=!1}function Xi(){var e=Hi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=me(null),$i=null,ea=null;function ta(e,t,n){O(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,D(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ra(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ra(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function aa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Ar(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===ve.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return ua($i,e)}function la(e,t){return $i===null&&sa(e),ua(e,t)}function ua(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(s(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},fa=t.unstable_scheduleCallback,pa=t.unstable_NormalPriority,N={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ma(){return{controller:new da,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&fa(pa,function(){e.controller.abort()})}var ga=null,_a=0,va=0,ya=null;function ba(e,t){if(ga===null){var n=ga=[];_a=0,va=dd(),ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return _a++,t.then(xa,xa),t}function xa(){if(--_a===0&&ga!==null){ya!==null&&(ya.status=`fulfilled`);var e=ga;ga=null,va=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ca=T.S;T.S=function(e,t){tu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&ba(e,t),Ca!==null&&Ca(e,t)};var wa=me(null);function Ta(){var e=wa.current;return e===null?G.pooledCache:e}function Ea(e,t){t===null?O(wa,wa.current):O(wa,t.pool)}function Da(){var e=Ta();return e===null?null:{parent:N._currentValue,pool:e}}var Oa=Error(s(460)),ka=Error(s(474)),Aa=Error(s(542)),ja={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,Oa}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,Oa):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(s(459));var e=Fa;return Fa=null,e}function La(e){if(e===Oa||e===Aa)throw Error(s(483))}var Ra=null,za=0;function Ba(e){var t=za;return za+=1,Ra===null&&(Ra=[]),Na(Ra,e,t)}function Va(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ha(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===w&&Pa(a)===t.type)?(t=i(t,n.props),Va(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Va(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=xi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),Va(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case w:return t=Pa(t),f(e,t,n)}if(ue(t)||se(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ba(t),n);if(t.$$typeof===S)return f(e,la(e,t),n);Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Pa(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ba(n),r);if(n.$$typeof===S)return p(e,t,la(e,n),r);Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Pa(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ba(r),i);if(r.$$typeof===S)return m(e,t,n,la(t,r),i);Ha(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return M&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Ii(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),M&&Ii(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return M&&Ii(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),M&&Ii(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Pa(l)===r.type){n(e,r.sibling),c=i(r,a.props),Va(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=xi(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=bi(a.type,a.key,a.props,null,e.mode,c),Va(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=wi(a,e.mode,c),c.return=e,e=c}return o(e);case w:return a=Pa(a),b(e,r,a,c)}if(ue(a))return h(e,r,a,c);if(se(a)){if(l=se(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Ba(a),c);if(a.$$typeof===S)return b(e,r,la(e,a),c);Ha(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Si(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{za=0;var i=b(e,t,n,r);return Ra=null,i}catch(t){if(t===Oa||t===Aa)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Wa=Ua(!0),Ga=Ua(!1),Ka=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $a=!1;function eo(){if($a){var e=ya;if(e!==null)throw e}}function to(e,t,n,r){$a=!1;var i=e.updateQueue;Ka=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===va&&($a=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ka=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function no(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function ro(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)no(n[e],t)}var io=me(null),ao=me(0);function oo(e,t){e=Gl,O(ao,e),O(io,t),Gl=e|t.baseLanes}function so(){O(ao,Gl),O(io,io.current)}function co(){Gl=ao.current,D(io),D(ao)}var lo=me(null),uo=null;function fo(e){var t=e.alternate;O(P,P.current&1),O(lo,e),uo===null&&(t===null||io.current!==null||t.memoizedState!==null)&&(uo=e)}function po(e){O(P,P.current),O(lo,e),uo===null&&(uo=e)}function mo(e){e.tag===22?(O(P,P.current),O(lo,e),uo===null&&(uo=e)):ho(e)}function ho(){O(P,P.current),O(lo,lo.current)}function go(e){D(lo),uo===e&&(uo=null),D(P)}var P=me(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,I=null,L=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(s(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Us:Ws,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){T.H=Hs;var t=I!==null&&I.next!==null;if(vo=0,L=I=F=null,yo=!1,Co=0,wo=null,t)throw Error(s(300));e===null||B||(e=e.dependencies,e!==null&&oa(e)&&(B=!0))}function ko(e,t,n,r){F=e;var i=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=i)throw Error(s(301));if(i+=1,L=I=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}T.H=Gs,a=t(n,r)}while(bo);return a}function Ao(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(I===null?null:I.memoizedState)!==e&&(F.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}vo=0,L=I=F=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L===null?F.memoizedState=L=e:L=L.next=e,L}function z(){if(I===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=I.next;var t=L===null?F.memoizedState:L.next;if(t!==null)L=t,I=e;else{if(e===null)throw F.alternate===null?Error(s(467)):Error(s(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},L===null?F.memoizedState=L=e:L=L.next=e}return L}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=Na(wo,e,t),t=F,(L===null?t.memoizedState:L.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===S)return ca(e)}throw Error(s(438,String(e)))}function Ro(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),I,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===va&&(d=!0);else if((vo&p)===p){u=u.next,p===va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,F.lanes|=p,Kl|=p;f=u.action,xo&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,F.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Ar(a,e.memoizedState)&&(B=!0,d&&(n=ya,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ar(a,t.memoizedState)||(B=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Uo(e,t,n){var r=F,i=z(),a=M;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Ar((I||i).memoizedState,n);if(o&&(i.memoizedState=n,B=!0),i=i.queue,ms(Ko.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||L!==null&&L.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,i,n,t),null),G===null)throw Error(s(349));a||vo&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=Fo(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Jo(e){var t=di(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,I,typeof r==`function`?r:zo)}function Zo(e,t,n,r,i){if(zs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};T.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Qo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(M){var n=G.formState;if(n!==null){a:{var r=F;if(M){if(j){b:{for(var i=j,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=cf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,F,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,F,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(z(),I,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Oa?Aa:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=z(),n=I;if(n!==null)return os(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=Fo(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return z().memoizedState}function ds(e,t,n,r){var i=Po();F.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;I!==null&&r!==null&&Eo(r,I.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(F.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=Fo(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=z().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||vo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),F.lanes|=e,Kl|=e,n)}function Ts(e,t,n,r){return Ar(n,t)?n:io.current===null?!(vo&42)||vo&1073741824&&!(q&261930)?(B=!0,e.memoizedState=n):(e=mu(),F.lanes|=e,Kl|=e,t):(e=ws(e,n,r),Ar(e,t)||(B=!0),e)}function Es(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Rs(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,Sa(c,r),pu(e)):Ls(e,t,r,pu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=ks(e).queue;Es(e,i,t,de,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},pu())}function js(){return ca(Qf)}function Ms(){return z().memoizedState}function Ns(){return z().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ya(n);var r=Xa(t,e,n);r!==null&&(hu(r,t,n),Za(r,t,n)),t={cache:ma()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=ui(e,t,n,r),n!==null&&(hu(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,pu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),G===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return hu(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(s(479))}else t=ui(e,n,r,2),t!==null&&hu(t,e,2)}function zs(e){var t=e.alternate;return e===F||t!==null&&t===F}function Bs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Hs={readContext:ca,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Hs.useEffectEvent=R;var Us={readContext:ca,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(Po(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,F,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,i=Po();if(M){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||Wo(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ps(Ko.bind(null,r,a,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),n},useId:function(){var e=Po(),t=G.identifierPrefix;if(M){var n=Fi,r=Pi;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ps.bind(null,F)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(z(),I.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(z(),I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=z();return I===null?ws(n,e,t):Ts(n,I.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=z();return I===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ya(n);r.tag=2,t!=null&&(r.callback=t),t=Xa(e,r,n),t!==null&&(hu(t,e,n),Za(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ii(e)}function Qs(e){console.error(e)}function $s(e){ii(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ya(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ya(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,i,!0),n=lo.current,n!==null){switch(n.tag){case 31:case 13:return uo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(M)return t=lo.current,t===null?(r!==Wi&&(t=Error(s(423),{cause:r}),Zi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Ei(r,n),i=nc(e.stateNode,r,i),Qa(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Wi&&(e=Error(s(422),{cause:r}),Zi(Ei(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Ei(a,n),Zl===null?Zl=[a]:Zl.push(a),Y!==4&&(Y=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=nc(n.stateNode,r,e),Qa(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(iu===null||!iu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=rc(i),ic(i,e,n,r),Qa(n,i),!1}n=n.return}while(n!==null);return!1}var oc=Error(s(461)),B=!1;function sc(e,t,n,r){t.child=e===null?Ga(t,null,n,r):Wa(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&s&&Ri(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(B=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Mc(e,t,i)}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(t,a===null?null:a.cachePool),a===null?so():oo(t,a),mo(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ea(t,null),so(),ho(t)):(Ea(t,a.cachePool),oo(t,a),ho(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=Ta();return a=a===null?null:{parent:N._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ea(t,null),so(),mo(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Wa(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,go(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(po(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return mc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(po(t),i)if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(B||aa(e,t,n,!1),i=(n&e.childLanes)!==0,B||i){if(r=G,r!==null&&(o=ut(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,di(e,o),hu(r,e,o),oc;Du(),t=hc(e,t,n)}else e=a.treeContext,j=cf(o.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return sa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!B?(Mo(e,t,a),Mc(e,t,a)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},qa(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),to(t,r,a,i),eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),Ka=!1;var f=t.memoizedState;a.state=f,to(t,r,a,i),eo(),l=t.memoizedState,s||f!==l||Ka?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ka||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ja(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),Ka=!1,f=t.memoizedState,a.state=f,to(t,r,a,i),eo();var p=t.memoizedState;o!==d||f!==p||Ka||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ka||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Yi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Da()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Tc(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(P.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(M){if(i?fo(t):ho(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(ho(t),i=t.mode,c=Dc({mode:`hidden`,children:c},i),r=xi(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,o,n),t.memoizedState=Sc,fc(null,r)):(fo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(fo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(ho(t),c=r.fallback,i=t.mode,r=Dc({mode:`visible`,children:r.children},i),c=xi(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Wa(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,o,n),t.memoizedState=Sc,t=fc(null,r)):(ho(t),t.child=e.child,t.flags|=128,t=null);else if(fo(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Zi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(B||aa(e,t,n,!1),o=(n&e.childLanes)!==0,B||o){if(o=G,o!==null&&(r=ut(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),hu(o,e,r),oc;af(c)||Du(),t=Oc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=cf(c.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return i?(ho(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,i,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(i=c.cachePool,i===null?i=Da():(l=N._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=wc(e,o,n),t.memoizedState=Sc,fc(e.child,r)):(fo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Wa(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=P.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(P,o),sc(e,t,r,n),r=M?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&oa(e))):!0}function Pc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),ta(t,N,e.memoizedState.cache),Yi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,po(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(fo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(fo(t),t.flags|=128,null);fo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(P,P.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:ta(t,N,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)B=!0;else{if(!Nc(e,n)&&!(t.flags&128))return B=!1,Pc(e,t,n);B=!!(e.flags&131072)}else B=!1,M&&t.flags&1048576&&Li(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Xs(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===C){t.tag=11,t=cc(null,t,e,r,n);break a}else if(i===re){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(s(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Xs(r,t.pendingProps),bc(e,t,r,i,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ja(e,t),to(t,r,null,n);var o=t.memoizedState;if(r=o.cache,ta(t,N,r),r!==a.cache&&ia(t,[N],n,!0),eo(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=xc(e,t,r,n);break a}else if(r!==i){i=Ei(Error(s(424)),t),Zi(i),t=xc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=cf(e.firstChild),Vi=t,M=!0,Hi=null,Ui=!0,n=Ga(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===i){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[k]=t,r[gt]=e,Pd(r,n,e),A(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&M&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Vi=t,Ui=!0,i=j,Zd(t.type)?(lf=i,j=cf(r.firstChild)):j=i),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((i=r=j)&&(r=tf(r,t.type,t.pendingProps,Ui),r===null?i=!1:(t.stateNode=r,Vi=t,j=cf(r.firstChild),Ui=!1,i=!0)),i||Gi(t)),xe(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Do(e,t,Ao,null,null,n),Qf._currentValue=i),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=nf(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,Vi=t,j=null,e=!0)),e||Gi(t)),null;case 13:return Tc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wa(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,sa(t),i=ca(i),r=r(i),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(N),e===null?(i=Ta(),i===null&&(i=G,a=ma(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},qa(t),ta(t,N,i)):((e.lanes&n)!==0&&(Ja(e,t),to(t,null,null,n),eo()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,ta(t,N,r),r!==i.cache&&ia(t,[N],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ta(t,N,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Fa=ja,ka}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Fa=ja,ka}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Xl|=t)}function Bc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(N),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),V(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Ic(t),a===null?(V(t),Lc(t,i,null,r,n)):(V(t),Rc(t,a))):a?a===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,a)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,i,e,r,n)),null;case 27:if(Se(t),n=_e.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),null}e=he.current,Ji(t)?Ki(t,e):(e=ff(i,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(Se(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),null}if(a=he.current,Ji(t))Ki(t,a);else{var o=Bd(_e.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[k]=t,a[gt]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=_e.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Vi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[k]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Gi(t,!0)}else e=Bd(e).createTextNode(r),e[k]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[k]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(go(t),t):(go(t),null);if(t.flags&128)throw Error(s(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[k]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),i=!1}else i=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(go(t),t):(go(t),null)}return go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),V(t),null;case 10:return na(t.type),V(t),null;case 19:if(D(P),r=t.memoizedState,r===null)return V(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Bc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=_o(e),a!==null){for(t.flags|=128,Bc(r,!1),e=a.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return O(P,P.current&1|2),M&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>nu&&(t.flags|=128,i=!0,Bc(r,!1),t.lanes=4194304)}else{if(!i)if(e=_o(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!M)return V(t),null}else 2*Fe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,i=!0,Bc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=P.current,O(P,i?n&1|2:n&1),M&&Ii(t,r.treeForkCount),e);case 22:case 23:return go(t),co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&D(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(N),V(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Hc(e,t){switch(zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(N),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(go(t),t.alternate===null)throw Error(s(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(P),null;case 4:return be(),null;case 10:return na(t.type),null;case 22:case 23:return go(t),co(),e!==null&&D(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(N),null;case 25:return null;default:return null}}function Uc(e,t){switch(zi(t),t.tag){case 3:na(N),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&go(t);break;case 13:go(t);break;case 19:D(P);break;case 10:na(t.type);break;case 22:case 23:go(t),co(),e!==null&&D(wa);break;case 24:na(N)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ro(t,n)}catch(t){Z(e,e.return,t)}}}function qc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Z(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[k]=e,t[gt]=n}catch(t){Z(e,e.return,t)}}var rl=!1,H=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Xs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Wc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ro(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||H,i=rl;var a=H;rl=r,(H=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),rl=i,H=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:H||Yc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||Yc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:H||Yc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),H||Gc(4,n,t),dl(e,t,n);break;case 1:H||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,dl(e,t,n),H=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(s(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(s(160));fl(a,o,i),U=null,ul=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=vl;if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[St]||a[k]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[k]=e,A(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[k]=e,A(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),e.flags&32){i=e.stateNode;try{$t(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Zc(e,i,n===null?i:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=vl,vl=gf(t.containerInfo),_l(t,e),vl=i,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=H;if(rl=u||i,H=d||l,_l(t,e),H=d,rl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||rl||H||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;tl(e,$c(e),i);break;case 5:var a=n.stateNode;n.flags&32&&($t(a,``),n.flags&=-33),tl(e,$c(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;el(e,$c(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),Cl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Yc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Wc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)no(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Jc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var zl={getCacheForType:function(e){var t=ca(N),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(N).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:T.T===null?pt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||M){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Yl=e}else Yl=536870912;return e=lo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),ot(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=a,ql|=a,i=4;break a}a=Ql,Ql=i,a!==null&&(Ql===null?Ql=a:Ql.push.apply(Ql,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=eu+300-Fe(),10<i)){if(yu(r,t,Yl,!Hl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,`Throttled`,-0,0),i);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Nl(t,a,d);var m=(a&62914560)===a?eu-Fe():(a&4194048)===a?tu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ea=$i=null,No(e),Ra=null,za=0,e=K;for(;e!==null;)Uc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=vi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=nt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ci(),n}function Cu(e,t){F=null,T.H=Hs,t===Oa||t===Aa?(t=Ia(),J=3):t===ka?(t=Ia(),J=4):J=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,ec(e,Ei(t,e.current)))}function wu(){var e=lo.current;return e===null?!0:(q&4194048)===q?uo===null:(q&62914560)===q||q&536870912?e===uo:!1}function Tu(){var e=T.H;return T.H=Hs,e===null?Hs:e}function Eu(){var e=T.A;return T.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&lo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:lo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,W=r,T.H=i,T.A=a,K===null&&(G=null,q=0,ci()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),i=Eu();G!==e||q!==t?(ru=null,nu=Fe()+500,Su(e,t)):Ul=nt(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,a,1);break;case 2:case 9:if(Ma(a)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Ma(a)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Wf(o):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,a,5);break;case 6:J=0,Vl=null,Pu(e,t,a,6);break;case 8:xu(),Y=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ea=$i=null,T.H=r,T.A=i,W=n,K===null?(G=null,q=0,ci(),Y):0}function ju(){for(;K!==null&&!Ne();)Mu(K)}function Mu(e){var t=Fc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:No(t);default:Uc(n,t),t=K=yi(t,Gl),t=Fc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ea=$i=null,No(t),Ra=null,za=0;var i=t.return;try{if(ac(e,i,t,n,q)){Y=1,ec(e,Ei(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,ec(e,Ei(n,e.current)),K=null;return}t.flags&32768?(M||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Vc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=si,st(e,n,a,o,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,i=E.p,E.p=2,o=W,W|=4;try{sl(e,t,n)}finally{W=o,E.p=i,T.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,E.p=r,T.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,E.p=r,T.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=T.T,i=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var a=au,o=su;if(X=0,ou=au=null,su=0,W&6)throw Error(s(331));var c=W;if(W|=4,Il(a.current),Ol(a,a.current,o,n),W=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,a)}catch{}return!0}finally{E.p=i,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ei(n,t),t=nc(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ei(n,e),n=rc(2),r=Xa(t,n,2),r!==null&&(ic(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Fe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=di(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=tt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=tt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=va;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=wt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),o=[];a:{var s=ti.get(e);if(s!==void 0){var c=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:c=qn;break;case`focusin`:u=`focus`,c=Rn;break;case`focusout`:u=`blur`,c=Rn;break;case`beforeblur`:case`afterblur`:c=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Yn;break;case Jr:case Yr:case Xr:c=zn;break;case ei:c=Xn;break;case`scroll`:case`scrollend`:c=jn;break;case`wheel`:c=Zn;break;case`copy`:case`cut`:case`paste`:c=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Jn;break;case`toggle`:case`beforetoggle`:c=Qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?wt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Et(c),h=u==null?s:Et(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Et(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=vr;else if(fr(s))if(yr)v=Or;else{v=Er;var y=Tr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&rn(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Yt(s,`number`,s.value)}switch(y=r?Et(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(o,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(o,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,a);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:nn(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[gt]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}Qt(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?As(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),A(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),A(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),A(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);A(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),A(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),A(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=_e.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Dt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+Kt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),A(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Kt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,A(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),A(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,A(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),A(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,A(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),A(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[k]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,A(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),A(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},qa(a),e}function tp(e){return e?(e=mi,e):mi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ya(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Xa(e,r,t),n!==null&&(hu(n,e,t),Za(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=di(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.5`)throw Error(s(527,Lp,`19.2.5`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Zs,a=Qs,o=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c(),d=e=>`/WotLK-Guide/${e.replace(/^\//,``)}`,f=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),p=e(((e,t)=>{t.exports=f()}))(),m=()=>(0,p.jsx)(`header`,{className:`relative z-40 flex items-center gap-3 border-b border-slate-700 bg-slate-800/90 backdrop-blur h-12 sm:h-14 lg:sticky lg:top-0`,children:(0,p.jsx)(`img`,{src:d(`/logo.png`),alt:`WotLK Guide`,className:`pointer-events-none absolute left-1/2 w-auto -translate-x-1/2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] top-2.5 h-20 sm:top-2 sm:h-26`})});function h(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=h(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function g(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=h(e))&&(r&&(r+=` `),r+=t);return r}var _=({variant:e=`Primary`,className:t,children:n,type:r,...i})=>(0,p.jsx)(`button`,{type:r??`button`,className:g(`rounded-md px-5 py-3 text-sm font-bold tracking-wide uppercase transition-colors focus-visible:outline-2 focus-visible:outline-amber-400 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50`,{"bg-amber-400 text-slate-900 hover:bg-amber-300":e===`Primary`,"border border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700":e===`Secondary`},t),...i,children:n}),v=({label:e,iconSrc:t,isSelected:n,isDisabled:r,accentColor:i,onClick:a})=>(0,p.jsxs)(`button`,{type:`button`,onClick:a,disabled:r,"aria-pressed":n,className:g(`group flex flex-col items-center gap-2 rounded-lg border p-3 transition-[color,background-color,border-color,opacity] duration-150 focus-visible:outline-2 focus-visible:outline-amber-400`,{"cursor-not-allowed opacity-30":r,"border-amber-400 bg-amber-400/10 cursor-pointer":!r&&n,"border-slate-700 bg-slate-800/40 hover:border-slate-500 hover:bg-slate-800 cursor-pointer":!r&&!n}),children:[(0,p.jsx)(`span`,{className:`flex h-11 w-11 items-center justify-center overflow-hidden rounded-md ring-1 ring-inset ring-black/40`,style:i?{boxShadow:`inset 0 0 0 2px ${i}`}:void 0,children:(0,p.jsx)(`img`,{src:t,alt:e,loading:`lazy`,className:`h-full w-full object-cover`})}),(0,p.jsx)(`span`,{className:`text-xs font-medium text-slate-300`,children:e})]}),y=({src:e,className:t})=>(0,p.jsx)(`span`,{"aria-hidden":!0,className:g(`inline-block shrink-0 bg-current mask-contain mask-center mask-no-repeat`,t),style:{maskImage:`url(${e})`,WebkitMaskImage:`url(${e})`}}),b=[`Alliance`,`Horde`],x=[`Male`,`Female`],ee=[`Warrior`,`Paladin`,`Hunter`,`Rogue`,`Priest`,`Death Knight`,`Shaman`,`Mage`,`Warlock`,`Druid`],S={Warrior:`#C79C6E`,Paladin:`#F58CBA`,Hunter:`#ABD473`,Rogue:`#FFF569`,Priest:`#FFFFFF`,"Death Knight":`#C41F3B`,Shaman:`#0070DE`,Mage:`#69CCF0`,Warlock:`#9482C9`,Druid:`#FF7D0A`},C={Human:`human`,Dwarf:`dwarf`,"Night Elf":`nightelf`,Gnome:`gnome`,Draenei:`draenei`,Orc:`orc`,Undead:`undead`,Tauren:`tauren`,Troll:`troll`,"Blood Elf":`bloodelf`},te={Warrior:`warrior`,Paladin:`paladin`,Hunter:`hunter`,Rogue:`rogue`,Priest:`priest`,"Death Knight":`deathknight`,Shaman:`shaman`,Mage:`mage`,Warlock:`warlock`,Druid:`druid`},ne=(e,t)=>d(`/icons/race/${C[e]}_${t.toLowerCase()}.jpg`),re=e=>d(`/icons/class/${te[e]}.jpg`),w=e=>d(`/icons/faction/${e.toLowerCase()}.jpg`),ie={Alliance:[`Human`,`Dwarf`,`Night Elf`,`Gnome`,`Draenei`],Horde:[`Orc`,`Undead`,`Tauren`,`Troll`,`Blood Elf`]},ae={Human:[`Warrior`,`Paladin`,`Rogue`,`Priest`,`Death Knight`,`Mage`,`Warlock`],Dwarf:[`Warrior`,`Paladin`,`Hunter`,`Rogue`,`Priest`,`Death Knight`],"Night Elf":[`Warrior`,`Hunter`,`Rogue`,`Priest`,`Death Knight`,`Druid`],Gnome:[`Warrior`,`Rogue`,`Death Knight`,`Mage`,`Warlock`],Draenei:[`Warrior`,`Paladin`,`Hunter`,`Priest`,`Death Knight`,`Shaman`,`Mage`],Orc:[`Warrior`,`Hunter`,`Rogue`,`Death Knight`,`Shaman`,`Warlock`],Undead:[`Warrior`,`Rogue`,`Priest`,`Death Knight`,`Mage`,`Warlock`],Tauren:[`Warrior`,`Hunter`,`Death Knight`,`Shaman`,`Druid`],Troll:[`Warrior`,`Hunter`,`Rogue`,`Priest`,`Death Knight`,`Shaman`,`Mage`],"Blood Elf":[`Warrior`,`Paladin`,`Hunter`,`Priest`,`Death Knight`,`Mage`,`Warlock`]},oe={Human:`WotLK Guide - Alliance - Human - (1 - 13)`,Dwarf:`WotLK Guide - Alliance - Dwarf - (1 - 13)`,"Night Elf":`WotLK Guide - Alliance - Night Elf - (1 - 13)`,Gnome:`WotLK Guide - Alliance - Gnome - (1 - 13)`,Draenei:`WotLK Guide - Alliance - Draenei - (1 - 13)`,Orc:`WotLK Guide - Horde - Orc - (1 - 13)`,Undead:`WotLK Guide - Horde - Undead - (1 - 13)`,Tauren:`WotLK Guide - Horde - Tauren - (1 - 13)`,Troll:`WotLK Guide - Horde - Troll - (1 - 13)`,"Blood Elf":`WotLK Guide - Horde - Blood Elf - (1 - 13)`},se=e=>e.class===`Death Knight`?`WotLK Guide - ${e.faction} - Death Knight - (55 - 60)`:oe[e.race],ce={"Accept Quest":{label:`Accept`,badge:`bg-amber-900/60 text-amber-200`,icon:`IconAcceptQuest.png`,needsQuest:!0},"Do Quest":{label:`Do`,badge:`bg-red-900/60 text-red-200`,icon:`IconDoQuest.png`,needsQuest:!0},"Turn in Quest":{label:`Turn in`,badge:`bg-green-900/60 text-green-200`,icon:`IconTurnInQuest.png`,needsQuest:!0},"Level Up":{label:`Level Up`,badge:`bg-teal-500/25 text-teal-200`,icon:`IconLevelUp.png`},Travel:{label:`Travel`,badge:`bg-blue-900/60 text-blue-200`,icon:`IconTravel.png`},Hearthstone:{label:`Hearthstone`,badge:`bg-purple-900/60 text-purple-200`,icon:`IconHearthstone.png`},Note:{label:`Note`,badge:`bg-slate-600 text-slate-200`,icon:`IconNote.png`}},le={backgroundColor:`#fbbf24`,border:`1px solid #000`,color:`#0f172a`},ue={Human:9,Dwarf:77,"Night Elf":256,Gnome:77,Draenei:3527,Orc:364,Undead:154,Tauren:221,Troll:364,"Blood Elf":3484},T=(e,t)=>t===`Death Knight`?4342:ue[e],E=({character:e,isSelected:t,onSelect:n,onDelete:r})=>{let[i,a]=(0,l.useState)(!1);return(0,p.jsxs)(`div`,{className:`group relative`,children:[(0,p.jsxs)(`button`,{type:`button`,onClick:n,"aria-pressed":t,className:g(`flex w-full cursor-pointer items-center gap-3 rounded-lg border py-2.5 pr-9 pl-2.5 text-left transition-[color,background-color,border-color] duration-150`,{"border-amber-400 bg-amber-400/10":t,"border-slate-700 bg-slate-800/40 hover:border-slate-500 hover:bg-slate-800":!t}),children:[(0,p.jsx)(`span`,{className:`h-10 w-10 shrink-0 overflow-hidden rounded-md ring-1 ring-inset ring-black/40`,style:{boxShadow:`inset 0 0 0 2px ${S[e.class]}`},children:(0,p.jsx)(`img`,{src:ne(e.race,e.gender),alt:`${e.race} ${e.gender}`,loading:`lazy`,className:`h-full w-full object-cover`})}),(0,p.jsxs)(`span`,{className:`flex min-w-0 flex-1 flex-col`,children:[(0,p.jsxs)(`span`,{className:`flex items-baseline gap-1.5 text-sm font-semibold text-slate-100`,children:[(0,p.jsx)(`span`,{className:`truncate`,children:e.name}),(0,p.jsx)(`span`,{className:`shrink-0 text-slate-500`,children:`·`}),(0,p.jsxs)(`span`,{className:`shrink-0 tabular-nums`,children:[`Lvl `,e.level??1]})]}),(0,p.jsxs)(`span`,{className:`truncate text-xs text-slate-400`,children:[e.race,` · `,e.class]})]})]}),i?(0,p.jsxs)(`div`,{className:`absolute -inset-px flex items-center justify-end gap-2 rounded-lg bg-slate-900/70 pr-2.5 pl-3 backdrop-blur-sm`,children:[(0,p.jsxs)(`span`,{className:`mr-auto truncate text-xs font-medium text-slate-300`,children:[`Delete `,e.name,`?`]}),(0,p.jsx)(`button`,{type:`button`,onClick:()=>r?.(),className:`cursor-pointer rounded px-2 py-1 text-xs font-bold text-red-400 hover:bg-red-500/15`,children:`Yes`}),(0,p.jsx)(`button`,{type:`button`,onClick:()=>a(!1),className:`cursor-pointer rounded px-2 py-1 text-xs font-medium text-slate-400 hover:text-slate-200`,children:`No`})]}):(0,p.jsx)(`button`,{type:`button`,onClick:()=>a(!0),"aria-label":`Delete ${e.name}`,className:`absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded p-1.5 text-slate-500 transition-colors hover:text-red-400`,children:(0,p.jsx)(y,{src:d(`/icons/ui/IconTrash.svg`),className:`h-4 w-4`})})]})},de=({className:e,...t})=>(0,p.jsx)(`input`,{className:g(`w-full rounded-md border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40`,e),...t});function fe({tabs:e,value:t,onChange:n,icon:r}){return(0,p.jsx)(`div`,{className:`flex gap-6 border-b border-slate-700`,children:e.map(e=>(0,p.jsxs)(`button`,{type:`button`,onClick:()=>n(e),className:g(`-mb-px inline-flex cursor-pointer items-center gap-2 border-b-2 px-1 pb-3 text-sm font-semibold tracking-wide uppercase transition-colors focus-visible:outline-none`,{"border-amber-400 text-amber-400":e===t,"border-transparent text-slate-500 hover:text-slate-300":e!==t}),children:[r&&(0,p.jsx)(`img`,{src:r(e),alt:``,className:g(`h-5 w-5 rounded-sm object-cover transition-opacity`,e!==t&&`opacity-60`)}),e]},e))})}function pe({options:e,value:t,onChange:n}){return(0,p.jsx)(`div`,{className:`inline-flex overflow-hidden rounded-md border border-slate-600`,children:e.map(e=>(0,p.jsx)(`button`,{type:`button`,onClick:()=>n(e),className:g(`cursor-pointer font-semibold tracking-wide uppercase transition-colors focus-visible:outline-none px-4 py-3 text-sm`,{"bg-slate-700 text-slate-100":e===t,"bg-transparent text-slate-500 hover:text-slate-300":e!==t}),children:e},e))})}var me=12,D=2,O=e=>{let t=``,n=``,r=0;for(let i of e){let e=i.toLowerCase();r=e===n?r+1:1,n=e,r<=D&&(t+=i)}return t},he=e=>{let t=O(e.replace(/[^\p{Script=Latin}\p{Script=Cyrillic}]/gu,``)).slice(0,me);return t.length===0?``:t[0].toUpperCase()+t.slice(1).toLowerCase()},ge=({title:e,action:t,className:n,children:r})=>(0,p.jsxs)(`section`,{className:g(`flex flex-col gap-3`,n),children:[(0,p.jsxs)(`div`,{className:`flex items-center justify-between gap-4`,children:[(0,p.jsx)(`h2`,{className:`text-xs font-bold tracking-widest text-amber-400 uppercase`,children:e}),t]}),r]}),_e=({characters:e,selectedId:t,onSelect:n,onDelete:r,onGoToGuide:i})=>{let a=(0,l.useRef)(null),[o,s]=(0,l.useState)(!1),[c,u]=(0,l.useState)(!1),d=(0,l.useCallback)(()=>{let e=a.current;e&&(s(e.scrollTop>1),u(e.scrollTop+e.clientHeight<e.scrollHeight-1))},[]);return(0,l.useEffect)(()=>(d(),window.addEventListener(`resize`,d),()=>window.removeEventListener(`resize`,d)),[d,e]),(0,p.jsx)(`aside`,{className:`flex w-full shrink-0 flex-col lg:relative lg:w-64`,children:(0,p.jsxs)(`div`,{className:`flex flex-1 flex-col gap-3 lg:absolute lg:inset-0`,children:[(0,p.jsx)(`h2`,{className:`text-xs font-bold tracking-widest text-amber-400 uppercase`,children:`Characters`}),e.length===0?(0,p.jsx)(`p`,{className:`flex flex-1 items-center justify-center rounded-lg border border-dashed border-slate-700 p-4 text-center text-sm text-slate-500`,children:`No characters yet`}):(0,p.jsxs)(`div`,{className:`relative min-h-0 flex-1`,children:[(0,p.jsx)(`div`,{ref:a,onScroll:d,className:`no-scrollbar grid h-full max-h-138 grid-cols-1 content-start gap-2 overflow-y-auto sm:max-h-85.5 sm:grid-cols-2 lg:max-h-none lg:grid-cols-1`,children:e.map(e=>(0,p.jsx)(E,{character:e,isSelected:e.id===t,onSelect:()=>n(e),onDelete:()=>r(e.id)},e.id))}),(0,p.jsx)(`div`,{className:g(`pointer-events-none absolute inset-x-0 top-0 h-8 bg-linear-to-b from-[#151e31] to-transparent transition-opacity`,{"opacity-100":o,"opacity-0":!o})}),(0,p.jsx)(`div`,{className:g(`pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-[#151e31] to-transparent transition-opacity`,{"opacity-100":c,"opacity-0":!c})})]}),(0,p.jsx)(_,{onClick:i,disabled:t===null,className:`w-full`,children:`Go to Guide`})]})})},ve=({onCreate:e,onCancel:t})=>{let[n,r]=(0,l.useState)(`Alliance`),[i,a]=(0,l.useState)(`Male`),[o,s]=(0,l.useState)(ie.Alliance[0]),[c,u]=(0,l.useState)(ae[ie.Alliance[0]][0]),[d,f]=(0,l.useState)(``),m=ie[n],h=(0,l.useMemo)(()=>new Set(ae[o]),[o]),g=e=>{r(e);let t=ie[e][0];s(t),u(ae[t][0])},y=e=>{s(e),ae[e].includes(c)||u(ae[e][0])},C=d.length>0,te=()=>{C&&e({faction:n,gender:i,race:o,class:c,name:d})};return(0,p.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),te()},className:`flex flex-1 flex-col gap-5`,children:[(0,p.jsx)(fe,{tabs:b,value:n,onChange:g,icon:w}),(0,p.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,p.jsx)(ge,{title:`Name`,className:`flex-1`,children:(0,p.jsx)(de,{value:d,onChange:e=>f(he(e.target.value)),placeholder:`Bruenor`,maxLength:me,autoComplete:`off`,"aria-label":`Character name`})}),(0,p.jsx)(ge,{title:`Gender`,className:`items-end`,children:(0,p.jsx)(pe,{options:x,value:i,onChange:a})})]}),(0,p.jsx)(ge,{title:`Race`,children:(0,p.jsx)(`div`,{className:`grid grid-cols-3 gap-3 sm:grid-cols-5`,children:m.map(e=>(0,p.jsx)(v,{label:e,iconSrc:ne(e,i),isSelected:e===o,onClick:()=>y(e)},e))})}),(0,p.jsx)(ge,{title:`Class`,children:(0,p.jsx)(`div`,{className:`grid grid-cols-3 gap-3 sm:grid-cols-5`,children:ee.map(e=>(0,p.jsx)(v,{label:e,iconSrc:re(e),accentColor:S[e],isSelected:e===c,isDisabled:!h.has(e),onClick:()=>u(e)},e))})}),(0,p.jsxs)(`div`,{className:`flex gap-3`,children:[(0,p.jsx)(_,{type:`submit`,disabled:!C,className:`flex-1`,children:`Create Character`}),(0,p.jsx)(_,{variant:`Secondary`,className:`flex-1`,onClick:t,children:`Cancel`})]})]})},ye=({characters:e,addCharacter:t,removeCharacter:n,onPlay:r,initialSelectedId:i})=>{let[a,o]=(0,l.useState)(i??null),[s,c]=(0,l.useState)(0),u=()=>c(e=>e+1);return(0,p.jsxs)(`div`,{className:`flex w-full max-w-6xl flex-col gap-6 rounded-xl border border-slate-700 bg-slate-800/40 p-6 sm:p-8 lg:flex-row`,children:[(0,p.jsx)(_e,{characters:e,selectedId:a,onSelect:e=>o(e.id),onDelete:e=>{n(e),o(t=>t===e?null:t)},onGoToGuide:()=>{let t=e.find(e=>e.id===a);t&&r(t)}}),(0,p.jsx)(`div`,{className:`hidden w-px self-stretch bg-slate-700 lg:block`}),(0,p.jsx)(ve,{onCreate:e=>{let n=t(e);o(n.id),u()},onCancel:u},s)]})},be=({src:e,alt:t,markers:n=[],activeMarker:r,onMarkerHover:i,onMarkerClick:a})=>{let[o,s]=(0,l.useState)(null),c=o!==e,u=n.map(e=>`${e.x},${e.y}`).join(` `);return(0,p.jsxs)(`div`,{className:`relative block w-full leading-0`,children:[c?(0,p.jsx)(`img`,{src:e,alt:t??`Zone map`,onError:()=>s(e),className:`block h-auto w-full`}):(0,p.jsx)(`div`,{className:`flex aspect-3/2 w-full items-center justify-center text-sm text-slate-500`,children:`No map for this zone`}),c&&n.length>1&&(0,p.jsxs)(`svg`,{className:`pointer-events-none absolute inset-0 h-full w-full`,viewBox:`0 0 100 100`,preserveAspectRatio:`none`,children:[(0,p.jsx)(`polyline`,{points:u,fill:`none`,stroke:`#000`,strokeOpacity:.85,strokeWidth:5.5,strokeDasharray:`0.1 8`,strokeLinecap:`round`,vectorEffect:`non-scaling-stroke`}),(0,p.jsx)(`polyline`,{points:u,fill:`none`,stroke:`#fbbf24`,strokeWidth:2.8,strokeDasharray:`0.1 8`,strokeLinecap:`round`,vectorEffect:`non-scaling-stroke`})]}),c&&n.map(e=>(0,p.jsx)(`button`,{type:`button`,onMouseEnter:()=>i?.(e.number),onMouseLeave:()=>i?.(null),onClick:()=>a?.(e.number),title:`Step ${e.number}`,className:g(`absolute flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-[0.65rem] font-bold leading-none shadow transition-transform duration-150`,r===e.number&&`z-10 scale-125`),style:{left:`${e.x}%`,top:`${e.y}%`,...le},children:e.number},e.number))]})},xe=`wotlkdb.com`,Se={enGB:{domain:``,locale:0},frFR:{domain:`fr`,locale:2},deDE:{domain:`de`,locale:3},esES:{domain:`es`,locale:6},ruRU:{domain:`ru`,locale:8}},Ce=(e,t,n=`enGB`)=>{let r=Se[n]??Se.enGB,i=`https://${xe}/?${e}=${t}`;return r.domain&&(i+=`&domain=${r.domain}`),r.locale!=null&&(i+=`&locale=${r.locale}`),i},we=/\[([a-z]+):(\d+)\]/g,Te=e=>{let t=[],n=0,r;for(we.lastIndex=0;r=we.exec(e);)r.index>n&&t.push({kind:`text`,text:e.slice(n,r.index)}),t.push({kind:`link`,type:r[1],id:Number(r[2])}),n=we.lastIndex;return n<e.length&&t.push({kind:`text`,text:e.slice(n)}),t},Ee=[{filename:`Alterac`,id:36,name:`Alterac Mountains`},{filename:`Arathi`,id:45,name:`Arathi Highlands`},{filename:`Ashenvale`,id:331,name:`Ashenvale`},{filename:`Aszhara`,id:16,name:`Azshara`},{filename:`AzuremystIsle`,id:3524,name:`Azuremyst Isle`},{filename:`Badlands`,id:3,name:`Badlands`},{filename:`Barrens`,id:17,name:`The Barrens`},{filename:`BladesEdgeMountains`,id:3522,name:`Blade's Edge Mountains`},{filename:`BlastedLands`,id:4,name:`Blasted Lands`},{filename:`BloodmystIsle`,id:3525,name:`Bloodmyst Isle`},{filename:`BoreanTundra`,id:3537,name:`Borean Tundra`},{filename:`BurningSteppes`,id:46,name:`Burning Steppes`},{filename:`CrystalSongForest`,id:2817,name:`Crystalsong Forest`},{filename:`Dalaran`,id:4395,name:`Dalaran`},{filename:`Darkshore`,id:148,name:`Darkshore`},{filename:`Darnassis`,id:1657,name:`Darnassus`},{filename:`DeadwindPass`,id:41,name:`Deadwind Pass`},{filename:`Desolace`,id:405,name:`Desolace`},{filename:`Dragonblight`,id:65,name:`Dragonblight`},{filename:`DunMorogh`,id:1,name:`Dun Morogh`},{filename:`Durotar`,id:14,name:`Durotar`},{filename:`Duskwood`,id:10,name:`Duskwood`},{filename:`Dustwallow`,id:15,name:`Dustwallow Marsh`},{filename:`EasternPlaguelands`,id:139,name:`Eastern Plaguelands`},{filename:`Elwynn`,id:12,name:`Elwynn Forest`},{filename:`EversongWoods`,id:3430,name:`Eversong Woods`},{filename:`Felwood`,id:361,name:`Felwood`},{filename:`Feralas`,id:357,name:`Feralas`},{filename:`Ghostlands`,id:3433,name:`Ghostlands`},{filename:`GrizzlyHills`,id:394,name:`Grizzly Hills`},{filename:`Hellfire`,id:3483,name:`Hellfire Peninsula`},{filename:`Hilsbrad`,id:267,name:`Hillsbrad Foothills`},{filename:`Hinterlands`,id:47,name:`The Hinterlands`},{filename:`HowlingFjord`,id:495,name:`Howling Fjord`},{filename:`HrothgarsLanding`,id:4742,name:`Hrothgar's Landing`},{filename:`IcecrownGlacier`,id:210,name:`Icecrown`},{filename:`Ironforge`,id:1537,name:`Ironforge`},{filename:`LakeWintergrasp`,id:4197,name:`Wintergrasp`},{filename:`LochModan`,id:38,name:`Loch Modan`},{filename:`Moonglade`,id:493,name:`Moonglade`},{filename:`Mulgore`,id:215,name:`Mulgore`},{filename:`Nagrand`,id:3518,name:`Nagrand`},{filename:`Netherstorm`,id:3523,name:`Netherstorm`},{filename:`Ogrimmar`,id:1637,name:`Orgrimmar`},{filename:`Redridge`,id:44,name:`Redridge Mountains`},{filename:`ScarletEnclave`,id:4298,name:`Plaguelands: The Scarlet Enclave`},{filename:`SearingGorge`,id:51,name:`Searing Gorge`},{filename:`ShadowmoonValley`,id:3520,name:`Shadowmoon Valley`},{filename:`ShattrathCity`,id:3703,name:`Shattrath City`},{filename:`SholazarBasin`,id:3711,name:`Sholazar Basin`},{filename:`Silithus`,id:1377,name:`Silithus`},{filename:`SilvermoonCity`,id:3487,name:`Silvermoon City`},{filename:`Silverpine`,id:130,name:`Silverpine Forest`},{filename:`StonetalonMountains`,id:406,name:`Stonetalon Mountains`},{filename:`Stormwind`,id:1519,name:`Stormwind City`},{filename:`Stranglethorn`,id:33,name:`Stranglethorn Vale`},{filename:`Sunwell`,id:4080,name:`Isle of Quel'Danas`},{filename:`SwampOfSorrows`,id:8,name:`Swamp of Sorrows`},{filename:`Tanaris`,id:440,name:`Tanaris`},{filename:`Teldrassil`,id:141,name:`Teldrassil`},{filename:`TerokkarForest`,id:3519,name:`Terokkar Forest`},{filename:`TheExodar`,id:3557,name:`The Exodar`},{filename:`TheStormPeaks`,id:67,name:`The Storm Peaks`},{filename:`ThousandNeedles`,id:400,name:`Thousand Needles`},{filename:`ThunderBluff`,id:1638,name:`Thunder Bluff`},{filename:`Tirisfal`,id:85,name:`Tirisfal Glades`},{filename:`Undercity`,id:1497,name:`Undercity`},{filename:`UngoroCrater`,id:490,name:`Un'Goro Crater`},{filename:`WesternPlaguelands`,id:28,name:`Western Plaguelands`},{filename:`Westfall`,id:40,name:`Westfall`},{filename:`Wetlands`,id:11,name:`Wetlands`},{filename:`Winterspring`,id:618,name:`Winterspring`},{filename:`Zangarmarsh`,id:3521,name:`Zangarmarsh`},{filename:`ZulDrak`,id:66,name:`Zul'Drak`}],De=JSON.parse(`[{"name":"Dun Morogh","entry":1},{"name":"Longshore","entry":2},{"name":"Badlands","entry":3},{"name":"Blasted Lands","entry":4},{"name":"Blackwater Cove","entry":7},{"name":"Swamp of Sorrows","entry":8},{"name":"Northshire Valley","entry":9},{"name":"Duskwood","entry":10},{"name":"Wetlands","entry":11},{"name":"Elwynn Forest","entry":12},{"name":"The World Tree","entry":13},{"name":"Durotar","entry":14},{"name":"Dustwallow Marsh","entry":15},{"name":"Azshara","entry":16},{"name":"The Barrens","entry":17},{"name":"Crystal Lake","entry":18},{"name":"Zul'Gurub","entry":19},{"name":"Moonbrook","entry":20},{"name":"Kul Tiras","entry":21},{"name":"Programmer Isle","entry":22},{"name":"Northshire River","entry":23},{"name":"Northshire Abbey","entry":24},{"name":"Blackrock Mountain","entry":25},{"name":"Lighthouse","entry":26},{"name":"Western Plaguelands","entry":28},{"name":"Nine","entry":30},{"name":"The Cemetary","entry":32},{"name":"Stranglethorn Vale","entry":33},{"name":"Echo Ridge Mine","entry":34},{"name":"Booty Bay","entry":35},{"name":"Alterac Mountains","entry":36},{"name":"Lake Nazferiti","entry":37},{"name":"Loch Modan","entry":38},{"name":"Westfall","entry":40},{"name":"Deadwind Pass","entry":41},{"name":"Darkshire","entry":42},{"name":"Wild Shore","entry":43},{"name":"Redridge Mountains","entry":44},{"name":"Arathi Highlands","entry":45},{"name":"Burning Steppes","entry":46},{"name":"The Hinterlands","entry":47},{"name":"Dead Man's Hole","entry":49},{"name":"Searing Gorge","entry":51},{"name":"Thieves Camp","entry":53},{"name":"Jasperlode Mine","entry":54},{"name":"Valley of Heroes UNUSED","entry":55},{"name":"Heroes' Vigil","entry":56},{"name":"Fargodeep Mine","entry":57},{"name":"Northshire Vineyards","entry":59},{"name":"Forest's Edge","entry":60},{"name":"Thunder Falls","entry":61},{"name":"Brackwell Pumpkin Patch","entry":62},{"name":"The Stonefield Farm","entry":63},{"name":"The Maclure Vineyards","entry":64},{"name":"Dragonblight","entry":65},{"name":"Zul'Drak","entry":66},{"name":"The Storm Peaks","entry":67},{"name":"Lake Everstill","entry":68},{"name":"Lakeshire","entry":69},{"name":"Stonewatch","entry":70},{"name":"Stonewatch Falls","entry":71},{"name":"The Dark Portal","entry":72},{"name":"The Tainted Scar","entry":73},{"name":"Pool of Tears","entry":74},{"name":"Stonard","entry":75},{"name":"Fallow Sanctuary","entry":76},{"name":"Anvilmar","entry":77},{"name":"Stormwind Mountains","entry":80},{"name":"Jeff NE Quadrant Changed","entry":81},{"name":"Jeff NW Quadrant","entry":82},{"name":"Jeff SE Quadrant","entry":83},{"name":"Jeff SW Quadrant","entry":84},{"name":"Tirisfal Glades","entry":85},{"name":"Stone Cairn Lake","entry":86},{"name":"Goldshire","entry":87},{"name":"Eastvale Logging Camp","entry":88},{"name":"Mirror Lake Orchard","entry":89},{"name":"Tower of Azora","entry":91},{"name":"Mirror Lake","entry":92},{"name":"Vul'Gol Ogre Mound","entry":93},{"name":"Raven Hill","entry":94},{"name":"Redridge Canyons","entry":95},{"name":"Tower of Ilgalar","entry":96},{"name":"Alther's Mill","entry":97},{"name":"Rethban Caverns","entry":98},{"name":"Rebel Camp","entry":99},{"name":"Nesingwary's Expedition","entry":100},{"name":"Kurzen's Compound","entry":101},{"name":"Ruins of Zul'Kunda","entry":102},{"name":"Ruins of Zul'Mamwe","entry":103},{"name":"The Vile Reef","entry":104},{"name":"Mosh'Ogg Ogre Mound","entry":105},{"name":"The Stockpile","entry":106},{"name":"Saldean's Farm","entry":107},{"name":"Sentinel Hill","entry":108},{"name":"Furlbrow's Pumpkin Farm","entry":109},{"name":"Jangolode Mine","entry":111},{"name":"Gold Coast Quarry","entry":113},{"name":"Westfall Lighthouse","entry":115},{"name":"Misty Valley","entry":116},{"name":"Grom'gol Base Camp","entry":117},{"name":"Whelgar's Excavation Site","entry":118},{"name":"Westbrook Garrison","entry":120},{"name":"Tranquil Gardens Cemetery","entry":121},{"name":"Zuuldaia Ruins","entry":122},{"name":"Bal'lal Ruins","entry":123},{"name":"Kal'ai Ruins","entry":125},{"name":"Tkashi Ruins","entry":126},{"name":"Balia'mah Ruins","entry":127},{"name":"Ziata'jai Ruins","entry":128},{"name":"Mizjah Ruins","entry":129},{"name":"Silverpine Forest","entry":130},{"name":"Kharanos","entry":131},{"name":"Coldridge Valley","entry":132},{"name":"Gnomeregan","entry":133},{"name":"Gol'Bolar Quarry","entry":134},{"name":"Frostmane Hold","entry":135},{"name":"The Grizzled Den","entry":136},{"name":"Brewnall Village","entry":137},{"name":"Misty Pine Refuge","entry":138},{"name":"Eastern Plaguelands","entry":139},{"name":"Teldrassil","entry":141},{"name":"Ironband's Excavation Site","entry":142},{"name":"Mo'grosh Stronghold","entry":143},{"name":"Thelsamar","entry":144},{"name":"Algaz Gate","entry":145},{"name":"Stonewrought Dam","entry":146},{"name":"The Farstrider Lodge","entry":147},{"name":"Darkshore","entry":148},{"name":"Silver Stream Mine","entry":149},{"name":"Menethil Harbor","entry":150},{"name":"Designer Island","entry":151},{"name":"The Bulwark","entry":152},{"name":"Ruins of Lordaeron","entry":153},{"name":"Deathknell","entry":154},{"name":"Night Web's Hollow","entry":155},{"name":"Solliden Farmstead","entry":156},{"name":"Agamand Mills","entry":157},{"name":"Agamand Family Crypt","entry":158},{"name":"Brill","entry":159},{"name":"Whispering Gardens","entry":160},{"name":"Terrace of Repose","entry":161},{"name":"Brightwater Lake","entry":162},{"name":"Gunther's Retreat","entry":163},{"name":"Garren's Haunt","entry":164},{"name":"Balnir Farmstead","entry":165},{"name":"Cold Hearth Manor","entry":166},{"name":"Crusader Outpost","entry":167},{"name":"The North Coast","entry":168},{"name":"Whispering Shore","entry":169},{"name":"Lordamere Lake","entry":170},{"name":"Fenris Isle","entry":172},{"name":"Faol's Rest","entry":173},{"name":"Dolanaar","entry":186},{"name":"Darnassus UNUSED","entry":187},{"name":"Shadowglen","entry":188},{"name":"Steelgrill's Depot","entry":189},{"name":"Hearthglen","entry":190},{"name":"Northridge Lumber Camp","entry":192},{"name":"Ruins of Andorhal","entry":193},{"name":"School of Necromancy","entry":195},{"name":"Uther's Tomb","entry":196},{"name":"Sorrow Hill","entry":197},{"name":"The Weeping Cave","entry":198},{"name":"Felstone Field","entry":199},{"name":"Dalson's Tears","entry":200},{"name":"Gahrron's Withering","entry":201},{"name":"The Writhing Haunt","entry":202},{"name":"Mardenholde Keep","entry":203},{"name":"Pyrewood Village","entry":204},{"name":"Dun Modr","entry":205},{"name":"Utgarde Keep","entry":206},{"name":"The Great Sea","entry":207},{"name":"Unused Ironcladcove","entry":208},{"name":"Shadowfang Keep","entry":209},{"name":"Icecrown","entry":210},{"name":"Iceflow Lake","entry":211},{"name":"Helm's Bed Lake","entry":212},{"name":"Deep Elem Mine","entry":213},{"name":"The Great Sea","entry":214},{"name":"Mulgore","entry":215},{"name":"Alexston Farmstead","entry":219},{"name":"Red Cloud Mesa","entry":220},{"name":"Camp Narache","entry":221},{"name":"Bloodhoof Village","entry":222},{"name":"Stonebull Lake","entry":223},{"name":"Ravaged Caravan","entry":224},{"name":"Red Rocks","entry":225},{"name":"The Skittering Dark","entry":226},{"name":"Valgan's Field","entry":227},{"name":"The Sepulcher","entry":228},{"name":"Olsen's Farthing","entry":229},{"name":"The Greymane Wall","entry":230},{"name":"Beren's Peril","entry":231},{"name":"The Dawning Isles","entry":232},{"name":"Ambermill","entry":233},{"name":"Fenris Keep","entry":235},{"name":"Shadowfang Keep","entry":236},{"name":"The Decrepit Ferry","entry":237},{"name":"Malden's Orchard","entry":238},{"name":"The Ivar Patch","entry":239},{"name":"The Dead Field","entry":240},{"name":"The Rotting Orchard","entry":241},{"name":"Brightwood Grove","entry":242},{"name":"Forlorn Rowe","entry":243},{"name":"The Whipple Estate","entry":244},{"name":"The Yorgen Farmstead","entry":245},{"name":"The Cauldron","entry":246},{"name":"Grimesilt Dig Site","entry":247},{"name":"Dreadmaul Rock","entry":249},{"name":"Ruins of Thaurissan","entry":250},{"name":"Flame Crest","entry":251},{"name":"Blackrock Stronghold","entry":252},{"name":"The Pillar of Ash","entry":253},{"name":"Blackrock Mountain","entry":254},{"name":"Altar of Storms","entry":255},{"name":"Aldrassil","entry":256},{"name":"Shadowthread Cave","entry":257},{"name":"Fel Rock","entry":258},{"name":"Lake Al'Ameth","entry":259},{"name":"Starbreeze Village","entry":260},{"name":"Gnarlpine Hold","entry":261},{"name":"Ban'ethil Barrow Den","entry":262},{"name":"The Cleft","entry":263},{"name":"The Oracle Glade","entry":264},{"name":"Wellspring River","entry":265},{"name":"Wellspring Lake","entry":266},{"name":"Hillsbrad Foothills","entry":267},{"name":"Azshara Crater","entry":268},{"name":"Dun Algaz","entry":269},{"name":"Southshore","entry":271},{"name":"Tarren Mill","entry":272},{"name":"Durnholde Keep","entry":275},{"name":"UNUSED Stonewrought Pass","entry":276},{"name":"The Foothill Caverns","entry":277},{"name":"Lordamere Internment Camp","entry":278},{"name":"Dalaran Crater","entry":279},{"name":"Strahnbrad","entry":280},{"name":"Ruins of Alterac","entry":281},{"name":"Crushridge Hold","entry":282},{"name":"Slaughter Hollow","entry":283},{"name":"The Uplands","entry":284},{"name":"Southpoint Tower","entry":285},{"name":"Hillsbrad Fields","entry":286},{"name":"Hillsbrad","entry":287},{"name":"Azurelode Mine","entry":288},{"name":"Nethander Stead","entry":289},{"name":"Dun Garok","entry":290},{"name":"Thoradin's Wall","entry":293},{"name":"Eastern Strand","entry":294},{"name":"Western Strand","entry":295},{"name":"South Seas UNUSED","entry":296},{"name":"Jaguero Isle","entry":297},{"name":"Baradin Bay","entry":298},{"name":"Menethil Bay","entry":299},{"name":"Misty Reed Strand","entry":300},{"name":"The Savage Coast","entry":301},{"name":"The Crystal Shore","entry":302},{"name":"Shell Beach","entry":303},{"name":"North Tide's Run","entry":305},{"name":"South Tide's Run","entry":306},{"name":"The Overlook Cliffs","entry":307},{"name":"The Forbidding Sea","entry":308},{"name":"Ironbeard's Tomb","entry":309},{"name":"Crystalvein Mine","entry":310},{"name":"Ruins of Aboraz","entry":311},{"name":"Janeiro's Point","entry":312},{"name":"Northfold Manor","entry":313},{"name":"Go'Shek Farm","entry":314},{"name":"Dabyrie's Farmstead","entry":315},{"name":"Boulderfist Hall","entry":316},{"name":"Witherbark Village","entry":317},{"name":"Drywhisker Gorge","entry":318},{"name":"Refuge Pointe","entry":320},{"name":"Hammerfall","entry":321},{"name":"Blackwater Shipwrecks","entry":322},{"name":"O'Breen's Camp","entry":323},{"name":"Stromgarde Keep","entry":324},{"name":"The Tower of Arathor","entry":325},{"name":"The Sanctum","entry":326},{"name":"Faldir's Cove","entry":327},{"name":"The Drowned Reef","entry":328},{"name":"Thandol Span","entry":330},{"name":"Ashenvale","entry":331},{"name":"The Great Sea","entry":332},{"name":"Circle of East Binding","entry":333},{"name":"Circle of West Binding","entry":334},{"name":"Circle of Inner Binding","entry":335},{"name":"Circle of Outer Binding","entry":336},{"name":"Apocryphan's Rest","entry":337},{"name":"Angor Fortress","entry":338},{"name":"Lethlor Ravine","entry":339},{"name":"Kargath","entry":340},{"name":"Camp Kosh","entry":341},{"name":"Camp Boff","entry":342},{"name":"Camp Wurg","entry":343},{"name":"Camp Cagg","entry":344},{"name":"Agmond's End","entry":345},{"name":"Hammertoe's Digsite","entry":346},{"name":"Dustbelch Grotto","entry":347},{"name":"Aerie Peak","entry":348},{"name":"Wildhammer Keep","entry":349},{"name":"Quel'Danil Lodge","entry":350},{"name":"Skulk Rock","entry":351},{"name":"Zun'watha","entry":352},{"name":"Shadra'Alor","entry":353},{"name":"Jintha'Alor","entry":354},{"name":"The Altar of Zul","entry":355},{"name":"Seradane","entry":356},{"name":"Feralas","entry":357},{"name":"Brambleblade Ravine","entry":358},{"name":"Bael Modan","entry":359},{"name":"The Venture Co. Mine","entry":360},{"name":"Felwood","entry":361},{"name":"Razor Hill","entry":362},{"name":"Valley of Trials","entry":363},{"name":"The Den","entry":364},{"name":"Burning Blade Coven","entry":365},{"name":"Kolkar Crag","entry":366},{"name":"Sen'jin Village","entry":367},{"name":"Echo Isles","entry":368},{"name":"Thunder Ridge","entry":369},{"name":"Drygulch Ravine","entry":370},{"name":"Dustwind Cave","entry":371},{"name":"Tiragarde Keep","entry":372},{"name":"Scuttle Coast","entry":373},{"name":"Bladefist Bay","entry":374},{"name":"Deadeye Shore","entry":375},{"name":"Southfury River","entry":377},{"name":"Camp Taurajo","entry":378},{"name":"Far Watch Post","entry":379},{"name":"The Crossroads","entry":380},{"name":"Boulder Lode Mine","entry":381},{"name":"The Sludge Fen","entry":382},{"name":"The Dry Hills","entry":383},{"name":"Dreadmist Peak","entry":384},{"name":"Northwatch Hold","entry":385},{"name":"The Forgotten Pools","entry":386},{"name":"Lushwater Oasis","entry":387},{"name":"The Stagnant Oasis","entry":388},{"name":"Field of Giants","entry":390},{"name":"The Merchant Coast","entry":391},{"name":"Ratchet","entry":392},{"name":"Darkspear Strand","entry":393},{"name":"Grizzly Hills","entry":394},{"name":"Grizzlemaw","entry":395},{"name":"Winterhoof Water Well","entry":396},{"name":"Thunderhorn Water Well","entry":397},{"name":"Wildmane Water Well","entry":398},{"name":"Skyline Ridge","entry":399},{"name":"Thousand Needles","entry":400},{"name":"The Tidus Stair","entry":401},{"name":"Shady Rest Inn","entry":403},{"name":"Bael'dun Digsite","entry":404},{"name":"Desolace","entry":405},{"name":"Stonetalon Mountains","entry":406},{"name":"Orgrimmar UNUSED","entry":407},{"name":"Gillijim's Isle","entry":408},{"name":"Island of Doctor Lapidis","entry":409},{"name":"Razorwind Canyon","entry":410},{"name":"Bathran's Haunt","entry":411},{"name":"The Ruins of Ordil'Aran","entry":412},{"name":"Maestra's Post","entry":413},{"name":"The Zoram Strand","entry":414},{"name":"Astranaar","entry":415},{"name":"The Shrine of Aessina","entry":416},{"name":"Fire Scar Shrine","entry":417},{"name":"The Ruins of Stardust","entry":418},{"name":"The Howling Vale","entry":419},{"name":"Silverwind Refuge","entry":420},{"name":"Mystral Lake","entry":421},{"name":"Fallen Sky Lake","entry":422},{"name":"Iris Lake","entry":424},{"name":"Moonwell","entry":425},{"name":"Raynewood Retreat","entry":426},{"name":"The Shady Nook","entry":427},{"name":"Night Run","entry":428},{"name":"Xavian","entry":429},{"name":"Satyrnaar","entry":430},{"name":"Splintertree Post","entry":431},{"name":"The Dor'Danil Barrow Den","entry":432},{"name":"Falfarren River","entry":433},{"name":"Felfire Hill","entry":434},{"name":"Demon Fall Canyon","entry":435},{"name":"Demon Fall Ridge","entry":436},{"name":"Warsong Lumber Camp","entry":437},{"name":"Bough Shadow","entry":438},{"name":"The Shimmering Flats","entry":439},{"name":"Tanaris","entry":440},{"name":"Lake Falathim","entry":441},{"name":"Auberdine","entry":442},{"name":"Ruins of Mathystra","entry":443},{"name":"Tower of Althalaxx","entry":444},{"name":"Cliffspring Falls","entry":445},{"name":"Bashal'Aran","entry":446},{"name":"Ameth'Aran","entry":447},{"name":"Grove of the Ancients","entry":448},{"name":"The Master's Glaive","entry":449},{"name":"Remtravel's Excavation","entry":450},{"name":"Mist's Edge","entry":452},{"name":"The Long Wash","entry":453},{"name":"Wildbend River","entry":454},{"name":"Blackwood Den","entry":455},{"name":"Cliffspring River","entry":456},{"name":"The Veiled Sea","entry":457},{"name":"Gold Road","entry":458},{"name":"Scarlet Watch Post","entry":459},{"name":"Sun Rock Retreat","entry":460},{"name":"Windshear Crag","entry":461},{"name":"Cragpool Lake","entry":463},{"name":"Mirkfallon Lake","entry":464},{"name":"The Charred Vale","entry":465},{"name":"Valley of the Bloodfuries","entry":466},{"name":"Stonetalon Peak","entry":467},{"name":"The Talon Den","entry":468},{"name":"Greatwood Vale","entry":469},{"name":"Thunder Bluff UNUSED","entry":470},{"name":"Brave Wind Mesa","entry":471},{"name":"Fire Stone Mesa","entry":472},{"name":"Mantle Rock","entry":473},{"name":"Hunter Rise UNUSED","entry":474},{"name":"Spirit RiseUNUSED","entry":475},{"name":"Elder RiseUNUSED","entry":476},{"name":"Ruins of Jubuwal","entry":477},{"name":"Pools of Arlithrien","entry":478},{"name":"The Rustmaul Dig Site","entry":479},{"name":"Camp E'thok","entry":480},{"name":"Splithoof Crag","entry":481},{"name":"Highperch","entry":482},{"name":"The Screeching Canyon","entry":483},{"name":"Freewind Post","entry":484},{"name":"The Great Lift","entry":485},{"name":"Galak Hold","entry":486},{"name":"Roguefeather Den","entry":487},{"name":"The Weathered Nook","entry":488},{"name":"Thalanaar","entry":489},{"name":"Un'Goro Crater","entry":490},{"name":"Razorfen Kraul","entry":491},{"name":"Raven Hill Cemetery","entry":492},{"name":"Moonglade","entry":493},{"name":"Howling Fjord","entry":495},{"name":"Brackenwall Village","entry":496},{"name":"Swamplight Manor","entry":497},{"name":"Bloodfen Burrow","entry":498},{"name":"Darkmist Cavern","entry":499},{"name":"Moggle Point","entry":500},{"name":"Beezil's Wreck","entry":501},{"name":"Witch Hill","entry":502},{"name":"Sentry Point","entry":503},{"name":"North Point Tower","entry":504},{"name":"West Point Tower","entry":505},{"name":"Lost Point","entry":506},{"name":"Bluefen","entry":507},{"name":"Stonemaul Ruins","entry":508},{"name":"The Den of Flame","entry":509},{"name":"The Dragonmurk","entry":510},{"name":"Wyrmbog","entry":511},{"name":"Blackhoof Village","entry":512},{"name":"Theramore Isle","entry":513},{"name":"Foothold Citadel","entry":514},{"name":"Ironclad Prison","entry":515},{"name":"Dustwallow Bay","entry":516},{"name":"Tidefury Cove","entry":517},{"name":"Dreadmurk Shore","entry":518},{"name":"Addle's Stead","entry":536},{"name":"Fire Plume Ridge","entry":537},{"name":"Lakkari Tar Pits","entry":538},{"name":"Terror Run","entry":539},{"name":"The Slithering Scar","entry":540},{"name":"Marshal's Refuge","entry":541},{"name":"Fungal Rock","entry":542},{"name":"Golakka Hot Springs","entry":543},{"name":"The Loch","entry":556},{"name":"Beggar's Haunt","entry":576},{"name":"Kodo Graveyard","entry":596},{"name":"Ghost Walker Post","entry":597},{"name":"Sar'theris Strand","entry":598},{"name":"Thunder Axe Fortress","entry":599},{"name":"Bolgan's Hole","entry":600},{"name":"Mannoroc Coven","entry":602},{"name":"Sargeron","entry":603},{"name":"Magram Village","entry":604},{"name":"Gelkis Village","entry":606},{"name":"Valley of Spears","entry":607},{"name":"Nijel's Point","entry":608},{"name":"Kolkar Village","entry":609},{"name":"Hyjal","entry":616},{"name":"Winterspring","entry":618},{"name":"Blackwolf River","entry":636},{"name":"Kodo Rock","entry":637},{"name":"Hidden Path","entry":638},{"name":"Spirit Rock","entry":639},{"name":"Shrine of the Dormant Flame","entry":640},{"name":"Lake Elune'ara","entry":656},{"name":"The Harborage","entry":657},{"name":"Outland","entry":676},{"name":"Craftsmen's Terrace UNUSED","entry":696},{"name":"Tradesmen's Terrace UNUSED","entry":697},{"name":"The Temple Gardens UNUSED","entry":698},{"name":"Temple of Elune UNUSED","entry":699},{"name":"Cenarion Enclave UNUSED","entry":700},{"name":"Warrior's Terrace UNUSED","entry":701},{"name":"Rut'theran Village","entry":702},{"name":"Ironband's Compound","entry":716},{"name":"The Stockade","entry":717},{"name":"Wailing Caverns","entry":718},{"name":"Blackfathom Deeps","entry":719},{"name":"Fray Island","entry":720},{"name":"Gnomeregan","entry":721},{"name":"Razorfen Downs","entry":722},{"name":"Ban'ethil Hollow","entry":736},{"name":"Scarlet Monastery","entry":796},{"name":"Jerod's Landing","entry":797},{"name":"Ridgepoint Tower","entry":798},{"name":"The Darkened Bank","entry":799},{"name":"Coldridge Pass","entry":800},{"name":"Chill Breeze Valley","entry":801},{"name":"Shimmer Ridge","entry":802},{"name":"Amberstill Ranch","entry":803},{"name":"The Tundrid Hills","entry":804},{"name":"South Gate Pass","entry":805},{"name":"South Gate Outpost","entry":806},{"name":"North Gate Pass","entry":807},{"name":"North Gate Outpost","entry":808},{"name":"Gates of Ironforge","entry":809},{"name":"Stillwater Pond","entry":810},{"name":"Nightmare Vale","entry":811},{"name":"Venomweb Vale","entry":812},{"name":"The Bulwark","entry":813},{"name":"Southfury River","entry":814},{"name":"Southfury River","entry":815},{"name":"Razormane Grounds","entry":816},{"name":"Skull Rock","entry":817},{"name":"Palemane Rock","entry":818},{"name":"Windfury Ridge","entry":819},{"name":"The Golden Plains","entry":820},{"name":"The Rolling Plains","entry":821},{"name":"Dun Algaz","entry":836},{"name":"Dun Algaz","entry":837},{"name":"North Gate Pass","entry":838},{"name":"South Gate Pass","entry":839},{"name":"Twilight Grove","entry":856},{"name":"GM Island","entry":876},{"name":"Delete ME","entry":877},{"name":"Southfury River","entry":878},{"name":"Southfury River","entry":879},{"name":"Thandol Span","entry":880},{"name":"Thandol Span","entry":881},{"name":"Purgation Isle","entry":896},{"name":"The Jansen Stead","entry":916},{"name":"The Dead Acre","entry":917},{"name":"The Molsen Farm","entry":918},{"name":"Stendel's Pond","entry":919},{"name":"The Dagger Hills","entry":920},{"name":"Demont's Place","entry":921},{"name":"The Dust Plains","entry":922},{"name":"Stonesplinter Valley","entry":923},{"name":"Valley of Kings","entry":924},{"name":"Algaz Station","entry":925},{"name":"Bucklebree Farm","entry":926},{"name":"The Shining Strand","entry":927},{"name":"North Tide's Hollow","entry":928},{"name":"Grizzlepaw Ridge","entry":936},{"name":"The Verdant Fields","entry":956},{"name":"Gadgetzan","entry":976},{"name":"Steamwheedle Port","entry":977},{"name":"Zul'Farrak","entry":978},{"name":"Sandsorrow Watch","entry":979},{"name":"Thistleshrub Valley","entry":980},{"name":"The Gaping Chasm","entry":981},{"name":"The Noxious Lair","entry":982},{"name":"Dunemaul Compound","entry":983},{"name":"Eastmoon Ruins","entry":984},{"name":"Waterspring Field","entry":985},{"name":"Zalashji's Den","entry":986},{"name":"Land's End Beach","entry":987},{"name":"Wavestrider Beach","entry":988},{"name":"Uldum","entry":989},{"name":"Valley of the Watchers","entry":990},{"name":"Gunstan's Post","entry":991},{"name":"Southmoon Ruins","entry":992},{"name":"Render's Camp","entry":996},{"name":"Render's Valley","entry":997},{"name":"Render's Rock","entry":998},{"name":"Stonewatch Tower","entry":999},{"name":"Galardell Valley","entry":1000},{"name":"Lakeridge Highway","entry":1001},{"name":"Three Corners","entry":1002},{"name":"Direforge Hill","entry":1016},{"name":"Raptor Ridge","entry":1017},{"name":"Black Channel Marsh","entry":1018},{"name":"The Green Belt","entry":1019},{"name":"Mosshide Fen","entry":1020},{"name":"Thelgen Rock","entry":1021},{"name":"Bluegill Marsh","entry":1022},{"name":"Saltspray Glen","entry":1023},{"name":"Sundown Marsh","entry":1024},{"name":"The Green Belt","entry":1025},{"name":"Angerfang Encampment","entry":1036},{"name":"Grim Batol","entry":1037},{"name":"Dragonmaw Gates","entry":1038},{"name":"The Lost Fleet","entry":1039},{"name":"Darrow Hill","entry":1056},{"name":"Thoradin's Wall","entry":1057},{"name":"Webwinder Path","entry":1076},{"name":"The Hushed Bank","entry":1097},{"name":"Manor Mistmantle","entry":1098},{"name":"Camp Mojache","entry":1099},{"name":"Grimtotem Compound","entry":1100},{"name":"The Writhing Deep","entry":1101},{"name":"Wildwind Lake","entry":1102},{"name":"Gordunni Outpost","entry":1103},{"name":"Mok'Gordun","entry":1104},{"name":"Feral Scar Vale","entry":1105},{"name":"Frayfeather Highlands","entry":1106},{"name":"Idlewind Lake","entry":1107},{"name":"The Forgotten Coast","entry":1108},{"name":"East Pillar","entry":1109},{"name":"West Pillar","entry":1110},{"name":"Dream Bough","entry":1111},{"name":"Jademir Lake","entry":1112},{"name":"Oneiros","entry":1113},{"name":"Ruins of Ravenwind","entry":1114},{"name":"Rage Scar Hold","entry":1115},{"name":"Feathermoon Stronghold","entry":1116},{"name":"Ruins of Solarsal","entry":1117},{"name":"Lower Wilds UNUSED","entry":1118},{"name":"The Twin Colossals","entry":1119},{"name":"Sardor Isle","entry":1120},{"name":"Isle of Dread","entry":1121},{"name":"High Wilderness","entry":1136},{"name":"Lower Wilds","entry":1137},{"name":"Southern Barrens","entry":1156},{"name":"Southern Gold Road","entry":1157},{"name":"Zul'Farrak","entry":1176},{"name":"Utgarde Pinnacle","entry":1196},{"name":"Timbermaw Hold","entry":1216},{"name":"Vanndir Encampment","entry":1217},{"name":"TESTAzshara","entry":1218},{"name":"Legash Encampment","entry":1219},{"name":"Thalassian Base Camp","entry":1220},{"name":"Ruins of Eldarath","entry":1221},{"name":"Hetaera's Clutch","entry":1222},{"name":"Temple of Zin-Malor","entry":1223},{"name":"Bear's Head","entry":1224},{"name":"Ursolan","entry":1225},{"name":"Temple of Arkkoran","entry":1226},{"name":"Bay of Storms","entry":1227},{"name":"The Shattered Strand","entry":1228},{"name":"Tower of Eldara","entry":1229},{"name":"Jagged Reef","entry":1230},{"name":"Southridge Beach","entry":1231},{"name":"Ravencrest Monument","entry":1232},{"name":"Forlorn Ridge","entry":1233},{"name":"Lake Mennar","entry":1234},{"name":"Shadowsong Shrine","entry":1235},{"name":"Haldarr Encampment","entry":1236},{"name":"Valormok","entry":1237},{"name":"The Ruined Reaches","entry":1256},{"name":"The Talondeep Path","entry":1276},{"name":"The Talondeep Path","entry":1277},{"name":"Rocktusk Farm","entry":1296},{"name":"Jaggedswine Farm","entry":1297},{"name":"Razorfen Downs","entry":1316},{"name":"Lost Rigger Cove","entry":1336},{"name":"Uldaman","entry":1337},{"name":"Lordamere Lake","entry":1338},{"name":"Lordamere Lake","entry":1339},{"name":"Gallows' Corner","entry":1357},{"name":"Silithus","entry":1377},{"name":"Emerald Forest","entry":1397},{"name":"Sunken Temple","entry":1417},{"name":"Dreadmaul Hold","entry":1437},{"name":"Nethergarde Keep","entry":1438},{"name":"Dreadmaul Post","entry":1439},{"name":"Serpent's Coil","entry":1440},{"name":"Altar of Storms","entry":1441},{"name":"Firewatch Ridge","entry":1442},{"name":"The Slag Pit","entry":1443},{"name":"The Sea of Cinders","entry":1444},{"name":"Blackrock Mountain","entry":1445},{"name":"Thorium Point","entry":1446},{"name":"Garrison Armory","entry":1457},{"name":"The Temple of Atal'Hakkar","entry":1477},{"name":"Undercity","entry":1497},{"name":"Uldaman","entry":1517},{"name":"Not Used Deadmines","entry":1518},{"name":"Stormwind City","entry":1519},{"name":"Ironforge","entry":1537},{"name":"Splithoof Hold","entry":1557},{"name":"The Cape of Stranglethorn","entry":1577},{"name":"Southern Savage Coast","entry":1578},{"name":"Unused The Deadmines 002","entry":1579},{"name":"Unused Ironclad Cove 003","entry":1580},{"name":"The Deadmines","entry":1581},{"name":"Ironclad Cove","entry":1582},{"name":"Blackrock Spire","entry":1583},{"name":"Blackrock Depths","entry":1584},{"name":"Raptor Grounds UNUSED","entry":1597},{"name":"Grol'dom Farm UNUSED","entry":1598},{"name":"Mor'shan Base Camp","entry":1599},{"name":"Honor's Stand UNUSED","entry":1600},{"name":"Blackthorn Ridge UNUSED","entry":1601},{"name":"Bramblescar UNUSED","entry":1602},{"name":"Agama'gor UNUSED","entry":1603},{"name":"Valley of Heroes","entry":1617},{"name":"Orgrimmar","entry":1637},{"name":"Thunder Bluff","entry":1638},{"name":"Elder Rise","entry":1639},{"name":"Spirit Rise","entry":1640},{"name":"Hunter Rise","entry":1641},{"name":"Darnassus","entry":1657},{"name":"Cenarion Enclave","entry":1658},{"name":"Craftsmen's Terrace","entry":1659},{"name":"Warrior's Terrace","entry":1660},{"name":"The Temple Gardens","entry":1661},{"name":"Tradesmen's Terrace","entry":1662},{"name":"Gavin's Naze","entry":1677},{"name":"Sofera's Naze","entry":1678},{"name":"Corrahn's Dagger","entry":1679},{"name":"The Headland","entry":1680},{"name":"Misty Shore","entry":1681},{"name":"Dandred's Fold","entry":1682},{"name":"Growless Cave","entry":1683},{"name":"Chillwind Point","entry":1684},{"name":"Raptor Grounds","entry":1697},{"name":"Bramblescar","entry":1698},{"name":"Thorn Hill","entry":1699},{"name":"Agama'gor","entry":1700},{"name":"Blackthorn Ridge","entry":1701},{"name":"Honor's Stand","entry":1702},{"name":"The Mor'shan Rampart","entry":1703},{"name":"Grol'dom Farm","entry":1704},{"name":"Razorfen Kraul","entry":1717},{"name":"The Great Lift","entry":1718},{"name":"Mistvale Valley","entry":1737},{"name":"Nek'mani Wellspring","entry":1738},{"name":"Bloodsail Compound","entry":1739},{"name":"Venture Co. Base Camp","entry":1740},{"name":"Gurubashi Arena","entry":1741},{"name":"Spirit Den","entry":1742},{"name":"The Crimson Veil","entry":1757},{"name":"The Riptide","entry":1758},{"name":"The Damsel's Luck","entry":1759},{"name":"Venture Co. Operations Center","entry":1760},{"name":"Deadwood Village","entry":1761},{"name":"Felpaw Village","entry":1762},{"name":"Jaedenar","entry":1763},{"name":"Bloodvenom River","entry":1764},{"name":"Bloodvenom Falls","entry":1765},{"name":"Shatter Scar Vale","entry":1766},{"name":"Irontree Woods","entry":1767},{"name":"Irontree Cavern","entry":1768},{"name":"Timbermaw Hold","entry":1769},{"name":"Shadow Hold","entry":1770},{"name":"Shrine of the Deceiver","entry":1771},{"name":"Itharius's Cave","entry":1777},{"name":"Sorrowmurk","entry":1778},{"name":"Draenil'dur Village","entry":1779},{"name":"Splinterspear Junction","entry":1780},{"name":"Stagalbog","entry":1797},{"name":"The Shifting Mire","entry":1798},{"name":"Stagalbog Cave","entry":1817},{"name":"Witherbark Caverns","entry":1837},{"name":"Thoradin's Wall","entry":1857},{"name":"Boulder'gor","entry":1858},{"name":"Valley of Fangs","entry":1877},{"name":"The Dustbowl","entry":1878},{"name":"Mirage Flats","entry":1879},{"name":"Featherbeard's Hovel","entry":1880},{"name":"Shindigger's Camp","entry":1881},{"name":"Plaguemist Ravine","entry":1882},{"name":"Valorwind Lake","entry":1883},{"name":"Agol'watha","entry":1884},{"name":"Hiri'watha","entry":1885},{"name":"The Creeping Ruin","entry":1886},{"name":"Bogen's Ledge","entry":1887},{"name":"The Maker's Terrace","entry":1897},{"name":"Dustwind Gulch","entry":1898},{"name":"Shaol'watha","entry":1917},{"name":"Noonshade Ruins","entry":1937},{"name":"Broken Pillar","entry":1938},{"name":"Abyssal Sands","entry":1939},{"name":"Southbreak Shore","entry":1940},{"name":"Caverns of Time","entry":1941},{"name":"The Marshlands","entry":1942},{"name":"Ironstone Plateau","entry":1943},{"name":"Blackchar Cave","entry":1957},{"name":"Tanner Camp","entry":1958},{"name":"Dustfire Valley","entry":1959},{"name":"Zul'Gurub","entry":1977},{"name":"Misty Reed Post","entry":1978},{"name":"Bloodvenom Post ","entry":1997},{"name":"Talonbranch Glade ","entry":1998},{"name":"Stratholme","entry":2017},{"name":"Quel'thalas","entry":2037},{"name":"Scholomance","entry":2057},{"name":"Twilight Vale","entry":2077},{"name":"Twilight Shore","entry":2078},{"name":"Alcaz Island","entry":2079},{"name":"Darkcloud Pinnacle","entry":2097},{"name":"Dawning Wood Catacombs","entry":2098},{"name":"Stonewatch Keep","entry":2099},{"name":"Maraudon","entry":2100},{"name":"Stoutlager Inn","entry":2101},{"name":"Thunderbrew Distillery","entry":2102},{"name":"Menethil Keep","entry":2103},{"name":"Deepwater Tavern","entry":2104},{"name":"Shadow Grave","entry":2117},{"name":"Brill Town Hall","entry":2118},{"name":"Gallows' End Tavern","entry":2119},{"name":"The Pools of VisionUNUSED","entry":2137},{"name":"Dreadmist Den","entry":2138},{"name":"Bael'dun Keep","entry":2157},{"name":"Emberstrife's Den","entry":2158},{"name":"Onyxia's Lair","entry":2159},{"name":"Windshear Mine","entry":2160},{"name":"Roland's Doom","entry":2161},{"name":"Battle Ring","entry":2177},{"name":"The Pools of Vision","entry":2197},{"name":"Shadowbreak Ravine","entry":2198},{"name":"Broken Spear Village","entry":2217},{"name":"Whitereach Post","entry":2237},{"name":"Gornia","entry":2238},{"name":"Zane's Eye Crater","entry":2239},{"name":"Mirage Raceway","entry":2240},{"name":"Frostsaber Rock","entry":2241},{"name":"The Hidden Grove","entry":2242},{"name":"Timbermaw Post","entry":2243},{"name":"Winterfall Village","entry":2244},{"name":"Mazthoril","entry":2245},{"name":"Frostfire Hot Springs","entry":2246},{"name":"Ice Thistle Hills","entry":2247},{"name":"Dun Mandarr","entry":2248},{"name":"Frostwhisper Gorge","entry":2249},{"name":"Owl Wing Thicket","entry":2250},{"name":"Lake Kel'Theril","entry":2251},{"name":"The Ruins of Kel'Theril","entry":2252},{"name":"Starfall Village","entry":2253},{"name":"Ban'Thallow Barrow Den","entry":2254},{"name":"Everlook","entry":2255},{"name":"Darkwhisper Gorge","entry":2256},{"name":"Deeprun Tram","entry":2257},{"name":"The Fungal Vale","entry":2258},{"name":"UNUSEDThe Marris Stead","entry":2259},{"name":"The Marris Stead","entry":2260},{"name":"The Undercroft","entry":2261},{"name":"Darrowshire","entry":2262},{"name":"Crown Guard Tower","entry":2263},{"name":"Corin's Crossing","entry":2264},{"name":"Scarlet Base Camp","entry":2265},{"name":"Tyr's Hand","entry":2266},{"name":"The Scarlet Basilica","entry":2267},{"name":"Light's Hope Chapel","entry":2268},{"name":"Browman Mill","entry":2269},{"name":"The Noxious Glade","entry":2270},{"name":"Eastwall Tower","entry":2271},{"name":"Northdale","entry":2272},{"name":"Zul'Mashar","entry":2273},{"name":"Mazra'Alor","entry":2274},{"name":"Northpass Tower","entry":2275},{"name":"Quel'Lithien Lodge","entry":2276},{"name":"Plaguewood","entry":2277},{"name":"Scourgehold","entry":2278},{"name":"Stratholme","entry":2279},{"name":"DO NOT USE","entry":2280},{"name":"Darrowmere Lake","entry":2297},{"name":"Caer Darrow","entry":2298},{"name":"Darrowmere Lake","entry":2299},{"name":"Caverns of Time","entry":2300},{"name":"Thistlefur Village","entry":2301},{"name":"The Quagmire","entry":2302},{"name":"Windbreak Canyon","entry":2303},{"name":"South Seas","entry":2317},{"name":"The Great Sea","entry":2318},{"name":"The Great Sea","entry":2319},{"name":"The Great Sea","entry":2320},{"name":"The Great Sea","entry":2321},{"name":"The Veiled Sea","entry":2322},{"name":"The Veiled Sea","entry":2323},{"name":"The Veiled Sea","entry":2324},{"name":"The Veiled Sea","entry":2325},{"name":"The Veiled Sea","entry":2326},{"name":"Razor Hill Barracks","entry":2337},{"name":"South Seas","entry":2338},{"name":"The Great Sea","entry":2339},{"name":"Bloodtooth Camp","entry":2357},{"name":"Forest Song","entry":2358},{"name":"Greenpaw Village","entry":2359},{"name":"Silverwing Outpost","entry":2360},{"name":"Nighthaven","entry":2361},{"name":"Shrine of Remulos","entry":2362},{"name":"Stormrage Barrow Dens","entry":2363},{"name":"The Great Sea","entry":2364},{"name":"The Great Sea","entry":2365},{"name":"The Black Morass","entry":2366},{"name":"Old Hillsbrad Foothills","entry":2367},{"name":"Tarren Mill","entry":2368},{"name":"Southshore","entry":2369},{"name":"Durnholde Keep","entry":2370},{"name":"Dun Garok","entry":2371},{"name":"Hillsbrad Fields","entry":2372},{"name":"Eastern Strand","entry":2373},{"name":"Nethander Stead","entry":2374},{"name":"Darrow Hill","entry":2375},{"name":"Southpoint Tower","entry":2376},{"name":"Thoradin's Wall","entry":2377},{"name":"Western Strand","entry":2378},{"name":"Azurelode Mine","entry":2379},{"name":"The Great Sea","entry":2397},{"name":"The Great Sea","entry":2398},{"name":"The Great Sea","entry":2399},{"name":"The Forbidding Sea","entry":2400},{"name":"The Forbidding Sea","entry":2401},{"name":"The Forbidding Sea","entry":2402},{"name":"The Forbidding Sea","entry":2403},{"name":"Tethris Aran","entry":2404},{"name":"Ethel Rethor","entry":2405},{"name":"Ranazjar Isle","entry":2406},{"name":"Kormek's Hut","entry":2407},{"name":"Shadowprey Village","entry":2408},{"name":"Blackrock Pass","entry":2417},{"name":"Morgan's Vigil","entry":2418},{"name":"Slither Rock","entry":2419},{"name":"Terror Wing Path","entry":2420},{"name":"Draco'dar","entry":2421},{"name":"Ragefire Chasm","entry":2437},{"name":"Nightsong Woods","entry":2457},{"name":"The Veiled Sea","entry":2477},{"name":"Morlos'Aran","entry":2478},{"name":"Emerald Sanctuary","entry":2479},{"name":"Jadefire Glen","entry":2480},{"name":"Ruins of Constellas","entry":2481},{"name":"Bitter Reaches","entry":2497},{"name":"Rise of the Defiler","entry":2517},{"name":"Lariss Pavilion","entry":2518},{"name":"Woodpaw Hills","entry":2519},{"name":"Woodpaw Den","entry":2520},{"name":"Verdantis River","entry":2521},{"name":"Ruins of Isildien","entry":2522},{"name":"Grimtotem Post","entry":2537},{"name":"Camp Aparaje","entry":2538},{"name":"Malaka'jin","entry":2539},{"name":"Boulderslide Ravine","entry":2540},{"name":"Sishir Canyon","entry":2541},{"name":"Dire Maul","entry":2557},{"name":"Deadwind Ravine","entry":2558},{"name":"Diamondhead River","entry":2559},{"name":"Ariden's Camp","entry":2560},{"name":"The Vice","entry":2561},{"name":"Karazhan","entry":2562},{"name":"Morgan's Plot","entry":2563},{"name":"Dire Maul","entry":2577},{"name":"Alterac Valley","entry":2597},{"name":"Scrabblescrew's Camp","entry":2617},{"name":"Jadefire Run","entry":2618},{"name":"Thondroril River","entry":2619},{"name":"Thondroril River","entry":2620},{"name":"Lake Mereldar","entry":2621},{"name":"Pestilent Scar","entry":2622},{"name":"The Infectis Scar","entry":2623},{"name":"Blackwood Lake","entry":2624},{"name":"Eastwall Gate","entry":2625},{"name":"Terrorweb Tunnel","entry":2626},{"name":"Terrordale","entry":2627},{"name":"Kargathia Keep","entry":2637},{"name":"Valley of Bones","entry":2657},{"name":"Blackwing Lair","entry":2677},{"name":"Deadman's Crossing","entry":2697},{"name":"Molten Core","entry":2717},{"name":"The Scarab Wall","entry":2737},{"name":"Southwind Village","entry":2738},{"name":"Twilight Base Camp","entry":2739},{"name":"The Crystal Vale","entry":2740},{"name":"The Scarab Dais","entry":2741},{"name":"Hive'Ashi","entry":2742},{"name":"Hive'Zora","entry":2743},{"name":"Hive'Regal","entry":2744},{"name":"Shrine of the Fallen Warrior","entry":2757},{"name":"UNUSED Alterac Valley","entry":2777},{"name":"Blackfathom Deeps","entry":2797},{"name":"Crystalsong Forest","entry":2817},{"name":"The Master's Cellar","entry":2837},{"name":"Stonewrought Pass","entry":2838},{"name":"Alterac Valley","entry":2839},{"name":"The Rumble Cage","entry":2857},{"name":"Chunk Test","entry":2877},{"name":"Zoram'gar Outpost","entry":2897},{"name":"Hall of Legends","entry":2917},{"name":"Champions' Hall","entry":2918},{"name":"Grosh'gok Compound","entry":2937},{"name":"Sleeping Gorge","entry":2938},{"name":"Irondeep Mine","entry":2957},{"name":"Stonehearth Outpost","entry":2958},{"name":"Dun Baldar","entry":2959},{"name":"Icewing Pass","entry":2960},{"name":"Frostwolf Village","entry":2961},{"name":"Tower Point","entry":2962},{"name":"Coldtooth Mine","entry":2963},{"name":"Winterax Hold","entry":2964},{"name":"Iceblood Garrison","entry":2977},{"name":"Frostwolf Keep","entry":2978},{"name":"Tor'kren Farm","entry":2979},{"name":"Frost Dagger Pass","entry":3017},{"name":"Ironstone Camp","entry":3037},{"name":"Weazel's Crater","entry":3038},{"name":"Tahonda Ruins","entry":3039},{"name":"Field of Strife","entry":3057},{"name":"Icewing Cavern","entry":3058},{"name":"Valor's Rest","entry":3077},{"name":"The Swarming Pillar","entry":3097},{"name":"Twilight Post","entry":3098},{"name":"Twilight Outpost","entry":3099},{"name":"Ravaged Twilight Camp","entry":3100},{"name":"Shalzaru's Lair","entry":3117},{"name":"Talrendis Point","entry":3137},{"name":"Rethress Sanctum","entry":3138},{"name":"Moon Horror Den","entry":3139},{"name":"Scalebeard's Cave","entry":3140},{"name":"Boulderslide Cavern","entry":3157},{"name":"Warsong Labor Camp","entry":3177},{"name":"Chillwind Camp","entry":3197},{"name":"The Maul","entry":3217},{"name":"The Maul UNUSED","entry":3237},{"name":"Bones of Grakkarond","entry":3257},{"name":"Warsong Gulch","entry":3277},{"name":"Frostwolf Graveyard","entry":3297},{"name":"Frostwolf Pass","entry":3298},{"name":"Dun Baldar Pass","entry":3299},{"name":"Iceblood Graveyard","entry":3300},{"name":"Snowfall Graveyard","entry":3301},{"name":"Stonehearth Graveyard","entry":3302},{"name":"Stormpike Graveyard","entry":3303},{"name":"Icewing Bunker","entry":3304},{"name":"Stonehearth Bunker","entry":3305},{"name":"Wildpaw Ridge","entry":3306},{"name":"Revantusk Village","entry":3317},{"name":"Rock of Durotan","entry":3318},{"name":"Silverwing Grove","entry":3319},{"name":"Warsong Lumber Mill","entry":3320},{"name":"Silverwing Hold","entry":3321},{"name":"Wildpaw Cavern","entry":3337},{"name":"The Veiled Cleft","entry":3338},{"name":"Yojamba Isle","entry":3357},{"name":"Arathi Basin","entry":3358},{"name":"The Coil","entry":3377},{"name":"Altar of Hir'eek","entry":3378},{"name":"Shadra'zaar","entry":3379},{"name":"Hakkari Grounds","entry":3380},{"name":"Naze of Shirvallah","entry":3381},{"name":"Temple of Bethekk","entry":3382},{"name":"The Bloodfire Pit","entry":3383},{"name":"Altar of the Blood God","entry":3384},{"name":"Zanza's Rise","entry":3397},{"name":"Edge of Madness","entry":3398},{"name":"Trollbane Hall","entry":3417},{"name":"Defiler's Den","entry":3418},{"name":"Pagle's Pointe","entry":3419},{"name":"Farm","entry":3420},{"name":"Blacksmith","entry":3421},{"name":"Lumber Mill","entry":3422},{"name":"Gold Mine","entry":3423},{"name":"Stables","entry":3424},{"name":"Cenarion Hold","entry":3425},{"name":"Staghelm Point","entry":3426},{"name":"Bronzebeard Encampment","entry":3427},{"name":"Ahn'Qiraj","entry":3428},{"name":"Ruins of Ahn'Qiraj","entry":3429},{"name":"Eversong Woods","entry":3430},{"name":"Sunstrider Isle","entry":3431},{"name":"Shrine of Dath'Remar","entry":3432},{"name":"Ghostlands","entry":3433},{"name":"Scarab Terrace","entry":3434},{"name":"General's Terrace","entry":3435},{"name":"The Reservoir","entry":3436},{"name":"The Hatchery","entry":3437},{"name":"The Comb","entry":3438},{"name":"Watchers' Terrace","entry":3439},{"name":"Scarab Terrace","entry":3440},{"name":"General's Terrace","entry":3441},{"name":"The Reservoir","entry":3442},{"name":"The Hatchery","entry":3443},{"name":"The Comb","entry":3444},{"name":"Watchers' Terrace","entry":3445},{"name":"Twilight's Run","entry":3446},{"name":"Ortell's Hideout","entry":3447},{"name":"Scarab Terrace","entry":3448},{"name":"General's Terrace","entry":3449},{"name":"The Reservoir","entry":3450},{"name":"The Hatchery","entry":3451},{"name":"The Comb","entry":3452},{"name":"Watchers' Terrace","entry":3453},{"name":"Ruins of Ahn'Qiraj","entry":3454},{"name":"The North Sea","entry":3455},{"name":"Naxxramas","entry":3456},{"name":"Karazhan","entry":3457},{"name":"City","entry":3459},{"name":"Golden Strand","entry":3460},{"name":"Sunsail Anchorage","entry":3461},{"name":"Fairbreeze Village","entry":3462},{"name":"Magisters Gate","entry":3463},{"name":"Farstrider Retreat","entry":3464},{"name":"North Sanctum","entry":3465},{"name":"West Sanctum","entry":3466},{"name":"East Sanctum","entry":3467},{"name":"Saltheril's Haven","entry":3468},{"name":"Thuron's Livery","entry":3469},{"name":"Stillwhisper Pond","entry":3470},{"name":"The Living Wood","entry":3471},{"name":"Azurebreeze Coast","entry":3472},{"name":"Lake Elrendar","entry":3473},{"name":"The Scorched Grove","entry":3474},{"name":"Zeb'Watha","entry":3475},{"name":"Tor'Watha","entry":3476},{"name":"Azjol-Nerub","entry":3477},{"name":"Gates of Ahn'Qiraj","entry":3478},{"name":"The Veiled Sea","entry":3479},{"name":"Duskwither Grounds","entry":3480},{"name":"Duskwither Spire","entry":3481},{"name":"The Dead Scar","entry":3482},{"name":"Hellfire Peninsula","entry":3483},{"name":"The Sunspire","entry":3484},{"name":"Falthrien Academy","entry":3485},{"name":"Ravenholdt Manor","entry":3486},{"name":"Silvermoon City","entry":3487},{"name":"Tranquillien","entry":3488},{"name":"Suncrown Village","entry":3489},{"name":"Goldenmist Village","entry":3490},{"name":"Windrunner Village","entry":3491},{"name":"Windrunner Spire","entry":3492},{"name":"Sanctum of the Sun","entry":3493},{"name":"Sanctum of the Moon","entry":3494},{"name":"Dawnstar Spire","entry":3495},{"name":"Farstrider Enclave","entry":3496},{"name":"An'daroth","entry":3497},{"name":"An'telas","entry":3498},{"name":"An'owyn","entry":3499},{"name":"Deatholme","entry":3500},{"name":"Bleeding Ziggurat","entry":3501},{"name":"Howling Ziggurat","entry":3502},{"name":"Shalandis Isle","entry":3503},{"name":"Toryl Estate","entry":3504},{"name":"Underlight Mines","entry":3505},{"name":"Andilien Estate","entry":3506},{"name":"Hatchet Hills","entry":3507},{"name":"Amani Pass","entry":3508},{"name":"Sungraze Peak","entry":3509},{"name":"Amani Catacombs","entry":3510},{"name":"Tower of the Damned","entry":3511},{"name":"Zeb'Sora","entry":3512},{"name":"Lake Elrendar","entry":3513},{"name":"The Dead Scar","entry":3514},{"name":"Elrendar River","entry":3515},{"name":"Zeb'Tela","entry":3516},{"name":"Zeb'Nowa","entry":3517},{"name":"Nagrand","entry":3518},{"name":"Terokkar Forest","entry":3519},{"name":"Shadowmoon Valley","entry":3520},{"name":"Zangarmarsh","entry":3521},{"name":"Blade's Edge Mountains","entry":3522},{"name":"Netherstorm","entry":3523},{"name":"Azuremyst Isle","entry":3524},{"name":"Bloodmyst Isle","entry":3525},{"name":"Ammen Vale","entry":3526},{"name":"Crash Site","entry":3527},{"name":"Silverline Lake","entry":3528},{"name":"Nestlewood Thicket","entry":3529},{"name":"Shadow Ridge","entry":3530},{"name":"Skulking Row","entry":3531},{"name":"Dawning Lane","entry":3532},{"name":"Ruins of Silvermoon","entry":3533},{"name":"Feth's Way","entry":3534},{"name":"Hellfire Citadel","entry":3535},{"name":"Thrallmar","entry":3536},{"name":"Borean Tundra","entry":3537},{"name":"Honor Hold","entry":3538},{"name":"The Stair of Destiny","entry":3539},{"name":"Twisting Nether","entry":3540},{"name":"Forge Camp: Mageddon","entry":3541},{"name":"The Path of Glory","entry":3542},{"name":"The Great Fissure","entry":3543},{"name":"Plain of Shards","entry":3544},{"name":"Hellfire Citadel","entry":3545},{"name":"Expedition Armory","entry":3546},{"name":"Throne of Kil'jaeden","entry":3547},{"name":"Forge Camp: Rage","entry":3548},{"name":"Invasion Point: Annihilator","entry":3549},{"name":"Borune Ruins","entry":3550},{"name":"Ruins of Sha'naar","entry":3551},{"name":"Temple of Telhamat","entry":3552},{"name":"Pools of Aggonar","entry":3553},{"name":"Falcon Watch","entry":3554},{"name":"Mag'har Post","entry":3555},{"name":"Den of Haal'esh","entry":3556},{"name":"The Exodar","entry":3557},{"name":"Elrendar Falls","entry":3558},{"name":"Nestlewood Hills","entry":3559},{"name":"Ammen Fields","entry":3560},{"name":"The Sacred Grove","entry":3561},{"name":"Hellfire Ramparts","entry":3562},{"name":"Hellfire Citadel","entry":3563},{"name":"Emberglade","entry":3564},{"name":"Cenarion Refuge","entry":3565},{"name":"Moonwing Den","entry":3566},{"name":"Pod Cluster","entry":3567},{"name":"Pod Wreckage","entry":3568},{"name":"Tides' Hollow","entry":3569},{"name":"Wrathscale Point","entry":3570},{"name":"Bristlelimb Village","entry":3571},{"name":"Stillpine Hold","entry":3572},{"name":"Odesyus' Landing","entry":3573},{"name":"Valaar's Berth","entry":3574},{"name":"Silting Shore","entry":3575},{"name":"Azure Watch","entry":3576},{"name":"Geezle's Camp","entry":3577},{"name":"Menagerie Wreckage","entry":3578},{"name":"Traitor's Cove","entry":3579},{"name":"Wildwind Peak","entry":3580},{"name":"Wildwind Path","entry":3581},{"name":"Zeth'Gor","entry":3582},{"name":"Beryl Coast","entry":3583},{"name":"Blood Watch","entry":3584},{"name":"Bladewood","entry":3585},{"name":"The Vector Coil","entry":3586},{"name":"The Warp Piston","entry":3587},{"name":"The Cryo-Core","entry":3588},{"name":"The Crimson Reach","entry":3589},{"name":"Wrathscale Lair","entry":3590},{"name":"Ruins of Loreth'Aran","entry":3591},{"name":"Nazzivian","entry":3592},{"name":"Axxarien","entry":3593},{"name":"Blacksilt Shore","entry":3594},{"name":"The Foul Pool","entry":3595},{"name":"The Hidden Reef","entry":3596},{"name":"Amberweb Pass","entry":3597},{"name":"Wyrmscar Island","entry":3598},{"name":"Talon Stand","entry":3599},{"name":"Bristlelimb Enclave","entry":3600},{"name":"Ragefeather Ridge","entry":3601},{"name":"Kessel's Crossing","entry":3602},{"name":"Tel'athion's Camp","entry":3603},{"name":"The Bloodcursed Reef","entry":3604},{"name":"Hyjal Past","entry":3605},{"name":"Hyjal Summit","entry":3606},{"name":"Serpentshrine Cavern","entry":3607},{"name":"Vindicator's Rest","entry":3608},{"name":"Unused3","entry":3609},{"name":"Burning Blade Ruins","entry":3610},{"name":"Clan Watch","entry":3611},{"name":"Bloodcurse Isle","entry":3612},{"name":"Garadar","entry":3613},{"name":"Skysong Lake","entry":3614},{"name":"Throne of the Elements","entry":3615},{"name":"Laughing Skull Ruins","entry":3616},{"name":"Warmaul Hill","entry":3617},{"name":"Gruul's Lair","entry":3618},{"name":"Auren Ridge","entry":3619},{"name":"Auren Falls","entry":3620},{"name":"Lake Sunspring","entry":3621},{"name":"Sunspring Post","entry":3622},{"name":"Aeris Landing","entry":3623},{"name":"Forge Camp: Fear","entry":3624},{"name":"Forge Camp: Hate","entry":3625},{"name":"Telaar","entry":3626},{"name":"Northwind Cleft","entry":3627},{"name":"Halaa","entry":3628},{"name":"Southwind Cleft","entry":3629},{"name":"Oshu'gun","entry":3630},{"name":"Spirit Fields","entry":3631},{"name":"Shamanar","entry":3632},{"name":"Ancestral Grounds","entry":3633},{"name":"Windyreed Village","entry":3634},{"name":"Unused2","entry":3635},{"name":"Elemental Plateau","entry":3636},{"name":"Kil'sorrow Fortress","entry":3637},{"name":"The Ring of Trials","entry":3638},{"name":"Silvermyst Isle","entry":3639},{"name":"Daggerfen Village","entry":3640},{"name":"Umbrafen Village","entry":3641},{"name":"Feralfen Village","entry":3642},{"name":"Bloodscale Enclave","entry":3643},{"name":"Telredor","entry":3644},{"name":"Zabra'jin","entry":3645},{"name":"Quagg Ridge","entry":3646},{"name":"The Spawning Glen","entry":3647},{"name":"The Dead Mire","entry":3648},{"name":"Sporeggar","entry":3649},{"name":"Ango'rosh Grounds","entry":3650},{"name":"Ango'rosh Stronghold","entry":3651},{"name":"Funggor Cavern","entry":3652},{"name":"Serpent Lake","entry":3653},{"name":"The Drain","entry":3654},{"name":"Umbrafen Lake","entry":3655},{"name":"Marshlight Lake","entry":3656},{"name":"Portal Clearing","entry":3657},{"name":"Sporewind Lake","entry":3658},{"name":"The Lagoon","entry":3659},{"name":"Blades' Run","entry":3660},{"name":"Blade Tooth Canyon","entry":3661},{"name":"Commons Hall","entry":3662},{"name":"Derelict Manor","entry":3663},{"name":"Huntress of the Sun","entry":3664},{"name":"Falconwing Square","entry":3665},{"name":"Halaani Basin","entry":3666},{"name":"Hewn Bog","entry":3667},{"name":"Boha'mu Ruins","entry":3668},{"name":"The Stadium","entry":3669},{"name":"The Overlook","entry":3670},{"name":"Broken Hill","entry":3671},{"name":"Mag'hari Procession","entry":3672},{"name":"Nesingwary Safari","entry":3673},{"name":"Cenarion Thicket","entry":3674},{"name":"Tuurem","entry":3675},{"name":"Veil Shienor","entry":3676},{"name":"Veil Skith","entry":3677},{"name":"Veil Shalas","entry":3678},{"name":"Skettis","entry":3679},{"name":"Blackwind Valley","entry":3680},{"name":"Firewing Point","entry":3681},{"name":"Grangol'var Village","entry":3682},{"name":"Stonebreaker Hold","entry":3683},{"name":"Allerian Stronghold","entry":3684},{"name":"Bonechewer Ruins","entry":3685},{"name":"Veil Lithic","entry":3686},{"name":"Olembas","entry":3687},{"name":"Auchindoun","entry":3688},{"name":"Veil Reskk","entry":3689},{"name":"Blackwind Lake","entry":3690},{"name":"Lake Ere'Noru","entry":3691},{"name":"Lake Jorune","entry":3692},{"name":"Skethyl Mountains","entry":3693},{"name":"Misty Ridge","entry":3694},{"name":"The Broken Hills","entry":3695},{"name":"The Barrier Hills","entry":3696},{"name":"The Bone Wastes","entry":3697},{"name":"Nagrand Arena","entry":3698},{"name":"Laughing Skull Courtyard","entry":3699},{"name":"The Ring of Blood","entry":3700},{"name":"Arena Floor","entry":3701},{"name":"Blade's Edge Arena","entry":3702},{"name":"Shattrath City","entry":3703},{"name":"The Shepherd's Gate","entry":3704},{"name":"Telaari Basin","entry":3705},{"name":"The Dark Portal","entry":3706},{"name":"Alliance Base","entry":3707},{"name":"Horde Encampment","entry":3708},{"name":"Night Elf Village","entry":3709},{"name":"Nordrassil","entry":3710},{"name":"Sholazar Basin","entry":3711},{"name":"Area 52","entry":3712},{"name":"The Blood Furnace","entry":3713},{"name":"The Shattered Halls","entry":3714},{"name":"The Steamvault","entry":3715},{"name":"The Underbog","entry":3716},{"name":"The Slave Pens","entry":3717},{"name":"Swamprat Post","entry":3718},{"name":"Bleeding Hollow Ruins","entry":3719},{"name":"Twin Spire Ruins","entry":3720},{"name":"The Crumbling Waste","entry":3721},{"name":"Manaforge Ara","entry":3722},{"name":"Arklon Ruins","entry":3723},{"name":"Cosmowrench","entry":3724},{"name":"Ruins of Enkaat","entry":3725},{"name":"Manaforge B'naar","entry":3726},{"name":"The Scrap Field","entry":3727},{"name":"The Vortex Fields","entry":3728},{"name":"The Heap","entry":3729},{"name":"Manaforge Coruu","entry":3730},{"name":"The Tempest Rift","entry":3731},{"name":"Kirin'Var Village","entry":3732},{"name":"The Violet Tower","entry":3733},{"name":"Manaforge Duro","entry":3734},{"name":"Voidwind Plateau","entry":3735},{"name":"Manaforge Ultris","entry":3736},{"name":"Celestial Ridge","entry":3737},{"name":"The Stormspire","entry":3738},{"name":"Forge Base: Oblivion","entry":3739},{"name":"Forge Base: Gehenna","entry":3740},{"name":"Ruins of Farahlon","entry":3741},{"name":"Socrethar's Seat","entry":3742},{"name":"Legion Hold","entry":3743},{"name":"Shadowmoon Village","entry":3744},{"name":"Wildhammer Stronghold","entry":3745},{"name":"The Hand of Gul'dan","entry":3746},{"name":"The Fel Pits","entry":3747},{"name":"The Deathforge","entry":3748},{"name":"Coilskar Cistern","entry":3749},{"name":"Coilskar Point","entry":3750},{"name":"Sunfire Point","entry":3751},{"name":"Illidari Point","entry":3752},{"name":"Ruins of Baa'ri","entry":3753},{"name":"Altar of Sha'tar","entry":3754},{"name":"The Stair of Doom","entry":3755},{"name":"Ruins of Karabor","entry":3756},{"name":"Ata'mal Terrace","entry":3757},{"name":"Netherwing Fields","entry":3758},{"name":"Netherwing Ledge","entry":3759},{"name":"The Barrier Hills","entry":3760},{"name":"The High Path","entry":3761},{"name":"Windyreed Pass","entry":3762},{"name":"Zangar Ridge","entry":3763},{"name":"The Twilight Ridge","entry":3764},{"name":"Razorthorn Trail","entry":3765},{"name":"Orebor Harborage","entry":3766},{"name":"Blades' Run","entry":3767},{"name":"Jagged Ridge","entry":3768},{"name":"Thunderlord Stronghold","entry":3769},{"name":"Blade Tooth Canyon","entry":3770},{"name":"The Living Grove","entry":3771},{"name":"Sylvanaar","entry":3772},{"name":"Bladespire Hold","entry":3773},{"name":"Gruul's Lair","entry":3774},{"name":"Circle of Blood","entry":3775},{"name":"Bloodmaul Outpost","entry":3776},{"name":"Bloodmaul Camp","entry":3777},{"name":"Draenethyst Mine","entry":3778},{"name":"Trogma's Claim","entry":3779},{"name":"Blackwing Coven","entry":3780},{"name":"Grishnath","entry":3781},{"name":"Veil Lashh","entry":3782},{"name":"Veil Vekh","entry":3783},{"name":"Forge Camp: Terror","entry":3784},{"name":"Forge Camp: Wrath","entry":3785},{"name":"Ogri'la","entry":3786},{"name":"Forge Camp: Anger","entry":3787},{"name":"The Low Path","entry":3788},{"name":"Shadow Labyrinth","entry":3789},{"name":"Auchenai Crypts","entry":3790},{"name":"Sethekk Halls","entry":3791},{"name":"Mana-Tombs","entry":3792},{"name":"Felspark Ravine","entry":3793},{"name":"Valley of Bones","entry":3794},{"name":"Sha'naari Wastes","entry":3795},{"name":"The Warp Fields","entry":3796},{"name":"Fallen Sky Ridge","entry":3797},{"name":"Haal'eshi Gorge","entry":3798},{"name":"Stonewall Canyon","entry":3799},{"name":"Thornfang Hill","entry":3800},{"name":"Mag'har Grounds","entry":3801},{"name":"Void Ridge","entry":3802},{"name":"The Abyssal Shelf","entry":3803},{"name":"The Legion Front","entry":3804},{"name":"Zul'Aman","entry":3805},{"name":"Supply Caravan","entry":3806},{"name":"Reaver's Fall","entry":3807},{"name":"Cenarion Post","entry":3808},{"name":"Southern Rampart","entry":3809},{"name":"Northern Rampart","entry":3810},{"name":"Gor'gaz Outpost","entry":3811},{"name":"Spinebreaker Post","entry":3812},{"name":"The Path of Anguish","entry":3813},{"name":"East Supply Caravan","entry":3814},{"name":"Expedition Point","entry":3815},{"name":"Zeppelin Crash","entry":3816},{"name":"Testing","entry":3817},{"name":"Bloodscale Grounds","entry":3818},{"name":"Darkcrest Enclave","entry":3819},{"name":"Eye of the Storm","entry":3820},{"name":"Warden's Cage","entry":3821},{"name":"Eclipse Point","entry":3822},{"name":"Isle of Tribulations","entry":3823},{"name":"Bloodmaul Ravine","entry":3824},{"name":"Dragons' End","entry":3825},{"name":"Daggermaw Canyon","entry":3826},{"name":"Vekhaar Stand","entry":3827},{"name":"Ruuan Weald","entry":3828},{"name":"Veil Ruuan","entry":3829},{"name":"Raven's Wood","entry":3830},{"name":"Death's Door","entry":3831},{"name":"Vortex Pinnacle","entry":3832},{"name":"Razor Ridge","entry":3833},{"name":"Ridge of Madness","entry":3834},{"name":"Dustquill Ravine","entry":3835},{"name":"Magtheridon's Lair","entry":3836},{"name":"Sunfury Hold","entry":3837},{"name":"Spinebreaker Mountains","entry":3838},{"name":"Abandoned Armory","entry":3839},{"name":"The Black Temple","entry":3840},{"name":"Darkcrest Shore","entry":3841},{"name":"Tempest Keep","entry":3842},{"name":"Mok'Nathal Village","entry":3844},{"name":"Tempest Keep","entry":3845},{"name":"The Arcatraz","entry":3846},{"name":"The Botanica","entry":3847},{"name":"The Arcatraz","entry":3848},{"name":"The Mechanar","entry":3849},{"name":"Netherstone","entry":3850},{"name":"Midrealm Post","entry":3851},{"name":"Tuluman's Landing","entry":3852},{"name":"Protectorate Watch Post","entry":3854},{"name":"Circle of Blood Arena","entry":3855},{"name":"Elrendar Crossing","entry":3856},{"name":"Ammen Ford","entry":3857},{"name":"Razorthorn Shelf","entry":3858},{"name":"Silmyr Lake","entry":3859},{"name":"Raastok Glade","entry":3860},{"name":"Thalassian Pass","entry":3861},{"name":"Churning Gulch","entry":3862},{"name":"Broken Wilds","entry":3863},{"name":"Bash'ir Landing","entry":3864},{"name":"Crystal Spine","entry":3865},{"name":"Skald","entry":3866},{"name":"Bladed Gulch","entry":3867},{"name":"Gyro-Plank Bridge","entry":3868},{"name":"Mage Tower","entry":3869},{"name":"Blood Elf Tower","entry":3870},{"name":"Draenei Ruins","entry":3871},{"name":"Fel Reaver Ruins","entry":3872},{"name":"The Proving Grounds","entry":3873},{"name":"Eco-Dome Farfield","entry":3874},{"name":"Eco-Dome Skyperch","entry":3875},{"name":"Eco-Dome Sutheron","entry":3876},{"name":"Eco-Dome Midrealm","entry":3877},{"name":"Ethereum Staging Grounds","entry":3878},{"name":"Chapel Yard","entry":3879},{"name":"Access Shaft Zeon","entry":3880},{"name":"Trelleum Mine","entry":3881},{"name":"Invasion Point: Destroyer","entry":3882},{"name":"Camp of Boom","entry":3883},{"name":"Spinebreaker Pass","entry":3884},{"name":"Netherweb Ridge","entry":3885},{"name":"Derelict Caravan","entry":3886},{"name":"Refugee Caravan","entry":3887},{"name":"Shadow Tomb","entry":3888},{"name":"Veil Rhaze","entry":3889},{"name":"Tomb of Lights","entry":3890},{"name":"Carrion Hill","entry":3891},{"name":"Writhing Mound","entry":3892},{"name":"Ring of Observance","entry":3893},{"name":"Auchenai Grounds","entry":3894},{"name":"Cenarion Watchpost","entry":3895},{"name":"Aldor Rise","entry":3896},{"name":"Terrace of Light","entry":3897},{"name":"Scryer's Tier","entry":3898},{"name":"Lower City","entry":3899},{"name":"Invasion Point: Overlord","entry":3900},{"name":"Allerian Post","entry":3901},{"name":"Stonebreaker Camp","entry":3902},{"name":"Boulder'mok","entry":3903},{"name":"Cursed Hollow","entry":3904},{"name":"Coilfang Reservoir","entry":3905},{"name":"The Bloodwash","entry":3906},{"name":"Veridian Point","entry":3907},{"name":"Middenvale","entry":3908},{"name":"The Lost Fold","entry":3909},{"name":"Mystwood","entry":3910},{"name":"Tranquil Shore","entry":3911},{"name":"Goldenbough Pass","entry":3912},{"name":"Runestone Falithas","entry":3913},{"name":"Runestone Shan'dor","entry":3914},{"name":"Fairbridge Strand","entry":3915},{"name":"Moongraze Woods","entry":3916},{"name":"Auchindoun","entry":3917},{"name":"Toshley's Station","entry":3918},{"name":"Singing Ridge","entry":3919},{"name":"Shatter Point","entry":3920},{"name":"Arklonis Ridge","entry":3921},{"name":"Bladespire Outpost","entry":3922},{"name":"Gruul's Lair","entry":3923},{"name":"Northmaul Tower","entry":3924},{"name":"Southmaul Tower","entry":3925},{"name":"Shattered Plains","entry":3926},{"name":"Oronok's Farm","entry":3927},{"name":"The Altar of Damnation","entry":3928},{"name":"The Path of Conquest","entry":3929},{"name":"Eclipsion Fields","entry":3930},{"name":"Bladespire Grounds","entry":3931},{"name":"Sketh'lon Base Camp","entry":3932},{"name":"Sketh'lon Wreckage","entry":3933},{"name":"Town Square","entry":3934},{"name":"Wizard Row","entry":3935},{"name":"Deathforge Tower","entry":3936},{"name":"Slag Watch","entry":3937},{"name":"Sanctum of the Stars","entry":3938},{"name":"Dragonmaw Fortress","entry":3939},{"name":"The Fetid Pool","entry":3940},{"name":"Test","entry":3941},{"name":"Razaan's Landing","entry":3942},{"name":"Invasion Point: Cataclysm","entry":3943},{"name":"The Altar of Shadows","entry":3944},{"name":"Netherwing Pass","entry":3945},{"name":"Wayne's Refuge","entry":3946},{"name":"The Scalding Pools","entry":3947},{"name":"Brian and Pat Test","entry":3948},{"name":"Magma Fields","entry":3949},{"name":"Crimson Watch","entry":3950},{"name":"Evergrove","entry":3951},{"name":"Wyrmskull Bridge","entry":3952},{"name":"Scalewing Shelf","entry":3953},{"name":"Wyrmskull Tunnel","entry":3954},{"name":"Hellfire Basin","entry":3955},{"name":"The Shadow Stair","entry":3956},{"name":"Sha'tari Outpost","entry":3957},{"name":"Sha'tari Base Camp","entry":3958},{"name":"Black Temple","entry":3959},{"name":"Soulgrinder's Barrow","entry":3960},{"name":"Sorrow Wing Point","entry":3961},{"name":"Vim'gol's Circle","entry":3962},{"name":"Dragonspine Ridge","entry":3963},{"name":"Skyguard Outpost","entry":3964},{"name":"Netherwing Mines","entry":3965},{"name":"Dragonmaw Base Camp","entry":3966},{"name":"Dragonmaw Skyway","entry":3967},{"name":"Ruins of Lordaeron","entry":3968},{"name":"Rivendark's Perch","entry":3969},{"name":"Obsidia's Perch","entry":3970},{"name":"Insidion's Perch","entry":3971},{"name":"Furywing's Perch","entry":3972},{"name":"Blackwind Landing","entry":3973},{"name":"Veil Harr'ik","entry":3974},{"name":"Terokk's Rest","entry":3975},{"name":"Veil Ala'rak","entry":3976},{"name":"Upper Veil Shil'ak","entry":3977},{"name":"Lower Veil Shil'ak","entry":3978},{"name":"The Frozen Sea","entry":3979},{"name":"Daggercap Bay","entry":3980},{"name":"Valgarde","entry":3981},{"name":"Wyrmskull Village","entry":3982},{"name":"Utgarde Keep","entry":3983},{"name":"Nifflevar","entry":3984},{"name":"Falls of Ymiron","entry":3985},{"name":"Echo Reach","entry":3986},{"name":"The Isle of Spears","entry":3987},{"name":"Kamagua","entry":3988},{"name":"Garvan's Reef","entry":3989},{"name":"Scalawag Point","entry":3990},{"name":"New Agamand","entry":3991},{"name":"The Ancient Lift","entry":3992},{"name":"Westguard Turret","entry":3993},{"name":"Halgrind","entry":3994},{"name":"The Laughing Stand","entry":3995},{"name":"Baelgun's Excavation Site","entry":3996},{"name":"Explorers' League Outpost","entry":3997},{"name":"Westguard Keep","entry":3998},{"name":"Steel Gate","entry":3999},{"name":"Vengeance Landing","entry":4000},{"name":"Baleheim","entry":4001},{"name":"Skorn","entry":4002},{"name":"Fort Wildervar","entry":4003},{"name":"Vileprey Village","entry":4004},{"name":"Ivald's Ruin","entry":4005},{"name":"Gjalerbron","entry":4006},{"name":"Tomb of the Lost Kings","entry":4007},{"name":"Shartuul's Transporter","entry":4008},{"name":"Illidari Training Grounds","entry":4009},{"name":"Mudsprocket","entry":4010},{"name":"Camp Winterhoof","entry":4018},{"name":"Development Land","entry":4019},{"name":"Mightstone Quarry","entry":4020},{"name":"Bloodspore Plains","entry":4021},{"name":"Gammoth","entry":4022},{"name":"Amber Ledge","entry":4023},{"name":"Coldarra","entry":4024},{"name":"The Westrift","entry":4025},{"name":"The Transitus Stair","entry":4026},{"name":"Coast of Echoes","entry":4027},{"name":"Riplash Strand","entry":4028},{"name":"Riplash Ruins","entry":4029},{"name":"Coast of Idols","entry":4030},{"name":"Pal'ea","entry":4031},{"name":"Valiance Keep","entry":4032},{"name":"Winterfin Village","entry":4033},{"name":"The Borean Wall","entry":4034},{"name":"The Geyser Fields","entry":4035},{"name":"Fizzcrank Pumping Station","entry":4036},{"name":"Taunka'le Village","entry":4037},{"name":"Magnamoth Caverns","entry":4038},{"name":"Coldrock Quarry","entry":4039},{"name":"Njord's Breath Bay","entry":4040},{"name":"Kaskala","entry":4041},{"name":"Transborea","entry":4042},{"name":"The Flood Plains","entry":4043},{"name":"Direhorn Post","entry":4046},{"name":"Nat's Landing","entry":4047},{"name":"Ember Clutch","entry":4048},{"name":"Tabetha's Farm","entry":4049},{"name":"Derelict Strand","entry":4050},{"name":"The Frozen Glade","entry":4051},{"name":"The Vibrant Glade","entry":4052},{"name":"The Twisted Glade","entry":4053},{"name":"Rivenwood","entry":4054},{"name":"Caldemere Lake","entry":4055},{"name":"Utgarde Catacombs","entry":4056},{"name":"Shield Hill","entry":4057},{"name":"Lake Cauldros","entry":4058},{"name":"Cauldros Isle","entry":4059},{"name":"Bleeding Vale","entry":4060},{"name":"Giants' Run","entry":4061},{"name":"Apothecary Camp","entry":4062},{"name":"Ember Spear Tower","entry":4063},{"name":"Shattered Straits","entry":4064},{"name":"Gjalerhorn","entry":4065},{"name":"Frostblade Peak","entry":4066},{"name":"Plaguewood Tower","entry":4067},{"name":"West Spear Tower","entry":4068},{"name":"North Spear Tower","entry":4069},{"name":"Chillmere Coast","entry":4070},{"name":"Whisper Gulch","entry":4071},{"name":"Sub zone","entry":4072},{"name":"Winter's Terrace","entry":4073},{"name":"The Waking Halls","entry":4074},{"name":"Sunwell Plateau","entry":4075},{"name":"Reuse Me 7","entry":4076},{"name":"Sorlof's Strand","entry":4077},{"name":"Razorthorn Rise","entry":4078},{"name":"Frostblade Pass","entry":4079},{"name":"Isle of Quel'Danas","entry":4080},{"name":"The Dawnchaser","entry":4081},{"name":"The Sin'loren","entry":4082},{"name":"Silvermoon's Pride","entry":4083},{"name":"The Bloodoath","entry":4084},{"name":"Shattered Sun Staging Area","entry":4085},{"name":"Sun's Reach Sanctum","entry":4086},{"name":"Sun's Reach Harbor","entry":4087},{"name":"Sun's Reach Armory","entry":4088},{"name":"Dawnstar Village","entry":4089},{"name":"The Dawning Square","entry":4090},{"name":"Greengill Coast","entry":4091},{"name":"The Dead Scar","entry":4092},{"name":"The Sun Forge","entry":4093},{"name":"Sunwell Plateau","entry":4094},{"name":"Magisters' Terrace","entry":4095},{"name":"Claytön's WoWEdit Land","entry":4096},{"name":"Winterfin Caverns","entry":4097},{"name":"Glimmer Bay","entry":4098},{"name":"Winterfin Retreat","entry":4099},{"name":"The Culling of Stratholme","entry":4100},{"name":"Sands of Nasam","entry":4101},{"name":"Krom's Landing","entry":4102},{"name":"Nasam's Talon","entry":4103},{"name":"Echo Cove","entry":4104},{"name":"Beryl Point","entry":4105},{"name":"Garrosh's Landing","entry":4106},{"name":"Warsong Jetty","entry":4107},{"name":"Fizzcrank Airstrip","entry":4108},{"name":"Lake Kum'uya","entry":4109},{"name":"Farshire Fields","entry":4110},{"name":"Farshire","entry":4111},{"name":"Farshire Lighthouse","entry":4112},{"name":"Unu'pe","entry":4113},{"name":"Death's Stand","entry":4114},{"name":"The Abandoned Reach","entry":4115},{"name":"Scalding Pools","entry":4116},{"name":"Steam Springs","entry":4117},{"name":"Talramas","entry":4118},{"name":"Festering Pools","entry":4119},{"name":"The Nexus","entry":4120},{"name":"Transitus Shield","entry":4121},{"name":"Bor'gorok Outpost","entry":4122},{"name":"Magmoth","entry":4123},{"name":"The Dens of Dying","entry":4124},{"name":"Temple City of En'kilah","entry":4125},{"name":"The Wailing Ziggurat","entry":4126},{"name":"Steeljaw's Caravan","entry":4127},{"name":"Naxxanar","entry":4128},{"name":"Warsong Hold","entry":4129},{"name":"Plains of Nasam","entry":4130},{"name":"Magisters' Terrace","entry":4131},{"name":"Ruins of Eldra'nath","entry":4132},{"name":"Charred Rise","entry":4133},{"name":"Blistering Pool","entry":4134},{"name":"Spire of Blood","entry":4135},{"name":"Spire of Decay","entry":4136},{"name":"Spire of Pain","entry":4137},{"name":"Frozen Reach","entry":4138},{"name":"Parhelion Plaza","entry":4139},{"name":"The Dead Scar","entry":4140},{"name":"Torp's Farm","entry":4141},{"name":"Warsong Granary","entry":4142},{"name":"Warsong Slaughterhouse","entry":4143},{"name":"Warsong Farms Outpost","entry":4144},{"name":"West Point Station","entry":4145},{"name":"North Point Station","entry":4146},{"name":"Mid Point Station","entry":4147},{"name":"South Point Station","entry":4148},{"name":"D.E.H.T.A. Encampment","entry":4149},{"name":"Kaw's Roost","entry":4150},{"name":"Westwind Refugee Camp","entry":4151},{"name":"Moa'ki Harbor","entry":4152},{"name":"Indu'le Village","entry":4153},{"name":"Snowfall Glade","entry":4154},{"name":"The Half Shell","entry":4155},{"name":"Surge Needle","entry":4156},{"name":"Moonrest Gardens","entry":4157},{"name":"Stars' Rest","entry":4158},{"name":"Westfall Brigade Encampment","entry":4159},{"name":"Lothalor Woodlands","entry":4160},{"name":"Wyrmrest Temple","entry":4161},{"name":"Icemist Falls","entry":4162},{"name":"Icemist Village","entry":4163},{"name":"The Pit of Narjun","entry":4164},{"name":"Agmar's Hammer","entry":4165},{"name":"Lake Indu'le","entry":4166},{"name":"Obsidian Dragonshrine","entry":4167},{"name":"Ruby Dragonshrine","entry":4168},{"name":"Fordragon Hold","entry":4169},{"name":"Kor'kron Vanguard","entry":4170},{"name":"The Court of Skulls","entry":4171},{"name":"Angrathar the Wrathgate","entry":4172},{"name":"Galakrond's Rest","entry":4173},{"name":"The Wicked Coil","entry":4174},{"name":"Bronze Dragonshrine","entry":4175},{"name":"The Mirror of Dawn","entry":4176},{"name":"Wintergarde Keep","entry":4177},{"name":"Wintergarde Mine","entry":4178},{"name":"Emerald Dragonshrine","entry":4179},{"name":"New Hearthglen","entry":4180},{"name":"Crusader's Landing","entry":4181},{"name":"Sinner's Folly","entry":4182},{"name":"Azure Dragonshrine","entry":4183},{"name":"Path of the Titans","entry":4184},{"name":"The Forgotten Shore","entry":4185},{"name":"Venomspite","entry":4186},{"name":"The Crystal Vice","entry":4187},{"name":"The Carrion Fields","entry":4188},{"name":"Onslaught Base Camp","entry":4189},{"name":"Thorson's Post","entry":4190},{"name":"Light's Trust","entry":4191},{"name":"Frostmourne Cavern","entry":4192},{"name":"Scarlet Point","entry":4193},{"name":"Jintha'kalar","entry":4194},{"name":"Ice Heart Cavern","entry":4195},{"name":"Drak'Tharon Keep","entry":4196},{"name":"Wintergrasp","entry":4197},{"name":"Kili'ua's Atoll","entry":4198},{"name":"Silverbrook","entry":4199},{"name":"Vordrassil's Heart","entry":4200},{"name":"Vordrassil's Tears","entry":4201},{"name":"Vordrassil's Tears","entry":4202},{"name":"Vordrassil's Limb","entry":4203},{"name":"Amberpine Lodge","entry":4204},{"name":"Solstice Village","entry":4205},{"name":"Conquest Hold","entry":4206},{"name":"Voldrune","entry":4207},{"name":"Granite Springs","entry":4208},{"name":"Zeb'Halak","entry":4209},{"name":"Drak'Tharon Keep","entry":4210},{"name":"Camp Oneqwah","entry":4211},{"name":"Eastwind Shore","entry":4212},{"name":"The Broken Bluffs","entry":4213},{"name":"Boulder Hills","entry":4214},{"name":"Rage Fang Shrine","entry":4215},{"name":"Drakil'jin Ruins","entry":4216},{"name":"Blackriver Logging Camp","entry":4217},{"name":"Heart's Blood Shrine","entry":4218},{"name":"Hollowstone Mine","entry":4219},{"name":"Dun Argol","entry":4220},{"name":"Thor Modan","entry":4221},{"name":"Blue Sky Logging Grounds","entry":4222},{"name":"Maw of Neltharion","entry":4223},{"name":"The Briny Pinnacle","entry":4224},{"name":"Glittering Strand","entry":4225},{"name":"Iskaal","entry":4226},{"name":"Dragon's Fall","entry":4227},{"name":"The Oculus","entry":4228},{"name":"Prospector's Point","entry":4229},{"name":"Coldwind Heights","entry":4230},{"name":"Redwood Trading Post","entry":4231},{"name":"Vengeance Pass","entry":4232},{"name":"Dawn's Reach","entry":4233},{"name":"Naxxramas","entry":4234},{"name":"Heartwood Trading Post","entry":4235},{"name":"Evergreen Trading Post","entry":4236},{"name":"Spruce Point Post","entry":4237},{"name":"White Pine Trading Post","entry":4238},{"name":"Aspen Grove Post","entry":4239},{"name":"Forest's Edge Post","entry":4240},{"name":"Eldritch Heights","entry":4241},{"name":"Venture Bay","entry":4242},{"name":"Wintergarde Crypt","entry":4243},{"name":"Bloodmoon Isle","entry":4244},{"name":"Shadowfang Tower","entry":4245},{"name":"Wintergarde Mausoleum","entry":4246},{"name":"Duskhowl Den","entry":4247},{"name":"The Conquest Pit","entry":4248},{"name":"The Path of Iron","entry":4249},{"name":"Ruins of Tethys","entry":4250},{"name":"Silverbrook Hills","entry":4251},{"name":"The Broken Bluffs","entry":4252},{"name":"7th Legion Front","entry":4253},{"name":"The Dragon Wastes","entry":4254},{"name":"Ruins of Drak'Zin","entry":4255},{"name":"Drak'Mar Lake","entry":4256},{"name":"Dragonspine Tributary","entry":4257},{"name":"The North Sea","entry":4258},{"name":"Drak'ural","entry":4259},{"name":"Thorvald's Camp","entry":4260},{"name":"Ghostblade Post","entry":4261},{"name":"Ashwood Post","entry":4262},{"name":"Lydell's Ambush","entry":4263},{"name":"Halls of Stone","entry":4264},{"name":"The Nexus","entry":4265},{"name":"Harkor's Camp","entry":4266},{"name":"Vordrassil Pass","entry":4267},{"name":"Ruuna's Camp","entry":4268},{"name":"Shrine of Scales","entry":4269},{"name":"Drak'atal Passage","entry":4270},{"name":"Utgarde Pinnacle","entry":4271},{"name":"Halls of Lightning","entry":4272},{"name":"Ulduar","entry":4273},{"name":"The Argent Stand","entry":4275},{"name":"Altar of Sseratus","entry":4276},{"name":"Azjol-Nerub","entry":4277},{"name":"Drak'Sotra Fields","entry":4278},{"name":"Drak'Sotra","entry":4279},{"name":"Drak'Agal","entry":4280},{"name":"Acherus: The Ebon Hold","entry":4281},{"name":"The Avalanche","entry":4282},{"name":"The Lost Lands","entry":4283},{"name":"Nesingwary Base Camp","entry":4284},{"name":"The Seabreach Flow","entry":4285},{"name":"The Bones of Nozronn","entry":4286},{"name":"Kartak's Hold","entry":4287},{"name":"Sparktouched Haven","entry":4288},{"name":"The Path of the Lifewarden","entry":4289},{"name":"River's Heart","entry":4290},{"name":"Rainspeaker Canopy","entry":4291},{"name":"Frenzyheart Hill","entry":4292},{"name":"Wildgrowth Mangal","entry":4293},{"name":"Heb'Valok","entry":4294},{"name":"The Sundered Shard","entry":4295},{"name":"The Lifeblood Pillar","entry":4296},{"name":"Mosswalker Village","entry":4297},{"name":"Plaguelands: The Scarlet Enclave","entry":4298},{"name":"Kolramas","entry":4299},{"name":"Waygate","entry":4300},{"name":"The Skyreach Pillar","entry":4302},{"name":"Hardknuckle Clearing","entry":4303},{"name":"Sapphire Hive","entry":4304},{"name":"Mistwhisper Refuge","entry":4306},{"name":"The Glimmering Pillar","entry":4307},{"name":"Spearborn Encampment","entry":4308},{"name":"Drak'Tharon Keep","entry":4309},{"name":"Zeramas","entry":4310},{"name":"Reliquary of Agony","entry":4311},{"name":"Ebon Watch","entry":4312},{"name":"Thrym's End","entry":4313},{"name":"Voltarus","entry":4314},{"name":"Reliquary of Pain","entry":4315},{"name":"Rageclaw Den","entry":4316},{"name":"Light's Breach","entry":4317},{"name":"Pools of Zha'Jin","entry":4318},{"name":"Zim'Abwa","entry":4319},{"name":"Amphitheater of Anguish","entry":4320},{"name":"Altar of Rhunok","entry":4321},{"name":"Altar of Har'koa","entry":4322},{"name":"Zim'Torga","entry":4323},{"name":"Pools of Jin'Alai","entry":4324},{"name":"Altar of Quetz'lun","entry":4325},{"name":"Heb'Drakkar","entry":4326},{"name":"Drak'Mabwa","entry":4327},{"name":"Zim'Rhuk","entry":4328},{"name":"Altar of Mam'toth","entry":4329},{"name":"Acherus: The Ebon Hold","entry":4342},{"name":"New Avalon","entry":4343},{"name":"New Avalon Fields","entry":4344},{"name":"New Avalon Orchard","entry":4345},{"name":"New Avalon Town Hall","entry":4346},{"name":"Havenshire","entry":4347},{"name":"Havenshire Farms","entry":4348},{"name":"Havenshire Lumber Mill","entry":4349},{"name":"Havenshire Stables","entry":4350},{"name":"Scarlet Hold","entry":4351},{"name":"Chapel of the Crimson Flame","entry":4352},{"name":"Light's Point Tower","entry":4353},{"name":"Light's Point","entry":4354},{"name":"Crypt of Remembrance","entry":4355},{"name":"Death's Breach","entry":4356},{"name":"The Noxious Glade","entry":4357},{"name":"Tyr's Hand","entry":4358},{"name":"King's Harbor","entry":4359},{"name":"Scarlet Overlook","entry":4360},{"name":"Light's Hope Chapel","entry":4361},{"name":"Sinner's Folly","entry":4362},{"name":"Pestilent Scar","entry":4363},{"name":"Browman Mill","entry":4364},{"name":"Havenshire Mine","entry":4365},{"name":"Ursoc's Den","entry":4366},{"name":"The Blight Line","entry":4367},{"name":"The Bonefields","entry":4368},{"name":"Dorian's Outpost","entry":4369},{"name":"Mam'toth Crater","entry":4371},{"name":"Zol'Maz Stronghold","entry":4372},{"name":"Zol'Heb","entry":4373},{"name":"Rageclaw Lake","entry":4374},{"name":"Gundrak","entry":4375},{"name":"The Savage Thicket","entry":4376},{"name":"New Avalon Forge","entry":4377},{"name":"Dalaran Arena","entry":4378},{"name":"Valgarde","entry":4379},{"name":"Westguard Inn","entry":4380},{"name":"Waygate","entry":4381},{"name":"The Shaper's Terrace","entry":4382},{"name":"Lakeside Landing","entry":4383},{"name":"Strand of the Ancients","entry":4384},{"name":"Bittertide Lake","entry":4385},{"name":"Rainspeaker Rapids","entry":4386},{"name":"Frenzyheart River","entry":4387},{"name":"Wintergrasp River","entry":4388},{"name":"The Suntouched Pillar","entry":4389},{"name":"Frigid Breach","entry":4390},{"name":"Swindlegrin's Dig","entry":4391},{"name":"The Stormwright's Shelf","entry":4392},{"name":"Death's Hand Encampment","entry":4393},{"name":"Scarlet Tavern","entry":4394},{"name":"Dalaran","entry":4395},{"name":"Nozzlerust Post","entry":4396},{"name":"Farshire Mine","entry":4399},{"name":"The Mosslight Pillar","entry":4400},{"name":"Saragosa's Landing","entry":4401},{"name":"Vengeance Lift","entry":4402},{"name":"Balejar Watch","entry":4403},{"name":"New Agamand Inn","entry":4404},{"name":"Passage of Lost Fiends","entry":4405},{"name":"The Ring of Valor","entry":4406},{"name":"Hall of the Frostwolf","entry":4407},{"name":"Hall of the Stormpike","entry":4408},{"name":"Stormwind Harbor","entry":4411},{"name":"The Makers' Overlook","entry":4412},{"name":"The Makers' Perch","entry":4413},{"name":"Scarlet Tower","entry":4414},{"name":"The Violet Hold","entry":4415},{"name":"Gundrak","entry":4416},{"name":"Onslaught Harbor","entry":4417},{"name":"K3","entry":4418},{"name":"Snowblind Hills","entry":4419},{"name":"Snowblind Terrace","entry":4420},{"name":"Garm","entry":4421},{"name":"Brunnhildar Village","entry":4422},{"name":"Sifreldar Village","entry":4423},{"name":"Valkyrion","entry":4424},{"name":"The Forlorn Mine","entry":4425},{"name":"Bor's Breath River","entry":4426},{"name":"Argent Vanguard","entry":4427},{"name":"Frosthold","entry":4428},{"name":"Grom'arsh Crash-Site","entry":4429},{"name":"Temple of Storms","entry":4430},{"name":"Engine of the Makers","entry":4431},{"name":"The Foot Steppes","entry":4432},{"name":"Dragonspine Peaks","entry":4433},{"name":"Nidavelir","entry":4434},{"name":"Narvir's Cradle","entry":4435},{"name":"Snowdrift Plains","entry":4436},{"name":"Valley of Ancient Winters","entry":4437},{"name":"Dun Niffelem","entry":4438},{"name":"Frostfield Lake","entry":4439},{"name":"Thunderfall","entry":4440},{"name":"Camp Tunka'lo","entry":4441},{"name":"Brann's Base-Camp","entry":4442},{"name":"Gate of Echoes","entry":4443},{"name":"Plain of Echoes","entry":4444},{"name":"Ulduar","entry":4445},{"name":"Terrace of the Makers","entry":4446},{"name":"Gate of Lightning","entry":4447},{"name":"Path of the Titans","entry":4448},{"name":"Uldis","entry":4449},{"name":"Loken's Bargain","entry":4450},{"name":"Bor's Fall","entry":4451},{"name":"Bor's Breath","entry":4452},{"name":"Rohemdal Pass","entry":4453},{"name":"The Storm Foundry","entry":4454},{"name":"Hibernal Cavern","entry":4455},{"name":"Voldrune Dwelling","entry":4456},{"name":"Torseg's Rest","entry":4457},{"name":"Sparksocket Minefield","entry":4458},{"name":"Ricket's Folly","entry":4459},{"name":"Garm's Bane","entry":4460},{"name":"Garm's Rise","entry":4461},{"name":"Crystalweb Cavern","entry":4462},{"name":"Temple of Life","entry":4463},{"name":"Temple of Order","entry":4464},{"name":"Temple of Winter","entry":4465},{"name":"Temple of Invention","entry":4466},{"name":"Death's Rise","entry":4467},{"name":"The Dead Fields","entry":4468},{"name":"Dargath's Demise","entry":4469},{"name":"The Hidden Hollow","entry":4470},{"name":"Bernau's Happy Fun Land","entry":4471},{"name":"Frostgrip's Hollow","entry":4472},{"name":"The Frigid Tomb","entry":4473},{"name":"Twin Shores","entry":4474},{"name":"Zim'bo's Hideout","entry":4475},{"name":"Abandoned Camp","entry":4476},{"name":"The Shadow Vault","entry":4477},{"name":"Coldwind Pass","entry":4478},{"name":"Winter's Breath Lake","entry":4479},{"name":"The Forgotten Overlook","entry":4480},{"name":"Jintha'kalar Passage","entry":4481},{"name":"Arriga Footbridge","entry":4482},{"name":"The Lost Passage","entry":4483},{"name":"Bouldercrag's Refuge","entry":4484},{"name":"The Inventor's Library","entry":4485},{"name":"The Frozen Mine","entry":4486},{"name":"Frostfloe Deep","entry":4487},{"name":"The Howling Hollow","entry":4488},{"name":"Crusader Forward Camp","entry":4489},{"name":"Stormcrest","entry":4490},{"name":"Bonesnap's Camp","entry":4491},{"name":"Ufrang's Hall","entry":4492},{"name":"The Obsidian Sanctum","entry":4493},{"name":"Ahn'kahet: The Old Kingdom","entry":4494},{"name":"Fjorn's Anvil","entry":4495},{"name":"Jotunheim","entry":4496},{"name":"Savage Ledge","entry":4497},{"name":"Halls of the Ancestors","entry":4498},{"name":"The Blighted Pool","entry":4499},{"name":"The Eye of Eternity","entry":4500},{"name":"The Argent Vanguard","entry":4501},{"name":"Mimir's Workshop","entry":4502},{"name":"Ironwall Dam","entry":4503},{"name":"Valley of Echoes","entry":4504},{"name":"The Breach","entry":4505},{"name":"Scourgeholme","entry":4506},{"name":"The Broken Front","entry":4507},{"name":"Mord'rethar: The Death Gate","entry":4508},{"name":"The Bombardment","entry":4509},{"name":"Aldur'thar: The Desolation Gate","entry":4510},{"name":"The Skybreaker","entry":4511},{"name":"Orgrim's Hammer","entry":4512},{"name":"Ymirheim","entry":4513},{"name":"Saronite Mines","entry":4514},{"name":"The Conflagration","entry":4515},{"name":"Ironwall Rampart","entry":4516},{"name":"Weeping Quarry","entry":4517},{"name":"Corp'rethar: The Horror Gate","entry":4518},{"name":"The Court of Bones","entry":4519},{"name":"Malykriss: The Vile Hold","entry":4520},{"name":"Cathedral of Darkness","entry":4521},{"name":"Icecrown Citadel","entry":4522},{"name":"Icecrown Glacier","entry":4523},{"name":"Valhalas","entry":4524},{"name":"The Underhalls","entry":4525},{"name":"Njorndar Village","entry":4526},{"name":"Balargarde Fortress","entry":4527},{"name":"Kul'galar Keep","entry":4528},{"name":"The Crimson Cathedral","entry":4529},{"name":"Sanctum of Reanimation","entry":4530},{"name":"The Fleshwerks","entry":4531},{"name":"Vengeance Landing Inn","entry":4532},{"name":"Sindragosa's Fall","entry":4533},{"name":"Wildervar Mine","entry":4534},{"name":"The Pit of the Fang","entry":4535},{"name":"Frosthowl Cavern","entry":4536},{"name":"The Valley of Lost Hope","entry":4537},{"name":"The Sunken Ring","entry":4538},{"name":"The Broken Temple","entry":4539},{"name":"The Valley of Fallen Heroes","entry":4540},{"name":"Vanguard Infirmary","entry":4541},{"name":"Hall of the Shaper","entry":4542},{"name":"Temple of Wisdom","entry":4543},{"name":"Death's Breach","entry":4544},{"name":"Abandoned Mine","entry":4545},{"name":"Ruins of the Scarlet Enclave","entry":4546},{"name":"Halls of Stone","entry":4547},{"name":"Halls of Lightning","entry":4548},{"name":"The Great Tree","entry":4549},{"name":"The Mirror of Twilight","entry":4550},{"name":"The Twilight Rivulet","entry":4551},{"name":"The Decrepit Flow","entry":4552},{"name":"Forlorn Woods","entry":4553},{"name":"Ruins of Shandaral","entry":4554},{"name":"The Azure Front","entry":4555},{"name":"Violet Stand","entry":4556},{"name":"The Unbound Thicket","entry":4557},{"name":"Sunreaver's Command","entry":4558},{"name":"Windrunner's Overlook","entry":4559},{"name":"The Underbelly","entry":4560},{"name":"Krasus' Landing","entry":4564},{"name":"The Violet Hold","entry":4567},{"name":"The Eventide","entry":4568},{"name":"Sewer Exit Pipe","entry":4569},{"name":"Circle of Wills","entry":4570},{"name":"Silverwing Flag Room","entry":4571},{"name":"Warsong Flag Room","entry":4572},{"name":"Wintergrasp Fortress","entry":4575},{"name":"Central Bridge","entry":4576},{"name":"Eastern Bridge","entry":4577},{"name":"Western Bridge","entry":4578},{"name":"Dubra'Jin","entry":4579},{"name":"Crusaders' Pinnacle","entry":4580},{"name":"Flamewatch Tower","entry":4581},{"name":"Winter's Edge Tower","entry":4582},{"name":"Shadowsight Tower","entry":4583},{"name":"The Cauldron of Flames","entry":4584},{"name":"Glacial Falls","entry":4585},{"name":"Windy Bluffs","entry":4586},{"name":"The Forest of Shadows","entry":4587},{"name":"Blackwatch","entry":4588},{"name":"The Chilled Quagmire","entry":4589},{"name":"The Steppe of Life","entry":4590},{"name":"Silent Vigil","entry":4591},{"name":"Gimorak's Den","entry":4592},{"name":"The Pit of Fiends","entry":4593},{"name":"Battlescar Spire","entry":4594},{"name":"Hall of Horrors","entry":4595},{"name":"The Circle of Suffering","entry":4596},{"name":"Rise of Suffering","entry":4597},{"name":"Krasus' Landing","entry":4598},{"name":"Sewer Exit Pipe","entry":4599},{"name":"Dalaran Island","entry":4601},{"name":"Force Interior","entry":4602},{"name":"Vault of Archavon","entry":4603},{"name":"Gate of the Red Sun","entry":4604},{"name":"Gate of the Blue Sapphire","entry":4605},{"name":"Gate of the Green Emerald","entry":4606},{"name":"Gate of the Purple Amethyst","entry":4607},{"name":"Gate of the Yellow Moon","entry":4608},{"name":"Courtyard of the Ancients","entry":4609},{"name":"Landing Beach","entry":4610},{"name":"Westspark Workshop","entry":4611},{"name":"Eastspark Workshop","entry":4612},{"name":"Dalaran City","entry":4613},{"name":"The Violet Citadel Spire","entry":4614},{"name":"Naz'anak: The Forgotten Depths","entry":4615},{"name":"Sunreaver's Sanctuary","entry":4616},{"name":"Elevator","entry":4617},{"name":"Antonidas Memorial","entry":4618},{"name":"The Violet Citadel","entry":4619},{"name":"Magus Commerce Exchange","entry":4620},{"name":"UNUSED","entry":4621},{"name":"First Legion Forward Camp","entry":4622},{"name":"Hall of the Conquered Kings","entry":4623},{"name":"Befouled Terrace","entry":4624},{"name":"The Desecrated Altar","entry":4625},{"name":"Shimmering Bog","entry":4626},{"name":"Fallen Temple of Ahn'kahet","entry":4627},{"name":"Halls of Binding","entry":4628},{"name":"Winter's Heart","entry":4629},{"name":"The North Sea","entry":4630},{"name":"The Broodmother's Nest","entry":4631},{"name":"Dalaran Floating Rocks","entry":4632},{"name":"Raptor Pens","entry":4633},{"name":"Drak'Tharon Keep","entry":4635},{"name":"The Noxious Pass","entry":4636},{"name":"Vargoth's Retreat","entry":4637},{"name":"Violet Citadel Balcony","entry":4638},{"name":"Band of Variance","entry":4639},{"name":"Band of Acceleration","entry":4640},{"name":"Band of Transmutation","entry":4641},{"name":"Band of Alignment","entry":4642},{"name":"Ashwood Lake","entry":4646},{"name":"Iron Concourse","entry":4650},{"name":"Formation Grounds","entry":4652},{"name":"Razorscale's Aerie","entry":4653},{"name":"The Colossal Forge","entry":4654},{"name":"The Scrapyard","entry":4655},{"name":"The Conservatory of Life","entry":4656},{"name":"The Archivum","entry":4657},{"name":"Argent Tournament Grounds","entry":4658},{"name":"Expedition Base Camp","entry":4665},{"name":"Sunreaver Pavilion","entry":4666},{"name":"Silver Covenant Pavilion","entry":4667},{"name":"The Cooper Residence","entry":4668},{"name":"The Ring of Champions","entry":4669},{"name":"The Aspirants' Ring","entry":4670},{"name":"The Argent Valiants' Ring","entry":4671},{"name":"The Alliance Valiants' Ring","entry":4672},{"name":"The Horde Valiants' Ring","entry":4673},{"name":"Argent Pavilion","entry":4674},{"name":"Sunreaver Pavilion","entry":4676},{"name":"Silver Covenant Pavilion","entry":4677},{"name":"The Forlorn Cavern","entry":4679},{"name":"claytonio test area","entry":4688},{"name":"Quel'Delar's Rest","entry":4692},{"name":"Isle of Conquest","entry":4710},{"name":"Trial of the Crusader","entry":4722},{"name":"Trial of the Champion","entry":4723},{"name":"Runeweaver Square","entry":4739},{"name":"The Silver Enclave","entry":4740},{"name":"Isle of Conquest No Man's Land","entry":4741},{"name":"Hrothgar's Landing","entry":4742},{"name":"Deathspeaker's Watch","entry":4743},{"name":"Workshop","entry":4747},{"name":"Quarry","entry":4748},{"name":"Docks","entry":4749},{"name":"Hangar","entry":4750},{"name":"Refinery","entry":4751},{"name":"Horde Keep","entry":4752},{"name":"Alliance Keep","entry":4753},{"name":"The Sea Reaver's Run","entry":4760},{"name":"Transport: Alliance Gunship","entry":4763},{"name":"Transport: Horde Gunship","entry":4764},{"name":"Hrothgar's Landing","entry":4769},{"name":"The Forge of Souls","entry":4809},{"name":"Icecrown Citadel","entry":4812},{"name":"Pit of Saron","entry":4813},{"name":"Halls of Reflection","entry":4820},{"name":"Transport: Alliance Gunship (IGB)","entry":4832},{"name":"Transport: Horde Gunship (IGB)","entry":4833},{"name":"The Frozen Throne","entry":4859},{"name":"The Frozen Halls","entry":4862},{"name":"The Frost Queen's Lair","entry":4889},{"name":"Putricide's Laboratory of Alchemical Horrors and Fun","entry":4890},{"name":"The Sanctum of Blood","entry":4891},{"name":"The Crimson Hall","entry":4892},{"name":"The Frost Queen's Lair","entry":4893},{"name":"Putricide's Laboratory of Alchemical Horrors and Fun","entry":4894},{"name":"The Crimson Hall","entry":4895},{"name":"The Frozen Throne","entry":4896},{"name":"The Sanctum of Blood","entry":4897},{"name":"Frostmourne","entry":4898},{"name":"The Dark Approach","entry":4904},{"name":"Scourgelord's Command","entry":4905},{"name":"The Shadow Throne","entry":4906},{"name":"The Hidden Passage","entry":4908},{"name":"Frostmourne","entry":4910},{"name":"The Ruby Sanctum","entry":4987}]`),Oe={},ke={};for(let e of Ee)Oe[e.id]=e.name,ke[e.id]=e.filename;var Ae={};for(let e of De)Ae[e.entry]=e.name;var je=e=>Oe[e]??Ae[e]??`Zone ${e}`,Me=e=>Ae[e]??Oe[e]??`Area ${e}`,Ne=e=>{let t=ke[e];return t?d(`/maps/enGB/${encodeURIComponent(t)}.png`):null},Pe=({text:e})=>(0,p.jsx)(p.Fragment,{children:Te(e).map((e,t)=>e.kind===`text`?(0,p.jsx)(`span`,{children:e.text},t):e.type===`zone`?(0,p.jsx)(`a`,{href:Ce(`zone`,e.id),target:`_blank`,rel:`noopener noreferrer`,className:`font-semibold text-amber-400 hover:underline`,children:je(e.id)},t):(0,p.jsx)(`a`,{href:Ce(e.type,e.id),"data-db":`${e.type}=${e.id}`,target:`_blank`,rel:`noopener noreferrer`,className:`font-semibold text-amber-400 hover:underline`},t))}),Fe=({step:e})=>{let t=ce[e.type],n;return n=e.type===`Level Up`?(0,p.jsxs)(`span`,{children:[`Level `,e.description]}):t.needsQuest&&e.questID!=null?(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`a`,{href:Ce(`quest`,e.questID),"data-db":`quest=${e.questID}`,target:`_blank`,rel:`noopener noreferrer`,className:`font-semibold text-amber-400 hover:underline`}),e.description&&(0,p.jsxs)(`span`,{className:`text-slate-300`,children:[` — `,(0,p.jsx)(Pe,{text:e.description})]})]}):e.description?(0,p.jsx)(Pe,{text:e.description}):(0,p.jsx)(`span`,{className:`text-slate-500`,children:t.label}),(0,p.jsxs)(`li`,{className:`flex items-start gap-2 rounded-md border border-slate-700 bg-slate-800/40 px-3 py-2 text-sm leading-5 text-slate-200`,children:[(0,p.jsx)(`img`,{src:d(`/icons/steps/${t.icon}`),alt:``,className:`h-5 w-5 shrink-0 object-contain`}),(0,p.jsx)(`span`,{className:g(`inline-flex h-5 shrink-0 items-center rounded px-1.5 text-[0.65rem] font-bold tracking-wide uppercase`,t.badge),children:t.label}),(0,p.jsx)(`span`,{className:`min-w-0 flex-1`,children:n})]})},Ie=`wotlkdb.com`,Le=!1,Re=()=>{document.querySelectorAll(`a[data-db]`).forEach(e=>{e.textContent?.trim()||(e.textContent=e.getAttribute(`data-db`)||``)})},ze=()=>{if(Le)return;Le=!0,window.aowow_tooltips={colorlinks:!0,iconizelinks:!0,renamelinks:!0};let e=document.createElement(`script`);e.src=`https://${Ie}/static/widgets/power.js`,e.onerror=Re,document.body.appendChild(e)},Be=e=>{document.documentElement.classList.toggle(`tt-hide`,e)},Ve=()=>{Be(!0)},He=(e=0)=>{ze();let t=window.$WowheadPower;if(t?.refreshLinks)try{t.refreshLinks()}catch{}else e<50&&setTimeout(()=>He(e+1),200);setTimeout(Re,1e4)},Ue=e=>{(0,l.useEffect)(()=>{Ve(),He()},[e]),(0,l.useEffect)(()=>{let e=e=>{let t=e.target;Be(!(t&&typeof t.closest==`function`&&(t.closest(`a[data-db]`)||t.closest(`.wowhead-tooltip`))))},t=()=>Ve(),n=()=>Ve();return Be(!0),document.addEventListener(`mouseover`,e),document.addEventListener(`mousemove`,e),document.addEventListener(`mousedown`,t),window.addEventListener(`scroll`,n,!0),()=>{document.removeEventListener(`mouseover`,e),document.removeEventListener(`mousemove`,e),document.removeEventListener(`mousedown`,t),window.removeEventListener(`scroll`,n,!0)}},[])},We=({questLog:e})=>{let[t,n]=(0,l.useState)(!1),r=(0,l.useRef)(null);return(0,l.useEffect)(()=>{if(!t)return;let e=e=>{r.current&&!r.current.contains(e.target)&&n(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[t]),(0,l.useEffect)(()=>{t?He():Ve()},[t,e]),(0,p.jsxs)(`div`,{ref:r,className:`relative`,children:[(0,p.jsxs)(`button`,{type:`button`,onClick:()=>n(e=>!e),title:`Quests in your log`,className:g(`flex cursor-pointer items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-semibold`,t?`border-amber-400 text-amber-400`:`border-slate-600 text-slate-300 hover:border-slate-500`),children:[(0,p.jsx)(`span`,{children:`Quest Log`}),(0,p.jsx)(`span`,{className:`rounded bg-amber-400/20 px-1.5 text-amber-300`,children:e.length})]}),t&&(0,p.jsx)(`div`,{className:`absolute top-full right-0 z-40 mt-1.5 max-h-80 w-64 overflow-auto rounded-lg border border-slate-700 bg-slate-800 p-2 shadow-xl`,children:e.length===0?(0,p.jsx)(`p`,{className:`px-1 py-2 text-xs text-slate-500`,children:`No quests in your log.`}):(0,p.jsx)(`ul`,{className:`flex flex-col`,children:e.map(e=>(0,p.jsx)(`li`,{children:(0,p.jsx)(`a`,{href:Ce(`quest`,e),"data-db":`quest=${e}`,target:`_blank`,rel:`noopener noreferrer`,className:`block truncate rounded px-2 py-1 text-sm text-amber-300 hover:bg-slate-700 hover:underline`})},e))})})]})},Ge=1,Ke=80,qe=e=>Math.min(100,Math.max(0,(e-Ge)/(Ke-Ge)*100)),Je=({level:e,maxLevel:t,onSeek:n,className:r})=>{let i=qe(t),a=Math.min(qe(e),i);return(0,p.jsxs)(`div`,{className:g(`flex items-center gap-2`,r),children:[(0,p.jsx)(`span`,{className:`text-[0.6rem] font-semibold text-slate-500`,children:Ge}),(0,p.jsxs)(`div`,{onClick:e=>{let r=e.currentTarget.getBoundingClientRect(),i=Math.min(1,Math.max(0,(e.clientX-r.left)/r.width)),a=Math.round(Ge+i*(Ke-Ge));a<=t&&n(a)},title:`Click a level to jump there`,className:`relative h-2.5 flex-1 cursor-pointer overflow-hidden rounded-full bg-slate-700`,children:[(0,p.jsx)(`div`,{className:`absolute inset-y-0 left-0 rounded-full bg-amber-400`,style:{width:`${a}%`}}),i<100&&(0,p.jsx)(`div`,{className:`hatch-locked absolute inset-y-0 right-0 cursor-default`,style:{left:`${i}%`},title:`Coming soon`,onClick:e=>e.stopPropagation()})]}),(0,p.jsx)(`span`,{className:`text-[0.6rem] font-semibold text-slate-500`,children:Ke})]})},Ye=Object.assign({"/guide/enGB/alliance/13-20.guide":`{
  "name": "WotLK Guide - Alliance - (13 - 20)",
  "locale": "enGB",
  "faction": "Alliance",
  "next": "WotLK Guide - Alliance - (20 - 25)",
  "stepList": [
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 916,
        "x": 58,
        "y": 18
      },
      "questID": 64
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 916,
        "x": 58,
        "y": 18
      },
      "questID": 36
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 916,
        "x": 58,
        "y": 18
      },
      "questID": 151
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 107,
        "x": 54,
        "y": 31.5
      },
      "questID": 9
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 107,
        "x": 54,
        "y": 31.5
      },
      "questID": 36
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 107,
        "x": 54,
        "y": 31.5
      },
      "questID": 38
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 107,
        "x": 54,
        "y": 31.5
      },
      "questID": 22
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "description": "Open [zone:108] flight path"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "questID": 153
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "description": "Set Hearthstone to [zone:108]",
      "setHearthstone": 108
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "questID": 109
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "questID": 12
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "questID": 102
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 40,
        "x": 48.5,
        "y": 47
      },
      "questID": 12,
      "description": "Kill 15 [npc:504] and 15 [npc:95]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 40,
        "x": 48.5,
        "y": 47
      },
      "questID": 153,
      "description": "Loot 15 [item:829] from [npc:504] and [npc:95]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "questID": 12
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "questID": 13
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "questID": 153
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "description": "14"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "description": "Fly to [zone:1519]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 1519,
        "x": 62.5,
        "y": 78
      },
      "description": "Buy 5 [item:2449] from the Auction House",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 4411,
        "x": 22.5,
        "y": 56
      },
      "description": "Ride boat to [zone:442]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Fly to [zone:702]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.6,
        "y": 91.6
      },
      "description": "Go to [zone:1657]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1658,
        "x": 35,
        "y": 8
      },
      "questID": 6121,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1658,
        "x": 35,
        "y": 8
      },
      "description": "Go to [zone:493] (use [spell:18960])",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2361,
        "x": 56,
        "y": 30.5
      },
      "questID": 6121,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2361,
        "x": 56,
        "y": 30.5
      },
      "questID": 6122,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2361,
        "x": 44,
        "y": 45
      },
      "description": "Fly to [zone:702]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.6,
        "y": 91.6
      },
      "description": "Fly to [zone:442]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 445,
        "x": 54.5,
        "y": 32
      },
      "questID": 6122,
      "description": "Use [item:15844]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 6122,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 6123,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 43,
        "y": 50.5
      },
      "questID": 6123,
      "description": "Collect 12 [item:15851] from [object:177750]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 6123,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 6124,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 44.5,
        "y": 43.5
      },
      "questID": 6124,
      "description": "Use [item:15826] on 10 [npc:12298]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "x": 44.5,
        "y": 43.5
      },
      "description": "Go to [zone:493] (use [spell:18960])",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2361,
        "x": 56,
        "y": 30.5
      },
      "questID": 6124,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2361,
        "x": 56,
        "y": 30.5
      },
      "questID": 6125,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2361,
        "x": 44,
        "y": 45
      },
      "description": "Fly to [zone:702]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.6,
        "y": 91.6
      },
      "description": "Go to [zone:1657]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1658,
        "x": 35,
        "y": 8
      },
      "questID": 6125,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1658,
        "x": 35,
        "y": 8
      },
      "description": "Hearth to [zone:108]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 40,
        "x": 54,
        "y": 42.5
      },
      "questID": 22,
      "description": "Loot 8 [item:723] from [npc:157] and [npc:454]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 40,
        "x": 54,
        "y": 42.5
      },
      "questID": 38,
      "description": "Loot 3 [item:731] from [npc:157] and [npc:454]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 40,
        "x": 59,
        "y": 43.5
      },
      "questID": 38,
      "description": "Loot 3 [item:729] from [npc:1109]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 916,
        "x": 58,
        "y": 18
      },
      "questID": 151,
      "description": "Collect 8 [item:1528] from [object:2724]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 109,
        "x": 52,
        "y": 14.5
      },
      "questID": 102,
      "description": "Loot 8 [item:725] from [npc:117] and [npc:500]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 2,
        "x": 53,
        "y": 9
      },
      "questID": 38,
      "description": "Loot 3 [item:730] from [npc:515] and [npc:126]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 109,
        "x": 51,
        "y": 22
      },
      "questID": 64,
      "description": "Collect [item:841] from [object:290]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 109,
        "x": 51,
        "y": 22
      },
      "questID": 9,
      "description": "Kill 20 [npc:114]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 109,
        "x": 51,
        "y": 22
      },
      "questID": 38,
      "description": "Loot 3 [item:732] from [npc:114]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 40,
        "areaID": 109,
        "x": 51,
        "y": 22
      },
      "description": "Loot 5 [item:814] from [npc:114] for future ([quest:103])"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 107,
        "x": 54,
        "y": 31.5
      },
      "questID": 9
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 40,
        "areaID": 107,
        "x": 54,
        "y": 31.5
      },
      "description": "15"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 107,
        "x": 54,
        "y": 31.5
      },
      "questID": 38
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 107,
        "x": 54,
        "y": 31.5
      },
      "questID": 22
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 916,
        "x": 58,
        "y": 18
      },
      "questID": 64
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 916,
        "x": 58,
        "y": 18
      },
      "questID": 151
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "questID": 102
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "description": "Fly to [zone:1519]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 4411,
        "x": 22.5,
        "y": 56
      },
      "description": "Ride boat to [zone:442]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4811
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 2118
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 985
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 982
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4762
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 40.5,
        "y": 53
      },
      "questID": 985,
      "description": "Kill 8 [npc:2167] and 5 [npc:2324]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 40.5,
        "y": 53
      },
      "questID": 2118,
      "description": "Use [item:7586] on [npc:2164]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 2118
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 2138
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 985
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 47.5,
        "y": 48.5
      },
      "questID": 4811,
      "description": "Explore (47.4, 48.7)"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4811
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4812
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4812,
      "description": "Use [item:14338]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 47.5,
        "y": 48.5
      },
      "questID": 4812,
      "description": "Click the [object:175524]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 47.5,
        "y": 48.5
      },
      "questID": 4813
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 44,
        "y": 36.5
      },
      "questID": 956
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 44,
        "y": 36.5
      },
      "questID": 956,
      "description": "Loot [item:5338] from [npc:2212]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 44,
        "y": 36.5
      },
      "questID": 956
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 44,
        "y": 36.5
      },
      "questID": 957
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 452,
        "x": 42,
        "y": 28.5
      },
      "questID": 1002
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 48.5,
        "y": 30.5
      },
      "questID": 2138,
      "description": "Kill 20 [npc:2164]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 48.5,
        "y": 30.5
      },
      "questID": 1002,
      "description": "Loot 6 [item:5413] from [npc:2069]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 148,
        "x": 48.5,
        "y": 30.5
      },
      "description": "16"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 456,
        "x": 51.5,
        "y": 24.5
      },
      "questID": 1002
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 456,
        "x": 51.5,
        "y": 24.5
      },
      "questID": 1003
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 456,
        "x": 51.5,
        "y": 24.5
      },
      "questID": 4762,
      "description": "Use [item:12350]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 452,
        "x": 44,
        "y": 20.5
      },
      "questID": 4725,
      "description": "Collect [item:12292] from [object:176197]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 452,
        "x": 39,
        "y": 26
      },
      "questID": 982,
      "description": "Collect [item:12192] from [object:175166] and [item:12191] from [object:175165]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 982
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4762
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 958
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4813
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 947
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 963
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4725
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 2138
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 2139
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 447,
        "x": 43,
        "y": 58
      },
      "questID": 953
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 447,
        "x": 43,
        "y": 58
      },
      "questID": 958,
      "description": "Loot 7 [item:5360] from [npc:2176], [npc:2177] and [npc:2178]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 447,
        "x": 43,
        "y": 58
      },
      "questID": 953,
      "description": "Click the [object:17188]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 447,
        "x": 43,
        "y": 58
      },
      "questID": 963,
      "description": "Loot [item:5382] from [npc:3667]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 447,
        "x": 43,
        "y": 58
      },
      "questID": 957,
      "description": "Click the [object:16393]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 447,
        "x": 43,
        "y": 58
      },
      "questID": 953,
      "description": "Click the [object:17189]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 447,
        "x": 43,
        "y": 58
      },
      "questID": 953
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 963
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 958
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 44,
        "y": 36.5
      },
      "questID": 957
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 52.5,
        "y": 36
      },
      "questID": 2139,
      "description": "Kill [npc:6788]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 445,
        "x": 54.5,
        "y": 32
      },
      "questID": 947,
      "description": "Collect 5 [item:5271] from [object:11714] and [item:5270] from [object:11713]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 2139
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 947
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "17"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Fly to [zone:702]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.6,
        "y": 91.6
      },
      "description": "Go to [zone:1657]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1658,
        "x": 35,
        "y": 8
      },
      "questID": 27,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1658,
        "x": 35,
        "y": 8
      },
      "description": "Go to [zone:493] (use [spell:18960])",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2361,
        "x": 56,
        "y": 30.5
      },
      "questID": 27,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2361,
        "x": 56,
        "y": 30.5
      },
      "questID": 29,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 493,
        "areaID": 656,
        "x": 57.5,
        "y": 58
      },
      "questID": 29,
      "description": "Collect [item:15877] from [object:177785]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2362,
        "x": 36,
        "y": 41.5
      },
      "questID": 29,
      "description": "Use [item:15877]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2362,
        "x": 36,
        "y": 41.5
      },
      "questID": 29,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2362,
        "x": 36,
        "y": 41.5
      },
      "questID": 272,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2361,
        "x": 44,
        "y": 45
      },
      "description": "Fly to [zone:702]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.6,
        "y": 91.6
      },
      "description": "Fly to [zone:442]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 452,
        "x": 49,
        "y": 11.5
      },
      "questID": 272,
      "description": "Collect [item:15883] from [object:177792]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Go to [zone:1519]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "x": 70.5,
        "y": 73.5
      },
      "description": "Fly to [zone:108]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 2,
        "x": 18,
        "y": 33
      },
      "questID": 272,
      "description": "Collect [item:15882] from [object:177844]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 40,
        "areaID": 2,
        "x": 18,
        "y": 33
      },
      "description": "Go to [zone:493] (use [spell:18960])",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2362,
        "x": 36,
        "y": 41.5
      },
      "questID": 272,
      "description": "Use [item:15883]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2361,
        "x": 56,
        "y": 30.5
      },
      "questID": 272,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2361,
        "x": 56,
        "y": 30.5
      },
      "questID": 5061,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2361,
        "x": 44,
        "y": 45
      },
      "description": "Fly to [zone:702]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.6,
        "y": 91.6
      },
      "description": "Go to [zone:1657]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1658,
        "x": 35,
        "y": 8
      },
      "questID": 5061,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.6,
        "y": 91.6
      },
      "description": "Hearth to [zone:108]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 113,
        "x": 31.5,
        "y": 44.5
      },
      "questID": 13,
      "description": "Kill 15 [npc:590] and 15 [npc:589]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "questID": 13
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "questID": 14
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "questID": 65
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 920,
        "x": 52.5,
        "y": 72.5
      },
      "questID": 14,
      "description": "Kill 15 [npc:122], 5 [npc:121] and 5 [npc:449]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "questID": 14
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "description": "Fly to [zone:144]"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 35.5,
        "y": 46
      },
      "description": "Set Hearthstone to [zone:144]",
      "setHearthstone": 144
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 35.5,
        "y": 46
      },
      "questID": 255
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 35.5,
        "y": 46
      },
      "questID": 307
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 149,
        "x": 35.5,
        "y": 18.5
      },
      "questID": 307,
      "description": "Collect 4 [item:2640] from [object:271]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 925,
        "x": 24,
        "y": 18
      },
      "questID": 307
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 35.5,
        "y": 46
      },
      "questID": 436
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 142,
        "x": 66.5,
        "y": 66.5
      },
      "questID": 436
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 142,
        "x": 66.5,
        "y": 66.5
      },
      "questID": 297
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 142,
        "x": 66.5,
        "y": 66.5
      },
      "questID": 298
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 142,
        "x": 66.5,
        "y": 66.5
      },
      "questID": 297,
      "description": "Loot 8 [item:2636] from [npc:1167] and [npc:1165]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 142,
        "x": 66.5,
        "y": 66.5
      },
      "questID": 297
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 38,
        "areaID": 142,
        "x": 66.5,
        "y": 66.5
      },
      "description": "18"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 147,
        "x": 83.5,
        "y": 65.5
      },
      "questID": 257
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 147,
        "x": 83.5,
        "y": 65.5
      },
      "questID": 385
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 147,
        "x": 77.5,
        "y": 58.5
      },
      "questID": 257,
      "description": "Kill 6 [npc:1194]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 147,
        "x": 83.5,
        "y": 65.5
      },
      "questID": 257
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 147,
        "x": 83.5,
        "y": 65.5
      },
      "questID": 258
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "x": 65.5,
        "y": 39
      },
      "questID": 258,
      "description": "Kill 5 [npc:1192]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 147,
        "x": 83.5,
        "y": 65.5
      },
      "questID": 258
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 556,
        "x": 63.5,
        "y": 48
      },
      "questID": 2038
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "x": 55,
        "y": 54
      },
      "questID": 385,
      "description": "Loot 5 [item:2924] and 6 [item:2925] from [npc:1693]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "x": 49.5,
        "y": 24.5
      },
      "questID": 2038,
      "description": "Collect [item:7343] from [object:104564], [item:7376] from [object:104575], [item:7346] from [object:104574] and [item:7345] from [object:104569]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 146,
        "x": 46,
        "y": 13.5
      },
      "questID": 250
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 146,
        "x": 56,
        "y": 13.5
      },
      "questID": 250,
      "description": "Click the [object:257]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 146,
        "x": 56,
        "y": 13.5
      },
      "questID": 199
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 146,
        "x": 46,
        "y": 13.5
      },
      "questID": 199
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 143,
        "x": 70.5,
        "y": 23
      },
      "questID": 255,
      "description": "Kill 4 [npc:1178], 4 [npc:1179] and 4 [npc:1180]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 556,
        "x": 63.5,
        "y": 48
      },
      "questID": 2038
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 147,
        "x": 83.5,
        "y": 65.5
      },
      "questID": 385
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 147,
        "x": 83.5,
        "y": 65.5
      },
      "questID": 271
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 936,
        "x": 43,
        "y": 64
      },
      "questID": 271,
      "description": "Loot [item:2713] from [npc:1225]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 147,
        "x": 83.5,
        "y": 65.5
      },
      "questID": 271
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 147,
        "x": 83.5,
        "y": 65.5
      },
      "questID": 531
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 147,
        "x": 83.5,
        "y": 65.5
      },
      "questID": 531
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 38,
        "areaID": 147,
        "x": 83.5,
        "y": 65.5
      },
      "description": "Hearth to [zone:144]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 35.5,
        "y": 46
      },
      "questID": 255
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 35.5,
        "y": 46
      },
      "questID": 298
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 35.5,
        "y": 46
      },
      "questID": 301
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 35.5,
        "y": 46
      },
      "description": "19"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 35.5,
        "y": 46
      },
      "description": "Fly to [zone:1537]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 1,
        "x": 74.5,
        "y": 11.5
      },
      "questID": 301
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 1,
        "x": 55.5,
        "y": 47.5
      },
      "description": "Fly to [zone:1519]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 12,
        "x": 75,
        "y": 94
      },
      "description": "Go to [zone:12]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 12,
        "x": 94,
        "y": 72.5
      },
      "description": "Go to [zone:44]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 1002,
        "x": 15.5,
        "y": 71.5
      },
      "questID": 244
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "x": 30.5,
        "y": 60
      },
      "questID": 244
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "x": 30.5,
        "y": 60
      },
      "questID": 246
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 44,
        "x": 30.5,
        "y": 60
      },
      "description": "Open [zone:69] flight path"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "questID": 20
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "questID": 125
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "questID": 118
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "questID": 3741
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 68,
        "x": 29,
        "y": 55
      },
      "questID": 3741,
      "description": "Collect [item:10958] from [object:154357]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 68,
        "x": 41.5,
        "y": 54.5
      },
      "questID": 125,
      "description": "Collect [item:1309] from [object:32]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "questID": 125
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "questID": 89
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "questID": 3741
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "questID": 91
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "questID": 127
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "questID": 129
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "description": "Set Hearthstone to [zone:69]",
      "setHearthstone": 69
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "questID": 65
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "questID": 132
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 22.5,
        "y": 44
      },
      "questID": 92
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 22.5,
        "y": 44
      },
      "questID": 34
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 1002,
        "x": 15.5,
        "y": 71.5
      },
      "questID": 129
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 1002,
        "x": 15.5,
        "y": 71.5
      },
      "questID": 130
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 44,
        "x": 30.5,
        "y": 60
      },
      "description": "Fly to [zone:108]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "questID": 132
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "questID": 135
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "description": "Fly to [zone:1519]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 78.5,
        "y": 70.5
      },
      "questID": 135
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 78.5,
        "y": 70.5
      },
      "questID": 141
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "x": 70.5,
        "y": 73.5
      },
      "description": "Fly to [zone:108]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "questID": 141
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "questID": 142
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56.5,
        "y": 51
      },
      "description": "Fly to [zone:1519]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 12,
        "x": 75,
        "y": 94
      },
      "description": "Go to [zone:12]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 65.5
      },
      "questID": 118
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 65.5
      },
      "questID": 119
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 65.5
      },
      "description": "Hearth to [zone:69]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 22.5,
        "y": 44
      },
      "questID": 130
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 22.5,
        "y": 44
      },
      "questID": 131
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "questID": 131
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "questID": 119
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "questID": 122
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "questID": 124
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 44,
        "x": 34,
        "y": 67.5
      },
      "questID": 122,
      "description": "Loot 6 [item:1221] from [npc:1221]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 44,
        "x": 34,
        "y": 67.5
      },
      "questID": 92,
      "description": "Loot 5 [item:2296] from [npc:547]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 1002,
        "x": 19.5,
        "y": 73
      },
      "questID": 92,
      "description": "Loot 5 [item:1081] from [npc:442]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 1001,
        "x": 27,
        "y": 80
      },
      "questID": 246,
      "description": "Kill 10 [npc:423] and 6 [npc:424]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "x": 30.5,
        "y": 60
      },
      "questID": 246
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "questID": 122
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28.5,
        "y": 47
      },
      "description": "20"
    }
  ]
}`,"/guide/enGB/alliance/20-25.guide":`{
  "name": "WotLK Guide - Alliance - (20 - 25)",
  "locale": "enGB",
  "faction": "Alliance",
  "next": "WotLK Guide - Alliance - (25 - 30)",
  "stepList": [
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 1001,
        "x": 48,
        "y": 73.5
      },
      "questID": 127,
      "description": "Loot 10 [item:1467] from [npc:422], [npc:1083] and [npc:548]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 44,
        "areaID": 1001,
        "x": 48,
        "y": 73.5
      },
      "description": "Loot 8 [item:1468] from [npc:422], [npc:1083] and [npc:548] for future ([quest:150])"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 1001,
        "x": 55.5,
        "y": 74.5
      },
      "questID": 92,
      "description": "Loot 5 [item:1080] from [npc:428]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 997,
        "x": 70.5,
        "y": 79
      },
      "questID": 20,
      "description": "Loot 10 [item:3014] from [npc:440] and [npc:485]"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 44,
        "areaID": 997,
        "x": 70.5,
        "y": 79
      },
      "description": "Hearth to [zone:69]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 44,
        "x": 30.5,
        "y": 60
      },
      "description": "Fly to [zone:1519]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "x": 66.5,
        "y": 33
      },
      "description": "Ride tram to [zone:1537]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 1,
        "x": 47.5,
        "y": 9.5
      },
      "questID": 1717,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 1,
        "x": 81,
        "y": 52.5
      },
      "description": "Ride tram to [zone:1519]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 39.5,
        "y": 84.5
      },
      "questID": 1717,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 39.5,
        "y": 84.5
      },
      "questID": 1716,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 4411,
        "x": 22.5,
        "y": 55.5
      },
      "description": "Ride boat to [zone:442]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 2077,
        "x": 44,
        "y": 95
      },
      "description": "Go to [zone:331]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 331,
        "areaID": 1703,
        "x": 68.8,
        "y": 87.5
      },
      "description": "Go to [zone:17]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 17,
        "areaID": 1156,
        "x": 49.5,
        "y": 57
      },
      "questID": 1716,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 17,
        "areaID": 1156,
        "x": 49.5,
        "y": 57
      },
      "questID": 1738,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 17,
        "areaID": 1703,
        "x": 48,
        "y": 6
      },
      "description": "Go to [zone:331]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 412,
        "x": 31,
        "y": 31
      },
      "questID": 1738,
      "description": "Collect [item:6912] from [object:93192]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2077,
        "x": 28.5,
        "y": 13.5
      },
      "description": "Go to [zone:148]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Ride boat to [zone:1519]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 39.5,
        "y": 84.5
      },
      "questID": 1738,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 39.5,
        "y": 84.5
      },
      "questID": 1739,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 39.5,
        "y": 84.5
      },
      "questID": 1739,
      "description": "Kill [npc:5677] (use [item:6913] downstairs)",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 39.5,
        "y": 84.5
      },
      "questID": 1739,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "x": 70,
        "y": 73
      },
      "description": "Fly to [zone:69]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        },
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 22.5,
        "y": 44
      },
      "questID": 92
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28,
        "y": 45
      },
      "questID": 127
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28,
        "y": 45
      },
      "questID": 150
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28,
        "y": 45
      },
      "questID": 150
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28,
        "y": 45
      },
      "questID": 20
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 95,
        "x": 29,
        "y": 37.5
      },
      "questID": 124,
      "description": "Kill 10 [npc:426] and 8 [npc:430]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 95,
        "x": 29,
        "y": 37.5
      },
      "questID": 89,
      "description": "Loot 5 [item:2856] and [item:1013] from [npc:426] and [npc:430]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28,
        "y": 45
      },
      "questID": 89
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28,
        "y": 45
      },
      "questID": 124
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 44,
        "x": 30.5,
        "y": 60
      },
      "description": "Fly to [zone:108]"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56,
        "y": 51
      },
      "description": "Set Hearthstone to [zone:108]",
      "setHearthstone": 108
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 20,
        "x": 44,
        "y": 69.5
      },
      "questID": 142,
      "description": "Loot [item:1381] from [npc:550]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 115,
        "x": 30,
        "y": 86
      },
      "questID": 103
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 115,
        "x": 30,
        "y": 86
      },
      "questID": 103
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 115,
        "x": 30,
        "y": 86
      },
      "questID": 104
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 2,
        "x": 29.5,
        "y": 80
      },
      "questID": 104,
      "description": "Loot [item:3636] from [npc:391]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 115,
        "x": 30,
        "y": 86
      },
      "questID": 104
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 40,
        "areaID": 115,
        "x": 30,
        "y": 86
      },
      "description": "21"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 40,
        "areaID": 115,
        "x": 30,
        "y": 86
      },
      "description": "Hearth to [zone:108]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56,
        "y": 51
      },
      "questID": 142
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56,
        "y": 51
      },
      "questID": 155
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 20,
        "x": 44,
        "y": 69.5
      },
      "questID": 155,
      "description": "Escort [npc:467] to [zone:20]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56,
        "y": 51
      },
      "questID": 155
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56,
        "y": 51
      },
      "description": "Fly to [zone:1519]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 4411,
        "x": 22.5,
        "y": 55.5
      },
      "description": "Ride boat to [zone:442]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 1138
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Set Hearthstone to [zone:442]",
      "setHearthstone": 442
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4740
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 948
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 986
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 965
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 55,
        "y": 25
      },
      "questID": 965
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 55,
        "y": 25
      },
      "questID": 966
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 55,
        "y": 25
      },
      "questID": 966,
      "description": "Loot 4 [item:5348] from [npc:2336]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 55,
        "y": 25
      },
      "questID": 966
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 55,
        "y": 25
      },
      "questID": 967
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 2078,
        "x": 36.5,
        "y": 76.5
      },
      "questID": 4740,
      "description": "Kill [npc:10323] (kill murlocs in the camp to lure him)"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 2078,
        "x": 35,
        "y": 80
      },
      "questID": 1138,
      "description": "Loot 6 [item:12237] from [npc:2235] and [npc:2233]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 2078,
        "x": 35,
        "y": 80
      },
      "questID": 4730,
      "description": "Collect [item:12242] from [object:175227]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 2077,
        "x": 37.5,
        "y": 82.5
      },
      "questID": 1003,
      "description": "Loot 4 [item:5414] from [npc:2165]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 2077,
        "x": 37.5,
        "y": 82.5
      },
      "questID": 986,
      "description": "Loot 5 [item:5386] from [npc:2237] and [npc:2071]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 2077,
        "x": 42.5,
        "y": 78
      },
      "questID": 1003
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 2077,
        "x": 42.5,
        "y": 78
      },
      "questID": 948
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 2077,
        "x": 42.5,
        "y": 78
      },
      "questID": 944
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 449,
        "x": 38.5,
        "y": 86
      },
      "questID": 944,
      "description": "Use [item:5251]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 449,
        "x": 38.5,
        "y": 86
      },
      "questID": 944
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 449,
        "x": 38.5,
        "y": 86
      },
      "questID": 949
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 449,
        "x": 38.5,
        "y": 86
      },
      "questID": 949,
      "description": "Click the [object:12666]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 449,
        "x": 38.5,
        "y": 86
      },
      "questID": 950
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 449,
        "x": 38.5,
        "y": 86
      },
      "questID": 945
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 449,
        "x": 38.5,
        "y": 86
      },
      "questID": 945,
      "description": "Escort [npc:3584]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 2077,
        "x": 42.5,
        "y": 78
      },
      "questID": 950
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 2077,
        "x": 42.5,
        "y": 78
      },
      "questID": 951
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 2077,
        "x": 42.5,
        "y": 78
      },
      "questID": 5321
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 2077,
        "x": 42.5,
        "y": 78
      },
      "questID": 5321,
      "description": "Collect [item:13536] from [object:176634]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 413,
        "x": 27,
        "y": 36
      },
      "questID": 5321,
      "description": "Escort [npc:11218] to [zone:413] (use [item:13536] on [npc:11218] when he falls asleep)"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 413,
        "x": 27,
        "y": 36
      },
      "questID": 5321
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 413,
        "x": 27,
        "y": 36
      },
      "questID": 967
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 413,
        "x": 27,
        "y": 36
      },
      "questID": 970
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 413,
        "x": 27,
        "y": 36
      },
      "questID": 1010
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 416,
        "x": 22.5,
        "y": 52
      },
      "questID": 945
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "description": "Open [zone:415] flight path"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "questID": 1070
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "questID": 1056
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "questID": 991
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "questID": 1054
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "description": "22"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "description": "Fly to [zone:442]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4730
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 1138
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4740
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 986
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 993
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 443,
        "x": 58,
        "y": 20.5
      },
      "questID": 951,
      "description": "Collect 6 [item:5273] from [object:12654], [object:13360] and [object:13872]"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 148,
        "areaID": 443,
        "x": 58,
        "y": 20.5
      },
      "description": "Hearth to [zone:442]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 2077,
        "x": 42.5,
        "y": 78
      },
      "questID": 951
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 455,
        "x": 45,
        "y": 85.5
      },
      "questID": 993
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 455,
        "x": 45,
        "y": 85.5
      },
      "questID": 994
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 455,
        "x": 45,
        "y": 85.5
      },
      "questID": 994,
      "description": "Help [npc:3692] escape"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 2077,
        "x": 44,
        "y": 95
      },
      "description": "Go to [zone:331]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "x": 29.5,
        "y": 24
      },
      "questID": 1010,
      "description": "Collect 5 [item:5437] from [object:17282]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 412,
        "x": 31,
        "y": 31
      },
      "questID": 970,
      "description": "Loot [item:5366] from [npc:3725], [npc:3728], [npc:3730] and [npc:3727]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 413,
        "x": 27,
        "y": 36
      },
      "questID": 970
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 413,
        "x": 27,
        "y": 36
      },
      "questID": 1010
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 413,
        "x": 27,
        "y": 36
      },
      "questID": 1020
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "questID": 1008
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "questID": 1020
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "questID": 1033
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "description": "Set Hearthstone to [zone:415]",
      "setHearthstone": 415
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 441,
        "x": 20.5,
        "y": 42.5
      },
      "questID": 991,
      "description": "Click the [npc:3891]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 441,
        "x": 20.5,
        "y": 42.5
      },
      "questID": 1023
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 441,
        "x": 20.5,
        "y": 42.5
      },
      "questID": 1023,
      "description": "Loot [item:5463] from [npc:3739], [npc:3737], [npc:3740] and [npc:3742]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "x": 15,
        "y": 31.5
      },
      "questID": 1007
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 414,
        "x": 14,
        "y": 22.5
      },
      "questID": 1008,
      "description": "Loot 20 [item:5490] from [npc:3717] and [npc:3713]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 414,
        "x": 14,
        "y": 22.5
      },
      "questID": 1007,
      "description": "Collect [iitem:5424] from [object:17783]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "x": 15,
        "y": 31.5
      },
      "questID": 1007
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "x": 15,
        "y": 31.5
      },
      "questID": 1009
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 414,
        "x": 6.5,
        "y": 13.5
      },
      "questID": 1009,
      "description": "Loot [item:5445] from [npc:3943]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "x": 15,
        "y": 31.5
      },
      "questID": 1009
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 331,
        "x": 15,
        "y": 31.5
      },
      "description": "23"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 331,
        "x": 15,
        "y": 31.5
      },
      "description": "Hearth to [zone:415]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "x": 15,
        "y": 31.5
      },
      "questID": 1023
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "x": 15,
        "y": 31.5
      },
      "questID": 1024
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "x": 15,
        "y": 31.5
      },
      "questID": 1025
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "questID": 1008
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "questID": 1134
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2301,
        "x": 37.5,
        "y": 34
      },
      "questID": 1054,
      "description": "Loot [item:5544] from [npc:3987]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "questID": 1054
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "x": 53.5,
        "y": 46.5
      },
      "questID": 1024
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "x": 53.5,
        "y": 46.5
      },
      "questID": 1026
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "x": 51,
        "y": 60
      },
      "questID": 1025,
      "description": "Kill [npc:3746], 2 [npc:3749], 10 [npc:3750] and 12 [npc:3743]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 424,
        "x": 46,
        "y": 46
      },
      "questID": 1033,
      "description": "Collect [item:5493] from [object:19015]"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 331,
        "areaID": 424,
        "x": 46,
        "y": 46
      },
      "description": "Hearth to [zone:415]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "questID": 1025
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "questID": 9533
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "questID": 1033
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "questID": 1034
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 418,
        "x": 33.5,
        "y": 66.5
      },
      "questID": 1034,
      "description": "Collect 5 [item:5494] from [object:19016]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "questID": 1034
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "questID": 1035
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 420,
        "x": 50,
        "y": 66
      },
      "questID": 1016
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 420,
        "x": 50,
        "y": 66
      },
      "questID": 1016,
      "description": "Loot 5 [item:12220] from [npc:3917], then use [item:5456]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 420,
        "x": 50,
        "y": 66
      },
      "questID": 1016
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 331,
        "areaID": 1276,
        "x": 42.5,
        "y": 71
      },
      "description": "Go to [zone:406]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 406,
        "areaID": 461,
        "x": 59,
        "y": 65.5
      },
      "questID": 1093
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 406,
        "areaID": 461,
        "x": 59,
        "y": 65.5
      },
      "questID": 1070
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 406,
        "areaID": 461,
        "x": 59,
        "y": 65.5
      },
      "questID": 1085
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 406,
        "areaID": 461,
        "x": 59,
        "y": 65.5
      },
      "questID": 1085
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 406,
        "areaID": 461,
        "x": 59,
        "y": 65.5
      },
      "questID": 1071
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 406,
        "areaID": 461,
        "x": 59,
        "y": 65.5
      },
      "description": "24"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 406,
        "areaID": 461,
        "x": 67,
        "y": 50.5
      },
      "questID": 1071,
      "description": "Kill 10 [npc:3989] and 10 [npc:3991]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 406,
        "areaID": 461,
        "x": 67,
        "y": 50.5
      },
      "questID": 1093,
      "description": "Loot [item:5734] from [npc:3988]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 406,
        "areaID": 461,
        "x": 59,
        "y": 65.5
      },
      "questID": 1093
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 406,
        "areaID": 461,
        "x": 59,
        "y": 65.5
      },
      "questID": 1071
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 406,
        "areaID": 461,
        "x": 59,
        "y": 65.5
      },
      "questID": 1072
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 406,
        "areaID": 461,
        "x": 59,
        "y": 65.5
      },
      "questID": 1075
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 406,
        "areaID": 464,
        "x": 51.5,
        "y": 46
      },
      "questID": 1134,
      "description": "Loot 12 [item:5808] from [npc:4012], and [npc:4014]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 406,
        "areaID": 467,
        "x": 36.5,
        "y": 12.5
      },
      "questID": 1056
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 406,
        "areaID": 467,
        "x": 36.5,
        "y": 12.5
      },
      "description": "Open [zone:467] flight path"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 406,
        "areaID": 467,
        "x": 36.5,
        "y": 12.5
      },
      "description": "Fly to [zone:415]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "questID": 1134
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "questID": 4581
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 36,
        "y": 50.5
      },
      "description": "Fly to [zone:442]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 994
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Ride boat to [zone:1519]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 53,
        "y": 86.5
      },
      "questID": 1075
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "x": 70,
        "y": 73
      },
      "description": "Fly to [zone:1537]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 1,
        "x": 72,
        "y": 52
      },
      "questID": 1072
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 1,
        "x": 55.5,
        "y": 47.5
      },
      "description": "Fly to [zone:144]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 45.5
      },
      "questID": 468
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 837,
        "x": 25.5,
        "y": 10.5
      },
      "questID": 468
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 837,
        "x": 25.5,
        "y": 10.5
      },
      "questID": 455
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 38,
        "areaID": 837,
        "x": 25.5,
        "y": 10.5
      },
      "description": "Go to [zone:11]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 836,
        "x": 49.5,
        "y": 79.5
      },
      "questID": 455,
      "description": "Kill 8 [npc:2103] and 6 [npc:2102], then explore (53.9, 70.3)"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "x": 50,
        "y": 39.5
      },
      "questID": 469
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 57
      },
      "questID": 305
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 57
      },
      "questID": 469
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 57
      },
      "questID": 484
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 57
      },
      "questID": 279
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 57
      },
      "description": "Open [zone:150] flight path"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 57
      },
      "questID": 288
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 57
      },
      "questID": 463
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 57
      },
      "questID": 288,
      "description": "Buy 1 [item:2594]"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 57
      },
      "description": "Set Hearthstone to [zone:150]",
      "setHearthstone": 150
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 57
      },
      "questID": 288
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 57
      },
      "questID": 470
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 57
      },
      "questID": 455
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 57
      },
      "questID": 473
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 57
      },
      "questID": 473
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 57
      },
      "questID": 464
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1022,
        "x": 14,
        "y": 42
      },
      "questID": 279,
      "description": "Kill 12 [npc:1024] and loot [item:3618] from [npc:1259]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1022,
        "x": 14,
        "y": 42
      },
      "description": "25"
    }
  ]
}`,"/guide/enGB/alliance/25-30.guide":`{
  "name": "WotLK Guide - Alliance - (25 - 30)",
  "locale": "enGB",
  "faction": "Alliance",
  "next": "WotLK Guide - Alliance - (30 - 35)",
  "stepList": [
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 118,
        "x": 35,
        "y": 49
      },
      "questID": 294
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 118,
        "x": 35,
        "y": 49
      },
      "questID": 305
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 118,
        "x": 35,
        "y": 49
      },
      "questID": 306
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 118,
        "x": 35,
        "y": 49
      },
      "questID": 299
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "x": 29,
        "y": 45
      },
      "questID": 294,
      "description": "Kill 10 [npc:1020] and 10 [npc:1021]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 118,
        "x": 35,
        "y": 49
      },
      "questID": 294
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 118,
        "x": 35,
        "y": 49
      },
      "questID": 295
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 118,
        "x": 35,
        "y": 49
      },
      "questID": 295,
      "description": "Kill 10 [npc:1022] and 10 [npc:1023]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 118,
        "x": 35,
        "y": 49
      },
      "questID": 299,
      "description": "Collect [item:2658] from [object:35252], [item:2659] from [object:334], [item:2660] from [object:333] and [item:2661] from [object:331]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 118,
        "x": 35,
        "y": 49
      },
      "questID": 295
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 118,
        "x": 35,
        "y": 49
      },
      "questID": 296
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 118,
        "x": 35,
        "y": 49
      },
      "questID": 299
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1036,
        "x": 43,
        "y": 41
      },
      "questID": 464,
      "description": "Loot 8 [item:3337] from [npc:1034]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1025,
        "x": 52.5,
        "y": 40.5
      },
      "questID": 484,
      "description": "Loot 4 [item:3397] from [npc:1417]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1025,
        "x": 56.5,
        "y": 40.5
      },
      "questID": 463
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1025,
        "x": 56.5,
        "y": 40.5
      },
      "questID": 276
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1020,
        "x": 64,
        "y": 62
      },
      "questID": 276,
      "description": "Kill 15 [npc:1007] and 10 [npc:1008]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1025,
        "x": 56.5,
        "y": 40.5
      },
      "questID": 276
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1025,
        "x": 56.5,
        "y": 40.5
      },
      "questID": 277
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "x": 46.5,
        "y": 35.5
      },
      "questID": 277,
      "description": "Loot 9 [item:2611] from [npc:1011], [npc:1012], [npc:1010] and [npc:1009]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1025,
        "x": 56.5,
        "y": 40.5
      },
      "questID": 277
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1025,
        "x": 56.5,
        "y": 40.5
      },
      "questID": 275
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1025,
        "x": 56.5,
        "y": 40.5
      },
      "description": "Hearth to [zone:150]",
      "setHearthstone": 150
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 58
      },
      "description": "Fly to [zone:1519]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 4411,
        "x": 22.5,
        "y": 56
      },
      "description": "Ride boat to [zone:442]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Ride boat to [zone:3524]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3557,
        "x": 34,
        "y": 45.5
      },
      "description": "Go to [zone:3557]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3581,
        "x": 32.5,
        "y": 24
      },
      "questID": 9502,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3581,
        "x": 32.5,
        "y": 24
      },
      "questID": 9502,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3581,
        "x": 32.5,
        "y": 24
      },
      "questID": 9501,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3557,
        "x": 75.5,
        "y": 54.5
      },
      "description": "Go to [zone:3524]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3915,
        "x": 42,
        "y": 4
      },
      "description": "Go to [zone:3525]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3525,
        "areaID": 3596,
        "x": 32,
        "y": 16.5
      },
      "questID": 9501,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3525,
        "areaID": 3596,
        "x": 32,
        "y": 16.5
      },
      "questID": 9503,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3525,
        "areaID": 3595,
        "x": 33,
        "y": 39.5
      },
      "questID": 9503,
      "description": "Loot 6 [item:23744] from [npc:17358]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3525,
        "areaID": 3596,
        "x": 32,
        "y": 16.5
      },
      "questID": 9503,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3525,
        "areaID": 3596,
        "x": 32,
        "y": 16.5
      },
      "questID": 9504,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3525,
        "areaID": 3583,
        "x": 65.4,
        "y": 93.9
      },
      "description": "Go to [zone:3524]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "x": 21.5,
        "y": 54
      },
      "description": "Ride boat to [zone:442]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Fly to [zone:415]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 418,
        "x": 33.5,
        "y": 67.5
      },
      "questID": 9504,
      "description": "Use [item:23749]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 35.9,
        "y": 50.7
      },
      "description": "Fly to [zone:442]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Ride boat to [zone:3524]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3915,
        "x": 42,
        "y": 4
      },
      "description": "Go to [zone:3525]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3525,
        "areaID": 3596,
        "x": 32,
        "y": 16.5
      },
      "questID": 9504,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3525,
        "areaID": 3596,
        "x": 32,
        "y": 16.5
      },
      "questID": 9508,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3525,
        "areaID": 3603,
        "x": 25.5,
        "y": 41
      },
      "questID": 9508,
      "description": "Click [object:181699], then loot [item:23997] from [npc:17359]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3525,
        "areaID": 3596,
        "x": 32,
        "y": 16.5
      },
      "questID": 9508,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3525,
        "areaID": 3596,
        "x": 32,
        "y": 16.5
      },
      "questID": 9509,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3525,
        "areaID": 3583,
        "x": 65.4,
        "y": 93.9
      },
      "description": "Go to [zone:3524]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3557,
        "x": 34,
        "y": 45.5
      },
      "description": "Go to [zone:3557]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3581,
        "x": 32.5,
        "y": 24
      },
      "questID": 9509,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3557,
        "x": 75.5,
        "y": 54.5
      },
      "description": "Go to [zone:3524]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "x": 21.5,
        "y": 54
      },
      "description": "Ride boat to [zone:442]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Ride boat to [zone:1519]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "x": 70,
        "y": 73.5
      },
      "description": "Fly to [zone:150]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 58
      },
      "questID": 279
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 58
      },
      "questID": 281
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 58
      },
      "questID": 484
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 58
      },
      "questID": 471
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 58
      },
      "questID": 464
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 58
      },
      "questID": 465
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 58
      },
      "questID": 306
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 58
      },
      "description": "26"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1022,
        "x": 14.5,
        "y": 39
      },
      "questID": 281,
      "description": "Click the [object:261]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1022,
        "x": 14.5,
        "y": 39
      },
      "questID": 284
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1022,
        "x": 14.5,
        "y": 39
      },
      "questID": 284,
      "description": "Click the [object:142151]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1022,
        "x": 14.5,
        "y": 39
      },
      "questID": 285
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1022,
        "x": 14.5,
        "y": 39
      },
      "questID": 285,
      "description": "Click the [object:259]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1022,
        "x": 14.5,
        "y": 39
      },
      "questID": 286
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1024,
        "x": 18.5,
        "y": 27.5
      },
      "questID": 275,
      "description": "Kill 8 [npc:1040]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1024,
        "x": 18.5,
        "y": 27.5
      },
      "questID": 471,
      "description": "Loot 6 [item:3348] from [npc:2089]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 309,
        "x": 44.5,
        "y": 25.5
      },
      "questID": 470,
      "description": "Loot [item:3349] from [npc:1032] and [npc:1031]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1025,
        "x": 56.5,
        "y": 40.5
      },
      "questID": 275
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 58
      },
      "questID": 470
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 58
      },
      "questID": 471
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 58
      },
      "questID": 286
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 10.5,
        "y": 58
      },
      "description": "Fly to [zone:1519]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 1519,
        "x": 62,
        "y": 76.5
      },
      "description": "Buy 1 [item:4371] from the Auction House"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "x": 70,
        "y": 73.5
      },
      "description": "Fly to [zone:69]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "x": 31.5,
        "y": 58
      },
      "questID": 128
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 44,
        "x": 16,
        "y": 49.5
      },
      "questID": 34,
      "description": "Loot [item:3631] from [npc:345]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 23.5,
        "y": 42.5
      },
      "questID": 34
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28,
        "y": 45
      },
      "questID": 180
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28,
        "y": 45
      },
      "description": "Set Hearthstone to [zone:69]",
      "setHearthstone": 69
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28,
        "y": 45
      },
      "questID": 115
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 70,
        "x": 67.5,
        "y": 54.5
      },
      "questID": 115,
      "description": "Loot 3 [item:1261] from [npc:436]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 1000,
        "x": 71.5,
        "y": 41.5
      },
      "questID": 91,
      "description": "Loot 10 [item:1075] from [npc:434] and [npc:433]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28,
        "y": 45
      },
      "questID": 115
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28,
        "y": 45
      },
      "questID": 126
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28,
        "y": 45
      },
      "questID": 91
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 95,
        "x": 27.5,
        "y": 22
      },
      "questID": 126,
      "description": "Loot [item:3614] from [npc:518]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 998,
        "x": 33,
        "y": 7
      },
      "questID": 128,
      "description": "Kill 15 [npc:435]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 44,
        "areaID": 998,
        "x": 33,
        "y": 7
      },
      "description": "27"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 998,
        "x": 33,
        "y": 7
      },
      "questID": 219
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 998,
        "x": 33,
        "y": 7
      },
      "questID": 219,
      "description": "Escort [npc:349] to [zone:69]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28,
        "y": 45
      },
      "questID": 219
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28,
        "y": 45
      },
      "questID": 126
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "x": 31.5,
        "y": 58
      },
      "questID": 128
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 1000,
        "x": 80,
        "y": 37.5
      },
      "questID": 180,
      "description": "Loot [item:3632] from [npc:703]"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 44,
        "areaID": 1000,
        "x": 80,
        "y": 37.5
      },
      "description": "Hearth to [zone:69]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 44,
        "areaID": 69,
        "x": 28,
        "y": 45
      },
      "questID": 180
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 44,
        "areaID": 1002,
        "x": 8.5,
        "y": 88.5
      },
      "description": "Go to [zone:10]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 101
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 66
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "description": "Open [zone:42] flight path"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 174
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 174
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 175
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 173
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 164
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 165
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 163
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 56
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 66
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 67
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "description": "Set Hearthstone to [zone:42]",
      "setHearthstone": 42
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "description": "Fly to [zone:108]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 20,
        "x": 43,
        "y": 69
      },
      "questID": 67,
      "description": "Click the [object:3643]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 40,
        "areaID": 20,
        "x": 43,
        "y": 69
      },
      "questID": 68
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56,
        "y": 51.5
      },
      "description": "Fly to [zone:42]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 68
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 69
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "description": "Fly to [zone:1519]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 12,
        "x": 75,
        "y": 94
      },
      "description": "Go to [zone:12]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 65.5
      },
      "questID": 69
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 65.5
      },
      "questID": 70
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 65.5
      },
      "questID": 70,
      "description": "Collect [item:910] from [object:1560]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 12,
        "x": 32.5,
        "y": 49.5
      },
      "description": "Go to [zone:1519]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 42.5,
        "y": 72.5
      },
      "questID": 70
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 42.5,
        "y": 72.5
      },
      "questID": 72
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 42.5,
        "y": 72.5
      },
      "questID": 72,
      "description": "Click the [object:1561]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 42.5,
        "y": 72.5
      },
      "questID": 74
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 12,
        "x": 75,
        "y": 94
      },
      "description": "Go to [zone:12]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 88,
        "x": 81.5,
        "y": 66.5
      },
      "questID": 74
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 88,
        "x": 81.5,
        "y": 66.5
      },
      "questID": 75
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 88,
        "x": 81.5,
        "y": 66.5
      },
      "questID": 75,
      "description": "Collect [item:921] from [object:1562]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 88,
        "x": 81.5,
        "y": 66.5
      },
      "questID": 75
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 88,
        "x": 81.5,
        "y": 66.5
      },
      "questID": 78
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 12,
        "areaID": 88,
        "x": 81.5,
        "y": 66.5
      },
      "description": "Hearth to [zone:42]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 78
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 79
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 79
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 80
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 80
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 97
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 97
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 98
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 242,
        "x": 66,
        "y": 47
      },
      "questID": 173,
      "description": "Kill 6 [npc:533]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 173
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 221
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 242,
        "x": 66,
        "y": 47
      },
      "questID": 221,
      "description": "Kill 12 [npc:205]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 221
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 222
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "description": "28"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "x": 82,
        "y": 59
      },
      "questID": 175
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "x": 82,
        "y": 59
      },
      "questID": 177
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 121,
        "x": 79.5,
        "y": 70.5
      },
      "questID": 56,
      "description": "Kill 8 [npc:48] and 6 [npc:203]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 121,
        "x": 79.5,
        "y": 70.5
      },
      "questID": 101,
      "description": "Loot 10 [item:2378] from [npc:48] and [npc:203]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 121,
        "x": 79.5,
        "y": 70.5
      },
      "questID": 177,
      "description": "Loot [item:1946] from [npc:511]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 10,
        "x": 72.5,
        "y": 69.5
      },
      "questID": 222,
      "description": "Kill 8 [npc:206] and 8 [npc:920]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 56
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 57
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 222
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 223
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 223
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 177
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 181
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 93,
        "x": 36,
        "y": 80.5
      },
      "questID": 181,
      "description": "Loot [item:1968] from [npc:300]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 94,
        "x": 20,
        "y": 56
      },
      "questID": 163
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 94,
        "x": 20,
        "y": 56
      },
      "questID": 5
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 20,
        "y": 44
      },
      "questID": 57,
      "description": "Kill 15 [npc:531] and 15 [npc:202]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 27,
        "y": 46
      },
      "questID": 101,
      "description": "Loot 5 [item:1130] from [npc:930]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 20,
        "y": 44
      },
      "questID": 101,
      "description": "Loot 10 [item:1129] from [npc:3], [npc:948], [npc:210] and [npc:604]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 23.5,
        "y": 35
      },
      "questID": 165
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 23.5,
        "y": 35
      },
      "questID": 148
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 243,
        "x": 17.5,
        "y": 29
      },
      "questID": 225,
      "description": "Click the [object:61]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 1097,
        "x": 8,
        "y": 34
      },
      "questID": 164
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 1097,
        "x": 8,
        "y": 34
      },
      "questID": 95
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 10,
        "areaID": 1097,
        "x": 8,
        "y": 34
      },
      "description": "Hearth to [zone:42]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 5
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 57
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 58
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 225
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 227
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 227
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 101
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 148
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 149
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 181
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "description": "29"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "x": 82,
        "y": 59
      },
      "questID": 149
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "x": 82,
        "y": 59
      },
      "questID": 154
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 154
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 157
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 245,
        "x": 50,
        "y": 77.5
      },
      "questID": 95,
      "description": "Click the [object:59]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 245,
        "x": 50,
        "y": 77.5
      },
      "questID": 230
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 23.5,
        "y": 35
      },
      "questID": 157
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 23.5,
        "y": 35
      },
      "questID": 158
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 17.5,
        "y": 38
      },
      "questID": 58,
      "description": "Kill 20 [npc:604]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 1097,
        "x": 8,
        "y": 34
      },
      "questID": 230
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 1097,
        "x": 8,
        "y": 34
      },
      "questID": 262
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 10,
        "areaID": 40,
        "x": 2,
        "y": 35
      },
      "description": "Go to [zone:40]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 40,
        "areaID": 108,
        "x": 56,
        "y": 51.5
      },
      "description": "Fly to [zone:42]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 262
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 265
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 58
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 265
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 266
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 266
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 453
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 158
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 156
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 94,
        "x": 20,
        "y": 56
      },
      "questID": 453
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 94,
        "x": 20,
        "y": 56
      },
      "questID": 268
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 1097,
        "x": 8,
        "y": 34
      },
      "questID": 268
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 1097,
        "x": 8,
        "y": 34
      },
      "questID": 323
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 17.5,
        "y": 38
      },
      "questID": 323,
      "description": "Kill 15 [npc:1110], 3 [npc:787] and 3 [npc:785]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 20,
        "y": 44
      },
      "questID": 156,
      "description": "Loot 8 [item:1598] from [npc:202] and [npc:531]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 1097,
        "x": 8,
        "y": 34
      },
      "questID": 323
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 1097,
        "x": 8,
        "y": 34
      },
      "questID": 269
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 10,
        "areaID": 1097,
        "x": 8,
        "y": 34
      },
      "description": "Hearth to [zone:42]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 156
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 159
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "description": "Fly to [zone:1519]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 50,
        "y": 46
      },
      "questID": 269
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 50,
        "y": 46
      },
      "questID": 270
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "x": 70,
        "y": 73.5
      },
      "description": "Fly to [zone:108]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 40,
        "x": 68,
        "y": 50.5
      },
      "description": "Go to [zone:10]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 23.5,
        "y": 35
      },
      "questID": 159
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 23.5,
        "y": 35
      },
      "questID": 133
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 23.5,
        "y": 35
      },
      "questID": 133,
      "description": "Loot 7 [item:884] from [npc:3], [npc:948], [npc:210] and [npc:604]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 23.5,
        "y": 35
      },
      "questID": 133
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 23.5,
        "y": 35
      },
      "questID": 134
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 93,
        "x": 36,
        "y": 80.5
      },
      "questID": 134,
      "description": "Collect [item:1349] from [object:119]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 23.5,
        "y": 35
      },
      "questID": 134
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 23.5,
        "y": 35
      },
      "questID": 160
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 23.5,
        "y": 35
      },
      "description": "Hearth to [zone:42]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 160
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 251
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 251
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 401
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 401
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 252
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 252
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 253
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 23.5,
        "y": 35
      },
      "questID": 254,
      "description": "Click the [object:51708]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 23.5,
        "y": 35
      },
      "questID": 254
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 492,
        "x": 23.5,
        "y": 35
      },
      "questID": 253,
      "description": "Loot [item:2382] from [npc:314]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "questID": 253
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 75,
        "y": 46.5
      },
      "description": "30"
    }
  ]
}`,"/guide/enGB/alliance/30-35.guide":`{
  "name": "WotLK Guide - Alliance - (30 - 35)",
  "locale": "enGB",
  "faction": "Alliance",
  "next": "WotLK Guide - Alliance - (35 - 40)",
  "stepList": [
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 74.5,
        "y": 47
      },
      "description": "Fly to [zone:1519]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        },
        {
          "race": "Dwarf",
          "class": "Warrior"
        },
        {
          "race": "Night Elf",
          "class": "Warrior"
        },
        {
          "race": "Gnome",
          "class": "Warrior"
        },
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 80.5,
        "y": 60
      },
      "questID": 1718,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        },
        {
          "race": "Dwarf",
          "class": "Warrior"
        },
        {
          "race": "Night Elf",
          "class": "Warrior"
        },
        {
          "race": "Gnome",
          "class": "Warrior"
        },
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 4411,
        "x": 22.5,
        "y": 56
      },
      "description": "Ride boat to [zone:442]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        },
        {
          "race": "Dwarf",
          "class": "Warrior"
        },
        {
          "race": "Night Elf",
          "class": "Warrior"
        },
        {
          "race": "Gnome",
          "class": "Warrior"
        },
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 44
      },
      "description": "Fly to [zone:415]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        },
        {
          "race": "Dwarf",
          "class": "Warrior"
        },
        {
          "race": "Night Elf",
          "class": "Warrior"
        },
        {
          "race": "Gnome",
          "class": "Warrior"
        },
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 331,
        "areaID": 1703,
        "x": 69,
        "y": 87.5
      },
      "description": "Go to [zone:17]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        },
        {
          "race": "Dwarf",
          "class": "Warrior"
        },
        {
          "race": "Night Elf",
          "class": "Warrior"
        },
        {
          "race": "Gnome",
          "class": "Warrior"
        },
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 17,
        "areaID": 720,
        "x": 68.5,
        "y": 49
      },
      "questID": 1718,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        },
        {
          "race": "Dwarf",
          "class": "Warrior"
        },
        {
          "race": "Night Elf",
          "class": "Warrior"
        },
        {
          "race": "Gnome",
          "class": "Warrior"
        },
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 17,
        "areaID": 720,
        "x": 68.5,
        "y": 49
      },
      "questID": 1719,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        },
        {
          "race": "Dwarf",
          "class": "Warrior"
        },
        {
          "race": "Night Elf",
          "class": "Warrior"
        },
        {
          "race": "Gnome",
          "class": "Warrior"
        },
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 17,
        "areaID": 720,
        "x": 68.5,
        "y": 49
      },
      "questID": 1719,
      "description": "Step on the grate, then kill [npc:6238]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        },
        {
          "race": "Dwarf",
          "class": "Warrior"
        },
        {
          "race": "Night Elf",
          "class": "Warrior"
        },
        {
          "race": "Gnome",
          "class": "Warrior"
        },
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 17,
        "areaID": 720,
        "x": 68.5,
        "y": 49
      },
      "questID": 1719,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        },
        {
          "race": "Dwarf",
          "class": "Warrior"
        },
        {
          "race": "Night Elf",
          "class": "Warrior"
        },
        {
          "race": "Gnome",
          "class": "Warrior"
        },
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 17,
        "areaID": 1703,
        "x": 48.5,
        "y": 6
      },
      "description": "Go to [zone:331]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        },
        {
          "race": "Dwarf",
          "class": "Warrior"
        },
        {
          "race": "Night Elf",
          "class": "Warrior"
        },
        {
          "race": "Gnome",
          "class": "Warrior"
        },
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 35.5,
        "y": 50.5
      },
      "description": "Fly to [zone:442]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        },
        {
          "race": "Dwarf",
          "class": "Warrior"
        },
        {
          "race": "Night Elf",
          "class": "Warrior"
        },
        {
          "race": "Gnome",
          "class": "Warrior"
        },
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 44
      },
      "description": "Ride boat to [zone:1519]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        },
        {
          "race": "Dwarf",
          "class": "Warrior"
        },
        {
          "race": "Night Elf",
          "class": "Warrior"
        },
        {
          "race": "Gnome",
          "class": "Warrior"
        },
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "x": 70,
        "y": 73
      },
      "description": "Fly to [zone:42]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        },
        {
          "race": "Dwarf",
          "class": "Warrior"
        },
        {
          "race": "Night Elf",
          "class": "Warrior"
        },
        {
          "race": "Gnome",
          "class": "Warrior"
        },
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 74.5,
        "y": 47
      },
      "description": "Fly to [zone:1519]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 4411,
        "x": 22.5,
        "y": 56
      },
      "description": "Ride boat to [zone:442]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 44
      },
      "description": "Ride boat to [zone:3524]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3557,
        "x": 34.5,
        "y": 45.5
      },
      "description": "Go to [zone:3557]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3581,
        "x": 32.5,
        "y": 24
      },
      "questID": 9551,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3581,
        "x": 32.5,
        "y": 24
      },
      "questID": 9551,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3581,
        "x": 32.5,
        "y": 24
      },
      "questID": 9552,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3557,
        "x": 76,
        "y": 54.5
      },
      "description": "Go to [zone:3524]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3580,
        "x": 24.5,
        "y": 35.5
      },
      "questID": 9552,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3580,
        "x": 24.5,
        "y": 35.5
      },
      "questID": 9553,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3580,
        "x": 24.5,
        "y": 35.5
      },
      "questID": 9553,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3580,
        "x": 24.5,
        "y": 35.5
      },
      "questID": 9554,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3557,
        "x": 34.5,
        "y": 45.5
      },
      "description": "Go to [zone:3557]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3581,
        "x": 32.5,
        "y": 24
      },
      "questID": 9554,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3557,
        "x": 76,
        "y": 54.5
      },
      "description": "Go to [zone:3524]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "x": 21.5,
        "y": 54
      },
      "description": "Ride boat to [zone:442]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 44
      },
      "description": "Ride boat to [zone:1519]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "x": 70,
        "y": 73
      },
      "description": "Fly to [zone:42]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 1098,
        "x": 77.5,
        "y": 36
      },
      "questID": 98,
      "description": "Loot [item:3629] from [npc:315]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 74.5,
        "y": 47
      },
      "questID": 98
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 10,
        "areaID": 42,
        "x": 74.5,
        "y": 47
      },
      "description": "Fly to [zone:1519]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 4411,
        "x": 22.5,
        "y": 56
      },
      "description": "Ride boat to [zone:442]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 44
      },
      "description": "Fly to [zone:415]"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 35.5,
        "y": 50.5
      },
      "description": "Set Hearthstone to [zone:415]",
      "setHearthstone": 415
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2457,
        "x": 54.5,
        "y": 35.5
      },
      "questID": 1026,
      "description": "Loot [item:5475] from [npc:3919] and [npc:3834], then collect [item:5464] from [object:19022]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 425,
        "x": 53.5,
        "y": 46.5
      },
      "questID": 1026
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 425,
        "x": 53.5,
        "y": 46.5
      },
      "questID": 1027
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 9526
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 9533
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 9517
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 1021
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 9516
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 1022
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 9521
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 9518
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 4581
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 1011
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 9519
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "description": "Open [zone:2358] flight path"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 429,
        "x": 78.3,
        "y": 44.8
      },
      "questID": 1021
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 429,
        "x": 78.3,
        "y": 44.8
      },
      "questID": 1031
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 429,
        "x": 78.3,
        "y": 44.8
      },
      "questID": 1031,
      "description": "Loot [item:5461] from [npc:4619]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 430,
        "x": 80.5,
        "y": 49
      },
      "questID": 9517,
      "description": "Collect 5 [item:24081] from [object:181916]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 430,
        "x": 80.5,
        "y": 49
      },
      "questID": 9519,
      "description": "Collect [item:23760] from [object:181681]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 437,
        "x": 89,
        "y": 56.5
      },
      "questID": 9517,
      "description": "Collect 15 [item:23776] from [object:181686] and [object:181687]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 437,
        "x": 89,
        "y": 56.5
      },
      "questID": 9518,
      "description": "Kill [npc:17304], 2 [npc:11684], 5 [npc:11681] and 10 [npc:11680]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 435,
        "x": 84.5,
        "y": 77.5
      },
      "questID": 9516,
      "description": "Kill 6 [npc:11697], 6 [npc:6115] and 6 [npc:6073]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 435,
        "x": 84.5,
        "y": 77.5
      },
      "questID": 9526,
      "description": "Use [item:23788] on 8 [object:181690]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 435,
        "x": 84.5,
        "y": 77.5
      },
      "questID": 9520,
      "description": "Use [item:23777]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 432,
        "x": 75.5,
        "y": 72.5
      },
      "questID": 1011,
      "description": "Collect [item:5440] from [object:18036]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 432,
        "x": 75.5,
        "y": 72.5
      },
      "questID": 1027,
      "description": "Kill [npc:3928], then collect [item:5519] from [object:19021]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 422,
        "x": 66.5,
        "y": 82
      },
      "questID": 1035,
      "description": "Loot [item:5508] from [npc:3931]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 3319,
        "x": 61.9,
        "y": 83.9
      },
      "questID": 9521
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 419,
        "x": 50.5,
        "y": 39
      },
      "questID": 1022,
      "description": "Click the [object:19027]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 9517
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 9526
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 1031
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 1032
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 9516
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 9520
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 1022
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 1037
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 9518
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 1011
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 9519
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "description": "31"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 429,
        "x": 78.3,
        "y": 44.8
      },
      "questID": 1032,
      "description": "Loot 16 [item:5481] from [npc:3755], [npc:3754], [npc:3752] and [npc:3757]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2358,
        "x": 86.5,
        "y": 46.5
      },
      "questID": 1032
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 331,
        "areaID": 2457,
        "x": 94.5,
        "y": 47.5
      },
      "description": "Go to [zone:16]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 16,
        "areaID": 3137,
        "x": 12,
        "y": 77.5
      },
      "description": "Open [zone:3137] flight path"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 16,
        "areaID": 3137,
        "x": 12,
        "y": 77.5
      },
      "description": "Fly to [zone:415]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 35.5,
        "y": 50.5
      },
      "questID": 1035
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 425,
        "x": 53.5,
        "y": 46.5
      },
      "questID": 1027
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 425,
        "x": 53.5,
        "y": 46.5
      },
      "questID": 1028
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "x": 56.5,
        "y": 49
      },
      "questID": 1028,
      "description": "Click the [object:19024]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "x": 56.5,
        "y": 49
      },
      "questID": 1055
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 425,
        "x": 53.5,
        "y": 46.5
      },
      "questID": 1055
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 425,
        "x": 53.5,
        "y": 46.5
      },
      "questID": 1029
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 331,
        "areaID": 425,
        "x": 53.5,
        "y": 46.5
      },
      "description": "Hearth to [zone:415]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 35.5,
        "y": 50.5
      },
      "questID": 1029
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 331,
        "areaID": 415,
        "x": 35.5,
        "y": 50.5
      },
      "description": "Fly to [zone:442]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 44
      },
      "description": "Ride boat to [zone:702]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.5,
        "y": 91
      },
      "description": "Open [zone:702] flight path",
      "onlyFor": [
        {
          "race": "Human"
        },
        {
          "race": "Dwarf"
        },
        {
          "race": "Gnome"
        },
        {
          "race": "Draenei"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.5,
        "y": 91
      },
      "description": "Go to [zone:1657]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1660,
        "x": 62,
        "y": 39
      },
      "questID": 1037
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1660,
        "x": 62,
        "y": 39
      },
      "questID": 1038
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1662,
        "x": 62.5,
        "y": 83.5
      },
      "questID": 1038,
      "description": "Collect [item:5520] from [object:19877]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1660,
        "x": 62,
        "y": 39
      },
      "questID": 1038
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1660,
        "x": 62,
        "y": 39
      },
      "questID": 1039
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1657,
        "x": 29,
        "y": 46
      },
      "description": "Go to [zone:702]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.5,
        "y": 91
      },
      "description": "Fly to [zone:442]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 44
      },
      "description": "Ride boat to [zone:1519]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "x": 70,
        "y": 73
      },
      "description": "Fly to [zone:150]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 11,
        "y": 57.5
      },
      "questID": 1302
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 11,
        "y": 57.5
      },
      "questID": 289
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 11,
        "y": 57.5
      },
      "questID": 270
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 11,
        "y": 57.5
      },
      "questID": 321
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 11,
        "y": 57.5
      },
      "description": "Set Hearthstone to [zone:150]",
      "setHearthstone": 150
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 299,
        "x": 12,
        "y": 64
      },
      "questID": 321,
      "description": "Click the [object:2734]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 299,
        "x": 12,
        "y": 64
      },
      "questID": 324
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 299,
        "x": 12,
        "y": 64
      },
      "questID": 324,
      "description": "Loot 5 [item:2702] from [npc:1418]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 11,
        "y": 57.5
      },
      "questID": 324
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 11,
        "y": 57.5
      },
      "questID": 322
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 11,
        "y": 57.5
      },
      "questID": 472
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1039,
        "x": 14,
        "y": 29.5
      },
      "questID": 289,
      "description": "Kill 13 [npc:1157] and 5 [npc:1158], then loot [item:3619] from [npc:1159]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1039,
        "x": 14,
        "y": 29.5
      },
      "description": "32"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 11,
        "y": 57.5
      },
      "questID": 289
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 11,
        "y": 57.5
      },
      "questID": 290
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1039,
        "x": 15.5,
        "y": 23.5
      },
      "questID": 290,
      "description": "Loot [item:2629] from [npc:1160]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1039,
        "x": 15.5,
        "y": 23.5
      },
      "questID": 290,
      "description": "Click the [object:112948]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1039,
        "x": 15.5,
        "y": 23.5
      },
      "questID": 292
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 118,
        "x": 33,
        "y": 51.5
      },
      "questID": 296,
      "description": "Loot [item:3638] from [npc:1353]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1036,
        "x": 38.5,
        "y": 48.5
      },
      "questID": 296
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1036,
        "x": 47.5,
        "y": 47
      },
      "questID": 465,
      "description": "Click the [object:1609]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1036,
        "x": 47.5,
        "y": 47
      },
      "questID": 474
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1036,
        "x": 53.5,
        "y": 54.5
      },
      "questID": 474,
      "description": "Loot [item:3625] from [npc:2091]"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1036,
        "x": 53.5,
        "y": 54.5
      },
      "description": "Hearth to [zone:150]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 11,
        "y": 57.5
      },
      "questID": 292
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 11,
        "y": 57.5
      },
      "questID": 293
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 150,
        "x": 11,
        "y": 57.5
      },
      "questID": 474
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 205,
        "x": 50,
        "y": 18.5
      },
      "questID": 472
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 205,
        "x": 50,
        "y": 18.5
      },
      "questID": 304
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 205,
        "x": 50,
        "y": 18.5
      },
      "questID": 631
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 205,
        "x": 50,
        "y": 18.5
      },
      "questID": 303
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1016,
        "x": 61,
        "y": 25.5
      },
      "questID": 303,
      "description": "Kill 10 [npc:1051], 5 [npc:1053], 5 [npc:1052] and 5 [npc:1054]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 1016,
        "x": 61,
        "y": 25.5
      },
      "questID": 304,
      "description": "Loot [item:3639] from [npc:1364]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 205,
        "x": 50,
        "y": 18.5
      },
      "questID": 304
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 205,
        "x": 50,
        "y": 18.5
      },
      "questID": 303
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 881,
        "x": 51.5,
        "y": 8
      },
      "questID": 631,
      "description": "Click the [object:2652]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 881,
        "x": 51.5,
        "y": 8
      },
      "questID": 632
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 205,
        "x": 50,
        "y": 18.5
      },
      "questID": 632
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 205,
        "x": 50,
        "y": 18.5
      },
      "questID": 633
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 11,
        "areaID": 881,
        "x": 51.5,
        "y": 8
      },
      "description": "Go to [zone:45]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 45,
        "x": 49,
        "y": 88
      },
      "questID": 633,
      "description": "Click the [object:2704]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 45,
        "areaID": 881,
        "x": 45.5,
        "y": 95
      },
      "description": "Go to [zone:11]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 205,
        "x": 50,
        "y": 18.5
      },
      "questID": 633
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 11,
        "areaID": 205,
        "x": 50,
        "y": 18.5
      },
      "questID": 634
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 11,
        "areaID": 881,
        "x": 51.5,
        "y": 8
      },
      "description": "Go to [zone:45]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 45,
        "areaID": 320,
        "x": 46,
        "y": 47.5
      },
      "questID": 634
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 45,
        "areaID": 320,
        "x": 46,
        "y": 47.5
      },
      "questID": 681
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 45,
        "areaID": 320,
        "x": 46,
        "y": 47.5
      },
      "description": "Open [zone:320] flight path"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 45,
        "areaID": 1857,
        "x": 21,
        "y": 31
      },
      "description": "Go to [zone:267]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "description": "Open [zone:271] flight path"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 500
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 505
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 659
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 9435
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "description": "Set Hearthstone to [zone:271]",
      "setHearthstone": 271
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 536
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 555
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 564
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 267,
        "x": 55.5,
        "y": 57
      },
      "questID": 555,
      "description": "Loot 10 [item:3712] from [npc:2408]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 555
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 295,
        "x": 46.5,
        "y": 64
      },
      "questID": 536,
      "description": "Kill 10 [npc:2377] and 10 [npc:2376]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 536
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 559
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 295,
        "x": 46.5,
        "y": 64
      },
      "questID": 559,
      "description": "Loot 10 [item:3716] from [npc:2377] and [npc:2376]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 267,
        "areaID": 295,
        "x": 46.5,
        "y": 64
      },
      "description": "33"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 559
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 560
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 560
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 561
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 561
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 562
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 294,
        "x": 56,
        "y": 65
      },
      "questID": 562,
      "description": "Kill 10 [npc:2369] and 10 [npc:2371]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 562
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 563
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 267,
        "x": 55.5,
        "y": 35
      },
      "questID": 9435,
      "description": "Collect [iitem:23646] from [object:181620]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 267,
        "areaID": 36,
        "x": 53.5,
        "y": 6.5
      },
      "description": "Go to [zone:36]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 36,
        "areaID": 1679,
        "x": 44.5,
        "y": 78.5
      },
      "questID": 564,
      "description": "Kill 8 [npc:2406] and 10 [npc:2407]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 36,
        "areaID": 1678,
        "x": 57,
        "y": 66.5
      },
      "questID": 505,
      "description": "Kill 12 [npc:2240] and 8 [npc:2241]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 36,
        "areaID": 1678,
        "x": 57,
        "y": 66.5
      },
      "questID": 510,
      "description": "Click the [object:1740]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 36,
        "areaID": 1678,
        "x": 57,
        "y": 66.5
      },
      "questID": 511
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 36,
        "areaID": 1678,
        "x": 57,
        "y": 66.5
      },
      "description": "Hearth to [zone:271]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 9435
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 511
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 514
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 505
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 510
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 512
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "questID": 564
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 267,
        "areaID": 271,
        "x": 50,
        "y": 57
      },
      "description": "Fly to [zone:320]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 45,
        "areaID": 313,
        "x": 34,
        "y": 29
      },
      "questID": 681,
      "description": "Kill 10 [npc:2586] and 6 [npc:2589]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 45,
        "areaID": 320,
        "x": 46,
        "y": 47.5
      },
      "questID": 681
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 45,
        "areaID": 320,
        "x": 46,
        "y": 47.5
      },
      "description": "Fly to [zone:1537]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 1,
        "x": 72.5,
        "y": 94
      },
      "questID": 1179
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 1,
        "x": 70,
        "y": 21
      },
      "questID": 1453
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 1,
        "x": 74.5,
        "y": 11.5
      },
      "questID": 514
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 1,
        "x": 74.5,
        "y": 11.5
      },
      "questID": 525
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 1,
        "x": 55.5,
        "y": 47.5
      },
      "description": "Fly to [zone:1519]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 1519,
        "x": 62.5,
        "y": 77
      },
      "description": "Buy 4 [item:4278] from the Auction House for future ([quest:627])"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 76,
        "y": 36.5
      },
      "questID": 563
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 59.5,
        "y": 34
      },
      "questID": 322
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 50.5,
        "y": 45.5
      },
      "questID": 293
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1519,
        "x": 50.5,
        "y": 45.5
      },
      "description": "34"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "x": 70,
        "y": 73
      },
      "description": "Fly to [zone:42]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 10,
        "x": 44.5,
        "y": 88
      },
      "description": "Go to [zone:33]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 33,
        "areaID": 99,
        "x": 38,
        "y": 4
      },
      "description": "Open [zone:99] flight path"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 99,
        "x": 38,
        "y": 4
      },
      "questID": 203
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 99,
        "x": 38,
        "y": 4
      },
      "questID": 204
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 99,
        "x": 38,
        "y": 4
      },
      "questID": 210
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 100,
        "x": 36,
        "y": 10.5
      },
      "questID": 583
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 100,
        "x": 36,
        "y": 10.5
      },
      "questID": 583
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 100,
        "x": 36,
        "y": 10.5
      },
      "questID": 194
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 100,
        "x": 36,
        "y": 10.5
      },
      "questID": 185
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 100,
        "x": 36,
        "y": 10.5
      },
      "questID": 190
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 33,
        "x": 41,
        "y": 11
      },
      "questID": 190,
      "description": "Kill 10 [npc:683]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 101,
        "x": 44,
        "y": 11
      },
      "questID": 203,
      "description": "Kill 15 [npc:937]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 101,
        "x": 44,
        "y": 11
      },
      "questID": 204,
      "description": "Loot 7 [item:2633] from [npc:940] and [npc:937]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 101,
        "x": 44,
        "y": 11
      },
      "questID": 204,
      "description": "Collect [item:2634] from [object:263] and [object:264]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 99,
        "x": 38,
        "y": 4
      },
      "questID": 203
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 99,
        "x": 38,
        "y": 4
      },
      "questID": 204
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 100,
        "x": 36,
        "y": 10.5
      },
      "questID": 190
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 100,
        "x": 36,
        "y": 10.5
      },
      "questID": 191
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 33,
        "x": 33,
        "y": 12.5
      },
      "questID": 185,
      "description": "Kill 10 [npc:681]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 100,
        "x": 36,
        "y": 10.5
      },
      "questID": 185
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 100,
        "x": 36,
        "y": 10.5
      },
      "questID": 186
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 33,
        "x": 31,
        "y": 10
      },
      "questID": 191,
      "description": "Kill 10 [npc:736]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 33,
        "x": 31,
        "y": 10
      },
      "questID": 186,
      "description": "Kill 10 [npc:682]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 33,
        "x": 27,
        "y": 16.5
      },
      "questID": 194,
      "description": "Kill 10 [npc:685]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 100,
        "x": 36,
        "y": 10.5
      },
      "questID": 194
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 100,
        "x": 36,
        "y": 10.5
      },
      "questID": 195
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 100,
        "x": 36,
        "y": 10.5
      },
      "questID": 186
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 100,
        "x": 36,
        "y": 10.5
      },
      "questID": 187
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 100,
        "x": 36,
        "y": 10.5
      },
      "questID": 191
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 100,
        "x": 36,
        "y": 10.5
      },
      "questID": 192
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 35,
        "x": 29,
        "y": 73.5
      },
      "questID": 210
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 35,
        "x": 29,
        "y": 73.5
      },
      "questID": 627
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 35,
        "x": 29,
        "y": 73.5
      },
      "questID": 627
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 35,
        "x": 29,
        "y": 73.5
      },
      "questID": 622
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 35,
        "x": 29,
        "y": 73.5
      },
      "questID": 201
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 33,
        "areaID": 35,
        "x": 29,
        "y": 73.5
      },
      "questID": 198
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 33,
        "areaID": 35,
        "x": 29,
        "y": 73.5
      },
      "description": "Open [zone:35] flight path"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 33,
        "areaID": 35,
        "x": 29,
        "y": 73.5
      },
      "description": "Ride boat to [zone:392]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 17,
        "areaID": 392,
        "x": 62.5,
        "y": 37
      },
      "questID": 1039
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 17,
        "areaID": 392,
        "x": 62.5,
        "y": 37
      },
      "questID": 1040
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 17,
        "areaID": 392,
        "x": 62.5,
        "y": 37
      },
      "description": "Open [zone:392] flight path"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 17,
        "areaID": 1157,
        "x": 44.5,
        "y": 90.5
      },
      "description": "Go to [zone:400]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 400,
        "areaID": 485,
        "x": 30.5,
        "y": 24.5
      },
      "questID": 1100,
      "description": "Collect [item:5791] from [object:19861] and use it"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 400,
        "areaID": 489,
        "x": 8,
        "y": 18
      },
      "description": "Open [zone:489] flight path"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 400,
        "areaID": 489,
        "x": 8,
        "y": 18
      },
      "questID": 1100
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 400,
        "areaID": 2240,
        "x": 80.5,
        "y": 77.5
      },
      "questID": 1179
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 400,
        "areaID": 2240,
        "x": 80.5,
        "y": 77.5
      },
      "questID": 1105
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 400,
        "areaID": 2240,
        "x": 80.5,
        "y": 77.5
      },
      "questID": 1104
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 400,
        "areaID": 2240,
        "x": 80.5,
        "y": 77.5
      },
      "questID": 5762
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 400,
        "areaID": 2240,
        "x": 80.5,
        "y": 77.5
      },
      "questID": 1110
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 400,
        "areaID": 2240,
        "x": 80.5,
        "y": 77.5
      },
      "questID": 1111
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 400,
        "areaID": 2240,
        "x": 80.5,
        "y": 77.5
      },
      "questID": 1176
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 400,
        "areaID": 2240,
        "x": 80.5,
        "y": 77.5
      },
      "questID": 1175
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 400,
        "areaID": 2240,
        "x": 80.5,
        "y": 77.5
      },
      "questID": 1110,
      "description": "Collect 30 [item:5798] from [object:19868], [object:19869], [object:19870], [object:19871], [object:19872] and [object:19873]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 400,
        "areaID": 2240,
        "x": 79,
        "y": 85
      },
      "questID": 1175,
      "description": "Kill 10 [npc:4151] and 6 [npc:4150]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 400,
        "areaID": 439,
        "x": 87.5,
        "y": 66.5
      },
      "questID": 1176,
      "description": "Loot 10 [item:5848] from [npc:4154]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 400,
        "areaID": 2240,
        "x": 83,
        "y": 55.5
      },
      "questID": 1105,
      "description": "Loot 9 [item:5795] from [npc:4143]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 400,
        "areaID": 439,
        "x": 75.5,
        "y": 55
      },
      "questID": 1175,
      "description": "Kill 10 [npc:4147]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 400,
        "areaID": 439,
        "x": 75.5,
        "y": 55
      },
      "description": "35"
    }
  ]
}`,"/guide/enGB/alliance/draenei_1-13.guide":`{
  "name": "WotLK Guide - Alliance - Draenei - (1 - 13)",
  "locale": "enGB",
  "faction": "Alliance",
  "race": "Draenei",
  "startHearthstone": 3527,
  "next": "WotLK Guide - Alliance - (13 - 20)",
  "stepList": [
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3526,
        "x": 84,
        "y": 43
      },
      "questID": 9279
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9279
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9280
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 10302
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 10302,
      "description": "Kill 8 [npc:16516]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9280,
      "description": "Loot 8 [item:22889] from [npc:16520]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "description": "2"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 10302
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9293
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9799
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9280
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9409
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9409
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9283
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9290,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Mage"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9290,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Mage"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9289,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9289,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9421,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9421,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9291,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Priest"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9291,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Priest"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9287,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9287,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9288,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9288,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9305
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9303
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9283,
      "description": "Use [spell:28880] on [npc:16483]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9283
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "description": "3"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9293,
      "description": "Loot 10 [item:22934] from [npc:16517]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9799,
      "description": "Collect 3 [item:24416] from [object:182127]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9293
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9294
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9799
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3528,
        "x": 77.5,
        "y": 58.5
      },
      "questID": 9294,
      "description": "Click the [object:181433]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3559,
        "x": 83.5,
        "y": 62.5
      },
      "questID": 9303,
      "description": "Use [item:22962] on 6 [npc:16518]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3559,
        "x": 83.5,
        "y": 62.5
      },
      "questID": 9305,
      "description": "Collect 4 [item:22978] from [object:181283]"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3559,
        "x": 83.5,
        "y": 62.5
      },
      "description": "Hearth to [zone:3526]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9294
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "description": "4"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9449,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3561,
        "x": 72,
        "y": 39.5
      },
      "questID": 9449,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3561,
        "x": 72,
        "y": 39.5
      },
      "questID": 9450,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3561,
        "x": 72,
        "y": 39.5
      },
      "questID": 9450,
      "description": "Kill 4 [npc:17179]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3561,
        "x": 72,
        "y": 39.5
      },
      "questID": 9450,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3561,
        "x": 72,
        "y": 39.5
      },
      "questID": 9451,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9451,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9305
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9303
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9309
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3530,
        "x": 70,
        "y": 63.5
      },
      "questID": 9309
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3530,
        "x": 70,
        "y": 63.5
      },
      "questID": 10303
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3530,
        "x": 70,
        "y": 63.5
      },
      "questID": 10303,
      "description": "Kill 10 [npc:16521]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3530,
        "x": 70,
        "y": 63.5
      },
      "questID": 10303
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3530,
        "x": 70,
        "y": 63.5
      },
      "questID": 9311
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3530,
        "x": 70,
        "y": 63.5
      },
      "questID": 9311,
      "description": "Kill [npc:16522] and loot [item:24414]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3530,
        "x": 70,
        "y": 63.5
      },
      "questID": 9798,
      "description": "Use [item:24414]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9311
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9798
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9312
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9312
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "questID": 9313
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3527,
        "x": 79.5,
        "y": 48
      },
      "description": "5"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3857,
        "x": 62.5,
        "y": 53.5
      },
      "questID": 9314
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3857,
        "x": 62.5,
        "y": 53.5
      },
      "questID": 9452
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3857,
        "x": 62.5,
        "y": 53.5
      },
      "questID": 9452,
      "description": "Use [item:23654] to collect 10 [item:23614] from [object:181616] and loot them from [npc:17102]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3857,
        "x": 62.5,
        "y": 53.5
      },
      "questID": 9452
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3857,
        "x": 62.5,
        "y": 53.5
      },
      "questID": 9453
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9453
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9454
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9463
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9313
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9314
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "description": "Set Hearthstone to [zone:3576]",
      "setHearthstone": 3576
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "x": 50.5,
        "y": 56.5
      },
      "questID": 9454,
      "description": "Loot 6 [item:23676] from [npc:17200]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "x": 50.5,
        "y": 56.5
      },
      "questID": 9463,
      "description": "Loot 8 [item:23685] from [npc:17196]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 3524,
        "x": 50.5,
        "y": 56.5
      },
      "description": "6"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9506
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9512
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9512,
      "description": "Loot 6 [item:23757] from [npc:17216]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9512
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9513
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9523
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "x": 60,
        "y": 68
      },
      "questID": 9506,
      "description": "Collect [item:23739] from [object:181674] and [item:23738] from [object:181675]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9506
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9530
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "description": "7"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "x": 46,
        "y": 65.5
      },
      "questID": 9530,
      "description": "Collect 1 [item:23790] from [object:181696] and 5 [item:23791] from [object:181697]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9530
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9531
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3570,
        "x": 32.5,
        "y": 77.5
      },
      "questID": 9523,
      "description": "Collect 8 [item:23779] from [object:181683]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3570,
        "x": 32.5,
        "y": 77.5
      },
      "questID": 9513,
      "description": "Kill 5 [npc:17194], 5 [npc:17193] and 5 [npc:17195] and loot [item:23759]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3570,
        "x": 32.5,
        "y": 77.5
      },
      "questID": 9514,
      "description": "Use [item:23759]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3579,
        "x": 18.5,
        "y": 84.5
      },
      "questID": 9531,
      "description": "Use [item:23792] near [object:181694]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3579,
        "x": 18.5,
        "y": 84.5
      },
      "description": "Hearth to [zone:3576]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9463
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9473
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9454
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 10324
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3916,
        "x": 51.5,
        "y": 43.5
      },
      "questID": 10324,
      "description": "Loot 6 [item:23677] from [npc:17201]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3916,
        "x": 51.5,
        "y": 43.5
      },
      "questID": 9455,
      "description": "Loot [item:23678] from [npc:17202] and use it"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3916,
        "x": 50.5,
        "y": 37
      },
      "questID": 9473,
      "description": "Collect 5 [item:23692] from [object:181644]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9455
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9456
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9473
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "description": "8"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 10428
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 10324
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "x": 45.5,
        "y": 44
      },
      "questID": 9456,
      "description": "Kill 8 [npc:17202]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9456
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9531
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9537
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9513
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9514
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9515
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9523
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9537,
      "description": "Loot [item:23899] from [npc:17243]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9537
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9602
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9602
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "description": "9"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9538
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9538,
      "description": "Use [item:23818]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9538
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9539,
      "description": "Follow ghost furbolg"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3916,
        "x": 55,
        "y": 41.5
      },
      "questID": 9539
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3916,
        "x": 55,
        "y": 41.5
      },
      "questID": 9540,
      "description": "Wait until the ghost furbolg gives you wings"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "x": 64.5,
        "y": 40
      },
      "questID": 9540
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "x": 64.5,
        "y": 40
      },
      "questID": 9541,
      "description": "Wait until the ghost furbolg gives you the swimming speed buff"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "x": 63,
        "y": 68
      },
      "questID": 9541
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "x": 63,
        "y": 68
      },
      "questID": 9542,
      "description": "Follow the ghost furbolg and wait until it turns you into a ghost panther"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3571,
        "x": 26.5,
        "y": 65.5
      },
      "questID": 9542
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3571,
        "x": 26.5,
        "y": 65.5
      },
      "questID": 9544
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3571,
        "x": 26.5,
        "y": 65.5
      },
      "questID": 9544,
      "description": "Loot 8 [item:23801] from [npc:17185], [npc:17184] and [npc:17183] and use them to free 8 [npc:17375]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "x": 27,
        "y": 76.5
      },
      "questID": 9515,
      "description": "Kill [npc:17298]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3639,
        "x": 14,
        "y": 92.5
      },
      "questID": 10428
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3639,
        "x": 14,
        "y": 92.5
      },
      "questID": 9527
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3639,
        "x": 14,
        "y": 92.5
      },
      "questID": 9527,
      "description": "Loot [item:23789] from [npc:17188], [npc:17187] and [npc:17186]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3639,
        "x": 14,
        "y": 92.5
      },
      "questID": 9527
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3639,
        "x": 14,
        "y": 92.5
      },
      "description": "Hearth to [zone:3576]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9544
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9559
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "questID": 9515
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3573,
        "x": 46.5,
        "y": 72
      },
      "description": "10"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9582,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "x": 54,
        "y": 10
      },
      "questID": 9582,
      "description": "Click [object:181849] and then kill [npc:17556]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9582,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 10350,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3557,
        "x": 34,
        "y": 45.5
      },
      "description": "Go to [zone:3557]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3524,
        "x": 55.5,
        "y": 82
      },
      "questID": 10350,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3557,
        "x": 75.5,
        "y": 54.5
      },
      "description": "Go to [zone:3524]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3557,
        "x": 34,
        "y": 45.5
      },
      "description": "Go to [zone:3557]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3581,
        "x": 32.5,
        "y": 24
      },
      "questID": 9462,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3557,
        "x": 75.5,
        "y": 54.5
      },
      "description": "Go to [zone:3524]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9462,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9464,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3564,
        "x": 59.5,
        "y": 18
      },
      "questID": 9464,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3564,
        "x": 59.5,
        "y": 18
      },
      "questID": 9465,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3572,
        "x": 45.5,
        "y": 19.5
      },
      "questID": 9465,
      "description": "Loot [item:23682] from [npc:17189]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3564,
        "x": 59.5,
        "y": 18
      },
      "questID": 9465,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3564,
        "x": 59.5,
        "y": 18
      },
      "questID": 9467,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3566,
        "x": 11.5,
        "y": 82.5
      },
      "questID": 9467,
      "description": "Use [item:24336], click [object:181672] then loot [item:23688] from [npc:17206]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3566,
        "x": 11.5,
        "y": 82.5
      },
      "description": "Use [item:24335] to return to [npc:17205]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3564,
        "x": 59.5,
        "y": 18
      },
      "questID": 9467,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3564,
        "x": 59.5,
        "y": 18
      },
      "questID": 9468,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9468,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9461,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3557,
        "x": 34,
        "y": 45.5
      },
      "description": "Go to [zone:3557]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3580,
        "x": 33,
        "y": 54.5
      },
      "questID": 9461,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3580,
        "x": 33,
        "y": 54.5
      },
      "questID": 9555,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3581,
        "x": 32.5,
        "y": 24
      },
      "questID": 9555,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3557,
        "x": 75.5,
        "y": 54.5
      },
      "description": "Go to [zone:3524]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Shaman"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9757,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3574,
        "x": 22,
        "y": 53.5
      },
      "questID": 9757,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3574,
        "x": 22,
        "y": 53.5
      },
      "questID": 9591,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "x": 23,
        "y": 75
      },
      "questID": 9591,
      "description": "Use [item:23896] on [npc:17217]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3574,
        "x": 22,
        "y": 53.5
      },
      "questID": 9591,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3574,
        "x": 22,
        "y": 53.5
      },
      "questID": 9592,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "x": 35,
        "y": 35
      },
      "questID": 9592,
      "description": "Use [item:23897] on [npc:17374]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3574,
        "x": 22,
        "y": 53.5
      },
      "questID": 9592,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3574,
        "x": 22,
        "y": 53.5
      },
      "questID": 9593,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "x": 36.5,
        "y": 41
      },
      "questID": 9593,
      "description": "Use [item:23898] on [npc:17203]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3574,
        "x": 22,
        "y": 53.5
      },
      "questID": 9593,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3574,
        "x": 22,
        "y": 53.5
      },
      "questID": 9675,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3557,
        "x": 34,
        "y": 45.5
      },
      "description": "Go to [zone:3557]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3524,
        "x": 44,
        "y": 86.5
      },
      "questID": 9675,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3557,
        "x": 75.5,
        "y": 54.5
      },
      "description": "Go to [zone:3524]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 9623
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3572,
        "x": 45.5,
        "y": 19.5
      },
      "questID": 9559
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3572,
        "x": 45.5,
        "y": 19.5
      },
      "questID": 9562
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3575,
        "x": 34,
        "y": 25.5
      },
      "questID": 9562,
      "description": "Loot 5 [item:23849] from [npc:17192], [npc:17190], [npc:17191] or collect it from [object:181757]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3575,
        "x": 34,
        "y": 25.5
      },
      "questID": 9564,
      "description": "Loot [item:23850] from [npc:17475] and use it"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3572,
        "x": 45.5,
        "y": 19.5
      },
      "questID": 9562
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3572,
        "x": 45.5,
        "y": 19.5
      },
      "questID": 9564
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3572,
        "x": 45.5,
        "y": 19.5
      },
      "questID": 9565
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3572,
        "x": 45.5,
        "y": 19.5
      },
      "questID": 9573
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3572,
        "x": 45.5,
        "y": 19.5
      },
      "questID": 9565,
      "description": "Click the [object:181748]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3572,
        "x": 45.5,
        "y": 19.5
      },
      "questID": 9566
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3572,
        "x": 45.5,
        "y": 19.5
      },
      "questID": 9573,
      "description": "Kill 9 [npc:17189] and [npc:17448]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3572,
        "x": 45.5,
        "y": 19.5
      },
      "questID": 9566
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3572,
        "x": 45.5,
        "y": 19.5
      },
      "questID": 9573
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3572,
        "x": 45.5,
        "y": 19.5
      },
      "questID": 9570
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3572,
        "x": 45.5,
        "y": 19.5
      },
      "questID": 9570,
      "description": "Loot [item:23860] from [npc:17447]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3572,
        "x": 45.5,
        "y": 19.5
      },
      "questID": 9570
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3572,
        "x": 45.5,
        "y": 19.5
      },
      "questID": 9571
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3572,
        "x": 45.5,
        "y": 19.5
      },
      "questID": 9571
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3572,
        "x": 45.5,
        "y": 19.5
      },
      "description": "Hearth to [zone:3576]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3557,
        "x": 34,
        "y": 45.5
      },
      "questID": 9623
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3557,
        "x": 34,
        "y": 45.5
      },
      "description": "11"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3574,
        "x": 22,
        "y": 53.5
      },
      "description": "Ride boat to [zone:442]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Open [zone:442] flight path"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 3524
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 983
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Set Hearthstone to [zone:442]",
      "setHearthstone": 442
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 984
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 954
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 453,
        "x": 36.5,
        "y": 49.5
      },
      "questID": 983,
      "description": "Loot 6 [item:5385] from [npc:2231] and [npc:2234]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 453,
        "x": 36.5,
        "y": 49.5
      },
      "questID": 3524,
      "description": "Collect [item:12242] from [object:175207]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 983
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 1001
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 3524
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4681
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 35,
        "y": 43
      },
      "questID": 1001,
      "description": "Loot 3 [item:5412] from [npc:2185]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 453,
        "x": 32,
        "y": 46.5
      },
      "questID": 4681,
      "description": "Collect [item:12289] from [object:176189]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 39.5,
        "y": 53
      },
      "questID": 984,
      "description": "Explore (39.6, 52.9)"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 984
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4761
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4681
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4761
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 954
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 955
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 955,
      "description": "Loot 8 [item:5336] from [npc:2190] and [npc:2189]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "description": "12"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 955
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 452,
        "x": 42,
        "y": 28.5
      },
      "questID": 1001
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 148,
        "areaID": 452,
        "x": 42,
        "y": 28.5
      },
      "description": "Hearth to [zone:442]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Ride boat to [zone:3524]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3576,
        "x": 49,
        "y": 51
      },
      "questID": 10366,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3557,
        "x": 34,
        "y": 45.5
      },
      "description": "Go to [zone:3557]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3524,
        "x": 38,
        "y": 82
      },
      "questID": 10366,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3524,
        "x": 38,
        "y": 82
      },
      "questID": 9598,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3524,
        "x": 38,
        "y": 82
      },
      "questID": 9598,
      "description": "Use [item:23926]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3524,
        "x": 38,
        "y": 82
      },
      "questID": 9598,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3524,
        "x": 38,
        "y": 82
      },
      "questID": 9600,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3557,
        "x": 75.5,
        "y": 54.5
      },
      "description": "Go to [zone:3524]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3915,
        "x": 42,
        "y": 4
      },
      "description": "Go to [zone:3525]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 3525,
        "areaID": 3600,
        "x": 65.5,
        "y": 77.5
      },
      "questID": 9600,
      "description": "Use [item:6866] on [npc:17542]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3525,
        "areaID": 3583,
        "x": 65.5,
        "y": 94
      },
      "description": "Go to [zone:3524]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3557,
        "x": 34,
        "y": 45.5
      },
      "description": "Go to [zone:3557]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 3557,
        "areaID": 3524,
        "x": 38,
        "y": 82
      },
      "questID": 9600,
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3557,
        "x": 75.5,
        "y": 54.5
      },
      "description": "Go to [zone:3524]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 3524,
        "areaID": 3574,
        "x": 22,
        "y": 53.5
      },
      "description": "Ride boat to [zone:442]",
      "onlyFor": [
        {
          "race": "Draenei",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Ride boat to [zone:1519]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 1519,
        "x": 69.5,
        "y": 74
      },
      "description": "Open [zone:1519] flight path"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "x": 67,
        "y": 33.5
      },
      "description": "Ride tram to [zone:1537]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 1537,
        "x": 55.5,
        "y": 47.5
      },
      "description": "Open [zone:1537] flight path"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 809,
        "x": 14.3,
        "y": 86.5
      },
      "description": "Go to [zone:1]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 433
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 432
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 432,
      "description": "Kill 6 [npc:1115]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 433,
      "description": "Kill 10 [npc:1117]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 433
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 432
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1,
        "areaID": 806,
        "x": 86.5,
        "y": 51
      },
      "description": "Go to [zone:38]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "description": "Open [zone:144] flight path"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 416
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 1339
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "description": "Set Hearthstone to [zone:144]",
      "setHearthstone": 144
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 418
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "x": 36.5,
        "y": 39
      },
      "questID": 418,
      "description": "Loot 3 [item:3172] from [npc:1190], 3 [item:3173] from [npc:1186] and 3 [item:3174] from [npc:1195]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "x": 24.5,
        "y": 33.5
      },
      "questID": 416,
      "description": "Loot 12 [item:3110] from [npc:1173], [npc:1176], [npc:1202] and [npc:1172]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 925,
        "x": 24,
        "y": 18
      },
      "questID": 1339
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 925,
        "x": 24,
        "y": 18
      },
      "questID": 1338
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 38,
        "areaID": 925,
        "x": 24,
        "y": 18
      },
      "description": "Hearth to [zone:144]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 418
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 416
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 224
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 267
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 923,
        "x": 32,
        "y": 71
      },
      "questID": 224,
      "description": "Kill 10 [npc:1161] and 10 [npc:1162]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 923,
        "x": 32,
        "y": 71
      },
      "questID": 267,
      "description": "Loot 8 [item:2536] from [npc:1161] and [npc:1162]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 224
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 267
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "description": "13"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "description": "Fly to [zone:1519]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 63.5,
        "y": 37
      },
      "questID": 1338
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 12,
        "x": 75,
        "y": 94.5
      },
      "description": "Go to [zone:12]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 109
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 12,
        "areaID": 40,
        "x": 20,
        "y": 81
      },
      "description": "Go to [zone:40]"
    }
  ]
}`,"/guide/enGB/alliance/dwarf_1-13.guide":`{
  "name": "WotLK Guide - Alliance - Dwarf - (1 - 13)",
  "locale": "enGB",
  "faction": "Alliance",
  "race": "Dwarf",
  "startHearthstone": 77,
  "next": "WotLK Guide - Alliance - (13 - 20)",
  "stepList": [
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 179
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 179,
      "description": "Loot 8 [item:750] from [npc:705]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "description": "2"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 179
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 233
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 3106,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 3109,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Rogue"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 3110,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Priest"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 3107,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 3108,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 170
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 170,
      "description": "Kill 6 [npc:707] and 6 [npc:724]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 170
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "description": "3"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 3361
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 3106,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 3109,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Rogue"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 3110,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Priest"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 3107,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 3108,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 233
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 234
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 183
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 24,
        "y": 70.5
      },
      "questID": 183,
      "description": "Kill 12 [npc:708]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 24,
        "y": 70.5
      },
      "questID": 183
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 25,
        "y": 75.5
      },
      "questID": 234
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 25,
        "y": 75.5
      },
      "questID": 182
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 27,
        "y": 80
      },
      "questID": 3361,
      "description": "Collect [item:16314] from [object:178085]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 27,
        "y": 80
      },
      "questID": 182,
      "description": "Kill 10 [npc:706]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 27,
        "y": 80
      },
      "description": "4"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 25,
        "y": 75.5
      },
      "questID": 182
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 25,
        "y": 75.5
      },
      "questID": 218
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 27,
        "y": 80
      },
      "questID": 218,
      "description": "Loot [item:2004] from [npc:808]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 23,
        "y": 80
      },
      "questID": 3361,
      "description": "Collect [item:16313] from [object:178084]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 21,
        "y": 76
      },
      "questID": 3361,
      "description": "Collect [item:10438] from [object:148499]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 25,
        "y": 75.5
      },
      "questID": 218
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 25,
        "y": 75.5
      },
      "questID": 282
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 25,
        "y": 75.5
      },
      "questID": 3364
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 3361
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 3364
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 3365
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "description": "5"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 25,
        "y": 75.5
      },
      "questID": 3365
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 800,
        "x": 34,
        "y": 71
      },
      "questID": 282
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 800,
        "x": 34,
        "y": 71
      },
      "questID": 420
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 800,
        "x": 34,
        "y": 71
      },
      "questID": 2160
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.3,
        "y": 52.1
      },
      "questID": 420
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.3,
        "y": 52.1
      },
      "questID": 384
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.3,
        "y": 52.1
      },
      "questID": 2160
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 384,
      "description": "Buy 1 [item:2894]"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "description": "Set Hearthstone to [zone:131]",
      "setHearthstone": 131
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 5541
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 400
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 400
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 313
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 317
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 317,
      "description": "Loot 4 [item:769] from [npc:1125] and [npc:1126] and 2 [item:6952] from [npc:1128] and [npc:1196]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 384,
      "description": "Loot 6 [item:2886] from [npc:1125] and [npc:1126]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "description": "6"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 136,
        "x": 43.5,
        "y": 55.5
      },
      "questID": 5541,
      "description": "Collect [item:13850] from [object:176785]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 136,
        "x": 43.5,
        "y": 55.5
      },
      "questID": 313,
      "description": "Loot 8 [item:2671] from [npc:1134] and [npc:1135]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "x": 41,
        "y": 65
      },
      "questID": 5541
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 384
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 313
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 317
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 318
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "description": "7"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 318
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 319
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 315
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 310
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 319,
      "description": "Kill 6 [npc:1196], 8 [npc:1127] and 8 [npc:1201]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 319
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 320
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 802,
        "x": 38,
        "y": 43
      },
      "questID": 315,
      "description": "Loot 6 [item:2676] from [npc:1397] and/or collect it from [object:276]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 320
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "description": "8"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 310,
      "description": "Buy 1 [item:2686], give [npc:1373] [item:2686] and then click [object:270]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 310
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 311
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 287
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 412
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 315
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 413
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 311
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 135,
        "x": 25,
        "y": 51
      },
      "questID": 287,
      "description": "Kill 5 [npc:1123] and explore (21.2, 52.3)"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 133,
        "x": 26,
        "y": 43
      },
      "questID": 412,
      "description": "Loot 8 [item:3083] and 8 [item:3084] from [npc:1211]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1,
        "areaID": 133,
        "x": 26,
        "y": 43
      },
      "description": "9"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 1,
        "areaID": 133,
        "x": 26,
        "y": 43
      },
      "description": "Hearth to [zone:131]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 412
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 287
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 291
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 803,
        "x": 63,
        "y": 50
      },
      "questID": 314
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 803,
        "x": 63,
        "y": 50
      },
      "questID": 314,
      "description": "Loot [item:3627] from [npc:1388]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 803,
        "x": 63,
        "y": 50
      },
      "questID": 314
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 433
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 432
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 432,
      "description": "Kill 6 [npc:1115]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 433,
      "description": "Kill 10 [npc:1117]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 433
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 432
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "description": "10"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "description": "Hearth to [zone:131]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 1679,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1,
        "areaID": 809,
        "x": 53.5,
        "y": 35
      },
      "description": "Go to [zone:1537]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 70.5,
        "y": 90.5
      },
      "questID": 1679,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 70.5,
        "y": 90.5
      },
      "questID": 1678,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 809,
        "x": 14.3,
        "y": 86.5
      },
      "description": "Go to [zone:1]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 135,
        "x": 28,
        "y": 58
      },
      "questID": 1678,
      "description": "Loot [item:6799] from [npc:6113]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1,
        "areaID": 809,
        "x": 53.5,
        "y": 35
      },
      "description": "Go to [zone:1537]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 70.5,
        "y": 90.5
      },
      "questID": 1678,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 809,
        "x": 14.3,
        "y": 86.5
      },
      "description": "Go to [zone:1]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 6064,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 48,
        "y": 56.5
      },
      "questID": 6064,
      "description": "Use [item:15911] on [npc:1126]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 6064,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 6084,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 48,
        "y": 56.5
      },
      "questID": 6084,
      "description": "Use [item:15913] on [npc:1201]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 6084,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 6085,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "x": 49,
        "y": 62
      },
      "questID": 6085,
      "description": "Use [item:15908] on [npc:1196]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 6085,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 6086,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1,
        "areaID": 809,
        "x": 53.5,
        "y": 35
      },
      "description": "Go to [zone:1537]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 70.5,
        "y": 90.5
      },
      "questID": 6086,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 809,
        "x": 14.3,
        "y": 86.5
      },
      "description": "Go to [zone:1]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 806,
        "x": 86.5,
        "y": 51
      },
      "questID": 413
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 806,
        "x": 86.5,
        "y": 51
      },
      "questID": 414
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1,
        "areaID": 806,
        "x": 86.5,
        "y": 51
      },
      "description": "Go to [zone:38]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "description": "Open [zone:144] flight path"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 414
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 416
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 1339
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "description": "Set Hearthstone to [zone:144]",
      "setHearthstone": 144
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 418
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "x": 36.5,
        "y": 39
      },
      "questID": 418,
      "description": "Loot 3 [item:3172] from [npc:1190], 3 [item:3173] from [npc:1186] and 3 [item:3174] from [npc:1195]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "x": 24.5,
        "y": 33.5
      },
      "questID": 416,
      "description": "Loot 12 [item:3110] from [npc:1173], [npc:1176], [npc:1202] and [npc:1172]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 38,
        "x": 24.5,
        "y": 33.5
      },
      "description": "11"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 925,
        "x": 24,
        "y": 18
      },
      "questID": 1339
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 925,
        "x": 24,
        "y": 18
      },
      "questID": 1338
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 38,
        "areaID": 925,
        "x": 24,
        "y": 18
      },
      "description": "Hearth to [zone:144]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 418
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 416
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 224
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 267
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 923,
        "x": 32,
        "y": 71
      },
      "questID": 224,
      "description": "Kill 10 [npc:1161] and 10 [npc:1162]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 923,
        "x": 32,
        "y": 71
      },
      "questID": 267,
      "description": "Loot 8 [item:2536] from [npc:1161] and [npc:1162]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 224
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 267
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "description": "Fly to [zone:1537]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 39.5,
        "y": 57.5
      },
      "questID": 291
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1537,
        "x": 81,
        "y": 52
      },
      "description": "Ride tram to [zone:1519]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 63.5,
        "y": 37
      },
      "questID": 1338
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 1519,
        "x": 69.5,
        "y": 74
      },
      "description": "Open [zone:1519] flight path"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 4411,
        "x": 22.5,
        "y": 56
      },
      "description": "Ride boat to [zone:442]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 983
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Set Hearthstone to [zone:442]",
      "setHearthstone": 442
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Open [zone:442] flight path"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 3524
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 984
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 954
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 453,
        "x": 36.5,
        "y": 49.5
      },
      "questID": 983,
      "description": "Loot 6 [item:5385] from [npc:2231] and [npc:2234]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 453,
        "x": 36.5,
        "y": 49.5
      },
      "questID": 3524,
      "description": "Collect [item:12242] from [object:175207]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 148,
        "areaID": 453,
        "x": 36.5,
        "y": 49.5
      },
      "description": "12"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Ride boat to [zone:1519]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 51.5,
        "y": 48
      },
      "questID": 3000,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "x": 67,
        "y": 33.5
      },
      "description": "Ride tram to [zone:1537]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 27.5,
        "y": 12
      },
      "questID": 3000,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 27.5,
        "y": 12
      },
      "questID": 1646,
      "description": "Use [item:6775]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 27.5,
        "y": 12
      },
      "questID": 1646,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 27.5,
        "y": 12
      },
      "questID": 1647,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 32,
        "y": 78
      },
      "questID": 1647,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 32,
        "y": 78
      },
      "questID": 1648,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 1537,
        "x": 32,
        "y": 78
      },
      "description": "Make sure you have 10 [item:2589] (you can buy them on the Auction House)",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 32,
        "y": 78
      },
      "questID": 1648,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 32,
        "y": 78
      },
      "questID": 1778,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 27.5,
        "y": 12
      },
      "questID": 1778,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 27.5,
        "y": 12
      },
      "questID": 1779,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 27.5,
        "y": 12
      },
      "questID": 1779,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 27.5,
        "y": 12
      },
      "questID": 1783,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 809,
        "x": 14.3,
        "y": 86.5
      },
      "description": "Go to [zone:1]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 716,
        "x": 78.5,
        "y": 58
      },
      "questID": 1783,
      "description": "Use [item:6866] on [npc:6177]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 716,
        "x": 78.5,
        "y": 58
      },
      "questID": 1783,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 716,
        "x": 78.5,
        "y": 58
      },
      "questID": 1784,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 716,
        "x": 78.5,
        "y": 58
      },
      "questID": 1784,
      "description": "Loot [item:6847] from [npc:6123]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1,
        "areaID": 809,
        "x": 53.5,
        "y": 35
      },
      "description": "Go to [zone:1537]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 27.5,
        "y": 12
      },
      "questID": 1784,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 27.5,
        "y": 12
      },
      "questID": 1785,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 27.5,
        "y": 12
      },
      "questID": 1785,
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1537,
        "x": 81,
        "y": 52
      },
      "description": "Ride tram to [zone:1519]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 4411,
        "x": 22.5,
        "y": 56
      },
      "description": "Ride boat to [zone:442]",
      "onlyFor": [
        {
          "race": "Dwarf",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 983
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 1001
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 3524
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4681
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 35,
        "y": 43
      },
      "questID": 1001,
      "description": "Loot 3 [item:5412] from [npc:2185]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 453,
        "x": 32,
        "y": 46.5
      },
      "questID": 4681,
      "description": "Collect [item:12289] from [object:176189]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 39.5,
        "y": 53
      },
      "questID": 984,
      "description": "Explore (39.6, 52.9)"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 984
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4761
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4681
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4761
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 954
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 955
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 955,
      "description": "Loot 8 [item:5336] from [npc:2190] and [npc:2189]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 955
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 452,
        "x": 42,
        "y": 28.5
      },
      "questID": 1001
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 148,
        "areaID": 452,
        "x": 42,
        "y": 28.5
      },
      "description": "13"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 148,
        "areaID": 452,
        "x": 42,
        "y": 28.5
      },
      "description": "Hearth to [zone:442]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Ride boat to [zone:1519]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 12,
        "x": 75,
        "y": 94.5
      },
      "description": "Go to [zone:12]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 109
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 12,
        "areaID": 40,
        "x": 20,
        "y": 81
      },
      "description": "Go to [zone:40]"
    }
  ]
}`,"/guide/enGB/alliance/gnome_1-13.guide":`{
  "name": "WotLK Guide - Alliance - Gnome - (1 - 13)",
  "locale": "enGB",
  "faction": "Alliance",
  "race": "Gnome",
  "startHearthstone": 77,
  "next": "WotLK Guide - Alliance - (13 - 20)",
  "stepList": [
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 179
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 179,
      "description": "Loot 8 [item:750] from [npc:705]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "description": "2"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 179
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 233
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 3114,
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Mage"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 3112,
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 3115,
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 3113,
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Rogue"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 170
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 170,
      "description": "Kill 6 [npc:707] and 6 [npc:724]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "questID": 170
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 30,
        "y": 72
      },
      "description": "3"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 3361
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 3114,
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Mage"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 3112,
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 3115,
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 3113,
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Rogue"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 233
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 234
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 183
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 24,
        "y": 70.5
      },
      "questID": 183,
      "description": "Kill 12 [npc:708]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 24,
        "y": 70.5
      },
      "questID": 183
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 25,
        "y": 75.5
      },
      "questID": 234
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 25,
        "y": 75.5
      },
      "questID": 182
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 27,
        "y": 80
      },
      "questID": 3361,
      "description": "Collect [item:16314] from [object:178085]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 27,
        "y": 80
      },
      "questID": 182,
      "description": "Kill 10 [npc:706]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 27,
        "y": 80
      },
      "description": "4"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 25,
        "y": 75.5
      },
      "questID": 182
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 25,
        "y": 75.5
      },
      "questID": 218
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 27,
        "y": 80
      },
      "questID": 218,
      "description": "Loot [item:2004] from [npc:808]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 23,
        "y": 80
      },
      "questID": 3361,
      "description": "Collect [item:16313] from [object:178084]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 21,
        "y": 76
      },
      "questID": 3361,
      "description": "Collect [item:10438] from [object:148499]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 25,
        "y": 75.5
      },
      "questID": 218
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 25,
        "y": 75.5
      },
      "questID": 282
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 25,
        "y": 75.5
      },
      "questID": 3364
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 3361
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 3364
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "questID": 3365
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1,
        "areaID": 77,
        "x": 28.6,
        "y": 68
      },
      "description": "5"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 132,
        "x": 25,
        "y": 75.5
      },
      "questID": 3365
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 800,
        "x": 34,
        "y": 71
      },
      "questID": 282
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 800,
        "x": 34,
        "y": 71
      },
      "questID": 420
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 800,
        "x": 34,
        "y": 71
      },
      "questID": 2160
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.3,
        "y": 52.1
      },
      "questID": 420
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.3,
        "y": 52.1
      },
      "questID": 384
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.3,
        "y": 52.1
      },
      "questID": 2160
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 384,
      "description": "Buy 1 [item:2894]"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "description": "Set Hearthstone to [zone:131]",
      "setHearthstone": 131
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 5541
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 400
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 400
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 313
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 317
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 317,
      "description": "Loot 4 [item:769] from [npc:1125] and [npc:1126] and 2 [item:6952] from [npc:1128] and [npc:1196]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 384,
      "description": "Loot 6 [item:2886] from [npc:1125] and [npc:1126]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "description": "6"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 136,
        "x": 43.5,
        "y": 55.5
      },
      "questID": 5541,
      "description": "Collect [item:13850] from [object:176785]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 136,
        "x": 43.5,
        "y": 55.5
      },
      "questID": 313,
      "description": "Loot 8 [item:2671] from [npc:1134] and [npc:1135]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "x": 41,
        "y": 65
      },
      "questID": 5541
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 384
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 313
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 317
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 318
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "description": "7"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 318
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 319
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 315
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 310
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 319,
      "description": "Kill 6 [npc:1196], 8 [npc:1127] and 8 [npc:1201]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 319
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 320
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 802,
        "x": 38,
        "y": 43
      },
      "questID": 315,
      "description": "Loot 6 [item:2676] from [npc:1397] and/or collect it from [object:276]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "questID": 320
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1,
        "areaID": 189,
        "x": 50.5,
        "y": 50
      },
      "description": "8"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 310,
      "description": "Buy 1 [item:2686], give [npc:1373] [item:2686] and then click [object:270]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 310
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 311
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 287
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 412
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 315
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 413
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 137,
        "x": 30,
        "y": 45.5
      },
      "questID": 311
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 135,
        "x": 25,
        "y": 51
      },
      "questID": 287,
      "description": "Kill 5 [npc:1123] and explore (21.2, 52.3)"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 133,
        "x": 26,
        "y": 43
      },
      "questID": 412,
      "description": "Loot 8 [item:3083] and 8 [item:3084] from [npc:1211]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1,
        "areaID": 133,
        "x": 26,
        "y": 43
      },
      "description": "9"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 1,
        "areaID": 133,
        "x": 26,
        "y": 43
      },
      "description": "Hearth to [zone:131]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 412
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 287
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 291
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 803,
        "x": 63,
        "y": 50
      },
      "questID": 314
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 803,
        "x": 63,
        "y": 50
      },
      "questID": 314,
      "description": "Loot [item:3627] from [npc:1388]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 803,
        "x": 63,
        "y": 50
      },
      "questID": 314
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 433
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 432
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 432,
      "description": "Kill 6 [npc:1115]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 433,
      "description": "Kill 10 [npc:1117]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 433
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 432
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "description": "10"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 131,
        "x": 46.5,
        "y": 52
      },
      "questID": 1679,
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1,
        "areaID": 809,
        "x": 53.5,
        "y": 35
      },
      "description": "Go to [zone:1537]",
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 70.5,
        "y": 90.5
      },
      "questID": 1679,
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 70.5,
        "y": 90.5
      },
      "questID": 1678,
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 809,
        "x": 14.3,
        "y": 86.5
      },
      "description": "Go to [zone:1]",
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 135,
        "x": 28,
        "y": 58
      },
      "questID": 1678,
      "description": "Loot [item:6799] from [npc:6113]",
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1,
        "areaID": 809,
        "x": 53.5,
        "y": 35
      },
      "description": "Go to [zone:1537]",
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 70.5,
        "y": 90.5
      },
      "questID": 1678,
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 809,
        "x": 14.3,
        "y": 86.5
      },
      "description": "Go to [zone:1]",
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 806,
        "x": 86.5,
        "y": 51
      },
      "questID": 413
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 806,
        "x": 86.5,
        "y": 51
      },
      "questID": 414
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1,
        "areaID": 806,
        "x": 86.5,
        "y": 51
      },
      "description": "Go to [zone:38]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "description": "Open [zone:144] flight path"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "description": "Fly to [zone:1537]",
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 47.5,
        "y": 9.5
      },
      "questID": 1715,
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1537,
        "x": 81,
        "y": 52
      },
      "description": "Ride tram to [zone:1519]",
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 40,
        "y": 85
      },
      "questID": 1715,
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 40,
        "y": 85
      },
      "questID": 1688,
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 12,
        "x": 75,
        "y": 94.5
      },
      "description": "Go to [zone:12]",
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 62,
        "x": 69.5,
        "y": 79
      },
      "questID": 1688,
      "description": "Loot [item:6810] from [npc:881]",
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 12,
        "areaID": 1519,
        "x": 32.4,
        "y": 49.9
      },
      "description": "Go to [zone:1519]",
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 40,
        "y": 85
      },
      "questID": 1688,
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 40,
        "y": 85
      },
      "questID": 1689,
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 40,
        "y": 85
      },
      "questID": 1689,
      "description": "Kill [npc:5676] (use [item:6928] downstairs)",
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 40,
        "y": 85
      },
      "questID": 1689,
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "x": 66.8,
        "y": 33.4
      },
      "description": "Ride tram to [zone:1537]",
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 1,
        "x": 55.5,
        "y": 47.5
      },
      "description": "Fly to [zone:144]",
      "onlyFor": [
        {
          "race": "Gnome",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 414
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 416
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 1339
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "description": "Set Hearthstone to [zone:144]",
      "setHearthstone": 144
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 418
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "x": 36.5,
        "y": 39
      },
      "questID": 418,
      "description": "Loot 3 [item:3172] from [npc:1190], 3 [item:3173] from [npc:1186] and 3 [item:3174] from [npc:1195]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "x": 24.5,
        "y": 33.5
      },
      "questID": 416,
      "description": "Loot 12 [item:3110] from [npc:1173], [npc:1176], [npc:1202] and [npc:1172]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 925,
        "x": 24,
        "y": 18
      },
      "questID": 1339
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 925,
        "x": 24,
        "y": 18
      },
      "questID": 1338
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 38,
        "areaID": 925,
        "x": 24,
        "y": 18
      },
      "description": "11"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 38,
        "areaID": 925,
        "x": 24,
        "y": 18
      },
      "description": "Hearth to [zone:144]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 418
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 416
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 224
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 267
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 923,
        "x": 32,
        "y": 71
      },
      "questID": 224,
      "description": "Kill 10 [npc:1161] and 10 [npc:1162]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 923,
        "x": 32,
        "y": 71
      },
      "questID": 267,
      "description": "Loot 8 [item:2536] from [npc:1161] and [npc:1162]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 224
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 267
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "description": "Fly to [zone:1537]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1537,
        "x": 39.5,
        "y": 57.5
      },
      "questID": 291
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1537,
        "x": 81,
        "y": 52
      },
      "description": "Ride tram to [zone:1519]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 63.5,
        "y": 37
      },
      "questID": 1338
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 1519,
        "x": 69.5,
        "y": 74
      },
      "description": "Open [zone:1519] flight path"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 4411,
        "x": 22.5,
        "y": 56
      },
      "description": "Ride boat to [zone:442]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 983
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Set Hearthstone to [zone:442]",
      "setHearthstone": 442
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Open [zone:442] flight path"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 3524
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 984
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 954
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 453,
        "x": 36.5,
        "y": 49.5
      },
      "questID": 983,
      "description": "Loot 6 [item:5385] from [npc:2231] and [npc:2234]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 148,
        "areaID": 453,
        "x": 36.5,
        "y": 49.5
      },
      "description": "12"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 453,
        "x": 36.5,
        "y": 49.5
      },
      "questID": 3524,
      "description": "Collect [item:12242] from [object:175207]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 983
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 1001
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 3524
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4681
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 35,
        "y": 43
      },
      "questID": 1001,
      "description": "Loot 3 [item:5412] from [npc:2185]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 453,
        "x": 32,
        "y": 46.5
      },
      "questID": 4681,
      "description": "Collect [item:12289] from [object:176189]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 39.5,
        "y": 53
      },
      "questID": 984,
      "description": "Explore (39.6, 52.9)"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 984
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4761
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4681
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4761
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 954
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 955
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 955,
      "description": "Loot 8 [item:5336] from [npc:2190] and [npc:2189]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 955
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 452,
        "x": 42,
        "y": 28.5
      },
      "questID": 1001
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 148,
        "areaID": 452,
        "x": 42,
        "y": 28.5
      },
      "description": "13"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 148,
        "areaID": 452,
        "x": 42,
        "y": 28.5
      },
      "description": "Hearth to [zone:442]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Ride boat to [zone:1519]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 12,
        "x": 75,
        "y": 94.5
      },
      "description": "Go to [zone:12]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 109
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 12,
        "areaID": 40,
        "x": 20,
        "y": 81
      },
      "description": "Go to [zone:40]"
    }
  ]
}`,"/guide/enGB/alliance/human_1-13.guide":`{
  "name": "WotLK Guide - Alliance - Human - (1 - 13)",
  "locale": "enGB",
  "faction": "Alliance",
  "race": "Human",
  "startHearthstone": 9,
  "next": "WotLK Guide - Alliance - (13 - 20)",
  "stepList": [
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 783
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 783
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 7
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 5261
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 5261
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 33
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 46.6,
        "y": 36.2
      },
      "questID": 33,
      "description": "Loot 8 [item:50432] from [npc:299]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 46.6,
        "y": 36.2
      },
      "description": "2"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 46.6,
        "y": 36.2
      },
      "questID": 7,
      "description": "Kill 8 [npc:6]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 33
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 7
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 15
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 3104,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Mage"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 3100,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 3105,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 3102,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Rogue"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 3103,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Priest"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 3101,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 3104,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Mage"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 3100,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 3105,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 3102,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Rogue"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 3103,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Priest"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 3101,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 18
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "description": "3"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 50,
        "y": 35.5
      },
      "questID": 15,
      "description": "Kill 10 [npc:257]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 55,
        "y": 43.7
      },
      "questID": 18,
      "description": "Loot 12 [item:752] from [npc:38]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 18
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 3903
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 6
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "description": "4"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 15
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 21
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 3903
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 3904
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 54,
        "y": 48.5
      },
      "questID": 3904,
      "description": "Collect 8 [item:11119] from [object:161557]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 54,
        "y": 48.5
      },
      "questID": 6,
      "description": "Loot [item:182] from [npc:103]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 3904
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 3905
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 6
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 3905
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 47.5,
        "y": 31.5
      },
      "questID": 21,
      "description": "Kill 12 [npc:80]"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 47.5,
        "y": 31.5
      },
      "description": "Hearth to [zone:9]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 21
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "questID": 54
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 49,
        "y": 41
      },
      "description": "5"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 9,
        "x": 46,
        "y": 47
      },
      "questID": 2158
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 54
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 62
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 60
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 2158
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "description": "Set Hearthstone to [zone:87]",
      "setHearthstone": 87
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 47
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 57,
        "x": 38.5,
        "y": 82
      },
      "questID": 47,
      "description": "Loot 10 [item:773] from [npc:475] and [npc:40]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 57,
        "x": 38.5,
        "y": 82
      },
      "questID": 60,
      "description": "Loot 8 [item:772] from [npc:475] and [npc:40]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 57,
        "x": 38.5,
        "y": 82
      },
      "questID": 62,
      "description": "Explore (41.3, 79.1)"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 47
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "description": "6"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 62
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 76
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 60
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 61
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 63,
        "x": 32.8,
        "y": 85.3
      },
      "questID": 85
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 64,
        "x": 41.7,
        "y": 86.7
      },
      "questID": 85
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 64,
        "x": 41.7,
        "y": 86.7
      },
      "questID": 86
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 64,
        "x": 41.7,
        "y": 86.7
      },
      "questID": 86,
      "description": "Loot 4 [item:769] from [npc:113]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 64,
        "x": 41.7,
        "y": 86.7
      },
      "questID": 106
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 63,
        "x": 32.8,
        "y": 85.3
      },
      "questID": 86
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 63,
        "x": 32.8,
        "y": 85.3
      },
      "questID": 84
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 63,
        "x": 32.8,
        "y": 85.3
      },
      "questID": 106
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 63,
        "x": 32.8,
        "y": 85.3
      },
      "questID": 111
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 63,
        "x": 32.8,
        "y": 85.3
      },
      "questID": 111
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 63,
        "x": 32.8,
        "y": 85.3
      },
      "questID": 107
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 63,
        "x": 32.8,
        "y": 85.3
      },
      "questID": 88
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 64,
        "x": 41.7,
        "y": 86.7
      },
      "questID": 84
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 64,
        "x": 41.7,
        "y": 86.7
      },
      "questID": 87
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 57,
        "x": 38.5,
        "y": 82
      },
      "questID": 87,
      "description": "Loot [item:981] from [npc:327]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 12,
        "areaID": 57,
        "x": 38.5,
        "y": 82
      },
      "description": "7"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 40
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 40
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 35
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 107
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 112
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 18,
        "x": 49,
        "y": 65.5
      },
      "questID": 112,
      "description": "Loot 4 [item:1256] from [npc:285] and [npc:735]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 112
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 114
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 64,
        "x": 41.7,
        "y": 86.7
      },
      "questID": 114
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 63,
        "x": 32.8,
        "y": 85.3
      },
      "questID": 87
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "x": 73.5,
        "y": 72.5
      },
      "questID": 35
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "x": 73.5,
        "y": 72.5
      },
      "questID": 37
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "x": 73.5,
        "y": 72.5
      },
      "questID": 52
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 88,
        "x": 81.5,
        "y": 67
      },
      "questID": 83
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 88,
        "x": 81.5,
        "y": 67
      },
      "questID": 5545
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 88,
        "x": 81,
        "y": 59.5
      },
      "questID": 5545,
      "description": "Collect 8 [item:13872] from [object:176793]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 86,
        "x": 72.3,
        "y": 61.8
      },
      "questID": 37,
      "description": "Click the [object:55]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 86,
        "x": 72.3,
        "y": 61.8
      },
      "questID": 45
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 86,
        "x": 79.5,
        "y": 55
      },
      "questID": 45,
      "description": "Click the [object:56]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 86,
        "x": 79.5,
        "y": 55
      },
      "questID": 71
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 12,
        "areaID": 86,
        "x": 79.5,
        "y": 55
      },
      "description": "8"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 88,
        "x": 81.5,
        "y": 67
      },
      "questID": 5545
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "x": 73.5,
        "y": 72.5
      },
      "questID": 71
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "x": 73.5,
        "y": 72.5
      },
      "questID": 39
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 798,
        "x": 80,
        "y": 78
      },
      "questID": 52,
      "description": "Kill 8 [npc:118]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 798,
        "x": 80,
        "y": 78
      },
      "questID": 52,
      "description": "Kill 5 [npc:822]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 62,
        "x": 69.5,
        "y": 79
      },
      "questID": 83,
      "description": "Loot 6 [item:1019] from [npc:116]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 62,
        "x": 69.5,
        "y": 79
      },
      "questID": 88,
      "description": "Loot [item:1006] from [npc:330]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "x": 73.5,
        "y": 72.5
      },
      "questID": 52
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 88,
        "x": 81.5,
        "y": 67
      },
      "questID": 83
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 54,
        "x": 61.7,
        "y": 53.3
      },
      "questID": 76,
      "description": "Explore (60.4, 49.7)"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 12,
        "areaID": 54,
        "x": 61.7,
        "y": 53.3
      },
      "description": "9"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 12,
        "areaID": 54,
        "x": 61.7,
        "y": 53.3
      },
      "description": "Hearth to [zone:87]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 76
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 39
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 239
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 1097
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 63,
        "x": 32.8,
        "y": 85.3
      },
      "questID": 88
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 120,
        "x": 24.7,
        "y": 74.3
      },
      "questID": 239
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 120,
        "x": 24.7,
        "y": 74.3
      },
      "questID": 11
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 60,
        "x": 26,
        "y": 86.5
      },
      "questID": 11,
      "description": "Loot 8 [item:782] from [npc:478] and [npc:97]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 120,
        "x": 24.7,
        "y": 74.3
      },
      "questID": 11
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 12,
        "areaID": 120,
        "x": 24.7,
        "y": 74.3
      },
      "description": "10"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 1685,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 1638,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 12,
        "areaID": 1519,
        "x": 32.4,
        "y": 49.9
      },
      "description": "Go to [zone:1519]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 63,
        "y": 71
      },
      "questID": 61
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 60,
        "y": 34
      },
      "questID": 1097
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 60,
        "y": 34
      },
      "questID": 353
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 77,
        "y": 53.5
      },
      "questID": 1638,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 77,
        "y": 53.5
      },
      "questID": 1639,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 77,
        "y": 53.5
      },
      "questID": 1639,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 77,
        "y": 53.5
      },
      "questID": 1640,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 77,
        "y": 53.5
      },
      "questID": 1640,
      "description": "Beat [npc:6090]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 77,
        "y": 53.5
      },
      "questID": 1640,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 77,
        "y": 53.5
      },
      "questID": 1665,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 77,
        "y": 53.5
      },
      "questID": 1665,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 40,
        "y": 85
      },
      "questID": 1685,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 40,
        "y": 85
      },
      "questID": 1688,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 12,
        "x": 75,
        "y": 94.5
      },
      "description": "Go to [zone:12]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 62,
        "x": 69.5,
        "y": 79
      },
      "questID": 1688,
      "description": "Loot [item:6810] from [npc:881]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 12,
        "areaID": 1519,
        "x": 32.4,
        "y": 49.9
      },
      "description": "Go to [zone:1519]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 40,
        "y": 85
      },
      "questID": 1688,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 40,
        "y": 85
      },
      "questID": 1689,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 40,
        "y": 85
      },
      "questID": 1689,
      "description": "Kill [npc:5676] (use [item:6928] downstairs)",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 40,
        "y": 85
      },
      "questID": 1689,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Warlock"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "x": 66.8,
        "y": 33.4
      },
      "description": "Ride train to [zone:1537]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 1537,
        "x": 55.5,
        "y": 47.5
      },
      "description": "Open [zone:1537] flight path"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 809,
        "x": 14.3,
        "y": 86.5
      },
      "description": "Go to [zone:1]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 433
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 432
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 432,
      "description": "Kill 6 [npc:1115]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 433,
      "description": "Kill 10 [npc:1117]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 433
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 432
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1,
        "areaID": 806,
        "x": 86.5,
        "y": 51
      },
      "description": "Go to [zone:38]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "description": "Open [zone:144] flight path"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 416
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 1339
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "description": "Set Hearthstone to [zone:144]",
      "setHearthstone": 144
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 418
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "x": 36.5,
        "y": 39
      },
      "questID": 418,
      "description": "Loot 3 [item:3172] from [npc:1190], 3 [item:3173] from [npc:1186] and 3 [item:3174] from [npc:1195]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "x": 24.5,
        "y": 33.5
      },
      "questID": 416,
      "description": "Loot 12 [item:3110] from [npc:1173], [npc:1176], [npc:1202] and [npc:1172]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 38,
        "x": 24.5,
        "y": 33.5
      },
      "description": "11"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 925,
        "x": 24,
        "y": 18
      },
      "questID": 353
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 925,
        "x": 24,
        "y": 18
      },
      "questID": 1339
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 925,
        "x": 24,
        "y": 18
      },
      "questID": 1338
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 38,
        "areaID": 925,
        "x": 24,
        "y": 18
      },
      "description": "Hearth to [zone:144]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 418
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 416
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 224
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 267
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 923,
        "x": 32,
        "y": 71
      },
      "questID": 224,
      "description": "Kill 10 [npc:1161] and 10 [npc:1162]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 923,
        "x": 32,
        "y": 71
      },
      "questID": 267,
      "description": "Loot 8 [item:2536] from [npc:1161] and [npc:1162]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 224
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 267
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "description": "12"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "description": "Fly to [zone:1519]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 63.5,
        "y": 37
      },
      "questID": 1338
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 4411,
        "x": 22.5,
        "y": 56
      },
      "description": "Ride boat to [zone:442]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 983
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Set Hearthstone to [zone:442]",
      "setHearthstone": 442
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Open [zone:442] flight path"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 3524
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 984
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 954
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 453,
        "x": 36.5,
        "y": 49.5
      },
      "questID": 983,
      "description": "Loot 6 [item:5385] from [npc:2231] and [npc:2234]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 453,
        "x": 36.5,
        "y": 49.5
      },
      "questID": 3524,
      "description": "Collect [item:12242] from [object:175207]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 983
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 1001
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 3524
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4681
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 35,
        "y": 43
      },
      "questID": 1001,
      "description": "Loot 3 [item:5412] from [npc:2185]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 453,
        "x": 32,
        "y": 46.5
      },
      "questID": 4681,
      "description": "Collect [item:12289] from [object:176189]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 39.5,
        "y": 53
      },
      "questID": 984,
      "description": "Explore (39.6, 52.9)"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 984
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4761
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4681
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4761
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 954
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 955
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 955,
      "description": "Loot 8 [item:5336] from [npc:2190] and [npc:2189]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 955
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 452,
        "x": 42,
        "y": 28.5
      },
      "questID": 1001
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 148,
        "areaID": 452,
        "x": 42,
        "y": 28.5
      },
      "description": "13"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 148,
        "areaID": 452,
        "x": 42,
        "y": 28.5
      },
      "description": "Hearth to [zone:442]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Ride boat to [zone:1519]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 12,
        "x": 75,
        "y": 94.5
      },
      "description": "Go to [zone:12]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 2998,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 12,
        "areaID": 1519,
        "x": 32.4,
        "y": 49.9
      },
      "description": "Go to [zone:1519]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 51,
        "y": 48
      },
      "questID": 2998,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 51,
        "y": 48
      },
      "questID": 1642,
      "description": "Use [item:6775]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 51,
        "y": 48
      },
      "questID": 1642,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 51,
        "y": 48
      },
      "questID": 1643,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 63,
        "y": 71
      },
      "questID": 1643,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 63,
        "y": 71
      },
      "questID": 1644,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 1519,
        "x": 63,
        "y": 71
      },
      "description": "Make sure you have 10 [item:2589] (you can buy them on the Auction House)",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 63,
        "y": 71
      },
      "questID": 1644,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 63,
        "y": 71
      },
      "questID": 1780,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 51,
        "y": 48
      },
      "questID": 1780,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 51,
        "y": 48
      },
      "questID": 1781,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 51,
        "y": 48
      },
      "questID": 1781,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 51,
        "y": 48
      },
      "questID": 1786,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 12,
        "x": 75,
        "y": 94.5
      },
      "description": "Go to [zone:12]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 56,
        "x": 72.5,
        "y": 51.5
      },
      "questID": 1786,
      "description": "Use [item:6866] on [npc:6172]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 56,
        "x": 72.5,
        "y": 51.5
      },
      "questID": 1786,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 56,
        "x": 72.5,
        "y": 51.5
      },
      "questID": 1787,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 56,
        "x": 72.5,
        "y": 51.5
      },
      "questID": 1787,
      "description": "Loot [item:6846] from [npc:474]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 12,
        "areaID": 1519,
        "x": 32.4,
        "y": 49.9
      },
      "description": "Go to [zone:1519]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 51,
        "y": 48
      },
      "questID": 1787,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 51,
        "y": 48
      },
      "questID": 1788,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 51,
        "y": 48
      },
      "questID": 1788,
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 12,
        "x": 75,
        "y": 94.5
      },
      "description": "Go to [zone:12]",
      "onlyFor": [
        {
          "race": "Human",
          "class": "Paladin"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 109
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 12,
        "areaID": 40,
        "x": 20,
        "y": 81
      },
      "description": "Go to [zone:40]"
    }
  ]
}`,"/guide/enGB/alliance/nightElf_1-13.guide":`{
  "name": "WotLK Guide - Alliance - Night Elf - (1 - 13)",
  "locale": "enGB",
  "faction": "Alliance",
  "race": "Night Elf",
  "startHearthstone": 256,
  "next": "WotLK Guide - Alliance - (13 - 20)",
  "stepList": [
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 456
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 456,
      "description": "Kill 7 [npc:2031] and 4 [npc:1984]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "description": "2"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 456
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 457
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 3116,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 3118,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Rogue"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 3119,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Priest"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 3117,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 3120,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 458
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 3116,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 3118,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Rogue"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 3119,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Priest"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 4495
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 458
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 459
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 188,
        "x": 56.5,
        "y": 45.5
      },
      "questID": 459,
      "description": "Loot 8 [item:3297] from [npc:1988] and [npc:1989]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 459
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "description": "3"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 916
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 3117,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 3120,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 188,
        "x": 59,
        "y": 37
      },
      "questID": 457,
      "description": "Kill 7 [npc:2032] and 7 [npc:1985]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 188,
        "x": 56.5,
        "y": 33.5
      },
      "questID": 916,
      "description": "Loot 10 [item:5166] from [npc:1986]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 188,
        "x": 56.5,
        "y": 33.5
      },
      "questID": 4495
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 188,
        "x": 56.5,
        "y": 33.5
      },
      "questID": 3519
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 141,
        "areaID": 188,
        "x": 56.5,
        "y": 33.5
      },
      "description": "4"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 916
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 917
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 457
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 3519
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 3521
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 188,
        "x": 55,
        "y": 39.5
      },
      "questID": 3521,
      "description": "Loot 7 [item:10639] from [npc:1988] and [npc:1989] or collect them from [object:152094]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 188,
        "x": 59,
        "y": 37
      },
      "questID": 3521,
      "description": "Collect 4 [item:10641] from [object:152095]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 188,
        "x": 56.5,
        "y": 33.5
      },
      "questID": 3521,
      "description": "Loot [item:10640] from [npc:1986]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 188,
        "x": 56.5,
        "y": 33.5
      },
      "questID": 917,
      "description": "Collect [item:5167] from [object:4406]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 917
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 920
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 920
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 921
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 3521
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 3522
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "description": "5"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 188,
        "x": 56.5,
        "y": 33.5
      },
      "questID": 3522
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 188,
        "x": 60,
        "y": 33
      },
      "questID": 921,
      "description": "Use [item:5185]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 921
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 256,
        "x": 60,
        "y": 42
      },
      "questID": 928
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 188,
        "x": 61,
        "y": 47.5
      },
      "questID": 2159
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "x": 60.5,
        "y": 56
      },
      "questID": 488
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "x": 60.5,
        "y": 56
      },
      "questID": 488,
      "description": "Loot 3 [item:3411] from [npc:1995], 3 [item:3412] from [npc:1998] and 3 [item:3409] from [npc:2042]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "x": 60.5,
        "y": 56
      },
      "questID": 488
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 141,
        "x": 60.5,
        "y": 56
      },
      "description": "6"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 489
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 997
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 475
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 2438
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 932
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 2159
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "description": "Set Hearthstone to [zone:186]",
      "setHearthstone": 186
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 928
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 929
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 65,
        "y": 58.5
      },
      "questID": 929,
      "description": "Use [item:5619]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 260,
        "x": 65,
        "y": 58.5
      },
      "questID": 475
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 260,
        "x": 65,
        "y": 58.5
      },
      "questID": 476
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 260,
        "x": 65,
        "y": 58.5
      },
      "questID": 2438,
      "description": "Collect [item:8048] from [object:126158]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "x": 63.6,
        "y": 62.3
      },
      "questID": 489,
      "description": "Collect 3 [item:3418] from [object:1673]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 476
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 483
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 2438
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 2459
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 929
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 933
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "x": 60.5,
        "y": 56
      },
      "questID": 489
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 141,
        "x": 60.5,
        "y": 56
      },
      "description": "7"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 259,
        "x": 61,
        "y": 68.5
      },
      "questID": 997
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 259,
        "x": 61,
        "y": 68.5
      },
      "questID": 918
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 259,
        "x": 61,
        "y": 68.5
      },
      "questID": 919
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 259,
        "x": 56,
        "y": 68.5
      },
      "questID": 918,
      "description": "Loot 8 [item:5168] from [npc:2022]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 259,
        "x": 56,
        "y": 68.5
      },
      "questID": 919,
      "description": "Collect 12 [item:5169] from [object:4608]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 259,
        "x": 61,
        "y": 68.5
      },
      "questID": 918
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 259,
        "x": 61,
        "y": 68.5
      },
      "questID": 922
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 259,
        "x": 61,
        "y": 68.5
      },
      "questID": 919
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "x": 68.5,
        "y": 54
      },
      "questID": 2459,
      "description": "Kill 7 [npc:7235], loot [item:8049] from [npc:7234] and use [item:8049]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 2459
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "description": "8"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 487
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 736,
        "x": 46.5,
        "y": 53.5
      },
      "questID": 487,
      "description": "Kill 6 [npc:2152]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 736,
        "x": 43.5,
        "y": 58.5
      },
      "questID": 483,
      "description": "Collect [item:3406] from [object:2739] and [item:3408] from [object:2742]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 736,
        "x": 43.5,
        "y": 58.5
      },
      "questID": 2541
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 736,
        "x": 43.5,
        "y": 58.5
      },
      "questID": 2541,
      "description": "Loot [item:8363] from [npc:2009]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 736,
        "x": 43.5,
        "y": 58.5
      },
      "questID": 483,
      "description": "Collect [item:3405] from [object:2740]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 736,
        "x": 43.5,
        "y": 58.5
      },
      "questID": 2541
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 736,
        "x": 43.5,
        "y": 58.5
      },
      "questID": 2561
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 736,
        "x": 43.5,
        "y": 58.5
      },
      "questID": 2561,
      "description": "Kill [npc:7318] and use [item:8149] on his corpse"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 736,
        "x": 43.5,
        "y": 58.5
      },
      "questID": 483,
      "description": "Collect [item:3407] from [object:2741]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 736,
        "x": 43.5,
        "y": 58.5
      },
      "questID": 2561
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 141,
        "areaID": 736,
        "x": 43.5,
        "y": 58.5
      },
      "description": "9"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 141,
        "areaID": 736,
        "x": 43.5,
        "y": 58.5
      },
      "description": "Hearth to [zone:186]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 483
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 486
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "x": 54.5,
        "y": 52
      },
      "questID": 932,
      "description": "Loot [item:5221] from [npc:2038]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 932
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 478,
        "x": 42.5,
        "y": 67
      },
      "questID": 933,
      "description": "Use [item:5621]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 261,
        "x": 42.5,
        "y": 76
      },
      "questID": 930,
      "description": "Click the [object:6751]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 259,
        "x": 61,
        "y": 68.5
      },
      "questID": 930
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 933
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 7383
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 487
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 264,
        "x": 38.5,
        "y": 34.5
      },
      "questID": 937
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 264,
        "x": 38.5,
        "y": 34.5
      },
      "questID": 7383,
      "description": "Use [item:18152]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 264,
        "x": 38.5,
        "y": 34.5
      },
      "questID": 937,
      "description": "Loot 6 [item:5204] from [npc:2017], [npc:2018] and [npc:2015]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 141,
        "areaID": 264,
        "x": 38.5,
        "y": 34.5
      },
      "description": "10"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 264,
        "x": 38.5,
        "y": 34.5
      },
      "questID": 937
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 264,
        "x": 35,
        "y": 29
      },
      "questID": 931,
      "description": "Click the [object:6752]"
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 141,
        "areaID": 264,
        "x": 35,
        "y": 29
      },
      "description": "Hearth to [zone:186]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 7383
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 935
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 1684,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 141,
        "areaID": 1657,
        "x": 35.5,
        "y": 55
      },
      "description": "Go to [zone:1657]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1660,
        "x": 57.5,
        "y": 34.5
      },
      "questID": 1684,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1660,
        "x": 57.5,
        "y": 34.5
      },
      "questID": 1683,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 141,
        "x": 88.7,
        "y": 35.5
      },
      "description": "Go to [zone:141]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "x": 49,
        "y": 62
      },
      "questID": 1683,
      "description": "Loot [item:6805] from [npc:6128]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 141,
        "areaID": 1657,
        "x": 35.5,
        "y": 55
      },
      "description": "Go to [zone:1657]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1660,
        "x": 57.5,
        "y": 34.5
      },
      "questID": 1683,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 141,
        "x": 88.7,
        "y": 35.5
      },
      "description": "Go to [zone:141]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Warrior"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 6063,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 6063,
      "description": "Use [item:15921] on [npc:1998]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 6063,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 6101,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "x": 55,
        "y": 73
      },
      "questID": 6101,
      "description": "Use [item:15922] on [npc:2043]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 6101,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 6102,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "x": 39,
        "y": 52
      },
      "questID": 6102,
      "description": "Use [item:15923] on [npc:1996]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 6102,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 6103,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 141,
        "areaID": 1657,
        "x": 35.5,
        "y": 55
      },
      "description": "Go to [zone:1657]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1658,
        "x": 40.5,
        "y": 8.5
      },
      "questID": 6103,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 141,
        "x": 88.7,
        "y": 35.5
      },
      "description": "Go to [zone:141]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Hunter"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 5925,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 141,
        "areaID": 1657,
        "x": 35.5,
        "y": 55
      },
      "description": "Go to [zone:1657]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1658,
        "x": 35,
        "y": 8
      },
      "questID": 5925,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1658,
        "x": 35,
        "y": 8
      },
      "questID": 5921,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1658,
        "x": 35,
        "y": 8
      },
      "description": "Go to [zone:493] (use [spell:18960])",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2361,
        "x": 56,
        "y": 30.5
      },
      "questID": 5921,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2361,
        "x": 56,
        "y": 30.5
      },
      "questID": 5929,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 493,
        "x": 39,
        "y": 27.5
      },
      "questID": 5929,
      "description": "Talk with [npc:11956]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 493,
        "x": 39,
        "y": 27.5
      },
      "description": "Go to [zone:493] (use [spell:18960])",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2361,
        "x": 56,
        "y": 30.5
      },
      "questID": 5929,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2361,
        "x": 56,
        "y": 30.5
      },
      "questID": 5931,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 493,
        "areaID": 2361,
        "x": 44,
        "y": 45.5
      },
      "description": "Fly to [zone:702]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.6,
        "y": 91.6
      },
      "description": "Go to [zone:1657]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1658,
        "x": 35,
        "y": 8
      },
      "questID": 5931,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1658,
        "x": 35,
        "y": 8
      },
      "questID": 6001,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1657,
        "x": 29,
        "y": 46
      },
      "description": "Go to [zone:702]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.6,
        "y": 91.6
      },
      "description": "Fly to [zone:442]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 43,
        "y": 46
      },
      "questID": 6001,
      "description": "Use [item:15208] on [object:177525], fight [npc:12138] then talk with [npc:12144]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Fly to [zone:702]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.6,
        "y": 91.6
      },
      "description": "Go to [zone:1657]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1658,
        "x": 35,
        "y": 8
      },
      "questID": 6001,
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 141,
        "x": 88.7,
        "y": 35.5
      },
      "description": "Go to [zone:141]",
      "onlyFor": [
        {
          "race": "Night Elf",
          "class": "Druid"
        }
      ]
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 261,
        "x": 39,
        "y": 80
      },
      "questID": 486,
      "description": "Kill [npc:2039]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 259,
        "x": 61,
        "y": 68.5
      },
      "questID": 931
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 186,
        "x": 55,
        "y": 57.5
      },
      "questID": 486
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 141,
        "areaID": 1657,
        "x": 35.5,
        "y": 55
      },
      "description": "Go to [zone:1657]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1657,
        "x": 70.5,
        "y": 45.5
      },
      "questID": 6344
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1658,
        "x": 38,
        "y": 21.5
      },
      "questID": 922
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1657,
        "areaID": 1658,
        "x": 35,
        "y": 8
      },
      "questID": 935
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1657,
        "x": 29,
        "y": 46
      },
      "description": "Go to [zone:702]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.6,
        "y": 91.6
      },
      "questID": 6344
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.6,
        "y": 91.6
      },
      "questID": 6341
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.6,
        "y": 91.6
      },
      "questID": 6341
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.6,
        "y": 91.6
      },
      "questID": 6342
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.6,
        "y": 91.6
      },
      "description": "Fly to [zone:442]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 3524
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 6342
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 6343
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "11"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Fly to [zone:702]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.6,
        "y": 91.6
      },
      "questID": 6343
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 141,
        "areaID": 702,
        "x": 55.6,
        "y": 91.6
      },
      "description": "Fly to [zone:442]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 983
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Set Hearthstone to [zone:442]",
      "setHearthstone": 442
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 984
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 954
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 453,
        "x": 36.5,
        "y": 49.5
      },
      "questID": 983,
      "description": "Loot 6 [item:5385] from [npc:2231] and [npc:2234]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 453,
        "x": 36.5,
        "y": 49.5
      },
      "questID": 3524,
      "description": "Collect [item:12242] from [object:175207]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 983
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 1001
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 3524
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4681
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 35,
        "y": 43
      },
      "questID": 1001,
      "description": "Loot 3 [item:5412] from [npc:2185]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 453,
        "x": 32,
        "y": 46.5
      },
      "questID": 4681,
      "description": "Collect [item:12289] from [object:176189]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "x": 39.5,
        "y": 53
      },
      "questID": 984,
      "description": "Explore (39.6, 52.9)"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 984
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4761
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4681
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "questID": 4761
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 954
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 955
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 955,
      "description": "Loot 8 [item:5336] from [npc:2190] and [npc:2189]"
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "description": "12"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 446,
        "x": 45,
        "y": 36.5
      },
      "questID": 955
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 148,
        "areaID": 452,
        "x": 42,
        "y": 28.5
      },
      "questID": 1001
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 148,
        "areaID": 452,
        "x": 42,
        "y": 28.5
      },
      "description": "Hearth to [zone:442]"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 148,
        "areaID": 442,
        "x": 39,
        "y": 43.5
      },
      "description": "Ride boat to [zone:1519]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 1519,
        "x": 69.5,
        "y": 74
      },
      "description": "Open [zone:1519] flight path"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "x": 67,
        "y": 33.5
      },
      "description": "Ride tram to [zone:1537]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 1537,
        "x": 55.5,
        "y": 47.5
      },
      "description": "Open [zone:1537] flight path"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1537,
        "areaID": 809,
        "x": 14.3,
        "y": 86.5
      },
      "description": "Go to [zone:1]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 433
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 432
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 432,
      "description": "Kill 6 [npc:1115]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 433,
      "description": "Kill 10 [npc:1117]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 433
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1,
        "areaID": 134,
        "x": 68.5,
        "y": 56.5
      },
      "questID": 432
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1,
        "areaID": 806,
        "x": 86.5,
        "y": 51
      },
      "description": "Go to [zone:38]"
    },
    {
      "type": "Note",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "description": "Open [zone:144] flight path"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 416
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 1339
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "description": "Set Hearthstone to [zone:144]",
      "setHearthstone": 144
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 418
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "x": 36.5,
        "y": 39
      },
      "questID": 418,
      "description": "Loot 3 [item:3172] from [npc:1190], 3 [item:3173] from [npc:1186] and 3 [item:3174] from [npc:1195]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "x": 24.5,
        "y": 33.5
      },
      "questID": 416,
      "description": "Loot 12 [item:3110] from [npc:1173], [npc:1176], [npc:1202] and [npc:1172]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 925,
        "x": 24,
        "y": 18
      },
      "questID": 1339
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 925,
        "x": 24,
        "y": 18
      },
      "questID": 1338
    },
    {
      "type": "Hearthstone",
      "coordinates": {
        "zoneID": 38,
        "areaID": 925,
        "x": 24,
        "y": 18
      },
      "description": "Hearth to [zone:144]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 418
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "questID": 416
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 224
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 267
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 923,
        "x": 32,
        "y": 71
      },
      "questID": 224,
      "description": "Kill 10 [npc:1161] and 10 [npc:1162]"
    },
    {
      "type": "Do Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 923,
        "x": 32,
        "y": 71
      },
      "questID": 267,
      "description": "Loot 8 [item:2536] from [npc:1161] and [npc:1162]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 224
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "questID": 267
    },
    {
      "type": "Level Up",
      "coordinates": {
        "zoneID": 38,
        "areaID": 924,
        "x": 23,
        "y": 74.5
      },
      "description": "13"
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 38,
        "areaID": 144,
        "x": 36,
        "y": 46
      },
      "description": "Fly to [zone:1519]"
    },
    {
      "type": "Turn in Quest",
      "coordinates": {
        "zoneID": 1519,
        "x": 63.5,
        "y": 37
      },
      "questID": 1338
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 1519,
        "areaID": 12,
        "x": 75,
        "y": 94.5
      },
      "description": "Go to [zone:12]"
    },
    {
      "type": "Accept Quest",
      "coordinates": {
        "zoneID": 12,
        "areaID": 87,
        "x": 42.5,
        "y": 66
      },
      "questID": 109
    },
    {
      "type": "Travel",
      "coordinates": {
        "zoneID": 12,
        "areaID": 40,
        "x": 20,
        "y": 81
      },
      "description": "Go to [zone:40]"
    }
  ]
}`}),Xe={};for(let e of Object.values(Ye))try{let t=JSON.parse(e);t&&t.name&&Array.isArray(t.stepList)&&(Xe[t.name]=t)}catch{continue}var Ze=e=>Xe[e],Qe=()=>Object.values(Xe),$e=e=>Xe[e.next],et=e=>Ze(se(e)),tt=(e,t)=>{let n=Qe().filter(t=>t.next===e.name);return n.find(e=>e.race===t.race&&e.class===t.class)??n.find(e=>e.race===t.race&&!e.class)??n.find(e=>e.class===t.class&&!e.race)??n.find(e=>!e.race&&!e.class)},nt=5,rt=(e,t)=>!e.onlyFor||e.onlyFor.length===0?!0:e.onlyFor.some(e=>(!e.race||e.race===t.race)&&(!e.class||e.class===t.class)),it=(e,t)=>{let n=[];return e.stepList.forEach(e=>{rt(e,t)&&n.push({step:e,filteredIndex:n.length})}),n},at=(e,t)=>`${e},${t}`,ot=e=>{let t=[],n=[],r=(e,t,n)=>{let r=n.step.coordinates;e.groups.push({marker:e.groups.length+1,x:r.x,y:r.y,areaID:r.areaID,steps:[n]}),t.add(at(r.x,r.y))},i=e=>{let i={zoneID:e.step.coordinates.zoneID,groups:[]},a=new Set;t.push(i),n.push(a),r(i,a,e)};for(let a of e){let e=a.step.coordinates,o=t[t.length-1];if(!o){i(a);continue}let s=n[n.length-1],c=o.groups[o.groups.length-1];e.zoneID===o.zoneID&&e.x===c.x&&e.y===c.y?c.steps.push(a):e.zoneID!==o.zoneID||s.has(at(e.x,e.y))||o.groups.length>=nt?i(a):r(o,s,a)}return t},st=e=>{let t=et(e),n=[],r=new Set;for(;t&&!r.has(t.name);)n.push(t),r.add(t.name),t=$e(t);return n},ct=e=>{let t=[],n=1;for(let r of st(e))ot(it(r,e)).forEach((e,i)=>{t.push({guide:r.name,section:i,level:n});for(let t of e.groups)for(let{step:e}of t.steps)if(e.type===`Level Up`&&e.description){let t=Number(e.description);Number.isFinite(t)&&(n=Math.max(n,t))}});return{stops:t,maxLevel:Math.max(1,n,...t.map(e=>e.level))}},lt=(e,t)=>{let n;for(let r of e.stops)r.level<=t&&(!n||r.level>n.level)&&(n=r);return n??e.stops[0]},ut=(e,t)=>{let n=new Set;for(let r=0;r<t&&r<e.length;r++)for(let t of e[r].groups)for(let{step:e}of t.steps)e.questID!=null&&(e.type===`Accept Quest`?n.add(e.questID):e.type===`Turn in Quest`&&n.delete(e.questID));return[...n]},dt=(e,t,n,r)=>{let i=n.startHearthstone??T(r.race,r.class);for(let n=0;n<t&&n<e.length;n++)for(let t of e[n].groups)for(let{step:e}of t.steps)e.setHearthstone!=null&&(i=e.setHearthstone);return i},ft=`rounded-xl border border-slate-700 bg-slate-800/40 p-4`,pt=({character:e,onExit:t,onNavigate:n})=>{let r=(0,l.useRef)(null),i=(0,l.useRef)(null),[a,o]=(0,l.useState)({mapH:0,blockH:0,isDesktop:!1});(0,l.useEffect)(()=>{let e=()=>{o({mapH:r.current?.offsetHeight??0,blockH:i.current?.offsetHeight??0,isDesktop:window.matchMedia(`(min-width: 1024px)`).matches})};e();let t=new ResizeObserver(e);return r.current&&t.observe(r.current),i.current&&t.observe(i.current),window.addEventListener(`resize`,e),()=>{t.disconnect(),window.removeEventListener(`resize`,e)}},[]);let s=a.isDesktop?80:12,c=a.isDesktop?80:12+a.mapH+12,u=a.isDesktop?void 0:c+a.blockH,f=Ze(e.guide),m=(0,l.useMemo)(()=>f?ot(it(f,e)):[],[f,e]),h=m[e.section],_=h?.groups.map(e=>({number:e.marker,x:e.x,y:e.y}))??[],[v,b]=(0,l.useState)(null),x=(0,l.useRef)({}),ee=e=>{x.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`})},C=c+a.blockH+12;Ue(`${e.guide}:${e.section}`);let te=(0,l.useMemo)(()=>ut(m,e.section),[m,e.section]),re=(0,l.useMemo)(()=>f?dt(m,e.section,f,e):0,[f,m,e]),w=(0,l.useMemo)(()=>ct(e),[e]),ie=(e,t)=>w.stops.find(n=>n.guide===e&&n.section===t)?.level??1,ae=e=>w.stops.filter(t=>t.guide===e).length,oe=f?$e(f):void 0,se=f?tt(f,e):void 0,ce=e.section<=0,ue=e.section>=m.length-1,T=!ce||!!se,E=!ue||!!oe,de=(e,t)=>{n(e,t,ie(e,t))};return(0,p.jsxs)(`div`,{className:`flex w-full max-w-6xl flex-col gap-3 lg:flex-row lg:items-start`,children:[(0,p.jsx)(`div`,{ref:r,style:{top:s},className:g(ft,`sticky z-30 flex flex-col gap-2 lg:w-2/3 lg:shrink-0`),children:h?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,p.jsx)(`span`,{className:`shrink-0 text-sm font-bold text-slate-100`,children:je(h.zoneID)}),(0,p.jsx)(Je,{level:e.level,maxLevel:w.maxLevel,onSeek:e=>{let t=lt(w,e);t&&n(t.guide,t.section,t.level)},className:`flex-1`})]}),(0,p.jsxs)(`div`,{className:`relative`,children:[(0,p.jsx)(be,{src:Ne(h.zoneID)??``,alt:je(h.zoneID),markers:_,activeMarker:v,onMarkerHover:b,onMarkerClick:ee}),(0,p.jsx)(`button`,{type:`button`,onClick:()=>{ce?se&&de(se.name,ae(se.name)-1):de(e.guide,e.section-1)},disabled:!T,"aria-label":`Previous section`,className:`group absolute inset-y-0 left-0 z-10 flex w-14 items-center justify-start bg-linear-to-r from-slate-900/75 to-transparent text-yellow-400 transition-opacity disabled:pointer-events-none disabled:opacity-0 cursor-pointer`,children:(0,p.jsx)(y,{src:d(`/icons/ui/IconChevronRight.svg`),className:`ml-1 h-8 w-8 rotate-180 transition-transform group-hover:scale-125`})}),(0,p.jsx)(`button`,{type:`button`,onClick:()=>{ue?oe&&de(oe.name,0):de(e.guide,e.section+1)},disabled:!E,"aria-label":`Next section`,className:`group absolute inset-y-0 right-0 z-10 flex w-14 items-center justify-end bg-linear-to-l from-slate-900/75 to-transparent text-yellow-400 transition-opacity disabled:pointer-events-none disabled:opacity-0 cursor-pointer`,children:(0,p.jsx)(y,{src:d(`/icons/ui/IconChevronRight.svg`),className:`mr-1 h-8 w-8 transition-transform group-hover:scale-125`})})]})]}):(0,p.jsx)(`p`,{className:`text-center text-sm text-slate-500`,children:f?`No section to show.`:`Guide not found: ${e.guide}`})}),(0,p.jsxs)(`div`,{className:`relative flex min-w-0 flex-1 flex-col gap-3`,children:[(0,p.jsx)(`div`,{"aria-hidden":!0,style:{top:0,height:u},className:`pointer-events-none fixed left-0 z-20 w-full bg-linear-to-b from-slate-900 from-75% to-transparent lg:h-38`}),(0,p.jsxs)(`div`,{ref:i,style:{top:c},className:`sticky z-30 flex flex-col gap-2.5 rounded-xl border border-slate-700 bg-slate-800/60 p-3 backdrop-blur`,children:[(0,p.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,p.jsxs)(`div`,{className:`flex min-w-0 items-center gap-2.5`,children:[(0,p.jsx)(`span`,{className:`h-9 w-9 shrink-0 overflow-hidden rounded-md ring-1 ring-inset ring-black/40`,style:{boxShadow:`inset 0 0 0 2px ${S[e.class]}`},children:(0,p.jsx)(`img`,{src:ne(e.race,e.gender),alt:`${e.race} ${e.gender}`,className:`h-full w-full object-cover`})}),(0,p.jsxs)(`div`,{className:`flex min-w-0 flex-col`,children:[(0,p.jsx)(`span`,{className:`truncate text-sm font-bold text-slate-100`,children:e.name}),(0,p.jsxs)(`span`,{className:`truncate text-xs text-slate-400`,children:[e.race,` `,e.class,` · Level `,e.level]})]})]}),(0,p.jsx)(`button`,{type:`button`,onClick:t,"aria-label":`Change character`,title:`Change character`,className:`flex shrink-0 cursor-pointer items-center justify-center self-center rounded p-1.5 text-slate-400 transition-colors hover:text-slate-200`,children:(0,p.jsx)(y,{src:d(`/icons/ui/IconOptions.svg`),className:`h-5 w-5`})})]}),h&&(0,p.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,p.jsxs)(`a`,{href:Ce(`zone`,re),"data-db":`zone=${re}`,target:`_blank`,rel:`noopener noreferrer`,title:`Current Hearthstone`,className:`flex items-center gap-1.5 rounded-md border border-slate-600 px-2 py-1 text-xs font-semibold text-purple-300 hover:border-slate-500`,children:[(0,p.jsx)(`img`,{src:d(`/icons/steps/IconHearthstone.png`),alt:`Hearthstone`,className:`h-4 w-4 object-contain`}),Me(re)]}),(0,p.jsx)(We,{questLog:te})]})]}),h&&(0,p.jsx)(`div`,{className:g(ft,`flex flex-col gap-4`),children:h.groups.map(e=>(0,p.jsxs)(`div`,{ref:t=>{x.current[e.marker]=t},style:{scrollMarginTop:C},onMouseEnter:()=>b(e.marker),onMouseLeave:()=>b(null),children:[(0,p.jsxs)(`div`,{className:`mb-1.5 flex items-center gap-2`,children:[(0,p.jsx)(`span`,{className:g(`flex h-5 w-5 items-center justify-center rounded-full text-[0.65rem] leading-none font-bold transition-transform duration-150`,v===e.marker&&`scale-125`),style:le,children:e.marker}),(0,p.jsx)(`span`,{className:`text-xs font-semibold text-slate-400`,children:e.areaID?Me(e.areaID):je(h.zoneID)})]}),(0,p.jsx)(`ul`,{className:`flex flex-col gap-1.5`,children:e.steps.map(e=>(0,p.jsx)(Fe,{step:e.step},e.filteredIndex))})]},e.marker))})]})]})},mt=()=>(0,p.jsx)(`svg`,{viewBox:`0 0 24 24`,className:`h-4 w-4`,fill:`currentColor`,"aria-hidden":`true`,children:(0,p.jsx)(`path`,{d:`M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.1.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.7-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.72-1.34-1.72-1.09-.72.08-.71.08-.71 1.2.08 1.83 1.2 1.83 1.2 1.07 1.77 2.81 1.26 3.5.96.11-.76.42-1.26.76-1.55-2.67-.29-5.47-1.29-5.47-5.75 0-1.27.47-2.31 1.24-3.12-.12-.29-.54-1.46.12-3.05 0 0 1.01-.31 3.3 1.19a11.7 11.7 0 0 1 3-.39c1.02 0 2.05.13 3 .39 2.28-1.5 3.29-1.19 3.29-1.19.66 1.59.24 2.76.12 3.05.77.81 1.24 1.85 1.24 3.12 0 4.47-2.81 5.45-5.49 5.74.43.36.81 1.08.81 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.83.56A12.02 12.02 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z`})}),ht=()=>(0,p.jsx)(`footer`,{className:`mt-auto border-t border-slate-700 bg-slate-900/60`,children:(0,p.jsxs)(`div`,{className:`mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center`,children:[(0,p.jsxs)(`div`,{className:`flex flex-col items-center gap-2 text-sm text-slate-400 sm:flex-row sm:gap-4`,children:[(0,p.jsxs)(`span`,{children:[`© `,new Date().getFullYear(),` WotLK Guide`]}),(0,p.jsxs)(`a`,{href:`https://github.com/ltanailov/WotLK-Guide`,target:`_blank`,rel:`noreferrer`,className:`inline-flex items-center gap-1.5 transition-colors hover:text-slate-100`,children:[(0,p.jsx)(mt,{}),`GitHub`]})]}),(0,p.jsx)(`p`,{className:`max-w-2xl text-xs leading-relaxed text-slate-500`,children:`This is a fan-made, non-commercial project and is not affiliated with or endorsed by Blizzard Entertainment. World of Warcraft and Wrath of the Lich King are trademarks of Blizzard Entertainment, Inc. All rights reserved by Blizzard Entertainment.`})]})}),k=(e,t)=>{let[n,r]=(0,l.useState)(()=>{try{let n=localStorage.getItem(e);return n===null?t:JSON.parse(n)}catch{return t}});return(0,l.useEffect)(()=>{try{localStorage.setItem(e,JSON.stringify(n))}catch(t){console.error(`Failed to save '${e}' to localStorage`,t)}},[e,n]),[n,r]},gt=(0,l.createContext)(null),_t=({children:e})=>{let[t,n]=k(`activeCharacterId`,null),[r,i]=(0,l.useState)(t?`Guide`:`CharacterSelect`);return(0,p.jsx)(gt.Provider,{value:{appMode:r,setAppMode:i,activeCharacterId:t,setActiveCharacterId:n},children:e})};function vt(){let e=(0,l.useContext)(gt);if(!e)throw Error(`useAppState must be used inside AppStateProvider`);return e}var yt=()=>{let[e,t]=k(`characters`,[]);return{characters:e,addCharacter:(0,l.useCallback)(e=>{let n={...e,id:crypto.randomUUID(),level:1,guide:se(e),section:0};return t(e=>[n,...e]),n},[t]),removeCharacter:(0,l.useCallback)(e=>{t(t=>t.filter(t=>t.id!==e))},[t]),updateCharacter:(0,l.useCallback)((e,n)=>{t(t=>t.map(t=>t.id===e?{...t,...n}:t))},[t])}};(0,u.createRoot)(document.getElementById(`root`)).render((0,p.jsx)(l.StrictMode,{children:(0,p.jsx)(_t,{children:(0,p.jsx)(()=>{let{appMode:e,setAppMode:t,activeCharacterId:n,setActiveCharacterId:r}=vt(),{characters:i,addCharacter:a,removeCharacter:o,updateCharacter:s}=yt(),c=i.find(e=>e.id===n)??null;return(0,p.jsxs)(`div`,{className:`flex min-h-dvh flex-col bg-slate-900 text-slate-100`,children:[(0,p.jsx)(m,{}),(0,p.jsx)(`main`,{className:`flex w-full justify-center px-4 py-6`,children:e===`Guide`&&c?(0,p.jsx)(pt,{character:c,onExit:()=>t(`CharacterSelect`),onNavigate:(e,t,n)=>{c&&s(c.id,{guide:e,section:t,level:n})}}):(0,p.jsx)(ye,{characters:i,addCharacter:a,removeCharacter:e=>{o(e),e===n&&r(null)},onPlay:e=>{r(e.id),t(`Guide`)},initialSelectedId:n})}),(0,p.jsx)(ht,{})]})},{})})}));