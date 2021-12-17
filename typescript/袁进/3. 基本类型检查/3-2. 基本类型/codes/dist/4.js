function printObj(obj) {
    const vals = Object.values(obj);
    vals.forEach((v) => console.log(v));
}
printObj({
    name: "dahuyou",
    age: 22,
});
/*
会使用到 :object 的场景，一般就是对函数的参数进行限定。
*/ 
