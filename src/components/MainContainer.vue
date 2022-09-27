<template>
  <div v-html="content"></div>
</template>
<script>
import article from '!!raw-loader!../template/marco.html';
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