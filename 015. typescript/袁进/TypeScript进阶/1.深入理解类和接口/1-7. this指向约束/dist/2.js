Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`my name is ${this.name}`);
        console.log(`I am ${this.age} years old this year.`);
    }
}
const u = new User('dahuyou', 23);
u.sayHello();
const say = u.sayHello;
say();
