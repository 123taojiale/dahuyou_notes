/*
在函数内部返回 promise
*/
function biaoBai(god) { // 返回一个 promise
  return new Promise((resolve, reject) => {
    console.log(`邓哥向【${god}】发出了表白短信`);
    setTimeout(() => {
      if (Math.random() < 0.1) {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 3000);
  });
}
const pro = biaoBai('女神1');
pro.then(result => {
  console.log(result);
});
/*
最后的写法：
  const pro = biaoBai('女神1');
  pro.then(result => {
    console.log(result);
  });
其实可以改写为下面这样的形式：
  biaoBai('女神1').then(result => {
    console.log(result);
  });
会发现这么写的话，程序的可读性就很好。
向“女神1”表白，若程序逻辑正常（没有发生错误），那么将得到的结果 result 打印。
*/