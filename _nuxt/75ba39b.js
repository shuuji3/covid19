(window.webpackJsonp=window.webpackJsonp||[]).push([[18,19,20,21,57,110],{383:function(t,e,n){var content=n(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("d3c7a3be",content,!0,{sourceMap:!1})},384:function(t,e,n){var content=n(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("c3e415e2",content,!0,{sourceMap:!1})},385:function(t,e,n){var content=n(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("bc739952",content,!0,{sourceMap:!1})},389:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return l}));n(274),n(93);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function r(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(o(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},391:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(85),l=n(396),d=n(397),c=n(131),f=o.default.extend({components:{ExpantionPanel:l.default,Share:d.default,AppLink:r.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},headTitle:{type:String,default:""}},head:function(){return this.$route.params.card?{title:this.headTitle?this.headTitle:this.title,meta:[{hid:"og:title",property:"og:title",content:this.headTitle?this.headTitle:this.title},{hid:"description",name:"description",content:this.formattedDateForDisplay},{hid:"og:description",property:"og:description",content:this.formattedDateForDisplay}]}:{}},computed:{formattedDate:function(){return Object(c.c)(this.date)},formattedDateForDisplay:function(){return""!==this.date?this.$d(new Date(this.date),"dateTime"):""},permalink:function(){var t="/cards/".concat(this.titleId);return this.localePath(t)}}}),v=(n(398),n(14)),_=n(64),m=n.n(_),h=n(921),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"DataView"},[n("div",{staticClass:"DataView-Inner"},[n("div",{staticClass:"DataView-Header",class:t.$slots.dataSetPanel?"with-dataSetPanel":""},[n("h3",{staticClass:"DataView-Title",class:t.$slots.infoPanel?"with-infoPanel":t.$slots.dataSetPanel?"with-dataSetPanel":""},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.$slots.infoPanel?n("div",{staticClass:"DataView-InfoPanel"},[t._t("infoPanel")],2):t._e(),t._v(" "),t.$slots.dataSetPanel?n("div",{staticClass:"DataView-DataSetPanel"},[t._t("dataSetPanel")],2):t._e()]),t._v(" "),t.$slots.attentionNote?n("div",{staticClass:"DataView-AttentionNote"},[t._t("attentionNote")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Description"},[t._t("description")],2),t._v(" "),n("div",[t._t("button")],2),t._v(" "),n("div",{staticClass:"DataView-Content"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t._t("additionalDescription")],2),t._v(" "),t.$slots.dataTable?n("expantion-panel",{staticClass:"DataView-ExpantionPanel"},[t._t("dataTable")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Space"}),t._v(" "),n("div",{staticClass:"DataView-Footer"},[n("div",[t._t("footer"),t._v(" "),n("div",[n("app-link",{staticClass:"Permalink",attrs:{to:t.permalink}},[n("time",{attrs:{datetime:t.formattedDate}},[t._v("\n              "+t._s(t.$t("{date} 更新",{date:t.formattedDateForDisplay}))+"\n            ")])])],1)],2),t._v(" "),"true"!==t.$route.query.embed?n("share",{staticClass:"Footer-Right",attrs:{title:t.title,"title-id":t.titleId}}):t._e()],1)],1)])}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCard:h.a})},392:function(t,e,n){"use strict";n(383)},393:function(t,e,n){var o=n(32)(!1);o.push([t.i,".v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{color:#333;font-size:1.4rem}",""]),t.exports=o},394:function(t,e,n){"use strict";n(384)},395:function(t,e,n){var o=n(32)(!1);o.push([t.i,".DataView-Share-Opener{cursor:pointer;margin:-14px;padding:14px}.DataView-Share-Opener:focus{outline:1px dotted #707070}.DataView-Share-Buttons{position:absolute;padding:8px;right:2rem;bottom:3em;width:240px;border:1px solid #d9d9d9;background:#fff!important;border-radius:8px;text-align:left;z-index:2;font-size:1.6rem}.DataView-Share-Buttons>*{padding:4px 0}.DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:#707070}.DataView-Share-Buttons>.Close-Button button{border-radius:50%;border:1px solid #fff}.DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.EmbedCode{position:relative;padding:4px 30px 4px 4px;color:#030303;border:1px solid #eee;border-radius:8px;font-size:1.2rem}.DataView-Share-Buttons>.EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:#707070}.DataView-Share-Buttons>.EmbedCode button{border-radius:50%;border:1px solid #eee}.DataView-Share-Buttons>.EmbedCode button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%}.DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-left:4px;margin-right:4px}.DataView-Share-Buttons>.Buttons button:focus{border-radius:50%;border:1px dotted #707070;outline:none}.overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.overlay>.overlay-text{text-align:center;padding:2em;width:60%;background:#4d4d4d;border-radius:8px;color:#fff!important;font-size:1.6rem}",""]),t.exports=o},396:function(t,e,n){"use strict";n.r(e);var o=n(50),r=n(0),l=n(403),d=r.default.extend({data:function(){return{showDetails:!1,mdiChevronRight:o.e}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){l.a.$emit(l.b,{dataView:this.$parent})}}}),c=(n(392),n(14)),f=n(64),v=n.n(f),_=n(771),m=n(772),h=n(773),w=n(774),x=n(372),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon"},[n("v-icon",{attrs:{left:"",size:"2.4rem"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text"},[t._v(t._s(t.$t("テーブルを表示")))])]),t._v(" "),n("v-expansion-panel-content",[t._t("default")],2)],1)],1):[t._t("default")]],2)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VExpansionPanel:_.a,VExpansionPanelContent:m.a,VExpansionPanelHeader:h.a,VExpansionPanels:w.a,VIcon:x.a})},397:function(t,e,n){"use strict";n.r(e);n(69),n(16);var o=n(50),r=n(0).default.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1,mdiClipboardOutline:o.f,mdiClose:o.h}},computed:{graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'.concat(this.permalink(!0,!0),'" frameborder="0"></iframe>');return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1,this.$refs.shareOpener.focus()},isCopyAvailable:function(){return!!navigator.clipboard},copyEmbedCode:function(){var t=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){t.closeShareMenu(),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/".concat(this.titleId);return embed&&(e="".concat(e,"?embed=true")),e=this.localePath(e),t&&(e="".concat(location.protocol,"//").concat(location.host).concat(e)),e},twitter:function(){var t="https://twitter.com/intent/tweet?text=".concat(this.title," / ").concat(this.$t("東京都")).concat(this.$t("新型コロナウイルス感染症")).concat(this.$t("対策サイト"),"&url=").concat(this.permalink(!0),"&hashtags=StopCovid19JP");window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u=".concat(this.permalink(!0));window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url=".concat(this.permalink(!0));window.open(t)}}}),l=(n(394),n(14)),d=n(64),c=n.n(d),f=n(372),v=n(775),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{left:"","nudge-right":"20","nudge-bottom":"4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("button",t._g({ref:"shareOpener",staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},o),[n("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("{title}のグラフをシェア",{title:t.title})}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("情報をシェアする")))])]),t._v(" "),t.displayShare?n("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[n("div",{staticClass:"Close-Button"},[n("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n        "+t._s(t.mdiClose)+"\n      ")])],1),t._v(" "),n("h4",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),n("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?n("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v(t._s(t.mdiClipboardOutline))]):t._e(),t._v("\n      "+t._s(t.graphEmbedValue)+"\n    ")],1),t._v(" "),n("div",{staticClass:"Buttons"},[n("button",{attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[t._m(0)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[t._m(1)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[t._m(2)])])]):t._e(),t._v(" "),t.showOverlay?n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.$t("埋め込み用コードをコピーしました"))+"\n    ")])]):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:f.a,VTooltip:v.a})},398:function(t,e,n){"use strict";n(385)},399:function(t,e,n){var o=n(32)(!1);o.push([t.i,".DataView{height:100%;background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px}.DataView-Header{display:flex;align-items:flex-start;flex-flow:column;padding:0 10px}@media screen and (min-width:769px){.DataView-Header{padding:0 5px}}@media screen and (min-width:1171px){.DataView-Header{justify-content:space-between;flex-flow:row;padding:0}.DataView-Header.with-dataSetPanel{flex-flow:column}}.DataView-Inner{display:flex;flex-flow:column;padding:22px;height:100%}.DataView-Title{width:100%;margin-bottom:10px;line-height:1.5;font-weight:400;color:#4d4d4d;font-size:2rem}.DataView-Title.with-dataSetPanel{margin-bottom:0}@media screen and (min-width:1171px){.DataView-Title{margin-bottom:0}.DataView-Title.with-infoPanel{flex:1 1 50%;margin-right:24px}}.DataView-Title span{display:inline-block}.DataView-InfoPanel{flex:1 1 50%}.DataView-DataSetPanel{flex:1 0 auto;width:100%}.DataView-Content{margin:16px 0}.DataView-Space{margin-top:10px}.DataView-Description{margin-top:10px;color:#707070;font-size:1.2rem}.DataView-Description ul{list-style:disc inside;padding-left:1em}.DataView-Description ul li{margin-left:1.5em;text-indent:-1.5em}.DataView-Description--Additional,.DataView-ExpantionPanel{margin-bottom:10px}.DataView-Footer{display:flex;justify-content:space-between;margin-top:auto;color:#707070;font-size:1.2rem}.DataView-Footer ul{list-style-type:none;padding:0}.DataView-Footer .Permalink{color:#707070!important}.DataView-Footer .Footer-Right{display:flex;align-items:flex-end}.DataView-AttentionNote{margin:10px 0;padding:12px;background-color:#ffe200;border-radius:4px;color:#4d4d4d;font-size:1.2rem}.DataView-AttentionNote p{margin:0}",""]),t.exports=o},403:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=new(n(0).default),r="TOGGLE_DETAILS"},417:function(t,e,n){"use strict";var o=n(1);function r(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var l={inserted:function(t,e){if("undefined"!=typeof window&&"IntersectionObserver"in window){var n=e.modifiers||{},l=e.value,d="object"===Object(o.a)(l)?l:{handler:l,options:{}},c=d.handler,f=d.options,v=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;if(t._observe){var l=e.some((function(t){return t.isIntersecting}));!c||n.quiet&&!t._observe.init||n.once&&!l&&t._observe.init||c(e,o,l),l&&n.once?r(t):t._observe.init=!0}}),f);t._observe={init:!1,observer:v},v.observe(t)}},unbind:r};e.a=l},421:function(t,e,n){"use strict";n(93);var o=n(19),r=n(0);e.a=r.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(o.e)(this.height),n=Object(o.e)(this.minHeight),r=Object(o.e)(this.minWidth),l=Object(o.e)(this.maxHeight),d=Object(o.e)(this.maxWidth),c=Object(o.e)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),l&&(t.maxHeight=l),d&&(t.maxWidth=d),c&&(t.width=c),t}}})},422:function(t,e,n){"use strict";n(23),n(28),n(34),n(37);var o=n(6),r=(n(93),n(25),n(36),n(65),n(260),n(17),n(35),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(38),n(44),n(12),n(70),n(275),n(0)),l=n(170),d=n(19);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],_=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=v.reduce((function(t,e){return t["offset"+Object(d.B)(e)]={type:[String,Number],default:null},t}),{}),h=v.reduce((function(t,e){return t["order"+Object(d.B)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(_),offset:Object.keys(m),order:Object.keys(h)};function x(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var y=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},_),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,d=(e.parent,"");for(var c in n)d+=String(n[c]);var f=y.get(d);return f||function(){var t,e;for(e in f=[],w)w[e].forEach((function(t){var o=n[t],r=x(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),y.set(d,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},435:function(t,e,n){var content=n(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("5e22af2d",content,!0,{sourceMap:!1})},442:function(t,e,n){var content=n(517);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("4509a34d",content,!0,{sourceMap:!1})},443:function(t,e,n){var content=n(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("5f38c72d",content,!0,{sourceMap:!1})},460:function(t,e,n){var content=n(604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("bc065de8",content,!0,{sourceMap:!1})},462:function(t,e,n){"use strict";n.r(e);n(44),n(45);var o=n(0).default.extend({props:{value:{type:String,required:!0},unit:{type:Object,required:!0},bold:{type:Boolean,required:!0}},data:function(){return{currentLocaleCode:this.$root.$i18n.locale}},computed:{translatedUnit:function(){var t=this.unit,text=t.text,e=t.translatable,n=t.except;return e?n&&n.includes(String(this.currentLocaleCode))?null:this.$t(t.text):text}}}),r=n(476),l=n(14);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{class:t.$style.parent},[t.bold?n("span",[n("strong",[t._v(t._s(t.value))])]):n("span",[t._v(t._s(t.value))]),t._v(" "),t.translatedUnit?n("span",[t._v(t._s(t.translatedUnit))]):t._e()])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},473:function(t){t.exports=JSON.parse('{"date":"2021/7/1 18:00","data":{"専門家3行コメント":[{"@ja":"新規陽性者数の増加比は、3週続けて大きく上昇しており、感染が再拡大していると考えられる。","@en":"新規陽性者数の増加比は、3週続けて大きく上昇しており、感染が再拡大していると考えられる。"},{"@ja":"人流の増加や、変異株の影響を踏まえると、急激な感染拡大が危惧される。","@en":"人流の増加や、変異株の影響を踏まえると、急激な感染拡大が危惧される。"},{"@ja":"新規陽性者数の増加により、医療提供体制が逼迫する恐れがある。","@en":"新規陽性者数の増加により、医療提供体制が逼迫する恐れがある。"}],"(1)新規陽性者数":523.1,"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":68.7,"(3)新規陽性者における接触歴等不明者（人数）":314.6,"(3)新規陽性者における接触歴等不明者（増加比）":115.3,"(4)PCR・抗原検査（陽性率）":5.2,"(4)PCR・抗原検査（検査人数）":7212.3,"(5)救急医療の東京ルールの適用件数":41.6,"(6)入院患者数":1557,"(6)入院患者確保病床数":5594,"(7)重症患者数":51,"(7)重症患者確保病床数":373,"総括コメント-感染状況":{"date":"2021-03-04","level":4,"display":{"@ja":"感染が拡大していると思われる","@en":"There is a high risk of a resurgence of the virus."}},"総括コメント-医療提供体制":{"date":"2021-03-04","level":4,"display":{"@ja":"通常の医療が大きく制限されていると思われる","@en":"The provision of non-COVID health care is under pressure."}}}}')},474:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));var o=n(389),r=function(t){var e={text:"人",translatable:!0},n={text:"件.reports",translatable:!0},r={text:"%",translatable:!1},l={text:"床",translatable:!0,except:["en"]},d=Object(o.a)(0),c=Object(o.a)(1);return{"(1)新規陽性者数":{value:c(t["(1)新規陽性者数"]),unit:e,bold:!0},"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":{value:c(t["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "]),unit:n,bold:!0},"(3)新規陽性者における接触歴等不明者（人数）":{value:c(t["(3)新規陽性者における接触歴等不明者（人数）"]),unit:e,bold:!0},"(3)新規陽性者における接触歴等不明者（増加比）":{value:c(t["(3)新規陽性者における接触歴等不明者（増加比）"]),unit:r,bold:!0},"(4)PCR・抗原検査（検査人数）":{value:c(t["(4)PCR・抗原検査（検査人数）"]),unit:e,bold:!0},"(4)PCR・抗原検査（陽性率）":{value:c(t["(4)PCR・抗原検査（陽性率）"]),unit:r,bold:!0},"(5)救急医療の東京ルールの適用件数":{value:c(t["(5)救急医療の東京ルールの適用件数"]),unit:n,bold:!0},"(6)入院患者数":{value:d(t["(6)入院患者数"]),unit:e,bold:!0},"(6)入院患者確保病床数":{value:d(t["(6)入院患者確保病床数"]),unit:l,bold:!1},"(7)重症患者数":{value:d(t["(7)重症患者数"]),unit:e,bold:!0},"(7)重症患者確保病床数":{value:d(t["(7)重症患者確保病床数"]),unit:l,bold:!1}}},l=function(t){return{"総括コメント-感染状況":{date:t["総括コメント-感染状況"].date,level:t["総括コメント-感染状況"].level,display:{"@ja":t["総括コメント-感染状況"].display["@ja"],"@en":t["総括コメント-感染状況"].display["@en"]}},"総括コメント-医療提供体制":{date:t["総括コメント-医療提供体制"].date,level:t["総括コメント-医療提供体制"].level,display:{"@ja":t["総括コメント-医療提供体制"].display["@ja"],"@en":t["総括コメント-医療提供体制"].display["@en"]}}}}},476:function(t,e,n){"use strict";var o=n(435),r=n.n(o);n.d(e,"default",(function(){return r.a}))},477:function(t,e,n){var o=n(32)(!1);o.push([t.i,".parent_25AIV{margin-left:10px;text-align:right;white-space:nowrap;flex-shrink:1}",""]),o.locals={parent:"parent_25AIV"},t.exports=o},516:function(t,e,n){"use strict";var o=n(442),r=n.n(o);n.d(e,"default",(function(){return r.a}))},517:function(t,e,n){var o=n(32)(!1);o.push([t.i,'.container_3XjJx{width:100%;color:#008830;line-height:1.35;padding-left:0!important}.container_3XjJx,.container_3XjJx *{box-sizing:border-box}.container_3XjJx ul{padding-left:0}.group_1p13o{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #008830;border-left:3px solid #008830}.content_2oIg7{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #008830}.content_2oIg7>span{display:block;font-size:1.4rem}.content_2oIg7>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_2oIg7>span:not(:last-child){word-wrap:break-word}.content_2oIg7 strong{font-size:1.6rem}.content_2oIg7 span.unit_2PKD5{font-size:1.4rem}.box_1PPAr{display:block;margin-top:3px}.box_1PPAr.parent_3YN05{border-top:3px solid #008830;border-left:3px solid #008830;position:relative;padding-left:29px}.box_1PPAr.parent_3YN05:after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #008830}.box_1PPAr.parent_3YN05>.content_2oIg7{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width:1263px){.group_1p13o{padding-left:.238vw!important;border-top:.238vw solid #008830;border-left:.238vw solid #008830}.content_2oIg7{padding:.396vw .792vw;border:.238vw solid #008830}.content_2oIg7>span{font-size:1.4rem}.content_2oIg7>span:first-child{margin-top:.08vw}.content_2oIg7 strong{font-size:1.6rem}.content_2oIg7 span.unit_2PKD5{font-size:1.4rem}.box_1PPAr{margin-top:.238vw}.box_1PPAr.parent_3YN05{border-top:.238vw solid #008830;border-left:.238vw solid #008830;padding-left:2.296vw}.box_1PPAr.parent_3YN05:after{width:2.534vw;border-bottom:.238vw solid #008830}.box_1PPAr.parent_3YN05>.content_2oIg7{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_1p13o{padding-left:.313vw!important;border-top:.313vw solid #008830;border-left:.313vw solid #008830}.content_2oIg7{padding:.521vw 1.042vw;border:.313vw solid #008830}.content_2oIg7>span{font-size:1.4rem}.content_2oIg7>span:first-child{margin-top:.105vw}.content_2oIg7 strong{font-size:1.6rem}.content_2oIg7 span.unit_2PKD5{font-size:1.4rem}.box_1PPAr{margin-top:.313vw}.box_1PPAr.parent_3YN05{border-top:.313vw solid #008830;border-left:.313vw solid #008830;padding-left:3.02vw}.box_1PPAr.parent_3YN05:after{width:3.334vw;border-bottom:.313vw solid #008830}.box_1PPAr.parent_3YN05>.content_2oIg7{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_1p13o{padding-left:.5vw!important;border-top:.5vw solid #008830;border-left:.5vw solid #008830}.content_2oIg7{padding:.834vw 1.667vw;border:.5vw solid #008830}.content_2oIg7>span{font-size:1.4rem}.content_2oIg7>span:first-child{margin-top:.167vw}.content_2oIg7 strong{font-size:1.6rem}.content_2oIg7 span.unit_2PKD5{font-size:1.4rem}.box_1PPAr{margin-top:.5vw}.box_1PPAr.parent_3YN05{border-top:.5vw solid #008830;border-left:.5vw solid #008830;padding-left:4.834vw}.box_1PPAr.parent_3YN05:after{width:5.334vw;border-bottom:.5vw solid #008830}.box_1PPAr.parent_3YN05>.content_2oIg7{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_3XjJx",group:"group_1p13o",content:"content_2oIg7",unit:"unit_2PKD5",box:"box_1PPAr",parent:"parent_3YN05"},t.exports=o},518:function(t,e,n){"use strict";var o=n(443),r=n.n(o);n.d(e,"default",(function(){return r.a}))},519:function(t,e,n){var o=n(32)(!1);o.push([t.i,'.container_z0XXc{width:100%;color:#008830;line-height:1.35;padding-left:0!important}.container_z0XXc,.container_z0XXc *{box-sizing:border-box}.container_z0XXc ul{padding-left:0}.group_2pBHl{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #008830;border-left:3px solid #008830}.content_1kFjt{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #008830}.content_1kFjt>span{display:block;font-size:1.4rem}.content_1kFjt>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_1kFjt>span:not(:last-child){word-wrap:break-word}.content_1kFjt strong{font-size:1.6rem}.content_1kFjt span.unit_26rAD{font-size:1.4rem}.box_2T-dp{display:block;margin-top:3px}.box_2T-dp.parent_1ZNHR{border-top:3px solid #008830;border-left:3px solid #008830;position:relative;padding-left:29px}.box_2T-dp.parent_1ZNHR:after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #008830}.box_2T-dp.parent_1ZNHR>.content_1kFjt{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width:1263px){.group_2pBHl{padding-left:.238vw!important;border-top:.238vw solid #008830;border-left:.238vw solid #008830}.content_1kFjt{padding:.396vw .792vw;border:.238vw solid #008830}.content_1kFjt>span{font-size:1.4rem}.content_1kFjt>span:first-child{margin-top:.08vw}.content_1kFjt strong{font-size:1.6rem}.content_1kFjt span.unit_26rAD{font-size:1.4rem}.box_2T-dp{margin-top:.238vw}.box_2T-dp.parent_1ZNHR{border-top:.238vw solid #008830;border-left:.238vw solid #008830;padding-left:2.296vw}.box_2T-dp.parent_1ZNHR:after{width:2.534vw;border-bottom:.238vw solid #008830}.box_2T-dp.parent_1ZNHR>.content_1kFjt{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_2pBHl{padding-left:.313vw!important;border-top:.313vw solid #008830;border-left:.313vw solid #008830}.content_1kFjt{padding:.521vw 1.042vw;border:.313vw solid #008830}.content_1kFjt>span{font-size:1.4rem}.content_1kFjt>span:first-child{margin-top:.105vw}.content_1kFjt strong{font-size:1.6rem}.content_1kFjt span.unit_26rAD{font-size:1.4rem}.box_2T-dp{margin-top:.313vw}.box_2T-dp.parent_1ZNHR{border-top:.313vw solid #008830;border-left:.313vw solid #008830;padding-left:3.02vw}.box_2T-dp.parent_1ZNHR:after{width:3.334vw;border-bottom:.313vw solid #008830}.box_2T-dp.parent_1ZNHR>.content_1kFjt{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_2pBHl{padding-left:.5vw!important;border-top:.5vw solid #008830;border-left:.5vw solid #008830}.content_1kFjt{padding:.834vw 1.667vw;border:.5vw solid #008830}.content_1kFjt>span{font-size:1.4rem}.content_1kFjt>span:first-child{margin-top:.167vw}.content_1kFjt strong{font-size:1.6rem}.content_1kFjt span.unit_26rAD{font-size:1.4rem}.box_2T-dp{margin-top:.5vw}.box_2T-dp.parent_1ZNHR{border-top:.5vw solid #008830;border-left:.5vw solid #008830;padding-left:4.834vw}.box_2T-dp.parent_1ZNHR:after{width:5.334vw;border-bottom:.5vw solid #008830}.box_2T-dp.parent_1ZNHR>.content_1kFjt{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_z0XXc",group:"group_2pBHl",content:"content_1kFjt",unit:"unit_26rAD",box:"box_2T-dp",parent:"parent_1ZNHR"},t.exports=o},564:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(462),l=o.default.extend({components:{ValueWithTranslatableUnit:r.default},props:{items:{type:Object,required:!0}}}),d=n(516),c=n(14);var component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(1)新規陽性者数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(1)新規陽性者数"].value,unit:t.items["(1)新規陽性者数"].unit,bold:t.items["(1)新規陽性者数"].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("潜在・市中感染")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v("\n            "+t._s(t.$t("(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "))+"\n          ")]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "].value,unit:t.items["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "].unit,bold:t.items["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(3)新規陽性者における接触歴等不明者")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("人数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(3)新規陽性者における接触歴等不明者（人数）"].value,unit:t.items["(3)新規陽性者における接触歴等不明者（人数）"].unit,bold:t.items["(3)新規陽性者における接触歴等不明者（人数）"].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("増加比")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(3)新規陽性者における接触歴等不明者（増加比）"].value,unit:t.items["(3)新規陽性者における接触歴等不明者（増加比）"].unit,bold:t.items["(3)新規陽性者における接触歴等不明者（増加比）"].bold}})],1)])])])])])])}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports},565:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(462),l=o.default.extend({components:{ValueWithTranslatableUnit:r.default},props:{items:{type:Object,required:!0}}}),d=n(518),c=n(14);var component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("検査体制")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(4)PCR・抗原検査")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("陽性率")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(4)PCR・抗原検査（陽性率）"].value,unit:t.items["(4)PCR・抗原検査（陽性率）"].unit,bold:t.items["(4)PCR・抗原検査（検査人数）"].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("検査人数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(4)PCR・抗原検査（検査人数）"].value,unit:t.items["(4)PCR・抗原検査（検査人数）"].unit,bold:t.items["(4)PCR・抗原検査（検査人数）"].bold}})],1)])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("受入体制")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(5)救急医療の東京ルールの適用件数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(5)救急医療の東京ルールの適用件数"].value,unit:t.items["(5)救急医療の東京ルールの適用件数"].unit,bold:t.items["(5)救急医療の東京ルールの適用件数"].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(6)入院患者数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(6)入院患者数"].value,unit:t.items["(6)入院患者数"].unit,bold:t.items["(6)入院患者数"].bold}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("確保病床")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(6)入院患者確保病床数"].value,unit:t.items["(6)入院患者確保病床数"].unit,bold:t.items["(6)入院患者確保病床数"].bold}})],1)])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(7)重症患者数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(7)重症患者数"].value,unit:t.items["(7)重症患者数"].unit,bold:t.items["(7)重症患者数"].bold}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("確保病床")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(7)重症患者確保病床数"].value,unit:t.items["(7)重症患者確保病床数"].unit,bold:t.items["(7)重症患者確保病床数"].bold}})],1)])])])])])])}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports},603:function(t,e,n){"use strict";var o=n(460),r=n.n(o);n.d(e,"default",(function(){return r.a}))},604:function(t,e,n){var o=n(32)(!1);o.push([t.i,"section{margin:0 0 20px}section:first-child{margin-top:-10px}section h4{margin:5px 0 10px;font-weight:400;font-size:1.6rem}.button_LXhGM{color:#008830!important;padding:4px 8px;font-size:1.4rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.button_LXhGM:hover{color:#fff!important;background-color:#008830;color:#fff}.button_LXhGM:hover>i{color:#fff!important}dfn{font-style:normal;font-weight:600}",""]),o.locals={button:"button_LXhGM"},t.exports=o},673:function(t,e,n){"use strict";n.r(e);var o=n(85),r=n(391),l=n(564),d=n(565),c=n(473),f=n(474),v={components:{DataView:r.default,InfectionStatus:l.default,MedicalSystem:d.default,AppLink:o.default},data:function(){var t=Object(f.b)(c.data);return{monitoringItemsData:c,monitoringItems:t}}},_=n(603),m=n(14),h=n(64),w=n.n(h),x=n(422);var component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard MonitoringItemsOverviewCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("モニタリング項目"),"title-id":"monitoring-items-overview",date:t.monitoringItemsData.date},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[n("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),n("ul",[n("li",[n("i18n",{attrs:{tag:"span",path:"{number}：急病やけがの際に、緊急受診の必要性や診察可能な医療機関をアドバイスする電話相談窓口"},scopedSlots:t._u([{key:"number",fn:function(){return[n("dfn",[t._v("#7119")])]},proxy:!0}])})],1),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("救急医療の東京ルールの適用件数：救急隊による5医療機関への受入要請又は選定開始から20分以上経過しても搬送先が決定しない事案の件数"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("(1)～(5)は7日間移動平均で算出"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("(2)(4)(5)は報告日の前日時点の数値"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("(6)の確保病床数には、(7)の確保病床数を含む"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("速報値として公表するものであり、後日修正する場合がある"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("(2)(5)は土曜日、日曜日、祝日は更新しない。(4)は日曜日、祝日は更新しない"))+"\n          ")])])]},proxy:!0}])},[t._v(" "),n("section",[n("h4",[t._v(t._s(t.$t("感染状況")))]),t._v(" "),n("infection-status",{attrs:{"aria-label":t.$t("感染状況"),items:t.monitoringItems}})],1),t._v(" "),n("section",[n("h4",[t._v(t._s(t.$t("医療提供体制")))]),t._v(" "),n("medical-system",{attrs:{"aria-label":t.$t("医療提供体制"),items:t.monitoringItems}})],1),t._v(" "),n("div",[n("app-link",{class:t.$style.button,attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"}},[t._v("\n          "+t._s(t.$t("最新のモニタリング項目の分析・総括コメントについて"))+"\n        ")])],1)])],1)],1)}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);e.default=component.exports;w()(component,{VCol:x.a})}}]);