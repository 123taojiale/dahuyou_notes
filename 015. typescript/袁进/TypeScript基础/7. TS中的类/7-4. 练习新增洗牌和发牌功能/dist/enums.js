"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Number = exports.Color = void 0;
// 一张牌的花色
var Color;
(function (Color) {
    Color["heart"] = "\u2665";
    Color["spade"] = "\u2660";
    Color["club"] = "\u2663";
    Color["diamond"] = "\u2666";
})(Color = exports.Color || (exports.Color = {}));
// 每张牌的编号
var Number;
(function (Number) {
    Number["one"] = "A";
    Number["two"] = "2";
    Number["three"] = "3";
    Number["four"] = "4";
    Number["five"] = "5";
    Number["six"] = "6";
    Number["seven"] = "7";
    Number["eight"] = "8";
    Number["nine"] = "9";
    Number["ten"] = "10";
    Number["eleven"] = "J";
    Number["twelve"] = "Q";
    Number["thirteen"] = "K";
})(Number = exports.Number || (exports.Number = {}));
