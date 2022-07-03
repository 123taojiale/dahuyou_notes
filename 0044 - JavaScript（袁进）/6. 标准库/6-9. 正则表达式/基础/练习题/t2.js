// 练习题2：打印结果是？
const s1 = "123abc";
const s2 = "123abc";
const s3 = "123abc";

const reg = /\d+/gmi;

console.log(reg.test(s1)); // => true

reg.lastIndex = 0;
console.log(reg.test(s2)); // => true

reg.lastIndex = 0;
console.log(reg.test(s3)); // => true

/*
当连续使用正则表达式 reg 去匹配字符串时，要注意每次匹配后，都有可能会导致 lastIndex 发生变化。而 lastIndex 决定 reg 下次开始匹配的位置，这就会间接地影响到后续其它字符串的匹配。
*/