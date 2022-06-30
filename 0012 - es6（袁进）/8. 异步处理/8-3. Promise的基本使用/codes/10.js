const pro = new Promise((resolve, reject) => {
  console.log('a'); // 这里面的是同步执行的程序
});

console.log('b');
/*
unsettled 阶段的程序是同步的，会立即执行。
*/