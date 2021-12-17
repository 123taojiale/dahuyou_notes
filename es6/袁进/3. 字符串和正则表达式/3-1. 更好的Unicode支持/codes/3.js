/*
使用其他方式来解决上述提到的问题，效果与 getLengthOfCodePoint 等效。
*/
const str = '𠮷𠮷𠮷𠮷𠮷 吉吉吉吉吉'; // 前面5个字是'𠮷' 后面5个字是'吉' 中间夹个空格

console.log(str.length); // 16
console.log(Array.from(str)); // (11) ["𠮷", "𠮷", "𠮷", "𠮷", "𠮷", " ", "吉", "吉", "吉", "吉", "吉"]
console.log(Array.from(str).length); // 11