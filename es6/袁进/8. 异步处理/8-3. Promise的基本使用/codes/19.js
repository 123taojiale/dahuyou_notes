const pro = new Promise((resolve, reject) => {
  const a = 1;
  a = 2; // 报错，因为常量无法被重新赋值。
});

pro.then(result => {
  console.log(result);
});

pro.catch(err => {
  console.log(err);
});
/*
在 Promise 构造函数的参数方法中，若代码报错：会将该 Promise 推向 rejected 状态。
*/