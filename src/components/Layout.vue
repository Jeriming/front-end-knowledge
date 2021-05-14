<template>
  <!-- <component :is="dyncCard"></component> -->
  <div class="container">
    <el-page-header
      class="page-header-style"
      @back="goBack"
      title="返回首页"
      :content="`${titlePre}知识`"
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
// 后面PageList.json做成配置，然后通过script标签读取
import pageList from '../config/pageList.json';
import { getNextData } from "../util/util.js";
import getMore from "./GetMore.vue";
let components = { getMore };
for(let path in pageList) {
  let {list} = pageList[path];
  list.forEach(item=>{
    components[item] = () => import(`./${path}/${item}.vue`);
  })
}
export default {
  components: components,
  data() {
    return {
      pageKey: "",
      componentList: [],
      firstIndex: 0,
      tempList: [],
      btnText: "Next",
      btnDisabled: false,
      titlePre: ''
    };
  },
  created() {
    this.pageKey = this.$route.params.pagekey;
    // this.dyncCard = this.pageKey;
    console.log(this.$route.params.pagekey);
    this.initPage();
  },
  methods: {
    initPage() {
      const key = this.pageKey;
      let path = '';
      switch(key) {
        case 'html-page': {
          path = 'html';
          this.titlePre = path;
          break;
        }
        case 'css-page': {
          path = 'css';
          this.titlePre = path;
          break;
        }
        case 'js-page': {
          path = 'js';
          this.titlePre = path;
          break;
        }
        case 'webpack-page': {
          path = 'webpack';
          this.titlePre = path;
          break;
        }
      }
      let {list, firstIndex} = pageList[path];
      this.tempList = [].concat(list);
      this.firstIndex = firstIndex;
      this.componentList = [this.tempList.splice(this.firstIndex, 1)[0]];
    },
    goBack() {
      this.$router.back();
    },
    onGetNext() {
      const data = getNextData(this.tempList, this.firstIndex);
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