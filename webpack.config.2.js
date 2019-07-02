const path = require('path')
const ExtractTextplugin = require('extract-text-webpack-plugin')
// const MiniCssPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: './main.js',
  output: {
    // filename: '[hash:8].js',
    filename: 'bundle.js',    
    path: path.resolve(__dirname, './dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ExtractTextplugin.extract({
          use: 'css-loader'
        })
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