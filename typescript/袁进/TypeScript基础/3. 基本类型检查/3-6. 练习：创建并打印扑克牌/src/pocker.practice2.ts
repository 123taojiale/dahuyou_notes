// 一张牌的花色
type Color = "❤" | "♠" | "♣" | "◇";

// 一张牌
type Poker = {
  number: number | string;
  color?: Color;
};

// 一副牌
type Deck = Poker[];

// 初始化一副牌
const initDeck = (): Deck => {
  const deck: Deck = [];
  // 处理大小王
  deck.push({
    number: "Joker", // 大王
  });
  deck.push({
    number: "joker", // 小王
  });
  // 初始 A ~ K
  for (let i = 1; i <= 13; i++) {
    // 处理每一张牌的序号
    let number: number | string = i;
    if (number === 1) number = "A";
    if (number === 11) number = "J";
    if (number === 12) number = "Q";
    if (number === 13) number = "K";
    // 每一张牌对应 4 种花色 => "❤" | "♠" | "♣" | "◇"
    deck.push({
      number,
      color: "❤",
    });
    deck.push({
      number,
      color: "♠",
    });
    deck.push({
      number,
      color: "♣",
    });
    deck.push({
      number,
      color: "◇",
    });
  }
  return deck;
};

// const deck = initDeck();

// console.log('查看一下初始化的一副扑克的内容：', deck);

// deck.forEach(item => {
//   if (item.color) { // 处理有花色的扑克
//     console.log(item.number + item.color);
//   } else { // 处理没有花色的扑克
//     console.log(item.number);
//   }
// })

// 发牌
const printDeck = () => {
  const deck = initDeck().sort(() => Math.random() - 0.5); // 洗牌

  let printInfo = "";
  deck.forEach((item, i) => {
    const no = i + 1; // 第几张牌
    if (no % 17 === 0) {
      console.log(`玩家${no / 17}：${printInfo}\n`);
      printInfo = "";
    } else if (no === 54) {
      console.log(`底牌：${printInfo}\n`);
      printInfo = "";
    } else {
      printInfo += item.color
        ? `${item.color}${item.number}  `
        : `${item.number}  `;
    }
  });
};

printDeck();
