var webpack = require('webpack');
var path = require('path');

// var chokidar = require('chokidar');
// I tried to use chokidar ... no use.

// One-liner for current directory, ignores .dotfiles
// chokidar.watch('.', {ignored: /(^|[\/\\])\../}).on('all', (event, module) => {
//  console.log(event, mode);

// I'm having troubles and nightmares with webpack 
// v2.1
//
module.exports = {
  mode: 'production',
  entry: {
    app: './app/app.jsx'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public')
  }, 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }

};
