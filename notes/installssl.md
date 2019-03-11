---
title: apache安装ssl证书踩坑指南 
---
## 给网址加点料

> 仅限于 Apache
* nginx等其他 请自行百度 or Google

::: warning  **必要条件**
* Apache 2.2.34及以上版本
* 运行 httpd -v 查看Apache版本号
:::

```ruby
$ httpd -v
Server version: Apache/2.4.28 (Unix)
Server built:   <date/time>
```

* SSL加解密软件：Apache服务器自身没有Public Key Infrastructure（PKI）相关库，而是采用第三方API进行，如：OpenSSL 1.1.0f及以上版本。

* 运行openssl version -a命令行查看系统中OpenSSL版本号
```ruby
$ openssl version -a
# 输出结果：
  LibreSSL 2.2.7  #//版本号
  built on: date not available #//build on 参数
  platform: <platform name>  #//平台名字
```
> **获取数字证书**
* 阿里云 腾讯云 等其他厂商  个人及小型企业站点 免费的就够用

##如何部署





<Valine></Valine>