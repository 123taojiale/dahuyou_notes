console.log(`abc
def`);
/*
abc
def
*/

// 下面这种写法是错误的
/*
console.log("abc
def");
*/

// 正确写法：
console.log(`abc\
def`);
// abcdef

// 等效写法：
console.log("abcdef"); // abcdef