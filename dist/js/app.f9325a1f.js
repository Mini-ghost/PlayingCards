(function(t){function e(e){for(var s,i,c=e[0],o=e[1],l=e[2],f=0,p=[];f<c.length;f++)i=c[f],r[i]&&p.push(r[i][0]),r[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0bdd":function(t,e,a){"use strict";var s=a("d76a"),r=a.n(s);r.a},"0cfb":function(t,e,a){},"0ff1":function(t,e,a){},"529e":function(t,e,a){"use strict";var s=a("ffca"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("main",[a("section",{attrs:{id:"game"}},[a("div",{staticClass:"containt"},[a("div",{staticClass:"tool"},[a("Counter",{attrs:{status:t.inGame,type:t.type},on:{"status-change":t.statusChangeHandler}}),a("Controller",{attrs:{status:t.inGame,type:t.type,leavles:t.leavles},on:{"status-change":t.statusChangeHandler,"leavl-change":t.leavlChangeHandler}})],1),a("Tips"),a("Cards",{attrs:{status:t.inGame,type:t.type,leavles:t.leavles},on:{"status-change":t.statusChangeHandler}})],1)]),"success"===t.type?a("Scoreboard",{attrs:{"leavle-on":t.leavleOn},on:{"status-change":t.statusChangeHandler}}):t._e()],1)])},n=[],i=(a("7514"),a("ac6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition-group",{staticClass:"card",attrs:{tag:"div",name:"shuffle"}},[t._l(t.cardsData,function(e,s){return a("div",{key:e.name+e.text,staticClass:"card-containt",class:e.active?"card-containt--active":"",on:{click:function(a){return t.selectHandler(e,s)}}},[a("div",{staticClass:"card-face"},[a("div",{staticClass:"card-face__front"},[e.show?a("div",{staticClass:"card-face__wrap",class:["card-face__wrap--"+e.name,"card-face__wrap--"+e.color]},[a("div",{staticClass:"card-face__corner card-face__corner--top fz-24 fz-mm-14 fz-ms-18"},[a("div",{staticClass:"card-num"},[t._v(t._s(e.text))])]),a("div",{staticClass:"card-face__corner card-face__corner--bottom fz-24 fz-mm-14 fz-ms-18"},[a("div",{staticClass:"card-num"},[t._v(t._s(e.text))])]),e.symbols?a("div",{staticClass:"card-face__center"},t._l(e.symbols,function(t){return a("div",{staticClass:"card-face__symbol",class:[{"card-face__symbol--flip":t.flip},"A"===e.text?"fz-72 fz-mm-36 fz-ms-52":"fz-36 fz-mm-24"],style:"left:"+t.left+"; top:"+t.top+";"})}),0):a("div",{staticClass:"card-face__center"},[a("div",{staticClass:"card-face__text fz-52"},[t._v(t._s(e.text))])])]):t._e()]),a("div",{staticClass:"card-face__back"},[a("div",{staticClass:"card-face__wrap"})])])])}),a("div",{key:"clear",staticClass:"card-clear"})],2)}),c=[],o=(a("7f7f"),a("55dd"),{name:"Cards",props:{status:{type:Boolean,required:!0},type:{type:String,required:!0},leavles:{type:Array,required:!0}},data:function(){return{quantity:this.quantityInitHandler(),items:[{name:"spades",color:"black"},{name:"hearts",color:"red"},{name:"diamonds",color:"red"},{name:"clubs",color:"black"}],cardsData:new Object,activeCards:new Array,activeIndex:new Array,isGameOver:!1}},mounted:function(){this.cardsData=this.cardsCreateHandler()},methods:{quantityInitHandler:function(){var t=this.leavles.filter(function(t){return!0===t.type});return t[0].num},cardsSymbolsHandler:function(t){switch(t){case 0:return[{left:"50%",top:"50%"}];case 1:return[{left:"50%",top:"20%"},{left:"50%",top:"80%",flip:!0}];case 2:return[{left:"50%",top:"50%"},{left:"50%",top:"20%"},{left:"50%",top:"80%",flip:!0}];case 3:return[{left:"33%",top:"20%"},{left:"33%",top:"80%",flip:!0},{left:"67%",top:"20%"},{left:"67%",top:"80%",flip:!0}];case 4:return[{left:"50%",top:"50%"},{left:"33%",top:"20%"},{left:"33%",top:"80%",flip:!0},{left:"67%",top:"20%"},{left:"67%",top:"80%",flip:!0}];case 5:return[{left:"33%",top:"50%"},{left:"33%",top:"20%"},{left:"33%",top:"80%",flip:!0},{left:"67%",top:"50%"},{left:"67%",top:"20%"},{left:"67%",top:"80%",flip:!0}];case 6:return[{left:"33%",top:"50%"},{left:"33%",top:"20%"},{left:"33%",top:"80%",flip:!0},{left:"67%",top:"50%"},{left:"67%",top:"20%"},{left:"67%",top:"80%",flip:!0},{left:"50%",top:"35%"}];case 7:return[{left:"33%",top:"20%"},{left:"33%",top:"40%"},{left:"33%",top:"60%",flip:!0},{left:"33%",top:"80%",flip:!0},{left:"67%",top:"20%"},{left:"67%",top:"40%"},{left:"67%",top:"60%",flip:!0},{left:"67%",top:"80%",flip:!0}];case 8:return[{left:"50%",top:"50%"},{left:"33%",top:"20%"},{left:"33%",top:"40%"},{left:"33%",top:"60%",flip:!0},{left:"33%",top:"80%",flip:!0},{left:"67%",top:"20%"},{left:"67%",top:"40%"},{left:"67%",top:"60%",flip:!0},{left:"67%",top:"80%",flip:!0}];case 9:return[{left:"50%",top:"35%"},{left:"50%",top:"65%",flip:!0},{left:"33%",top:"20%"},{left:"33%",top:"40%"},{left:"33%",top:"60%",flip:!0},{left:"33%",top:"80%",flip:!0},{left:"67%",top:"20%"},{left:"67%",top:"40%"},{left:"67%",top:"60%",flip:!0},{left:"67%",top:"80%",flip:!0}]}},cardsNumberHandler:function(t){switch(t){case 0:return"A";case 10:return"J";case 11:return"Q";case 12:return"K";default:return""+(t+1)}},cardsShuffleHandler:function(t){t.sort(function(){return Math.random()>.5?1:-1})},cardsCreateHandler:function(){for(var t=0,e=this.items.length,a=new Array;t<e;t++)for(var s=this.items[t],r=0;r<this.quantity;r++){var n=new Object;n.name=s.name,n.color=s.color,n.num=r+1,n.text=this.cardsNumberHandler(r),n.symbols=this.cardsSymbolsHandler(r),n.active=!1,n.show=!1,a.push(n)}return this.cardsShuffleHandler(a),a},selectHandler:function(t,e){var a=this,s=this.activeCards,r=this.activeIndex;this.status&&(t.active||2===r.length||(t.active=!0,t.show=!0,s.push(t),r.push(e),r.length<2||(s[0].num===s[1].num?(s.length=0,r.length=0):setTimeout(function(){s[0].active=!1,s[1].active=!1,s.length=0,setTimeout(function(){a.cardsData[r[0]].show=!1,a.cardsData[r[1]].show=!1,r.length=0},100)},1e3),this.isGameOver=this.cardsData.every(function(t){return t.active}))))},resetCardHanler:function(t){var e=this,a=this.cardsData.some(function(t){return!0===t.active});this.cardsData.forEach(function(e){e.active=t}),setTimeout(function(){e.cardsShuffleHandler(e.cardsData)},a?500:0),this.activeCards=new Array,this.activeIndex=new Array,this.$emit("status-change",!1,"stop")}},watch:{isGameOver:function(){this.isGameOver&&(this.$parent.inGame=!1,this.$emit("status-change",!1,"success"))},type:function(){"reset"===this.type&&this.resetCardHanler(!1)},leavles:{handler:function(){this.quantity=this.quantityInitHandler(),this.cardsData=this.cardsCreateHandler()},deep:!0}}}),l=o,u=(a("f485"),a("2877")),f=Object(u["a"])(l,i,c,!1,null,null,null),p=f.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"counter"},[a("div",{staticClass:"counter-text fz-72"},[t._v(t._s(t.timeText.join(":")))])])},h=[],v=(a("c5f6"),{name:"Counter",props:{status:{type:Boolean,required:!0},type:{type:String,required:!0}},data:function(){return{timeText:["00","00"],sec:0,timerId:new Number}},methods:{timerHandler:function(){var t=this.sec,e=~~(t/3600),a=~~((t-3600*e)/60),s=t-3600*e-60*a;a=a>9?a:"0"+a,s=s>9?s:"0"+s,this.sec++,this.timeText=[e,a,s].filter(function(t){return t}),this.timerId=setTimeout(this.timerHandler,1e3)}},watch:{type:function(){if(this.status&&"start"===this.type)this.timerHandler();else if("success"===this.type)clearTimeout(this.timerId),this.$bus.$emit("successEvent",[this.timeText,this.sec]);else{if(clearTimeout(this.timerId),"stop"===this.type)return;this.sec=0,this.timeText=["00","00"]}}}}),m=v,_=(a("529e"),Object(u["a"])(m,d,h,!1,null,null,null)),y=_.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"controller"},[a("div",{staticClass:"controller-containt"},[a("div",{staticClass:"controller-content fz-12",class:t.status?"controller-content--enable":""},t._l(t.leavles,function(e){return a("button",{staticClass:"controller__button",class:[e.type?"controller__button--active":""],on:{click:function(a){return t.leavleSelectHandler(e.rank)}}},[t._v(t._s(e.text))])}),0),a("div",{staticClass:"controller-content fz-14"},t._l(t.buttonComputed,function(e){return a("button",{staticClass:"controller__button",class:"controller__button--"+e.type,on:{click:function(a){return t.gameContorHandler(e.type)}}},[t._v(t._s(e.text))])}),0)])])},C=[],g={name:"Controller",props:{status:{type:Boolean,required:!0},type:{type:String,required:!0},leavles:{type:Array,required:!0}},data:function(){return{buttonData:[{text:"開始遊戲",type:"start"},{text:"遊戲暫停",type:"stop"},{text:"重新洗牌",type:"reset"}]}},methods:{gameContorHandler:function(t){switch(t){case"start":this.$emit("status-change",!0,t);break;case"reset":case"stop":this.$emit("status-change",!1,t);break}},leavleSelectHandler:function(t){"start"!==this.type&&(this.$emit("leavl-change",t),this.$emit("status-change",!1,"reset"))}},computed:{buttonComputed:function(){var t=this;return this.buttonData.forEach(function(e){"reset"===e.type?e.show=!0:"start"===e.type?e.show=!t.status:"stop"===e.type&&(e.show=t.status)}),this.buttonData.filter(function(t){return t.show})}}},w=g,x=(a("0bdd"),Object(u["a"])(w,b,C,!1,null,null,null)),H=x.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slide-top",appear:""}},[a("section",{attrs:{id:"scoreboard"}},[a("div",{staticClass:"containt"},[a("div",{staticClass:"scoreboard"},[a("div",{staticClass:"scoreboard-cover"}),a("div",{staticClass:"scoreboard-containt"},[a("div",{staticClass:"scoreboard-title"},[a("div",{staticClass:"scoreboard-title__ch fz-52 fz-mm-36 fz-ms-24"},[t._v("成績統計")]),a("div",{staticClass:"scoreboard-title__en"})]),a("div",{staticClass:"scoreboard-userTime fz-24 fz-mm-24"},[t._v("花費時間為 "+t._s(t.userData.score))]),a("div",{staticClass:"scoreboard-leavle"},[t._v("遊戲難易度："+t._s(t.leavleOn.text))]),a("transition-group",{staticClass:"scoreboard-group fz-24 fz-mm-16",attrs:{tag:"div",name:"slide-bottom",appear:""}},t._l(t.scoreData,function(e,s){return a("div",{key:e.timestamp,staticClass:"scoreboard-group__item",class:t.userData.timestamp===e.timestamp?"scoreboard-group__item--active":"",style:"transition-delay: "+(0===s?s:.125*s)+"s;"},[a("div",{staticClass:"scoreboard-group__id"},[t._v("第 "+t._s(s+1>=10?s+1:"0"+(s+1))+" 名")]),a("div",{staticClass:"scoreboard-group__score"},[t._v(t._s(e.score))]),a("div",{staticClass:"scoreboard-group__timestamp fz-12"},[t._v(t._s(t.getDateHandler(e.timestamp)))])])}),0),a("div",{staticClass:"scoreboard-close fz-14"},[a("span",{staticClass:"scoreboard-close__button",on:{click:t.closeHandler}},[t._v("CLOSE")])])],1)])])])])},O=[],z=a("f2a0"),k=a("59ca");a("66ce"),k.initializeApp(z["a"]);var j={name:"Scoreboard",props:{leavleOn:{type:Object,required:!0}},data:function(){return{fireBaseData:new Object,scoreData:new Array,userData:new Object}},mounted:function(){this.$bus.$once("successEvent",this.scoreTimeHandler)},methods:{scoreTimeHandler:function(t){var e=this,a=t[0].join(":"),s=t[1],r=+new Date,n="".concat(this.leavleOn.rank,"/").concat(r),i=k.database(),c=i.ref("/playingCards/".concat(n,"/")),o=i.ref("/playingCards/".concat(this.leavleOn.rank,"/"));this.userData={score:a,sec:s,timestamp:r},c.set(this.userData),o.once("value").then(function(t){var a=e.fireBaseData=t.val();for(var s in a)e.scoreData.push(a[s]);e.scoreData=e.scoreData.sort(function(t,e){return t.sec-e.sec}),e.scoreData.length>10&&(e.scoreData.length=10)})},getDateHandler:function(t){var e=new Date(t),a=e.getFullYear(),s=e.getMonth()+1,r=e.getDate(),n=e.getHours(),i=e.getMinutes(),c=e.getSeconds();return"".concat(a,"-").concat(s,"-").concat(r,", ").concat(n||"0"+n,":").concat(i>9?i:"0"+i,":").concat(c>9?c:"0"+c)},closeHandler:function(){this.$emit("status-change",!1,"reset")}}},S=j,T=(a("5a20"),Object(u["a"])(S,D,O,!1,null,null,null)),$=T.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tips"},[a("transition-group",{staticClass:"tips-group",attrs:{tag:"ul",name:"fade",appear:""}},t._l(t.tips,function(e,s){return a("li",{key:s,staticClass:"tips-group__item fz-14",class:"tips-group__item--"+e.type},[t._v(t._s(e.content))])}),0)],1)},A=[],E={name:"Tips",data:function(){return{tips:[{type:"success",content:"請嘗試翻開撲克牌，並配對「點數相同」的卡牌。"}]}}},G=E,I=(a("bb34"),Object(u["a"])(G,q,A,!1,null,null,null)),M=I.exports,P={name:"App",components:{Cards:p,Counter:y,Controller:H,Scoreboard:$,Tips:M},data:function(){return{inGame:!1,type:"stop",leavles:[{rank:"easily",text:"簡單",num:3,type:!0},{rank:"general",text:"中等",num:6,type:!1},{rank:"difficult",text:"困難",num:9,type:!1},{rank:"varyDifficult",text:"最難",num:13,type:!1}]}},methods:{statusChangeHandler:function(t,e){this.inGame=t,this.type=e},leavlChangeHandler:function(t){this.leavles.forEach(function(e){e.type=e.rank===t})}},computed:{leavleOn:function(){return this.leavles.find(function(t){return!0===t.type})}}},B=P,J=(a("cf25"),Object(u["a"])(B,r,n,!1,null,null,null)),N=J.exports;s["a"].config.productionTip=!1,s["a"].prototype.$bus=new s["a"],new s["a"]({render:function(t){return t(N)}}).$mount("#app")},"5a20":function(t,e,a){"use strict";var s=a("65e2"),r=a.n(s);r.a},"65e2":function(t,e,a){},bb34:function(t,e,a){"use strict";var s=a("0ff1"),r=a.n(s);r.a},c80f:function(t,e,a){},cf25:function(t,e,a){"use strict";var s=a("0cfb"),r=a.n(s);r.a},d76a:function(t,e,a){},f485:function(t,e,a){"use strict";var s=a("c80f"),r=a.n(s);r.a},ffca:function(t,e,a){}});
//# sourceMappingURL=app.f9325a1f.js.map