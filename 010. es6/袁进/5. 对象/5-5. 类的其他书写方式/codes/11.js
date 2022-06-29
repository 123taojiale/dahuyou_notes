class Test {
  constructor(name) {
    this.name = name;
  }
  // 等效写法
  sayHello = () => {
    console.log(`hello, my name is ${this.name}.`);
  }
}

const t = new Test("test")
t.sayHello(); // => hello, my name is test.
Test.prototype.sayHello; // => undefined
const sayHello = t.sayHello;
sayHello(); // => hello, my name is test.
/*
Attention：
按照上面这样的写法写的 sayHello 函数，将会成为实例对象身上的实例成员。
而不再是在 Test.prototype 身上定义的 sayHello 函数了。

缺点：若创建的实例对象过多的话，那么这样的做法会导致内存空间被大量占用。
优点：相当于绑定了箭头函数的 this 让 this 指向了当前对象。
*/