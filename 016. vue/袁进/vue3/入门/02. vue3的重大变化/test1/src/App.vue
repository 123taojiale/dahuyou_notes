<template>
  <!-- 在模板中访问 countRef 的值，相当于就是在 setup 函数中访问 countRef.value -->
  
  <p>{{ typeof countRef }}</p>
  <!-- number -->
  <p>
    <button @click="increase">countRef：{{ countRef }}</button>
  </p>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    let countRef = ref(0); // 命名规范：通常 ref 函数的返回值，在命名的时候会在变量名后边加上 Ref，表示这是个 ref 变量
    console.log(typeof countRef); // => object
    const increase = () => {
      countRef.value++;
    };
    // setup 函数的返回值，可以在模板中访问
    return {
      countRef,
      increase,
    };
  },
};
</script>
