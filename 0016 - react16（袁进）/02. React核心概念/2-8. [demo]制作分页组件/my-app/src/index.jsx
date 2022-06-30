import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
// import Test from "./components/common/StudentList/Test";
// import Test from "./components/common/Modal/Test";
import Test from "./components/common/Pager/Test";

// 测试接口
// import findStuByPage from "./services/findStuByPage";
import "./mock";
// findStuByPage(1, 3);

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Test />
  </>
);
