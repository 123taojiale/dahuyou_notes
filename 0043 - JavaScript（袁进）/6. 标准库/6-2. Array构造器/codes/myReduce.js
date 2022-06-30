Array.prototype.myreduce = function (fn, initVal) {
  if (initVal === undefined) {
    initVal = this[0];
    for (let i = 1; i <= this.length - 1; i++) {
      console.log(initVal, this[i], i, this);
      initVal = fn(initVal, this[i], i, this);
    }
    return initVal;
  } else {
    for (let i = 0; i <= this.length - 1; i++) {
      console.log(initVal, this[i], i, this);
      initVal = fn(initVal, this[i], i, this);
    }
    return initVal;
  }
};

let r1 = [0, 1, 2, 3, 4].myreduce(function (p, n) {
  return p + n;
});

let r2 = [0, 1, 2, 3, 4].myreduce(function (p, n) {
  return p + n;
}, 0);

console.log(r2); // => 10
console.log(r1); // => 10