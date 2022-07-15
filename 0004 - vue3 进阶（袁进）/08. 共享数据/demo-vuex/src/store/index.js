import loginUser from "./loginUser";
import { createStore, createLogger } from "vuex";
export default createStore({
  modules: {
    loginUser,
  },
  plugins: [createLogger()],
  // createLogger 这是个啥玩意儿，一会好好听听  
});
