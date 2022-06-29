<template>
  <div class="app">
    <div v-if="randomNum < 0.33">1</div>

    <!-- 若 v-if 要控制的是一块区域（含多个元素），并不单单是一个元素，那么可以用 template 包裹一下。 -->
    <template v-else-if="randomNum > 0.33 && randomNum < 0.66">
      <div>2</div>
      <div>3</div>
    </template>

    <div v-else>4</div>
  </div>
</template>

<script>
export default {
  computed: {
    randomNum() {
      return Math.random();
    },
  },
};
</script>

<style>
body , html{
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5em;
}
</style>
