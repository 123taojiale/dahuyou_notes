const fs = require("fs");
const path = require("path");

/*
批量创建目录
*/
(async () => {
  for (let i = 1; i <= 5; i++) {
    await fs.promises.mkdir(path.resolve(__dirname, "./myDirectory/2-" + i));
    console.log(`目录2-${i}创建成功`);
  }
})();