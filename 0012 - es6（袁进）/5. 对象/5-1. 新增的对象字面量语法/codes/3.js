const prop1 = 'name',
  prop2 = 'age',
  prop3 = 'sayHello';

const user = {
  [prop1]: 'dahuyou',
  [prop2]: 18,
  [prop3]() {
    console.log(this.name, this.age);
  }

  // 下面这种做法 会报错: Uncaught SyntaxError: Unexpected template string
  // `${prop1}`: 'dahuyou', // 注意: 在书写对象字面量时 对象的属性名不能是模板字符串
}
user[prop3](); // dahuyou 18
console.log(user);

/* ES6 之前的写法 - 先创建好对象 再
const user = {};
user[prop1] = 'dahuyou';
user[prop2] = 18;
user[prop3] = function () {
  console.log(this.name, this.age);
}
*/