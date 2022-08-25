<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        text-color="#000"
        active-text-color="#ffd04b"
        background-color="#fafafa"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item v-for="menuItem in menuList" :key="menuItem.key" :index="menuItem.url">
          {{ menuItem.name }}
          <!-- <router-link class="router-style" :to="{ path: menuItem.url }">{{
            menuItem.name
          }}</router-link> -->
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <img src="../img/front-keypoints.jpg" style="width: 100%;" />
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "0",
      menuList: [
        {
          url: "/html-page",
          name: "HTML知识",
          key: "html-page"
        },
        {
          url: "/css-page",
          name: "CSS知识",
          key: "css-page"
        },
        {
          url: "/js-page",
          name: "JS知识",
          key: "js-page"
        },
        {
          url: "/webpack-page",
          name: "webpack知识",
          key: "webpack-page"
        },
        {
          url: "/ammo-page",
          name: "Ammo引擎",
          key: "ammo-page"
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push({path: key});
    }
  }
};
</script>
<style lang="scss" scoped>
.router-style {
  text-decoration: none;
}
</style>
