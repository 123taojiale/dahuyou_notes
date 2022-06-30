// 创建正则对象的 3 种方式
const reg1 = /\d{1,3}/; // 字面量
const reg2 = new RegExp(reg1); // new RegExp
const reg3 = RegExp(reg1); // RegExp

// 打印正则规则
console.log(reg1); // => /\d{1,3}/
console.log(reg2); // => /\d{1,3}/
console.log(reg3); // => /\d{1,3}/

// 正则表达式本质上是一个对象，它最终是由 new RegExp 创建的实例对象
console.log(typeof reg1); // => object
console.log(typeof reg2); // => object
console.log(typeof reg3); // => object

// 细节 - new RegExp 和 RegExp 之间的区别
console.log(reg1 === reg2); // => false
console.log(reg1 === reg3); // => true