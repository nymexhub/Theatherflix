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

    rules: [{
      test: /\.jsx?$/, // include .js files
 
      exclude: /node_modules/, // exclude any and all files in the node_modules folder
      use: [{
        loader: 'babel-loader',
        query: {
            presets: ['es2015']
        }
      }]
    }]
  },
}


// });
