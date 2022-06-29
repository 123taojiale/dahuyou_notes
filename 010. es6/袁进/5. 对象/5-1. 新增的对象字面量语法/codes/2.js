const user = {
  name: 'dahuyou',
  age: 18,
  sayHello() {
    console.log(this.name, this.age);
  }
}
/* 等效写法：
const user = {
  name: 'dahuyou',
  age: 18,
  sayHello: function () {
    console.log(this.name, this.age);
  }
}
*/