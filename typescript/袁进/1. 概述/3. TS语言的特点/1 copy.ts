export {};

function test() {
  return Math.random() > 0.5 ? 1.23 : "dahuyou";
}

const a = test(); // test 可能会返回 number | string

// 直接这么写都是错误的，因为这么做，相当于将一个不确定的类型视作一个确定的类型来处理
// a.toUpperCase();
// Math.round(a);

if (typeof a === "string") {
  // 若代码执行到这里，说明此时 a 一定是一个 string 类型
  console.log("获取到的是一个字符串", a.toUpperCase());
} else {
  // a 一定是一个 number 类型
  console.log("获取到的是一个数字", Math.round(a));
}
