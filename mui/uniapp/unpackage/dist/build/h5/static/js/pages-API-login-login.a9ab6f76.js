(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-login-login"],{"1e58":function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,"uni-button[data-v-71c97ff4]{background-color:#007aff;color:#fff}",""])},"6e02":function(n,t,e){"use strict";var i=e("9857"),o=e.n(i);o.a},9857:function(n,t,e){var i=e("1e58");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var o=e("4f06").default;o("a5e6429a",i,!0,{sourceMap:!1,shadowMode:!1})},"9db3":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("page-head",{attrs:{title:n.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticStyle:{background:"#FFF",padding:"40upx"}},[!0===n.hasLogin?[e("v-uni-view",{staticClass:"uni-h3 uni-center uni-common-mt"},[n._v("已登录")]),e("v-uni-view",{staticClass:"uni-hello-text uni-center"},[e("v-uni-text",[n._v("每个账号仅需登录 1 次，\\n后续每次进入页面即可自动拉取用户信息。")])],1)]:n._e(),!1===n.hasLogin?[e("v-uni-view",{staticClass:"uni-h3 uni-center uni-common-mt"},[n._v("未登录")]),e("v-uni-view",{staticClass:"uni-hello-text uni-center"},[n._v("请点击按钮登录")])]:n._e()],2),e("v-uni-view",{staticClass:"uni-btn-v uni- uni-common-mt"},n._l(n.providerList,function(t,i){return e("v-uni-button",{key:i,staticClass:"page-body-button",attrs:{type:"primary"},on:{click:function(e){e=n.$handleEvent(e),n.tologin(t)}}},[n._v(n._s(t.name))])}),1)],1)],1)},o=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o})},b4ff:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e("2f62");function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},i=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.forEach(function(t){a(n,t,e[t])})}return n}function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var r={data:function(){return{title:"login",providerList:[]}},computed:o({},(0,i.mapState)(["hasLogin"])),onLoad:function(){var n=this;uni.getProvider({service:"oauth",success:function(t){n.providerList=t.provider.map(function(n){var t="";switch(n){case"weixin":t="微信登录";break;case"qq":t="QQ登录";break;case"sinaweibo":t="新浪微博登录";break;case"xiaomi":t="小米登录";break;case"alipay":t="支付宝登录";break;case"baidu":t="百度登录";break;case"toutiao":t="头条登录";break}return{name:t,id:n}})},fail:function(n){console.log("获取登录通道失败",n)}})},methods:o({},(0,i.mapMutations)(["login"]),{tologin:function(n){var t=this;uni.login({provider:n.id,success:function(e){console.log("login success:",e),t.login(n.id)},fail:function(n){console.log("login fail:",n)}})}})};t.default=r},b57f:function(n,t,e){"use strict";e.r(t);var i=e("b4ff"),o=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);t["default"]=o.a},d1d9:function(n,t,e){"use strict";e.r(t);var i=e("9db3"),o=e("b57f");for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);e("6e02");var r=e("2877"),u=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"71c97ff4",null);t["default"]=u.exports}}]);