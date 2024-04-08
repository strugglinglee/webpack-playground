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