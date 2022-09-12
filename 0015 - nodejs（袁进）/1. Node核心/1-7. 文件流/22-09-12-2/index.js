const fs = require('fs')
const path = require('path')
const filename = path.resolve(__dirname, './1.txt')

const rs = fs.createReadStream(filename)

rs.on('open', () => console.log(filename, 'opened'))
rs.on('close', () => console.log(filename, 'closed'))

setTimeout(() => {
  fs.unlink(filename, () => {
    console.log(filename, 'deleted')
  })
}, 1000);