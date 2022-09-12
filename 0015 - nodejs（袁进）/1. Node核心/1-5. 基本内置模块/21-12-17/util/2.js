const util = require("util");

function delayCallBack(duration, callback) {
  setTimeout(() => {
    callback(null, duration);
  }, duration);
}

const delay = util.promisify(delayCallBack);

delay(500).then((data) => {
  console.log(data); // => 500
});

(async () => {
  const r = await delay(500);
  console.log(r); // => 500
})();

// 注意：要按照开发规范来写，回调函数作为最后一个参数。util.promisify 也是按照规范来解析我们传入的回调函数的。
// Node.js 中回调规范，第一个参数是错误对象，callback(null, duration) 第一个参数传 null 表示没有错误
// 经过 util.promisify 处理过后的 delay 函数，我们在调用的时候传入的 500，dealy(500)，其实就是传递给 callback 的第二个参数