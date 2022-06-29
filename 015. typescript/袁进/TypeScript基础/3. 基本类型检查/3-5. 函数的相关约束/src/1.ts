/**
 * 得到 a 和 b 相乘的结果
 * @param a
 * @param b
 */
function combine(a: number, b: number): number;
/**
 * 得到 a 和 b 拼接的结果
 * @param a
 * @param b
 */
function combine(a: string, b: string): string;
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  throw new Error("a 和 b 必须是相同的类型");
}

combine(1, 2); // => 2
combine("1", "2"); // => 12
// combine(1, '2');

/* 分析：
1. 函数重载
  function combine(a: number, b: number): number;
  function combine(a: string, b: string): string;
  使用函数重载，在函数实现之前，对函数调用的多种情况进行声明，防止出现错误调用的情况：combine(1, '2');
2. throw new Error("a 和 b 必须是相同的类型");
  在函数结尾抛出一个错误，以解决函数有可能返回 undefined 的问题。
*/