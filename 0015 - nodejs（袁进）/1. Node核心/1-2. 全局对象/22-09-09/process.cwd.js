console.log(process.cwd());

/*
示例1：在 dahuyou_notes 目录下，使用 node 命令执行该模块
// => /Users/huyouda/Documents/dahuyou_notes

示例2：在 22-09-09 目录下，使用 node 命令执行该模块
// => /Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-2. 全局对象/22-09-09

process 表示进程的意思，cwd 获取的就是该进程是在哪开启的，获取到的是 node 命令执行的位置。

process.cwd() 返回当前 nodejs 进程的工作目录，绝对路径，获取到的是 node 命令执行的位置（命令提示符的位置），与文件位置无关。
*/