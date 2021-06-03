// webpack 在不同环境的公共配置
const path = require('path')
const utils = require('./utils')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: utils.resolve('../dist'),
    filename: 'js/[name].[hash].js',
    publicPath: '/' // 打包后的资源的访问路径前缀
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        // exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
         'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', 'css-loader', 'less-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit:  10 * 1024, // 对小体积的资源图片进行管理，小图片转成base64,减少请求数量
          name: '[name]_[contenthash:8].[ext]',
          outputPath: 'static/images/'
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          limit: 10 * 1024,
          name: '[name]_[contenthash:8].[ext]',
          outputPath: 'static/font/'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json'], // 解析扩展。（当我们通过路导入文件，找不到改文件时，会尝试加入这些后缀继续寻找文件）
    alias: {
      '@': path.join(__dirname, '..', "src") // 在项目中使用@符号代替src路径，导入文件路径更方便
    }
  },
  plugins: [
    // copy 静态文件
    new CopyWebpackPlugin({
      patterns: [
        {
          from: utils.resolve('../static'),
          to: 'static',
          // ignore: ['.*'] // 注意： ^6.3.2 配置这个选项会报错
        }
      ]
    })
  ]
}