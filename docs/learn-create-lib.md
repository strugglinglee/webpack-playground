## 【Guides-创建库】学习总结

- 暴露库需要在webpack.config.js的output.library设置
```js
  output: {
    filename: "webpack.numbers.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    library: 'webpackNumbers'
  },
```

> 这样就可以通过脚本标签来引入
```html
<script src="https://example.org/webpack-numbers.js"></script>
```

- 如果需要在 CommonJS、AMD、Node.js 等环境中使用该库，需要进行如下配置

```js
  output: {
    filename: "webpack.numbers.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    library: {
      name: 'webpackNumbers',
      type: 'umd',
    },
  },
```

- 推荐使用一个entry,绝大多数库，指定一个entry就足够了，不推荐使用数组
> 使用多入口时打包报错，可能是output写死了filename，具体原因待查

- 外部化第三方库
直接使用如上配置会发现webpack.number.js文件很大，因为里面将lodash库也全部打包进来了。
这种情况下，倾向于把 lodash 当作 peerDependency，即使用者应该已经自行安装过 lodash，这样便可以放弃控制此外部库，将控制权让给使用此库的开发者
配置方法如下：
> 通过配置webpack.config.js中的externals字段，配置完之后意味着这个库需要一个名为 lodash 的依赖，这个依赖在开发者环境中必须存在且可用
```js
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
```

多个依赖文件的指定排除
```js
import A from 'library/one';
import B from 'library/two';

// ...
```

```js
module.exports = {
  //...
  externals: [
    'library/one',
    'library/two',
    // 匹配以 "library/" 开始的所有依赖
    /^library\/.+$/,
  ],
};
```