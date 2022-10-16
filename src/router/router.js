import DyncRender from '../components/DyncRender.vue';

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
    children: [{
      path: '/marco',
      name: "marco",
      label: "宏任务",
      component: DyncRender,
    },
    {
      path: '/js-other',
      name: "jsOther",
      label: "零碎知识点",
      component: DyncRender,
    },
    {
      path: '/arrow-function',
      name: "arrow-function",
      label: "箭头函数",
      component: DyncRender,
    }]
  },
  {
    path: "/css",
    name: "css",
    label: "css",
    component: DyncRender,
    children: [{
      path: '/bfc',
      name: "bfc",
      label: "BFC",
      component: DyncRender,
    }]
  },
  {
    path: "/about",
    name: "about",
    label: "关于",
    component: DyncRender,
  },
];

export default routers;
