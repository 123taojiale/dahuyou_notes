// 使用 ES6 提供的 getter 和 setter 来实现
class Animal {
  constructor(type, name, age, sex) {
    this.type = type;
    this.name = name;
    this.age = age; // 语句1
    // this._age = age; 用该语句替代语句1 实际上也可以实现同样的效果
    // 如果两条语句都不存在 那么存在一个问题 就是 this._age 没有初值 所以 必须给它赋初值
    this.sex = sex;
  }

  // 创建一个age属性 并给它加上 getter 读取该属性时 会运行该函数
  get age() {
    return this._age + '岁';
  }

  // 创建一个age属性 并给它添加 setter 给该属性赋值时 会运行该函数
  set age(val) {
    if (typeof val !== 'number') {
      throw new TypeError('age prototype must be a number.');
    }
    if (val < 0) {
      val = 0;
    } else if (val > 1000) {
      val = 1000;
    }
    this._age = val;
  }

  print() {
    console.log(`【种类】：${this.type}`);
    console.log(`【姓名】：${this.name}`);
    console.log(`【年龄】：${this.age}`);
    console.log(`【性别】：${this.sex}`);
  }
}

const a = new Animal('哈士奇', '旺财', 3, '公');

a.age; // => 3岁
a.age = -1;
a.age; // => 0岁
a.age = 10000;
a.age; // => 1000岁
a.print();
/*
【种类】：哈士奇
【姓名】：旺财
【年龄】：3岁
【性别】：公
*/
a.age = '123'; // Uncaught TypeError: age prototype must be a number.