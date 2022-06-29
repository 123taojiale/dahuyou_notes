/*
Object.getOwnPropertySymbols(对象) => 暴力获取 Symbol 符号成员
*/
const Hero = (() => {
  const getRandom = Symbol();
  return class { // 返回一个类表达式
    constructor(attack, defence, hp) {
      this.attack = attack;
      this.defence = defence;
      this.hp = hp;
    }

    gongji() {
      const dmg = this.attack * this[getRandom](0.8, 1.1);
      console.log(dmg);
    }

    [getRandom](min, max) { // 相当于定义在 Hero.prototype 上
      return Math.random() * (max - min) + min;
    }
  }
})();

const hero = new Hero(30, 10, 300);
hero.gongji();

console.log(hero);

const sybs = Object.getOwnPropertySymbols(hero.__proto__); // hero.__proto__ === Hero.prototype
console.log(sybs);
console.log(hero[sybs[0]](1, 2));