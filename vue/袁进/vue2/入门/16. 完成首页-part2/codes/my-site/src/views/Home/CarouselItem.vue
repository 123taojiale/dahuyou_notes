<template>
  <div class="carousel-item-container">
    <!-- 轮播图 -->
    <div class="img">
      <ImageLoader
        :original="carousel.bigImg"
        :placeholder="carousel.midImg"
        :duration="1000"
        @load="handleLoaded"
      />
    </div>

    <!-- 标题 -->
    <div class="title" ref="title" @transitionend="handleDesc">{{ carousel.title }}</div>
    <!-- 描述 -->
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<style lang="less" scoped>
@import url(~@/styles/mixin.less);
.carousel-item-container {
  position: relative;
  width: 100%;
  height: 100%;

  // 轮播图
  .img {
    width: 100%;
    height: 100%;
  }

  // 标题和描述
  .title,
  .desc {
    position: absolute;
    left: 30px;
    letter-spacing: 5px;
    color: #fff;

    text-shadow: 1px 0 5px rgba(0, 0, 0, 0.5), 0 1px 5px rgba(0, 0, 0, 0.5),
      -1px 0 5px rgba(0, 0, 0, 0.5), 0 -1px 5px rgba(0, 0, 0, 0.5);

    // 溢出隐藏，宽度不够不可换行，默认透明。
    overflow: hidden;
    white-space: nowrap;
    opacity: 0;
  }

  // 标题
  .title {
    font-size: 2em;
    top: calc(50% - 40px);
  }

  // 描述
  .desc {
    font-size: 1.2em;
    top: calc(50% + 20px);
  }
}
</style>

<script>
import ImageLoader from "@/components/ImageLoader";

export default {
  mounted() {
    // 获取相关 DOM 元素的尺寸
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
  },
  data() {
    return {
      titleWidth: 0, // 标题容器的宽度
      descWidth: 0, // 描述信息容器的宽度
    };
  },
  components: {
    ImageLoader,
  },
  name: "CarouselItem",
  props: ["carousel"],
  methods: {
    // 图片加载完后，显示标题和描述的文字。
    handleLoaded() {
      /* title 的过渡显示 */
      this.$refs.title.style.width = 0;
      // reflow
      this.$refs.title.clientWidth;
      // 过渡显示内容
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      /* desc 的过渡显示 */
      this.$refs.desc.style.width = 0;
      // reflow
      this.$refs.desc.clientWidth;
      // 过渡显示内容
      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    // 描述文本收缩效果
    handleDesc() {
      this.$refs.desc.style.letterSpacing = "3px";
    }
  },
};
</script>