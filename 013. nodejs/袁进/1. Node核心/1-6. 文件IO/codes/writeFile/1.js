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
*/