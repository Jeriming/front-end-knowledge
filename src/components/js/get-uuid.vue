<template>
  <section class="section-container">
    <h4>{{index}}. 获取32位的唯一哈希值</h4>
    <p class="code-show-container">
    代码如下：
    function uuid() {
      var currentTime = (new Date).getTime();
      return "undefined" != typeof performance && "function" == typeof performance.now && (currentTime += performance.now()),
        "xxxxxxxxyyyyyyyyxxxxxxxxyyyyyyyy".replace(/[xy]/g, (function(t) {
            var n = (currentTime + 16 * Math.random()) % 16 | 0;
            return currentTime = Math.floor(currentTime / 16),
            ("x" === t ? n : 3 & n | 8).toString(16)
        }
      ))
    }
    </p>
    <p class="words-show-container">页面已继承uuid方法，直接在控制台使用</p>
  </section>
</template>
<script>
function uuid() {
  var currentTime = (new Date).getTime();
  return "undefined" != typeof performance && "function" == typeof performance.now && (currentTime += performance.now()),
    "xxxxxxxxyyyyyyyyxxxxxxxxyyyyyyyy".replace(/[xy]/g, (function(t) {
        var n = (currentTime + 16 * Math.random()) % 16 | 0;
        return currentTime = Math.floor(currentTime / 16),
        ("x" === t ? n : 3 & n | 8).toString(16)
    }
  ))
}
export default {
  props: {
    index: {
      type: Number,
      default: ()=>null
    }
  },
  data() {
    return {}
  },
  created() {
    window.uuid = uuid;
  },
  beforeDestroy() {
    window.uuid = undefined;
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