/* __dirname 和 __filename */
console.log('__dirname => ', __dirname) // __dirname => /Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-2. 全局对象/22-09-09
console.log('__filename => ', __filename) // __filename => /Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-2. 全局对象/22-09-09/index.js

console.log(global.__dirname) // => undefined
console.log(global.__filename) // => undefined
// 注意，__dirname 并非 global 对象身上的属性，打印 global.__dirname 得到的是 undefined，至于为什么可以访问到它们，学完 1-3 就知道了。
// __filename 和 __dirname 类似，不过 __filename 更加精确，__filename 可以精确到文件的位置，而 __dirname 是精确到文件所在的目录位置。__dirname、__filename 都与命令提示符所在位置无关