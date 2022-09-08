console.log('./index.js')

// 绝对路径
require('\/Users\/huyouda\/Documents\/dahuyou_notes\/0015 - nodejs（袁进）\/1. Node核心\/1-3. Node的模块化细节\/22-09-06-1\/src\/1.js')

// 相对路径（不以 ./ 或 ../ 开头）
require('a') // 查找 node_modules 下的 a 模块，并读取 package.json 中的 main 字段来补全入口
require('fs') // 如果导入的是 Node.js 内置模块，那么会直接掉入，压根就不会鸟我们手写的模块
require('b') // 查找 node_modules 下的 b，此时 ./src/node_modules 下同时存在 b.js 和 b/index.js，优先会将 b 视作一个文件，补全后缀，然后找文件是否存在，如果文件存在，则导入文件；如果没能找到匹配的文件，那么会将 b 视作一个目录，找对应的目录是否存在，然后通过 package.json 中的 main 字段来补全入口，导入指定文件。
require('b/index') // 查找 node_modules 下的 b 模块下的 index 模块，此时 b 将被视作一个目录，到 b 目录下找 index 模块，index 模块的查找逻辑：会先将 index 视作一个文件，同理，补全后缀找匹配的文件，如果文件存在，则导入文件；如果没能找到匹配的文件，那么会将 b 视作一个目录，找对应的目录是否存在，然后通过 package.json 中的 main 字段来补全入口，导入指定文件。
require('c') // 查找 node_modules 下的 c，此时 ./src/node_modules 和 ./node_modules 中都含有符合条件的模块，通过 module.paths 数组，我们可以得知：会先查前者 ./src/node_modules

// 相对路径（以 ./ 或 ../ 开头）
require('../2') // 会自动补全后缀 2.js
require('../2.js') // 导入上级目录中的 2.js（由于模块 2.js 已经导入过了，它是有缓存的，所以本次导入该模块，会直接返回缓存中的结果，并不会再去执行一遍 2.js 文件）
require('./1') // 此时 ./src/1/index.js 和 ./src/1.js 均符合要求，但是 1 首先会被识别为一个文件，和前边同理，补全后缀，找到则导入，没找到则将 1 视作一个目录，然后再去读取 package.json 中的 main 字段不全入口，导入指定文件。
require('./3') // 和 1 模块不同，此时只有 ./src/3/index.js 满足条件，不过一开始的查找逻辑也是一样的，会先将 3 视作一个文件，补全后缀，但是此时没法找到满足条件的文件，所以会将 3 视作一个目录，然后再去读取 package.json 中的 main 字段补全入口，导入指定文件，补全之后，最终将导入 ./src/3/index.js 文件


// 补充：文件后缀补全
require('./4') // 依次找 4.js 4.json 4.node
let module_5 = require('./5') // 依次找 5.js 5.json 5.node
console.log(module_5) // 由于没有找到 5.js，所以会去找 5.json
// PS：.node 文件不太了解，测试的时候有报错。


// 罗列几个颠覆认知的写法
require('1.js')
console.log(`require('1.js') 这种写法导入的模块是：${require.resolve('1.js')}`)
require('2.js')
console.log(`require('2.js') 这种写法导入的模块是：${require.resolve('2.js')}`)


// 🤔 如何查看绝对路径？
// 以 './1' 为例，查看传入的路径，最终转为绝对路径是啥：
// console.log(require.resolve('./1'))


// 🤔 如果要查 node_modules 目录，会不断地回查，那么先查哪个？后查哪个？
// 会从 module.paths 的头开始，一直查到尾
// console.log(module.paths)