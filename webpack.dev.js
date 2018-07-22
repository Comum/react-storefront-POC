const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})
