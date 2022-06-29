module.exports = class Pocker {
    /**
     * pocker 的构造函数
     * @param {Number} color 扑克的颜色
     * @param {Number} num 扑克的数字
     */
    constructor(color, num) {
        this.color = color;
        this.num = num;
    }

    toString() {
        // console.log(this.color, this.num);
        let str = '';
        // 确定扑克的数值
        if (this.num === 14) { // 表示小王
            str = 'joker';
        } else if (this.num === 15) { // 表示大王
            str = 'JOKER';
        } else if (this.num === 1) {
            str = 'A';
        } else if (this.num === 11) {
            str = 'J';
        } else if (this.num === 12) {
            str = 'Q';
        } else if (this.num === 13) {
            str = 'K';
        } else { // 2-10
            str = this.num;
        }
        // 确定扑克的花色 ♣、♥、♦、♠
        if (this.color === 1) {
            str = '♣' + str;
        } else if (this.color === 2) {
            str = '♥' + str;
        } else if (this.color === 3) {
            str = '♦' + str;
        } else if (this.color === 4) {
            str = '♠' + str;
        }
        return str;
    }
}