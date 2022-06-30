const pro = new Promise((resolve, reject) => {
  console.log('a');
  resolve('dahuyou');
  console.log('b');
});

pro.then(data => {
  console.log(data);
})
/*
Promise 构造函数的参数方法中的代码，是同步执行的。
而 thenable 和 catchable 是异步的，就算是立即执行，也会加入到事件队列中等待执行，并且加入的是 微队列（micro queue）。
*/