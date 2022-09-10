const buffer = Buffer.from("abcdef", "utf-8"); // 第二个参数指定的是编码方式
console.log(buffer); // => <Buffer 61 62 63 64 65 66>
// 一个字符占一个字节，一个字节可以用两位 16 进制来表示。

const buffer2 = Buffer.from("大", "utf-8");
console.log(buffer2); // => <Buffer e5 a4 a7>
// 一个汉字占 3 个字节。