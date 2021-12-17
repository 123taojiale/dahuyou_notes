// 写法1
// {a: b, b: a} = {a: 1, b: 2}; // => Uncaught SyntaxError: Unexpected token ':'

// 写法2
({a: b, b: a} = {a: 1, b: 2});
a; // => 2
b; // => 1