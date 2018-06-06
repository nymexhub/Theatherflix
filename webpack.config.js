module.exports= {
  entry:'./app/app.jsx',
  output: {
    path: __dirname,
    filename:'./public/bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias:{
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx'
    },
    extensions: ['*','.js','.jsx']
  },
  module :{
    rules:[{
      use : 'babel-loader',
      query :{
        presets:['react','es2015','es2017']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }]
  }
};