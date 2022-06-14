import { Color, Number } from "./enums";

// 一张牌
export type Poker = {
  number: Number | "Joker" | "joker";
  color?: Color;
};

// 一副牌
export type Deck = Poker[];