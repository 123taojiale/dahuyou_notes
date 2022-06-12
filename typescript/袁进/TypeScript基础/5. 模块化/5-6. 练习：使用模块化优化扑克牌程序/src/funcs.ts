import { Colors, Nums } from "./enums";
import { Deck } from "./types";

// 创建一副牌
export function createDeck() {
  const deck: Deck = [];
  // 插入大小王
  deck.push({
    number: "joker",
  });
  // 插入大王
  deck.push({
    number: "JOKER",
  });
  // 插入 A ~ K
  const colorKeys = Object.keys(Colors);
  const numKeys = Object.keys(Nums);
  for (let i = 0; i < colorKeys.length; i++) {
    for (let j = 0; j < numKeys.length; j++) {
      deck.push({
        number: Nums[numKeys[j]],
        color: Colors[colorKeys[i]]
      });
    }
  }
  deck.sort(() => Math.random() - 0.5); // 打乱牌序
  return deck;
}

// 打印一副扑克
export function printDeck(deck: Deck) {
  let result = "底牌：";
  const desk = deck.splice(0, 3); // 底牌
  desk.forEach((poker, i) => {
    result += poker.color ? ` ${poker.color}${poker.number}` : ` ${poker.number}`;
  });
  result += '\n用户1：'
  deck.forEach((poker, i) => {
    if(i % 17 === 0 && i !== 0) result += `\n用户${i / 17 + 1}：`;
    result += poker.color ? ` ${poker.color}${poker.number}` : ` ${poker.number}`;
  });
  console.log(result);
}