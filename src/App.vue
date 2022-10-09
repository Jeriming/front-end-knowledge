<template>
  <el-container class="personal-container">
    <el-header class="personal-nav">
      <div class="header-container">
        <div class="logo-container">
          <span class="logo">
            <img src="@/assets/summary.svg" />
            <span class="logo-text">MG</span>
          </span>
        </div>
        <div class="content">
          <div class="switch">
            <el-switch
              v-model="darkTheme"
              class="ml-2"
              @change="onChangeTheme"
              style="
                --el-switch-on-color: #2c2c2c;
                --el-switch-off-color: #f2f2f2;
              "
            />
          </div>
          <div class="git-link">
            <a href="https://github.com/Jeriming" target="_blank">
              <img src="@/assets/git.svg" />
            </a>
          </div>
        </div>
      </div>
    </el-header>
    <el-container class="personal-container">
      <el-aside class="personal-side">
        <el-scrollbar class="personal-side-scrollbar">
          <left-sider></left-sider>
        </el-scrollbar>
      </el-aside>
      <el-main class="personal-main">
        <el-scrollbar class="personal-side-scrollbar">
          <main-container></main-container>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import App from "./App";
import LeftSider from "@/components/LeftSider.vue";
import MainContainer from "@/components/MainContainer.vue";
import "element-plus/theme-chalk/dark/css-vars.css";
export default {
  components: {
    LeftSider,
    MainContainer,
    MainContainer,
  },
  setup(props) {
    const API = App(props);

    return API;
  },
};
</script>
<style lang="scss" scoped>
.personal-container {
  .personal-nav {
    position: sticky;
    width: 100%;
    height: var(--header-height);
    border-bottom: 1px solid var(--border-color);
    padding: var(--common-padding);
    position: relative;
    background-image: radial-gradient(transparent 1px, var(--bg-color) 1px);
    backdrop-filter: saturate(50%) blur(4px);
    top: 0;
    .header-container {
      max-width: var(--screen-max-width);
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      .logo-container {
        display: flex;
        align-items: center;
        .logo {
          display: flex;
          align-items: center;
          user-select: none;
          cursor: pointer;
          img {
            width: 40px;
            height: 40px;
          }
          .logo-text {
            margin-left: 8px;
            font-weight: 900;
            font-size: 40px;
            color: #409eff;
          }
        }
      }
      .content {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-grow: 1;
        .git-link {
          height: 24px;
          padding: 0 12px;
          img {
            height: 20px;
          }
        }
      }
    }
  }
  .personal-container {
    position: relative;
    height: calc(100vh - var(--header-height));
    .personal-side {
      border-right: 1px solid var(--border-color);
    }
    .personal-side,
    .personal-main {
      padding: 0;
      height: 100%;
      .personal-scrollbar {
        max-height: 100%;
      }
    }
  }
}
</style>