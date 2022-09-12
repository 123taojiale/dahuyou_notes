const fs = require("fs");
const path = require("path");
const filename = path.resolve(__dirname, "./myDirectory/2.txt");
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

/*
向指定文件中写入 3kb 的数据
*/
let i = 0;

function write() {
  let flag = true;
  while (i < 3 * (2 ** 10) && flag) {
    falg = ws.write('2');
    i++;
  }
}

write();

ws.on("drain", () => {
  write();
});

ws.end("已全部写入"); // ws.end() 函数的参数将作为最后一次写入的数据写入文件