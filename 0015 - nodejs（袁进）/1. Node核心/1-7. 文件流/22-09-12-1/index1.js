const path = require('path'),
  fs = require('fs')

function test() {
  const from_filename = path.resolve(__dirname, './avatar.jpg'),
    to_filename = path.resolve(__dirname, './avatar.copy1.jpg'),
    rs = fs.createReadStream(from_filename),
    ws = fs.createWriteStream(to_filename)

  console.time('复制')
  rs.pipe(ws)
  console.timeEnd('复制')
}

test() // => 复制: 2.461ms