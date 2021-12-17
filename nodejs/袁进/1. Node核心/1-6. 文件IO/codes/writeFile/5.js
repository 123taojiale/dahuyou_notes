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
[Error: ENOENT: no such file or directory, open 'c:\Users\dahuyou\Desktop\url\writeFile\test\sub\5.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'c:\\Users\\dahuyou\\Desktop\\url\\writeFile\\test\\sub\\5.txt'
}
*/