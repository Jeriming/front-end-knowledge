<template>
  <div class="sider-containter">
    <template v-for="item in menus" :key="item.key">
      <a
        class="view-item"
        :class="{ active: item.key === active }"
        @click.prevent="onClick(item)"
      >
        <p>{{ item.label }}</p>
      </a>
    </template>
  </div>
</template>
<script>
import routers from "@/router/router.js";

export default {
  data() {
    return {
      menus: [],
      active: "",
    };
  },
  created() {
    this.initData();
  },
  watch: {
    $route(router) {
      this.setDefault(router);
    }
  },
  methods: {
    initData() {
      for (let i = 0; i < routers.length; i++) {
        const router = routers[i];
        this.menus.push({
          key: router.name,
          label: `${router.label}`,
          path: router.path,
        });
      }
    },
    setDefault(router) {
      this.active = router.name;
    },
    onClick(item) {
      this.active = item.key;
      this.$router.push({ path: item.path });
    },
  },
};
</script>
<style lang="scss" scoped>
.sider-containter {
  padding-left: 30px;
  .view-item {
    height: 20px;
    line-height: 20px;
    border-radius: 8px;
    padding: 10px 0;
    cursor: pointer;
  }
  .active {
    background-color: var(--link-active-bg-color);
    color: var(--brand-color);
  }
}
</style>