class Test {
  // constructor() {
  //   this.a = 1;
  //   this.b = 2;
  // }

  // 等效写法
  a = 1; // 字段初始化器
  b = 2; // 字段初始化器
}

const t = new Test();

console.log(t.a); // 1
console.log(t.b); // 2