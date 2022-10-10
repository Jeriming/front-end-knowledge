const Routers = require("./build/GenRouter");
const assetsDir = "front-end-knowledge";

module.exports = {
  productionSourceMap: false,
  assetsDir: assetsDir,
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          // 也可以传入数组
          resources: ["./src/style/global.scss"],
        })
        .end();
    });

    config.plugin("html").tap((options) => {
      options[0].title = "个人主页";
      return options;
    });

    config.plugin("define").tap((options) => {
      options[0]["$localRouters"] = JSON.stringify(Routers);
      return options;
    });

    // 这样修改会直接覆盖之前的配置
    // config.plugin("copy").use(require("copy-webpack-plugin"), [
    //   [
    //     {
    //       from: './src/md/',
    //       to: `./${assetsDir}/md/`,
    //     },
    //   ],
    // ]);

    // const copyArgs = config.plugin("copy").store.get("args")[0];
    // copyArgs.push({
    //   from: "./src/md/",
    //   to: `./${assetsDir}/md/`,
    // });

    config.plugin("copy").tap((args) => {
      args[0].push({
        from: "./src/md/",
        to: `./${assetsDir}/md/`,
      });
      return args;
    });
  },
};
