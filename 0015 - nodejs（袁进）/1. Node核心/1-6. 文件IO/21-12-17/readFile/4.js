const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./test/a.txt");

const data = fs.readFileSync(filename, "utf-8");
console.log(data); // => 'abc'

/*
Sync 表示同步
后续语句会被阻塞
123 会在读取到文件内容后输出
*/
console.log('123'); // => '123'
