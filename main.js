(()=>{var t={9662:(t,e,r)=>{var n=r(7854),o=r(614),a=r(6330),i=n.TypeError;t.exports=function(t){if(o(t))return t;throw i(a(t)+" is not a function")}},9670:(t,e,r)=>{var n=r(7854),o=r(111),a=n.String,i=n.TypeError;t.exports=function(t){if(o(t))return t;throw i(a(t)+" is not an object")}},8533:(t,e,r)=>{"use strict";var n=r(2092).forEach,o=r(9341)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},1318:(t,e,r)=>{var n=r(5656),o=r(1400),a=r(6244),i=function(t){return function(e,r,i){var c,s=n(e),u=a(s),l=o(i,u);if(t&&r!=r){for(;u>l;)if((c=s[l++])!=c)return!0}else for(;u>l;l++)if((t||l in s)&&s[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},2092:(t,e,r)=>{var n=r(9974),o=r(1702),a=r(8361),i=r(7908),c=r(6244),s=r(5417),u=o([].push),l=function(t){var e=1==t,r=2==t,o=3==t,l=4==t,f=6==t,p=7==t,d=5==t||f;return function(v,g,b,h){for(var m,y,x=i(v),S=a(x),E=n(g,b),w=c(S),L=0,O=h||s,k=e?O(v,w):r||p?O(v,0):void 0;w>L;L++)if((d||L in S)&&(y=E(m=S[L],L,x),t))if(e)k[L]=y;else if(y)switch(t){case 3:return!0;case 5:return m;case 6:return L;case 2:u(k,m)}else switch(t){case 4:return!1;case 7:u(k,m)}return f?-1:o||l?l:k}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},9341:(t,e,r)=>{"use strict";var n=r(7293);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){return 1},1)}))}},7475:(t,e,r)=>{var n=r(7854),o=r(3157),a=r(4411),i=r(111),c=r(5112)("species"),s=n.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,(a(e)&&(e===s||o(e.prototype))||i(e)&&null===(e=e[c]))&&(e=void 0)),void 0===e?s:e}},5417:(t,e,r)=>{var n=r(7475);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},4326:(t,e,r)=>{var n=r(1702),o=n({}.toString),a=n("".slice);t.exports=function(t){return a(o(t),8,-1)}},648:(t,e,r)=>{var n=r(7854),o=r(1694),a=r(614),i=r(4326),c=r(5112)("toStringTag"),s=n.Object,u="Arguments"==i(function(){return arguments}());t.exports=o?i:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=s(t),c))?r:u?i(e):"Object"==(n=i(e))&&a(e.callee)?"Arguments":n}},9920:(t,e,r)=>{var n=r(2597),o=r(3887),a=r(1236),i=r(3070);t.exports=function(t,e,r){for(var c=o(e),s=i.f,u=a.f,l=0;l<c.length;l++){var f=c[l];n(t,f)||r&&n(r,f)||s(t,f,u(e,f))}}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),a=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,a(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),a=n.document,i=o(a)&&o(a.createElement);t.exports=function(t){return i?a.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:(t,e,r)=>{var n=r(317)("span").classList,o=n&&n.constructor&&n.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:(t,e,r)=>{var n,o,a=r(7854),i=r(8113),c=a.process,s=a.Deno,u=c&&c.versions||s&&s.version,l=u&&u.v8;l&&(o=(n=l.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&i&&(!(n=i.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,a=r(8880),i=r(1320),c=r(3505),s=r(9920),u=r(4705);t.exports=function(t,e){var r,l,f,p,d,v=t.target,g=t.global,b=t.stat;if(r=g?n:b?n[v]||c(v,{}):(n[v]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(d=o(r,l))&&d.value:r[l],!u(g?l:v+(b?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;s(p,f)}(t.sham||f&&f.sham)&&a(p,"sham",!0),i(r,l,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:(t,e,r)=>{var n=r(1702),o=r(9662),a=r(4374),i=n(n.bind);t.exports=function(t,e){return o(t),void 0===e?t:a?i(t,e):function(){return t.apply(e,arguments)}}},4374:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:(t,e,r)=>{var n=r(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,e,r)=>{var n=r(9781),o=r(2597),a=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,c=o(a,"name"),s=c&&"something"===function(){}.name,u=c&&(!n||n&&i(a,"name").configurable);t.exports={EXISTS:c,PROPER:s,CONFIGURABLE:u}},1702:(t,e,r)=>{var n=r(4374),o=Function.prototype,a=o.bind,i=o.call,c=n&&a.bind(i,i);t.exports=n?function(t){return t&&c(t)}:function(t){return t&&function(){return i.apply(t,arguments)}}},5005:(t,e,r)=>{var n=r(7854),o=r(614),a=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?a(n[t]):n[t]&&n[t][e]}},8173:(t,e,r)=>{var n=r(9662);t.exports=function(t,e){var r=t[e];return null==r?void 0:n(r)}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:(t,e,r)=>{var n=r(1702),o=r(7908),a=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return a(o(t),e)}},3501:t=>{t.exports={}},4664:(t,e,r)=>{var n=r(9781),o=r(7293),a=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(7854),o=r(1702),a=r(7293),i=r(4326),c=n.Object,s=o("".split);t.exports=a((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?s(t,""):c(t)}:c},2788:(t,e,r)=>{var n=r(1702),o=r(614),a=r(5465),i=n(Function.toString);o(a.inspectSource)||(a.inspectSource=function(t){return i(t)}),t.exports=a.inspectSource},9909:(t,e,r)=>{var n,o,a,i=r(8536),c=r(7854),s=r(1702),u=r(111),l=r(8880),f=r(2597),p=r(5465),d=r(6200),v=r(3501),g="Object already initialized",b=c.TypeError,h=c.WeakMap;if(i||p.state){var m=p.state||(p.state=new h),y=s(m.get),x=s(m.has),S=s(m.set);n=function(t,e){if(x(m,t))throw new b(g);return e.facade=t,S(m,t,e),e},o=function(t){return y(m,t)||{}},a=function(t){return x(m,t)}}else{var E=d("state");v[E]=!0,n=function(t,e){if(f(t,E))throw new b(g);return e.facade=t,l(t,E,e),e},o=function(t){return f(t,E)?t[E]:{}},a=function(t){return f(t,E)}}t.exports={set:n,get:o,has:a,enforce:function(t){return a(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw b("Incompatible receiver, "+t+" required");return r}}}},3157:(t,e,r)=>{var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},614:t=>{t.exports=function(t){return"function"==typeof t}},4411:(t,e,r)=>{var n=r(1702),o=r(7293),a=r(614),i=r(648),c=r(5005),s=r(2788),u=function(){},l=[],f=c("Reflect","construct"),p=/^\s*(?:class|function)\b/,d=n(p.exec),v=!p.exec(u),g=function(t){if(!a(t))return!1;try{return f(u,l,t),!0}catch(t){return!1}},b=function(t){if(!a(t))return!1;switch(i(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return v||!!d(p,s(t))}catch(t){return!0}};b.sham=!0,t.exports=!f||o((function(){var t;return g(g.call)||!g(Object)||!g((function(){t=!0}))||t}))?b:g},4705:(t,e,r)=>{var n=r(7293),o=r(614),a=/#|\.prototype\./,i=function(t,e){var r=s[c(t)];return r==l||r!=u&&(o(e)?n(e):!!e)},c=i.normalize=function(t){return String(t).replace(a,".").toLowerCase()},s=i.data={},u=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},111:(t,e,r)=>{var n=r(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,e,r)=>{var n=r(7854),o=r(5005),a=r(614),i=r(7976),c=r(3307),s=n.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return a(e)&&i(e.prototype,s(t))}},6244:(t,e,r)=>{var n=r(7466);t.exports=function(t){return n(t.length)}},133:(t,e,r)=>{var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,e,r)=>{var n=r(7854),o=r(614),a=r(2788),i=n.WeakMap;t.exports=o(i)&&/native code/.test(a(i))},3070:(t,e,r)=>{var n=r(7854),o=r(9781),a=r(4664),i=r(3353),c=r(9670),s=r(4948),u=n.TypeError,l=Object.defineProperty,f=Object.getOwnPropertyDescriptor;e.f=o?i?function(t,e,r){if(c(t),e=s(e),c(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=f(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return l(t,e,r)}:l:function(t,e,r){if(c(t),e=s(e),c(r),a)try{return l(t,e,r)}catch(t){}if("get"in r||"set"in r)throw u("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(6916),a=r(5296),i=r(9114),c=r(5656),s=r(4948),u=r(2597),l=r(4664),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=c(t),e=s(e),l)try{return f(t,e)}catch(t){}if(u(t,e))return i(!o(a.f,t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},7976:(t,e,r)=>{var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:(t,e,r)=>{var n=r(1702),o=r(2597),a=r(5656),i=r(1318).indexOf,c=r(3501),s=n([].push);t.exports=function(t,e){var r,n=a(t),u=0,l=[];for(r in n)!o(c,r)&&o(n,r)&&s(l,r);for(;e.length>u;)o(n,r=e[u++])&&(~i(l,r)||s(l,r));return l}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},288:(t,e,r)=>{"use strict";var n=r(1694),o=r(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},2140:(t,e,r)=>{var n=r(7854),o=r(6916),a=r(614),i=r(111),c=n.TypeError;t.exports=function(t,e){var r,n;if("string"===e&&a(r=t.toString)&&!i(n=o(r,t)))return n;if(a(r=t.valueOf)&&!i(n=o(r,t)))return n;if("string"!==e&&a(r=t.toString)&&!i(n=o(r,t)))return n;throw c("Can't convert object to primitive value")}},3887:(t,e,r)=>{var n=r(5005),o=r(1702),a=r(8006),i=r(5181),c=r(9670),s=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=a.f(c(t)),r=i.f;return r?s(e,r(t)):e}},1320:(t,e,r)=>{var n=r(7854),o=r(614),a=r(2597),i=r(8880),c=r(3505),s=r(2788),u=r(9909),l=r(6530).CONFIGURABLE,f=u.get,p=u.enforce,d=String(String).split("String");(t.exports=function(t,e,r,s){var u,f=!!s&&!!s.unsafe,v=!!s&&!!s.enumerable,g=!!s&&!!s.noTargetGet,b=s&&void 0!==s.name?s.name:e;o(r)&&("Symbol("===String(b).slice(0,7)&&(b="["+String(b).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!a(r,"name")||l&&r.name!==b)&&i(r,"name",b),(u=p(r)).source||(u.source=d.join("string"==typeof b?b:""))),t!==n?(f?!g&&t[e]&&(v=!0):delete t[e],v?t[e]=r:i(t,e,r)):v?t[e]=r:c(e,r)})(Function.prototype,"toString",(function(){return o(this)&&f(this).source||s(this)}))},4488:(t,e,r)=>{var n=r(7854).TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},3505:(t,e,r)=>{var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),a=n("keys");t.exports=function(t){return a[t]||(a[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3505),a="__core-js_shared__",i=n[a]||o(a,{});t.exports=i},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.2",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6091:(t,e,r)=>{var n=r(6530).PROPER,o=r(7293),a=r(1361);t.exports=function(t){return o((function(){return!!a[t]()||"​᠎"!=="​᠎"[t]()||n&&a[t].name!==t}))}},3111:(t,e,r)=>{var n=r(1702),o=r(4488),a=r(1340),i=r(1361),c=n("".replace),s="["+i+"]",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),f=function(t){return function(e){var r=a(o(e));return 1&t&&(r=c(r,u,"")),2&t&&(r=c(r,l,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},1400:(t,e,r)=>{var n=r(9303),o=Math.max,a=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):a(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?r:e)(n)}},7466:(t,e,r)=>{var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(7854),o=r(4488),a=n.Object;t.exports=function(t){return a(o(t))}},7593:(t,e,r)=>{var n=r(7854),o=r(6916),a=r(111),i=r(2190),c=r(8173),s=r(2140),u=r(5112),l=n.TypeError,f=u("toPrimitive");t.exports=function(t,e){if(!a(t)||i(t))return t;var r,n=c(t,f);if(n){if(void 0===e&&(e="default"),r=o(n,t,e),!a(r)||i(r))return r;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},4948:(t,e,r)=>{var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:(t,e,r)=>{var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},1340:(t,e,r)=>{var n=r(7854),o=r(648),a=n.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return a(t)}},6330:(t,e,r)=>{var n=r(7854).String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},9711:(t,e,r)=>{var n=r(1702),o=0,a=Math.random(),i=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+i(++o+a,36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,e,r)=>{var n=r(9781),o=r(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:(t,e,r)=>{var n=r(7854),o=r(2309),a=r(2597),i=r(9711),c=r(133),s=r(3307),u=o("wks"),l=n.Symbol,f=l&&l.for,p=s?l:l&&l.withoutSetter||i;t.exports=function(t){if(!a(u,t)||!c&&"string"!=typeof u[t]){var e="Symbol."+t;c&&a(l,t)?u[t]=l[t]:u[t]=s&&f?f(e):p(e)}return u[t]}},1361:t=>{t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},1539:(t,e,r)=>{var n=r(1694),o=r(1320),a=r(288);n||o(Object.prototype,"toString",a,{unsafe:!0})},3210:(t,e,r)=>{"use strict";var n=r(2109),o=r(3111).trim;n({target:"String",proto:!0,forced:r(6091)("trim")},{trim:function(){return o(this)}})},4747:(t,e,r)=>{var n=r(7854),o=r(8324),a=r(8509),i=r(8533),c=r(8880),s=function(t){if(t&&t.forEach!==i)try{c(t,"forEach",i)}catch(e){t.forEach=i}};for(var u in o)o[u]&&s(n[u]&&n[u].prototype);s(a)}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r(1539),r(4747),r(3210),new(function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.page=t,this.draggableEl=null,this.draggableCloneEl=null,this.startPositionX=null,this.startPositionY=null,this.draggableElHeight=null}var r,n,o;return r=e,o=[{key:"mouseLeaveHandler",value:function(t){t.preventDefault();var e=t.target.querySelector(".prev-item");e&&e.remove()}},{key:"createGhostItem",value:function(t){var e=document.createElement("div");return e.classList.add("prev-item"),e.style.height="".concat(t,"px"),e}},{key:"createAddFormElement",value:function(){var t=document.createElement("div");t.classList.add("block__add");var e=document.createElement("textArea");e.classList.add("block__add-field"),e.setAttribute("rows",3),e.setAttribute("placeholder","Введите текст карточки");var r=document.createElement("div");r.classList.add("block__add-buttons");var n=document.createElement("button");n.classList.add("block__add-button"),n.dataset.addButton="add",n.textContent="Добавить";var o=document.createElement("button");return o.classList.add("block__add-button"),o.dataset.addButton="close",o.textContent="Закрыть",r.append(n),r.append(o),t.append(e),t.append(r),t}},{key:"createCardItem",value:function(t){var e=document.createElement("p");e.classList.add("block__item"),e.textContent=t;var r=document.createElement("span");return r.classList.add("block__item-remove"),e.append(r),e}}],(n=[{key:"init",value:function(){var t=this;this.page.querySelectorAll(".block").forEach((function(e){e.addEventListener("click",t.blockClickHandler.bind(t)),e.addEventListener("mouseleave",t.constructor.mouseLeaveHandler),e.querySelector(".block__items").addEventListener("mousedown",t.mouseDownHandler.bind(t))})),this.page.addEventListener("mousemove",this.mouseMoveHandler.bind(this)),this.page.addEventListener("mouseup",this.mouseUpHandler.bind(this))}},{key:"mouseDownHandler",value:function(t){if(t.preventDefault(),"P"===t.target.tagName){this.draggableEl=t.target;var e=this.draggableEl.getBoundingClientRect(),r=e.top,n=e.left,o=e.height;this.draggableElHeight=o,this.draggableCloneEl=this.draggableEl.cloneNode(!0),this.draggableCloneEl.classList.add("draggable"),this.startPositionY=t.pageY-r,this.startPositionX=t.pageX-n,this.draggableCloneEl.style.top="".concat(window.scrollY+r,"px"),this.draggableCloneEl.style.left="".concat(window.scrollX+n,"px"),this.draggableEl.style.display="none",document.body.appendChild(this.draggableCloneEl)}}},{key:"mouseMoveHandler",value:function(t){if(t.preventDefault(),this.draggableEl){this.draggableCloneEl.style.top="".concat(window.scrollY+t.pageY-this.startPositionY,"px"),this.draggableCloneEl.style.left="".concat(window.scrollX+t.pageX-this.startPositionX,"px");var e=document.elementFromPoint(t.pageX,t.pageY);if("P"===e.tagName){var r=e.getBoundingClientRect(),n=r.top,o=r.height;if(t.pageY<n+o/2){var a=e.previousElementSibling;if(a&&a.classList.contains("prev-item"))return;this.removePrevItem();var i=this.constructor.createGhostItem(this.draggableElHeight);e.before(i)}if(t.pageY>=n+o/2){var c=e.nextElementSibling;if(c&&c.classList.contains("prev-item"))return;this.removePrevItem();var s=this.constructor.createGhostItem(this.draggableElHeight);e.after(s)}}if(e.closest(".block")){if(this.page.querySelector(".prev-item"))return;var u=this.constructor.createGhostItem(this.draggableElHeight);e.closest(".block").querySelector(".block__items").append(u)}e.classList.contains("trello")&&this.removePrevItem()}}},{key:"mouseUpHandler",value:function(t){if(t.preventDefault(),this.draggableEl){if(t.target.classList.contains("trello"))return document.body.removeChild(this.draggableCloneEl),this.draggableEl.style.display="block",this.draggableEl.classList.remove("draggable"),this.draggableEl=null,void(this.draggableCloneEl=null);var e=this.page.querySelector(".prev-item");e&&e.replaceWith(this.draggableEl),this.draggableEl.style.display="block",document.body.removeChild(this.draggableCloneEl),this.draggableEl=null,this.draggableCloneEl=null}}},{key:"removePrevItem",value:function(){var t=this.page.querySelector(".prev-item");t&&t.remove()}},{key:"blockClickHandler",value:function(t){t.preventDefault();var e=t.target;if(e.classList.contains("block__item-remove")&&e.closest(".block__item").remove(),"create"===e.dataset.addButton){var r=this.page.querySelector(".block__add");r&&(r.remove(),this.page.querySelector(".hidden").classList.remove("hidden")),e.before(this.constructor.createAddFormElement()),e.classList.add("hidden")}if("add"===e.dataset.addButton){var n=t.currentTarget.querySelector(".block__add-field").value.trim();if(""===n)return;var o=this.constructor.createCardItem(n);t.currentTarget.querySelector(".block__items").append(o),t.currentTarget.querySelector(".block__add").remove(),t.currentTarget.querySelector('[data-add-button="create"]').classList.remove("hidden")}"close"===e.dataset.addButton&&(t.currentTarget.querySelector(".block__add").remove(),t.currentTarget.querySelector('[data-add-button="create"]').classList.remove("hidden"))}}])&&t(r.prototype,n),o&&t(r,o),Object.defineProperty(r,"prototype",{writable:!1}),e}())(document.querySelector("#trello")).init()})()})();