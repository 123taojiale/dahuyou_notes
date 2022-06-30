const fs = require("fs");
const path = require("path");
const filename = path.resolve(__dirname, "./myDirectory/1.txt");
const rs = fs.createReadStream(filename, {
  encoding: "utf-8",
  highWaterMark: 1,
  autoClose: true,
});

rs.on("open", () => {
  console.log("open success");
});

rs.on("error", (err) => {
  console.log(err);
});

rs.on("close", () => {
  console.log("close success");
});

/*
一秒读一次
*/
let content = "";
rs.on("data", (chunk) => {
  content += chunk;
  console.log("本次读取到的内容：", chunk);
  rs.pause(); // 暂停
});

rs.on("pause", () => {
  console.log("pause");
  setTimeout(() => {
    rs.resume(); // 恢复
  }, 1000);
});

rs.on("resume", () => {
  console.log("resume");
});

rs.on("end", () => {
  console.log("have got all content from file, the file content is => ", content);
});