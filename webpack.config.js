const path = require('path');

module.exports = {
  // mode: "production", // enable many optimizations for production builds
   mode: "development", // enabled useful tools for development
  // mode: "none",
  
  entry: './app/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
alias: {
  Main : path.resolve(__dirname, './app/components/Main'),
  Nav: path.resolve(__dirname, './app/components/Nav'),
    extensions: [".js", ".jsx"]
  },
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
};
// please don't change this! inform first in the group!
module.exports = {
  entry: './app/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
alias: {
  Main : path.resolve(__dirname, './app/components/Main'),
  Nav: path.resolve(__dirname, './app/components/Nav'),
  ListM: path.resolve(__dirname, './app/components/ListM'),
  About: path.resolve(__dirname, './app/components/About')
},
    extensions: [".js", ".jsx"]
  },
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
};