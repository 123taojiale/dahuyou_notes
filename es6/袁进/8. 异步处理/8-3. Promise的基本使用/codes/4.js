const pro = new Promise((resolve, reject) => {
  console.log('unsettled');
  resolve('dahuyou');
});

pro.then((data) => {
  console.log(data);
});
/* 输出：
unsettled
dahuyou
*/