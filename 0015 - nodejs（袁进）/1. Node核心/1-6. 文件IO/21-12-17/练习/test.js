const File = require("./index.js");
const path = require("path");

async function readDir(dirname) {
  const file = await File.getFile(dirname); // 初始化一个 File 实例
  return await file.getChildren(); // 读取当前目录下的所有文件和目录（不是深度获取）
}

// 尝试读取 sub 目录下的文件对象
async function test() {
  const dirname = path.resolve(__dirname, "./myDirectory");
  const all = await readDir(dirname); // 读取 myDirectory 目录下的所有直接子文件
  console.log('all => ', all)
  const subDir = all.filter(item => item.name === 'sub')[0]; // 查找 sub 目录
  const subFiles = await subDir.getChildren(); // 读取 sub 目录下的所有直接子文件
  const targetFile = subFiles.filter(item => item.name === 'sub.1.txt')[0]; // 查找查找目标文件 sub.1.txt
  const content = await targetFile.getContent(); // 读取目标文件中的内容
  console.log(content); // => this is sub.1.txt file
}

test();

/*
all =>  [
  File {
    filename: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-6. 文件IO/codes/练习/myDirectory/1.txt',
    name: '1.txt',
    ext: '.txt',
    isFile: true,
    size: 18,
    createTime: '2022/6/28 18:55:35',
    updateTime: '2022/6/28 18:55:35'
  },
  File {
    filename: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-6. 文件IO/codes/练习/myDirectory/3.js',
    name: '3.js',
    ext: '.js',
    isFile: true,
    size: 33,
    createTime: '2022/6/28 18:55:35',
    updateTime: '2022/6/28 18:55:35'
  },
  File {
    filename: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-6. 文件IO/codes/练习/myDirectory/sub',
    name: 'sub',
    ext: '',
    isFile: false,
    size: 96,
    createTime: '2022/6/28 18:55:35',
    updateTime: '2022/6/28 18:55:35'
  }
]
*/