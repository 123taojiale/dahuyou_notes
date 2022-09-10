console.log(process.argv);

/*
node process.argv.js a b c

[
  'xxx', // => nodejs 所在的位置
  'xxx', // => 当前模块所在的绝对路径
  'a', // => 执行命令时，传递的参数
  'b', // => 执行命令时，传递的参数
  'c' // => 执行命令时，传递的参数
]

我们在执行 node 命令的时候，传入的相关参数 a b c 可以由 process.argv 接收到

获取当前模块的绝对路径：process.argv[1]
获取 Node.js 的位置：process.argv[0]
*/