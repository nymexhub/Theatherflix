const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/app.jsx'
  },
  mode: "production",
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}  

  module: {
      rules: [{
        loader: 'babel-loader',
        options: {
          camelcase: true,
          emitErrors: false,
          failOnHint: false
        },
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,

        resolve: {
          root: __dirname,
          alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            ListM: 'app/components/ListM.jsx',
            About: 'app/components/About.jsx'
          },
        }
      }]
  
  }