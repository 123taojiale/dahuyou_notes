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
  },
};
</script>

<style lang="less" scoped>
.blog-component-container {
  margin: 30px 0;
}
</style>
