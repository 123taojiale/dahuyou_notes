function biaoBai(god, callback) {
  console.log(`邓哥向女神【${god}】发出了表白短信`);
  setTimeout(() => {
    if (Math.random() < 0.1) {
      callback(true);
    } else {
      callback(false);
    }
  }, 1000);
}