const str = 'Hello World!!!';
const reg1 = /World/;
reg1.lastIndex; // => 0
reg1.test(str); // => true

const reg2 = /World/y;
reg2.lastIndex; // 0
reg2.test(str); // false
reg2.lastIndex = 6;
reg2.test(str); // true