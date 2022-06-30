import { Color, Number } from "./enums";
import { Deck } from "./types";


// 初始化一副牌
export const initDeck = (): Deck => {
  const deck: Deck = [];
  // 处理大小王
  deck.push({
    number: "Joker", // 大王
  });
  deck.push({
    number: "joker", // 小王
  });
  // 初始 A ~ K
  const colorKeys = Object.keys(Color)
  const numberKeys = Object.keys(Number)
  for (let i = 0; i < numberKeys.length; i++) {
    for (let j = 0; j < colorKeys.length; j++) {
      deck.push({
        number: Number[numberKeys[i]],
        color: Color[colorKeys[j]]
      })
    }
  }
  return deck;
};

// const deck = initDeck();

// console.log('查看一下初始化的一副扑克的内容：', deck);

// 发牌
export const printDeck = (deck) => {
  let printInfo = "";
  deck.forEach((item, i) => {
    printInfo += item.color
      ? `${item.color}${item.number}  `
      : `${item.number}  `;
    const no = i + 1; // 第几张牌
    if (no % 17 === 0) {
      console.log(`玩家${no / 17}：${printInfo}\n`);
      printInfo = "";
    } else if (no === 54) {
      console.log(`底牌：${printInfo}\n`);
      printInfo = "";
    }
  });
};