import { Color, Number } from "./enums";

// 一张牌
export interface Poker {
  getString(): string;
  level: number; // 牌面大小
};

// 大小王
export interface JokerPoker extends Poker {
  type: "big" | "small";
}

// A~K
export interface NormalPoker extends Poker {
  color: Color;
  number: Number;
}

// 一副牌
export type Pokers = Poker[];