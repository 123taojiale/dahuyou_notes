console.log(typeof Math); // "object"
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-1)); // 1
/*
Math.floor() 和 parseInt()
正数两者等效 但负数则不同
*/
console.log(Math.floor(1.2)); // 1
console.log(parseInt(1.2)); // 1
console.log(Math.floor(-1.2)); // -2
console.log(parseInt(-1.2)); // -1
console.log(Math.max()); // -Infinity
console.log(Math.max(1, 2, 32, 11, 52, 63)); // 63
console.log(Math.min()); // Infinity
console.log(Math.min(1, 2, 32, 11, 52, 63)); // 1
console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3); // 8
console.log(Math.round(0.5)); // 1
console.log(Math.round(1.2)); // 1
console.log(Math.round(-1.6)); // -2
console.log(Math.round(-1.5)); // -1
console.log(Math.round(-1.4)); // -1