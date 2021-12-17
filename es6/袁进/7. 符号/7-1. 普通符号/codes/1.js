const syb1 = Symbol();
const syb2 = Symbol('abc');

console.log(syb1, syb2);
console.log('dahuyou');
/* Attention：
符号是一种新的数据类型，它并非字符串。
仔细观察会发现：控制台打印的符号的颜色和字符串的颜色是不同的。
*/