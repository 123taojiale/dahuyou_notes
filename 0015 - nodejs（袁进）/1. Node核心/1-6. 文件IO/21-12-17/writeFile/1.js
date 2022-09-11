const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./test/1.txt");

(async () => {
  // 下面这 3 种写法都是等效的
  await fs.promises.writeFile(filename, "123");
  // await fs.promises.writeFile(filename, "123", "utf-8");
  // await fs.promises.writeFile(filename, "123", {
  //   encoding: "utf-8", // default value
  // });
  console.log("写入成功");
})();
/*
在执行文件写操作时，若文件不存在，则会创建文件。

🤔 如何创建一个文件？比如此时需要在 test 目录下边，新建一个名为 22-09-11.js 的空文件

(async () => {
  await fs.promises.writeFile(path.resolve(__dirname, './test/22-09-11.js'), '')
  console.log('文件创建成功')
})()

很简单，往该目录下的 22-09-11.js 文件写入一个空字符串即可，如果 22-09-11.js 文件不存在，那么会创建该文件。
PS：不过，前提是得确保 test 目录存在
*/