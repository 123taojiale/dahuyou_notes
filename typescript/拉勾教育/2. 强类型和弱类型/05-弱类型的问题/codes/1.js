const obj = {};

// obj.foo();

setTimeout(() => {
  obj.foo();
}, 100000);

/*
obj.foo();
这里出现了错误，但是，得等到运行阶段才会报错。
*/