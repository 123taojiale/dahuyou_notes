const pro = new Promise((resolve, reject) => {
  console.log('a');
  resolve('dahuyou');
  setTimeout(() => {
    console.log('b'); // 异步 -> macro queue
  }, 0);
});

pro.then(data => {
  console.log(data); // 异步 -> micro queue
})

console.log('c');
/*
micro queue 优先于 macro queue
*/