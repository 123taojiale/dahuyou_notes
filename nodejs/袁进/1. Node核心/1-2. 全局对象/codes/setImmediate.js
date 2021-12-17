// 指不定谁先输出
setImmediate(() => {
  console.log("setImmediate aaa");
});

setTimeout(() => {
  console.log("setTimeout aaa");
}, 0);

// 它们的效果类似，但是还是有区别的。