

function A() {
  console.log(B()); // => 3
  console.log("a1"); // => a1
}

function B() {
  try {
    C(); // 抛出了错误
    console.log("b1");
  } catch (err) { // 捕获
    console.log("运行C的时候发生了问题", err);
    return 3;
  } finally {
    console.log("处理完成");
  }
}

function C() {
  throw new TypeError("asdfasfasfasfd");
  console.log("c1"); // 改代码不会被执行
}

A();

console.log("g1"); // => g1
/*
分析：虽然在调用函数 C 时，抛出了错误，但是这个错误被捕获了，所以并不会停止代码的继续执行。
*/