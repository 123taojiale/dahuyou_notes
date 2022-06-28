<template>
  <div id="app">
    <A />
    <B />
  </div>
</template>

<script>
import A from "./components/A.vue";
import B from "./components/B.vue";

export default {
  name: "App",
  components: {
    A,
    B,
  },
};
</script>

<style lang="less">
#app {
  display: flex;
  justify-content: center;
  text-align: center;

  .a-container,
  .b-container {
    width: 200px;
    height: 200px;
    margin: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button + button {
    margin-left: 10px;
  }
}
</style>
