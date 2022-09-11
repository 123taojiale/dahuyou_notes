const path = require("path");
const fs = require("fs");
const filename = path.resolve(__dirname, "./test/avatar.jpg");
/*
fs.stat()
作用：查看 文件/目录 的状态
*/
(async () => {
  const stat = await fs.promises.stat(filename);
  console.log(stat);
  console.log(stat.isDirectory()); // => false
  console.log(stat.isFile()); // => true
})();
/*
Stats {
  dev: 2385287624,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 1970324838523320,
  size: 50540,
  // => 占用的空间大小（字节 B）
  blocks: 104,
  atimeMs: 1634983332587.1226,
  mtimeMs: 1632722728518.9512,
  ctimeMs: 1634977470815.5757,
  birthtimeMs: 1634983332586.1194,
  atime: 2021-10-23T10:02:12.587Z,
  // => 上一次访问该文件的时间
  mtime: 2021-09-27T06:05:28.519Z,
  // => 上一次修改该文件的时间
  ctime: 2021-10-23T08:24:30.816Z,
  // => 上一次改变该文件状态（比如“访问权限”）的时间
  birthtime: 2021-10-23T10:02:12.586Z
  // => 该文件创建的时间
}
*/