[返回](./#/css/)

## BFC

全称： Block Formatting Contexts (块级格式化上下文)\
BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素。

触发 BFC 特性的条件（以下满足任一条件即可）：

- body 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)

BFC 可以清除浮动\
上一篇 float 的代码：

```html
<style>
  .image-container {
    width: 150px;
    height: 150px;
    float: left;
  }
  .container {
    overflow: hidden;
  }
</style>
<div class="container">
  <img src="./images/star.jpg" class="image-container" />
  <p class="word-content">
    文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
  </p>
</div>
<p class="word-content2">
  文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文
</p>
```

将浮动的图片父级设置 overflow: hidden; 即也清除了浮动：

![clear-float.jpg](./md/images/bfc-clear-float.jpg)

这里需要注意：BFC 都可以清除浮动，为什么一般使用 overflow: hindden; ？\
我们先看其他几种创建 BFC 的方式：

1. 父级使用 float 或者 position，虽然父级盒子内部浮动被清除了，但是父级本身又脱离文档流了，会对父级后面的兄弟盒子的布局造成影响;
2. 如果父级为`display:flex`，内部的浮动就会失效。

BFC 可以解决 **`外边距的重叠 `** 问题，上代码：

```html
<style>
  p {
    width: 100px;
    height: 100px;
    background: lightblue;
    margin: 100px;
  }
</style>
<div class="container">
  <p></p>
</div>
<div class="container">
  <p></p>
</div>
```

效果如图：\
![bfc-border.jpg](./md/images/bfc-border.jpg)

p 的上下边距都是 100px，结果 p1 和 p2 间距只有 100px，很明显两者发生了边距重叠，想要消除，给各自父级创建 BFC

```html
<style>
  .container {
    overflow: hidden;
  }
</style>
```
效果如图：\
![bfc-border.jpg](./md/images/bfc-border-2.jpg)

除了 BFC 还有其他几个概念：

- IFC（Inline formatting contexts）：内联格式上下文。
  IFC 的高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的 padding/margin 影响)，IFC 中的 line box 一般左右都贴紧整个 IFC，但是会因为 float 元素而扰乱。
- GFC（GrideLayout formatting contexts）：网格布局格式化上下文。当为一个元素设置 display 值为 grid 的时候，此元素将会获得一个独立的渲染区域。
- FFC（Flex formatting contexts）：自适应格式上下文。display 值为 flex 或者 inline-flex 的元素将会生成自适应容器。

[返回](./#/css/)
