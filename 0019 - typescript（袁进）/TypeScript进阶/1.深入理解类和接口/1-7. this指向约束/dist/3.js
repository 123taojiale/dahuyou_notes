Object.defineProperty(exports, "__esModule", { value: true });
function sayHello() {
    console.log(`my name is ${this.name}`);
    console.log(`I am ${this.age} years old this year.`);
}
const u = {
    name: "dahuyou",
    age: 23,
    sayHello,
};
sayHello();
u.sayHello();
