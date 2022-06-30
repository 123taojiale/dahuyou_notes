<template>
  <Layout>
    <template #main>
      <div ref="mainContainer" class="main" v-loading="isLoading">
        <!-- 若文章数据未加载，则 BlogDetail 不显示 -->
        <BlogDetail :blog="data" v-if="data" />
        <BlogComponent v-if="!isLoading" />
      </div>
    </template>
    <template #right>
      <div class="right" v-loading="isLoading">
        <!-- 若文章数据未加载，则 BlogTOC 不显示 -->
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<style lang="less" scoped>
.main,
.right {
  position: relative;
  box-sizing: border-box;
  height: 100%;
  padding: 20px;
}

.main {
  width: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

.right {
  width: 300px;
  overflow-y: auto;
}
</style>

<script>
import fetchData from "@/mixins/fetchData.js";
import mainScroll from "@/mixins/mainScroll.js";
import { getBlog } from "@/api/blog.js";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail.vue";
import BlogTOC from "./components/BlogTOC.vue";
import BlogComponent from "./components/BlogComment.vue";

export default {
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComponent,
  },
  mixins: [fetchData(null),mainScroll("mainContainer")],
  methods: {
    // 根据当前的路由信息来获取文章对象
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
    // handleScroll() {
    //   this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    // },
    // // 设置容器滚动条的位置
    // handleSetMainScroll (top) {
    //   this.$refs.mainContainer.scrollTop = top;
    // }
  },
  // mounted() {
  //   this.$bus.$on("setMainScroll", this.handleSetMainScroll);
  //   this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  // },
  // beforeDestroy() {
  //   this.$bus.$emit("mainScroll");
  //   this.$bus.$off("setMainScroll", this.handleSetMainScroll);
  //   this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
  // },
  watch: {
    data() {
      const hash = location.hash;
      location.hash = "";
      // 浏览器渲染页面需要一定的时间，等一会儿后再给 location.hash 赋值。
      setTimeout(() => {
        location.hash = hash;
      }, 50);
    },
  },
};
</script>