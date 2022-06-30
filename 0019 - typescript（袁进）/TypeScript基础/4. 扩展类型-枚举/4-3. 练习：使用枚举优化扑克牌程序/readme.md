使用枚举，优化代码。

**优化步骤：**

1. 使用枚举列出扑克牌花色的所有可能
2. 使用枚举列出扑克牌的数字范围
3. 修改后续相关逻辑

**最终结果**

![20220613142440](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20220613142440.png)

```ts
// 参考

export default 1;

// 一张牌的花色
enum Color {
  heart = "♥",
  spade = "♠",
  club = "♣",
  diamond = "♦",
}

enum Number {
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

// 一张牌
type Poker = {
  number: Number | "Joker" | "joker";
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
const printDeck = () => {
  const deck = initDeck().sort(() => Math.random() - 0.5); // 洗牌

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

printDeck();
```