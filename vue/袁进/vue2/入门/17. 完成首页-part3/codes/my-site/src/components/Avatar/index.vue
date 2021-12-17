<template>
  <img :src="url" class="avatar-container" :style="getSize" />
</template>

<style lang="less" scoped>
.avatar-container {
  display: block;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
}
</style>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 150,
    },
  },
  computed: {
    getSize() {
      return {
        width: this.size + "px",
        height: this.size + "px",
      };
    },
  },
};
</script>