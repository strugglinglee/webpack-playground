## 【Guides-代码分离】学习总结

- 代码分离可以将代码分离到不同的bundle中去，可以用于获取更小的bundle。通过控制资源加载优先级，按需加载或并行加载文件。通过合理的使用，可以极大地缩短加载时间。

- Webpack v4.6.0+ 增加了对预获取和预加载的支持
  - 预获取（prefetch）：将来某些导航下可能需要的资源
  - 预加载（preload）：当前导航下可能需要资源
- 预获取示例
```js
import(/* webpackPrefetch: true */ './path/to/LoginModal.js');
```
> 上面的代码在构建时会生成 <link rel="prefetch" href="login-modal-chunk.js"> 并追加到页面头部，指示浏览器在闲置时间预获取 login-modal-chunk.js 文件。
> 只要父 chunk 完成加载，webpack 就会添加预获取提示。

- 预加载示例
```js
import(/* webpackPreload: true */ 'ChartingLibrary');
```

> 预获取和预加载的区别：
> 1. 预加载 chunk 会在父 chunk 加载时以并行方式开始加载；而预获取 chunk 会在父 chunk 加载结束后开始加载。
> 2. 预加载 chunk 具有中等优先级，并会立即下载；而预获取 chunk 则在浏览器闲置时下载。
> 3. 预加载 chunk 会在父 chunk 中立即请求，用于当下时刻；而预获取 chunk 则用于未来的某个时刻。
> 4. 浏览器支持程度不同。
>
> 不正确地使用 webpackPreload 会有损性能，需要谨慎使用。

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
├─ print.bundle.js   
└─ vendors-node_modules_lodash_lodash_js.bundle.js
```

- 动态导入
```js
// /src/index.js
async function getComponent() {
  const element = document.createElement("div");
  const { default: _ } = await import("lodash");
  element.innerHTML = _.join(["Helllo", "webpack"], " ");
  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
```

打包之后文件目录如下
```
dist                
├─ index.bundle.js  
├─ index.html       
└─ vendors-node_modules_lodash_lodash_js.bundle.js
```