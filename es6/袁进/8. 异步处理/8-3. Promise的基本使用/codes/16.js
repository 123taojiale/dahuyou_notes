const pro = new Promise((resolve, reject) => {
  resolve(1);
  reject(2); // 无效
  resolve(3); // 无效
});

pro.then(data => {
  console.log(data);
}, err => {
  console.log(err);
});
/*
promise 状态是不可逆的：
  一旦 promise 的状态推向了 settled 状态，无法再对它的状态做任何更改。
最终输出结果只有一个 1
*/