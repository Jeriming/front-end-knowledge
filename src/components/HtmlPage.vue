<template>
  <div class="container">
    <el-page-header
      class="page-header-style"
      @back="goBack"
      title="返回首页"
      content="HTML知识"
    >
    </el-page-header>

    <template v-for="(comItem, index) in componentList">
      <component :is="comItem" :key="comItem" :index="index + 1"></component>
    </template>
    <get-more
      :btnText="btnText"
      :disabled="btnDisabled"
      @get-next="onGetNext"
    ></get-more>
  </div>
</template>
<script>
import getMore from "./GetMore.vue";
import { list, firstIndex } from "./html/pageList.json";
import { getNextData } from "../util/util.js";
let components = {};
list.forEach(item => {
  components[item] = () => import("./html/" + item + ".vue");
});

let tempList = [].concat(list);
components = Object.assign(components, { "get-more": getMore });

export default {
  data() {
    return {
      pageKey: "",
      componentList: [],
      btnText: "Next",
      btnDisabled: false
    };
  },
  created() {
    this.pageKey = this.$route.params.pagekey;
    console.log(this.$route.params.pagekey);
  },
  components: components,
  created() {
    tempList = [].concat(list);
    this.componentList = [tempList.splice(firstIndex, 1)[0]];
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    onGetNext() {
      const data = getNextData(tempList, firstIndex);
      if (data) {
        this.componentList.push(data);
      } else {
        this.btnText = "暂无更多数据";
        this.btnDisabled = true;
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
