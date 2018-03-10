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
  plugins: [new ExtractTextPlugin('app.css')], // will bundle all the css to this app.css file
  module: {
    loaders: [{
      test: /.js[x]?$/, // will look for .js and .jsx files
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread'] // you can use object-rest-spread at the code
      },
      exclude: /(node_modules|bower_components)/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader') // loads all the style
    }, {
      test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/, // packs all fonts, images, etc
      loader: 'file'
    }]
  }
}
