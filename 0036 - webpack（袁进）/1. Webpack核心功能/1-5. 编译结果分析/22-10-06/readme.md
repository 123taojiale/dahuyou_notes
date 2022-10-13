## 0. 前言

- [x] 对 `webpack` 的“编译”结果有一个初步的认识。

**老师建议：**
并不是说，要同学们能够自行编写编译结果，而是说理解了 webpack 的编译结果，才能更好的理解 webpack 的编译过程，才能知道 webpack 在编译的过程中，是怎样向目标一步一步靠近的。

## 1. 仿写打包结果 my-main.js
### 1.1 工程结构

```shell
.
├── dist
│   ├── index.html # 这是用于辅助测试的
│   ├── main.js
│   └── my-main.js # 仿写的打包结果放这里
├── package-lock.json
├── package.json
├── src
    ├── a.js
    └── index.js
```

```javascript
// ./src/index.js
console.log('index module')
const a = require('./a')
console.log(a)
```
```javascript
// ./src/a.js
console.log('module a')
module.exports = 'a'
```

### 1.2 my-main.js

```javascript
(() => {
  // 所有模块信息
  var my_modules = {
    './src/a.js': module => { // 模块 id 就是当前模块的路径
      // 模块内容，就是函数体内容
      console.log('module a')
      module.exports = 'a'
    },

    './src/index.js': (module, exports, my_require) => {
      console.log('index module')
      const a = my_require('./src/a.js')
      console.log(a)
    }
  }

  var my_module_cache = {} // 模块缓存

  // 根据模块 id 导入指定模块
  function my_require (moduleId) {
    // 检查缓存
    var cachedModule = my_module_cache[moduleId]
    if (cachedModule !== undefined) {
      return cachedModule.exports
    }

    // 缓存初始化
    var module = (my_module_cache[moduleId] = {
      exports: {}
    })


    my_modules[moduleId](module, module.exports, my_require)

    return module.exports // 返回模块的导出内容
  }

  my_require('./src/index.js') // 导入入口模块
})()
```

**webpack 打包的核心步骤：**

1. 读取所有依赖的资源内容，丢到一个变量 `my_modules` 中
2. 导入入口模块，递归执行所有依赖的模块

**my_require 核心逻辑：**

- 依据传入的模块 id 查找指定模块
- 检查模块是否有缓存
   - 如果有缓存，则直接将之前缓存的导出结果返回
   - 如果没有缓存，则初始化缓存数据，并执行指定模块中的代码，最终返回模块的导出结果

#### 思考打包后的结果，都有哪些特点

- 🤔 **my-main.js 是如何标识不同的模块的？**

使用模块的路径来表示模块，模块的路径就是模块的唯一标识。在数据结构上，使用模块的路径作为 key，模块的内容作为 val。

- **🤔 my-main.js 是否实现了模块之间的内容相互独立？**

是。
每个函数内部的内容都是相互独立的，并不会相互污染。实际上，我们写的每一个模块，经过 webpack 打包之后，确确实实就是丢到一个函数的局部作用域中执行的。

- 🤔 **my-main.js 是否实现了缓存检测？**

是。
如果一个模块被导入多次，那么该模块中的代码实际上只会执行一遍。

- 🤔 **my-main.js 中还存在模块化语句嘛？**

不存在。
最终的打包结果中，既不存在 commonjs 模块化语句、也不存在 es6 module 模块化语句。打包结果就是纯粹的原生 js 代码。所有模块化语句，webpack 都会帮我们解析为原生的 js 代码，以便打包结果可以在多种环境（比如：浏览器环境、node 环境）下运行。

