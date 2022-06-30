/*
sort：对数组进行排序
*/
var arr1 = [3, 1, 2, 4, 6, 5];
arr1.sort();
console.log(arr1); // => [1, 2, 3, 4, 5, 6]



var arr2 = [3, 211, 32, 11, 5, 4];
arr2.sort();
console.log(arr2); // => [11, 211, 3, 32, 4, 5]



var arr3 = [3, 211, 32, 11, 5, 4];
arr3.sort(function (a, b) {
    return a - b; // a - b ==> 升序（越往后越大）
    // return b - a; // b - a ==> 降序（越往后越小）
});
console.log(arr3); // => [3, 4, 5, 11, 32, 211]



var arr4 = [3, 211, 32, 11, 5, 4];
arr4.sort(function (a, b) {
    return b - a;
});
console.log(arr4); // => [211, 32, 11, 5, 4, 3]



var arr5 = [3, 211, 32, 11, 5, 4];
// 随机打乱顺序(洗牌)
arr5.sort(function (a, b) {
    return Math.random() - 0.5;
});
console.log(arr5); // => [ 11, 32, 5, 211, 3, 4 ]