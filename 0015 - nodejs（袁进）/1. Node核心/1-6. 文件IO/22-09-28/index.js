const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./1.json");

const data = [{ name: "test", height: 100 }];

(async () => {
  await fs.promises.writeFile(filename, JSON.stringify(data));
  console.log("文件写入成功");
  const result = await fs.promises.readFile(filename, "utf-8");
  console.log(result, typeof result, JSON.parse(result));
})();
