const path = require("path");

/*
basename
path.basename() 方法返回 path 的最后一部分，类似于 Unix basename 命令。
*/
console.log(path.basename("a/b/c/a")); // => a
console.log(path.basename("a/b/c/a.asf")); // => a.asf
console.log(path.basename("a/b/c/a.html", ".html")); // => a
console.log(path.basename("a/b/c/a.asf", ".html")); // => a.asf

/*
delimiter
提供特定于平台的路径定界符
sep
提供特定于平台的路径片段分隔符
*/
console.log(process.env.PATH.split(path.delimiter));

/*
[
  'C:\\WINDOWS\\system32',
  'C:\\WINDOWS',
  'C:\\WINDOWS\\System32\\Wbem',
  'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
  'C:\\WINDOWS\\System32\\OpenSSH\\',
  'C:\\软件\\Git\\cmd',
  'C:\\Program Files\\nodejs',
  'C:\\Program Files\\nodejs',
  'C:\\Users\\dahuyou\\AppData\\Roaming\\npm',
  'C:\\Program Files (x86)\\NetSarang\\Xshell 7\\',
  'C:\\Program Files (x86)\\NetSarang\\Xftp 7\\',
  'C:\\Users\\dahuyou\\AppData\\Roaming\\npm\\vue.ps1',
  'C:\\Users\\dahuyou\\AppData\\Local\\Microsoft\\WindowsApps',
  'C:\\软件\\vscode\\bin',
  '"C:\\Users\\dahuyou\\AppData\\Roaming\\npm',
  'C:\\Program Files\\nodejs',
  '"',
  'C:\\Users\\dahuyou\\AppData\\Roaming\\npm\\vue.ps1',
  ''
]
*/

console.log(path.sep); // => \

/*
dirname
path.dirname() 方法返回 path 的目录名，类似于 Unix dirname 命令。
*/
console.log(path.dirname("a/b/c/d.js")); // => a/b/c
console.log(path.dirname("a/b/c/d")); // => a/b/c（这种写法，d 会被认为是一个无后缀名的文件）

/*
extname
获取文件的后缀名
*/
path.extname('index.html'); // => '.html'
path.extname('index.coffee.md'); // => '.md'
path.extname('index.'); // => '.'
path.extname('index'); // => ''
path.extname('.index'); // => ''
path.extname('.index.md'); // => '.md'
path.extname("a/b/c/a.js"); // => '.js'

/*
join
将多段路径拼接成一段路径
*/
console.log(path.join("a/b", "../", "d.js")); // => a\d.js

/*
relative
path.relative() 方法根据当前工作目录返回从 from 到 to 的相对路径。
*/
console.log(path.relative('/a/b/c/x', '/a/b/d/x')); // => ..\..\d\x

/*
resolve
path.resolve() 方法将路径或路径片段的序列解析为绝对路径。
*/
console.log(path.resolve(__dirname, "./a.js")); // => c:\Users\dahuyou\Desktop\fenotes\nodejs\袁进\1. Node核心\1-5. 基本内置模块\codes\path\a.js
