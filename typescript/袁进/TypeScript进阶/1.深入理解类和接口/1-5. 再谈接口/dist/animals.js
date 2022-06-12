Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Monkey = exports.Tiger = exports.Lion = exports.Animal = void 0;
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`各位观众，大家好，我是${this.type}，我叫${this.name}，今年${this.age}岁`);
    }
}
exports.Animal = Animal;
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.type = "狮子";
    }
    singleFire() {
        console.log(`${this.name}完成了单火圈表演`);
    }
    doubleFire() {
        console.log(`${this.name}完成了双火圈表演`);
    }
}
exports.Lion = Lion;
class Tiger extends Animal {
    constructor() {
        super(...arguments);
        this.type = "老虎";
    }
    singleFire() {
        console.log(`${this.name}完成了单火圈表演`);
    }
    doubleFire() {
        console.log(`${this.name}完成了双火圈表演`);
    }
}
exports.Tiger = Tiger;
class Monkey extends Animal {
    constructor() {
        super(...arguments);
        this.type = "猴子";
    }
    dumuqiao() {
        console.log(`${this.name}完成了独木桥表演`);
    }
    zougangsi() {
        console.log(`${this.name}完成了走钢丝表演`);
    }
}
exports.Monkey = Monkey;
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.type = "狗";
    }
    suanshuti() {
        console.log(`${this.name}完成了算术题表演`);
    }
    dance() {
        console.log(`${this.name}完成了跳舞表演`);
    }
}
exports.Dog = Dog;
