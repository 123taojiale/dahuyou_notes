// 传统方式
const fs = require("fs");
const path = require("path");

async function method1() {
  const from = path.resolve(__dirname, "./avatar.jpg");
  const to = path.resolve(__dirname, "./avatar.copy.jpg");
  console.time("传统方式");
  const content = await fs.promises.readFile(from);
  await fs.promises.writeFile(to, content);
  console.timeEnd("传统方式");
  console.log("copy success");
}

method1(); // => 3.196ms