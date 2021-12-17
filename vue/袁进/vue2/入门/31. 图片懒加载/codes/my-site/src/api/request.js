import axios from "axios";
import showMessage from "@/utils/showMessage.js";

const ins = axios.create();

ins.interceptors.response.use((resp) => {
  if (resp.data.code !== 0) { // 发生了错误
    showMessage({
      content: resp.data.msg,
      duration: 1000,
      type: "error",
    });
    return null; // 返回 null
  } else { // 没有发生错误
    return resp.data.data; // 将业务数据返回
  }
});

export default ins;