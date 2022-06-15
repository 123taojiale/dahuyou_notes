import { initDeck, printDeck } from "./funcs";

const deck = initDeck().sort(() => Math.random() - 0.5); // 洗牌

printDeck(deck);