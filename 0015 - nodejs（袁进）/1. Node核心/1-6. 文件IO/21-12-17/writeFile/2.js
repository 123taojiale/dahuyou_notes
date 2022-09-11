const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./test/2.txt");

(async () => {
  await fs.promises.writeFile(filename, "123");
  await fs.promises.writeFile(filename, "123"); // 会覆盖第一次写入的内容
  console.log("写入成功");
})();