<template>
  <div @click="handleClick" class="test-container"></div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit("boxClicked", "这里面是由子组件传递给父组件的事件参数");
    },
  },
};
</script>

<style>
.test-container {
  width: 100px;
  height: 100px;
  background-color: #008c8c;
}
</style>