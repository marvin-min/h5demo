(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-input-input"],{"0387":function(t,i,n){"use strict";n.r(i);var e=n("d332"),u=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(i,t,function(){return e[t]})}(a);i["default"]=u.a},3731:function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,".title[data-v-47ede881]{padding:%?10?% %?25?%}.uni-icon-clear[data-v-47ede881],.uni-icon-eye[data-v-47ede881]{color:#999}",""])},"3a97":function(t,i,n){"use strict";var e=n("d1f7"),u=n.n(e);u.a},"40e1":function(t,i,n){"use strict";n.r(i);var e=n("ec10"),u=n("0387");for(var a in u)"default"!==a&&function(t){n.d(i,t,function(){return u[t]})}(a);n("3a97");var s=n("2877"),l=Object(s["a"])(u["default"],e["a"],e["b"],!1,null,"47ede881",null);i["default"]=l.exports},d1f7:function(t,i,n){var e=n("3731");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var u=n("4f06").default;u("26b2e118",e,!0,{sourceMap:!1,shadowMode:!1})},d332:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{title:"input",focus:!1,inputValue:"",showClearIcon:!1,inputClearValue:"",changeValue:"",showPassword:!0,src:"../../../static/eye-1.png",platform:""}},methods:{onKeyInput:function(t){this.inputValue=t.target.value},replaceInput:function(t){var i=t.target.value;"11"===i&&(this.changeValue="2")},hideKeyboard:function(t){"123"===t.target.value&&uni.hideKeyboard()},clearInput:function(t){this.inputClearValue=t.target.value,t.target.value.length>0?this.showClearIcon=!0:this.showClearIcon=!1},clearIcon:function(){this.inputClearValue="",this.showClearIcon=!1},changePassword:function(){this.showPassword=!this.showPassword},onFocus:function(){this.$mp.page.$getAppWebview().setStyle({softinputNavBar:"none"})},onBlur:function(){this.$mp.page.$getAppWebview().setStyle({softinputNavBar:"auto"})}},onLoad:function(){this.platform=uni.getSystemInfoSync().platform}};i.default=e},ec10:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("可自动聚焦的 input")]),n("v-uni-input",{staticClass:"uni-input",attrs:{focus:"",placeholder:"自动获得焦点"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("键盘右下角按钮显示为搜索")]),n("v-uni-input",{staticClass:"uni-input",attrs:{"confirm-type":"search",placeholder:"键盘右下角按钮显示为搜索"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("控制最大输入长度的 input")]),n("v-uni-input",{staticClass:"uni-input",attrs:{maxlength:"10",placeholder:"最大输入长度为10"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("实时获取输入值："+t._s(t.inputValue))]),n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"输入同步到view中"},on:{input:function(i){i=t.$handleEvent(i),t.onKeyInput(i)}}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("控制输入的 input")]),n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"连续的两个1会变成2"},on:{input:function(i){i=t.$handleEvent(i),t.replaceInput(i)}},model:{value:t.changeValue,callback:function(i){t.changeValue=i},expression:"changeValue"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("控制键盘的 input")]),n("v-uni-input",{ref:"input1",staticClass:"uni-input",attrs:{placeholder:"输入123自动收起键盘"},on:{input:function(i){i=t.$handleEvent(i),t.hideKeyboard(i)}}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("数字输入的 input")]),n("v-uni-input",{staticClass:"uni-input",attrs:{type:"number",placeholder:"这是一个数字输入框"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("密码输入的 input")]),n("v-uni-input",{staticClass:"uni-input",attrs:{password:"",type:"text",placeholder:"这是一个密码输入框"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("带小数点的 input")]),n("v-uni-input",{staticClass:"uni-input",attrs:{type:"digit",placeholder:"带小数点的数字键盘"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("身份证输入的 input")]),n("v-uni-input",{staticClass:"uni-input",attrs:{type:"idcard",placeholder:"身份证输入键盘"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("控制占位符颜色的 input")]),n("v-uni-input",{staticClass:"uni-input",attrs:{"placeholder-style":"color:#F76260",placeholder:"占位符字体是红色的"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("带清除按钮的输入框")]),n("v-uni-view",{staticClass:"with-fun"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"带清除按钮的输入框",value:t.inputClearValue},on:{input:function(i){i=t.$handleEvent(i),t.clearInput(i)}}}),t.showClearIcon?n("v-uni-view",{staticClass:"uni-icon uni-icon-clear",on:{click:function(i){i=t.$handleEvent(i),t.clearIcon(i)}}}):t._e()],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("可查看密码的输入框")]),n("v-uni-view",{staticClass:"with-fun"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入密码",password:t.showPassword}}),n("v-uni-view",{staticClass:"uni-icon uni-icon-eye",class:[t.showPassword?"":"uni-active"],on:{click:function(i){i=t.$handleEvent(i),t.changePassword(i)}}})],1)],1)],1)],1)},u=[];n.d(i,"a",function(){return e}),n.d(i,"b",function(){return u})}}]);