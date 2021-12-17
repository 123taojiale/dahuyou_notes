class Test {
  constructor(a) {
    this.a = a;
    this.b = () => {
      console.log(`a is equal: ${this.a}`);
    }
  }

  c() {
    console.log('this is a method in Test.prototype');
  }
}

const t = new Test(1);

t.a; // => 1
t.b(); // => a is equal: 1
typeof t.__proto__.c; // => function
Test.prototype.c === t.__proto__.c; // => true
Test.prototype.c(); // => this is a method in Test.prototype