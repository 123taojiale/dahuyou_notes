// 拦截分页获取学生信息的接口
import Mock from "mockjs";
import qs from "query-string";

Mock.mock(/\/api\/student\/findByPage(\?.+)?$/, "get", (options) => {
  const query = qs.parseUrl(options.url).query;
  return Mock.mock({
    msg: "查询成功",
    status: "success",
    data: {
      "cont|100-300": 0, // 数据总量
      [`findByPage|${query.size || 10}`]: [
        {
          address: "@region - @county(true)", // 所在地
          appkey: "_abc123_1606358542486", // appkey 写死
          birth: "@date(yyyy)", // 出生年月
          ctime: "@datetime(yyyy-MM-dd HH:mm:ss)", // 创建时间
          email: "@email", // 邮箱
          id: "@id",
          name: "@cname",
          "phone|10000000000-19999999999": 0,
          sNo: "@id",
          sex: () => (Math.random() > 0.5 ? 1 : 0), // 0 表示男生 1 表示女生
          utime: "@datetime(yyyy-MM-dd HH:mm:ss)", // 近期更新时间
        },
      ],
    },
  });
});
