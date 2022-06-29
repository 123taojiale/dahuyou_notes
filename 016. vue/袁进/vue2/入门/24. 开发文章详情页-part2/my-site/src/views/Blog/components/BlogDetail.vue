<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span class="item">日期：{{ formatDate(blog.createDate) }}</span>
      <span class="item">浏览：{{ blog.scanNumber }}</span>
      <a class="item" href="#">评论：{{ blog.commentNumber }}</a>
      <a class="item" href="#">{{ blog.category.name }}</a>
    </div>
    <div v-html="blog.htmlContent" class="htmlContent" ref="markdown"></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
import "highlight.js/styles/github.css"; // 代码高亮显示
import styles from "@/styles/markdown.module.less"; // 给通过 markdown 转换而来的 html 添加样式
// 开启 css module 的好处：为了防止选择器之间的冲突，若直接导入的话，那默认是没有开启 css module 的。

export default {
  props: ["blog"],
  methods: {
    formatDate,
  },
  mounted () {
    this.$refs.markdown.classList.add(styles["markdown-body"]);
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.aside {
  font-size: 12px;
  color: @gray;

  .item {
    margin-right: 15px;
  }
}

.htmlContent {
  margin: 2em 0;
}
</style>