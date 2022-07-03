// 练习题1：打印结果是？
const s1 = "123abc";
const s2 = "123abc";
const s3 = "123abc";

const reg = /\d+/gmi;

console.log(reg.test(s1)); // => true
console.log(reg.test(s2)); // => false
console.log(reg.test(s3)); // => true