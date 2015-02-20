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
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader'},
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" }
    ]
  }
};