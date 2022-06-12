import { Colors, Nums } from "./enums";
import { JokerPoker, NormalPoker, Poker, Pokers } from "./types";

interface publishResult {
  player1: Deck; // 玩家1手牌
  player2: Deck; // 玩家2手牌
  player3: Deck; // 玩家3手牌
  desk: Deck; // 底牌
}

export class Deck {
  cards: Pokers = [];

  constructor(cards?: Pokers) {
    if (cards) this.cards = cards;
    else this.init();
  }

  // 初始化一副牌
  init() {
    // 插入大小王
    let jo: JokerPoker = {
        type: "small",
        getString() {
          return "joker";
        },
        level: 15,
      },
      JO: JokerPoker = {
        type: "big",
        getString() {
          return "JOKER";
        },
        level: 16,
      };
    this.cards.push(jo, JO);
    // 插入 A ~ K
    const colorKeys = Object.keys(Colors);
    const numKeys = Object.keys(Nums);
    for (let i = 0; i < colorKeys.length; i++) {
      for (let j = 0; j < numKeys.length; j++) {
        this.cards.push({
          number: Nums[numKeys[j]],
          color: Colors[colorKeys[i]],
          getString() {
            return `${this.color}${this.number}`;
          },
          level: j !== 0 && j !== 1 ? j + 1 : j === 0 ? 13 : 14,
        } as NormalPoker);
      }
    }
    this.cards.sort(() => Math.random() - 0.5); // 打乱牌序
  }

  // 打印
  print() {
    let result = "";
    this.cards.forEach((poker) => (result += poker.getString() + "  "));
    console.log(result);
  }

  // 洗牌
  shuffle() {
    const len = this.cards.length;
    for (let i = 0; i < len; i++) {
      const targetIndex = this.getRandomIndex(0, len);
      // 交换 i、targetIndex
      [this.cards[i], this.cards[targetIndex]] = [
        this.cards[targetIndex],
        this.cards[i],
      ];
    }
  }

  // 发牌
  publish(): publishResult {
    const player1 = this.takeCards(17);
    const player2 = this.takeCards(17);
    const player3 = this.takeCards(17);
    const desk = new Deck(this.cards); // 剩下的 3 张底牌
    return {
      player1,
      player2,
      player3,
      desk,
    };
  }

  // 按照牌面大小整理手牌
  arrangeCards() {
    this.cards.sort((a, b) => a.level - b.level);
  }

  // 拿牌
  private takeCards(len: number): Deck {
    const cards: Pokers = [];
    for (let i = 0; i < len; i++) {
      cards.push(this.cards.shift() as Poker);
    }
    return new Deck(cards);
  }

  // 获取一个随机数，不包括最大值
  private getRandomIndex(min: number, max: number) {
    return Math.floor((max - min) * Math.random() + min);
  }
}
