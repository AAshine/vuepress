---
title: vuepress 初体验  
---

### 起步就像数 1, 2, 3 一样容易

#安装

yarn global add vuepress # 或 npm install -g vuepress

#创建一个markdown文件

echo '# Hello VuePress' > README.md

#开始编写

vuepress dev

#构建为静态文件

vuepress build

::: warning 兼容性注意事项
VuePress 要求 Node.js >= 8。
:::

### 字段名词解释

title : 网站标题

description：网站描述

head ：网站头部的引用

图标路径默认为：/docs/.vuepress/public/目录下(所有的静态资源目录)

text : 代表页面显示的

link : 跳转的分类文件页面（如：上面定义的是archive，那我们就要在docs目录下建立一个archive文件夹，并且在这个文件夹中创建一个README.md文件）

/etc/httpd/extra/httpd-ssl.conf

<Valine></Valine>