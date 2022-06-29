const obj = {
  name: '123',
  age: 18,
  20: '222',
  10: '111',
  30: '333'
}

Object.getOwnPropertyNames(obj); // => [ '10', '20', '30', 'name', 'age' ]