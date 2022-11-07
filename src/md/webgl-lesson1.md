[返回](./#/webgl/)

### 第一课，绘制一个点

首先上代码：

```javascript
const VSHADER_SOURCE = `
void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0); // 设置坐标
    gl_PointSize = 10.0; // 点的尺寸
}
`;

const FSHADER_SOURCE = `
void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // 红色
}
`;

export function main() {
  const canvas = document.querySelector("canvas");
  // getWebGLContext 是 cuon-utils.js用来获取GL实例的代码
  const gl = getWebGLContext(canvas);
  // initShaders 是 cuon-utils.js 通过GL实例来初始化顶点着色器和片元着色器
  initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.drawArrays(gl.POINTS, 0, 1);
}
```

代码中： VSHADER_SOURCE 定义的是顶点着色器代码、FSHADER_SOURCE 是片元着色器代码

- 顶点着色器（Vertex shader）：顶点着色器是用来描述顶点特性（如位置、颜色等）的程序。
- 片元着色器（Fragment shader）：进行着片元处理过程（如光照）的程序。片元（fragment）是 webGL 术语，可以理解成像素（图像的单元）。

下图是WebGL系统使用着色器在浏览器上绘制图形的过程：
![lesson01](./md/images/lesson01-001.jpg)

[返回](./#/webgl/)
