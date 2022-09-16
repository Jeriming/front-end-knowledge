<template>
  <section class="section-container">
    <h4>{{ index }}. vue2.x项目配置scss</h4>
    <p class="words-show-container">
      直接：npm install -D node-sass sass-loader，结果npm run dev报错：vue.js -
      TypeError: this.getOptions is not a function
      查看这两者版本：node-sass^5.0.0 sass-loader^11.0.7
      版本问题，都说11.0.7不兼容node-sass的5版本 最终找到解决方案："node-sass":
      "^4.14.1", "sass-loader": "^7.0.3"
      ps：webpack的很多包都存在兼容性问题，例如：webpack和webpack-cli版本兼容的问题，着实难用，而且官方并没有公布哪些版本兼容
    </p>
  </section>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      default: () => null
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.section-container {
  width: 100%;
  margin-bottom: 30px;
  .code-show-container {
    white-space: pre;
    background-color: var(--background-grey-color);
  }
  .words-show-container {
    white-space: pre;
  }
}
</style>
