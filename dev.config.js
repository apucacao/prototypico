var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  debug: true,
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: './build',
    filename: 'dev.bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  module: {
    loaders: []
  }
};