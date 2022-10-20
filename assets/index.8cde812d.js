var b=Object.defineProperty;var s=(e,a)=>b(e,"name",{value:a,configurable:!0});/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function p(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}s(p,"toObject");function O(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var a={},r=0;r<10;r++)a["_"+String.fromCharCode(r)]=r;var o=Object.getOwnPropertyNames(a).map(function(n){return a[n]});if(o.join("")!=="0123456789")return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach(function(n){t[n]=n}),Object.keys(Object.assign({},t)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}s(O,"shouldUseNative");var g=O()?Object.assign:function(e,a){for(var r,o=p(e),t,n=1;n<arguments.length;n++){r=Object(arguments[n]);for(var f in r)i.call(r,f)&&(o[f]=r[f]);if(u){t=u(r);for(var c=0;c<t.length;c++)l.call(r,t[c])&&(o[t[c]]=r[t[c]])}}return o};export{g as o};
//# sourceMappingURL=index.8cde812d.js.map
