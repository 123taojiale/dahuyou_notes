/*
在使用 RegExp.prototype.test() 来测试的时候，若在开启了全局匹配模式的情况下，连续调用某个正则对象身上的 test 方法，会导致 lastIndex 发生变化。
*/
const str = 'abcabcabc';
const reg1 = /a/g;
console.log(reg1.test(str), reg1.lastIndex); // => true 1
console.log(reg1.test(str), reg1.lastIndex); // => true 4
console.log(reg1.test(str), reg1.lastIndex); // => true 7
console.log(reg1.test(str), reg1.lastIndex); // => false 0

const reg2 = /a/;
console.log(reg2.test(str), reg2.lastIndex); // => true 0
console.log(reg2.test(str), reg2.lastIndex); // => true 0
console.log(reg2.test(str), reg2.lastIndex); // => true 0
console.log(reg2.test(str), reg2.lastIndex); // => true 0