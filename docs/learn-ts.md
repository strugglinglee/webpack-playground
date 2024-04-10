## 【Guides-TS】学习总结

### npm i typescript ts-loader -D

> ts-loader能够很方便地启用额外的 webpack 功能，例如将其他 web 资源导入到项目中
> ts-loader 使用 TypeScript 编译器 tsc，并依赖于 tsconfig.json 配置。请确保避免将 module 设置为 "CommonJS"，否则 webpack 将无法对代码进行 tree shaking
>
> 如果已经使用 babel-loader 转译代码，可以使用 @babel/preset-typescript 以让 Babel 处理 JavaScript 和 TypeScript 文件，而不需要额外使用 loader。
> 请记住,与 ts-loader 相反，底层的 @babel/plugin-transform-typescript 插件不执行任何类型检查。

### 添加 tsconfig.json
> 支持 JSX，并将 TypeScript 编译到 ES5
```js
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
```

### webpack.config.js配置
```js
module.exports = {
  entry: {
    app: "./src/index.js",
  },
  rules: [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
```

### ./index.ts
```js
import * as _ from 'lodash';
```

如果想在 TypeScript 中继续使用像`import _ from 'lodash'`; 的语法，
让它被作为一种默认的导入方式，需要在 `tsconfig.json` 中设置 `"allowSyntheticDefaultImports" : true` 和 `"esModuleInterop" : true`。这是与 TypeScript 相关的配置，在本文档中提及仅供参考


### source map
对 TypeScript 进行配置以启用 source map，从而实现将内联的 source map 输出到编译后的 JavaScript 文件。
> 配置sourceMap字段为true
```js
{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "commonjs",
        "target": "es5",
        "jsx": "react",
        "allowJs": true,
        "moduleResolution": "node",
    }
}
```

### 使用第三方库

在从 npm 安装第三方库时，一定要记得同时安装此库的类型声明文件。
```shell
npm install --save-dev @types/lodash
```

### 使用非代码资源

需要告诉 TypeScript 推断导入资源的类型。在项目里创建一个 custom.d.ts 文件，这个文件用来表示项目中 TypeScript 的自定义类型声明

```js
declare module '*.svg' {
  const content: any;
  export default content;
}
```