const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: '././app/app.jsx',
  output: {
    path: path.resolve(__dirname, '././public'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '././app',
    hot: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}