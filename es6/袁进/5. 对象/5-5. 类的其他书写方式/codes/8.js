// es6 中的等效写法
class Chess {
  constructor(name, x, y) {
    this.name = name; // name 表示棋子的名字
    this.x = x; // 棋子的横坐标
    this.y = y; // 棋子的纵坐标
    // ...
  }

  static width = 50;
  static height = 50;

  // 静态成员不仅仅是属性 还包括 方法
  /* static method() {

  } */
}

console.log(Chess.width); // 50
console.log(Chess.width); // 50
// Chess.method(); // 调用静态方法