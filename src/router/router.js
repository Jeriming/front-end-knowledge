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
        path: "/css-other",
        name: "css-other",
        label: "零碎知识点",
        component: DyncRender,
      },
      {
        path: "/pseudo-class",
        name: "pseudo-class",
        label: "伪类",
        component: DyncRender,
      },
      {
        path: "/css-float",
        name: "css-float",
        label: "float",
        component: DyncRender,
      },
      {
        path: "/bfc",
        name: "bfc",
        label: "BFC",
        component: DyncRender,
      },
      {
        path: "/style-priority",
        name: "style-priority",
        label: "样式优先级",
        component: DyncRender,
      },
      {
        path: "/dom-width",
        name: "domWidth",
        label: "dom宽的区别",
        component: DyncRender,
      },
    ],
  },
  {
    path: "/html",
    name: "html",
    label: "html",
    component: DyncRender,
    children: [
      {
        path: "/html-block-inline",
        name: "html-block-inline",
        label: "行内元素&块级元素",
        component: DyncRender,
      },
    ],
  },
  {
    path: "/algorithm",
    name: "algorithm",
    label: "算法",
    component: DyncRender,
    children: [
      {
        path: "/algorithm-hash",
        name: "algorithm-hash",
        label: "哈希",
        component: DyncRender,
      },
      {
        path: "/binary-tree",
        name: "binary-tree",
        label: "二叉树",
        component: DyncRender,
      },
      {
        path: "/algorithm-dynamic",
        name: "algorithm-dynamic",
        label: "动态规划",
        component: DyncRender,
      },
      {
        path: "/algorithm-pointer",
        name: "algorithm-pointer",
        label: "指针",
        component: DyncRender,
      },
    ]
  },
  {
    path: "/source-parsing",
    name: "source-parsing",
    label: "源码解析",
    component: DyncRender,
    children: [
      {
        path: "/ele-scroll-bar",
        name: "ele-scroll-bar",
        label: "scroll-bar源码解析",
        component: DyncRender,
      },
    ]
  },
  {
    path: "/webpack",
    name: "webpack",
    label: "webpack",
    component: DyncRender,
    children: [
      {
        path: "/sass-resources-loader",
        name: "sass-resources-loader",
        label: "vue.config 一些配置",
        component: DyncRender,
      },
      {
        path: "/webpack-debug",
        name: "webpack-debug",
        label: "调试 vue-cli",
        component: DyncRender,
      },
    ]
  },
  {
    path: "/other",
    name: "other",
    label: "其他",
    component: DyncRender,
    children: [
      {
        path: "/other-cdn",
        name: "other-cdn",
        label: "CDN原理",
        component: DyncRender,
      },
      {
        path: "/other-http-cache",
        name: "other-http-cache",
        label: "浏览器的缓存机制",
        component: DyncRender,
      },
      {
        path: "/other-xss-csrf",
        name: "other-xss-csrf",
        label: "XSS攻击和CSRF攻击",
        component: DyncRender,
      },
    ]
  },
  {
    path: "/vue",
    name: "vue",
    label: "vue",
    component: DyncRender,
    children: [
      {
        path: "/vue-dynamicParam",
        name: "vue-dynamicParam",
        label: "动态组件及动态参数",
        component: DyncRender,
      },
    ]
  },
  {
    path: "/webgl",
    name: "webgl",
    label: "webgl",
    component: DyncRender,
    children: [
      {
        path: "/webgl-lesson1",
        name: "webgl-lesson1",
        label: "Lesson1 绘制一个点",
        component: DyncRender,
      },
    ]
  },
  {
    path: "/about",
    name: "about",
    label: "关于",
    component: DyncRender,
  },
];

export default routers;
