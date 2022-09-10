/* global.setTimeout 和 global.setInterval 和 global.setImmediate */
const timer1 = setTimeout(() => {
  console.log('timer1')
}, 1000) // 启动 setTimeout 计时器
console.log('typeof timer1 => ', typeof timer1) // typeof timer1 => object
clearTimeout(timer1) // 清除 setTimeout 计时器

const timer2 = setInterval(() => {
  console.log('timer2')
}, 1000) // 启动 setInterval 计时器
console.log('typeof timer2 => ', typeof timer2) // typeof timer2 => object
clearInterval(timer2) // 清除 clearInterval 计时器
// 可以把上述代码丢到浏览器环境下执行，会发现对应的 t1、t2 会是一个数字，而非对象。在 node 环境下，setTimeout 的作用和浏览器环境下的 setTimeout 相同。但是，在不同环境下，该函数的返回值有所不同（setInterval 也是）。在浏览器环境下，setTimeout 函数的返回值是一个数字。在 node 环境下，setTimeout 函数返回的是一个对象。

const timer3 = setImmediate(() => {
  console.log("timer3");
}) // 启动 setImmediate 计时器
console.log('typeof timer3 => ', typeof timer3) // typeof timer3 =>  object
clearImmediate(timer3) // 清除 setImmediate 计时器


// 对比 setTimeout 和 setInterval
setImmediate(() => {
  console.log("1");
});

setTimeout(() => {
  console.log("2");
}, 0);

// 它们的效果类似，但是还是有区别的。
// 1. setImmediate 是 node 环境下特有的，浏览器环境下的全局对象（window）并没有该成员。
// 2. setImmediate 的作用类似于 setTimeout 0，它也是异步的。但是，它们还是有区别的，要想弄懂它们之间的区别，我们还得知道 node 的生命周期。（node 生命周期，在 1-12 中介绍）其中 "1" 和 "2" 指不定谁会先输出
