<template>
  <div class="section-container">
    <p v-html="content"></p>
  </div>
</template>
<script>
import article from '!!raw-loader!../template/宏任务.html';
import ejs from 'ejs';

export default {
  data() {
    return {
      content: ''
    }
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      let template = ejs.render(article, {
        user: {
          name: 'jeriming'
        }
      });
      this.content = template;
    }
  }
}
</script>
<style lang="scss" scoped>
.section-container {
  padding: 30px;
}
</style>