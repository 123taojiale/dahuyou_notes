console.log('__dirname => ', __dirname);
// __dirname => /Users/huyouda/Desktop/notes/nodejs/袁进/1. Node核心/1-2. 全局对象/codes

console.log(global.__dirname); // => undefined

// __dirname 可以精确获取到当前文件运行的 js 文件所在的目录
// 注意
// __dirname 并非 global 对象身上的属性，打印 global.__dirname 得到的是 undefined