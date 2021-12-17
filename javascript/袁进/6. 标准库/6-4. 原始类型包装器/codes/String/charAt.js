/*
charAt：得到指定位置的字符
字符串也是一个伪数组
*/
var s = "abc";
s.cahrAt(0); // "a"
s[0]; // "a"
// 区别
s.charAt(10); // ""
s[10]; // undefined