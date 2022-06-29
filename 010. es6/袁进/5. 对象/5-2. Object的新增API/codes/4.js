const obj1 = {
  name: 'dahuyou'
}

const obj2 = {
  age: '18'
}

Object.setPrototypeOf(obj1, obj2); // 感觉这么写 可读性好差 还是下面这种写法的可读性好
// obj1.__proto__ = obj2;

obj1; // => { name: 'dahuyou' }
obj1.age; // => 18
obj1.__proto__ === obj2; // => true