<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="getMousePos($event)"
    @mouseleave="setMousePos"
  >
    <div class="carousel-img" ref="img" :style="imgPos">
      <ImageLoader
        :original="carousel.bigImg"
        :placeholder="carousel.midImg"
        @load="showWords"
        :duration="2500"
      />
    </div>
    <div class="title" ref="title" @transitionend="shrinkDesc">
      {{ carousel.title }}
    </div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<style lang="less" scoped>
@import url(~@/styles/mixin.less);
.carousel-item-container {
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  overflow: hidden;

  // 轮播图片的容器
  .carousel-img {
    position: absolute;
    z-index: -1;
    width: 110%;
    height: 110%;
    transition: 500ms;
  }

  // 标题和描述
  .title,
  .desc {
    position: absolute;
    left: 30px;
    letter-spacing: 5px;
    text-shadow: 1px 0 5px rgba(0, 0, 0, 0.5), -1px 0 5px rgba(0, 0, 0, 0.5),
      0px 1px 5px rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    // 过渡
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
  }

  .title {
    font-size: 2em;
    top: calc(50% - 40px);
  }

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
    this.getSize();
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  data() {
    return {
      titleWidth: 0, // 标题的宽度
      descWidth: 0, // 描述信息的宽度
      containerHeight: 0, // 容器的高度
      containerWidth: 0, // 容器的宽度
      imgWidth: 0, // （放大后的）图片的宽度
      imgHeight: 0, // （放大后的）图片的高度
      mouseX: 0, // 鼠标的横坐标
      mouseY: 0, // 鼠标的纵坐标
      centerX: 0, // 中心点的横坐标
      centerY: 0, // 中心点的纵坐标
    };
  },
  name: "CarouselItem",
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  methods: {
    // 获取相关尺寸
    getSize() {
      /* title、desc */
      this.titleWidth = this.$refs.title.clientWidth;
      this.descWidth = this.$refs.desc.clientWidth;
      /* container */
      this.containerHeight = this.$refs.container.clientHeight;
      this.containerWidth = this.$refs.container.clientWidth;
      /* img */
      this.imgWidth = this.$refs.img.clientWidth;
      this.imgHeight = this.$refs.img.clientHeight;
      /* center、mouse */
      this.mouseX = this.centerX = this.containerWidth / 2;
      this.mouseY = this.centerY = this.containerHeight / 2;
    },
    // 原图加载完成之后，显示标题和描述信息。
    showWords() {
      // 显示标题
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // reflow
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      // 显示描述信息
      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      // reflow
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    // 描述信息收缩效果
    shrinkDesc() {
      this.$refs.desc.style.letterSpacing = "3px"; // 描述信息收缩效果
    },
    // 获取鼠标的坐标
    getMousePos(e) {
      console.log("move");
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    // 设置鼠标的坐标
    setMousePos() {
      // 回归到中心点坐标
      this.mouseX = this.centerX;
      this.mouseY = this.centerY;
    },
  },
  computed: {
    imgPos() {
      const extraWidth = this.imgWidth - this.containerWidth;
      const extraHeight = this.imgHeight - this.containerHeight;
      const left = -extraWidth * (this.mouseX / this.containerWidth);
      const top = -extraHeight * (this.mouseY / this.containerHeight);
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
  },
};
</script>