console.log('a'); // 同步

const timer = setInterval(() => {
  console.log('b'); // 异步
  clearInterval(timer); // 异步
}, 0);

for (let i = 0; i < 1000; i++) {
  console.log('c'); // 同步
}
/*
a
1000个c
b
*/