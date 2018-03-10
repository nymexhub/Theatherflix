// creating the config file for webpack
// created by Felipe Software Engineer CC1028

// Webpack now bundles .css, and other files like fonts, etc
// Set a webpack devServer that runs on port 8080

const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './public/app.jsx',
  output: {
    path: path.join(__dirname, './public/'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      modules: path.join(__dirname, '/node_modules')
    }
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  plugins: [new ExtractTextPlugin('app.css')],
  module: {
    loaders: [{
      test: /.js[x]?$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread']
      },
      exclude: /(node_modules|bower_components)/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
      loader: 'file'
    }]
  }
}
