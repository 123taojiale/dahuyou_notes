/* part1 */
// console.log(require("./myModule1.js")); // => { a: 1, b: 2 }
// console.log(require("./myModule2.js")); // => { a: 1, b: 2 }
// console.log(require("./myModule3.js")); // => { c: 3, a: 1, b: 2, m: 5 }


/* part2 */
// require 原理（伪代码）
// function myRequire(modulePath) {
//   // 1
//   modulePath = require.resolve("./myModule1.js");
//   // 2
//   if (require.cache[modulePath]) {
//     // 有缓存，直接导出缓存。
//     return require.cache[modulePath];
//   }
//   // 3 + 4 没缓存，读取文件内容，并将文件内容封装到一个函数中。
//   function __temp(module, exports, require, __dirname, __filename) {
//     // 文件内容
//     console.log("当前模块路径：", __dirname);
//     console.log("当前模块文件：", __filename);
//     this.m = 5;
//     exports.c = 3;
//     module.exports = {
//       a: 1,
//       b: 2
//     };
//   }
//   // 5
//   module.exports = {};
//   const exports = module.exports;
//   __temp.call(module.exports, module, exports, require, module.path, module.filename)

//   return module.exports;
// }

/* part3 */
require("./练习.js");
