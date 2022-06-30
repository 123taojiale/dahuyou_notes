/*
判断字符串中是否以指定的字符串开始
*/
'Saturday night plans'.startsWith('Sat'); // => true
'Saturday night plans'.startsWith('Sat', 0); // => true
'Saturday night plans'.startsWith('Sat', 3); // => false
'Saturday night plans'.startsWith('urday', 3); // => true