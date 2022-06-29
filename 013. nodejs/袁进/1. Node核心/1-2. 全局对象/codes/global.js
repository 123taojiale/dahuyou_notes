console.log(global);

/* 这里打印出来的仅仅是 global 对象身上的部分属性
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}
*/
// global 属性指向自身（在浏览器环境下的 全局对象 window 也是一样的）
console.log(global === global.global); // => true
console.log(global === global.global.global.global); // => true

// 我们在全局环境下的 this 指向一个空对象
console.log(this === global); // => false
console.log(this); // => {}