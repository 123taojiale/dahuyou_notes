import React from "react";
import { createRoot } from "react-dom/client";
import Test from "./components/common/Select/Test"

// 接口测试
// import getAllStudents from "./services/students";
// window.getAllStudents = getAllStudents;

const container = document.getElementById("root"),
  root = createRoot(container);

root.render(<>
  <Test />
</>);
