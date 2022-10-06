const es6ModuleA = require('./es6ModuleA')
import commonjsModuleA from './commonjsModuleA'

const test = () => {
  console.log('./src/index.js')

  console.log('typeof es6ModuleA => ', typeof es6ModuleA)
  console.log('es6ModuleA.a => ', es6ModuleA.a)
  console.log('es6ModuleA.b => ', es6ModuleA.b)
  console.log('es6ModuleA.default => ', es6ModuleA.default) // 注意：如果使用 commonjs 的 require 来导入的话，es6 的默认导出，将会作为 es6ModuleA 的 default 属性被导入。不要误以为变量 es6ModuleA 存放的值就是默认导出的 3

  console.log('commonjsModuleA.a => ', commonjsModuleA.a)
  console.log('commonjsModuleA.b => ', commonjsModuleA.b)
  console.log('commonjsModuleA.c => ', commonjsModuleA.c)
}

test()
/* 打印结果：
./src/index.js
typeof es6ModuleA =>  object
es6ModuleA.a =>  1
es6ModuleA.b =>  2
es6ModuleA.default =>  3
commonjsModuleA.a =>  1
commonjsModuleA.b =>  2
commonjsModuleA.c =>  3
*/