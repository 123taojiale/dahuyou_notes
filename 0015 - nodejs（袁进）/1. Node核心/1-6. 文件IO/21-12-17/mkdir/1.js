const fs = require("fs");
const path = require("path");
const dirname = path.resolve(__dirname, "./myDirectory/1");
(async () => {
  await fs.promises.mkdir(dirname);
  console.log("目录创建成功");
})()

/*
创建 "./myDirectory/1" 的前提是："./myDirectory" 存在

如果 "./myDirectory" 不存在的话，是会报错的。
*/