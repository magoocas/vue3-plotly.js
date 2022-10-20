var mr=Object.defineProperty;var f=(r,n)=>mr(r,"name",{value:n,configurable:!0});import{i as z}from"./iframe.9593e81b.js";import{o as br}from"./index.8cde812d.js";var Sr={exports:{}},nr={},dr=f(function(n){return n&&typeof n=="object"&&typeof n.copy=="function"&&typeof n.fill=="function"&&typeof n.readUInt8=="function"},"isBuffer"),J={exports:{}};typeof Object.create=="function"?J.exports=f(function(n,i){n.super_=i,n.prototype=Object.create(i.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}})},"inherits"):J.exports=f(function(n,i){n.super_=i;var u=f(function(){},"TempCtor");u.prototype=i.prototype,n.prototype=new u,n.prototype.constructor=n},"inherits");(function(r){var n=/%[sdj%]/g;r.format=function(t){if(!N(t)){for(var e=[],o=0;o<arguments.length;o++)e.push(s(arguments[o]));return e.join(" ")}for(var o=1,c=arguments,h=c.length,p=String(t).replace(n,function(y){if(y==="%%")return"%";if(o>=h)return y;switch(y){case"%s":return String(c[o++]);case"%d":return Number(c[o++]);case"%j":try{return JSON.stringify(c[o++])}catch{return"[Circular]"}default:return y}}),l=c[o];o<h;l=c[++o])B(l)||!q(l)?p+=" "+l:p+=" "+s(l);return p},r.deprecate=function(t,e){if(O(z.process))return function(){return r.deprecate(t,e).apply(this,arguments)};if(process.noDeprecation===!0)return t;var o=!1;function c(){if(!o){if(process.throwDeprecation)throw new Error(e);process.traceDeprecation?console.trace(e):console.error(e),o=!0}return t.apply(this,arguments)}return f(c,"deprecated"),c};var i={},u;r.debuglog=function(t){if(O(u)&&(u=process.env.NODE_DEBUG||""),t=t.toUpperCase(),!i[t])if(new RegExp("\\b"+t+"\\b","i").test(u)){var e=process.pid;i[t]=function(){var o=r.format.apply(r,arguments);console.error("%s %d: %s",t,e,o)}}else i[t]=function(){};return i[t]};function s(t,e){var o={seen:[],stylize:m};return arguments.length>=3&&(o.depth=arguments[2]),arguments.length>=4&&(o.colors=arguments[3]),M(e)?o.showHidden=e:e&&r._extend(o,e),O(o.showHidden)&&(o.showHidden=!1),O(o.depth)&&(o.depth=2),O(o.colors)&&(o.colors=!1),O(o.customInspect)&&(o.customInspect=!0),o.colors&&(o.stylize=d),w(o,t,o.depth)}f(s,"inspect"),r.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function d(t,e){var o=s.styles[e];return o?"\x1B["+s.colors[o][0]+"m"+t+"\x1B["+s.colors[o][1]+"m":t}f(d,"stylizeWithColor");function m(t,e){return t}f(m,"stylizeNoColor");function v(t){var e={};return t.forEach(function(o,c){e[o]=!0}),e}f(v,"arrayToHash");function w(t,e,o){if(t.customInspect&&e&&F(e.inspect)&&e.inspect!==r.inspect&&!(e.constructor&&e.constructor.prototype===e)){var c=e.inspect(o,t);return N(c)||(c=w(t,c,o)),c}var h=b(t,e);if(h)return h;var p=Object.keys(e),l=v(p);if(t.showHidden&&(p=Object.getOwnPropertyNames(e)),P(e)&&(p.indexOf("message")>=0||p.indexOf("description")>=0))return U(e);if(p.length===0){if(F(e)){var y=e.name?": "+e.name:"";return t.stylize("[Function"+y+"]","special")}if(k(e))return t.stylize(RegExp.prototype.toString.call(e),"regexp");if($(e))return t.stylize(Date.prototype.toString.call(e),"date");if(P(e))return U(e)}var g="",j=!1,_=["{","}"];if(G(e)&&(j=!0,_=["[","]"]),F(e)){var hr=e.name?": "+e.name:"";g=" [Function"+hr+"]"}if(k(e)&&(g=" "+RegExp.prototype.toString.call(e)),$(e)&&(g=" "+Date.prototype.toUTCString.call(e)),P(e)&&(g=" "+U(e)),p.length===0&&(!j||e.length==0))return _[0]+g+_[1];if(o<0)return k(e)?t.stylize(RegExp.prototype.toString.call(e),"regexp"):t.stylize("[Object]","special");t.seen.push(e);var I;return j?I=sr(t,e,o,l,p):I=p.map(function(Er){return R(t,e,o,l,Er,j)}),t.seen.pop(),ar(I,g,_)}f(w,"formatValue");function b(t,e){if(O(e))return t.stylize("undefined","undefined");if(N(e)){var o="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(o,"string")}if(V(e))return t.stylize(""+e,"number");if(M(e))return t.stylize(""+e,"boolean");if(B(e))return t.stylize("null","null")}f(b,"formatPrimitive");function U(t){return"["+Error.prototype.toString.call(t)+"]"}f(U,"formatError");function sr(t,e,o,c,h){for(var p=[],l=0,y=e.length;l<y;++l)T(e,String(l))?p.push(R(t,e,o,c,String(l),!0)):p.push("");return h.forEach(function(g){g.match(/^\d+$/)||p.push(R(t,e,o,c,g,!0))}),p}f(sr,"formatArray");function R(t,e,o,c,h,p){var l,y,g;if(g=Object.getOwnPropertyDescriptor(e,h)||{value:e[h]},g.get?g.set?y=t.stylize("[Getter/Setter]","special"):y=t.stylize("[Getter]","special"):g.set&&(y=t.stylize("[Setter]","special")),T(c,h)||(l="["+h+"]"),y||(t.seen.indexOf(g.value)<0?(B(o)?y=w(t,g.value,null):y=w(t,g.value,o-1),y.indexOf(`
`)>-1&&(p?y=y.split(`
`).map(function(j){return"  "+j}).join(`
`).substr(2):y=`
`+y.split(`
`).map(function(j){return"   "+j}).join(`
`))):y=t.stylize("[Circular]","special")),O(l)){if(p&&h.match(/^\d+$/))return y;l=JSON.stringify(""+h),l.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(l=l.substr(1,l.length-2),l=t.stylize(l,"name")):(l=l.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),l=t.stylize(l,"string"))}return l+": "+y}f(R,"formatProperty");function ar(t,e,o){var c=t.reduce(function(h,p){return p.indexOf(`
`)>=0,h+p.replace(/\u001b\[\d\d?m/g,"").length+1},0);return c>60?o[0]+(e===""?"":e+`
 `)+" "+t.join(`,
  `)+" "+o[1]:o[0]+e+" "+t.join(", ")+" "+o[1]}f(ar,"reduceToSingleString");function G(t){return Array.isArray(t)}f(G,"isArray"),r.isArray=G;function M(t){return typeof t=="boolean"}f(M,"isBoolean"),r.isBoolean=M;function B(t){return t===null}f(B,"isNull"),r.isNull=B;function lr(t){return t==null}f(lr,"isNullOrUndefined"),r.isNullOrUndefined=lr;function V(t){return typeof t=="number"}f(V,"isNumber"),r.isNumber=V;function N(t){return typeof t=="string"}f(N,"isString"),r.isString=N;function cr(t){return typeof t=="symbol"}f(cr,"isSymbol"),r.isSymbol=cr;function O(t){return t===void 0}f(O,"isUndefined"),r.isUndefined=O;function k(t){return q(t)&&C(t)==="[object RegExp]"}f(k,"isRegExp"),r.isRegExp=k;function q(t){return typeof t=="object"&&t!==null}f(q,"isObject"),r.isObject=q;function $(t){return q(t)&&C(t)==="[object Date]"}f($,"isDate"),r.isDate=$;function P(t){return q(t)&&(C(t)==="[object Error]"||t instanceof Error)}f(P,"isError"),r.isError=P;function F(t){return typeof t=="function"}f(F,"isFunction"),r.isFunction=F;function pr(t){return t===null||typeof t=="boolean"||typeof t=="number"||typeof t=="string"||typeof t=="symbol"||typeof t>"u"}f(pr,"isPrimitive"),r.isPrimitive=pr,r.isBuffer=dr;function C(t){return Object.prototype.toString.call(t)}f(C,"objectToString");function H(t){return t<10?"0"+t.toString(10):t.toString(10)}f(H,"pad");var yr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function gr(){var t=new Date,e=[H(t.getHours()),H(t.getMinutes()),H(t.getSeconds())].join(":");return[t.getDate(),yr[t.getMonth()],e].join(" ")}f(gr,"timestamp"),r.log=function(){console.log("%s - %s",gr(),r.format.apply(r,arguments))},r.inherits=J.exports,r._extend=function(t,e){if(!e||!q(e))return t;for(var o=Object.keys(e),c=o.length;c--;)t[o[c]]=e[o[c]];return t};function T(t,e){return Object.prototype.hasOwnProperty.call(t,e)}f(T,"hasOwnProperty")})(nr);var vr=br;/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function Z(r,n){if(r===n)return 0;for(var i=r.length,u=n.length,s=0,d=Math.min(i,u);s<d;++s)if(r[s]!==n[s]){i=r[s],u=n[s];break}return i<u?-1:u<i?1:0}f(Z,"compare");function D(r){return z.Buffer&&typeof z.Buffer.isBuffer=="function"?z.Buffer.isBuffer(r):!!(r!=null&&r._isBuffer)}f(D,"isBuffer");var S=nr,Or=Object.prototype.hasOwnProperty,K=Array.prototype.slice,tr=function(){return f(function(){},"foo").name==="foo"}();function W(r){return Object.prototype.toString.call(r)}f(W,"pToString");function L(r){return D(r)||typeof z.ArrayBuffer!="function"?!1:typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r?!!(r instanceof DataView||r.buffer&&r.buffer instanceof ArrayBuffer):!1}f(L,"isView");var a=Sr.exports=ir,wr=/\s*function\s+([^\(\s]*)\s*/;function er(r){if(!!S.isFunction(r)){if(tr)return r.name;var n=r.toString(),i=n.match(wr);return i&&i[1]}}f(er,"getName");a.AssertionError=f(function(n){this.name="AssertionError",this.actual=n.actual,this.expected=n.expected,this.operator=n.operator,n.message?(this.message=n.message,this.generatedMessage=!1):(this.message=jr(this),this.generatedMessage=!0);var i=n.stackStartFunction||E;if(Error.captureStackTrace)Error.captureStackTrace(this,i);else{var u=new Error;if(u.stack){var s=u.stack,d=er(i),m=s.indexOf(`
`+d);if(m>=0){var v=s.indexOf(`
`,m+1);s=s.substring(v+1)}this.stack=s}}},"AssertionError");S.inherits(a.AssertionError,Error);function Q(r,n){return typeof r=="string"?r.length<n?r:r.slice(0,n):r}f(Q,"truncate");function X(r){if(tr||!S.isFunction(r))return S.inspect(r);var n=er(r),i=n?": "+n:"";return"[Function"+i+"]"}f(X,"inspect");function jr(r){return Q(X(r.actual),128)+" "+r.operator+" "+Q(X(r.expected),128)}f(jr,"getMessage");function E(r,n,i,u,s){throw new a.AssertionError({message:i,actual:r,expected:n,operator:u,stackStartFunction:s})}f(E,"fail");a.fail=E;function ir(r,n){r||E(r,!0,n,"==",a.ok)}f(ir,"ok");a.ok=ir;a.equal=f(function(n,i,u){n!=i&&E(n,i,u,"==",a.equal)},"equal");a.notEqual=f(function(n,i,u){n==i&&E(n,i,u,"!=",a.notEqual)},"notEqual");a.deepEqual=f(function(n,i,u){A(n,i,!1)||E(n,i,u,"deepEqual",a.deepEqual)},"deepEqual");a.deepStrictEqual=f(function(n,i,u){A(n,i,!0)||E(n,i,u,"deepStrictEqual",a.deepStrictEqual)},"deepStrictEqual");function A(r,n,i,u){if(r===n)return!0;if(D(r)&&D(n))return Z(r,n)===0;if(S.isDate(r)&&S.isDate(n))return r.getTime()===n.getTime();if(S.isRegExp(r)&&S.isRegExp(n))return r.source===n.source&&r.global===n.global&&r.multiline===n.multiline&&r.lastIndex===n.lastIndex&&r.ignoreCase===n.ignoreCase;if((r===null||typeof r!="object")&&(n===null||typeof n!="object"))return i?r===n:r==n;if(L(r)&&L(n)&&W(r)===W(n)&&!(r instanceof Float32Array||r instanceof Float64Array))return Z(new Uint8Array(r.buffer),new Uint8Array(n.buffer))===0;if(D(r)!==D(n))return!1;u=u||{actual:[],expected:[]};var s=u.actual.indexOf(r);return s!==-1&&s===u.expected.indexOf(n)?!0:(u.actual.push(r),u.expected.push(n),qr(r,n,i,u))}f(A,"_deepEqual");function Y(r){return Object.prototype.toString.call(r)=="[object Arguments]"}f(Y,"isArguments");function qr(r,n,i,u){if(r==null||n===null||n===void 0)return!1;if(S.isPrimitive(r)||S.isPrimitive(n))return r===n;if(i&&Object.getPrototypeOf(r)!==Object.getPrototypeOf(n))return!1;var s=Y(r),d=Y(n);if(s&&!d||!s&&d)return!1;if(s)return r=K.call(r),n=K.call(n),A(r,n,i);var m=rr(r),v=rr(n),w,b;if(m.length!==v.length)return!1;for(m.sort(),v.sort(),b=m.length-1;b>=0;b--)if(m[b]!==v[b])return!1;for(b=m.length-1;b>=0;b--)if(w=m[b],!A(r[w],n[w],i,u))return!1;return!0}f(qr,"objEquiv");a.notDeepEqual=f(function(n,i,u){A(n,i,!1)&&E(n,i,u,"notDeepEqual",a.notDeepEqual)},"notDeepEqual");a.notDeepStrictEqual=or;function or(r,n,i){A(r,n,!0)&&E(r,n,i,"notDeepStrictEqual",or)}f(or,"notDeepStrictEqual");a.strictEqual=f(function(n,i,u){n!==i&&E(n,i,u,"===",a.strictEqual)},"strictEqual");a.notStrictEqual=f(function(n,i,u){n===i&&E(n,i,u,"!==",a.notStrictEqual)},"notStrictEqual");function x(r,n){if(!r||!n)return!1;if(Object.prototype.toString.call(n)=="[object RegExp]")return n.test(r);try{if(r instanceof n)return!0}catch{}return Error.isPrototypeOf(n)?!1:n.call({},r)===!0}f(x,"expectedException");function Ar(r){var n;try{r()}catch(i){n=i}return n}f(Ar,"_tryBlock");function fr(r,n,i,u){var s;if(typeof n!="function")throw new TypeError('"block" argument must be a function');typeof i=="string"&&(u=i,i=null),s=Ar(n),u=(i&&i.name?" ("+i.name+").":".")+(u?" "+u:"."),r&&!s&&E(s,i,"Missing expected exception"+u);var d=typeof u=="string",m=!r&&S.isError(s),v=!r&&s&&!i;if((m&&d&&x(s,i)||v)&&E(s,i,"Got unwanted exception"+u),r&&s&&i&&!x(s,i)||!r&&s)throw s}f(fr,"_throws");a.throws=function(r,n,i){fr(!0,r,n,i)};a.doesNotThrow=function(r,n,i){fr(!1,r,n,i)};a.ifError=function(r){if(r)throw r};function ur(r,n){r||E(r,!0,n,"==",ur)}f(ur,"strict");a.strict=vr(ur,a,{equal:a.strictEqual,deepEqual:a.deepStrictEqual,notEqual:a.notStrictEqual,notDeepEqual:a.notDeepStrictEqual});a.strict.strict=a.strict;var rr=Object.keys||function(r){var n=[];for(var i in r)Or.call(r,i)&&n.push(i);return n};export{Sr as a};
//# sourceMappingURL=assert.ee5b5e11.js.map