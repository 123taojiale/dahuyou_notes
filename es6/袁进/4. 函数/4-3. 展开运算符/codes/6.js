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

options = Object.assign({}, defaultOptions, options);

options; // => { width: '100', height: '100', color: '#008c8c' }
defaultOptions; // => { width: '200', height: '200', color: '#008c8c' }
/*
我对 Object.assign() 的理解
Object.assign({}, defaultOptions, options); // 以该语句为例
  第一个参数是一个 {} 空对象 内存空间的地址假设为 a
  第二个参数是 defaultOptions对象
  第三个参数是 options对象
Object.assign() 做的事情就是
  1. 先把第二个对象给展开 然后把它的所有键值对 丢到 a 中
  2. 再把第三个对象给展开 同样地把它的所有键值对 丢到 a 中
  3. ...
  一旦发现了了冲突的键 那么 以后面丢进来的为准
  最后将 a 中的值返回
*/