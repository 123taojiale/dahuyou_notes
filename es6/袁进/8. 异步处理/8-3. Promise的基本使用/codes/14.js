pro.then(data => {
  console.log(data);
}, err => {
  console.log(err);
});

// 下面是等效写法：

pro.then(data => {
  console.log(data);
});
pro.catch(err => {
  console.log(err);
});
/* Promise.then() 和 Promise.catch()
pro.then 可以只添加 thenable（仅写一个参数即可），也可以同时添加 thenable 和 catchable（同时写两个参数即可）。
使用 pro.catch 只可以添加 catchable。
*/