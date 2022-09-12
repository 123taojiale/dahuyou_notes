const path = require('path'),
  fs = require('fs')

function test2() {
  const from_filename = path.resolve(__dirname, './avatar.jpg'),
    to_filename = path.resolve(__dirname, './avatar.copy2.jpg'),
    rs = fs.createReadStream(from_filename),
    ws = fs.createWriteStream(to_filename)

  console.time('复制')

  rs.on('data', (chunk) => {
    const flag = ws.write(chunk) // => 读一部分，写一部分
    if (!flag) rs.pause() // => 产生背压 - 暂停读取
  })

  ws.on('drain', () => rs.resume()) // => 管道清空 - 恢复读取

  rs.on('close', () => {
    ws.end() // => 文件内容读取完毕，手动关闭 ws
    console.timeEnd('复制')
  })
}

test2() // => 复制: 2.248ms