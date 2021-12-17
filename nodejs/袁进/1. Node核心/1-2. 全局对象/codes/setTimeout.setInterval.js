// const t1 = setTimeout(() => {}, 1000);
// console.log(t1);

/*
Timeout {
  _idleTimeout: 1000,
  _idlePrev: [TimersList],
  _idleNext: [TimersList],
  _idleStart: 42,
  _onTimeout: [Function (anonymous)],
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(kHasPrimitive)]: false,
  [Symbol(asyncId)]: 2,
  [Symbol(triggerId)]: 1
}
1s
*/

const t2 = setInterval(() => {}, 1000);
console.log(t2);
clearInterval(t2);

/*
Timeout {
  _idleTimeout: 1000,
  _idlePrev: [TimersList],
  _idleNext: [TimersList],
  _idleStart: 39,
  _onTimeout: [Function (anonymous)],
  _timerArgs: undefined,
  _repeat: 1000,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(kHasPrimitive)]: false,
  [Symbol(asyncId)]: 2,
  [Symbol(triggerId)]: 1
}
*/

// 可以把上述代码丢到浏览器环境下执行，会发现对应的 t1、t2 会是一个数字，而非对象。