<template>
  <div class="container">
    <el-page-header
      class="page-header-style"
      @back="goBack"
      title="返回首页"
      content="JS知识"
    >
    </el-page-header>
    <template v-for="comItem in componentList">
      <component :is="comItem" :key="comItem"></component>
    </template>
    <get-more @get-next="onGetNext"></get-more>
  </div>
</template>
<script>
import getMore from './GetMore.vue';
import { list, firstIndex } from './js/pageList.json';
import { getNextData } from '../util/util.js';
export default {
  data() {
    return {
      pageKey: "",
      componentList: [list.splice(firstIndex, 1)[0]],
    };
  },
  components: {
    "macrosc-min-task": () => import("./js/macrosc-min-task.vue"),
    "get-uuid": () =>　import("./js/get-uuid.vue"),
    "get-more": getMore
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    onGetNext() {
      const data = getNextData(list, firstIndex);
      if(data) {
        this.componentList.push(data);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: calc(100% - 60px);
  margin: 10px 30px 0;
}
.page-header-style {
  height: 24px;
}
</style>
