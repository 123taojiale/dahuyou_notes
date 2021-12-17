console.log(this === exports); // => true
console.log(this === module.exports); // => true
module.exports = {}; // 重新改变 module.exports 的指向
console.log(this === exports); // => true
console.log(this === module.exports); // => false
// 最终返回的是 module.exports