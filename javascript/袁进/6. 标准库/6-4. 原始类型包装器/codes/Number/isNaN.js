/*
window 里面也有 isNaN
*/
console.log(Number.isNaN); // ƒ isNaN() { [native code] }
console.log(window.isNaN); // ƒ isNaN() { [native code] }
console.log(Number.isNaN === window.isNaN); // false