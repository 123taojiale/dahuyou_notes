function Animal(type, name, age, sex) {
  this.type = type;
  this.name = name;
  this.age = age;
  this.sex = sex;
}

Animal.prototype.print = function () {
  console.log(`【种类】：${this.type}`);
  console.log(`【姓名】：${this.name}`);
  console.log(`【年龄】：${this.ages}`);
  console.log(`【性别】：${this.sex}`);
}

const a = new Animal('哈士奇', '旺财', 3, '公');

Animal.abc = '123';
Animal.func = function () {
  console.log(`this is a function...`);
}
// abc 和 func 就是 Animal 构造函数的静态成员。通过 Animal 构造函数所创建的实例对象无法访问到这些成员。
a.abc; // => undefined
a.func(); // => Uncaught TypeError: a.func is not a function