/*
使用串联的 promise 来实现 (属于 第4节 promise的串联 的知识点)
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
    }, 1000);
  });
}

biaobai('女神1').then(result => {
  if (result) {
    console.log('女神1 ==> 同意');
    return;
  } else {
    console.log('女神1 ==> 拒绝');
    return biaobai('女神2');
  }
}).then(result => {
  if (result === undefined) {
    return;
  } else if (result === true) {
    console.log('女神2 ==> 同意');
    return;
  } else {
    console.log('女神2 ==> 拒绝');
    return biaobai('女神3');
  }
}).then(result => {
  if (result === undefined) {
    return;
  } else if (result === true) {
    console.log('女神3 ==> 同意');
    return;
  } else {
    console.log('女神3 ==> 拒绝');
    console.log('所有女神都拒绝了');
  }
});