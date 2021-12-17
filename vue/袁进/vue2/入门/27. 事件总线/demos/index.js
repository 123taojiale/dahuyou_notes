// 测试事件总线
import eventBus from "./eventBus.js";

function handler1(data) {
  console.log("handler1", data);
}

function handler2(data) {
  console.log("handler2", data);
}

// 注册
eventBus.$on("event1", handler1); // 给 event1 添加一个事件处理函数 handler1
eventBus.$on("event1", handler2);
eventBus.$on("event2", handler1);

// 触发
eventBus.$emit("event1", 1); // handler1 1 handler2 1
eventBus.$emit("event2", 2); // handler1 2

// 取消
eventBus.$off("event1", handler1); // 将绑定在 event1 上的 handler1 取消

// 触发
eventBus.$emit("event1", 1); // handler2 1
eventBus.$emit("event2", 2); // handler1 2
