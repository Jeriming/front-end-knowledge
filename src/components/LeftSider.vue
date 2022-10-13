<template>
  <div class="sider-containter">
    <template v-for="item in menus" :key="item.key">
      <a
        class="view-item"
        :class="{ active: item.key === active }"
        @click.prevent="onClick(item)"
      >
        <p :class="getClassName(item.level)">{{ item.label }}</p>
      </a>
    </template>
  </div>
</template>
<script>
import routers from "@/router/router.js";
import { ref, reactive, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'

/**
 * setup 只能hook onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,onErrorCaptured,onRenderTracked,onRenderTriggered
 */
export default {
  setup() {
    const menus = reactive([]);
    const active = ref('');
    const router = useRouter();

    // 监听路由
    const currentRoute = reactive(useRoute());
    watch(currentRoute, (r)=> {
      if(active.value !== r.name) {
        active.value = r.name;
      }
    })

    const onClick = (item) => {
      active.value = item.key;
      router.push({ path: item.path });
    }

    function appendRouterToMenus(rr, level) {
      for (let i = 0; i < rr.length; i++) {
        const r = rr[i];
        menus.push({
          key: r.name,
          label: `${r.label}`,
          path: r.path,
          level
        });
        if(r.children && r.children.length > 0) {
          appendRouterToMenus(r.children, level + 1);
        }
      }
    }

    onMounted(()=>{
      appendRouterToMenus(routers, 0);
    })

    function getClassName(level) {
      return `level-${level}`;
    }

    return {
      menus,
      active,
      onClick,
      getClassName
    }
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

  .level {
    &-1 {
      margin-left: 10px;
    }
    &-2 {
      margin-left: 20px;
    }
  }
}
</style>