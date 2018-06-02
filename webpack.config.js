const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './public/app.jsx'
  },
  mode: "development",
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [{
      test: /\.js$/, // include .js files
      enforce: "pre", // preload the jshint loader
      exclude: /node_modules/, // exclude any and all files in the node_modules folder
      use: [{
        loader: 'babel-loader',
        options: {
          camelcase: true,
          emitErrors: false,
          failOnHint: false
        }
      }]
    }]
  },
}