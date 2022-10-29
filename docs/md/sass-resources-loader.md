[返回](./#/webpack/)

### 1. 项目工程引入全局样式

项目中需要使用预处理样式的时候，需要统一定义全局样式的变量，总不能在使用的地方一个一个的 import 吧，所以可以用到一个插件： [sass-resources-loader](https://www.npmjs.com/package/sass-resources-loader)

vue 项目现在大多少都使用 vue-cli 构建，配置文件 vue.config.js，加入配置：

```Javascript
{
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // 可以传入单个字符串
          resources: './path/to/resources.scss',
          // 也可以传入数组
          resources: ['./path/to/vars.scss', './path/to/mixins.scss', './path/to/functions.scss']
        })
        .end()
    })
  }
}
```

### 2. css 单独分离

vue.config.js 有单独的配置： css.extract 生产环境下是 true，开发环境下是 false

[返回](./#/webpack/)
