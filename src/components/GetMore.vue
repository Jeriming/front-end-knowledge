<template>
  <div class="get-more-container">
    <button class="next-botton" @click="onGetNext">下一条</button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    onGetNext() {
      this.$emit('get-next');
    }
  }
}
</script>
<style lang="scss" scoped>
.get-more-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  .next-botton {
    width: 200px;
    height: 50px;
    background-color: #fcfcfc;
    &:hover {
      background-color: #5c5c5c;
    }
  }
}
</style>