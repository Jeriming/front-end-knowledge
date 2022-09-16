<template>
  <section class="section-container">
    <h4>{{ index }}. JS类型知识点</h4>
    <p class="words-show-container">
      null，undefined的区别？
      null表示一个对象被定义了，但存放了空指针，转换为数值时为0。
      undefined表示声明的变量未初始化，转换为数值时为NAN。
      typeof(null) -- object;
      typeof(undefined) -- undefined
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
    background-color: var(--background-grey-color);
  }
  .words-show-container {
    white-space: pre;
  }
}
</style>