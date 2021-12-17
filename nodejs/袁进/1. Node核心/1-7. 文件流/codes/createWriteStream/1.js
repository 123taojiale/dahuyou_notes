const fs = require("fs");
const path = require("path");
const filename = path.resolve(__dirname, "./myDirectory/1.txt");
const ws = fs.createWriteStream(filename, {
  encoding: "utf-8",
  highWaterMark: 1, // => 表示一次写一个字节，一个中文占 3 个字节，需要写 3 次。
  autoClose: true,
});

ws.on("open", () => {
  console.log("open success");
});

ws.on("error", (err) => {
  console.log(err);
});

ws.on("close", () => {
  console.log("close success");
});

let content = "test content";
let flag = ws.write(content);
console.log(flag); // => false（背压）