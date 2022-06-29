<template>
  <div class="image-loader-container">
    <!-- 原图 -->
    <img :src="placeholder" class="placeholder" v-if="!isEveryThingDone" />
    <!-- 占位图 -->
    <img
      :src="original"
      class="original"
      :style="getOriginalStyle"
      @load="handleLoaded"
    />
  </div>
</template>

<style lang="less" scoped>
@import url(~@/styles/mixin.less);

.image-loader-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    .self-fill();
    object-fit: cover;

    &.placeholder {
      filter: blur(2vw);
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      isLoaded: false, // 原图是否加载完成
      isEveryThingDone: false, // 所有动作是否都已完成
    };
  },
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    original: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  computed: {
    getOriginalStyle() {
      return {
        opacity: this.isLoaded ? 1 : 0,
        transition: this.duration + "ms",
      };
    },
  },
  methods: {
    handleLoaded() {
      this.isLoaded = true; // 原图加载完成
      setTimeout(() => {
        this.isEveryThingDone = true;
        this.$emit("load"); // 抛出事件 load
      }, this.duration);
    }
  },
};
</script>