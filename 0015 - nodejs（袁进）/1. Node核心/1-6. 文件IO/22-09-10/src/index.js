const fsPromises = require('fs/promises'),
  path = require('path'),
  filename = path.resolve(__dirname, '../1.txt');

(async () => {
  const content = await fsPromises.readFile(filename, 'utf-8', '../1.txt')
  console.log(content) // => this is 1.txt file content.
})()

// 补充：fs/promises 模块，在 Node.js v14 之后就支持了，看个人习惯吧，如果使用 fs.promises 的方式来写 Promise 方式的 fs 模块，会感觉到不习惯的话，那么完全可以直接导入 fs/promises 模块来使用。注意下 Node.js 的版本 >= v14
// const fs = require('fs')
// console.log(fs.promises.readFile === fsPromises.readFile) // => true