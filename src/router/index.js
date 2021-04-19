import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Layout from "@/components/Layout";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/:pagekey",
      name: "Layout",
      component: Layout
    }
  ]
});
