const pro = new Promise((resolve, reject) => {
  console.log('unsettled');
  setTimeout(() => {
    resolve('dahuyou');
  }, 3000);
});

pro.then((data) => {
  console.log(data); // 3s 后才会打印
});