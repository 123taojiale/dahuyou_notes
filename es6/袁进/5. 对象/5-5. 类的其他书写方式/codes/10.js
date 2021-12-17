/*
结合箭头函数的相关知识点，我们由此可以推出第3点结论：
箭头函数在字段初始化器位置上，指向当前对象。
因为箭头函数本身并没有 this，箭头函数里面的 this 指向的是箭头函数声明的位置的 this。
*/
class Test {
  constructor(name) {
    this.name = name;
    // 这里面的 this 指向的是当前对象
    this.sayHello = () => {
      console.log(`hello, my name is ${this.name}.`);
    };
    this.sayHello2 = function () {
      console.log(`hello, my name is ${this.name}.`);
    }
  }
}

const t = new Test("test")
t.sayHello(); // => hello, my name is test.
t.sayHello2(); // => hello, my name is test.

const sayHello = t.sayHello;
sayHello(); // => hello, my name is test.

const sayHello2 = t.sayHello2;
sayHello2(); // => TypeError: Cannot read property 'name' of undefined
/*
使用箭头函数式的写法，相当于绑定了 this 的指向。
若使用的是传统定义函数的方式来写，那么 this 的指向是有函数被调用时的调用环境来决定的。
Attention：在严格模式下，全局环境中的函数内部的 this 默认指向的是 undefined。
*/