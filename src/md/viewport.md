[返回](./#/css/)

移动端适配方案：
一般思路\
1.写页面时，按照设计稿写固定宽度，最后再统一缩放处理，在不同手机上都能用
按照设计稿的标准开发页面，在手机上部分内容根据屏幕宽度等比缩放，部分内容按需要变化，需要缩放的元素使用 rem, vw 相对单位，不需要缩放的使用 px
固定尺寸+弹性布局，不需要缩放

- viewport 适配
根据设计稿标准（750px 宽度）开发页面，写完后页面及元素自动缩小，适配 375 宽度的屏幕

在 head 里设置如下代码

```html
<meta name="viewport" content="width=750,initial-scale=0.5" />
```

initial-scale = 屏幕的宽度 / 设计稿的宽度

为了适配其他屏幕，需要动态的设置 initial-scale 的值

```html
<head>
  <script>
    const WIDTH = 750;
    const mobileAdapter = () => {
      let scale = screen.width / WIDTH;
      let content = `width=${WIDTH}, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}`;
      let meta = document.querySelector("meta[name=viewport]");
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "viewport");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };
    mobileAdapter();
    window.onorientationchange = mobileAdapter; //屏幕翻转时再次执行
  </script>
</head>
```
缺点就是边线问题，不同尺寸下，边线的粗细是不一样的（等比缩放后），全部元素都是等比缩放，实际显示效果可能不太好


- vw 适配（部分等比缩放）

开发者拿到设计稿（假设设计稿尺寸为750px，设计稿的元素标注是基于此宽度标注）
开始开发，对设计稿的标注进行转换，把px换成vw。比如页面元素字体标注的大小是32px，换成vw为 (100/750)*32 vw
对于需要等比缩放的元素，CSS使用转换后的单位
对于不需要缩放的元素，比如边框阴影，使用固定单位px
关于换算，为了开发方便，利用自定义属性，CSS变量
```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
  <script>
    const WIDTH = 750
    //:root { --width: 0.133333 } 1像素等于多少 vw
    document.documentElement.style.setProperty('--width', (100 / WIDTH)) 
  </script>
</head>
```

- rem 适配

开发者拿到设计稿（假设设计稿尺寸为750px，设计稿的元素标是基于此宽度标注）\
开始开发，对设计稿的标注进行转换\
对于需要等比缩放的元素，CSS使用转换后的单位\
对于不需要缩放的元素，比如边框阴影，使用固定单位px

- 弹性盒适配（合理布局）
```html
<meta name="viewport" content="width=device-width">
```

使用 flex 布局
```css
section {
  display: flex;
}
```


[返回](./#/css/)
