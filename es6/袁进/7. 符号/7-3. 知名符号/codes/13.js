class Temperature {
  constructor(degree) {
    this.degree = degree;
  }

  [Symbol.toPrimitive](type) {
    if (type === 'default') {
      return this.degree + '℃';
    }
    if (type === 'number') {
      return this.degree;
    }
    if (type === 'string') {
      return String(this.degree);
    }
  }
}

const t = new Temperature(30);

console.log(t + '!'); // => 30℃!
console.log(t / 2); // => 25
console.log(String(t)); // 30