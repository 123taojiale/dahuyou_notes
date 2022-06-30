import axios from "axios";

const appkey = "_abc123_1606358542486";

export const getAllStudents = async () => {
  const resp = await axios.get("/api/student/findAll", {
    params: {
      appkey,
    },
  });
  console.log('查询所有学生信息：', resp.data.data);
  return resp.data.data;
};

/**
 * 依据分页查找学生信息
 * @param {Number} page 第几页
 * @param {Number} size 每页多少条数据
 */
export const findStuByPage = async (page, size) => {
  const resp = await axios.get(`/api/student/findByPage`, {
    params: {
      appkey,
      page,
      size,
    },
  });
  console.log("请求到的数据：", resp.data.data);
  return resp.data.data;
};
