export class Tank {
  name: string = "普通坦克";
  sayHello() {
    console.log(`my name is ${this.name}`);
  }
}

export class PlayerTank extends Tank {
  name: string = "PlayerTank";
}

export class EnemyTank extends Tank {
  name: string = "EnemyTank";
  bloodVolume: number = 1; // 血量
}

export class BossTank extends EnemyTank {
  bloodVolume: number = 10; // 血量
}

const b = new BossTank(); // Boss 坦克

b.sayHello();
console.log(b.name);
console.log(b.bloodVolume);