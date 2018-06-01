mmodule.exports = {
  entry: "./public/app.jsx",
  output: {
      path:__dirname+ 'public/',
      filename: "bundle.js",
      publicPath: './public'
  },
  devServer: {
      inline: false,
      contentBase: "public",
  },
  module: {
      rules: [
          {
              test: /\.jsx?$/,
              exclude:/(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015', 'react']
              }
          }
      ]
  }

}