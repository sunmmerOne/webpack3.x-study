const path = require('path')
const ExtractTextplugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        // 用正则去匹配要用该loader转换的css文件，loader由后往前执行，可以传参，minimeze是压缩
        test: /\.css$/,
        loaders: ExtractTextplugin.extract({
          use: ['css-loader']
        }),
        // use: [
        //   'style-loader',
        //   'css-loader?minimize'
        // ]
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         minimize: true
      //       }
      //     }
      //   ]
      // }
    ]
  }
}