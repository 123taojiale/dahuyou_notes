const pro = new Promise((resolve, reject) => {
  throw new Error('抛出一个错误'); // pro -> rejected
});

pro.then(data => {
  console.log(data);
}, err => {
  console.log(err);
});
/*
在 unsettled 阶段的处理函数中，若发生了未捕获的错误：
  将 promise 的状态推向 rejected，并会被 catchable 捕获，执行 catchable。
*/