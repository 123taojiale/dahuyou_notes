// 流
const fs = require("fs");
const path = require("path");

async function method2() {
  const from = path.resolve(__dirname, "./avatar.jpg");
  const to = path.resolve(__dirname, "./avatar.copy.jpg");
  console.time("流");
  const rs = fs.createReadStream(from); // => 不限制每次读取的大小，使用默认值 16kb
  const ws = fs.createWriteStream(to); // => 不限制每次写入的大小，使用默认值 16kb
  /* start */
  rs.on("data", chunk => {
    const flag = ws.write(chunk); // 读一部分，写一部分
    if (!flag) rs.pause(); // 若下次写入会造成背压，那么停止读取
  });
  ws.on("drain", () => { // 当流中的内容清空后，继续读取。
    rs.resume();
  });
  rs.on("close", () => { // 写完了
    ws.end(); // 关闭写入流
    console.timeEnd("流"); // => 7.473ms
  });
  /* end */
  console.log("copy success");
}

method2();
/*
pipe
从 start 到 end，其实就是 rs.pipe(ws) 的原理。
*/