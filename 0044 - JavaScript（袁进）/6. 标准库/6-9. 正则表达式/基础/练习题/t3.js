// 练习题3：将所有空格字符替换为逗号
// 测试字符串："1 2 3"
// 预期结果："1,2,3"

const s = "1 2 3";

// 错误写法
console.log(s.replace(" ", ",")); // => 1,2 3

console.log(s.replace(/ /, ",")); // => 1,2 3

console.log(s.replace(new RegExp(" "), ",")); // => 1,2 3

console.log(s.replace(new RegExp(/ /), ",")); // => 1,2 3

// 正确写法
console.log(s.replace(/ /g, ',')); // => 1,2,3

/*
错误的原因：
因为默认情况下，replace 它并不会全局去替换，只会替换一个
如果想要将所有的空格都替换掉，那么得手动开启 global 才行

多种写法：
上边展示的错误写法，虽然写法上是有所不同，但是实际上都是一样的，最终都是通过 RegExp 来创建正则实例
*/