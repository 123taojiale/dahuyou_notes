let str: string = undefined;
/*
null 和 undefined 是所有其他类型的子类型，它们可以赋值给其他类型。
但是，在开启 "strictNullChecks": true 的情况下，会报错：不能将类型“undefined”分配给类型“string”。
*/