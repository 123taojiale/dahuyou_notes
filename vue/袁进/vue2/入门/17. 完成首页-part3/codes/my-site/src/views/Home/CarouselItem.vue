<template>
  <div class="carousel-item-container" ref="container" @mousemove="getMousePos" @mouseleave="setMousePos">
    <!-- 轮播图 -->
    <div class="img" ref="img" :style="getImgPos">
      <ImageLoader
        :original="carousel.bigImg"
        :placeholder="carousel.midImg"
        :duration="1000"
        @load="handleLoaded"
      />
    </div>

    <!-- 标题 -->
    <div class="title" ref="title" @transitionend="handleDesc">
      {{ carousel.title }}
    </div>
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
  overflow: hidden;

  // 轮播图
  .img {
    position: absolute;
    // z-index: -1;
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
    this.getInfo(); // 获取该组件所需要的一些尺寸、位置信息
  },
  data() {
    return {
      titleWidth: 0, // 标题容器的宽度
      descWidth: 0, // 描述信息容器的宽度
      containerHeight: 0, // 容器的高度
      containerWidth: 0, // 容器的宽度
      imgWidth: 0, // 容器的宽度
      imgHeight: 0, // 容器的高度
      mouseX: 0, // 鼠标的横坐标
      mouseY: 0, // 鼠标的纵坐标
      centerX: 0, // 容器的中心点横坐标
      centerY: 0, // 容器的中心点纵坐标
      extraWidth: 0, // 图片比容器多出的宽度
      extraHeight: 0, // 图片比容器多出的高度
    };
  },
  components: {
    ImageLoader,
  },
  name: "CarouselItem",
  props: ["carousel"],
  methods: {
    // 获取相关的尺寸
    getInfo() {
      /* title、desc */
      this.titleWidth = this.$refs.title.clientWidth;
      this.descWidth = this.$refs.desc.clientWidth;
      /* container */
      this.containerHeight = this.$refs.container.clientHeight;
      this.containerWidth = this.$refs.container.clientWidth;
      /* img */
      this.imgWidth = this.$refs.img.clientWidth;
      this.imgHeight = this.$refs.img.clientHeight;
      /* mouse */
      this.mouseX = this.centerX = this.containerWidth / 2;
      this.mouseY = this.centerY = this.containerHeight / 2;
      /* extra */
      this.extraWidth = this.imgWidth - this.containerWidth;
      this.extraHeight = this.imgHeight - this.containerHeight;
    },
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
    },
    // 当鼠标在图片容器上移动时，获取最新的鼠标坐标。
    getMousePos(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    // 当鼠标离开时，重新令图片居中。
    setMousePos() {
      // 设置图片的位置，实际上就是设置 mouseX、mouseY。居中就是将其设置为初值：容器的中心点坐标。
      this.mouseX = this.centerX;
      this.mouseY = this.centerY;
    }
  },
  computed: {
    getImgPos() {
      const left = -(this.mouseX / this.containerWidth) * this.extraWidth;
      const top = -(this.mouseY / this.containerHeight) * this.extraHeight;
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
  },
};
</script>