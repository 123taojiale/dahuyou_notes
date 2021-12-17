const pro = new Promise((resolve, reject) => {
  throw new Error('抛出一个错误'); // pro -> rejected
  resolve(1); // 无效
});

pro.then(data => {
  console.log(data);
}, err => {
  console.log(err);
});
/*
未捕获的错误，会将 promise 推向 settled 阶段。
*/