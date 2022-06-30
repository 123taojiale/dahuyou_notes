function test(x: number[] | string) {
  let result: string;
  x; // => (parameter) x: string | number[]

  // 类型保护
  if (typeof x === "string") {
    x; // => (parameter) x: string
    result = x.toUpperCase();
  } else {
    x; // => (parameter) x: number[]
    result = x.toString();
  }

  return result;
}

console.log(test("abc")); // => ABC
console.log(test([1, 2, 3])); // => 1,2,3