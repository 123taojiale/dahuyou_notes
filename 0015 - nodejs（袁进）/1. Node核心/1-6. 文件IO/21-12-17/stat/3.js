// 🤔 Node.js 该如何识别某个绝对路径，对应的到底是文件，还是目录呢？
// 通过 👇🏻 这俩 api 来判断
// stat.isFile()
// stat.isDirectory()

const path = require("path");
const fs = require("fs");
const filename = path.resolve(__dirname, "./test/1.js");

(async () => {
  const stat = await fs.promises.stat(filename)
  console.log(filename, '是一个', stat.isFile() ? '文件' : '目录')
})()
// /Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-6. 文件IO/21-12-17/stat/test/1.js 是一个 目录
/*
补充：发现一个有趣的现象 —— 不能创建同名的文件和目录。

本想测试一下，如果 ./test 目录下，同时存在 2.js 目录 和 2.js 文件的话，那么会如何处理呢？

但是，在 vscode 中，当我创建完一个 2.js 目录后，再去创建 2.js 文件，是不被允许的。

虽然，硬要创建它们，也是很简单的，但是感觉没有必要测试了，因为都提示这是不被允许的了。
*/