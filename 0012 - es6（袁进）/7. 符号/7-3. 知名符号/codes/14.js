class Person { };
const p = new Person();
const arr = [1, 3, 4];

Object.prototype.toString.apply(p); // => [object Object]
Object.prototype.toString.apply(arr); // => [object Array]