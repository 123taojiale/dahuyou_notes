const MyMap = (() => {
    return class MyMap {
        constructor(iterable = []) {
            if (typeof iterable[Symbol.iterator] !== 'function') {
                throw new TypeError(`${iterable}不是一个可迭代对象`);
            } else {
                this._datas = [];
                for (const item of iterable) {
                    if (typeof item[Symbol.iterator] !== 'function') {
                        throw new TypeError(`${item}不是一个可迭代对象`);
                    }
                    this.set(item[0], item[1]);
                }
            }
        }

        /**
         * 设置 map集合 中的键值对
         * 若 key 已存在 则修改对应的 value 值即可
         * 若 key 不存在 则往map集合中添加一组键值对
         * @param {*} key
         * @param {*} value
         * @returns set集合本身
         */
        set(key, value) {
            const obj = this._getObj(key);

            if (obj) {
                obj.value = value;
            } else {
                this._datas.push({
                    key,
                    value
                });
            }
            return this;
        }

        /**
         * 查找指定的 key 是否存在
         * 若存在 则将匹配的对象返回
         * 若不存在 则返回undefined
         * @param {*} key
         * @returns
         */
        _getObj(key) {
            for (const item of this._datas) {
                if (this.isEqual(key, item.key)) {
                    return item;
                }
            }
        }

        /**
         * 判断两个键名是否相同
         * @param {*} data1
         * @param {*} data2
         */
        isEqual(data1, data2) {
            if (data1 === 0 && data2 === 0) {
                return true;
            } else {
                return Object.is(data1, data2);
            }
        }

        /**
         * 获取指定key所对应的value值
         * 若map集合中不存在对应的key 则返回 undefined
         * @param {*} key
         */
        get(key) {
            for (const item of this._datas) {
                if (this.isEqual(item.key, key)) {
                    return item.value;
                }
            }
        }

        /**
         * 判断 map集合 中是否存在对应的key
         * 存在 true
         * 不存在 false
         * @param {*} key
         */
        has(key) {
            return this._getObj(key) !== undefined;
        }

        /**
         * 删除map集合中对应的key的键值对数据
         * 删除成功 返回 true
         * 删除失败 返回 false
         * @param {*} key
         */
        delete(key) {
            for (let i = 0; i < this._datas.length; i++) {
                const item = this._datas[i];
                if (this.isEqual(item.key, key)) {
                    this._datas.splice(i, 1);
                    return true;
                }
            }
            return false;
        }

        /**
         * 清空 map集合 中的所有数据
         */
        clear() {
            this._datas.length = 0;
        }

        get size() {
            return this._datas.length;
        }

        /**
         * map集合 自身是一个可迭代对象
         */
        *[Symbol.iterator]() {
            for (const {key, value} of this._datas) {
                yield [key, value];
            }
        }

        /**
         * 回调函数的3个参数
         * 参数1：value
         * 参数2：key
         * 参数3：map集合本身
         * @param {*} callback
         */
        forEach(callback) {
            for (const {key, value} of this._datas) {
                callback(value, key, this);
            }
        }
    }
})();


const m1 = new Map([
    [1, 'A'],
    [1, 'A'],
    [2, 'B']
]);

const m2 = new MyMap([
    [1, 'A'],
    [1, 'A'],
    [2, 'B']
]);