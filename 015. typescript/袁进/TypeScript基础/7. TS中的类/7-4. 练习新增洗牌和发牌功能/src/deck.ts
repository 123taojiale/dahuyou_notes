import { Color, Number } from "./enums";
import { Pokers, NormalPoker, Poker, JokerPoker } from "./interfaces";

interface publishResult {
  player1: Deck; // 玩家1 手牌
  player2: Deck;
  player3: Deck;
  rest: Deck; // 底牌
}

export class Deck {
  cards: Pokers = [];

  constructor(cards?: Pokers) {
    if (cards) this.cards = cards;
    else this._initDeck();
  }

  // 初始化一副牌
  private _initDeck() {
    const deck: Pokers = [];
    // 处理大小王
    deck.push({
      type: "big" as "big", // 大王
      getString() {
        return "Joker";
      },
      level: 15,
    } as JokerPoker);
    deck.push({
      type: "small" as "small",
      getString() {
        return "joker"; // 小王
      },
      level: 14,
    } as JokerPoker);
    // 初始 A ~ K
    const colorKeys = Object.keys(Color);
    const numberKeys = Object.keys(Number);
    for (let i = 0; i < numberKeys.length; i++) {
      for (let j = 0; j < colorKeys.length; j++) {
        deck.push({
          number: Number[numberKeys[i]],
          color: Color[colorKeys[j]],
          getString() {
            return `${this.color}${this.number}`;
          },
          level: i + 1,
        } as NormalPoker);
      }
    }
    this.cards = deck;
  }

  // 洗牌
  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5); // 打乱牌的顺序
  }

  // 发牌
  publishCards(): publishResult {
    return {
      player1: this._tackPoker(17),
      player2: this._tackPoker(17),
      player3: this._tackPoker(17),
      rest: this._tackPoker(3),
    };
  }

  // 拿牌
  private _tackPoker(n: number): Deck {
    const result: Pokers = [];
    for (let i = 0; i < n; i++) {
      const item = this.cards.shift();
      result.push(item as Poker);
    }
    return new Deck(result);
  }

  // 展示手牌
  showCards() {
    let result: string = "";
    this.cards.forEach((item) => {
      result += item.getString() + "  ";
    });
    console.log(result);
  }

  // 整理手牌
  arrangeCards() {
    this.cards.sort((a, b) => a.level -  b.level);
  }
}