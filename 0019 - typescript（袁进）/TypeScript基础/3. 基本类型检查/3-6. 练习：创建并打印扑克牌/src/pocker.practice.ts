type Colors = "❤" | "♠" | "♣" | "◇";

type Poker = {
  // 一张牌
  number: number | string,
  color?: Colors, // 大小王没有花色
};

type Deck = Poker[]; // 一副牌

// 创建一副牌
function createDeck() {
  const deck: Poker[] = [];
  // 插入 A ~ K
  for (let i = 1; i <= 13; i++) {
    let number: number | string = i;
    if (i === 1) number = "A";
    if (i === 11) number = "J";
    if (i === 12) number = "Q";
    if (i === 13) number = "K";
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
  // 插入大小王
  deck.push({
    number: "joker",
  });
  // 插入大王
  deck.push({
    number: "JOKER",
  });
  deck.sort(() => Math.random() - 0.5); // 打乱牌序
  return deck;
}

// 打印一副扑克
function printDeck(deck: Deck) {
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

const deck = createDeck();

printDeck(deck);

export {};