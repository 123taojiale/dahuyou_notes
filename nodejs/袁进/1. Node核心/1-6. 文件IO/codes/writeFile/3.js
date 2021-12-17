const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./test/3.txt");

(async () => {
  await fs.promises.writeFile(filename, "123");
  await fs.promises.writeFile(filename, "123", {
    encoding: "utf-8", // default value
    flag: "a", // append 表示在原内容的基础上追加内容
  });
  console.log("写入成功");
})();