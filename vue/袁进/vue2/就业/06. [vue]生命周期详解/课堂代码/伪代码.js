function Vue(options) {
  var data = options.data(); // 获取到组件身上的所有数据
  observe(data); // 变成响应式数据
  var methods = options.methods; // 获取到组件身上的所有方法

  // 使用 Object.defineProperty 将数据变成响应式的数据
  Object.defineProperty(this, "a", {
    get() {
      return data.a;
    },
    set(val) {
      data.a = val;
    },
  });

  // 绑定组件方法中的 this 指向，确保方法中的 this 始终指向组件实例
  Object.entries(methods).forEach(([methodName, fn]) => {
    this[methodName] = fn.bind(this);
  });

  // 当数据发生变化的时候，运行该函数（该函数中要处理的事儿很多）
  var updateComponent = () => {
    // ...
    this._update(this._render()); // 重新渲染
    // ...
  };

  // 每一个组件都对应一个 Watcher 实例，用于监听数据的变化
  new Watcher(updateComponent);
}

new Vue(vnode.componentOptions);