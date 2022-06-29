### 介绍

以上是两个只做了初始化的工程文件，内容都是初始内容。

vite-app 工程是使用命令：`npm init vite-app vite-app` 来搭建的。

vue-cli-app 工程是使用命令：`vue create vue-cli-app` 来搭建的。

```yaml
1. 取消默认勾选的 eslint，勾选 css预编译器
2. 选择 less 作为预编译器
3. vue 的版本选择 vue3
4. 。。。
```

使用命令：`npm run dev` 启动 vite 搭建的工程。

使用命令：`npm run serve` 启动 vue-cli 搭建的工程。

### 对比

- ctrl + u

查看页面源代码。

```html
<!-- vue-cli-app -->
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="/favicon.ico">
    <title>vue-cli-app</title>
  <link href="/js/app.js" rel="preload" as="script"><link href="/js/chunk-vendors.js" rel="preload" as="script"></head>
  <body>
    <noscript>
      <strong>We're sorry but vue-cli-app doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  <script type="text/javascript" src="/js/chunk-vendors.js"></script><script type="text/javascript" src="/js/app.js"></script></body>
</html>
```

webpack会先打包，然后启动开发服务器，请求服务器时直接给予打包结果。（打包结果：`chunk-vendors.js`）

```html
<!DOCTYPE html>
<html lang="en">
<head>
<script type="module">import "/vite/client"</script>

  <meta charset="UTF-8">
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vite App</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
</html>
```

vite是直接启动开发服务器，请求哪个模块再对该模块进行实时编译。

- Network

查看浏览器控制台下的 Network 选项卡里的内容。对比这两个工具搭建的工程之间的一些区别。