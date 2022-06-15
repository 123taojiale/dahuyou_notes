// import { Colors, Nums } from "./enums";

// export interface Poker { // 一张牌
//   getString: () => void
// }

// export interface JokerPoker extends Poker { // 一张大、小王
//   type: "big" | "small"
// }

// export interface NormalPoker extends Poker { // 一张普通的牌
//   number: Nums;
//   color: Colors;
// };

// export type Deck = Poker[]; // 一副牌

import { Colors, Nums } from "./enums";

export interface JokerPoker { // 一张大、小王
  type: "big" | "small"
  getString: () => void
}

export interface NormalPoker { // 一张普通的牌
  number: Nums;
  color: Colors;
  getString: () => void
};

export type Deck = (JokerPoker | NormalPoker)[];