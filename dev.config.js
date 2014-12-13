var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  debug: true,
  devtool: 'eval-source-map',
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'dev.bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' },
      { test: /\.json$/, loader: 'json-loader'}
    ]
  }
};