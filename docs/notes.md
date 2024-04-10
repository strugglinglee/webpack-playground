## module vs bundle vs chunk

### module

不同文件类型的模块。Webpack 就是用来对模块进行打包的工具，这些模块各种各样，比如：js 模块、css 模块、sass 模块、vue 模块等等不同文件类型的模块。这些文件都会被 loader 转换为有效的模块，然后被应用所使用并且加入到依赖关系图中。相对于一个完整的程序代码，模块化的好处在于，模块化将程序分散成小的功能块，这就提供了可靠的抽象能力以及封装的边界，让设计更加连贯、目的更加明确。而不是将所有东西都揉在一块，既难以理解也难以管理。

### chunk

- 一种是非初始化的：例如在打包时，对于一些动态导入的异步代码，webpack 会帮你分割出共用的代码，可以是自己写的代码模块，也可以是第三方库（node_modules 文件夹里的），这些被分割的代码文件就可以理解为 chunk。
- 还有一种是初始化的：就是写在入口文件处 (entry point) 的各种文件或者说模块依赖，就是 chunk ，它们最终会被捆在一起打包成一个 main.js （当然输出文件名你可以自己指定），这个 main.js 可以理解为 bundle，当然它其实也是 chunk。

### bundle

bundle：捆绑好的最终文件。如果说，chunk 是各种片段，那么 bundle 就是一堆 chunk 组成的“集大成者”，比如上面说的 main.js 就属于 bundle。当然它也类似于电路上原先是各种散乱的零件，最终组成一个集成块的感觉。它经历了加载和编译的过程，是源文件的最终版本。
简而言之，chunk 是 webpack 处理过程中的一组模块，bundle 是一个或多个 chunk 组成的集合。


## mainfest

webpack 通过 manifest 追踪所有模块到输出的 bundle 之间的映射

## DllPlugin 
使用 DllPlugin 为更改不频繁的代码生成单独的编译结果。尽管这增加了构建过程的复杂度，但是可以提高应用程序的编译速度。

## SplitChunksPlugin

在多页面应用程序中使用 SplitChunksPlugin。
在多页面应用程序中使用 SplitChunksPlugin，并开启 async 模式。

## HMR（模块热替换）

> webpack中最有用的功能之一，能够在不刷新页面的情况下更新所有类型的模块

> 从 webpack-dev-server v4.0.0 开始，模块热替换是默认开启的


## Tree shaking

通常用于移除JS上下文的死代码，依赖于ES模块的`静态结构`特性，例如`import`和`export`。

- package.json的`sideEffects`属性，可以标记哪些文件是真正的ES模块，由此可以安全的删除未被使用的文件。
```json
{
    "sideEffects": false
}
```
> 在纯粹的ES模块世界中，很容易识别哪些文件有副作用，在项目中无法保证这种纯度的时候，我们有必要告诉webpack哪些文件是纯粹的
>
> 【副作用】指在导入时会执行特殊行为的代码，而不是仅仅暴露一个或多个导出内容。
> polyfill 就是一个例子，尽管其通常不提供导出，但是会影响全局作用域，因此 polyfill 将被视为一个副作用。
- 如果代码的确存在某些副作用，可以设置package.json文件中的sideEffects字段为一个数组
```json
{
    "sideEffects": ['./src/some-side-effectful-file.js']
}
```
- 将mode设置为`development`，可以确保bundle不被压缩

> usedExports是默认开启的？

```js
// webpack.config.js
{
    "mode": 'development',
    "optimization": {
        "usedExports": true
    }
}
```

- 通过 `/*#__PURE__*/` 注释可以告诉 webpack 某个函数调用无副作用

## DefinePlugin
可以创建一个在编译时可以配置的全局常量。主要针对我们在编译时，区分 开发、测试、生产环境。
因为node.js里的环境变量，process.env.NODE_ENV，只能在node的环境里拿到。而webpack.DefinePlugin提供的可以在浏览器环境里拿到。

## 懒加载
是先把你的代码在一些逻辑断点处分离开，然后在一些代码块中完成某些操作后，立即引用或即将引用另外一些新的代码块。这样加快了应用的初始加载速度，减轻了它的总体体积，因为某些代码块可能永远不会被加载。

> 注意当调用 ES6 模块的 import() 方法（引入模块）时，必须指向模块的 .default 值，因为它才是 promise 被处理后返回的实际的 module 对象。

```js
function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');
  const br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    const print = module.default;
    print();
  });

  return element;
}

 document.body.appendChild(component());
 ```

## ESM

ES模块，简称ESM。
- 关键字 export 允许将 ESM 中的内容暴露给其他模块
- 关键字 import 允许从其他模块获取引用到 ESM 中
- 将模块标记为ESM
```js
// package.json
{
  "type": "module"
}
```
- 文件还可以通过使用 .mjs 或 .cjs 扩展名来设置模块类型。 
- .mjs 将它们强制置为 ESM，.cjs 将它们强制置为 CommonJs。
- 在使用 text/javascript 或 application/javascript mime type 的 DataURI 中，也将使用 ESM
- non-ESM 仅能导入 default 导出的模块，不支持命名导出的模块
- CommonJs 语法不可用: require, module, exports, __filename, __dirname