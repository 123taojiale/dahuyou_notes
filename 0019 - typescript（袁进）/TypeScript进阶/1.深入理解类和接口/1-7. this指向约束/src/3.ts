export {};

function sayHello() {
  console.log(`my name is ${this.name}`);
  console.log(`I am ${this.age} years old this year.`);
}

const u = {
  name: "dahuyou",
  age: 23,
  sayHello,
};

sayHello(); // this -> global
// my name is undefined
// I am undefined years old this year.
u.sayHello(); // this -> u
// my name is dahuyou
// I am 23 years old this year.