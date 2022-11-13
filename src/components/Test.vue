<template>
  <div id="content">
    <canvas
      id="canv"
      style="position: absolute; width: 500px; height: 400px; left: 0; top: 0"
    ></canvas>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
    <p>
      这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容这是页面内容
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.func3();
  },
  methods: {
    func1() {
      function createBackgroundImage(content, proportion, tiltAngle) {
        const can = document.createElement("canvas");
        can.width = document.body.clientWidth / proportion;
        can.height = document.body.clientHeight / proportion;
        const context = can.getContext("2d");
        context.rotate((-25 * Math.PI) / 180);
        context.font = "800 30px Microsoft JhengHei";
        context.fillStyle = "#000";
        context.textAlign = "center";
        context.textBaseline = "Middle";
        context.fillText(content, 100, 100);
        console.log(context.getImageData(0, 0, can.width, can.height));
        return can.toDataURL("image/png");
      }
      const div = document.getElementById("content");
      console.log("div", div);
      div.style.backgroundImage = `url(${createBackgroundImage(
        "伯约同学",
        6,
        10
      )})`;
    },
    func2() {
      const image1 = createBackgroundImage("伯约", 3, 10);
      const image2 = createBackgroundImage("学", 3, 10);

      const div = document.getElementById("content");
      console.log("div", div);
      div.style.backgroundImage = `url(${createBackgroundImage(
        "伯约同学",
        6,
        10
      )})`;
      mergeData(image1, image2).then((res) => {
        console.log("res", res);
        // decrypt(image2).then((res) => {
        //   console.log("finalImage", res);
        // });
      });
      function mergeData(rawImageSrc, watermarkImageSrc) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = function () {
            const myCanvas = document.createElement("canvas");
            myCanvas.width = img.width;
            myCanvas.height = img.height;
            const ctx = myCanvas.getContext("2d");
            const bit = 0;
            const offset = 3;
            const oImageData = getImageData(rawImageSrc);
            const oData = oImageData.data;
            const newData = getImageData(watermarkImageSrc).data;
            for (let i = 0; i < oData.length; i++) {
              if (i % 4 === bit) {
                // 只修改目标通道
                if (newData[i + offset] === 0 && oData[i] % 2 === 1) {
                  // 没有信息的像素，将目标通道的奇数像素改为偶数
                  if (oData[i] === 255) {
                    oData[i]--;
                  } else {
                    oData[i]++;
                  }
                } else if (newData[i + offset] !== 0 && oData[i] % 2 === 0) {
                  // 有信息的像素
                  oData[i]++;
                }
              }
            }
            ctx.putImageData(oImageData, 0, 0);
            resolve(myCanvas.toDataURL("image/png"));
          };
          img.src = rawImageSrc;
        });
        function getImageData(image) {
          const img = new Image();
          img.src = image;
          const myCanvas = document.createElement("canvas");
          myCanvas.width = img.width;
          myCanvas.height = img.height;
          const myContext = myCanvas.getContext("2d");
          myContext.drawImage(img, 0, 0);
          return myContext.getImageData(0, 0, myCanvas.width, myCanvas.height);
        }
      }

      function decrypt(watermarkImage) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = function () {
            const myCanvas = document.createElement("canvas");
            myCanvas.width = img.width;
            myCanvas.height = img.height;
            const ctx = myCanvas.getContext("2d");
            const imageData = getImageData(watermarkImage);
            var data = imageData.data;
            for (var i = 0; i < data.length; i++) {
              if (i % 4 == 0) {
                // 红色分量
                if (data[i] % 2 == 0) {
                  data[i] = 0;
                } else {
                  data[i] = 255;
                }
              } else if (i % 4 == 3) {
                // alpha通道不做处理
                continue;
              } else {
                // 关闭其他分量，不关闭也不影响答案，甚至更美观 o(^▽^)o
                data[i] = 0;
              }
            }
            ctx.putImageData(imageData, 0, 0);
            resolve(myCanvas.toDataURL("image/png"));
          };
          img.src = watermarkImage;
        });
      }

      function createBackgroundImage(content, proportion, tiltAngle) {
        const can = document.createElement("canvas");
        can.width = document.body.clientWidth / proportion;
        can.height = document.body.clientHeight / proportion;
        const context = can.getContext("2d");
        context.rotate((-25 * Math.PI) / 180);
        context.font = "800 30px Microsoft JhengHei";
        context.fillStyle = "#000";
        context.textAlign = "center";
        context.textBaseline = "Middle";
        context.fillText(content, 100, 100);
        console.log(context.getImageData(0, 0, can.width, can.height));
        return can.toDataURL("image/png");
      }
    },
    func3() {
      function mergeData(newData, color) {
        // 获取图片的data
        var oData = originData.data;
        console.log(newData, originData);
        // bit是要改的通道所在的位置， offset是alpha相对于通道所在的位置
        var bit, offset;

        // 判断是修改哪个颜色通道
        switch (color) {
          case "R":
            bit = 0;
            offset = 3;
            break;
          case "G":
            bit = 1;
            offset = 2;
            break;
          case "B":
            bit = 2;
            offset = 1;
            break;
        }

        // r g b a
        for (var i = 0; i < oData.length; i++) {
          if (i % 4 === bit) {
            // 只修改目标通道
            if (newData[i + offset] === 0 && oData[i] % 2 === 1) {
              // 没有信息的像素，将目标通道的奇数像素改为偶数
              if (oData[i] === 255) {
                oData[i]--;
              } else {
                oData[i]++;
              }
            } else if (newData[i + offset] !== 0 && oData[i] % 2 === 0) {
              // 有信息的像素
              oData[i]++;
            }
          }
        }
        ctx.putImageData(originData, 0, 0);
      }
      const canvas = document.getElementById("canv");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = "./article.jpg";
      let originData;
      let textData;
      ctx.font = "15px Microsoft Yahei";
      ctx.fillStyle = "red";
      ctx.fillText("bruce好帅我好爱", 60, 130);
      textData = ctx.getImageData(
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
      ).data;
      img.onload = function () {
        ctx.drawImage(img, 0, 0);
        originData = ctx.getImageData(
          0,
          0,
          ctx.canvas.width,
          ctx.canvas.height
        );
        mergeData(textData, "R");
        processData(originData);
      };

      // 解密函数
      function processData(originData) {
        var data = originData.data;
        for (var i = 0; i < data.length; i++) {
          if (i % 4 === 0) {
            // 像素通道
            if (data[i] % 2 == 0) {
              data[i] = 0;
            } else {
              data[i] = 255;
            }
          }
        }
        ctx.putImageData(originData, 0, 0);
      }
    },
  },
};
</script>