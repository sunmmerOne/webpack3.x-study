const path = require('path')
const ExtractTextplugin = require('extract-text-webpack-plugin')
// const MiniCssPlugin = require('mini-css-extract-plugin')
module.exports = {
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
  module: {
    noParse: /\jquery|chartjs/,
    rules: [
      {
        test: /\.css$/,
        loaders: ExtractTextplugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: [/\.js$/, /\.jsx$/],
        include: [path.resolve(__dirname, 'scripts'), path.resolve(__dirname, 'test')], // scripts目录下
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
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(gif|png|img|svg|pdf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    // new ExtractTextplugin({
    //   filename: `[name]_[contenthash:8].css`
    // })
    new ExtractTextplugin('stylus.css')
  ]  
}