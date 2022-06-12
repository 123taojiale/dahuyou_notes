// import fs from "fs"; // 错误
import * as fs from "fs"; // 正确
import { readFileSync } from "fs" ; // 正确
// fs.readFileSync("./");
// readFileSync("./");
console.log(
  fs.readFileSync === readFileSync
); // => true