<template>
  <div class="container">
    <el-page-header @back="goBack" title="返回首页" content="Webpack知识">
    </el-page-header>
    <el-container> 
      <section class="section-container">
        <h4>1. vue2.x项目配置scss</h4>
        <p class="words-show-container">直接：npm install -D node-sass sass-loader，结果npm run dev报错：vue.js - TypeError: this.getOptions is not a function 
          查看这两者版本：node-sass^5.0.0 sass-loader^11.0.7 版本问题，都说11.0.7不兼容node-sass的5版本
          最终找到解决方案："node-sass": "^4.14.1", "sass-loader": "^7.0.3"
          ps：webpack的很多包都存在兼容性问题，例如：webpack和webpack-cli版本兼容的问题，着实难用，而且官方并没有公布哪些版本兼容
        </p>
      </section>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageKey: ""
    };
  },
  created() {
    this.pageKey = this.$route.params.pagekey;
    console.log(this.$route.params.pagekey);
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    runData() {}
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: calc(100% - 60px);
  margin: 10px 30px 0;
  .section-container {
    width: 100%;
  .code-show-container {
    white-space: pre;
    background-color: #f2f2f2;
  }
  .words-show-container {
    white-space: pre;
    background-color: #ffffff;
  }
  }
}
</style>
