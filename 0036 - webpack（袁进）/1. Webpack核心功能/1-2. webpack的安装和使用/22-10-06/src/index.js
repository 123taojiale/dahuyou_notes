const es6ModuleA = require('./es6ModuleA')
const commonjsModuleA = require('./commonjsModuleA')

const test = () => {
  console.log('./src/index.js')
  console.log('es6ModuleA => ', es6ModuleA.default)
  console.log('commonjsModuleA => ', commonjsModuleA)
}

test()
/* 输出：
./src/index.js
es6ModuleA =>  es6ModuleA
commonjsModuleA =>  commonjsModuleA
*/