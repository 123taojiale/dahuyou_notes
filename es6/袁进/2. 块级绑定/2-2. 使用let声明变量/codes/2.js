/*
let 声明的变量，不允许当前作用域范围内重复声明。
*/
let a;
let a; // Uncaught SyntaxError: Identifier 'a' has already been declared
// 未捕获的语法错误: 标识符 'a' 已经被声明过了