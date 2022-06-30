import "./mock";
import React from "react";
import "./styles/global.css";
import { createRoot } from "react-dom/client";
// import Test from "./components/common/Pager/Test";
import StudentContainer from "./StudentContainer";

const container = document.getElementById("root"),
  root = createRoot(container);

root.render(
  <>
    <StudentContainer />
  </>
);
