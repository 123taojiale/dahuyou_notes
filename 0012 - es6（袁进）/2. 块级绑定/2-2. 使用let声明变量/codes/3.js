/*
在块级作用域中用 let 定义的变量，在作用域外不能访问。
*/
if (1) {
  var a = 123;
}
console.log(a); // 123

if (1) {
  let a = 123;
}
console.log(a); // Uncaught ReferenceError: a is not defined
// 未捕获的引用错误 变量a 没有定义
// PS: ReferenceError 即: 引用错误 就是在作用域中找不到它