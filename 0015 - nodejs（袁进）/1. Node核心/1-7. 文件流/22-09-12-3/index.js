const fs = require('fs')
const path = require('path')
const os = require('os')
const filename = path.resolve(__dirname, './1.txt')
const rs = fs.createReadStream(filename)
const ws = fs.createWriteStream(filename, {
  // encoding: 'utf-8', // => 一次可以写入一个字符
  encoding: null, // => 一次只能写入一个字节
  highWaterMark: 1
})

ws.on('open', () => console.log('ws opened')) // => ws opened
rs.on('open', () => console.log('rs opened')) // => rs opened

ws.on('close', () => console.log('ws closeed')) // => ws closeed
rs.on('close', () => console.log('rs closeed')) // => rs closeed

const content = 'aaa测试bbb' // => 一个字母占一个字节，一个汉字占 3 个字节
ws.write(content)

setTimeout(() => {
  rs.close()
}, 1000);

setTimeout(() => {
  ws.end(`${os.EOL}=> 写入完毕`) // => 关闭文件，并将传入的参数作为最后需要写入的内容写入到指定文件中2
  // os.EOL 换行符 能适配不同的操作系统
}, 3000)

/*
补充：
1. 当我们使用流，往一个指定文件中写入内容时，会同时触发 ws open 和 rs open 事件
2. 调用 rs.close() 只会触发 rs 的 close 事件
3. 调用 ws.close() 只会触发 ws 的 close 事件
*/