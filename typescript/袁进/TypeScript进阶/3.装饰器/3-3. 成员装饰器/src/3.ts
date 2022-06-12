export {};

class A {}

const a = new A();

Object.defineProperty(a, "abc", {
  writable: false,
  value: "123",
  enumerable: false,
})