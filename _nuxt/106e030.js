(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{359:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{title:{type:String,required:!1,default:""},lText:{type:String,required:!1,default:""},sText:{type:String,required:!0},sTextUnder:{type:String,required:!1,default:""},unit:{type:String,required:!1,default:""}}}),o=(n(368),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataSet"},[t.title?n("span",{staticClass:"DataView-DataSet-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"DataView-DataSet-info"},[t.lText?[n("span",{staticClass:"DataView-DataSet-summary"},[t._v("\n        "+t._s(t.lText)+"\n        "),n("small",{staticClass:"DataView-DataSet-summary-unit"},[t._v(t._s(t.unit))])]),t._v(" "),n("br")]:t._e(),t._v(" "),n("small",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sText))]),t._v(" "),t.sTextUnder?[n("br"),t._v(" "),n("small",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sTextUnder))])]:t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},363:function(t,e,n){var content=n(369);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("0e424632",content,!0,{sourceMap:!1})},368:function(t,e,n){"use strict";n(363)},369:function(t,e,n){(e=n(15)(!1)).push([t.i,".DataView-DataSet{display:flex;flex-flow:column;margin-bottom:10px}@media screen and (min-width:1171px){.DataView-DataSet{justify-content:space-between;flex-flow:row}}.DataView-DataSet-title{font-size:2rem;flex:1 1 50%;margin-bottom:10px}.DataView-DataSet-info{flex:1 1 50%}@media screen and (min-width:1171px){.DataView-DataSet-info{text-align:right}}.DataView-DataSet-summary{display:inline-block;color:#4d4d4d;white-space:nowrap;font-family:Hiragino Sans,sans-serif;font-style:normal;line-height:30px;font-size:3rem}.DataView-DataSet-summary-unit{width:100%;font-size:1.8rem}.DataView-DataSet-date{display:inline-block;width:100%;color:#707070;line-height:normal;font-size:1.2rem}",""]),t.exports=e},395:function(t,e,n){var content=n(396);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("01907af4",content,!0,{sourceMap:!1})},396:function(t,e,n){(e=n(15)(!1)).push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px;min-height:0;min-width:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=e},399:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({name:"DataSelector",props:{value:{type:String,default:"transition"},targetId:{type:String,default:function(t){return t&&""!==t?t:null}}}}),o=(n(434),n(5)),l=n(31),d=n.n(l),c=n(474),h=n(463),f=n(401),m=n.n(f),v=n(384),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn-toggle",{staticClass:"DataSelector",attrs:{"aria-controls":t.targetId,value:t.value,mandatory:""},on:{change:function(e){return t.$emit("input",e)}}},[n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"transition"===t.value?"true":"false",value:"transition"}},[t._v("\n    "+t._s(t.$t("日別"))+"\n  ")]),t._v(" "),n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"cumulative"===t.value?"true":"false",value:"cumulative"}},[t._v("\n    "+t._s(t.$t("累計"))+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:c.a,VBtnToggle:h.a}),m()(component,{Ripple:v.a})},411:function(t,e,n){var content=n(521);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("36ed7d66",content,!0,{sourceMap:!1})},419:function(t,e,n){var content=n(435);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("59896903",content,!0,{sourceMap:!1})},425:function(t,e,n){t.exports=function(){"use strict";var s,t,i=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,e=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,n={years:31536e6,months:2592e6,days:864e5,hours:36e5,minutes:6e4,seconds:1e3,milliseconds:1,weeks:6048e5},r=function(s){return s instanceof u},o=function(s,t,i){return new u(s,i,t.$l)},l=function(s){return t.p(s)+"s"},u=function(){function u(s,t,i){var r=this;if(this.$d={},this.$l=i,t)return o(s*n[l(t)],this);if("number"==typeof s)return this.$ms=s,this.parseFromMilliseconds(),this;if("object"==typeof s)return Object.keys(s).forEach((function(t){r.$d[l(t)]=s[t]})),this.calMilliseconds(),this;if("string"==typeof s){var u=s.match(e);if(u)return this.$d.years=u[2],this.$d.months=u[3],this.$d.weeks=u[4],this.$d.days=u[5],this.$d.hours=u[6],this.$d.minutes=u[7],this.$d.seconds=u[8],this.calMilliseconds(),this}return this}var d=u.prototype;return d.calMilliseconds=function(){var s=this;this.$ms=Object.keys(this.$d).reduce((function(t,i){return t+(s.$d[i]||0)*n[i]}),0)},d.parseFromMilliseconds=function(){var s=this.$ms;this.$d.years=Math.floor(s/31536e6),s%=31536e6,this.$d.months=Math.floor(s/2592e6),s%=2592e6,this.$d.days=Math.floor(s/864e5),s%=864e5,this.$d.hours=Math.floor(s/36e5),s%=36e5,this.$d.minutes=Math.floor(s/6e4),s%=6e4,this.$d.seconds=Math.floor(s/1e3),s%=1e3,this.$d.milliseconds=s},d.toISOString=function(){var s=this.$d.years?this.$d.years+"Y":"",t=this.$d.months?this.$d.months+"M":"",i=+this.$d.days||0;this.$d.weeks&&(i+=7*this.$d.weeks);var e=i?i+"D":"",n=this.$d.hours?this.$d.hours+"H":"",r=this.$d.minutes?this.$d.minutes+"M":"",o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var l=o?o+"S":"",u="P"+s+t+e+(n||r||l?"T":"")+n+r+l;return"P"===u?"P0D":u},d.toJSON=function(){return this.toISOString()},d.format=function(s){var e=s||"YYYY-MM-DDTHH:mm:ss",n={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return e.replace(i,(function(s,t){return t||String(n[s])}))},d.as=function(s){return this.$ms/n[l(s)]},d.get=function(s){var t=this.$ms,i=l(s);return"milliseconds"===i?t%=1e3:t="weeks"===i?Math.floor(t/n[i]):this.$d[i],t},d.add=function(s,t,i){var e;return e=t?s*n[l(t)]:r(s)?s.$ms:o(s,this).$ms,o(this.$ms+e*(i?-1:1),this)},d.subtract=function(s,t){return this.add(s,t,!0)},d.locale=function(s){var t=this.clone();return t.$l=s,t},d.clone=function(){return o(this.$ms,this)},d.humanize=function(t){return s().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},d.milliseconds=function(){return this.get("milliseconds")},d.asMilliseconds=function(){return this.as("milliseconds")},d.seconds=function(){return this.get("seconds")},d.asSeconds=function(){return this.as("seconds")},d.minutes=function(){return this.get("minutes")},d.asMinutes=function(){return this.as("minutes")},d.hours=function(){return this.get("hours")},d.asHours=function(){return this.as("hours")},d.days=function(){return this.get("days")},d.asDays=function(){return this.as("days")},d.weeks=function(){return this.get("weeks")},d.asWeeks=function(){return this.as("weeks")},d.months=function(){return this.get("months")},d.asMonths=function(){return this.as("months")},d.years=function(){return this.get("years")},d.asYears=function(){return this.as("years")},u}();return function(i,e,n){s=n,t=n().$utils(),n.duration=function(s,t){var i=n.locale();return o(s,{$l:i},t)},n.isDuration=r;var l=e.prototype.add,u=e.prototype.subtract;e.prototype.add=function(s,t){return r(s)&&(s=s.asMilliseconds()),l.bind(this)(s,t)},e.prototype.subtract=function(s,t){return r(s)&&(s=s.asMilliseconds()),u.bind(this)(s,t)}}}()},434:function(t,e,n){"use strict";n(419)},435:function(t,e,n){(e=n(15)(!1)).push([t.i,".DataSelector{margin-top:20px;border:1px solid #d9d9d9;background-color:#fff}.DataSelector-Button{border:none!important;margin:2px;border-radius:4px!important;height:24px!important;color:#333!important;background-color:#fff!important;font-size:1.2rem!important}.DataSelector-Button:before{background-color:inherit}.DataSelector-Button:focus{outline:1px dotted #707070}.DataSelector .v-btn--active{background-color:#4d4d4d!important;color:#fff!important}",""]),t.exports=e},448:function(t,e,n){"use strict";n.r(e);n(18),n(71),n(63),n(123),n(34),n(122),n(42),n(82),n(11),n(19),n(36),n(37),n(72),n(64);var r=n(3),o=n(98),l=n(12),d=n.n(l),c=n(0),h=n(399),f=n(358),m=n(359),v=n(361),y=n(360),x=n(124),D=n(366),$=n(121),k={created:function(){this.canvas=!0,this.dataKind=this.$route.query.embed&&"cumulative"===this.$route.query.dataKind?"cumulative":"transition"},components:{DataView:f.default,DataSelector:h.default,DataViewTable:v.default,DataViewDataSetPanel:m.default,ScrollableChart:y.default},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,default:"time-stacked-bar-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},date:{type:String,required:!0,default:""},items:{type:Array,default:function(){return[]}},labels:{type:Array,default:function(){return[]}},dataLabels:{type:Array,default:function(){return[]}},tableLabels:{type:Array,default:function(){return[]}},unit:{type:String,default:""},yAxesBgPlugin:{type:Array,default:function(){return x.b}}},data:function(){return{dataKind:"transition",displayLegends:[!0,!0],colors:Object(D.b)(2),canvas:!0,isSmall:!1}},computed:{displayInfo:function(){var t=this.labels[this.labels.length-1],e=this.$d(Object($.e)(t).toDate(),"dateWithoutYear");return"transition"===this.dataKind?{lText:this.sum(this.pickLastNumber(this.chartData)).toLocaleString(),sText:"".concat(this.$t("{date}の合計",{date:e})),unit:this.unit}:{lText:this.sum(this.cumulativeSum(this.chartData)).toLocaleString(),sText:"".concat(this.$t("{date}の合計",{date:e})),unit:this.unit}},displayData:function(){var t=this,e=Object(D.b)(this.chartData.length);return"transition"===this.dataKind?{labels:this.labels,datasets:this.chartData.map((function(n,r){return{label:t.items[r],data:n,backgroundColor:e[r].fillColor,borderColor:e[r].strokeColor,borderWidth:1}}))}:{labels:this.labels,datasets:this.chartData.map((function(n,r){return{label:t.items[r],data:t.cumulative(n),backgroundColor:e[r].fillColor,borderColor:e[r].strokeColor,borderWidth:1}}))}},tableHeaders:function(){var t=this;return[{text:this.$t("日付"),value:"text"}].concat(Object(o.a)(this.tableLabels.reduce((function(e,text){return e.push.apply(e,Object(o.a)([t.$t("日別"),t.$t("累計")].map((function(label){return"".concat(text," (").concat(label,")")})))),e}),[]).map((function(text,i){return{text:text,value:String(i),align:"end",width:t.isSmall?"6em":"auto"}}))))},tableData:function(){var t=this;return this.labels.map((function(label,i){return Object.assign.apply(Object,[{text:label}].concat(Object(o.a)(t.tableHeaders.map((function(e,n){var o=n<2?0:1,l=t.chartData[o],d=t.cumulative(l);return Object(r.a)({},n,n%2==0?l[i].toLocaleString():d[i].toLocaleString())})))))})).sort((function(a,b){return d()(a.text).unix()-d()(b.text).unix()})).reverse()},displayOption:function(){var t=this,e=this,n=this.unit,r=this.eachArraySum(this.chartData),data=this.chartData,o=this.chartData.map((function(e){return t.cumulative(e)})),l=this.eachArraySum(o),c={tooltips:{displayColors:!1,callbacks:{label:function(e){var d,c,label;return"transition"===t.dataKind?(d=r[e.index].toLocaleString(),c=data[e.datasetIndex][e.index].toLocaleString()):(d=l[e.index].toLocaleString(),c=o[e.datasetIndex][e.index].toLocaleString()),label="".concat(t.dataLabels[e.datasetIndex]," : ").concat(c," ").concat(n),"cumulative"===t.dataKind&&(label="".concat(label," (").concat(t.$t("合計"),": ").concat(d," ").concat(n,")")),label},title:function(t,data){var label=data.labels[t[0].index];return e.$d(Object($.d)(label),"dateWithoutYear")}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return d()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"MMM"}}}],yAxes:[{stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax,maxTicksLimit:8,fontColor:"#808080"}}]}};return"true"===this.$route.query.ogp&&Object.assign(c,{animation:{duration:0}}),c},displayDataHeader:function(){var t=0,e=0;for(var i in this.displayData.datasets[0].data){var n=this.displayData.datasets[0].data[i]+this.displayData.datasets[1].data[i];n>e&&(e=n,t=Number(i))}return{labels:["2020-01-01"],datasets:[{data:[this.displayData.datasets[0].data[t]],backgroundColor:"transparent",borderWidth:0},{data:[this.displayData.datasets[1].data[t]],backgroundColor:"transparent",borderWidth:0}]}},displayOptionHeader:function(){return{maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,minRotation:0,callback:function(label){return d()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold",callback:function(label){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(label.split(" ")[0])+1;return"".concat(t,"月")}},type:"time",time:{unit:"month"}}],yAxes:[{stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){var t=this;return Array.from(this.chartData[0].keys()).map((function(i){return t.chartData[0][i]+t.chartData[1][i]})).reduce((function(a,b){return Math.max(a,b)}),0)}},methods:{onClickLegend:function(i){this.displayLegends[i]=!this.displayLegends[i],this.displayLegends=this.displayLegends.slice()},cumulative:function(t){var e=[],n=0;return t.forEach((function(t){n+=t,e.push(n)})),e},sum:function(t){return t.reduce((function(t,e){return t+e}))},pickLastNumber:function(t){return t.map((function(t){return t[t.length-1]}))},cumulativeSum:function(t){return t.map((function(t){return t.reduce((function(t,e){return t+e}))}))},eachArraySum:function(t){for(var e=[],i=0;i<t[0].length;i++)e.push(t[0][i]+t[1][i]);return e},handleResize:function(){this.isSmall=window.innerWidth<=400}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t)),window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)}},S=c.a.extend(k),w=n(520),_=n(5);var component=Object(_.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"button",fn:function(){return[n("data-selector",{style:{display:t.canvas?"inline-block":"none"},attrs:{"target-id":t.chartId},model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"dataTable",fn:function(){return[n("client-only",[n("data-view-table",{attrs:{headers:t.tableHeaders,items:t.tableData}})],1)]},proxy:!0},{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0}],null,!0)},[t._v(" "),t._v(" "),n("ul",{class:t.$style.GraphLegend,style:{display:t.canvas?"block":"none"}},t._l(t.items,(function(e,i){return n("li",{key:i,on:{click:function(e){return t.onClickLegend(i)}}},[n("button",[n("div",{style:{backgroundColor:t.colors[i].fillColor,borderColor:t.colors[i].strokeColor}}),t._v(" "),n("span",{style:{textDecoration:t.displayLegends[i]?"none":"line-through"}},[t._v(t._s(e))])])])})),0),t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,"display-legends":t.displayLegends,height:240,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgPlugin,"display-legends":t.displayLegends,height:240}})]},proxy:!0}])})],1)}),[],!1,(function(t){this.$style=w.default.locals||w.default}),null,null);e.default=component.exports;installComponents(component,{DataSelector:n(399).default,ScrollableChart:n(360).default,DataViewTable:n(361).default,DataViewDataSetPanel:n(359).default,DataView:n(358).default})},463:function(t,e,n){"use strict";var r=n(3),o=(n(395),n(386)),l=o.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return o.a.options.computed.classes.call(this)}},methods:{genData:o.a.options.methods.genData}}),d=n(99),c=n(70);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(l,d.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return f(f({},l.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,f({},l.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}})},520:function(t,e,n){"use strict";var r=n(411),o=n.n(r);n.d(e,"default",(function(){return o.a}))},521:function(t,e,n){(e=n(15)(!1)).push([t.i,".GraphLegend_1qazu{text-align:center;list-style:none;padding:0!important}.GraphLegend_1qazu li{display:inline-block;margin:0 3px}.GraphLegend_1qazu li div{height:12px;margin:2px 4px;width:40px;display:inline-block;vertical-align:middle;border-width:1px;border-style:solid}.GraphLegend_1qazu li button{color:#707070;font-size:1.2rem}",""]),e.locals={GraphLegend:"GraphLegend_1qazu"},t.exports=e},577:function(t,e,n){"use strict";n.r(e);n(63),n(34),n(11),n(36),n(64);var r=n(12),o=n.n(r),l=n(425),d=n.n(l),c=n(448),h=n(166),f=n(121);o.a.extend(d.a);var m={components:{TimeStackedBarChart:c.default},data:function(){var t=h.inspections_summary,e=t.date,data=t.data;return{date:e,inspectionsGraph:[Array.from(data["都内"].keys()).map((function(i){return data["都内"][i]+data["その他"][i]})),Array.from(data["都内"].keys()).map((function(i){return data["保険適用分"][i]}))],inspectionsItems:[this.$t("健康安全研究センターが行った検査件数"),this.$t("医療機関等が行った検査件数")],inspectionsLabels:t.labels.map((function(t){return Object(f.e)(t).format("YYYY-MM-DD")})),inspectionsDataLabels:[this.$t("健康安全研究センターが行った検査件数"),this.$t("医療機関等が行った検査件数")],inspectionsTableLabels:[this.$t("健康安全研究センター実施分"),this.$t("医療機関等実施分")]}}},v=n(5),y=n(31),x=n.n(y),D=n(591),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("time-stacked-bar-chart",{attrs:{title:t.$t("検査実施件数"),"title-id":"number-of-tested","chart-id":"time-stacked-bar-chart-inspections","chart-data":t.inspectionsGraph,date:t.date,items:t.inspectionsItems,labels:t.inspectionsLabels,unit:t.$t("件.tested"),"data-labels":t.inspectionsDataLabels,"table-labels":t.inspectionsTableLabels},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[n("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),n("ul",[n("li",[t._v("\n            "+t._s(t.$t("検体採取日を基準とする。ただし、一部検査結果判明日に基づくものを含む"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("同一の対象者について複数の検体を検査する場合がある"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("5月13日以降は、PCR検査に加え、抗原検査の件数を含む"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("速報値として公開するものであり、後日確定データとして修正される場合がある"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{TimeStackedBarChart:n(448).default}),x()(component,{VCol:D.a})}}]);