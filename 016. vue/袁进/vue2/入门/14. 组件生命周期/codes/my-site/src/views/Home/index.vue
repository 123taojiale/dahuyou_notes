<template>
  <div class="home-container">
    <ImageLoader
      original="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration="3000"
      @load="handleLoaded"
    />
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoaded() {
      console.log("原图加载完成，并且已隐藏占位图。");
    },
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/mixin.less);
.home-container {
  .self-fill();
}
</style>