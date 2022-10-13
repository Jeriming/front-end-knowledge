import DyncRender from '../components/DyncRender.vue';

const routers = [
  {
    path: "/",
    name: "home",
    label: "首页",
    component: DyncRender,
  },
  {
    path: "/marco",
    name: "marco",
    label: "宏任务",
    component: DyncRender,
  },
  {
    path: "/about",
    name: "about",
    label: "关于",
    component: DyncRender,
  },
];

export default routers;
