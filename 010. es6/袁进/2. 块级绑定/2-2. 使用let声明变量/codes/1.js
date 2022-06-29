/*
全局环境中 用 let 声明的变量不会挂载到全局对象
*/
var a = '123';
console.log(window.a); // 123

let b = '456';
console.log(window.b); // undefined