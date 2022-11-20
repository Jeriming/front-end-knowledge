<template>
  <div>
    <p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p>
    <p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p>
    <p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p>
    <p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p>
    <p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p>
    <p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p>
    <p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p>
    <p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p>
    <p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p>
    <p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p>
    <p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p>
    <p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p>
    <p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p>
    <p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p>
    <p>水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试水印测试</p>
    <canvas
      id="canv"
      width="862"
      height="472"
      style="position: absolute; width: 862px; height: 472px; left: 0; top: 0"
    ></canvas>
  </div>
</template>
<script>
import watermark from "watermark-dom";
export default {
  data() {
    return {};
  },
  mounted() {
    this.funcGetData();
    watermark.load({
      watermark_txt: "廖铭杰",
      watermark_alpha: '1',
      watermark_color: 'rgba(0,0,0,0.01)'
    });
  },
  methods: {
    funcGetData() {
      // 解析水印
      const canvas = document.getElementById("canv");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = "./002.jpg";
      let originData;
      img.onload = function () {
        ctx.drawImage(img, 0, 0);
        originData = ctx.getImageData(
          0,
          0,
          ctx.canvas.width,
          ctx.canvas.height
        );
        debugger
        // 找到小于255的下标
        const ds = [];
        const oD = originData.data;
        for(let i = 0; i < oD.length; i++) {
          if(oD[i] < 255) {
            ds.push({
              index: i,
              data: oD[i]
            })
            // 255为背景色，后面通过设置完成
            // 如果透明度不为255，设置成255
            if(i % 4 === 3 && oD[i] !== 255) {
              oD[i] = 255;
            }
            // 不为背景色的直接赋值为0
            if(i % 4 !== 3 && oD[i] < 255) {
              oD[i] = 0;
            }
            // if(i % 4 !== 3 && oD[i] < 138) {
            //   oD[i] = 0;
            // }
          }
        }
        ctx.putImageData(originData, 0, 0);
      };
    }
  }
};
</script>