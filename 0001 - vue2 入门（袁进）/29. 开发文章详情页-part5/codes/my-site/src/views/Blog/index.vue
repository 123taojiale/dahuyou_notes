<template>
  <div class="blog-container">
    <Layout>
      <template #main>
        <div class="main">
          <BlogList />
        </div>
      </template>
      <template #right>
        <div class="right">
          <BlogCategory />
        </div>
      </template>
    </Layout>
  </div>
</template>

<style lang="less" scoped>
.blog-container {
  height: 100%;

  .main,
  .right {
    height: 100%;
  }
}
</style>

<script>
import Layout from "@/components/Layout";
import BlogList from "./components/BlogList.vue";
import BlogCategory from "./components/BlogCategory.vue";

export default {
  name: "Blog",
  components: { Layout, BlogList, BlogCategory },
};
</script>