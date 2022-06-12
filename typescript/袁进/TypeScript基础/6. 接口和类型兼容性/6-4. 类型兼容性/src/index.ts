interface Duck {
  sound: "嘎嘎嘎" // "嘎嘎嘎" 表示字面量类型
  swin(): void
}

let person = {
  name: "伪装成鸭子的人",
  age: 11,
  sound: "嘎嘎嘎" as "嘎嘎嘎", // 第一个 "嘎嘎嘎" 表示值，第二个 "嘎嘎嘎" 表示字面量类型
  // sound: <"嘎嘎嘎">"嘎嘎嘎"
  swin() {
    console.log(`${this.name}正在游泳，并发出了${this.sound}的声音。`);
  }
}

let duck: Duck = person; // √