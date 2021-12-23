console.log(process.cwd()); // => C:\Users\dahuyou\Desktop\fenotes\nodejs\袁进\1. Node核心\1-2. 全局对象\codes
// 获取到的是 node 命令执行的位置，与文件位置无关。
// process.cwd() 返回当前 nodejs 进程的工作目录，绝对路径。
// process 表示进程的意思，cwd 获取的就是该进程是在哪开启的，获取到的是 node 命令执行的位置。