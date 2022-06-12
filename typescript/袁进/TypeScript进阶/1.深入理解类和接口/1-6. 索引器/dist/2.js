Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`My name is ${this.name}.`);
        console.log(`I am ${this.age} years old this year.`);
    }
}
const user = new User("dahuyou", 23);
user.a = 1;
user.pid = '3303...';
