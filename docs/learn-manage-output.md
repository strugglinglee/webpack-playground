## 【Guides-管理输出】学习总结

- entry中可以定义多个入口，在output中可以设置filename为`[name].bundle.js`来按入口名输出bundle

```js
module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
```

```
dist                            
├─ index.bundle.js              
├─ index.bundle.js.LICENSE.txt  
├─ index.html                   
└─ print.bundle.js              
```


- 使用 html-webpack-plugin 插件，自动生成 index.html，并自动引入bundle
- 自动清理文件夹：在webpack.config.js文件中的output字段里面设置clean为true