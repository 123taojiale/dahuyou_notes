// 流
const fs = require("fs");
const path = require("path");

async function method3() {
  const from = path.resolve(__dirname, "./avatar.jpg");
  const to = path.resolve(__dirname, "./avatar.copy.jpg");
  console.time("流");
  const rs = fs.createReadStream(from); // => 不限制每次读取的大小，使用默认值 16kb
  const ws = fs.createWriteStream(to); // => 不限制每次写入的大小，使用默认值 16kb
  rs.pipe(ws);
  console.timeEnd("流"); // => 4.275ms
  console.log("copy success");
}

method3();