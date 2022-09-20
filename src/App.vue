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
              v-model="theme"
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
  </el-container>
  <router-view />
</template>
<script>
import { useDark, useToggle } from "@vueuse/core";
import 'element-plus/theme-chalk/dark/css-vars.css'
const isDark = useDark();
const toggleDark = useToggle(isDark);
export default {
  data() {
    return {
      theme: false,
    };
  },
  methods: {
    onChangeTheme() {
      toggleDark();
    },
  },
};
</script>
<style lang="scss" scoped>
.personal-container {
  .personal-nav {
    position: sticky;
    width: 100%;
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
        height: var(--header-height);
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
}
</style>