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
data
注册该事件，才会读数据
没读取一块数据，事件就会触发一次，它会反复触发。
*/
rs.on("data", (chunk) => {
  console.log(chunk);
});

/*
end
全部数据读取完毕时触发 end 事件
end 事件会在文件被关闭之前触发
*/
rs.on("end", () => {
  console.log("have got all content from file");
});