![](https://cdn.nlark.com/yuque/0/2022/jpeg/2331396/1665030272936-7a9dd49d-ce41-4334-9d40-ff7bff71f324.jpeg)

## 2. 分析原始打包结果 main.js

### 2.1 main.js 源码

👇🏻 下面是使用 webpack 打包生成的打包结果（已删除多余的注释内容）：
```javascript
;(() => {
  var __webpack_modules__ = {
    './src/a.js': module => {
      eval(
        "console.log('module a')\nmodule.exports = 'a'\n\n//# sourceURL=webpack://22-10-06/./src/a.js?"
      )
    },

    './src/index.js': (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      eval(
        'console.log(\'index module\')\nconst a = __webpack_require__(/*! ./a */ "./src/a.js")\nconsole.log(a)\n\n\n//# sourceURL=webpack://22-10-06/./src/index.js?'
      )
    }
  }
  // The module cache
  var __webpack_module_cache__ = {}
  // The require function
  function __webpack_require__ (moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId]
    if (cachedModule !== undefined) {
      return cachedModule.exports
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {}
    })
    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
    // Return the exports of the module
    return module.exports
  }
  // startup
  // Load entry module and return exports
  // This entry module can't be inlined because the eval devtool is used.
  var __webpack_exports__ = __webpack_require__('./src/index.js')
})()
```

### 2.2 对比 my-main.js

除了变量名有些许不同之外，其余核心逻辑基本都是一致的。还有一丢丢不同的地方就在于 `eval` 函数了。

**🤔 为什么要将模块中的代码放到 eval 中执行？**
为了方便在浏览器中调试。

#### 有利于调试

👇🏻 下面简单介绍一下，为什么说放在 eval 中，是为了方便调试。

```html
<!-- ./dist/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <title>22-10-06</title>
</head>
<body>
  <script src="./main.js"></script>
  <!-- <script src="./my-main.js"></script> -->
</body>
</html>
```

**我们先导入 **`**./dist/main.js**`** 来测试：**
![image.png](https://cdn.nlark.com/yuque/0/2022/png/2331396/1665032201970-b2804f32-b791-42b5-b9a5-b1014f6c1885.png#clientId=ude81206c-de48-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=284&id=ue52df401&margin=%5Bobject%20Object%5D&name=image.png&originHeight=568&originWidth=1088&originalType=binary&ratio=1&rotation=0&showTitle=false&size=70874&status=done&style=stroke&taskId=u03e591ec-c6a2-4978-a9b6-d32cdaeaa79&title=&width=544)

**点击第一个 **`**index.js:1**`**：**
![image.png](https://cdn.nlark.com/yuque/0/2022/png/2331396/1665032288208-80d19482-bd4e-40fa-bb0e-bc1f4650c979.png#clientId=ude81206c-de48-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=284&id=u434434d2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=568&originWidth=1088&originalType=binary&ratio=1&rotation=0&showTitle=false&size=81270&status=done&style=stroke&taskId=udd129c9d-f3b6-4666-8107-dd0d69ae769&title=&width=544)

不难发现，此时定位到的是原始的打包之前的文件 `./src/a.js` 中的内容。

这是这么做到的呢？明明导入的是 `./dist/main.js`，为什么可以定位到源文件呢？
我们先来看看 `eval` 中都写了些什么：`eval("console.log('module a')\nmodule.exports = 'a'\n\n//# sourceURL=webpack://22-10-06/./src/a.js?")`
其实这个注释 —— `# sourceURL=webpack://22-10-06/./src/a.js?`，就是在告诉浏览器，这个 eval 里边的代码，它是来源于 `22-10-06/./src/a.js` 的，浏览器能够识别这部分注释信息，并定位到对应的文件。倘若我们打包结果中，某个模块中的某条语句出现了错误，那么也能够准确的定位到对应的位置。

#### 不利于调试

**下面，我们将导入自己封装的 **`**./dist/my-main.js**`** 来试试看：**
```html
<!-- ./dist/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <title>22-10-06</title>
</head>
<body>
  <!-- <script src="./main.js"></script> -->
  <script src="./my-main.js"></script>
</body>
</html>
```

![image.png](https://cdn.nlark.com/yuque/0/2022/png/2331396/1665032711938-b548cf78-2117-4aa5-bb34-7d23893c77f3.png#clientId=ude81206c-de48-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=391&id=u3e8f27b4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=782&originWidth=1524&originalType=binary&ratio=1&rotation=0&showTitle=false&size=101366&status=done&style=stroke&taskId=u43b80e1a-0b68-4b1d-a9af-072796bd617&title=&width=762)

![image.png](https://cdn.nlark.com/yuque/0/2022/png/2331396/1665032740047-9f287e9f-42ca-4458-8e37-2aee6d54b836.png#clientId=ude81206c-de48-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=391&id=u785cd489&margin=%5Bobject%20Object%5D&name=image.png&originHeight=782&originWidth=1524&originalType=binary&ratio=1&rotation=0&showTitle=false&size=170377&status=done&style=stroke&taskId=u7eacc036-f408-4fd8-9dc0-98546391720&title=&width=762)

定位到的是打包之后的结果代码，相较于前者，这显然是不便于调试的。


