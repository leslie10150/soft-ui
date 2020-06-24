const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.js')
const entryConfig = require('./../src/entryConfig')
process.env.NODE_ENV = 'production'

const basePath = path.resolve(__dirname, '../')
let entries = {}
// Object.keys(components).forEach((key) => {
//   entries[key] = path.join(basePath, 'src', components[key])
// })
entryConfig.map((item) => {
  let componentName = item.toLowerCase()
  entries[componentName] = path.resolve(
    __dirname,
    '../src/packages/' + componentName + '/index.js'
  )
})
module.exports = merge(webpackBaseConfig, {
  devtool: 'source-map',
  mode: 'production',
  entry: entries,
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/lib/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    library: 'soft-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
})
