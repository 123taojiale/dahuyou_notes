import { IBlanceShow, IFireShow, IWisdomShow } from "./interfaces";

export abstract class Animal {
  abstract type: string;

  constructor(public name: string, public age: number) {}

  sayHello() {
    console.log(
      `各位观众，大家好，我是${this.type}，我叫${this.name}，今年${this.age}岁`
    );
  }
}

export class Lion extends Animal implements IFireShow {
  type: string = "狮子";

  singleFire() {
    console.log(`${this.name}完成了单火圈表演`);
  }

  doubleFire() {
    console.log(`${this.name}完成了双火圈表演`);
  }
}

export class Tiger extends Animal {
  type: string = "老虎";

  singleFire() {
    console.log(`${this.name}完成了单火圈表演`);
  }

  doubleFire() {
    console.log(`${this.name}完成了双火圈表演`);
  }
}

export class Monkey extends Animal implements IBlanceShow {
  type: string = "猴子";

  dumuqiao() {
    console.log(`${this.name}完成了独木桥表演`);
  }

  zougangsi() {
    console.log(`${this.name}完成了走钢丝表演`);
  }
}

export class Dog extends Animal implements IWisdomShow, IFireShow {
  type: string = "狗";

  singleFire() {
    console.log(`${this.name}完成了单火圈表演`);
  }

  doubleFire() {
    console.log(`${this.name}完成了双火圈表演`);
  }

  suanshuti() {
    console.log(`${this.name}完成了算术题表演`);
  }

  dance() {
    console.log(`${this.name}完成了跳舞表演`);
  }
}