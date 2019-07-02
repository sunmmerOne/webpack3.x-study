const path = require('path')
const UglifyPlugin = require('webpack/lib/optimize/ugilifuPlugin')

module.exports = function(env = {}, argv) {
  const plugins = []
  const isProduction = env['production']
  if (ifProduction) {
    plugins.push(new UglifyPlugin)
  }
  return {
    plugins: plugins,
    devtool: isProduction ? undefined : 'source-map'
  }
}

// example：启动命令是'webpack --dev.production --dev.bao=foo'，env=["production": true, "bao":foo]