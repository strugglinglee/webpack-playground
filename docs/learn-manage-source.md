## 【Guides-管理资源】学习总结

- css-loader和style-loader需要同时使用，并且要注意使用顺序是style-loader需要放在前面，因为loader执行时逆序执行的


> css-loader：
> css-loader 用于解析 CSS 文件，处理 CSS 中的 @import 和 url() 等引用关系，以及将 CSS 文件转换成一个模块。
> 它允许你使用类似 import 的方式在 JavaScript 模块中引入 CSS 文件，使得在 JavaScript 中可以直接 import CSS 文件。
> css-loader 不负责将 CSS 应用到 HTML 页面上，而是将 CSS 转换成 JavaScript 模块。
> 
> style-loader：
> style-loader 用于将 CSS 注入到 HTML 页面中的 <style> 标签内。
> 当 webpack 遇到 import CSS 的语句时，style-loader 将通过 JavaScript 将 CSS 样式动态地插入到 HTML 的 <head> 标签中，使得样式生效。
> 它将处理 CSS 的加载和注入过程，并且可以处理样式的热更新等功能。


- webpack5，使用webpack中内置的资源模块asset/resource，就可以处理图片和字体等文件