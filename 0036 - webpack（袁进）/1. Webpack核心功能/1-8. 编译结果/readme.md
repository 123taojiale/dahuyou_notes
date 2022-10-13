
- [x] 了解 webpack 的编译过程

## 0. 前言

![image.png](https://cdn.nlark.com/yuque/0/2022/png/2331396/1665131063843-e1e2ff91-d52b-452b-a15c-0f720764f53a.png#clientId=ue305d278-167b-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=293&id=u0da32fbb&name=image.png&originHeight=585&originWidth=1554&originalType=binary&ratio=1&rotation=0&showTitle=false&size=77123&status=error&style=stroke&taskId=u87526036-4b8c-447f-9300-0e89d2640b7&title=&width=777)

webpack 的作用是将源代码编译（构建、打包）成最终代码，webpack 编译的整个过程大致分为三个步骤：

1. 初始化
2. 编译
3. 输出

![](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210612160709.png#crop=0&crop=0&crop=1&crop=1&id=tAFN2&originHeight=194&originWidth=987&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=stroke&title=)

> 下面要介绍的这3个步骤，是经过简化的，实际情况要还要复杂很多。


## 1. 初始化

此阶段，webpack 会将 **CLI 参数**、**配置文件**、**默认配置 **进行融合，形成一个最终的配置对象。对配置的处理过程是依托一个第三方库`yargs`完成的。此阶段相对比较简单，主要是为接下来的编译阶段做必要的准备。目前，可以简单的理解为：初始化阶段主要用于产生一个最终的配置。

## 2. 编译

### 2.1 创建 chunk

chunk 是 webpack 在内部构建过程中的一个概念，译为`块`，chunk 表示**通过某个入口找到的所有依赖的统称**。

根据入口模块（默认为 `./src/index.js` ）创建一个 chunk。

![](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210612160721.png#crop=0&crop=0&crop=1&crop=1&height=261&id=GKIHQ&originHeight=521&originWidth=691&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=stroke&title=&width=346)

**每个 chunk 都有至少两个属性：**

- name：默认为 main
- id：唯一编号 
   - 开发环境：id 和 name 相同
   - 生产环境：id 是一个从 0 开始的数字

注意：chunk 可以有多个

### 2.2 构建所有依赖模块

![](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210612160738.png#crop=0&crop=0&crop=1&crop=1&height=252&id=g0kra&originHeight=504&originWidth=951&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=stroke&title=&width=476)

![](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210612160731.png#crop=0&crop=0&crop=1&crop=1&id=koeYg&originHeight=693&originWidth=1269&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=stroke&title=)

> AST在线测试工具：[https://astexplorer.net/](https://astexplorer.net/)


```javascript
// ./src/index.js
console.log('index');
require('./a');
require('./b');
```
```javascript
// ./src/a.js
require('./b');
console.log('a');
module.exports = 'a';
```
```javascript
// ./src/b.js
console.log('b');
module.exports = 'b';
```

**编译过程：**

1. 加载入口模块 `./src/index.js`
2. 检查是否加载
3. 未加载
4. 读取文件内容
5. AST 语法分析，生成 AST 树
6. 遍历 AST 树
7. 找到所有依赖
8. 将所有依赖保存到数组变量 `dependencies` 中 `['./src/a.js', './src/b.js']` 
9. 替换依赖函数：`require('./a');` 替换为 `__webpack_require__('./src/a.js');`
10. 递归 `dependencies`
11. 加载模块 `./src/a.js`
12. 检查...

**最终会形成下面这样的一张表格：**

| **模块ID** | **转换后的代码** |
| --- | --- |
| `./src/index.js` | ![](https://cdn.nlark.com/yuque/0/2022/png/2331396/1665138093329-344edde1-1219-4dc7-b319-d45f3f649302.png#clientId=u0eeec879-bb3e-4&crop=0&crop=0&crop=1&crop=1&height=88&id=PvN7m&originHeight=175&originWidth=755&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=stroke&taskId=u8c2c890c-336c-49ce-a7c6-a2c0d7113f2&title=&width=378) |
| `./src/a.js` | ![image.png](https://cdn.nlark.com/yuque/0/2022/png/2331396/1665131080435-72aa5a9d-ee60-4f55-a9d3-da5b26f7d365.png#clientId=ue305d278-167b-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=88&id=UX2z0&name=image.png&originHeight=175&originWidth=755&originalType=binary&ratio=1&rotation=0&showTitle=false&size=19811&status=error&style=stroke&taskId=u0e482580-fccf-4d78-aab5-a751e786dcd&title=&width=377.5) |
| `./src/b.js` | ![](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210612165101.png#clientId=u0eeec879-bb3e-4&crop=0&crop=0&crop=1&crop=1&height=65&id=hsuQe&originHeight=130&originWidth=482&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=stroke&taskId=u2ae6548e-6f03-44aa-b676-6fafe288a32&title=&width=241) |


#### 验证打包结果

目前的工程结构如下：
```shell
.
├── dist
│   └── main.js
├── package-lock.json
├── package.json
├── readme.md
├── src
│   ├── a.js
│   ├── b.js
│   └── index.js
└── webpack.config.js
```

**package.json 记录的相关版本信息：**
```json
{
  "name": "22-10-07",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0"
  }
}
```

**模块内容：**
```javascript
// ./src/index.js
console.log('index');
require('./a');
require('./b');
```
```javascript
// ./src/a.js
require('./b');
console.log('a');
module.exports = 'a';
```
```javascript
// ./src/b.js
console.log('b');
module.exports = 'b';
```

将 webpack 配置文件 `webpack.config.js` 配置为：
```javascript
module.exports = {
  mode: 'development',
  devtool: false
}
```

执行 `npx webpack` 命令进行打包，查看一下 `main.js` 文件内容，即可查看到对应模块转换后的代码是长啥样的：
```javascript
;(() => {
  // webpackBootstrap
  var __webpack_modules__ = {
    './src/a.js': (module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__('./src/b.js')
      console.log('a')
      module.exports = 'a'
    },

    './src/b.js': module => {
      console.log('b')
      module.exports = 'b'
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

  var __webpack_exports__ = {}
  ;(() => {
    console.log('index')
    __webpack_require__('./src/a.js')
    __webpack_require__('./src/b.js')
  })()
})()

```


> 该表格对应的内容：就是在 `2-5. 编译结果分析` 中的 modules，即：传递给 立即执行函数 的参数。


### 2.3 产生 chunk assets

在第二步完成后，chunk 中会产生一个模块列表，列表中包含了**模块id **和 **模块转换后的代码**。

接下来，webpack 会根据配置，为 chunk 生成一个资源列表，即 `chunk assets`，资源列表可以理解为是生成到最终文件的文件名和文件内容。
![](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210612160759.png#crop=0&crop=0&crop=1&crop=1&id=fG0yU&originHeight=445&originWidth=1214&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=stroke&title=)
![](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210612160750.png#crop=0&crop=0&crop=1&crop=1&id=lsZKO&originHeight=493&originWidth=1242&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=stroke&title=)

> chunk hash 是根据所有 chunk assets 的内容生成的一个 hash 字符串。
>  
> hash：一种算法，具体有很多分类，特点是将一个任意长度的字符串转换为一个固定长度的字符串，而且可以保证原始内容不变，产生的 hash 字符串就不变。


### 2.4 合并 chunk assets

将多个 chunk 的 assets 合并到一起，并产生一个总的 hash。

![](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210612160812.png#crop=0&crop=0&crop=1&crop=1&id=PzBEj&originHeight=658&originWidth=977&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=stroke&title=)

## 3. 输出

此步骤非常简单，webpack 将利用 node 中的 fs 模块（文件处理模块），根据编译产生的总的 assets，生成相应的文件。

![](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210612160820.png#crop=0&crop=0&crop=1&crop=1&id=gLOvq&originHeight=611&originWidth=829&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=stroke&title=)

## 4. 总过程

![image.png](https://cdn.nlark.com/yuque/0/2022/png/2331396/1665131106314-c16ef094-6be7-4f22-b870-cce70d0c88da.png#clientId=ue305d278-167b-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=305&id=u4f301e90&name=image.png&originHeight=609&originWidth=1250&originalType=binary&ratio=1&rotation=0&showTitle=false&size=55616&status=error&style=stroke&taskId=u48b363e5-f75c-4445-a1f1-ce1f28ce5c7&title=&width=625)

![](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210612160834.png#crop=0&crop=0&crop=1&crop=1&id=RFmkW&originHeight=693&originWidth=1269&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=stroke&title=)

**涉及术语：**

1. `module`：模块，分割的代码单元，webpack 中的模块可以是任何内容的文件，不仅限于 JS
2. `chunk`：webpack 内部构建模块的块，一个 chunk 中包含多个模块，这些模块是从入口模块通过依赖分析得来的
3. `bundle`：chunk 构建好模块后会生成 chunk 的资源清单，清单中的每一项就是一个 `bundle`，可以认为 `bundle` 就是最终生成的文件
4. `hash`：最终的资源清单所有内容联合生成的 `hash` 值
5. `chunkhash`：chunk 生成的资源清单内容联合生成的 `hash` 值
6. `chunkname`：chunk 的名称，如果没有配置则使用 `main`
7. `id`：通常指 chunk 的唯一编号，如果在开发环境下构建，和 `chunkname` 相同；如果是生产环境下构建，则使用一个从 `0` 开始的数字进行编号

## 小结

- 初始化：合并配置
- 编译：合并模块
- 输出：生成文件

**重点：**就是理解 👇🏻 下面这两张图

![image.png](https://cdn.nlark.com/yuque/0/2022/png/2331396/1665131094846-2226609e-f087-40a7-a827-b9c4b3121ea1.png#clientId=ue305d278-167b-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=305&id=u22d7b4b0&name=image.png&originHeight=609&originWidth=1250&originalType=binary&ratio=1&rotation=0&showTitle=false&size=55616&status=error&style=stroke&taskId=u94d334cf-9413-49dd-b444-9088f0cb4d0&title=&width=625)

![](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210612160834.png#crop=0&crop=0&crop=1&crop=1&id=awL7s&originHeight=693&originWidth=1269&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=stroke&title=)

**不理解的点：**

- 为什么 chunk 可能会有多个呢？入口文件不就一个嘛？
