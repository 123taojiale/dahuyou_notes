Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnemyTank = exports.PlayerTank = exports.Tank = void 0;
class Tank {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  shoot() {
    console.log("Tank 发射子弹");
  }
}
exports.Tank = Tank;
class PlayerTank extends Tank {
  constructor() {
    super(...arguments);
    this.x = 20;
    this.y = 20;
  }
  shoot() {
    console.log("PlayerTank 发射子弹");
  }
}
exports.PlayerTank = PlayerTank;
class EnemyTank extends Tank {
  shoot() {
    console.log("EnemyTank 发射子弹");
  }
}
exports.EnemyTank = EnemyTank;
const p = new PlayerTank();
const e = new EnemyTank();
console.log("PlayerTank 属性成员 x、y 已重写", p.x, p.y);
console.log("EnemyTank 属性成员 x、y 未重写", e.x, e.y);
p.shoot();
e.shoot();