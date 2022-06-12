export class ArrayHelper<T> {
  constructor(private arr: T[]) {}

  take(n: number): T[] {
    if (n >= this.arr.length) return this.arr;
    const newArr: T[] = [];
    for (let i = 0; i < n; i++) {
      newArr.push(this.arr[i]);
    }
    return newArr;
  }

  shuffle() {
    const len = this.arr.length;
    for (let i = 0; i < len; i++) {
      const t = this.getRandom(0, len);
      [this.arr[i], this.arr[t]] = [this.arr[t], this.arr[i]];
    }
  }

  print() {
    this.arr.forEach((it) => console.log(it + "\t"));
  }

  private getRandom(min: number, max: number) {
    return Math.floor((max - min) * Math.random()) + min;
  }
}

const helper = new ArrayHelper([1, 2, 3]);
console.log("====完成初始化====");
helper.print();

console.log("====获取前2张====");
console.log(helper.take(2));

console.log("====完成洗牌====");
helper.shuffle();
helper.print();

console.log("====获取前2张====");
console.log(helper.take(2));
