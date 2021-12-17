const fs = require("fs");
const path = require("path");

async function copy() {
  const fromFilename = path.resolve(__dirname, "./test1/avatar.jpg");
  const toFilename = path.resolve(__dirname, "./test2/avatar.copy.jpg");
  const buffer = await fs.promises.readFile(fromFilename)
  console.log("文件读取成功");
  fs.promises.writeFile(toFilename, buffer);
  console.log("文件写入成功");
}

copy();