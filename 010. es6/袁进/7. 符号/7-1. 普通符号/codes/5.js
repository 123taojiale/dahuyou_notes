/*
符号属性无法被枚举
*/
const syb1 = Symbol('dahuyou');

const obj = {
  a: 1,
  b: 2,
  [syb1]: 'hahaha'
};

obj; // => {a: 1, b: 2, Symbol(dahuyou): 'hahaha'}

for (const prop in obj) {
  console.log(prop); // => a b
}

obj[syb1]; // => hahaha
/*
因为此时 syb1 是一个全局变量，我们可以访问到这个全局变量。
所以我们可以通过它来读取到符号属性 syb1 的属性值 'hahaha'。
*/