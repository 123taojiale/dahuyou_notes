/*
需求：对象浅度克隆
*/
const obj1 = {
  name: '成哥',
  age: 18,
  love: '邓嫂'
}

const obj2 = {
  ...obj1
}

/* 等价于下面这种写法
const obj2 = {
  name: obj1.name,
  age: obj1.age,
  love: obj1.love
}
*/
obj1; // => { name: '成哥', age: 18, love: '邓嫂' }
obj2; // => { name: '成哥', age: 18, love: '邓嫂' }
obj1 === obj2; // => false