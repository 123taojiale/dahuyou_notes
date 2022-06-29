/*
场景:
  邓哥心中有三个女神
  有一天，邓哥决定向第一个女神表白
  如果女神拒绝，则向第二个女神表白
  直到所有的女神都拒绝 或 有一个女神同意为止
  表白的时间间隔为 1s
需求：用代码模拟上面的场景
*/
function biaobai(god, callback) {
  console.log(`邓哥向女神【${god}】发出了表白短信`);
  setTimeout(() => {
    if (Math.random() < 0.1) { // 同意了
      callback(true);
    } else { // 拒绝了
      callback(false);
    }
  }, 1000);
}

biaobai('女神1', function (result) {
  if (result) {
    console.log('女神1 ==> 同意');
  } else {
    console.log('女神1 ==> 拒绝');
    biaobai('女神2', function (result) {
      if (result) {
        console.log('女神2 ==> 同意');
      } else {
        console.log('女神2 ==> 拒绝');
        biaobai('女神3', function (result) {
          if (result) {
            console.log('女神3 ==> 同意');
          } else {
            console.log('女神3 ==> 拒绝');
            console.log('所有女神都拒绝了');
          }
        });
      }
    });
  }
});