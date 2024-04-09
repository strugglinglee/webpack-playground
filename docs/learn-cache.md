## 【Guides-缓存】学习总结

> 背景：如果在部署资源的最新版本时没有更改资源的文件名，浏览器可能会认为它没有被更新，从而使用它的缓存版本
> 通过必要配置确保 webpack 编译生成的文件能够被客户端缓存；当文件内容变化后，客户端又能够请求到新的文件

### 可替换模板字符串(substitutions)

> 通过带括号字符串来模板化文件名

- [contenthash]-将根据资源内容创建唯一hash值，资源内容发生改变时，hash值也会发生改变
  
### 提取引导模板

由于像 lodash 或 react 这样的第三方库很少像本地源代码一样频繁修改，因此通常推荐将第三方库提取到单独的 vendor chunk 中
> 减少客户端对服务器的请求，同时保证自身代码与服务器一致

```js
// webpack.config.js
optimization: {
 splitChunks: {
   cacheGroups: {
     vendor: {
       test: /[\\/]node_modules[\\/]/,
       name: 'vendors',
       chunks: 'all',
     },
   },
 },
},
```