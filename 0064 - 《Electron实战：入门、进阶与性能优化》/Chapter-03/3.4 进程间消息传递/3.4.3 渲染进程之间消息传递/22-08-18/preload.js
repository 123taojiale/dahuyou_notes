const { contextBridge } = require("electron")

const listeners = {}

contextBridge.exposeInMainWorld('$bus', {
  // 监听某一个事件
  $on(eventName, handler) {
    if (!listeners[eventName]) {
      listeners[eventName] = new Set();
    }
    listeners[eventName].add(handler);
  },
  // 取消监听
  $off(eventName, handler) {
    if (!listeners[eventName]) {
      return;
    }
    listeners[eventName].delete(handler);
  },
  // 触发事件
  $emit(eventName, ...args) {
    if (!listeners[eventName]) {
      return;
    }
    for (const handler of listeners[eventName]) {
      handler(...args);
    }
  },
})