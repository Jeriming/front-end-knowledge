<template>
  <section class="section-container">
    <h4>{{ index }}. scss中@import @extend @mixin @include的用法</h4>
    <p class="words-show-container">
      Sass 拓展了 @import 的功能，允许其导入 SCSS 或 Sass 文件,使用 @import，也可以将 @import 嵌套进 CSS 样式，例如：
    </p>
    <p class="code-show-container">
        @import "foo.scss";
        // 还可以
        定义一个 example.scss :
        .example {
          color: red;
        }
        #main {
          @import "example";
        } ===>
        #main .example {
          color: red;
        }
    </p>
    <p class="words-show-container">
      @extend 继承目标样式，如：
    </p>
    <p class="code-show-container">
        .error {
          border: 1px #f00;
          background-color: #fdd;
        }
        .seriousError {
          @extend .error;
          border-width: 3px;
        }
        ===》
        .error, seriousError {
          border: 1px #f00;
          background-color: #fdd;
        }
        .seriousError {
          @extend .error;
          border-width: 3px;
        }
    </p>
    <p class="words-show-container">
      @mixin和@include配合使用
    </p>
    <p class="code-show-container">
      @mixin large-text {
        font: {
          family: Arial;
          size: 20px;
          weight: bold;
        }
        color: #ff0000;
      }
      // @mixin定义

      .page-title {
        @include large-text; // @include使用
        padding: 4px;
        margin-top: 10px;
      }
      ===》
      .page-title {
        font-family: Arial;
        font-size: 20px;
        font-weight: bold;
        color: #ff0000;
        padding: 4px;
        margin-top: 10px; 
      }
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
