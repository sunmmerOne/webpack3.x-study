const path = require('path')
const ExtractTextplugin = require('extract-text-webpack-plugin')
// const MiniCssPlugin = require('mini-css-extract-plugin')
module.exports = {
  // target: 'node',
  devtool: 'source-map',// 开发
  entry: './main.js',
  output: {
    // filename: '[hash:8].js',
    filename: 'bundle.js',    
    path: path.resolve(__dirname, './dist'),
    // publicPath: 'https://cdn.example.com/assets', // 静态资源异步加载
    // crossOriginLoading: 'use-credentials', // jsonp请求代码块带cookies
    // library: 'libraryName', // 构建可以被其他模块导入使用的库
    // libraryTarget: '',
    // libraryExport: 'a' //配置哪些子模块需要被导出
  },
  mode: 'development',
  resolve: {
    alias: {
      // 通过import引入，import Button from 'components/button'
      // 映射为 import Button from '../src/components/button'
      components: '../src/components',
      'react$': './src/react.js'
    },
    extensions: ['js', 'json'],
    modules: ['./src/components', 'node_modules'],
    descriptionFiles: ['package.json'],
    // enforceExtension: false, //true必须import './foo.js
    // enforceModuleExtension: false
  },
  module: {
    noParse: /\jquery|chartjs/,
    rules: [
      {
        test: /\.css$/,
        loaders: ExtractTextplugin.extract({
          use: ['style-loader', 'css-loader', 'postcss-loader']
        })
      },
      {
        test: [/\.js$/, /\.jsx$/],
        include: [path.resolve(__dirname, 'scripts'), path.resolve(__dirname, 'src')], // scripts目录下
        exclude: path.resolve(__dirname, 'node_modules'), // 不包括的
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ],
        // jsx-loader 等其他loader
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    // new ExtractTextplugin({
    //   filename: `[name]_[contenthash:8].css`
    // })
    new ExtractTextplugin('stylus.css')
  ],
  devServer: {
    // host: '',
    port: 8686,
    https: true,
    compress: true,// 是否启用Gzip压缩，默认是false
    // allowHost: ['host.com'],// http请求再列表里才正常返还
    // disableHostCheck: false, // 配置是否关闭用于DNS重新绑定的http请求的host检查
    hot: true,
    inline: true, // 调整自动刷新策略
    historyApiFallback: true, // 开发单页面应用用到的，返还index.html
    historyApiFallback: {
      rewrites: [
        {from: /^\/user/, to: '/user.html'},
        {from: /^\/game/, to: '/game.html'},
        {from: /./, to: '/index.html'},        
      ]
    },
    // contentBase: path.join(__dirname, 'public'), // 根目录，
    headers: {
      'X-foo': 'bar'
    },
    // 代理到后端服务接口
    proxy: {
      '/api': 'http://localhost:3000'
    },
    // cache: true, // 开启缓存
    // watch: true,// 监听文件刷新 
  }
}