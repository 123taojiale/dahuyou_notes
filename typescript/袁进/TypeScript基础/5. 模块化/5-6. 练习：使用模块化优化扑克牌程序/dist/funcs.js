"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDeck = exports.createDeck = void 0;
const enums_1 = require("./enums");
// 创建一副牌
function createDeck() {
    const deck = [];
    // 插入大小王
    deck.push({
        number: "joker",
    });
    // 插入大王
    deck.push({
        number: "JOKER",
    });
    // 插入 A ~ K
    const colorKeys = Object.keys(enums_1.Colors);
    const numKeys = Object.keys(enums_1.Nums);
    for (let i = 0; i < colorKeys.length; i++) {
        for (let j = 0; j < numKeys.length; j++) {
            deck.push({
                number: enums_1.Nums[numKeys[j]],
                color: enums_1.Colors[colorKeys[i]]
            });
        }
    }
    deck.sort(() => Math.random() - 0.5); // 打乱牌序
    return deck;
}
exports.createDeck = createDeck;
// 打印一副扑克
function printDeck(deck) {
    let result = "底牌：";
    const desk = deck.splice(0, 3); // 底牌
    desk.forEach((poker, i) => {
        result += poker.color ? ` ${poker.color}${poker.number}` : ` ${poker.number}`;
    });
    result += '\n用户1：';
    deck.forEach((poker, i) => {
        if (i % 17 === 0 && i !== 0)
            result += `\n用户${i / 17 + 1}：`;
        result += poker.color ? ` ${poker.color}${poker.number}` : ` ${poker.number}`;
    });
    console.log(result);
}
exports.printDeck = printDeck;
