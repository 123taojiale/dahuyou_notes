/* [示例] 在封装插件的时候，一般都会用到对象混合。
配置对象中的参数，若默认配置对象中的值与用户传入的值有冲突，那么优先使用用户传入的值。
*/
// 用户传入的配置对象
let options = {
  width: '100',
  height: '100'
}

// 默认的配置对象
const defaultOptions = {
  width: '200',
  height: '200',
  color: '#008c8c'
}

options = {
  ...defaultOptions,
  ...options
}

options; // => { width: '100', height: '100', color: '#008c8c' }
defaultOptions; // => { width: '200', height: '200', color: '#008c8c' }