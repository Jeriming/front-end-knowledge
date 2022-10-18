[返回](./#/css/)

### scrollWidth,clientWidth,offsetWidth 等等的区别

通过现象看本质，上代码：

```html
<style>
  .content {
    width: 100px;
    height: 200px;
    border: 1px solid #707070;
    overflow: auto;
  }
  .inner {
    width: 200px;
    height: 300px;
    border: 1px solid #707070;
  }
</style>
<div class="content">
  <div class="inner"></div>
</div>
<script>
  const content = document.querySelector(".content");
  console.log("offsetWidth ", content.offsetWidth);
  console.log("clientWidth", content.clientWidth);
  console.log("scrollWidth", content.scrollWidth);
</script>
```

结果：
![image](./md/images/domWidth.jpg)

可得出结论：
offsetWidth: dom 整体的实际宽度，包滚动条宽和边框，会随对象显示大小的变化而改变
clientWidth: dom 内容的可视区的宽度，不包滚动条宽和边框，会随对象显示大小的变化而改变
scrollWidth: dom 的实际内容的宽度，不包滚动条宽，会随对象中内容超过可视区后而变大

[返回](./#/css/)
