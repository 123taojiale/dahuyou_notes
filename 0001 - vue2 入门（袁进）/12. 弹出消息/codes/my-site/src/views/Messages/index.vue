<template>
  <div class="messages-container">
    <button @click="handleClick">显示评论</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$showMessage({
        content: "数据加载失败",
        type: "error",
        duration: 1000,
        cb: () => {
          console.log("测试结束");
        },
      });
    },
  },
};
</script>

<style>
</style>