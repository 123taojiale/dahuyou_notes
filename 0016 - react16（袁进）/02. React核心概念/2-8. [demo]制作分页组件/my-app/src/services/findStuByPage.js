import axios from "axios";

const domain = "https://open.duyiedu.com",
  url = "/api/student/findByPage",
  appkey = "_abc123_1606358542486";

/**
 * 依据分页查找学生信息
 * @param {Number} page 第几页
 * @param {Number} size 每页多少条数据
 */
const findStuByPage = async (page, size) => {
  const resp = await axios.get(`${domain}${url}`, {
    params: {
      appkey,
      page,
      size
    },
  });
  console.log("请求到的数据：", resp.data.data);
  return resp.data.data;
};

export default findStuByPage;
