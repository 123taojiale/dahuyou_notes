const fs = require("fs");
const path = require("path");
const filename = path.resolve(__dirname, "./1.txt");
/*
上节课忘记介绍的一个 api：unlink，用于删除文件。
*/
(async () => {
  await fs.promises.unlink(filename);
  console.log("delete file success");
})();