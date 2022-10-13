<template>
  <div class="render">
    <div v-html="content" class="output"></div>
  </div>
</template>

<script>
import { requestMarkdown } from "@/utils/RequestMarkdown.js";
import { marked } from "marked";
import { ref, watch, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const content = ref("");

    // 监听路由
    const currentRoute = reactive(useRoute());

    function getMarkDownFile(name) {
      requestMarkdown(name).then((res) => {
        content.value = marked(res);
      });
    }

    watch(currentRoute, (r) => {
      getMarkDownFile(r.name);
    });

    onMounted(() => {
      getMarkDownFile(currentRoute.name);
    });

    return { content };
  },
};
</script>
<style lang="scss" scoped>
</style>
