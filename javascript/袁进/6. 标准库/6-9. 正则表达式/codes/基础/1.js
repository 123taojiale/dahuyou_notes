// 细节 new RegExp 和 RegExp 之间的区别
const reg1 = /\d{1,3}/;
const reg2 = new RegExp(reg1);
const reg3 = RegExp(reg1);
console.log(reg1); // => /\d{1,3}/
console.log(reg2); // => /\d{1,3}/
console.log(reg3); // => /\d{1,3}/
console.log(typeof reg1); // => object
console.log(typeof reg2); // => object
console.log(typeof reg3); // => object
console.log(reg1 === reg2); // false
console.log(reg1 === reg3); // true