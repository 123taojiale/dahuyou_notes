/*
换一种方式来改写 Function.prototype[Symbol.hasInstance]
*/
function A() {}

Object.defineProperty(A, Symbol.hasInstance, {
  value() {
    return false;
  }
});

const obj = new A();
obj instanceof A; // => false
A[Symbol.hasInstance](obj); // => false