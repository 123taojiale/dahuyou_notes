import { Colors, Nums } from "./enums";

export interface Poker { // 一张牌
  getString: () => void
  level: number // 牌面大小
}

export interface JokerPoker extends Poker { // 一张大、小王
  type: "big" | "small"
}

export interface NormalPoker extends Poker { // 一张普通的牌
  number: Nums;
  color: Colors;
};

export type Pokers = Poker[]; // 若干张扑克