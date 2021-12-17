function cal(a, b, c, d) {
  return a + b + c + d;
}

cal(1, 2, 3, 4); // => 10

/**
 * 柯里化
 * 用户固定某个函数的前面的参数，得到一个新的函数，新函数调用时，接收剩余参数。
 */
function curry(func, ...args) {
  return function (...subArgs) {
    const allArgs = [...args, ...subArgs]; // 拼接两个数组
    // 参数够了
    if (allArgs.length >= func.length) { // func.length 获取 func 函数的形参数量
      return func(...allArgs); // 直接调用 func 函数 并将所有参数 allArgs 当做形参传进去
    } else { // 参数依旧不够
      return curry(func, ...allArgs); // 递归
    }
  }
}

const newCal = curry(cal, 1, 2);
newCal(3, 4); // => 10
newCal(4, 5); // => 12

const newCal1 = newCal(5);
const newCal2 = newCal(6);

newCal1(6); // => 14
newCal2(7); // => 16