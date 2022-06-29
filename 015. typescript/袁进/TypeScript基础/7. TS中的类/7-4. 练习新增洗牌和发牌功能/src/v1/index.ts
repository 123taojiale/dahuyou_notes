import { Deck } from "./deck"

console.log('------初始化一副牌------');
const deck = new Deck();

console.log('------开始洗牌------');
deck.shuffle();

console.log('------开始发牌------');
const publishResult = deck.publish();

console.log('玩家1 手牌：');
publishResult.player1.print();

console.log('玩家2 手牌：');
publishResult.player2.print();

console.log('玩家3 手牌：');
publishResult.player3.print();

console.log('底牌：');
publishResult.desk.print();

console.log('------玩家3 安牌面大小整理手牌------');
publishResult.player3.arrangeCards();
console.log('玩家3 手牌：');
publishResult.player3.print();