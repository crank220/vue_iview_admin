# vue_iview_admin

## 简介
> iview后台管理系统模版、菜单自动注册/管理、mock login、html2pdf、上传图片、大图预览、表单验证、markdown/多文本/html编辑器


## 项目结构

```bash
+-- src
|
|   +-- assets -> 全局资源目录
|   |   +-- css -> css资源文件
|   |   +-- img -> 图片资源文件
|   |   +-- mock -> 接口mock数据
|   |
|   +-- components -> 全局组件目录
|   |   +-- Component -> 组件
|   |   |   +-- index.vue -> 组件模版文件
|   |   |   +-- cell -> 组件下子组件文件夹
|   |
|   +-- lib -> 资源库
|   |
|   +-- router -> 路由配置
|   |
|   +-- store  -> vuex
|   |   +-- modules -> 对应路由
|   |   |   +-- modulesA.js -> 状态模块 ！对应路由
|   |   +-- index.js
|   |
|   +-- views -> 视图文件夹 ！对应路由
|   |   +-- moduleA -> 功能模块A
|   |   |   +-- homeA -> 视图 homeA
|   |   |       +-- index.vue
|   |   |       +-- cell -> 组件文件夹
|   |
|   +-- main.js -> 入口文件
|
+-- public -> 静态资源目录
```
## 运行

npm install

npm run serve
