function A() {}
const obj = new A();
obj instanceof A; // => true
A[Symbol.hasInstance](obj); // => true