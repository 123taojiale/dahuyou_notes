const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./test/sub/5.txt");

fs.promises.writeFile(filename, '123')
  .then(() => {
    console.log('写入成功');
  }).catch(err => {
    console.error(err);
  });
/*
若指定目录下的文件不存在，那么在写入时，会自动帮我们新建一个文件。
但是，若目录不存在，那么是不会新建目录的，会报错：
[Error: ENOENT: no such file or directory, open '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-6. 文件IO/21-12-17/writeFile/test/sub/5.txt'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-6. 文件IO/21-12-17/writeFile/test/sub/5.txt'
}

补充：
🤔 ENOENT 是啥意思呢？

ENOENT 表示：不存在这样的目录或文件 no such file or directory

ENOENT 的全称：
1. Error NO ENTry 错误，无法进入
2. Error NO ENTity 错误，没有实体
*/