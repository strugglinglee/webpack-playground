const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "webpack.numbers.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    library: {
      name: 'webpackNumbers',
      type: 'umd',
    },
  },
  plugins: [new HtmlWebpackPlugin({ title: "development" })],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
