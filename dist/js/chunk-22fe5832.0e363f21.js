(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22fe5832"],{"7dfb":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"age"},[e("div",{staticClass:"back",on:{click:t.back}},[t._v("<返回")]),e("h3",[t._v("您的年龄在？")]),t._l(t.selection,(function(n,r){return e("button",{key:r,on:{click:function(n){return t.storage(r)}}},[t._v(" "+t._s(n)+" ")])}))],2)},u=[],c=(e("e9c4"),{data:function(){return{selection:["30岁及以下","30岁以上"]}},methods:{back:function(){this.$router.go(-1)},storage:function(t){var n={age:t};localStorage.setItem("userInfo",JSON.stringify(n)),this.$router.push("/gender")}}}),a=c,o=(e("9c97"),e("2877")),i=Object(o["a"])(a,r,u,!1,null,"fe9bfd2a",null);n["default"]=i.exports},9369:function(t,n,e){},"9c97":function(t,n,e){"use strict";e("9369")},e9c4:function(t,n,e){var r=e("23e7"),u=e("da84"),c=e("d066"),a=e("2ba4"),o=e("e330"),i=e("d039"),s=u.Array,f=c("JSON","stringify"),d=o(/./.exec),l=o("".charAt),g=o("".charCodeAt),v=o("".replace),h=o(1..toString),b=/[\uD800-\uDFFF]/g,k=/^[\uD800-\uDBFF]$/,p=/^[\uDC00-\uDFFF]$/,F=function(t,n,e){var r=l(e,n-1),u=l(e,n+1);return d(k,t)&&!d(p,u)||d(p,t)&&!d(k,r)?"\\u"+h(g(t,0),16):t},_=i((function(){return'"\\udf06\\ud834"'!==f("\udf06\ud834")||'"\\udead"'!==f("\udead")}));f&&r({target:"JSON",stat:!0,forced:_},{stringify:function(t,n,e){for(var r=0,u=arguments.length,c=s(u);r<u;r++)c[r]=arguments[r];var o=a(f,null,c);return"string"==typeof o?v(o,b,F):o}})}}]);
//# sourceMappingURL=chunk-22fe5832.0e363f21.js.map