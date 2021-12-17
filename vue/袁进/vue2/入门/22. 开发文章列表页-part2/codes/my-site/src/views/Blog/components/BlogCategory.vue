<template>
  <div class="blog-category-container">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<style lang="less" scoped>
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;

  h2 {
    font-weight: bolc;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>

<script>
import RightList from "./RightList.vue";
import fetchData from "@/mixins/fetchData.js";
import { getBlogCategories } from "@/api/blog.js";

export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    // 分类id
    categoryId() {
      return +this.$route.params.categoryId || -1; // 若路由信息中获取不到分类id，则使用默认值-1，表示所有分类（全部）。
    },
    // 页容量
    limit() {
      return +this.$route.query.limit || 10; // 若路由信息中无法获取页容量，则使用默认值 10，表示一页默认显示 10 条数据。
    },
    // 页面渲染的数据
    list() {
      // 对所有分类的文章数量进行求和
      const totalArticleAcount = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      );
      // 在最终的结果中加入全部分类这一项
      const result = [
        { name: "全部", id: -1, articleCount: totalArticleAcount }, // 加上全部分类这一项
        ...this.data,
      ];
      // 给每一项分类添加两个字段 isSelect、aside
      return result.map(item => ({
        ...item,
        isSelect: item.id === this.categoryId, // 给每一项数据添加上 isSelect 字段，用于判断当前项是否被选中
        aside: `${item.articleCount}篇` // 这一分类对应的文章数量
      }))
    },
  },
  methods: {
    async fetchData() {
      return await getBlogCategories();
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      // 依据 当前的分类 id 和 当前的页容量 limit 和 新的页码 page 来重新设置路由信息
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>