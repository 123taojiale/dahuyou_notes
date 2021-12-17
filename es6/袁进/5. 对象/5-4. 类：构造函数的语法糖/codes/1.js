/*
属性和原型方法定义分离，降低了可读性。
*/
// 构造函数 (构造器)
function Animal(type, name, age, sex) {
  this.type = type;
  this.name = name;
  this.age = age;
  this.sex = sex;
}

// 定义实例方法 (原型方法)
Animal.prototype.print = function () {
  console.log(`【种类】：${this.type}`);
  console.log(`【姓名】：${this.name}`);
  console.log(`【年龄】：${this.age}`);
  console.log(`【性别】：${this.sex}`);
}

const a = new Animal('哈士奇', '旺财', 3, '公');
a.print();
/*
【种类】：哈士奇
【姓名】：旺财
【年龄】：3
【性别】：公
*/

for (const prop in a) {
  console.log(prop);
}
/* 原型成员可以被枚举，但是，通常我们不希望原型上的成员被枚举出来。
type
name
age
sex
print
*/