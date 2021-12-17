<template>
  <div class="home-container" ref="container" @wheel="handleWheel($event)">
    <!-- 轮播图 -->
    <ul
      class="carousel-container"
      :style="carouselContainerStyle"
      @transitionend="handleTransitionend"
    >
      <li v-for="item in banners" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <!-- 箭头区域 -->
    <div
      class="icon arrow-up"
      @click="handleClick(currentIndex - 1)"
      v-show="currentIndex > 0"
    >
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon arrow-down"
      @click="handleClick(currentIndex + 1)"
      v-show="currentIndex < banners.length - 1"
    >
      <Icon type="arrowDown" />
    </div>
    <!-- 指示器区域 -->
    <ul class="indicator">
      <li
        v-for="(item, i) in banners"
        :key="item.id"
        class="dot"
        @click="handleClick(i)"
        :class="{ active: currentIndex === i }"
      ></li>
    </ul>
    <!-- loading 效果的 img（组件） -->
    <Loading v-if="isLoading" />
  </div>
</template>

<style lang="less" scoped>
@import url(~@/styles/mixin.less);
@import url(~@/styles/var.less);

.home-container {
  .self-fill();

  // 测试
  // width: 500px;
  // height: 300px;
  // border: 2px solid #008c8c;
  // margin: 3em auto;

  // 轮播图区域
  .carousel-container {
    height: 100%;
    transition: 500ms;

    li {
      height: 100%;
      position: relative;
    }
  }

  // 箭头区域
  @gap: 25px;
  @jump: 5px;
  .icon {
    // 水平居中
    .self-center();
    transform: translateX(-50%);

    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    color: @gray;

    &.arrow-up {
      top: @gap;
      animation: 2s jump-up infinite;
    }

    &.arrow-down {
      top: auto;
      bottom: @gap;
      animation: 2s jump-down infinite;
    }

    // 上箭头动画
    @keyframes jump-up {
      0% {
        transform: translateX(-50%) translateY(@jump);
      }
      50% {
        transform: translateX(-50%) translateY(-@jump);
      }
      100% {
        transform: translateX(-50%) translateY(@jump);
      }
    }
    // 下箭头动画
    @keyframes jump-down {
      0% {
        transform: translateX(-50%) translateY(-@jump);
      }
      50% {
        transform: translateX(-50%) translateY(@jump);
      }
      100% {
        transform: translateX(-50%) translateY(-@jump);
      }
    }
  }

  // 指示器区域
  .indicator {
    // 垂直居中
    .self-center();
    left: auto;
    transform: translateY(-50%);

    right: 30px;

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: @dark;
      box-sizing: border-box;
      border: 1px solid #fff;
      margin-bottom: 10px;
      cursor: pointer;

      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>

<script>
import getBanners from "@/api/banners.js";
import CarouselItem from "./CarouselItem.vue";
import Icon from "@/components/Icon";
import Loading from "@/components/Loading";

export default {
  name: "Home",
  // 获取接口数据
  async created() {
    this.banners = await getBanners();
    this.isLoading = false; // 数据加载完成，隐藏 loading 效果的 img。
  },
  // 读取容器高度
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight; // 获取容器的高度值
    // 窗口尺寸变化时，重新读取容器高度。
    window.addEventListener("resize", this.handleResize);
  },
  // 组件销毁时，解除绑定在 window 对象身上的相关事件。
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  data() {
    return {
      banners: [],
      currentIndex: 0, // 当前页
      containerHeight: 0, // 容器的高度
      isSwitching: false, // 是否处于切换状态
      isLoading: true, // 当时是否正处于加载状态
    };
  },
  components: {
    CarouselItem,
    Icon,
    Loading,
  },
  methods: {
    // 通过点击，改变当前页的下标。
    handleClick(newIndex) {
      this.currentIndex = newIndex;
    },
    // 通过滚轮，改变当前页的下标。
    handleWheel(e) {
      if (this.isSwitching) return;
      if (e.deltaY > 5 && this.currentIndex < this.banners.length - 1) {
        this.isSwitching = true;
        this.currentIndex++;
      } else if (e.deltaY < -5 && this.currentIndex > 0) {
        this.isSwitching = true;
        this.currentIndex--;
      }
    },
    // 过渡动画结束，改变状态。
    handleTransitionend() {
      this.isSwitching = false;
    },
    // 窗口尺寸变化时，重新读取容器的高度值。
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
      // console.log('窗口的尺寸发生变化了，最新的尺寸值为：', this.containerHeight);
    },
  },
  computed: {
    // 当 currentIndex、containerHeight 发生改变时，轮播图容器运动。
    carouselContainerStyle() {
      return {
        marginTop: -this.currentIndex * this.containerHeight + "px",
      };
    },
  },
};
</script>