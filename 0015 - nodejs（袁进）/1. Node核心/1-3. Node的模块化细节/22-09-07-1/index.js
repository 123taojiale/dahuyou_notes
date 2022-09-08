console.log(this === exports) // => true
console.log(this === module.exports) // => true
module.exports = {} // 重新改变 module.exports 的指向
console.log(this === exports) // => true
console.log(this === module.exports) // => false

// 只要不给 this、exports 重新赋值，那么模块中的 this、exports 始终都是等的。具体原因 👉🏻 readme.md