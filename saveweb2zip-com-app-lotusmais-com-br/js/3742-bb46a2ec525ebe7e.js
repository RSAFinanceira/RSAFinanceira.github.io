"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3742],{53742:function(e,t,r){r.d(t,{Dv:function(){return f},KO:function(){return c},b9:function(){return d},zt:function(){return u}});var n=r(2265),l=r(59910);let o=(0,n.createContext)(void 0),i=e=>{let t=(0,n.useContext)(o);return(null==e?void 0:e.store)||t||(0,l.K7)()},u=e=>{let{children:t,store:r}=e,i=(0,n.useRef)();return r||i.current||(i.current=(0,l.MT)()),(0,n.createElement)(o.Provider,{value:r||i.current},t)},a=e=>"function"==typeof(null==e?void 0:e.then),s=n.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e});function f(e,t){let r=i(t),[[l,o,u],f]=(0,n.useReducer)(t=>{let n=r.get(e);return Object.is(t[0],n)&&t[1]===r&&t[2]===e?t:[n,r,e]},void 0,()=>[r.get(e),r,e]),d=l;(o!==r||u!==e)&&(f(),d=r.get(e));let c=null==t?void 0:t.delay;return(0,n.useEffect)(()=>{let t=r.sub(e,()=>{if("number"==typeof c){setTimeout(f,c);return}f()});return f(),t},[r,e,c]),(0,n.useDebugValue)(d),a(d)?s(d):d}function d(e,t){let r=i(t);return(0,n.useCallback)(function(){for(var t=arguments.length,n=Array(t),l=0;l<t;l++)n[l]=arguments[l];if(!("write"in e))throw Error("not writable atom");return r.set(e,...n)},[r,e])}function c(e,t){return[f(e,t),d(e,t)]}},59910:function(e,t,r){let n;r.d(t,{K7:function(){return b},MT:function(){return p},cn:function(){return o}});let l=0;function o(e,t){let r=`atom${++l}`,n={toString:()=>r};return"function"==typeof e?n.read=e:(n.init=e,n.read=function(e){return e(this)},n.write=function(e,t,r){return t(this,"function"==typeof r?r(e(this)):r)}),t&&(n.write=t),n}let i=e=>"init"in e,u=e=>!!e.write,a=new WeakMap,s=(e,t)=>{a.set(e,t),e.catch(()=>{}).finally(()=>a.delete(e))},f=(e,t)=>{let r=a.get(e);r&&(a.delete(e),r(t))},d=(e,t)=>{e.status="fulfilled",e.value=t},c=(e,t)=>{e.status="rejected",e.reason=t},v=e=>"function"==typeof(null==e?void 0:e.then),h=(e,t)=>!!e&&"v"in e&&"v"in t&&Object.is(e.v,t.v),g=(e,t)=>!!e&&"e"in e&&"e"in t&&Object.is(e.e,t.e),w=e=>!!e&&"v"in e&&e.v instanceof Promise,_=(e,t)=>"v"in e&&"v"in t&&e.v.orig&&e.v.orig===t.v.orig,E=e=>{if("e"in e)throw e.e;return e.v},p=()=>{let e,t;let r=new WeakMap,n=new WeakMap,l=new Map;e=new Set,t=new Set;let o=e=>r.get(e),a=(e,t)=>{Object.freeze(t);let n=r.get(e);if(r.set(e,t),l.has(e)||l.set(e,n),w(n)){let e="v"in t?t.v instanceof Promise?t.v:Promise.resolve(t.v):Promise.reject(t.e);n.v!==e&&f(n.v,e)}},p=(e,t,r)=>{let n=new Map,l=!1;r.forEach((r,o)=>{r||o!==e||(r=t),r?(n.set(o,r),t.d.get(o)!==r&&(l=!0)):console.warn("[Bug] atom state not found")}),(l||t.d.size!==n.size)&&(t.d=n)},b=(e,t,r)=>{let n=o(e),l={d:(null==n?void 0:n.d)||new Map,v:t};if(r&&p(e,l,r),h(n,l)&&n.d===l.d)return n;if(w(n)&&w(l)&&_(n,l)){if(n.d===l.d)return n;l.v=n.v}return a(e,l),l},m=(e,t,r,l)=>{if(v(t)){let i;let u=()=>{let t=o(e);if(!w(t)||t.v!==a)return;let l=b(e,a,r);n.has(e)&&t.d!==l.d&&z(e,l,t.d)},a=new Promise((e,r)=>{let n=!1;t.then(t=>{n||(n=!0,d(a,t),e(t),u())},e=>{n||(n=!0,c(a,e),r(e),u())}),i=t=>{n||(n=!0,t.then(e=>d(a,e),e=>c(a,e)),e(t))}});return a.orig=t,a.status="pending",s(a,e=>{e&&i(e),null==l||l()}),b(e,a,r)}return b(e,t,r)},y=(e,t,r)=>{let n=o(e),l={d:(null==n?void 0:n.d)||new Map,e:t};return(r&&p(e,l,r),g(n,l)&&n.d===l.d)?n:(a(e,l),l)},S=(e,t)=>{let r,l;let a=o(e);if(!t&&a&&(n.has(e)||Array.from(a.d).every(([t,r])=>{if(t===e)return!0;let n=S(t);return n===r||h(n,r)})))return a;let s=new Map,f=!0;try{let t=e.read(t=>{if(t===e){let e=o(t);if(e)return s.set(t,e),E(e);if(i(t))return s.set(t,void 0),t.init;throw Error("no atom init")}let r=S(t);return s.set(t,r),E(r)},{get signal(){return r||(r=new AbortController),r.signal},get setSelf(){return u(e)||console.warn("setSelf function cannot be used with read-only atom"),!l&&u(e)&&(l=(...t)=>{if(f&&console.warn("setSelf function cannot be called in sync"),!f)return k(e,...t)}),l}});return m(e,t,s,()=>null==r?void 0:r.abort())}catch(t){return y(e,t,s)}finally{f=!1}},M=e=>{let t=n.get(e);return t||(t=C(e)),t},T=(e,t)=>!t.l.size&&(!t.t.size||1===t.t.size&&t.t.has(e)),N=e=>{let t=n.get(e);t&&T(e,t)&&j(e)},O=e=>{let t=new Map,r=new WeakMap,i=e=>{var t;let r=new Set(null==(t=n.get(e))?void 0:t.t);return l.forEach((t,n)=>{var l;(null==(l=o(n))?void 0:l.d.has(e))&&r.add(n)}),r},u=e=>{i(e).forEach(n=>{n!==e&&(t.set(n,(t.get(n)||new Set).add(e)),r.set(n,(r.get(n)||0)+1),u(n))})};u(e);let a=e=>{i(e).forEach(n=>{var l;if(n!==e){let e=r.get(n);if(e&&r.set(n,--e),!e){let e=!!(null==(l=t.get(n))?void 0:l.size);e&&(e=!h(o(n),S(n,!0))),e||t.forEach(e=>e.delete(n))}a(n)}})};a(e)},A=(t,...r)=>{let n=!0,l=t.write(e=>E(S(e)),(r,...l)=>{let u;if(r===t){if(!i(r))throw Error("atom not writable");h(o(r),m(r,l[0]))||O(r)}else u=A(r,...l);if(!n){let t=I();e.forEach(e=>e({type:"async-write",flushed:t}))}return u},...r);return n=!1,l},k=(t,...r)=>{let n=A(t,...r),l=I();return e.forEach(e=>e({type:"write",flushed:l})),n},C=(e,r,l)=>{var i;let a=l||[];null==(i=o(e))||i.d.forEach((t,r)=>{let l=n.get(r);l?l.t.add(e):r!==e&&C(r,e,a)}),S(e);let s={t:new Set(r&&[r]),l:new Set};if(n.set(e,s),t.add(e),u(e)&&e.onMount){let{onMount:t}=e;a.push(()=>{let r=t((...t)=>k(e,...t));r&&(s.u=r)})}return l||a.forEach(e=>e()),s},j=e=>{var r;let l=null==(r=n.get(e))?void 0:r.u;l&&l(),n.delete(e),t.delete(e);let i=o(e);i?(w(i)&&f(i.v),i.d.forEach((t,r)=>{if(r!==e){let t=n.get(r);t&&(t.t.delete(e),T(r,t)&&j(r))}})):console.warn("[Bug] could not find atom state to unmount",e)},z=(e,t,r)=>{let l=new Set(t.d.keys());null==r||r.forEach((t,r)=>{if(l.has(r)){l.delete(r);return}let o=n.get(r);o&&(o.t.delete(e),T(r,o)&&j(r))}),l.forEach(t=>{let r=n.get(t);r?r.t.add(e):n.has(e)&&C(t,e)})},I=()=>{let e;for(e=new Set;l.size;){let t=Array.from(l);l.clear(),t.forEach(([t,r])=>{let l=o(t);if(l){let o=n.get(t);o&&l.d!==(null==r?void 0:r.d)&&z(t,l,null==r?void 0:r.d),o&&!(!w(r)&&(h(r,l)||g(r,l)))&&(o.l.forEach(e=>e()),e.add(t))}else console.warn("[Bug] no atom state to flush")})}return e};return{get:e=>E(S(e)),set:k,sub:(t,r)=>{let n=M(t),l=I(),o=n.l;return o.add(r),e.forEach(e=>e({type:"sub",flushed:l})),()=>{o.delete(r),N(t),e.forEach(e=>e({type:"unsub"}))}},dev_subscribe_store:(t,r)=>{if(2!==r)throw Error("The current StoreListener revision is 2.");return e.add(t),()=>{e.delete(t)}},dev_get_mounted_atoms:()=>t.values(),dev_get_atom_state:e=>r.get(e),dev_get_mounted:e=>n.get(e),dev_restore_atoms:t=>{for(let[e,r]of t)i(e)&&(m(e,r),O(e));let r=I();e.forEach(e=>e({type:"restore",flushed:r}))}}};"number"==typeof globalThis.__NUMBER_OF_JOTAI_INSTANCES__?++globalThis.__NUMBER_OF_JOTAI_INSTANCES__:globalThis.__NUMBER_OF_JOTAI_INSTANCES__=1;let b=()=>(n||(1!==globalThis.__NUMBER_OF_JOTAI_INSTANCES__&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"),n=p()),n)}}]);