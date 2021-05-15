<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { writeConfigToHtml } from './util/util.js';
export default {
  name: "App",
  created() {
    this.readConfig();
  },
  methods: {
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
