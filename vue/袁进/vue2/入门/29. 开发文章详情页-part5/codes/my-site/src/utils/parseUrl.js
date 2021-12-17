/**
 * 解析地址栏参数
 * 输入 "/api/blog?page=1&limit=10&categoryid=-1"
 * 输出 {page: "1", limit: "10", categoryid: "-1"}
 */
export default (url) => {
  const result = {};
  url.split("?")[1].split("&").forEach(it => {
    const arr = it.split("=");
    result[arr[0]] = arr[1];
  });
  return result;
}