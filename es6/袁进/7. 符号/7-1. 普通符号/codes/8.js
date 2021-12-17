const syb = Symbol();

const obj = {
  a: 1,
  b: 2,
  [syb]: 3
}

for (const prop in obj) {
  console.log(prop);
}

Object.keys(obj); // => ['a', 'b']
Object.getOwnPropertyNames(obj); // => ['a', 'b']
Object.getOwnPropertySymbols(obj); // => [Symbol()]
Object.getOwnPropertySymbols(obj)[0] === syb; // => true
obj[Object.getOwnPropertySymbols(obj)[0]]; // => 3