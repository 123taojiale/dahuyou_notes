console.log('a'); // 同步

const timer = setInterval(() => {
  console.log('b'); // 异步
  clearInterval(timer); // 异步
}, 0);

console.log('c'); // 同步
/*
a
c
b
*/