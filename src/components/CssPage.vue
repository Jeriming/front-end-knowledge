<template>
  <div>hello is layout {{ pageKey }}</div>
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
