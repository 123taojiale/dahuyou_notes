export {};

interface IUser {
  name: string;
  age: number;
  sayHello(this: IUser): void;
}

const u: IUser = {
  name: "dahuyou",
  age: 23,
  sayHello() {
    console.log(`my name is ${this.name}`);
    console.log(`I am ${this.age} years old this year.`);
  },
};

u.sayHello();
// my name is dahuyou
// I am 23 years old this year.

const say = u.sayHello;
// say(); // ×
