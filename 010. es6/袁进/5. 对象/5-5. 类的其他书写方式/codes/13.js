/*
箭头函数的字段初始化器 和 函数表达式的字段初始化器
*/
class Test {
  a = 1;
  b = 2;

  print = () => {
    console.log(this.a);
  }

  print() {
    console.log(this.b);
  }
}
/* 等效写法：
class Test {
  constructor () {
    this.a = 1;
    this.b = 2;
    this.print = () => {
      console.log(this.a);
    }
  }

  print() {
    console.log(this.b);
  }
}
*/
const t = new Test();
const p = t.print;

t.print(); // => 1
p(); // => 1
Test.prototype.print.call(t); // => 2
/* 小结
箭头函数的字段初始化器 相当于写在 Person 的实例对象身上
函数表达式的字段初始化器 相当于写在 Person.prototype 上

在 class 中，写在 constructor 之外的内容，并且想把它添加到原型上，貌似只能是“成员方法”而且还不能使用箭头函数的形式来写。
如果想添加的是“成员属性”好像还真办不到，因为我们直接写的 a = 1; b = 2; 这样的“成员属性”将自动转换为下面这种格式：
constructor () {
  this.a = 1;
  this.b = 2;
}
这种写法会将 a、b 视作实例成员，并不会添加到原型上。 */