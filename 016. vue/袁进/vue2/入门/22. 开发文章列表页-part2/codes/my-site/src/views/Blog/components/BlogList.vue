<template>
  <div class="blog-list-container" v-loading="isLoading" ref="container">
    <!-- 列表 -->
    <ul class="lists">
      <li class="item" v-for="item in data.row" :key="item.id">
        <!-- 左侧缩略图 -->
        <div class="thumb" v-if="item.thumb">
          <a href="#">
            <img :src="item.thumb" :title="item.title" :alt="item.title" />
          </a>
        </div>
        <!-- 右侧内容 -->
        <div class="content">
          <!-- 标题 -->
          <a href="#">
            <h2 class="title">{{ item.title }}</h2>
          </a>
          <!-- 相关信息 -->
          <div class="infos">
            <span class="date">日期：{{ formatDate(item.createDate) }}</span>
            <span class="scan">浏览：{{ item.scanNumber }}</span>
            <span class="comment">评论：{{ item.commentNumber }}</span>
            <a href="/blog/cate/8">分类8</a>
          </div>
          <!-- 描述 -->
          <div class="desc">{{ item.description }}</div>
        </div>
      </li>
    </ul>

    <!-- 翻页组件 -->
    <div class="pager">
      <Pager
        v-if="data.total"
        :total="data.total"
        :limit="routerInfo.limit"
        :current="routerInfo.curPage"
        :visibleNumber="10"
        @pageChange="handlePageChange"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.blog-list-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
  line-height: 1.7;
  scroll-behavior: smooth;
}

// 每一个子项的样式
.item {
  box-sizing: border-box;
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;

  // 缩略图
  .thumb {
    flex: none;
    margin-right: 15px;
    img {
      width: 200px;
      display: block;
      border-radius: 5px;
    }
  }

  // 右侧内容
  .content {
    flex: auto;

    // 标题
    .title {
      margin: 0;
      line-height: 40px;
    }

    // 信息
    .infos {
      color: @gray;
      font-size: 12px;
      span {
        margin-right: 15px;
      }
    }

    // 描述
    .desc {
      margin: 15px 0;
      font-size: 14px;
    }
  }
}

// 翻页组件
.pager {
  margin: 1em 0;
}
</style>

<script>
import fetchData from "@/mixins/fetchData.js";
import { getBlogs } from "@/api/blog.js";
import { formatDate } from "@/utils";
import Pager from "@/components/Pager";

export default {
  components: {
    Pager,
  },
  mixins: [fetchData({})],
  methods: {
    formatDate,
    // 获取接口数据
    async fetchData() {
      return getBlogs(
        this.routerInfo.page,
        this.routerInfo.limit,
        this.routerInfo.categoryId
      );
    },
    // 若页码发生了改变，则重置路由，重新获取相关数据来渲染页面
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routerInfo.limit,
      };
      // 跳转
      if (this.routerInfo.categoryId === -1) {
        // 若当前没有分类，则跳转到 /article?page=${newPage}&limit=${this.routerInfo.limit}
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // 若当前有分类，则跳转到 /article/cate/${this.routerInfo.categoryId}?page=${newPage}&limit=${this.routerInfo.limit}
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routerInfo.categoryId,
          },
        });
      }
    },
  },
  computed: {
    routerInfo() {
      const categoryId = +this.$route.params.categoryId || -1; // 文章的分类 默认为所有分类
      const curPage = +this.$route.query.page || 1; // 当前页 默认为第一页
      const limit = +this.$route.query.limit || 10; // 页容量，默认一页是10条数据
      return {
        categoryId,
        curPage,
        limit,
      };
    },
  },
  watch: {
    async $route() {
      this.isLoading = true;
      // 滚动高度为 0
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    }
  },
};
</script>