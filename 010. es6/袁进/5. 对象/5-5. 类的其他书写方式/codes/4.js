// get 和 set 关键字后面的函数名的问题
class Animal {
  constructor(type, name, age, sex) {
    this.type = type;
    this.name = name;
    this.ages = age; // 这里给 this.ages 赋值 实际上也就调用了 set ages() 即: 同时也给 this._age 赋值
    this.sex = sex;
  }

  // 创建一个 age 属性 并给它加上 getter 读取该属性时 会运行该函数
  get ages() {
    return this._age + '岁';
  }

  // 创建一个 age 属性 并给它添加 setter 给该属性赋值时 会运行该函数
  set ages(val) {
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
    console.log(`【年龄】：${this.ages}`);
    console.log(`【性别】：${this.sex}`);
  }
}

const a = new Animal('哈士奇', '旺财', 3, '公');

a.ages; // => 3岁
a.ages = -1;
a.ages; // => 0岁
a.ages = 10000;
a.ages; // => 1000岁
a.print();
/*
【种类】：哈士奇
【姓名】：旺财
【年龄】：3岁
【性别】：公
*/
a.ages = '123'; // Uncaught TypeError: age prototype must be a number.