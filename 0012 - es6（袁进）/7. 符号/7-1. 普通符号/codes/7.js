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

    [getRandom](min, max) {
      return Math.random() * (max - min) + min;
    }
  }
})();

const hero = new Hero(30, 10, 300);
hero.gongji();

console.log(hero);

hero.getRandom(1, 2); // => error ...