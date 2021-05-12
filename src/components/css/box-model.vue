<template>
  <section class="section-container">
    <h4>{{ index }}. CSS怪异盒子模型（IE盒模型）和标准模型</h4>
    <p class="words-show-container">
          先看是什么意思：
          标准模型：属性width,height只包含内容content，不包含border和padding（box-sizing: content-box）
          IE盒模型：属性width,height包含border和padding，指的是content+padding+border (box-sizing: border-box)
          有点懵？看下面效果：
        </p>
        <div class="content-box-content">content-box</div>
        <br>
        <div class="border-box-content">border-box</div>
        <p class="words-show-container">
          两个盒子定义的宽高都是100px 标准模型展示出来是104*104 IE盒子展示出来是100*100
          由此可得出结论：标准模型定义width只包含了content的width
          而IE盒模型定义的width包含了左右padding 和左右border-width的
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
    background-color: #f2f2f2;
  }
  .words-show-container {
    white-space: pre;
    background-color: #ffffff;
  }
  .content-box-content {
    width: 100px;
    height: 100px;
    border: 1px solid grey;
    padding: 1px;
    background-color: blue;
    box-sizing: content-box;
  }
  .border-box-content {
    width: 100px;
    height: 100px;
    border: 1px solid grey;
    padding: 1px;
    background-color: blue;
    box-sizing: border-box;
  }
}
</style>
