<template>
  <div class="app" ref="container">
    <h1>容器的高度：{{ containerHeight }}</h1>
    <h1>容器的宽度：{{ containerWidth }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      containerHeight: 0,
      containerWidth: 0,
    };
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    this.containerWidth = this.$refs.container.clientWidth;
  },
};
</script>