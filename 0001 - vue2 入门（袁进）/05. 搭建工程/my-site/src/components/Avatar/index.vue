<template>
  <img class="avatar-container" :src="url" :style="getSize" />
</template>

<script>
export default {
  props: {
    // 头像地址
    url: {
      type: String,
      required: true,
    },
    // 头像宽、高
    size: {
      type: Number,
      default: 150,
    },
  },
  computed: {
    // 设置图片的宽度和高度
    getSize() {
      return {
        width: this.size + "px",
        height: this.size + "px",
      };
    },
  },
};
</script>

<style lang="less" scoped>
.avatar-container {
  display: block;
  object-fit: cover;
  cursor: pointer;
  border-radius: 50%;
}
</style>
