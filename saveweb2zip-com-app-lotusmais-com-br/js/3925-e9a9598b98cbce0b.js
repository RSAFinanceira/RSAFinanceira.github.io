(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3925],{42001:function(e,t,n){"use strict";var r=n(2265),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function o(e,t,n){if(n||2==arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||t)}var i=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},l={k:1e3,m:1e6,b:1e9},s=function(e,t){void 0===t&&(t=".");var n=RegExp("(\\d+("+i(t)+"\\d*)?)([kmb])$","i"),r=e.match(n);if(r){var a=r[1],o=l[r[3].toLowerCase()];return Number(a.replace(t,"."))*o}},u=function(e,t){void 0===t&&(t=",");var n=RegExp(i(t),"g");return e.replace(n,"")},c=function(e,t){var n=RegExp("[^\\d"+i(t.join(""))+"]","gi");return e.replace(n,"")},p=function(e){var t=e.value,n=e.groupSeparator,r=void 0===n?",":n,a=e.decimalSeparator,l=void 0===a?".":a,p=e.allowDecimals,f=e.decimalsLimit,d=void 0===f?2:f,v=e.allowNegativeValue,m=e.disableAbbreviations,h=void 0!==m&&m,g=e.prefix,S=void 0===g?"":g,k=e.transformRawValue,w=(void 0===k?function(e){return e}:k)(t);if("-"===w)return w;var b=h?[]:["k","m","b"],y=RegExp("((^|\\D)-\\d)|(-"+i(S)+")").test(w),C=RegExp("(\\d+)-?"+i(S)).exec(t)||[],O=C[0],x=C[1],D=c(u(S?O?w.replace(O,"").concat(x):w.replace(S,""):w,r),o([r,l],b)),E=D;if(!h){if(b.some(function(e){return e===D.toLowerCase().replace(l,"")}))return"";var I=s(D,l);I&&(E=String(I))}var V=y&&(void 0===v||v)?"-":"";if(l&&E.includes(l)){var M=D.split(l),R=M[0],P=M[1],F=d&&P?P.slice(0,d):P;return""+V+R+(void 0===p||p?""+l+F:"")}return""+V+E},f=function(e,t,n){if(void 0!==n&&e.length>1){if(0===n)return e.replace(t,"");if(e.includes(t)){var r=e.split(t),a=r[0],o=r[1];if(o.length===n)return e;if(o.length>n)return""+a+t+o.slice(0,n)}var i=e.length>n?RegExp("(\\d+)(\\d{"+n+"})"):RegExp("(\\d)(\\d+)"),l=e.match(i);if(l){var a=l[1],o=l[2];return""+a+t+o}}return e},d=function(e,t){var n=t.groupSeparator,r=t.decimalSeparator,a=RegExp("\\d([^"+i(void 0===n?",":n)+i(void 0===r?".":r)+"0-9]+)"),o=e.match(a);return o?o[1]:void 0},v=function(e){var t=e.value,n=e.decimalSeparator,r=e.intlConfig,o=e.decimalScale,l=e.prefix,s=void 0===l?"":l,u=e.suffix,c=void 0===u?"":u;if(""===t||void 0===t)return"";if("-"===t)return"-";var p=RegExp("^\\d?-"+(s?i(s)+"?":"")+"\\d").test(t),f="."!==n?m(t,n,p):t,v={minimumFractionDigits:o||0,maximumFractionDigits:20},g=h((r?new Intl.NumberFormat(r.locale,r.currency?a(a({},v),{style:"currency",currency:r.currency}):v):new Intl.NumberFormat(void 0,v)).formatToParts(Number(f)),e),S=d(g,a({},e)),k=t.slice(-1)===n?n:"",w=(f.match(RegExp("\\d+\\.(\\d+)"))||[])[1];return(void 0===o&&w&&n&&(g=g.includes(n)?g.replace(RegExp("(\\d+)("+i(n)+")(\\d+)","g"),"$1$2"+w):S&&!c?g.replace(S,""+n+w+S):""+g+n+w),c&&k)?""+g+k+c:S&&k?g.replace(S,""+k+S):S&&c?g.replace(S,""+k+c):[g,k,c].join("")},m=function(e,t,n){var r=e;return t&&"."!==t&&(r=r.replace(RegExp(i(t),"g"),"."),n&&"-"===t&&(r="-"+r.slice(1))),r},h=function(e,t){var n=t.prefix,r=t.groupSeparator,a=t.decimalSeparator,i=t.decimalScale,l=t.disableGroupSeparators,s=void 0!==l&&l;return e.reduce(function(e,t,l){var u=t.type,c=t.value;return 0===l&&n?"minusSign"===u?[c,n]:"currency"===u?o(o([],e),[n]):[n,c]:"currency"===u?n?e:o(o([],e),[c]):"group"===u?s?e:o(o([],e),[void 0!==r?r:c]):"decimal"===u?void 0!==i&&0===i?e:o(o([],e),[void 0!==a?a:c]):"fraction"===u?o(o([],e),[void 0!==i?c.slice(0,i):c]):o(o([],e),[c])},[""]).join("")},g={currencySymbol:"",groupSeparator:"",decimalSeparator:"",prefix:"",suffix:""},S=function(e){var t=e||{},n=t.locale,r=t.currency;return(n?new Intl.NumberFormat(n,r?{currency:r,style:"currency"}:void 0):new Intl.NumberFormat).formatToParts(1000.1).reduce(function(e,t,n){return"currency"===t.type?0===n?a(a({},e),{currencySymbol:t.value,prefix:t.value}):a(a({},e),{currencySymbol:t.value,suffix:t.value}):"group"===t.type?a(a({},e),{groupSeparator:t.value}):"decimal"===t.type?a(a({},e),{decimalSeparator:t.value}):e},g)},k=function(e){return RegExp(/\d/,"gi").test(e)},w=function(e,t,n){if(void 0===t&&(t="."),void 0===n||""===e||void 0===e)return e;if(!e.match(/\d/g))return"";var r=e.split(t),a=r[0],o=r[1];if(0===n)return a;var i=o||"";if(i.length<n)for(;i.length<n;)i+="0";else i=i.slice(0,n);return""+a+t+i},b=function(e){var t=e.selectionStart,n=e.value,r=e.lastKeyStroke,a=e.stateValue,o=e.groupSeparator,i=t,l=n;if(a&&i){var s=n.split("");return"Backspace"===r&&a[i]===o&&(s.splice(i-1,1),i-=1),"Delete"===r&&a[i]===o&&(s.splice(i,1),i+=1),{modifiedValue:l=s.join(""),cursorPosition:i}}return{modifiedValue:l,cursorPosition:t}},y=(0,r.forwardRef)(function(e,t){var n=e.allowDecimals,o=e.allowNegativeValue,i=e.id,l=e.name,s=e.className,u=e.customInput,c=e.decimalsLimit,m=e.defaultValue,h=e.disabled,g=e.maxLength,y=e.value,C=e.onValueChange,O=e.fixedDecimalLength,x=e.placeholder,D=e.decimalScale,E=e.prefix,I=e.suffix,V=e.intlConfig,M=e.step,R=e.min,P=e.max,F=e.disableGroupSeparators,L=void 0!==F&&F,N=e.disableAbbreviations,A=e.decimalSeparator,j=e.groupSeparator,B=e.onChange,T=e.onFocus,U=e.onBlur,K=e.onKeyDown,q=e.onKeyUp,$=e.transformRawValue,_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}(e,["allowDecimals","allowNegativeValue","id","name","className","customInput","decimalsLimit","defaultValue","disabled","maxLength","value","onValueChange","fixedDecimalLength","placeholder","decimalScale","prefix","suffix","intlConfig","step","min","max","disableGroupSeparators","disableAbbreviations","decimalSeparator","groupSeparator","onChange","onFocus","onBlur","onKeyDown","onKeyUp","transformRawValue"]);if(A&&k(A))throw Error("decimalSeparator cannot be a number");if(j&&k(j))throw Error("groupSeparator cannot be a number");var z=(0,r.useMemo)(function(){return S(V)},[V]),G=A||z.decimalSeparator||"",X=j||z.groupSeparator||"";if(G&&X&&G===X&&!1===L)throw Error("decimalSeparator cannot be the same as groupSeparator");var Y={decimalSeparator:G,groupSeparator:X,disableGroupSeparators:L,intlConfig:V,prefix:E||z.prefix,suffix:I},W={decimalSeparator:G,groupSeparator:X,allowDecimals:void 0===n||n,decimalsLimit:c||O||2,allowNegativeValue:void 0===o||o,disableAbbreviations:void 0!==N&&N,prefix:E||z.prefix,transformRawValue:$},Z=null!=m?v(a(a({},Y),{decimalScale:D,value:String(m)})):null!=y?v(a(a({},Y),{decimalScale:D,value:String(y)})):"",H=(0,r.useState)(Z),J=H[0],Q=H[1],ee=(0,r.useState)(!1),et=ee[0],en=ee[1],er=(0,r.useState)(0),ea=er[0],eo=er[1],ei=(0,r.useState)(0),el=ei[0],es=ei[1],eu=(0,r.useState)(null),ec=eu[0],ep=eu[1],ef=(0,r.useRef)(null);(0,r.useImperativeHandle)(t,function(){return ef.current});var ed=function(e,t){en(!0);var n=b({selectionStart:t,value:e,lastKeyStroke:ec,stateValue:J,groupSeparator:X}),r=n.modifiedValue,o=n.cursorPosition,i=p(a({value:r},W));if(!g||!(i.replace(/-/g,"").length>g)){if(""===i||"-"===i||i===G){C&&C(void 0,l,{float:null,formatted:"",value:""}),Q(i),eo(1);return}var s=parseFloat(G?i.replace(G,"."):i),u=v(a({value:i},Y));if(null!=o){var c=o+(u.length-e.length);eo(c=c<=0?E?E.length:0:c),es(el+1)}Q(u),C&&C(i,l,{float:s,formatted:u,value:i})}};(0,r.useEffect)(function(){et&&"-"!==J&&ef.current&&document.activeElement===ef.current&&ef.current.setSelectionRange(ea,ea)},[J,ea,ef,et,el]);var ev=a({type:"text",inputMode:"decimal",id:i,name:l,className:s,onChange:function(e){var t=e.target;ed(t.value,t.selectionStart),B&&B(e)},onBlur:function(e){var t=e.target.value,n=p(a({value:t},W));if("-"===n||n===G||!n){Q(""),U&&U(e);return}var r=w(f(n,G,O),G,void 0!==D?D:O),o=parseFloat(r.replace(G,".")),i=v(a(a({},Y),{value:r}));C&&C(r,l,{float:o,formatted:i,value:r}),Q(i),U&&U(e)},onFocus:function(e){return T&&T(e),J?J.length:0},onKeyDown:function(e){var t=e.key;if(ep(t),M&&("ArrowUp"===t||"ArrowDown"===t)){e.preventDefault(),eo(J.length);var n=parseFloat(null!=y?String(y).replace(G,"."):p(a({value:J},W)))||0,r="ArrowUp"===t?n+M:n-M;if(void 0!==R&&r<R||void 0!==P&&r>P)return;var o=String(M).includes(".")?Number(String(M).split(".")[1].length):void 0;ed(String(o?r.toFixed(o):r).replace(".",G))}K&&K(e)},onKeyUp:function(e){var t=e.key,n=e.currentTarget.selectionStart;if("ArrowUp"!==t&&"ArrowDown"!==t&&"-"!==J){var r=d(J,{groupSeparator:X,decimalSeparator:G});if(r&&n&&n>J.length-r.length&&ef.current){var a=J.length-r.length;ef.current.setSelectionRange(a,a)}}q&&q(e)},placeholder:x,disabled:void 0!==h&&h,value:null==y||"-"===J||G&&J===G?J:v(a(a({},Y),{decimalScale:et?void 0:D,value:String(y)})),ref:ef},_);return u?r.createElement(u,a({},ev)):r.createElement("input",a({},ev))});y.displayName="CurrencyInput",t.Z=y},58918:function(e,t,n){e.exports=n(10087)},10087:function(e,t,n){"use strict";var r,a=(r=n(2265))&&"object"==typeof r&&"default"in r?r.default:r,o=n(54887);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=function(e,t,n,r,a,o,i,l){if(!e){var s;if(void 0===t)s=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,o,i,l],c=0;(s=Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}};function u(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}var c={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function p(e,t,n){var r="",a="",o=null,i=[];if(void 0===t&&(t="_"),null==n&&(n=c),!e||"string"!=typeof e)return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(e){l=!l&&"\\"===e||(l||!n[e]?(i.push(r.length),r.length===i.length-1&&(a+=e)):o=r.length+1,r+=e,!1)}),{maskChar:t,formatChars:n,prefix:a,mask:r,lastEditablePosition:o,permanents:i}}function f(e,t){return -1!==e.permanents.indexOf(t)}function d(e,t,n){var r=e.mask,a=e.formatChars;return!!n&&(f(e,t)?r[t]===n:new RegExp(a[r[t]]).test(n))}function v(e,t){return t.split("").every(function(t,n){return f(e,n)||!d(e,n,t)})}function m(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&f(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var a=r.length,o=t.length;o>=r.length;o--){var i=t[o];if(!f(e,o)&&d(e,o,i)){a=o+1;break}}return a}function h(e,t){return m(e,t)===e.mask.length}function g(e,t){var n=e.maskChar,r=e.mask,a=e.prefix;if(!n){for((t=S(e,"",t,0)).length<a.length&&(t=a);t.length<r.length&&f(e,t.length);)t+=r[t.length];return t}if(t)return S(e,g(e,""),t,0);for(var o=0;o<r.length;o++)f(e,o)?t+=r[o]:t+=n;return t}function S(e,t,n,r){var a=e.mask,o=e.maskChar,i=e.prefix,l=n.split(""),s=h(e,t);return!o&&r>t.length&&(t+=a.slice(t.length,r)),l.every(function(n){for(var l,u;f(e,u=r)&&n!==a[u];){if(r>=t.length&&(t+=a[r]),l=r,o&&f(e,l)&&n===o)return!0;if(++r>=a.length)return!1}return!d(e,r,n)&&n!==o||(r<t.length?t=o||s||r<i.length?t.slice(0,r)+n+t.slice(r+1):g(e,t=t.slice(0,r)+n+t.slice(r)):o||(t+=n),++r<a.length)}),t}function k(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!f(e,r))return r;return null}function w(e){return e||0===e?e+"":""}function b(e){return"function"==typeof e}function y(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function C(e){return(y()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function O(e){(y()||clearTimeout)(e)}var x=function(e){function t(t){var n=e.call(this,t)||this;n.focused=!1,n.mounted=!1,n.previousSelection=null,n.selectionDeferId=null,n.saveSelectionLoopDeferId=null,n.saveSelectionLoop=function(){n.previousSelection=n.getSelection(),n.saveSelectionLoopDeferId=C(n.saveSelectionLoop)},n.runSaveSelectionLoop=function(){null===n.saveSelectionLoopDeferId&&n.saveSelectionLoop()},n.stopSaveSelectionLoop=function(){null!==n.saveSelectionLoopDeferId&&(O(n.saveSelectionLoopDeferId),n.saveSelectionLoopDeferId=null,n.previousSelection=null)},n.getInputDOMNode=function(){if(!n.mounted)return null;var e=o.findDOMNode(l(l(n))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw Error("react-input-mask: inputComponent doesn't contain input node");return e},n.getInputValue=function(){var e=n.getInputDOMNode();return e?e.value:null},n.setInputValue=function(e){var t=n.getInputDOMNode();t&&(n.value=e,t.value=e)},n.setCursorToEnd=function(){var e=m(n.maskOptions,n.value),t=k(n.maskOptions,e);null!==t&&n.setCursorPosition(t)},n.setSelection=function(e,t,r){void 0===r&&(r={});var a=n.getInputDOMNode(),o=n.isFocused();a&&o&&(r.deferred||u(a,e,t),null!==n.selectionDeferId&&O(n.selectionDeferId),n.selectionDeferId=C(function(){n.selectionDeferId=null,u(a,e,t)}),n.previousSelection={start:e,end:t,length:Math.abs(t-e)})},n.getSelection=function(){return function(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}(n.getInputDOMNode())},n.getCursorPosition=function(){return n.getSelection().start},n.setCursorPosition=function(e){n.setSelection(e,e)},n.isFocused=function(){return n.focused},n.getBeforeMaskedValueChangeConfig=function(){var e=n.maskOptions,t=e.mask,r=e.maskChar,a=e.permanents,o=e.formatChars;return{mask:t,maskChar:r,permanents:a,alwaysShowMask:!!n.props.alwaysShowMask,formatChars:o}},n.isInputAutofilled=function(e,t,r,a){var o=n.getInputDOMNode();try{if(o.matches(":-webkit-autofill"))return!0}catch(e){}return!n.focused||a.end<r.length&&t.end===e.length},n.onChange=function(e){var t,r,a,o,i,s,u,c,p,v,m,h,w,y,C,O,x,D,E,I=l(l(n)).beforePasteState,V=l(l(n)).previousSelection,M=n.props.beforeMaskedValueChange,R=n.getInputValue(),P=n.value,F=n.getSelection();n.isInputAutofilled(R,F,P,V)&&(P=g(n.maskOptions,""),V={start:0,end:0,length:0}),I&&(V=I.selection,P=I.value,F={start:V.start+R.length,end:V.start+R.length,length:0},R=P.slice(0,V.start)+R+P.slice(V.end),n.beforePasteState=null);var L=(t=n.maskOptions,r=R,a=F,o=P,i=V,h=t.mask,w=t.prefix,y=t.lastEditablePosition,C=r,O="",x=0,D=0,E=Math.min(i.start,a.start),a.end>i.start?(s=O=C.slice(i.start,a.end),u=E,c=t.mask,p=t.maskChar,v=s.split(""),m=u,v.every(function(e){for(var n;f(t,n=u)&&e!==c[n];)if(++u>=c.length)return!1;return(d(t,u,e)||e===p)&&u++,u<c.length}),D=(x=u-m)?i.length:0):C.length<o.length&&(D=o.length-C.length),C=o,D&&(1!==D||i.length||(E=i.start===a.start?k(t,a.start):function(e,t){for(var n=t;0<=n;--n)if(!f(e,n))return n;return null}(t,a.start)),C=function(e,t,n,r){var a=n+r,o=e.maskChar,i=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(t,r){return r<n||a<=r?t:f(e,r)?i[r]:o}).join("");for(var u=a;u<s.length;u++)f(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,a-n),g(e,t=s.join(""))}(t,C,E,D)),C=S(t,C,O,E),(E+=x)>=h.length?E=h.length:E<w.length&&!x?E=w.length:E>=w.length&&E<y&&x&&(E=k(t,E)),O||(O=null),{value:C=g(t,C),enteredString:O,selection:{start:E,end:E}}),N=L.enteredString,A=L.selection,j=L.value;if(b(M)){var B=M({value:j,selection:A},{value:P,selection:V},N,n.getBeforeMaskedValueChangeConfig());j=B.value,A=B.selection}n.setInputValue(j),b(n.props.onChange)&&n.props.onChange(e),n.isWindowsPhoneBrowser?n.setSelection(A.start,A.end,{deferred:!0}):n.setSelection(A.start,A.end)},n.onFocus=function(e){var t=n.props.beforeMaskedValueChange,r=n.maskOptions,a=r.mask,o=r.prefix;if(n.focused=!0,n.mounted=!0,a){if(n.value)m(n.maskOptions,n.value)<n.maskOptions.mask.length&&n.setCursorToEnd();else{var i=g(n.maskOptions,o),l=g(n.maskOptions,i),s=m(n.maskOptions,l),u=k(n.maskOptions,s),c={start:u,end:u};if(b(t)){var p=t({value:l,selection:c},{value:n.value,selection:null},null,n.getBeforeMaskedValueChangeConfig());l=p.value,c=p.selection}var f=l!==n.getInputValue();f&&n.setInputValue(l),f&&b(n.props.onChange)&&n.props.onChange(e),n.setSelection(c.start,c.end)}n.runSaveSelectionLoop()}b(n.props.onFocus)&&n.props.onFocus(e)},n.onBlur=function(e){var t=n.props.beforeMaskedValueChange,r=n.maskOptions.mask;if(n.stopSaveSelectionLoop(),n.focused=!1,r&&!n.props.alwaysShowMask&&v(n.maskOptions,n.value)){var a="";b(t)&&(a=t({value:a,selection:null},{value:n.value,selection:n.previousSelection},null,n.getBeforeMaskedValueChangeConfig()).value);var o=a!==n.getInputValue();o&&n.setInputValue(a),o&&b(n.props.onChange)&&n.props.onChange(e)}b(n.props.onBlur)&&n.props.onBlur(e)},n.onMouseDown=function(e){!n.focused&&document.addEventListener&&(n.mouseDownX=e.clientX,n.mouseDownY=e.clientY,n.mouseDownTime=(new Date).getTime(),document.addEventListener("mouseup",function e(t){if(document.removeEventListener("mouseup",e),n.focused){var r=Math.max(Math.abs(t.clientX-n.mouseDownX),Math.abs(t.clientY-n.mouseDownY)),a=(new Date).getTime()-n.mouseDownTime;(r<=10&&a<=200||r<=5&&a<=300)&&n.setCursorToEnd()}})),b(n.props.onMouseDown)&&n.props.onMouseDown(e)},n.onPaste=function(e){b(n.props.onPaste)&&n.props.onPaste(e),e.defaultPrevented||(n.beforePasteState={value:n.getInputValue(),selection:n.getSelection()},n.setInputValue(""))},n.handleRef=function(e){null==n.props.children&&b(n.props.inputRef)&&n.props.inputRef(e)};var r=t.mask,a=t.maskChar,i=t.formatChars,s=t.alwaysShowMask,c=t.beforeMaskedValueChange,h=t.defaultValue,y=t.value;n.maskOptions=p(r,a,i),null==h&&(h=""),null==y&&(y=h);var x=w(y);if(n.maskOptions.mask&&(s||x)&&(x=g(n.maskOptions,x),b(c))){var D=t.value;null==t.value&&(D=h),x=c({value:x,selection:null},{value:D=w(D),selection:null},null,n.getBeforeMaskedValueChangeConfig()).value}return n.value=x,n}t.prototype=Object.create(e.prototype),function(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var a=n[r],o=Object.getOwnPropertyDescriptor(t,a);o&&o.configurable&&void 0===e[a]&&Object.defineProperty(e,a,o)}}(t.prototype.constructor=t,e);var n=t.prototype;return n.componentDidMount=function(){var e;this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=(e=navigator.userAgent,/windows/i.test(e)&&/phone/i.test(e)),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,n=t.beforeMaskedValueChange,r=t.alwaysShowMask,a=t.mask,o=t.maskChar,i=t.formatChars,l=this.maskOptions,s=r||this.isFocused(),u=null!=this.props.value,c=u?w(this.props.value):this.value,f=e?e.start:null;if(this.maskOptions=p(a,o,i),this.maskOptions.mask){!l.mask&&this.isFocused()&&this.runSaveSelectionLoop();var d=this.maskOptions.mask&&this.maskOptions.mask!==l.mask;if(l.mask||u||(c=this.getInputValue()),(d||this.maskOptions.mask&&(c||s))&&(c=g(this.maskOptions,c)),d){var S=m(this.maskOptions,c);(null===f||S<f)&&(f=h(this.maskOptions,c)?S:k(this.maskOptions,S))}!this.maskOptions.mask||!v(this.maskOptions,c)||s||u&&this.props.value||(c="");var y={start:f,end:f};if(b(n)){var C=n({value:c,selection:y},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=C.value,y=C.selection}this.value=c;var O=this.getInputValue()!==this.value;O?(this.setInputValue(this.value),this.forceUpdate()):d&&this.forceUpdate();var x=!1;null!=y.start&&null!=y.end&&(x=!e||e.start!==y.start||e.end!==y.end),(x||O)&&this.setSelection(y.start,y.end)}else l.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&O(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var e,t=this.props,n=(t.mask,t.alwaysShowMask,t.maskChar,t.formatChars,t.inputRef,t.beforeMaskedValueChange,t.children),r=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)0<=t.indexOf(n=o[r])||(a[n]=e[n]);return a}(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(n){b(n)||s(!1);var o=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],l=i({},r);o.forEach(function(e){return delete l[e]}),e=n(l),o.filter(function(t){return null!=e.props[t]&&e.props[t]!==r[t]}).length&&s(!1)}else e=a.createElement("input",i({ref:this.handleRef},r));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(r.disabled||r.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),null!=r.value&&(u.value=this.value)),e=a.cloneElement(e,u)},t}(a.Component);e.exports=x}}]);