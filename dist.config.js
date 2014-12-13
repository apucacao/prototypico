var r = require('ramda');
var devConfig = require('./dev.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = r.mixin(devConfig, {
  output: {
    path: './dist',
    filename: '[hash].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new UglifyJsPlugin()
  ]
});