module.exports = {
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

    config.plugin('html').tap(options => {
      options[0].title = '个人主页';
      return options;
    })
  },
};
