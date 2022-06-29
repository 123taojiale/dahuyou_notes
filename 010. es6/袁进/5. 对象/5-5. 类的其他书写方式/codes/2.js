/*
1.js 其实就是在模仿 api：Object.definePrototype 实现 getter、setter的效果。
下面我们就试着使用该 api 来实现相同的效果
Syntax：
  Object.definePrototype(对象, 属性名, {get(){...}, set(){...}})
*/
class Animal {
  constructor(type, name, age, sex) {
    this.type = type;
    this.name = name;
    this.sex = sex;
    let _age; // 辅助变量 它同时是一个私有属性 【想清楚为什么这里得定义一个私有属性】

    Object.defineProperty(this, 'age', {
      get() {
        return _age + '岁';
      },
      set(val) {
        if (typeof val !== 'number') {
          throw new TypeError('age prototype must be a number.');
        }
        if (val < 0) {
          val = 0; // 在 set 中改变的 val 实际上改变的就是用户在调用构造函数时传入的参数 age 的值
        } else if (val > 1000) {
          val = 1000;
        }
        _age = val; // 同时更新辅助变量 _age 的值
      }
    });

    this.age = age; // 将经过 set 处理后的 age 值赋值给 this.age 属性
    // 这里给 this.age 赋值 实际上也是给私有属性 _age 赋值，将 this.age = age; 这条语句写在变量 _age 声明 和 Object.defineProperty 之后的目的就是为了防止在初始化对象后，读取 age 的值时，读到的是 undefined。
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