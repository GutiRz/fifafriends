var merge = require('webpack-merge');
var common = require('./base.webpack.config');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var Dotenv = require('dotenv-webpack');
var path = require("path");

var basePath = __dirname;

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.join(basePath, "dist"),
    filename: "./js/[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].[chunkhash].css",
      chunkFilename: "[id].css",
    }),
    new Dotenv({
      path: "./prod.env",
    }),
  ],
})