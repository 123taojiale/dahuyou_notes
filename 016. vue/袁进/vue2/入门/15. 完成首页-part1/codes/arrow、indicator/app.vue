<template>
  <div class="app" ref="app">
    <!-- 轮播 -->
    <ul class="carousel-wrapper" :style="getMarginTop">
      <li class="item" v-for="item in datas" :key="item.id">
        <carouselItem :no="item.id"></carouselItem>
      </li>
    </ul>
    <!-- 上下按钮 -->
    <div class="arrow-container">
      <span
        class="arrow up"
        v-if="curIndex > 1"
        @click="switchIndex(curIndex - 1)"
        >上</span
      >
      <span
        class="arrow down"
        v-if="curIndex < datas.length"
        @click="switchIndex(curIndex + 1)"
        >下</span
      >
    </div>
    <!-- 右侧指示器 -->
    <ul class="indicator">
      <li
        class="dot"
        v-for="(item, index) in datas"
        :key="item.id"
        @click="switchIndex(index + 1)"
        :class="{ active: curIndex === index + 1 }"
      ></li>
    </ul>
  </div>
</template>

<script>
import carouselItem from "./carouselItem.vue";

export default {
  components: {
    carouselItem,
  },
  data() {
    return {
      curIndex: 1, // 当前轮播图的索引
      datas: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }], // 模拟的假数据
      containerHeight: null, // 容器的高度
    };
  },
  // 适应窗口尺寸的变化
  mounted() {
    this.getSize();
    window.addEventListener("resize", this.getSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getSize);
  },
  methods: {
    // 获取页面元素的相关尺寸信息
    getSize() {
      this.containerHeight = this.$refs.app.clientHeight; // 获取容器的高度值
      console.log(this.containerHeight);
    },
    // 依据传入的索引值来切换轮播图
    switchIndex(index) {
      this.curIndex = index;
    },
  },
  computed: {
    getMarginTop() {
      return {
        marginTop: -(this.curIndex - 1) * this.containerHeight + "px",
      };
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

body,
html {
  height: 100%;
}

/* 轮播 */
.app,
.carousel-wrapper,
.carousel-wrapper .item {
  width: 100%;
  height: 100%;
}

.carousel-wrapper .item {
  position: relative;
  width: 100%;
  height: 100%;
}

.app {
  overflow: hidden;
}

.carousel-wrapper {
  transition: 500ms;
}

/* 按钮 */
.arrow {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #ddd;
  border-radius: 20%;
  cursor: pointer;
}

.arrow.up {
  top: 25px;
  /* animation: 2s jump-up infinite; */
}

.arrow.down {
  bottom: 25px;
  /* animation: 2s jump-down infinite; */
}

@keyframes jump-up {
  0% {
    transform: translateY(15px) translateX(-50%);
  }
  25% {
    transform: translateY(-15px) translateX(-50%);
  }
  50% {
    transform: translateY(15px) translateX(-50%);
  }
  75% {
    transform: translateY(-15px) translateX(-50%);
  }
  100% {
    transform: translateY(15px) translateX(-50%);
  }
}

@keyframes jump-down {
  0% {
    transform: translateY(-15px) translateX(-50%);
  }
  25% {
    transform: translateY(15px) translateX(-50%);
  }
  50% {
    transform: translateY(-15px) translateX(-50%);
  }
  75% {
    transform: translateY(15px) translateX(-50%);
  }
  100% {
    transform: translateY(-15px) translateX(-50%);
  }
}

/* 指示器 */
.indicator {
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
}

.indicator .dot {
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 50%;
  margin-bottom: 7px;
  cursor: pointer;
}

.indicator .dot.active {
  background-color: #000;
}
</style>
