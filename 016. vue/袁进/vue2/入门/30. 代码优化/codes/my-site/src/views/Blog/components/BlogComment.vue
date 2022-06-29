<template>
  <div class="blog-component-container">
    <MessageArea
      @submit="handleSubmit"
      title="评论列表"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
      :list="data.rows"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComments, postComment } from "@/api/blog.js";

export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      // 分页获取博客 先写死，之后再做。
      // 下拉加载更多，现在还做不了。
      page: 1,
      limit: 10,
    };
  },
  mounted() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  computed: {
    // 是否还有更多的评论数据可以加载
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async handleSubmit(formData, cb) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      cb("评论成功");
    },
    // 判断是否需要加载更多
    handleScroll(dom) {
      // 数据正在加载中，或者，滚动容器没有传递过来
      if (this.isLoading || !dom) {
        return;
      }
      const range = 200; // 定义一个区间
      const distance = Math.abs(
        dom.scrollTop + dom.clientHeight - dom.scrollHeight
      );
      // 在区间内，加载更多
      if (distance <= range) {
        this.fetchMore();
      }
    },
    async fetchMore() {
      if (!this.hasMore) {
        // 没有更多数据了
        return;
      }
      // 开始加载更多的评论数据
      this.isLoading = true; // 开始加载更多数据
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false; // 数据已经加载好了
    },
  },
};
</script>

<style lang="less" scoped>
.blog-component-container {
  margin: 30px 0;
}
</style>
