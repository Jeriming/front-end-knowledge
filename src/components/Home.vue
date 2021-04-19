<template>
  <div>
    <header>
      <h1>前端知识大全</h1>
    </header>
    <nav>
      <router-link to="/html-knowledge">HTML知识</router-link>
      <router-link to="/css-knowledge">CSS知识</router-link>
      <router-link to="/js-knowledge">JS知识</router-link>
      <router-link to="/webpack-knowledge">webpack知识</router-link>
    </nav>
    <section>
      <img src="../img/front-keypoints.jpg" style="width: 100%;" />
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
