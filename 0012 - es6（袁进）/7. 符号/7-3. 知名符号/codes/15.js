class Person {
  [Symbol.toStringTag] = 'Person';
};
const p = new Person();
const arr = [1, 3, 4];
arr[Symbol.toStringTag] = 'dahuyou';

Object.prototype.toString.apply(p); // => [object Person]
Object.prototype.toString.apply(arr); // => [object dahuyou]