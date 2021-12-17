// 类表达式
const Test = class {
  a = 1;
  b = 2;
}

const t = new Test();

t.a; // => 1
t.b; // => 2
Test.name === 'Test'; // => true
/* 会自动转换为下面这种写法：
class Test {
  constructor() {
    this.a = 1;
    this.b = 2;
  }
}
*/