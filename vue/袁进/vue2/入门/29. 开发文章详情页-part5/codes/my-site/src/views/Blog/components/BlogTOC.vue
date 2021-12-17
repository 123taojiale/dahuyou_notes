<template>
  <div class="blog-toc-container">
    <h2>文章分类</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import { debounce } from "@/utils";

export default {
  data() {
    return {
      activeAnchor: "",
    };
  },
  props: ["toc"],
  components: {
    RightList,
  },
  computed: {
    // 根据 toc 以及 activeAnchor 获取带有 isSelect 属性的 toc
    tocWithSelect() {
      const getTocWithSelect = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getTocWithSelect(t.children),
        }));
      };
      return getTocWithSelect(this.toc);
    },
    // 根据 toc 得到对应的 doms
    doms() {
      const doms = [];
      const addDoms = (toc = []) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addDoms(t.children);
          }
        }
      };
      addDoms(this.toc);
      return doms;
    },
  },
  methods: {
    // 依据当前被点击的目录，来更新路由信息中的 hash 部分，从而滚动到指定的标题。
    handleSelect(item) {
      location.hash = item.anchor;
    },
    // 设置 activeAnchor 为正确的值
    setSelect() {
      this.activeAnchor = ""; // 清空之前的状态
      // 判断当前的dom元素是不是应该被选中
      const range = 200; // 选中的标题的范围
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        // 获取当前 dom 相对于视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          // 在规定范围内
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          // 在固定范围下方
          return;
        } else {
          // 在规定内容上方
          this.activeAnchor = dom.id;
        }
      }
    },
  },
  mounted() {
    this.setSelectDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },
};
</script>

<style lang="less" scoped>
h2 {
  letter-spacing: 2px;
  font-size: 1em;
  margin: 0 0 1em;
}
</style>