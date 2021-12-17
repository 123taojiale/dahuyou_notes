module.exports = {
    /**
     * 将一个数组的内容打乱
     * @param {Array} arr 数组
     */
    sortRandom(arr) {
        arr.sort(() => Math.random() - 0.5);
    }
}