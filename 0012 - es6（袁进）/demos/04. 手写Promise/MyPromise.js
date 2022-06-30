const MyPromise = (() => {
    const PENDING = 'pending', // unsettled 阶段的 pending 状态
        REJECTED = 'rejected', // settled 阶段的 rejected 状态
        FULFILLED = 'fulfilled', // settled 阶段的 fulfilled(resolved) 状态
        PromiseState = Symbol('[[PromiseState]]'), // 存放当前 Promise 的状态
        PromiseResult = Symbol('[[PromiseResult]]'), // 存放当前 Promise 的状态数据
        changeState = Symbol('changeState'), // 改变 Promise 的状态
        fulfilledList = Symbol('fulfilledList'), // 存放 thenable 的任务队列
        rejectedList = Symbol('rejectedList'), // 存放 catchable 的任务队列
        settleHandle = Symbol('settleHandle'), // then 和 catch 和后续处理
        linkPromise = Symbol('linkPromise'); // 实现 Promise 的串联

    return class MyPromise {
        constructor(executor) {
            this[PromiseState] = PENDING;
            this[PromiseResult] = undefined;
            this[fulfilledList] = [];
            this[rejectedList] = [];

            const resolve = data => {
                this[changeState](FULFILLED, data, this[fulfilledList]);
            }

            const reject = err => {
                this[changeState](REJECTED, err, this[rejectedList]);
            }

            try {
                executor(resolve, reject);
            } catch (err) {
                reject(err);
            }
        }

        /**
         * 改变当前 Promise 的状态
         * @param {*} newState 新的状态
         * @param {*} newValue 新的值
         * @param {*} queue 事件队列
         * @returns
         */
        [changeState](newState, newValue, queue) {
            if (this[PromiseState] !== PENDING) { // 状态不可逆
                return;
            } else { // 一旦状态发生改变, 那么做 3 件事儿
                this[PromiseState] = newState; // 1. 将当前的 Promise 的状态设置为新的状态
                this[PromiseResult] = newValue; // 2. 将当前的 Promise 的状态数据设置为新的状态数据
                queue.forEach(handler => { // 3. 将该状态对应的那个任务队列中存放的等待执行的事件处理函数依次取出 并 执行
                    handler(this[PromiseResult]);
                });
            }
        }

        /**
         * then 和 catch 的后续处理
         * @param {*} handler 事件处理函数
         * @param {*} immediatelyState 立即执行事件处理函数的状态
         * @param {*} queue 任务队列
         * @returns
         */
        [settleHandle](handler, immediatelyState, queue) {
            if (typeof handler !== 'function') { // 若传入的 handler 不是一个函数, 那么啥也不干, 直接 return
                return;
            }
            if (this[PromiseState] === immediatelyState) { // 若当前的 Promise 的状态就是立即执行状态, 那么直接执行 handler
                setTimeout(() => {
                    handler(this[PromiseResult]);
                }, 0);
            } else {
                queue.push(handler); // 否则 将 handler 推入事件队列, 等待当前的 Promise 的状态发生变化后再执行
            }
        }

        /**
         * 令 then 和 catch 返回 Promise 对象, 实现 Promise 的串联
         * @param {*} thenable fulfilled 状态的事件处理函数
         * @param {*} catchable rejected 状态的事件处理函数
         * @returns 新的 MyPromise 对象
         */
        [linkPromise](thenable, catchable) {
            /**
             * 决定返回的新的 MyPromise 对象的状态是 rejected 状态 还是 fulfilled 状态
             * @param {*} data Promise 的状态数据 即: this[PromiseResult]
             * @param {*} handler 事件处理函数 thenable/catchable
             * @param {*} resolve resolve函数
             * @param {*} reject reject函数
             */
            function exec(data, handler, resolve, reject) {
                try {
                    const result = handler(data);
                    if (result instanceof MyPromise) { // 若事件处理函数返回的结果是一个 Promise 对象, 那么 [linkPromise] 返回的新的 Promise 与该结果 Promise 的状态及状态数据都保持一致
                        result.then(d => { // 若该 Promise 对象变为 fulfilled 状态
                            resolve(d); // 那么调用 resolve 函数, 将 [linkPromise] 返回的 Promise 对象也变为 fulfilled 状态
                        }, err => { // 若该 Promise 对象变为 rejected 状态
                            reject(err); // 那么调用 reject 函数, 将 [linkPromise] 返回的 Promise 对象也变为 rejected 状态
                        });
                    } else {
                        resolve(result);
                    }
                } catch (reason) {
                    reject(reason);
                }
            }

            return new MyPromise((resolve, reject) => {
                this[settleHandle]((data) => {
                    if (typeof thenable !== 'function') { // 若当前的 Promise 已经变为 fulfilled 状态, 但是并没有对应的事件处理函数 thenable 来处理该状态(可能后续处理只注册了 catchable), 那么直接调用 resolve, 令返回的新的 Promise 状态也为 fulfilled 状态, 等待后续处理
                        resolve(data);
                        return;
                    }
                    exec(data, thenable, resolve, reject);
                }, FULFILLED, this[fulfilledList]);

                this[settleHandle]((err) => {
                    if (typeof catchable !== 'function') {
                        reject(err);
                        return;
                    }
                    exec(err, catchable, resolve, reject);
                }, REJECTED, this[rejectedList]);
            });
        }

        then(thenable, catchable) {
            return this[linkPromise](thenable, catchable); // 返回新的 Promise 对象, 实现串联
        }

        catch (catchable) {
            return this[linkPromise](undefined, catchable); // 返回新的 Promise 对象, 实现串联
        }
    }
})();