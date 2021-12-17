setTimeout(() => {
  console.log('a');
}, 1000);

// 由于还没到 1s，该进行就结束了，所以 a 不会打印。
process.exit(); // 若注释掉该语句，那么 1s 后会打印 a。
// 等效于：process.exit(0);