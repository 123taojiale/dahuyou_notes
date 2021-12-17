class Hero {
  constructor(attack, defence, hp) {
    this.attack = attack;
    this.defence = defence;
    this.hp = hp;
  }

  gongji() {
    const dmg = this.attack * this.getRandom(0.8, 1.1);
    console.log(dmg);
  }

  getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
}

const hero = new Hero(30, 10, 300);
hero.gongji();
const r = hero.getRandom(1, 2);
console.log(r);
/*
同样的道理 我们想让 通过英雄类所创建的实例对象身上无法访问 getRandom 成员
使用传统的方式 依旧办不到...
如果把 getRandom 丢到全局中 看似可以实现当前的需求。
  思考：为什么 getRandom 方法可以丢到全局，然后在实例中调用？
  因为 getRandom 方法里没有使用 this.***，也就是说 getRandom 函数的功能，并不依赖实例成员。
但是若一个成员方法 fun 这个成员方法 也希望被设置为私有成员 而且 这个方法中使用了 this.***
那再把这个方法也丢到全局中 那显然就不合适了 因为每次调用的时候 我们还得考虑 this 的问题 还要重新绑定 this 的指向
*/