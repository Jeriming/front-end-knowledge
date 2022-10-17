[返回](./#/js/)

### 创建 ajax 过程


1. 创建 XHR 对象：new XMLHttpRequest()
2. 设置请求参数：request.open(Method, 服务器接口地址);
3. 发送请求: request.send()，如果是 get 请求不需要参数，post 请求需要参数 request.send(data)
4. 监听请求成功后的状态变化：根据状态码进行相应的处理。

```javascript
XHR.onreadystatechange = function () {
  if (XHR.readyState == 4 && XHR.status == 200) {
    console.log(XHR.responseText);
    // 主动释放,JS本身也会回收的
    XHR = null;
  }
};
```

注意: POST 请求需要设置请求头 readyState 值说明
0：初始化,XHR 对象已经创建,还未执行 open
1：载入,已经调用 open 方法,但是还没发送请求
2：载入完成,请求已经发送完成
3：交互,可以接收到部分数据
4：数据全部返回 status 值说明 200：成功 404：没有发现文件、查询或 URl 500：服务器产生内部错误

[返回](./#/js/)
