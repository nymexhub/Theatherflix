module.exports = {
  entry: './public/app.js',
  output: {
      path: __dirname,
      filename: './public/bundle.js'
  },
  resolve: {
      extensions: ['.js', '.jsx']
  }
};