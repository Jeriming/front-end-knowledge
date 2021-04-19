<template>
  <component :is="dyncCard"></component>
</template>
<script>
export default {
  components: {
    "html-page": () => import("./HtmlPage"),
    "css-page": () => import("./CssPage"),
    "js-page": () => import("./JsPage"),
    "webpack-page": () => import("./WebpackPage")
  },
  data() {
    return {
      dyncCard: "html-page"
    };
  },
  created() {
    this.pageKey = this.$route.params.pagekey;
    this.dyncCard = this.pageKey;
    console.log(this.$route.params.pagekey);
  }
};
</script>
