const fs = require("fs");
const path = require("path");
const filename = path.resolve(__dirname, "./myDirectory/1.txt");
const rs = fs.createReadStream(filename, {
  encoding: "utf-8",
  highWaterMark: 1, // => 每次读取一个字符
  autoClose: true, // => 读完后自动关闭文件 default value => true
});

rs.on("open", () => {
  console.log("open success");
});

rs.on("error", (err) => {
  // 出现错误的情况有可能，比如：filename 不存在
  console.log(err);
});

rs.on("close", () => {
  console.log("close success");
});

// 手动关闭文件
// rs.close();