const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./test/a.txt");

fs.readFile(filename, "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data); // => abc
});

/*
fs.readFile

如果传入俩参数
- 第二个参数是一个「配置对象」（如果直接写一个字符串 "utf-8" 的话，相当于 { encoding: "utf-8" }）
- 第三个参数是一个「回调函数」
*/