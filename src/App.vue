<template>
  <div id="app">
    <router-view />
    <span v-if="showBackTop" @click="onBackTop" class="back-to-top">
      <i class="el-icon-caret-top"></i>
      <div class="top">返回顶部</div>
      </span>
  </div>
</template>

<script>
import { writeConfigToHtml } from './util/util.js';
export default {
  name: "App",
  data() {
    return {
      showBackTop: false
    }
  },
  created() {
    // this.readConfig();
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll(event) {
      if(event.target.documentElement.scrollTop > 10) {
        this.showBackTop = true;
      }
      else {
        this.showBackTop = false;
      }
    },
    onBackTop() {
      document.documentElement.scrollTop = 0
    },
    readConfig() {
      this.$http.get('/static/pageList.json').then(res=>{
        if(res.status === 200 && res.data) {
          writeConfigToHtml(res.data);
        }
      })
    }
  }
};
</script>
<style>
html,
body {
  margin: 0;
}
</style>
<style scoped>
.back-to-top {
    position: fixed;
    right: 10px;
    bottom: 10px;
    width: 50px;
    height: 79px;
    border-radius: 50px;
    border: 1px solid #252526;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    cursor:pointer;
}
.back-to-top > .top {
  font-size: 12px;
  color: #c1c1c1;
  width: 10px;
}
</style>
