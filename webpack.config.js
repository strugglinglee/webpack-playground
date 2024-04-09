const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  console.log(env, 'env')
  return {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      static: "./dist",
    },
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    externals: {
      lodash: {
        commonjs: "lodash",
        commonjs2: "lodash",
        amd: "lodash",
        root: "_",
      },
    },
    plugins: [new HtmlWebpackPlugin({ title: "development" })],
    // optimization: {
    //   runtimeChunk: 'single',
    //   splitChunks: {
    //     cacheGroups: {
    //       vendor: {
    //         test: /[\\/]node_modules[\\/]/,
    //         name: "vendors",
    //         chunks: "all",
    //       },
    //     },
    //   },
    // },
  };
};
