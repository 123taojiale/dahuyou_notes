/*
使用 Promise.all 来实现。
*/
function biaobai(god) {
  return new Promise((resolve, reject) => {
    console.log(`邓哥向女神【${god}】发出了表白短信`);
    setTimeout(() => {
      if (Math.random() < 0.1) { // 同意了
        resolve(true);
      } else { // 拒绝了
        resolve(false);
      }
    },
     Math.floor(Math.random() * (3000 - 1000) + 1000));
  });
}

let agreeGod = null; // 同意邓哥的第一个女神
let pros = [];

for (let i = 1; i <= 20; i++) {
  const god = `女神${i}`;
  pros.push(biaobai(god).then(result => {
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
    return result;
  }));
}

// 做日志记录
Promise.all(pros).then(results => {
  console.log(`日志记录: ${results}`);
});