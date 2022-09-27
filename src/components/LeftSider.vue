<template>
  <div v-for="item in menus" :key="item.key">{{ item.label }}</div>
</template>
<script>
export default {
  data() {
    return {
      menus: []
    }
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      for(let i = 0; i < 100; i++) {
        this.menus.push({
          key: i,
          label: `sider${i}`
        })
      }
    }
  }
}
</script>