let foo;
foo; // => string | number[]
// 类型保护
if (typeof foo === "string") {
    foo; // => string
    foo = foo.toUpperCase();
}
else {
    foo; // => number[]
    foo.forEach((v) => console.log(v));
}
/*
联合类型配合类型保护，可以明确变量 foo 具体是什么类型。
当 ts 能够明确某个变量具体是什么类型时，我们在调用它身上的一些方法时，都会有精准的智能提示。
*/ 
