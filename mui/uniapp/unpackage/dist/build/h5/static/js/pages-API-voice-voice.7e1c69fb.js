(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-voice-voice"],{"265a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("c065"),n=null,o=null,s=null,r=null,c={data:function(){return{title:"start/stopRecord、play/stopVoice",recording:!1,playing:!1,hasRecord:!1,tempFilePath:"",recordTime:0,playTime:0,formatedRecordTime:"00:00:00",formatedPlayTime:"00:00:00"}},onUnload:function(){this.end()},onLoad:function(){var t=this;r=uni.createInnerAudioContext(),r.onEnded(function(){clearInterval(n);var e=0;console.log("play voice finished"),t.playing=!1,t.formatedPlayTime=a.formatTime(e),t.playTime=e}),s=uni.getRecorderManager(),s.onStart(function(){console.log("recorder start")}),s.onStop(function(e){console.log("on stop"),r.src=e.tempFilePath,t.hasRecord=!0,t.recording=!1})},methods:{startRecord:function(){var t=this;this.recording=!0,o=setInterval(function(){t.recordTime+=1,t.formatedRecordTime=a.formatTime(t.recordTime)},1e3),s.start({format:"mp3"})},stopRecord:function(){s.stop(),clearInterval(o)},playVoice:function(){var t=this;console.log("play voice"),this.playing=!0,n=setInterval(function(){t.playTime+=1,t.formatedPlayTime=a.formatTime(t.playTime)},1e3),r.play()},stopVoice:function(){clearInterval(n),this.playing=!1,this.formatedPlayTime=a.formatTime(0),this.playTime=0,r.stop()},end:function(){r.stop(),s.stop(),clearInterval(o),clearInterval(n),this.recording=!1,this.playing=!1,this.hasRecord=!1,this.playTime=0,this.recordTime=0,this.formatedRecordTime="00:00:00",this.formatedRecordTime="00:00:00"},clear:function(){this.end()}}};e.default=c},"30b1":function(t,e,i){"use strict";var a=i("9747"),n=i.n(a);n.a},"316b":function(t,e,i){"use strict";i.r(e);var a=i("265a"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"6fb2":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[t.recording||t.playing||t.hasRecord?t._e():[i("v-uni-view",{staticClass:"page-body-time"},[i("v-uni-text",{staticClass:"time-big"},[t._v(t._s(t.formatedRecordTime))])],1),i("v-uni-view",{staticClass:"page-body-buttons"},[i("v-uni-view",{staticClass:"page-body-button"}),i("v-uni-view",{staticClass:"page-body-button",on:{click:function(e){e=t.$handleEvent(e),t.startRecord(e)}}},[i("v-uni-image",{attrs:{src:"../../../static/record.png"}})],1),i("v-uni-view",{staticClass:"page-body-button"})],1)],!0===t.recording?[i("v-uni-view",{staticClass:"page-body-time"},[i("v-uni-text",{staticClass:"time-big"},[t._v(t._s(t.formatedRecordTime))])],1),i("v-uni-view",{staticClass:"page-body-buttons"},[i("v-uni-view",{staticClass:"page-body-button"}),i("v-uni-view",{staticClass:"page-body-button",on:{click:function(e){e=t.$handleEvent(e),t.stopRecord(e)}}},[i("v-uni-view",{staticClass:"button-stop-record"})],1),i("v-uni-view",{staticClass:"page-body-button"})],1)]:t._e(),!0===t.hasRecord&&!1===t.playing?[i("v-uni-view",{staticClass:"page-body-time"},[i("v-uni-text",{staticClass:"time-big"},[t._v(t._s(t.formatedPlayTime))]),i("v-uni-text",{staticClass:"time-small"},[t._v(t._s(t.formatedRecordTime))])],1),i("v-uni-view",{staticClass:"page-body-buttons"},[i("v-uni-view",{staticClass:"page-body-button",on:{click:function(e){e=t.$handleEvent(e),t.playVoice(e)}}},[i("v-uni-image",{attrs:{src:"../../../static/play.png"}})],1),i("v-uni-view",{staticClass:"page-body-button",on:{click:function(e){e=t.$handleEvent(e),t.clear(e)}}},[i("v-uni-image",{attrs:{src:"../../../static/trash.png"}})],1)],1)]:t._e(),!0===t.hasRecord&&!0===t.playing?[i("v-uni-view",{staticClass:"page-body-time"},[i("v-uni-text",{staticClass:"time-big"},[t._v(t._s(t.formatedPlayTime))]),i("v-uni-text",{staticClass:"time-small"},[t._v(t._s(t.formatedRecordTime))])],1),i("v-uni-view",{staticClass:"page-body-buttons"},[i("v-uni-view",{staticClass:"page-body-button",on:{click:function(e){e=t.$handleEvent(e),t.stopVoice(e)}}},[i("v-uni-image",{attrs:{src:"../../../static/stop.png"}})],1),i("v-uni-view",{staticClass:"page-body-button",on:{click:function(e){e=t.$handleEvent(e),t.clear(e)}}},[i("v-uni-image",{attrs:{src:"../../../static/trash.png"}})],1)],1)]:t._e()],2)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},9747:function(t,e,i){var a=i("b0c3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("431f29b4",a,!0,{sourceMap:!1,shadowMode:!1})},b0c3:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-image[data-v-d92ad20c]{width:%?150?%;height:%?150?%}.page-body-wrapper[data-v-d92ad20c]{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin-bottom:%?300?%}.page-body-time[data-v-d92ad20c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.time-big[data-v-d92ad20c]{font-size:%?60?%;margin:%?20?%}.time-small[data-v-d92ad20c]{font-size:%?30?%}.page-body-buttons[data-v-d92ad20c]{margin-top:%?60?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.page-body-button[data-v-d92ad20c]{width:%?250?%;text-align:center}.button-stop-record[data-v-d92ad20c]{width:%?110?%;height:%?110?%;border:%?20?% solid #fff;background-color:#f55c23;-webkit-border-radius:%?130?%;border-radius:%?130?%;margin:0 auto}",""])},c065:function(t,e,i){"use strict";function a(t){if("number"!==typeof t||t<0)return t;var e=parseInt(t/3600);t%=3600;var i=parseInt(t/60);t%=60;var a=t;return[e,i,a].map(function(t){return t=t.toString(),t[1]?t:"0"+t}).join(":")}function n(t,e){return"string"===typeof t&&"string"===typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}var o={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var i in this.UNITS)if(t>=this.UNITS[i]){e=Math.floor(t/this.UNITS[i])+i+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),i=Date.now()-e.getTime();if(i<this.UNITS["天"])return this.humanize(i);var a=function(t){return t<10?"0"+t:t};return e.getFullYear()+"/"+a(e.getMonth()+1)+"/"+a(e.getDay())+"-"+a(e.getHours())+":"+a(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};t.exports={formatTime:a,formatLocation:n,dateUtils:o}},f382:function(t,e,i){"use strict";i.r(e);var a=i("6fb2"),n=i("316b");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("30b1");var s=i("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"d92ad20c",null);e["default"]=r.exports}}]);