const path = require("path");
const fs = require("fs");
const filename = path.resolve(__dirname, "./test/avatar.jpg");

(async () => {
  const stat = await fs.promises.stat(filename);
  console.log(stat);
  console.log(stat.isDirectory()); // => true
  console.log(stat.isFile()); // => false
})();
/*
Stats {
  dev: 2385287624,
  mode: 16822,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 3096224745365943,
  size: 0,
  // => 会发现目录的 size 为 0，这是因为目录实质上并没有东西，它只不过记录了一些指针，通过指针找到对应目录下的所有文件。
  blocks: 0,
  atimeMs: 1634991083573.0378,
  mtimeMs: 1634983332586.1194,
  ctimeMs: 1634983335438.538,
  birthtimeMs: 1634983332585.8738,
  atime: 2021-10-23T12:11:23.573Z,
  mtime: 2021-10-23T10:02:12.586Z,
  ctime: 2021-10-23T10:02:15.439Z,
  birthtime: 2021-10-23T10:02:12.586Z
}

注意：目录也是文件，只不过比较特殊罢了。
*/