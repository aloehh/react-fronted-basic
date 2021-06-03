const webpackBase = require('./webpack.base.config')
const { merge } = require('webpack-merge')
const utils = require('./utils')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(webpackBase, {
  // 指定构建环境
  mode: 'production',
  plugins: [
    // 创建 html文档， 并引入js文件
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: utils.resolve("../dist/index.html"), // html模版的生成路径
      inject: true, // true: 默认值, script标签位于body底部
      hash: true, // 在打包的资源插入html会加上hash
      // html文件压缩
      minify: {
        removeComments: true, // 去注释
        collapseWhitespace: true,  // 压缩空格
        removeAttributeQuotes: true // 去除属性标签的引号，例如 <p id="test" /> 输出 <p id=test/>
      }
    })
  ],
  // 开发环境本地启动的服务配置
  devServer: {

  }
})