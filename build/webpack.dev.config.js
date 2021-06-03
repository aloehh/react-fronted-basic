const webpackBase = require('./webpack.base.config')
const { merge } = require('webpack-merge')
const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(webpackBase, {
  // 指定构建环境
  mode: 'development',
  plugins: [
    // 创建 html文档， 并引入js文件
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: utils.resolve("../dist/index.html"),
      inject: true, // true: 默认值, script标签位于body底部
    })
  ],
  // 开发环境本地启动的服务配置
  devServer: {
    historyApiFallback: true, // 当找不到路径时, 默认加载index.html
    hot: true,
    contentBase: false, // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
    compress: true, // 一切服务都启用gzip压缩
    port: 8081,
    publicPath: '/', // 访问资源前缀
    proxy: {
      // 接口请求代理
    }
  }
})