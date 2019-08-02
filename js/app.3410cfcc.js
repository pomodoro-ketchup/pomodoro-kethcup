(function(t){function e(e){for(var r,s,a=e[0],c=e[1],u=e[2],l=0,d=[];l<a.length;l++)s=a[l],n[s]&&d.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,s=1;s<o.length;s++){var c=o[s];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var r={},n={app:0},i=[];function s(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0c562418","chunk-2d0b3289":"9705783a"}[t]+".js"}function a(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(t){var e=[],o=n[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise(function(e,r){o=n[t]=[e,r]});e.push(o[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=s(t),i=function(e){c.onerror=c.onload=null,clearTimeout(u);var o=n[t];if(0!==o){if(o){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");s.type=r,s.request=i,o[1](s)}n[t]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},a.m=t,a.c=r,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(o,r,function(e){return t[e]}.bind(null,r));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/pomodoro-ketchup/",a.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var m=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0cfb":function(t,e,o){},"38fc":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"text-center p-4",attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),o("router-link",{attrs:{to:"/settings"}},[t._v("Settings")])],1),o("div",{attrs:{id:"content"}},[o("router-view")],1),o("timer-title",{attrs:{title:t.title}})],1)},i=[],s=(o("8e6e"),o("ac6a"),o("456d"),o("bd86")),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div")},c=[],u={name:"timer-title",props:["title"],watch:{title:{immediate:!0,handler:function(){document.title=this.title}}}},l=u,m=o("2877"),d=Object(m["a"])(l,a,c,!1,null,null,null),f=d.exports,p=o("2f62");function g(t,e){var o=Object.keys(t);return Object.getOwnPropertySymbols&&o.push.apply(o,Object.getOwnPropertySymbols(t)),e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o}function T(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?g(o,!0).forEach(function(e){Object(s["a"])(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):g(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var O={components:{TimerTitle:f},computed:T({},Object(p["c"])(["getTimerTitle"]),{title:function(){return this.getTimerTitle?this.$store.getters.getTimeFormatted:"Pomodoro-Ketchup"}}),created:function(){this.$store.dispatch("setInitTime"),this.$store.dispatch("setPomodorosGoal"),this.$store.dispatch("setTime"),this.$store.dispatch("loadPomodoros"),this.$store.dispatch("loadTimerTitle"),this.$store.dispatch("loadGoalIndicatorFormat"),this.$store.dispatch("loadProgressBar")}},h=O,v=(o("cf25"),Object(m["a"])(h,n,i,!1,null,null,null)),b=v.exports,_=o("8c4f"),I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("pomodoros-counter"),o("div",{staticClass:"d-flex align-content-center justify-content-center"},[o("progress-bar",[o("timer")],1)],1)],1)},E=[],P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"timer"},[t._v("\n    "+t._s(t.curTimeFormatted)+"\n  ")]),o("div",{staticClass:"text-center"},[o("button",{staticClass:"btn btn-outline-success",on:{click:t.play}},[t._v("Play")]),o("button",{staticClass:"btn btn-outline-success ml-2",on:{click:t.pause}},[t._v("Pause")]),o("button",{staticClass:"btn btn-outline-success ml-2",on:{click:t.reset}},[t._v("Reset")])])])},S=[],y={name:"Timer",data:function(){return{}},computed:{curTimeFormatted:function(){return this.$store.getters.getTimeFormatted}},methods:{play:function(){this.$store.dispatch("runTimer")},pause:function(){this.$store.dispatch("pauseTimer")},reset:function(){this.$store.dispatch("resetTimer")}}},j=y,w=(o("8976"),Object(m["a"])(j,P,S,!1,null,"88ed471e",null)),R=w.exports,M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"radialProgressBar"},[o("svg",{staticClass:"svgprogress",attrs:{viewBox:"0 0 150 150"}},[o("circle",{staticClass:"progress_background",attrs:{cx:"75",cy:"75",r:"70"}}),o("circle",{staticClass:"progress_bar",style:t.progressValue,attrs:{cx:"75",cy:"75",r:"70"}})]),o("div",{staticClass:"inner"},[t._t("default")],2)])},D=[];function k(t,e){var o=Object.keys(t);return Object.getOwnPropertySymbols&&o.push.apply(o,Object.getOwnPropertySymbols(t)),e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o}function G(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?k(o,!0).forEach(function(e){Object(s["a"])(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):k(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var C={name:"ProgressBar",computed:G({},Object(p["c"])(["getProgressBar"]),{progressValue:function(){var t=this.$store.getters.getTimeSeconds/this.$store.getters.getInitTimeSeconds;return this.getProgressBar&&(t=1-t),{"stroke-dasharray":2*Math.PI*70,"stroke-dashoffset":2*Math.PI*70*t}}})},$=C,A=(o("9889"),Object(m["a"])($,M,D,!1,null,null,null)),B=A.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{style:t.progressbar,attrs:{id:"progressbar"}},[o("div",{staticClass:"d-flex justify-content-between",style:t.indicatorPosition,attrs:{id:"indicator"}},[t._v("\n      "+t._s(t.indicatorText)+"\n    ")])]),o("div",{staticClass:"d-flex justify-content-around",attrs:{id:"pomodoros-buttons"}},[o("button",{staticClass:"btn btn-link btn-lg",on:{click:t.increase}},[t._v("\n      Add\n    ")]),o("button",{staticClass:"btn btn-link btn-lg",on:{click:t.decrease}},[t._v("\n      Remove\n    ")]),o("button",{staticClass:"btn btn-link btn-lg",on:{click:t.reset}},[t._v("\n      Reset\n    ")])])])},F=[],N=o("7618");function L(t,e){var o=Object.keys(t);return Object.getOwnPropertySymbols&&o.push.apply(o,Object.getOwnPropertySymbols(t)),e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o}function J(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?L(o,!0).forEach(function(e){Object(s["a"])(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):L(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var H={name:"pomodoros-counter",computed:{pomodoros:function(){return this.$store.state.pomodoros},pomodorosGoal:function(){return this.$store.state.pomodorosGoal},progressbar:function(){var t=this.pomodoros/this.pomodorosGoal;return{height:100*(t<1?t:1)+"%"}},indicatorPosition:function(){var t,e=this.pomodoros/this.pomodorosGoal;return t=e<.6?-25:5,{top:t+"px"}},indicatorText:function(){var t,e=this.getGoalIndicatorFormat();return console.log("format",e,Object(N["a"])(e)),t=0===e?this.pomodoros+" of "+this.pomodorosGoal:1===e?Math.round(this.pomodoros/this.pomodorosGoal*100)+"%":this.pomodoros+" of "+this.pomodorosGoal+" ("+Math.round(this.pomodoros/this.pomodorosGoal*100)+"%)",t}},methods:J({},Object(p["c"])(["getGoalIndicatorFormat"]),{increase:function(){this.$store.dispatch("addPomodoro")},decrease:function(){this.$store.dispatch("removePomodoro")},reset:function(){this.$store.dispatch("setPomodoros",0)}})},W=H,V=(o("dd12"),Object(m["a"])(W,x,F,!1,null,"2872ae94",null)),q=V.exports,K={name:"home",components:{Timer:R,ProgressBar:B,PomodorosCounter:q}},z=K,Q=Object(m["a"])(z,I,E,!1,null,"52348139",null),U=Q.exports;r["a"].use(_["a"]);var X=new _["a"]({mode:"history",base:"/pomodoro-ketchup/",routes:[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}},{path:"/settings",name:"settings",component:function(){return o.e("chunk-2d0b3289").then(o.bind(null,"26d3"))}}]});r["a"].use(p["a"]);var Y=1e3,Z=1500,tt=70,et=new p["a"].Store({state:{initTime:0,curTime:0,endTime:null,timerId:null,pomodoros:0,pomodorosGoal:0,timerTitle:!0,goalIndicatorFormat:0,reversedProgressBar:!1,notificationTitle:"Time is over",notificationBody:"Well done!"},mutations:{SET_INIT_TIME:function(t,e){t.initTime=e},SET_TIME:function(t,e){t.curTime=e},SET_END_TIME:function(t){t.endTime=Date.now()+t.curTime*Y},DECREASE_TIME:function(t){t.curTime-=Y/1e3},SET_TIMER_ID:function(t,e){t.timerId=e},RESET_TIMER_ID:function(t){t.timerId=null},SET_POMODOROS:function(t,e){t.pomodoros=e},ADD_POMODORO:function(t){t.pomodoros+=1},REMOVE_POMODORO:function(t){t.pomodoros>0&&(t.pomodoros-=1)},SET_POMODOROS_GOAL:function(t,e){t.pomodorosGoal=e},SET_TIMER_TITLE:function(t,e){t.timerTitle=e},SWITCH_TIMER_TITLE:function(t){t.timerTitle=!t.timerTitle},SET_GOAL_INDICATOR_FORMAT:function(t,e){t.goalIndicatorFormat=e},SWITCH_PROGRESS_BAR:function(t){t.reversedProgressBar=!t.reversedProgressBar},SET_PROGRESS_BAR:function(t,e){t.reversedProgressBar=e}},actions:{setInitTime:function(t,e){var o,r=t.commit;e?(o=e,localStorage.setItem("initTime",e)):o=JSON.parse(localStorage.getItem("initTime"))||Z,r("SET_INIT_TIME",o)},setPomodorosGoal:function(t,e){var o,r=t.commit;e?(o=e,localStorage.setItem("pomodorosGoal",e)):o=JSON.parse(localStorage.getItem("pomodorosGoal"))||tt,r("SET_POMODOROS_GOAL",o)},loadTimerTitle:function(t){var e=t.commit,o=JSON.parse(localStorage.getItem("timerTitle"));e("SET_TIMER_TITLE",o)},setTime:function(t,e){var o=t.commit,r=t.state;e||(e=r.initTime),o("SET_TIME",e)},runTimer:function(t){var e=t.commit,o=t.state;if(!o.timerId&&0!==o.curTime){e("SET_END_TIME");var r=setInterval(function(){o.endTime<=Date.now()&&o.timerId?(clearInterval(o.timerId),e("SET_TIME",0),e("RESET_TIMER_ID"),e("ADD_POMODORO"),"granted"===Notification.permission&&new Notification(o.notificationTitle,{body:o.notificationBody})):e("DECREASE_TIME")},Y);e("SET_TIMER_ID",r)}},pauseTimer:function(t){var e=t.commit,o=t.state;clearInterval(o.timerId),e("RESET_TIMER_ID")},resetTimer:function(t){var e=t.commit,o=t.state,r=t.dispatch;clearInterval(o.timerId),e("RESET_TIMER_ID"),r("setTime")},loadPomodoros:function(t){var e=t.commit,o=JSON.parse(localStorage.getItem("pomodoros"))||0;e("SET_POMODOROS",o)},setPomodoros:function(t,e){var o=t.commit,r=t.state;o("SET_POMODOROS",e),localStorage.setItem("pomodoros",r.pomodoros)},addPomodoro:function(t){var e=t.commit,o=t.state;e("ADD_POMODORO"),localStorage.setItem("pomodoros",o.pomodoros)},removePomodoro:function(t){var e=t.commit,o=t.state;e("REMOVE_POMODORO"),localStorage.setItem("pomodoros",o.pomodoros)},switchTimerTitle:function(t){var e=t.commit,o=t.state;e("SWITCH_TIMER_TITLE"),localStorage.setItem("timerTitle",o.timerTitle)},setGoalIndicatorFormat:function(t,e){var o=t.commit;o("SET_GOAL_INDICATOR_FORMAT",e),localStorage.setItem("goalIndicatorFormat",e)},loadGoalIndicatorFormat:function(t){var e=t.commit;e("SET_GOAL_INDICATOR_FORMAT",JSON.parse(localStorage.getItem("goalIndicatorFormat")))},switchProgressBar:function(t){var e=t.commit,o=t.state;e("SWITCH_PROGRESS_BAR"),localStorage.setItem("reversedProgressBar",o.reversedProgressBar)},loadProgressBar:function(t){var e=t.commit;e("SET_PROGRESS_BAR",JSON.parse(localStorage.getItem("reversedProgressBar")||!1))}},getters:{getInitTimeSeconds:function(t){return t.initTime},getTimeSeconds:function(t){return t.curTime},getTimeFormatted:function(t){var e=Math.floor(t.curTime/60),o=Math.floor(t.curTime-60*e);return(e<10?"0":"")+e+":"+(o<10?"0":"")+o},getPomodorosGoal:function(t){return t.pomodorosGoal},getPomodoros:function(t){return t.pomodoros},getTimerTitle:function(t){return t.timerTitle},getGoalIndicatorFormat:function(t){return t.goalIndicatorFormat},getProgressBar:function(t){return t.reversedProgressBar}}}),ot=o("9483");Object(ot["a"])("".concat("/pomodoro-ketchup/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].config.productionTip=!1,new r["a"]({router:X,store:et,render:function(t){return t(b)}}).$mount("#app")},8976:function(t,e,o){"use strict";var r=o("dffe"),n=o.n(r);n.a},"96cb":function(t,e,o){},9889:function(t,e,o){"use strict";var r=o("96cb"),n=o.n(r);n.a},cf25:function(t,e,o){"use strict";var r=o("0cfb"),n=o.n(r);n.a},dd12:function(t,e,o){"use strict";var r=o("38fc"),n=o.n(r);n.a},dffe:function(t,e,o){}});
//# sourceMappingURL=app.3410cfcc.js.map