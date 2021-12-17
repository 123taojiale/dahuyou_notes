<template>
  <div class="app" ref="app">
    <ul
      class="carousel-container"
      @wheel="handleWheel"
      :style="getMarginTop"
      @transitionend="transitionEnd"
    >
      <li class="item" v-for="item in datas" :key="item.id" :class="item.color">
        {{ item.id }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      containerHeight: null, // 容器的高度
      curIndex: 1, // 当前的轮播图索引
      isSwitching: false, // 当前是否正处于滚动状态
      datas: [
        { color: "red", id: 1 },
        { color: "blue", id: 2 },
        { color: "green", id: 3 },
        { color: "yellow", id: 4 },
      ],
    };
  },
  mounted() {
    this.containerHeight = this.$refs.app.clientHeight;
    console.log("this.containerHeight ==> ", this.containerHeight);
  },
  methods: {
    handleWheel(e) {
      if (this.isSwitching || Math.abs(e.deltaY) <= 5) return;
      if (e.deltaY > 0) {
        this.curIndex =
          this.curIndex + 1 < this.datas.length
            ? this.curIndex + 1
            : this.datas.length;
      } else {
        this.curIndex = this.curIndex - 1 > 0 ? this.curIndex - 1 : 1;
      }
    },
    transitionEnd() {
      this.isSwitching = false;
    },
  },
  computed: {
    getMarginTop() {
      return {
        marginTop: -(this.curIndex - 1) * this.containerHeight + "px",
      };
    },
  },
  watch: {
    curIndex() {
      this.isSwitching = true;
    },
  },
};
</script>

<style>
@import url(./color.css);
* {
  padding: 0;
  margin: 0;
  list-style: none;
}

.app {
  width: 100px;
  height: 100px;
  border: 4px dashed #ddd;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}

.carousel-container {
  width: 100px;
  height: 400px;

  transition: 500ms;
}

.item {
  width: 100px;
  height: 100px;

  line-height: 100px;
  font-size: 2em;
  color: #fff;
  text-align: center;
}
</style>
