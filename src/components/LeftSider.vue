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

    onMounted(()=>{
      for (let i = 0; i < routers.length; i++) {
        const r = routers[i];
        menus.push({
          key: r.name,
          label: `${r.label}`,
          path: r.path,
        });
      }
    })

    return {
      menus,
      active,
      onClick
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
}
</style>