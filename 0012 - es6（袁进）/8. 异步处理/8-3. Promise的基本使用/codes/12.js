const pro = new Promise((resolve, reject) => {
  console.log('a'); // 同步
  resolve('dahuyou'); // 同步
  console.log('b'); // 同步
});

pro.then(data => {
  console.log(data); // 异步
})

console.log('c'); // 同步