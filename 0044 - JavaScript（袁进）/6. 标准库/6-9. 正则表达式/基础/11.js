var s = "hello World ! Javascript.";
console.log(s.replace(" ", ",")); // hello,World ! Javascript. (默认非全局)
console.log(s.replace(new RegExp(/\s/, "g"), ",")); // hello,World,!,Javascript.
console.log(s); // hello World ! Javascript.

/*
String.prototype.replace ==> 被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串。
需求：将第一个空格字符替换为逗号 | 将全部不可见字符替换为逗号
s.replace(" ", ",") 等效写法：s.replace(new RegExp(" "),",")
s.replace(new RegExp(/\s/, "g"), ",") 等效写法：s.replace(/\s/g,",")
注意：replace 不会改变原始字符串 而是返回一个新的字符串
*/