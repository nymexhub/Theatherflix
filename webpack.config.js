// creating the config file for webpack
// created by Felipe Software Engineer CC1028

// module.exports = {
//   path: __dirname,
//   entry: './public/app.jsx',
//   output: {
//       path: __dirname,
//       filename: './public/bundle.js'
//   },
//   resolve: {
//       extensions: ['.js', '.jsx']
//   },
//   module: {
//       loaders: [
//           {
//               loader: 'babel-loader',
//               query: {
//                   presets: ['react', 'es2015']
//               },
//               test: /\.jsx?$/,
//               exclude: /(node_modules|bower_components)/
//           }
//       ]
//   }
// };
// previously I made a mistake in the code 


// the following is correct. 


module.exports = {
    entry: './public/app.jsx',
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          },
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/
        }
      ]
    }
  };
  