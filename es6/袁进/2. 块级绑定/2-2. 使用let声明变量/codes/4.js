/*
使用let不会有变量提升，因此，不能在定义 let 变量之前使用它。
*/
console.log(a); // undefined
var a = 123;

// let 声明的变量 声明之前无法访问
console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
let a = 123;
// 未捕获的引用错误: 无法在变量a初始化之前访问它