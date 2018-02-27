module.exports = {
  entry: './public/app.jsx',
  output: {
      path: __dirname,
      filename: './public/bundle.js'
  },
  resolve: {
      extensions: ['.js', '.jsx']
  }
};