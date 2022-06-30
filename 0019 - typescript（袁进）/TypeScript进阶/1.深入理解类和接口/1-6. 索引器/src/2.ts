export {};

class User {
  [p: string]: string | number | { (): void }
  // [prop: string]: any
  // p、prop 仅仅是一个占位符，是啥都无所谓。

  constructor (
    public name: string,
    public age: number
  ) {}

  sayHello() {
    console.log(`My name is ${this.name}.`);
    console.log(`I am ${this.age} years old this year.`);
  }
}

const user = new User("dahuyou", 23);
user.a = 1; // √
user.pid = '3303...'; // √