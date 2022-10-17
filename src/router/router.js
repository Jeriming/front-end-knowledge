import DyncRender from "../components/DyncRender.vue";

const routers = [
  {
    path: "/",
    name: "home",
    label: "首页",
    component: DyncRender,
  },
  {
    path: "/js",
    name: "js",
    label: "Javascript",
    component: DyncRender,
    children: [
      {
        path: "/js-other",
        name: "jsOther",
        label: "零碎知识点",
        component: DyncRender,
      },
      {
        path: "/arrow-function",
        name: "arrow-function",
        label: "箭头函数",
        component: DyncRender,
      },
      {
        path: "/bind-apply-call",
        name: "bind-apply-call",
        label: "call apply bind",
        component: DyncRender,
      },
      {
        path: "/marco",
        name: "marco",
        label: "事件循环 ",
        component: DyncRender,
      },
      {
        path: "/prototype",
        name: "prototype",
        label: "对象的继承方式 ",
        component: DyncRender,
      },
      {
        path: "/ajax",
        name: "ajax",
        label: "ajax ",
        component: DyncRender,
      },
      {
        path: "/custom-echarts",
        name: "custom-echarts",
        label: "echarts ",
        component: DyncRender,
      },
      {
        path: "/js-bt",
        name: "js-bt",
        label: "易错变态题目 ",
        component: DyncRender,
      },
      {
        path: "/strict-mode",
        name: "strict-mode",
        label: "严格模式 ",
        component: DyncRender,
      },
    ],
  },
  {
    path: "/css",
    name: "css",
    label: "css",
    component: DyncRender,
    children: [
      {
        path: "/bfc",
        name: "bfc",
        label: "BFC",
        component: DyncRender,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    label: "关于",
    component: DyncRender,
  },
];

export default routers;
