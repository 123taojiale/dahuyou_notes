/*
定义一个 Animal 类，给 age 属性添加 setter 和 getter
我们假定 age 的下限为 0，上限为 1000，并且当我们给 age 赋的值不是一个 number 类型时，会抛出一个错误 => 使用 setter 实现
当我们读取 age 的值时，将读取到的结果拼接上“岁” => 使用 getter 实现
*/
class Animal {
  constructor(type, name, age, sex) {
    this.type = type;
    this.name = name;
    this.setAge(age); // 使用 this.方法名 的形式 调用原型上的方法
    this.sex = sex;
  }

  getAge() {
    return this._age + '岁';
  }

  setAge(age) {
    if (typeof age !== "number") {
      throw new TypeError("age prototype must be a number.");
    }
    if (age < 0) {
      age = 0;
    } else if (age > 1000) {
      age = 1000;
    }
    this._age = age; // 通常我们在给那些 不希望被调用者直接操作(读取操作)的属性 命名时 会在前面加上一个下划线
  }

  print() {
    console.log(`【种类】：${this.type}`);
    console.log(`【姓名】：${this.name}`);
    console.log(`【年龄】：${this._age}`);
    console.log(`【性别】：${this.sex}`);
  }
}

const a = new Animal('哈士奇', '旺财', 3, '公');
a; // => Animal { type: '哈士奇', name: '旺财', _age: 3, sex: '公' }
a.getAge(); // => 3岁
a.setAge(-100);
a.getAge(); // => 0岁
a.setAge(10000);
a.getAge(); // => 1000岁
a.print();
/*
【种类】：哈士奇
【姓名】：旺财
【年龄】：1000
【性别】：公
*/
a.setAge("10"); // => TypeError: age prototype must be a number.
/* 小结
这个案例中 我们借助函数 模拟 给 age 这个属性添加了一些 "特性" 的效果
  越界处理
  类型错误处理

通过给指定属性添加特性，我们还可以实现其他很多操作。
但是上面这样的做法，并非给属性添加特性，而是借助函数来操作对象身上的属性。
这么做虽然也可以达到效果，不过这样做的话 age 这个属性，当我们操作它的时候。
感觉上就不像是一个属性了，因为对于一个正常的属性来说，当我们操作它时，直接使用下面这种写法即可。
  对象名.属性名             来读取它的值
  对象名.属性名 = 属性值    来设置它的值
而操作 age 这个属性时 我们得借助另一个保留属性 _age 并结合函数 间接地操作它
  对象名.getAge()           读取 _age 的值
  对象名.setAge(属性值)     给 _age 设置属性值
所以若我们既想 让 年龄属性具备越界处理 和 类型错误处理的 "特性"
又想把它当做正常的属性一样来操作它 那么这种方式 是不推荐的
*/