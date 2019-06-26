const merge = require('webpack-merge');
const common = require('./base.webpack.config');
const Dotenv = require('dotenv-webpack');
var path = require("path");

var basePath = __dirname;

module.exports = merge(common, {
  mode: "development",
  devtool: 'inline-source-map',
  output: {
    path: path.join(basePath, "dist"),
    filename: "./js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          "style-loader",
          "css-loader"
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: "./dev.env",
    }),
  ]
})