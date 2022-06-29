<template>
  <div class="image-loader-container">
    <!-- 占位图 -->
    <img :src="placeholder" class="placeholder" v-if="!isEveryThingDone" />
    <!-- 原图 -->
    <img
      :src="original"
      class="original"
      @load="handleLoad"
      :style="{
        opacity: `${isLoaded ? 1 : 0}`,
        transition: `${duration}ms`,
      }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
      isEveryThingDone: false,
    };
  },
  props: {
    // 占位图路径
    placeholder: {
      type: String,
      required: true,
    },
    // 原图路径
    original: {
      type: String,
      required: true,
    },
    // 原图渐变的时间间隔
    duration: {
      type: Number,
      default: 500,
    },
  },
  methods: {
    // 抛出 load 事件
    handleLoad() {
      this.isLoaded = true;
      setTimeout(() => {
        this.isEveryThingDone = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/mixin.less);
.image-loader-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    // 撑满
    .self-fill();
    object-fit: cover;

    &.placeholder {
      filter: blur(2vw);
      z-index: -1;
    }
  }
}
</style>
