var reg = /\d{3}/g;
var s = "433afdsaf34542fsdssfsd234";
var arr = s.match(reg);
console.log(`匹配${arr.length}次`, arr); // 匹配3次 (3) ["433", "345", "234"]