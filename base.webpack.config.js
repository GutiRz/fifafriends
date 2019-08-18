var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    alias: {
      layout: path.resolve(__dirname, './src/layout'),
      scenes: path.resolve(__dirname, './src/scenes/'),
      core: path.resolve(__dirname, './src/core/'),
      pods: path.resolve(__dirname, './src/pods/'),
      common: path.resolve(__dirname, './src/common/'),
      assets: path.resolve(__dirname, './src/assets/'),
    },
    extensions: [".js", ".ts", ".tsx"]
  },
  entry: {
    app: ["./index.tsx"],
    vendor: ["@babel/polyfill"]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          name: "vendor",
          test: "vendor",
          test: /vendor$/,
          enforce: true
        }
      }
    }
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist", // Content base
    inline: true, // Enable watch and live reload
    host: "localhost",
    port: 8080,
    stats: "errors-only"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelCore: "@babel/core" // needed for Babel v7
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", //Nombre de archivo en ./dist/
      template: "index.html", //Nombre de archivo en ./src
      hash: true
    }),
  ]
};
