使用 vue3 提供的 composition api，可以实现功能的高度聚合，对于代码的复用，帮助是很大的，这也更加符合软件开发原则「高内聚」。

```html
<template>
  <h1>count:{{ countRef }}</h1>
  <p>
    <button @click="increase">increase</button>
  </p>
  <p>
    <button @click="decrease">decrease</button>
  </p>
</template>

<script>
import { ref } from "vue";

// 结合 vue3 中推出的 composition api，我们可以非常轻易地将一些功能模块给抽离出来，单独丢到一个模块中，这么设计更加符合开发软件的标准 - 高内聚
const useCount = () => {
  let countRef = ref(0);
  const increase = () => {
    countRef.value++;
  };
  const decrease = () => {
    countRef.value--;
  };
  return {
    countRef,
    increase,
    decrease,
  };
};

export default {
  name: "App",
  setup() {
    return {
      ...useCount(),
    };
  },
};
</script>
```

其中，这一部分就完全可以提取为一个单独的模块

```js
// useCount.js
export const useCount = () => {
  let countRef = ref(0);
  const increase = () => {
    countRef.value++;
  };
  const decrease = () => {
    countRef.value--;
  };
  return {
    countRef,
    increase,
    decrease,
  };
};
```