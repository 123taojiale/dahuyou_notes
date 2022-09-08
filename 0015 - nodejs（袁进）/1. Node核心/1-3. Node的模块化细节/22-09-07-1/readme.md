# 浅析 nodejs 模块化实现原理

在 Node.js 中，使用 commonjs 模块化规范，是采用 require 函数来导入指定模块的。

**🤔 `require('xxx')` 这条命令下去，都发生了什么？**

```js
// 仿写一个 require 函数
function myRequire(modulePath) {
  // step1 - 将 xxx 转为绝对路径（一个绝对路径，对应的模块一定是唯一的，可以使用绝对路径作为模块的唯一标识）
  modulePath = require.resolve("./myModule1.js")

  // step2 - 查看 require 对象的缓存 require.cache 中是否含有该模块
  if (require.cache[modulePath]) return require.cache[modulePath] // 有缓存，则直接导出缓存，停止查找

  // step3 - 没缓存，则读取文件内容，并将文件内容封装到一个函数中
  function __temp(module, exports, require, __dirname, __filename) {
    // 文件内容直接丢到该函数中，作为该函数的函数体
    console.log("当前模块路径：", __dirname);
    console.log("当前模块文件：", __filename);
    this.m = 5;
    exports.c = 3;
    module.exports = {
      a: 1,
      b: 2
    };
  }

  // step4 - 给 module 对象初始化一个 exports 成员，最终要导出该成员
  module.exports = {};
  const exports = module.exports;

  __temp.call(module.exports, module, exports, require, module.path, module.filename) // 这一步很关键，它充分证明了一点：模块中的 module、this、exports、require、__dirname、__filename 都是啥。

  // step5 - 将 module.exports 导出
  return module.exports;
}
```

