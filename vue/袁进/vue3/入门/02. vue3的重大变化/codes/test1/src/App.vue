<template>
  <p>{{ typeof countRef }}</p>
  <!-- number -->
  <p>
    <button @click="increase">countRef：{{ countRef }}</button>
  </p>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let countRef = ref(0);
    console.log(typeof countRef); // => object
    const increase = () => {
      countRef.value++;
    };
    return {
      countRef,
      increase,
    };
  },
};
</script>
