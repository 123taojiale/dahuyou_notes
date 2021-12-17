const pro = new Promise((resolve, reject) => {
  try {
    throw new Error('抛出一个错误');
  } catch {
    console.log('捕获到了错误');
  }
  resolve(1); // 有效 因为上面的错误被捕获了 并没有将 pro 的状态推向 rejected
});

pro.then(data => {
  console.log(data);
}, err => {
  console.log(err);
});
/*
被捕获的错误，并不会将 promise 推向 settled 阶段。
*/