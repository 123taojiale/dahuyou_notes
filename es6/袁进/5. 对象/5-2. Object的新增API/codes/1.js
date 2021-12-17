// 两个怪异的现象
NaN === NaN; // false NaN 与任何值都不相等 包括自身
+0 === -0; // true 它们应该是不相等的 因为 + 和 - 两个符号位不一样

Object.is(NaN, NaN); // true 符合常理
Object.is(+0, -0); // false 符合常理