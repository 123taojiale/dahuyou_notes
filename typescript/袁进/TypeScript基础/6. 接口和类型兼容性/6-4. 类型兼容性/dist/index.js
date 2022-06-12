let person = {
  name: "伪装成鸭子的人",
  age: 11,
  sound: "嘎嘎嘎",
  swin() {
    console.log(`${this.name}正在游泳，并发出了${this.sound}的声音。`);
  }
};
let duck = person;