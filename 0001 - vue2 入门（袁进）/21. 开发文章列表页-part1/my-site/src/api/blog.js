import request from "./request.js";

/**
 * 获取 博客 的远程接口数据
 * @param {Number} page 当前页码
 * @param {Number} limit 页容量
 * @param {Number} categoryid 所属分类，-1表示全部
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryid,
    }
  });
}

/**
 * 获取 所有博客分类 的远程接口数据
 */
export async function getBlogTypes() {
  return await request.get("/api/blogtype");
}