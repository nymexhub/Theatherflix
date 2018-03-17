// creating the config file for webpack
// Project founded by Felipe Software Engineer C2018-Present  - felipealfonsog@fleep.io


/*
Please here add the emails of all the collabs who wrote code here or changed the webpack config.
Anyone must write his or her name in this lines, and comment any changes. This file is critical. 

Thanks.
-----

- Felipe : felipealfonsog@fleep.io
-
-
-
-
-


*/



// the webpack config was pretty fucked up. lol :D I started from from scratch. (Felipe)

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  // Please don't change this part of the webpach config. The 'resolve'
  resolve: {
     modules: [__dirname, 'node_modules'],
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx'
    },
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 8080,
    contentBase: './app/dev'
  },
//   plugins: [new ExtractTextPlugin('app.css')], // will bundle all the css to this app.css file
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}

