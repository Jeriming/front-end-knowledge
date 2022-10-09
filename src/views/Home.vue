<template>
  <div class="home">
    <div v-html="str" class="output"></div>
  </div>
</template>

<script>
import { requestMarkdown } from "@/utils/RequestMarkdown.js";
import { marked } from "marked";

export default {
  name: "Home",
  data() {
    return {
      str: "",
    };
  },
  created() {
    requestMarkdown("home").then((res) => {
      this.str = marked(res);
    });
  },
};
</script>
<style lang="scss" scoped>
</style>
