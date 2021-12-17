// 在 es6 中，提供了新的写法：可以直接将它写在 Class 中，只要再属性前面加上关键字 static 修饰一下即可。
class Animal {
  constructor(type, name, age, sex) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  print() {
    console.log(`【种类】：${this.type}`);
    console.log(`【姓名】：${this.name}`);
    console.log(`【年龄】：${this.ages}`);
    console.log(`【性别】：${this.sex}`);
  }

  static abc = '123';
  static func = function () {
    console.log(`this is a function`);
  }
}
const a = new Animal('哈士奇', '旺财', 3, '公');

a.abc; // => undefined
a.func(); // => Uncaught TypeError: a.func is not a function