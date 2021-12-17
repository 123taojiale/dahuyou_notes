/*
并列的 Promise：为一个 Promise 注册多个 thenable
一旦该 Promise 的状态变为 resolved
那么会按照事件注册的顺序 执行多个事件
*/
const pro = new Promise((resolve, reject) => {
  console.log('unsettled');
  setTimeout(() => {
    resolve('dahuyou');
  }, 3000);
});

pro.then((data) => {
  console.log(data + '1'); // 3s 后会同时打印
});
pro.then((data) => {
  console.log(data + '2'); // 3s 后会同时打印
});
pro.then((data) => {
  console.log(data + '3'); // 3s 后会同时打印
});