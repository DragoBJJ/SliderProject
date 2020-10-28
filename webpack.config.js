const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const env = process.env.NODE_ENV;

module.exports = {
  entry: "./app/index.js",

  mode: env,

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/"
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 3500,
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
