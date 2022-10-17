[返回](./#/js/)

本文 API 使用 echarts 官网，原文：[eCharts](https://echarts.apache.org/zh/option.html#series-custom)

1. 定义 series 的时候 type 使用： custom

2. 主要通过 renderItem 函数来实现：

renderItem 函数提供了两个参数：

params：包含了当前数据信息和坐标系的信息。\
api：是一些开发者可调用的方法集合。

一般来说，renderItem 函数的主要逻辑，是将 dataItem 里的值映射到坐标系上的图形元素。这一般需要用到 renderItem.arguments.api 中的两个函数：

api.value(...)，意思是取出 dataItem 中的数值。例如 api.value(0) 表示取出当前 dataItem 中第一个维度的数值。
api.coord(...)，意思是进行坐标转换计算。例如 var point = api.coord([api.value(0), api.value(1)]) 表示 dataItem 中的数值转换成坐标系上的点。
有时候还需要用到 api.size(...) 函数，表示得到坐标系上一段数值范围对应的长度。

返回值中样式的设置可以使用 api.style(...) 函数，他能得到 series.itemStyle 中定义的样式信息，以及视觉映射的样式信息。也可以用这种方式覆盖这些样式信息：api.style({fill: 'green', stroke: 'yellow'})。

3. params 参数：

```javascript
{
    context: // {Object} 一个可供开发者暂存东西的对象。生命周期只为：当前次的渲染。
    seriesId: // {string} 本系列 id。
    seriesName: // {string} 本系列 name。
    seriesIndex: // {number} 本系列 index。
    dataIndex: // {number} 数据项的 index。
    dataIndexInside: // {number} 数据项在当前坐标系中可见的数据的 index（即 dataZoom 当前窗口中的数据的 index）。
    dataInsideLength: // {number} 当前坐标系中可见的数据长度（即 dataZoom 当前窗口中的数据数量）。
    actionType: // {string} 触发此次重绘的 action 的 type。
    coordSys: // 不同的坐标系中，coordSys 里的信息不一样，含有如下这些可能：
    coordSys: {
        type: 'cartesian2d',
        x: // {number} grid rect 的 x
        y: // {number} grid rect 的 y
        width: // {number} grid rect 的 width
        height: // {number} grid rect 的 height
    },
    coordSys: {
        type: 'calendar',
        x: // {number} calendar rect 的 x
        y: // {number} calendar rect 的 y
        width: // {number} calendar rect 的 width
        height: // {number} calendar rect 的 height
        cellWidth: // {number} calendar cellWidth
        cellHeight: // {number} calendar cellHeight
        rangeInfo: {
            start: // calendar 日期开端
            end: // calendar 日期结尾
            weeks: // calendar 周数
            dayCount: // calendar 日数
        }
    },
    coordSys: {
        type: 'geo',
        x: // {number} geo rect 的 x
        y: // {number} geo rect 的 y
        width: // {number} geo rect 的 width
        height: // {number} geo rect 的 height
        zoom: // {number} 缩放的比率。如果没有缩放，则值为 1。例如 0.5 表示缩小了一半。
    },
    coordSys: {
        type: 'polar',
        cx: // {number} polar 的中心坐标
        cy: // {number} polar 的中心坐标
        r: // {number} polar 的外半径
        r0: // {number} polar 的内半径
    },
    coordSys: {
        type: 'singleAxis',
        x: // {number} singleAxis rect 的 x
        y: // {number} singleAxis rect 的 y
        width: // {number} singleAxis rect 的 width
        height: // {number} singleAxis rect 的 height
    }
}
```

4. api

- api.value()\
  得到给定维度的数据值。

  ```javascript
  @param {number} dimension 指定的维度（维度从 0 开始计数）。
  @param {number} [dataIndexInside] 一般不用传，默认就是当前数据项的 dataIndexInside。
  @return {number} 给定维度上的值。
  ```

- api.coord()\
  将数据值映射到坐标系上。

  ```javascript
  @param {Array.<number>} data 数据值。
  @return {Array.<number>} 画布上的点的坐标，至少包含：[x, y]
   对于 polar 坐标系，还会包含其他信息：
   polar: [x, y, radius, angle]
  ```

- api.size()\
   给定数据范围，映射到坐标系上后的长度。\
   例如，cartesian2d 中，api.size([2, 4]) 返回 [12.4, 55]，表示 x 轴数据范围为 2 映射得到长度是 12.4，y 轴数据范围为 4 时应设得到长度为 55。\
   在一些坐标系中，如极坐标系（polar）或者有 log 数轴的坐标系，不同点的长度是不同的，所以需要第二个参数，指定获取长度的点。\

  ```javascript
  @param {Array.<number>} dataSize 数据范围。
  @param {Array.<number>} dataItem 获取长度的点。
  @return {Array.<number>} 画布上的长度
  ```

  以上三个最常见，其他的不再列举，详见 eCharts 官网：[arguments.api](https://echarts.apache.org/zh/option.html#series-custom.renderItem.arguments.api)

  5. return

  renderItem 返回的必须为一个： [graphic](https://echarts.apache.org/zh/option.html#graphic.elements)，它的类型有：group、image、text、rect、circle、ring、sector、arc、polygon、polyline、line、bezierCurve，下面以官方第一示例为例：

  ```javascript
  renderItem: function (params, api) {
  var yValue = api.value(2);
  var start = api.coord([api.value(0), yValue]);
  var size = api.size([api.value(1) - api.value(0), yValue]);
  console.log("yValue", yValue, "start", start, "size", size);
  var style = api.style();
  return {
    type: "rect",
    shape: {
      x: start[0],
      y: start[1],
      width: size[0],
      height: size[1],
    },
    style: style,
  };
  }
  ```

  返回类型为 rect 矩形，shape 属性有：x,y,width,height，注意：x,y 都是图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横、纵坐标值，api.coord就会生成对应原点坐标系的坐标

[返回](./#/js/)
