type Color = "♥" | "♠" | "♦" | "♣"; // 扑克花色
type NormalCard = {
  // 一张牌
  color: Color;
  mark: number;
};
type Deck = NormalCard[]; // 一副牌

function createDeck(): Deck {
  const deck: Deck = [];
  for (let i = 1; i <= 13; i++) {
    deck.push(
      {
        mark: i,
        color: "♠",
      },
      {
        mark: i,
        color: "♣",
      },
      {
        mark: i,
        color: "♥",
      },
      {
        mark: i,
        color: "♦",
      }
    );
  }
  return deck;
}

function printDeck(deck: Deck) {
  let result = "";
  deck.sort(() => Math.random() - 0.5); // 乱序
  deck.forEach((pocker, i) => {
    const num = pocker.mark;
    if (num <= 10) {
      result += num + pocker.color + " ";
    } else if (num === 11) {
      result += "J" + pocker.color + " ";
    } else if (num === 12) {
      result += "Q" + pocker.color + " ";
    } else if (num === 13) {
      result += "K" + pocker.color + " ";
    }
    // 每打印 17 张牌，换行。
    if ((i + 1) % 17 === 0) {
      result += "\n";
    }
  });
  console.log(result);
}

const deck = createDeck();
printDeck(deck);
