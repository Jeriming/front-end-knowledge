import Home from "../views/Home.vue";

const routers = [
  {
    path: "/",
    name: "Home",
    label: "首页",
    component: Home,
  },
  {
    path: "/marco",
    name: "Marco",
    label: "宏任务",
    component: () => import("../views/Marco/Marco.vue"),
  },
  {
    path: "/about",
    name: "About",
    label: "关于",
    component: () => import("../views/About.vue"),
  },
];

export default routers;
