/*场景：
  邓哥心中有二十个女神，他决定用更加高效的办法；
  他同时给二十个女神表白，如果有女神同意，就拒绝其他的女神；
  并且，当所有的女神回复完成后，他要把所有的回复都记录到日志进行分析；
需求：用代码模拟上面的场景； */
function biaobai(god, callback) {
  console.log(`邓哥向女神【${god}】发出了表白短信`);
  setTimeout(() => {
      if (Math.random() < 0.1) { // 同意了
        callback(true);
      } else { // 拒绝了
        callback(false);
      }
    },
    Math.floor(Math.random() * (3000 - 1000) + 1000)); // 假设每个女神的回复需要 1~3 秒
}

let agreeGod = null; // 同意邓哥的第一个女神
const results = []; // 用于记录回复结果的数组

for (let i = 1; i <= 20; i++) {
  const god = `女神${i}`;
  biaobai(god, result => {
    results.push(result);
    if (result) {
      console.log(`${god}同意了`);
      if (agreeGod) {
        console.log(`邓哥回复${god}: 不好意思, 刚才朋友用我手机乱发的`);
      } else {
        agreeGod = god;
        console.log(`邓哥终于找到了真爱`);
      }
    } else {
      console.log(`${god}拒绝了`);
    }
    /*
    1. 日志记录逻辑代码的书写位置问题：
       日志记录应该是一块的功能模块，不应该写在表白函数的回调中，这不符合逻辑，因为，表白函数的回调应该就处理和表白相关的逻辑。
       但是，若使用传统的方式来实现该需求的话，日志记录的功能貌似也就只能写在表白函数的回调函数中了。
    2. 如何打印日志记录的问题：
       向每一个女神表白后，都要判断一下是否打印日志记录，这样的执行效率也相对较低。（判断多次）
       相对比较理想的情况应该是等到所有女神都有了返回结果之后，再打印日志记录，不过使用传统的方式还做不到。（所有请求都结束后自动触发，仅执行一次。）
      */
    /* [注] 下面这种写法是错误的
      if (i === 20) {
        console.log(`日志记录: ${results}`);
      }
      因为请求是异步的，而 i 自增到 20，是同步的，当 i 变到 20 后，实际上 results.length 还是 0。
     */
    if (results.length === 20) {
      console.log(`日志记录: ${results}`);
    }
  });
}
/*
这个案例主要解决的问题：多个异步之间的联系问题；
某个异步操作要等待多个异步操作的结果，对这种联系的处理，会让代码的复杂度剧增。
比如该案例中的日志记录, 就需要等到其他异步操作都完成后，才执行。
*/