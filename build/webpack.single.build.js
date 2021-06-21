const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpackUtils = require('./webpack.util');
const cardName = webpackUtils.getCardName();
const cardPath = webpackUtils.getCardPath(cardName);
const outputPublicPath = 'dist';
const outPutPath = path.resolve(__dirname, '../', outputPublicPath, cardName)
console.log('---------------------', webpackUtils.getCardNameList(cardName))
const webpackConfig = {
  mode: "production",
  entry: webpackUtils.getCardNameList(cardName),
  output: {
    // path: outPutPath,
    path: path.resolve(__dirname, '../dist'),
    filename: "[name].js",
    // chunkFilename: "[id].[chunkhash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

module.exports = webpackConfig;
