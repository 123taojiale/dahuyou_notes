console.log('__filename => ',__filename);
// __filename =>  /Users/huyouda/Desktop/notes/nodejs/袁进/1. Node核心/1-2. 全局对象/codes/__filename.js

console.log(global.__filename); // => undefined

// 精确到文件 __filename.js 的位置
// 获取当前模块的文件路径。它和 __dirname 一样，都不是 global 对象的属性。