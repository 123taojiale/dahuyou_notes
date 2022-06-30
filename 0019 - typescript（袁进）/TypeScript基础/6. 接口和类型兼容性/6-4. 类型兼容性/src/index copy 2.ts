interface Condition {
  (n: number, i: number): boolean;
}

function sum(numbers: number[], callBack: Condition) {
  let s = 0;
  numbers.forEach((n, i) => {
    if (callBack(n, i)) s += n;
  });
  return s;
}

const cb = (n: number) => n % 2 === 0; // √
// const cb = (n: number, i: number) => n % 2 === 0; // √

// 参数不能少
// const cb = (n: number, i: number, j: number) => n % 2 === 0; // ×

// 若指定了返回值的类型，那么必须要满足要求。若没有指定，则可随意
// const cb = (n: number) => 1; // ×

console.log(sum([1, 2, 3, 4], cb));

export default 1;