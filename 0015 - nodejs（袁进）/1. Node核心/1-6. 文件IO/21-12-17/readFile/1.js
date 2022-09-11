const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./test/a.txt");

fs.readFile(filename, (err, data) => {
  if (err) throw err;
  console.log(data); // => <Buffer 61 62 63>
  console.log(data.toString("utf-8")); // => abc
});

/*
读取文件是异步的，123 会先输出。
*/
console.log('123'); // => '123'

/*
fs.readFile

如果传入俩参数，那么第二个参数是一个回调函数
*/