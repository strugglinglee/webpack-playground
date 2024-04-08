## 【Guides-代码分离】学习总结

- 代码分离可以将代码分离到不同的bundle中去，可以用于获取更小的bundle。通过控制资源加载优先级，按需加载或并行加载文件。通过合理的使用，可以极大地缩短加载时间。

- 常用代码分离有三种方法
  1. 入口起点：使用 entry 配置手动地分离代码
  2. 防止重复：使用入口依赖或者 SplitChunksPlugin 去重和分离 chunk
  3. 动态导入：通过模块的内联函数调用分离代码

- 防止重复方法之一：入口依赖
> 在webpack.config.js文件中配置deepOn选项，在多个chunk中共享模块
> 如果想要在一个 HTML 页面上使用多个入口起点，还需设置 optimization.runtimeChunk: 'single'
```js
 entry: {
    index: './src/index.js',
    print: './src/print.js',
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    another: {
      import: './src/print.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
   },
 optimization: {
   runtimeChunk: 'single'
 }
```
打包之后文件目录如下
```
dist                  
├─ index.bundle.js    
├─ index.html         
├─ print.bundle.js    
├─ runtime.bundle.js  
└─ shared.bundle.js   
```

- 防止重复方法之二：SplitChunksPlugin
> 直接在webpack.config.js中配置optimization选项

```js
optimization: {
  splitChunks: {
    chunks: 'all'
  }
}
```
打包之后文件目录如下

```
dist                
├─ index.bundle.js  
├─ index.html       
└─ print.bundle.js   
└─ vendors-node_modules_lodash_lodash_js.bundle.js
```
