"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const enums_1 = require("./enums");
class Deck {
    constructor(cards) {
        this.cards = [];
        if (cards)
            this.cards = cards;
        else
            this.init();
    }
    // 初始化一副牌
    init() {
        // 插入大小王
        let jo = {
            type: "small",
            getString() {
                return "joker";
            },
            level: 15,
        }, JO = {
            type: "big",
            getString() {
                return "JOKER";
            },
            level: 16,
        };
        this.cards.push(jo, JO);
        // 插入 A ~ K
        const colorKeys = Object.keys(enums_1.Colors);
        const numKeys = Object.keys(enums_1.Nums);
        for (let i = 0; i < colorKeys.length; i++) {
            for (let j = 0; j < numKeys.length; j++) {
                this.cards.push({
                    number: enums_1.Nums[numKeys[j]],
                    color: enums_1.Colors[colorKeys[i]],
                    getString() {
                        return `${this.color}${this.number}`;
                    },
                    level: j !== 0 && j !== 1 ? j + 1 : j === 0 ? 13 : 14,
                });
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
    publish() {
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
    takeCards(len) {
        const cards = [];
        for (let i = 0; i < len; i++) {
            cards.push(this.cards.shift());
        }
        return new Deck(cards);
    }
    // 获取一个随机数，不包括最大值
    getRandomIndex(min, max) {
        return Math.floor((max - min) * Math.random() + min);
    }
}
exports.Deck = Deck;
