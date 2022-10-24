[返回](./#/source-parsing/)

1. 点击移动到滚动条中间位置：

a2: 是点击事件 event.clientY 鼠标距离浏览器顶部的距离]\
a1: 是视窗 container.getBoundingClientRect().top 距离浏览器顶部的距离\
h 是滚动条高度\
abs(a1-a2)是点击坐标距离 container 顶部的距离\
由于需要把滚动条中间位置位移到鼠标点击的位置，则需要再往上移动 h/2：abs(a1-a2) - h/2\
视图高：$el.offsetHeight，点击位置和视图高比为：(abs(a1-a2) - h/2) /$el.offsetHeight\
最终：整个页面需要滚动：(abs(a1-a2) - h/2) /$el.offsetHeight \* wrap.scrollHeight

代码：

```javascript
const clickTrackHandler = (e: MouseEvent) => {
  const offset = Math.abs(
    (e.target as HTMLElement).getBoundingClientRect()[bar.value.direction] -
      e[bar.value.client]
  )
  const thumbHalf = thumb.value[bar.value.offset] / 2
  const thumbPositionPercentage =
    ((offset - thumbHalf) * 100 * offsetRatio.value) /
    instance.value[bar.value.offset]

  wrap.value[bar.value.scroll] =
    (thumbPositionPercentage * wrap.value[bar.value.scrollSize]) / 100
}
```

2. 拖拽

滚动条高度-（点击的 clientY - 滚动条当前位置距离顶部的距离）===》 按下鼠标点击的位置距离滚动条底部的距离\
滚动条外层到顶部的距离-点击的 clientY 距离顶部的距离，取反（为啥不取绝对值？） ==> 得到当前点击位置到容器顶部的距离\
滚动条的高度-按下鼠标位置距离滚动条底部的距离 =》 按下鼠标时点击的位置距离滚动条滚动条顶部的距离 ？？？为啥多此一举\
按下鼠标时点击的位置距离滚动条滚动条顶部的距离 - 当前点击的位置距离滚动条顶部的距离 ==》 相对位移

move 的核心代码：

```javascript
const mouseMoveDocumentHandler = (e: MouseEvent) => {
  if (cursorDown.value === false) return;
  const prevPage = barStore.value[bar.value.axis];

  if (!prevPage) return;

  const offset =
    (instance.value.getBoundingClientRect()[bar.value.direction] -
      e[bar.value.client]) *
    -1;
  const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
  const thumbPositionPercentage =
    ((offset - thumbClickPosition) * 100 * offsetRatio.value) /
    instance.value[bar.value.offset];
  wrap.value[bar.value.scroll] =
    (thumbPositionPercentage * wrap.value[bar.value.scrollSize]) / 100;
};
```

[返回](./#/source-parsing/)
