import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex); // 使用 Vuex 组件

// 使用 Promise 模拟一个异步的 setTimeout
const delay = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  })
}

const store = new Vuex.Store({
  // 定义仓库的初始状态
  state: {
    count: 0,
  },
  // mutations 突变
  mutations: {
    // 参数 state 表示的是仓库的当前状态
    increase(state) {
      state.count++;
    },
    decrease(state) {
      state.count--;
    },
    power(state, payload) {
      state.count **= payload;
    }
  },
  actions: {
    async asyncIncrease(ctx) {
      await delay(1000);
      ctx.commit("increase");
    },
    async asyncDecrease (ctx) {
      await delay(1000);
      ctx.commit("decrease");
    }
  }
});

window.store = store;

export default store;