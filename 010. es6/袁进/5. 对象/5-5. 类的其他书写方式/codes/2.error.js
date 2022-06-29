/*
下面是一种典型的错误写法，这种写法会导致栈溢出。
*/
class Animal {
  constructor(type, name, age, sex) {
    this.type = type;
    this.name = name;
    this.sex = sex;

    Object.defineProperty(this, 'age', {
      get() {
        return this.age + '岁';
        // 注意 千万不能这么写 会栈溢出 因为每次读取 age 都会调用 get 而我们又在 get 里面读取 age ...
      },
      set(val) {
        if (typeof val !== 'number') {
          throw new TypeError('age prototype must be a number.');
        }
        if (val < 0) {
          val = 0;
        } else if (val > 1000) {
          val = 1000;
        }
        this.age = val;
        // 这么做的话 也会导致栈溢出 和 上面get中的原因类似
      }
    });

    this.age = age;
  }

  print() {
    console.log(`【种类】：${this.type}`);
    console.log(`【姓名】：${this.name}`);
    console.log(`【年龄】：${this.age}`);
    console.log(`【性别】：${this.sex}`);
  }
}

const a = new Animal('哈士奇', '旺财', 3, '公');