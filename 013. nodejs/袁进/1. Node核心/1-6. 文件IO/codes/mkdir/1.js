const fs = require("fs");
const path = require("path");
const dirname = path.resolve(__dirname, "./myDirectory/1");
(async () => {
  await fs.promises.mkdir(dirname);
  console.log("目录创建成功");
})()