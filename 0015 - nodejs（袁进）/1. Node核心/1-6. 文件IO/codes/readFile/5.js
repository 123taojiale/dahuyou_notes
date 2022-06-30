const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./test/a.txt");

(async () => {
  const data = await fs.promises.readFile(filename, {
    encoding: 'utf-8'
  });
  console.log(data); // => abc 先输出
  console.log("123"); // => 123 后输出
})()