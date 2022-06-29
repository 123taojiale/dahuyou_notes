// 指不定谁先输出
setImmediate(() => {
  console.log("setImmediate aaa");
});

setTimeout(() => {
  console.log("setTimeout aaa");
}, 0);

// 它们的效果类似，但是还是有区别的。
// setImmediate，浏览器环境下的全局对象 window 并没有该成员，这是 node 环境下特有的。
// setImmediate 的作用类似于 setTimeout 0，它也是异步的。
// 但是，它们还是有区别的，要想弄懂它们之间的区别，我们还得知道 node 的生命周期。（node 生命周期，在 1-12 中介绍）