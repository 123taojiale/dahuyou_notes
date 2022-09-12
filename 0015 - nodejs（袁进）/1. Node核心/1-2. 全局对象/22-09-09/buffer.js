const buffer = Buffer.from("abcdef", "utf-8"); // 第二个参数指定的是编码方式
console.log(buffer); // => <Buffer 61 62 63 64 65 66>
// 一个字符占一个字节，一个字节可以用两位 16 进制来表示。

const buffer2 = Buffer.from("大", "utf-8");
console.log(buffer2); // => <Buffer e5 a4 a7>
// 一个汉字占 3 个字节。

// 我们通常会在读文件、或者其它流操作时，会用到 buffer。
// 🤔 node.js 中的 buffer 和 es6 中提供的 buffer 有何不同呢？
// 现在来看，它们其实是一样的，没啥差异。
// 不过这里有点背景需要了解一下，就是 es6 是 2015 年出来的，但是 Node.js 出现的时间是 2009 年出现的，当 Node.js 出现的时候，es6 还没出来，但是 Node.js 中对 buffer 是有需求的，碍于 es 还没提供 buffer，所以 Node.js 就自己搞出了个 buffer。可是 es6 推出 buffer 支持后，Node.js 原先自己写的 buffer 其实就没用了，所以在 es6 出现之后呢，Node.js 就直接改用 es6 的 buffer 了，自己原先的那套 buffer 已经不用了。