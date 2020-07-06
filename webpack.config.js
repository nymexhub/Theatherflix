/*
    ./webpack.config.js

    webpack get good output but there are problems with the output with react
*/
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./app/app.jsx",
  output: {
    path: path.resolve("public"),
    filename: "./build/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
