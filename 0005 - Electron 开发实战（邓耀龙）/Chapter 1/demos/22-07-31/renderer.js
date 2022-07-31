// console.log(require('fs').promises.readFile)

const fs = require('fs');

(async () => {
  const fileContent = await fs.promises.readFile('./index.html', 'utf-8')
  console.log('index.html content => ')
  console.log(fileContent)
})()

// 可以直接在控制台输入以下内容来测试：
// require('fs').promises.readFile('./index.html', 'utf-8').then((content) => console.log(content))