webpackJsonp([1],{McF8:function(e,t,n){e.exports=n.p+"front-end-knowledge/static/img/front-keypoints.6af144f.jpg"},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(e){n("zu6b")},null,null).exports,o=n("/ocq"),i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("nav",[n("router-link",{attrs:{to:"/html-knowledge"}},[e._v("HTML知识")]),e._v(" "),n("router-link",{attrs:{to:"/css-knowledge"}},[e._v("CSS知识")]),e._v(" "),n("router-link",{attrs:{to:"/js-knowledge"}},[e._v("JS知识")]),e._v(" "),n("router-link",{attrs:{to:"/webpack-knowledge"}},[e._v("webpack知识")])],1),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("h1",[this._v("前端知识大全")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("img",{staticStyle:{width:"100%"},attrs:{src:n("McF8")}})])}]},u=n("VU/8")({data:function(){return{}}},i,!1,null,null,null).exports,c={data:function(){return{pageKey:""}},created:function(){this.pageKey=this.$route.params.pagekey,console.log(this.$route.params.pagekey)}},l={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("hello is layout "+this._s(this.pageKey))])},staticRenderFns:[]},p=n("VU/8")(c,l,!1,null,null,null).exports;r.a.use(o.a);var _=new o.a({routes:[{path:"/",name:"Home",component:u},{path:"/:pagekey",name:"Layout",component:p}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:_,components:{App:s},template:"<App/>"})},zu6b:function(e,t){}},["NHnr"]);