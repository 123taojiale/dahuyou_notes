/*
判断字符串中是否以指定的字符串结尾
*/
const str = 'Cats are the best!';
str.length; // => 18
str.endsWith("best!"); // => true
str.endsWith("best!", str.length); // => true 第二个参数的默认值是字符串的长度
str.endsWith('best', str.length - 1); // => true 从第二个参数开始往前匹配子串