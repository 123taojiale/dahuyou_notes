/* global */
console.log('global === global.global => ', global === global.global === global.global.global.global) // => true
// global 属性指向自身（在浏览器环境下的 全局对象 window 也是一样的）