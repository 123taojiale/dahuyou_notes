/* 重复定义的对象属性
对象属性不能重复定义，若重复定义的话，那么之后定义的属性值会覆盖之前的。
利用这一特点，可以实现很多需求。
比如：对象混合。
既能确保源对象不变，又能创建一个新的对象。
这种操作在 React 中会很常见。
*/
const obj1 = {
  name: '成哥',
  age: 18,
  love: '邓嫂'
}

const obj2 = {
  ...obj1,
  name: '邓哥'
}

obj1; // => { name: '成哥', age: 18, love: '邓嫂' }
obj2; // => { name: '邓哥', age: 18, love: '邓嫂' }
obj1 === obj2; // => false