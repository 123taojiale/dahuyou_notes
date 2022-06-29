"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nums = exports.Colors = void 0;
// 黑桃（Spade）、红桃（Heart）、方块（Diamond）、梅花（Club）
var Colors;
(function (Colors) {
    Colors["Heart"] = "\u2764";
    Colors["Spade"] = "\u2660";
    Colors["Club"] = "\u2663";
    Colors["Diamond"] = "\u25C7";
})(Colors = exports.Colors || (exports.Colors = {}));
// one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen
// 牌编号
var Nums;
(function (Nums) {
    Nums["one"] = "A";
    Nums["two"] = "2";
    Nums["three"] = "3";
    Nums["four"] = "4";
    Nums["five"] = "5";
    Nums["six"] = "6";
    Nums["seven"] = "7";
    Nums["eight"] = "8";
    Nums["nine"] = "9";
    Nums["ten"] = "10";
    Nums["eleven"] = "J";
    Nums["twelve"] = "Q";
    Nums["thirteen"] = "K";
})(Nums = exports.Nums || (exports.Nums = {}));
