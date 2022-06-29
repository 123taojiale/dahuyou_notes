const util = require('./util.js');
const Pocker = require('./pocker.js');

/* 初始化一副牌 */
const pockers = []; // 一副牌

const joker = new Pocker(null, 14); // 小王
const JOKER = new Pocker(null, 15); // 大王

pockers.push(joker, JOKER);

for (let i = 1; i <= 13; i++) { // 遍历数字 1-52
    for (let j = 1; j <= 4; j++) { // 遍历 color
        const p = new Pocker(j, i);
        pockers.push(p.toString());
    }
}

/* 洗牌 */
util.sortRandom(pockers);
// console.log(pockers);

/* 发牌 */
const user1 = pockers.slice(0, 17); // [0, 17)
const user2 = pockers.slice(17, 34); // [17, 34)
const user3 = pockers.slice(34, 51); // [34, 51)
const desk = pockers.slice(51, 54); // [51, 54)

console.log('user1', user1.map(p => p + '  ').join(''));
console.log('user2', user2.map(p => p + '  ').join(''));
console.log('user3', user3.map(p => p + '  ').join(''));
console.log('desk', desk.map(p => p + '  ').join(''));