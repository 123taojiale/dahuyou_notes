/*
使用 Promise 来实现同样的逻辑
*/
const pro = new Promise((resolve, reject) => {
  console.log(`邓哥向女神1发出了表白短信`);
  setTimeout(() => {
    if (Math.random() < 0.1) {
      resolve(true);
    } else {
      resolve(false);
    }
  }, 1000);
});
/*
我们在 chrome 的控制台尝试输出 pro，查看当前状态；
分别在 ＜ 1s，和 ＞ 1s 两个时间点打印 pro：
*/