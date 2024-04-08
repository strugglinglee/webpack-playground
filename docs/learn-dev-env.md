## 【Guides-开发环境】学习总结

- 当设置mode为`development`之后， dist/index.bundle.js.LICENSE.txt 文件没有了（不清楚原理）
- 设置devtool为`inline-source-map`之后，可以使用source-map功能

- webpack提供了三种方案以供在代码发生变化的时候**自动编译代码**

> 1. webpack观察者模式(npm script里面设置`webpack --watch`即可触发，缺点是文件改变后需要手动刷新浏览器)
> 2. **webpack-dev-server**
> 3. webpack-dev-middleware(是一个中间件，需要搭配server，比如搭配express server起一个node服务，并使用此中间件)

webpack-dev-server 配置

1. npm安装webpack-dev-server
`npm install --save-dev webpack-dev-server`
2. webpack.config.js修改配置(告知 webpack-dev-server 将 dist 目录下的文件作为可访问资源部署在 localhost:8080)
```js
{
    devServer: {
        static: './dist'
    },
    optimization: {
        runtimeChunk: 'single'
    }
}
```
3. npm script 中添加运行webpack-dev-server的命令
```js
scripts: {
  "dev": 'webpack server --open'
}
```