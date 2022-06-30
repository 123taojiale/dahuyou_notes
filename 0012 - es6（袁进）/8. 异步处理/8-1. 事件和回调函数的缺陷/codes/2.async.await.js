/*
使用 async 和 await 关键字来实现 (最后一节课的知识点)
*/
function biaobai(god) {
  console.log(`邓哥向女神【${god}】发出了表白短信`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) { // 同意了
        resolve(true);
      } else { // 拒绝了
        resolve(false);
      }
    }, 1000);
  });
}

async function handler() {
  let result = await biaobai('女神1');
  if (result) {
    console.log('女神1 ==> 同意');
    return;
  } else {
    console.log('女神1 ==> 拒绝');
    result = await biaobai('女神2');
  }
  if (result) {
    console.log('女神2 ==> 同意');
    return;
  } else {
    console.log('女神2 ==> 拒绝');
    result = await biaobai('女神3');
  }
  if (result) {
    console.log('女神3 ==> 同意');
    return;
  } else {
    console.log('女神3 ==> 拒绝');
    console.log('所有女神都拒绝了');
  }
}

handler();