/*
    ./webpack.config.js
*/
// const path = require('path');
// module.exports = {
//   mode: "development", 
//   entry: './app/app.jsx',
//   output: {
//     path: path.resolve('public'),
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [{
//         test: /\.css$/,
//         use: [{
//             loader: "style-loader"
//           },
//           {
//             loader: "css-loader"
//           }
//         ]
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: "babel-loader"
//       }, {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: "babel-loader"
//       }
//     ]
//   }
// }


// ----------------------


var webpack = require('webpack');
var path = require('path')

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      applicationStyles: 'app/styles/app.scss',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx'
    },
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/api'
    ]
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'inline-source-map'
};
