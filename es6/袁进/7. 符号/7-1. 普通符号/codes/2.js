/*
需求描述
  这个 hero 英雄对象中 getRandom 方法仅仅是为了实现内部功能 (攻击方法)
  对于这样的成员 我们通常都希望将它设置为对象身上的私有属性 不让它暴露出来
传统方式
  对于这样的需求 传统方式是实现不了的 之前的 JS 在对象身上写的所有的成员 都会暴露出来
  很多 JS 的第三方库 对于这样的需求 它们采取的措施大多都是：给那些不希望被用户访问的对象身上的私有属性命名时 添加特殊符号作为前缀
ES6 的实现方式
  使用新增的数据类型 Symbol 即可实现
*/
const hero = {
  attack: 30, // 攻击力
  defence: 10, // 防御力
  hp: 300, // 血量

  gongji() {
    const dmg = this.attack * this.getRandom(0.8, 1.1); // 伤害值
    console.log(dmg);
  },

  getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
}

hero.gongji();
const r = hero.getRandom(); // getRandom() 被暴露出来了 所以可以直接调用
console.log(r);
/*
在这个案例中 为了不让 getRandom 方法暴露出来 将它丢到 gongji() 方法中就可以了
但是这么做的话 也存在很多问题：
1. 每一次调用 hero.gongji() 就会新创建一个函数 getRandom() 影响性能;
2. 倘若 hero 对象又多了一个成员方法 defence 而这个成员方法 defence 也需要调用 getRandom 那... 可能又得把 getRandom 复制一份到 defence 中; 冗余度太高 */