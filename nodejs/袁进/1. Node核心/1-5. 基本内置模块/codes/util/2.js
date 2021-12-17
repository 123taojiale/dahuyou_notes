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