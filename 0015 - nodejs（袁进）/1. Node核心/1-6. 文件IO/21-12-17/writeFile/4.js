const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./test/4.txt");

(async () => {
  const buffer = Buffer.from("123", "utf-8");
  await fs.promises.writeFile(filename, buffer);
  console.log("写入成功");
})();
/*
我们也可以写入一个 buffer。
*/