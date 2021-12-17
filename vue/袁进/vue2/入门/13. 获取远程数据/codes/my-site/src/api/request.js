import axios from "axios";
import showMessage from '../utils/showMessage.js';

const ins = axios.create();

ins.interceptors.response.use((resp) => {
  if (resp.data.code !== 0) {
    showMessage({
      content: resp.data.msg,
      type: "error",
      duration: 1000,
    });
    return null;
  } else {
    return resp.data.data;
  }
})

export default ins;