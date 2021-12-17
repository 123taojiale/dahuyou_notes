/*
每次调用 Symbol 函数得到的符号永远不相等，无论 符号描述 是否相同。
使用 typeof 检测符号类型的变量，得到的结果是 'symbol'。
*/
const syb1 = Symbol('123');
const syb2 = Symbol('123');

syb1; // => Symbol(123)
typeof syb1 === 'symbol'; // => true
syb1 === syb2; // => false