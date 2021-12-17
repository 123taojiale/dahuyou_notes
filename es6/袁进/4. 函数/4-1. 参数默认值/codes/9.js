/*
形参和ES6中的 let 或 const 声明一样，具有作用域，并且根据参数的声明顺序，存在暂时性死区。
*/
function test(a, b) {
  let a = 1; // 该行报错
  console.log(a, b);
}

test(undefined, 1); // Uncaught SyntaxError: Identifier 'a' has already been declared