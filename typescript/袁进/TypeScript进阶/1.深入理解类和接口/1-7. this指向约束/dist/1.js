Object.defineProperty(exports, "__esModule", { value: true });
const u = {
    name: "dahuyou",
    age: 23,
    sayHello() {
        console.log(`my name is ${this.name}`);
        console.log(`I am ${this.age} years old this year.`);
    }
};
u.sayHello();
const say = u.sayHello;
say();
