const fs = require("fs");
const path = require("path");
const dirname = path.resolve(__dirname, "./myDirectory");
(async() => {
  const result = await fs.promises.readdir(dirname);
  console.log(result); // => [ '1.css', '1.html', '1.js', '1.txt', 'sub' ]
})();
/*
readdir
获取指定目录下的直接子目录和子文件
*/