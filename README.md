一组项目"烘焙帮"完整介绍

### 1、该项目是基于create-react-app脚手架搭建的

已安装模块
- react
- react-dom
- webpack配置这一套：babel系列、css加载器系列、一些合并压缩的插件、自动创建服务预览的插件...
- ...

后期我们会用到的模块但是没有默认安装的
- redux / react-redux
- react-router-dom
- prop-types
- less / less-loader  （修改一下webpack的配置）
- axios
- redux中间件
- ...

# 目录结构
E:.
│  index.js            //主入口文件
│
├─api                 //API：包含了当前项目中所有对后台的数据请求方法
├─common               //公共css文件,js文件,和图片等
│  ├─css
│  ├─image
│  └─js
├─component            //存放公共组件
│      Tab.js
│
├─container            //存放页面级组件
│      Home.js
│
└─store                 //rudux
    │  action-types.js
    │  index.js
    │
    ├─action
    │      index.js
    │
    └─reducer
            index.js
