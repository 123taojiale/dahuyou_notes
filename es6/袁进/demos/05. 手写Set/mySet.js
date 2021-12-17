const MySet = (() => {
    return class MySet {
        constructor(iterable = []) { // 若调用的时候什么也没有传 那么默认传入的是一个空数组
            // 判断传入的参数是否是一个可迭代对象
            if (typeof iterable[Symbol.iterator] !== 'function') {
                // 若传入的参数不是一个可迭代对象，则抛出一个错误，接下来啥也不做。
                throw new TypeError(`${iterable}不是一个可迭代对象`);
            } else {
                // 若传入的参数满足要求，是一个可迭代对象，将数据依次取出，丢到 this._datas 数组中
                this._datas = [];
                for (const item of iterable) {
                    this.add(item);
                }
            }
        }

        /**
         * 向 set集合 中添加数据
         * 若数据已存在，则啥也不做，直接返回set集合本身即可
         * 若数据未存在，则新增一个数据，再返回set集合本身
         * @param {*} item
         * @returns set集合本身
         */
        add(item) {
            if (this.has(item)) {
                // 数据已存在
                return this;
            } else {
                // 数据未存在
                this._datas.push(item);
                return this;
            }
        }

        /**
         * 判断 set集合 中是否存在指定的数据
         * 若存在，则返回 true
         * 若不存在，则返回 false
         * @param {*} item
         * @returns
         */
        has(item) {
            for (const val of this._datas) {
                if (this.isEqual(item, val)) {
                    return true;
                }
            }
            return false;
        }

        /**
         * 判断两个数据是否相同的依据
         * 若是 +0 和 -0 则认为这两个数据是相同的
         * 否则使用 Object.is 的规则来判断
         * @param {*} data1
         * @param {*} data2
         */
        isEqual(data1, data2) {
            /* 0 -0 +0 这三个数使用全等运算符 === 来判断，得到的结果都是相同的 */
            if (data1 === 0 && data2 === 0) {
                return true;
            } else {
                return Object.is(data1, data2);
            }
        }

        /**
         * 删除 set集合 中的指定数据
         * 若删除成功，则返回 true
         * 若删除失败，则返回 false
         * @param {*} item
         */
        delete(item) {
            for (let i = 0; i < this._datas.length; i++) {
                const val = this._datas[i];
                if (this.isEqual(item, val)) { // 查找到了匹配的成员，执行删除操作，并返回 true
                    this._datas.splice(i, 1);
                    return true;
                }
            }
            // 没有匹配的成员，啥也不做，直接返回 false
            return false;
        }

        /**
         * 清空 set集合
         */
        clear() {
            this._datas.length = 0;
        }

        /**
         * 获取 set集合 成员数量
         */
        get size() {
            return this._datas.length;
        }

        /**
         * set集合的实例方法
         * 参数1：每次迭代结果的数据
         * 参数2：每次迭代结果的数据
         * 参数3：set集合 本身
         * @param {Function} cb 回调函数
         */
        forEach(cb) {
            for (const item of this._datas) {
                cb(item, item, this);
            }
        }

        /**
         * set集合 本身就是一个可迭代对象
         */
        *[Symbol.iterator]() {
            for (const item of this._datas) {
                yield item;
            }
        }
    }
})();