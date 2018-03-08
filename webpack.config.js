// creating the config file for webpack
// Project founded by Felipe Software Engineer C2018-Present  - felipe.dev.engr.js@gmail.com

// °_°_°_°_°_°_°__°___°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// WARNING : Please be careful with this file!
// °_°_°_°_°_°_°__°___°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°


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
  