import { Deck } from "./deck"

console.log('------初始化一副牌------');
const deck = new Deck();

// console.log(deck.cards);

console.log('------开始洗牌------');
deck.shuffleCards();

console.log('------开始发牌------');
const publishResult = deck.publishCards();

console.log('玩家1 手牌：');
publishResult.player1.showCards();

console.log('玩家2 手牌：');
publishResult.player2.showCards();

console.log('玩家3 手牌：');
publishResult.player3.showCards();

console.log('底牌：');
publishResult.rest.showCards();

console.log('------玩家3 安牌面大小整理手牌------');
publishResult.player3.arrangeCards();
console.log('玩家3 手牌：');
publishResult.player3.showCards();