(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{414:function(e,t,n){var content=n(528);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("554da7a6",content,!0,{sourceMap:!1})},450:function(e,t,n){"use strict";n.r(t);n(18),n(34),n(42),n(82),n(239);var r=n(3),l=n(98),d=n(0),o=n(48),c=n(358),h=n(361),f=n(360),y=n(124),m=n(366),v={created:function(){this.canvas=!0},components:{DataView:c.default,DataViewTable:h.default,AppLink:o.default,ScrollableChart:f.default},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},chartData:Object,chartOption:Object,chartId:{type:String,default:"metro-bar-chart"},date:{type:String,required:!0},items:{type:Array,default:function(){return[]}},unit:{type:String,required:!1,default:"%"},tooltipsTitle:{type:Function,required:!0},tooltipsLabel:{type:Function,required:!0}},data:function(){return{colors:Object(m.b)(3),canvas:!0,yAxesBgPlugin:y.b,displayLegends:[!0,!0,!0]}},computed:{displayData:function(){var e=this,t=this.chartData.labels.map((function(label,i){return{label:label,data:e.chartData.datasets.map((function(e){return e.data[i]})),backgroundColor:e.colors[i].fillColor,borderColor:e.colors[i].strokeColor,borderWidth:1}}));return{labels:this.chartData.datasets.map((function(e){return e.label})),datasets:t}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(l.a)(this.chartData.labels.map((function(text,e){return{text:text,value:String(e),align:"end"}}))))},tableData:function(){var e=this;return this.displayData.datasets[0].data.map((function(t,i){return Object.assign.apply(Object,[{text:e.chartData.datasets[i].label}].concat(Object(l.a)(e.chartData.labels.map((function(t,n){return Object(r.a)({},n,e.displayData.datasets[n].data[i])})))))})).reverse()},displayOption:function(){var e=this,t={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{position:"bottom",stacked:!1,gridLines:{display:!0},ticks:{fontSize:10,maxTicksLimit:20,fontColor:"#808080"}}],yAxes:[{stacked:!1,gridLines:{display:!0},ticks:{fontSize:12,maxTicksLimit:10,fontColor:"#808080",callback:function(t){var n="number"==typeof t?t:Number(t);return"".concat(n.toFixed(2)).concat(e.unit)}}}]},tooltips:{displayColors:!1,callbacks:{title:e.tooltipsTitle,label:e.tooltipsLabel}}};return"true"===this.$route.query.ogp&&Object.assign(t,{animation:{duration:0}}),t},displayDataHeader:function(){var e=this,t=this.chartData.labels.map((function(label,i){return{label:label,data:e.chartData.datasets.map((function(e){return e.data[i]})),backgroundColor:"transparent",borderWidth:0}}));return{labels:this.chartData.datasets.map((function(e){return e.label})),datasets:t}},displayOptionHeader:function(){var e=this;return{maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{position:"bottom",stacked:!1,gridLines:{display:!1},ticks:{fontSize:10,maxTicksLimit:20,fontColor:"transparent"}}],yAxes:[{stacked:!1,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{fontSize:12,maxTicksLimit:10,fontColor:"#808080",callback:function(t){var n="number"==typeof t?t:Number(t);return"".concat(n.toFixed(2)).concat(e.unit)}}}]},animation:{duration:0}}}},methods:{onClickLegend:function(i){this.displayLegends[i]=!this.displayLegends[i],this.displayLegends=this.displayLegends.slice()}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),e="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",e))}},k=d.a.extend(v),x=n(527),O=n(5);var component=Object(O.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("data-view",{attrs:{title:e.title,"title-id":e.titleId,date:e.date},scopedSlots:e._u([{key:"dataTable",fn:function(){return[n("client-only",[n("data-view-table",{attrs:{headers:e.tableHeaders,items:e.tableData}})],1)]},proxy:!0},{key:"additionalDescription",fn:function(){return[e._t("additionalDescription")]},proxy:!0},{key:"footer",fn:function(){return[n("ul",[n("li",[n("app-link",{attrs:{to:"https://smooth-biz.metro.tokyo.lg.jp/pdf/202004date3.pdf"}},[e._v("\n          "+e._s(e.$t("鉄道利用者数の推移（新宿、東京、渋谷、各駅エリア）[PDF]"))+"\n        ")])],1),e._v(" "),n("li",[n("app-link",{attrs:{to:"https://corona.go.jp/"}},[e._v("\n          "+e._s(e.$t("主要駅の改札通過人数の推移（東京、新宿、渋谷、池袋ほか）[内閣官房HP]（ページ下部）"))+"\n        ")])],1)])]},proxy:!0}],null,!0)},[n("ul",{class:e.$style.GraphLegend,style:{display:e.canvas?"block":"none"}},e._l(e.items,(function(t,i){return n("li",{key:i,on:{click:function(t){return e.onClickLegend(i)}}},[n("button",[n("div",{style:{backgroundColor:e.colors[i].fillColor,borderColor:e.colors[i].strokeColor,width:"20px"}}),e._v(" "),n("span",{style:{textDecoration:e.displayLegends[i]?"none":"line-through"}},[e._v("\n          "+e._s(t)+"\n        ")])])])})),0),e._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:e.titleId+"-graph"}},[e._v("\n    "+e._s(e.$t("{title}のグラフ",{title:e.title}))+"\n  ")]),e._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:e.canvas,expression:"canvas"}],attrs:{"display-data":e.displayData,"is-weekly":!0},scopedSlots:e._u([{key:"chart",fn:function(t){var r=t.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":e.chartId,"chart-data":e.displayData,options:e.displayOption,"display-legends":e.displayLegends,height:240,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":e.chartId+"-header-right","chart-data":e.displayDataHeader,options:e.displayOptionHeader,"display-legends":e.displayLegends,plugins:e.yAxesBgPlugin,height:240}})]},proxy:!0}])})],1)}),[],!1,(function(e){this.$style=x.default.locals||x.default}),null,null);t.default=component.exports;installComponents(component,{ScrollableChart:n(360).default,DataViewTable:n(361).default,AppLink:n(48).default,DataView:n(358).default})},527:function(e,t,n){"use strict";var r=n(414),l=n.n(r);n.d(t,"default",(function(){return l.a}))},528:function(e,t,n){(t=n(15)(!1)).push([e.i,".GraphLegend_2uG_h{text-align:center;list-style:none;padding:0!important}.GraphLegend_2uG_h li{display:inline-block;margin:0 3px}.GraphLegend_2uG_h li div{height:12px;margin:2px 4px;width:40px;display:inline-block;vertical-align:middle;border-width:1px;border-style:solid}.GraphLegend_2uG_h li button{color:#707070;font-size:1.2rem}",""]),t.locals={GraphLegend:"GraphLegend_2uG_h"},e.exports=t},529:function(e){e.exports=JSON.parse('{"date":"2020/12/4 11:00","datasets":[{"label":"2/10~14","period":{"begin":"2020-02-10","end":"2020-02-14"},"data":[-0.96,-2.94,-7.48]},{"label":"2/17~21","period":{"begin":"2020-02-17","end":"2020-02-21"},"data":[-0.36,-4.11,-6.95]},{"label":"2/25~28","period":{"begin":"2020-02-25","end":"2020-02-28"},"data":[3.06,-9.47,-7.31]},{"label":"3/2~06","period":{"begin":"2020-03-02","end":"2020-03-06"},"data":[0.47,-22.36,-10.16]},{"label":"3/9~13","period":{"begin":"2020-03-09","end":"2020-03-13"},"data":[-1.22,-24.87,-12.05]},{"label":"3/16~19","period":{"begin":"2020-03-16","end":"2020-03-19"},"data":[-1.36,-23.98,-11.22]},{"label":"3/23~27","period":{"begin":"2020-03-23","end":"2020-03-27"},"data":[-4.28,-26.27,-14.34]},{"label":"3/30~03","period":{"begin":"2020-03-30","end":"2020-04-03"},"data":[-9.93,-34.5,-30.62]},{"label":"4/6~10","period":{"begin":"2020-04-06","end":"2020-04-10"},"data":[-17.64,-48.24,-47.14]},{"label":"4/13~17","period":{"begin":"2020-04-13","end":"2020-04-17"},"data":[-40.76,-65.48,-65.5]},{"label":"4/20~24","period":{"begin":"2020-04-20","end":"2020-04-24"},"data":[-45.75,-68.56,-68]},{"label":"4/27~01","period":{"begin":"2020-04-27","end":"2020-05-01"},"data":[-49.4,-69.72,-68.69]},{"label":"5/7~08","period":{"begin":"2020-05-07","end":"2020-05-08"},"data":[-40.03,-63.86,-64.14]},{"label":"5/11~15","period":{"begin":"2020-05-11","end":"2020-05-15"},"data":[-40.86,-65.13,-64.24]},{"label":"5/18~22","period":{"begin":"2020-05-18","end":"2020-05-22"},"data":[-39.1,-63.61,-62.23]},{"label":"5/25~29","period":{"begin":"2020-05-25","end":"2020-05-29"},"data":[-33.04,-59.24,-56.87]},{"label":"6/1~05","period":{"begin":"2020-06-01","end":"2020-06-05"},"data":[-15.77,-44.64,-40.93]},{"label":"6/8~12","period":{"begin":"2020-06-08","end":"2020-06-12"},"data":[-15.27,-43.72,-38.08]},{"label":"6/15~19","period":{"begin":"2020-06-15","end":"2020-06-19"},"data":[-12.64,-40.34,-36.04]},{"label":"6/22~26","period":{"begin":"2020-06-22","end":"2020-06-26"},"data":[-11.13,-36.99,-33.83]},{"label":"6/29~03","period":{"begin":"2020-06-29","end":"2020-07-03"},"data":[-7.09,-32.38,-32.72]},{"label":"7/6~10","period":{"begin":"2020-07-06","end":"2020-07-10"},"data":[-7.56,-31.77,-32.2]},{"label":"7/13~17","period":{"begin":"2020-07-13","end":"2020-07-17"},"data":[-8.19,-32.89,-32.93]},{"label":"7/20~22","period":{"begin":"2020-07-20","end":"2020-07-22"},"data":[-6.29,-33.01,-33.75]},{"label":"7/27~31","period":{"begin":"2020-07-27","end":"2020-07-31"},"data":[-9.57,-36.11,-36.64]},{"label":"8/3~07","period":{"begin":"2020-08-03","end":"2020-08-07"},"data":[-13.29,-38.77,-35.86]},{"label":"8/11~14","period":{"begin":"2020-08-11","end":"2020-08-14"},"data":[-43.39,-59.12,-51.5]},{"label":"8/17~21","period":{"begin":"2020-08-17","end":"2020-08-21"},"data":[-17.15,-41.42,-37.98]},{"label":"8/24~28","period":{"begin":"2020-08-24","end":"2020-08-28"},"data":[-12.11,-36.91,-35.71]},{"label":"8/31~04","period":{"begin":"2020-08-31","end":"2020-09-04"},"data":[-8.52,-33.73,-35.03]},{"label":"9/7~11","period":{"begin":"2020-09-07","end":"2020-09-11"},"data":[-8.21,-33.43,-34.75]},{"label":"9/14~18","period":{"begin":"2020-09-14","end":"2020-09-18"},"data":[-7.62,-33.28,-33.55]},{"label":"9/23~25","period":{"begin":"2020-09-23","end":"2020-09-25"},"data":[-6.92,-32.06,-33.5]},{"label":"9/28~02","period":{"begin":"2020-09-28","end":"2020-10-02"},"data":[-7.29,-31.37,-32.4]},{"label":"10/5~09","period":{"begin":"2020-10-05","end":"2020-10-09"},"data":[-7.32,-29.49,-31.48]},{"label":"10/12~16","period":{"begin":"2020-10-12","end":"2020-10-16"},"data":[-8.03,-30.57,-32.01]},{"label":"10/19~23","period":{"begin":"2020-10-19","end":"2020-10-23"},"data":[-8.17,-30.46,-31.49]},{"label":"10/26~30","period":{"begin":"2020-10-26","end":"2020-10-30"},"data":[-8.28,-30.35,-31.36]},{"label":"11/2~05","period":{"begin":"2020-11-02","end":"2020-11-05"},"data":[-8.34,-28.47,-30.79]},{"label":"11/9~13","period":{"begin":"2020-11-09","end":"2020-11-13"},"data":[-8.98,-28.98,-30.1]},{"label":"11/16~20","period":{"begin":"2020-11-16","end":"2020-11-20"},"data":[-9.64,-29.71,-30.91]},{"label":"11/24~27","period":{"begin":"2020-11-24","end":"2020-11-27"},"data":[-9.4,-29.19,-30.31]},{"label":"11/30~03","period":{"begin":"2020-11-30","end":"2020-12-03"},"data":[-10.18,-29.35,-31.92]}],"labels":["6:30~7:30","7:30~9:30","9:30~10:30"],"base_period":"1/20~1/24"}')},573:function(e,t,n){"use strict";n.r(t);n(18),n(123),n(34),n(82),n(11),n(19),n(43),n(50),n(37);var r=n(3),l=n(450),d=n(529),o=n(121);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={components:{MetroBarChart:l.default},data:function(){var e=this,t=d.datasets.map((function(t){return h(h({},t),{},{label:e.getWeekLabel(t.label)})})),n=h(h({},d),{},{datasets:t});return{metroGraph:n,metroGraphTooltipTitle:function(t,n){var r=e.getWeekLabel(t[0].label);return e.$t("期間: {duration}",{duration:r})},metroGraphTooltipLabel:function(t,data){var r=data.datasets[t.datasetIndex],l="".concat(r.data[t.index],"%");return e.$t("{duration}の利用者数との相対値: {percentage}",{duration:e.$t(n.base_period),percentage:l})}}},methods:{getWeekLabel:function(label){var e=label.split("/").length-1;if(1===e){var t=label.substr(0,label.indexOf("/"));if(Number(label.substr(label.indexOf("/")+1,label.indexOf("~")-label.indexOf("/")-1))>Number(label.substr(label.indexOf("~")+1))){var n=new Date;n.setMonth(Number(t)+1),t=n.getMonth().toString()}label=label.replace("~","~".concat(t,"/"))}var r=label.split("~");if(1===e&&2===r.length){var l=this.$d(Object(o.d)(r[0]),"dateWithoutYear"),d=this.$d(Object(o.d)(r[1]),"dateWithoutYear");return"".concat(l,"~").concat(d)}return"".concat(r[0],"~").concat(r[1])}}},y=n(5),m=n(31),v=n.n(m),k=n(591),component=Object(y.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("metro-bar-chart",{attrs:{title:e.$t("都営地下鉄の利用者数の推移"),"title-id":"predicted-number-of-toei-subway-passengers","chart-id":"metro-bar-chart","chart-data":e.metroGraph,date:e.metroGraph.date,items:e.metroGraph.labels,"tooltips-title":e.metroGraphTooltipTitle,"tooltips-label":e.metroGraphTooltipLabel,unit:"%"},scopedSlots:e._u([{key:"additionalDescription",fn:function(){return[e._v("\n        "+e._s(e.$t("{range}の利用者数*の平均値を基準としたときの相対値",{range:e.metroGraph.base_period}))+"\n        "),n("br"),e._v("\n        *"+e._s(e.$t("都営地下鉄4路線の自動改札出場数"))+"\n        "),n("br"),e._v("\n        "+e._s(e.$t("（注）速報値として公開するものであり、後日確定データとして修正される場合あり"))+"\n      ")]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{MetroBarChart:n(450).default}),v()(component,{VCol:k.a})}}]);