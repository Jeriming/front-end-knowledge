webpackJsonp([1],{"8qJp":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={data:function(){return{pageKey:""}},created:function(){this.pageKey=this.$route.params.pagekey,console.log(this.$route.params.pagekey)},methods:{goBack:function(){this.$router.back()},runData:function(){}}},s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("el-page-header",{attrs:{title:"返回首页",content:"HTML知识"},on:{back:this.goBack}}),this._v(" "),n("el-container",[n("section",{staticClass:"section-container"},[n("h4",[this._v("1. 浏览器渲染页面的过程")]),this._v(" "),n("p",{staticClass:"words-show-container"},[this._v("\n        从输入url到页面渲染大概有以下流程\n        1.DNS 查询\n        2.TCP 连接\n        3.HTTP 请求即响应\n        4.服务器响应\n        5.客户端渲染\n        其他步骤先不做了解，主要看客户端渲染部分，主要是以下几点：\n        1.处理 HTML 标记并构建 DOM 树。\n        2.处理 CSS 标记并构建 CSSOM 树。\n        3.将 DOM 与 CSSOM 合并成一个渲染树。\n        4.根据渲染树来布局，以计算每个节点的几何信息。\n        5.将各个节点绘制到屏幕上。\n        详细点击链接："),n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29418126",target:"_blank"}},[this._v("https://zhuanlan.zhihu.com/p/29418126")])])])])],1)},staticRenderFns:[]};var i=e("VU/8")(a,s,!1,function(t){e("GxUC")},"data-v-d39160d2",null);n.default=i.exports},GxUC:function(t,n){}});