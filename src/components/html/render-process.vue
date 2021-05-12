<template>
  <section class="section-container">
    <h4>{{ index }}. 浏览器渲染页面的过程</h4>
    <p class="words-show-container">
      从输入url到页面渲染大概有以下流程
      1.DNS 查询
      2.TCP 连接
      3.HTTP 请求即响应
      4.服务器响应
      5.客户端渲染
      其他步骤先不做了解，主要看客户端渲染部分，主要是以下几点：
      1.处理 HTML 标记并构建 DOM 树。
      2.处理 CSS 标记并构建 CSSOM 树。
      3.将 DOM 与 CSSOM 合并成一个渲染树。
      4.根据渲染树来布局，以计算每个节点的几何信息。
      5.将各个节点绘制到屏幕上。
      详细点击链接：<a href="https://zhuanlan.zhihu.com/p/29418126" target="_blank">https://zhuanlan.zhihu.com/p/29418126</a>
    </p>
  </section>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      default: ()=>null
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.section-container {
  width: 100%;
  margin-bottom: 30px;
  .code-show-container {
    white-space: pre;
    background-color: #f2f2f2;
  }
  .words-show-container {
    white-space: pre;
    background-color: #ffffff;
  }
}
</style>