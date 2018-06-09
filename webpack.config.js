const path = require('path');

module.exports = {
  entry: {
    app: 'app/app.jsx.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [{
      test: /\.js$/, // include .js files
      enforce: "pre", // preload the jshint loader
      exclude: /node_modules/, // exclude any and all files in the node_modules folder
      use: [{
        loader: "jshint-loader",
        options: {
          camelcase: true,
          emitErrors: false,
          failOnHint: false
        }
      }]
    }]
  },
};