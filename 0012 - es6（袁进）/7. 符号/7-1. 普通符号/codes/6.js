/*
开发者可以通过精心的设计，让属性无法通过常规方式被外界访问。
*/
const hero = (function () {
  const getRandom = Symbol();
  return {
    attack: 30, // 攻击力
    defence: 10, // 防御力
    hp: 300, // 血量
    gongji() {
      const dmg = this.attack * this[getRandom](0.8, 1.1);
      console.log(dmg);
    },

    [getRandom](min, max) {
      return Math.random() * (max - min) + min;
    }
  }
})();

hero.gongji();
hero.getRandom(); // 会报错

// 由于 getRandom 是立即执行函数中的内容，定义在局部，所以我们在全局是无法获取到的。
hero[getRandom]; // Uncaught ReferenceError: getRandom is not defined

// 即便符号描述相同，也不是同一个符号。
const getRandom = Symbol(); // 这是在全局定义的 getRandom，它也是一个符号类型的变量，虽然它的符号描述和立即执行函数中定义的 getRandom 的符号描述都是空，但是它们并不是同一个符号。
hero[getRandom]; // => undefined