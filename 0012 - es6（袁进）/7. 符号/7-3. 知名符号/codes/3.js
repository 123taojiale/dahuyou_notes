/*
尝试通过知名符号 Symbol.hasInstance 来改写 instanceof 操作符的行为。
*/
function A() { }

A[Symbol.hasInstance] = function () {
  return false;
}

const obj = new A();
obj instanceof A; // => true
A[Symbol.hasInstance](obj); // => true