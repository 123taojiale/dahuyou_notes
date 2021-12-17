/*
需求：若使用调用普通函数的方式来调用一个构造函数，应该报错。
ES6 之前的处理方式：!(this instanceof Person)
  若 this 的原型链上没有构造函数 Person 的原型 Person.prototype 那么抛出错误。
  使用这种方式来实现，旧存在弊端，我们可以通过 call、apply、bind 来强行令 this 的原型链上有构造函数 Person 的原型 Person.prototype。但是我们依旧没有使用 new 关键字来调用。
*/
function Person(firstName, lastName) {
  if (!(this instanceof Person)) {
    throw new Error('没有使用 new 来调用 Person');
  }
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = `${firstName} ${lastName}`;
}
// 正确的调用：
const p1 = new Person('da', 'huyou');
// 错误的调用：
const p2 = Person('da', 'huyou'); // Uncaught Error: 没有使用 new 来调用 Person
const p3 = Person.call(p1, 'Da', 'huyou'); // 还把 p1 给改了...
/*
后面两次调用，都是错误的调用，但是使用 call 改变 this 指向之后的调用，并没有像我们预期的那样抛出错误。
instanceof
  对象 instanceof 构造函数
  true ==> 对象的原型链上 存在 构造函数的原型
  false ==> 对象的原型链上 不存在 构造函数的原型
*/