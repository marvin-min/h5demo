(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-show-loading-show-loading"],{1103:function(n,t,i){"use strict";var a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:n.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{staticClass:"btn-load",attrs:{type:"primary"},on:{click:function(t){t=n.$handleEvent(t),n.showLoading(t)}}},[n._v("显示 loading 提示框")]),i("v-uni-button",{on:{click:function(t){t=n.$handleEvent(t),n.hideLoading(t)}}},[n._v("隐藏 loading 提示框")])],1)],1)],1)},e=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return e})},"3eca":function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{title:"loading"}},methods:{showLoading:function(){uni.showLoading({title:"loading"})},hideLoading:function(){uni.hideLoading()}},onUnload:function(){}};t.default=a},6753:function(n,t,i){"use strict";i.r(t);var a=i("3eca"),e=i.n(a);for(var o in a)"default"!==o&&function(n){i.d(t,n,function(){return a[n]})}(o);t["default"]=e.a},b1d6:function(n,t,i){"use strict";i.r(t);var a=i("1103"),e=i("6753");for(var o in e)"default"!==o&&function(n){i.d(t,n,function(){return e[n]})}(o);var u=i("2877"),d=Object(u["a"])(e["default"],a["a"],a["b"],!1,null,"6af286e0",null);t["default"]=d.exports}}]);