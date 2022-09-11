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

注意：
1. 只能读取到第一层
2. 目录是一个特殊的文件，所以目录也会被读取到
*/