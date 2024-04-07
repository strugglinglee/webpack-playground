# webpack-playground

## 学习webpack官方文档
学习官方文档学习顺序
Guides(指南) -> Concepts（概念） -> Configuration（配置） -> Loaders -> Plugins(插件) -> API

## webpack 是一个模块打包工具
webpack 是一个模块打包工具(module bundler)（例如，Browserify 或 Brunch）。
而不是一个任务执行工具(task runner)（例如，Make, Grunt 或者 Gulp ）。
任务执行工具用来自动化处理常见的开发任务，例如，lint(代码检测)、build(构建)、test(测试)。
相比模块打包工具，任务执行工具则聚焦在偏重上层的问题上面。
你仍然可以得益于这种用法：使用上层的工具，而将打包部分的问题留给 webpack。
打包工具帮助你取得准备用于部署的 JavaScript 和 stylesheet，将它们转换为适合浏览器的可用格式。
例如，可以通过 压缩、分离 chunk 和 惰性加载 我们的 JavaScript 来提高性能。
打包是 web 开发中最重要的挑战之一，解决此问题可以消除开发过程中的大部分痛点。

## 目标
1. 从头开始学习webpack（按照官方文档）
2. 分支管理，由于每一阶段的webpack配置不同，建议按照 learn/学习类型-章节 practice/学习类型-章节，这样来区分每阶段的学习，每个学习类型学完之后，需要并入到main分支，main分支上面的代码一定是最新的学习内容代码
3. 每一节学完之后都要总结，并且重要章节内容需要实践或者结合网络分析文章来进一步梳理分析
4. 将wechat-mini由gulp升级到webpack

