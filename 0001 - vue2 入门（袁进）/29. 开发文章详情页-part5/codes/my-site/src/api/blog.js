import request from './request.js';

/**
 * 获取博客列表数据
 * BlogList.vue
 * @param {Number} page 当前页码
 * @param {Number} limit 页容量
 * @param {Number} categoryId 分类 -1 表示获取所有分类
 * @returns 博客列表数据
 */
export async function getBlogs(page = 1, limit = 10, categoryId = -1) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryId,
    }
  });
}

/**
 * 获取博客分类数据
 * BlogCategory.vue
 * @returns 博客分类数据
 */
export async function getBlogCategories() {
  return await request.get("/api/blogtype");
}

/**
 * 获取博客详情页的数据
 * BlogDetail.vue
 * @param {*} id 某篇文章的具体 id 值
 * @returns 博客详情页的数据
 */
export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`);
}

/**
 * 提交评论
 * @param {Object} commentInfo 包含评论信息的一个对象
 * @returns 提交评论后接收到的返回结果
 */
export async function postComment(commentInfo) {
  return await request.post(`/api/comment`, commentInfo);
}

/**
 * 获取分页获取评论的数据
 * @param {*} blogid 所属文章，-1表示不限
 * @param {*} page 当前页码
 * @param {*} limit 页容量
 * @returns 分页获取评论的数据
 */
export async function getComments(blogid, page = 1, limit = 10) {
  return await request.get("/api/comment", {
    params: {
      blogid,
      page,
      limit,
    },
  });
}
