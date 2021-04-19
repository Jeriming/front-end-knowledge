<template>
  <el-container>
    <el-header><h1>Html知识</h1></el-header>
    <el-main>This is main page</el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      pageKey: ""
    };
  },
  created() {
    this.pageKey = this.$route.params.pagekey;
    console.log(this.$route.params.pagekey);
  }
};
</script>
