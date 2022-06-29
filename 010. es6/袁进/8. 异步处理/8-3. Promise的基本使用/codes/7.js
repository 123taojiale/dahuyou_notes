const pro = new Promise((resolve, reject) => {
  console.log('unsettled');
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve('dahuyou');
    } else {
      reject(new Error('dahuyou'));
    }
  }, 3000);
});

pro.then(data => {
  console.log('resolved');
  console.log(data + '1');
}, err => {
  console.log('rejected');
  console.log(err + '1');
});
pro.then(data => {
  console.log(data + '2');
}, err => {
  console.log(err + '2');
});
pro.then(data => {
  console.log(data + '3');
}, err => {
  console.log(err + '3');
});
/*
和 6.js 一样，都是并列的 promise。
*/