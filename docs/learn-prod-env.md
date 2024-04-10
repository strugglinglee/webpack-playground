## 【Guides-生产环境】学习总结

### 设置mode为production

- webpack v4之后，指定mode会自动配置DefinePlugin
- webpack v4之后，生产环境会默认使用TerserPlugin，是压缩方面比较好的选择
- 生产环境 vs 开发环境中配置source-map 
```js
// 生产环境
{
    devtool: 'source-map'
}
```

```js
// 开发环境
// 会增加bundle体积大小，降低整体性能
{
    devtool: 'inline-source-map'
}
```
