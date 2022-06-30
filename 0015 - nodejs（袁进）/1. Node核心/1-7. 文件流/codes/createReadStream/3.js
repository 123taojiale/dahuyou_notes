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
使用流的方式，获取指定文件中的所有内容。
*/
let content = "";
rs.on("data", (chunk) => {
  content += chunk;
});

rs.on("end", () => {
  console.log("have got all content from file, the file content is => ", content);
});