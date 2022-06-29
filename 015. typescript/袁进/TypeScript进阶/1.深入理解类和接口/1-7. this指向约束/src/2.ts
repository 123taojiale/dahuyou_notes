
export {}


class User {
  constructor(
    public name: string,
    public age: number
  ) {}

  sayHello() {
    console.log(`my name is ${this.name}`);
    console.log(`I am ${this.age} years old this year.`);
  }
}

const u = new User('dahuyou', 23);
u.sayHello();
// my name is dahuyou
// I am 23 years old this year.
const say = u.sayHello;
say();
// 抛出错误 - 无法从 undefined 身上读取 name 和 age