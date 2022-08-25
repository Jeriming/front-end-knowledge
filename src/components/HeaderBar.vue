<template>
  <div class="header-bar">
    <span class="left-bar">
      <h1>前端知识大全</h1>
    </span>
    <span class="right-bar">
      <el-switch
        v-model="value"
        active-color="#ffffff"
        inactive-color="#1e1e1e"
        @change="onThemeChange"
      >
      </el-switch>
    </span>
  </div>
</template>

<script>
import { switchColorTheme } from '../util/util'
export default {
  name: "HeaderBar",
  data() {
    return {
      value: false,
    };
  },
  methods: {
    onThemeChange(val) {
      switchColorTheme(val);
    }
  }
};
</script>
<style lang="scss" scoped>
.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 30px;
}
</style>
