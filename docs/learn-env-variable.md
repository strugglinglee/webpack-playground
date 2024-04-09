## 【Guides-环境变量】学习总结


```shell
npx webpack --env goal=local --env production --progress
```
在webpack.config.js中打印env
```js
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
    }
  };
};
```
env信息如下
```js
{
  WEBPACK_BUNDLE: true,
  WEBPACK_BUILD: true,
  goal: 'local',
  production: true
}
```