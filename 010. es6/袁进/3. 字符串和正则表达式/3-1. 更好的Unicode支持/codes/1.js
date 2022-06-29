/*
1. length 和 正则 默认看的是码元
2. 给正则添加上 u 则按照码点来匹配
*/
// 𠮷 => 32位 => 1个码点 => 2个码元(\ud842\udfb7)
'𠮷'.charCodeAt(0); // => 55362
'𠮷'.charCodeAt(1); // => 55271
'𠮷'.charCodeAt(0).toString(16); // => d842
'𠮷'.charCodeAt(1).toString(16); // => dfb7

'𠮷'.codePointAt(0); // => 134071
'𠮷'.codePointAt(1); // => 57271 (这个数字很奇怪 不用管)
'𠮷'.codePointAt(0).toString(16); // => 20bb7
'𠮷'.codePointAt(0) > 0xffff; // => true

'𠮷'.length; // => 2
/^.$/.test('𠮷'); // => false
/^..$/.test('𠮷'); // => true
/^.{2}$/.test('𠮷'); // => true
/^.$/u.test('𠮷'); // => true

// 验证 '𠮷'.codePointAt(0) 由 '𠮷'.charCodeAt(0) 和 '𠮷'.charCodeAt(1) 组成
'\u{20bb7}'.normalize() === '\ud842\udfb7'.normalize(); // => true

// 吉 => 16位 => 1个码点 => 1个码元
'吉'.charCodeAt(0); // => 21513
'吉'.charCodeAt(0).toString(16); // => 5409
'吉'.charCodeAt(0) > 0xffff; // => false

'吉'.codePointAt(0); // => 21513
'吉'.codePointAt(0).toString(16); // => 5409
'吉'.codePointAt(0) > 0xffff; // => false

'吉'.length; // => 1
/^.$/.test('吉'); // => true
/^.$/u.test('吉'); // => true