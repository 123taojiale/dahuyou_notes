const fs = require("fs");
const path = require("path");
const dirname = path.resolve(__dirname, "./myDirectory/sub");
const exists = require("./existsPloyfill.js");

(async () => {
  const isFind = await exists(dirname);
  if (isFind) {
    console.log("sub 目录已存在，创建失败。");
  } else {
    await fs.promises.mkdir(dirname)
    console.log("创建成功");
  }
})()