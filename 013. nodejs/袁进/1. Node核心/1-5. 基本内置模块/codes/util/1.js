const util = require("util");

// delay 是一个异步函数
async function delay(duration = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  });
}

// util.callbackify 接收的参数是一个异步函数，返回值是一个回调模式的函数。
const delayCallback = util.callbackify(delay);

// delayCallback 的最后一个参数是一个回调函数，第一个参数为异步函数 delay 的参数。
delayCallback(500, (err, d) => {
  // 回调函数的第一个参数是发生错误时的错误信息，第二个值是 resolve 的值。
  console.log(d);
});