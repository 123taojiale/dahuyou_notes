import request from './request.js';

/**
 * 获取博客列表数据
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
 * @returns 博客分类数据
 */
export async function getBlogCategories() {
  return await request.get("/api/blogtype");
}