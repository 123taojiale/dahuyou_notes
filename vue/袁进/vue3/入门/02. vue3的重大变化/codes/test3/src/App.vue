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
  setup() {
    return {
      ...useCount(),
    };
  },
};
</script>
