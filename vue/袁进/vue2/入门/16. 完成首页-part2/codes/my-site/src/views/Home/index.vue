<template>
  <div class="home-container" ref="container" @wheel="handleWheel">
    <!-- 轮播图区域 -->
    <ul class="carousel-container" :style="carouselContainerStyle" @transitionend="handleTransitionend">
      <li v-for="item in banners" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>

    <!-- 上下按钮区域 -->
    <div
      class="icon arrow-up"
      v-show="currentIndex > 0"
      @click="handleClick(currentIndex - 1)"
    >
      <Icon type="arrowUp" />
    </div>

    <div
      class="icon arrow-down"
      v-show="currentIndex < banners.length - 1"
      @click="handleClick(currentIndex + 1)"
    >
      <Icon type="arrowDown" />
    </div>

    <!-- 右侧指示器区域 -->
    <ul class="indicator">
      <li
        v-for="(item, i) in banners"
        :key="item.id"
        @click="handleClick(i)"
        :class="{ active: currentIndex === i }"
      ></li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
@import url(~@/styles/mixin.less);
@import url(~@/styles/var.less);

.home-container {
  .self-fill(); // 撑满

  // 轮播图区域
  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 500ms;

    li {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }

  // 上下按钮区域
  @gap: 25px;
  @jump: 5px;
  .icon {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 30px;
    height: 30px;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;

    &.arrow-up {
      top: @gap;
      animation: 2s jump-up infinite;
    }

    &.arrow-down {
      bottom: @gap;
      animation: 2s jump-down infinite;
    }

    // 动画效果
    @keyframes jump-up {
      0% {
        transform: translateY(@jump);
      }
      50% {
        transform: translateY(-@jump);
      }
      100% {
        transform: translateY(@jump);
      }
    }

    @keyframes jump-down {
      0% {
        transform: translateY(-@jump);
      }
      50% {
        transform: translateY(@jump);
      }
      100% {
        transform: translateY(-@jump);
      }
    }
  }

  // 右侧指示器区域
  .indicator {
    // 垂直居中
    .self-center();
    left: auto;
    transform: translateY(-50%);

    right: 30px;

    li {
      width: 8px;
      height: 8px;
      background-color: @words;
      border-radius: 50%;
      cursor: pointer;
      margin-bottom: 10px;
      box-sizing: border-box;
      border: 1px solid #fff;

      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>

<script>
import Icon from "@/components/Icon";
import CarouselItem from "./CarouselItem.vue";
import getBanners from "@/api/banners.js"; // 获取远程数据的接口

export default {
  name: "Home",
  // 获取远程接口的数据
  async created() {
    this.banners = await getBanners();
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight; // 获取容器的高度值
    window.addEventListener("resize", this.handleResize); // 窗口尺寸发生变化后，重新获取窗口尺寸。
  },
  beforeDestroy(){
    window.removeEventListener("resize", this.handleResize);
  },
  data() {
    return {
      banners: [],
      currentIndex: 0, // 当前轮播图的索引
      containerHeight: 0, // 容器的高度
      isSwitching: false, // 当前是否正处于切换状态
    };
  },
  components: {
    Icon,
    CarouselItem,
  },
  methods: {
    // 点击 -> 切换当前索引
    handleClick(newIndex) {
      this.currentIndex = newIndex;
    },
    // 滚动 -> 切换当前索引
    handleWheel(e) {
      if(this.isSwitching) return; // 若当前正处于切换状态，则什么也不做。
      // 显示下一张
      if (e.deltaY > 5 && this.currentIndex < this.banners.length - 1) {
        this.isSwitching = true;
        this.currentIndex++;
      }
      // 显示上一张
      if (e.deltaY < -5 && this.currentIndex > 0) {
        this.isSwitching = true;
        this.currentIndex--;
      }
    },
    // 状态切换
    handleTransitionend() {
      this.isSwitching = false; // 当轮播图容器的过渡效果结束时，表示切换状态结束。
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    }
  },
  computed: {
    // 切换当前索引 -> 切换轮播图
    carouselContainerStyle() {
      return {
        marginTop: -this.currentIndex * this.containerHeight + "px",
      };
    },
  },
};
</script>