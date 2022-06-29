export {};

const u = {
  name: "dahuyou",
  age: 23,
  sayHello() {
    console.log(`my name is ${this.name}`);
    console.log(`I am ${this.age} years old this year.`);
  }
}

u.sayHello();
// my name is dahuyou
// I am 23 years old this year.

const say = u.sayHello;
say(); // => this 指向 global，global.name、global.age 都是 undefined
// my name is undefined
// I am undefined years old this year.