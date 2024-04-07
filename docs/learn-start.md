## 【Guides-起步】学习总结

- dist文件夹中index.html文件为手动加入，引用main.js文件
- webpack实现了将/src目录中的js文件打包到了dist目录下
- main.js文件是webpack默认打包后的输出文件
- 还自动生成了一个main.js.LICENSE.txt文件，不知有何用处


此部分学习完之后的目录现状：

```
webpack-playground         
├─ dist                    
│  ├─ index.html           
│  ├─ main.js              
│  └─ main.js.LICENSE.txt  
├─ docs                    
│  └─ learn-start.md       
├─ src                     
│  └─ index.js             
├─ package-lock.json       
├─ package.json            
├─ README.md               
└─ webpack.config.js       
```