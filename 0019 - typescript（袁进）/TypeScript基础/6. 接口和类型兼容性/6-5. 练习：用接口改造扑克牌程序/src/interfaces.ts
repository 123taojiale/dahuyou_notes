import { Color, Number } from "./enums";

// 一张牌
interface Poker {
  getString(): string;
};

// 大小王
interface JokerPoker extends Poker {
  type: "big" | "small";
}

// A~K
export interface NormalPoker extends Poker {
  color: Color;
  number: Number;
}

// 一副牌
export type Deck = (JokerPoker | NormalPoker)[];