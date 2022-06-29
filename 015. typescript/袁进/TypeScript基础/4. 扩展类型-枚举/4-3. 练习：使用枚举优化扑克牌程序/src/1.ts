// 黑桃（Spade）、红桃（Heart）、方块（Diamond）、梅花（Club）
enum Colors { // 花色
  Heart = "❤",
  Spade = "♠",
  Club = "♣",
  Diamond = "◇",
}

// one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen
// 牌编号
enum Nums {
  one = "A",
  two = "2",
  three = "3",
  four = "4",
  five = "5",
  six = "6",
  seven = "7",
  eight = "8",
  nine = "9",
  ten = "10",
  eleven = "J",
  twelve = "Q",
  thirteen = "K",
}

type Poker = {
  // 一张牌
  number: Nums | "JOKER" | "joker";
  color?: Colors;
};

type Deck = Poker[]; // 一副牌

// 创建一副牌
function createDeck() {
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
