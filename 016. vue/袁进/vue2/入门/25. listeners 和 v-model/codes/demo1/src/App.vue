<template>
  <LoadingButton :click="handleClick" />
</template>

<script>
import LoadingButton from "./LoadingButton";
export default {
  components: {
    LoadingButton,
  },
  methods: {
    handleClick(newCount) {
      console.log("父组件", newCount);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("hahaha");
        }, 1000);
      });
    },
  },
};
</script>

<style>
body {
  text-align: center;
}
</style>
