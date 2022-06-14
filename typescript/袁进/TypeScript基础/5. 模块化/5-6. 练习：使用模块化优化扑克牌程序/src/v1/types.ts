// 存放类型别名的相关信息
import { Colors, Nums } from "./enums";

export type Poker = {
  // 一张牌
  number: Nums | "JOKER" | "joker";
  color?: Colors;
};

export type Deck = Poker[]; // 一副牌